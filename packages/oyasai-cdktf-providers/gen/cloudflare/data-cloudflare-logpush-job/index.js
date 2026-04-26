// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_job
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareLogpushJobOutputOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareLogpushJobOutputOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareLogpushJobOutputOptionsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // batch_prefix - computed: true, optional: false, required: false
    get batchPrefix() {
        return this.getStringAttribute('batch_prefix');
    }
    // batch_suffix - computed: true, optional: false, required: false
    get batchSuffix() {
        return this.getStringAttribute('batch_suffix');
    }
    // cve_2021_44228 - computed: true, optional: false, required: false
    get cve202144228() {
        return this.getBooleanAttribute('cve_2021_44228');
    }
    // field_delimiter - computed: true, optional: false, required: false
    get fieldDelimiter() {
        return this.getStringAttribute('field_delimiter');
    }
    // field_names - computed: true, optional: false, required: false
    get fieldNames() {
        return this.getListAttribute('field_names');
    }
    // merge_subrequests - computed: true, optional: false, required: false
    get mergeSubrequests() {
        return this.getBooleanAttribute('merge_subrequests');
    }
    // output_type - computed: true, optional: false, required: false
    get outputType() {
        return this.getStringAttribute('output_type');
    }
    // record_delimiter - computed: true, optional: false, required: false
    get recordDelimiter() {
        return this.getStringAttribute('record_delimiter');
    }
    // record_prefix - computed: true, optional: false, required: false
    get recordPrefix() {
        return this.getStringAttribute('record_prefix');
    }
    // record_suffix - computed: true, optional: false, required: false
    get recordSuffix() {
        return this.getStringAttribute('record_suffix');
    }
    // record_template - computed: true, optional: false, required: false
    get recordTemplate() {
        return this.getStringAttribute('record_template');
    }
    // sample_rate - computed: true, optional: false, required: false
    get sampleRate() {
        return this.getNumberAttribute('sample_rate');
    }
    // timestamp_format - computed: true, optional: false, required: false
    get timestampFormat() {
        return this.getStringAttribute('timestamp_format');
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_job cloudflare_logpush_job}
*/
export class DataCloudflareLogpushJob extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_logpush_job";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareLogpushJob resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLogpushJob to import
    * @param importFromId The id of the existing DataCloudflareLogpushJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_job#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLogpushJob to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_logpush_job", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_job cloudflare_logpush_job} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareLogpushJobConfig
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
        this._jobId = config.jobId;
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
    // dataset - computed: true, optional: false, required: false
    get dataset() {
        return this.getStringAttribute('dataset');
    }
    // destination_conf - computed: true, optional: false, required: false
    get destinationConf() {
        return this.getStringAttribute('destination_conf');
    }
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // error_message - computed: true, optional: false, required: false
    get errorMessage() {
        return this.getStringAttribute('error_message');
    }
    // frequency - computed: true, optional: false, required: false
    get frequency() {
        return this.getStringAttribute('frequency');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getNumberAttribute('id');
    }
    // job_id - computed: false, optional: false, required: true
    _jobId;
    get jobId() {
        return this.getNumberAttribute('job_id');
    }
    set jobId(value) {
        this._jobId = value;
    }
    // Temporarily expose input value. Use with caution.
    get jobIdInput() {
        return this._jobId;
    }
    // kind - computed: true, optional: false, required: false
    get kind() {
        return this.getStringAttribute('kind');
    }
    // last_complete - computed: true, optional: false, required: false
    get lastComplete() {
        return this.getStringAttribute('last_complete');
    }
    // last_error - computed: true, optional: false, required: false
    get lastError() {
        return this.getStringAttribute('last_error');
    }
    // logpull_options - computed: true, optional: false, required: false
    get logpullOptions() {
        return this.getStringAttribute('logpull_options');
    }
    // max_upload_bytes - computed: true, optional: false, required: false
    get maxUploadBytes() {
        return this.getNumberAttribute('max_upload_bytes');
    }
    // max_upload_interval_seconds - computed: true, optional: false, required: false
    get maxUploadIntervalSeconds() {
        return this.getNumberAttribute('max_upload_interval_seconds');
    }
    // max_upload_records - computed: true, optional: false, required: false
    get maxUploadRecords() {
        return this.getNumberAttribute('max_upload_records');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // output_options - computed: true, optional: false, required: false
    _outputOptions = new DataCloudflareLogpushJobOutputOptionsOutputReference(this, "output_options");
    get outputOptions() {
        return this._outputOptions;
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
            job_id: cdktf.numberToTerraform(this._jobId),
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
            job_id: {
                value: cdktf.numberToHclTerraform(this._jobId),
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
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
