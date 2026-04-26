"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_requests
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
exports.DataGithubRepositoryPullRequests = exports.DataGithubRepositoryPullRequestsResultsList = exports.DataGithubRepositoryPullRequestsResultsOutputReference = void 0;
exports.dataGithubRepositoryPullRequestsResultsToTerraform = dataGithubRepositoryPullRequestsResultsToTerraform;
exports.dataGithubRepositoryPullRequestsResultsToHclTerraform = dataGithubRepositoryPullRequestsResultsToHclTerraform;
var cdktf = require("cdktf");
function dataGithubRepositoryPullRequestsResultsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubRepositoryPullRequestsResultsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubRepositoryPullRequestsResultsOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryPullRequestsResultsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubRepositoryPullRequestsResultsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataGithubRepositoryPullRequestsResultsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataGithubRepositoryPullRequestsResultsOutputReference.prototype, "baseRef", {
        // base_ref - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('base_ref');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequestsResultsOutputReference.prototype, "baseSha", {
        // base_sha - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('base_sha');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequestsResultsOutputReference.prototype, "body", {
        // body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequestsResultsOutputReference.prototype, "draft", {
        // draft - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('draft');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequestsResultsOutputReference.prototype, "headOwner", {
        // head_owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('head_owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequestsResultsOutputReference.prototype, "headRef", {
        // head_ref - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('head_ref');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequestsResultsOutputReference.prototype, "headRepository", {
        // head_repository - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('head_repository');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequestsResultsOutputReference.prototype, "headSha", {
        // head_sha - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('head_sha');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequestsResultsOutputReference.prototype, "labels", {
        // labels - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('labels');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequestsResultsOutputReference.prototype, "maintainerCanModify", {
        // maintainer_can_modify - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('maintainer_can_modify');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequestsResultsOutputReference.prototype, "number", {
        // number - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequestsResultsOutputReference.prototype, "openedAt", {
        // opened_at - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('opened_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequestsResultsOutputReference.prototype, "openedBy", {
        // opened_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('opened_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequestsResultsOutputReference.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequestsResultsOutputReference.prototype, "title", {
        // title - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('title');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequestsResultsOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubRepositoryPullRequestsResultsOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubRepositoryPullRequestsResultsOutputReference = DataGithubRepositoryPullRequestsResultsOutputReference;
var DataGithubRepositoryPullRequestsResultsList = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryPullRequestsResultsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubRepositoryPullRequestsResultsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubRepositoryPullRequestsResultsList.prototype.get = function (index) {
        return new DataGithubRepositoryPullRequestsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubRepositoryPullRequestsResultsList;
}(cdktf.ComplexList));
exports.DataGithubRepositoryPullRequestsResultsList = DataGithubRepositoryPullRequestsResultsList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_requests github_repository_pull_requests}
*/
var DataGithubRepositoryPullRequests = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryPullRequests, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_requests github_repository_pull_requests} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoryPullRequestsConfig
    */
    function DataGithubRepositoryPullRequests(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_repository_pull_requests',
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
        // results - computed: true, optional: false, required: false
        _this._results = new DataGithubRepositoryPullRequestsResultsList(_this, "results", false);
        _this._baseRef = config.baseRef;
        _this._baseRepository = config.baseRepository;
        _this._headRef = config.headRef;
        _this._id = config.id;
        _this._owner = config.owner;
        _this._sortBy = config.sortBy;
        _this._sortDirection = config.sortDirection;
        _this._state = config.state;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubRepositoryPullRequests resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepositoryPullRequests to import
    * @param importFromId The id of the existing DataGithubRepositoryPullRequests that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_requests#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepositoryPullRequests to import is found
    */
    DataGithubRepositoryPullRequests.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_pull_requests", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubRepositoryPullRequests.prototype, "baseRef", {
        get: function () {
            return this.getStringAttribute('base_ref');
        },
        set: function (value) {
            this._baseRef = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubRepositoryPullRequests.prototype.resetBaseRef = function () {
        this._baseRef = undefined;
    };
    Object.defineProperty(DataGithubRepositoryPullRequests.prototype, "baseRefInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._baseRef;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequests.prototype, "baseRepository", {
        get: function () {
            return this.getStringAttribute('base_repository');
        },
        set: function (value) {
            this._baseRepository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequests.prototype, "baseRepositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._baseRepository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequests.prototype, "headRef", {
        get: function () {
            return this.getStringAttribute('head_ref');
        },
        set: function (value) {
            this._headRef = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubRepositoryPullRequests.prototype.resetHeadRef = function () {
        this._headRef = undefined;
    };
    Object.defineProperty(DataGithubRepositoryPullRequests.prototype, "headRefInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._headRef;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequests.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubRepositoryPullRequests.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubRepositoryPullRequests.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequests.prototype, "owner", {
        get: function () {
            return this.getStringAttribute('owner');
        },
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubRepositoryPullRequests.prototype.resetOwner = function () {
        this._owner = undefined;
    };
    Object.defineProperty(DataGithubRepositoryPullRequests.prototype, "ownerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequests.prototype, "results", {
        get: function () {
            return this._results;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequests.prototype, "sortBy", {
        get: function () {
            return this.getStringAttribute('sort_by');
        },
        set: function (value) {
            this._sortBy = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubRepositoryPullRequests.prototype.resetSortBy = function () {
        this._sortBy = undefined;
    };
    Object.defineProperty(DataGithubRepositoryPullRequests.prototype, "sortByInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sortBy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequests.prototype, "sortDirection", {
        get: function () {
            return this.getStringAttribute('sort_direction');
        },
        set: function (value) {
            this._sortDirection = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubRepositoryPullRequests.prototype.resetSortDirection = function () {
        this._sortDirection = undefined;
    };
    Object.defineProperty(DataGithubRepositoryPullRequests.prototype, "sortDirectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sortDirection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequests.prototype, "state", {
        get: function () {
            return this.getStringAttribute('state');
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubRepositoryPullRequests.prototype.resetState = function () {
        this._state = undefined;
    };
    Object.defineProperty(DataGithubRepositoryPullRequests.prototype, "stateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubRepositoryPullRequests.prototype.synthesizeAttributes = function () {
        return {
            base_ref: cdktf.stringToTerraform(this._baseRef),
            base_repository: cdktf.stringToTerraform(this._baseRepository),
            head_ref: cdktf.stringToTerraform(this._headRef),
            id: cdktf.stringToTerraform(this._id),
            owner: cdktf.stringToTerraform(this._owner),
            sort_by: cdktf.stringToTerraform(this._sortBy),
            sort_direction: cdktf.stringToTerraform(this._sortDirection),
            state: cdktf.stringToTerraform(this._state),
        };
    };
    DataGithubRepositoryPullRequests.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            base_ref: {
                value: cdktf.stringToHclTerraform(this._baseRef),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            base_repository: {
                value: cdktf.stringToHclTerraform(this._baseRepository),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            head_ref: {
                value: cdktf.stringToHclTerraform(this._headRef),
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
            owner: {
                value: cdktf.stringToHclTerraform(this._owner),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sort_by: {
                value: cdktf.stringToHclTerraform(this._sortBy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sort_direction: {
                value: cdktf.stringToHclTerraform(this._sortDirection),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            state: {
                value: cdktf.stringToHclTerraform(this._state),
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
    DataGithubRepositoryPullRequests.tfResourceType = "github_repository_pull_requests";
    return DataGithubRepositoryPullRequests;
}(cdktf.TerraformDataSource));
exports.DataGithubRepositoryPullRequests = DataGithubRepositoryPullRequests;
