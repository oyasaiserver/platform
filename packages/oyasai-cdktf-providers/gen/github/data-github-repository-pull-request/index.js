"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_request
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
exports.DataGithubRepositoryPullRequest = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_request github_repository_pull_request}
*/
var DataGithubRepositoryPullRequest = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryPullRequest, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_request github_repository_pull_request} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoryPullRequestConfig
    */
    function DataGithubRepositoryPullRequest(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_repository_pull_request',
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
        _this._baseRepository = config.baseRepository;
        _this._id = config.id;
        _this._number = config.number;
        _this._owner = config.owner;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubRepositoryPullRequest resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepositoryPullRequest to import
    * @param importFromId The id of the existing DataGithubRepositoryPullRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_request#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepositoryPullRequest to import is found
    */
    DataGithubRepositoryPullRequest.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_pull_request", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubRepositoryPullRequest.prototype, "baseRef", {
        // ==========
        // ATTRIBUTES
        // ==========
        // base_ref - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('base_ref');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequest.prototype, "baseRepository", {
        get: function () {
            return this.getStringAttribute('base_repository');
        },
        set: function (value) {
            this._baseRepository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequest.prototype, "baseRepositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._baseRepository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequest.prototype, "baseSha", {
        // base_sha - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('base_sha');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequest.prototype, "body", {
        // body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequest.prototype, "draft", {
        // draft - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('draft');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequest.prototype, "headOwner", {
        // head_owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('head_owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequest.prototype, "headRef", {
        // head_ref - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('head_ref');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequest.prototype, "headRepository", {
        // head_repository - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('head_repository');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequest.prototype, "headSha", {
        // head_sha - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('head_sha');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequest.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubRepositoryPullRequest.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubRepositoryPullRequest.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequest.prototype, "labels", {
        // labels - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('labels');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequest.prototype, "maintainerCanModify", {
        // maintainer_can_modify - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('maintainer_can_modify');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequest.prototype, "number", {
        get: function () {
            return this.getNumberAttribute('number');
        },
        set: function (value) {
            this._number = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequest.prototype, "numberInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._number;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequest.prototype, "openedAt", {
        // opened_at - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('opened_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequest.prototype, "openedBy", {
        // opened_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('opened_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequest.prototype, "owner", {
        get: function () {
            return this.getStringAttribute('owner');
        },
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubRepositoryPullRequest.prototype.resetOwner = function () {
        this._owner = undefined;
    };
    Object.defineProperty(DataGithubRepositoryPullRequest.prototype, "ownerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequest.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequest.prototype, "title", {
        // title - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('title');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPullRequest.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubRepositoryPullRequest.prototype.synthesizeAttributes = function () {
        return {
            base_repository: cdktf.stringToTerraform(this._baseRepository),
            id: cdktf.stringToTerraform(this._id),
            number: cdktf.numberToTerraform(this._number),
            owner: cdktf.stringToTerraform(this._owner),
        };
    };
    DataGithubRepositoryPullRequest.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            base_repository: {
                value: cdktf.stringToHclTerraform(this._baseRepository),
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
            number: {
                value: cdktf.numberToHclTerraform(this._number),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            owner: {
                value: cdktf.stringToHclTerraform(this._owner),
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
    DataGithubRepositoryPullRequest.tfResourceType = "github_repository_pull_request";
    return DataGithubRepositoryPullRequest;
}(cdktf.TerraformDataSource));
exports.DataGithubRepositoryPullRequest = DataGithubRepositoryPullRequest;
