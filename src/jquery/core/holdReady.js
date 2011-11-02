define('jquery/core/holdReady', ['jquery/core', 'jquery/core/readyWait', 'jquery/core/ready'], function (jQuery) {
  // Hold (or release) the ready event
  return jQuery.holdReady = function( hold ) {
    if ( hold ) {
      jQuery.readyWait++;
    } else {
      jQuery.ready( true );
    }
  };
})