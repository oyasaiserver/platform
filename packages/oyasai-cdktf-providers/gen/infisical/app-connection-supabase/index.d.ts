import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppConnectionSupabaseConfig extends cdktf.TerraformMetaArguments {
    /**
    * The credentials for the Supabase App Connection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_supabase#credentials AppConnectionSupabase#credentials}
    */
    readonly credentials: AppConnectionSupabaseCredentials;
    /**
    * An optional description for the Supabase App Connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_supabase#description AppConnectionSupabase#description}
    */
    readonly description?: string;
    /**
    * The method used to authenticate with Supabase. Possible values are: access-token
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_supabase#method AppConnectionSupabase#method}
    */
    readonly method: string;
    /**
    * The name of the Supabase App Connection to create. Must be slug-friendly
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_supabase#name AppConnectionSupabase#name}
    */
    readonly name: string;
    /**
    * The ID of the project to scope the app connection to. If not provided, the app connection will be scoped to the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_supabase#project_id AppConnectionSupabase#project_id}
    */
    readonly projectId?: string;
}
export interface AppConnectionSupabaseCredentials {
    /**
    * The Supabase access key for authentication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_supabase#access_key AppConnectionSupabase#access_key}
    */
    readonly accessKey: string;
    /**
    * The Supabase instance URL (e.g., https://your-domain.com).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_supabase#instance_url AppConnectionSupabase#instance_url}
    */
    readonly instanceUrl?: string;
}
export declare function appConnectionSupabaseCredentialsToTerraform(struct?: AppConnectionSupabaseCredentials | cdktf.IResolvable): any;
export declare function appConnectionSupabaseCredentialsToHclTerraform(struct?: AppConnectionSupabaseCredentials | cdktf.IResolvable): any;
export declare class AppConnectionSupabaseCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppConnectionSupabaseCredentials | cdktf.IResolvable | undefined;
    set internalValue(value: AppConnectionSupabaseCredentials | cdktf.IResolvable | undefined);
    private _accessKey?;
    get accessKey(): string;
    set accessKey(value: string);
    get accessKeyInput(): string;
    private _instanceUrl?;
    get instanceUrl(): string;
    set instanceUrl(value: string);
    resetInstanceUrl(): void;
    get instanceUrlInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_supabase infisical_app_connection_supabase}
*/
export declare class AppConnectionSupabase extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_app_connection_supabase";
    /**
    * Generates CDKTF code for importing a AppConnectionSupabase resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionSupabase to import
    * @param importFromId The id of the existing AppConnectionSupabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_supabase#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionSupabase to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_supabase infisical_app_connection_supabase} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionSupabaseConfig
    */
    constructor(scope: Construct, id: string, config: AppConnectionSupabaseConfig);
    private _credentials;
    get credentials(): AppConnectionSupabaseCredentialsOutputReference;
    putCredentials(value: AppConnectionSupabaseCredentials): void;
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
