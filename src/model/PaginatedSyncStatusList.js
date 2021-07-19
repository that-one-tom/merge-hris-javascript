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

import ApiClient from '../ApiClient';
import SyncStatus from './SyncStatus';

/**
 * The PaginatedSyncStatusList model module.
 * @module model/PaginatedSyncStatusList
 * @version 1.0
 */
class PaginatedSyncStatusList {
    /**
     * Constructs a new <code>PaginatedSyncStatusList</code>.
     * @alias module:model/PaginatedSyncStatusList
     */
    constructor() { 
        
        PaginatedSyncStatusList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaginatedSyncStatusList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedSyncStatusList} obj Optional instance to populate.
     * @return {module:model/PaginatedSyncStatusList} The populated <code>PaginatedSyncStatusList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginatedSyncStatusList();

            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [SyncStatus]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} next
 */
PaginatedSyncStatusList.prototype['next'] = undefined;

/**
 * @member {String} previous
 */
PaginatedSyncStatusList.prototype['previous'] = undefined;

/**
 * @member {Array.<module:model/SyncStatus>} results
 */
PaginatedSyncStatusList.prototype['results'] = undefined;






export default PaginatedSyncStatusList;

