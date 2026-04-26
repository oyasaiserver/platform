import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppConnectionCloudflareConfig extends cdktf.TerraformMetaArguments {
    /**
    * The credentials for the Cloudflare App Connection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_cloudflare#credentials AppConnectionCloudflare#credentials}
    */
    readonly credentials: AppConnectionCloudflareCredentials;
    /**
    * An optional description for the Cloudflare App Connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_cloudflare#description AppConnectionCloudflare#description}
    */
    readonly description?: string;
    /**
    * The method used to authenticate with Cloudflare. Possible values are: api-token
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_cloudflare#method AppConnectionCloudflare#method}
    */
    readonly method: string;
    /**
    * The name of the Cloudflare App Connection to create. Must be slug-friendly
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_cloudflare#name AppConnectionCloudflare#name}
    */
    readonly name: string;
    /**
    * The ID of the project to scope the app connection to. If not provided, the app connection will be scoped to the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_cloudflare#project_id AppConnectionCloudflare#project_id}
    */
    readonly projectId?: string;
}
export interface AppConnectionCloudflareCredentials {
    /**
    * The Cloudflare Account ID. This can be found in the sidebar of your Cloudflare dashboard.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_cloudflare#account_id AppConnectionCloudflare#account_id}
    */
    readonly accountId: string;
    /**
    * The Cloudflare API token with the necessary permissions to manage Workers scripts. The token should have Zone:Zone:Read, Zone:Zone Settings:Read, and Zone:Zone:Edit permissions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_cloudflare#api_token AppConnectionCloudflare#api_token}
    */
    readonly apiToken: string;
}
export declare function appConnectionCloudflareCredentialsToTerraform(struct?: AppConnectionCloudflareCredentials | cdktf.IResolvable): any;
export declare function appConnectionCloudflareCredentialsToHclTerraform(struct?: AppConnectionCloudflareCredentials | cdktf.IResolvable): any;
export declare class AppConnectionCloudflareCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppConnectionCloudflareCredentials | cdktf.IResolvable | undefined;
    set internalValue(value: AppConnectionCloudflareCredentials | cdktf.IResolvable | undefined);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    private _apiToken?;
    get apiToken(): string;
    set apiToken(value: string);
    get apiTokenInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_cloudflare infisical_app_connection_cloudflare}
*/
export declare class AppConnectionCloudflare extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_app_connection_cloudflare";
    /**
    * Generates CDKTF code for importing a AppConnectionCloudflare resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionCloudflare to import
    * @param importFromId The id of the existing AppConnectionCloudflare that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_cloudflare#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionCloudflare to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_cloudflare infisical_app_connection_cloudflare} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionCloudflareConfig
    */
    constructor(scope: Construct, id: string, config: AppConnectionCloudflareConfig);
    private _credentials;
    get credentials(): AppConnectionCloudflareCredentialsOutputReference;
    putCredentials(value: AppConnectionCloudflareCredentials): void;
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
