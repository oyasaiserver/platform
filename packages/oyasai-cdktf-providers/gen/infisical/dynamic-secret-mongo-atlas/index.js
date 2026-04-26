"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas
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
exports.DynamicSecretMongoAtlas = exports.DynamicSecretMongoAtlasMetadataList = exports.DynamicSecretMongoAtlasMetadataOutputReference = exports.DynamicSecretMongoAtlasConfigurationOutputReference = exports.DynamicSecretMongoAtlasConfigurationScopesList = exports.DynamicSecretMongoAtlasConfigurationScopesOutputReference = exports.DynamicSecretMongoAtlasConfigurationRolesList = exports.DynamicSecretMongoAtlasConfigurationRolesOutputReference = void 0;
exports.dynamicSecretMongoAtlasConfigurationRolesToTerraform = dynamicSecretMongoAtlasConfigurationRolesToTerraform;
exports.dynamicSecretMongoAtlasConfigurationRolesToHclTerraform = dynamicSecretMongoAtlasConfigurationRolesToHclTerraform;
exports.dynamicSecretMongoAtlasConfigurationScopesToTerraform = dynamicSecretMongoAtlasConfigurationScopesToTerraform;
exports.dynamicSecretMongoAtlasConfigurationScopesToHclTerraform = dynamicSecretMongoAtlasConfigurationScopesToHclTerraform;
exports.dynamicSecretMongoAtlasConfigurationToTerraform = dynamicSecretMongoAtlasConfigurationToTerraform;
exports.dynamicSecretMongoAtlasConfigurationToHclTerraform = dynamicSecretMongoAtlasConfigurationToHclTerraform;
exports.dynamicSecretMongoAtlasMetadataToTerraform = dynamicSecretMongoAtlasMetadataToTerraform;
exports.dynamicSecretMongoAtlasMetadataToHclTerraform = dynamicSecretMongoAtlasMetadataToHclTerraform;
var cdktf = require("cdktf");
function dynamicSecretMongoAtlasConfigurationRolesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        collection_name: cdktf.stringToTerraform(struct.collectionName),
        database_name: cdktf.stringToTerraform(struct.databaseName),
        role_name: cdktf.stringToTerraform(struct.roleName),
    };
}
function dynamicSecretMongoAtlasConfigurationRolesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        collection_name: {
            value: cdktf.stringToHclTerraform(struct.collectionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_name: {
            value: cdktf.stringToHclTerraform(struct.databaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_name: {
            value: cdktf.stringToHclTerraform(struct.roleName),
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
var DynamicSecretMongoAtlasConfigurationRolesOutputReference = /** @class */ (function (_super) {
    __extends(DynamicSecretMongoAtlasConfigurationRolesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DynamicSecretMongoAtlasConfigurationRolesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DynamicSecretMongoAtlasConfigurationRolesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._collectionName !== undefined) {
                hasAnyValues = true;
                internalValueResult.collectionName = this._collectionName;
            }
            if (this._databaseName !== undefined) {
                hasAnyValues = true;
                internalValueResult.databaseName = this._databaseName;
            }
            if (this._roleName !== undefined) {
                hasAnyValues = true;
                internalValueResult.roleName = this._roleName;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._collectionName = undefined;
                this._databaseName = undefined;
                this._roleName = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._collectionName = value.collectionName;
                this._databaseName = value.databaseName;
                this._roleName = value.roleName;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlasConfigurationRolesOutputReference.prototype, "collectionName", {
        get: function () {
            return this.getStringAttribute('collection_name');
        },
        set: function (value) {
            this._collectionName = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretMongoAtlasConfigurationRolesOutputReference.prototype.resetCollectionName = function () {
        this._collectionName = undefined;
    };
    Object.defineProperty(DynamicSecretMongoAtlasConfigurationRolesOutputReference.prototype, "collectionNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._collectionName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlasConfigurationRolesOutputReference.prototype, "databaseName", {
        get: function () {
            return this.getStringAttribute('database_name');
        },
        set: function (value) {
            this._databaseName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlasConfigurationRolesOutputReference.prototype, "databaseNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._databaseName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlasConfigurationRolesOutputReference.prototype, "roleName", {
        get: function () {
            return this.getStringAttribute('role_name');
        },
        set: function (value) {
            this._roleName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlasConfigurationRolesOutputReference.prototype, "roleNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleName;
        },
        enumerable: false,
        configurable: true
    });
    return DynamicSecretMongoAtlasConfigurationRolesOutputReference;
}(cdktf.ComplexObject));
exports.DynamicSecretMongoAtlasConfigurationRolesOutputReference = DynamicSecretMongoAtlasConfigurationRolesOutputReference;
var DynamicSecretMongoAtlasConfigurationRolesList = /** @class */ (function (_super) {
    __extends(DynamicSecretMongoAtlasConfigurationRolesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DynamicSecretMongoAtlasConfigurationRolesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DynamicSecretMongoAtlasConfigurationRolesList.prototype.get = function (index) {
        return new DynamicSecretMongoAtlasConfigurationRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DynamicSecretMongoAtlasConfigurationRolesList;
}(cdktf.ComplexList));
exports.DynamicSecretMongoAtlasConfigurationRolesList = DynamicSecretMongoAtlasConfigurationRolesList;
function dynamicSecretMongoAtlasConfigurationScopesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        type: cdktf.stringToTerraform(struct.type),
    };
}
function dynamicSecretMongoAtlasConfigurationScopesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
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
var DynamicSecretMongoAtlasConfigurationScopesOutputReference = /** @class */ (function (_super) {
    __extends(DynamicSecretMongoAtlasConfigurationScopesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DynamicSecretMongoAtlasConfigurationScopesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DynamicSecretMongoAtlasConfigurationScopesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._name = undefined;
                this._type = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._name = value.name;
                this._type = value.type;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlasConfigurationScopesOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlasConfigurationScopesOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlasConfigurationScopesOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlasConfigurationScopesOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return DynamicSecretMongoAtlasConfigurationScopesOutputReference;
}(cdktf.ComplexObject));
exports.DynamicSecretMongoAtlasConfigurationScopesOutputReference = DynamicSecretMongoAtlasConfigurationScopesOutputReference;
var DynamicSecretMongoAtlasConfigurationScopesList = /** @class */ (function (_super) {
    __extends(DynamicSecretMongoAtlasConfigurationScopesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DynamicSecretMongoAtlasConfigurationScopesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DynamicSecretMongoAtlasConfigurationScopesList.prototype.get = function (index) {
        return new DynamicSecretMongoAtlasConfigurationScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DynamicSecretMongoAtlasConfigurationScopesList;
}(cdktf.ComplexList));
exports.DynamicSecretMongoAtlasConfigurationScopesList = DynamicSecretMongoAtlasConfigurationScopesList;
function dynamicSecretMongoAtlasConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        admin_private_key: cdktf.stringToTerraform(struct.adminPrivateKey),
        admin_public_key: cdktf.stringToTerraform(struct.adminPublicKey),
        group_id: cdktf.stringToTerraform(struct.groupId),
        roles: cdktf.listMapper(dynamicSecretMongoAtlasConfigurationRolesToTerraform, false)(struct.roles),
        scopes: cdktf.listMapper(dynamicSecretMongoAtlasConfigurationScopesToTerraform, false)(struct.scopes),
    };
}
function dynamicSecretMongoAtlasConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        admin_private_key: {
            value: cdktf.stringToHclTerraform(struct.adminPrivateKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        admin_public_key: {
            value: cdktf.stringToHclTerraform(struct.adminPublicKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        group_id: {
            value: cdktf.stringToHclTerraform(struct.groupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        roles: {
            value: cdktf.listMapperHcl(dynamicSecretMongoAtlasConfigurationRolesToHclTerraform, false)(struct.roles),
            isBlock: true,
            type: "list",
            storageClassType: "DynamicSecretMongoAtlasConfigurationRolesList",
        },
        scopes: {
            value: cdktf.listMapperHcl(dynamicSecretMongoAtlasConfigurationScopesToHclTerraform, false)(struct.scopes),
            isBlock: true,
            type: "list",
            storageClassType: "DynamicSecretMongoAtlasConfigurationScopesList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var DynamicSecretMongoAtlasConfigurationOutputReference = /** @class */ (function (_super) {
    __extends(DynamicSecretMongoAtlasConfigurationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DynamicSecretMongoAtlasConfigurationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // roles - computed: false, optional: false, required: true
        _this._roles = new DynamicSecretMongoAtlasConfigurationRolesList(_this, "roles", false);
        // scopes - computed: true, optional: true, required: false
        _this._scopes = new DynamicSecretMongoAtlasConfigurationScopesList(_this, "scopes", false);
        return _this;
    }
    Object.defineProperty(DynamicSecretMongoAtlasConfigurationOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._adminPrivateKey !== undefined) {
                hasAnyValues = true;
                internalValueResult.adminPrivateKey = this._adminPrivateKey;
            }
            if (this._adminPublicKey !== undefined) {
                hasAnyValues = true;
                internalValueResult.adminPublicKey = this._adminPublicKey;
            }
            if (this._groupId !== undefined) {
                hasAnyValues = true;
                internalValueResult.groupId = this._groupId;
            }
            if (((_a = this._roles) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.roles = (_b = this._roles) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._scopes) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.scopes = (_d = this._scopes) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._adminPrivateKey = undefined;
                this._adminPublicKey = undefined;
                this._groupId = undefined;
                this._roles.internalValue = undefined;
                this._scopes.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._adminPrivateKey = value.adminPrivateKey;
                this._adminPublicKey = value.adminPublicKey;
                this._groupId = value.groupId;
                this._roles.internalValue = value.roles;
                this._scopes.internalValue = value.scopes;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlasConfigurationOutputReference.prototype, "adminPrivateKey", {
        get: function () {
            return this.getStringAttribute('admin_private_key');
        },
        set: function (value) {
            this._adminPrivateKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlasConfigurationOutputReference.prototype, "adminPrivateKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._adminPrivateKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlasConfigurationOutputReference.prototype, "adminPublicKey", {
        get: function () {
            return this.getStringAttribute('admin_public_key');
        },
        set: function (value) {
            this._adminPublicKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlasConfigurationOutputReference.prototype, "adminPublicKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._adminPublicKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlasConfigurationOutputReference.prototype, "groupId", {
        get: function () {
            return this.getStringAttribute('group_id');
        },
        set: function (value) {
            this._groupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlasConfigurationOutputReference.prototype, "groupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._groupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlasConfigurationOutputReference.prototype, "roles", {
        get: function () {
            return this._roles;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretMongoAtlasConfigurationOutputReference.prototype.putRoles = function (value) {
        this._roles.internalValue = value;
    };
    Object.defineProperty(DynamicSecretMongoAtlasConfigurationOutputReference.prototype, "rolesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roles.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlasConfigurationOutputReference.prototype, "scopes", {
        get: function () {
            return this._scopes;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretMongoAtlasConfigurationOutputReference.prototype.putScopes = function (value) {
        this._scopes.internalValue = value;
    };
    DynamicSecretMongoAtlasConfigurationOutputReference.prototype.resetScopes = function () {
        this._scopes.internalValue = undefined;
    };
    Object.defineProperty(DynamicSecretMongoAtlasConfigurationOutputReference.prototype, "scopesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scopes.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return DynamicSecretMongoAtlasConfigurationOutputReference;
}(cdktf.ComplexObject));
exports.DynamicSecretMongoAtlasConfigurationOutputReference = DynamicSecretMongoAtlasConfigurationOutputReference;
function dynamicSecretMongoAtlasMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function dynamicSecretMongoAtlasMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        key: {
            value: cdktf.stringToHclTerraform(struct.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
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
var DynamicSecretMongoAtlasMetadataOutputReference = /** @class */ (function (_super) {
    __extends(DynamicSecretMongoAtlasMetadataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DynamicSecretMongoAtlasMetadataOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DynamicSecretMongoAtlasMetadataOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._key !== undefined) {
                hasAnyValues = true;
                internalValueResult.key = this._key;
            }
            if (this._value !== undefined) {
                hasAnyValues = true;
                internalValueResult.value = this._value;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._key = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._key = value.key;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlasMetadataOutputReference.prototype, "key", {
        get: function () {
            return this.getStringAttribute('key');
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlasMetadataOutputReference.prototype, "keyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlasMetadataOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlasMetadataOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return DynamicSecretMongoAtlasMetadataOutputReference;
}(cdktf.ComplexObject));
exports.DynamicSecretMongoAtlasMetadataOutputReference = DynamicSecretMongoAtlasMetadataOutputReference;
var DynamicSecretMongoAtlasMetadataList = /** @class */ (function (_super) {
    __extends(DynamicSecretMongoAtlasMetadataList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DynamicSecretMongoAtlasMetadataList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DynamicSecretMongoAtlasMetadataList.prototype.get = function (index) {
        return new DynamicSecretMongoAtlasMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DynamicSecretMongoAtlasMetadataList;
}(cdktf.ComplexList));
exports.DynamicSecretMongoAtlasMetadataList = DynamicSecretMongoAtlasMetadataList;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas infisical_dynamic_secret_mongo_atlas}
*/
var DynamicSecretMongoAtlas = /** @class */ (function (_super) {
    __extends(DynamicSecretMongoAtlas, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas infisical_dynamic_secret_mongo_atlas} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamicSecretMongoAtlasConfig
    */
    function DynamicSecretMongoAtlas(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_dynamic_secret_mongo_atlas',
            terraformGeneratorMetadata: {
                providerName: 'infisical',
                providerVersion: '0.16.18'
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
        // configuration - computed: false, optional: false, required: true
        _this._configuration = new DynamicSecretMongoAtlasConfigurationOutputReference(_this, "configuration");
        // metadata - computed: false, optional: true, required: false
        _this._metadata = new DynamicSecretMongoAtlasMetadataList(_this, "metadata", true);
        _this._configuration.internalValue = config.configuration;
        _this._defaultTtl = config.defaultTtl;
        _this._environmentSlug = config.environmentSlug;
        _this._maxTtl = config.maxTtl;
        _this._metadata.internalValue = config.metadata;
        _this._name = config.name;
        _this._path = config.path;
        _this._projectSlug = config.projectSlug;
        _this._usernameTemplate = config.usernameTemplate;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DynamicSecretMongoAtlas resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DynamicSecretMongoAtlas to import
    * @param importFromId The id of the existing DynamicSecretMongoAtlas that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_atlas#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DynamicSecretMongoAtlas to import is found
    */
    DynamicSecretMongoAtlas.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_dynamic_secret_mongo_atlas", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DynamicSecretMongoAtlas.prototype, "configuration", {
        get: function () {
            return this._configuration;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretMongoAtlas.prototype.putConfiguration = function (value) {
        this._configuration.internalValue = value;
    };
    Object.defineProperty(DynamicSecretMongoAtlas.prototype, "configurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configuration.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlas.prototype, "defaultTtl", {
        get: function () {
            return this.getStringAttribute('default_ttl');
        },
        set: function (value) {
            this._defaultTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlas.prototype, "defaultTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlas.prototype, "environmentSlug", {
        get: function () {
            return this.getStringAttribute('environment_slug');
        },
        set: function (value) {
            this._environmentSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlas.prototype, "environmentSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environmentSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlas.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlas.prototype, "maxTtl", {
        get: function () {
            return this.getStringAttribute('max_ttl');
        },
        set: function (value) {
            this._maxTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretMongoAtlas.prototype.resetMaxTtl = function () {
        this._maxTtl = undefined;
    };
    Object.defineProperty(DynamicSecretMongoAtlas.prototype, "maxTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlas.prototype, "metadata", {
        get: function () {
            return this._metadata;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretMongoAtlas.prototype.putMetadata = function (value) {
        this._metadata.internalValue = value;
    };
    DynamicSecretMongoAtlas.prototype.resetMetadata = function () {
        this._metadata.internalValue = undefined;
    };
    Object.defineProperty(DynamicSecretMongoAtlas.prototype, "metadataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metadata.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlas.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlas.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlas.prototype, "path", {
        get: function () {
            return this.getStringAttribute('path');
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlas.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlas.prototype, "projectSlug", {
        get: function () {
            return this.getStringAttribute('project_slug');
        },
        set: function (value) {
            this._projectSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlas.prototype, "projectSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoAtlas.prototype, "usernameTemplate", {
        get: function () {
            return this.getStringAttribute('username_template');
        },
        set: function (value) {
            this._usernameTemplate = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretMongoAtlas.prototype.resetUsernameTemplate = function () {
        this._usernameTemplate = undefined;
    };
    Object.defineProperty(DynamicSecretMongoAtlas.prototype, "usernameTemplateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._usernameTemplate;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DynamicSecretMongoAtlas.prototype.synthesizeAttributes = function () {
        return {
            configuration: dynamicSecretMongoAtlasConfigurationToTerraform(this._configuration.internalValue),
            default_ttl: cdktf.stringToTerraform(this._defaultTtl),
            environment_slug: cdktf.stringToTerraform(this._environmentSlug),
            max_ttl: cdktf.stringToTerraform(this._maxTtl),
            metadata: cdktf.listMapper(dynamicSecretMongoAtlasMetadataToTerraform, false)(this._metadata.internalValue),
            name: cdktf.stringToTerraform(this._name),
            path: cdktf.stringToTerraform(this._path),
            project_slug: cdktf.stringToTerraform(this._projectSlug),
            username_template: cdktf.stringToTerraform(this._usernameTemplate),
        };
    };
    DynamicSecretMongoAtlas.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            configuration: {
                value: dynamicSecretMongoAtlasConfigurationToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DynamicSecretMongoAtlasConfiguration",
            },
            default_ttl: {
                value: cdktf.stringToHclTerraform(this._defaultTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment_slug: {
                value: cdktf.stringToHclTerraform(this._environmentSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_ttl: {
                value: cdktf.stringToHclTerraform(this._maxTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metadata: {
                value: cdktf.listMapperHcl(dynamicSecretMongoAtlasMetadataToHclTerraform, false)(this._metadata.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "DynamicSecretMongoAtlasMetadataList",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            path: {
                value: cdktf.stringToHclTerraform(this._path),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            project_slug: {
                value: cdktf.stringToHclTerraform(this._projectSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            username_template: {
                value: cdktf.stringToHclTerraform(this._usernameTemplate),
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
    DynamicSecretMongoAtlas.tfResourceType = "infisical_dynamic_secret_mongo_atlas";
    return DynamicSecretMongoAtlas;
}(cdktf.TerraformResource));
exports.DynamicSecretMongoAtlas = DynamicSecretMongoAtlas;
