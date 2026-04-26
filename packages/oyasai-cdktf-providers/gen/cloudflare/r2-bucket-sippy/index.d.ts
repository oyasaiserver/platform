import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface R2BucketSippyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy#account_id R2BucketSippy#account_id}
    */
    readonly accountId?: string;
    /**
    * Name of the bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy#bucket_name R2BucketSippy#bucket_name}
    */
    readonly bucketName: string;
    /**
    * R2 bucket to copy objects to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy#destination R2BucketSippy#destination}
    */
    readonly destination?: R2BucketSippyDestination;
    /**
    * Jurisdiction of the bucket
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy#jurisdiction R2BucketSippy#jurisdiction}
    */
    readonly jurisdiction?: string;
    /**
    * AWS S3 bucket to copy objects from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy#source R2BucketSippy#source}
    */
    readonly source?: R2BucketSippySource;
}
export interface R2BucketSippyDestination {
    /**
    * ID of a Cloudflare API token.
    * This is the value labelled "Access Key ID" when creating an API.
    * token from the [R2 dashboard](https://dash.cloudflare.com/?to=/:account/r2/api-tokens).
    *
    * Sippy will use this token when writing objects to R2, so it is
    * best to scope this token to the bucket you're enabling Sippy for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy#access_key_id R2BucketSippy#access_key_id}
    */
    readonly accessKeyId?: string;
    /**
    * Available values: "r2".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy#cloud_provider R2BucketSippy#cloud_provider}
    */
    readonly cloudProvider?: string;
    /**
    * Value of a Cloudflare API token.
    * This is the value labelled "Secret Access Key" when creating an API.
    * token from the [R2 dashboard](https://dash.cloudflare.com/?to=/:account/r2/api-tokens).
    *
    * Sippy will use this token when writing objects to R2, so it is
    * best to scope this token to the bucket you're enabling Sippy for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy#secret_access_key R2BucketSippy#secret_access_key}
    */
    readonly secretAccessKey?: string;
}
export declare function r2BucketSippyDestinationToTerraform(struct?: R2BucketSippyDestination | cdktf.IResolvable): any;
export declare function r2BucketSippyDestinationToHclTerraform(struct?: R2BucketSippyDestination | cdktf.IResolvable): any;
export declare class R2BucketSippyDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): R2BucketSippyDestination | cdktf.IResolvable | undefined;
    set internalValue(value: R2BucketSippyDestination | cdktf.IResolvable | undefined);
    private _accessKeyId?;
    get accessKeyId(): string;
    set accessKeyId(value: string);
    resetAccessKeyId(): void;
    get accessKeyIdInput(): string;
    private _cloudProvider?;
    get cloudProvider(): string;
    set cloudProvider(value: string);
    resetCloudProvider(): void;
    get cloudProviderInput(): string;
    private _secretAccessKey?;
    get secretAccessKey(): string;
    set secretAccessKey(value: string);
    resetSecretAccessKey(): void;
    get secretAccessKeyInput(): string;
}
export interface R2BucketSippySource {
    /**
    * Access Key ID of an IAM credential (ideally scoped to a single S3 bucket).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy#access_key_id R2BucketSippy#access_key_id}
    */
    readonly accessKeyId?: string;
    /**
    * Name of the AWS S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy#bucket R2BucketSippy#bucket}
    */
    readonly bucket?: string;
    /**
    * URL to the S3-compatible API of the bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy#bucket_url R2BucketSippy#bucket_url}
    */
    readonly bucketUrl?: string;
    /**
    * Client email of an IAM credential (ideally scoped to a single GCS bucket).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy#client_email R2BucketSippy#client_email}
    */
    readonly clientEmail?: string;
    /**
    * Available values: "aws", "gcs", "s3".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy#cloud_provider R2BucketSippy#cloud_provider}
    */
    readonly cloudProvider?: string;
    /**
    * Private Key of an IAM credential (ideally scoped to a single GCS bucket).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy#private_key R2BucketSippy#private_key}
    */
    readonly privateKey?: string;
    /**
    * Name of the AWS availability zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy#region R2BucketSippy#region}
    */
    readonly region?: string;
    /**
    * Secret Access Key of an IAM credential (ideally scoped to a single S3 bucket).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy#secret_access_key R2BucketSippy#secret_access_key}
    */
    readonly secretAccessKey?: string;
}
export declare function r2BucketSippySourceToTerraform(struct?: R2BucketSippySource | cdktf.IResolvable): any;
export declare function r2BucketSippySourceToHclTerraform(struct?: R2BucketSippySource | cdktf.IResolvable): any;
export declare class R2BucketSippySourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): R2BucketSippySource | cdktf.IResolvable | undefined;
    set internalValue(value: R2BucketSippySource | cdktf.IResolvable | undefined);
    private _accessKeyId?;
    get accessKeyId(): string;
    set accessKeyId(value: string);
    resetAccessKeyId(): void;
    get accessKeyIdInput(): string;
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    resetBucket(): void;
    get bucketInput(): string;
    private _bucketUrl?;
    get bucketUrl(): string;
    set bucketUrl(value: string);
    resetBucketUrl(): void;
    get bucketUrlInput(): string;
    private _clientEmail?;
    get clientEmail(): string;
    set clientEmail(value: string);
    resetClientEmail(): void;
    get clientEmailInput(): string;
    private _cloudProvider?;
    get cloudProvider(): string;
    set cloudProvider(value: string);
    resetCloudProvider(): void;
    get cloudProviderInput(): string;
    private _privateKey?;
    get privateKey(): string;
    set privateKey(value: string);
    resetPrivateKey(): void;
    get privateKeyInput(): string;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string;
    private _secretAccessKey?;
    get secretAccessKey(): string;
    set secretAccessKey(value: string);
    resetSecretAccessKey(): void;
    get secretAccessKeyInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy cloudflare_r2_bucket_sippy}
*/
export declare class R2BucketSippy extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_r2_bucket_sippy";
    /**
    * Generates CDKTF code for importing a R2BucketSippy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the R2BucketSippy to import
    * @param importFromId The id of the existing R2BucketSippy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the R2BucketSippy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy cloudflare_r2_bucket_sippy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options R2BucketSippyConfig
    */
    constructor(scope: Construct, id: string, config: R2BucketSippyConfig);
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
    get destination(): R2BucketSippyDestinationOutputReference;
    putDestination(value: R2BucketSippyDestination): void;
    resetDestination(): void;
    get destinationInput(): any;
    get enabled(): any;
    private _jurisdiction?;
    get jurisdiction(): string;
    set jurisdiction(value: string);
    resetJurisdiction(): void;
    get jurisdictionInput(): string;
    private _source;
    get source(): R2BucketSippySourceOutputReference;
    putSource(value: R2BucketSippySource): void;
    resetSource(): void;
    get sourceInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
