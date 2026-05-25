// https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/cert_manager_certificate_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertManagerCertificateProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the certificate authority to use (required unless issuer_type is 'self-signed')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/cert_manager_certificate_profile#ca_id CertManagerCertificateProfile#ca_id}
  */
  readonly caId?: string;
  /**
  * The ID of the certificate policy to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/cert_manager_certificate_profile#certificate_policy_id CertManagerCertificateProfile#certificate_policy_id}
  */
  readonly certificatePolicyId: string;
  /**
  * The description of the certificate profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/cert_manager_certificate_profile#description CertManagerCertificateProfile#description}
  */
  readonly description?: string;
  /**
  * The enrollment type for the profile. Supported values: api, est, acme
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/cert_manager_certificate_profile#enrollment_type CertManagerCertificateProfile#enrollment_type}
  */
  readonly enrollmentType: string;
  /**
  * The issuer type for the profile. Supported values: ca, self-signed. Defaults to 'ca'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/cert_manager_certificate_profile#issuer_type CertManagerCertificateProfile#issuer_type}
  */
  readonly issuerType?: string;
  /**
  * The unique name of the certificate profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/cert_manager_certificate_profile#name CertManagerCertificateProfile#name}
  */
  readonly name: string;
  /**
  * The slug of the cert-manager project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/cert_manager_certificate_profile#project_slug CertManagerCertificateProfile#project_slug}
  */
  readonly projectSlug: string;
  /**
  * api_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/cert_manager_certificate_profile#api_config CertManagerCertificateProfile#api_config}
  */
  readonly apiConfig?: CertManagerCertificateProfileApiConfig;
  /**
  * est_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/cert_manager_certificate_profile#est_config CertManagerCertificateProfile#est_config}
  */
  readonly estConfig?: CertManagerCertificateProfileEstConfig;
  /**
  * external_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/cert_manager_certificate_profile#external_configs CertManagerCertificateProfile#external_configs}
  */
  readonly externalConfigs?: CertManagerCertificateProfileExternalConfigs;
}
export interface CertManagerCertificateProfileApiConfig {
  /**
  * Whether to automatically renew certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/cert_manager_certificate_profile#auto_renew CertManagerCertificateProfile#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Number of days before expiration to renew certificates (1-30)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/cert_manager_certificate_profile#renew_before_days CertManagerCertificateProfile#renew_before_days}
  */
  readonly renewBeforeDays?: number;
}

export function certManagerCertificateProfileApiConfigToTerraform(struct?: CertManagerCertificateProfileApiConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_renew: cdktf.booleanToTerraform(struct!.autoRenew),
    renew_before_days: cdktf.numberToTerraform(struct!.renewBeforeDays),
  }
}


export function certManagerCertificateProfileApiConfigToHclTerraform(struct?: CertManagerCertificateProfileApiConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_renew: {
      value: cdktf.booleanToHclTerraform(struct!.autoRenew),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    renew_before_days: {
      value: cdktf.numberToHclTerraform(struct!.renewBeforeDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertManagerCertificateProfileApiConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertManagerCertificateProfileApiConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRenew !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRenew = this._autoRenew;
    }
    if (this._renewBeforeDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewBeforeDays = this._renewBeforeDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertManagerCertificateProfileApiConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoRenew = undefined;
      this._renewBeforeDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoRenew = value.autoRenew;
      this._renewBeforeDays = value.renewBeforeDays;
    }
  }

  // auto_renew - computed: true, optional: true, required: false
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // renew_before_days - computed: true, optional: true, required: false
  private _renewBeforeDays?: number; 
  public get renewBeforeDays() {
    return this.getNumberAttribute('renew_before_days');
  }
  public set renewBeforeDays(value: number) {
    this._renewBeforeDays = value;
  }
  public resetRenewBeforeDays() {
    this._renewBeforeDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewBeforeDaysInput() {
    return this._renewBeforeDays;
  }
}
export interface CertManagerCertificateProfileEstConfig {
  /**
  * The CA certificate chain for EST enrollment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/cert_manager_certificate_profile#ca_chain CertManagerCertificateProfile#ca_chain}
  */
  readonly caChain?: string;
  /**
  * Whether to disable bootstrap CA validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/cert_manager_certificate_profile#disable_bootstrap_ca_validation CertManagerCertificateProfile#disable_bootstrap_ca_validation}
  */
  readonly disableBootstrapCaValidation?: boolean | cdktf.IResolvable;
  /**
  * The passphrase for EST enrollment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/cert_manager_certificate_profile#passphrase CertManagerCertificateProfile#passphrase}
  */
  readonly passphrase?: string;
}

export function certManagerCertificateProfileEstConfigToTerraform(struct?: CertManagerCertificateProfileEstConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_chain: cdktf.stringToTerraform(struct!.caChain),
    disable_bootstrap_ca_validation: cdktf.booleanToTerraform(struct!.disableBootstrapCaValidation),
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
  }
}


export function certManagerCertificateProfileEstConfigToHclTerraform(struct?: CertManagerCertificateProfileEstConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_chain: {
      value: cdktf.stringToHclTerraform(struct!.caChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_bootstrap_ca_validation: {
      value: cdktf.booleanToHclTerraform(struct!.disableBootstrapCaValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertManagerCertificateProfileEstConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertManagerCertificateProfileEstConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.caChain = this._caChain;
    }
    if (this._disableBootstrapCaValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableBootstrapCaValidation = this._disableBootstrapCaValidation;
    }
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertManagerCertificateProfileEstConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caChain = undefined;
      this._disableBootstrapCaValidation = undefined;
      this._passphrase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caChain = value.caChain;
      this._disableBootstrapCaValidation = value.disableBootstrapCaValidation;
      this._passphrase = value.passphrase;
    }
  }

  // ca_chain - computed: false, optional: true, required: false
  private _caChain?: string; 
  public get caChain() {
    return this.getStringAttribute('ca_chain');
  }
  public set caChain(value: string) {
    this._caChain = value;
  }
  public resetCaChain() {
    this._caChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caChainInput() {
    return this._caChain;
  }

  // disable_bootstrap_ca_validation - computed: true, optional: true, required: false
  private _disableBootstrapCaValidation?: boolean | cdktf.IResolvable; 
  public get disableBootstrapCaValidation() {
    return this.getBooleanAttribute('disable_bootstrap_ca_validation');
  }
  public set disableBootstrapCaValidation(value: boolean | cdktf.IResolvable) {
    this._disableBootstrapCaValidation = value;
  }
  public resetDisableBootstrapCaValidation() {
    this._disableBootstrapCaValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableBootstrapCaValidationInput() {
    return this._disableBootstrapCaValidation;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }
}
export interface CertManagerCertificateProfileExternalConfigs {
  /**
  * Certificate template name for Azure AD CS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/cert_manager_certificate_profile#template CertManagerCertificateProfile#template}
  */
  readonly template?: string;
}

export function certManagerCertificateProfileExternalConfigsToTerraform(struct?: CertManagerCertificateProfileExternalConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function certManagerCertificateProfileExternalConfigsToHclTerraform(struct?: CertManagerCertificateProfileExternalConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertManagerCertificateProfileExternalConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertManagerCertificateProfileExternalConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertManagerCertificateProfileExternalConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template = value.template;
    }
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/cert_manager_certificate_profile infisical_cert_manager_certificate_profile}
*/
export class CertManagerCertificateProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_cert_manager_certificate_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertManagerCertificateProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertManagerCertificateProfile to import
  * @param importFromId The id of the existing CertManagerCertificateProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/cert_manager_certificate_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertManagerCertificateProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_cert_manager_certificate_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.25/docs/resources/cert_manager_certificate_profile infisical_cert_manager_certificate_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertManagerCertificateProfileConfig
  */
  public constructor(scope: Construct, id: string, config: CertManagerCertificateProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_cert_manager_certificate_profile',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.16.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caId = config.caId;
    this._certificatePolicyId = config.certificatePolicyId;
    this._description = config.description;
    this._enrollmentType = config.enrollmentType;
    this._issuerType = config.issuerType;
    this._name = config.name;
    this._projectSlug = config.projectSlug;
    this._apiConfig.internalValue = config.apiConfig;
    this._estConfig.internalValue = config.estConfig;
    this._externalConfigs.internalValue = config.externalConfigs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_id - computed: false, optional: true, required: false
  private _caId?: string; 
  public get caId() {
    return this.getStringAttribute('ca_id');
  }
  public set caId(value: string) {
    this._caId = value;
  }
  public resetCaId() {
    this._caId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caIdInput() {
    return this._caId;
  }

  // certificate_policy_id - computed: false, optional: false, required: true
  private _certificatePolicyId?: string; 
  public get certificatePolicyId() {
    return this.getStringAttribute('certificate_policy_id');
  }
  public set certificatePolicyId(value: string) {
    this._certificatePolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePolicyIdInput() {
    return this._certificatePolicyId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enrollment_type - computed: false, optional: false, required: true
  private _enrollmentType?: string; 
  public get enrollmentType() {
    return this.getStringAttribute('enrollment_type');
  }
  public set enrollmentType(value: string) {
    this._enrollmentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentTypeInput() {
    return this._enrollmentType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer_type - computed: true, optional: true, required: false
  private _issuerType?: string; 
  public get issuerType() {
    return this.getStringAttribute('issuer_type');
  }
  public set issuerType(value: string) {
    this._issuerType = value;
  }
  public resetIssuerType() {
    this._issuerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerTypeInput() {
    return this._issuerType;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // project_slug - computed: false, optional: false, required: true
  private _projectSlug?: string; 
  public get projectSlug() {
    return this.getStringAttribute('project_slug');
  }
  public set projectSlug(value: string) {
    this._projectSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectSlugInput() {
    return this._projectSlug;
  }

  // api_config - computed: false, optional: true, required: false
  private _apiConfig = new CertManagerCertificateProfileApiConfigOutputReference(this, "api_config");
  public get apiConfig() {
    return this._apiConfig;
  }
  public putApiConfig(value: CertManagerCertificateProfileApiConfig) {
    this._apiConfig.internalValue = value;
  }
  public resetApiConfig() {
    this._apiConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiConfigInput() {
    return this._apiConfig.internalValue;
  }

  // est_config - computed: false, optional: true, required: false
  private _estConfig = new CertManagerCertificateProfileEstConfigOutputReference(this, "est_config");
  public get estConfig() {
    return this._estConfig;
  }
  public putEstConfig(value: CertManagerCertificateProfileEstConfig) {
    this._estConfig.internalValue = value;
  }
  public resetEstConfig() {
    this._estConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estConfigInput() {
    return this._estConfig.internalValue;
  }

  // external_configs - computed: false, optional: true, required: false
  private _externalConfigs = new CertManagerCertificateProfileExternalConfigsOutputReference(this, "external_configs");
  public get externalConfigs() {
    return this._externalConfigs;
  }
  public putExternalConfigs(value: CertManagerCertificateProfileExternalConfigs) {
    this._externalConfigs.internalValue = value;
  }
  public resetExternalConfigs() {
    this._externalConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalConfigsInput() {
    return this._externalConfigs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_id: cdktf.stringToTerraform(this._caId),
      certificate_policy_id: cdktf.stringToTerraform(this._certificatePolicyId),
      description: cdktf.stringToTerraform(this._description),
      enrollment_type: cdktf.stringToTerraform(this._enrollmentType),
      issuer_type: cdktf.stringToTerraform(this._issuerType),
      name: cdktf.stringToTerraform(this._name),
      project_slug: cdktf.stringToTerraform(this._projectSlug),
      api_config: certManagerCertificateProfileApiConfigToTerraform(this._apiConfig.internalValue),
      est_config: certManagerCertificateProfileEstConfigToTerraform(this._estConfig.internalValue),
      external_configs: certManagerCertificateProfileExternalConfigsToTerraform(this._externalConfigs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_id: {
        value: cdktf.stringToHclTerraform(this._caId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_policy_id: {
        value: cdktf.stringToHclTerraform(this._certificatePolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enrollment_type: {
        value: cdktf.stringToHclTerraform(this._enrollmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuer_type: {
        value: cdktf.stringToHclTerraform(this._issuerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_slug: {
        value: cdktf.stringToHclTerraform(this._projectSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_config: {
        value: certManagerCertificateProfileApiConfigToHclTerraform(this._apiConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertManagerCertificateProfileApiConfig",
      },
      est_config: {
        value: certManagerCertificateProfileEstConfigToHclTerraform(this._estConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertManagerCertificateProfileEstConfig",
      },
      external_configs: {
        value: certManagerCertificateProfileExternalConfigsToHclTerraform(this._externalConfigs.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertManagerCertificateProfileExternalConfigs",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
