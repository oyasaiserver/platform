import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ClientCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Certificate Signing Request (CSR). Must be newline-encoded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/client_certificate#csr ClientCertificate#csr}
    */
    readonly csr: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/client_certificate#reactivate ClientCertificate#reactivate}
    */
    readonly reactivate?: boolean | cdktf.IResolvable;
    /**
    * The number of days the Client Certificate will be valid after the issued_on date
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/client_certificate#validity_days ClientCertificate#validity_days}
    */
    readonly validityDays: number;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/client_certificate#zone_id ClientCertificate#zone_id}
    */
    readonly zoneId?: string;
}
export interface ClientCertificateCertificateAuthority {
}
export declare function clientCertificateCertificateAuthorityToTerraform(struct?: ClientCertificateCertificateAuthority): any;
export declare function clientCertificateCertificateAuthorityToHclTerraform(struct?: ClientCertificateCertificateAuthority): any;
export declare class ClientCertificateCertificateAuthorityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ClientCertificateCertificateAuthority | undefined;
    set internalValue(value: ClientCertificateCertificateAuthority | undefined);
    get id(): any;
    get name(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/client_certificate cloudflare_client_certificate}
*/
export declare class ClientCertificate extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_client_certificate";
    /**
    * Generates CDKTF code for importing a ClientCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ClientCertificate to import
    * @param importFromId The id of the existing ClientCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/client_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ClientCertificate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/client_certificate cloudflare_client_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ClientCertificateConfig
    */
    constructor(scope: Construct, id: string, config: ClientCertificateConfig);
    get certificate(): any;
    private _certificateAuthority;
    get certificateAuthority(): ClientCertificateCertificateAuthorityOutputReference;
    get commonName(): any;
    get country(): any;
    private _csr?;
    get csr(): string;
    set csr(value: string);
    get csrInput(): string;
    get expiresOn(): any;
    get fingerprintSha256(): any;
    get id(): any;
    get issuedOn(): any;
    get location(): any;
    get organization(): any;
    get organizationalUnit(): any;
    private _reactivate?;
    get reactivate(): boolean | cdktf.IResolvable;
    set reactivate(value: boolean | cdktf.IResolvable);
    resetReactivate(): void;
    get reactivateInput(): any;
    get serialNumber(): any;
    get signature(): any;
    get ski(): any;
    get state(): any;
    get status(): any;
    private _validityDays?;
    get validityDays(): number;
    set validityDays(value: number);
    get validityDaysInput(): number;
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
