"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_role_team_assignment
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
exports.OrganizationRoleTeamAssignment = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_role_team_assignment github_organization_role_team_assignment}
*/
var OrganizationRoleTeamAssignment = /** @class */ (function (_super) {
    __extends(OrganizationRoleTeamAssignment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_role_team_assignment github_organization_role_team_assignment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationRoleTeamAssignmentConfig
    */
    function OrganizationRoleTeamAssignment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_organization_role_team_assignment',
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
        _this._teamSlug = config.teamSlug;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a OrganizationRoleTeamAssignment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationRoleTeamAssignment to import
    * @param importFromId The id of the existing OrganizationRoleTeamAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_role_team_assignment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationRoleTeamAssignment to import is found
    */
    OrganizationRoleTeamAssignment.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_role_team_assignment", importId: importFromId, provider: provider });
    };
    Object.defineProperty(OrganizationRoleTeamAssignment.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRoleTeamAssignment.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(OrganizationRoleTeamAssignment.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRoleTeamAssignment.prototype, "roleId", {
        get: function () {
            return this.getStringAttribute('role_id');
        },
        set: function (value) {
            this._roleId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRoleTeamAssignment.prototype, "roleIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRoleTeamAssignment.prototype, "teamSlug", {
        get: function () {
            return this.getStringAttribute('team_slug');
        },
        set: function (value) {
            this._teamSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRoleTeamAssignment.prototype, "teamSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._teamSlug;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    OrganizationRoleTeamAssignment.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            role_id: cdktf.stringToTerraform(this._roleId),
            team_slug: cdktf.stringToTerraform(this._teamSlug),
        };
    };
    OrganizationRoleTeamAssignment.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role_id: {
                value: cdktf.stringToHclTerraform(this._roleId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            team_slug: {
                value: cdktf.stringToHclTerraform(this._teamSlug),
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
    OrganizationRoleTeamAssignment.tfResourceType = "github_organization_role_team_assignment";
    return OrganizationRoleTeamAssignment;
}(cdktf.TerraformResource));
exports.OrganizationRoleTeamAssignment = OrganizationRoleTeamAssignment;
