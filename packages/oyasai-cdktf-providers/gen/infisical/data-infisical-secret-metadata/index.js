"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_metadata
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
exports.DataInfisicalSecretMetadata = exports.DataInfisicalSecretMetadataTagsList = exports.DataInfisicalSecretMetadataTagsOutputReference = exports.DataInfisicalSecretMetadataSecretMetadataList = exports.DataInfisicalSecretMetadataSecretMetadataOutputReference = void 0;
exports.dataInfisicalSecretMetadataSecretMetadataToTerraform = dataInfisicalSecretMetadataSecretMetadataToTerraform;
exports.dataInfisicalSecretMetadataSecretMetadataToHclTerraform = dataInfisicalSecretMetadataSecretMetadataToHclTerraform;
exports.dataInfisicalSecretMetadataTagsToTerraform = dataInfisicalSecretMetadataTagsToTerraform;
exports.dataInfisicalSecretMetadataTagsToHclTerraform = dataInfisicalSecretMetadataTagsToHclTerraform;
var cdktf = require("cdktf");
function dataInfisicalSecretMetadataSecretMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataInfisicalSecretMetadataSecretMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataInfisicalSecretMetadataSecretMetadataOutputReference = /** @class */ (function (_super) {
    __extends(DataInfisicalSecretMetadataSecretMetadataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataInfisicalSecretMetadataSecretMetadataOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataInfisicalSecretMetadataSecretMetadataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataInfisicalSecretMetadataSecretMetadataOutputReference.prototype, "isEncrypted", {
        // is_encrypted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_encrypted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretMetadataSecretMetadataOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretMetadataSecretMetadataOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataInfisicalSecretMetadataSecretMetadataOutputReference;
}(cdktf.ComplexObject));
exports.DataInfisicalSecretMetadataSecretMetadataOutputReference = DataInfisicalSecretMetadataSecretMetadataOutputReference;
var DataInfisicalSecretMetadataSecretMetadataList = /** @class */ (function (_super) {
    __extends(DataInfisicalSecretMetadataSecretMetadataList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataInfisicalSecretMetadataSecretMetadataList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataInfisicalSecretMetadataSecretMetadataList.prototype.get = function (index) {
        return new DataInfisicalSecretMetadataSecretMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataInfisicalSecretMetadataSecretMetadataList;
}(cdktf.ComplexList));
exports.DataInfisicalSecretMetadataSecretMetadataList = DataInfisicalSecretMetadataSecretMetadataList;
function dataInfisicalSecretMetadataTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataInfisicalSecretMetadataTagsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataInfisicalSecretMetadataTagsOutputReference = /** @class */ (function (_super) {
    __extends(DataInfisicalSecretMetadataTagsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataInfisicalSecretMetadataTagsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataInfisicalSecretMetadataTagsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataInfisicalSecretMetadataTagsOutputReference.prototype, "color", {
        // color - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('color');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretMetadataTagsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretMetadataTagsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretMetadataTagsOutputReference.prototype, "slug", {
        // slug - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('slug');
        },
        enumerable: false,
        configurable: true
    });
    return DataInfisicalSecretMetadataTagsOutputReference;
}(cdktf.ComplexObject));
exports.DataInfisicalSecretMetadataTagsOutputReference = DataInfisicalSecretMetadataTagsOutputReference;
var DataInfisicalSecretMetadataTagsList = /** @class */ (function (_super) {
    __extends(DataInfisicalSecretMetadataTagsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataInfisicalSecretMetadataTagsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataInfisicalSecretMetadataTagsList.prototype.get = function (index) {
        return new DataInfisicalSecretMetadataTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataInfisicalSecretMetadataTagsList;
}(cdktf.ComplexList));
exports.DataInfisicalSecretMetadataTagsList = DataInfisicalSecretMetadataTagsList;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_metadata infisical_secret_metadata}
*/
var DataInfisicalSecretMetadata = /** @class */ (function (_super) {
    __extends(DataInfisicalSecretMetadata, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_metadata infisical_secret_metadata} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataInfisicalSecretMetadataConfig
    */
    function DataInfisicalSecretMetadata(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_secret_metadata',
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
        // secret_metadata - computed: true, optional: false, required: false
        _this._secretMetadata = new DataInfisicalSecretMetadataSecretMetadataList(_this, "secret_metadata", false);
        // tags - computed: true, optional: false, required: false
        _this._tags = new DataInfisicalSecretMetadataTagsList(_this, "tags", false);
        _this._environmentSlug = config.environmentSlug;
        _this._folderPath = config.folderPath;
        _this._name = config.name;
        _this._projectId = config.projectId;
        _this._secretType = config.secretType;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataInfisicalSecretMetadata resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataInfisicalSecretMetadata to import
    * @param importFromId The id of the existing DataInfisicalSecretMetadata that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secret_metadata#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataInfisicalSecretMetadata to import is found
    */
    DataInfisicalSecretMetadata.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_metadata", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataInfisicalSecretMetadata.prototype, "environmentSlug", {
        get: function () {
            return this.getStringAttribute('environment_slug');
        },
        set: function (value) {
            this._environmentSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretMetadata.prototype, "environmentSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environmentSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretMetadata.prototype, "folderPath", {
        get: function () {
            return this.getStringAttribute('folder_path');
        },
        set: function (value) {
            this._folderPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretMetadata.prototype, "folderPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._folderPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretMetadata.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretMetadata.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretMetadata.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretMetadata.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretMetadata.prototype, "secretMetadata", {
        get: function () {
            return this._secretMetadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretMetadata.prototype, "secretType", {
        get: function () {
            return this.getStringAttribute('secret_type');
        },
        set: function (value) {
            this._secretType = value;
        },
        enumerable: false,
        configurable: true
    });
    DataInfisicalSecretMetadata.prototype.resetSecretType = function () {
        this._secretType = undefined;
    };
    Object.defineProperty(DataInfisicalSecretMetadata.prototype, "secretTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretMetadata.prototype, "secretVersion", {
        // secret_version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('secret_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataInfisicalSecretMetadata.prototype, "tags", {
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataInfisicalSecretMetadata.prototype.synthesizeAttributes = function () {
        return {
            environment_slug: cdktf.stringToTerraform(this._environmentSlug),
            folder_path: cdktf.stringToTerraform(this._folderPath),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
            secret_type: cdktf.stringToTerraform(this._secretType),
        };
    };
    DataInfisicalSecretMetadata.prototype.synthesizeHclAttributes = function () {
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
            name: {
                value: cdktf.stringToHclTerraform(this._name),
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
            secret_type: {
                value: cdktf.stringToHclTerraform(this._secretType),
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
    DataInfisicalSecretMetadata.tfResourceType = "infisical_secret_metadata";
    return DataInfisicalSecretMetadata;
}(cdktf.TerraformDataSource));
exports.DataInfisicalSecretMetadata = DataInfisicalSecretMetadata;
