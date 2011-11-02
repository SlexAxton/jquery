define('jquery/fn/end', ['jquery/core'], function (jQuery) {
  return jQuery.fn.end = function() {
    // TODO:: figure out if we need to include something for prevObject
    return this.prevObject || this.constructor(null);
  };
});