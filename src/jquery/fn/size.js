// The number of elements contained in the matched element set
define('jquery/fn/size', ['jquery/core'], function( jQuery ){
  return jQuery.fn.size = function() {
    return this.length;
  };
});