#Qlik Sense Story Timeline

Control Sense using your Voice! Great for accessibility and funky demos

See full description and details at http://www.webofwork.com/qlik-sense-voice-control-extension-for-accessibility


Built for Qlik Sense 2.2.4>

Built by Adam Cooke (http://webofwork.com/)



##About:

This extension lets you create dynamic story board timelines using Qlik Sense Data. It is based on the powerful Timelinejs3 library.

it lets you embed youtube videos, tweets, dropbox pdfs, wikipedia pages and text stories into a time series and is a great way to tell a story.

Example Use cases:
1) Project management - view the stages of the project
2) Customer relationship management - show interactions with your customers!
3) Historic story boards - bring history alive
4) Political timelines - monitor elections
5) Monitoring social media events on a timeline
6) There are hundreds of uses! It is down to your imagination :p


MOVINGIMAGE


##Prerequisites
- Qlik Sense 2.1 or higher
- Your data needs at least An event date and Event name


##Required Settings

###Quick Start

The extension as a minimum requires three dimensions these are:

1) An Event Name - Required
2) Event Start Date - Required
3) Event End Date - Required

(Event start and end date could be the same thing)

You can simply use add these three dimenions and off you go!

##Optional Settings



###Measures

The extension has the following optional measures. Each of these corresponds to the event dimensions above. You can usually just put the field in without any calculation or by using the only() function.

These settings are OPTIONAL. However, if you want to use 'Event Group' but you do not have values for all the prior measures then put in blank measures with ='' to make it work.


4) Text Description - This is the text description that will show up under the Event Name in the timeline.
5) Event Media url - this is the media URL
6) Event Media caption
7) Event Media credit
8) Event thumbnail
9) Event group
10) Event background - This can be a


These measures need to be applied in the corresponding order:
IMAGE

###Appearance

####Landing Page Options


These options let you customise the landing page. The landing page is the first view of the extension when the page is loaded or a selection is made.

1) Media URL - Optional

This is a video or image this can be a youtube link address, dropbox pdf or an image such as png, jpg etc

2) Media Caption - Optional
This is the caption that shows under the media item (only appears when media item is specified)

3) Media Credits - Optional
This is credit that shows to the bottom left of the media item (only appears when media item is specified)

4) Landing Headline - Optional
This is the heading title name on the extension

5) Landing Text Description
This appear under the landing headline or to the right of the media if media is present. Recommended

###Switch Settings

This will enable you to use the switch or just have it turned on by default when the extension is on the page

###Notifications

This notifies the user in the extension what action the voice control has taken. This setting disables and enables it

###Selection Context Mode

When doing searches currently it is using CurrentSelections as the context mode by default, this can be changed in the settings. In this mode, the current selections are kept (if any). Search for one or more terms in the values of the app. New selections are made on top of the current selections. Other options are:

1. Cleared: In this mode, the first step is to clear any current selections in the app. The second step is to search for one or more terms in the values of the app.

2. LockedFieldsOnly: In this mode, the search applies only to the values associated with the selections made in locked fields, ignoring selections in any unlocked field. If no locked fields, the behavior is identical to the Cleared context. You cannot make any new selections in a locked field. You can get search hits for the associated values of a locked field but you cannot get the search hits for the non associative values.

3. CurrentSelections (Default): In this mode, the current selections are kept (if any). Search for one or more terms in the values of the app. New selections are made on top of the current selections. If no selections were made before the search, this mode is identical to the Cleared context.


###Debug Mode

Debug mode will turn on/off the console logging inside the developer tools so you can see whats going on.


##Credits:
It uses the open source annyang voice recognition library.
https://www.talater.com/annyang/

###Other Contributors:
Nick Webster
Adeel Khaan
