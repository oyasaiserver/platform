import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LogpushJobConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#account_id LogpushJob#account_id}
    */
    readonly accountId?: string;
    /**
    * Name of the dataset. A list of supported datasets can be found on the [Developer Docs](https://developers.cloudflare.com/logs/reference/log-fields/).
    * Available values: "access_requests", "audit_logs", "audit_logs_v2", "biso_user_actions", "casb_findings", "device_posture_results", "dex_application_tests", "dex_device_state_events", "dlp_forensic_copies", "dns_firewall_logs", "dns_logs", "email_security_alerts", "email_security_post_delivery_events", "firewall_events", "gateway_dns", "gateway_http", "gateway_network", "http_requests", "ipsec_logs", "magic_ids_detections", "mcp_portal_logs", "nel_reports", "network_analytics_logs", "page_shield_events", "sinkhole_http_logs", "spectrum_events", "ssh_logs", "warp_config_changes", "warp_toggle_changes", "workers_trace_events", "zaraz_events", "zero_trust_network_sessions".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#dataset LogpushJob#dataset}
    */
    readonly dataset?: string;
    /**
    * Uniquely identifies a resource (such as an s3 bucket) where data. will be pushed. Additional configuration parameters supported by the destination may be included.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#destination_conf LogpushJob#destination_conf}
    */
    readonly destinationConf: string;
    /**
    * Flag that indicates if the job is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#enabled LogpushJob#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * The filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/filters/).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#filter LogpushJob#filter}
    */
    readonly filter?: string;
    /**
    * This field is deprecated. Please use `max_upload_*` parameters instead. . The frequency at which Cloudflare sends batches of logs to your destination. Setting frequency to high sends your logs in larger quantities of smaller files. Setting frequency to low sends logs in smaller quantities of larger files.
    * Available values: "high", "low".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#frequency LogpushJob#frequency}
    */
    readonly frequency?: string;
    /**
    * The kind parameter (optional) is used to differentiate between Logpush and Edge Log Delivery jobs (when supported by the dataset).
    * Available values: "", "edge".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#kind LogpushJob#kind}
    */
    readonly kind?: string;
    /**
    * This field is deprecated. Use `output_options` instead. Configuration string. It specifies things like requested fields and timestamp formats. If migrating from the logpull api, copy the url (full url or just the query string) of your call here, and logpush will keep on making this call for you, setting start and end times appropriately.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#logpull_options LogpushJob#logpull_options}
    */
    readonly logpullOptions?: string;
    /**
    * The maximum uncompressed file size of a batch of logs. This setting value must be between `5 MB` and `1 GB`, or `0` to disable it. Note that you cannot set a minimum file size; this means that log files may be much smaller than this batch size.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#max_upload_bytes LogpushJob#max_upload_bytes}
    */
    readonly maxUploadBytes?: number;
    /**
    * The maximum interval in seconds for log batches. This setting must be between 30 and 300 seconds (5 minutes), or `0` to disable it. Note that you cannot specify a minimum interval for log batches; this means that log files may be sent in shorter intervals than this.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#max_upload_interval_seconds LogpushJob#max_upload_interval_seconds}
    */
    readonly maxUploadIntervalSeconds?: number;
    /**
    * The maximum number of log lines per batch. This setting must be between 1000 and 1,000,000 lines, or `0` to disable it. Note that you cannot specify a minimum number of log lines per batch; this means that log files may contain many fewer lines than this.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#max_upload_records LogpushJob#max_upload_records}
    */
    readonly maxUploadRecords?: number;
    /**
    * Optional human readable job name. Not unique. Cloudflare suggests. that you set this to a meaningful string, like the domain name, to make it easier to identify your job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#name LogpushJob#name}
    */
    readonly name?: string;
    /**
    * The structured replacement for `logpull_options`. When including this field, the `logpull_option` field will be ignored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#output_options LogpushJob#output_options}
    */
    readonly outputOptions?: LogpushJobOutputOptions;
    /**
    * Ownership challenge token to prove destination ownership.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#ownership_challenge LogpushJob#ownership_challenge}
    */
    readonly ownershipChallenge?: string;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#zone_id LogpushJob#zone_id}
    */
    readonly zoneId?: string;
}
export interface LogpushJobOutputOptions {
    /**
    * String to be prepended before each batch.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#batch_prefix LogpushJob#batch_prefix}
    */
    readonly batchPrefix?: string;
    /**
    * String to be appended after each batch.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#batch_suffix LogpushJob#batch_suffix}
    */
    readonly batchSuffix?: string;
    /**
    * If set to true, will cause all occurrences of `${` in the generated files to be replaced with `x{`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#cve_2021_44228 LogpushJob#cve_2021_44228}
    */
    readonly cve202144228?: boolean | cdktf.IResolvable;
    /**
    * String to join fields. This field be ignored when `record_template` is set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#field_delimiter LogpushJob#field_delimiter}
    */
    readonly fieldDelimiter?: string;
    /**
    * List of field names to be included in the Logpush output. For the moment, there is no option to add all fields at once, so you must specify all the fields names you are interested in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#field_names LogpushJob#field_names}
    */
    readonly fieldNames?: string[];
    /**
    * If set to true, subrequests will be merged into the parent request. Only supported for the `http_requests` dataset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#merge_subrequests LogpushJob#merge_subrequests}
    */
    readonly mergeSubrequests?: boolean | cdktf.IResolvable;
    /**
    * Specifies the output type, such as `ndjson` or `csv`. This sets default values for the rest of the settings, depending on the chosen output type. Some formatting rules, like string quoting, are different between output types.
    * Available values: "ndjson", "csv".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#output_type LogpushJob#output_type}
    */
    readonly outputType?: string;
    /**
    * String to be inserted in-between the records as separator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#record_delimiter LogpushJob#record_delimiter}
    */
    readonly recordDelimiter?: string;
    /**
    * String to be prepended before each record.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#record_prefix LogpushJob#record_prefix}
    */
    readonly recordPrefix?: string;
    /**
    * String to be appended after each record.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#record_suffix LogpushJob#record_suffix}
    */
    readonly recordSuffix?: string;
    /**
    * String to use as template for each record instead of the default json key value mapping. All fields used in the template must be present in `field_names` as well, otherwise they will end up as null. Format as a Go `text/template` without any standard functions, like conditionals, loops, sub-templates, etc.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#record_template LogpushJob#record_template}
    */
    readonly recordTemplate?: string;
    /**
    * Floating number to specify sampling rate. Sampling is applied on top of filtering, and regardless of the current `sample_interval` of the data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#sample_rate LogpushJob#sample_rate}
    */
    readonly sampleRate?: number;
    /**
    * String to specify the format for timestamps, such as `unixnano`, `unix`, `rfc3339`, `rfc3339ms` or `rfc3339ns`.
    * Available values: "unixnano", "unix", "rfc3339", "rfc3339ms", "rfc3339ns".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#timestamp_format LogpushJob#timestamp_format}
    */
    readonly timestampFormat?: string;
}
export declare function logpushJobOutputOptionsToTerraform(struct?: LogpushJobOutputOptions | cdktf.IResolvable): any;
export declare function logpushJobOutputOptionsToHclTerraform(struct?: LogpushJobOutputOptions | cdktf.IResolvable): any;
export declare class LogpushJobOutputOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LogpushJobOutputOptions | cdktf.IResolvable | undefined;
    set internalValue(value: LogpushJobOutputOptions | cdktf.IResolvable | undefined);
    private _batchPrefix?;
    get batchPrefix(): string;
    set batchPrefix(value: string);
    resetBatchPrefix(): void;
    get batchPrefixInput(): string;
    private _batchSuffix?;
    get batchSuffix(): string;
    set batchSuffix(value: string);
    resetBatchSuffix(): void;
    get batchSuffixInput(): string;
    private _cve202144228?;
    get cve202144228(): boolean | cdktf.IResolvable;
    set cve202144228(value: boolean | cdktf.IResolvable);
    resetCve202144228(): void;
    get cve202144228Input(): any;
    private _fieldDelimiter?;
    get fieldDelimiter(): string;
    set fieldDelimiter(value: string);
    resetFieldDelimiter(): void;
    get fieldDelimiterInput(): string;
    private _fieldNames?;
    get fieldNames(): string[];
    set fieldNames(value: string[]);
    resetFieldNames(): void;
    get fieldNamesInput(): string[];
    private _mergeSubrequests?;
    get mergeSubrequests(): boolean | cdktf.IResolvable;
    set mergeSubrequests(value: boolean | cdktf.IResolvable);
    resetMergeSubrequests(): void;
    get mergeSubrequestsInput(): any;
    private _outputType?;
    get outputType(): string;
    set outputType(value: string);
    resetOutputType(): void;
    get outputTypeInput(): string;
    private _recordDelimiter?;
    get recordDelimiter(): string;
    set recordDelimiter(value: string);
    resetRecordDelimiter(): void;
    get recordDelimiterInput(): string;
    private _recordPrefix?;
    get recordPrefix(): string;
    set recordPrefix(value: string);
    resetRecordPrefix(): void;
    get recordPrefixInput(): string;
    private _recordSuffix?;
    get recordSuffix(): string;
    set recordSuffix(value: string);
    resetRecordSuffix(): void;
    get recordSuffixInput(): string;
    private _recordTemplate?;
    get recordTemplate(): string;
    set recordTemplate(value: string);
    resetRecordTemplate(): void;
    get recordTemplateInput(): string;
    private _sampleRate?;
    get sampleRate(): number;
    set sampleRate(value: number);
    resetSampleRate(): void;
    get sampleRateInput(): number;
    private _timestampFormat?;
    get timestampFormat(): string;
    set timestampFormat(value: string);
    resetTimestampFormat(): void;
    get timestampFormatInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job cloudflare_logpush_job}
*/
export declare class LogpushJob extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_logpush_job";
    /**
    * Generates CDKTF code for importing a LogpushJob resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LogpushJob to import
    * @param importFromId The id of the existing LogpushJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LogpushJob to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpush_job cloudflare_logpush_job} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LogpushJobConfig
    */
    constructor(scope: Construct, id: string, config: LogpushJobConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _dataset?;
    get dataset(): string;
    set dataset(value: string);
    resetDataset(): void;
    get datasetInput(): string;
    private _destinationConf?;
    get destinationConf(): string;
    set destinationConf(value: string);
    get destinationConfInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    get errorMessage(): any;
    private _filter?;
    get filter(): string;
    set filter(value: string);
    resetFilter(): void;
    get filterInput(): string;
    private _frequency?;
    get frequency(): string;
    set frequency(value: string);
    resetFrequency(): void;
    get frequencyInput(): string;
    get id(): any;
    private _kind?;
    get kind(): string;
    set kind(value: string);
    resetKind(): void;
    get kindInput(): string;
    get lastComplete(): any;
    get lastError(): any;
    private _logpullOptions?;
    get logpullOptions(): string;
    set logpullOptions(value: string);
    resetLogpullOptions(): void;
    get logpullOptionsInput(): string;
    private _maxUploadBytes?;
    get maxUploadBytes(): number;
    set maxUploadBytes(value: number);
    resetMaxUploadBytes(): void;
    get maxUploadBytesInput(): number;
    private _maxUploadIntervalSeconds?;
    get maxUploadIntervalSeconds(): number;
    set maxUploadIntervalSeconds(value: number);
    resetMaxUploadIntervalSeconds(): void;
    get maxUploadIntervalSecondsInput(): number;
    private _maxUploadRecords?;
    get maxUploadRecords(): number;
    set maxUploadRecords(value: number);
    resetMaxUploadRecords(): void;
    get maxUploadRecordsInput(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _outputOptions;
    get outputOptions(): LogpushJobOutputOptionsOutputReference;
    putOutputOptions(value: LogpushJobOutputOptions): void;
    resetOutputOptions(): void;
    get outputOptionsInput(): any;
    private _ownershipChallenge?;
    get ownershipChallenge(): string;
    set ownershipChallenge(value: string);
    resetOwnershipChallenge(): void;
    get ownershipChallengeInput(): string;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
