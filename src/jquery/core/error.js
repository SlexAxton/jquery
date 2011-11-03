define('jquery/core/error', ['jquery/core'], function (jQuery) {
  return jQuery.error = function( msg ) {
    throw msg;
  };
});