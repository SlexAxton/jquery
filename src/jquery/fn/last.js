define('jquery/fn/last', ['jquery/core','jquery/fn/eq'], function (jQuery) {
  return jQuery.fn.last = function() {
    return this.eq( -1 );
  };
});