// https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/identity_jwt_auth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityJwtAuthConfig extends cdktf.TerraformMetaArguments {
  /**
  * The maximum lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/identity_jwt_auth#access_token_max_ttl IdentityJwtAuth#access_token_max_ttl}
  */
  readonly accessTokenMaxTtl?: number;
  /**
  * The maximum number of times that an access token can be used; a value of 0 implies infinite number of uses. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/identity_jwt_auth#access_token_num_uses_limit IdentityJwtAuth#access_token_num_uses_limit}
  */
  readonly accessTokenNumUsesLimit?: number;
  /**
  * A list of IPs or CIDR ranges that access tokens can be used from. You can use 0.0.0.0/0, to allow usage from any network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/identity_jwt_auth#access_token_trusted_ips IdentityJwtAuth#access_token_trusted_ips}
  */
  readonly accessTokenTrustedIps?: IdentityJwtAuthAccessTokenTrustedIps[] | cdktf.IResolvable;
  /**
  * The lifetime for an access token in seconds. This value will be referenced at renewal time. Default: 2592000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/identity_jwt_auth#access_token_ttl IdentityJwtAuth#access_token_ttl}
  */
  readonly accessTokenTtl?: number;
  /**
  * The list of intended recipients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/identity_jwt_auth#bound_audiences IdentityJwtAuth#bound_audiences}
  */
  readonly boundAudiences?: string[];
  /**
  * The attributes that should be present in the JWT for it to be valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/identity_jwt_auth#bound_claims IdentityJwtAuth#bound_claims}
  */
  readonly boundClaims?: { [key: string]: string };
  /**
  * The unique identifier of the identity provider issuing the JWTs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/identity_jwt_auth#bound_issuer IdentityJwtAuth#bound_issuer}
  */
  readonly boundIssuer?: string;
  /**
  * The expected principal that is the subject of the JWT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/identity_jwt_auth#bound_subject IdentityJwtAuth#bound_subject}
  */
  readonly boundSubject?: string;
  /**
  * The configuration type of the JWT auth. Must be 'jwks' or 'static'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/identity_jwt_auth#configuration_type IdentityJwtAuth#configuration_type}
  */
  readonly configurationType: string;
  /**
  * The ID of the identity to attach the configuration onto.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/identity_jwt_auth#identity_id IdentityJwtAuth#identity_id}
  */
  readonly identityId: string;
  /**
  * The PEM-encoded CA certificate for validating the TLS connection to the JWKS URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/identity_jwt_auth#jwks_ca_cert IdentityJwtAuth#jwks_ca_cert}
  */
  readonly jwksCaCert?: string;
  /**
  * The URL used to retrieve the JSON Web Key Set (JWKS) for verifying JWTs. Required when configuration_type is 'jwks'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/identity_jwt_auth#jwks_url IdentityJwtAuth#jwks_url}
  */
  readonly jwksUrl?: string;
  /**
  * A list of PEM-encoded public keys used to verify JWTs. Required when configuration_type is 'static'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/identity_jwt_auth#public_keys IdentityJwtAuth#public_keys}
  */
  readonly publicKeys?: string[];
}
export interface IdentityJwtAuthAccessTokenTrustedIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/identity_jwt_auth#ip_address IdentityJwtAuth#ip_address}
  */
  readonly ipAddress?: string;
}

export function identityJwtAuthAccessTokenTrustedIpsToTerraform(struct?: IdentityJwtAuthAccessTokenTrustedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function identityJwtAuthAccessTokenTrustedIpsToHclTerraform(struct?: IdentityJwtAuthAccessTokenTrustedIps | cdktf.IResolvable): any {
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

export class IdentityJwtAuthAccessTokenTrustedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityJwtAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityJwtAuthAccessTokenTrustedIps | cdktf.IResolvable | undefined) {
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

export class IdentityJwtAuthAccessTokenTrustedIpsList extends cdktf.ComplexList {
  public internalValue? : IdentityJwtAuthAccessTokenTrustedIps[] | cdktf.IResolvable

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
  public get(index: number): IdentityJwtAuthAccessTokenTrustedIpsOutputReference {
    return new IdentityJwtAuthAccessTokenTrustedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/identity_jwt_auth infisical_identity_jwt_auth}
*/
export class IdentityJwtAuth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_identity_jwt_auth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityJwtAuth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityJwtAuth to import
  * @param importFromId The id of the existing IdentityJwtAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/identity_jwt_auth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityJwtAuth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_jwt_auth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/identity_jwt_auth infisical_identity_jwt_auth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityJwtAuthConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityJwtAuthConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_identity_jwt_auth',
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
    this._accessTokenMaxTtl = config.accessTokenMaxTtl;
    this._accessTokenNumUsesLimit = config.accessTokenNumUsesLimit;
    this._accessTokenTrustedIps.internalValue = config.accessTokenTrustedIps;
    this._accessTokenTtl = config.accessTokenTtl;
    this._boundAudiences = config.boundAudiences;
    this._boundClaims = config.boundClaims;
    this._boundIssuer = config.boundIssuer;
    this._boundSubject = config.boundSubject;
    this._configurationType = config.configurationType;
    this._identityId = config.identityId;
    this._jwksCaCert = config.jwksCaCert;
    this._jwksUrl = config.jwksUrl;
    this._publicKeys = config.publicKeys;
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
  private _accessTokenTrustedIps = new IdentityJwtAuthAccessTokenTrustedIpsList(this, "access_token_trusted_ips", false);
  public get accessTokenTrustedIps() {
    return this._accessTokenTrustedIps;
  }
  public putAccessTokenTrustedIps(value: IdentityJwtAuthAccessTokenTrustedIps[] | cdktf.IResolvable) {
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

  // bound_issuer - computed: true, optional: true, required: false
  private _boundIssuer?: string; 
  public get boundIssuer() {
    return this.getStringAttribute('bound_issuer');
  }
  public set boundIssuer(value: string) {
    this._boundIssuer = value;
  }
  public resetBoundIssuer() {
    this._boundIssuer = undefined;
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

  // configuration_type - computed: false, optional: false, required: true
  private _configurationType?: string; 
  public get configurationType() {
    return this.getStringAttribute('configuration_type');
  }
  public set configurationType(value: string) {
    this._configurationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationTypeInput() {
    return this._configurationType;
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

  // jwks_ca_cert - computed: true, optional: true, required: false
  private _jwksCaCert?: string; 
  public get jwksCaCert() {
    return this.getStringAttribute('jwks_ca_cert');
  }
  public set jwksCaCert(value: string) {
    this._jwksCaCert = value;
  }
  public resetJwksCaCert() {
    this._jwksCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksCaCertInput() {
    return this._jwksCaCert;
  }

  // jwks_url - computed: true, optional: true, required: false
  private _jwksUrl?: string; 
  public get jwksUrl() {
    return this.getStringAttribute('jwks_url');
  }
  public set jwksUrl(value: string) {
    this._jwksUrl = value;
  }
  public resetJwksUrl() {
    this._jwksUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUrlInput() {
    return this._jwksUrl;
  }

  // public_keys - computed: true, optional: true, required: false
  private _publicKeys?: string[]; 
  public get publicKeys() {
    return this.getListAttribute('public_keys');
  }
  public set publicKeys(value: string[]) {
    this._publicKeys = value;
  }
  public resetPublicKeys() {
    this._publicKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeysInput() {
    return this._publicKeys;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_max_ttl: cdktf.numberToTerraform(this._accessTokenMaxTtl),
      access_token_num_uses_limit: cdktf.numberToTerraform(this._accessTokenNumUsesLimit),
      access_token_trusted_ips: cdktf.listMapper(identityJwtAuthAccessTokenTrustedIpsToTerraform, false)(this._accessTokenTrustedIps.internalValue),
      access_token_ttl: cdktf.numberToTerraform(this._accessTokenTtl),
      bound_audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundAudiences),
      bound_claims: cdktf.hashMapper(cdktf.stringToTerraform)(this._boundClaims),
      bound_issuer: cdktf.stringToTerraform(this._boundIssuer),
      bound_subject: cdktf.stringToTerraform(this._boundSubject),
      configuration_type: cdktf.stringToTerraform(this._configurationType),
      identity_id: cdktf.stringToTerraform(this._identityId),
      jwks_ca_cert: cdktf.stringToTerraform(this._jwksCaCert),
      jwks_url: cdktf.stringToTerraform(this._jwksUrl),
      public_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._publicKeys),
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
        value: cdktf.listMapperHcl(identityJwtAuthAccessTokenTrustedIpsToHclTerraform, false)(this._accessTokenTrustedIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityJwtAuthAccessTokenTrustedIpsList",
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
      configuration_type: {
        value: cdktf.stringToHclTerraform(this._configurationType),
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
      jwks_ca_cert: {
        value: cdktf.stringToHclTerraform(this._jwksCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwks_url: {
        value: cdktf.stringToHclTerraform(this._jwksUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._publicKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
