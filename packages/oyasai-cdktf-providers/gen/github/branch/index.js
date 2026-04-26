"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch
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
exports.Branch = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch github_branch}
*/
var Branch = /** @class */ (function (_super) {
    __extends(Branch, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch github_branch} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BranchConfig
    */
    function Branch(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_branch',
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
        _this._branch = config.branch;
        _this._etag = config.etag;
        _this._id = config.id;
        _this._repository = config.repository;
        _this._sourceBranch = config.sourceBranch;
        _this._sourceSha = config.sourceSha;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Branch resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Branch to import
    * @param importFromId The id of the existing Branch that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Branch to import is found
    */
    Branch.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_branch", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Branch.prototype, "branch", {
        get: function () {
            return this.getStringAttribute('branch');
        },
        set: function (value) {
            this._branch = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Branch.prototype, "branchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._branch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Branch.prototype, "etag", {
        get: function () {
            return this.getStringAttribute('etag');
        },
        set: function (value) {
            this._etag = value;
        },
        enumerable: false,
        configurable: true
    });
    Branch.prototype.resetEtag = function () {
        this._etag = undefined;
    };
    Object.defineProperty(Branch.prototype, "etagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._etag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Branch.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Branch.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(Branch.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Branch.prototype, "ref", {
        // ref - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ref');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Branch.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Branch.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Branch.prototype, "sha", {
        // sha - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sha');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Branch.prototype, "sourceBranch", {
        get: function () {
            return this.getStringAttribute('source_branch');
        },
        set: function (value) {
            this._sourceBranch = value;
        },
        enumerable: false,
        configurable: true
    });
    Branch.prototype.resetSourceBranch = function () {
        this._sourceBranch = undefined;
    };
    Object.defineProperty(Branch.prototype, "sourceBranchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceBranch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Branch.prototype, "sourceSha", {
        get: function () {
            return this.getStringAttribute('source_sha');
        },
        set: function (value) {
            this._sourceSha = value;
        },
        enumerable: false,
        configurable: true
    });
    Branch.prototype.resetSourceSha = function () {
        this._sourceSha = undefined;
    };
    Object.defineProperty(Branch.prototype, "sourceShaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceSha;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Branch.prototype.synthesizeAttributes = function () {
        return {
            branch: cdktf.stringToTerraform(this._branch),
            etag: cdktf.stringToTerraform(this._etag),
            id: cdktf.stringToTerraform(this._id),
            repository: cdktf.stringToTerraform(this._repository),
            source_branch: cdktf.stringToTerraform(this._sourceBranch),
            source_sha: cdktf.stringToTerraform(this._sourceSha),
        };
    };
    Branch.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            branch: {
                value: cdktf.stringToHclTerraform(this._branch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            etag: {
                value: cdktf.stringToHclTerraform(this._etag),
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
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_branch: {
                value: cdktf.stringToHclTerraform(this._sourceBranch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_sha: {
                value: cdktf.stringToHclTerraform(this._sourceSha),
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
    Branch.tfResourceType = "github_branch";
    return Branch;
}(cdktf.TerraformResource));
exports.Branch = Branch;
