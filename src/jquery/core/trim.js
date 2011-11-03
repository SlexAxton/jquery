define('jquery/core/trim', ['jquery/core','jquery/util/trim'], function (jQuery, trim) {
  var   
  rnotwhite = /\S/,
  // Used for trimming whitespace
  trimLeft = /^\s+/,
  trimRight = /\s+$/;

  // IE doesn't match non-breaking spaces with \s
  if ( rnotwhite.test( "\xA0" ) ) {
    trimLeft = /^[\s\xA0]+/;
    trimRight = /[\s\xA0]+$/;
  }

  // Use native String.trim function wherever possible
  return jQuery.trim = (trim ? function( text ) {
      return text == null ?
        "" :
        trim.call( text );
    } :

    // Otherwise use our own trimming functionality
    function( text ) {
      return text == null ?
        "" :
        text.toString().replace( trimLeft, "" ).replace( trimRight, "" );
    });
});