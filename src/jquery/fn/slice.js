define('jquery/fn/slice', ['jquery/core', 'jquery/util/slice', 'jquery/fn/pushStack'], function (jQuery,slice) {
  return jQuery.fn.slice = function() {
    return this.pushStack( slice.apply( this, arguments ),
      "slice", slice.call(arguments).join(",") );
  };
});