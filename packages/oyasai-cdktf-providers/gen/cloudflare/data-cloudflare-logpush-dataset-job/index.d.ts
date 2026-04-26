import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareLogpushDatasetJobConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_dataset_job#account_id DataCloudflareLogpushDatasetJob#account_id}
    */
    readonly accountId?: string;
    /**
    * Name of the dataset. A list of supported datasets can be found on the [Developer Docs](https://developers.cloudflare.com/logs/reference/log-fields/).
    * Available values: "access_requests", "audit_logs", "audit_logs_v2", "biso_user_actions", "casb_findings", "device_posture_results", "dex_application_tests", "dex_device_state_events", "dlp_forensic_copies", "dns_firewall_logs", "dns_logs", "email_security_alerts", "email_security_post_delivery_events", "firewall_events", "gateway_dns", "gateway_http", "gateway_network", "http_requests", "ipsec_logs", "magic_ids_detections", "mcp_portal_logs", "nel_reports", "network_analytics_logs", "page_shield_events", "sinkhole_http_logs", "spectrum_events", "ssh_logs", "warp_config_changes", "warp_toggle_changes", "workers_trace_events", "zaraz_events", "zero_trust_network_sessions".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_dataset_job#dataset_id DataCloudflareLogpushDatasetJob#dataset_id}
    */
    readonly datasetId?: string;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_dataset_job#zone_id DataCloudflareLogpushDatasetJob#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareLogpushDatasetJobOutputOptions {
}
export declare function dataCloudflareLogpushDatasetJobOutputOptionsToTerraform(struct?: DataCloudflareLogpushDatasetJobOutputOptions): any;
export declare function dataCloudflareLogpushDatasetJobOutputOptionsToHclTerraform(struct?: DataCloudflareLogpushDatasetJobOutputOptions): any;
export declare class DataCloudflareLogpushDatasetJobOutputOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLogpushDatasetJobOutputOptions | undefined;
    set internalValue(value: DataCloudflareLogpushDatasetJobOutputOptions | undefined);
    get batchPrefix(): any;
    get batchSuffix(): any;
    get cve202144228(): any;
    get fieldDelimiter(): any;
    get fieldNames(): any;
    get mergeSubrequests(): any;
    get outputType(): any;
    get recordDelimiter(): any;
    get recordPrefix(): any;
    get recordSuffix(): any;
    get recordTemplate(): any;
    get sampleRate(): any;
    get timestampFormat(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_dataset_job cloudflare_logpush_dataset_job}
*/
export declare class DataCloudflareLogpushDatasetJob extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_logpush_dataset_job";
    /**
    * Generates CDKTF code for importing a DataCloudflareLogpushDatasetJob resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLogpushDatasetJob to import
    * @param importFromId The id of the existing DataCloudflareLogpushDatasetJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_dataset_job#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLogpushDatasetJob to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_dataset_job cloudflare_logpush_dataset_job} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareLogpushDatasetJobConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareLogpushDatasetJobConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get dataset(): any;
    private _datasetId?;
    get datasetId(): string;
    set datasetId(value: string);
    resetDatasetId(): void;
    get datasetIdInput(): string;
    get destinationConf(): any;
    get enabled(): any;
    get errorMessage(): any;
    get frequency(): any;
    get id(): any;
    get kind(): any;
    get lastComplete(): any;
    get lastError(): any;
    get logpullOptions(): any;
    get maxUploadBytes(): any;
    get maxUploadIntervalSeconds(): any;
    get maxUploadRecords(): any;
    get name(): any;
    private _outputOptions;
    get outputOptions(): DataCloudflareLogpushDatasetJobOutputOptionsOutputReference;
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
