define('jquery/core/isArray', ['jquery/core', 'jquery/core/type'], function(jQuery, jQuery_type){
  return jQuery.isArray = Array.isArray || function( obj ) {
    return jQuery_type(obj) === "array";
  };
});