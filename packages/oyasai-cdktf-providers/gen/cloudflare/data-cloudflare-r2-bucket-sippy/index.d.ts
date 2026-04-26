import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareR2BucketSippyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_sippy#account_id DataCloudflareR2BucketSippy#account_id}
    */
    readonly accountId?: string;
    /**
    * Name of the bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_sippy#bucket_name DataCloudflareR2BucketSippy#bucket_name}
    */
    readonly bucketName: string;
}
export interface DataCloudflareR2BucketSippyDestination {
}
export declare function dataCloudflareR2BucketSippyDestinationToTerraform(struct?: DataCloudflareR2BucketSippyDestination): any;
export declare function dataCloudflareR2BucketSippyDestinationToHclTerraform(struct?: DataCloudflareR2BucketSippyDestination): any;
export declare class DataCloudflareR2BucketSippyDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareR2BucketSippyDestination | undefined;
    set internalValue(value: DataCloudflareR2BucketSippyDestination | undefined);
    get accessKeyId(): any;
    get account(): any;
    get bucket(): any;
    get r2BucketSippyProvider(): any;
}
export interface DataCloudflareR2BucketSippySource {
}
export declare function dataCloudflareR2BucketSippySourceToTerraform(struct?: DataCloudflareR2BucketSippySource): any;
export declare function dataCloudflareR2BucketSippySourceToHclTerraform(struct?: DataCloudflareR2BucketSippySource): any;
export declare class DataCloudflareR2BucketSippySourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareR2BucketSippySource | undefined;
    set internalValue(value: DataCloudflareR2BucketSippySource | undefined);
    get bucket(): any;
    get bucketUrl(): any;
    get r2BucketSippyProvider(): any;
    get region(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_sippy cloudflare_r2_bucket_sippy}
*/
export declare class DataCloudflareR2BucketSippy extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_r2_bucket_sippy";
    /**
    * Generates CDKTF code for importing a DataCloudflareR2BucketSippy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareR2BucketSippy to import
    * @param importFromId The id of the existing DataCloudflareR2BucketSippy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_sippy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareR2BucketSippy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_sippy cloudflare_r2_bucket_sippy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareR2BucketSippyConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareR2BucketSippyConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string;
    private _destination;
    get destination(): DataCloudflareR2BucketSippyDestinationOutputReference;
    get enabled(): any;
    private _source;
    get source(): DataCloudflareR2BucketSippySourceOutputReference;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
