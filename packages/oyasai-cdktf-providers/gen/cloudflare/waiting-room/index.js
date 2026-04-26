"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room
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
exports.WaitingRoom = exports.WaitingRoomCookieAttributesOutputReference = exports.WaitingRoomAdditionalRoutesList = exports.WaitingRoomAdditionalRoutesOutputReference = void 0;
exports.waitingRoomAdditionalRoutesToTerraform = waitingRoomAdditionalRoutesToTerraform;
exports.waitingRoomAdditionalRoutesToHclTerraform = waitingRoomAdditionalRoutesToHclTerraform;
exports.waitingRoomCookieAttributesToTerraform = waitingRoomCookieAttributesToTerraform;
exports.waitingRoomCookieAttributesToHclTerraform = waitingRoomCookieAttributesToHclTerraform;
var cdktf = require("cdktf");
function waitingRoomAdditionalRoutesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        host: cdktf.stringToTerraform(struct.host),
        path: cdktf.stringToTerraform(struct.path),
    };
}
function waitingRoomAdditionalRoutesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        host: {
            value: cdktf.stringToHclTerraform(struct.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        path: {
            value: cdktf.stringToHclTerraform(struct.path),
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
}
var WaitingRoomAdditionalRoutesOutputReference = /** @class */ (function (_super) {
    __extends(WaitingRoomAdditionalRoutesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WaitingRoomAdditionalRoutesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WaitingRoomAdditionalRoutesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._host !== undefined) {
                hasAnyValues = true;
                internalValueResult.host = this._host;
            }
            if (this._path !== undefined) {
                hasAnyValues = true;
                internalValueResult.path = this._path;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._host = undefined;
                this._path = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._host = value.host;
                this._path = value.path;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomAdditionalRoutesOutputReference.prototype, "host", {
        get: function () {
            return this.getStringAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoomAdditionalRoutesOutputReference.prototype.resetHost = function () {
        this._host = undefined;
    };
    Object.defineProperty(WaitingRoomAdditionalRoutesOutputReference.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomAdditionalRoutesOutputReference.prototype, "path", {
        get: function () {
            return this.getStringAttribute('path');
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoomAdditionalRoutesOutputReference.prototype.resetPath = function () {
        this._path = undefined;
    };
    Object.defineProperty(WaitingRoomAdditionalRoutesOutputReference.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    return WaitingRoomAdditionalRoutesOutputReference;
}(cdktf.ComplexObject));
exports.WaitingRoomAdditionalRoutesOutputReference = WaitingRoomAdditionalRoutesOutputReference;
var WaitingRoomAdditionalRoutesList = /** @class */ (function (_super) {
    __extends(WaitingRoomAdditionalRoutesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WaitingRoomAdditionalRoutesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WaitingRoomAdditionalRoutesList.prototype.get = function (index) {
        return new WaitingRoomAdditionalRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WaitingRoomAdditionalRoutesList;
}(cdktf.ComplexList));
exports.WaitingRoomAdditionalRoutesList = WaitingRoomAdditionalRoutesList;
function waitingRoomCookieAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        samesite: cdktf.stringToTerraform(struct.samesite),
        secure: cdktf.stringToTerraform(struct.secure),
    };
}
function waitingRoomCookieAttributesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        samesite: {
            value: cdktf.stringToHclTerraform(struct.samesite),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secure: {
            value: cdktf.stringToHclTerraform(struct.secure),
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
}
var WaitingRoomCookieAttributesOutputReference = /** @class */ (function (_super) {
    __extends(WaitingRoomCookieAttributesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WaitingRoomCookieAttributesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WaitingRoomCookieAttributesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._samesite !== undefined) {
                hasAnyValues = true;
                internalValueResult.samesite = this._samesite;
            }
            if (this._secure !== undefined) {
                hasAnyValues = true;
                internalValueResult.secure = this._secure;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._samesite = undefined;
                this._secure = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._samesite = value.samesite;
                this._secure = value.secure;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomCookieAttributesOutputReference.prototype, "samesite", {
        get: function () {
            return this.getStringAttribute('samesite');
        },
        set: function (value) {
            this._samesite = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoomCookieAttributesOutputReference.prototype.resetSamesite = function () {
        this._samesite = undefined;
    };
    Object.defineProperty(WaitingRoomCookieAttributesOutputReference.prototype, "samesiteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._samesite;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomCookieAttributesOutputReference.prototype, "secure", {
        get: function () {
            return this.getStringAttribute('secure');
        },
        set: function (value) {
            this._secure = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoomCookieAttributesOutputReference.prototype.resetSecure = function () {
        this._secure = undefined;
    };
    Object.defineProperty(WaitingRoomCookieAttributesOutputReference.prototype, "secureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secure;
        },
        enumerable: false,
        configurable: true
    });
    return WaitingRoomCookieAttributesOutputReference;
}(cdktf.ComplexObject));
exports.WaitingRoomCookieAttributesOutputReference = WaitingRoomCookieAttributesOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room cloudflare_waiting_room}
*/
var WaitingRoom = /** @class */ (function (_super) {
    __extends(WaitingRoom, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room cloudflare_waiting_room} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WaitingRoomConfig
    */
    function WaitingRoom(scope, id, config) {
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
        // additional_routes - computed: true, optional: true, required: false
        _this._additionalRoutes = new WaitingRoomAdditionalRoutesList(_this, "additional_routes", false);
        // cookie_attributes - computed: true, optional: true, required: false
        _this._cookieAttributes = new WaitingRoomCookieAttributesOutputReference(_this, "cookie_attributes");
        _this._additionalRoutes.internalValue = config.additionalRoutes;
        _this._cookieAttributes.internalValue = config.cookieAttributes;
        _this._cookieSuffix = config.cookieSuffix;
        _this._customPageHtml = config.customPageHtml;
        _this._defaultTemplateLanguage = config.defaultTemplateLanguage;
        _this._description = config.description;
        _this._disableSessionRenewal = config.disableSessionRenewal;
        _this._enabledOriginCommands = config.enabledOriginCommands;
        _this._host = config.host;
        _this._jsonResponseEnabled = config.jsonResponseEnabled;
        _this._name = config.name;
        _this._newUsersPerMinute = config.newUsersPerMinute;
        _this._path = config.path;
        _this._queueAll = config.queueAll;
        _this._queueingMethod = config.queueingMethod;
        _this._queueingStatusCode = config.queueingStatusCode;
        _this._sessionDuration = config.sessionDuration;
        _this._suspended = config.suspended;
        _this._totalActiveUsers = config.totalActiveUsers;
        _this._turnstileAction = config.turnstileAction;
        _this._turnstileMode = config.turnstileMode;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a WaitingRoom resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WaitingRoom to import
    * @param importFromId The id of the existing WaitingRoom that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WaitingRoom to import is found
    */
    WaitingRoom.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_waiting_room", importId: importFromId, provider: provider });
    };
    Object.defineProperty(WaitingRoom.prototype, "additionalRoutes", {
        get: function () {
            return this._additionalRoutes;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoom.prototype.putAdditionalRoutes = function (value) {
        this._additionalRoutes.internalValue = value;
    };
    WaitingRoom.prototype.resetAdditionalRoutes = function () {
        this._additionalRoutes.internalValue = undefined;
    };
    Object.defineProperty(WaitingRoom.prototype, "additionalRoutesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._additionalRoutes.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "cookieAttributes", {
        get: function () {
            return this._cookieAttributes;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoom.prototype.putCookieAttributes = function (value) {
        this._cookieAttributes.internalValue = value;
    };
    WaitingRoom.prototype.resetCookieAttributes = function () {
        this._cookieAttributes.internalValue = undefined;
    };
    Object.defineProperty(WaitingRoom.prototype, "cookieAttributesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cookieAttributes.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "cookieSuffix", {
        get: function () {
            return this.getStringAttribute('cookie_suffix');
        },
        set: function (value) {
            this._cookieSuffix = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoom.prototype.resetCookieSuffix = function () {
        this._cookieSuffix = undefined;
    };
    Object.defineProperty(WaitingRoom.prototype, "cookieSuffixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cookieSuffix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "customPageHtml", {
        get: function () {
            return this.getStringAttribute('custom_page_html');
        },
        set: function (value) {
            this._customPageHtml = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoom.prototype.resetCustomPageHtml = function () {
        this._customPageHtml = undefined;
    };
    Object.defineProperty(WaitingRoom.prototype, "customPageHtmlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customPageHtml;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "defaultTemplateLanguage", {
        get: function () {
            return this.getStringAttribute('default_template_language');
        },
        set: function (value) {
            this._defaultTemplateLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoom.prototype.resetDefaultTemplateLanguage = function () {
        this._defaultTemplateLanguage = undefined;
    };
    Object.defineProperty(WaitingRoom.prototype, "defaultTemplateLanguageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultTemplateLanguage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoom.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(WaitingRoom.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "disableSessionRenewal", {
        get: function () {
            return this.getBooleanAttribute('disable_session_renewal');
        },
        set: function (value) {
            this._disableSessionRenewal = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoom.prototype.resetDisableSessionRenewal = function () {
        this._disableSessionRenewal = undefined;
    };
    Object.defineProperty(WaitingRoom.prototype, "disableSessionRenewalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableSessionRenewal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "enabledOriginCommands", {
        get: function () {
            return this.getListAttribute('enabled_origin_commands');
        },
        set: function (value) {
            this._enabledOriginCommands = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoom.prototype.resetEnabledOriginCommands = function () {
        this._enabledOriginCommands = undefined;
    };
    Object.defineProperty(WaitingRoom.prototype, "enabledOriginCommandsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabledOriginCommands;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "host", {
        get: function () {
            return this.getStringAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "jsonResponseEnabled", {
        get: function () {
            return this.getBooleanAttribute('json_response_enabled');
        },
        set: function (value) {
            this._jsonResponseEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoom.prototype.resetJsonResponseEnabled = function () {
        this._jsonResponseEnabled = undefined;
    };
    Object.defineProperty(WaitingRoom.prototype, "jsonResponseEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jsonResponseEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "newUsersPerMinute", {
        get: function () {
            return this.getNumberAttribute('new_users_per_minute');
        },
        set: function (value) {
            this._newUsersPerMinute = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "newUsersPerMinuteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._newUsersPerMinute;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "nextEventPrequeueStartTime", {
        // next_event_prequeue_start_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('next_event_prequeue_start_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "nextEventStartTime", {
        // next_event_start_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('next_event_start_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "path", {
        get: function () {
            return this.getStringAttribute('path');
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoom.prototype.resetPath = function () {
        this._path = undefined;
    };
    Object.defineProperty(WaitingRoom.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "queueAll", {
        get: function () {
            return this.getBooleanAttribute('queue_all');
        },
        set: function (value) {
            this._queueAll = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoom.prototype.resetQueueAll = function () {
        this._queueAll = undefined;
    };
    Object.defineProperty(WaitingRoom.prototype, "queueAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queueAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "queueingMethod", {
        get: function () {
            return this.getStringAttribute('queueing_method');
        },
        set: function (value) {
            this._queueingMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoom.prototype.resetQueueingMethod = function () {
        this._queueingMethod = undefined;
    };
    Object.defineProperty(WaitingRoom.prototype, "queueingMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queueingMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "queueingStatusCode", {
        get: function () {
            return this.getNumberAttribute('queueing_status_code');
        },
        set: function (value) {
            this._queueingStatusCode = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoom.prototype.resetQueueingStatusCode = function () {
        this._queueingStatusCode = undefined;
    };
    Object.defineProperty(WaitingRoom.prototype, "queueingStatusCodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queueingStatusCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "sessionDuration", {
        get: function () {
            return this.getNumberAttribute('session_duration');
        },
        set: function (value) {
            this._sessionDuration = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoom.prototype.resetSessionDuration = function () {
        this._sessionDuration = undefined;
    };
    Object.defineProperty(WaitingRoom.prototype, "sessionDurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sessionDuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "suspended", {
        get: function () {
            return this.getBooleanAttribute('suspended');
        },
        set: function (value) {
            this._suspended = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoom.prototype.resetSuspended = function () {
        this._suspended = undefined;
    };
    Object.defineProperty(WaitingRoom.prototype, "suspendedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._suspended;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "totalActiveUsers", {
        get: function () {
            return this.getNumberAttribute('total_active_users');
        },
        set: function (value) {
            this._totalActiveUsers = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "totalActiveUsersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._totalActiveUsers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "turnstileAction", {
        get: function () {
            return this.getStringAttribute('turnstile_action');
        },
        set: function (value) {
            this._turnstileAction = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoom.prototype.resetTurnstileAction = function () {
        this._turnstileAction = undefined;
    };
    Object.defineProperty(WaitingRoom.prototype, "turnstileActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._turnstileAction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "turnstileMode", {
        get: function () {
            return this.getStringAttribute('turnstile_mode');
        },
        set: function (value) {
            this._turnstileMode = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoom.prototype.resetTurnstileMode = function () {
        this._turnstileMode = undefined;
    };
    Object.defineProperty(WaitingRoom.prototype, "turnstileModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._turnstileMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoom.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoom.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(WaitingRoom.prototype, "zoneIdInput", {
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
    WaitingRoom.prototype.synthesizeAttributes = function () {
        return {
            additional_routes: cdktf.listMapper(waitingRoomAdditionalRoutesToTerraform, false)(this._additionalRoutes.internalValue),
            cookie_attributes: waitingRoomCookieAttributesToTerraform(this._cookieAttributes.internalValue),
            cookie_suffix: cdktf.stringToTerraform(this._cookieSuffix),
            custom_page_html: cdktf.stringToTerraform(this._customPageHtml),
            default_template_language: cdktf.stringToTerraform(this._defaultTemplateLanguage),
            description: cdktf.stringToTerraform(this._description),
            disable_session_renewal: cdktf.booleanToTerraform(this._disableSessionRenewal),
            enabled_origin_commands: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledOriginCommands),
            host: cdktf.stringToTerraform(this._host),
            json_response_enabled: cdktf.booleanToTerraform(this._jsonResponseEnabled),
            name: cdktf.stringToTerraform(this._name),
            new_users_per_minute: cdktf.numberToTerraform(this._newUsersPerMinute),
            path: cdktf.stringToTerraform(this._path),
            queue_all: cdktf.booleanToTerraform(this._queueAll),
            queueing_method: cdktf.stringToTerraform(this._queueingMethod),
            queueing_status_code: cdktf.numberToTerraform(this._queueingStatusCode),
            session_duration: cdktf.numberToTerraform(this._sessionDuration),
            suspended: cdktf.booleanToTerraform(this._suspended),
            total_active_users: cdktf.numberToTerraform(this._totalActiveUsers),
            turnstile_action: cdktf.stringToTerraform(this._turnstileAction),
            turnstile_mode: cdktf.stringToTerraform(this._turnstileMode),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    WaitingRoom.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            additional_routes: {
                value: cdktf.listMapperHcl(waitingRoomAdditionalRoutesToHclTerraform, false)(this._additionalRoutes.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "WaitingRoomAdditionalRoutesList",
            },
            cookie_attributes: {
                value: waitingRoomCookieAttributesToHclTerraform(this._cookieAttributes.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WaitingRoomCookieAttributes",
            },
            cookie_suffix: {
                value: cdktf.stringToHclTerraform(this._cookieSuffix),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            custom_page_html: {
                value: cdktf.stringToHclTerraform(this._customPageHtml),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_template_language: {
                value: cdktf.stringToHclTerraform(this._defaultTemplateLanguage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            disable_session_renewal: {
                value: cdktf.booleanToHclTerraform(this._disableSessionRenewal),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            enabled_origin_commands: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enabledOriginCommands),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            host: {
                value: cdktf.stringToHclTerraform(this._host),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            json_response_enabled: {
                value: cdktf.booleanToHclTerraform(this._jsonResponseEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            new_users_per_minute: {
                value: cdktf.numberToHclTerraform(this._newUsersPerMinute),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            path: {
                value: cdktf.stringToHclTerraform(this._path),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            queue_all: {
                value: cdktf.booleanToHclTerraform(this._queueAll),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            queueing_method: {
                value: cdktf.stringToHclTerraform(this._queueingMethod),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            queueing_status_code: {
                value: cdktf.numberToHclTerraform(this._queueingStatusCode),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            session_duration: {
                value: cdktf.numberToHclTerraform(this._sessionDuration),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            suspended: {
                value: cdktf.booleanToHclTerraform(this._suspended),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            total_active_users: {
                value: cdktf.numberToHclTerraform(this._totalActiveUsers),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            turnstile_action: {
                value: cdktf.stringToHclTerraform(this._turnstileAction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            turnstile_mode: {
                value: cdktf.stringToHclTerraform(this._turnstileMode),
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
    WaitingRoom.tfResourceType = "cloudflare_waiting_room";
    return WaitingRoom;
}(cdktf.TerraformResource));
exports.WaitingRoom = WaitingRoom;
