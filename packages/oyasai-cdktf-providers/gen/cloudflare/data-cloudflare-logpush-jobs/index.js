"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_jobs
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
exports.DataCloudflareLogpushJobs = exports.DataCloudflareLogpushJobsResultList = exports.DataCloudflareLogpushJobsResultOutputReference = exports.DataCloudflareLogpushJobsResultOutputOptionsOutputReference = void 0;
exports.dataCloudflareLogpushJobsResultOutputOptionsToTerraform = dataCloudflareLogpushJobsResultOutputOptionsToTerraform;
exports.dataCloudflareLogpushJobsResultOutputOptionsToHclTerraform = dataCloudflareLogpushJobsResultOutputOptionsToHclTerraform;
exports.dataCloudflareLogpushJobsResultToTerraform = dataCloudflareLogpushJobsResultToTerraform;
exports.dataCloudflareLogpushJobsResultToHclTerraform = dataCloudflareLogpushJobsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareLogpushJobsResultOutputOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLogpushJobsResultOutputOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLogpushJobsResultOutputOptionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLogpushJobsResultOutputOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLogpushJobsResultOutputOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputOptionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputOptionsOutputReference.prototype, "batchPrefix", {
        // batch_prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('batch_prefix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputOptionsOutputReference.prototype, "batchSuffix", {
        // batch_suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('batch_suffix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputOptionsOutputReference.prototype, "cve202144228", {
        // cve_2021_44228 - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cve_2021_44228');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputOptionsOutputReference.prototype, "fieldDelimiter", {
        // field_delimiter - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('field_delimiter');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputOptionsOutputReference.prototype, "fieldNames", {
        // field_names - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('field_names');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputOptionsOutputReference.prototype, "mergeSubrequests", {
        // merge_subrequests - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('merge_subrequests');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputOptionsOutputReference.prototype, "outputType", {
        // output_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('output_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputOptionsOutputReference.prototype, "recordDelimiter", {
        // record_delimiter - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('record_delimiter');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputOptionsOutputReference.prototype, "recordPrefix", {
        // record_prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('record_prefix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputOptionsOutputReference.prototype, "recordSuffix", {
        // record_suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('record_suffix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputOptionsOutputReference.prototype, "recordTemplate", {
        // record_template - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('record_template');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputOptionsOutputReference.prototype, "sampleRate", {
        // sample_rate - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('sample_rate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputOptionsOutputReference.prototype, "timestampFormat", {
        // timestamp_format - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('timestamp_format');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLogpushJobsResultOutputOptionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLogpushJobsResultOutputOptionsOutputReference = DataCloudflareLogpushJobsResultOutputOptionsOutputReference;
function dataCloudflareLogpushJobsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLogpushJobsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLogpushJobsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLogpushJobsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareLogpushJobsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // output_options - computed: true, optional: false, required: false
        _this._outputOptions = new DataCloudflareLogpushJobsResultOutputOptionsOutputReference(_this, "output_options");
        return _this;
    }
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputReference.prototype, "dataset", {
        // dataset - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dataset');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputReference.prototype, "destinationConf", {
        // destination_conf - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('destination_conf');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputReference.prototype, "errorMessage", {
        // error_message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('error_message');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputReference.prototype, "frequency", {
        // frequency - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('frequency');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputReference.prototype, "kind", {
        // kind - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kind');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputReference.prototype, "lastComplete", {
        // last_complete - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_complete');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputReference.prototype, "lastError", {
        // last_error - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_error');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputReference.prototype, "logpullOptions", {
        // logpull_options - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('logpull_options');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputReference.prototype, "maxUploadBytes", {
        // max_upload_bytes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_upload_bytes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputReference.prototype, "maxUploadIntervalSeconds", {
        // max_upload_interval_seconds - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_upload_interval_seconds');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputReference.prototype, "maxUploadRecords", {
        // max_upload_records - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_upload_records');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobsResultOutputReference.prototype, "outputOptions", {
        get: function () {
            return this._outputOptions;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLogpushJobsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLogpushJobsResultOutputReference = DataCloudflareLogpushJobsResultOutputReference;
var DataCloudflareLogpushJobsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareLogpushJobsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareLogpushJobsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareLogpushJobsResultList.prototype.get = function (index) {
        return new DataCloudflareLogpushJobsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareLogpushJobsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareLogpushJobsResultList = DataCloudflareLogpushJobsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_jobs cloudflare_logpush_jobs}
*/
var DataCloudflareLogpushJobs = /** @class */ (function (_super) {
    __extends(DataCloudflareLogpushJobs, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_jobs cloudflare_logpush_jobs} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareLogpushJobsConfig = {}
    */
    function DataCloudflareLogpushJobs(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_logpush_jobs',
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
        _this._result = new DataCloudflareLogpushJobsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareLogpushJobs resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLogpushJobs to import
    * @param importFromId The id of the existing DataCloudflareLogpushJobs that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_jobs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLogpushJobs to import is found
    */
    DataCloudflareLogpushJobs.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_logpush_jobs", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareLogpushJobs.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLogpushJobs.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareLogpushJobs.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobs.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLogpushJobs.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareLogpushJobs.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobs.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushJobs.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLogpushJobs.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareLogpushJobs.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareLogpushJobs.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareLogpushJobs.prototype.synthesizeHclAttributes = function () {
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
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
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
    DataCloudflareLogpushJobs.tfResourceType = "cloudflare_logpush_jobs";
    return DataCloudflareLogpushJobs;
}(cdktf.TerraformDataSource));
exports.DataCloudflareLogpushJobs = DataCloudflareLogpushJobs;
