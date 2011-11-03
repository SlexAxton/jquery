define('jquery/core/inArray', ['jquery/core', 'jquery/util/indexOf'], function (jQuery, indexOf) {
  return jQuery.inArray = function( elem, array, i ) {
    var len;

    if ( array ) {
      if ( indexOf ) {
        return indexOf.call( array, elem, i );
      }

      len = array.length;
      i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

      for ( ; i < len; i++ ) {
        // Skip accessing in sparse arrays
        if ( i in array && array[ i ] === elem ) {
          return i;
        }
      }
    }

    return -1;
  };
});