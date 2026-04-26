"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_rooms
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataCloudflareWaitingRooms = exports.DataCloudflareWaitingRoomsResultList = exports.DataCloudflareWaitingRoomsResultOutputReference = exports.DataCloudflareWaitingRoomsResultCookieAttributesOutputReference = exports.DataCloudflareWaitingRoomsResultAdditionalRoutesList = exports.DataCloudflareWaitingRoomsResultAdditionalRoutesOutputReference = void 0;
exports.dataCloudflareWaitingRoomsResultAdditionalRoutesToTerraform = dataCloudflareWaitingRoomsResultAdditionalRoutesToTerraform;
exports.dataCloudflareWaitingRoomsResultAdditionalRoutesToHclTerraform = dataCloudflareWaitingRoomsResultAdditionalRoutesToHclTerraform;
exports.dataCloudflareWaitingRoomsResultCookieAttributesToTerraform = dataCloudflareWaitingRoomsResultCookieAttributesToTerraform;
exports.dataCloudflareWaitingRoomsResultCookieAttributesToHclTerraform = dataCloudflareWaitingRoomsResultCookieAttributesToHclTerraform;
exports.dataCloudflareWaitingRoomsResultToTerraform = dataCloudflareWaitingRoomsResultToTerraform;
exports.dataCloudflareWaitingRoomsResultToHclTerraform = dataCloudflareWaitingRoomsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareWaitingRoomsResultAdditionalRoutesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWaitingRoomsResultAdditionalRoutesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWaitingRoomsResultAdditionalRoutesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWaitingRoomsResultAdditionalRoutesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWaitingRoomsResultAdditionalRoutesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWaitingRoomsResultAdditionalRoutesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultAdditionalRoutesOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultAdditionalRoutesOutputReference.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWaitingRoomsResultAdditionalRoutesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWaitingRoomsResultAdditionalRoutesOutputReference = DataCloudflareWaitingRoomsResultAdditionalRoutesOutputReference;
var DataCloudflareWaitingRoomsResultAdditionalRoutesList = /** @class */ (function (_super) {
    __extends(DataCloudflareWaitingRoomsResultAdditionalRoutesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWaitingRoomsResultAdditionalRoutesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWaitingRoomsResultAdditionalRoutesList.prototype.get = function (index) {
        return new DataCloudflareWaitingRoomsResultAdditionalRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWaitingRoomsResultAdditionalRoutesList;
}(cdktf.ComplexList));
exports.DataCloudflareWaitingRoomsResultAdditionalRoutesList = DataCloudflareWaitingRoomsResultAdditionalRoutesList;
function dataCloudflareWaitingRoomsResultCookieAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWaitingRoomsResultCookieAttributesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWaitingRoomsResultCookieAttributesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWaitingRoomsResultCookieAttributesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWaitingRoomsResultCookieAttributesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWaitingRoomsResultCookieAttributesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultCookieAttributesOutputReference.prototype, "samesite", {
        // samesite - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('samesite');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultCookieAttributesOutputReference.prototype, "secure", {
        // secure - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secure');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWaitingRoomsResultCookieAttributesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWaitingRoomsResultCookieAttributesOutputReference = DataCloudflareWaitingRoomsResultCookieAttributesOutputReference;
function dataCloudflareWaitingRoomsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWaitingRoomsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWaitingRoomsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWaitingRoomsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWaitingRoomsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // additional_routes - computed: true, optional: false, required: false
        _this._additionalRoutes = new DataCloudflareWaitingRoomsResultAdditionalRoutesList(_this, "additional_routes", false);
        // cookie_attributes - computed: true, optional: false, required: false
        _this._cookieAttributes = new DataCloudflareWaitingRoomsResultCookieAttributesOutputReference(_this, "cookie_attributes");
        return _this;
    }
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "additionalRoutes", {
        get: function () {
            return this._additionalRoutes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "cookieAttributes", {
        get: function () {
            return this._cookieAttributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "cookieSuffix", {
        // cookie_suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cookie_suffix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "customPageHtml", {
        // custom_page_html - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('custom_page_html');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "defaultTemplateLanguage", {
        // default_template_language - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('default_template_language');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "disableSessionRenewal", {
        // disable_session_renewal - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disable_session_renewal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "enabledOriginCommands", {
        // enabled_origin_commands - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('enabled_origin_commands');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "jsonResponseEnabled", {
        // json_response_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('json_response_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "newUsersPerMinute", {
        // new_users_per_minute - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('new_users_per_minute');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "nextEventPrequeueStartTime", {
        // next_event_prequeue_start_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('next_event_prequeue_start_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "nextEventStartTime", {
        // next_event_start_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('next_event_start_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "queueAll", {
        // queue_all - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('queue_all');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "queueingMethod", {
        // queueing_method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queueing_method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "queueingStatusCode", {
        // queueing_status_code - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('queueing_status_code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "sessionDuration", {
        // session_duration - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('session_duration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "suspended", {
        // suspended - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('suspended');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "totalActiveUsers", {
        // total_active_users - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('total_active_users');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "turnstileAction", {
        // turnstile_action - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('turnstile_action');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomsResultOutputReference.prototype, "turnstileMode", {
        // turnstile_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('turnstile_mode');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWaitingRoomsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWaitingRoomsResultOutputReference = DataCloudflareWaitingRoomsResultOutputReference;
var DataCloudflareWaitingRoomsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareWaitingRoomsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWaitingRoomsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWaitingRoomsResultList.prototype.get = function (index) {
        return new DataCloudflareWaitingRoomsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWaitingRoomsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareWaitingRoomsResultList = DataCloudflareWaitingRoomsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_rooms cloudflare_waiting_rooms}
*/
var DataCloudflareWaitingRooms = /** @class */ (function (_super) {
    __extends(DataCloudflareWaitingRooms, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_rooms cloudflare_waiting_rooms} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWaitingRoomsConfig = {}
    */
    function DataCloudflareWaitingRooms(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_waiting_rooms',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareWaitingRoomsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareWaitingRooms resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWaitingRooms to import
    * @param importFromId The id of the existing DataCloudflareWaitingRooms that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_rooms#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWaitingRooms to import is found
    */
    DataCloudflareWaitingRooms.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_waiting_rooms", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareWaitingRooms.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWaitingRooms.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareWaitingRooms.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRooms.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWaitingRooms.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareWaitingRooms.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRooms.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRooms.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWaitingRooms.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareWaitingRooms.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareWaitingRooms.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareWaitingRooms.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataCloudflareWaitingRooms.tfResourceType = "cloudflare_waiting_rooms";
    return DataCloudflareWaitingRooms;
}(cdktf.TerraformDataSource));
exports.DataCloudflareWaitingRooms = DataCloudflareWaitingRooms;
