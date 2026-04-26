// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function logpushJobOutputOptionsToTerraform(struct) {
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
export function logpushJobOutputOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class LogpushJobOutputOptionsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
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
    }
    set internalValue(value) {
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
    }
    // batch_prefix - computed: false, optional: true, required: false
    _batchPrefix;
    get batchPrefix() {
        return this.getStringAttribute('batch_prefix');
    }
    set batchPrefix(value) {
        this._batchPrefix = value;
    }
    resetBatchPrefix() {
        this._batchPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get batchPrefixInput() {
        return this._batchPrefix;
    }
    // batch_suffix - computed: false, optional: true, required: false
    _batchSuffix;
    get batchSuffix() {
        return this.getStringAttribute('batch_suffix');
    }
    set batchSuffix(value) {
        this._batchSuffix = value;
    }
    resetBatchSuffix() {
        this._batchSuffix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get batchSuffixInput() {
        return this._batchSuffix;
    }
    // cve_2021_44228 - computed: true, optional: true, required: false
    _cve202144228;
    get cve202144228() {
        return this.getBooleanAttribute('cve_2021_44228');
    }
    set cve202144228(value) {
        this._cve202144228 = value;
    }
    resetCve202144228() {
        this._cve202144228 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cve202144228Input() {
        return this._cve202144228;
    }
    // field_delimiter - computed: false, optional: true, required: false
    _fieldDelimiter;
    get fieldDelimiter() {
        return this.getStringAttribute('field_delimiter');
    }
    set fieldDelimiter(value) {
        this._fieldDelimiter = value;
    }
    resetFieldDelimiter() {
        this._fieldDelimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldDelimiterInput() {
        return this._fieldDelimiter;
    }
    // field_names - computed: false, optional: true, required: false
    _fieldNames;
    get fieldNames() {
        return this.getListAttribute('field_names');
    }
    set fieldNames(value) {
        this._fieldNames = value;
    }
    resetFieldNames() {
        this._fieldNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldNamesInput() {
        return this._fieldNames;
    }
    // merge_subrequests - computed: false, optional: true, required: false
    _mergeSubrequests;
    get mergeSubrequests() {
        return this.getBooleanAttribute('merge_subrequests');
    }
    set mergeSubrequests(value) {
        this._mergeSubrequests = value;
    }
    resetMergeSubrequests() {
        this._mergeSubrequests = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mergeSubrequestsInput() {
        return this._mergeSubrequests;
    }
    // output_type - computed: false, optional: true, required: false
    _outputType;
    get outputType() {
        return this.getStringAttribute('output_type');
    }
    set outputType(value) {
        this._outputType = value;
    }
    resetOutputType() {
        this._outputType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get outputTypeInput() {
        return this._outputType;
    }
    // record_delimiter - computed: false, optional: true, required: false
    _recordDelimiter;
    get recordDelimiter() {
        return this.getStringAttribute('record_delimiter');
    }
    set recordDelimiter(value) {
        this._recordDelimiter = value;
    }
    resetRecordDelimiter() {
        this._recordDelimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get recordDelimiterInput() {
        return this._recordDelimiter;
    }
    // record_prefix - computed: false, optional: true, required: false
    _recordPrefix;
    get recordPrefix() {
        return this.getStringAttribute('record_prefix');
    }
    set recordPrefix(value) {
        this._recordPrefix = value;
    }
    resetRecordPrefix() {
        this._recordPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get recordPrefixInput() {
        return this._recordPrefix;
    }
    // record_suffix - computed: false, optional: true, required: false
    _recordSuffix;
    get recordSuffix() {
        return this.getStringAttribute('record_suffix');
    }
    set recordSuffix(value) {
        this._recordSuffix = value;
    }
    resetRecordSuffix() {
        this._recordSuffix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get recordSuffixInput() {
        return this._recordSuffix;
    }
    // record_template - computed: false, optional: true, required: false
    _recordTemplate;
    get recordTemplate() {
        return this.getStringAttribute('record_template');
    }
    set recordTemplate(value) {
        this._recordTemplate = value;
    }
    resetRecordTemplate() {
        this._recordTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get recordTemplateInput() {
        return this._recordTemplate;
    }
    // sample_rate - computed: false, optional: true, required: false
    _sampleRate;
    get sampleRate() {
        return this.getNumberAttribute('sample_rate');
    }
    set sampleRate(value) {
        this._sampleRate = value;
    }
    resetSampleRate() {
        this._sampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sampleRateInput() {
        return this._sampleRate;
    }
    // timestamp_format - computed: false, optional: true, required: false
    _timestampFormat;
    get timestampFormat() {
        return this.getStringAttribute('timestamp_format');
    }
    set timestampFormat(value) {
        this._timestampFormat = value;
    }
    resetTimestampFormat() {
        this._timestampFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timestampFormatInput() {
        return this._timestampFormat;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job cloudflare_logpush_job}
*/
export class LogpushJob extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_logpush_job";
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
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_logpush_job", importId: importFromId, provider });
    }
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
    constructor(scope, id, config) {
        super(scope, id, {
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
        });
        this._accountId = config.accountId;
        this._dataset = config.dataset;
        this._destinationConf = config.destinationConf;
        this._enabled = config.enabled;
        this._filter = config.filter;
        this._frequency = config.frequency;
        this._kind = config.kind;
        this._logpullOptions = config.logpullOptions;
        this._maxUploadBytes = config.maxUploadBytes;
        this._maxUploadIntervalSeconds = config.maxUploadIntervalSeconds;
        this._maxUploadRecords = config.maxUploadRecords;
        this._name = config.name;
        this._outputOptions.internalValue = config.outputOptions;
        this._ownershipChallenge = config.ownershipChallenge;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: true, required: false
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // dataset - computed: true, optional: true, required: false
    _dataset;
    get dataset() {
        return this.getStringAttribute('dataset');
    }
    set dataset(value) {
        this._dataset = value;
    }
    resetDataset() {
        this._dataset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get datasetInput() {
        return this._dataset;
    }
    // destination_conf - computed: false, optional: false, required: true
    _destinationConf;
    get destinationConf() {
        return this.getStringAttribute('destination_conf');
    }
    set destinationConf(value) {
        this._destinationConf = value;
    }
    // Temporarily expose input value. Use with caution.
    get destinationConfInput() {
        return this._destinationConf;
    }
    // enabled - computed: true, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // error_message - computed: true, optional: false, required: false
    get errorMessage() {
        return this.getStringAttribute('error_message');
    }
    // filter - computed: true, optional: true, required: false
    _filter;
    get filter() {
        return this.getStringAttribute('filter');
    }
    set filter(value) {
        this._filter = value;
    }
    resetFilter() {
        this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get filterInput() {
        return this._filter;
    }
    // frequency - computed: true, optional: true, required: false
    _frequency;
    get frequency() {
        return this.getStringAttribute('frequency');
    }
    set frequency(value) {
        this._frequency = value;
    }
    resetFrequency() {
        this._frequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get frequencyInput() {
        return this._frequency;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getNumberAttribute('id');
    }
    // kind - computed: true, optional: true, required: false
    _kind;
    get kind() {
        return this.getStringAttribute('kind');
    }
    set kind(value) {
        this._kind = value;
    }
    resetKind() {
        this._kind = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kindInput() {
        return this._kind;
    }
    // last_complete - computed: true, optional: false, required: false
    get lastComplete() {
        return this.getStringAttribute('last_complete');
    }
    // last_error - computed: true, optional: false, required: false
    get lastError() {
        return this.getStringAttribute('last_error');
    }
    // logpull_options - computed: true, optional: true, required: false
    _logpullOptions;
    get logpullOptions() {
        return this.getStringAttribute('logpull_options');
    }
    set logpullOptions(value) {
        this._logpullOptions = value;
    }
    resetLogpullOptions() {
        this._logpullOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logpullOptionsInput() {
        return this._logpullOptions;
    }
    // max_upload_bytes - computed: true, optional: true, required: false
    _maxUploadBytes;
    get maxUploadBytes() {
        return this.getNumberAttribute('max_upload_bytes');
    }
    set maxUploadBytes(value) {
        this._maxUploadBytes = value;
    }
    resetMaxUploadBytes() {
        this._maxUploadBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxUploadBytesInput() {
        return this._maxUploadBytes;
    }
    // max_upload_interval_seconds - computed: true, optional: true, required: false
    _maxUploadIntervalSeconds;
    get maxUploadIntervalSeconds() {
        return this.getNumberAttribute('max_upload_interval_seconds');
    }
    set maxUploadIntervalSeconds(value) {
        this._maxUploadIntervalSeconds = value;
    }
    resetMaxUploadIntervalSeconds() {
        this._maxUploadIntervalSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxUploadIntervalSecondsInput() {
        return this._maxUploadIntervalSeconds;
    }
    // max_upload_records - computed: true, optional: true, required: false
    _maxUploadRecords;
    get maxUploadRecords() {
        return this.getNumberAttribute('max_upload_records');
    }
    set maxUploadRecords(value) {
        this._maxUploadRecords = value;
    }
    resetMaxUploadRecords() {
        this._maxUploadRecords = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxUploadRecordsInput() {
        return this._maxUploadRecords;
    }
    // name - computed: true, optional: true, required: false
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // output_options - computed: false, optional: true, required: false
    _outputOptions = new LogpushJobOutputOptionsOutputReference(this, "output_options");
    get outputOptions() {
        return this._outputOptions;
    }
    putOutputOptions(value) {
        this._outputOptions.internalValue = value;
    }
    resetOutputOptions() {
        this._outputOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get outputOptionsInput() {
        return this._outputOptions.internalValue;
    }
    // ownership_challenge - computed: false, optional: true, required: false
    _ownershipChallenge;
    get ownershipChallenge() {
        return this.getStringAttribute('ownership_challenge');
    }
    set ownershipChallenge(value) {
        this._ownershipChallenge = value;
    }
    resetOwnershipChallenge() {
        this._ownershipChallenge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ownershipChallengeInput() {
        return this._ownershipChallenge;
    }
    // zone_id - computed: false, optional: true, required: false
    _zoneId;
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    set zoneId(value) {
        this._zoneId = value;
    }
    resetZoneId() {
        this._zoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zoneIdInput() {
        return this._zoneId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
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
    }
    synthesizeHclAttributes() {
        const attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
