
import geoPolygonFilter from '../../src/filters/geo-polygon-filter'
import {expect} from 'chai'

describe('geoPolygonFilter', () => {

  it('should create a geo polygon filter', () => {
    let points =           [
      [28.7457275390625,41.04621681452063],
      [29.042358398437496,41.11557271185201],
      [29.27032470703125,41.001666266518185],
      [29.097290039062496,40.88444793903562],
      [28.78555297851562,40.94671366508002],
      [28.7457275390625,41.04621681452063]
    ]
    let result = geoPolygonFilter('fieldName', points)

    expect(result).to.eql({
      geo_polygon: {
        fieldName: {
          points: points
        }
      }
    })
  })

})
