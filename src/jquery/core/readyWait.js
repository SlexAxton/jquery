define('jquery/core/readyWait', ['jquery/core'], function (jQuery) {
  // A counter to track how many items to wait for before
  // the ready event fires. See #6781
  return jQuery.readyWait = 1;
});