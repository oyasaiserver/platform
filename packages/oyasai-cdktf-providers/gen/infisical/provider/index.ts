// https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InfisicalProviderConfig {
  /**
  * The configuration values for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs#auth InfisicalProvider#auth}
  */
  readonly auth?: InfisicalProviderAuth;
  /**
  * (DEPRECATED, Use the `auth` attribute), Machine identity client ID. Used to fetch/modify secrets for a given project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs#client_id InfisicalProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * (DEPRECATED, use `auth` attribute), Machine identity client secret. Used to fetch/modify secrets for a given project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs#client_secret InfisicalProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Used to point the client to fetch secrets from your self hosted instance of Infisical. If not host is provided, https://app.infisical.com is the default host. This attribute can also be set using the `INFISICAL_HOST` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs#host InfisicalProvider#host}
  */
  readonly host?: string;
  /**
  *  (DEPRECATED, Use machine identity auth), Used to fetch/modify secrets for a given project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs#service_token InfisicalProvider#service_token}
  */
  readonly serviceToken?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs#alias InfisicalProvider#alias}
  */
  readonly alias?: string;
}
export interface InfisicalProviderAuthAwsIam {
  /**
  * Machine identity ID. This attribute can also be set using the `INFISICAL_MACHINE_IDENTITY_ID` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs#identity_id InfisicalProvider#identity_id}
  */
  readonly identityId?: string;
}

export function infisicalProviderAuthAwsIamToTerraform(struct?: InfisicalProviderAuthAwsIam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_id: cdktf.stringToTerraform(struct!.identityId),
  }
}


export function infisicalProviderAuthAwsIamToHclTerraform(struct?: InfisicalProviderAuthAwsIam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_id: {
      value: cdktf.stringToHclTerraform(struct!.identityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface InfisicalProviderAuthKubernetes {
  /**
  * Machine identity ID. This attribute can also be set using the `INFISICAL_MACHINE_IDENTITY_ID` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs#identity_id InfisicalProvider#identity_id}
  */
  readonly identityId?: string;
  /**
  * The service account token. This attribute can also be set using the `INFISICAL_KUBERNETES_SERVICE_ACCOUNT_TOKEN` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs#service_account_token InfisicalProvider#service_account_token}
  */
  readonly serviceAccountToken?: string;
  /**
  * The path to the service account token. This attribute can also be set using the `INFISICAL_KUBERNETES_SERVICE_ACCOUNT_TOKEN_PATH` environment variable. Default is `/var/run/secrets/kubernetes.io/serviceaccount/token`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs#service_account_token_path InfisicalProvider#service_account_token_path}
  */
  readonly serviceAccountTokenPath?: string;
}

export function infisicalProviderAuthKubernetesToTerraform(struct?: InfisicalProviderAuthKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_id: cdktf.stringToTerraform(struct!.identityId),
    service_account_token: cdktf.stringToTerraform(struct!.serviceAccountToken),
    service_account_token_path: cdktf.stringToTerraform(struct!.serviceAccountTokenPath),
  }
}


export function infisicalProviderAuthKubernetesToHclTerraform(struct?: InfisicalProviderAuthKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_id: {
      value: cdktf.stringToHclTerraform(struct!.identityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_token: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_token_path: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountTokenPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface InfisicalProviderAuthOidc {
  /**
  * Machine identity ID. This attribute can also be set using the `INFISICAL_MACHINE_IDENTITY_ID` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs#identity_id InfisicalProvider#identity_id}
  */
  readonly identityId?: string;
  /**
  * The environment variable name for the OIDC JWT token. This attribute can also be set using the `INFISICAL_OIDC_AUTH_TOKEN_KEY_NAME` environment variable. Default is `INFISICAL_AUTH_JWT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs#token_environment_variable_name InfisicalProvider#token_environment_variable_name}
  */
  readonly tokenEnvironmentVariableName?: string;
}

export function infisicalProviderAuthOidcToTerraform(struct?: InfisicalProviderAuthOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_id: cdktf.stringToTerraform(struct!.identityId),
    token_environment_variable_name: cdktf.stringToTerraform(struct!.tokenEnvironmentVariableName),
  }
}


export function infisicalProviderAuthOidcToHclTerraform(struct?: InfisicalProviderAuthOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_id: {
      value: cdktf.stringToHclTerraform(struct!.identityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_environment_variable_name: {
      value: cdktf.stringToHclTerraform(struct!.tokenEnvironmentVariableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface InfisicalProviderAuthUniversal {
  /**
  * Machine identity client ID. This attribute can also be set using the `INFISICAL_UNIVERSAL_AUTH_CLIENT_ID` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs#client_id InfisicalProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Machine identity client secret. This attribute can also be set using the `INFISICAL_UNIVERSAL_AUTH_CLIENT_SECRET` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs#client_secret InfisicalProvider#client_secret}
  */
  readonly clientSecret?: string;
}

export function infisicalProviderAuthUniversalToTerraform(struct?: InfisicalProviderAuthUniversal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function infisicalProviderAuthUniversalToHclTerraform(struct?: InfisicalProviderAuthUniversal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface InfisicalProviderAuth {
  /**
  * The configuration values for AWS IAM Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs#aws_iam InfisicalProvider#aws_iam}
  */
  readonly awsIam?: InfisicalProviderAuthAwsIam;
  /**
  * The configuration values for Kubernetes Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs#kubernetes InfisicalProvider#kubernetes}
  */
  readonly kubernetes?: InfisicalProviderAuthKubernetes;
  /**
  * The configuration values for OIDC Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs#oidc InfisicalProvider#oidc}
  */
  readonly oidc?: InfisicalProviderAuthOidc;
  /**
  * When set, this will scope the login session to the specified organization the machine identity has access to. If left empty, the session defaults to the organization where the machine identity was created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs#organization_slug InfisicalProvider#organization_slug}
  */
  readonly organizationSlug?: string;
  /**
  * The authentication token for Machine Identity Token Auth. This attribute can also be set using the `INFISICAL_TOKEN` environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs#token InfisicalProvider#token}
  */
  readonly token?: string;
  /**
  * The configuration values for Universal Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs#universal InfisicalProvider#universal}
  */
  readonly universal?: InfisicalProviderAuthUniversal;
}

export function infisicalProviderAuthToTerraform(struct?: InfisicalProviderAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_iam: infisicalProviderAuthAwsIamToTerraform(struct!.awsIam),
    kubernetes: infisicalProviderAuthKubernetesToTerraform(struct!.kubernetes),
    oidc: infisicalProviderAuthOidcToTerraform(struct!.oidc),
    organization_slug: cdktf.stringToTerraform(struct!.organizationSlug),
    token: cdktf.stringToTerraform(struct!.token),
    universal: infisicalProviderAuthUniversalToTerraform(struct!.universal),
  }
}


export function infisicalProviderAuthToHclTerraform(struct?: InfisicalProviderAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_iam: {
      value: infisicalProviderAuthAwsIamToHclTerraform(struct!.awsIam),
      isBlock: true,
      type: "struct",
      storageClassType: "InfisicalProviderAuthAwsIam",
    },
    kubernetes: {
      value: infisicalProviderAuthKubernetesToHclTerraform(struct!.kubernetes),
      isBlock: true,
      type: "struct",
      storageClassType: "InfisicalProviderAuthKubernetes",
    },
    oidc: {
      value: infisicalProviderAuthOidcToHclTerraform(struct!.oidc),
      isBlock: true,
      type: "struct",
      storageClassType: "InfisicalProviderAuthOidc",
    },
    organization_slug: {
      value: cdktf.stringToHclTerraform(struct!.organizationSlug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    universal: {
      value: infisicalProviderAuthUniversalToHclTerraform(struct!.universal),
      isBlock: true,
      type: "struct",
      storageClassType: "InfisicalProviderAuthUniversal",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs infisical}
*/
export class InfisicalProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InfisicalProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InfisicalProvider to import
  * @param importFromId The id of the existing InfisicalProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InfisicalProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.35/docs infisical} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InfisicalProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: InfisicalProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'infisical',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.16.35'
      },
      terraformProviderSource: 'infisical/infisical'
    });
    this._auth = config.auth;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._host = config.host;
    this._serviceToken = config.serviceToken;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth - computed: false, optional: true, required: false
  private _auth?: InfisicalProviderAuth; 
  public get auth() {
    return this._auth;
  }
  public set auth(value: InfisicalProviderAuth | undefined) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string | undefined) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // service_token - computed: false, optional: true, required: false
  private _serviceToken?: string; 
  public get serviceToken() {
    return this._serviceToken;
  }
  public set serviceToken(value: string | undefined) {
    this._serviceToken = value;
  }
  public resetServiceToken() {
    this._serviceToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTokenInput() {
    return this._serviceToken;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth: infisicalProviderAuthToTerraform(this._auth),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      host: cdktf.stringToTerraform(this._host),
      service_token: cdktf.stringToTerraform(this._serviceToken),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth: {
        value: infisicalProviderAuthToHclTerraform(this._auth),
        isBlock: true,
        type: "struct",
        storageClassType: "InfisicalProviderAuth",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_token: {
        value: cdktf.stringToHclTerraform(this._serviceToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
