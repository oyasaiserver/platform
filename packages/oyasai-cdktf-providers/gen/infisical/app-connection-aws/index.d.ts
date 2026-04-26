import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppConnectionAwsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The credentials for the AWS App Connection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_aws#credentials AppConnectionAws#credentials}
    */
    readonly credentials: AppConnectionAwsCredentials;
    /**
    * An optional description for the AWS App Connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_aws#description AppConnectionAws#description}
    */
    readonly description?: string;
    /**
    * The method used to authenticate with AWS. Possible values are: assume-role, access-key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_aws#method AppConnectionAws#method}
    */
    readonly method: string;
    /**
    * The name of the AWS App Connection to create. Must be slug-friendly
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_aws#name AppConnectionAws#name}
    */
    readonly name: string;
    /**
    * The ID of the project to scope the app connection to. If not provided, the app connection will be scoped to the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_aws#project_id AppConnectionAws#project_id}
    */
    readonly projectId?: string;
}
export interface AppConnectionAwsCredentials {
    /**
    * The AWS Access Key ID used to authenticate requests to AWS services. Required for access-key access method. For more details, refer to the documentation here infisical.com/docs/integrations/app-connections/aws#access-key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_aws#access_key_id AppConnectionAws#access_key_id}
    */
    readonly accessKeyId?: string;
    /**
    * The Amazon Resource Name (ARN) of the IAM role to assume for performing operations. Infisical will assume this role using AWS Security Token Service (STS). Required for assume-role access method. For more details, refer to the documentation here infisical.com/docs/integrations/app-connections/aws#assume-role-recommended
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_aws#role_arn AppConnectionAws#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The AWS Secret Access Key associated with the Access Key ID to authenticate requests to AWS services. Required for access-key access method. For more details, refer to the documentation here infisical.com/docs/integrations/app-connections/aws#access-key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_aws#secret_access_key AppConnectionAws#secret_access_key}
    */
    readonly secretAccessKey?: string;
}
export declare function appConnectionAwsCredentialsToTerraform(struct?: AppConnectionAwsCredentials | cdktf.IResolvable): any;
export declare function appConnectionAwsCredentialsToHclTerraform(struct?: AppConnectionAwsCredentials | cdktf.IResolvable): any;
export declare class AppConnectionAwsCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppConnectionAwsCredentials | cdktf.IResolvable | undefined;
    set internalValue(value: AppConnectionAwsCredentials | cdktf.IResolvable | undefined);
    private _accessKeyId?;
    get accessKeyId(): string;
    set accessKeyId(value: string);
    resetAccessKeyId(): void;
    get accessKeyIdInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string;
    private _secretAccessKey?;
    get secretAccessKey(): string;
    set secretAccessKey(value: string);
    resetSecretAccessKey(): void;
    get secretAccessKeyInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_aws infisical_app_connection_aws}
*/
export declare class AppConnectionAws extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_app_connection_aws";
    /**
    * Generates CDKTF code for importing a AppConnectionAws resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionAws to import
    * @param importFromId The id of the existing AppConnectionAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_aws#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionAws to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_aws infisical_app_connection_aws} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionAwsConfig
    */
    constructor(scope: Construct, id: string, config: AppConnectionAwsConfig);
    private _credentials;
    get credentials(): AppConnectionAwsCredentialsOutputReference;
    putCredentials(value: AppConnectionAwsCredentials): void;
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
