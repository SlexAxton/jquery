define('jquery/core/merge', ['jquery/core'], function(jQuery){
  return jQuery.merge = function( first, second ) {
    var i = first.length,
      j = 0;

    if ( typeof second.length === "number" ) {
      for ( var l = second.length; j < l; j++ ) {
        first[ i++ ] = second[ j ];
      }

    } else {
      while ( second[j] !== undefined ) {
        first[ i++ ] = second[ j++ ];
      }
    }

    first.length = i;

    return first;
  };
});