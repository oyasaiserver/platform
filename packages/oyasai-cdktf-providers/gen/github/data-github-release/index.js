"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release
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
exports.DataGithubRelease = exports.DataGithubReleaseAssetsList = exports.DataGithubReleaseAssetsOutputReference = void 0;
exports.dataGithubReleaseAssetsToTerraform = dataGithubReleaseAssetsToTerraform;
exports.dataGithubReleaseAssetsToHclTerraform = dataGithubReleaseAssetsToHclTerraform;
var cdktf = require("cdktf");
function dataGithubReleaseAssetsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubReleaseAssetsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubReleaseAssetsOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubReleaseAssetsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubReleaseAssetsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataGithubReleaseAssetsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataGithubReleaseAssetsOutputReference.prototype, "browserDownloadUrl", {
        // browser_download_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('browser_download_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubReleaseAssetsOutputReference.prototype, "contentType", {
        // content_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubReleaseAssetsOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubReleaseAssetsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubReleaseAssetsOutputReference.prototype, "label", {
        // label - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('label');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubReleaseAssetsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubReleaseAssetsOutputReference.prototype, "nodeId", {
        // node_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('node_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubReleaseAssetsOutputReference.prototype, "size", {
        // size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubReleaseAssetsOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubReleaseAssetsOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubReleaseAssetsOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubReleaseAssetsOutputReference = DataGithubReleaseAssetsOutputReference;
var DataGithubReleaseAssetsList = /** @class */ (function (_super) {
    __extends(DataGithubReleaseAssetsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubReleaseAssetsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubReleaseAssetsList.prototype.get = function (index) {
        return new DataGithubReleaseAssetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubReleaseAssetsList;
}(cdktf.ComplexList));
exports.DataGithubReleaseAssetsList = DataGithubReleaseAssetsList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release github_release}
*/
var DataGithubRelease = /** @class */ (function (_super) {
    __extends(DataGithubRelease, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release github_release} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubReleaseConfig
    */
    function DataGithubRelease(scope, id, config) {
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
        // assets - computed: true, optional: false, required: false
        _this._assets = new DataGithubReleaseAssetsList(_this, "assets", false);
        _this._id = config.id;
        _this._owner = config.owner;
        _this._releaseId = config.releaseId;
        _this._releaseTag = config.releaseTag;
        _this._repository = config.repository;
        _this._retrieveBy = config.retrieveBy;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubRelease resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRelease to import
    * @param importFromId The id of the existing DataGithubRelease that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/release#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRelease to import is found
    */
    DataGithubRelease.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_release", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubRelease.prototype, "assertsUrl", {
        // ==========
        // ATTRIBUTES
        // ==========
        // asserts_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('asserts_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRelease.prototype, "assets", {
        get: function () {
            return this._assets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRelease.prototype, "assetsUrl", {
        // assets_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('assets_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRelease.prototype, "body", {
        // body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRelease.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRelease.prototype, "draft", {
        // draft - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('draft');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRelease.prototype, "htmlUrl", {
        // html_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('html_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRelease.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubRelease.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubRelease.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRelease.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRelease.prototype, "owner", {
        get: function () {
            return this.getStringAttribute('owner');
        },
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRelease.prototype, "ownerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRelease.prototype, "prerelease", {
        // prerelease - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('prerelease');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRelease.prototype, "publishedAt", {
        // published_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('published_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRelease.prototype, "releaseId", {
        get: function () {
            return this.getNumberAttribute('release_id');
        },
        set: function (value) {
            this._releaseId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubRelease.prototype.resetReleaseId = function () {
        this._releaseId = undefined;
    };
    Object.defineProperty(DataGithubRelease.prototype, "releaseIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._releaseId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRelease.prototype, "releaseTag", {
        get: function () {
            return this.getStringAttribute('release_tag');
        },
        set: function (value) {
            this._releaseTag = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubRelease.prototype.resetReleaseTag = function () {
        this._releaseTag = undefined;
    };
    Object.defineProperty(DataGithubRelease.prototype, "releaseTagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._releaseTag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRelease.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRelease.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRelease.prototype, "retrieveBy", {
        get: function () {
            return this.getStringAttribute('retrieve_by');
        },
        set: function (value) {
            this._retrieveBy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRelease.prototype, "retrieveByInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retrieveBy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRelease.prototype, "tarballUrl", {
        // tarball_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tarball_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRelease.prototype, "targetCommitish", {
        // target_commitish - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target_commitish');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRelease.prototype, "uploadUrl", {
        // upload_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('upload_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRelease.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRelease.prototype, "zipballUrl", {
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
    DataGithubRelease.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            owner: cdktf.stringToTerraform(this._owner),
            release_id: cdktf.numberToTerraform(this._releaseId),
            release_tag: cdktf.stringToTerraform(this._releaseTag),
            repository: cdktf.stringToTerraform(this._repository),
            retrieve_by: cdktf.stringToTerraform(this._retrieveBy),
        };
    };
    DataGithubRelease.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
            release_id: {
                value: cdktf.numberToHclTerraform(this._releaseId),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            release_tag: {
                value: cdktf.stringToHclTerraform(this._releaseTag),
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
            retrieve_by: {
                value: cdktf.stringToHclTerraform(this._retrieveBy),
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
    DataGithubRelease.tfResourceType = "github_release";
    return DataGithubRelease;
}(cdktf.TerraformDataSource));
exports.DataGithubRelease = DataGithubRelease;
