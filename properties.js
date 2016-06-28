define([], function() {
    'use strict';


    // *****************************************************************************
    // Settings section
    // *****************************************************************************
    var appearanceSection = {
        uses: "settings",
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
            },
            debugmode: {
                type: "boolean",
                label: "Debug Mode",
                ref: "DebugMode",
                defaultValue: true
            }
        }
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
                min: 3,
                max: 3
            },
            measures: {
                uses: "measures",
                min: 0,
                max: 7
                    /*
                    	1. Measure: title text for hover popup (optional)
                    	2. Measure: CSS class name for styling or number 1 to 10 for class color-a = "QlikSense dark blue" to color-j = "Qlik Sense dark red" (optional)
                    	3. Measure: group name to group items in swim lanes (optional)						
                    */
            },
            Settings: appearanceSection,
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
