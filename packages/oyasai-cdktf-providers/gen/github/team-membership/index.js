"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_membership
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
exports.TeamMembership = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_membership github_team_membership}
*/
var TeamMembership = /** @class */ (function (_super) {
    __extends(TeamMembership, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_membership github_team_membership} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TeamMembershipConfig
    */
    function TeamMembership(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_team_membership',
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
        _this._role = config.role;
        _this._teamId = config.teamId;
        _this._username = config.username;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a TeamMembership resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TeamMembership to import
    * @param importFromId The id of the existing TeamMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_membership#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TeamMembership to import is found
    */
    TeamMembership.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_team_membership", importId: importFromId, provider: provider });
    };
    Object.defineProperty(TeamMembership.prototype, "etag", {
        // ==========
        // ATTRIBUTES
        // ==========
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamMembership.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    TeamMembership.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(TeamMembership.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamMembership.prototype, "role", {
        get: function () {
            return this.getStringAttribute('role');
        },
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    TeamMembership.prototype.resetRole = function () {
        this._role = undefined;
    };
    Object.defineProperty(TeamMembership.prototype, "roleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._role;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamMembership.prototype, "teamId", {
        get: function () {
            return this.getStringAttribute('team_id');
        },
        set: function (value) {
            this._teamId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamMembership.prototype, "teamIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._teamId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamMembership.prototype, "username", {
        get: function () {
            return this.getStringAttribute('username');
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamMembership.prototype, "usernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    TeamMembership.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            role: cdktf.stringToTerraform(this._role),
            team_id: cdktf.stringToTerraform(this._teamId),
            username: cdktf.stringToTerraform(this._username),
        };
    };
    TeamMembership.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role: {
                value: cdktf.stringToHclTerraform(this._role),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            team_id: {
                value: cdktf.stringToHclTerraform(this._teamId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            username: {
                value: cdktf.stringToHclTerraform(this._username),
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
    TeamMembership.tfResourceType = "github_team_membership";
    return TeamMembership;
}(cdktf.TerraformResource));
exports.TeamMembership = TeamMembership;
