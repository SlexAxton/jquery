define('jquery/core/isNumeric', ['jquery/core'], function (jQuery) {
  // Check for digits
  var rdigit = /\d/;
  return jQuery.isNumeric = function( obj ) {
    return obj != null && rdigit.test( obj ) && !isNaN( obj );
  };
});