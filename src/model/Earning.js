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
import EarningTypeEnum from './EarningTypeEnum';

/**
 * The Earning model module.
 * @module model/Earning
 * @version 1.0
 */
class Earning {
    /**
     * Constructs a new <code>Earning</code>.
     * # The Earning Object ### Description The &#x60;Earning&#x60; object is used to represent an earning for a given employee&#39;s payroll run. One run could include several earnings.  ### Usage Example Fetch from the &#x60;LIST Earnings&#x60; endpoint and filter by &#x60;ID&#x60; to show all earnings.
     * @alias module:model/Earning
     */
    constructor() { 
        
        Earning.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Earning</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Earning} obj Optional instance to populate.
     * @return {module:model/Earning} The populated <code>Earning</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Earning();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('employee_payroll_run')) {
                obj['employee_payroll_run'] = ApiClient.convertToType(data['employee_payroll_run'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], EarningTypeEnum);
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
Earning.prototype['id'] = undefined;

/**
 * @member {String} employee_payroll_run
 */
Earning.prototype['employee_payroll_run'] = undefined;

/**
 * The amount earned.
 * @member {Number} amount
 */
Earning.prototype['amount'] = undefined;

/**
 * The type of earning.
 * @member {module:model/EarningTypeEnum} type
 */
Earning.prototype['type'] = undefined;

/**
 * Indicates whether or not this object has been deleted by third party webhooks.
 * @member {Boolean} remote_was_deleted
 */
Earning.prototype['remote_was_deleted'] = undefined;






export default Earning;

