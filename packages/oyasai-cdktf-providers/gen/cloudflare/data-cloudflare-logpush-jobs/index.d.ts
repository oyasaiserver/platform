import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareLogpushJobsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_jobs#account_id DataCloudflareLogpushJobs#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_jobs#max_items DataCloudflareLogpushJobs#max_items}
    */
    readonly maxItems?: number;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_jobs#zone_id DataCloudflareLogpushJobs#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareLogpushJobsResultOutputOptions {
}
export declare function dataCloudflareLogpushJobsResultOutputOptionsToTerraform(struct?: DataCloudflareLogpushJobsResultOutputOptions): any;
export declare function dataCloudflareLogpushJobsResultOutputOptionsToHclTerraform(struct?: DataCloudflareLogpushJobsResultOutputOptions): any;
export declare class DataCloudflareLogpushJobsResultOutputOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLogpushJobsResultOutputOptions | undefined;
    set internalValue(value: DataCloudflareLogpushJobsResultOutputOptions | undefined);
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
export interface DataCloudflareLogpushJobsResult {
}
export declare function dataCloudflareLogpushJobsResultToTerraform(struct?: DataCloudflareLogpushJobsResult): any;
export declare function dataCloudflareLogpushJobsResultToHclTerraform(struct?: DataCloudflareLogpushJobsResult): any;
export declare class DataCloudflareLogpushJobsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareLogpushJobsResult | undefined;
    set internalValue(value: DataCloudflareLogpushJobsResult | undefined);
    get dataset(): any;
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
    get outputOptions(): DataCloudflareLogpushJobsResultOutputOptionsOutputReference;
}
export declare class DataCloudflareLogpushJobsResultList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflareLogpushJobsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_jobs cloudflare_logpush_jobs}
*/
export declare class DataCloudflareLogpushJobs extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_logpush_jobs";
    /**
    * Generates CDKTF code for importing a DataCloudflareLogpushJobs resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLogpushJobs to import
    * @param importFromId The id of the existing DataCloudflareLogpushJobs that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_jobs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLogpushJobs to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/logpush_jobs cloudflare_logpush_jobs} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareLogpushJobsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareLogpushJobsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareLogpushJobsResultList;
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
