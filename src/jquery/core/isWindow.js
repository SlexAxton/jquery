define('jquery/core/isWindow', function () {
  // A crude way of determining if an object is a window
  // jQuery.isWindow =  done in core.js
  return function( obj ) {
    return obj && typeof obj === "object" && "setInterval" in obj;
  };
});