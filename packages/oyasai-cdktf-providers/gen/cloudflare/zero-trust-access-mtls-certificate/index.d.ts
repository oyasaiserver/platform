import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustAccessMtlsCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_mtls_certificate#account_id ZeroTrustAccessMtlsCertificate#account_id}
    */
    readonly accountId?: string;
    /**
    * The hostnames of the applications that will use this certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_mtls_certificate#associated_hostnames ZeroTrustAccessMtlsCertificate#associated_hostnames}
    */
    readonly associatedHostnames?: string[];
    /**
    * The certificate content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_mtls_certificate#certificate ZeroTrustAccessMtlsCertificate#certificate}
    */
    readonly certificate: string;
    /**
    * The name of the certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_mtls_certificate#name ZeroTrustAccessMtlsCertificate#name}
    */
    readonly name: string;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_mtls_certificate#zone_id ZeroTrustAccessMtlsCertificate#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_mtls_certificate cloudflare_zero_trust_access_mtls_certificate}
*/
export declare class ZeroTrustAccessMtlsCertificate extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_mtls_certificate";
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessMtlsCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessMtlsCertificate to import
    * @param importFromId The id of the existing ZeroTrustAccessMtlsCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_mtls_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessMtlsCertificate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_mtls_certificate cloudflare_zero_trust_access_mtls_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessMtlsCertificateConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustAccessMtlsCertificateConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _associatedHostnames?;
    get associatedHostnames(): string[];
    set associatedHostnames(value: string[]);
    resetAssociatedHostnames(): void;
    get associatedHostnamesInput(): string[];
    private _certificate?;
    get certificate(): string;
    set certificate(value: string);
    get certificateInput(): string;
    get expiresOn(): any;
    get fingerprint(): any;
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
