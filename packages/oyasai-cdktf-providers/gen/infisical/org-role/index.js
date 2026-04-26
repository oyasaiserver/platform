"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/org_role
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
exports.OrgRole = exports.OrgRolePermissionsList = exports.OrgRolePermissionsOutputReference = void 0;
exports.orgRolePermissionsToTerraform = orgRolePermissionsToTerraform;
exports.orgRolePermissionsToHclTerraform = orgRolePermissionsToHclTerraform;
var cdktf = require("cdktf");
function orgRolePermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.action),
        conditions: cdktf.stringToTerraform(struct.conditions),
        inverted: cdktf.booleanToTerraform(struct.inverted),
        subject: cdktf.stringToTerraform(struct.subject),
    };
}
function orgRolePermissionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        action: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.action),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        conditions: {
            value: cdktf.stringToHclTerraform(struct.conditions),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        inverted: {
            value: cdktf.booleanToHclTerraform(struct.inverted),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        subject: {
            value: cdktf.stringToHclTerraform(struct.subject),
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
var OrgRolePermissionsOutputReference = /** @class */ (function (_super) {
    __extends(OrgRolePermissionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function OrgRolePermissionsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(OrgRolePermissionsOutputReference.prototype, "internalValue", {
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
            if (this._conditions !== undefined) {
                hasAnyValues = true;
                internalValueResult.conditions = this._conditions;
            }
            if (this._inverted !== undefined) {
                hasAnyValues = true;
                internalValueResult.inverted = this._inverted;
            }
            if (this._subject !== undefined) {
                hasAnyValues = true;
                internalValueResult.subject = this._subject;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._action = undefined;
                this._conditions = undefined;
                this._inverted = undefined;
                this._subject = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._action = value.action;
                this._conditions = value.conditions;
                this._inverted = value.inverted;
                this._subject = value.subject;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrgRolePermissionsOutputReference.prototype, "action", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('action'));
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrgRolePermissionsOutputReference.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrgRolePermissionsOutputReference.prototype, "conditions", {
        get: function () {
            return this.getStringAttribute('conditions');
        },
        set: function (value) {
            this._conditions = value;
        },
        enumerable: false,
        configurable: true
    });
    OrgRolePermissionsOutputReference.prototype.resetConditions = function () {
        this._conditions = undefined;
    };
    Object.defineProperty(OrgRolePermissionsOutputReference.prototype, "conditionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._conditions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrgRolePermissionsOutputReference.prototype, "inverted", {
        get: function () {
            return this.getBooleanAttribute('inverted');
        },
        set: function (value) {
            this._inverted = value;
        },
        enumerable: false,
        configurable: true
    });
    OrgRolePermissionsOutputReference.prototype.resetInverted = function () {
        this._inverted = undefined;
    };
    Object.defineProperty(OrgRolePermissionsOutputReference.prototype, "invertedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inverted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrgRolePermissionsOutputReference.prototype, "subject", {
        get: function () {
            return this.getStringAttribute('subject');
        },
        set: function (value) {
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrgRolePermissionsOutputReference.prototype, "subjectInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subject;
        },
        enumerable: false,
        configurable: true
    });
    return OrgRolePermissionsOutputReference;
}(cdktf.ComplexObject));
exports.OrgRolePermissionsOutputReference = OrgRolePermissionsOutputReference;
var OrgRolePermissionsList = /** @class */ (function (_super) {
    __extends(OrgRolePermissionsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function OrgRolePermissionsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    OrgRolePermissionsList.prototype.get = function (index) {
        return new OrgRolePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return OrgRolePermissionsList;
}(cdktf.ComplexList));
exports.OrgRolePermissionsList = OrgRolePermissionsList;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/org_role infisical_org_role}
*/
var OrgRole = /** @class */ (function (_super) {
    __extends(OrgRole, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/org_role infisical_org_role} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrgRoleConfig
    */
    function OrgRole(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_org_role',
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
        // permissions - computed: false, optional: false, required: true
        _this._permissions = new OrgRolePermissionsList(_this, "permissions", false);
        _this._description = config.description;
        _this._name = config.name;
        _this._permissions.internalValue = config.permissions;
        _this._slug = config.slug;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a OrgRole resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrgRole to import
    * @param importFromId The id of the existing OrgRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/org_role#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrgRole to import is found
    */
    OrgRole.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_org_role", importId: importFromId, provider: provider });
    };
    Object.defineProperty(OrgRole.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    OrgRole.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(OrgRole.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrgRole.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrgRole.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrgRole.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrgRole.prototype, "permissions", {
        get: function () {
            return this._permissions;
        },
        enumerable: false,
        configurable: true
    });
    OrgRole.prototype.putPermissions = function (value) {
        this._permissions.internalValue = value;
    };
    Object.defineProperty(OrgRole.prototype, "permissionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permissions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrgRole.prototype, "slug", {
        get: function () {
            return this.getStringAttribute('slug');
        },
        set: function (value) {
            this._slug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrgRole.prototype, "slugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._slug;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    OrgRole.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            permissions: cdktf.listMapper(orgRolePermissionsToTerraform, false)(this._permissions.internalValue),
            slug: cdktf.stringToTerraform(this._slug),
        };
    };
    OrgRole.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            description: {
                value: cdktf.stringToHclTerraform(this._description),
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
            permissions: {
                value: cdktf.listMapperHcl(orgRolePermissionsToHclTerraform, false)(this._permissions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "OrgRolePermissionsList",
            },
            slug: {
                value: cdktf.stringToHclTerraform(this._slug),
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
    OrgRole.tfResourceType = "infisical_org_role";
    return OrgRole;
}(cdktf.TerraformResource));
exports.OrgRole = OrgRole;
