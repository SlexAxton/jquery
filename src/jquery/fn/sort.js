define('jquery/fn/sort', ['jquery/core'], function (jQuery) {
  // For internal use only.
  // Behaves like an Array's method, not like a jQuery method.
  return jQuery.fn.sort = [].sort;
});