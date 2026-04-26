"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_members
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
exports.TeamMembers = exports.TeamMembersMembersList = exports.TeamMembersMembersOutputReference = void 0;
exports.teamMembersMembersToTerraform = teamMembersMembersToTerraform;
exports.teamMembersMembersToHclTerraform = teamMembersMembersToHclTerraform;
var cdktf = require("cdktf");
function teamMembersMembersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        role: cdktf.stringToTerraform(struct.role),
        username: cdktf.stringToTerraform(struct.username),
    };
}
function teamMembersMembersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        role: {
            value: cdktf.stringToHclTerraform(struct.role),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        username: {
            value: cdktf.stringToHclTerraform(struct.username),
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
var TeamMembersMembersOutputReference = /** @class */ (function (_super) {
    __extends(TeamMembersMembersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function TeamMembersMembersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(TeamMembersMembersOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._role !== undefined) {
                hasAnyValues = true;
                internalValueResult.role = this._role;
            }
            if (this._username !== undefined) {
                hasAnyValues = true;
                internalValueResult.username = this._username;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._role = undefined;
                this._username = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._role = value.role;
                this._username = value.username;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamMembersMembersOutputReference.prototype, "role", {
        get: function () {
            return this.getStringAttribute('role');
        },
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    TeamMembersMembersOutputReference.prototype.resetRole = function () {
        this._role = undefined;
    };
    Object.defineProperty(TeamMembersMembersOutputReference.prototype, "roleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._role;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamMembersMembersOutputReference.prototype, "username", {
        get: function () {
            return this.getStringAttribute('username');
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamMembersMembersOutputReference.prototype, "usernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    return TeamMembersMembersOutputReference;
}(cdktf.ComplexObject));
exports.TeamMembersMembersOutputReference = TeamMembersMembersOutputReference;
var TeamMembersMembersList = /** @class */ (function (_super) {
    __extends(TeamMembersMembersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function TeamMembersMembersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    TeamMembersMembersList.prototype.get = function (index) {
        return new TeamMembersMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return TeamMembersMembersList;
}(cdktf.ComplexList));
exports.TeamMembersMembersList = TeamMembersMembersList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_members github_team_members}
*/
var TeamMembers = /** @class */ (function (_super) {
    __extends(TeamMembers, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_members github_team_members} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TeamMembersConfig
    */
    function TeamMembers(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_team_members',
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
        // members - computed: false, optional: false, required: true
        _this._members = new TeamMembersMembersList(_this, "members", true);
        _this._id = config.id;
        _this._teamId = config.teamId;
        _this._members.internalValue = config.members;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a TeamMembers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TeamMembers to import
    * @param importFromId The id of the existing TeamMembers that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_members#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TeamMembers to import is found
    */
    TeamMembers.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_team_members", importId: importFromId, provider: provider });
    };
    Object.defineProperty(TeamMembers.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    TeamMembers.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(TeamMembers.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamMembers.prototype, "teamId", {
        get: function () {
            return this.getStringAttribute('team_id');
        },
        set: function (value) {
            this._teamId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamMembers.prototype, "teamIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._teamId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamMembers.prototype, "members", {
        get: function () {
            return this._members;
        },
        enumerable: false,
        configurable: true
    });
    TeamMembers.prototype.putMembers = function (value) {
        this._members.internalValue = value;
    };
    Object.defineProperty(TeamMembers.prototype, "membersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._members.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    TeamMembers.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            team_id: cdktf.stringToTerraform(this._teamId),
            members: cdktf.listMapper(teamMembersMembersToTerraform, true)(this._members.internalValue),
        };
    };
    TeamMembers.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
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
            members: {
                value: cdktf.listMapperHcl(teamMembersMembersToHclTerraform, true)(this._members.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "TeamMembersMembersList",
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
    TeamMembers.tfResourceType = "github_team_members";
    return TeamMembers;
}(cdktf.TerraformResource));
exports.TeamMembers = TeamMembers;
