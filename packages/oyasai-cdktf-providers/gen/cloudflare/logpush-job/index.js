"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job
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
exports.LogpushJob = exports.LogpushJobOutputOptionsOutputReference = void 0;
exports.logpushJobOutputOptionsToTerraform = logpushJobOutputOptionsToTerraform;
exports.logpushJobOutputOptionsToHclTerraform = logpushJobOutputOptionsToHclTerraform;
var cdktf = require("cdktf");
function logpushJobOutputOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        batch_prefix: cdktf.stringToTerraform(struct.batchPrefix),
        batch_suffix: cdktf.stringToTerraform(struct.batchSuffix),
        cve_2021_44228: cdktf.booleanToTerraform(struct.cve202144228),
        field_delimiter: cdktf.stringToTerraform(struct.fieldDelimiter),
        field_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.fieldNames),
        merge_subrequests: cdktf.booleanToTerraform(struct.mergeSubrequests),
        output_type: cdktf.stringToTerraform(struct.outputType),
        record_delimiter: cdktf.stringToTerraform(struct.recordDelimiter),
        record_prefix: cdktf.stringToTerraform(struct.recordPrefix),
        record_suffix: cdktf.stringToTerraform(struct.recordSuffix),
        record_template: cdktf.stringToTerraform(struct.recordTemplate),
        sample_rate: cdktf.numberToTerraform(struct.sampleRate),
        timestamp_format: cdktf.stringToTerraform(struct.timestampFormat),
    };
}
function logpushJobOutputOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        batch_prefix: {
            value: cdktf.stringToHclTerraform(struct.batchPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        batch_suffix: {
            value: cdktf.stringToHclTerraform(struct.batchSuffix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cve_2021_44228: {
            value: cdktf.booleanToHclTerraform(struct.cve202144228),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        field_delimiter: {
            value: cdktf.stringToHclTerraform(struct.fieldDelimiter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        field_names: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.fieldNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        merge_subrequests: {
            value: cdktf.booleanToHclTerraform(struct.mergeSubrequests),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        output_type: {
            value: cdktf.stringToHclTerraform(struct.outputType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        record_delimiter: {
            value: cdktf.stringToHclTerraform(struct.recordDelimiter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        record_prefix: {
            value: cdktf.stringToHclTerraform(struct.recordPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        record_suffix: {
            value: cdktf.stringToHclTerraform(struct.recordSuffix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        record_template: {
            value: cdktf.stringToHclTerraform(struct.recordTemplate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sample_rate: {
            value: cdktf.numberToHclTerraform(struct.sampleRate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        timestamp_format: {
            value: cdktf.stringToHclTerraform(struct.timestampFormat),
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
}
var LogpushJobOutputOptionsOutputReference = /** @class */ (function (_super) {
    __extends(LogpushJobOutputOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function LogpushJobOutputOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._batchPrefix !== undefined) {
                hasAnyValues = true;
                internalValueResult.batchPrefix = this._batchPrefix;
            }
            if (this._batchSuffix !== undefined) {
                hasAnyValues = true;
                internalValueResult.batchSuffix = this._batchSuffix;
            }
            if (this._cve202144228 !== undefined) {
                hasAnyValues = true;
                internalValueResult.cve202144228 = this._cve202144228;
            }
            if (this._fieldDelimiter !== undefined) {
                hasAnyValues = true;
                internalValueResult.fieldDelimiter = this._fieldDelimiter;
            }
            if (this._fieldNames !== undefined) {
                hasAnyValues = true;
                internalValueResult.fieldNames = this._fieldNames;
            }
            if (this._mergeSubrequests !== undefined) {
                hasAnyValues = true;
                internalValueResult.mergeSubrequests = this._mergeSubrequests;
            }
            if (this._outputType !== undefined) {
                hasAnyValues = true;
                internalValueResult.outputType = this._outputType;
            }
            if (this._recordDelimiter !== undefined) {
                hasAnyValues = true;
                internalValueResult.recordDelimiter = this._recordDelimiter;
            }
            if (this._recordPrefix !== undefined) {
                hasAnyValues = true;
                internalValueResult.recordPrefix = this._recordPrefix;
            }
            if (this._recordSuffix !== undefined) {
                hasAnyValues = true;
                internalValueResult.recordSuffix = this._recordSuffix;
            }
            if (this._recordTemplate !== undefined) {
                hasAnyValues = true;
                internalValueResult.recordTemplate = this._recordTemplate;
            }
            if (this._sampleRate !== undefined) {
                hasAnyValues = true;
                internalValueResult.sampleRate = this._sampleRate;
            }
            if (this._timestampFormat !== undefined) {
                hasAnyValues = true;
                internalValueResult.timestampFormat = this._timestampFormat;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._batchPrefix = undefined;
                this._batchSuffix = undefined;
                this._cve202144228 = undefined;
                this._fieldDelimiter = undefined;
                this._fieldNames = undefined;
                this._mergeSubrequests = undefined;
                this._outputType = undefined;
                this._recordDelimiter = undefined;
                this._recordPrefix = undefined;
                this._recordSuffix = undefined;
                this._recordTemplate = undefined;
                this._sampleRate = undefined;
                this._timestampFormat = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._batchPrefix = value.batchPrefix;
                this._batchSuffix = value.batchSuffix;
                this._cve202144228 = value.cve202144228;
                this._fieldDelimiter = value.fieldDelimiter;
                this._fieldNames = value.fieldNames;
                this._mergeSubrequests = value.mergeSubrequests;
                this._outputType = value.outputType;
                this._recordDelimiter = value.recordDelimiter;
                this._recordPrefix = value.recordPrefix;
                this._recordSuffix = value.recordSuffix;
                this._recordTemplate = value.recordTemplate;
                this._sampleRate = value.sampleRate;
                this._timestampFormat = value.timestampFormat;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "batchPrefix", {
        get: function () {
            return this.getStringAttribute('batch_prefix');
        },
        set: function (value) {
            this._batchPrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJobOutputOptionsOutputReference.prototype.resetBatchPrefix = function () {
        this._batchPrefix = undefined;
    };
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "batchPrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._batchPrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "batchSuffix", {
        get: function () {
            return this.getStringAttribute('batch_suffix');
        },
        set: function (value) {
            this._batchSuffix = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJobOutputOptionsOutputReference.prototype.resetBatchSuffix = function () {
        this._batchSuffix = undefined;
    };
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "batchSuffixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._batchSuffix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "cve202144228", {
        get: function () {
            return this.getBooleanAttribute('cve_2021_44228');
        },
        set: function (value) {
            this._cve202144228 = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJobOutputOptionsOutputReference.prototype.resetCve202144228 = function () {
        this._cve202144228 = undefined;
    };
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "cve202144228Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cve202144228;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "fieldDelimiter", {
        get: function () {
            return this.getStringAttribute('field_delimiter');
        },
        set: function (value) {
            this._fieldDelimiter = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJobOutputOptionsOutputReference.prototype.resetFieldDelimiter = function () {
        this._fieldDelimiter = undefined;
    };
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "fieldDelimiterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fieldDelimiter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "fieldNames", {
        get: function () {
            return this.getListAttribute('field_names');
        },
        set: function (value) {
            this._fieldNames = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJobOutputOptionsOutputReference.prototype.resetFieldNames = function () {
        this._fieldNames = undefined;
    };
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "fieldNamesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fieldNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "mergeSubrequests", {
        get: function () {
            return this.getBooleanAttribute('merge_subrequests');
        },
        set: function (value) {
            this._mergeSubrequests = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJobOutputOptionsOutputReference.prototype.resetMergeSubrequests = function () {
        this._mergeSubrequests = undefined;
    };
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "mergeSubrequestsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mergeSubrequests;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "outputType", {
        get: function () {
            return this.getStringAttribute('output_type');
        },
        set: function (value) {
            this._outputType = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJobOutputOptionsOutputReference.prototype.resetOutputType = function () {
        this._outputType = undefined;
    };
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "outputTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._outputType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "recordDelimiter", {
        get: function () {
            return this.getStringAttribute('record_delimiter');
        },
        set: function (value) {
            this._recordDelimiter = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJobOutputOptionsOutputReference.prototype.resetRecordDelimiter = function () {
        this._recordDelimiter = undefined;
    };
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "recordDelimiterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._recordDelimiter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "recordPrefix", {
        get: function () {
            return this.getStringAttribute('record_prefix');
        },
        set: function (value) {
            this._recordPrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJobOutputOptionsOutputReference.prototype.resetRecordPrefix = function () {
        this._recordPrefix = undefined;
    };
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "recordPrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._recordPrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "recordSuffix", {
        get: function () {
            return this.getStringAttribute('record_suffix');
        },
        set: function (value) {
            this._recordSuffix = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJobOutputOptionsOutputReference.prototype.resetRecordSuffix = function () {
        this._recordSuffix = undefined;
    };
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "recordSuffixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._recordSuffix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "recordTemplate", {
        get: function () {
            return this.getStringAttribute('record_template');
        },
        set: function (value) {
            this._recordTemplate = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJobOutputOptionsOutputReference.prototype.resetRecordTemplate = function () {
        this._recordTemplate = undefined;
    };
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "recordTemplateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._recordTemplate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "sampleRate", {
        get: function () {
            return this.getNumberAttribute('sample_rate');
        },
        set: function (value) {
            this._sampleRate = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJobOutputOptionsOutputReference.prototype.resetSampleRate = function () {
        this._sampleRate = undefined;
    };
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "sampleRateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sampleRate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "timestampFormat", {
        get: function () {
            return this.getStringAttribute('timestamp_format');
        },
        set: function (value) {
            this._timestampFormat = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJobOutputOptionsOutputReference.prototype.resetTimestampFormat = function () {
        this._timestampFormat = undefined;
    };
    Object.defineProperty(LogpushJobOutputOptionsOutputReference.prototype, "timestampFormatInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timestampFormat;
        },
        enumerable: false,
        configurable: true
    });
    return LogpushJobOutputOptionsOutputReference;
}(cdktf.ComplexObject));
exports.LogpushJobOutputOptionsOutputReference = LogpushJobOutputOptionsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job cloudflare_logpush_job}
*/
var LogpushJob = /** @class */ (function (_super) {
    __extends(LogpushJob, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job cloudflare_logpush_job} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LogpushJobConfig
    */
    function LogpushJob(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_logpush_job',
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
        // output_options - computed: false, optional: true, required: false
        _this._outputOptions = new LogpushJobOutputOptionsOutputReference(_this, "output_options");
        _this._accountId = config.accountId;
        _this._dataset = config.dataset;
        _this._destinationConf = config.destinationConf;
        _this._enabled = config.enabled;
        _this._filter = config.filter;
        _this._frequency = config.frequency;
        _this._kind = config.kind;
        _this._logpullOptions = config.logpullOptions;
        _this._maxUploadBytes = config.maxUploadBytes;
        _this._maxUploadIntervalSeconds = config.maxUploadIntervalSeconds;
        _this._maxUploadRecords = config.maxUploadRecords;
        _this._name = config.name;
        _this._outputOptions.internalValue = config.outputOptions;
        _this._ownershipChallenge = config.ownershipChallenge;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a LogpushJob resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LogpushJob to import
    * @param importFromId The id of the existing LogpushJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LogpushJob to import is found
    */
    LogpushJob.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_logpush_job", importId: importFromId, provider: provider });
    };
    Object.defineProperty(LogpushJob.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJob.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(LogpushJob.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJob.prototype, "dataset", {
        get: function () {
            return this.getStringAttribute('dataset');
        },
        set: function (value) {
            this._dataset = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJob.prototype.resetDataset = function () {
        this._dataset = undefined;
    };
    Object.defineProperty(LogpushJob.prototype, "datasetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dataset;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJob.prototype, "destinationConf", {
        get: function () {
            return this.getStringAttribute('destination_conf');
        },
        set: function (value) {
            this._destinationConf = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJob.prototype, "destinationConfInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationConf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJob.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJob.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(LogpushJob.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJob.prototype, "errorMessage", {
        // error_message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('error_message');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJob.prototype, "filter", {
        get: function () {
            return this.getStringAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJob.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(LogpushJob.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJob.prototype, "frequency", {
        get: function () {
            return this.getStringAttribute('frequency');
        },
        set: function (value) {
            this._frequency = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJob.prototype.resetFrequency = function () {
        this._frequency = undefined;
    };
    Object.defineProperty(LogpushJob.prototype, "frequencyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._frequency;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJob.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJob.prototype, "kind", {
        get: function () {
            return this.getStringAttribute('kind');
        },
        set: function (value) {
            this._kind = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJob.prototype.resetKind = function () {
        this._kind = undefined;
    };
    Object.defineProperty(LogpushJob.prototype, "kindInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kind;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJob.prototype, "lastComplete", {
        // last_complete - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_complete');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJob.prototype, "lastError", {
        // last_error - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_error');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJob.prototype, "logpullOptions", {
        get: function () {
            return this.getStringAttribute('logpull_options');
        },
        set: function (value) {
            this._logpullOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJob.prototype.resetLogpullOptions = function () {
        this._logpullOptions = undefined;
    };
    Object.defineProperty(LogpushJob.prototype, "logpullOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logpullOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJob.prototype, "maxUploadBytes", {
        get: function () {
            return this.getNumberAttribute('max_upload_bytes');
        },
        set: function (value) {
            this._maxUploadBytes = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJob.prototype.resetMaxUploadBytes = function () {
        this._maxUploadBytes = undefined;
    };
    Object.defineProperty(LogpushJob.prototype, "maxUploadBytesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxUploadBytes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJob.prototype, "maxUploadIntervalSeconds", {
        get: function () {
            return this.getNumberAttribute('max_upload_interval_seconds');
        },
        set: function (value) {
            this._maxUploadIntervalSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJob.prototype.resetMaxUploadIntervalSeconds = function () {
        this._maxUploadIntervalSeconds = undefined;
    };
    Object.defineProperty(LogpushJob.prototype, "maxUploadIntervalSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxUploadIntervalSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJob.prototype, "maxUploadRecords", {
        get: function () {
            return this.getNumberAttribute('max_upload_records');
        },
        set: function (value) {
            this._maxUploadRecords = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJob.prototype.resetMaxUploadRecords = function () {
        this._maxUploadRecords = undefined;
    };
    Object.defineProperty(LogpushJob.prototype, "maxUploadRecordsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxUploadRecords;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJob.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJob.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(LogpushJob.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJob.prototype, "outputOptions", {
        get: function () {
            return this._outputOptions;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJob.prototype.putOutputOptions = function (value) {
        this._outputOptions.internalValue = value;
    };
    LogpushJob.prototype.resetOutputOptions = function () {
        this._outputOptions.internalValue = undefined;
    };
    Object.defineProperty(LogpushJob.prototype, "outputOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._outputOptions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJob.prototype, "ownershipChallenge", {
        get: function () {
            return this.getStringAttribute('ownership_challenge');
        },
        set: function (value) {
            this._ownershipChallenge = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJob.prototype.resetOwnershipChallenge = function () {
        this._ownershipChallenge = undefined;
    };
    Object.defineProperty(LogpushJob.prototype, "ownershipChallengeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ownershipChallenge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogpushJob.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    LogpushJob.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(LogpushJob.prototype, "zoneIdInput", {
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
    LogpushJob.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            dataset: cdktf.stringToTerraform(this._dataset),
            destination_conf: cdktf.stringToTerraform(this._destinationConf),
            enabled: cdktf.booleanToTerraform(this._enabled),
            filter: cdktf.stringToTerraform(this._filter),
            frequency: cdktf.stringToTerraform(this._frequency),
            kind: cdktf.stringToTerraform(this._kind),
            logpull_options: cdktf.stringToTerraform(this._logpullOptions),
            max_upload_bytes: cdktf.numberToTerraform(this._maxUploadBytes),
            max_upload_interval_seconds: cdktf.numberToTerraform(this._maxUploadIntervalSeconds),
            max_upload_records: cdktf.numberToTerraform(this._maxUploadRecords),
            name: cdktf.stringToTerraform(this._name),
            output_options: logpushJobOutputOptionsToTerraform(this._outputOptions.internalValue),
            ownership_challenge: cdktf.stringToTerraform(this._ownershipChallenge),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    LogpushJob.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dataset: {
                value: cdktf.stringToHclTerraform(this._dataset),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_conf: {
                value: cdktf.stringToHclTerraform(this._destinationConf),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            filter: {
                value: cdktf.stringToHclTerraform(this._filter),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            frequency: {
                value: cdktf.stringToHclTerraform(this._frequency),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kind: {
                value: cdktf.stringToHclTerraform(this._kind),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            logpull_options: {
                value: cdktf.stringToHclTerraform(this._logpullOptions),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_upload_bytes: {
                value: cdktf.numberToHclTerraform(this._maxUploadBytes),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            max_upload_interval_seconds: {
                value: cdktf.numberToHclTerraform(this._maxUploadIntervalSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            max_upload_records: {
                value: cdktf.numberToHclTerraform(this._maxUploadRecords),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            output_options: {
                value: logpushJobOutputOptionsToHclTerraform(this._outputOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "LogpushJobOutputOptions",
            },
            ownership_challenge: {
                value: cdktf.stringToHclTerraform(this._ownershipChallenge),
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
    LogpushJob.tfResourceType = "cloudflare_logpush_job";
    return LogpushJob;
}(cdktf.TerraformResource));
exports.LogpushJob = LogpushJob;
