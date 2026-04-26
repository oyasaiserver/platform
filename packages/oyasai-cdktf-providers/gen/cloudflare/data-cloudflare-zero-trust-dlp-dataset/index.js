"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_dataset
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
exports.DataCloudflareZeroTrustDlpDataset = exports.DataCloudflareZeroTrustDlpDatasetUploadsList = exports.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference = exports.DataCloudflareZeroTrustDlpDatasetColumnsList = exports.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference = void 0;
exports.dataCloudflareZeroTrustDlpDatasetColumnsToTerraform = dataCloudflareZeroTrustDlpDatasetColumnsToTerraform;
exports.dataCloudflareZeroTrustDlpDatasetColumnsToHclTerraform = dataCloudflareZeroTrustDlpDatasetColumnsToHclTerraform;
exports.dataCloudflareZeroTrustDlpDatasetUploadsToTerraform = dataCloudflareZeroTrustDlpDatasetUploadsToTerraform;
exports.dataCloudflareZeroTrustDlpDatasetUploadsToHclTerraform = dataCloudflareZeroTrustDlpDatasetUploadsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustDlpDatasetColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpDatasetColumnsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpDatasetColumnsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpDatasetColumnsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDlpDatasetColumnsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.prototype, "entryId", {
        // entry_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('entry_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.prototype, "headerName", {
        // header_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('header_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.prototype, "numCells", {
        // num_cells - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('num_cells');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetColumnsOutputReference.prototype, "uploadStatus", {
        // upload_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('upload_status');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpDatasetColumnsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpDatasetColumnsOutputReference = DataCloudflareZeroTrustDlpDatasetColumnsOutputReference;
var DataCloudflareZeroTrustDlpDatasetColumnsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpDatasetColumnsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDlpDatasetColumnsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDlpDatasetColumnsList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDlpDatasetColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDlpDatasetColumnsList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDlpDatasetColumnsList = DataCloudflareZeroTrustDlpDatasetColumnsList;
function dataCloudflareZeroTrustDlpDatasetUploadsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpDatasetUploadsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpDatasetUploadsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpDatasetUploadsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDlpDatasetUploadsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.prototype, "numCells", {
        // num_cells - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('num_cells');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetUploadsOutputReference.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpDatasetUploadsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpDatasetUploadsOutputReference = DataCloudflareZeroTrustDlpDatasetUploadsOutputReference;
var DataCloudflareZeroTrustDlpDatasetUploadsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpDatasetUploadsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDlpDatasetUploadsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDlpDatasetUploadsList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDlpDatasetUploadsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDlpDatasetUploadsList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDlpDatasetUploadsList = DataCloudflareZeroTrustDlpDatasetUploadsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_dataset cloudflare_zero_trust_dlp_dataset}
*/
var DataCloudflareZeroTrustDlpDataset = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpDataset, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_dataset cloudflare_zero_trust_dlp_dataset} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDlpDatasetConfig
    */
    function DataCloudflareZeroTrustDlpDataset(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_dlp_dataset',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        // columns - computed: true, optional: false, required: false
        _this._columns = new DataCloudflareZeroTrustDlpDatasetColumnsList(_this, "columns", false);
        // uploads - computed: true, optional: false, required: false
        _this._uploads = new DataCloudflareZeroTrustDlpDatasetUploadsList(_this, "uploads", false);
        _this._accountId = config.accountId;
        _this._datasetId = config.datasetId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDlpDataset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDlpDataset to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDlpDataset that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_dataset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDlpDataset to import is found
    */
    DataCloudflareZeroTrustDlpDataset.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dlp_dataset", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustDlpDataset.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDlpDataset.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDlpDataset.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDataset.prototype, "caseSensitive", {
        // case_sensitive - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('case_sensitive');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDataset.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDataset.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDataset.prototype, "datasetId", {
        get: function () {
            return this.getStringAttribute('dataset_id');
        },
        set: function (value) {
            this._datasetId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDataset.prototype, "datasetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._datasetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDataset.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDataset.prototype, "encodingVersion", {
        // encoding_version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('encoding_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDataset.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDataset.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDataset.prototype, "numCells", {
        // num_cells - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('num_cells');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDataset.prototype, "secret", {
        // secret - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDataset.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDataset.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDataset.prototype, "uploads", {
        get: function () {
            return this._uploads;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustDlpDataset.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            dataset_id: cdktf.stringToTerraform(this._datasetId),
        };
    };
    DataCloudflareZeroTrustDlpDataset.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dataset_id: {
                value: cdktf.stringToHclTerraform(this._datasetId),
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
    DataCloudflareZeroTrustDlpDataset.tfResourceType = "cloudflare_zero_trust_dlp_dataset";
    return DataCloudflareZeroTrustDlpDataset;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustDlpDataset = DataCloudflareZeroTrustDlpDataset;
