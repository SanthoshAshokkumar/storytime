define(["./properties", "qlik", "jquery", "./utils", "./js/timeline", "./js/moment", "css!./lib/css/vizlib-timeline.css"],
    function(props, qlik, $, utils, timelinejs, moment) {
        'use strict';

        //console.log(qlik);
        var app = qlik.currApp(this);
        //Function to enable console logging in debug mode.

        return {
            // new object properties
            initialProperties: {
                version: 1.02,
                qHyperCubeDef: {
                    qDimensions: [],
                    qMeasures: [],
                    qDebugMode: true,
                    qInitialDataFetch: [{
                        qWidth: 9,
                        qHeight: 200
                    }]
                }
            },
            definition: props,
            paint: function($element, layout) {

                var helpline = '<p>Got a question? Please contact <a href="mailto:support@vizlib.com">support@vizlib.com<a></p>'

                //Number of dimensions


                var qData = layout.qHyperCube.qDataPages[0].qMatrix;

                var numberofdimensions = layout.qHyperCube.qDimensionInfo.length;

                if (numberofdimensions == 0) {

                    var error = '<h2>Lets create a Vizlib timeline!</h2><p> </p>Add up to three dimensions in this order:<p>   1) Event Start Date <b>Required</b></p><p>  2) Event Name or Identifier <b>Required</b></p><p>  3) Event End Date (Optional)</p>' + helpline;
                    $element.html(error);

                } else {


                    //Validate vizlib start date is a date time field.
                    if (layout.qHyperCube.qDimensionInfo["0"].qTags.indexOf("$timestamp") == -1) {
                        var dim1message = '<span style="color: orange;">Please select a valid date field<span>';
                        var dim1valid = false;
                    } else {
                        var dim1message = '<span style="color: green;">Ok<span>';

                        var dim1valid = true;


                    }

                    var dim2message = '';
                    //Check second dimension exists
                    if (numberofdimensions > 1) {
                        var dim2valid = true;
                        var dim2message = '<span style="color: green;">Ok<span>';
                    }

                    //If third dimension exists validate it is a date
                    var dim3valid = true;
                    var dim3message = '';
                    //Check second dimension exists
                    if (numberofdimensions == 3) {


                        if (layout.qHyperCube.qDimensionInfo["2"].qTags.indexOf("$timestamp") == -1) {
                            var dim3message = '<span style="color: orange;">Please select a valid date field<span>' + helpline;
                            var dim3valid = false;
                        } else {
                            var dim3message = '<span style="color: green;">Ok<span>';
                            var dim3valid = true;

                        }
                    }

                    if (dim1valid == true && dim2valid == true && dim3valid == true) {

                        ////////////Check for duplicate settings
                        var settingpositions = [];

                        //Loop through measures and get setting type positions in array.
                        for (var i = 0; i < layout.qHyperCube.qMeasureInfo.length; i++) {
                            settingpositions.push(layout.qHyperCube.qMeasureInfo[i].settingtype);
                        }

                        console.log('setting positions', settingpositions);

                        //Do check for duplicate settings to throw error
                        //Sort array
                        var sorted_arr = settingpositions.slice().sort();

                        var duplicatesettings = [];

                        for (var i = 0; i < settingpositions.length - 1; i++) {
                            if (sorted_arr[i + 1] == sorted_arr[i]) {
                                duplicatesettings.push(sorted_arr[i]);
                            }
                        }

                        console.log('DUPLICATES', duplicatesettings);

                        if (duplicatesettings.length != 0) {
                            var error = '<span style="color: orange;"><b>You have defined ' + duplicatesettings + ' twice in your measures! Please remove the duplicates.</b></span>' + helpline;
                            $element.html(error);
                        } else {

                            //$element.html('Generate Story');
                            generatetimeline($element, layout);

                        }
                        ////////////Check for duplicate settings



                    } else {
                        var error = '<h2>Lets create a Vizlib timeline!</h2><p> </p>Add up to three dimensions in this order:<p>   1) Event Start Date <b>Required ' + dim1message + '</b></p><p>  2) Event Name or Identifier <b>Required ' + dim2message + '</b></p><p>  3) Event End Date (Optional)  <b>' + dim3message + '</b></p>' + helpline;
                        $element.html(error);
                    }

                }


                function generatetimeline($element, layout) {

                    var eventsarray = [];

                    //Loop through initial data array
                    var arrayLength = qData.length;

                    var dimpad = (layout.qHyperCube.qDimensionInfo.length);

                    for (var i = 0; i < arrayLength; i++) {



                        var startdateraw = qData[i][0].qNum;

                        var storystartdate = moment('1899-12-30').add((startdateraw * 86400000) + 1, 'milliseconds');


                        var start_date_formatted = {
                            day: storystartdate.format('D'),
                            hour: storystartdate.format('H'),
                            minute: storystartdate.format('m'),
                            month: storystartdate.format('M'),
                            second: storystartdate.format('s'),
                            year: storystartdate.format('YYYY')
                        };


                        //Format end date if third dimension exists
                        if (numberofdimensions == 3) {
                            var storyenddate = moment('1899-12-30').add((qData[i][2].qNum * 86400000) + 1, 'milliseconds');

                            var end_date_formatted = {
                                day: storyenddate.format('D'),
                                hour: storyenddate.format('H'),
                                minute: storyenddate.format('m'),
                                month: storyenddate.format('M'),
                                second: storyenddate.format('s'),
                                year: storyenddate.format('YYYY')
                            };

                        } else {

                            var end_date_formatted = start_date_formatted;
                        }

                        //Loop through measures that are set and populate variable

                        if (settingpositions.indexOf("media_caption") == -1) {
                            //Not found in settings positions array
                            var media_caption = '';
                        } else {
                            if (typeof qData[i][dimpad + settingpositions.indexOf("media_caption")] != 'undefined') {

                                var media_caption = qData[i][dimpad + settingpositions.indexOf("media_caption")].qText;
                            } else {
                                //Measure created but not defined in Qlik
                                var media_caption = '';
                            }
                        }


                        console.log('media_caption', media_caption);





                        if (settingpositions.indexOf("media_credit") == -1) {
                            //Not found in settings positions array
                            var media_credit = '';
                        } else {
                            if (typeof qData[i][dimpad + settingpositions.indexOf("media_credit")] != 'undefined') {

                                var media_credit = qData[i][dimpad + settingpositions.indexOf("media_credit")].qText;
                            } else {
                                //Measure created but not defined in Qlik
                                var media_credit = '';
                            }
                        }

                        console.log('media_credit', media_credit);







                        if (settingpositions.indexOf("media_thumb") == -1) {
                            //Not found in settings positions array
                            var media_thumb = '';

                        } else {
                            if (typeof qData[i][dimpad + settingpositions.indexOf("media_thumb")] != 'undefined') {

                                var media_thumb = qData[i][dimpad + settingpositions.indexOf("media_thumb")].qText;
                            } else {
                                //Measure created but not defined in Qlik
                                var media_thumb = '';
                            }
                        }

                        console.log('media_thumb', media_thumb);







                        if (settingpositions.indexOf("grouping") == -1) {
                            //Not found in settings positions array
                            var grouping = '';
                        } else {
                            if (typeof qData[i][dimpad + settingpositions.indexOf("grouping")] != 'undefined') {

                                var grouping = qData[i][dimpad + settingpositions.indexOf("grouping")].qText;
                            } else {
                                //Measure created but not defined in Qlik
                                var grouping = '';
                            }
                        }

                        console.log('grouping', grouping);






                        if (settingpositions.indexOf("media_url") == -1) {
                            //Not found in settings positions array
                            var media_url = '';
                        } else {
                            if (typeof qData[i][dimpad + settingpositions.indexOf("media_url")] != 'undefined') {

                                var media_url = qData[i][dimpad + settingpositions.indexOf("media_url")].qText;
                            } else {
                                //Measure created but not defined in Qlik
                                var media_url = '';
                            }
                        }

                        console.log('media_url', media_url);







                        if (settingpositions.indexOf("background_opacity") == -1) {
                            //Not found in settings positions array
                            var background_opacity = '50';
                        } else {
                            if (typeof qData[i][dimpad + settingpositions.indexOf("background_opacity")] != 'undefined') {

                                var background_opacity = qData[i][dimpad + settingpositions.indexOf("background_opacity")].qText;
                            } else {
                                //Measure created but not defined in Qlik
                                var background_opacity = '50';
                            }
                        }

                        console.log('background_opacity', background_opacity);






                        if (settingpositions.indexOf("background_img_color") == -1) {
                            //Not found in settings positions array
                            var background_img_color = '';
                        } else {
                            if (typeof qData[i][dimpad + settingpositions.indexOf("background_img_color")] != 'undefined') {

                                var background_img_color = qData[i][dimpad + settingpositions.indexOf("background_img_color")].qText;
                            } else {
                                //Measure created but not defined in Qlik
                                var background_img_color = '';
                            }
                        }

                        console.log('background_img_color', background_img_color);







                        if (settingpositions.indexOf("description") == -1) {
                            //Not found in settings positions array
                            var description = '';
                        } else {
                            if (typeof qData[i][dimpad + settingpositions.indexOf("description")] != 'undefined') {

                                var description = qData[i][dimpad + settingpositions.indexOf("description")].qText;
                            } else {
                                //Measure created but not defined in Qlik
                                var description = '';
                            }
                        }

                        console.log('description', description);



                        var story = {
                            media: {
                                caption: media_caption,
                                credit: media_credit,
                                thumb: media_thumb,
                                url: media_url
                            },
                            start_date: start_date_formatted,
                            end_date: end_date_formatted,
                            group: grouping,
                            background: {
                                opacity: "50",
                                url: background_img_color,
                                color: background_img_color
                            },
                            text: {
                                headline: qData[i][1].qText,
                                text: description
                            }
                        };

                        eventsarray.push(story);

                        console.log(eventsarray);
                        //var storystartdate = console.log(moment(qData[i][0].qText).format('DD/MM/YYYY hh:nn:ss'));

                        //console.log(storystartdate);


                        //qData[i][1].qNum


                        layout.storydata.events = eventsarray;

                    }
                    var HTMLcontent = '<div id="timeline"></div>';
                    $element.html(HTMLcontent);

                    var timeline = new TL.Timeline('timeline', layout.storydata);


                }



            }


        } //end return
        ////////////////////////////////////////////////////////





    }); //close define
