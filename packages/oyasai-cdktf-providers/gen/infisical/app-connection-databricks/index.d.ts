import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppConnectionDatabricksConfig extends cdktf.TerraformMetaArguments {
    /**
    * The credentials for the Databricks App Connection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_databricks#credentials AppConnectionDatabricks#credentials}
    */
    readonly credentials: AppConnectionDatabricksCredentials;
    /**
    * An optional description for the Databricks App Connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_databricks#description AppConnectionDatabricks#description}
    */
    readonly description?: string;
    /**
    * The method used to authenticate with Databricks. Possible values are: service-principal
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_databricks#method AppConnectionDatabricks#method}
    */
    readonly method: string;
    /**
    * The name of the Databricks App Connection to create. Must be slug-friendly
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_databricks#name AppConnectionDatabricks#name}
    */
    readonly name: string;
    /**
    * The ID of the project to scope the app connection to. If not provided, the app connection will be scoped to the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_databricks#project_id AppConnectionDatabricks#project_id}
    */
    readonly projectId?: string;
}
export interface AppConnectionDatabricksCredentials {
    /**
    * The client ID of the Databricks service principal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_databricks#client_id AppConnectionDatabricks#client_id}
    */
    readonly clientId: string;
    /**
    * The client secret of the Databricks service principal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_databricks#client_secret AppConnectionDatabricks#client_secret}
    */
    readonly clientSecret: string;
    /**
    * The workspace URL of the Databricks instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_databricks#workspace_url AppConnectionDatabricks#workspace_url}
    */
    readonly workspaceUrl: string;
}
export declare function appConnectionDatabricksCredentialsToTerraform(struct?: AppConnectionDatabricksCredentials | cdktf.IResolvable): any;
export declare function appConnectionDatabricksCredentialsToHclTerraform(struct?: AppConnectionDatabricksCredentials | cdktf.IResolvable): any;
export declare class AppConnectionDatabricksCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppConnectionDatabricksCredentials | cdktf.IResolvable | undefined;
    set internalValue(value: AppConnectionDatabricksCredentials | cdktf.IResolvable | undefined);
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    get clientIdInput(): string;
    private _clientSecret?;
    get clientSecret(): string;
    set clientSecret(value: string);
    get clientSecretInput(): string;
    private _workspaceUrl?;
    get workspaceUrl(): string;
    set workspaceUrl(value: string);
    get workspaceUrlInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_databricks infisical_app_connection_databricks}
*/
export declare class AppConnectionDatabricks extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_app_connection_databricks";
    /**
    * Generates CDKTF code for importing a AppConnectionDatabricks resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionDatabricks to import
    * @param importFromId The id of the existing AppConnectionDatabricks that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_databricks#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionDatabricks to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_databricks infisical_app_connection_databricks} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionDatabricksConfig
    */
    constructor(scope: Construct, id: string, config: AppConnectionDatabricksConfig);
    private _credentials;
    get credentials(): AppConnectionDatabricksCredentialsOutputReference;
    putCredentials(value: AppConnectionDatabricksCredentials): void;
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
