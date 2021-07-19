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
import CountryEnum from './CountryEnum';
import RemoteData from './RemoteData';

/**
 * The Location model module.
 * @module model/Location
 * @version 1.0
 */
class Location {
    /**
     * Constructs a new <code>Location</code>.
     * # The Location Object ### Description The &#x60;Location&#x60; object is used to represent a Location for a Company or Employee address. This is shared across many models and is referenced whenever a location is stored.  ### Usage Example Fetch from the &#x60;LIST Locations&#x60; endpoint and filter by &#x60;ID&#x60; to show all office locations.
     * @alias module:model/Location
     */
    constructor() { 
        
        Location.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Location</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Location} obj Optional instance to populate.
     * @return {module:model/Location} The populated <code>Location</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Location();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('remote_id')) {
                obj['remote_id'] = ApiClient.convertToType(data['remote_id'], 'String');
            }
            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
            }
            if (data.hasOwnProperty('street_1')) {
                obj['street_1'] = ApiClient.convertToType(data['street_1'], 'String');
            }
            if (data.hasOwnProperty('street_2')) {
                obj['street_2'] = ApiClient.convertToType(data['street_2'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('zip_code')) {
                obj['zip_code'] = ApiClient.convertToType(data['zip_code'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], CountryEnum);
            }
            if (data.hasOwnProperty('remote_data')) {
                obj['remote_data'] = ApiClient.convertToType(data['remote_data'], [RemoteData]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Location.prototype['id'] = undefined;

/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */
Location.prototype['remote_id'] = undefined;

/**
 * The location's phone number.
 * @member {String} phone_number
 */
Location.prototype['phone_number'] = undefined;

/**
 * Line 1 of the location's street address.
 * @member {String} street_1
 */
Location.prototype['street_1'] = undefined;

/**
 * Line 2 of the location's street address.
 * @member {String} street_2
 */
Location.prototype['street_2'] = undefined;

/**
 * The location's city.
 * @member {String} city
 */
Location.prototype['city'] = undefined;

/**
 * The location's state. Represents a region if outside of the US.
 * @member {String} state
 */
Location.prototype['state'] = undefined;

/**
 * The location's zip code.
 * @member {String} zip_code
 */
Location.prototype['zip_code'] = undefined;

/**
 * The location's country.
 * @member {module:model/CountryEnum} country
 */
Location.prototype['country'] = undefined;

/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */
Location.prototype['remote_data'] = undefined;






export default Location;

