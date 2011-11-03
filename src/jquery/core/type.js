define('jquery/core/type', ['jquery/util/toString', 'jquery/core/class2type'], function(toString, class2type){
  // jQuery.type = is in core.js
  return function( obj ) {
    return obj == null ?
      String( obj ) :
      class2type[ toString.call(obj) ] || "object";
  };
});