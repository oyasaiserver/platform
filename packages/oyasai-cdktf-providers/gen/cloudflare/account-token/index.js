"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_token
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
exports.AccountToken = exports.AccountTokenPoliciesList = exports.AccountTokenPoliciesOutputReference = exports.AccountTokenPoliciesPermissionGroupsList = exports.AccountTokenPoliciesPermissionGroupsOutputReference = exports.AccountTokenConditionOutputReference = exports.AccountTokenConditionRequestIpOutputReference = void 0;
exports.accountTokenConditionRequestIpToTerraform = accountTokenConditionRequestIpToTerraform;
exports.accountTokenConditionRequestIpToHclTerraform = accountTokenConditionRequestIpToHclTerraform;
exports.accountTokenConditionToTerraform = accountTokenConditionToTerraform;
exports.accountTokenConditionToHclTerraform = accountTokenConditionToHclTerraform;
exports.accountTokenPoliciesPermissionGroupsToTerraform = accountTokenPoliciesPermissionGroupsToTerraform;
exports.accountTokenPoliciesPermissionGroupsToHclTerraform = accountTokenPoliciesPermissionGroupsToHclTerraform;
exports.accountTokenPoliciesToTerraform = accountTokenPoliciesToTerraform;
exports.accountTokenPoliciesToHclTerraform = accountTokenPoliciesToHclTerraform;
var cdktf = require("cdktf");
function accountTokenConditionRequestIpToTerraform(struct) {
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
function accountTokenConditionRequestIpToHclTerraform(struct) {
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
var AccountTokenConditionRequestIpOutputReference = /** @class */ (function (_super) {
    __extends(AccountTokenConditionRequestIpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AccountTokenConditionRequestIpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AccountTokenConditionRequestIpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(AccountTokenConditionRequestIpOutputReference.prototype, "in", {
        get: function () {
            return this.getListAttribute('in');
        },
        set: function (value) {
            this._in = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountTokenConditionRequestIpOutputReference.prototype.resetIn = function () {
        this._in = undefined;
    };
    Object.defineProperty(AccountTokenConditionRequestIpOutputReference.prototype, "inInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._in;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountTokenConditionRequestIpOutputReference.prototype, "notIn", {
        get: function () {
            return this.getListAttribute('not_in');
        },
        set: function (value) {
            this._notIn = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountTokenConditionRequestIpOutputReference.prototype.resetNotIn = function () {
        this._notIn = undefined;
    };
    Object.defineProperty(AccountTokenConditionRequestIpOutputReference.prototype, "notInInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notIn;
        },
        enumerable: false,
        configurable: true
    });
    return AccountTokenConditionRequestIpOutputReference;
}(cdktf.ComplexObject));
exports.AccountTokenConditionRequestIpOutputReference = AccountTokenConditionRequestIpOutputReference;
function accountTokenConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        request_ip: accountTokenConditionRequestIpToTerraform(struct.requestIp),
    };
}
function accountTokenConditionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        request_ip: {
            value: accountTokenConditionRequestIpToHclTerraform(struct.requestIp),
            isBlock: true,
            type: "struct",
            storageClassType: "AccountTokenConditionRequestIp",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var AccountTokenConditionOutputReference = /** @class */ (function (_super) {
    __extends(AccountTokenConditionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AccountTokenConditionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // request_ip - computed: false, optional: true, required: false
        _this._requestIp = new AccountTokenConditionRequestIpOutputReference(_this, "request_ip");
        return _this;
    }
    Object.defineProperty(AccountTokenConditionOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(AccountTokenConditionOutputReference.prototype, "requestIp", {
        get: function () {
            return this._requestIp;
        },
        enumerable: false,
        configurable: true
    });
    AccountTokenConditionOutputReference.prototype.putRequestIp = function (value) {
        this._requestIp.internalValue = value;
    };
    AccountTokenConditionOutputReference.prototype.resetRequestIp = function () {
        this._requestIp.internalValue = undefined;
    };
    Object.defineProperty(AccountTokenConditionOutputReference.prototype, "requestIpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestIp.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return AccountTokenConditionOutputReference;
}(cdktf.ComplexObject));
exports.AccountTokenConditionOutputReference = AccountTokenConditionOutputReference;
function accountTokenPoliciesPermissionGroupsToTerraform(struct) {
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
function accountTokenPoliciesPermissionGroupsToHclTerraform(struct) {
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
var AccountTokenPoliciesPermissionGroupsOutputReference = /** @class */ (function (_super) {
    __extends(AccountTokenPoliciesPermissionGroupsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AccountTokenPoliciesPermissionGroupsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AccountTokenPoliciesPermissionGroupsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(AccountTokenPoliciesPermissionGroupsOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountTokenPoliciesPermissionGroupsOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return AccountTokenPoliciesPermissionGroupsOutputReference;
}(cdktf.ComplexObject));
exports.AccountTokenPoliciesPermissionGroupsOutputReference = AccountTokenPoliciesPermissionGroupsOutputReference;
var AccountTokenPoliciesPermissionGroupsList = /** @class */ (function (_super) {
    __extends(AccountTokenPoliciesPermissionGroupsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AccountTokenPoliciesPermissionGroupsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    AccountTokenPoliciesPermissionGroupsList.prototype.get = function (index) {
        return new AccountTokenPoliciesPermissionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return AccountTokenPoliciesPermissionGroupsList;
}(cdktf.ComplexList));
exports.AccountTokenPoliciesPermissionGroupsList = AccountTokenPoliciesPermissionGroupsList;
function accountTokenPoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        effect: cdktf.stringToTerraform(struct.effect),
        permission_groups: cdktf.listMapper(accountTokenPoliciesPermissionGroupsToTerraform, false)(struct.permissionGroups),
        resources: cdktf.stringToTerraform(struct.resources),
    };
}
function accountTokenPoliciesToHclTerraform(struct) {
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
            value: cdktf.listMapperHcl(accountTokenPoliciesPermissionGroupsToHclTerraform, false)(struct.permissionGroups),
            isBlock: true,
            type: "list",
            storageClassType: "AccountTokenPoliciesPermissionGroupsList",
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
var AccountTokenPoliciesOutputReference = /** @class */ (function (_super) {
    __extends(AccountTokenPoliciesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AccountTokenPoliciesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // permission_groups - computed: false, optional: false, required: true
        _this._permissionGroups = new AccountTokenPoliciesPermissionGroupsList(_this, "permission_groups", false);
        return _this;
    }
    Object.defineProperty(AccountTokenPoliciesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(AccountTokenPoliciesOutputReference.prototype, "effect", {
        get: function () {
            return this.getStringAttribute('effect');
        },
        set: function (value) {
            this._effect = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountTokenPoliciesOutputReference.prototype, "effectInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._effect;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountTokenPoliciesOutputReference.prototype, "permissionGroups", {
        get: function () {
            return this._permissionGroups;
        },
        enumerable: false,
        configurable: true
    });
    AccountTokenPoliciesOutputReference.prototype.putPermissionGroups = function (value) {
        this._permissionGroups.internalValue = value;
    };
    Object.defineProperty(AccountTokenPoliciesOutputReference.prototype, "permissionGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permissionGroups.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountTokenPoliciesOutputReference.prototype, "resources", {
        get: function () {
            return this.getStringAttribute('resources');
        },
        set: function (value) {
            this._resources = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountTokenPoliciesOutputReference.prototype, "resourcesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resources;
        },
        enumerable: false,
        configurable: true
    });
    return AccountTokenPoliciesOutputReference;
}(cdktf.ComplexObject));
exports.AccountTokenPoliciesOutputReference = AccountTokenPoliciesOutputReference;
var AccountTokenPoliciesList = /** @class */ (function (_super) {
    __extends(AccountTokenPoliciesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AccountTokenPoliciesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    AccountTokenPoliciesList.prototype.get = function (index) {
        return new AccountTokenPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return AccountTokenPoliciesList;
}(cdktf.ComplexList));
exports.AccountTokenPoliciesList = AccountTokenPoliciesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_token cloudflare_account_token}
*/
var AccountToken = /** @class */ (function (_super) {
    __extends(AccountToken, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_token cloudflare_account_token} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AccountTokenConfig
    */
    function AccountToken(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_account_token',
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
        // condition - computed: false, optional: true, required: false
        _this._condition = new AccountTokenConditionOutputReference(_this, "condition");
        // policies - computed: false, optional: false, required: true
        _this._policies = new AccountTokenPoliciesList(_this, "policies", false);
        _this._accountId = config.accountId;
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
    * Generates CDKTF code for importing a AccountToken resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AccountToken to import
    * @param importFromId The id of the existing AccountToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_token#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AccountToken to import is found
    */
    AccountToken.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account_token", importId: importFromId, provider: provider });
    };
    Object.defineProperty(AccountToken.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountToken.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountToken.prototype, "condition", {
        get: function () {
            return this._condition;
        },
        enumerable: false,
        configurable: true
    });
    AccountToken.prototype.putCondition = function (value) {
        this._condition.internalValue = value;
    };
    AccountToken.prototype.resetCondition = function () {
        this._condition.internalValue = undefined;
    };
    Object.defineProperty(AccountToken.prototype, "conditionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._condition.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountToken.prototype, "expiresOn", {
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        set: function (value) {
            this._expiresOn = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountToken.prototype.resetExpiresOn = function () {
        this._expiresOn = undefined;
    };
    Object.defineProperty(AccountToken.prototype, "expiresOnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expiresOn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountToken.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountToken.prototype, "issuedOn", {
        // issued_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issued_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountToken.prototype, "lastUsedOn", {
        // last_used_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_used_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountToken.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountToken.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountToken.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountToken.prototype, "notBefore", {
        get: function () {
            return this.getStringAttribute('not_before');
        },
        set: function (value) {
            this._notBefore = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountToken.prototype.resetNotBefore = function () {
        this._notBefore = undefined;
    };
    Object.defineProperty(AccountToken.prototype, "notBeforeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notBefore;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountToken.prototype, "policies", {
        get: function () {
            return this._policies;
        },
        enumerable: false,
        configurable: true
    });
    AccountToken.prototype.putPolicies = function (value) {
        this._policies.internalValue = value;
    };
    Object.defineProperty(AccountToken.prototype, "policiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policies.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountToken.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountToken.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(AccountToken.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountToken.prototype, "value", {
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
    AccountToken.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            condition: accountTokenConditionToTerraform(this._condition.internalValue),
            expires_on: cdktf.stringToTerraform(this._expiresOn),
            name: cdktf.stringToTerraform(this._name),
            not_before: cdktf.stringToTerraform(this._notBefore),
            policies: cdktf.listMapper(accountTokenPoliciesToTerraform, false)(this._policies.internalValue),
            status: cdktf.stringToTerraform(this._status),
        };
    };
    AccountToken.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            condition: {
                value: accountTokenConditionToHclTerraform(this._condition.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AccountTokenCondition",
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
                value: cdktf.listMapperHcl(accountTokenPoliciesToHclTerraform, false)(this._policies.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AccountTokenPoliciesList",
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
    AccountToken.tfResourceType = "cloudflare_account_token";
    return AccountToken;
}(cdktf.TerraformResource));
exports.AccountToken = AccountToken;
