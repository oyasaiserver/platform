import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface R2BucketConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket#account_id R2Bucket#account_id}
    */
    readonly accountId?: string;
    /**
    * Jurisdiction where objects in this bucket are guaranteed to be stored.
    * Available values: "default", "eu", "fedramp".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket#jurisdiction R2Bucket#jurisdiction}
    */
    readonly jurisdiction?: string;
    /**
    * Location of the bucket.
    * Available values: "apac", "eeur", "enam", "weur", "wnam", "oc".  Note: `location` is only honored the first time a bucket with a given name is created. If you delete and recreate a bucket with the same name, the original bucket location will be used. It is also a best-effort, not a guarantee, of bucket location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket#location R2Bucket#location}
    */
    readonly location?: string;
    /**
    * Name of the bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket#name R2Bucket#name}
    */
    readonly name: string;
    /**
    * Storage class for newly uploaded objects, unless specified otherwise.
    * Available values: "Standard", "InfrequentAccess".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket#storage_class R2Bucket#storage_class}
    */
    readonly storageClass?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket cloudflare_r2_bucket}
*/
export declare class R2Bucket extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_r2_bucket";
    /**
    * Generates CDKTF code for importing a R2Bucket resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the R2Bucket to import
    * @param importFromId The id of the existing R2Bucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the R2Bucket to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket cloudflare_r2_bucket} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options R2BucketConfig
    */
    constructor(scope: Construct, id: string, config: R2BucketConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get creationDate(): any;
    get id(): any;
    private _jurisdiction?;
    get jurisdiction(): string;
    set jurisdiction(value: string);
    resetJurisdiction(): void;
    get jurisdictionInput(): string;
    private _location?;
    get location(): string;
    set location(value: string);
    resetLocation(): void;
    get locationInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _storageClass?;
    get storageClass(): string;
    set storageClass(value: string);
    resetStorageClass(): void;
    get storageClassInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
