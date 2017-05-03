'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = missingFilter;

var _boolFilter = require('./bool-filter');

var _boolFilter2 = _interopRequireDefault(_boolFilter);

var _existsFilter = require('./exists-filter');

var _existsFilter2 = _interopRequireDefault(_existsFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * missing filter is deprecated use negative exists instead
 * Construct a Missing filter.
 *
 * @memberof Filters
 *
 * @param  {String} field Field name to check if missing.
 * @return {Object}       Missing filter.
 */
function missingFilter(field) {
  return (0, _boolFilter2.default)('not', (0, _existsFilter2.default)(field));
}