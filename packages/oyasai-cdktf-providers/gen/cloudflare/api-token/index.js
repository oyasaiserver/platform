"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_token
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
exports.ApiToken = exports.ApiTokenPoliciesList = exports.ApiTokenPoliciesOutputReference = exports.ApiTokenPoliciesPermissionGroupsList = exports.ApiTokenPoliciesPermissionGroupsOutputReference = exports.ApiTokenConditionOutputReference = exports.ApiTokenConditionRequestIpOutputReference = void 0;
exports.apiTokenConditionRequestIpToTerraform = apiTokenConditionRequestIpToTerraform;
exports.apiTokenConditionRequestIpToHclTerraform = apiTokenConditionRequestIpToHclTerraform;
exports.apiTokenConditionToTerraform = apiTokenConditionToTerraform;
exports.apiTokenConditionToHclTerraform = apiTokenConditionToHclTerraform;
exports.apiTokenPoliciesPermissionGroupsToTerraform = apiTokenPoliciesPermissionGroupsToTerraform;
exports.apiTokenPoliciesPermissionGroupsToHclTerraform = apiTokenPoliciesPermissionGroupsToHclTerraform;
exports.apiTokenPoliciesToTerraform = apiTokenPoliciesToTerraform;
exports.apiTokenPoliciesToHclTerraform = apiTokenPoliciesToHclTerraform;
var cdktf = require("cdktf");
function apiTokenConditionRequestIpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        in: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.in),
        not_in: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.notIn),
    };
}
function apiTokenConditionRequestIpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        in: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.in),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        not_in: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.notIn),
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
var ApiTokenConditionRequestIpOutputReference = /** @class */ (function (_super) {
    __extends(ApiTokenConditionRequestIpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ApiTokenConditionRequestIpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ApiTokenConditionRequestIpOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._in !== undefined) {
                hasAnyValues = true;
                internalValueResult.in = this._in;
            }
            if (this._notIn !== undefined) {
                hasAnyValues = true;
                internalValueResult.notIn = this._notIn;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._in = undefined;
                this._notIn = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._in = value.in;
                this._notIn = value.notIn;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiTokenConditionRequestIpOutputReference.prototype, "in", {
        get: function () {
            return this.getListAttribute('in');
        },
        set: function (value) {
            this._in = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiTokenConditionRequestIpOutputReference.prototype.resetIn = function () {
        this._in = undefined;
    };
    Object.defineProperty(ApiTokenConditionRequestIpOutputReference.prototype, "inInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._in;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiTokenConditionRequestIpOutputReference.prototype, "notIn", {
        get: function () {
            return this.getListAttribute('not_in');
        },
        set: function (value) {
            this._notIn = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiTokenConditionRequestIpOutputReference.prototype.resetNotIn = function () {
        this._notIn = undefined;
    };
    Object.defineProperty(ApiTokenConditionRequestIpOutputReference.prototype, "notInInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notIn;
        },
        enumerable: false,
        configurable: true
    });
    return ApiTokenConditionRequestIpOutputReference;
}(cdktf.ComplexObject));
exports.ApiTokenConditionRequestIpOutputReference = ApiTokenConditionRequestIpOutputReference;
function apiTokenConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        request_ip: apiTokenConditionRequestIpToTerraform(struct.requestIp),
    };
}
function apiTokenConditionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        request_ip: {
            value: apiTokenConditionRequestIpToHclTerraform(struct.requestIp),
            isBlock: true,
            type: "struct",
            storageClassType: "ApiTokenConditionRequestIp",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ApiTokenConditionOutputReference = /** @class */ (function (_super) {
    __extends(ApiTokenConditionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ApiTokenConditionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // request_ip - computed: false, optional: true, required: false
        _this._requestIp = new ApiTokenConditionRequestIpOutputReference(_this, "request_ip");
        return _this;
    }
    Object.defineProperty(ApiTokenConditionOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._requestIp) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.requestIp = (_b = this._requestIp) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._requestIp.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._requestIp.internalValue = value.requestIp;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiTokenConditionOutputReference.prototype, "requestIp", {
        get: function () {
            return this._requestIp;
        },
        enumerable: false,
        configurable: true
    });
    ApiTokenConditionOutputReference.prototype.putRequestIp = function (value) {
        this._requestIp.internalValue = value;
    };
    ApiTokenConditionOutputReference.prototype.resetRequestIp = function () {
        this._requestIp.internalValue = undefined;
    };
    Object.defineProperty(ApiTokenConditionOutputReference.prototype, "requestIpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestIp.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ApiTokenConditionOutputReference;
}(cdktf.ComplexObject));
exports.ApiTokenConditionOutputReference = ApiTokenConditionOutputReference;
function apiTokenPoliciesPermissionGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
function apiTokenPoliciesPermissionGroupsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
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
var ApiTokenPoliciesPermissionGroupsOutputReference = /** @class */ (function (_super) {
    __extends(ApiTokenPoliciesPermissionGroupsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ApiTokenPoliciesPermissionGroupsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ApiTokenPoliciesPermissionGroupsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._id = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._id = value.id;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiTokenPoliciesPermissionGroupsOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiTokenPoliciesPermissionGroupsOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return ApiTokenPoliciesPermissionGroupsOutputReference;
}(cdktf.ComplexObject));
exports.ApiTokenPoliciesPermissionGroupsOutputReference = ApiTokenPoliciesPermissionGroupsOutputReference;
var ApiTokenPoliciesPermissionGroupsList = /** @class */ (function (_super) {
    __extends(ApiTokenPoliciesPermissionGroupsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ApiTokenPoliciesPermissionGroupsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ApiTokenPoliciesPermissionGroupsList.prototype.get = function (index) {
        return new ApiTokenPoliciesPermissionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ApiTokenPoliciesPermissionGroupsList;
}(cdktf.ComplexList));
exports.ApiTokenPoliciesPermissionGroupsList = ApiTokenPoliciesPermissionGroupsList;
function apiTokenPoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        effect: cdktf.stringToTerraform(struct.effect),
        permission_groups: cdktf.listMapper(apiTokenPoliciesPermissionGroupsToTerraform, false)(struct.permissionGroups),
        resources: cdktf.stringToTerraform(struct.resources),
    };
}
function apiTokenPoliciesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        effect: {
            value: cdktf.stringToHclTerraform(struct.effect),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        permission_groups: {
            value: cdktf.listMapperHcl(apiTokenPoliciesPermissionGroupsToHclTerraform, false)(struct.permissionGroups),
            isBlock: true,
            type: "list",
            storageClassType: "ApiTokenPoliciesPermissionGroupsList",
        },
        resources: {
            value: cdktf.stringToHclTerraform(struct.resources),
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
var ApiTokenPoliciesOutputReference = /** @class */ (function (_super) {
    __extends(ApiTokenPoliciesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ApiTokenPoliciesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // permission_groups - computed: false, optional: false, required: true
        _this._permissionGroups = new ApiTokenPoliciesPermissionGroupsList(_this, "permission_groups", false);
        return _this;
    }
    Object.defineProperty(ApiTokenPoliciesOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._effect !== undefined) {
                hasAnyValues = true;
                internalValueResult.effect = this._effect;
            }
            if (((_a = this._permissionGroups) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.permissionGroups = (_b = this._permissionGroups) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._resources !== undefined) {
                hasAnyValues = true;
                internalValueResult.resources = this._resources;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._effect = undefined;
                this._permissionGroups.internalValue = undefined;
                this._resources = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._effect = value.effect;
                this._permissionGroups.internalValue = value.permissionGroups;
                this._resources = value.resources;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiTokenPoliciesOutputReference.prototype, "effect", {
        get: function () {
            return this.getStringAttribute('effect');
        },
        set: function (value) {
            this._effect = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiTokenPoliciesOutputReference.prototype, "effectInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._effect;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiTokenPoliciesOutputReference.prototype, "permissionGroups", {
        get: function () {
            return this._permissionGroups;
        },
        enumerable: false,
        configurable: true
    });
    ApiTokenPoliciesOutputReference.prototype.putPermissionGroups = function (value) {
        this._permissionGroups.internalValue = value;
    };
    Object.defineProperty(ApiTokenPoliciesOutputReference.prototype, "permissionGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permissionGroups.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiTokenPoliciesOutputReference.prototype, "resources", {
        get: function () {
            return this.getStringAttribute('resources');
        },
        set: function (value) {
            this._resources = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiTokenPoliciesOutputReference.prototype, "resourcesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resources;
        },
        enumerable: false,
        configurable: true
    });
    return ApiTokenPoliciesOutputReference;
}(cdktf.ComplexObject));
exports.ApiTokenPoliciesOutputReference = ApiTokenPoliciesOutputReference;
var ApiTokenPoliciesList = /** @class */ (function (_super) {
    __extends(ApiTokenPoliciesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ApiTokenPoliciesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ApiTokenPoliciesList.prototype.get = function (index) {
        return new ApiTokenPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ApiTokenPoliciesList;
}(cdktf.ComplexList));
exports.ApiTokenPoliciesList = ApiTokenPoliciesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_token cloudflare_api_token}
*/
var ApiToken = /** @class */ (function (_super) {
    __extends(ApiToken, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_token cloudflare_api_token} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiTokenConfig
    */
    function ApiToken(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_api_token',
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
        // condition - computed: false, optional: true, required: false
        _this._condition = new ApiTokenConditionOutputReference(_this, "condition");
        // policies - computed: false, optional: false, required: true
        _this._policies = new ApiTokenPoliciesList(_this, "policies", false);
        _this._condition.internalValue = config.condition;
        _this._expiresOn = config.expiresOn;
        _this._name = config.name;
        _this._notBefore = config.notBefore;
        _this._policies.internalValue = config.policies;
        _this._status = config.status;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ApiToken resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiToken to import
    * @param importFromId The id of the existing ApiToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_token#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiToken to import is found
    */
    ApiToken.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_api_token", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ApiToken.prototype, "condition", {
        get: function () {
            return this._condition;
        },
        enumerable: false,
        configurable: true
    });
    ApiToken.prototype.putCondition = function (value) {
        this._condition.internalValue = value;
    };
    ApiToken.prototype.resetCondition = function () {
        this._condition.internalValue = undefined;
    };
    Object.defineProperty(ApiToken.prototype, "conditionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._condition.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiToken.prototype, "expiresOn", {
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        set: function (value) {
            this._expiresOn = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiToken.prototype.resetExpiresOn = function () {
        this._expiresOn = undefined;
    };
    Object.defineProperty(ApiToken.prototype, "expiresOnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expiresOn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiToken.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiToken.prototype, "issuedOn", {
        // issued_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issued_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiToken.prototype, "lastUsedOn", {
        // last_used_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_used_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiToken.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiToken.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiToken.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiToken.prototype, "notBefore", {
        get: function () {
            return this.getStringAttribute('not_before');
        },
        set: function (value) {
            this._notBefore = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiToken.prototype.resetNotBefore = function () {
        this._notBefore = undefined;
    };
    Object.defineProperty(ApiToken.prototype, "notBeforeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notBefore;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiToken.prototype, "policies", {
        get: function () {
            return this._policies;
        },
        enumerable: false,
        configurable: true
    });
    ApiToken.prototype.putPolicies = function (value) {
        this._policies.internalValue = value;
    };
    Object.defineProperty(ApiToken.prototype, "policiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policies.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiToken.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiToken.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(ApiToken.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiToken.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ApiToken.prototype.synthesizeAttributes = function () {
        return {
            condition: apiTokenConditionToTerraform(this._condition.internalValue),
            expires_on: cdktf.stringToTerraform(this._expiresOn),
            name: cdktf.stringToTerraform(this._name),
            not_before: cdktf.stringToTerraform(this._notBefore),
            policies: cdktf.listMapper(apiTokenPoliciesToTerraform, false)(this._policies.internalValue),
            status: cdktf.stringToTerraform(this._status),
        };
    };
    ApiToken.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            condition: {
                value: apiTokenConditionToHclTerraform(this._condition.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ApiTokenCondition",
            },
            expires_on: {
                value: cdktf.stringToHclTerraform(this._expiresOn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            not_before: {
                value: cdktf.stringToHclTerraform(this._notBefore),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policies: {
                value: cdktf.listMapperHcl(apiTokenPoliciesToHclTerraform, false)(this._policies.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ApiTokenPoliciesList",
            },
            status: {
                value: cdktf.stringToHclTerraform(this._status),
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
    ApiToken.tfResourceType = "cloudflare_api_token";
    return ApiToken;
}(cdktf.TerraformResource));
exports.ApiToken = ApiToken;
