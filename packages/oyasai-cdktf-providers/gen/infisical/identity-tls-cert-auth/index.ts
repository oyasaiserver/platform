// https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/identity_tls_cert_auth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityTlsCertAuthConfig extends cdktf.TerraformMetaArguments {
  /**
  * The maximum lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/identity_tls_cert_auth#access_token_max_ttl IdentityTlsCertAuth#access_token_max_ttl}
  */
  readonly accessTokenMaxTtl?: number;
  /**
  * The maximum number of times that an access token can be used; a value of 0 implies infinite number of uses. Default:0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/identity_tls_cert_auth#access_token_num_uses_limit IdentityTlsCertAuth#access_token_num_uses_limit}
  */
  readonly accessTokenNumUsesLimit?: number;
  /**
  * A list of IPs or CIDR ranges that access tokens can be used from. You can use 0.0.0.0/0, to allow usage from any network address..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/identity_tls_cert_auth#access_token_trusted_ips IdentityTlsCertAuth#access_token_trusted_ips}
  */
  readonly accessTokenTrustedIps?: IdentityTlsCertAuthAccessTokenTrustedIps[] | cdktf.IResolvable;
  /**
  * The lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/identity_tls_cert_auth#access_token_ttl IdentityTlsCertAuth#access_token_ttl}
  */
  readonly accessTokenTtl?: number;
  /**
  * List of trusted common names that client certificates must have to authenticate with Infisical. When omitted, any common name is accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/identity_tls_cert_auth#allowed_common_names IdentityTlsCertAuth#allowed_common_names}
  */
  readonly allowedCommonNames?: string[];
  /**
  * List of trusted subject alternative names that client certificates must have to authenticate with Infisical. Non-DNS entries must be prefixed with their type (e.g. `URI:spiffe://example.org/service`, `IP:10.0.0.1`, `EMAIL:svc@example.com`). When omitted, any subject alternative name is accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/identity_tls_cert_auth#allowed_subject_alt_names IdentityTlsCertAuth#allowed_subject_alt_names}
  */
  readonly allowedSubjectAltNames?: string[];
  /**
  * The PEM-encoded CA certificate that client certificates must be issued by to authenticate with Infisical.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/identity_tls_cert_auth#ca_certificate IdentityTlsCertAuth#ca_certificate}
  */
  readonly caCertificate: string;
  /**
  * The ID of the identity to attach the configuration onto.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/identity_tls_cert_auth#identity_id IdentityTlsCertAuth#identity_id}
  */
  readonly identityId: string;
  /**
  * Whether to build and verify the full certificate chain presented by the client up to the configured CA certificate, instead of requiring the client certificate to be signed directly by it. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/identity_tls_cert_auth#verify_client_certificate_chain IdentityTlsCertAuth#verify_client_certificate_chain}
  */
  readonly verifyClientCertificateChain?: boolean | cdktf.IResolvable;
}
export interface IdentityTlsCertAuthAccessTokenTrustedIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/identity_tls_cert_auth#ip_address IdentityTlsCertAuth#ip_address}
  */
  readonly ipAddress?: string;
}

export function identityTlsCertAuthAccessTokenTrustedIpsToTerraform(struct?: IdentityTlsCertAuthAccessTokenTrustedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function identityTlsCertAuthAccessTokenTrustedIpsToHclTerraform(struct?: IdentityTlsCertAuthAccessTokenTrustedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityTlsCertAuthAccessTokenTrustedIpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IdentityTlsCertAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityTlsCertAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
    }
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}

export class IdentityTlsCertAuthAccessTokenTrustedIpsList extends cdktf.ComplexList {
  public internalValue? : IdentityTlsCertAuthAccessTokenTrustedIps[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IdentityTlsCertAuthAccessTokenTrustedIpsOutputReference {
    return new IdentityTlsCertAuthAccessTokenTrustedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/identity_tls_cert_auth infisical_identity_tls_cert_auth}
*/
export class IdentityTlsCertAuth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_identity_tls_cert_auth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityTlsCertAuth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityTlsCertAuth to import
  * @param importFromId The id of the existing IdentityTlsCertAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/identity_tls_cert_auth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityTlsCertAuth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_tls_cert_auth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/identity_tls_cert_auth infisical_identity_tls_cert_auth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityTlsCertAuthConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityTlsCertAuthConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_identity_tls_cert_auth',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.19.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessTokenMaxTtl = config.accessTokenMaxTtl;
    this._accessTokenNumUsesLimit = config.accessTokenNumUsesLimit;
    this._accessTokenTrustedIps.internalValue = config.accessTokenTrustedIps;
    this._accessTokenTtl = config.accessTokenTtl;
    this._allowedCommonNames = config.allowedCommonNames;
    this._allowedSubjectAltNames = config.allowedSubjectAltNames;
    this._caCertificate = config.caCertificate;
    this._identityId = config.identityId;
    this._verifyClientCertificateChain = config.verifyClientCertificateChain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_max_ttl - computed: true, optional: true, required: false
  private _accessTokenMaxTtl?: number; 
  public get accessTokenMaxTtl() {
    return this.getNumberAttribute('access_token_max_ttl');
  }
  public set accessTokenMaxTtl(value: number) {
    this._accessTokenMaxTtl = value;
  }
  public resetAccessTokenMaxTtl() {
    this._accessTokenMaxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenMaxTtlInput() {
    return this._accessTokenMaxTtl;
  }

  // access_token_num_uses_limit - computed: true, optional: true, required: false
  private _accessTokenNumUsesLimit?: number; 
  public get accessTokenNumUsesLimit() {
    return this.getNumberAttribute('access_token_num_uses_limit');
  }
  public set accessTokenNumUsesLimit(value: number) {
    this._accessTokenNumUsesLimit = value;
  }
  public resetAccessTokenNumUsesLimit() {
    this._accessTokenNumUsesLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenNumUsesLimitInput() {
    return this._accessTokenNumUsesLimit;
  }

  // access_token_trusted_ips - computed: true, optional: true, required: false
  private _accessTokenTrustedIps = new IdentityTlsCertAuthAccessTokenTrustedIpsList(this, "access_token_trusted_ips", false);
  public get accessTokenTrustedIps() {
    return this._accessTokenTrustedIps;
  }
  public putAccessTokenTrustedIps(value: IdentityTlsCertAuthAccessTokenTrustedIps[] | cdktf.IResolvable) {
    this._accessTokenTrustedIps.internalValue = value;
  }
  public resetAccessTokenTrustedIps() {
    this._accessTokenTrustedIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenTrustedIpsInput() {
    return this._accessTokenTrustedIps.internalValue;
  }

  // access_token_ttl - computed: true, optional: true, required: false
  private _accessTokenTtl?: number; 
  public get accessTokenTtl() {
    return this.getNumberAttribute('access_token_ttl');
  }
  public set accessTokenTtl(value: number) {
    this._accessTokenTtl = value;
  }
  public resetAccessTokenTtl() {
    this._accessTokenTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenTtlInput() {
    return this._accessTokenTtl;
  }

  // allowed_common_names - computed: false, optional: true, required: false
  private _allowedCommonNames?: string[]; 
  public get allowedCommonNames() {
    return this.getListAttribute('allowed_common_names');
  }
  public set allowedCommonNames(value: string[]) {
    this._allowedCommonNames = value;
  }
  public resetAllowedCommonNames() {
    this._allowedCommonNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCommonNamesInput() {
    return this._allowedCommonNames;
  }

  // allowed_subject_alt_names - computed: false, optional: true, required: false
  private _allowedSubjectAltNames?: string[]; 
  public get allowedSubjectAltNames() {
    return this.getListAttribute('allowed_subject_alt_names');
  }
  public set allowedSubjectAltNames(value: string[]) {
    this._allowedSubjectAltNames = value;
  }
  public resetAllowedSubjectAltNames() {
    this._allowedSubjectAltNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSubjectAltNamesInput() {
    return this._allowedSubjectAltNames;
  }

  // ca_certificate - computed: false, optional: false, required: true
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_id - computed: false, optional: false, required: true
  private _identityId?: string; 
  public get identityId() {
    return this.getStringAttribute('identity_id');
  }
  public set identityId(value: string) {
    this._identityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdInput() {
    return this._identityId;
  }

  // verify_client_certificate_chain - computed: true, optional: true, required: false
  private _verifyClientCertificateChain?: boolean | cdktf.IResolvable; 
  public get verifyClientCertificateChain() {
    return this.getBooleanAttribute('verify_client_certificate_chain');
  }
  public set verifyClientCertificateChain(value: boolean | cdktf.IResolvable) {
    this._verifyClientCertificateChain = value;
  }
  public resetVerifyClientCertificateChain() {
    this._verifyClientCertificateChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyClientCertificateChainInput() {
    return this._verifyClientCertificateChain;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_max_ttl: cdktf.numberToTerraform(this._accessTokenMaxTtl),
      access_token_num_uses_limit: cdktf.numberToTerraform(this._accessTokenNumUsesLimit),
      access_token_trusted_ips: cdktf.listMapper(identityTlsCertAuthAccessTokenTrustedIpsToTerraform, false)(this._accessTokenTrustedIps.internalValue),
      access_token_ttl: cdktf.numberToTerraform(this._accessTokenTtl),
      allowed_common_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedCommonNames),
      allowed_subject_alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedSubjectAltNames),
      ca_certificate: cdktf.stringToTerraform(this._caCertificate),
      identity_id: cdktf.stringToTerraform(this._identityId),
      verify_client_certificate_chain: cdktf.booleanToTerraform(this._verifyClientCertificateChain),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_max_ttl: {
        value: cdktf.numberToHclTerraform(this._accessTokenMaxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      access_token_num_uses_limit: {
        value: cdktf.numberToHclTerraform(this._accessTokenNumUsesLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      access_token_trusted_ips: {
        value: cdktf.listMapperHcl(identityTlsCertAuthAccessTokenTrustedIpsToHclTerraform, false)(this._accessTokenTrustedIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityTlsCertAuthAccessTokenTrustedIpsList",
      },
      access_token_ttl: {
        value: cdktf.numberToHclTerraform(this._accessTokenTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allowed_common_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedCommonNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allowed_subject_alt_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedSubjectAltNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ca_certificate: {
        value: cdktf.stringToHclTerraform(this._caCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_id: {
        value: cdktf.stringToHclTerraform(this._identityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_client_certificate_chain: {
        value: cdktf.booleanToHclTerraform(this._verifyClientCertificateChain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
