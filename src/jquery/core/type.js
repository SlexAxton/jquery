define('jquery/core/type', ['jquery/core', 'jquery/util/toString', 'jquery/core/class2type'], function(jQuery, toString, class2type){
  return jQuery.type = function( obj ) {
    return obj == null ?
      String( obj ) :
      class2type[ toString.call(obj) ] || "object";
  };
});