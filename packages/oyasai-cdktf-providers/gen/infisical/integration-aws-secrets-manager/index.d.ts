import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IntegrationAwsSecretsManagerConfig extends cdktf.TerraformMetaArguments {
    /**
    * The AWS access key ID. Used to authenticate with AWS Secrets Manager. You must either set secret_access_key and access_key_id, or set assume_role_arn to assume a role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_secrets_manager#access_key_id IntegrationAwsSecretsManager#access_key_id}
    */
    readonly accessKeyId?: string;
    /**
    * The ARN of the role to assume when syncing secrets to AWS Secrets Manager. You must either set secret_access_key and access_key_id, or set assume_role_arn to assume a role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_secrets_manager#assume_role_arn IntegrationAwsSecretsManager#assume_role_arn}
    */
    readonly assumeRoleArn?: string;
    /**
    * The AWS region to sync secrets to. (us-east-1, us-east-2, etc)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_secrets_manager#aws_region IntegrationAwsSecretsManager#aws_region}
    */
    readonly awsRegion: string;
    /**
    * The slug of the environment to sync to AWS Secrets Manager (prod, dev, staging, etc).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_secrets_manager#environment IntegrationAwsSecretsManager#environment}
    */
    readonly environment: string;
    /**
    * The behavior of the mapping. Can be 'many-to-one' or 'one-to-one'. Many to One: All Infisical secrets will be mapped to a single AWS secret. One to One: Each Infisical secret will be mapped to its own AWS secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_secrets_manager#mapping_behavior IntegrationAwsSecretsManager#mapping_behavior}
    */
    readonly mappingBehavior?: string;
    /**
    * Integration options
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_secrets_manager#options IntegrationAwsSecretsManager#options}
    */
    readonly options?: IntegrationAwsSecretsManagerOptions;
    /**
    * The ID of your Infisical project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_secrets_manager#project_id IntegrationAwsSecretsManager#project_id}
    */
    readonly projectId: string;
    /**
    * The AWS secret access key. Used to authenticate with AWS Secrets Manager. You must either set secret_access_key and access_key_id, or set assume_role_arn to assume a role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_secrets_manager#secret_access_key IntegrationAwsSecretsManager#secret_access_key}
    */
    readonly secretAccessKey?: string;
    /**
    * The secret path in Infisical to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_secrets_manager#secret_path IntegrationAwsSecretsManager#secret_path}
    */
    readonly secretPath: string;
    /**
    * The path in AWS Secrets Manager to sync secrets to. This is required if mapping_behavior is 'many-to-one'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_secrets_manager#secrets_manager_path IntegrationAwsSecretsManager#secrets_manager_path}
    */
    readonly secretsManagerPath?: string;
}
export interface IntegrationAwsSecretsManagerOptionsAwsTags {
    /**
    * The key of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_secrets_manager#key IntegrationAwsSecretsManager#key}
    */
    readonly key?: string;
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_secrets_manager#value IntegrationAwsSecretsManager#value}
    */
    readonly value?: string;
}
export declare function integrationAwsSecretsManagerOptionsAwsTagsToTerraform(struct?: IntegrationAwsSecretsManagerOptionsAwsTags | cdktf.IResolvable): any;
export declare function integrationAwsSecretsManagerOptionsAwsTagsToHclTerraform(struct?: IntegrationAwsSecretsManagerOptionsAwsTags | cdktf.IResolvable): any;
export declare class IntegrationAwsSecretsManagerOptionsAwsTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IntegrationAwsSecretsManagerOptionsAwsTags | cdktf.IResolvable | undefined;
    set internalValue(value: IntegrationAwsSecretsManagerOptionsAwsTags | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string;
}
export declare class IntegrationAwsSecretsManagerOptionsAwsTagsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IntegrationAwsSecretsManagerOptionsAwsTags[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IntegrationAwsSecretsManagerOptionsAwsTagsOutputReference;
}
export interface IntegrationAwsSecretsManagerOptions {
    /**
    * Tags to attach to the AWS Secrets Manager secrets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_secrets_manager#aws_tags IntegrationAwsSecretsManager#aws_tags}
    */
    readonly awsTags?: IntegrationAwsSecretsManagerOptionsAwsTags[] | cdktf.IResolvable;
    /**
    * The sync mode for AWS tags. The supported options are `secret-metadata` and `custom`. If `secret-metadata` is selected, the metadata of the Infisical secrets are used as tags in AWS (only supported for one-to-one integrations). If `custom` is selected, then the key/value pairs in the `aws_tags` field is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_secrets_manager#metadata_sync_mode IntegrationAwsSecretsManager#metadata_sync_mode}
    */
    readonly metadataSyncMode?: string;
    /**
    * The prefix to add to the secret name in AWS Secrets Manager.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_secrets_manager#secret_prefix IntegrationAwsSecretsManager#secret_prefix}
    */
    readonly secretPrefix?: string;
}
export declare function integrationAwsSecretsManagerOptionsToTerraform(struct?: IntegrationAwsSecretsManagerOptions | cdktf.IResolvable): any;
export declare function integrationAwsSecretsManagerOptionsToHclTerraform(struct?: IntegrationAwsSecretsManagerOptions | cdktf.IResolvable): any;
export declare class IntegrationAwsSecretsManagerOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IntegrationAwsSecretsManagerOptions | cdktf.IResolvable | undefined;
    set internalValue(value: IntegrationAwsSecretsManagerOptions | cdktf.IResolvable | undefined);
    private _awsTags;
    get awsTags(): IntegrationAwsSecretsManagerOptionsAwsTagsList;
    putAwsTags(value: IntegrationAwsSecretsManagerOptionsAwsTags[] | cdktf.IResolvable): void;
    resetAwsTags(): void;
    get awsTagsInput(): any;
    private _metadataSyncMode?;
    get metadataSyncMode(): string;
    set metadataSyncMode(value: string);
    resetMetadataSyncMode(): void;
    get metadataSyncModeInput(): string;
    private _secretPrefix?;
    get secretPrefix(): string;
    set secretPrefix(value: string);
    resetSecretPrefix(): void;
    get secretPrefixInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_secrets_manager infisical_integration_aws_secrets_manager}
*/
export declare class IntegrationAwsSecretsManager extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_integration_aws_secrets_manager";
    /**
    * Generates CDKTF code for importing a IntegrationAwsSecretsManager resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IntegrationAwsSecretsManager to import
    * @param importFromId The id of the existing IntegrationAwsSecretsManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_secrets_manager#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IntegrationAwsSecretsManager to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_secrets_manager infisical_integration_aws_secrets_manager} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IntegrationAwsSecretsManagerConfig
    */
    constructor(scope: Construct, id: string, config: IntegrationAwsSecretsManagerConfig);
    private _accessKeyId?;
    get accessKeyId(): string;
    set accessKeyId(value: string);
    resetAccessKeyId(): void;
    get accessKeyIdInput(): string;
    private _assumeRoleArn?;
    get assumeRoleArn(): string;
    set assumeRoleArn(value: string);
    resetAssumeRoleArn(): void;
    get assumeRoleArnInput(): string;
    private _awsRegion?;
    get awsRegion(): string;
    set awsRegion(value: string);
    get awsRegionInput(): string;
    private _environment?;
    get environment(): string;
    set environment(value: string);
    get environmentInput(): string;
    get integrationAuthId(): any;
    get integrationId(): any;
    private _mappingBehavior?;
    get mappingBehavior(): string;
    set mappingBehavior(value: string);
    resetMappingBehavior(): void;
    get mappingBehaviorInput(): string;
    private _options;
    get options(): IntegrationAwsSecretsManagerOptionsOutputReference;
    putOptions(value: IntegrationAwsSecretsManagerOptions): void;
    resetOptions(): void;
    get optionsInput(): any;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
    private _secretAccessKey?;
    get secretAccessKey(): string;
    set secretAccessKey(value: string);
    resetSecretAccessKey(): void;
    get secretAccessKeyInput(): string;
    private _secretPath?;
    get secretPath(): string;
    set secretPath(value: string);
    get secretPathInput(): string;
    private _secretsManagerPath?;
    get secretsManagerPath(): string;
    set secretsManagerPath(value: string);
    resetSecretsManagerPath(): void;
    get secretsManagerPathInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
