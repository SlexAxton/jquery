define('jquery/core/isFunction', ['jquery/core', 'jquery/core/type'], function (jQuery) {
  // See test/unit/core.js for details concerning isFunction.
  // Since version 1.3, DOM methods and functions like alert
  // aren't supported. They return false on IE (#2968).
  return jQuery.isFunction = function( obj ) {
    return jQuery.type(obj) === "function";
  };
});