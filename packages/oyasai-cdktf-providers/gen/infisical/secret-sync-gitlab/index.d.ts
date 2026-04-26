import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretSyncGitlabConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether secrets should be automatically synced when changes occur at the source location or not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab#auto_sync_enabled SecretSyncGitlab#auto_sync_enabled}
    */
    readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
    /**
    * The ID of the gitlab Connection to use for syncing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab#connection_id SecretSyncGitlab#connection_id}
    */
    readonly connectionId: string;
    /**
    * An optional description for the GitLab sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab#description SecretSyncGitlab#description}
    */
    readonly description?: string;
    /**
    * The destination configuration for the secret sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab#destination_config SecretSyncGitlab#destination_config}
    */
    readonly destinationConfig: SecretSyncGitlabDestinationConfig;
    /**
    * The slug of the project environment to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab#environment SecretSyncGitlab#environment}
    */
    readonly environment: string;
    /**
    * The name of the GitLab sync to create. Must be slug-friendly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab#name SecretSyncGitlab#name}
    */
    readonly name: string;
    /**
    * The ID of the Infisical project to create the sync in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab#project_id SecretSyncGitlab#project_id}
    */
    readonly projectId: string;
    /**
    * The folder path to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab#secret_path SecretSyncGitlab#secret_path}
    */
    readonly secretPath: string;
    /**
    * Parameters to modify how secrets are synced.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab#sync_options SecretSyncGitlab#sync_options}
    */
    readonly syncOptions: SecretSyncGitlabSyncOptions;
}
export interface SecretSyncGitlabDestinationConfig {
    /**
    * The GitLab Group ID to sync secrets to. Required when scope is 'group'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab#group_id SecretSyncGitlab#group_id}
    */
    readonly groupId?: string;
    /**
    * The GitLab Group Name to sync secrets to. Optional when scope is 'group'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab#group_name SecretSyncGitlab#group_name}
    */
    readonly groupName?: string;
    /**
    * The GitLab Project ID to sync secrets to. Required when scope is 'project'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab#project_id SecretSyncGitlab#project_id}
    */
    readonly projectId?: string;
    /**
    * The GitLab Project Name to sync secrets to. Optional when scope is 'project'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab#project_name SecretSyncGitlab#project_name}
    */
    readonly projectName?: string;
    /**
    * The GitLab scope that secrets should be synced to. Supported options: 'project', 'group'
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab#scope SecretSyncGitlab#scope}
    */
    readonly scope: string;
    /**
    * Whether variables should be hidden
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab#should_hide_secrets SecretSyncGitlab#should_hide_secrets}
    */
    readonly shouldHideSecrets?: boolean | cdktf.IResolvable;
    /**
    * Whether variables should be masked in logs
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab#should_mask_secrets SecretSyncGitlab#should_mask_secrets}
    */
    readonly shouldMaskSecrets?: boolean | cdktf.IResolvable;
    /**
    * Whether variables should be protected
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab#should_protect_secrets SecretSyncGitlab#should_protect_secrets}
    */
    readonly shouldProtectSecrets?: boolean | cdktf.IResolvable;
    /**
    * The GitLab environment scope that secrets should be synced to. (default: *)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab#target_environment SecretSyncGitlab#target_environment}
    */
    readonly targetEnvironment: string;
}
export declare function secretSyncGitlabDestinationConfigToTerraform(struct?: SecretSyncGitlabDestinationConfig | cdktf.IResolvable): any;
export declare function secretSyncGitlabDestinationConfigToHclTerraform(struct?: SecretSyncGitlabDestinationConfig | cdktf.IResolvable): any;
export declare class SecretSyncGitlabDestinationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncGitlabDestinationConfig | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncGitlabDestinationConfig | cdktf.IResolvable | undefined);
    private _groupId?;
    get groupId(): string;
    set groupId(value: string);
    resetGroupId(): void;
    get groupIdInput(): string;
    private _groupName?;
    get groupName(): string;
    set groupName(value: string);
    resetGroupName(): void;
    get groupNameInput(): string;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    resetProjectId(): void;
    get projectIdInput(): string;
    private _projectName?;
    get projectName(): string;
    set projectName(value: string);
    resetProjectName(): void;
    get projectNameInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
    private _shouldHideSecrets?;
    get shouldHideSecrets(): boolean | cdktf.IResolvable;
    set shouldHideSecrets(value: boolean | cdktf.IResolvable);
    resetShouldHideSecrets(): void;
    get shouldHideSecretsInput(): any;
    private _shouldMaskSecrets?;
    get shouldMaskSecrets(): boolean | cdktf.IResolvable;
    set shouldMaskSecrets(value: boolean | cdktf.IResolvable);
    resetShouldMaskSecrets(): void;
    get shouldMaskSecretsInput(): any;
    private _shouldProtectSecrets?;
    get shouldProtectSecrets(): boolean | cdktf.IResolvable;
    set shouldProtectSecrets(value: boolean | cdktf.IResolvable);
    resetShouldProtectSecrets(): void;
    get shouldProtectSecretsInput(): any;
    private _targetEnvironment?;
    get targetEnvironment(): string;
    set targetEnvironment(value: string);
    get targetEnvironmentInput(): string;
}
export interface SecretSyncGitlabSyncOptions {
    /**
    * When set to true, Infisical will not remove secrets from GitLab. Enable this option if you intend to manage some secrets manually outside of Infisical.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab#disable_secret_deletion SecretSyncGitlab#disable_secret_deletion}
    */
    readonly disableSecretDeletion?: boolean | cdktf.IResolvable;
    /**
    * Specify how Infisical should resolve the initial sync to the destination. Supported options: overwrite-destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab#initial_sync_behavior SecretSyncGitlab#initial_sync_behavior}
    */
    readonly initialSyncBehavior: string;
    /**
    * The format to use for structuring secret keys in the GitLab destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab#key_schema SecretSyncGitlab#key_schema}
    */
    readonly keySchema?: string;
}
export declare function secretSyncGitlabSyncOptionsToTerraform(struct?: SecretSyncGitlabSyncOptions | cdktf.IResolvable): any;
export declare function secretSyncGitlabSyncOptionsToHclTerraform(struct?: SecretSyncGitlabSyncOptions | cdktf.IResolvable): any;
export declare class SecretSyncGitlabSyncOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncGitlabSyncOptions | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncGitlabSyncOptions | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab infisical_secret_sync_gitlab}
*/
export declare class SecretSyncGitlab extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_sync_gitlab";
    /**
    * Generates CDKTF code for importing a SecretSyncGitlab resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretSyncGitlab to import
    * @param importFromId The id of the existing SecretSyncGitlab that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretSyncGitlab to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab infisical_secret_sync_gitlab} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretSyncGitlabConfig
    */
    constructor(scope: Construct, id: string, config: SecretSyncGitlabConfig);
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
    get destinationConfig(): SecretSyncGitlabDestinationConfigOutputReference;
    putDestinationConfig(value: SecretSyncGitlabDestinationConfig): void;
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
    get syncOptions(): SecretSyncGitlabSyncOptionsOutputReference;
    putSyncOptions(value: SecretSyncGitlabSyncOptions): void;
    get syncOptionsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
