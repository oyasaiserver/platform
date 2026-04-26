"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_file
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
exports.RepositoryFile = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_file github_repository_file}
*/
var RepositoryFile = /** @class */ (function (_super) {
    __extends(RepositoryFile, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_file github_repository_file} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryFileConfig
    */
    function RepositoryFile(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_repository_file',
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
        _this._autocreateBranch = config.autocreateBranch;
        _this._autocreateBranchSourceBranch = config.autocreateBranchSourceBranch;
        _this._autocreateBranchSourceSha = config.autocreateBranchSourceSha;
        _this._branch = config.branch;
        _this._commitAuthor = config.commitAuthor;
        _this._commitEmail = config.commitEmail;
        _this._commitMessage = config.commitMessage;
        _this._content = config.content;
        _this._file = config.file;
        _this._id = config.id;
        _this._overwriteOnCreate = config.overwriteOnCreate;
        _this._repository = config.repository;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RepositoryFile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryFile to import
    * @param importFromId The id of the existing RepositoryFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_file#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryFile to import is found
    */
    RepositoryFile.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_file", importId: importFromId, provider: provider });
    };
    Object.defineProperty(RepositoryFile.prototype, "autocreateBranch", {
        get: function () {
            return this.getBooleanAttribute('autocreate_branch');
        },
        set: function (value) {
            this._autocreateBranch = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryFile.prototype.resetAutocreateBranch = function () {
        this._autocreateBranch = undefined;
    };
    Object.defineProperty(RepositoryFile.prototype, "autocreateBranchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autocreateBranch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryFile.prototype, "autocreateBranchSourceBranch", {
        get: function () {
            return this.getStringAttribute('autocreate_branch_source_branch');
        },
        set: function (value) {
            this._autocreateBranchSourceBranch = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryFile.prototype.resetAutocreateBranchSourceBranch = function () {
        this._autocreateBranchSourceBranch = undefined;
    };
    Object.defineProperty(RepositoryFile.prototype, "autocreateBranchSourceBranchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autocreateBranchSourceBranch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryFile.prototype, "autocreateBranchSourceSha", {
        get: function () {
            return this.getStringAttribute('autocreate_branch_source_sha');
        },
        set: function (value) {
            this._autocreateBranchSourceSha = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryFile.prototype.resetAutocreateBranchSourceSha = function () {
        this._autocreateBranchSourceSha = undefined;
    };
    Object.defineProperty(RepositoryFile.prototype, "autocreateBranchSourceShaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autocreateBranchSourceSha;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryFile.prototype, "branch", {
        get: function () {
            return this.getStringAttribute('branch');
        },
        set: function (value) {
            this._branch = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryFile.prototype.resetBranch = function () {
        this._branch = undefined;
    };
    Object.defineProperty(RepositoryFile.prototype, "branchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._branch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryFile.prototype, "commitAuthor", {
        get: function () {
            return this.getStringAttribute('commit_author');
        },
        set: function (value) {
            this._commitAuthor = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryFile.prototype.resetCommitAuthor = function () {
        this._commitAuthor = undefined;
    };
    Object.defineProperty(RepositoryFile.prototype, "commitAuthorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._commitAuthor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryFile.prototype, "commitEmail", {
        get: function () {
            return this.getStringAttribute('commit_email');
        },
        set: function (value) {
            this._commitEmail = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryFile.prototype.resetCommitEmail = function () {
        this._commitEmail = undefined;
    };
    Object.defineProperty(RepositoryFile.prototype, "commitEmailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._commitEmail;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryFile.prototype, "commitMessage", {
        get: function () {
            return this.getStringAttribute('commit_message');
        },
        set: function (value) {
            this._commitMessage = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryFile.prototype.resetCommitMessage = function () {
        this._commitMessage = undefined;
    };
    Object.defineProperty(RepositoryFile.prototype, "commitMessageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._commitMessage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryFile.prototype, "commitSha", {
        // commit_sha - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('commit_sha');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryFile.prototype, "content", {
        get: function () {
            return this.getStringAttribute('content');
        },
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryFile.prototype, "contentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryFile.prototype, "file", {
        get: function () {
            return this.getStringAttribute('file');
        },
        set: function (value) {
            this._file = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryFile.prototype, "fileInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._file;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryFile.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryFile.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(RepositoryFile.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryFile.prototype, "overwriteOnCreate", {
        get: function () {
            return this.getBooleanAttribute('overwrite_on_create');
        },
        set: function (value) {
            this._overwriteOnCreate = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryFile.prototype.resetOverwriteOnCreate = function () {
        this._overwriteOnCreate = undefined;
    };
    Object.defineProperty(RepositoryFile.prototype, "overwriteOnCreateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._overwriteOnCreate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryFile.prototype, "ref", {
        // ref - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ref');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryFile.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryFile.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryFile.prototype, "repositoryId", {
        // repository_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('repository_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryFile.prototype, "sha", {
        // sha - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sha');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    RepositoryFile.prototype.synthesizeAttributes = function () {
        return {
            autocreate_branch: cdktf.booleanToTerraform(this._autocreateBranch),
            autocreate_branch_source_branch: cdktf.stringToTerraform(this._autocreateBranchSourceBranch),
            autocreate_branch_source_sha: cdktf.stringToTerraform(this._autocreateBranchSourceSha),
            branch: cdktf.stringToTerraform(this._branch),
            commit_author: cdktf.stringToTerraform(this._commitAuthor),
            commit_email: cdktf.stringToTerraform(this._commitEmail),
            commit_message: cdktf.stringToTerraform(this._commitMessage),
            content: cdktf.stringToTerraform(this._content),
            file: cdktf.stringToTerraform(this._file),
            id: cdktf.stringToTerraform(this._id),
            overwrite_on_create: cdktf.booleanToTerraform(this._overwriteOnCreate),
            repository: cdktf.stringToTerraform(this._repository),
        };
    };
    RepositoryFile.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            autocreate_branch: {
                value: cdktf.booleanToHclTerraform(this._autocreateBranch),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            autocreate_branch_source_branch: {
                value: cdktf.stringToHclTerraform(this._autocreateBranchSourceBranch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            autocreate_branch_source_sha: {
                value: cdktf.stringToHclTerraform(this._autocreateBranchSourceSha),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            branch: {
                value: cdktf.stringToHclTerraform(this._branch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            commit_author: {
                value: cdktf.stringToHclTerraform(this._commitAuthor),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            commit_email: {
                value: cdktf.stringToHclTerraform(this._commitEmail),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            commit_message: {
                value: cdktf.stringToHclTerraform(this._commitMessage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content: {
                value: cdktf.stringToHclTerraform(this._content),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            file: {
                value: cdktf.stringToHclTerraform(this._file),
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
            overwrite_on_create: {
                value: cdktf.booleanToHclTerraform(this._overwriteOnCreate),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
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
    RepositoryFile.tfResourceType = "github_repository_file";
    return RepositoryFile;
}(cdktf.TerraformResource));
exports.RepositoryFile = RepositoryFile;
