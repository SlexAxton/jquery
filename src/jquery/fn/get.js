define('jquery/fn/get', ['jquery/core', 'jquery/fn/toArray'], function( jQuery ){
  // Get the Nth element in the matched element set OR
  // Get the whole matched element set as a clean array
  return jQuery.fn.get = function( num ) {
    return num == null ?

      // Return a 'clean' array
      this.toArray() :

      // Return just the object
      ( num < 0 ? this[ this.length + num ] : this[ num ] );
  };
});