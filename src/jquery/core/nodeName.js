define('jquery/core/nodeName', ['jquery/core'], function (jQuery) {
  return jQuery.nodeName = function( elem, name ) {
    return elem.nodeName && elem.nodeName.toUpperCase() === name.toUpperCase();
  };
});