import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppConnectionGithubConfig extends cdktf.TerraformMetaArguments {
    /**
    * The credentials for the GitHub App Connection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_github#credentials AppConnectionGithub#credentials}
    */
    readonly credentials: AppConnectionGithubCredentials;
    /**
    * An optional description for the GitHub App Connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_github#description AppConnectionGithub#description}
    */
    readonly description?: string;
    /**
    * The method used to authenticate with GitHub. Possible values are: pat
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_github#method AppConnectionGithub#method}
    */
    readonly method: string;
    /**
    * The name of the GitHub App Connection to create. Must be slug-friendly
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_github#name AppConnectionGithub#name}
    */
    readonly name: string;
    /**
    * The ID of the project to scope the app connection to. If not provided, the app connection will be scoped to the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_github#project_id AppConnectionGithub#project_id}
    */
    readonly projectId?: string;
}
export interface AppConnectionGithubCredentials {
    /**
    * The hostname of your GitHub Enterprise instance. Required when instance_type is 'server'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_github#host AppConnectionGithub#host}
    */
    readonly host?: string;
    /**
    * The type of GitHub instance. Use 'cloud' for GitHub.com (default) or 'server' for GitHub Enterprise. When 'server', host is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_github#instance_type AppConnectionGithub#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The Personal Access Token used to access GitHub.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_github#personal_access_token AppConnectionGithub#personal_access_token}
    */
    readonly personalAccessToken: string;
}
export declare function appConnectionGithubCredentialsToTerraform(struct?: AppConnectionGithubCredentials | cdktf.IResolvable): any;
export declare function appConnectionGithubCredentialsToHclTerraform(struct?: AppConnectionGithubCredentials | cdktf.IResolvable): any;
export declare class AppConnectionGithubCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppConnectionGithubCredentials | cdktf.IResolvable | undefined;
    set internalValue(value: AppConnectionGithubCredentials | cdktf.IResolvable | undefined);
    private _host?;
    get host(): string;
    set host(value: string);
    resetHost(): void;
    get hostInput(): string;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string;
    private _personalAccessToken?;
    get personalAccessToken(): string;
    set personalAccessToken(value: string);
    get personalAccessTokenInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_github infisical_app_connection_github}
*/
export declare class AppConnectionGithub extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_app_connection_github";
    /**
    * Generates CDKTF code for importing a AppConnectionGithub resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionGithub to import
    * @param importFromId The id of the existing AppConnectionGithub that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_github#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionGithub to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_github infisical_app_connection_github} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionGithubConfig
    */
    constructor(scope: Construct, id: string, config: AppConnectionGithubConfig);
    private _credentials;
    get credentials(): AppConnectionGithubCredentialsOutputReference;
    putCredentials(value: AppConnectionGithubCredentials): void;
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
