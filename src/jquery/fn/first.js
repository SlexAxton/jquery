define('jquery/core/first', ['jquery/core', 'jquery/fn/eq'], function (jQuery) {
  return jQuery.fn.first = function() {
    return this.eq( 0 );
  };
});