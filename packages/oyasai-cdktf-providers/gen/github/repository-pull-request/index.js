"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pull_request
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
exports.RepositoryPullRequest = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pull_request github_repository_pull_request}
*/
var RepositoryPullRequest = /** @class */ (function (_super) {
    __extends(RepositoryPullRequest, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pull_request github_repository_pull_request} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryPullRequestConfig
    */
    function RepositoryPullRequest(scope, id, config) {
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
        _this._baseRef = config.baseRef;
        _this._baseRepository = config.baseRepository;
        _this._body = config.body;
        _this._headRef = config.headRef;
        _this._id = config.id;
        _this._maintainerCanModify = config.maintainerCanModify;
        _this._owner = config.owner;
        _this._title = config.title;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RepositoryPullRequest resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryPullRequest to import
    * @param importFromId The id of the existing RepositoryPullRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pull_request#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryPullRequest to import is found
    */
    RepositoryPullRequest.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_pull_request", importId: importFromId, provider: provider });
    };
    Object.defineProperty(RepositoryPullRequest.prototype, "baseRef", {
        get: function () {
            return this.getStringAttribute('base_ref');
        },
        set: function (value) {
            this._baseRef = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPullRequest.prototype, "baseRefInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._baseRef;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPullRequest.prototype, "baseRepository", {
        get: function () {
            return this.getStringAttribute('base_repository');
        },
        set: function (value) {
            this._baseRepository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPullRequest.prototype, "baseRepositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._baseRepository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPullRequest.prototype, "baseSha", {
        // base_sha - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('base_sha');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPullRequest.prototype, "body", {
        get: function () {
            return this.getStringAttribute('body');
        },
        set: function (value) {
            this._body = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryPullRequest.prototype.resetBody = function () {
        this._body = undefined;
    };
    Object.defineProperty(RepositoryPullRequest.prototype, "bodyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._body;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPullRequest.prototype, "draft", {
        // draft - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('draft');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPullRequest.prototype, "headRef", {
        get: function () {
            return this.getStringAttribute('head_ref');
        },
        set: function (value) {
            this._headRef = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPullRequest.prototype, "headRefInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._headRef;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPullRequest.prototype, "headSha", {
        // head_sha - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('head_sha');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPullRequest.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryPullRequest.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(RepositoryPullRequest.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPullRequest.prototype, "labels", {
        // labels - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('labels');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPullRequest.prototype, "maintainerCanModify", {
        get: function () {
            return this.getBooleanAttribute('maintainer_can_modify');
        },
        set: function (value) {
            this._maintainerCanModify = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryPullRequest.prototype.resetMaintainerCanModify = function () {
        this._maintainerCanModify = undefined;
    };
    Object.defineProperty(RepositoryPullRequest.prototype, "maintainerCanModifyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maintainerCanModify;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPullRequest.prototype, "number", {
        // number - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPullRequest.prototype, "openedAt", {
        // opened_at - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('opened_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPullRequest.prototype, "openedBy", {
        // opened_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('opened_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPullRequest.prototype, "owner", {
        get: function () {
            return this.getStringAttribute('owner');
        },
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryPullRequest.prototype.resetOwner = function () {
        this._owner = undefined;
    };
    Object.defineProperty(RepositoryPullRequest.prototype, "ownerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPullRequest.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPullRequest.prototype, "title", {
        get: function () {
            return this.getStringAttribute('title');
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPullRequest.prototype, "titleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPullRequest.prototype, "updatedAt", {
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
    RepositoryPullRequest.prototype.synthesizeAttributes = function () {
        return {
            base_ref: cdktf.stringToTerraform(this._baseRef),
            base_repository: cdktf.stringToTerraform(this._baseRepository),
            body: cdktf.stringToTerraform(this._body),
            head_ref: cdktf.stringToTerraform(this._headRef),
            id: cdktf.stringToTerraform(this._id),
            maintainer_can_modify: cdktf.booleanToTerraform(this._maintainerCanModify),
            owner: cdktf.stringToTerraform(this._owner),
            title: cdktf.stringToTerraform(this._title),
        };
    };
    RepositoryPullRequest.prototype.synthesizeHclAttributes = function () {
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
            body: {
                value: cdktf.stringToHclTerraform(this._body),
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
            maintainer_can_modify: {
                value: cdktf.booleanToHclTerraform(this._maintainerCanModify),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            owner: {
                value: cdktf.stringToHclTerraform(this._owner),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            title: {
                value: cdktf.stringToHclTerraform(this._title),
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
    RepositoryPullRequest.tfResourceType = "github_repository_pull_request";
    return RepositoryPullRequest;
}(cdktf.TerraformResource));
exports.RepositoryPullRequest = RepositoryPullRequest;
