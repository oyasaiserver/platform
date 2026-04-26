import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CertManagerCertificateProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * The ID of the certificate authority to use (required unless issuer_type is 'self-signed')
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_profile#ca_id CertManagerCertificateProfile#ca_id}
    */
    readonly caId?: string;
    /**
    * The ID of the certificate policy to use
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_profile#certificate_policy_id CertManagerCertificateProfile#certificate_policy_id}
    */
    readonly certificatePolicyId: string;
    /**
    * The description of the certificate profile
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_profile#description CertManagerCertificateProfile#description}
    */
    readonly description?: string;
    /**
    * The enrollment type for the profile. Supported values: api, est, acme
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_profile#enrollment_type CertManagerCertificateProfile#enrollment_type}
    */
    readonly enrollmentType: string;
    /**
    * The issuer type for the profile. Supported values: ca, self-signed. Defaults to 'ca'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_profile#issuer_type CertManagerCertificateProfile#issuer_type}
    */
    readonly issuerType?: string;
    /**
    * The unique name of the certificate profile
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_profile#name CertManagerCertificateProfile#name}
    */
    readonly name: string;
    /**
    * The slug of the cert-manager project
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_profile#project_slug CertManagerCertificateProfile#project_slug}
    */
    readonly projectSlug: string;
    /**
    * api_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_profile#api_config CertManagerCertificateProfile#api_config}
    */
    readonly apiConfig?: CertManagerCertificateProfileApiConfig;
    /**
    * est_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_profile#est_config CertManagerCertificateProfile#est_config}
    */
    readonly estConfig?: CertManagerCertificateProfileEstConfig;
    /**
    * external_configs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_profile#external_configs CertManagerCertificateProfile#external_configs}
    */
    readonly externalConfigs?: CertManagerCertificateProfileExternalConfigs;
}
export interface CertManagerCertificateProfileApiConfig {
    /**
    * Whether to automatically renew certificates
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_profile#auto_renew CertManagerCertificateProfile#auto_renew}
    */
    readonly autoRenew?: boolean | cdktf.IResolvable;
    /**
    * Number of days before expiration to renew certificates (1-30)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_profile#renew_before_days CertManagerCertificateProfile#renew_before_days}
    */
    readonly renewBeforeDays?: number;
}
export declare function certManagerCertificateProfileApiConfigToTerraform(struct?: CertManagerCertificateProfileApiConfig | cdktf.IResolvable): any;
export declare function certManagerCertificateProfileApiConfigToHclTerraform(struct?: CertManagerCertificateProfileApiConfig | cdktf.IResolvable): any;
export declare class CertManagerCertificateProfileApiConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CertManagerCertificateProfileApiConfig | cdktf.IResolvable | undefined;
    set internalValue(value: CertManagerCertificateProfileApiConfig | cdktf.IResolvable | undefined);
    private _autoRenew?;
    get autoRenew(): boolean | cdktf.IResolvable;
    set autoRenew(value: boolean | cdktf.IResolvable);
    resetAutoRenew(): void;
    get autoRenewInput(): any;
    private _renewBeforeDays?;
    get renewBeforeDays(): number;
    set renewBeforeDays(value: number);
    resetRenewBeforeDays(): void;
    get renewBeforeDaysInput(): number;
}
export interface CertManagerCertificateProfileEstConfig {
    /**
    * The CA certificate chain for EST enrollment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_profile#ca_chain CertManagerCertificateProfile#ca_chain}
    */
    readonly caChain?: string;
    /**
    * Whether to disable bootstrap CA validation
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_profile#disable_bootstrap_ca_validation CertManagerCertificateProfile#disable_bootstrap_ca_validation}
    */
    readonly disableBootstrapCaValidation?: boolean | cdktf.IResolvable;
    /**
    * The passphrase for EST enrollment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_profile#passphrase CertManagerCertificateProfile#passphrase}
    */
    readonly passphrase?: string;
}
export declare function certManagerCertificateProfileEstConfigToTerraform(struct?: CertManagerCertificateProfileEstConfig | cdktf.IResolvable): any;
export declare function certManagerCertificateProfileEstConfigToHclTerraform(struct?: CertManagerCertificateProfileEstConfig | cdktf.IResolvable): any;
export declare class CertManagerCertificateProfileEstConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CertManagerCertificateProfileEstConfig | cdktf.IResolvable | undefined;
    set internalValue(value: CertManagerCertificateProfileEstConfig | cdktf.IResolvable | undefined);
    private _caChain?;
    get caChain(): string;
    set caChain(value: string);
    resetCaChain(): void;
    get caChainInput(): string;
    private _disableBootstrapCaValidation?;
    get disableBootstrapCaValidation(): boolean | cdktf.IResolvable;
    set disableBootstrapCaValidation(value: boolean | cdktf.IResolvable);
    resetDisableBootstrapCaValidation(): void;
    get disableBootstrapCaValidationInput(): any;
    private _passphrase?;
    get passphrase(): string;
    set passphrase(value: string);
    resetPassphrase(): void;
    get passphraseInput(): string;
}
export interface CertManagerCertificateProfileExternalConfigs {
    /**
    * Certificate template name for Azure AD CS
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_profile#template CertManagerCertificateProfile#template}
    */
    readonly template?: string;
}
export declare function certManagerCertificateProfileExternalConfigsToTerraform(struct?: CertManagerCertificateProfileExternalConfigs | cdktf.IResolvable): any;
export declare function certManagerCertificateProfileExternalConfigsToHclTerraform(struct?: CertManagerCertificateProfileExternalConfigs | cdktf.IResolvable): any;
export declare class CertManagerCertificateProfileExternalConfigsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CertManagerCertificateProfileExternalConfigs | cdktf.IResolvable | undefined;
    set internalValue(value: CertManagerCertificateProfileExternalConfigs | cdktf.IResolvable | undefined);
    private _template?;
    get template(): string;
    set template(value: string);
    resetTemplate(): void;
    get templateInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_profile infisical_cert_manager_certificate_profile}
*/
export declare class CertManagerCertificateProfile extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_cert_manager_certificate_profile";
    /**
    * Generates CDKTF code for importing a CertManagerCertificateProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CertManagerCertificateProfile to import
    * @param importFromId The id of the existing CertManagerCertificateProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CertManagerCertificateProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_profile infisical_cert_manager_certificate_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertManagerCertificateProfileConfig
    */
    constructor(scope: Construct, id: string, config: CertManagerCertificateProfileConfig);
    private _caId?;
    get caId(): string;
    set caId(value: string);
    resetCaId(): void;
    get caIdInput(): string;
    private _certificatePolicyId?;
    get certificatePolicyId(): string;
    set certificatePolicyId(value: string);
    get certificatePolicyIdInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _enrollmentType?;
    get enrollmentType(): string;
    set enrollmentType(value: string);
    get enrollmentTypeInput(): string;
    get id(): any;
    private _issuerType?;
    get issuerType(): string;
    set issuerType(value: string);
    resetIssuerType(): void;
    get issuerTypeInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _projectSlug?;
    get projectSlug(): string;
    set projectSlug(value: string);
    get projectSlugInput(): string;
    private _apiConfig;
    get apiConfig(): CertManagerCertificateProfileApiConfigOutputReference;
    putApiConfig(value: CertManagerCertificateProfileApiConfig): void;
    resetApiConfig(): void;
    get apiConfigInput(): any;
    private _estConfig;
    get estConfig(): CertManagerCertificateProfileEstConfigOutputReference;
    putEstConfig(value: CertManagerCertificateProfileEstConfig): void;
    resetEstConfig(): void;
    get estConfigInput(): any;
    private _externalConfigs;
    get externalConfigs(): CertManagerCertificateProfileExternalConfigsOutputReference;
    putExternalConfigs(value: CertManagerCertificateProfileExternalConfigs): void;
    resetExternalConfigs(): void;
    get externalConfigsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
