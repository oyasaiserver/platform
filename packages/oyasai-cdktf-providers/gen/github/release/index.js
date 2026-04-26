"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/release
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
exports.Release = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/release github_release}
*/
var Release = /** @class */ (function (_super) {
    __extends(Release, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/release github_release} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ReleaseConfig
    */
    function Release(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_release',
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
        _this._body = config.body;
        _this._discussionCategoryName = config.discussionCategoryName;
        _this._draft = config.draft;
        _this._generateReleaseNotes = config.generateReleaseNotes;
        _this._id = config.id;
        _this._name = config.name;
        _this._prerelease = config.prerelease;
        _this._repository = config.repository;
        _this._tagName = config.tagName;
        _this._targetCommitish = config.targetCommitish;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Release resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Release to import
    * @param importFromId The id of the existing Release that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/release#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Release to import is found
    */
    Release.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_release", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Release.prototype, "assetsUrl", {
        // ==========
        // ATTRIBUTES
        // ==========
        // assets_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('assets_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Release.prototype, "body", {
        get: function () {
            return this.getStringAttribute('body');
        },
        set: function (value) {
            this._body = value;
        },
        enumerable: false,
        configurable: true
    });
    Release.prototype.resetBody = function () {
        this._body = undefined;
    };
    Object.defineProperty(Release.prototype, "bodyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._body;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Release.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Release.prototype, "discussionCategoryName", {
        get: function () {
            return this.getStringAttribute('discussion_category_name');
        },
        set: function (value) {
            this._discussionCategoryName = value;
        },
        enumerable: false,
        configurable: true
    });
    Release.prototype.resetDiscussionCategoryName = function () {
        this._discussionCategoryName = undefined;
    };
    Object.defineProperty(Release.prototype, "discussionCategoryNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._discussionCategoryName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Release.prototype, "draft", {
        get: function () {
            return this.getBooleanAttribute('draft');
        },
        set: function (value) {
            this._draft = value;
        },
        enumerable: false,
        configurable: true
    });
    Release.prototype.resetDraft = function () {
        this._draft = undefined;
    };
    Object.defineProperty(Release.prototype, "draftInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._draft;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Release.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Release.prototype, "generateReleaseNotes", {
        get: function () {
            return this.getBooleanAttribute('generate_release_notes');
        },
        set: function (value) {
            this._generateReleaseNotes = value;
        },
        enumerable: false,
        configurable: true
    });
    Release.prototype.resetGenerateReleaseNotes = function () {
        this._generateReleaseNotes = undefined;
    };
    Object.defineProperty(Release.prototype, "generateReleaseNotesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._generateReleaseNotes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Release.prototype, "htmlUrl", {
        // html_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('html_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Release.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Release.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(Release.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Release.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Release.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(Release.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Release.prototype, "nodeId", {
        // node_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('node_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Release.prototype, "prerelease", {
        get: function () {
            return this.getBooleanAttribute('prerelease');
        },
        set: function (value) {
            this._prerelease = value;
        },
        enumerable: false,
        configurable: true
    });
    Release.prototype.resetPrerelease = function () {
        this._prerelease = undefined;
    };
    Object.defineProperty(Release.prototype, "prereleaseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._prerelease;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Release.prototype, "publishedAt", {
        // published_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('published_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Release.prototype, "releaseId", {
        // release_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('release_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Release.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Release.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Release.prototype, "tagName", {
        get: function () {
            return this.getStringAttribute('tag_name');
        },
        set: function (value) {
            this._tagName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Release.prototype, "tagNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Release.prototype, "tarballUrl", {
        // tarball_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tarball_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Release.prototype, "targetCommitish", {
        get: function () {
            return this.getStringAttribute('target_commitish');
        },
        set: function (value) {
            this._targetCommitish = value;
        },
        enumerable: false,
        configurable: true
    });
    Release.prototype.resetTargetCommitish = function () {
        this._targetCommitish = undefined;
    };
    Object.defineProperty(Release.prototype, "targetCommitishInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetCommitish;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Release.prototype, "uploadUrl", {
        // upload_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('upload_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Release.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Release.prototype, "zipballUrl", {
        // zipball_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zipball_url');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Release.prototype.synthesizeAttributes = function () {
        return {
            body: cdktf.stringToTerraform(this._body),
            discussion_category_name: cdktf.stringToTerraform(this._discussionCategoryName),
            draft: cdktf.booleanToTerraform(this._draft),
            generate_release_notes: cdktf.booleanToTerraform(this._generateReleaseNotes),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            prerelease: cdktf.booleanToTerraform(this._prerelease),
            repository: cdktf.stringToTerraform(this._repository),
            tag_name: cdktf.stringToTerraform(this._tagName),
            target_commitish: cdktf.stringToTerraform(this._targetCommitish),
        };
    };
    Release.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            body: {
                value: cdktf.stringToHclTerraform(this._body),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            discussion_category_name: {
                value: cdktf.stringToHclTerraform(this._discussionCategoryName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            draft: {
                value: cdktf.booleanToHclTerraform(this._draft),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            generate_release_notes: {
                value: cdktf.booleanToHclTerraform(this._generateReleaseNotes),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            prerelease: {
                value: cdktf.booleanToHclTerraform(this._prerelease),
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
            tag_name: {
                value: cdktf.stringToHclTerraform(this._tagName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_commitish: {
                value: cdktf.stringToHclTerraform(this._targetCommitish),
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
    Release.tfResourceType = "github_release";
    return Release;
}(cdktf.TerraformResource));
exports.Release = Release;
