import noSupport from './worker-no-support.js';
import support from './worker-support.js';

if (
  navigator.userAgent.includes("WebKit/") && !navigator.userAgent.includes("Chrome/") &&
  parseFloat(navigator.userAgent.match(/Version\/([\d.]+)/) || [])[1] < 17.4
) {
  noSupport();
}