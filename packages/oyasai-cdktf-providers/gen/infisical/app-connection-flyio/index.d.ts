import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppConnectionFlyioConfig extends cdktf.TerraformMetaArguments {
    /**
    * The credentials for the Fly.io App Connection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_flyio#credentials AppConnectionFlyio#credentials}
    */
    readonly credentials: AppConnectionFlyioCredentials;
    /**
    * An optional description for the Fly.io App Connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_flyio#description AppConnectionFlyio#description}
    */
    readonly description?: string;
    /**
    * The method used to authenticate with Fly.io. Possible values are: access-token
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_flyio#method AppConnectionFlyio#method}
    */
    readonly method: string;
    /**
    * The name of the Fly.io App Connection to create. Must be slug-friendly
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_flyio#name AppConnectionFlyio#name}
    */
    readonly name: string;
    /**
    * The ID of the project to scope the app connection to. If not provided, the app connection will be scoped to the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_flyio#project_id AppConnectionFlyio#project_id}
    */
    readonly projectId?: string;
}
export interface AppConnectionFlyioCredentials {
    /**
    * The Fly.io access token for authentication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_flyio#access_token AppConnectionFlyio#access_token}
    */
    readonly accessToken: string;
}
export declare function appConnectionFlyioCredentialsToTerraform(struct?: AppConnectionFlyioCredentials | cdktf.IResolvable): any;
export declare function appConnectionFlyioCredentialsToHclTerraform(struct?: AppConnectionFlyioCredentials | cdktf.IResolvable): any;
export declare class AppConnectionFlyioCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppConnectionFlyioCredentials | cdktf.IResolvable | undefined;
    set internalValue(value: AppConnectionFlyioCredentials | cdktf.IResolvable | undefined);
    private _accessToken?;
    get accessToken(): string;
    set accessToken(value: string);
    get accessTokenInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_flyio infisical_app_connection_flyio}
*/
export declare class AppConnectionFlyio extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_app_connection_flyio";
    /**
    * Generates CDKTF code for importing a AppConnectionFlyio resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionFlyio to import
    * @param importFromId The id of the existing AppConnectionFlyio that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_flyio#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionFlyio to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_flyio infisical_app_connection_flyio} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionFlyioConfig
    */
    constructor(scope: Construct, id: string, config: AppConnectionFlyioConfig);
    private _credentials;
    get credentials(): AppConnectionFlyioCredentialsOutputReference;
    putCredentials(value: AppConnectionFlyioCredentials): void;
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
