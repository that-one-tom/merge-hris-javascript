"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Company = _interopRequireDefault(require("./Company"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaginatedCompanyList model module.
 * @module model/PaginatedCompanyList
 * @version 1.0
 */
var PaginatedCompanyList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaginatedCompanyList</code>.
   * @alias module:model/PaginatedCompanyList
   */
  function PaginatedCompanyList() {
    _classCallCheck(this, PaginatedCompanyList);

    PaginatedCompanyList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaginatedCompanyList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaginatedCompanyList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedCompanyList} obj Optional instance to populate.
     * @return {module:model/PaginatedCompanyList} The populated <code>PaginatedCompanyList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaginatedCompanyList();

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }

        if (data.hasOwnProperty('previous')) {
          obj['previous'] = _ApiClient["default"].convertToType(data['previous'], 'String');
        }

        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_Company["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PaginatedCompanyList;
}();
/**
 * @member {String} next
 */


PaginatedCompanyList.prototype['next'] = undefined;
/**
 * @member {String} previous
 */

PaginatedCompanyList.prototype['previous'] = undefined;
/**
 * @member {Array.<module:model/Company>} results
 */

PaginatedCompanyList.prototype['results'] = undefined;
var _default = PaginatedCompanyList;
exports["default"] = _default;