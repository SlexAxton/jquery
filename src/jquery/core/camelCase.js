define('jquery/core/camelCase', ['jquery/core'], function (jQuery) {
  var

  // Matches dashed string for camelizing
  rdashAlpha = /-([a-z]|[0-9])/ig,
  rmsPrefix = /^-ms-/,

  // Used by jQuery.camelCase as callback to replace()
  fcamelCase = function( all, letter ) {
    return ( letter + "" ).toUpperCase();
  };
  
  // Convert dashed to camelCase; used by the css and data modules
  // Microsoft forgot to hump their vendor prefix (#9572)
  return jQuery.camelCase = function( string ) {
    return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
  };
});