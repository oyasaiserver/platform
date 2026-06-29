// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OauthClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#account_id OauthClient#account_id}
  */
  readonly accountId: string;
  /**
  * Array of allowed CORS origins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#allowed_cors_origins OauthClient#allowed_cors_origins}
  */
  readonly allowedCorsOrigins?: string[];
  /**
  * Human-readable name of the OAuth client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#client_name OauthClient#client_name}
  */
  readonly clientName: string;
  /**
  * URL of the home page of the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#client_uri OauthClient#client_uri}
  */
  readonly clientUri?: string;
  /**
  * Array of OAuth grant types the client is allowed to use. `authorization_code` is required; `refresh_token` may be included optionally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#grant_types OauthClient#grant_types}
  */
  readonly grantTypes: string[];
  /**
  * URL of the client's logo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#logo_uri OauthClient#logo_uri}
  */
  readonly logoUri?: string;
  /**
  * The unique identifier for an OAuth client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#oauth_client_id OauthClient#oauth_client_id}
  */
  readonly oauthClientId?: string;
  /**
  * URL that points to a privacy policy document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#policy_uri OauthClient#policy_uri}
  */
  readonly policyUri?: string;
  /**
  * Array of allowed post-logout redirect URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#post_logout_redirect_uris OauthClient#post_logout_redirect_uris}
  */
  readonly postLogoutRedirectUris?: string[];
  /**
  * Array of allowed redirect URIs for the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#redirect_uris OauthClient#redirect_uris}
  */
  readonly redirectUris: string[];
  /**
  * Array of OAuth response types the client is allowed to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#response_types OauthClient#response_types}
  */
  readonly responseTypes: string[];
  /**
  * Array of OAuth scopes the client is allowed to request. Colon-delimited scopes are not accepted. Dot-delimited scopes are validated against available OAuth API scopes; simple identity scopes are allowed. Protocol scopes `offline_access` and `openid` are added or removed automatically based on `grant_types` and `response_types`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#scopes OauthClient#scopes}
  */
  readonly scopes: string[];
  /**
  * The authentication method the client uses at the token endpoint.
  * Available values: "none", "client_secret_basic", "client_secret_post".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#token_endpoint_auth_method OauthClient#token_endpoint_auth_method}
  */
  readonly tokenEndpointAuthMethod: string;
  /**
  * URL that points to a terms of service document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#tos_uri OauthClient#tos_uri}
  */
  readonly tosUri?: string;
  /**
  * Promote the OAuth client from private to public visibility. Only `public` is accepted; demotion to `private` is not supported. Promotion requires a non-empty client name, logo URI, verified client URI host, and at least one non-identity scope.
  * Available values: "public".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#visibility OauthClient#visibility}
  */
  readonly visibility?: string;
}
export interface OauthClientClientUriVerification {
}

export function oauthClientClientUriVerificationToTerraform(struct?: OauthClientClientUriVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthClientClientUriVerificationToHclTerraform(struct?: OauthClientClientUriVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthClientClientUriVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthClientClientUriVerification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthClientClientUriVerification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client cloudflare_oauth_client}
*/
export class OauthClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_oauth_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OauthClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OauthClient to import
  * @param importFromId The id of the existing OauthClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OauthClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_oauth_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client cloudflare_oauth_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OauthClientConfig
  */
  public constructor(scope: Construct, id: string, config: OauthClientConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_oauth_client',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.21.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._allowedCorsOrigins = config.allowedCorsOrigins;
    this._clientName = config.clientName;
    this._clientUri = config.clientUri;
    this._grantTypes = config.grantTypes;
    this._logoUri = config.logoUri;
    this._oauthClientId = config.oauthClientId;
    this._policyUri = config.policyUri;
    this._postLogoutRedirectUris = config.postLogoutRedirectUris;
    this._redirectUris = config.redirectUris;
    this._responseTypes = config.responseTypes;
    this._scopes = config.scopes;
    this._tokenEndpointAuthMethod = config.tokenEndpointAuthMethod;
    this._tosUri = config.tosUri;
    this._visibility = config.visibility;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // allowed_cors_origins - computed: false, optional: true, required: false
  private _allowedCorsOrigins?: string[]; 
  public get allowedCorsOrigins() {
    return this.getListAttribute('allowed_cors_origins');
  }
  public set allowedCorsOrigins(value: string[]) {
    this._allowedCorsOrigins = value;
  }
  public resetAllowedCorsOrigins() {
    this._allowedCorsOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCorsOriginsInput() {
    return this._allowedCorsOrigins;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_name - computed: false, optional: false, required: true
  private _clientName?: string; 
  public get clientName() {
    return this.getStringAttribute('client_name');
  }
  public set clientName(value: string) {
    this._clientName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNameInput() {
    return this._clientName;
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_uri - computed: false, optional: true, required: false
  private _clientUri?: string; 
  public get clientUri() {
    return this.getStringAttribute('client_uri');
  }
  public set clientUri(value: string) {
    this._clientUri = value;
  }
  public resetClientUri() {
    this._clientUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientUriInput() {
    return this._clientUri;
  }

  // client_uri_verification - computed: true, optional: false, required: false
  private _clientUriVerification = new OauthClientClientUriVerificationOutputReference(this, "client_uri_verification");
  public get clientUriVerification() {
    return this._clientUriVerification;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // grant_types - computed: false, optional: false, required: true
  private _grantTypes?: string[]; 
  public get grantTypes() {
    return this.getListAttribute('grant_types');
  }
  public set grantTypes(value: string[]) {
    this._grantTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypesInput() {
    return this._grantTypes;
  }

  // has_rotated_secret - computed: true, optional: false, required: false
  public get hasRotatedSecret() {
    return this.getBooleanAttribute('has_rotated_secret');
  }

  // logo_uri - computed: false, optional: true, required: false
  private _logoUri?: string; 
  public get logoUri() {
    return this.getStringAttribute('logo_uri');
  }
  public set logoUri(value: string) {
    this._logoUri = value;
  }
  public resetLogoUri() {
    this._logoUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoUriInput() {
    return this._logoUri;
  }

  // oauth_client_id - computed: false, optional: true, required: false
  private _oauthClientId?: string; 
  public get oauthClientId() {
    return this.getStringAttribute('oauth_client_id');
  }
  public set oauthClientId(value: string) {
    this._oauthClientId = value;
  }
  public resetOauthClientId() {
    this._oauthClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientIdInput() {
    return this._oauthClientId;
  }

  // policy_uri - computed: false, optional: true, required: false
  private _policyUri?: string; 
  public get policyUri() {
    return this.getStringAttribute('policy_uri');
  }
  public set policyUri(value: string) {
    this._policyUri = value;
  }
  public resetPolicyUri() {
    this._policyUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyUriInput() {
    return this._policyUri;
  }

  // post_logout_redirect_uris - computed: false, optional: true, required: false
  private _postLogoutRedirectUris?: string[]; 
  public get postLogoutRedirectUris() {
    return this.getListAttribute('post_logout_redirect_uris');
  }
  public set postLogoutRedirectUris(value: string[]) {
    this._postLogoutRedirectUris = value;
  }
  public resetPostLogoutRedirectUris() {
    this._postLogoutRedirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postLogoutRedirectUrisInput() {
    return this._postLogoutRedirectUris;
  }

  // promoted_at - computed: true, optional: false, required: false
  public get promotedAt() {
    return this.getStringAttribute('promoted_at');
  }

  // redirect_uris - computed: false, optional: false, required: true
  private _redirectUris?: string[]; 
  public get redirectUris() {
    return this.getListAttribute('redirect_uris');
  }
  public set redirectUris(value: string[]) {
    this._redirectUris = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrisInput() {
    return this._redirectUris;
  }

  // response_types - computed: false, optional: false, required: true
  private _responseTypes?: string[]; 
  public get responseTypes() {
    return this.getListAttribute('response_types');
  }
  public set responseTypes(value: string[]) {
    this._responseTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypesInput() {
    return this._responseTypes;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // token_endpoint_auth_method - computed: false, optional: false, required: true
  private _tokenEndpointAuthMethod?: string; 
  public get tokenEndpointAuthMethod() {
    return this.getStringAttribute('token_endpoint_auth_method');
  }
  public set tokenEndpointAuthMethod(value: string) {
    this._tokenEndpointAuthMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointAuthMethodInput() {
    return this._tokenEndpointAuthMethod;
  }

  // tos_uri - computed: false, optional: true, required: false
  private _tosUri?: string; 
  public get tosUri() {
    return this.getStringAttribute('tos_uri');
  }
  public set tosUri(value: string) {
    this._tosUri = value;
  }
  public resetTosUri() {
    this._tosUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosUriInput() {
    return this._tosUri;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      allowed_cors_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedCorsOrigins),
      client_name: cdktf.stringToTerraform(this._clientName),
      client_uri: cdktf.stringToTerraform(this._clientUri),
      grant_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._grantTypes),
      logo_uri: cdktf.stringToTerraform(this._logoUri),
      oauth_client_id: cdktf.stringToTerraform(this._oauthClientId),
      policy_uri: cdktf.stringToTerraform(this._policyUri),
      post_logout_redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._postLogoutRedirectUris),
      redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redirectUris),
      response_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._responseTypes),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      token_endpoint_auth_method: cdktf.stringToTerraform(this._tokenEndpointAuthMethod),
      tos_uri: cdktf.stringToTerraform(this._tosUri),
      visibility: cdktf.stringToTerraform(this._visibility),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_cors_origins: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedCorsOrigins),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      client_name: {
        value: cdktf.stringToHclTerraform(this._clientName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_uri: {
        value: cdktf.stringToHclTerraform(this._clientUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grant_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._grantTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      logo_uri: {
        value: cdktf.stringToHclTerraform(this._logoUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_client_id: {
        value: cdktf.stringToHclTerraform(this._oauthClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_uri: {
        value: cdktf.stringToHclTerraform(this._policyUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_logout_redirect_uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._postLogoutRedirectUris),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      redirect_uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._redirectUris),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      response_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._responseTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      token_endpoint_auth_method: {
        value: cdktf.stringToHclTerraform(this._tokenEndpointAuthMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tos_uri: {
        value: cdktf.stringToHclTerraform(this._tosUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
