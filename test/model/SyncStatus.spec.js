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
    instance = new MergeHrisApi.SyncStatus();
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

  describe('SyncStatus', function() {
    it('should create an instance of SyncStatus', function() {
      // uncomment below and update the code to test SyncStatus
      //var instane = new MergeHrisApi.SyncStatus();
      //expect(instance).to.be.a(MergeHrisApi.SyncStatus);
    });

    it('should have the property modelName (base name: "model_name")', function() {
      // uncomment below and update the code to test the property modelName
      //var instance = new MergeHrisApi.SyncStatus();
      //expect(instance).to.be();
    });

    it('should have the property modelId (base name: "model_id")', function() {
      // uncomment below and update the code to test the property modelId
      //var instance = new MergeHrisApi.SyncStatus();
      //expect(instance).to.be();
    });

    it('should have the property lastSyncStart (base name: "last_sync_start")', function() {
      // uncomment below and update the code to test the property lastSyncStart
      //var instance = new MergeHrisApi.SyncStatus();
      //expect(instance).to.be();
    });

    it('should have the property nextSyncStart (base name: "next_sync_start")', function() {
      // uncomment below and update the code to test the property nextSyncStart
      //var instance = new MergeHrisApi.SyncStatus();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new MergeHrisApi.SyncStatus();
      //expect(instance).to.be();
    });

    it('should have the property isInitialSync (base name: "is_initial_sync")', function() {
      // uncomment below and update the code to test the property isInitialSync
      //var instance = new MergeHrisApi.SyncStatus();
      //expect(instance).to.be();
    });

  });

}));
