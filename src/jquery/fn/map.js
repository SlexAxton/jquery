define('jquery/fn/map', ['jquery/core','jquery/core/map','jquery/fn/pushStack'], function(jQuery) {
  return jQuery.fn.map = function( callback ) {
    return this.pushStack( jQuery.map(this, function( elem, i ) {
      return callback.call( elem, i, elem );
    }));
  };
});