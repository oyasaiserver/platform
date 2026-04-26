"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_folders
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
exports.DataInfisicalSecretFolders = exports.DataInfisicalSecretFoldersFoldersList = exports.DataInfisicalSecretFoldersFoldersOutputReference = void 0;
exports.dataInfisicalSecretFoldersFoldersToTerraform = dataInfisicalSecretFoldersFoldersToTerraform;
exports.dataInfisicalSecretFoldersFoldersToHclTerraform = dataInfisicalSecretFoldersFoldersToHclTerraform;
var cdktf = require("cdktf");
function dataInfisicalSecretFoldersFoldersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataInfisicalSecretFoldersFoldersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataInfisicalSecretFoldersFoldersOutputReference = /** @class */ (function (_super) {
    __extends(DataInfisicalSecretFoldersFoldersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataInfisicalSecretFoldersFoldersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataInfisicalSecretFoldersFoldersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataInfisicalSecretFoldersFoldersOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretFoldersFoldersOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataInfisicalSecretFoldersFoldersOutputReference;
}(cdktf.ComplexObject));
exports.DataInfisicalSecretFoldersFoldersOutputReference = DataInfisicalSecretFoldersFoldersOutputReference;
var DataInfisicalSecretFoldersFoldersList = /** @class */ (function (_super) {
    __extends(DataInfisicalSecretFoldersFoldersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataInfisicalSecretFoldersFoldersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataInfisicalSecretFoldersFoldersList.prototype.get = function (index) {
        return new DataInfisicalSecretFoldersFoldersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataInfisicalSecretFoldersFoldersList;
}(cdktf.ComplexList));
exports.DataInfisicalSecretFoldersFoldersList = DataInfisicalSecretFoldersFoldersList;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_folders infisical_secret_folders}
*/
var DataInfisicalSecretFolders = /** @class */ (function (_super) {
    __extends(DataInfisicalSecretFolders, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_folders infisical_secret_folders} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataInfisicalSecretFoldersConfig
    */
    function DataInfisicalSecretFolders(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_secret_folders',
            terraformGeneratorMetadata: {
                providerName: 'infisical',
                providerVersion: '0.16.18'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        // folders - computed: true, optional: false, required: false
        _this._folders = new DataInfisicalSecretFoldersFoldersList(_this, "folders", false);
        _this._environmentSlug = config.environmentSlug;
        _this._folderPath = config.folderPath;
        _this._projectId = config.projectId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataInfisicalSecretFolders resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataInfisicalSecretFolders to import
    * @param importFromId The id of the existing DataInfisicalSecretFolders that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_folders#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataInfisicalSecretFolders to import is found
    */
    DataInfisicalSecretFolders.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_folders", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataInfisicalSecretFolders.prototype, "environmentSlug", {
        get: function () {
            return this.getStringAttribute('environment_slug');
        },
        set: function (value) {
            this._environmentSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretFolders.prototype, "environmentSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environmentSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretFolders.prototype, "folderPath", {
        get: function () {
            return this.getStringAttribute('folder_path');
        },
        set: function (value) {
            this._folderPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretFolders.prototype, "folderPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._folderPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretFolders.prototype, "folders", {
        get: function () {
            return this._folders;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretFolders.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretFolders.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataInfisicalSecretFolders.prototype.synthesizeAttributes = function () {
        return {
            environment_slug: cdktf.stringToTerraform(this._environmentSlug),
            folder_path: cdktf.stringToTerraform(this._folderPath),
            project_id: cdktf.stringToTerraform(this._projectId),
        };
    };
    DataInfisicalSecretFolders.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            environment_slug: {
                value: cdktf.stringToHclTerraform(this._environmentSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            folder_path: {
                value: cdktf.stringToHclTerraform(this._folderPath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            project_id: {
                value: cdktf.stringToHclTerraform(this._projectId),
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
    DataInfisicalSecretFolders.tfResourceType = "infisical_secret_folders";
    return DataInfisicalSecretFolders;
}(cdktf.TerraformDataSource));
exports.DataInfisicalSecretFolders = DataInfisicalSecretFolders;
