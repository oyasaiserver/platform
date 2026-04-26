import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CertManagerCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Subject alternative names (SANs) for the certificate
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate#alt_names CertManagerCertificate#alt_names}
    */
    readonly altNames?: string[];
    /**
    * The common name (CN) for the certificate. Required when not using CSR
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate#common_name CertManagerCertificate#common_name}
    */
    readonly commonName?: string;
    /**
    * The country (C) for the certificate (2-letter code)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate#country CertManagerCertificate#country}
    */
    readonly country?: string;
    /**
    * Certificate Signing Request (CSR) in PEM format. If provided, the certificate will be issued based on the CSR. Use Terraform's file() function to read from a file (e.g., file("./my-certificate.csr"))
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate#csr CertManagerCertificate#csr}
    */
    readonly csr?: string;
    /**
    * Extended key usages for the certificate. Supported: client_auth, server_auth, code_signing, email_protection, ocsp_signing, time_stamping
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate#extended_key_usages CertManagerCertificate#extended_key_usages}
    */
    readonly extendedKeyUsages?: string[];
    /**
    * The key algorithm for the certificate. Supported: RSA_2048, RSA_3072, RSA_4096, ECDSA_P256, ECDSA_P384, ECDSA_P521
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate#key_algorithm CertManagerCertificate#key_algorithm}
    */
    readonly keyAlgorithm?: string;
    /**
    * Key usages for the certificate. Supported: digital_signature, key_encipherment, non_repudiation, data_encipherment, key_agreement, key_cert_sign, crl_sign, encipher_only, decipher_only
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate#key_usages CertManagerCertificate#key_usages}
    */
    readonly keyUsages?: string[];
    /**
    * The locality (L) for the certificate
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate#locality CertManagerCertificate#locality}
    */
    readonly locality?: string;
    /**
    * The organization (O) for the certificate
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate#organization CertManagerCertificate#organization}
    */
    readonly organization?: string;
    /**
    * The organizational unit (OU) for the certificate
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate#ou CertManagerCertificate#ou}
    */
    readonly ou?: string;
    /**
    * The ID of the certificate profile to use for issuance
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate#profile_id CertManagerCertificate#profile_id}
    */
    readonly profileId: string;
    /**
    * The state/province (ST) for the certificate
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate#province CertManagerCertificate#province}
    */
    readonly province?: string;
    /**
    * The signature algorithm for the certificate. Supported: RSA-SHA256, RSA-SHA384, RSA-SHA512, ECDSA-SHA256, ECDSA-SHA384, ECDSA-SHA512
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate#signature_algorithm CertManagerCertificate#signature_algorithm}
    */
    readonly signatureAlgorithm?: string;
    /**
    * Maximum time to wait for certificate issuance in seconds. Defaults to 3600 (1 hour)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate#timeout_seconds CertManagerCertificate#timeout_seconds}
    */
    readonly timeoutSeconds?: number;
    /**
    * Time to live for the certificate (e.g., '30d', '90d', '1y')
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate#ttl CertManagerCertificate#ttl}
    */
    readonly ttl?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate infisical_cert_manager_certificate}
*/
export declare class CertManagerCertificate extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_cert_manager_certificate";
    /**
    * Generates CDKTF code for importing a CertManagerCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CertManagerCertificate to import
    * @param importFromId The id of the existing CertManagerCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CertManagerCertificate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate infisical_cert_manager_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertManagerCertificateConfig
    */
    constructor(scope: Construct, id: string, config: CertManagerCertificateConfig);
    private _altNames?;
    get altNames(): string[];
    set altNames(value: string[]);
    resetAltNames(): void;
    get altNamesInput(): string[];
    get certificate(): any;
    get certificateChain(): any;
    get certificateRequestId(): any;
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
    private _csr?;
    get csr(): string;
    set csr(value: string);
    resetCsr(): void;
    get csrInput(): string;
    private _extendedKeyUsages?;
    get extendedKeyUsages(): string[];
    set extendedKeyUsages(value: string[]);
    resetExtendedKeyUsages(): void;
    get extendedKeyUsagesInput(): string[];
    get id(): any;
    private _keyAlgorithm?;
    get keyAlgorithm(): string;
    set keyAlgorithm(value: string);
    resetKeyAlgorithm(): void;
    get keyAlgorithmInput(): string;
    private _keyUsages?;
    get keyUsages(): string[];
    set keyUsages(value: string[]);
    resetKeyUsages(): void;
    get keyUsagesInput(): string[];
    private _locality?;
    get locality(): string;
    set locality(value: string);
    resetLocality(): void;
    get localityInput(): string;
    get notAfter(): any;
    get notBefore(): any;
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
    get privateKey(): any;
    private _profileId?;
    get profileId(): string;
    set profileId(value: string);
    get profileIdInput(): string;
    private _province?;
    get province(): string;
    set province(value: string);
    resetProvince(): void;
    get provinceInput(): string;
    get serialNumber(): any;
    private _signatureAlgorithm?;
    get signatureAlgorithm(): string;
    set signatureAlgorithm(value: string);
    resetSignatureAlgorithm(): void;
    get signatureAlgorithmInput(): string;
    get status(): any;
    private _timeoutSeconds?;
    get timeoutSeconds(): number;
    set timeoutSeconds(value: number);
    resetTimeoutSeconds(): void;
    get timeoutSecondsInput(): number;
    private _ttl?;
    get ttl(): string;
    set ttl(value: string);
    resetTtl(): void;
    get ttlInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
