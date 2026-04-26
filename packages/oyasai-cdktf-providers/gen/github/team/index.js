"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team
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
exports.Team = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team github_team}
*/
var Team = /** @class */ (function (_super) {
    __extends(Team, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team github_team} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TeamConfig
    */
    function Team(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_team',
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
        _this._createDefaultMaintainer = config.createDefaultMaintainer;
        _this._description = config.description;
        _this._id = config.id;
        _this._ldapDn = config.ldapDn;
        _this._name = config.name;
        _this._notificationSetting = config.notificationSetting;
        _this._parentTeamId = config.parentTeamId;
        _this._parentTeamReadId = config.parentTeamReadId;
        _this._parentTeamReadSlug = config.parentTeamReadSlug;
        _this._privacy = config.privacy;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Team to import
    * @param importFromId The id of the existing Team that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Team to import is found
    */
    Team.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_team", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Team.prototype, "createDefaultMaintainer", {
        get: function () {
            return this.getBooleanAttribute('create_default_maintainer');
        },
        set: function (value) {
            this._createDefaultMaintainer = value;
        },
        enumerable: false,
        configurable: true
    });
    Team.prototype.resetCreateDefaultMaintainer = function () {
        this._createDefaultMaintainer = undefined;
    };
    Object.defineProperty(Team.prototype, "createDefaultMaintainerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._createDefaultMaintainer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Team.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Team.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Team.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(Team.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "ldapDn", {
        get: function () {
            return this.getStringAttribute('ldap_dn');
        },
        set: function (value) {
            this._ldapDn = value;
        },
        enumerable: false,
        configurable: true
    });
    Team.prototype.resetLdapDn = function () {
        this._ldapDn = undefined;
    };
    Object.defineProperty(Team.prototype, "ldapDnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ldapDn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "membersCount", {
        // members_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('members_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "nodeId", {
        // node_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('node_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "notificationSetting", {
        get: function () {
            return this.getStringAttribute('notification_setting');
        },
        set: function (value) {
            this._notificationSetting = value;
        },
        enumerable: false,
        configurable: true
    });
    Team.prototype.resetNotificationSetting = function () {
        this._notificationSetting = undefined;
    };
    Object.defineProperty(Team.prototype, "notificationSettingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notificationSetting;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "parentTeamId", {
        get: function () {
            return this.getStringAttribute('parent_team_id');
        },
        set: function (value) {
            this._parentTeamId = value;
        },
        enumerable: false,
        configurable: true
    });
    Team.prototype.resetParentTeamId = function () {
        this._parentTeamId = undefined;
    };
    Object.defineProperty(Team.prototype, "parentTeamIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parentTeamId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "parentTeamReadId", {
        get: function () {
            return this.getStringAttribute('parent_team_read_id');
        },
        set: function (value) {
            this._parentTeamReadId = value;
        },
        enumerable: false,
        configurable: true
    });
    Team.prototype.resetParentTeamReadId = function () {
        this._parentTeamReadId = undefined;
    };
    Object.defineProperty(Team.prototype, "parentTeamReadIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parentTeamReadId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "parentTeamReadSlug", {
        get: function () {
            return this.getStringAttribute('parent_team_read_slug');
        },
        set: function (value) {
            this._parentTeamReadSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Team.prototype.resetParentTeamReadSlug = function () {
        this._parentTeamReadSlug = undefined;
    };
    Object.defineProperty(Team.prototype, "parentTeamReadSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parentTeamReadSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "privacy", {
        get: function () {
            return this.getStringAttribute('privacy');
        },
        set: function (value) {
            this._privacy = value;
        },
        enumerable: false,
        configurable: true
    });
    Team.prototype.resetPrivacy = function () {
        this._privacy = undefined;
    };
    Object.defineProperty(Team.prototype, "privacyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._privacy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "slug", {
        // slug - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('slug');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Team.prototype.synthesizeAttributes = function () {
        return {
            create_default_maintainer: cdktf.booleanToTerraform(this._createDefaultMaintainer),
            description: cdktf.stringToTerraform(this._description),
            id: cdktf.stringToTerraform(this._id),
            ldap_dn: cdktf.stringToTerraform(this._ldapDn),
            name: cdktf.stringToTerraform(this._name),
            notification_setting: cdktf.stringToTerraform(this._notificationSetting),
            parent_team_id: cdktf.stringToTerraform(this._parentTeamId),
            parent_team_read_id: cdktf.stringToTerraform(this._parentTeamReadId),
            parent_team_read_slug: cdktf.stringToTerraform(this._parentTeamReadSlug),
            privacy: cdktf.stringToTerraform(this._privacy),
        };
    };
    Team.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            create_default_maintainer: {
                value: cdktf.booleanToHclTerraform(this._createDefaultMaintainer),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ldap_dn: {
                value: cdktf.stringToHclTerraform(this._ldapDn),
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
            notification_setting: {
                value: cdktf.stringToHclTerraform(this._notificationSetting),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parent_team_id: {
                value: cdktf.stringToHclTerraform(this._parentTeamId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parent_team_read_id: {
                value: cdktf.stringToHclTerraform(this._parentTeamReadId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parent_team_read_slug: {
                value: cdktf.stringToHclTerraform(this._parentTeamReadSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            privacy: {
                value: cdktf.stringToHclTerraform(this._privacy),
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
    Team.tfResourceType = "github_team";
    return Team;
}(cdktf.TerraformResource));
exports.Team = Team;
