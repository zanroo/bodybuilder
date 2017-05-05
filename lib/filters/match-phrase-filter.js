'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = matchPhraseFilter;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Construct a Match-Phrase filter.
 *
 * @memberof Filters
 *
 * @param  {String} field  Field name to query over.
 * @param  {String} term Query value.
 * @return {Object}        Match filter.
 */
function matchPhraseFilter(field, term) {
  return {
    'match_phrase': _defineProperty({}, field, term)
  };
}