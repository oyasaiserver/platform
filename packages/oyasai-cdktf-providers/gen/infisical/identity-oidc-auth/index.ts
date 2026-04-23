// https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/identity_oidc_auth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityOidcAuthConfig extends cdktf.TerraformMetaArguments {
  /**
  * The maximum lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/identity_oidc_auth#access_token_max_ttl IdentityOidcAuth#access_token_max_ttl}
  */
  readonly accessTokenMaxTtl?: number;
  /**
  * The maximum number of times that an access token can be used; a value of 0 implies infinite number of uses. Default:0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/identity_oidc_auth#access_token_num_uses_limit IdentityOidcAuth#access_token_num_uses_limit}
  */
  readonly accessTokenNumUsesLimit?: number;
  /**
  * A list of IPs or CIDR ranges that access tokens can be used from. You can use 0.0.0.0/0, to allow usage from any network address...
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/identity_oidc_auth#access_token_trusted_ips IdentityOidcAuth#access_token_trusted_ips}
  */
  readonly accessTokenTrustedIps?: IdentityOidcAuthAccessTokenTrustedIps[] | cdktf.IResolvable;
  /**
  * The lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/identity_oidc_auth#access_token_ttl IdentityOidcAuth#access_token_ttl}
  */
  readonly accessTokenTtl?: number;
  /**
  * The comma-separated list of intended recipients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/identity_oidc_auth#bound_audiences IdentityOidcAuth#bound_audiences}
  */
  readonly boundAudiences?: string[];
  /**
  * The attributes that should be present in the JWT for it to be valid. The provided values can be a glob pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/identity_oidc_auth#bound_claims IdentityOidcAuth#bound_claims}
  */
  readonly boundClaims?: { [key: string]: string };
  /**
  * The unique identifier of the identity provider issuing the OIDC tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/identity_oidc_auth#bound_issuer IdentityOidcAuth#bound_issuer}
  */
  readonly boundIssuer: string;
  /**
  * The expected principal that is the subject of the JWT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/identity_oidc_auth#bound_subject IdentityOidcAuth#bound_subject}
  */
  readonly boundSubject?: string;
  /**
  * Map OIDC token claims to metadata fields. Example: {"role": "token.groups"}, this would become identity.metadata.oidc.claims.role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/identity_oidc_auth#claim_metadata_mapping IdentityOidcAuth#claim_metadata_mapping}
  */
  readonly claimMetadataMapping?: { [key: string]: string };
  /**
  * The ID of the identity to attach the configuration onto.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/identity_oidc_auth#identity_id IdentityOidcAuth#identity_id}
  */
  readonly identityId: string;
  /**
  * The PEM-encoded CA cert for establishing secure communication with the Identity Provider endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/identity_oidc_auth#oidc_ca_certificate IdentityOidcAuth#oidc_ca_certificate}
  */
  readonly oidcCaCertificate?: string;
  /**
  * The URL used to retrieve the OpenID Connect configuration from the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/identity_oidc_auth#oidc_discovery_url IdentityOidcAuth#oidc_discovery_url}
  */
  readonly oidcDiscoveryUrl: string;
}
export interface IdentityOidcAuthAccessTokenTrustedIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/identity_oidc_auth#ip_address IdentityOidcAuth#ip_address}
  */
  readonly ipAddress?: string;
}

export function identityOidcAuthAccessTokenTrustedIpsToTerraform(struct?: IdentityOidcAuthAccessTokenTrustedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function identityOidcAuthAccessTokenTrustedIpsToHclTerraform(struct?: IdentityOidcAuthAccessTokenTrustedIps | cdktf.IResolvable): any {
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

export class IdentityOidcAuthAccessTokenTrustedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityOidcAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityOidcAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined) {
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

export class IdentityOidcAuthAccessTokenTrustedIpsList extends cdktf.ComplexList {
  public internalValue? : IdentityOidcAuthAccessTokenTrustedIps[] | cdktf.IResolvable

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
  public get(index: number): IdentityOidcAuthAccessTokenTrustedIpsOutputReference {
    return new IdentityOidcAuthAccessTokenTrustedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/identity_oidc_auth infisical_identity_oidc_auth}
*/
export class IdentityOidcAuth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_identity_oidc_auth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityOidcAuth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityOidcAuth to import
  * @param importFromId The id of the existing IdentityOidcAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/identity_oidc_auth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityOidcAuth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_oidc_auth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/identity_oidc_auth infisical_identity_oidc_auth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityOidcAuthConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityOidcAuthConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_identity_oidc_auth',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.16.17'
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
    this._boundAudiences = config.boundAudiences;
    this._boundClaims = config.boundClaims;
    this._boundIssuer = config.boundIssuer;
    this._boundSubject = config.boundSubject;
    this._claimMetadataMapping = config.claimMetadataMapping;
    this._identityId = config.identityId;
    this._oidcCaCertificate = config.oidcCaCertificate;
    this._oidcDiscoveryUrl = config.oidcDiscoveryUrl;
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
  private _accessTokenTrustedIps = new IdentityOidcAuthAccessTokenTrustedIpsList(this, "access_token_trusted_ips", false);
  public get accessTokenTrustedIps() {
    return this._accessTokenTrustedIps;
  }
  public putAccessTokenTrustedIps(value: IdentityOidcAuthAccessTokenTrustedIps[] | cdktf.IResolvable) {
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

  // bound_audiences - computed: true, optional: true, required: false
  private _boundAudiences?: string[]; 
  public get boundAudiences() {
    return this.getListAttribute('bound_audiences');
  }
  public set boundAudiences(value: string[]) {
    this._boundAudiences = value;
  }
  public resetBoundAudiences() {
    this._boundAudiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundAudiencesInput() {
    return this._boundAudiences;
  }

  // bound_claims - computed: true, optional: true, required: false
  private _boundClaims?: { [key: string]: string }; 
  public get boundClaims() {
    return this.getStringMapAttribute('bound_claims');
  }
  public set boundClaims(value: { [key: string]: string }) {
    this._boundClaims = value;
  }
  public resetBoundClaims() {
    this._boundClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundClaimsInput() {
    return this._boundClaims;
  }

  // bound_issuer - computed: false, optional: false, required: true
  private _boundIssuer?: string; 
  public get boundIssuer() {
    return this.getStringAttribute('bound_issuer');
  }
  public set boundIssuer(value: string) {
    this._boundIssuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get boundIssuerInput() {
    return this._boundIssuer;
  }

  // bound_subject - computed: true, optional: true, required: false
  private _boundSubject?: string; 
  public get boundSubject() {
    return this.getStringAttribute('bound_subject');
  }
  public set boundSubject(value: string) {
    this._boundSubject = value;
  }
  public resetBoundSubject() {
    this._boundSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundSubjectInput() {
    return this._boundSubject;
  }

  // claim_metadata_mapping - computed: true, optional: true, required: false
  private _claimMetadataMapping?: { [key: string]: string }; 
  public get claimMetadataMapping() {
    return this.getStringMapAttribute('claim_metadata_mapping');
  }
  public set claimMetadataMapping(value: { [key: string]: string }) {
    this._claimMetadataMapping = value;
  }
  public resetClaimMetadataMapping() {
    this._claimMetadataMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimMetadataMappingInput() {
    return this._claimMetadataMapping;
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

  // oidc_ca_certificate - computed: true, optional: true, required: false
  private _oidcCaCertificate?: string; 
  public get oidcCaCertificate() {
    return this.getStringAttribute('oidc_ca_certificate');
  }
  public set oidcCaCertificate(value: string) {
    this._oidcCaCertificate = value;
  }
  public resetOidcCaCertificate() {
    this._oidcCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcCaCertificateInput() {
    return this._oidcCaCertificate;
  }

  // oidc_discovery_url - computed: false, optional: false, required: true
  private _oidcDiscoveryUrl?: string; 
  public get oidcDiscoveryUrl() {
    return this.getStringAttribute('oidc_discovery_url');
  }
  public set oidcDiscoveryUrl(value: string) {
    this._oidcDiscoveryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcDiscoveryUrlInput() {
    return this._oidcDiscoveryUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_max_ttl: cdktf.numberToTerraform(this._accessTokenMaxTtl),
      access_token_num_uses_limit: cdktf.numberToTerraform(this._accessTokenNumUsesLimit),
      access_token_trusted_ips: cdktf.listMapper(identityOidcAuthAccessTokenTrustedIpsToTerraform, false)(this._accessTokenTrustedIps.internalValue),
      access_token_ttl: cdktf.numberToTerraform(this._accessTokenTtl),
      bound_audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundAudiences),
      bound_claims: cdktf.hashMapper(cdktf.stringToTerraform)(this._boundClaims),
      bound_issuer: cdktf.stringToTerraform(this._boundIssuer),
      bound_subject: cdktf.stringToTerraform(this._boundSubject),
      claim_metadata_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(this._claimMetadataMapping),
      identity_id: cdktf.stringToTerraform(this._identityId),
      oidc_ca_certificate: cdktf.stringToTerraform(this._oidcCaCertificate),
      oidc_discovery_url: cdktf.stringToTerraform(this._oidcDiscoveryUrl),
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
        value: cdktf.listMapperHcl(identityOidcAuthAccessTokenTrustedIpsToHclTerraform, false)(this._accessTokenTrustedIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityOidcAuthAccessTokenTrustedIpsList",
      },
      access_token_ttl: {
        value: cdktf.numberToHclTerraform(this._accessTokenTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bound_audiences: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundAudiences),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      bound_claims: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._boundClaims),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      bound_issuer: {
        value: cdktf.stringToHclTerraform(this._boundIssuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bound_subject: {
        value: cdktf.stringToHclTerraform(this._boundSubject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      claim_metadata_mapping: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._claimMetadataMapping),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      identity_id: {
        value: cdktf.stringToHclTerraform(this._identityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_ca_certificate: {
        value: cdktf.stringToHclTerraform(this._oidcCaCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_discovery_url: {
        value: cdktf.stringToHclTerraform(this._oidcDiscoveryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
