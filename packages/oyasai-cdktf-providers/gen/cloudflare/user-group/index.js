"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group
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
exports.UserGroup = exports.UserGroupPoliciesList = exports.UserGroupPoliciesOutputReference = exports.UserGroupPoliciesResourceGroupsList = exports.UserGroupPoliciesResourceGroupsOutputReference = exports.UserGroupPoliciesPermissionGroupsList = exports.UserGroupPoliciesPermissionGroupsOutputReference = void 0;
exports.userGroupPoliciesPermissionGroupsToTerraform = userGroupPoliciesPermissionGroupsToTerraform;
exports.userGroupPoliciesPermissionGroupsToHclTerraform = userGroupPoliciesPermissionGroupsToHclTerraform;
exports.userGroupPoliciesResourceGroupsToTerraform = userGroupPoliciesResourceGroupsToTerraform;
exports.userGroupPoliciesResourceGroupsToHclTerraform = userGroupPoliciesResourceGroupsToHclTerraform;
exports.userGroupPoliciesToTerraform = userGroupPoliciesToTerraform;
exports.userGroupPoliciesToHclTerraform = userGroupPoliciesToHclTerraform;
var cdktf = require("cdktf");
function userGroupPoliciesPermissionGroupsToTerraform(struct) {
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
function userGroupPoliciesPermissionGroupsToHclTerraform(struct) {
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
var UserGroupPoliciesPermissionGroupsOutputReference = /** @class */ (function (_super) {
    __extends(UserGroupPoliciesPermissionGroupsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function UserGroupPoliciesPermissionGroupsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(UserGroupPoliciesPermissionGroupsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(UserGroupPoliciesPermissionGroupsOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserGroupPoliciesPermissionGroupsOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return UserGroupPoliciesPermissionGroupsOutputReference;
}(cdktf.ComplexObject));
exports.UserGroupPoliciesPermissionGroupsOutputReference = UserGroupPoliciesPermissionGroupsOutputReference;
var UserGroupPoliciesPermissionGroupsList = /** @class */ (function (_super) {
    __extends(UserGroupPoliciesPermissionGroupsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function UserGroupPoliciesPermissionGroupsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    UserGroupPoliciesPermissionGroupsList.prototype.get = function (index) {
        return new UserGroupPoliciesPermissionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return UserGroupPoliciesPermissionGroupsList;
}(cdktf.ComplexList));
exports.UserGroupPoliciesPermissionGroupsList = UserGroupPoliciesPermissionGroupsList;
function userGroupPoliciesResourceGroupsToTerraform(struct) {
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
function userGroupPoliciesResourceGroupsToHclTerraform(struct) {
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
var UserGroupPoliciesResourceGroupsOutputReference = /** @class */ (function (_super) {
    __extends(UserGroupPoliciesResourceGroupsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function UserGroupPoliciesResourceGroupsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(UserGroupPoliciesResourceGroupsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(UserGroupPoliciesResourceGroupsOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserGroupPoliciesResourceGroupsOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return UserGroupPoliciesResourceGroupsOutputReference;
}(cdktf.ComplexObject));
exports.UserGroupPoliciesResourceGroupsOutputReference = UserGroupPoliciesResourceGroupsOutputReference;
var UserGroupPoliciesResourceGroupsList = /** @class */ (function (_super) {
    __extends(UserGroupPoliciesResourceGroupsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function UserGroupPoliciesResourceGroupsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    UserGroupPoliciesResourceGroupsList.prototype.get = function (index) {
        return new UserGroupPoliciesResourceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return UserGroupPoliciesResourceGroupsList;
}(cdktf.ComplexList));
exports.UserGroupPoliciesResourceGroupsList = UserGroupPoliciesResourceGroupsList;
function userGroupPoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access: cdktf.stringToTerraform(struct.access),
        permission_groups: cdktf.listMapper(userGroupPoliciesPermissionGroupsToTerraform, false)(struct.permissionGroups),
        resource_groups: cdktf.listMapper(userGroupPoliciesResourceGroupsToTerraform, false)(struct.resourceGroups),
    };
}
function userGroupPoliciesToHclTerraform(struct) {
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
            value: cdktf.listMapperHcl(userGroupPoliciesPermissionGroupsToHclTerraform, false)(struct.permissionGroups),
            isBlock: true,
            type: "list",
            storageClassType: "UserGroupPoliciesPermissionGroupsList",
        },
        resource_groups: {
            value: cdktf.listMapperHcl(userGroupPoliciesResourceGroupsToHclTerraform, false)(struct.resourceGroups),
            isBlock: true,
            type: "list",
            storageClassType: "UserGroupPoliciesResourceGroupsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var UserGroupPoliciesOutputReference = /** @class */ (function (_super) {
    __extends(UserGroupPoliciesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function UserGroupPoliciesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // permission_groups - computed: false, optional: false, required: true
        _this._permissionGroups = new UserGroupPoliciesPermissionGroupsList(_this, "permission_groups", false);
        // resource_groups - computed: false, optional: false, required: true
        _this._resourceGroups = new UserGroupPoliciesResourceGroupsList(_this, "resource_groups", false);
        return _this;
    }
    Object.defineProperty(UserGroupPoliciesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(UserGroupPoliciesOutputReference.prototype, "access", {
        get: function () {
            return this.getStringAttribute('access');
        },
        set: function (value) {
            this._access = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserGroupPoliciesOutputReference.prototype, "accessInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._access;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserGroupPoliciesOutputReference.prototype, "permissionGroups", {
        get: function () {
            return this._permissionGroups;
        },
        enumerable: false,
        configurable: true
    });
    UserGroupPoliciesOutputReference.prototype.putPermissionGroups = function (value) {
        this._permissionGroups.internalValue = value;
    };
    Object.defineProperty(UserGroupPoliciesOutputReference.prototype, "permissionGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permissionGroups.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserGroupPoliciesOutputReference.prototype, "resourceGroups", {
        get: function () {
            return this._resourceGroups;
        },
        enumerable: false,
        configurable: true
    });
    UserGroupPoliciesOutputReference.prototype.putResourceGroups = function (value) {
        this._resourceGroups.internalValue = value;
    };
    Object.defineProperty(UserGroupPoliciesOutputReference.prototype, "resourceGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceGroups.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return UserGroupPoliciesOutputReference;
}(cdktf.ComplexObject));
exports.UserGroupPoliciesOutputReference = UserGroupPoliciesOutputReference;
var UserGroupPoliciesList = /** @class */ (function (_super) {
    __extends(UserGroupPoliciesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function UserGroupPoliciesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    UserGroupPoliciesList.prototype.get = function (index) {
        return new UserGroupPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return UserGroupPoliciesList;
}(cdktf.ComplexList));
exports.UserGroupPoliciesList = UserGroupPoliciesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group cloudflare_user_group}
*/
var UserGroup = /** @class */ (function (_super) {
    __extends(UserGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group cloudflare_user_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options UserGroupConfig
    */
    function UserGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_user_group',
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
        // policies - computed: false, optional: true, required: false
        _this._policies = new UserGroupPoliciesList(_this, "policies", false);
        _this._accountId = config.accountId;
        _this._name = config.name;
        _this._policies.internalValue = config.policies;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a UserGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the UserGroup to import
    * @param importFromId The id of the existing UserGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the UserGroup to import is found
    */
    UserGroup.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_user_group", importId: importFromId, provider: provider });
    };
    Object.defineProperty(UserGroup.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserGroup.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserGroup.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserGroup.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserGroup.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserGroup.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserGroup.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserGroup.prototype, "policies", {
        get: function () {
            return this._policies;
        },
        enumerable: false,
        configurable: true
    });
    UserGroup.prototype.putPolicies = function (value) {
        this._policies.internalValue = value;
    };
    UserGroup.prototype.resetPolicies = function () {
        this._policies.internalValue = undefined;
    };
    Object.defineProperty(UserGroup.prototype, "policiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policies.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    UserGroup.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            name: cdktf.stringToTerraform(this._name),
            policies: cdktf.listMapper(userGroupPoliciesToTerraform, false)(this._policies.internalValue),
        };
    };
    UserGroup.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
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
            policies: {
                value: cdktf.listMapperHcl(userGroupPoliciesToHclTerraform, false)(this._policies.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "UserGroupPoliciesList",
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
    UserGroup.tfResourceType = "cloudflare_user_group";
    return UserGroup;
}(cdktf.TerraformResource));
exports.UserGroup = UserGroup;
