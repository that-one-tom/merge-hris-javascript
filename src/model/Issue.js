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
import IssueStatusEnum from './IssueStatusEnum';

/**
 * The Issue model module.
 * @module model/Issue
 * @version 1.0
 */
class Issue {
    /**
     * Constructs a new <code>Issue</code>.
     * @alias module:model/Issue
     * @param error_description {String} 
     */
    constructor(error_description) { 
        
        Issue.initialize(this, error_description);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, error_description) { 
        obj['error_description'] = error_description;
    }

    /**
     * Constructs a <code>Issue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Issue} obj Optional instance to populate.
     * @return {module:model/Issue} The populated <code>Issue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Issue();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = IssueStatusEnum.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('error_description')) {
                obj['error_description'] = ApiClient.convertToType(data['error_description'], 'String');
            }
            if (data.hasOwnProperty('end_user')) {
                obj['end_user'] = ApiClient.convertToType(data['end_user'], {'String': Object});
            }
            if (data.hasOwnProperty('first_incident_time')) {
                obj['first_incident_time'] = ApiClient.convertToType(data['first_incident_time'], 'Date');
            }
            if (data.hasOwnProperty('last_incident_time')) {
                obj['last_incident_time'] = ApiClient.convertToType(data['last_incident_time'], 'Date');
            }
            if (data.hasOwnProperty('is_muted')) {
                obj['is_muted'] = ApiClient.convertToType(data['is_muted'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Issue.prototype['id'] = undefined;

/**
 * @member {module:model/IssueStatusEnum} status
 */
Issue.prototype['status'] = undefined;

/**
 * @member {String} error_description
 */
Issue.prototype['error_description'] = undefined;

/**
 * @member {Object.<String, Object>} end_user
 */
Issue.prototype['end_user'] = undefined;

/**
 * @member {Date} first_incident_time
 */
Issue.prototype['first_incident_time'] = undefined;

/**
 * @member {Date} last_incident_time
 */
Issue.prototype['last_incident_time'] = undefined;

/**
 * @member {Boolean} is_muted
 */
Issue.prototype['is_muted'] = undefined;






export default Issue;

