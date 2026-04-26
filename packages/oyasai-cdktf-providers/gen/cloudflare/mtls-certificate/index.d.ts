import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MtlsCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/mtls_certificate#account_id MtlsCertificate#account_id}
    */
    readonly accountId: string;
    /**
    * Indicates whether the certificate is a CA or leaf certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/mtls_certificate#ca MtlsCertificate#ca}
    */
    readonly ca: boolean | cdktf.IResolvable;
    /**
    * The uploaded root CA certificate or certificate chain. Certificates must be provided in PEM format with the certificate matching the private_key first in the chain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/mtls_certificate#certificates MtlsCertificate#certificates}
    */
    readonly certificates: string;
    /**
    * Optional unique name for the certificate. Only used for human readability.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/mtls_certificate#name MtlsCertificate#name}
    */
    readonly name?: string;
    /**
    * The private key for the certificate. This field is only needed for specific use cases such as using a custom certificate with Zero Trust's block page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/mtls_certificate#private_key MtlsCertificate#private_key}
    */
    readonly privateKey?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/mtls_certificate cloudflare_mtls_certificate}
*/
export declare class MtlsCertificate extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_mtls_certificate";
    /**
    * Generates CDKTF code for importing a MtlsCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MtlsCertificate to import
    * @param importFromId The id of the existing MtlsCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/mtls_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MtlsCertificate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/mtls_certificate cloudflare_mtls_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MtlsCertificateConfig
    */
    constructor(scope: Construct, id: string, config: MtlsCertificateConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    private _ca?;
    get ca(): boolean | cdktf.IResolvable;
    set ca(value: boolean | cdktf.IResolvable);
    get caInput(): any;
    private _certificates?;
    get certificates(): string;
    set certificates(value: string);
    get certificatesInput(): string;
    get expiresOn(): any;
    get id(): any;
    get issuer(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _privateKey?;
    get privateKey(): string;
    set privateKey(value: string);
    resetPrivateKey(): void;
    get privateKeyInput(): string;
    get serialNumber(): any;
    get signature(): any;
    get updatedAt(): any;
    get uploadedOn(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
