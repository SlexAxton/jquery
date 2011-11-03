define('jquery/core/isFunction', ['jquery/core/type'], function (type) {
  // See test/unit/core.js for details concerning isFunction.
  // Since version 1.3, DOM methods and functions like alert
  // aren't supported. They return false on IE (#2968).

  // jQuery.isFunction = in core.js
  return function( obj ) {
    return type(obj) === "function";
  };
});