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
import BankInfo from '../model/BankInfo';
import PaginatedBankInfoList from '../model/PaginatedBankInfoList';

/**
* BankInfo service.
* @module api/BankInfoApi
* @version 1.0
*/
export default class BankInfoApi {

    /**
    * Constructs a new BankInfoApi. 
    * @alias module:api/BankInfoApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the bankInfoList operation.
     * @callback module:api/BankInfoApi~bankInfoListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedBankInfoList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of `BankInfo` objects.
     * @param {String} x_account_token Token identifying the end user.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.account_type If provided, will only return BankInfo's with this account type. Options: ('SAVINGS', 'CHECKING')
     * @param {String} opts.bank_name If provided, will only return BankInfo's with this bank name.
     * @param {Date} opts.created_after If provided, will only return objects created after this datetime.
     * @param {Date} opts.created_before If provided, will only return objects created before this datetime.
     * @param {String} opts.cursor The pagination cursor value.
     * @param {String} opts.employee_id If provided, will only return bank accounts for this employee.
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {Boolean} opts.include_deleted_data Whether to include data that was marked as deleted by third party webhooks.
     * @param {Boolean} opts.include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {Date} opts.modified_after If provided, will only return objects modified after this datetime.
     * @param {Date} opts.modified_before If provided, will only return objects modified before this datetime.
     * @param {module:model/String} opts.order_by Overrides the default ordering for this endpoint.
     * @param {Number} opts.page_size Number of results to return per page.
     * @param {module:model/String} opts.remote_fields Which fields should be returned in non-normalized form.
     * @param {String} opts.remote_id The API provider's ID for the given object.
     * @param {module:api/BankInfoApi~bankInfoListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedBankInfoList}
     */
    bankInfoList(x_account_token, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'x_account_token' is set
      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling bankInfoList");
      }

      let pathParams = {
      };
      let queryParams = {
        'account_type': opts['account_type'],
        'bank_name': opts['bank_name'],
        'created_after': opts['created_after'],
        'created_before': opts['created_before'],
        'cursor': opts['cursor'],
        'employee_id': opts['employee_id'],
        'expand': opts['expand'],
        'include_deleted_data': opts['include_deleted_data'],
        'include_remote_data': opts['include_remote_data'],
        'modified_after': opts['modified_after'],
        'modified_before': opts['modified_before'],
        'order_by': opts['order_by'],
        'page_size': opts['page_size'],
        'remote_fields': opts['remote_fields'],
        'remote_id': opts['remote_id']
      };
      let headerParams = {
        'X-Account-Token': x_account_token
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaginatedBankInfoList;
      return this.apiClient.callApi(
        '/bank-info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the bankInfoRetrieve operation.
     * @callback module:api/BankInfoApi~bankInfoRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BankInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a `BankInfo` object with the given `id`.
     * @param {String} x_account_token Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {Boolean} opts.include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {module:model/String} opts.remote_fields Which fields should be returned in non-normalized form.
     * @param {module:api/BankInfoApi~bankInfoRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BankInfo}
     */
    bankInfoRetrieve(x_account_token, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'x_account_token' is set
      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling bankInfoRetrieve");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling bankInfoRetrieve");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'expand': opts['expand'],
        'include_remote_data': opts['include_remote_data'],
        'remote_fields': opts['remote_fields']
      };
      let headerParams = {
        'X-Account-Token': x_account_token
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BankInfo;
      return this.apiClient.callApi(
        '/bank-info/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
