"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_team_sync_groups
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
exports.DataGithubOrganizationTeamSyncGroups = exports.DataGithubOrganizationTeamSyncGroupsGroupsList = exports.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference = void 0;
exports.dataGithubOrganizationTeamSyncGroupsGroupsToTerraform = dataGithubOrganizationTeamSyncGroupsGroupsToTerraform;
exports.dataGithubOrganizationTeamSyncGroupsGroupsToHclTerraform = dataGithubOrganizationTeamSyncGroupsGroupsToHclTerraform;
var cdktf = require("cdktf");
function dataGithubOrganizationTeamSyncGroupsGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubOrganizationTeamSyncGroupsGroupsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubOrganizationTeamSyncGroupsGroupsOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubOrganizationTeamSyncGroupsGroupsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubOrganizationTeamSyncGroupsGroupsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.prototype, "groupDescription", {
        // group_description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('group_description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.prototype, "groupId", {
        // group_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('group_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.prototype, "groupName", {
        // group_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('group_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubOrganizationTeamSyncGroupsGroupsOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference = DataGithubOrganizationTeamSyncGroupsGroupsOutputReference;
var DataGithubOrganizationTeamSyncGroupsGroupsList = /** @class */ (function (_super) {
    __extends(DataGithubOrganizationTeamSyncGroupsGroupsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubOrganizationTeamSyncGroupsGroupsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubOrganizationTeamSyncGroupsGroupsList.prototype.get = function (index) {
        return new DataGithubOrganizationTeamSyncGroupsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubOrganizationTeamSyncGroupsGroupsList;
}(cdktf.ComplexList));
exports.DataGithubOrganizationTeamSyncGroupsGroupsList = DataGithubOrganizationTeamSyncGroupsGroupsList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_team_sync_groups github_organization_team_sync_groups}
*/
var DataGithubOrganizationTeamSyncGroups = /** @class */ (function (_super) {
    __extends(DataGithubOrganizationTeamSyncGroups, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_team_sync_groups github_organization_team_sync_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubOrganizationTeamSyncGroupsConfig = {}
    */
    function DataGithubOrganizationTeamSyncGroups(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_organization_team_sync_groups',
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
        // ==========
        // ATTRIBUTES
        // ==========
        // groups - computed: true, optional: false, required: false
        _this._groups = new DataGithubOrganizationTeamSyncGroupsGroupsList(_this, "groups", false);
        _this._id = config.id;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubOrganizationTeamSyncGroups resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubOrganizationTeamSyncGroups to import
    * @param importFromId The id of the existing DataGithubOrganizationTeamSyncGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_team_sync_groups#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubOrganizationTeamSyncGroups to import is found
    */
    DataGithubOrganizationTeamSyncGroups.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_team_sync_groups", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubOrganizationTeamSyncGroups.prototype, "groups", {
        get: function () {
            return this._groups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationTeamSyncGroups.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubOrganizationTeamSyncGroups.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubOrganizationTeamSyncGroups.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubOrganizationTeamSyncGroups.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
        };
    };
    DataGithubOrganizationTeamSyncGroups.prototype.synthesizeHclAttributes = function () {
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
    DataGithubOrganizationTeamSyncGroups.tfResourceType = "github_organization_team_sync_groups";
    return DataGithubOrganizationTeamSyncGroups;
}(cdktf.TerraformDataSource));
exports.DataGithubOrganizationTeamSyncGroups = DataGithubOrganizationTeamSyncGroups;
