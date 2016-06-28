define(["./properties", "qlik", "jquery", "client.utils/routing", "./js/timeline", "./js/moment"],
    function(Props, qlik, $, Routing, timelinejs, moment) {
        'use strict';
        $('<link rel="stylesheet" type="text/css" href="/extensions/storytime/css/timeline.css">').appendTo("head");
        //console.log(qlik);
        var app = qlik.currApp(this);
        //Function to enable console logging in debug mode.
        var logger = function() {
            var oldConsoleLog = null;
            var pub = {};
            pub.enableLogger = function enableLogger() {
                if (oldConsoleLog == null)
                    return;
                window['console']['log'] = oldConsoleLog;
            };

            pub.disableLogger = function disableLogger() {
                oldConsoleLog = console.log;
                window['console']['log'] = function() {};
            };
            return pub;
        }();
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
            definition: Props,
            paint: function($element, layout) {



                    var qData = layout.qHyperCube.qDataPages[0].qMatrix;

                    console.log(qData);

                    var eventsarray = [];

                    //Loop through initial data array
                    var arrayLength = qData.length;

                    for (var i = 0; i < arrayLength; i++) {

                        console.log(qData[i][0].qText);


                        var storystartdate = moment('1899-12-30').add((qData[i][1].qNum * 86400000) + 1, 'milliseconds');


                        var start_date_formatted = {
                            day: storystartdate.format('D'),
                            hour: storystartdate.format('H'),
                            minute: storystartdate.format('m'),
                            month: storystartdate.format('M'),
                            second: storystartdate.format('s'),
                            year: storystartdate.format('YYYY')
                        };

                        /*
                                                var story = {
                                                    media: {
                                                        caption: qData[i][5].qText,
                                                        credit: qData[i][6].qText,
                                                        thumb: qData[i][7].qText,
                                                        url: qData[i][4].qText
                                                    },
                                                    start_date: {
                                                        day: "18",
                                                        format: "time",
                                                        format_short: "time_short",
                                                        hour: "17",
                                                        minute: "16",
                                                        month: "06",
                                                        second: "54",
                                                        year: "2014"
                                                    },
                                                    end_date: {
                                                        day: "18",
                                                        format: "time",
                                                        format_short: "time_short",
                                                        hour: "17",
                                                        minute: "16",
                                                        month: "06",
                                                        second: "54",
                                                        year: "2014"
                                                    },
                                                    text: {
                                                        headline: qData[i][0].qText,
                                                        text: qData[i][3].qText
                                                    }
                                                };

                        */

                        console.log('Data Item: ' + i)



                        //var storystartdate = console.log(moment(qData[i][0].qText).format('DD/MM/YYYY hh:nn:ss'));

                        //console.log(storystartdate);

                        console.log(qData[i][1].qNum);

                        //qData[i][1].qNum

                        var storystartdate = moment('1899-12-30').add((qData[i][1].qNum * 86400000) + 1, 'milliseconds');


                        var start_date_formatted = {
                            day: storystartdate.format('D'),
                            hour: storystartdate.format('H'),
                            minute: storystartdate.format('m'),
                            month: storystartdate.format('M'),
                            second: storystartdate.format('s'),
                            year: storystartdate.format('YYYY')
                        };

                        var storyenddate = moment('1899-12-30').add((qData[i][2].qNum * 86400000) + 1, 'milliseconds');

                        var end_date_formatted = {
                            day: storyenddate.format('D'),
                            hour: storyenddate.format('H'),
                            minute: storyenddate.format('m'),
                            month: storyenddate.format('M'),
                            second: storyenddate.format('s'),
                            year: storyenddate.format('YYYY')
                        };

                        console.log(end_date_formatted);


                        //storystart_month= storystartdate.format('M');

                        //Handle the optional measures
                        console.log(storystartdate);
                        console.log(storystartdate.format('H'));
                        if (typeof qData[i][4] != 'undefined') {
                            console.log('Media URL: ' + qData[i][4].qText);
                            var mediaurl = qData[i][4].qText;
                        } else {
                            var mediaurl = '';
                        }

                        if (typeof qData[i][5] != 'undefined') {
                            console.log('Media Caption: ' + qData[i][5].qText);
                            var mediacaption = qData[i][5].qText;
                        } else {
                            var mediacaption = '';
                        }

                        if (typeof qData[i][6] != 'undefined') {
                            console.log('Media Credit: ' + qData[i][6].qText);
                            var mediacredit = qData[i][6].qText;
                        } else {
                            var mediacredit = '';
                        }

                        if (typeof qData[i][7] != 'undefined') {
                            console.log('Media Thumb: ' + qData[i][7].qText);
                            var mediathumb = qData[i][7].qText;
                        } else {
                            var mediathumb = '';
                        }


                        if (typeof qData[i][8] != 'undefined') {
                            console.log('Story Group: ' + qData[i][8].qText);
                            var storygroup = qData[i][8].qText;
                        } else {
                            var storygroup = '';
                        }

                        if (typeof qData[i][9] != 'undefined') {
                            console.log('Story Background: ' + qData[i][9].qText);
                            var storybackground = qData[i][9].qText;
                        } else {
                            var storybackground = '';
                        }


                        if (typeof qData[i][3] != 'undefined') {
                            console.log('Text Description: ' + qData[i][3].qText);
                            var textdesc = qData[i][3].qText;
                        } else {
                            var textdesc = '';
                        }
                        console.log(storygroup);

                        var story = {
                            media: {
                                caption: mediacaption,
                                credit: mediacredit,
                                thumb: mediathumb,
                                url: mediaurl
                            },
                            start_date: start_date_formatted,
                            end_date: end_date_formatted,
                            group: storygroup,
                            background: {
                                opacity: "50",
                                url: storybackground,
                                color: storybackground
                            },
                            text: {
                                headline: qData[i][0].qText,
                                text: textdesc
                            }
                        };

 //"https://upload.wikimedia.org/wikipedia/commons/a/ad/Sui_Wendi_Tang.jpg"



                        eventsarray.push(story);




                        /*
                            //Dimensions
                        0) Event Name
                        1) Start Date
                        2) End Date
   
                        //Measures
                        3) Text Description
                        4) url
                        5) caption
                        6) credit
                        7) thumb
                        8) group
                        9) background
                        */



                    }


                    layout.storydata.events = eventsarray;

                    console.log(layout);

                    console.log('eventsarray');
                    console.log(eventsarray);

                    var HTMLcontent = '<div id="timeline"></div>';
                    $element.html(HTMLcontent);
                    var weddingjson = { "title": { "media": { "url": "https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/10881793_320292118175388_462216162_n.jpg", "caption": "", "credit": "" }, "text": { "headline": "#pagingthemarcels", "text": "" } }, "events": [{ "media": { "url": "https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/10561130_729427650453505_1665506649_n.jpg", "caption": "engagement", "credit": "@brightonkeller", "thumb": "https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/10561130_729427650453505_1665506649_n.jpg" }, "start_date": { "month": "06", "day": "18", "year": "2014", "hour": "17", "minute": "16", "second": "54" }, "text": { "headline": "Engagement", "text": "<p>Headed to my lil sis's engagement party...SO excited!!!! She's my favorite person in the world (besides my other love, @lelers123 😘) and I couldn't be more excited for cokes and Ryan (my future bro! 💁) cc: @ryanmarcel #pagingthemarcels</p>" } }, { "media": { "url": "https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/10483586_1465755386999289_1642245121_n.jpg", "caption": "dress_shopping", "credit": "@lelers123", "thumb": "https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/10483586_1465755386999289_1642245121_n.jpg" }, "start_date": { "month": "06", "day": "18", "year": "2014", "hour": "17", "minute": "17", "second": "24" }, "text": { "headline": "Dress Shopping", "text": "<p>Wedding dress shopping with the best 😘</p>" } }, { "media": { "url": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/10895444_1540122292893381_1378407766_n.jpg", "caption": "rehearsal_dinner", "credit": "@kirbydavis1", "thumb": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/10895444_1540122292893381_1378407766_n.jpg" }, "start_date": { "month": "06", "day": "18", "year": "2014", "hour": "17", "minute": "17", "second": "34" }, "text": { "headline": "Rehearsal Dinner", "text": "<p>So excited for @cocokeller to marry this awesome dude tomorrow! Love ya sista 🎊👯👰 #pagingtheMarcels</p>" } }, { "media": { "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/927468_1525740241044129_1664358214_n.jpg", "caption": "wedding_day", "credit": "@pavlichphoto", "thumb": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/927468_1525740241044129_1664358214_n.jpg" }, "start_date": { "month": "06", "day": "18", "year": "2014", "hour": "17", "minute": "17", "second": "44" }, "text": { "headline": "Wedding Day", "text": "<p>#46: Perfection is the word I'm seeing used to describe the Keller-Marcel wedding. Here a newly vowed family looks on as the fantastic midnight celebration unfolds. #bpphototop100 #pagingthemarcels #nye #midnight #2015 #wedding</p>" } }, { "media": { "url": "https://scontent.cdninstagram.com/hphotos-xta1/t51.2885-15/e15/928744_554641147972637_1323922608_n.jpg", "caption": "wedding_day", "credit": "@deekellerdesign", "thumb": "https://scontent.cdninstagram.com/hphotos-xta1/t51.2885-15/e15/928744_554641147972637_1323922608_n.jpg" }, "start_date": { "month": "06", "day": "18", "year": "2014", "hour": "17", "minute": "17", "second": "45" }, "text": { "headline": "Wedding Day", "text": "<p>Moments before the walk down the aisle, a sweet moment for my husband and daughter. It was an incredibly special moment for me having designed the dress for CoCo! #pagingthemarcels #southernwedding #marriedinthesouth</p>" } }, { "media": { "url": "https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/10865065_415766135240015_2107299712_n.jpg", "caption": "wedding_day", "credit": "@smmeeks88", "thumb": "https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/10865065_415766135240015_2107299712_n.jpg" }, "start_date": { "month": "06", "day": "18", "year": "2014", "hour": "17", "minute": "17", "second": "46" }, "text": { "headline": "Wedding Day", "text": "<p>Such an amazing time last night with this perfect little bridesmaid 😍 #pagingthemarcels @brightonkeller</p>" } }, { "media": { "url": "https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/10832149_1764592597100304_1510487833_n.jpg", "caption": "wedding_day", "credit": "@cat_crawford", "thumb": "https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/10832149_1764592597100304_1510487833_n.jpg" }, "start_date": { "month": "06", "day": "18", "year": "2014", "hour": "17", "minute": "17", "second": "47" }, "text": { "headline": "Wedding Day", "text": "<p>Watching my beautiful best friend say \"I do\" last night was the most amazing way to ring in the New Year! I love you so much Cocomo!! #pagingtheMarcels</p>" } }, { "media": { "url": "https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/10881793_320292118175388_462216162_n.jpg", "caption": "wedding_day", "credit": "@deekellerdesign", "thumb": "https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/10881793_320292118175388_462216162_n.jpg" }, "start_date": { "month": "06", "day": "18", "year": "2014", "hour": "17", "minute": "17", "second": "48" }, "text": { "headline": "Wedding Day", "text": "<p>Tonight's the night! My daughter CoCo is getting married! #pagingtheMarcels #southernweddings #marriedinthesouth</p>" } }, { "media": { "url": "https://scontent.cdninstagram.com/hphotos-xtp1/t51.2885-15/e15/10895365_294483500761274_1154542052_n.jpg", "caption": "wedding_day", "credit": "@brightonkeller", "thumb": "https://scontent.cdninstagram.com/hphotos-xtp1/t51.2885-15/e15/10895365_294483500761274_1154542052_n.jpg" }, "start_date": { "month": "06", "day": "18", "year": "2014", "hour": "17", "minute": "17", "second": "49" }, "text": { "headline": "Wedding Day", "text": "<p>Building tents, ironing napkins, moving mud, planting trees, hanging chandeliers, and stuff 💁 We're ALL getting ready over here at the Keller Kasa for my sister's BIG DAY tomorrow 😍🙌👰👰 // @liketoknow.it www.liketk.it/M7za #liketkit #ootd</p>" } }, { "media": { "url": "https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e15/10554233_740063832702074_1149402378_n.jpg", "caption": "wedding_day", "credit": "@deekellerdesign", "thumb": "https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e15/10554233_740063832702074_1149402378_n.jpg" }, "start_date": { "month": "06", "day": "18", "year": "2014", "hour": "17", "minute": "17", "second": "50" }, "text": { "headline": "Wedding Day", "text": "<p>I can't believe my little coco-mo is getting married! Having so much fun celebrating tonight at her engagement party ☺️ ...such a sweet and special moment between my two oldest girls 😊 #pagingthemarcels</p>" } }, { "media": { "url": "https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/10507905_767817206574032_889102882_n.jpg", "caption": "wedding_day", "credit": "@deekellerdesign", "thumb": "https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/10507905_767817206574032_889102882_n.jpg" }, "start_date": { "month": "06", "day": "18", "year": "2014", "hour": "17", "minute": "17", "second": "51" }, "text": { "headline": "Wedding Day", "text": "<p>Helping my daughter Coco finalize her wedding china! What do you think?! #pagingthemarcels</p>" } }, { "media": { "url": "https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e15/10454092_254603148080546_1832400923_n.jpg", "caption": "wedding_day", "credit": "@deekellerdesign", "thumb": "https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e15/10454092_254603148080546_1832400923_n.jpg" }, "start_date": { "month": "06", "day": "18", "year": "2014", "hour": "17", "minute": "17", "second": "52" }, "text": { "headline": "Wedding Day", "text": "<p>To have and to HOLD 😍 ...helping my daughter coco find the perfect dress 👗🎀💄and I think we decided on #pagingtheMarcels - thanks for all hour help y'all!!</p>" } }, { "media": { "url": "https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e15/10919669_1545228029085951_1022116326_n.jpg", "caption": "throw_back", "credit": "@deekellerdesign", "thumb": "https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e15/10919669_1545228029085951_1022116326_n.jpg" }, "start_date": { "month": "06", "day": "18", "year": "2014", "hour": "17", "minute": "18", "second": "14" }, "text": { "headline": "Throw Back Thursday", "text": "<p>A little #Tbt to my daughter's wedding! Me with my precious girls! Love this shot captured by @pavlichphoto #marriedinthesouth #southernweddings #deekellerdesigns</p>" } }] };


                    var timeline = new TL.Timeline('timeline', layout.storydata);

                    console.log(weddingjson);

                    if (layout.DebugMode == undefined) {
                        var debugmode = false;
                    } else {
                        var debugmode = layout.DebugMode;
                    }
                    if (debugmode == true) {
                        logger.enableLogger();
                    } else {
                        logger.disableLogger();
                    }

                } //end return
                ////////////////////////////////////////////////////////
        } //close function
    }
); //close define
