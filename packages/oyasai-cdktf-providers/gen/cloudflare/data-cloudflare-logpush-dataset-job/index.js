"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_dataset_job
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
exports.DataCloudflareLogpushDatasetJob = exports.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference = void 0;
exports.dataCloudflareLogpushDatasetJobOutputOptionsToTerraform = dataCloudflareLogpushDatasetJobOutputOptionsToTerraform;
exports.dataCloudflareLogpushDatasetJobOutputOptionsToHclTerraform = dataCloudflareLogpushDatasetJobOutputOptionsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareLogpushDatasetJobOutputOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLogpushDatasetJobOutputOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLogpushDatasetJobOutputOptionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLogpushDatasetJobOutputOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLogpushDatasetJobOutputOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.prototype, "batchPrefix", {
        // batch_prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('batch_prefix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.prototype, "batchSuffix", {
        // batch_suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('batch_suffix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.prototype, "cve202144228", {
        // cve_2021_44228 - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cve_2021_44228');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.prototype, "fieldDelimiter", {
        // field_delimiter - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('field_delimiter');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.prototype, "fieldNames", {
        // field_names - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('field_names');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.prototype, "mergeSubrequests", {
        // merge_subrequests - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('merge_subrequests');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.prototype, "outputType", {
        // output_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('output_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.prototype, "recordDelimiter", {
        // record_delimiter - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('record_delimiter');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.prototype, "recordPrefix", {
        // record_prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('record_prefix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.prototype, "recordSuffix", {
        // record_suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('record_suffix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.prototype, "recordTemplate", {
        // record_template - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('record_template');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.prototype, "sampleRate", {
        // sample_rate - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('sample_rate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.prototype, "timestampFormat", {
        // timestamp_format - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('timestamp_format');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLogpushDatasetJobOutputOptionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference = DataCloudflareLogpushDatasetJobOutputOptionsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_dataset_job cloudflare_logpush_dataset_job}
*/
var DataCloudflareLogpushDatasetJob = /** @class */ (function (_super) {
    __extends(DataCloudflareLogpushDatasetJob, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_dataset_job cloudflare_logpush_dataset_job} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareLogpushDatasetJobConfig = {}
    */
    function DataCloudflareLogpushDatasetJob(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_logpush_dataset_job',
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
        // output_options - computed: true, optional: false, required: false
        _this._outputOptions = new DataCloudflareLogpushDatasetJobOutputOptionsOutputReference(_this, "output_options");
        _this._accountId = config.accountId;
        _this._datasetId = config.datasetId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareLogpushDatasetJob resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLogpushDatasetJob to import
    * @param importFromId The id of the existing DataCloudflareLogpushDatasetJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_dataset_job#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLogpushDatasetJob to import is found
    */
    DataCloudflareLogpushDatasetJob.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_logpush_dataset_job", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareLogpushDatasetJob.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLogpushDatasetJob.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareLogpushDatasetJob.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJob.prototype, "dataset", {
        // dataset - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dataset');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJob.prototype, "datasetId", {
        get: function () {
            return this.getStringAttribute('dataset_id');
        },
        set: function (value) {
            this._datasetId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLogpushDatasetJob.prototype.resetDatasetId = function () {
        this._datasetId = undefined;
    };
    Object.defineProperty(DataCloudflareLogpushDatasetJob.prototype, "datasetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._datasetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJob.prototype, "destinationConf", {
        // destination_conf - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('destination_conf');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJob.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJob.prototype, "errorMessage", {
        // error_message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('error_message');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJob.prototype, "frequency", {
        // frequency - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('frequency');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJob.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJob.prototype, "kind", {
        // kind - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kind');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJob.prototype, "lastComplete", {
        // last_complete - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_complete');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJob.prototype, "lastError", {
        // last_error - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_error');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJob.prototype, "logpullOptions", {
        // logpull_options - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('logpull_options');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJob.prototype, "maxUploadBytes", {
        // max_upload_bytes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_upload_bytes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJob.prototype, "maxUploadIntervalSeconds", {
        // max_upload_interval_seconds - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_upload_interval_seconds');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJob.prototype, "maxUploadRecords", {
        // max_upload_records - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_upload_records');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJob.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJob.prototype, "outputOptions", {
        get: function () {
            return this._outputOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLogpushDatasetJob.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLogpushDatasetJob.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareLogpushDatasetJob.prototype, "zoneIdInput", {
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
    DataCloudflareLogpushDatasetJob.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            dataset_id: cdktf.stringToTerraform(this._datasetId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareLogpushDatasetJob.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareLogpushDatasetJob.tfResourceType = "cloudflare_logpush_dataset_job";
    return DataCloudflareLogpushDatasetJob;
}(cdktf.TerraformDataSource));
exports.DataCloudflareLogpushDatasetJob = DataCloudflareLogpushDatasetJob;
