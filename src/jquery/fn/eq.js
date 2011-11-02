define('jquery/fn/eq', ['jquery/core', 'jquery/fn/slice'], function (jQuery) {
  return jQuery.fn.eq = function( i ) {
    return i === -1 ?
      this.slice( i ) :
      this.slice( i, +i + 1 );
  };
});