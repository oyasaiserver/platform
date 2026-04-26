"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/team
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
exports.DataGithubTeam = exports.DataGithubTeamRepositoriesDetailedList = exports.DataGithubTeamRepositoriesDetailedOutputReference = void 0;
exports.dataGithubTeamRepositoriesDetailedToTerraform = dataGithubTeamRepositoriesDetailedToTerraform;
exports.dataGithubTeamRepositoriesDetailedToHclTerraform = dataGithubTeamRepositoriesDetailedToHclTerraform;
var cdktf = require("cdktf");
function dataGithubTeamRepositoriesDetailedToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubTeamRepositoriesDetailedToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubTeamRepositoriesDetailedOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubTeamRepositoriesDetailedOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubTeamRepositoriesDetailedOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataGithubTeamRepositoriesDetailedOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataGithubTeamRepositoriesDetailedOutputReference.prototype, "repoId", {
        // repo_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('repo_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTeamRepositoriesDetailedOutputReference.prototype, "repoName", {
        // repo_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repo_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTeamRepositoriesDetailedOutputReference.prototype, "roleName", {
        // role_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('role_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubTeamRepositoriesDetailedOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubTeamRepositoriesDetailedOutputReference = DataGithubTeamRepositoriesDetailedOutputReference;
var DataGithubTeamRepositoriesDetailedList = /** @class */ (function (_super) {
    __extends(DataGithubTeamRepositoriesDetailedList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubTeamRepositoriesDetailedList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubTeamRepositoriesDetailedList.prototype.get = function (index) {
        return new DataGithubTeamRepositoriesDetailedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubTeamRepositoriesDetailedList;
}(cdktf.ComplexList));
exports.DataGithubTeamRepositoriesDetailedList = DataGithubTeamRepositoriesDetailedList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/team github_team}
*/
var DataGithubTeam = /** @class */ (function (_super) {
    __extends(DataGithubTeam, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/team github_team} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubTeamConfig
    */
    function DataGithubTeam(scope, id, config) {
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
        // repositories_detailed - computed: true, optional: false, required: false
        _this._repositoriesDetailed = new DataGithubTeamRepositoriesDetailedList(_this, "repositories_detailed", false);
        _this._id = config.id;
        _this._membershipType = config.membershipType;
        _this._resultsPerPage = config.resultsPerPage;
        _this._slug = config.slug;
        _this._summaryOnly = config.summaryOnly;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubTeam resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubTeam to import
    * @param importFromId The id of the existing DataGithubTeam that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/team#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubTeam to import is found
    */
    DataGithubTeam.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_team", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubTeam.prototype, "description", {
        // ==========
        // ATTRIBUTES
        // ==========
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTeam.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubTeam.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubTeam.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTeam.prototype, "members", {
        // members - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('members');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTeam.prototype, "membershipType", {
        get: function () {
            return this.getStringAttribute('membership_type');
        },
        set: function (value) {
            this._membershipType = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubTeam.prototype.resetMembershipType = function () {
        this._membershipType = undefined;
    };
    Object.defineProperty(DataGithubTeam.prototype, "membershipTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._membershipType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTeam.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTeam.prototype, "nodeId", {
        // node_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('node_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTeam.prototype, "notificationSetting", {
        // notification_setting - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('notification_setting');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTeam.prototype, "permission", {
        // permission - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('permission');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTeam.prototype, "privacy", {
        // privacy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('privacy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTeam.prototype, "repositories", {
        // repositories - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('repositories');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTeam.prototype, "repositoriesDetailed", {
        get: function () {
            return this._repositoriesDetailed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTeam.prototype, "resultsPerPage", {
        get: function () {
            return this.getNumberAttribute('results_per_page');
        },
        set: function (value) {
            this._resultsPerPage = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubTeam.prototype.resetResultsPerPage = function () {
        this._resultsPerPage = undefined;
    };
    Object.defineProperty(DataGithubTeam.prototype, "resultsPerPageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resultsPerPage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTeam.prototype, "slug", {
        get: function () {
            return this.getStringAttribute('slug');
        },
        set: function (value) {
            this._slug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTeam.prototype, "slugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._slug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubTeam.prototype, "summaryOnly", {
        get: function () {
            return this.getBooleanAttribute('summary_only');
        },
        set: function (value) {
            this._summaryOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubTeam.prototype.resetSummaryOnly = function () {
        this._summaryOnly = undefined;
    };
    Object.defineProperty(DataGithubTeam.prototype, "summaryOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._summaryOnly;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubTeam.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            membership_type: cdktf.stringToTerraform(this._membershipType),
            results_per_page: cdktf.numberToTerraform(this._resultsPerPage),
            slug: cdktf.stringToTerraform(this._slug),
            summary_only: cdktf.booleanToTerraform(this._summaryOnly),
        };
    };
    DataGithubTeam.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            membership_type: {
                value: cdktf.stringToHclTerraform(this._membershipType),
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
            slug: {
                value: cdktf.stringToHclTerraform(this._slug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
    DataGithubTeam.tfResourceType = "github_team";
    return DataGithubTeam;
}(cdktf.TerraformDataSource));
exports.DataGithubTeam = DataGithubTeam;
