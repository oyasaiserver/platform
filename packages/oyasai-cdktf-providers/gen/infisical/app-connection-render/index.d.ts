import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppConnectionRenderConfig extends cdktf.TerraformMetaArguments {
    /**
    * The credentials for the Render App Connection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_render#credentials AppConnectionRender#credentials}
    */
    readonly credentials: AppConnectionRenderCredentials;
    /**
    * An optional description for the Render App Connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_render#description AppConnectionRender#description}
    */
    readonly description?: string;
    /**
    * The method used to authenticate with Render. Possible values are: api-key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_render#method AppConnectionRender#method}
    */
    readonly method: string;
    /**
    * The name of the Render App Connection to create. Must be slug-friendly
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_render#name AppConnectionRender#name}
    */
    readonly name: string;
    /**
    * The ID of the project to scope the app connection to. If not provided, the app connection will be scoped to the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_render#project_id AppConnectionRender#project_id}
    */
    readonly projectId?: string;
}
export interface AppConnectionRenderCredentials {
    /**
    * The API key to use for authentication. For more details, refer to the documentation here infisical.com/docs/integrations/app-connections/render
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_render#api_key AppConnectionRender#api_key}
    */
    readonly apiKey: string;
}
export declare function appConnectionRenderCredentialsToTerraform(struct?: AppConnectionRenderCredentials | cdktf.IResolvable): any;
export declare function appConnectionRenderCredentialsToHclTerraform(struct?: AppConnectionRenderCredentials | cdktf.IResolvable): any;
export declare class AppConnectionRenderCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppConnectionRenderCredentials | cdktf.IResolvable | undefined;
    set internalValue(value: AppConnectionRenderCredentials | cdktf.IResolvable | undefined);
    private _apiKey?;
    get apiKey(): string;
    set apiKey(value: string);
    get apiKeyInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_render infisical_app_connection_render}
*/
export declare class AppConnectionRender extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_app_connection_render";
    /**
    * Generates CDKTF code for importing a AppConnectionRender resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionRender to import
    * @param importFromId The id of the existing AppConnectionRender that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_render#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionRender to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_render infisical_app_connection_render} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionRenderConfig
    */
    constructor(scope: Construct, id: string, config: AppConnectionRenderConfig);
    private _credentials;
    get credentials(): AppConnectionRenderCredentialsOutputReference;
    putCredentials(value: AppConnectionRenderCredentials): void;
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
