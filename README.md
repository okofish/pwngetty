# pwngetty
**A demonstration of how stupidly easy it is to get unwatermarked medium-res images from Getty Images embed code.**

In March 2014 the world's leading stock photo company, Getty Images, announced that it would be making over 50 million of its images available to embed for noncommercial use. One might assume that they would be heavily-protected, maybe with complex obfuscated JavaScript or a Flash applet. It turns out, however, that they're just regular img tags!<sup>1</sup>

This application demonstrates the ease with which one can extract a low-to-medium-resolution copy of any embeddable image from Getty's catalog.

##### NOTICE: PLEASE PLEASE PLEASE PLEASE PLEASE DON'T STEAL THE IMAGES THIS PROGRAM EXTRACTS.

This project is designed solely to point out the design flaws in Getty's system, not to promote copyright violation. All of the images are still property of Getty. If you want them on your site, use the embed code or purchase rights to them.

## Instructions for use
*Note: you don't have to set this up yourself. There's a working copy at http://okofish.github.io/pwngetty.*

*Note 2: I fully acknowledge that these aren't very detailed instructions. A PR with a better version would be greatly appreciated.*

1. Register for an account at [Parse.com](http://parse.com), if you don't already have one.
2. Install the Parse command line tools.
3. Create a Parse application.
4. Initialize the application locally on your computer.
5. Copy this repo's `parse/cloud` directory to your Parse project's.
6. Edit the inline JavaScript in the head of this repo's index.html to use your Parse application's ID and JavaScript key.
7. (optional) Upload the client-side code in this repo to a server.

And you're done! Open index.html on your computer, or browse to its location on the server if you followed step 7.

----

<sup>1</sup>There is some kind of query string signature system in place to prevent bulk download, but I wouldn't be very reassured if I were a photographer.
