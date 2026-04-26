"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_sync_group_mapping
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
exports.TeamSyncGroupMapping = exports.TeamSyncGroupMappingGroupList = exports.TeamSyncGroupMappingGroupOutputReference = void 0;
exports.teamSyncGroupMappingGroupToTerraform = teamSyncGroupMappingGroupToTerraform;
exports.teamSyncGroupMappingGroupToHclTerraform = teamSyncGroupMappingGroupToHclTerraform;
var cdktf = require("cdktf");
function teamSyncGroupMappingGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        group_description: cdktf.stringToTerraform(struct.groupDescription),
        group_id: cdktf.stringToTerraform(struct.groupId),
        group_name: cdktf.stringToTerraform(struct.groupName),
    };
}
function teamSyncGroupMappingGroupToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        group_description: {
            value: cdktf.stringToHclTerraform(struct.groupDescription),
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
        group_name: {
            value: cdktf.stringToHclTerraform(struct.groupName),
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
var TeamSyncGroupMappingGroupOutputReference = /** @class */ (function (_super) {
    __extends(TeamSyncGroupMappingGroupOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function TeamSyncGroupMappingGroupOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(TeamSyncGroupMappingGroupOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._groupDescription !== undefined) {
                hasAnyValues = true;
                internalValueResult.groupDescription = this._groupDescription;
            }
            if (this._groupId !== undefined) {
                hasAnyValues = true;
                internalValueResult.groupId = this._groupId;
            }
            if (this._groupName !== undefined) {
                hasAnyValues = true;
                internalValueResult.groupName = this._groupName;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._groupDescription = undefined;
                this._groupId = undefined;
                this._groupName = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._groupDescription = value.groupDescription;
                this._groupId = value.groupId;
                this._groupName = value.groupName;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamSyncGroupMappingGroupOutputReference.prototype, "groupDescription", {
        get: function () {
            return this.getStringAttribute('group_description');
        },
        set: function (value) {
            this._groupDescription = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamSyncGroupMappingGroupOutputReference.prototype, "groupDescriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._groupDescription;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamSyncGroupMappingGroupOutputReference.prototype, "groupId", {
        get: function () {
            return this.getStringAttribute('group_id');
        },
        set: function (value) {
            this._groupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamSyncGroupMappingGroupOutputReference.prototype, "groupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._groupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamSyncGroupMappingGroupOutputReference.prototype, "groupName", {
        get: function () {
            return this.getStringAttribute('group_name');
        },
        set: function (value) {
            this._groupName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamSyncGroupMappingGroupOutputReference.prototype, "groupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._groupName;
        },
        enumerable: false,
        configurable: true
    });
    return TeamSyncGroupMappingGroupOutputReference;
}(cdktf.ComplexObject));
exports.TeamSyncGroupMappingGroupOutputReference = TeamSyncGroupMappingGroupOutputReference;
var TeamSyncGroupMappingGroupList = /** @class */ (function (_super) {
    __extends(TeamSyncGroupMappingGroupList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function TeamSyncGroupMappingGroupList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    TeamSyncGroupMappingGroupList.prototype.get = function (index) {
        return new TeamSyncGroupMappingGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return TeamSyncGroupMappingGroupList;
}(cdktf.ComplexList));
exports.TeamSyncGroupMappingGroupList = TeamSyncGroupMappingGroupList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_sync_group_mapping github_team_sync_group_mapping}
*/
var TeamSyncGroupMapping = /** @class */ (function (_super) {
    __extends(TeamSyncGroupMapping, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_sync_group_mapping github_team_sync_group_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TeamSyncGroupMappingConfig
    */
    function TeamSyncGroupMapping(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_team_sync_group_mapping',
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
        // group - computed: false, optional: true, required: false
        _this._group = new TeamSyncGroupMappingGroupList(_this, "group", true);
        _this._id = config.id;
        _this._teamSlug = config.teamSlug;
        _this._group.internalValue = config.group;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a TeamSyncGroupMapping resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TeamSyncGroupMapping to import
    * @param importFromId The id of the existing TeamSyncGroupMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_sync_group_mapping#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TeamSyncGroupMapping to import is found
    */
    TeamSyncGroupMapping.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_team_sync_group_mapping", importId: importFromId, provider: provider });
    };
    Object.defineProperty(TeamSyncGroupMapping.prototype, "etag", {
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
    Object.defineProperty(TeamSyncGroupMapping.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    TeamSyncGroupMapping.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(TeamSyncGroupMapping.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamSyncGroupMapping.prototype, "teamSlug", {
        get: function () {
            return this.getStringAttribute('team_slug');
        },
        set: function (value) {
            this._teamSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamSyncGroupMapping.prototype, "teamSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._teamSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamSyncGroupMapping.prototype, "group", {
        get: function () {
            return this._group;
        },
        enumerable: false,
        configurable: true
    });
    TeamSyncGroupMapping.prototype.putGroup = function (value) {
        this._group.internalValue = value;
    };
    TeamSyncGroupMapping.prototype.resetGroup = function () {
        this._group.internalValue = undefined;
    };
    Object.defineProperty(TeamSyncGroupMapping.prototype, "groupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._group.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    TeamSyncGroupMapping.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            team_slug: cdktf.stringToTerraform(this._teamSlug),
            group: cdktf.listMapper(teamSyncGroupMappingGroupToTerraform, true)(this._group.internalValue),
        };
    };
    TeamSyncGroupMapping.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
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
            group: {
                value: cdktf.listMapperHcl(teamSyncGroupMappingGroupToHclTerraform, true)(this._group.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "TeamSyncGroupMappingGroupList",
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
    TeamSyncGroupMapping.tfResourceType = "github_team_sync_group_mapping";
    return TeamSyncGroupMapping;
}(cdktf.TerraformResource));
exports.TeamSyncGroupMapping = TeamSyncGroupMapping;
