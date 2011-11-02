define('jquery/fn/each', ['jquery/core', 'jquery/core/each'], function (jQuery) {
  // Execute a callback for every element in the matched set.
  // (You can seed the arguments with an array of args, but this is
  // only used internally.)
  return jQuery.fn.each = function( callback, args ) {
    return jQuery.each( this, callback, args );
  };
};