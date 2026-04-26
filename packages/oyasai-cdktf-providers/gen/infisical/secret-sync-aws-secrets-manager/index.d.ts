import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretSyncAwsSecretsManagerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether secrets should be automatically synced when changes occur at the source location or not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#auto_sync_enabled SecretSyncAwsSecretsManager#auto_sync_enabled}
    */
    readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
    /**
    * The ID of the aws Connection to use for syncing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#connection_id SecretSyncAwsSecretsManager#connection_id}
    */
    readonly connectionId: string;
    /**
    * An optional description for the AWS Secrets Manager sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#description SecretSyncAwsSecretsManager#description}
    */
    readonly description?: string;
    /**
    * The destination configuration for the secret sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#destination_config SecretSyncAwsSecretsManager#destination_config}
    */
    readonly destinationConfig: SecretSyncAwsSecretsManagerDestinationConfig;
    /**
    * The slug of the project environment to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#environment SecretSyncAwsSecretsManager#environment}
    */
    readonly environment: string;
    /**
    * The name of the AWS Secrets Manager sync to create. Must be slug-friendly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#name SecretSyncAwsSecretsManager#name}
    */
    readonly name: string;
    /**
    * The ID of the Infisical project to create the sync in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#project_id SecretSyncAwsSecretsManager#project_id}
    */
    readonly projectId: string;
    /**
    * The folder path to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#secret_path SecretSyncAwsSecretsManager#secret_path}
    */
    readonly secretPath: string;
    /**
    * Parameters to modify how secrets are synced.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#sync_options SecretSyncAwsSecretsManager#sync_options}
    */
    readonly syncOptions: SecretSyncAwsSecretsManagerSyncOptions;
}
export interface SecretSyncAwsSecretsManagerDestinationConfig {
    /**
    * The AWS region of your AWS Secrets Manager
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#aws_region SecretSyncAwsSecretsManager#aws_region}
    */
    readonly awsRegion: string;
    /**
    * The name of the AWS secret to map to. This only applies when mapping_behavior is set to 'many-to-one'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#aws_secrets_manager_secret_name SecretSyncAwsSecretsManager#aws_secrets_manager_secret_name}
    */
    readonly awsSecretsManagerSecretName?: string;
    /**
    * The behavior of the mapping. Can be 'many-to-one' or 'one-to-one'. Many to One: All Infisical secrets will be mapped to a single AWS secret. One to One: Each Infisical secret will be mapped to its own AWS secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#mapping_behavior SecretSyncAwsSecretsManager#mapping_behavior}
    */
    readonly mappingBehavior?: string;
}
export declare function secretSyncAwsSecretsManagerDestinationConfigToTerraform(struct?: SecretSyncAwsSecretsManagerDestinationConfig | cdktf.IResolvable): any;
export declare function secretSyncAwsSecretsManagerDestinationConfigToHclTerraform(struct?: SecretSyncAwsSecretsManagerDestinationConfig | cdktf.IResolvable): any;
export declare class SecretSyncAwsSecretsManagerDestinationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncAwsSecretsManagerDestinationConfig | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncAwsSecretsManagerDestinationConfig | cdktf.IResolvable | undefined);
    private _awsRegion?;
    get awsRegion(): string;
    set awsRegion(value: string);
    get awsRegionInput(): string;
    private _awsSecretsManagerSecretName?;
    get awsSecretsManagerSecretName(): string;
    set awsSecretsManagerSecretName(value: string);
    resetAwsSecretsManagerSecretName(): void;
    get awsSecretsManagerSecretNameInput(): string;
    private _mappingBehavior?;
    get mappingBehavior(): string;
    set mappingBehavior(value: string);
    resetMappingBehavior(): void;
    get mappingBehaviorInput(): string;
}
export interface SecretSyncAwsSecretsManagerSyncOptionsTags {
    /**
    * The key of the tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#key SecretSyncAwsSecretsManager#key}
    */
    readonly key: string;
    /**
    * The value of the tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#value SecretSyncAwsSecretsManager#value}
    */
    readonly value: string;
}
export declare function secretSyncAwsSecretsManagerSyncOptionsTagsToTerraform(struct?: SecretSyncAwsSecretsManagerSyncOptionsTags | cdktf.IResolvable): any;
export declare function secretSyncAwsSecretsManagerSyncOptionsTagsToHclTerraform(struct?: SecretSyncAwsSecretsManagerSyncOptionsTags | cdktf.IResolvable): any;
export declare class SecretSyncAwsSecretsManagerSyncOptionsTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecretSyncAwsSecretsManagerSyncOptionsTags | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncAwsSecretsManagerSyncOptionsTags | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
export declare class SecretSyncAwsSecretsManagerSyncOptionsTagsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecretSyncAwsSecretsManagerSyncOptionsTags[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecretSyncAwsSecretsManagerSyncOptionsTagsOutputReference;
}
export interface SecretSyncAwsSecretsManagerSyncOptions {
    /**
    * The AWS KMS key ID to use for encryption
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#aws_kms_key_id SecretSyncAwsSecretsManager#aws_kms_key_id}
    */
    readonly awsKmsKeyId?: string;
    /**
    * When set to true, Infisical will not remove secrets from AWS Secrets Manager. Enable this option if you intend to manage some secrets manually outside of Infisical.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#disable_secret_deletion SecretSyncAwsSecretsManager#disable_secret_deletion}
    */
    readonly disableSecretDeletion?: boolean | cdktf.IResolvable;
    /**
    * Specify how Infisical should resolve the initial sync to the destination. Supported options: overwrite-destination, import-prioritize-source, import-prioritize-destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#initial_sync_behavior SecretSyncAwsSecretsManager#initial_sync_behavior}
    */
    readonly initialSyncBehavior: string;
    /**
    * The format to use for structuring secret keys in the AWS Secrets Manager destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#key_schema SecretSyncAwsSecretsManager#key_schema}
    */
    readonly keySchema?: string;
    /**
    * Whether to sync the secret metadata as tags. This is only supported for the 'one-to-one' mapping behavior.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#sync_secret_metadata_as_tags SecretSyncAwsSecretsManager#sync_secret_metadata_as_tags}
    */
    readonly syncSecretMetadataAsTags?: boolean | cdktf.IResolvable;
    /**
    * The tags to sync to the secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#tags SecretSyncAwsSecretsManager#tags}
    */
    readonly tags?: SecretSyncAwsSecretsManagerSyncOptionsTags[] | cdktf.IResolvable;
}
export declare function secretSyncAwsSecretsManagerSyncOptionsToTerraform(struct?: SecretSyncAwsSecretsManagerSyncOptions | cdktf.IResolvable): any;
export declare function secretSyncAwsSecretsManagerSyncOptionsToHclTerraform(struct?: SecretSyncAwsSecretsManagerSyncOptions | cdktf.IResolvable): any;
export declare class SecretSyncAwsSecretsManagerSyncOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncAwsSecretsManagerSyncOptions | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncAwsSecretsManagerSyncOptions | cdktf.IResolvable | undefined);
    private _awsKmsKeyId?;
    get awsKmsKeyId(): string;
    set awsKmsKeyId(value: string);
    resetAwsKmsKeyId(): void;
    get awsKmsKeyIdInput(): string;
    private _disableSecretDeletion?;
    get disableSecretDeletion(): boolean | cdktf.IResolvable;
    set disableSecretDeletion(value: boolean | cdktf.IResolvable);
    resetDisableSecretDeletion(): void;
    get disableSecretDeletionInput(): any;
    private _initialSyncBehavior?;
    get initialSyncBehavior(): string;
    set initialSyncBehavior(value: string);
    get initialSyncBehaviorInput(): string;
    private _keySchema?;
    get keySchema(): string;
    set keySchema(value: string);
    resetKeySchema(): void;
    get keySchemaInput(): string;
    private _syncSecretMetadataAsTags?;
    get syncSecretMetadataAsTags(): boolean | cdktf.IResolvable;
    set syncSecretMetadataAsTags(value: boolean | cdktf.IResolvable);
    resetSyncSecretMetadataAsTags(): void;
    get syncSecretMetadataAsTagsInput(): any;
    private _tags;
    get tags(): SecretSyncAwsSecretsManagerSyncOptionsTagsList;
    putTags(value: SecretSyncAwsSecretsManagerSyncOptionsTags[] | cdktf.IResolvable): void;
    resetTags(): void;
    get tagsInput(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager infisical_secret_sync_aws_secrets_manager}
*/
export declare class SecretSyncAwsSecretsManager extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_sync_aws_secrets_manager";
    /**
    * Generates CDKTF code for importing a SecretSyncAwsSecretsManager resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretSyncAwsSecretsManager to import
    * @param importFromId The id of the existing SecretSyncAwsSecretsManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretSyncAwsSecretsManager to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager infisical_secret_sync_aws_secrets_manager} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretSyncAwsSecretsManagerConfig
    */
    constructor(scope: Construct, id: string, config: SecretSyncAwsSecretsManagerConfig);
    private _autoSyncEnabled?;
    get autoSyncEnabled(): boolean | cdktf.IResolvable;
    set autoSyncEnabled(value: boolean | cdktf.IResolvable);
    resetAutoSyncEnabled(): void;
    get autoSyncEnabledInput(): any;
    private _connectionId?;
    get connectionId(): string;
    set connectionId(value: string);
    get connectionIdInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _destinationConfig;
    get destinationConfig(): SecretSyncAwsSecretsManagerDestinationConfigOutputReference;
    putDestinationConfig(value: SecretSyncAwsSecretsManagerDestinationConfig): void;
    get destinationConfigInput(): any;
    private _environment?;
    get environment(): string;
    set environment(value: string);
    get environmentInput(): string;
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
    private _secretPath?;
    get secretPath(): string;
    set secretPath(value: string);
    get secretPathInput(): string;
    private _syncOptions;
    get syncOptions(): SecretSyncAwsSecretsManagerSyncOptionsOutputReference;
    putSyncOptions(value: SecretSyncAwsSecretsManagerSyncOptions): void;
    get syncOptionsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
