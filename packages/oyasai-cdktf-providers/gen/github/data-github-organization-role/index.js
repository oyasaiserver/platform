"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_role
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
exports.DataGithubOrganizationRole = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_role github_organization_role}
*/
var DataGithubOrganizationRole = /** @class */ (function (_super) {
    __extends(DataGithubOrganizationRole, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_role github_organization_role} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubOrganizationRoleConfig
    */
    function DataGithubOrganizationRole(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_organization_role',
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
    * Generates CDKTF code for importing a DataGithubOrganizationRole resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubOrganizationRole to import
    * @param importFromId The id of the existing DataGithubOrganizationRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_role#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubOrganizationRole to import is found
    */
    DataGithubOrganizationRole.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_role", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubOrganizationRole.prototype, "baseRole", {
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
    Object.defineProperty(DataGithubOrganizationRole.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationRole.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubOrganizationRole.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubOrganizationRole.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationRole.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationRole.prototype, "permissions", {
        // permissions - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('permissions'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationRole.prototype, "roleId", {
        get: function () {
            return this.getNumberAttribute('role_id');
        },
        set: function (value) {
            this._roleId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationRole.prototype, "roleIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationRole.prototype, "source", {
        // source - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubOrganizationRole.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            role_id: cdktf.numberToTerraform(this._roleId),
        };
    };
    DataGithubOrganizationRole.prototype.synthesizeHclAttributes = function () {
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
    DataGithubOrganizationRole.tfResourceType = "github_organization_role";
    return DataGithubOrganizationRole;
}(cdktf.TerraformDataSource));
exports.DataGithubOrganizationRole = DataGithubOrganizationRole;
