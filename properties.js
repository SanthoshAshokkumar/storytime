define([], function() {
    'use strict';


    // *****************************************************************************
    // Settings section
    // *****************************************************************************
    var appearanceSection = {
        uses: "settings"
    };

    var timelinedefault = {
        default_bg_color: {
            ref: "timelinedefault.default_bg_color",
            label: "Default Background Color",
            type: "string",
            expression: "optional",
            defaultValue: "#ffffff"
        },
        timenav_position: {
            type: "string",
            component: "dropdown",
            label: "Navigation Position",
            ref: "timelinedefault.timenav_position",
            defaultValue: "bottom",
            options: [{
                value: "top",
                label: "Top"
            }, {
                value: "bottom",
                label: "Bottom"
            }]
        },
        tick_width: {
            ref: "timelinedefault.tick_width",
            label: "Optimal Tick Width",
            type: "number",
            expression: "optional",
            defaultValue: 100
        },
        timenavheightmode: {
            label: "Set Timenav Height",
            ref: "timenavheightmode",
            type: "boolean",
            component: "switch",
            options: [{
                value: true,
                label: "Use Pixels (px)"
            }, {
                value: false,
                label: "Use Percentage (%)"
            }],
            defaultValue: false
        },
        timenav_height: {
            ref: "timelinedefault.timenav_height",
            label: "Time Nav Height (px)",
            type: "number",
            expression: "optional",
            defaultValue: 150,
            show: function(data) {

                return data.timenavheightmode;
            }
        },
        timenav_height_percentage: {
            type: "number",
            component: "slider",
            label: "Time Nav Height (%)",
            ref: "timelinedefault.timenav_height_percentage",
            min: 0,
            max: 100,
            step: 1,
            defaultValue: [25],
            show: function(data) {

                return !data.timenavheightmode;
            }
        }
    };



    var timelinelanding = {
        landingpage_headline: {
            ref: "storydata.title.text.headline",
            label: "Title",
            type: "string",
            expression: "optional",
            defaultValue: "Vizlib Timeline Landing Page"
        },
        landingpage_text: {
            ref: "storydata.title.text.text",
            label: "Title Description",
            type: "string",
            expression: "optional",
            defaultValue: "Add some measures to control story content look and feel!"
        },
        landingmedia: {
            label: "Use media on landing page",
            ref: "landingmedia",
            type: "boolean",
            component: "switch",
            options: [{
                value: true,
                label: "Yes"
            }, {
                value: false,
                label: "No"
            }],
            defaultValue: false
        },
        landingpage_url: {
            ref: "storydata.title.media.url",
            label: "Media URL",
            type: "string",
            expression: "optional",
            show: function(data) {

                return data.landingmedia;
            }
        },
        landingpage_caption: {
            ref: "storydata.title.media.caption",
            label: "Media Caption",
            type: "string",
            expression: "optional",
            show: function(data) {

                return data.landingmedia;
            }
        },
        landingpage_credit: {
            ref: "storydata.title.media.credit",
            label: "Media Credits",
            type: "string",
            expression: "optional",
            show: function(data) {

                return data.landingmedia;
            }
        },
        start_at_slide: {
            ref: "timelinedefault.start_at_slide",
            label: "Starting Event Number",
            type: "number",
            expression: "optional",
            defaultValue: 0
        }
    };


// Define a custom section
var timelinesettings = {
        component: "expandable-items",
        label: "Timeline Settings",
        items: {
            timelinelanding: {
                type: "items",
                label: "Landing Page",
                items: timelinelanding
            },
            timelinedefault: {
                type: "items",
                label: "Timeline Appearance",
                items: timelinedefault
            }
        }
    }



    var propertyType = {
        type: "string",
        component: "dropdown",
        label: "Timeline Setting Type",
        ref: "qDef.settingtype",
        options: [{
            value: "description",
            label: "Description"
        }, {
            value: "background_img_color",
            label: "Background Image or Color"
        }, {
            value: "background_opacity",
            label: "Background Opacity"
        }, {
            value: "media_caption",
            label: "Media Caption"
        }, {
            value: "media_credit",
            label: "Media Credit"
        }, {
            value: "media_thumb",
            label: "Media Thumbnail"
        }, {
            value: "media_url",
            label: "Media URL"
        }, {
            value: "grouping",
            label: "Grouping"
        }]
    };


    /********* About *********/
    var sectionAbout = {
        label: "About Vizlib Advanced Text Object",
        type: "items",
        items: {
            iconPicker: {
                ref: "props.iconpicker",
                type: "string",
                component: {
                    template: '<div style="width:95%; text-align: left;"><img id="aboutsection_image" style="max-width:250px"></div>' +
                        '<i><div id="aboutsection_version" style="width:95%; text-align: right; font-size:10px; margin-right:10px; color: #667dbc "></div></i>' +
                        '<i><div id="aboutsection_email" style="width:95%; text-align: center; font-size:13px; margin-right:10px; color: #667dbc "></div></i>',
                    controller: ["$scope", "$element", function(c, e) {
                        $('#aboutsection_image').attr('src', '../extensions/' + c.data.extensionMeta.template + '/' + c.data.extensionMeta.preview)
                        $('#aboutsection_image').attr('alt', c.data.extensionMeta.name)
                        $('#aboutsection_email').html(c.data.extensionMeta.email)
                        $('#aboutsection_version').html(c.data.extensionMeta.version)
                    }]
                }
            }
        }
    }

    // *****************************************************************************
    // Main properties panel definition
    // Only what is defined here is returned from properties.js
    // *****************************************************************************
    return {
        type: "items",
        component: "accordion",
        items: {
            dimensions: {
                uses: "dimensions",
                min: 0,
                max: 3,
            },
            measures: {
                uses: "measures",
                min: 0,
                max: 9,
                items: {
                    propertyType: propertyType,
                    measuredescription: {
                        ref: "measuresetting",
                        type: "string",
                        component: {
                            template: "<div class='settingdescription'>asd</div>",
                            controller: ["$scope", "$element", function(c, e) {
                                $('.settingdescription').html("<i>Optional Settings:</i> <ul><li><b>Description</b> - This is the text description that will show up under the Event Name in the timeline.</li><li><b>Media URL</b> - This is the URL to the media such as an image</li><li><b>Media Caption</b> - A quote that appears under the media.</b></li><li><b>Media credit</b> - A small text that appears next to the media.</b></li><li><b>Event thumbnail</b> - A mini image that appears on the event icon in the timeline.</b></li><li><b>Grouping</b> - A grouping value that will position events in the same horizontal row.</li><li><b>Event background</b> - This can be either a hex color value, e.g. #333333 or a URL to an image.</li></ul>");
                                //console.log(c.data.qDef.settingtype);

                            }]
                        }
                    }
                }
            },
            timelinesettings: timelinesettings,
            settings: appearanceSection,
            addons: {
                uses: "addons",
                items: {
                    dataHandling: {
                        uses: "dataHandling"
                    }
                }
            },
            sectionAbout: sectionAbout
        }
    }
});
