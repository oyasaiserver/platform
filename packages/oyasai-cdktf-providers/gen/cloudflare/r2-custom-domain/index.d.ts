import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface R2CustomDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_custom_domain#account_id R2CustomDomain#account_id}
    */
    readonly accountId?: string;
    /**
    * Name of the bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_custom_domain#bucket_name R2CustomDomain#bucket_name}
    */
    readonly bucketName: string;
    /**
    * An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_custom_domain#ciphers R2CustomDomain#ciphers}
    */
    readonly ciphers?: string[];
    /**
    * Name of the custom domain to be added.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_custom_domain#domain R2CustomDomain#domain}
    */
    readonly domain: string;
    /**
    * Whether to enable public bucket access at the custom domain. If undefined, the domain will be enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_custom_domain#enabled R2CustomDomain#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Jurisdiction of the bucket
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_custom_domain#jurisdiction R2CustomDomain#jurisdiction}
    */
    readonly jurisdiction?: string;
    /**
    * Minimum TLS Version the custom domain will accept for incoming connections. If not set, defaults to 1.0.
    * Available values: "1.0", "1.1", "1.2", "1.3".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_custom_domain#min_tls R2CustomDomain#min_tls}
    */
    readonly minTls?: string;
    /**
    * Zone ID of the custom domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_custom_domain#zone_id R2CustomDomain#zone_id}
    */
    readonly zoneId: string;
}
export interface R2CustomDomainStatus {
}
export declare function r2CustomDomainStatusToTerraform(struct?: R2CustomDomainStatus): any;
export declare function r2CustomDomainStatusToHclTerraform(struct?: R2CustomDomainStatus): any;
export declare class R2CustomDomainStatusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): R2CustomDomainStatus | undefined;
    set internalValue(value: R2CustomDomainStatus | undefined);
    get ownership(): any;
    get ssl(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_custom_domain cloudflare_r2_custom_domain}
*/
export declare class R2CustomDomain extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_r2_custom_domain";
    /**
    * Generates CDKTF code for importing a R2CustomDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the R2CustomDomain to import
    * @param importFromId The id of the existing R2CustomDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_custom_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the R2CustomDomain to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_custom_domain cloudflare_r2_custom_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options R2CustomDomainConfig
    */
    constructor(scope: Construct, id: string, config: R2CustomDomainConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string;
    private _ciphers?;
    get ciphers(): string[];
    set ciphers(value: string[]);
    resetCiphers(): void;
    get ciphersInput(): string[];
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
    private _jurisdiction?;
    get jurisdiction(): string;
    set jurisdiction(value: string);
    resetJurisdiction(): void;
    get jurisdictionInput(): string;
    private _minTls?;
    get minTls(): string;
    set minTls(value: string);
    resetMinTls(): void;
    get minTlsInput(): string;
    private _status;
    get status(): R2CustomDomainStatusOutputReference;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    get zoneIdInput(): string;
    get zoneName(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
