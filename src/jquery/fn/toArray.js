define('jquery/fn/toArray', ['jquery/core', 'jquery/util/slice'], function( jQuery, slice ){
  return jQuery.fn.toArray = function() {
    return slice.call( this, 0 );
  };
});