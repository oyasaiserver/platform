"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_repository_roles
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
exports.DataGithubOrganizationRepositoryRoles = exports.DataGithubOrganizationRepositoryRolesRolesList = exports.DataGithubOrganizationRepositoryRolesRolesOutputReference = void 0;
exports.dataGithubOrganizationRepositoryRolesRolesToTerraform = dataGithubOrganizationRepositoryRolesRolesToTerraform;
exports.dataGithubOrganizationRepositoryRolesRolesToHclTerraform = dataGithubOrganizationRepositoryRolesRolesToHclTerraform;
var cdktf = require("cdktf");
function dataGithubOrganizationRepositoryRolesRolesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubOrganizationRepositoryRolesRolesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubOrganizationRepositoryRolesRolesOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubOrganizationRepositoryRolesRolesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubOrganizationRepositoryRolesRolesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataGithubOrganizationRepositoryRolesRolesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataGithubOrganizationRepositoryRolesRolesOutputReference.prototype, "baseRole", {
        // base_role - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('base_role');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationRepositoryRolesRolesOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationRepositoryRolesRolesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationRepositoryRolesRolesOutputReference.prototype, "permissions", {
        // permissions - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('permissions'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationRepositoryRolesRolesOutputReference.prototype, "roleId", {
        // role_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('role_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubOrganizationRepositoryRolesRolesOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubOrganizationRepositoryRolesRolesOutputReference = DataGithubOrganizationRepositoryRolesRolesOutputReference;
var DataGithubOrganizationRepositoryRolesRolesList = /** @class */ (function (_super) {
    __extends(DataGithubOrganizationRepositoryRolesRolesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubOrganizationRepositoryRolesRolesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubOrganizationRepositoryRolesRolesList.prototype.get = function (index) {
        return new DataGithubOrganizationRepositoryRolesRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubOrganizationRepositoryRolesRolesList;
}(cdktf.ComplexList));
exports.DataGithubOrganizationRepositoryRolesRolesList = DataGithubOrganizationRepositoryRolesRolesList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_repository_roles github_organization_repository_roles}
*/
var DataGithubOrganizationRepositoryRoles = /** @class */ (function (_super) {
    __extends(DataGithubOrganizationRepositoryRoles, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_repository_roles github_organization_repository_roles} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubOrganizationRepositoryRolesConfig = {}
    */
    function DataGithubOrganizationRepositoryRoles(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_organization_repository_roles',
            terraformGeneratorMetadata: {
                providerName: 'github',
                providerVersion: '6.12.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        // roles - computed: true, optional: false, required: false
        _this._roles = new DataGithubOrganizationRepositoryRolesRolesList(_this, "roles", false);
        _this._id = config.id;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubOrganizationRepositoryRoles resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubOrganizationRepositoryRoles to import
    * @param importFromId The id of the existing DataGithubOrganizationRepositoryRoles that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_repository_roles#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubOrganizationRepositoryRoles to import is found
    */
    DataGithubOrganizationRepositoryRoles.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_repository_roles", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubOrganizationRepositoryRoles.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubOrganizationRepositoryRoles.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubOrganizationRepositoryRoles.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationRepositoryRoles.prototype, "roles", {
        get: function () {
            return this._roles;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubOrganizationRepositoryRoles.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
        };
    };
    DataGithubOrganizationRepositoryRoles.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
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
    DataGithubOrganizationRepositoryRoles.tfResourceType = "github_organization_repository_roles";
    return DataGithubOrganizationRepositoryRoles;
}(cdktf.TerraformDataSource));
exports.DataGithubOrganizationRepositoryRoles = DataGithubOrganizationRepositoryRoles;
