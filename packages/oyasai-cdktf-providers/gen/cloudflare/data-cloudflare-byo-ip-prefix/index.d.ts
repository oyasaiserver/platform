import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareByoIpPrefixConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier of a Cloudflare account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/byo_ip_prefix#account_id DataCloudflareByoIpPrefix#account_id}
    */
    readonly accountId?: string;
    /**
    * Identifier of an IP Prefix.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/byo_ip_prefix#prefix_id DataCloudflareByoIpPrefix#prefix_id}
    */
    readonly prefixId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/byo_ip_prefix cloudflare_byo_ip_prefix}
*/
export declare class DataCloudflareByoIpPrefix extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_byo_ip_prefix";
    /**
    * Generates CDKTF code for importing a DataCloudflareByoIpPrefix resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareByoIpPrefix to import
    * @param importFromId The id of the existing DataCloudflareByoIpPrefix that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/byo_ip_prefix#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareByoIpPrefix to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/byo_ip_prefix cloudflare_byo_ip_prefix} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareByoIpPrefixConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareByoIpPrefixConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get advertised(): any;
    get advertisedModifiedAt(): any;
    get approved(): any;
    get asn(): any;
    get cidr(): any;
    get createdAt(): any;
    get delegateLoaCreation(): any;
    get description(): any;
    get id(): any;
    get irrValidationState(): any;
    get loaDocumentId(): any;
    get modifiedAt(): any;
    get onDemandEnabled(): any;
    get onDemandLocked(): any;
    get ownershipValidationState(): any;
    get ownershipValidationToken(): any;
    private _prefixId?;
    get prefixId(): string;
    set prefixId(value: string);
    get prefixIdInput(): string;
    get rpkiValidationState(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
