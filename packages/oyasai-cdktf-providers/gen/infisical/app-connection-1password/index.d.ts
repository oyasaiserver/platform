import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppConnection1PasswordConfig extends cdktf.TerraformMetaArguments {
    /**
    * The credentials for the 1Password App Connection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_1password#credentials AppConnection1Password#credentials}
    */
    readonly credentials: AppConnection1PasswordCredentials;
    /**
    * An optional description for the 1Password App Connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_1password#description AppConnection1Password#description}
    */
    readonly description?: string;
    /**
    * The method used to authenticate with 1Password. Possible values are: api-token
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_1password#method AppConnection1Password#method}
    */
    readonly method: string;
    /**
    * The name of the 1Password App Connection to create. Must be slug-friendly
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_1password#name AppConnection1Password#name}
    */
    readonly name: string;
    /**
    * The ID of the project to scope the app connection to. If not provided, the app connection will be scoped to the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_1password#project_id AppConnection1Password#project_id}
    */
    readonly projectId?: string;
}
export interface AppConnection1PasswordCredentials {
    /**
    * The API token to use for authentication. For more details, refer to the documentation here infisical.com/docs/integrations/app-connections/1password
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_1password#api_token AppConnection1Password#api_token}
    */
    readonly apiToken: string;
    /**
    * The URL of the 1Password Connect instance to connect to. For more details, refer to the documentation here infisical.com/docs/integrations/app-connections/1password
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_1password#instance_url AppConnection1Password#instance_url}
    */
    readonly instanceUrl: string;
}
export declare function appConnection1PasswordCredentialsToTerraform(struct?: AppConnection1PasswordCredentials | cdktf.IResolvable): any;
export declare function appConnection1PasswordCredentialsToHclTerraform(struct?: AppConnection1PasswordCredentials | cdktf.IResolvable): any;
export declare class AppConnection1PasswordCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppConnection1PasswordCredentials | cdktf.IResolvable | undefined;
    set internalValue(value: AppConnection1PasswordCredentials | cdktf.IResolvable | undefined);
    private _apiToken?;
    get apiToken(): string;
    set apiToken(value: string);
    get apiTokenInput(): string;
    private _instanceUrl?;
    get instanceUrl(): string;
    set instanceUrl(value: string);
    get instanceUrlInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_1password infisical_app_connection_1password}
*/
export declare class AppConnection1Password extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_app_connection_1password";
    /**
    * Generates CDKTF code for importing a AppConnection1Password resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnection1Password to import
    * @param importFromId The id of the existing AppConnection1Password that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_1password#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnection1Password to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_1password infisical_app_connection_1password} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnection1PasswordConfig
    */
    constructor(scope: Construct, id: string, config: AppConnection1PasswordConfig);
    private _credentials;
    get credentials(): AppConnection1PasswordCredentialsOutputReference;
    putCredentials(value: AppConnection1PasswordCredentials): void;
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
