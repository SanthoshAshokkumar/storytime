define([], function() {
    'use strict';


    // *****************************************************************************
    // Settings section
    // *****************************************************************************
    var appearanceSection = {
        uses: "settings"
    };

    var timelineSection = {
        label:"Timeline Landing Page",
        type: "items",
        items: {
            landingpage: {
                type: "items",
                label: "Landing Page Info",
                ref: "LandingPageInfo",
                items: {
                    landingpage_url: {
                        ref: "storydata.title.media.url",
                        label: "Media URL",
                        type: "string",
                        expression: "optional"
                    },
                    landingpage_caption: {
                        ref: "storydata.title.media.caption",
                        label: "Media Caption",
                        type: "string",
                        expression: "optional"
                    },
                    landingpage_credit: {
                        ref: "storydata.title.media.credit",
                        label: "Media Credits",
                        type: "string",
                        expression: "optional"
                    },
                    landingpage_headline: {
                        ref: "storydata.title.text.headline",
                        label: "Landing Headline",
                        type: "string",
                        expression: "optional"
                    },
                    landingpage_text: {
                        ref: "storydata.title.text.description",
                        label: "Landing Text Description",
                        type: "string",
                        expression: "optional"
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
        },
{
            value: "media_thumb",
            label: "Media Thumbnail"
        },
{
            value: "media_url",
            label: "Media URL"
        },
{
            value: "grouping",
            label: "grouping"
        }]
    };

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
                    propertyType: propertyType
                }
            },
            sorting: {
                uses: "sorting"
            },
            timeline: timelineSection,
            settings: appearanceSection,
            addons: {
                uses: "addons",
                items: {
                    dataHandling: {
                        uses: "dataHandling"
                    }
                }
            },

        }
    }
});
