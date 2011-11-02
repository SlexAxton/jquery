define('jquery/core/isReady', ['jquery/core'], function (jQuery) {
  // Is the DOM ready to be used? Set to true once it occurs.
  return jQuery.isReady = false;
});