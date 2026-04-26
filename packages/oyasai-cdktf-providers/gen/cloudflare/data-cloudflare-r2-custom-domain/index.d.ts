import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareR2CustomDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_custom_domain#account_id DataCloudflareR2CustomDomain#account_id}
    */
    readonly accountId?: string;
    /**
    * Name of the bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_custom_domain#bucket_name DataCloudflareR2CustomDomain#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Name of the custom domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_custom_domain#domain DataCloudflareR2CustomDomain#domain}
    */
    readonly domain: string;
}
export interface DataCloudflareR2CustomDomainStatus {
}
export declare function dataCloudflareR2CustomDomainStatusToTerraform(struct?: DataCloudflareR2CustomDomainStatus): any;
export declare function dataCloudflareR2CustomDomainStatusToHclTerraform(struct?: DataCloudflareR2CustomDomainStatus): any;
export declare class DataCloudflareR2CustomDomainStatusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareR2CustomDomainStatus | undefined;
    set internalValue(value: DataCloudflareR2CustomDomainStatus | undefined);
    get ownership(): any;
    get ssl(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_custom_domain cloudflare_r2_custom_domain}
*/
export declare class DataCloudflareR2CustomDomain extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_r2_custom_domain";
    /**
    * Generates CDKTF code for importing a DataCloudflareR2CustomDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareR2CustomDomain to import
    * @param importFromId The id of the existing DataCloudflareR2CustomDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_custom_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareR2CustomDomain to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_custom_domain cloudflare_r2_custom_domain} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareR2CustomDomainConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareR2CustomDomainConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string;
    get ciphers(): any;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
    get enabled(): any;
    get minTls(): any;
    private _status;
    get status(): DataCloudflareR2CustomDomainStatusOutputReference;
    get zoneId(): any;
    get zoneName(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
