import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareR2BucketConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket#account_id DataCloudflareR2Bucket#account_id}
    */
    readonly accountId?: string;
    /**
    * Name of the bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket#bucket_name DataCloudflareR2Bucket#bucket_name}
    */
    readonly bucketName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket cloudflare_r2_bucket}
*/
export declare class DataCloudflareR2Bucket extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_r2_bucket";
    /**
    * Generates CDKTF code for importing a DataCloudflareR2Bucket resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareR2Bucket to import
    * @param importFromId The id of the existing DataCloudflareR2Bucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareR2Bucket to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket cloudflare_r2_bucket} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareR2BucketConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareR2BucketConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string;
    get creationDate(): any;
    get id(): any;
    get jurisdiction(): any;
    get location(): any;
    get name(): any;
    get storageClass(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
