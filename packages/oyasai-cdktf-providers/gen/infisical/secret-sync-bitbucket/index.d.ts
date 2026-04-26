import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretSyncBitbucketConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether secrets should be automatically synced when changes occur at the source location or not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_bitbucket#auto_sync_enabled SecretSyncBitbucket#auto_sync_enabled}
    */
    readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
    /**
    * The ID of the bitbucket Connection to use for syncing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_bitbucket#connection_id SecretSyncBitbucket#connection_id}
    */
    readonly connectionId: string;
    /**
    * An optional description for the Bitbucket sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_bitbucket#description SecretSyncBitbucket#description}
    */
    readonly description?: string;
    /**
    * The destination configuration for the secret sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_bitbucket#destination_config SecretSyncBitbucket#destination_config}
    */
    readonly destinationConfig: SecretSyncBitbucketDestinationConfig;
    /**
    * The slug of the project environment to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_bitbucket#environment SecretSyncBitbucket#environment}
    */
    readonly environment: string;
    /**
    * The name of the Bitbucket sync to create. Must be slug-friendly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_bitbucket#name SecretSyncBitbucket#name}
    */
    readonly name: string;
    /**
    * The ID of the Infisical project to create the sync in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_bitbucket#project_id SecretSyncBitbucket#project_id}
    */
    readonly projectId: string;
    /**
    * The folder path to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_bitbucket#secret_path SecretSyncBitbucket#secret_path}
    */
    readonly secretPath: string;
    /**
    * Parameters to modify how secrets are synced.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_bitbucket#sync_options SecretSyncBitbucket#sync_options}
    */
    readonly syncOptions: SecretSyncBitbucketSyncOptions;
}
export interface SecretSyncBitbucketDestinationConfig {
    /**
    * The Bitbucket deployment environment ID (optional).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_bitbucket#environment_id SecretSyncBitbucket#environment_id}
    */
    readonly environmentId?: string;
    /**
    * The Bitbucket repository slug to sync secrets to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_bitbucket#repository_slug SecretSyncBitbucket#repository_slug}
    */
    readonly repositorySlug: string;
    /**
    * The Bitbucket workspace slug.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_bitbucket#workspace_slug SecretSyncBitbucket#workspace_slug}
    */
    readonly workspaceSlug: string;
}
export declare function secretSyncBitbucketDestinationConfigToTerraform(struct?: SecretSyncBitbucketDestinationConfig | cdktf.IResolvable): any;
export declare function secretSyncBitbucketDestinationConfigToHclTerraform(struct?: SecretSyncBitbucketDestinationConfig | cdktf.IResolvable): any;
export declare class SecretSyncBitbucketDestinationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncBitbucketDestinationConfig | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncBitbucketDestinationConfig | cdktf.IResolvable | undefined);
    private _environmentId?;
    get environmentId(): string;
    set environmentId(value: string);
    resetEnvironmentId(): void;
    get environmentIdInput(): string;
    private _repositorySlug?;
    get repositorySlug(): string;
    set repositorySlug(value: string);
    get repositorySlugInput(): string;
    private _workspaceSlug?;
    get workspaceSlug(): string;
    set workspaceSlug(value: string);
    get workspaceSlugInput(): string;
}
export interface SecretSyncBitbucketSyncOptions {
    /**
    * When set to true, Infisical will not remove secrets from Bitbucket. Enable this option if you intend to manage some secrets manually outside of Infisical.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_bitbucket#disable_secret_deletion SecretSyncBitbucket#disable_secret_deletion}
    */
    readonly disableSecretDeletion?: boolean | cdktf.IResolvable;
    /**
    * Specify how Infisical should resolve the initial sync to the destination. Supported options: overwrite-destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_bitbucket#initial_sync_behavior SecretSyncBitbucket#initial_sync_behavior}
    */
    readonly initialSyncBehavior: string;
    /**
    * The format to use for structuring secret keys in the Bitbucket destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_bitbucket#key_schema SecretSyncBitbucket#key_schema}
    */
    readonly keySchema?: string;
}
export declare function secretSyncBitbucketSyncOptionsToTerraform(struct?: SecretSyncBitbucketSyncOptions | cdktf.IResolvable): any;
export declare function secretSyncBitbucketSyncOptionsToHclTerraform(struct?: SecretSyncBitbucketSyncOptions | cdktf.IResolvable): any;
export declare class SecretSyncBitbucketSyncOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncBitbucketSyncOptions | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncBitbucketSyncOptions | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_bitbucket infisical_secret_sync_bitbucket}
*/
export declare class SecretSyncBitbucket extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_sync_bitbucket";
    /**
    * Generates CDKTF code for importing a SecretSyncBitbucket resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretSyncBitbucket to import
    * @param importFromId The id of the existing SecretSyncBitbucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_bitbucket#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretSyncBitbucket to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_bitbucket infisical_secret_sync_bitbucket} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretSyncBitbucketConfig
    */
    constructor(scope: Construct, id: string, config: SecretSyncBitbucketConfig);
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
    get destinationConfig(): SecretSyncBitbucketDestinationConfigOutputReference;
    putDestinationConfig(value: SecretSyncBitbucketDestinationConfig): void;
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
    get syncOptions(): SecretSyncBitbucketSyncOptionsOutputReference;
    putSyncOptions(value: SecretSyncBitbucketSyncOptions): void;
    get syncOptionsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
