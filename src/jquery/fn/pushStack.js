define('jquery/fn/pushStack', ['jquery/core','jquery/core/isArray','jquery/core/merge','jquery/util/push'], function(jQuery, jQuery_isArray, jQuery_merge, push){
  // Take an array of elements and push it onto the stack
  // (returning the new matched element set)
  return jQuery.fn.pushStack = function( elems, name, selector ) {
    // Build a new jQuery matched element set
    var ret = this.constructor();

    if ( jQuery_isArray( elems ) ) {
      push.apply( ret, elems );

    } else {
      jQuery_merge( ret, elems );
    }

    // Add the old object onto the stack (as a reference)
    ret.prevObject = this;

    ret.context = this.context;

    if ( name === "find" ) {
      ret.selector = this.selector + ( this.selector ? " " : "" ) + selector;
    } else if ( name ) {
      ret.selector = this.selector + "." + name + "(" + selector + ")";
    }

    // Return the newly-formed element set
    return ret;
  };
});