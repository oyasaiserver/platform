"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_datasets
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
exports.DataCloudflareZeroTrustDlpDatasets = exports.DataCloudflareZeroTrustDlpDatasetsResultList = exports.DataCloudflareZeroTrustDlpDatasetsResultOutputReference = exports.DataCloudflareZeroTrustDlpDatasetsResultUploadsList = exports.DataCloudflareZeroTrustDlpDatasetsResultUploadsOutputReference = exports.DataCloudflareZeroTrustDlpDatasetsResultColumnsList = exports.DataCloudflareZeroTrustDlpDatasetsResultColumnsOutputReference = void 0;
exports.dataCloudflareZeroTrustDlpDatasetsResultColumnsToTerraform = dataCloudflareZeroTrustDlpDatasetsResultColumnsToTerraform;
exports.dataCloudflareZeroTrustDlpDatasetsResultColumnsToHclTerraform = dataCloudflareZeroTrustDlpDatasetsResultColumnsToHclTerraform;
exports.dataCloudflareZeroTrustDlpDatasetsResultUploadsToTerraform = dataCloudflareZeroTrustDlpDatasetsResultUploadsToTerraform;
exports.dataCloudflareZeroTrustDlpDatasetsResultUploadsToHclTerraform = dataCloudflareZeroTrustDlpDatasetsResultUploadsToHclTerraform;
exports.dataCloudflareZeroTrustDlpDatasetsResultToTerraform = dataCloudflareZeroTrustDlpDatasetsResultToTerraform;
exports.dataCloudflareZeroTrustDlpDatasetsResultToHclTerraform = dataCloudflareZeroTrustDlpDatasetsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustDlpDatasetsResultColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpDatasetsResultColumnsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpDatasetsResultColumnsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpDatasetsResultColumnsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDlpDatasetsResultColumnsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetsResultColumnsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetsResultColumnsOutputReference.prototype, "entryId", {
        // entry_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('entry_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetsResultColumnsOutputReference.prototype, "headerName", {
        // header_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('header_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetsResultColumnsOutputReference.prototype, "numCells", {
        // num_cells - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('num_cells');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetsResultColumnsOutputReference.prototype, "uploadStatus", {
        // upload_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('upload_status');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpDatasetsResultColumnsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpDatasetsResultColumnsOutputReference = DataCloudflareZeroTrustDlpDatasetsResultColumnsOutputReference;
var DataCloudflareZeroTrustDlpDatasetsResultColumnsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpDatasetsResultColumnsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDlpDatasetsResultColumnsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDlpDatasetsResultColumnsList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDlpDatasetsResultColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDlpDatasetsResultColumnsList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDlpDatasetsResultColumnsList = DataCloudflareZeroTrustDlpDatasetsResultColumnsList;
function dataCloudflareZeroTrustDlpDatasetsResultUploadsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpDatasetsResultUploadsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpDatasetsResultUploadsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpDatasetsResultUploadsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDlpDatasetsResultUploadsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetsResultUploadsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetsResultUploadsOutputReference.prototype, "numCells", {
        // num_cells - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('num_cells');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetsResultUploadsOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetsResultUploadsOutputReference.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpDatasetsResultUploadsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpDatasetsResultUploadsOutputReference = DataCloudflareZeroTrustDlpDatasetsResultUploadsOutputReference;
var DataCloudflareZeroTrustDlpDatasetsResultUploadsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpDatasetsResultUploadsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDlpDatasetsResultUploadsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDlpDatasetsResultUploadsList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDlpDatasetsResultUploadsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDlpDatasetsResultUploadsList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDlpDatasetsResultUploadsList = DataCloudflareZeroTrustDlpDatasetsResultUploadsList;
function dataCloudflareZeroTrustDlpDatasetsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDlpDatasetsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDlpDatasetsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpDatasetsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDlpDatasetsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // columns - computed: true, optional: false, required: false
        _this._columns = new DataCloudflareZeroTrustDlpDatasetsResultColumnsList(_this, "columns", false);
        // uploads - computed: true, optional: false, required: false
        _this._uploads = new DataCloudflareZeroTrustDlpDatasetsResultUploadsList(_this, "uploads", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetsResultOutputReference.prototype, "caseSensitive", {
        // case_sensitive - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('case_sensitive');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetsResultOutputReference.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetsResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetsResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetsResultOutputReference.prototype, "encodingVersion", {
        // encoding_version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('encoding_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetsResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetsResultOutputReference.prototype, "numCells", {
        // num_cells - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('num_cells');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetsResultOutputReference.prototype, "secret", {
        // secret - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetsResultOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetsResultOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasetsResultOutputReference.prototype, "uploads", {
        get: function () {
            return this._uploads;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDlpDatasetsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDlpDatasetsResultOutputReference = DataCloudflareZeroTrustDlpDatasetsResultOutputReference;
var DataCloudflareZeroTrustDlpDatasetsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpDatasetsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDlpDatasetsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDlpDatasetsResultList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDlpDatasetsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDlpDatasetsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDlpDatasetsResultList = DataCloudflareZeroTrustDlpDatasetsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_datasets cloudflare_zero_trust_dlp_datasets}
*/
var DataCloudflareZeroTrustDlpDatasets = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDlpDatasets, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_datasets cloudflare_zero_trust_dlp_datasets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDlpDatasetsConfig = {}
    */
    function DataCloudflareZeroTrustDlpDatasets(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_dlp_datasets',
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
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareZeroTrustDlpDatasetsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDlpDatasets resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDlpDatasets to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDlpDatasets that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_datasets#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDlpDatasets to import is found
    */
    DataCloudflareZeroTrustDlpDatasets.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dlp_datasets", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasets.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDlpDatasets.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasets.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasets.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDlpDatasets.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasets.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDlpDatasets.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustDlpDatasets.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareZeroTrustDlpDatasets.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    DataCloudflareZeroTrustDlpDatasets.tfResourceType = "cloudflare_zero_trust_dlp_datasets";
    return DataCloudflareZeroTrustDlpDatasets;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustDlpDatasets = DataCloudflareZeroTrustDlpDatasets;
