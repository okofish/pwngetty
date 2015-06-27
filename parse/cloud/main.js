// make sure to modify and rename parse/config/global.json.CHANGEME


var xmlreader = require('cloud/xmlreader.js')

Parse.Cloud.define("getImageURL", function(request, response) {

  var embedsrc = request.params.iframe
  Parse.Cloud.httpRequest({
    url: embedsrc
  }).then(function(httpResponse) {
    xmlreader.read(httpResponse.text, function(err, res) {
      if (err) {
        console.error(err);
        response.error(err);
      }
      var imageattributes = res.html.body.section.div.figure.a.img.attributes()
      var imgsrc = imageattributes.src;
      var imgheight = imageattributes.height;
      var imgwidth = imageattributes.width;
      response.success({src: imgsrc, height: imgheight, width: imgwidth});
    });
  }, function(httpResponse) {
    // error
    console.error('Request failed with response code ' + httpResponse.status);
    if (httpResponse.status == 302) { // getty trying to redirect us to the error page. bad practice on their part, they should use a more specific error code
      response.error('Request failed with response code ' + httpResponse.status + '. Usually this means the embed code is invalid.')  // as far as i know you only get the 302 when theres a problem with the iframe src
    } else {
      response.error('Request failed with response code ' + httpResponse.status)
    }
  });
});
