define('jquery/fn/push', ['jquery/core', 'jquery/util/push'], function (jQuery, push) {
  // For internal use only.
  // Behaves like an Array's method, not like a jQuery method.
  return jQuery.fn.push = push;
});