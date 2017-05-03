/**
 * Construct a Script filter.
 *
 * @memberof Filters
 *
 * @param  {Object} script script to query.
 */
export default function scriptFilter(script) {
  return {
    script: {
      script
    }
  }
}
