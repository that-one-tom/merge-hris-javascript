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
import RemoteData from './RemoteData';

/**
 * The Company model module.
 * @module model/Company
 * @version 1.0
 */
class Company {
    /**
     * Constructs a new <code>Company</code>.
     * # The Company Object ### Description The &#x60;Company&#x60; object is used to represent a Company within the HRIS / Payroll system.  ### Usage Example Fetch from the &#x60;LIST Companies&#x60; endpoint and filter by &#x60;ID&#x60; to show all companies.
     * @alias module:model/Company
     */
    constructor() { 
        
        Company.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Company</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Company} obj Optional instance to populate.
     * @return {module:model/Company} The populated <code>Company</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Company();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('remote_id')) {
                obj['remote_id'] = ApiClient.convertToType(data['remote_id'], 'String');
            }
            if (data.hasOwnProperty('legal_name')) {
                obj['legal_name'] = ApiClient.convertToType(data['legal_name'], 'String');
            }
            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
            }
            if (data.hasOwnProperty('eins')) {
                obj['eins'] = ApiClient.convertToType(data['eins'], ['String']);
            }
            if (data.hasOwnProperty('remote_data')) {
                obj['remote_data'] = ApiClient.convertToType(data['remote_data'], [RemoteData]);
            }
            if (data.hasOwnProperty('remote_was_deleted')) {
                obj['remote_was_deleted'] = ApiClient.convertToType(data['remote_was_deleted'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Company.prototype['id'] = undefined;

/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */
Company.prototype['remote_id'] = undefined;

/**
 * The company's legal name.
 * @member {String} legal_name
 */
Company.prototype['legal_name'] = undefined;

/**
 * The company's display name.
 * @member {String} display_name
 */
Company.prototype['display_name'] = undefined;

/**
 * The company's Employer Identification Numbers.
 * @member {Array.<String>} eins
 */
Company.prototype['eins'] = undefined;

/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */
Company.prototype['remote_data'] = undefined;

/**
 * Indicates whether or not this object has been deleted by third party webhooks.
 * @member {Boolean} remote_was_deleted
 */
Company.prototype['remote_was_deleted'] = undefined;






export default Company;

