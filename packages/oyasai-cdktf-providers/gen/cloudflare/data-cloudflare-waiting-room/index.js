"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room
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
exports.DataCloudflareWaitingRoom = exports.DataCloudflareWaitingRoomCookieAttributesOutputReference = exports.DataCloudflareWaitingRoomAdditionalRoutesList = exports.DataCloudflareWaitingRoomAdditionalRoutesOutputReference = void 0;
exports.dataCloudflareWaitingRoomAdditionalRoutesToTerraform = dataCloudflareWaitingRoomAdditionalRoutesToTerraform;
exports.dataCloudflareWaitingRoomAdditionalRoutesToHclTerraform = dataCloudflareWaitingRoomAdditionalRoutesToHclTerraform;
exports.dataCloudflareWaitingRoomCookieAttributesToTerraform = dataCloudflareWaitingRoomCookieAttributesToTerraform;
exports.dataCloudflareWaitingRoomCookieAttributesToHclTerraform = dataCloudflareWaitingRoomCookieAttributesToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareWaitingRoomAdditionalRoutesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWaitingRoomAdditionalRoutesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWaitingRoomAdditionalRoutesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWaitingRoomAdditionalRoutesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWaitingRoomAdditionalRoutesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWaitingRoomAdditionalRoutesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWaitingRoomAdditionalRoutesOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomAdditionalRoutesOutputReference.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWaitingRoomAdditionalRoutesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWaitingRoomAdditionalRoutesOutputReference = DataCloudflareWaitingRoomAdditionalRoutesOutputReference;
var DataCloudflareWaitingRoomAdditionalRoutesList = /** @class */ (function (_super) {
    __extends(DataCloudflareWaitingRoomAdditionalRoutesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWaitingRoomAdditionalRoutesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWaitingRoomAdditionalRoutesList.prototype.get = function (index) {
        return new DataCloudflareWaitingRoomAdditionalRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWaitingRoomAdditionalRoutesList;
}(cdktf.ComplexList));
exports.DataCloudflareWaitingRoomAdditionalRoutesList = DataCloudflareWaitingRoomAdditionalRoutesList;
function dataCloudflareWaitingRoomCookieAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWaitingRoomCookieAttributesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWaitingRoomCookieAttributesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWaitingRoomCookieAttributesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWaitingRoomCookieAttributesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWaitingRoomCookieAttributesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWaitingRoomCookieAttributesOutputReference.prototype, "samesite", {
        // samesite - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('samesite');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomCookieAttributesOutputReference.prototype, "secure", {
        // secure - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secure');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWaitingRoomCookieAttributesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWaitingRoomCookieAttributesOutputReference = DataCloudflareWaitingRoomCookieAttributesOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room cloudflare_waiting_room}
*/
var DataCloudflareWaitingRoom = /** @class */ (function (_super) {
    __extends(DataCloudflareWaitingRoom, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room cloudflare_waiting_room} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWaitingRoomConfig
    */
    function DataCloudflareWaitingRoom(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_waiting_room',
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
        // ==========
        // ATTRIBUTES
        // ==========
        // additional_routes - computed: true, optional: false, required: false
        _this._additionalRoutes = new DataCloudflareWaitingRoomAdditionalRoutesList(_this, "additional_routes", false);
        // cookie_attributes - computed: true, optional: false, required: false
        _this._cookieAttributes = new DataCloudflareWaitingRoomCookieAttributesOutputReference(_this, "cookie_attributes");
        _this._waitingRoomId = config.waitingRoomId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareWaitingRoom resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWaitingRoom to import
    * @param importFromId The id of the existing DataCloudflareWaitingRoom that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWaitingRoom to import is found
    */
    DataCloudflareWaitingRoom.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_waiting_room", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "additionalRoutes", {
        get: function () {
            return this._additionalRoutes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "cookieAttributes", {
        get: function () {
            return this._cookieAttributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "cookieSuffix", {
        // cookie_suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cookie_suffix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "customPageHtml", {
        // custom_page_html - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('custom_page_html');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "defaultTemplateLanguage", {
        // default_template_language - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('default_template_language');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "disableSessionRenewal", {
        // disable_session_renewal - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disable_session_renewal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "enabledOriginCommands", {
        // enabled_origin_commands - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('enabled_origin_commands');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "jsonResponseEnabled", {
        // json_response_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('json_response_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "newUsersPerMinute", {
        // new_users_per_minute - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('new_users_per_minute');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "nextEventPrequeueStartTime", {
        // next_event_prequeue_start_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('next_event_prequeue_start_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "nextEventStartTime", {
        // next_event_start_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('next_event_start_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "queueAll", {
        // queue_all - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('queue_all');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "queueingMethod", {
        // queueing_method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queueing_method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "queueingStatusCode", {
        // queueing_status_code - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('queueing_status_code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "sessionDuration", {
        // session_duration - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('session_duration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "suspended", {
        // suspended - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('suspended');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "totalActiveUsers", {
        // total_active_users - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('total_active_users');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "turnstileAction", {
        // turnstile_action - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('turnstile_action');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "turnstileMode", {
        // turnstile_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('turnstile_mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "waitingRoomId", {
        get: function () {
            return this.getStringAttribute('waiting_room_id');
        },
        set: function (value) {
            this._waitingRoomId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "waitingRoomIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._waitingRoomId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWaitingRoom.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareWaitingRoom.prototype, "zoneIdInput", {
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
    DataCloudflareWaitingRoom.prototype.synthesizeAttributes = function () {
        return {
            waiting_room_id: cdktf.stringToTerraform(this._waitingRoomId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareWaitingRoom.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            waiting_room_id: {
                value: cdktf.stringToHclTerraform(this._waitingRoomId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
    DataCloudflareWaitingRoom.tfResourceType = "cloudflare_waiting_room";
    return DataCloudflareWaitingRoom;
}(cdktf.TerraformDataSource));
exports.DataCloudflareWaitingRoom = DataCloudflareWaitingRoom;
