"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway
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
exports.AiGateway = exports.AiGatewayStripeOutputReference = exports.AiGatewayStripeUsageEventsList = exports.AiGatewayStripeUsageEventsOutputReference = exports.AiGatewayOtelList = exports.AiGatewayOtelOutputReference = exports.AiGatewayDlpOutputReference = exports.AiGatewayDlpPoliciesList = exports.AiGatewayDlpPoliciesOutputReference = void 0;
exports.aiGatewayDlpPoliciesToTerraform = aiGatewayDlpPoliciesToTerraform;
exports.aiGatewayDlpPoliciesToHclTerraform = aiGatewayDlpPoliciesToHclTerraform;
exports.aiGatewayDlpToTerraform = aiGatewayDlpToTerraform;
exports.aiGatewayDlpToHclTerraform = aiGatewayDlpToHclTerraform;
exports.aiGatewayOtelToTerraform = aiGatewayOtelToTerraform;
exports.aiGatewayOtelToHclTerraform = aiGatewayOtelToHclTerraform;
exports.aiGatewayStripeUsageEventsToTerraform = aiGatewayStripeUsageEventsToTerraform;
exports.aiGatewayStripeUsageEventsToHclTerraform = aiGatewayStripeUsageEventsToHclTerraform;
exports.aiGatewayStripeToTerraform = aiGatewayStripeToTerraform;
exports.aiGatewayStripeToHclTerraform = aiGatewayStripeToHclTerraform;
var cdktf = require("cdktf");
function aiGatewayDlpPoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        check: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.check),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        id: cdktf.stringToTerraform(struct.id),
        profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.profiles),
    };
}
function aiGatewayDlpPoliciesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        action: {
            value: cdktf.stringToHclTerraform(struct.action),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        check: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.check),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        profiles: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.profiles),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var AiGatewayDlpPoliciesOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayDlpPoliciesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AiGatewayDlpPoliciesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiGatewayDlpPoliciesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._action !== undefined) {
                hasAnyValues = true;
                internalValueResult.action = this._action;
            }
            if (this._check !== undefined) {
                hasAnyValues = true;
                internalValueResult.check = this._check;
            }
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            if (this._profiles !== undefined) {
                hasAnyValues = true;
                internalValueResult.profiles = this._profiles;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._action = undefined;
                this._check = undefined;
                this._enabled = undefined;
                this._id = undefined;
                this._profiles = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._action = value.action;
                this._check = value.check;
                this._enabled = value.enabled;
                this._id = value.id;
                this._profiles = value.profiles;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDlpPoliciesOutputReference.prototype, "action", {
        get: function () {
            return this.getStringAttribute('action');
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDlpPoliciesOutputReference.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDlpPoliciesOutputReference.prototype, "check", {
        get: function () {
            return this.getListAttribute('check');
        },
        set: function (value) {
            this._check = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDlpPoliciesOutputReference.prototype, "checkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._check;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDlpPoliciesOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDlpPoliciesOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDlpPoliciesOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDlpPoliciesOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDlpPoliciesOutputReference.prototype, "profiles", {
        get: function () {
            return this.getListAttribute('profiles');
        },
        set: function (value) {
            this._profiles = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDlpPoliciesOutputReference.prototype, "profilesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._profiles;
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayDlpPoliciesOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayDlpPoliciesOutputReference = AiGatewayDlpPoliciesOutputReference;
var AiGatewayDlpPoliciesList = /** @class */ (function (_super) {
    __extends(AiGatewayDlpPoliciesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AiGatewayDlpPoliciesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    AiGatewayDlpPoliciesList.prototype.get = function (index) {
        return new AiGatewayDlpPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return AiGatewayDlpPoliciesList;
}(cdktf.ComplexList));
exports.AiGatewayDlpPoliciesList = AiGatewayDlpPoliciesList;
function aiGatewayDlpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        policies: cdktf.listMapper(aiGatewayDlpPoliciesToTerraform, false)(struct.policies),
        profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.profiles),
    };
}
function aiGatewayDlpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        action: {
            value: cdktf.stringToHclTerraform(struct.action),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        policies: {
            value: cdktf.listMapperHcl(aiGatewayDlpPoliciesToHclTerraform, false)(struct.policies),
            isBlock: true,
            type: "list",
            storageClassType: "AiGatewayDlpPoliciesList",
        },
        profiles: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.profiles),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var AiGatewayDlpOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayDlpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiGatewayDlpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // policies - computed: false, optional: true, required: false
        _this._policies = new AiGatewayDlpPoliciesList(_this, "policies", false);
        return _this;
    }
    Object.defineProperty(AiGatewayDlpOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._action !== undefined) {
                hasAnyValues = true;
                internalValueResult.action = this._action;
            }
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (((_a = this._policies) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.policies = (_b = this._policies) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._profiles !== undefined) {
                hasAnyValues = true;
                internalValueResult.profiles = this._profiles;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._action = undefined;
                this._enabled = undefined;
                this._policies.internalValue = undefined;
                this._profiles = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._action = value.action;
                this._enabled = value.enabled;
                this._policies.internalValue = value.policies;
                this._profiles = value.profiles;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDlpOutputReference.prototype, "action", {
        get: function () {
            return this.getStringAttribute('action');
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGatewayDlpOutputReference.prototype.resetAction = function () {
        this._action = undefined;
    };
    Object.defineProperty(AiGatewayDlpOutputReference.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDlpOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDlpOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDlpOutputReference.prototype, "policies", {
        get: function () {
            return this._policies;
        },
        enumerable: false,
        configurable: true
    });
    AiGatewayDlpOutputReference.prototype.putPolicies = function (value) {
        this._policies.internalValue = value;
    };
    AiGatewayDlpOutputReference.prototype.resetPolicies = function () {
        this._policies.internalValue = undefined;
    };
    Object.defineProperty(AiGatewayDlpOutputReference.prototype, "policiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policies.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayDlpOutputReference.prototype, "profiles", {
        get: function () {
            return this.getListAttribute('profiles');
        },
        set: function (value) {
            this._profiles = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGatewayDlpOutputReference.prototype.resetProfiles = function () {
        this._profiles = undefined;
    };
    Object.defineProperty(AiGatewayDlpOutputReference.prototype, "profilesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._profiles;
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayDlpOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayDlpOutputReference = AiGatewayDlpOutputReference;
function aiGatewayOtelToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        authorization: cdktf.stringToTerraform(struct.authorization),
        content_type: cdktf.stringToTerraform(struct.contentType),
        headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct.headers),
        url: cdktf.stringToTerraform(struct.url),
    };
}
function aiGatewayOtelToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        authorization: {
            value: cdktf.stringToHclTerraform(struct.authorization),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_type: {
            value: cdktf.stringToHclTerraform(struct.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        headers: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.headers),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        url: {
            value: cdktf.stringToHclTerraform(struct.url),
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
var AiGatewayOtelOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayOtelOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AiGatewayOtelOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiGatewayOtelOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._authorization !== undefined) {
                hasAnyValues = true;
                internalValueResult.authorization = this._authorization;
            }
            if (this._contentType !== undefined) {
                hasAnyValues = true;
                internalValueResult.contentType = this._contentType;
            }
            if (this._headers !== undefined) {
                hasAnyValues = true;
                internalValueResult.headers = this._headers;
            }
            if (this._url !== undefined) {
                hasAnyValues = true;
                internalValueResult.url = this._url;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._authorization = undefined;
                this._contentType = undefined;
                this._headers = undefined;
                this._url = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._authorization = value.authorization;
                this._contentType = value.contentType;
                this._headers = value.headers;
                this._url = value.url;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayOtelOutputReference.prototype, "authorization", {
        get: function () {
            return this.getStringAttribute('authorization');
        },
        set: function (value) {
            this._authorization = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayOtelOutputReference.prototype, "authorizationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authorization;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayOtelOutputReference.prototype, "contentType", {
        get: function () {
            return this.getStringAttribute('content_type');
        },
        set: function (value) {
            this._contentType = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGatewayOtelOutputReference.prototype.resetContentType = function () {
        this._contentType = undefined;
    };
    Object.defineProperty(AiGatewayOtelOutputReference.prototype, "contentTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayOtelOutputReference.prototype, "headers", {
        get: function () {
            return this.getStringMapAttribute('headers');
        },
        set: function (value) {
            this._headers = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayOtelOutputReference.prototype, "headersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._headers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayOtelOutputReference.prototype, "url", {
        get: function () {
            return this.getStringAttribute('url');
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayOtelOutputReference.prototype, "urlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayOtelOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayOtelOutputReference = AiGatewayOtelOutputReference;
var AiGatewayOtelList = /** @class */ (function (_super) {
    __extends(AiGatewayOtelList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AiGatewayOtelList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    AiGatewayOtelList.prototype.get = function (index) {
        return new AiGatewayOtelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return AiGatewayOtelList;
}(cdktf.ComplexList));
exports.AiGatewayOtelList = AiGatewayOtelList;
function aiGatewayStripeUsageEventsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        payload: cdktf.stringToTerraform(struct.payload),
    };
}
function aiGatewayStripeUsageEventsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        payload: {
            value: cdktf.stringToHclTerraform(struct.payload),
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
var AiGatewayStripeUsageEventsOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayStripeUsageEventsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AiGatewayStripeUsageEventsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiGatewayStripeUsageEventsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._payload !== undefined) {
                hasAnyValues = true;
                internalValueResult.payload = this._payload;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._payload = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._payload = value.payload;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayStripeUsageEventsOutputReference.prototype, "payload", {
        get: function () {
            return this.getStringAttribute('payload');
        },
        set: function (value) {
            this._payload = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayStripeUsageEventsOutputReference.prototype, "payloadInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._payload;
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayStripeUsageEventsOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayStripeUsageEventsOutputReference = AiGatewayStripeUsageEventsOutputReference;
var AiGatewayStripeUsageEventsList = /** @class */ (function (_super) {
    __extends(AiGatewayStripeUsageEventsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AiGatewayStripeUsageEventsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    AiGatewayStripeUsageEventsList.prototype.get = function (index) {
        return new AiGatewayStripeUsageEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return AiGatewayStripeUsageEventsList;
}(cdktf.ComplexList));
exports.AiGatewayStripeUsageEventsList = AiGatewayStripeUsageEventsList;
function aiGatewayStripeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        authorization: cdktf.stringToTerraform(struct.authorization),
        usage_events: cdktf.listMapper(aiGatewayStripeUsageEventsToTerraform, false)(struct.usageEvents),
    };
}
function aiGatewayStripeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        authorization: {
            value: cdktf.stringToHclTerraform(struct.authorization),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        usage_events: {
            value: cdktf.listMapperHcl(aiGatewayStripeUsageEventsToHclTerraform, false)(struct.usageEvents),
            isBlock: true,
            type: "list",
            storageClassType: "AiGatewayStripeUsageEventsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var AiGatewayStripeOutputReference = /** @class */ (function (_super) {
    __extends(AiGatewayStripeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiGatewayStripeOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // usage_events - computed: false, optional: false, required: true
        _this._usageEvents = new AiGatewayStripeUsageEventsList(_this, "usage_events", false);
        return _this;
    }
    Object.defineProperty(AiGatewayStripeOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._authorization !== undefined) {
                hasAnyValues = true;
                internalValueResult.authorization = this._authorization;
            }
            if (((_a = this._usageEvents) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.usageEvents = (_b = this._usageEvents) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._authorization = undefined;
                this._usageEvents.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._authorization = value.authorization;
                this._usageEvents.internalValue = value.usageEvents;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayStripeOutputReference.prototype, "authorization", {
        get: function () {
            return this.getStringAttribute('authorization');
        },
        set: function (value) {
            this._authorization = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayStripeOutputReference.prototype, "authorizationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authorization;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGatewayStripeOutputReference.prototype, "usageEvents", {
        get: function () {
            return this._usageEvents;
        },
        enumerable: false,
        configurable: true
    });
    AiGatewayStripeOutputReference.prototype.putUsageEvents = function (value) {
        this._usageEvents.internalValue = value;
    };
    Object.defineProperty(AiGatewayStripeOutputReference.prototype, "usageEventsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._usageEvents.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return AiGatewayStripeOutputReference;
}(cdktf.ComplexObject));
exports.AiGatewayStripeOutputReference = AiGatewayStripeOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway cloudflare_ai_gateway}
*/
var AiGateway = /** @class */ (function (_super) {
    __extends(AiGateway, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway cloudflare_ai_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AiGatewayConfig
    */
    function AiGateway(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_ai_gateway',
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
        // dlp - computed: false, optional: true, required: false
        _this._dlp = new AiGatewayDlpOutputReference(_this, "dlp");
        // otel - computed: true, optional: true, required: false
        _this._otel = new AiGatewayOtelList(_this, "otel", false);
        // stripe - computed: false, optional: true, required: false
        _this._stripe = new AiGatewayStripeOutputReference(_this, "stripe");
        _this._accountId = config.accountId;
        _this._authentication = config.authentication;
        _this._cacheInvalidateOnUpdate = config.cacheInvalidateOnUpdate;
        _this._cacheTtl = config.cacheTtl;
        _this._collectLogs = config.collectLogs;
        _this._dlp.internalValue = config.dlp;
        _this._id = config.id;
        _this._logManagement = config.logManagement;
        _this._logManagementStrategy = config.logManagementStrategy;
        _this._logpush = config.logpush;
        _this._logpushPublicKey = config.logpushPublicKey;
        _this._otel.internalValue = config.otel;
        _this._rateLimitingInterval = config.rateLimitingInterval;
        _this._rateLimitingLimit = config.rateLimitingLimit;
        _this._rateLimitingTechnique = config.rateLimitingTechnique;
        _this._retryBackoff = config.retryBackoff;
        _this._retryDelay = config.retryDelay;
        _this._retryMaxAttempts = config.retryMaxAttempts;
        _this._storeId = config.storeId;
        _this._stripe.internalValue = config.stripe;
        _this._workersAiBillingMode = config.workersAiBillingMode;
        _this._zdr = config.zdr;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AiGateway resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AiGateway to import
    * @param importFromId The id of the existing AiGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AiGateway to import is found
    */
    AiGateway.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_gateway", importId: importFromId, provider: provider });
    };
    Object.defineProperty(AiGateway.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGateway.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(AiGateway.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "authentication", {
        get: function () {
            return this.getBooleanAttribute('authentication');
        },
        set: function (value) {
            this._authentication = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGateway.prototype.resetAuthentication = function () {
        this._authentication = undefined;
    };
    Object.defineProperty(AiGateway.prototype, "authenticationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authentication;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "cacheInvalidateOnUpdate", {
        get: function () {
            return this.getBooleanAttribute('cache_invalidate_on_update');
        },
        set: function (value) {
            this._cacheInvalidateOnUpdate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "cacheInvalidateOnUpdateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cacheInvalidateOnUpdate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "cacheTtl", {
        get: function () {
            return this.getNumberAttribute('cache_ttl');
        },
        set: function (value) {
            this._cacheTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "cacheTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cacheTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "collectLogs", {
        get: function () {
            return this.getBooleanAttribute('collect_logs');
        },
        set: function (value) {
            this._collectLogs = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "collectLogsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._collectLogs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "dlp", {
        get: function () {
            return this._dlp;
        },
        enumerable: false,
        configurable: true
    });
    AiGateway.prototype.putDlp = function (value) {
        this._dlp.internalValue = value;
    };
    AiGateway.prototype.resetDlp = function () {
        this._dlp.internalValue = undefined;
    };
    Object.defineProperty(AiGateway.prototype, "dlpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dlp.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "isDefault", {
        // is_default - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_default');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "logManagement", {
        get: function () {
            return this.getNumberAttribute('log_management');
        },
        set: function (value) {
            this._logManagement = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGateway.prototype.resetLogManagement = function () {
        this._logManagement = undefined;
    };
    Object.defineProperty(AiGateway.prototype, "logManagementInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logManagement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "logManagementStrategy", {
        get: function () {
            return this.getStringAttribute('log_management_strategy');
        },
        set: function (value) {
            this._logManagementStrategy = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGateway.prototype.resetLogManagementStrategy = function () {
        this._logManagementStrategy = undefined;
    };
    Object.defineProperty(AiGateway.prototype, "logManagementStrategyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logManagementStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "logpush", {
        get: function () {
            return this.getBooleanAttribute('logpush');
        },
        set: function (value) {
            this._logpush = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGateway.prototype.resetLogpush = function () {
        this._logpush = undefined;
    };
    Object.defineProperty(AiGateway.prototype, "logpushInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logpush;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "logpushPublicKey", {
        get: function () {
            return this.getStringAttribute('logpush_public_key');
        },
        set: function (value) {
            this._logpushPublicKey = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGateway.prototype.resetLogpushPublicKey = function () {
        this._logpushPublicKey = undefined;
    };
    Object.defineProperty(AiGateway.prototype, "logpushPublicKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logpushPublicKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "otel", {
        get: function () {
            return this._otel;
        },
        enumerable: false,
        configurable: true
    });
    AiGateway.prototype.putOtel = function (value) {
        this._otel.internalValue = value;
    };
    AiGateway.prototype.resetOtel = function () {
        this._otel.internalValue = undefined;
    };
    Object.defineProperty(AiGateway.prototype, "otelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._otel.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "rateLimitingInterval", {
        get: function () {
            return this.getNumberAttribute('rate_limiting_interval');
        },
        set: function (value) {
            this._rateLimitingInterval = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "rateLimitingIntervalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rateLimitingInterval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "rateLimitingLimit", {
        get: function () {
            return this.getNumberAttribute('rate_limiting_limit');
        },
        set: function (value) {
            this._rateLimitingLimit = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "rateLimitingLimitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rateLimitingLimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "rateLimitingTechnique", {
        get: function () {
            return this.getStringAttribute('rate_limiting_technique');
        },
        set: function (value) {
            this._rateLimitingTechnique = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGateway.prototype.resetRateLimitingTechnique = function () {
        this._rateLimitingTechnique = undefined;
    };
    Object.defineProperty(AiGateway.prototype, "rateLimitingTechniqueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rateLimitingTechnique;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "retryBackoff", {
        get: function () {
            return this.getStringAttribute('retry_backoff');
        },
        set: function (value) {
            this._retryBackoff = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGateway.prototype.resetRetryBackoff = function () {
        this._retryBackoff = undefined;
    };
    Object.defineProperty(AiGateway.prototype, "retryBackoffInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retryBackoff;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "retryDelay", {
        get: function () {
            return this.getNumberAttribute('retry_delay');
        },
        set: function (value) {
            this._retryDelay = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGateway.prototype.resetRetryDelay = function () {
        this._retryDelay = undefined;
    };
    Object.defineProperty(AiGateway.prototype, "retryDelayInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retryDelay;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "retryMaxAttempts", {
        get: function () {
            return this.getNumberAttribute('retry_max_attempts');
        },
        set: function (value) {
            this._retryMaxAttempts = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGateway.prototype.resetRetryMaxAttempts = function () {
        this._retryMaxAttempts = undefined;
    };
    Object.defineProperty(AiGateway.prototype, "retryMaxAttemptsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retryMaxAttempts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "storeId", {
        get: function () {
            return this.getStringAttribute('store_id');
        },
        set: function (value) {
            this._storeId = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGateway.prototype.resetStoreId = function () {
        this._storeId = undefined;
    };
    Object.defineProperty(AiGateway.prototype, "storeIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storeId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "stripe", {
        get: function () {
            return this._stripe;
        },
        enumerable: false,
        configurable: true
    });
    AiGateway.prototype.putStripe = function (value) {
        this._stripe.internalValue = value;
    };
    AiGateway.prototype.resetStripe = function () {
        this._stripe.internalValue = undefined;
    };
    Object.defineProperty(AiGateway.prototype, "stripeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stripe.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "workersAiBillingMode", {
        get: function () {
            return this.getStringAttribute('workers_ai_billing_mode');
        },
        set: function (value) {
            this._workersAiBillingMode = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGateway.prototype.resetWorkersAiBillingMode = function () {
        this._workersAiBillingMode = undefined;
    };
    Object.defineProperty(AiGateway.prototype, "workersAiBillingModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workersAiBillingMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiGateway.prototype, "zdr", {
        get: function () {
            return this.getBooleanAttribute('zdr');
        },
        set: function (value) {
            this._zdr = value;
        },
        enumerable: false,
        configurable: true
    });
    AiGateway.prototype.resetZdr = function () {
        this._zdr = undefined;
    };
    Object.defineProperty(AiGateway.prototype, "zdrInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zdr;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AiGateway.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            authentication: cdktf.booleanToTerraform(this._authentication),
            cache_invalidate_on_update: cdktf.booleanToTerraform(this._cacheInvalidateOnUpdate),
            cache_ttl: cdktf.numberToTerraform(this._cacheTtl),
            collect_logs: cdktf.booleanToTerraform(this._collectLogs),
            dlp: aiGatewayDlpToTerraform(this._dlp.internalValue),
            id: cdktf.stringToTerraform(this._id),
            log_management: cdktf.numberToTerraform(this._logManagement),
            log_management_strategy: cdktf.stringToTerraform(this._logManagementStrategy),
            logpush: cdktf.booleanToTerraform(this._logpush),
            logpush_public_key: cdktf.stringToTerraform(this._logpushPublicKey),
            otel: cdktf.listMapper(aiGatewayOtelToTerraform, false)(this._otel.internalValue),
            rate_limiting_interval: cdktf.numberToTerraform(this._rateLimitingInterval),
            rate_limiting_limit: cdktf.numberToTerraform(this._rateLimitingLimit),
            rate_limiting_technique: cdktf.stringToTerraform(this._rateLimitingTechnique),
            retry_backoff: cdktf.stringToTerraform(this._retryBackoff),
            retry_delay: cdktf.numberToTerraform(this._retryDelay),
            retry_max_attempts: cdktf.numberToTerraform(this._retryMaxAttempts),
            store_id: cdktf.stringToTerraform(this._storeId),
            stripe: aiGatewayStripeToTerraform(this._stripe.internalValue),
            workers_ai_billing_mode: cdktf.stringToTerraform(this._workersAiBillingMode),
            zdr: cdktf.booleanToTerraform(this._zdr),
        };
    };
    AiGateway.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            authentication: {
                value: cdktf.booleanToHclTerraform(this._authentication),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            cache_invalidate_on_update: {
                value: cdktf.booleanToHclTerraform(this._cacheInvalidateOnUpdate),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            cache_ttl: {
                value: cdktf.numberToHclTerraform(this._cacheTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            collect_logs: {
                value: cdktf.booleanToHclTerraform(this._collectLogs),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            dlp: {
                value: aiGatewayDlpToHclTerraform(this._dlp.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AiGatewayDlp",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            log_management: {
                value: cdktf.numberToHclTerraform(this._logManagement),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            log_management_strategy: {
                value: cdktf.stringToHclTerraform(this._logManagementStrategy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            logpush: {
                value: cdktf.booleanToHclTerraform(this._logpush),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            logpush_public_key: {
                value: cdktf.stringToHclTerraform(this._logpushPublicKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            otel: {
                value: cdktf.listMapperHcl(aiGatewayOtelToHclTerraform, false)(this._otel.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AiGatewayOtelList",
            },
            rate_limiting_interval: {
                value: cdktf.numberToHclTerraform(this._rateLimitingInterval),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            rate_limiting_limit: {
                value: cdktf.numberToHclTerraform(this._rateLimitingLimit),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            rate_limiting_technique: {
                value: cdktf.stringToHclTerraform(this._rateLimitingTechnique),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            retry_backoff: {
                value: cdktf.stringToHclTerraform(this._retryBackoff),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            retry_delay: {
                value: cdktf.numberToHclTerraform(this._retryDelay),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            retry_max_attempts: {
                value: cdktf.numberToHclTerraform(this._retryMaxAttempts),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            store_id: {
                value: cdktf.stringToHclTerraform(this._storeId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            stripe: {
                value: aiGatewayStripeToHclTerraform(this._stripe.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AiGatewayStripe",
            },
            workers_ai_billing_mode: {
                value: cdktf.stringToHclTerraform(this._workersAiBillingMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zdr: {
                value: cdktf.booleanToHclTerraform(this._zdr),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
    AiGateway.tfResourceType = "cloudflare_ai_gateway";
    return AiGateway;
}(cdktf.TerraformResource));
exports.AiGateway = AiGateway;
