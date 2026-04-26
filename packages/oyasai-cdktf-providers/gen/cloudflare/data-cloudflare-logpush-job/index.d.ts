import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareLogpushJobConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_job#account_id DataCloudflareLogpushJob#account_id}
    */
    readonly accountId?: string;
    /**
    * Unique id of the job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_job#job_id DataCloudflareLogpushJob#job_id}
    */
    readonly jobId: number;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_job#zone_id DataCloudflareLogpushJob#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareLogpushJobOutputOptions {
}
export declare function dataCloudflareLogpushJobOutputOptionsToTerraform(struct?: DataCloudflareLogpushJobOutputOptions): any;
export declare function dataCloudflareLogpushJobOutputOptionsToHclTerraform(struct?: DataCloudflareLogpushJobOutputOptions): any;
export declare class DataCloudflareLogpushJobOutputOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLogpushJobOutputOptions | undefined;
    set internalValue(value: DataCloudflareLogpushJobOutputOptions | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_job cloudflare_logpush_job}
*/
export declare class DataCloudflareLogpushJob extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_logpush_job";
    /**
    * Generates CDKTF code for importing a DataCloudflareLogpushJob resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLogpushJob to import
    * @param importFromId The id of the existing DataCloudflareLogpushJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_job#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLogpushJob to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_job cloudflare_logpush_job} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareLogpushJobConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareLogpushJobConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get dataset(): any;
    get destinationConf(): any;
    get enabled(): any;
    get errorMessage(): any;
    get frequency(): any;
    get id(): any;
    private _jobId?;
    get jobId(): number;
    set jobId(value: number);
    get jobIdInput(): number;
    get kind(): any;
    get lastComplete(): any;
    get lastError(): any;
    get logpullOptions(): any;
    get maxUploadBytes(): any;
    get maxUploadIntervalSeconds(): any;
    get maxUploadRecords(): any;
    get name(): any;
    private _outputOptions;
    get outputOptions(): DataCloudflareLogpushJobOutputOptionsOutputReference;
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
