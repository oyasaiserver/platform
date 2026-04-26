import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CertManagerCaCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * The ID of the certificate authority to generate a certificate for
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_ca_certificate#ca_id CertManagerCaCertificate#ca_id}
    */
    readonly caId: string;
    /**
    * The maximum number of intermediate CAs that may follow this CA in the certificate chain. Use -1 for no path limit
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_ca_certificate#max_path_length CertManagerCaCertificate#max_path_length}
    */
    readonly maxPathLength?: number;
    /**
    * The date and time when the CA expires in RFC3339 format (e.g., '2034-01-01T00:00:00Z')
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_ca_certificate#not_after CertManagerCaCertificate#not_after}
    */
    readonly notAfter: string;
    /**
    * The date and time when the CA becomes valid in RFC3339 format (e.g., '2024-01-01T00:00:00Z')
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_ca_certificate#not_before CertManagerCaCertificate#not_before}
    */
    readonly notBefore: string;
    /**
    * The ID of the parent CA (required for intermediate CAs)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_ca_certificate#parent_ca_id CertManagerCaCertificate#parent_ca_id}
    */
    readonly parentCaId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_ca_certificate infisical_cert_manager_ca_certificate}
*/
export declare class CertManagerCaCertificate extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_cert_manager_ca_certificate";
    /**
    * Generates CDKTF code for importing a CertManagerCaCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CertManagerCaCertificate to import
    * @param importFromId The id of the existing CertManagerCaCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_ca_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CertManagerCaCertificate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_ca_certificate infisical_cert_manager_ca_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertManagerCaCertificateConfig
    */
    constructor(scope: Construct, id: string, config: CertManagerCaCertificateConfig);
    private _caId?;
    get caId(): string;
    set caId(value: string);
    get caIdInput(): string;
    get certificate(): any;
    get certificateChain(): any;
    get id(): any;
    private _maxPathLength?;
    get maxPathLength(): number;
    set maxPathLength(value: number);
    resetMaxPathLength(): void;
    get maxPathLengthInput(): number;
    private _notAfter?;
    get notAfter(): string;
    set notAfter(value: string);
    get notAfterInput(): string;
    private _notBefore?;
    get notBefore(): string;
    set notBefore(value: string);
    get notBeforeInput(): string;
    private _parentCaId?;
    get parentCaId(): string;
    set parentCaId(value: string);
    resetParentCaId(): void;
    get parentCaIdInput(): string;
    get serialNumber(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
