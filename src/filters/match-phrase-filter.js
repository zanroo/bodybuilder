/**
 * Construct a Match-Phrase filter.
 *
 * @memberof Filters
 *
 * @param  {String} field  Field name to query over.
 * @param  {String} term Query value.
 * @return {Object}        Match filter.
 */
export default function matchPhraseFilter(field, term) {
  return {
    'match-phrase': {
      [field]: term
    }
  }
}
