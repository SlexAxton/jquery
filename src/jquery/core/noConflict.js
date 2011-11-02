define('jquery/core/noConflict', ['jquery/core'], function (jQuery) {
  return jQuery.noConflict = function( deep ) {
    if ( window.$ === jQuery ) {
      window.$ = jQuery._$;
    }

    if ( deep && window.jQuery === jQuery ) {
      window.jQuery = jQuery._jQuery;
    }

    return jQuery;
  };
});