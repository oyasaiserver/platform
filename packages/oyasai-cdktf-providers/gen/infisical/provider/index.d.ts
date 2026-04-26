import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface InfisicalProviderConfig {
    /**
    * The configuration values for authentication
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs#auth InfisicalProvider#auth}
    */
    readonly auth?: InfisicalProviderAuth;
    /**
    * (DEPRECATED, Use the `auth` attribute), Machine identity client ID. Used to fetch/modify secrets for a given project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs#client_id InfisicalProvider#client_id}
    */
    readonly clientId?: string;
    /**
    * (DEPRECATED, use `auth` attribute), Machine identity client secret. Used to fetch/modify secrets for a given project
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs#client_secret InfisicalProvider#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * Used to point the client to fetch secrets from your self hosted instance of Infisical. If not host is provided, https://app.infisical.com is the default host. This attribute can also be set using the `INFISICAL_HOST` environment variable
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs#host InfisicalProvider#host}
    */
    readonly host?: string;
    /**
    *  (DEPRECATED, Use machine identity auth), Used to fetch/modify secrets for a given project
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs#service_token InfisicalProvider#service_token}
    */
    readonly serviceToken?: string;
    /**
    * Alias name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs#alias InfisicalProvider#alias}
    */
    readonly alias?: string;
}
export interface InfisicalProviderAuthAwsIam {
    /**
    * Machine identity ID. This attribute can also be set using the `INFISICAL_MACHINE_IDENTITY_ID` environment variable
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs#identity_id InfisicalProvider#identity_id}
    */
    readonly identityId?: string;
}
export declare function infisicalProviderAuthAwsIamToTerraform(struct?: InfisicalProviderAuthAwsIam | cdktf.IResolvable): any;
export declare function infisicalProviderAuthAwsIamToHclTerraform(struct?: InfisicalProviderAuthAwsIam | cdktf.IResolvable): any;
export interface InfisicalProviderAuthKubernetes {
    /**
    * Machine identity ID. This attribute can also be set using the `INFISICAL_MACHINE_IDENTITY_ID` environment variable
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs#identity_id InfisicalProvider#identity_id}
    */
    readonly identityId?: string;
    /**
    * The service account token. This attribute can also be set using the `INFISICAL_KUBERNETES_SERVICE_ACCOUNT_TOKEN` environment variable
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs#service_account_token InfisicalProvider#service_account_token}
    */
    readonly serviceAccountToken?: string;
    /**
    * The path to the service account token. This attribute can also be set using the `INFISICAL_KUBERNETES_SERVICE_ACCOUNT_TOKEN_PATH` environment variable. Default is `/var/run/secrets/kubernetes.io/serviceaccount/token`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs#service_account_token_path InfisicalProvider#service_account_token_path}
    */
    readonly serviceAccountTokenPath?: string;
}
export declare function infisicalProviderAuthKubernetesToTerraform(struct?: InfisicalProviderAuthKubernetes | cdktf.IResolvable): any;
export declare function infisicalProviderAuthKubernetesToHclTerraform(struct?: InfisicalProviderAuthKubernetes | cdktf.IResolvable): any;
export interface InfisicalProviderAuthOidc {
    /**
    * Machine identity ID. This attribute can also be set using the `INFISICAL_MACHINE_IDENTITY_ID` environment variable
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs#identity_id InfisicalProvider#identity_id}
    */
    readonly identityId?: string;
    /**
    * The environment variable name for the OIDC JWT token. This attribute can also be set using the `INFISICAL_OIDC_AUTH_TOKEN_KEY_NAME` environment variable. Default is `INFISICAL_AUTH_JWT`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs#token_environment_variable_name InfisicalProvider#token_environment_variable_name}
    */
    readonly tokenEnvironmentVariableName?: string;
}
export declare function infisicalProviderAuthOidcToTerraform(struct?: InfisicalProviderAuthOidc | cdktf.IResolvable): any;
export declare function infisicalProviderAuthOidcToHclTerraform(struct?: InfisicalProviderAuthOidc | cdktf.IResolvable): any;
export interface InfisicalProviderAuthUniversal {
    /**
    * Machine identity client ID. This attribute can also be set using the `INFISICAL_UNIVERSAL_AUTH_CLIENT_ID` environment variable
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs#client_id InfisicalProvider#client_id}
    */
    readonly clientId?: string;
    /**
    * Machine identity client secret. This attribute can also be set using the `INFISICAL_UNIVERSAL_AUTH_CLIENT_SECRET` environment variable
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs#client_secret InfisicalProvider#client_secret}
    */
    readonly clientSecret?: string;
}
export declare function infisicalProviderAuthUniversalToTerraform(struct?: InfisicalProviderAuthUniversal | cdktf.IResolvable): any;
export declare function infisicalProviderAuthUniversalToHclTerraform(struct?: InfisicalProviderAuthUniversal | cdktf.IResolvable): any;
export interface InfisicalProviderAuth {
    /**
    * The configuration values for AWS IAM Auth
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs#aws_iam InfisicalProvider#aws_iam}
    */
    readonly awsIam?: InfisicalProviderAuthAwsIam;
    /**
    * The configuration values for Kubernetes Auth
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs#kubernetes InfisicalProvider#kubernetes}
    */
    readonly kubernetes?: InfisicalProviderAuthKubernetes;
    /**
    * The configuration values for OIDC Auth
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs#oidc InfisicalProvider#oidc}
    */
    readonly oidc?: InfisicalProviderAuthOidc;
    /**
    * When set, this will scope the login session to the specified organization the machine identity has access to. If left empty, the session defaults to the organization where the machine identity was created in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs#organization_slug InfisicalProvider#organization_slug}
    */
    readonly organizationSlug?: string;
    /**
    * The authentication token for Machine Identity Token Auth. This attribute can also be set using the `INFISICAL_TOKEN` environment variable
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs#token InfisicalProvider#token}
    */
    readonly token?: string;
    /**
    * The configuration values for Universal Auth
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs#universal InfisicalProvider#universal}
    */
    readonly universal?: InfisicalProviderAuthUniversal;
}
export declare function infisicalProviderAuthToTerraform(struct?: InfisicalProviderAuth | cdktf.IResolvable): any;
export declare function infisicalProviderAuthToHclTerraform(struct?: InfisicalProviderAuth | cdktf.IResolvable): any;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs infisical}
*/
export declare class InfisicalProvider extends cdktf.TerraformProvider {
    static readonly tfResourceType = "infisical";
    /**
    * Generates CDKTF code for importing a InfisicalProvider resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the InfisicalProvider to import
    * @param importFromId The id of the existing InfisicalProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the InfisicalProvider to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs infisical} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options InfisicalProviderConfig = {}
    */
    constructor(scope: Construct, id: string, config?: InfisicalProviderConfig);
    private _auth?;
    get auth(): InfisicalProviderAuth | undefined;
    set auth(value: InfisicalProviderAuth | undefined);
    resetAuth(): void;
    get authInput(): InfisicalProviderAuth;
    private _clientId?;
    get clientId(): string | undefined;
    set clientId(value: string | undefined);
    resetClientId(): void;
    get clientIdInput(): string;
    private _clientSecret?;
    get clientSecret(): string | undefined;
    set clientSecret(value: string | undefined);
    resetClientSecret(): void;
    get clientSecretInput(): string;
    private _host?;
    get host(): string | undefined;
    set host(value: string | undefined);
    resetHost(): void;
    get hostInput(): string;
    private _serviceToken?;
    get serviceToken(): string | undefined;
    set serviceToken(value: string | undefined);
    resetServiceToken(): void;
    get serviceTokenInput(): string;
    private _alias?;
    get alias(): string | undefined;
    set alias(value: string | undefined);
    resetAlias(): void;
    get aliasInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
