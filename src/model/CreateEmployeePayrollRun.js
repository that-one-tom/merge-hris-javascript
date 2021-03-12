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
import Deduction from './Deduction';
import Earning from './Earning';
import Tax from './Tax';

/**
 * The CreateEmployeePayrollRun model module.
 * @module model/CreateEmployeePayrollRun
 * @version 1.0
 */
class CreateEmployeePayrollRun {
    /**
     * Constructs a new <code>CreateEmployeePayrollRun</code>.
     * # The EmployeePayrollRun Object ### Description The &#x60;EmployeePayrollRun&#x60; object is used to represent a payroll run for a specific employee.
     * @alias module:model/CreateEmployeePayrollRun
     */
    constructor() { 
        
        CreateEmployeePayrollRun.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateEmployeePayrollRun</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateEmployeePayrollRun} obj Optional instance to populate.
     * @return {module:model/CreateEmployeePayrollRun} The populated <code>CreateEmployeePayrollRun</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateEmployeePayrollRun();

            if (data.hasOwnProperty('employee')) {
                obj['employee'] = ApiClient.convertToType(data['employee'], 'String');
            }
            if (data.hasOwnProperty('payroll_run')) {
                obj['payroll_run'] = ApiClient.convertToType(data['payroll_run'], 'String');
            }
            if (data.hasOwnProperty('gross_pay')) {
                obj['gross_pay'] = ApiClient.convertToType(data['gross_pay'], 'Number');
            }
            if (data.hasOwnProperty('net_pay')) {
                obj['net_pay'] = ApiClient.convertToType(data['net_pay'], 'Number');
            }
            if (data.hasOwnProperty('start_date')) {
                obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
            }
            if (data.hasOwnProperty('end_date')) {
                obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Date');
            }
            if (data.hasOwnProperty('check_date')) {
                obj['check_date'] = ApiClient.convertToType(data['check_date'], 'Date');
            }
            if (data.hasOwnProperty('earnings')) {
                obj['earnings'] = ApiClient.convertToType(data['earnings'], [Earning]);
            }
            if (data.hasOwnProperty('deductions')) {
                obj['deductions'] = ApiClient.convertToType(data['deductions'], [Deduction]);
            }
            if (data.hasOwnProperty('taxes')) {
                obj['taxes'] = ApiClient.convertToType(data['taxes'], [Tax]);
            }
        }
        return obj;
    }


}

/**
 * The employee who's payroll is being run.
 * @member {String} employee
 */
CreateEmployeePayrollRun.prototype['employee'] = undefined;

/**
 * The payroll being run.
 * @member {String} payroll_run
 */
CreateEmployeePayrollRun.prototype['payroll_run'] = undefined;

/**
 * The gross pay from the run.
 * @member {Number} gross_pay
 */
CreateEmployeePayrollRun.prototype['gross_pay'] = undefined;

/**
 * The net pay from the run.
 * @member {Number} net_pay
 */
CreateEmployeePayrollRun.prototype['net_pay'] = undefined;

/**
 * The day and time the payroll run started.
 * @member {Date} start_date
 */
CreateEmployeePayrollRun.prototype['start_date'] = undefined;

/**
 * The day and time the payroll run ended.
 * @member {Date} end_date
 */
CreateEmployeePayrollRun.prototype['end_date'] = undefined;

/**
 * The day and time the payroll run was checked.
 * @member {Date} check_date
 */
CreateEmployeePayrollRun.prototype['check_date'] = undefined;

/**
 * @member {Array.<module:model/Earning>} earnings
 */
CreateEmployeePayrollRun.prototype['earnings'] = undefined;

/**
 * @member {Array.<module:model/Deduction>} deductions
 */
CreateEmployeePayrollRun.prototype['deductions'] = undefined;

/**
 * @member {Array.<module:model/Tax>} taxes
 */
CreateEmployeePayrollRun.prototype['taxes'] = undefined;






export default CreateEmployeePayrollRun;

