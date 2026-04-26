import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DynamicSecretAwsIamConfig extends cdktf.TerraformMetaArguments {
    /**
    * The configuration of the dynamic secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#configuration DynamicSecretAwsIam#configuration}
    */
    readonly configuration: DynamicSecretAwsIamConfiguration;
    /**
    * The default TTL that will be applied for all the leases.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#default_ttl DynamicSecretAwsIam#default_ttl}
    */
    readonly defaultTtl: string;
    /**
    * The slug of the environment to create the dynamic secret in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#environment_slug DynamicSecretAwsIam#environment_slug}
    */
    readonly environmentSlug: string;
    /**
    * The maximum limit a TTL can be leased or renewed for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#max_ttl DynamicSecretAwsIam#max_ttl}
    */
    readonly maxTtl?: string;
    /**
    * The metadata associated with this dynamic secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#metadata DynamicSecretAwsIam#metadata}
    */
    readonly metadata?: DynamicSecretAwsIamMetadata[] | cdktf.IResolvable;
    /**
    * The name of the dynamic secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#name DynamicSecretAwsIam#name}
    */
    readonly name: string;
    /**
    * The path to create the dynamic secret in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#path DynamicSecretAwsIam#path}
    */
    readonly path: string;
    /**
    * The slug of the project to create dynamic secret in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#project_slug DynamicSecretAwsIam#project_slug}
    */
    readonly projectSlug: string;
    /**
    * The username template of the dynamic secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#username_template DynamicSecretAwsIam#username_template}
    */
    readonly usernameTemplate?: string;
}
export interface DynamicSecretAwsIamConfigurationAccessKeyConfig {
    /**
    * The managing AWS IAM User Access Key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#access_key DynamicSecretAwsIam#access_key}
    */
    readonly accessKey: string;
    /**
    * The managing AWS IAM User Secret Key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#secret_access_key DynamicSecretAwsIam#secret_access_key}
    */
    readonly secretAccessKey: string;
}
export declare function dynamicSecretAwsIamConfigurationAccessKeyConfigToTerraform(struct?: DynamicSecretAwsIamConfigurationAccessKeyConfig | cdktf.IResolvable): any;
export declare function dynamicSecretAwsIamConfigurationAccessKeyConfigToHclTerraform(struct?: DynamicSecretAwsIamConfigurationAccessKeyConfig | cdktf.IResolvable): any;
export declare class DynamicSecretAwsIamConfigurationAccessKeyConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamicSecretAwsIamConfigurationAccessKeyConfig | cdktf.IResolvable | undefined;
    set internalValue(value: DynamicSecretAwsIamConfigurationAccessKeyConfig | cdktf.IResolvable | undefined);
    private _accessKey?;
    get accessKey(): string;
    set accessKey(value: string);
    get accessKeyInput(): string;
    private _secretAccessKey?;
    get secretAccessKey(): string;
    set secretAccessKey(value: string);
    get secretAccessKeyInput(): string;
}
export interface DynamicSecretAwsIamConfigurationAssumeRoleConfig {
    /**
    * The ARN of the AWS Role to assume.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#role_arn DynamicSecretAwsIam#role_arn}
    */
    readonly roleArn: string;
}
export declare function dynamicSecretAwsIamConfigurationAssumeRoleConfigToTerraform(struct?: DynamicSecretAwsIamConfigurationAssumeRoleConfig | cdktf.IResolvable): any;
export declare function dynamicSecretAwsIamConfigurationAssumeRoleConfigToHclTerraform(struct?: DynamicSecretAwsIamConfigurationAssumeRoleConfig | cdktf.IResolvable): any;
export declare class DynamicSecretAwsIamConfigurationAssumeRoleConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamicSecretAwsIamConfigurationAssumeRoleConfig | cdktf.IResolvable | undefined;
    set internalValue(value: DynamicSecretAwsIamConfigurationAssumeRoleConfig | cdktf.IResolvable | undefined);
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
}
export interface DynamicSecretAwsIamConfiguration {
    /**
    * Configuration for the 'access_key' authentication method.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#access_key_config DynamicSecretAwsIam#access_key_config}
    */
    readonly accessKeyConfig?: DynamicSecretAwsIamConfigurationAccessKeyConfig;
    /**
    * Configuration for the 'assume_role' authentication method.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#assume_role_config DynamicSecretAwsIam#assume_role_config}
    */
    readonly assumeRoleConfig?: DynamicSecretAwsIamConfigurationAssumeRoleConfig;
    /**
    * IAM AWS Path to scope created IAM User resource access.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#aws_path DynamicSecretAwsIam#aws_path}
    */
    readonly awsPath?: string;
    /**
    * The authentication method to use. Must be 'access_key' or 'assume_role'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#method DynamicSecretAwsIam#method}
    */
    readonly method: string;
    /**
    * The IAM Policy ARN of the AWS Permissions Boundary to attach to IAM users created in the role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#permission_boundary_policy_arn DynamicSecretAwsIam#permission_boundary_policy_arn}
    */
    readonly permissionBoundaryPolicyArn?: string;
    /**
    * The AWS IAM managed policies that should be attached to the created users. Multiple values can be provided by separating them with commas
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#policy_arns DynamicSecretAwsIam#policy_arns}
    */
    readonly policyArns?: string;
    /**
    * The AWS IAM inline policy that should be attached to the created users. Multiple values can be provided by separating them with commas
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#policy_document DynamicSecretAwsIam#policy_document}
    */
    readonly policyDocument?: string;
    /**
    * The AWS data center region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#region DynamicSecretAwsIam#region}
    */
    readonly region: string;
    /**
    * The AWS IAM groups that should be assigned to the created users. Multiple values can be provided by separating them with commas
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#user_groups DynamicSecretAwsIam#user_groups}
    */
    readonly userGroups?: string;
}
export declare function dynamicSecretAwsIamConfigurationToTerraform(struct?: DynamicSecretAwsIamConfiguration | cdktf.IResolvable): any;
export declare function dynamicSecretAwsIamConfigurationToHclTerraform(struct?: DynamicSecretAwsIamConfiguration | cdktf.IResolvable): any;
export declare class DynamicSecretAwsIamConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamicSecretAwsIamConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: DynamicSecretAwsIamConfiguration | cdktf.IResolvable | undefined);
    private _accessKeyConfig;
    get accessKeyConfig(): DynamicSecretAwsIamConfigurationAccessKeyConfigOutputReference;
    putAccessKeyConfig(value: DynamicSecretAwsIamConfigurationAccessKeyConfig): void;
    resetAccessKeyConfig(): void;
    get accessKeyConfigInput(): any;
    private _assumeRoleConfig;
    get assumeRoleConfig(): DynamicSecretAwsIamConfigurationAssumeRoleConfigOutputReference;
    putAssumeRoleConfig(value: DynamicSecretAwsIamConfigurationAssumeRoleConfig): void;
    resetAssumeRoleConfig(): void;
    get assumeRoleConfigInput(): any;
    private _awsPath?;
    get awsPath(): string;
    set awsPath(value: string);
    resetAwsPath(): void;
    get awsPathInput(): string;
    private _method?;
    get method(): string;
    set method(value: string);
    get methodInput(): string;
    private _permissionBoundaryPolicyArn?;
    get permissionBoundaryPolicyArn(): string;
    set permissionBoundaryPolicyArn(value: string);
    resetPermissionBoundaryPolicyArn(): void;
    get permissionBoundaryPolicyArnInput(): string;
    private _policyArns?;
    get policyArns(): string;
    set policyArns(value: string);
    resetPolicyArns(): void;
    get policyArnsInput(): string;
    private _policyDocument?;
    get policyDocument(): string;
    set policyDocument(value: string);
    resetPolicyDocument(): void;
    get policyDocumentInput(): string;
    private _region?;
    get region(): string;
    set region(value: string);
    get regionInput(): string;
    private _userGroups?;
    get userGroups(): string;
    set userGroups(value: string);
    resetUserGroups(): void;
    get userGroupsInput(): string;
}
export interface DynamicSecretAwsIamMetadata {
    /**
    * The key of the metadata object
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#key DynamicSecretAwsIam#key}
    */
    readonly key: string;
    /**
    * The value of the metadata object
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#value DynamicSecretAwsIam#value}
    */
    readonly value: string;
}
export declare function dynamicSecretAwsIamMetadataToTerraform(struct?: DynamicSecretAwsIamMetadata | cdktf.IResolvable): any;
export declare function dynamicSecretAwsIamMetadataToHclTerraform(struct?: DynamicSecretAwsIamMetadata | cdktf.IResolvable): any;
export declare class DynamicSecretAwsIamMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DynamicSecretAwsIamMetadata | cdktf.IResolvable | undefined;
    set internalValue(value: DynamicSecretAwsIamMetadata | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
export declare class DynamicSecretAwsIamMetadataList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DynamicSecretAwsIamMetadata[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DynamicSecretAwsIamMetadataOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam infisical_dynamic_secret_aws_iam}
*/
export declare class DynamicSecretAwsIam extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_dynamic_secret_aws_iam";
    /**
    * Generates CDKTF code for importing a DynamicSecretAwsIam resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DynamicSecretAwsIam to import
    * @param importFromId The id of the existing DynamicSecretAwsIam that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DynamicSecretAwsIam to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam infisical_dynamic_secret_aws_iam} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamicSecretAwsIamConfig
    */
    constructor(scope: Construct, id: string, config: DynamicSecretAwsIamConfig);
    private _configuration;
    get configuration(): DynamicSecretAwsIamConfigurationOutputReference;
    putConfiguration(value: DynamicSecretAwsIamConfiguration): void;
    get configurationInput(): any;
    private _defaultTtl?;
    get defaultTtl(): string;
    set defaultTtl(value: string);
    get defaultTtlInput(): string;
    private _environmentSlug?;
    get environmentSlug(): string;
    set environmentSlug(value: string);
    get environmentSlugInput(): string;
    get id(): any;
    private _maxTtl?;
    get maxTtl(): string;
    set maxTtl(value: string);
    resetMaxTtl(): void;
    get maxTtlInput(): string;
    private _metadata;
    get metadata(): DynamicSecretAwsIamMetadataList;
    putMetadata(value: DynamicSecretAwsIamMetadata[] | cdktf.IResolvable): void;
    resetMetadata(): void;
    get metadataInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _path?;
    get path(): string;
    set path(value: string);
    get pathInput(): string;
    private _projectSlug?;
    get projectSlug(): string;
    set projectSlug(value: string);
    get projectSlugInput(): string;
    private _usernameTemplate?;
    get usernameTemplate(): string;
    set usernameTemplate(value: string);
    resetUsernameTemplate(): void;
    get usernameTemplateInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
