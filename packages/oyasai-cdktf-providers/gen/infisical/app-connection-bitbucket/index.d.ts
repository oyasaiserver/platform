import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppConnectionBitbucketConfig extends cdktf.TerraformMetaArguments {
    /**
    * The credentials for the Bitbucket App Connection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_bitbucket#credentials AppConnectionBitbucket#credentials}
    */
    readonly credentials: AppConnectionBitbucketCredentials;
    /**
    * An optional description for the Bitbucket App Connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_bitbucket#description AppConnectionBitbucket#description}
    */
    readonly description?: string;
    /**
    * The method used to authenticate with Bitbucket. Possible values are: api-token
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_bitbucket#method AppConnectionBitbucket#method}
    */
    readonly method: string;
    /**
    * The name of the Bitbucket App Connection to create. Must be slug-friendly
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_bitbucket#name AppConnectionBitbucket#name}
    */
    readonly name: string;
    /**
    * The ID of the project to scope the app connection to. If not provided, the app connection will be scoped to the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_bitbucket#project_id AppConnectionBitbucket#project_id}
    */
    readonly projectId?: string;
}
export interface AppConnectionBitbucketCredentials {
    /**
    * The Bitbucket API token for authentication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_bitbucket#api_token AppConnectionBitbucket#api_token}
    */
    readonly apiToken: string;
    /**
    * The email address associated with the Bitbucket API token.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_bitbucket#email AppConnectionBitbucket#email}
    */
    readonly email: string;
}
export declare function appConnectionBitbucketCredentialsToTerraform(struct?: AppConnectionBitbucketCredentials | cdktf.IResolvable): any;
export declare function appConnectionBitbucketCredentialsToHclTerraform(struct?: AppConnectionBitbucketCredentials | cdktf.IResolvable): any;
export declare class AppConnectionBitbucketCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppConnectionBitbucketCredentials | cdktf.IResolvable | undefined;
    set internalValue(value: AppConnectionBitbucketCredentials | cdktf.IResolvable | undefined);
    private _apiToken?;
    get apiToken(): string;
    set apiToken(value: string);
    get apiTokenInput(): string;
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_bitbucket infisical_app_connection_bitbucket}
*/
export declare class AppConnectionBitbucket extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_app_connection_bitbucket";
    /**
    * Generates CDKTF code for importing a AppConnectionBitbucket resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionBitbucket to import
    * @param importFromId The id of the existing AppConnectionBitbucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_bitbucket#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionBitbucket to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_bitbucket infisical_app_connection_bitbucket} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionBitbucketConfig
    */
    constructor(scope: Construct, id: string, config: AppConnectionBitbucketConfig);
    private _credentials;
    get credentials(): AppConnectionBitbucketCredentialsOutputReference;
    putCredentials(value: AppConnectionBitbucketCredentials): void;
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
