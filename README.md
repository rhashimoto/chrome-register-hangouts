# chrome-register-hangouts
This is a Chrome extension to invoke Google Hangouts on tel: links.

Web pages can include URLs like `tel:1-800-555-1234` that can be clicked to make a phone call.
For example, the info cards for Google Maps locations uses tel: links for phone numbers.
On Mac, by default Chrome invokes FaceTime to make calls. I prefer to use Google Hangouts (not
sure what the default is for other platforms), and this extension can enable that.

To enable this behavior, install it and follow the instructions on the options page.

As far as I know, Google Hangouts does not have a supported API to place phone calls. I did
some minor reverse engineering to generate a Hangouts URL that works, but be warned that this
could break.

The extension icon incorporates a
[phone handset silhouette](https://commons.wikimedia.org/wiki/File:Phone_font_awesome.svg)
from [Font Awesome](https://fortawesome.github.com/Font-Awesome) by Dave Gandy
and is licensed under the
[Creative Commons Attribution-Share Alike 3.0 Unported](https://creativecommons.org/licenses/by-sa/3.0/deed.en)
license.
