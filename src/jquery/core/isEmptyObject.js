define('jquery/core/isEmptyObject', ['jquery/core'], function (jQuery) {
  return jQuery.isEmptyObject = function( obj ) {
    for ( var name in obj ) {
      return false;
    }
    return true;
  };
});