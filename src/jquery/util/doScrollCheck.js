define('jquery/util/doScrollCheck', ['jquery/core','jquery/core/isReady', 'jquery/core/ready'], function (jQuery) {
  // The DOM ready check for Internet Explorer
  function doScrollCheck() {
    if ( jQuery.isReady ) {
      return;
    }

    try {
      // If IE is used, use the trick by Diego Perini
      // http://javascript.nwbox.com/IEContentLoaded/
      document.documentElement.doScroll("left");
    } catch(e) {
      setTimeout( doScrollCheck, 1 );
      return;
    }

    // and execute any waiting functions
    jQuery.ready();
  };

  return doScrollCheck;
});