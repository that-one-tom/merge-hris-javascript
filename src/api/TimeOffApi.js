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


import ApiClient from "../ApiClient";
import CreateTimeOff from '../model/CreateTimeOff';
import PaginatedTimeOffList from '../model/PaginatedTimeOffList';
import TimeOff from '../model/TimeOff';

/**
* TimeOff service.
* @module api/TimeOffApi
* @version 1.0
*/
export default class TimeOffApi {

    /**
    * Constructs a new TimeOffApi. 
    * @alias module:api/TimeOffApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the timeOffCreate operation.
     * @callback module:api/TimeOffApi~timeOffCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimeOff} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a `TimeOff` object with the given values.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.runAsync Whether or not third-party updates should be run asynchronously.
     * @param {module:model/CreateTimeOff} opts.createTimeOff 
     * @param {module:api/TimeOffApi~timeOffCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimeOff}
     */
    timeOffCreate(xAccountToken, opts, callback) {
      opts = opts || {};
      let postBody = opts['createTimeOff'];
      // verify the required parameter 'xAccountToken' is set
      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling timeOffCreate");
      }

      let pathParams = {
      };
      let queryParams = {
        'run_async': opts['runAsync']
      };
      let headerParams = {
        'X-Account-Token': xAccountToken
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = TimeOff;
      return this.apiClient.callApi(
        '/time-off', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the timeOffList operation.
     * @callback module:api/TimeOffApi~timeOffListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedTimeOffList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of `TimeOff` objects.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.approverId If provided, will only return time off for this approver.
     * @param {Date} opts.createdAfter If provided, will only return objects created after this datetime.
     * @param {Date} opts.createdBefore If provided, will only return objects created before this datetime.
     * @param {String} opts.cursor The pagination cursor value.
     * @param {String} opts.employeeId If provided, will only return time off for this employee.
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {Date} opts.modifiedAfter If provided, will only return objects modified after this datetime.
     * @param {Date} opts.modifiedBefore If provided, will only return objects modified before this datetime.
     * @param {Number} opts.pageSize Number of results to return per page.
     * @param {String} opts.remoteId The API provider's ID for the given object.
     * @param {module:api/TimeOffApi~timeOffListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedTimeOffList}
     */
    timeOffList(xAccountToken, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountToken' is set
      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling timeOffList");
      }

      let pathParams = {
      };
      let queryParams = {
        'approver_id': opts['approverId'],
        'created_after': opts['createdAfter'],
        'created_before': opts['createdBefore'],
        'cursor': opts['cursor'],
        'employee_id': opts['employeeId'],
        'expand': opts['expand'],
        'include_remote_data': opts['includeRemoteData'],
        'modified_after': opts['modifiedAfter'],
        'modified_before': opts['modifiedBefore'],
        'page_size': opts['pageSize'],
        'remote_id': opts['remoteId']
      };
      let headerParams = {
        'X-Account-Token': xAccountToken
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaginatedTimeOffList;
      return this.apiClient.callApi(
        '/time-off', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the timeOffRetrieve operation.
     * @callback module:api/TimeOffApi~timeOffRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimeOff} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns an `TimeOff` object with the given `id`.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {module:api/TimeOffApi~timeOffRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimeOff}
     */
    timeOffRetrieve(xAccountToken, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountToken' is set
      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling timeOffRetrieve");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling timeOffRetrieve");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'expand': opts['expand'],
        'include_remote_data': opts['includeRemoteData']
      };
      let headerParams = {
        'X-Account-Token': xAccountToken
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TimeOff;
      return this.apiClient.callApi(
        '/time-off/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
