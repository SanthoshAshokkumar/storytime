#Qlik Sense Story Timeline

Add interactive timelines into qlik sense.

See full description and details at http://www.webofwork.com/qlik-sense-story-timeline-extension

Built for Qlik Sense 2.2.4>

Built by Adam Cooke (http://webofwork.com/)


##About:

Use the powerful associative data engine of Qlik Sense with the incredible coolness of the [Timelinejs3 library](https://timeline.knightlab.com/)

This extension lets you bring story timelinejs timelines into Qlik Sense and use Qlik Sense data.

TimelineJS is an open-source tool that enables anyone to build visually rich, interactive timelines.

TimelineJS can pull in media from a variety of sources. 
Twitter, Flickr, YouTube, Vimeo, Vine, Dailymotion, Google Maps, Wikipedia, SoundCloud, Document Cloud and more!

See some [Timelinejs3 examples](https://timeline.knightlab.com/#examples)


This extension lets you embed timelines inside Qlik Sense applications, combining two extremely powerful technologies to make something even better!:D

MOVINGIMAGE

Example Use cases:
- Project management - view the stages of the project
- Customer relationship management - show interactions with your customers!
- Historic story boards - bring history alive
- Political timelines - monitor elections
- Monitoring social media events on a timeline
- There are hundreds of uses! It is down to your imagination :p



##Prerequisites
- Qlik Sense 2.1 or higher



##Step 1 - Install the extension
- For Qlik Sense Desktop - Download the zip file from this github repository, unzip the file and drop the storytime folder into C:\Users\[USERNAME]\Documents\Qlik\Sense\Extensions\ 

- For Qlik Sense Server - Download the zip file from this github repository and upload the zip file through the Qlik Management Console (QMC) on the extensions tab

##Step 2 - Add the extension into Qlik Sense App and add dimensions

Open the app you want a timeline in and drag drop the 'storytime' extension.

The extension requires three dimensions and has optional measures.

###Dimensions
1. *An Event Name* - **Required**
2. *Event Start Date* - **Required** - This can be any formatted Date
3. *Event End Date* - **Required** - This can be any formatted Date

NOTE: Event start and end date could be the same thing if you don't have an end date. 

You can simply use add these three dimenions and off you go for extra jazz, use some of the optional settings.

##Step 3 - Add optional measures

###Measures

The extension has the following optional measures that add addional features. You can usually just put the field in without any calculation or by using the only() function.

**These settings are OPTIONAL**

1. *Text Description* - This is the text description that will show up under the Event Name in the timeline.
2. *Event Media url* - This is the media URL
3. *Event Media caption*
4. *Event Media credit*
5. *Event thumbnail*
6. *Event group*
7. *Event background* - This can be either a hex color value, e.g. #333333 or a URL to an image.

NOTE: These measures must be applied in the order shown above as this how the extension understands what they are. If you want to use 'Event Group' but you do not have values for all the prior measures then put in blank measures with ='' to make sure there are the correct number of measures.


IMAGE

#Step 4 - Modify the extension landing page
###Appearance

####Landing Page Options


These options let you customise the landing page. The landing page is the first view of the extension when the page is loaded or a selection is made.

1. *Media URL* - **Optional** - This is a video or image this can be a youtube link address, dropbox pdf or an image such as png, jpg etc
2. *Media Caption* - **Optional** - This is the caption that shows under the media item (only appears when media item is specified)
3. *Media Credits* - **Optional** - This is credit that shows to the bottom left of the media item (only appears when media item is specified)
4. *Landing Headline* - **Optional** - This is the heading title name on the extension
5. *Landing Text Description* - **Optional** - This appear under the landing headline or to the right of the media if media is present. Recommended


##Debug Mode

Debug mode will turn on/off the console logging inside the developer tools so you can see whats going on.


##Credits:
It uses the open source:
- http://momentjs.com/
- https://timeline.knightlab.com/