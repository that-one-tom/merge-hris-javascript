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
import PaginatedSyncStatusList from '../model/PaginatedSyncStatusList';
import SyncStatus from '../model/SyncStatus';

/**
* SyncStatus service.
* @module api/SyncStatusApi
* @version 1.0
*/
export default class SyncStatusApi {

    /**
    * Constructs a new SyncStatusApi. 
    * @alias module:api/SyncStatusApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the syncStatusList operation.
     * @callback module:api/SyncStatusApi~syncStatusListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedSyncStatusList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get syncing status.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.cursor The pagination cursor value.
     * @param {Number} opts.pageSize Number of results to return per page.
     * @param {module:api/SyncStatusApi~syncStatusListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedSyncStatusList}
     */
    syncStatusList(xAccountToken, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountToken' is set
      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling syncStatusList");
      }

      let pathParams = {
      };
      let queryParams = {
        'cursor': opts['cursor'],
        'page_size': opts['pageSize']
      };
      let headerParams = {
        'X-Account-Token': xAccountToken
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaginatedSyncStatusList;
      return this.apiClient.callApi(
        '/sync-status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the syncStatusResyncCreate operation.
     * @callback module:api/SyncStatusApi~syncStatusResyncCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SyncStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Force resync of all models.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {module:api/SyncStatusApi~syncStatusResyncCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SyncStatus}
     */
    syncStatusResyncCreate(xAccountToken, callback) {
      let postBody = null;
      // verify the required parameter 'xAccountToken' is set
      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling syncStatusResyncCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Account-Token': xAccountToken
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SyncStatus;
      return this.apiClient.callApi(
        '/sync-status/resync', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
