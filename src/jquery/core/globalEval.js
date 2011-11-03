define('jquery/core/globalEval', ['jquery/core'], function (jQuery) {
  // Check if a string has a non-whitespace character in it
  var rnotwhite = /\S/;
  // Evaluates a script in a global context
  // Workarounds based on findings by Jim Driscoll
  // http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
  return jQuery.globalEval = function( data ) {
    if ( data && rnotwhite.test( data ) ) {
      // We use execScript on Internet Explorer
      // We use an anonymous function so that context is window
      // rather than jQuery in Firefox
      ( window.execScript || function( data ) {
        window[ "eval" ].call( window, data );
      } )( data );
    }
  };
});