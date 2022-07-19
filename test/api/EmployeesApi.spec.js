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
    instance = new MergeHrisApi.EmployeesApi();
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

  describe('EmployeesApi', function() {
    describe('employeesCreate', function() {
      it('should call employeesCreate successfully', function(done) {
        //uncomment below and update the code to test employeesCreate
        //instance.employeesCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('employeesIgnoreCreate', function() {
      it('should call employeesIgnoreCreate successfully', function(done) {
        //uncomment below and update the code to test employeesIgnoreCreate
        //instance.employeesIgnoreCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('employeesList', function() {
      it('should call employeesList successfully', function(done) {
        //uncomment below and update the code to test employeesList
        //instance.employeesList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('employeesMetaPostRetrieve', function() {
      it('should call employeesMetaPostRetrieve successfully', function(done) {
        //uncomment below and update the code to test employeesMetaPostRetrieve
        //instance.employeesMetaPostRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('employeesRetrieve', function() {
      it('should call employeesRetrieve successfully', function(done) {
        //uncomment below and update the code to test employeesRetrieve
        //instance.employeesRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
