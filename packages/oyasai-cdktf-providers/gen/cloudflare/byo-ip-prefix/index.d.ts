import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ByoIpPrefixConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier of a Cloudflare account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/byo_ip_prefix#account_id ByoIpPrefix#account_id}
    */
    readonly accountId?: string;
    /**
    * Autonomous System Number (ASN) the prefix will be advertised under.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/byo_ip_prefix#asn ByoIpPrefix#asn}
    */
    readonly asn: number;
    /**
    * IP Prefix in Classless Inter-Domain Routing format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/byo_ip_prefix#cidr ByoIpPrefix#cidr}
    */
    readonly cidr: string;
    /**
    * Whether Cloudflare is allowed to generate the LOA document on behalf of the prefix owner.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/byo_ip_prefix#delegate_loa_creation ByoIpPrefix#delegate_loa_creation}
    */
    readonly delegateLoaCreation?: boolean | cdktf.IResolvable;
    /**
    * Description of the prefix.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/byo_ip_prefix#description ByoIpPrefix#description}
    */
    readonly description?: string;
    /**
    * Identifier for the uploaded LOA document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/byo_ip_prefix#loa_document_id ByoIpPrefix#loa_document_id}
    */
    readonly loaDocumentId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/byo_ip_prefix cloudflare_byo_ip_prefix}
*/
export declare class ByoIpPrefix extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_byo_ip_prefix";
    /**
    * Generates CDKTF code for importing a ByoIpPrefix resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ByoIpPrefix to import
    * @param importFromId The id of the existing ByoIpPrefix that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/byo_ip_prefix#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ByoIpPrefix to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/byo_ip_prefix cloudflare_byo_ip_prefix} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ByoIpPrefixConfig
    */
    constructor(scope: Construct, id: string, config: ByoIpPrefixConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get advertised(): any;
    get advertisedModifiedAt(): any;
    get approved(): any;
    private _asn?;
    get asn(): number;
    set asn(value: number);
    get asnInput(): number;
    private _cidr?;
    get cidr(): string;
    set cidr(value: string);
    get cidrInput(): string;
    get createdAt(): any;
    private _delegateLoaCreation?;
    get delegateLoaCreation(): boolean | cdktf.IResolvable;
    set delegateLoaCreation(value: boolean | cdktf.IResolvable);
    resetDelegateLoaCreation(): void;
    get delegateLoaCreationInput(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): any;
    get irrValidationState(): any;
    private _loaDocumentId?;
    get loaDocumentId(): string;
    set loaDocumentId(value: string);
    resetLoaDocumentId(): void;
    get loaDocumentIdInput(): string;
    get modifiedAt(): any;
    get onDemandEnabled(): any;
    get onDemandLocked(): any;
    get ownershipValidationState(): any;
    get ownershipValidationToken(): any;
    get rpkiValidationState(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
