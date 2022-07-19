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
    instance = new MergeHrisApi.Issue();
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

  describe('Issue', function() {
    it('should create an instance of Issue', function() {
      // uncomment below and update the code to test Issue
      //var instane = new MergeHrisApi.Issue();
      //expect(instance).to.be.a(MergeHrisApi.Issue);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new MergeHrisApi.Issue();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new MergeHrisApi.Issue();
      //expect(instance).to.be();
    });

    it('should have the property error_description (base name: "error_description")', function() {
      // uncomment below and update the code to test the property error_description
      //var instance = new MergeHrisApi.Issue();
      //expect(instance).to.be();
    });

    it('should have the property end_user (base name: "end_user")', function() {
      // uncomment below and update the code to test the property end_user
      //var instance = new MergeHrisApi.Issue();
      //expect(instance).to.be();
    });

    it('should have the property first_incident_time (base name: "first_incident_time")', function() {
      // uncomment below and update the code to test the property first_incident_time
      //var instance = new MergeHrisApi.Issue();
      //expect(instance).to.be();
    });

    it('should have the property last_incident_time (base name: "last_incident_time")', function() {
      // uncomment below and update the code to test the property last_incident_time
      //var instance = new MergeHrisApi.Issue();
      //expect(instance).to.be();
    });

    it('should have the property is_muted (base name: "is_muted")', function() {
      // uncomment below and update the code to test the property is_muted
      //var instance = new MergeHrisApi.Issue();
      //expect(instance).to.be();
    });

  });

}));
