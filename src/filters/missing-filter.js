import boolFilter from './bool-filter'
import existsFilter from './exists-filter'

/**
 * missing filter is deprecated use negative exists instead
 * Construct a Missing filter.
 *
 * @memberof Filters
 *
 * @param  {String} field Field name to check if missing.
 * @return {Object}       Missing filter.
 */
export default function missingFilter(field) {
  return boolFilter('not',existsFilter(field));
}
