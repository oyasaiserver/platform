import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CertManagerInternalCaConfig extends cdktf.TerraformMetaArguments {
    /**
    * The common name (CN) of the CA certificate
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_internal_ca#common_name CertManagerInternalCa#common_name}
    */
    readonly commonName?: string;
    /**
    * The country (C) of the CA certificate
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_internal_ca#country CertManagerInternalCa#country}
    */
    readonly country?: string;
    /**
    * The key algorithm for the CA. Supported values: RSA_2048, RSA_3072, RSA_4096, EC_prime256v1, EC_secp384r1, EC_secp521r1. Defaults to 'RSA_2048'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_internal_ca#key_algorithm CertManagerInternalCa#key_algorithm}
    */
    readonly keyAlgorithm?: string;
    /**
    * The locality (L) of the CA certificate
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_internal_ca#locality CertManagerInternalCa#locality}
    */
    readonly locality?: string;
    /**
    * The name of the CA
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_internal_ca#name CertManagerInternalCa#name}
    */
    readonly name: string;
    /**
    * The organization (O) of the CA certificate
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_internal_ca#organization CertManagerInternalCa#organization}
    */
    readonly organization?: string;
    /**
    * The organizational unit (OU) of the CA certificate
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_internal_ca#ou CertManagerInternalCa#ou}
    */
    readonly ou?: string;
    /**
    * The slug of the cert-manager project
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_internal_ca#project_slug CertManagerInternalCa#project_slug}
    */
    readonly projectSlug: string;
    /**
    * The state/province (ST) of the CA certificate
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_internal_ca#province CertManagerInternalCa#province}
    */
    readonly province?: string;
    /**
    * The status of the CA. Supported values: active, disabled. Defaults to 'active'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_internal_ca#status CertManagerInternalCa#status}
    */
    readonly status?: string;
    /**
    * The type of the CA. Supported values: root, intermediate
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_internal_ca#type CertManagerInternalCa#type}
    */
    readonly type: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_internal_ca infisical_cert_manager_internal_ca}
*/
export declare class CertManagerInternalCa extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_cert_manager_internal_ca";
    /**
    * Generates CDKTF code for importing a CertManagerInternalCa resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CertManagerInternalCa to import
    * @param importFromId The id of the existing CertManagerInternalCa that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_internal_ca#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CertManagerInternalCa to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_internal_ca infisical_cert_manager_internal_ca} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertManagerInternalCaConfig
    */
    constructor(scope: Construct, id: string, config: CertManagerInternalCaConfig);
    private _commonName?;
    get commonName(): string;
    set commonName(value: string);
    resetCommonName(): void;
    get commonNameInput(): string;
    private _country?;
    get country(): string;
    set country(value: string);
    resetCountry(): void;
    get countryInput(): string;
    get id(): any;
    private _keyAlgorithm?;
    get keyAlgorithm(): string;
    set keyAlgorithm(value: string);
    resetKeyAlgorithm(): void;
    get keyAlgorithmInput(): string;
    private _locality?;
    get locality(): string;
    set locality(value: string);
    resetLocality(): void;
    get localityInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _organization?;
    get organization(): string;
    set organization(value: string);
    resetOrganization(): void;
    get organizationInput(): string;
    private _ou?;
    get ou(): string;
    set ou(value: string);
    resetOu(): void;
    get ouInput(): string;
    private _projectSlug?;
    get projectSlug(): string;
    set projectSlug(value: string);
    get projectSlugInput(): string;
    private _province?;
    get province(): string;
    set province(value: string);
    resetProvince(): void;
    get provinceInput(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
