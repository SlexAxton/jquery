define('jquery/fn/ready', ['jquery/core', 'jquery/core/bindReady', 'jquery/core/readyList'], function (jQuery, jQuery_bindReady) {
  jQuery.fn.ready = function( fn ) {
    // Attach the listeners
    jQuery_bindReady();

    // Add the callback
    jQuery.readyList.add( fn );

    return this;
  };
});