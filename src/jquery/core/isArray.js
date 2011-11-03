define('jquery/core/isArray', ['jquery/core/type'], function(type){
  // jQuery.isArray = done in core.js
  return Array.isArray || function( obj ) {
    return type(obj) === "array";
  };
});