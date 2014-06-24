
var CONTENT_ROOT = "http://content.guardianapis.com/football?api-key=ky5zy8mds5r25syu36t9kmzj";

module.exports.section = function fetchSection ($, sectionName, callback) {
  $.ajax({
    type: 'GET',
    url: CONTENT_ROOT + sectionName,
    contentType: "application/json",
    dataType: 'jsonp',
    success: callback
  });
};

