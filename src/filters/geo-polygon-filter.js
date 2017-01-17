
/**
 * Construct a geo point filter.
 *
 * @memberof Filters
 *
 * @param  {String} field    Field name to query over.
 * @param  {Object} point GeoJSON for intersection.
 * @return {Object}          Geo shape filter.
 */
export default function geoShapeFilter(field, points) {
  return {
    geo_polygon: {
      [field]: {
        points: points
      }
    }
  }
}
