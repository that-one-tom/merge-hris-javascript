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
    instance = new MergeHrisApi.Company();
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

  describe('Company', function() {
    it('should create an instance of Company', function() {
      // uncomment below and update the code to test Company
      //var instane = new MergeHrisApi.Company();
      //expect(instance).to.be.a(MergeHrisApi.Company);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new MergeHrisApi.Company();
      //expect(instance).to.be();
    });

    it('should have the property remote_id (base name: "remote_id")', function() {
      // uncomment below and update the code to test the property remote_id
      //var instance = new MergeHrisApi.Company();
      //expect(instance).to.be();
    });

    it('should have the property legal_name (base name: "legal_name")', function() {
      // uncomment below and update the code to test the property legal_name
      //var instance = new MergeHrisApi.Company();
      //expect(instance).to.be();
    });

    it('should have the property display_name (base name: "display_name")', function() {
      // uncomment below and update the code to test the property display_name
      //var instance = new MergeHrisApi.Company();
      //expect(instance).to.be();
    });

    it('should have the property eins (base name: "eins")', function() {
      // uncomment below and update the code to test the property eins
      //var instance = new MergeHrisApi.Company();
      //expect(instance).to.be();
    });

    it('should have the property remote_data (base name: "remote_data")', function() {
      // uncomment below and update the code to test the property remote_data
      //var instance = new MergeHrisApi.Company();
      //expect(instance).to.be();
    });

    it('should have the property remote_was_deleted (base name: "remote_was_deleted")', function() {
      // uncomment below and update the code to test the property remote_was_deleted
      //var instance = new MergeHrisApi.Company();
      //expect(instance).to.be();
    });

  });

}));
