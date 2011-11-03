define('jquery/core/now', ['jquery/core'], function (jQuery) {
  return jQuery.now = function() {
    return ( new Date() ).getTime();
  };
});