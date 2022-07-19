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
 * The Deduction model module.
 * @module model/Deduction
 * @version 1.0
 */
class Deduction {
    /**
     * Constructs a new <code>Deduction</code>.
     * # The Deduction Object ### Description The &#x60;Deduction&#x60; object is used to represent a deduction for a given employee&#39;s payroll run. One run could include several deductions.  ### Usage Example Fetch from the &#x60;LIST Deductions&#x60; endpoint and filter by &#x60;ID&#x60; to show all deductions.
     * @alias module:model/Deduction
     */
    constructor() { 
        
        Deduction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Deduction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Deduction} obj Optional instance to populate.
     * @return {module:model/Deduction} The populated <code>Deduction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Deduction();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('employee_payroll_run')) {
                obj['employee_payroll_run'] = ApiClient.convertToType(data['employee_payroll_run'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('employee_deduction')) {
                obj['employee_deduction'] = ApiClient.convertToType(data['employee_deduction'], 'Number');
            }
            if (data.hasOwnProperty('company_deduction')) {
                obj['company_deduction'] = ApiClient.convertToType(data['company_deduction'], 'Number');
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
Deduction.prototype['id'] = undefined;

/**
 * @member {String} employee_payroll_run
 */
Deduction.prototype['employee_payroll_run'] = undefined;

/**
 * The deduction's name.
 * @member {String} name
 */
Deduction.prototype['name'] = undefined;

/**
 * The amount the employee is deducting.
 * @member {Number} employee_deduction
 */
Deduction.prototype['employee_deduction'] = undefined;

/**
 * The amount the company is deducting.
 * @member {Number} company_deduction
 */
Deduction.prototype['company_deduction'] = undefined;

/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */
Deduction.prototype['remote_data'] = undefined;

/**
 * Indicates whether or not this object has been deleted by third party webhooks.
 * @member {Boolean} remote_was_deleted
 */
Deduction.prototype['remote_was_deleted'] = undefined;






export default Deduction;

