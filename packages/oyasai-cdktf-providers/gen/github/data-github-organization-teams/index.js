"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_teams
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
exports.DataGithubOrganizationTeams = exports.DataGithubOrganizationTeamsTeamsList = exports.DataGithubOrganizationTeamsTeamsOutputReference = void 0;
exports.dataGithubOrganizationTeamsTeamsToTerraform = dataGithubOrganizationTeamsTeamsToTerraform;
exports.dataGithubOrganizationTeamsTeamsToHclTerraform = dataGithubOrganizationTeamsTeamsToHclTerraform;
var cdktf = require("cdktf");
function dataGithubOrganizationTeamsTeamsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubOrganizationTeamsTeamsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubOrganizationTeamsTeamsOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubOrganizationTeamsTeamsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubOrganizationTeamsTeamsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // parent - computed: true, optional: false, required: false
        _this._parent = new cdktf.StringMap(_this, "parent");
        return _this;
    }
    Object.defineProperty(DataGithubOrganizationTeamsTeamsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataGithubOrganizationTeamsTeamsOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationTeamsTeamsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationTeamsTeamsOutputReference.prototype, "members", {
        // members - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('members');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationTeamsTeamsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationTeamsTeamsOutputReference.prototype, "nodeId", {
        // node_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('node_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationTeamsTeamsOutputReference.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationTeamsTeamsOutputReference.prototype, "parentTeamId", {
        // parent_team_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('parent_team_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationTeamsTeamsOutputReference.prototype, "parentTeamSlug", {
        // parent_team_slug - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('parent_team_slug');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationTeamsTeamsOutputReference.prototype, "privacy", {
        // privacy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('privacy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationTeamsTeamsOutputReference.prototype, "repositories", {
        // repositories - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('repositories');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationTeamsTeamsOutputReference.prototype, "slug", {
        // slug - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('slug');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubOrganizationTeamsTeamsOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubOrganizationTeamsTeamsOutputReference = DataGithubOrganizationTeamsTeamsOutputReference;
var DataGithubOrganizationTeamsTeamsList = /** @class */ (function (_super) {
    __extends(DataGithubOrganizationTeamsTeamsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubOrganizationTeamsTeamsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubOrganizationTeamsTeamsList.prototype.get = function (index) {
        return new DataGithubOrganizationTeamsTeamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubOrganizationTeamsTeamsList;
}(cdktf.ComplexList));
exports.DataGithubOrganizationTeamsTeamsList = DataGithubOrganizationTeamsTeamsList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_teams github_organization_teams}
*/
var DataGithubOrganizationTeams = /** @class */ (function (_super) {
    __extends(DataGithubOrganizationTeams, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_teams github_organization_teams} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubOrganizationTeamsConfig = {}
    */
    function DataGithubOrganizationTeams(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_organization_teams',
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
        // teams - computed: true, optional: false, required: false
        _this._teams = new DataGithubOrganizationTeamsTeamsList(_this, "teams", false);
        _this._id = config.id;
        _this._resultsPerPage = config.resultsPerPage;
        _this._rootTeamsOnly = config.rootTeamsOnly;
        _this._summaryOnly = config.summaryOnly;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubOrganizationTeams resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubOrganizationTeams to import
    * @param importFromId The id of the existing DataGithubOrganizationTeams that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_teams#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubOrganizationTeams to import is found
    */
    DataGithubOrganizationTeams.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_teams", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubOrganizationTeams.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubOrganizationTeams.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubOrganizationTeams.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationTeams.prototype, "resultsPerPage", {
        get: function () {
            return this.getNumberAttribute('results_per_page');
        },
        set: function (value) {
            this._resultsPerPage = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubOrganizationTeams.prototype.resetResultsPerPage = function () {
        this._resultsPerPage = undefined;
    };
    Object.defineProperty(DataGithubOrganizationTeams.prototype, "resultsPerPageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resultsPerPage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationTeams.prototype, "rootTeamsOnly", {
        get: function () {
            return this.getBooleanAttribute('root_teams_only');
        },
        set: function (value) {
            this._rootTeamsOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubOrganizationTeams.prototype.resetRootTeamsOnly = function () {
        this._rootTeamsOnly = undefined;
    };
    Object.defineProperty(DataGithubOrganizationTeams.prototype, "rootTeamsOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rootTeamsOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationTeams.prototype, "summaryOnly", {
        get: function () {
            return this.getBooleanAttribute('summary_only');
        },
        set: function (value) {
            this._summaryOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubOrganizationTeams.prototype.resetSummaryOnly = function () {
        this._summaryOnly = undefined;
    };
    Object.defineProperty(DataGithubOrganizationTeams.prototype, "summaryOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._summaryOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganizationTeams.prototype, "teams", {
        get: function () {
            return this._teams;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubOrganizationTeams.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            results_per_page: cdktf.numberToTerraform(this._resultsPerPage),
            root_teams_only: cdktf.booleanToTerraform(this._rootTeamsOnly),
            summary_only: cdktf.booleanToTerraform(this._summaryOnly),
        };
    };
    DataGithubOrganizationTeams.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            results_per_page: {
                value: cdktf.numberToHclTerraform(this._resultsPerPage),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            root_teams_only: {
                value: cdktf.booleanToHclTerraform(this._rootTeamsOnly),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            summary_only: {
                value: cdktf.booleanToHclTerraform(this._summaryOnly),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
    DataGithubOrganizationTeams.tfResourceType = "github_organization_teams";
    return DataGithubOrganizationTeams;
}(cdktf.TerraformDataSource));
exports.DataGithubOrganizationTeams = DataGithubOrganizationTeams;
