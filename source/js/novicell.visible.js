'use strict';

/**
 * @name Novicell Visible
 * @desc A script that checks whether elements are within the users visible viewport.
 * @author Brian Stefan Jensen (BSJ)
 * @example
 *  Check for an element: novicell.visible.isVisible(querySelector)
 * @requires none
 */


var novicell = novicell || {};

novicell.visible = novicell.visible || new function () {
  this.isVisible = function(element) {
    var rect = document.querySelector(element).getBoundingClientRect();
    var html = document.documentElement;

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }
}();
