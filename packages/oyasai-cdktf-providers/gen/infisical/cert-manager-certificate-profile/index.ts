// https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/cert_manager_certificate_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertManagerCertificateProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the certificate authority to use (required unless issuer_type is 'self-signed')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/cert_manager_certificate_profile#ca_id CertManagerCertificateProfile#ca_id}
  */
  readonly caId?: string;
  /**
  * The ID of the certificate policy to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/cert_manager_certificate_profile#certificate_policy_id CertManagerCertificateProfile#certificate_policy_id}
  */
  readonly certificatePolicyId: string;
  /**
  * The description of the certificate profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/cert_manager_certificate_profile#description CertManagerCertificateProfile#description}
  */
  readonly description?: string;
  /**
  * The issuer type for the profile. Supported values: ca, self-signed. Defaults to 'ca'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/cert_manager_certificate_profile#issuer_type CertManagerCertificateProfile#issuer_type}
  */
  readonly issuerType?: string;
  /**
  * The unique name of the certificate profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/cert_manager_certificate_profile#name CertManagerCertificateProfile#name}
  */
  readonly name: string;
  /**
  * defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/cert_manager_certificate_profile#defaults CertManagerCertificateProfile#defaults}
  */
  readonly defaults?: CertManagerCertificateProfileDefaults;
}
export interface CertManagerCertificateProfileDefaults {
  /**
  * Default common name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/cert_manager_certificate_profile#common_name CertManagerCertificateProfile#common_name}
  */
  readonly commonName?: string;
  /**
  * Default country (C)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/cert_manager_certificate_profile#country CertManagerCertificateProfile#country}
  */
  readonly country?: string;
  /**
  * Default extended key usages. Supported values: client_auth, server_auth, code_signing, email_protection, ocsp_signing, time_stamping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/cert_manager_certificate_profile#extended_key_usages CertManagerCertificateProfile#extended_key_usages}
  */
  readonly extendedKeyUsages?: string[];
  /**
  * Default key algorithm. Supported values: RSA_2048, RSA_3072, RSA_4096, EC_prime256v1, EC_secp384r1, EC_secp521r1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/cert_manager_certificate_profile#key_algorithm CertManagerCertificateProfile#key_algorithm}
  */
  readonly keyAlgorithm?: string;
  /**
  * Default key usages. Supported values: digital_signature, key_encipherment, non_repudiation, data_encipherment, key_agreement, key_cert_sign, crl_sign, encipher_only, decipher_only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/cert_manager_certificate_profile#key_usages CertManagerCertificateProfile#key_usages}
  */
  readonly keyUsages?: string[];
  /**
  * Default locality (L)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/cert_manager_certificate_profile#locality CertManagerCertificateProfile#locality}
  */
  readonly locality?: string;
  /**
  * Default organization (O)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/cert_manager_certificate_profile#organization CertManagerCertificateProfile#organization}
  */
  readonly organization?: string;
  /**
  * Default organizational unit (OU)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/cert_manager_certificate_profile#organizational_unit CertManagerCertificateProfile#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Default signature algorithm. Supported values: RSA-SHA256, RSA-SHA384, RSA-SHA512, ECDSA-SHA256, ECDSA-SHA384, ECDSA-SHA512
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/cert_manager_certificate_profile#signature_algorithm CertManagerCertificateProfile#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * Default state/province (ST)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/cert_manager_certificate_profile#state CertManagerCertificateProfile#state}
  */
  readonly state?: string;
  /**
  * Default certificate validity in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/cert_manager_certificate_profile#ttl_days CertManagerCertificateProfile#ttl_days}
  */
  readonly ttlDays?: number;
}

export function certManagerCertificateProfileDefaultsToTerraform(struct?: CertManagerCertificateProfileDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    country: cdktf.stringToTerraform(struct!.country),
    extended_key_usages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extendedKeyUsages),
    key_algorithm: cdktf.stringToTerraform(struct!.keyAlgorithm),
    key_usages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyUsages),
    locality: cdktf.stringToTerraform(struct!.locality),
    organization: cdktf.stringToTerraform(struct!.organization),
    organizational_unit: cdktf.stringToTerraform(struct!.organizationalUnit),
    signature_algorithm: cdktf.stringToTerraform(struct!.signatureAlgorithm),
    state: cdktf.stringToTerraform(struct!.state),
    ttl_days: cdktf.numberToTerraform(struct!.ttlDays),
  }
}


export function certManagerCertificateProfileDefaultsToHclTerraform(struct?: CertManagerCertificateProfileDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extended_key_usages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extendedKeyUsages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.keyAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_usages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyUsages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    locality: {
      value: cdktf.stringToHclTerraform(struct!.locality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizational_unit: {
      value: cdktf.stringToHclTerraform(struct!.organizationalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.signatureAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl_days: {
      value: cdktf.numberToHclTerraform(struct!.ttlDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertManagerCertificateProfileDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertManagerCertificateProfileDefaults | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._extendedKeyUsages !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedKeyUsages = this._extendedKeyUsages;
    }
    if (this._keyAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAlgorithm = this._keyAlgorithm;
    }
    if (this._keyUsages !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUsages = this._keyUsages;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._organizationalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit;
    }
    if (this._signatureAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureAlgorithm = this._signatureAlgorithm;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._ttlDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlDays = this._ttlDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertManagerCertificateProfileDefaults | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
      this._country = undefined;
      this._extendedKeyUsages = undefined;
      this._keyAlgorithm = undefined;
      this._keyUsages = undefined;
      this._locality = undefined;
      this._organization = undefined;
      this._organizationalUnit = undefined;
      this._signatureAlgorithm = undefined;
      this._state = undefined;
      this._ttlDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
      this._country = value.country;
      this._extendedKeyUsages = value.extendedKeyUsages;
      this._keyAlgorithm = value.keyAlgorithm;
      this._keyUsages = value.keyUsages;
      this._locality = value.locality;
      this._organization = value.organization;
      this._organizationalUnit = value.organizationalUnit;
      this._signatureAlgorithm = value.signatureAlgorithm;
      this._state = value.state;
      this._ttlDays = value.ttlDays;
    }
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // extended_key_usages - computed: false, optional: true, required: false
  private _extendedKeyUsages?: string[]; 
  public get extendedKeyUsages() {
    return this.getListAttribute('extended_key_usages');
  }
  public set extendedKeyUsages(value: string[]) {
    this._extendedKeyUsages = value;
  }
  public resetExtendedKeyUsages() {
    this._extendedKeyUsages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedKeyUsagesInput() {
    return this._extendedKeyUsages;
  }

  // key_algorithm - computed: false, optional: true, required: false
  private _keyAlgorithm?: string; 
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }
  public set keyAlgorithm(value: string) {
    this._keyAlgorithm = value;
  }
  public resetKeyAlgorithm() {
    this._keyAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAlgorithmInput() {
    return this._keyAlgorithm;
  }

  // key_usages - computed: false, optional: true, required: false
  private _keyUsages?: string[]; 
  public get keyUsages() {
    return this.getListAttribute('key_usages');
  }
  public set keyUsages(value: string[]) {
    this._keyUsages = value;
  }
  public resetKeyUsages() {
    this._keyUsages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsagesInput() {
    return this._keyUsages;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // ttl_days - computed: false, optional: true, required: false
  private _ttlDays?: number; 
  public get ttlDays() {
    return this.getNumberAttribute('ttl_days');
  }
  public set ttlDays(value: number) {
    this._ttlDays = value;
  }
  public resetTtlDays() {
    this._ttlDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlDaysInput() {
    return this._ttlDays;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/cert_manager_certificate_profile infisical_cert_manager_certificate_profile}
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
  * @param importFromId The id of the existing CertManagerCertificateProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/cert_manager_certificate_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertManagerCertificateProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_cert_manager_certificate_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/cert_manager_certificate_profile infisical_cert_manager_certificate_profile} Resource
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
        providerVersion: '0.18.0'
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
    this._issuerType = config.issuerType;
    this._name = config.name;
    this._defaults.internalValue = config.defaults;
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

  // defaults - computed: false, optional: true, required: false
  private _defaults = new CertManagerCertificateProfileDefaultsOutputReference(this, "defaults");
  public get defaults() {
    return this._defaults;
  }
  public putDefaults(value: CertManagerCertificateProfileDefaults) {
    this._defaults.internalValue = value;
  }
  public resetDefaults() {
    this._defaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsInput() {
    return this._defaults.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_id: cdktf.stringToTerraform(this._caId),
      certificate_policy_id: cdktf.stringToTerraform(this._certificatePolicyId),
      description: cdktf.stringToTerraform(this._description),
      issuer_type: cdktf.stringToTerraform(this._issuerType),
      name: cdktf.stringToTerraform(this._name),
      defaults: certManagerCertificateProfileDefaultsToTerraform(this._defaults.internalValue),
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
      defaults: {
        value: certManagerCertificateProfileDefaultsToHclTerraform(this._defaults.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertManagerCertificateProfileDefaults",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
