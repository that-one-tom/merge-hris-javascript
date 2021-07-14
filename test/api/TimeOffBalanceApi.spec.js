/**
 * Merge HRIS API
 * The unified API for building rich integrations with multiple HR Information System platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MergeHrisApi);
  }
}(this, function(expect, MergeHrisApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MergeHrisApi.TimeOffBalanceApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TimeOffBalanceApi', function() {
    describe('timeOffBalanceList', function() {
      it('should call timeOffBalanceList successfully', function(done) {
        //uncomment below and update the code to test timeOffBalanceList
        //instance.timeOffBalanceList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('timeOffBalanceRetrieve', function() {
      it('should call timeOffBalanceRetrieve successfully', function(done) {
        //uncomment below and update the code to test timeOffBalanceRetrieve
        //instance.timeOffBalanceRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
