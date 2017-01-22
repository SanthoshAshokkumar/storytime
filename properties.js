define([], function() {
    'use strict';


    // *****************************************************************************
    // Settings section
    // *****************************************************************************
    var appearanceSection = {
        uses: "settings"
    };

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
                        expression: "optional"
                    },
                    landingpage_text: {
                        ref: "storydata.title.text.text",
                        label: "Title Description",
                        type: "string",
                        expression: "optional"
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
                            console.log(data);
                            return data.landingmedia;
                        }
                    },
                    landingpage_caption: {
                        ref: "storydata.title.media.caption",
                        label: "Media Caption",
                        type: "string",
                        expression: "optional",
                        show: function(data) {
                            console.log(data);
                            return data.landingmedia;
                        }
                    },
                    landingpage_credit: {
                        ref: "storydata.title.media.credit",
                        label: "Media Credits",
                        type: "string",
                        expression: "optional",
                        show: function(data) {
                            console.log(data);
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
            label: "grouping"
        }]
    };

    /********* About *********/
    var sectionAbout = {
        label: function(data) {
            return "About " + data.extensionMeta.name
        },
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
                    propertyType: propertyType
                }
            },
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
