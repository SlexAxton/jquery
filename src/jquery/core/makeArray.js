define('jquery/core/makeArray', [
  'jquery/core',
  'jquery/util/push',
  'jquery/core/type',
  'jquery/core/isWindow',
  'jquery/core/merge'
], function (jQuery, push) {
  // results is for internal usage only
  return jQuery.makeArray = function( array, results ) {
    var ret = results || [];

    if ( array != null ) {
      // The window, strings (and functions) also have 'length'
      // The extra typeof function check is to prevent crashes
      // in Safari 2 (See: #3039)
      // Tweaked logic slightly to handle Blackberry 4.7 RegExp issues #6930
      var type = jQuery.type( array );

      if ( array.length == null || type === "string" || type === "function" || type === "regexp" || jQuery.isWindow( array ) ) {
        push.call( ret, array );
      } else {
        jQuery.merge( ret, array );
      }
    }

    return ret;
  };
});