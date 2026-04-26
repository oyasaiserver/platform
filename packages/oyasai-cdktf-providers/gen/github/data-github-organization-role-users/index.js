"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_role_users
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
exports.DataGithubOrganizationRoleUsers = exports.DataGithubOrganizationRoleUsersUsersList = exports.DataGithubOrganizationRoleUsersUsersOutputReference = void 0;
exports.dataGithubOrganizationRoleUsersUsersToTerraform = dataGithubOrganizationRoleUsersUsersToTerraform;
exports.dataGithubOrganizationRoleUsersUsersToHclTerraform = dataGithubOrganizationRoleUsersUsersToHclTerraform;
var cdktf = require("cdktf");
function dataGithubOrganizationRoleUsersUsersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubOrganizationRoleUsersUsersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubOrganizationRoleUsersUsersOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubOrganizationRoleUsersUsersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubOrganizationRoleUsersUsersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataGithubOrganizationRoleUsersUsersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataGithubOrganizationRoleUsersUsersOutputReference.prototype, "login", {
        // login - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('login');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationRoleUsersUsersOutputReference.prototype, "userId", {
        // user_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('user_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubOrganizationRoleUsersUsersOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubOrganizationRoleUsersUsersOutputReference = DataGithubOrganizationRoleUsersUsersOutputReference;
var DataGithubOrganizationRoleUsersUsersList = /** @class */ (function (_super) {
    __extends(DataGithubOrganizationRoleUsersUsersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubOrganizationRoleUsersUsersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubOrganizationRoleUsersUsersList.prototype.get = function (index) {
        return new DataGithubOrganizationRoleUsersUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubOrganizationRoleUsersUsersList;
}(cdktf.ComplexList));
exports.DataGithubOrganizationRoleUsersUsersList = DataGithubOrganizationRoleUsersUsersList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_role_users github_organization_role_users}
*/
var DataGithubOrganizationRoleUsers = /** @class */ (function (_super) {
    __extends(DataGithubOrganizationRoleUsers, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_role_users github_organization_role_users} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubOrganizationRoleUsersConfig
    */
    function DataGithubOrganizationRoleUsers(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_organization_role_users',
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
        // users - computed: true, optional: false, required: false
        _this._users = new DataGithubOrganizationRoleUsersUsersList(_this, "users", false);
        _this._id = config.id;
        _this._roleId = config.roleId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubOrganizationRoleUsers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubOrganizationRoleUsers to import
    * @param importFromId The id of the existing DataGithubOrganizationRoleUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_role_users#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubOrganizationRoleUsers to import is found
    */
    DataGithubOrganizationRoleUsers.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_role_users", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubOrganizationRoleUsers.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubOrganizationRoleUsers.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubOrganizationRoleUsers.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationRoleUsers.prototype, "roleId", {
        get: function () {
            return this.getNumberAttribute('role_id');
        },
        set: function (value) {
            this._roleId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationRoleUsers.prototype, "roleIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationRoleUsers.prototype, "users", {
        get: function () {
            return this._users;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubOrganizationRoleUsers.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            role_id: cdktf.numberToTerraform(this._roleId),
        };
    };
    DataGithubOrganizationRoleUsers.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role_id: {
                value: cdktf.numberToHclTerraform(this._roleId),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    DataGithubOrganizationRoleUsers.tfResourceType = "github_organization_role_users";
    return DataGithubOrganizationRoleUsers;
}(cdktf.TerraformDataSource));
exports.DataGithubOrganizationRoleUsers = DataGithubOrganizationRoleUsers;
