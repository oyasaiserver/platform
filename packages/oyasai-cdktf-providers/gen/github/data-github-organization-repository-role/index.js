"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_repository_role
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
exports.DataGithubOrganizationRepositoryRole = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_repository_role github_organization_repository_role}
*/
var DataGithubOrganizationRepositoryRole = /** @class */ (function (_super) {
    __extends(DataGithubOrganizationRepositoryRole, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_repository_role github_organization_repository_role} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubOrganizationRepositoryRoleConfig
    */
    function DataGithubOrganizationRepositoryRole(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_organization_repository_role',
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
        _this._id = config.id;
        _this._roleId = config.roleId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubOrganizationRepositoryRole resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubOrganizationRepositoryRole to import
    * @param importFromId The id of the existing DataGithubOrganizationRepositoryRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_repository_role#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubOrganizationRepositoryRole to import is found
    */
    DataGithubOrganizationRepositoryRole.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_repository_role", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubOrganizationRepositoryRole.prototype, "baseRole", {
        // ==========
        // ATTRIBUTES
        // ==========
        // base_role - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('base_role');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationRepositoryRole.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationRepositoryRole.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubOrganizationRepositoryRole.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubOrganizationRepositoryRole.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationRepositoryRole.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationRepositoryRole.prototype, "permissions", {
        // permissions - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('permissions'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationRepositoryRole.prototype, "roleId", {
        get: function () {
            return this.getNumberAttribute('role_id');
        },
        set: function (value) {
            this._roleId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationRepositoryRole.prototype, "roleIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubOrganizationRepositoryRole.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            role_id: cdktf.numberToTerraform(this._roleId),
        };
    };
    DataGithubOrganizationRepositoryRole.prototype.synthesizeHclAttributes = function () {
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
    DataGithubOrganizationRepositoryRole.tfResourceType = "github_organization_repository_role";
    return DataGithubOrganizationRepositoryRole;
}(cdktf.TerraformDataSource));
exports.DataGithubOrganizationRepositoryRole = DataGithubOrganizationRepositoryRole;
