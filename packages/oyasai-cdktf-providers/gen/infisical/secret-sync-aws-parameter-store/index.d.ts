import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretSyncAwsParameterStoreConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether secrets should be automatically synced when changes occur at the source location or not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_parameter_store#auto_sync_enabled SecretSyncAwsParameterStore#auto_sync_enabled}
    */
    readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
    /**
    * The ID of the aws Connection to use for syncing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_parameter_store#connection_id SecretSyncAwsParameterStore#connection_id}
    */
    readonly connectionId: string;
    /**
    * An optional description for the AWS Parameter Store sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_parameter_store#description SecretSyncAwsParameterStore#description}
    */
    readonly description?: string;
    /**
    * The destination configuration for the secret sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_parameter_store#destination_config SecretSyncAwsParameterStore#destination_config}
    */
    readonly destinationConfig: SecretSyncAwsParameterStoreDestinationConfig;
    /**
    * The slug of the project environment to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_parameter_store#environment SecretSyncAwsParameterStore#environment}
    */
    readonly environment: string;
    /**
    * The name of the AWS Parameter Store sync to create. Must be slug-friendly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_parameter_store#name SecretSyncAwsParameterStore#name}
    */
    readonly name: string;
    /**
    * The ID of the Infisical project to create the sync in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_parameter_store#project_id SecretSyncAwsParameterStore#project_id}
    */
    readonly projectId: string;
    /**
    * The folder path to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_parameter_store#secret_path SecretSyncAwsParameterStore#secret_path}
    */
    readonly secretPath: string;
    /**
    * Parameters to modify how secrets are synced.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_parameter_store#sync_options SecretSyncAwsParameterStore#sync_options}
    */
    readonly syncOptions: SecretSyncAwsParameterStoreSyncOptions;
}
export interface SecretSyncAwsParameterStoreDestinationConfig {
    /**
    * The AWS region of your AWS Parameter Store
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_parameter_store#aws_region SecretSyncAwsParameterStore#aws_region}
    */
    readonly awsRegion: string;
    /**
    * The path in the AWS Parameter Store where the secrets will be stored, Example: /example/path/
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_parameter_store#path SecretSyncAwsParameterStore#path}
    */
    readonly path: string;
}
export declare function secretSyncAwsParameterStoreDestinationConfigToTerraform(struct?: SecretSyncAwsParameterStoreDestinationConfig | cdktf.IResolvable): any;
export declare function secretSyncAwsParameterStoreDestinationConfigToHclTerraform(struct?: SecretSyncAwsParameterStoreDestinationConfig | cdktf.IResolvable): any;
export declare class SecretSyncAwsParameterStoreDestinationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncAwsParameterStoreDestinationConfig | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncAwsParameterStoreDestinationConfig | cdktf.IResolvable | undefined);
    private _awsRegion?;
    get awsRegion(): string;
    set awsRegion(value: string);
    get awsRegionInput(): string;
    private _path?;
    get path(): string;
    set path(value: string);
    get pathInput(): string;
}
export interface SecretSyncAwsParameterStoreSyncOptionsTags {
    /**
    * The key of the tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_parameter_store#key SecretSyncAwsParameterStore#key}
    */
    readonly key: string;
    /**
    * The value of the tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_parameter_store#value SecretSyncAwsParameterStore#value}
    */
    readonly value: string;
}
export declare function secretSyncAwsParameterStoreSyncOptionsTagsToTerraform(struct?: SecretSyncAwsParameterStoreSyncOptionsTags | cdktf.IResolvable): any;
export declare function secretSyncAwsParameterStoreSyncOptionsTagsToHclTerraform(struct?: SecretSyncAwsParameterStoreSyncOptionsTags | cdktf.IResolvable): any;
export declare class SecretSyncAwsParameterStoreSyncOptionsTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecretSyncAwsParameterStoreSyncOptionsTags | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncAwsParameterStoreSyncOptionsTags | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
export declare class SecretSyncAwsParameterStoreSyncOptionsTagsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecretSyncAwsParameterStoreSyncOptionsTags[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecretSyncAwsParameterStoreSyncOptionsTagsOutputReference;
}
export interface SecretSyncAwsParameterStoreSyncOptions {
    /**
    * The AWS KMS key ID to use for encryption
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_parameter_store#aws_kms_key_id SecretSyncAwsParameterStore#aws_kms_key_id}
    */
    readonly awsKmsKeyId?: string;
    /**
    * When set to true, Infisical will not remove secrets from AWS Parameter Store. Enable this option if you intend to manage some secrets manually outside of Infisical.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_parameter_store#disable_secret_deletion SecretSyncAwsParameterStore#disable_secret_deletion}
    */
    readonly disableSecretDeletion?: boolean | cdktf.IResolvable;
    /**
    * Specify how Infisical should resolve the initial sync to the destination. Supported options: overwrite-destination, import-prioritize-source, import-prioritize-destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_parameter_store#initial_sync_behavior SecretSyncAwsParameterStore#initial_sync_behavior}
    */
    readonly initialSyncBehavior: string;
    /**
    * The format to use for structuring secret keys in the AWS Parameter Store destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_parameter_store#key_schema SecretSyncAwsParameterStore#key_schema}
    */
    readonly keySchema?: string;
    /**
    * Whether to sync the secret metadata as tags
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_parameter_store#sync_secret_metadata_as_tags SecretSyncAwsParameterStore#sync_secret_metadata_as_tags}
    */
    readonly syncSecretMetadataAsTags?: boolean | cdktf.IResolvable;
    /**
    * The tags to sync to the secret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_parameter_store#tags SecretSyncAwsParameterStore#tags}
    */
    readonly tags?: SecretSyncAwsParameterStoreSyncOptionsTags[] | cdktf.IResolvable;
}
export declare function secretSyncAwsParameterStoreSyncOptionsToTerraform(struct?: SecretSyncAwsParameterStoreSyncOptions | cdktf.IResolvable): any;
export declare function secretSyncAwsParameterStoreSyncOptionsToHclTerraform(struct?: SecretSyncAwsParameterStoreSyncOptions | cdktf.IResolvable): any;
export declare class SecretSyncAwsParameterStoreSyncOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncAwsParameterStoreSyncOptions | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncAwsParameterStoreSyncOptions | cdktf.IResolvable | undefined);
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
    get tags(): SecretSyncAwsParameterStoreSyncOptionsTagsList;
    putTags(value: SecretSyncAwsParameterStoreSyncOptionsTags[] | cdktf.IResolvable): void;
    resetTags(): void;
    get tagsInput(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_parameter_store infisical_secret_sync_aws_parameter_store}
*/
export declare class SecretSyncAwsParameterStore extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_sync_aws_parameter_store";
    /**
    * Generates CDKTF code for importing a SecretSyncAwsParameterStore resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretSyncAwsParameterStore to import
    * @param importFromId The id of the existing SecretSyncAwsParameterStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_parameter_store#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretSyncAwsParameterStore to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_parameter_store infisical_secret_sync_aws_parameter_store} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretSyncAwsParameterStoreConfig
    */
    constructor(scope: Construct, id: string, config: SecretSyncAwsParameterStoreConfig);
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
    get destinationConfig(): SecretSyncAwsParameterStoreDestinationConfigOutputReference;
    putDestinationConfig(value: SecretSyncAwsParameterStoreDestinationConfig): void;
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
    get syncOptions(): SecretSyncAwsParameterStoreSyncOptionsOutputReference;
    putSyncOptions(value: SecretSyncAwsParameterStoreSyncOptions): void;
    get syncOptionsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
