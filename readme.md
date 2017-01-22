#Qlik Sense Story Timeline

MOVINGIMAGE
MOVINGIMAGE
MOVINGIMAGE

DOWNLOAD FORM

Add interactive timelines into qlik sense.

This extension lets you create stunning visual, media rich, timelines into Qlik Sense.

Media types include Images, Youtube videos, Google Maps, Wikipedia posts, Soundcloud, Tweets, Flickr, Vimeo, Vine, Dailymotion, SoundCloud, Document Cloud and more!


Example Use cases:
- Project management - view the stages of the project
- Customer relationship management - show interactions with your customers!
- Historic story boards - bring history alive
- Political timelines - monitor elections
- Monitoring social media events on a timeline
- There are hundreds of uses! It is down to your imagination :p


##Prerequisites
- Qlik Sense 2.2 or higher

##Step 1 - Install the extension
- For Qlik Sense Desktop - Download the zip file from this github repository, unzip the file and drop the storytime folder into C:\Users\[USERNAME]\Documents\Qlik\Sense\Extensions\ 

- For Qlik Sense Server - Download the zip file from this github repository and upload the zip file through the Qlik Management Console (QMC) on the extensions tab

##Step 2 - Add the extension into Qlik Sense App and add dimensions

Open the app you want a timeline in and drag drop the 'Vizlib Timeline' extension.


####Timeline Landing Page


These options let you customise the landing page. The landing page is the first view of the extension when the page is loaded or a selection is made.

1. *Landing Headline* - **Optional** - This is the heading title name on the extension
2. *Landing Text Description* - **Optional** - This appear under the landing headline or to the right of the media if media is present. Recommended
3. *Media URL* - **Optional** - This is a video or image this can be a youtube link address, dropbox pdf or an image such as png, jpg etc
4. *Media Caption* - **Optional** - This is the caption that shows under the media item (only appears when media item is specified)
5. *Media Credits* - **Optional** - This is credit that shows to the bottom left of the media item (only appears when media item is specified)

###Dimensions
1. *An Event Name* - **Required**
2. *Event Start Date* - **Required** - This can be any Qlik field as long as it is tagged as a $timestamp.
3. *Event End Date* - **Optional** - This can be any Qlik field as long as it is tagged as a $timestamp.


###Measures

The extension has the following optional measures that add addional features. You can usually just put the field in without any calculation or by using the only() function.

Simply go to the measure panel, add a measure and select the 'Timeline Setting Type'.

**These settings are OPTIONAL**

The various setting types are described below and in this image:

1. *Text Description* - This is the text description that will show up under the Event Name in the timeline.
2. *Event Media url* - This is the URL to the media such as an image
3. *Event Media caption*
4. *Event Media credit*
5. *Event thumbnail*
6. *Event group*
7. *Event background* - This can be either a hex color value, e.g. #333333 or a URL to an image.

IMAGE

####Copyright
2016-2017 © Vizlib Ltd. - All rights reserved.
