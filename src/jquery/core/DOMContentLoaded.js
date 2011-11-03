define('jquery/core/DOMContentLoaded', ['jquery/core', 'jquery/core/ready'], function(jQuery) {
  var DOMContentLoaded;

  // Cleanup functions for the document ready method
  if ( document.addEventListener ) {
    DOMContentLoaded = function() {
      document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );
      jQuery.ready();
    };

  } else if ( document.attachEvent ) {
    DOMContentLoaded = function() {
      // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
      if ( document.readyState === "complete" ) {
        document.detachEvent( "onreadystatechange", DOMContentLoaded );
        jQuery.ready();
      }
    };
  }

  return DOMContentLoaded;
});