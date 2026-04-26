import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppConnectionGitlabConfig extends cdktf.TerraformMetaArguments {
    /**
    * The credentials for the GitLab App Connection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gitlab#credentials AppConnectionGitlab#credentials}
    */
    readonly credentials: AppConnectionGitlabCredentials;
    /**
    * An optional description for the GitLab App Connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gitlab#description AppConnectionGitlab#description}
    */
    readonly description?: string;
    /**
    * The method used to authenticate with GitLab. Possible values are: access-token
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gitlab#method AppConnectionGitlab#method}
    */
    readonly method: string;
    /**
    * The name of the GitLab App Connection to create. Must be slug-friendly
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gitlab#name AppConnectionGitlab#name}
    */
    readonly name: string;
    /**
    * The ID of the project to scope the app connection to. If not provided, the app connection will be scoped to the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gitlab#project_id AppConnectionGitlab#project_id}
    */
    readonly projectId?: string;
}
export interface AppConnectionGitlabCredentials {
    /**
    * The Access Token used to access GitLab.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gitlab#access_token AppConnectionGitlab#access_token}
    */
    readonly accessToken: string;
    /**
    * The type of token used to connect with GitLab. Supported options: 'project' and 'personal'
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gitlab#access_token_type AppConnectionGitlab#access_token_type}
    */
    readonly accessTokenType: string;
    /**
    * The GitLab instance URL to connect with. (default: https://gitlab.com)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gitlab#instance_url AppConnectionGitlab#instance_url}
    */
    readonly instanceUrl?: string;
}
export declare function appConnectionGitlabCredentialsToTerraform(struct?: AppConnectionGitlabCredentials | cdktf.IResolvable): any;
export declare function appConnectionGitlabCredentialsToHclTerraform(struct?: AppConnectionGitlabCredentials | cdktf.IResolvable): any;
export declare class AppConnectionGitlabCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppConnectionGitlabCredentials | cdktf.IResolvable | undefined;
    set internalValue(value: AppConnectionGitlabCredentials | cdktf.IResolvable | undefined);
    private _accessToken?;
    get accessToken(): string;
    set accessToken(value: string);
    get accessTokenInput(): string;
    private _accessTokenType?;
    get accessTokenType(): string;
    set accessTokenType(value: string);
    get accessTokenTypeInput(): string;
    private _instanceUrl?;
    get instanceUrl(): string;
    set instanceUrl(value: string);
    resetInstanceUrl(): void;
    get instanceUrlInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gitlab infisical_app_connection_gitlab}
*/
export declare class AppConnectionGitlab extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_app_connection_gitlab";
    /**
    * Generates CDKTF code for importing a AppConnectionGitlab resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionGitlab to import
    * @param importFromId The id of the existing AppConnectionGitlab that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gitlab#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionGitlab to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gitlab infisical_app_connection_gitlab} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionGitlabConfig
    */
    constructor(scope: Construct, id: string, config: AppConnectionGitlabConfig);
    private _credentials;
    get credentials(): AppConnectionGitlabCredentialsOutputReference;
    putCredentials(value: AppConnectionGitlabCredentials): void;
    get credentialsInput(): any;
    get credentialsHash(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): any;
    private _method?;
    get method(): string;
    set method(value: string);
    get methodInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    resetProjectId(): void;
    get projectIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
