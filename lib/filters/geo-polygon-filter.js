"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = geoShapeFilter;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Construct a geo point filter.
 *
 * @memberof Filters
 *
 * @param  {String} field    Field name to query over.
 * @param  {Object} point GeoJSON for intersection.
 * @return {Object}          Geo shape filter.
 */
function geoShapeFilter(field, points) {
  return {
    geo_polygon: _defineProperty({}, field, {
      points: points
    })
  };
}