"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scriptFilter;
/**
 * Construct a Script filter.
 *
 * @memberof Filters
 *
 * @param  {Object} script script to query.
 */
function scriptFilter(script) {
  return {
    script: {
      script: script
    }
  };
}