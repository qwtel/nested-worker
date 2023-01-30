import noSupport from './worker-no-support.js';
import support from './worker-support.js';

if (navigator.userAgent.includes("WebKit/") && !navigator.userAgent.includes("Chrome/")) {
  noSupport();
}