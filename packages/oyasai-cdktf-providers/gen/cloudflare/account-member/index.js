"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_member
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
exports.AccountMember = exports.AccountMemberUserOutputReference = exports.AccountMemberPoliciesList = exports.AccountMemberPoliciesOutputReference = exports.AccountMemberPoliciesResourceGroupsList = exports.AccountMemberPoliciesResourceGroupsOutputReference = exports.AccountMemberPoliciesPermissionGroupsList = exports.AccountMemberPoliciesPermissionGroupsOutputReference = void 0;
exports.accountMemberPoliciesPermissionGroupsToTerraform = accountMemberPoliciesPermissionGroupsToTerraform;
exports.accountMemberPoliciesPermissionGroupsToHclTerraform = accountMemberPoliciesPermissionGroupsToHclTerraform;
exports.accountMemberPoliciesResourceGroupsToTerraform = accountMemberPoliciesResourceGroupsToTerraform;
exports.accountMemberPoliciesResourceGroupsToHclTerraform = accountMemberPoliciesResourceGroupsToHclTerraform;
exports.accountMemberPoliciesToTerraform = accountMemberPoliciesToTerraform;
exports.accountMemberPoliciesToHclTerraform = accountMemberPoliciesToHclTerraform;
exports.accountMemberUserToTerraform = accountMemberUserToTerraform;
exports.accountMemberUserToHclTerraform = accountMemberUserToHclTerraform;
var cdktf = require("cdktf");
function accountMemberPoliciesPermissionGroupsToTerraform(struct) {
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
function accountMemberPoliciesPermissionGroupsToHclTerraform(struct) {
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
var AccountMemberPoliciesPermissionGroupsOutputReference = /** @class */ (function (_super) {
    __extends(AccountMemberPoliciesPermissionGroupsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AccountMemberPoliciesPermissionGroupsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AccountMemberPoliciesPermissionGroupsOutputReference.prototype, "internalValue", {
        get: function () {
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
                this._id = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._id = value.id;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountMemberPoliciesPermissionGroupsOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountMemberPoliciesPermissionGroupsOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return AccountMemberPoliciesPermissionGroupsOutputReference;
}(cdktf.ComplexObject));
exports.AccountMemberPoliciesPermissionGroupsOutputReference = AccountMemberPoliciesPermissionGroupsOutputReference;
var AccountMemberPoliciesPermissionGroupsList = /** @class */ (function (_super) {
    __extends(AccountMemberPoliciesPermissionGroupsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AccountMemberPoliciesPermissionGroupsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    AccountMemberPoliciesPermissionGroupsList.prototype.get = function (index) {
        return new AccountMemberPoliciesPermissionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return AccountMemberPoliciesPermissionGroupsList;
}(cdktf.ComplexList));
exports.AccountMemberPoliciesPermissionGroupsList = AccountMemberPoliciesPermissionGroupsList;
function accountMemberPoliciesResourceGroupsToTerraform(struct) {
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
function accountMemberPoliciesResourceGroupsToHclTerraform(struct) {
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
var AccountMemberPoliciesResourceGroupsOutputReference = /** @class */ (function (_super) {
    __extends(AccountMemberPoliciesResourceGroupsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AccountMemberPoliciesResourceGroupsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AccountMemberPoliciesResourceGroupsOutputReference.prototype, "internalValue", {
        get: function () {
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
                this._id = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._id = value.id;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountMemberPoliciesResourceGroupsOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountMemberPoliciesResourceGroupsOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return AccountMemberPoliciesResourceGroupsOutputReference;
}(cdktf.ComplexObject));
exports.AccountMemberPoliciesResourceGroupsOutputReference = AccountMemberPoliciesResourceGroupsOutputReference;
var AccountMemberPoliciesResourceGroupsList = /** @class */ (function (_super) {
    __extends(AccountMemberPoliciesResourceGroupsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AccountMemberPoliciesResourceGroupsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    AccountMemberPoliciesResourceGroupsList.prototype.get = function (index) {
        return new AccountMemberPoliciesResourceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return AccountMemberPoliciesResourceGroupsList;
}(cdktf.ComplexList));
exports.AccountMemberPoliciesResourceGroupsList = AccountMemberPoliciesResourceGroupsList;
function accountMemberPoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access: cdktf.stringToTerraform(struct.access),
        permission_groups: cdktf.listMapper(accountMemberPoliciesPermissionGroupsToTerraform, false)(struct.permissionGroups),
        resource_groups: cdktf.listMapper(accountMemberPoliciesResourceGroupsToTerraform, false)(struct.resourceGroups),
    };
}
function accountMemberPoliciesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        access: {
            value: cdktf.stringToHclTerraform(struct.access),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        permission_groups: {
            value: cdktf.listMapperHcl(accountMemberPoliciesPermissionGroupsToHclTerraform, false)(struct.permissionGroups),
            isBlock: true,
            type: "set",
            storageClassType: "AccountMemberPoliciesPermissionGroupsList",
        },
        resource_groups: {
            value: cdktf.listMapperHcl(accountMemberPoliciesResourceGroupsToHclTerraform, false)(struct.resourceGroups),
            isBlock: true,
            type: "set",
            storageClassType: "AccountMemberPoliciesResourceGroupsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var AccountMemberPoliciesOutputReference = /** @class */ (function (_super) {
    __extends(AccountMemberPoliciesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AccountMemberPoliciesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // permission_groups - computed: true, optional: false, required: true
        _this._permissionGroups = new AccountMemberPoliciesPermissionGroupsList(_this, "permission_groups", true);
        // resource_groups - computed: true, optional: false, required: true
        _this._resourceGroups = new AccountMemberPoliciesResourceGroupsList(_this, "resource_groups", true);
        return _this;
    }
    Object.defineProperty(AccountMemberPoliciesOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._access !== undefined) {
                hasAnyValues = true;
                internalValueResult.access = this._access;
            }
            if (((_a = this._permissionGroups) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.permissionGroups = (_b = this._permissionGroups) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._resourceGroups) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.resourceGroups = (_d = this._resourceGroups) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._access = undefined;
                this._permissionGroups.internalValue = undefined;
                this._resourceGroups.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._access = value.access;
                this._permissionGroups.internalValue = value.permissionGroups;
                this._resourceGroups.internalValue = value.resourceGroups;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountMemberPoliciesOutputReference.prototype, "access", {
        get: function () {
            return this.getStringAttribute('access');
        },
        set: function (value) {
            this._access = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountMemberPoliciesOutputReference.prototype, "accessInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._access;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountMemberPoliciesOutputReference.prototype, "permissionGroups", {
        get: function () {
            return this._permissionGroups;
        },
        enumerable: false,
        configurable: true
    });
    AccountMemberPoliciesOutputReference.prototype.putPermissionGroups = function (value) {
        this._permissionGroups.internalValue = value;
    };
    Object.defineProperty(AccountMemberPoliciesOutputReference.prototype, "permissionGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permissionGroups.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountMemberPoliciesOutputReference.prototype, "resourceGroups", {
        get: function () {
            return this._resourceGroups;
        },
        enumerable: false,
        configurable: true
    });
    AccountMemberPoliciesOutputReference.prototype.putResourceGroups = function (value) {
        this._resourceGroups.internalValue = value;
    };
    Object.defineProperty(AccountMemberPoliciesOutputReference.prototype, "resourceGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceGroups.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return AccountMemberPoliciesOutputReference;
}(cdktf.ComplexObject));
exports.AccountMemberPoliciesOutputReference = AccountMemberPoliciesOutputReference;
var AccountMemberPoliciesList = /** @class */ (function (_super) {
    __extends(AccountMemberPoliciesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AccountMemberPoliciesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    AccountMemberPoliciesList.prototype.get = function (index) {
        return new AccountMemberPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return AccountMemberPoliciesList;
}(cdktf.ComplexList));
exports.AccountMemberPoliciesList = AccountMemberPoliciesList;
function accountMemberUserToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function accountMemberUserToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var AccountMemberUserOutputReference = /** @class */ (function (_super) {
    __extends(AccountMemberUserOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AccountMemberUserOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AccountMemberUserOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(AccountMemberUserOutputReference.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountMemberUserOutputReference.prototype, "firstName", {
        // first_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('first_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountMemberUserOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountMemberUserOutputReference.prototype, "lastName", {
        // last_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountMemberUserOutputReference.prototype, "twoFactorAuthenticationEnabled", {
        // two_factor_authentication_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('two_factor_authentication_enabled');
        },
        enumerable: false,
        configurable: true
    });
    return AccountMemberUserOutputReference;
}(cdktf.ComplexObject));
exports.AccountMemberUserOutputReference = AccountMemberUserOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_member cloudflare_account_member}
*/
var AccountMember = /** @class */ (function (_super) {
    __extends(AccountMember, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_member cloudflare_account_member} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AccountMemberConfig
    */
    function AccountMember(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_account_member',
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
        // policies - computed: true, optional: true, required: false
        _this._policies = new AccountMemberPoliciesList(_this, "policies", true);
        // user - computed: true, optional: false, required: false
        _this._user = new AccountMemberUserOutputReference(_this, "user");
        _this._accountId = config.accountId;
        _this._email = config.email;
        _this._policies.internalValue = config.policies;
        _this._roles = config.roles;
        _this._status = config.status;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AccountMember resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AccountMember to import
    * @param importFromId The id of the existing AccountMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_member#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AccountMember to import is found
    */
    AccountMember.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account_member", importId: importFromId, provider: provider });
    };
    Object.defineProperty(AccountMember.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountMember.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(AccountMember.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountMember.prototype, "email", {
        get: function () {
            return this.getStringAttribute('email');
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountMember.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountMember.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountMember.prototype, "policies", {
        get: function () {
            return this._policies;
        },
        enumerable: false,
        configurable: true
    });
    AccountMember.prototype.putPolicies = function (value) {
        this._policies.internalValue = value;
    };
    AccountMember.prototype.resetPolicies = function () {
        this._policies.internalValue = undefined;
    };
    Object.defineProperty(AccountMember.prototype, "policiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policies.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountMember.prototype, "roles", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('roles'));
        },
        set: function (value) {
            this._roles = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountMember.prototype.resetRoles = function () {
        this._roles = undefined;
    };
    Object.defineProperty(AccountMember.prototype, "rolesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountMember.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountMember.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(AccountMember.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountMember.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AccountMember.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            email: cdktf.stringToTerraform(this._email),
            policies: cdktf.listMapper(accountMemberPoliciesToTerraform, false)(this._policies.internalValue),
            roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
            status: cdktf.stringToTerraform(this._status),
        };
    };
    AccountMember.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            email: {
                value: cdktf.stringToHclTerraform(this._email),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policies: {
                value: cdktf.listMapperHcl(accountMemberPoliciesToHclTerraform, false)(this._policies.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "AccountMemberPoliciesList",
            },
            roles: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
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
    AccountMember.tfResourceType = "cloudflare_account_member";
    return AccountMember;
}(cdktf.TerraformResource));
exports.AccountMember = AccountMember;
