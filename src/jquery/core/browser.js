define('jquery/core/browser', ['jquery/core','jquery/core/uaMatch'], function (jQuery) {
  var browser = {},
      // Keep a UserAgent string for use with jQuery.browser
      userAgent = navigator.userAgent,
      browserMatch = jQuery.uaMatch( userAgent );
  
  if ( browserMatch.browser ) {
    browser[ browserMatch.browser ] = true;
    browser.version = browserMatch.version;
  }

  // Deprecated, use jQuery.browser.webkit instead
  if ( browser.webkit ) {
    browser.safari = true;
  }

  return jQuery.browser = browser;
});