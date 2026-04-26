import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretSyncGithubConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether secrets should be automatically synced when changes occur at the source location or not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_github#auto_sync_enabled SecretSyncGithub#auto_sync_enabled}
    */
    readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
    /**
    * The ID of the github Connection to use for syncing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_github#connection_id SecretSyncGithub#connection_id}
    */
    readonly connectionId: string;
    /**
    * An optional description for the Github sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_github#description SecretSyncGithub#description}
    */
    readonly description?: string;
    /**
    * The destination configuration for the secret sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_github#destination_config SecretSyncGithub#destination_config}
    */
    readonly destinationConfig: SecretSyncGithubDestinationConfig;
    /**
    * The slug of the project environment to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_github#environment SecretSyncGithub#environment}
    */
    readonly environment: string;
    /**
    * The name of the Github sync to create. Must be slug-friendly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_github#name SecretSyncGithub#name}
    */
    readonly name: string;
    /**
    * The ID of the Infisical project to create the sync in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_github#project_id SecretSyncGithub#project_id}
    */
    readonly projectId: string;
    /**
    * The folder path to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_github#secret_path SecretSyncGithub#secret_path}
    */
    readonly secretPath: string;
    /**
    * Parameters to modify how secrets are synced.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_github#sync_options SecretSyncGithub#sync_options}
    */
    readonly syncOptions: SecretSyncGithubSyncOptions;
}
export interface SecretSyncGithubDestinationConfig {
    /**
    * The environment to sync the secrets to, required if scope is `repository-environment`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_github#repository_environment SecretSyncGithub#repository_environment}
    */
    readonly repositoryEnvironment?: string;
    /**
    * The repository to sync the secrets to, required if scope is `repository` or `repository-environment`. This is only the name of the repository, without the repository owner included. As an example if you have a repository called Infisical/go-sdk, you would only need to provide `go-sdk` here.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_github#repository_name SecretSyncGithub#repository_name}
    */
    readonly repositoryName?: string;
    /**
    * The owner of the Github repository, required if scope is `repository`, `repository-environment`, or `organization`. This is the organization name, or the username for personal repositories. As an example if you have a repository called Infisical/go-sdk, you would only need to provide `Infisical` here.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_github#repository_owner SecretSyncGithub#repository_owner}
    */
    readonly repositoryOwner?: string;
    /**
    * The scope to sync the secrets to, repository|organization
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_github#scope SecretSyncGithub#scope}
    */
    readonly scope: string;
    /**
    * The repository ids to sync the secrets to, required if scope is `organization` and the visibility field is set to `selected`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_github#selected_repository_ids SecretSyncGithub#selected_repository_ids}
    */
    readonly selectedRepositoryIds?: number[];
    /**
    * The visibility of the Github repository, required if scope is `organization`. Accepted values are: `all`|`private`|`selected`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_github#visibility SecretSyncGithub#visibility}
    */
    readonly visibility?: string;
}
export declare function secretSyncGithubDestinationConfigToTerraform(struct?: SecretSyncGithubDestinationConfig | cdktf.IResolvable): any;
export declare function secretSyncGithubDestinationConfigToHclTerraform(struct?: SecretSyncGithubDestinationConfig | cdktf.IResolvable): any;
export declare class SecretSyncGithubDestinationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncGithubDestinationConfig | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncGithubDestinationConfig | cdktf.IResolvable | undefined);
    private _repositoryEnvironment?;
    get repositoryEnvironment(): string;
    set repositoryEnvironment(value: string);
    resetRepositoryEnvironment(): void;
    get repositoryEnvironmentInput(): string;
    private _repositoryName?;
    get repositoryName(): string;
    set repositoryName(value: string);
    resetRepositoryName(): void;
    get repositoryNameInput(): string;
    private _repositoryOwner?;
    get repositoryOwner(): string;
    set repositoryOwner(value: string);
    resetRepositoryOwner(): void;
    get repositoryOwnerInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
    private _selectedRepositoryIds?;
    get selectedRepositoryIds(): number[];
    set selectedRepositoryIds(value: number[]);
    resetSelectedRepositoryIds(): void;
    get selectedRepositoryIdsInput(): number[];
    private _visibility?;
    get visibility(): string;
    set visibility(value: string);
    resetVisibility(): void;
    get visibilityInput(): string;
}
export interface SecretSyncGithubSyncOptions {
    /**
    * When set to true, Infisical will not remove secrets from Github. Enable this option if you intend to manage some secrets manually outside of Infisical.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_github#disable_secret_deletion SecretSyncGithub#disable_secret_deletion}
    */
    readonly disableSecretDeletion?: boolean | cdktf.IResolvable;
    /**
    * Specify how Infisical should resolve the initial sync to the destination. Supported options: overwrite-destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_github#initial_sync_behavior SecretSyncGithub#initial_sync_behavior}
    */
    readonly initialSyncBehavior: string;
    /**
    * The format to use for structuring secret keys in the Github destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_github#key_schema SecretSyncGithub#key_schema}
    */
    readonly keySchema?: string;
}
export declare function secretSyncGithubSyncOptionsToTerraform(struct?: SecretSyncGithubSyncOptions | cdktf.IResolvable): any;
export declare function secretSyncGithubSyncOptionsToHclTerraform(struct?: SecretSyncGithubSyncOptions | cdktf.IResolvable): any;
export declare class SecretSyncGithubSyncOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncGithubSyncOptions | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncGithubSyncOptions | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_github infisical_secret_sync_github}
*/
export declare class SecretSyncGithub extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_sync_github";
    /**
    * Generates CDKTF code for importing a SecretSyncGithub resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretSyncGithub to import
    * @param importFromId The id of the existing SecretSyncGithub that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_github#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretSyncGithub to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_github infisical_secret_sync_github} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretSyncGithubConfig
    */
    constructor(scope: Construct, id: string, config: SecretSyncGithubConfig);
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
    get destinationConfig(): SecretSyncGithubDestinationConfigOutputReference;
    putDestinationConfig(value: SecretSyncGithubDestinationConfig): void;
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
    get syncOptions(): SecretSyncGithubSyncOptionsOutputReference;
    putSyncOptions(value: SecretSyncGithubSyncOptions): void;
    get syncOptionsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
