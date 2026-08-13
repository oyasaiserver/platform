// https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertManagerCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Subject alternative names (SANs) for the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate#alt_names CertManagerCertificate#alt_names}
  */
  readonly altNames?: string[];
  /**
  * The ID of the Certificate Manager application to issue this certificate from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate#application_id CertManagerCertificate#application_id}
  */
  readonly applicationId: string;
  /**
  * The common name (CN) for the certificate. Required when not using CSR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate#common_name CertManagerCertificate#common_name}
  */
  readonly commonName?: string;
  /**
  * The country (C) for the certificate (2-letter code)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate#country CertManagerCertificate#country}
  */
  readonly country?: string;
  /**
  * Certificate Signing Request (CSR) in PEM format. If provided, the certificate will be issued based on the CSR. Use Terraform's file() function to read from a file (e.g., file("./my-certificate.csr")).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate#csr CertManagerCertificate#csr}
  */
  readonly csr?: string;
  /**
  * Domain components (DC) for the certificate. Multi-valued; each entry becomes a DC attribute in the subject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate#domain_components CertManagerCertificate#domain_components}
  */
  readonly domainComponents?: string[];
  /**
  * Extended key usages for the certificate. Supported: client_auth, server_auth, code_signing, email_protection, ocsp_signing, time_stamping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate#extended_key_usages CertManagerCertificate#extended_key_usages}
  */
  readonly extendedKeyUsages?: string[];
  /**
  * The key algorithm for the certificate. Supported: RSA_2048, RSA_3072, RSA_4096, EC_prime256v1, EC_secp384r1, EC_secp521r1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate#key_algorithm CertManagerCertificate#key_algorithm}
  */
  readonly keyAlgorithm?: string;
  /**
  * Key usages for the certificate. Supported: digital_signature, key_encipherment, non_repudiation, data_encipherment, key_agreement, key_cert_sign, crl_sign, encipher_only, decipher_only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate#key_usages CertManagerCertificate#key_usages}
  */
  readonly keyUsages?: string[];
  /**
  * The locality (L) for the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate#locality CertManagerCertificate#locality}
  */
  readonly locality?: string;
  /**
  * The organization (O) for the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate#organization CertManagerCertificate#organization}
  */
  readonly organization?: string;
  /**
  * The organizational unit (OU) for the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate#ou CertManagerCertificate#ou}
  */
  readonly ou?: string;
  /**
  * The ID of the certificate profile to use for issuance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate#profile_id CertManagerCertificate#profile_id}
  */
  readonly profileId: string;
  /**
  * The state/province (ST) for the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate#province CertManagerCertificate#province}
  */
  readonly province?: string;
  /**
  * The signature algorithm for the certificate. Supported: RSA-SHA256, RSA-SHA384, RSA-SHA512, ECDSA-SHA256, ECDSA-SHA384, ECDSA-SHA512
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate#signature_algorithm CertManagerCertificate#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * Maximum time to wait for certificate issuance in seconds. Defaults to 3600 (1 hour)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate#timeout_seconds CertManagerCertificate#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Time to live for the certificate (e.g., '30d', '90d', '1y').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate#ttl CertManagerCertificate#ttl}
  */
  readonly ttl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate infisical_cert_manager_certificate}
*/
export class CertManagerCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_cert_manager_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertManagerCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertManagerCertificate to import
  * @param importFromId The id of the existing CertManagerCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertManagerCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_cert_manager_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.19.6/docs/resources/cert_manager_certificate infisical_cert_manager_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertManagerCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: CertManagerCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_cert_manager_certificate',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.19.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._altNames = config.altNames;
    this._applicationId = config.applicationId;
    this._commonName = config.commonName;
    this._country = config.country;
    this._csr = config.csr;
    this._domainComponents = config.domainComponents;
    this._extendedKeyUsages = config.extendedKeyUsages;
    this._keyAlgorithm = config.keyAlgorithm;
    this._keyUsages = config.keyUsages;
    this._locality = config.locality;
    this._organization = config.organization;
    this._ou = config.ou;
    this._profileId = config.profileId;
    this._province = config.province;
    this._signatureAlgorithm = config.signatureAlgorithm;
    this._timeoutSeconds = config.timeoutSeconds;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alt_names - computed: true, optional: true, required: false
  private _altNames?: string[]; 
  public get altNames() {
    return this.getListAttribute('alt_names');
  }
  public set altNames(value: string[]) {
    this._altNames = value;
  }
  public resetAltNames() {
    this._altNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altNamesInput() {
    return this._altNames;
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // certificate_chain - computed: true, optional: false, required: false
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }

  // certificate_request_id - computed: true, optional: false, required: false
  public get certificateRequestId() {
    return this.getStringAttribute('certificate_request_id');
  }

  // common_name - computed: true, optional: true, required: false
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

  // country - computed: true, optional: true, required: false
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

  // csr - computed: true, optional: true, required: false
  private _csr?: string; 
  public get csr() {
    return this.getStringAttribute('csr');
  }
  public set csr(value: string) {
    this._csr = value;
  }
  public resetCsr() {
    this._csr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrInput() {
    return this._csr;
  }

  // domain_components - computed: true, optional: true, required: false
  private _domainComponents?: string[]; 
  public get domainComponents() {
    return this.getListAttribute('domain_components');
  }
  public set domainComponents(value: string[]) {
    this._domainComponents = value;
  }
  public resetDomainComponents() {
    this._domainComponents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainComponentsInput() {
    return this._domainComponents;
  }

  // extended_key_usages - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_algorithm - computed: true, optional: true, required: false
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

  // key_usages - computed: true, optional: true, required: false
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

  // locality - computed: true, optional: true, required: false
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

  // not_after - computed: true, optional: false, required: false
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }

  // organization - computed: true, optional: true, required: false
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

  // ou - computed: true, optional: true, required: false
  private _ou?: string; 
  public get ou() {
    return this.getStringAttribute('ou');
  }
  public set ou(value: string) {
    this._ou = value;
  }
  public resetOu() {
    this._ou = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ouInput() {
    return this._ou;
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // profile_id - computed: false, optional: false, required: true
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // province - computed: true, optional: true, required: false
  private _province?: string; 
  public get province() {
    return this.getStringAttribute('province');
  }
  public set province(value: string) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // signature_algorithm - computed: true, optional: true, required: false
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeout_seconds - computed: true, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._altNames),
      application_id: cdktf.stringToTerraform(this._applicationId),
      common_name: cdktf.stringToTerraform(this._commonName),
      country: cdktf.stringToTerraform(this._country),
      csr: cdktf.stringToTerraform(this._csr),
      domain_components: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainComponents),
      extended_key_usages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extendedKeyUsages),
      key_algorithm: cdktf.stringToTerraform(this._keyAlgorithm),
      key_usages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyUsages),
      locality: cdktf.stringToTerraform(this._locality),
      organization: cdktf.stringToTerraform(this._organization),
      ou: cdktf.stringToTerraform(this._ou),
      profile_id: cdktf.stringToTerraform(this._profileId),
      province: cdktf.stringToTerraform(this._province),
      signature_algorithm: cdktf.stringToTerraform(this._signatureAlgorithm),
      timeout_seconds: cdktf.numberToTerraform(this._timeoutSeconds),
      ttl: cdktf.stringToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alt_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._altNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      common_name: {
        value: cdktf.stringToHclTerraform(this._commonName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csr: {
        value: cdktf.stringToHclTerraform(this._csr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_components: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainComponents),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      extended_key_usages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extendedKeyUsages),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      key_algorithm: {
        value: cdktf.stringToHclTerraform(this._keyAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_usages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keyUsages),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      locality: {
        value: cdktf.stringToHclTerraform(this._locality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ou: {
        value: cdktf.stringToHclTerraform(this._ou),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_id: {
        value: cdktf.stringToHclTerraform(this._profileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      province: {
        value: cdktf.stringToHclTerraform(this._province),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature_algorithm: {
        value: cdktf.stringToHclTerraform(this._signatureAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._timeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl: {
        value: cdktf.stringToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
