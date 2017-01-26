define([], function() {
    'use strict';


    // *****************************************************************************
    // Settings section
    // *****************************************************************************
    var appearanceSection = {
        uses: "settings"
    };

    var timelineSettings = {
                type: "items",
                label: "Timeline Appearance",
                ref: "timelinesettings",
        items: {
            timelinedefault: {
                type: "items",
                label: "Timeline Defaults",
                ref: "timelinedefault",
                items: {
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
                        max: 1,
                        step: 0.1,
                        defaultValue: [0.25],
                        show: function(data) {
                            
                            return !data.timenavheightmode;
                        }
                    },
                    duration: {
                        type: "number",
                        component: "slider",
                        label: "Slide Transition Speed",
                        ref: "timelinedefault.duration",
                        min: 1,
                        max: 3000,
                        step: 1,
                        defaultValue: [1000]
                    },
                    marker_height_min: {
                        ref: "timelinedefault.marker_height_min",
                        label: "Event Market Min Height",
                        type: "number",
                        expression: "optional",
                        defaultValue: 50
                    },
                    marker_width_min: {
                        ref: "timelinedefault.marker_width_min",
                        label: "Event Market Min Width",
                        type: "number",
                        expression: "optional",
                        defaultValue: 10
                    },
                    start_at_slide: {
                        ref: "timelinedefault.start_at_slide",
                        label: "Starting Event Number",
                        type: "number",
                        expression: "optional",
                        defaultValue: 0
                    },
                    initial_zoom: {
                        type: "number",
                        component: "slider",
                        label: "Initial Time Zoom",
                        ref: "timelinedefault.initial_zoom",
                        min: 0.5,
                        max: 89,
                        step: 0.5,
                        defaultValue: [2]
                    }
                }
            }
        }
    };

/*





*/

    var timelineSection = {
        label: "Timeline Landing Page",
        type: "items",
        items: {
            landingpage: {
                type: "items",
                label: "Landing Page Info",
                ref: "LandingPageInfo",
                items: {
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
                    }
                }
            }
        }
    };

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
        label: function(data) {
            return "About " + data.extensionMeta.name
        },
        type: "items",
        items: {
            aboutsettings: {
                ref: "aboutsettings",
                type: "string",
                component: {
                    template: '<div style="width:95%; text-align: left;"><img id="aboutsection_image" style="max-width:250px;max-height:80px"></div>' +
                        '<i><div id="aboutsection_version" style="width:95%; text-align: right; font-size:10px; margin-right:10px; color: #667dbc"></div></i>' +
                        '<i><div id="aboutsection_email" style="width:95%; text-align: center; font-size:13px; margin-right:10px; color: #667dbc"></div></i>',
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
            timeline: timelineSection,
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
                                $('.settingdescription').html(c.data.qDef.settingtype);
                                //console.log(c.data.qDef.settingtype);

                            }]
                        }
                    }
                }
            },
            timelinesettings: timelineSettings,
            sorting: {
                uses: "sorting"
            },
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
