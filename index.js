
var selector = /input|select|textarea|button/i;

module.exports = isFocusable;

/**
 * Check if the given `element` can receive focus
 *
 * @api public
 * @param {HTMLElement} element
 * @return {Boolean}
 */

function isFocusable(element) {
  // tabindex
  if (element.hasAttribute('tabindex')) {
    var tabindex = element.getAttribute('tabindex');
    if (!isNaN(tabindex)) {
      return true;
    }
  }

  // natively focusable, but only when enabled
  var name = element.nodeName;
  if (selector.test(name)) {
    return element.type.toLowerCase() !== 'hidden'
        && !element.disabled;
  }

  // anchors must have an href
  if (name === 'A') {
    return !!element.href;
  }

  return false;
}
