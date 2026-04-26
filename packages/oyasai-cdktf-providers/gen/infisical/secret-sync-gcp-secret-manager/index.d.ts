import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretSyncGcpSecretManagerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether secrets should be automatically synced when changes occur at the source location or not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gcp_secret_manager#auto_sync_enabled SecretSyncGcpSecretManager#auto_sync_enabled}
    */
    readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
    /**
    * The ID of the GCP Connection to use for syncing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gcp_secret_manager#connection_id SecretSyncGcpSecretManager#connection_id}
    */
    readonly connectionId: string;
    /**
    * An optional description for the GCP Secret Manager sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gcp_secret_manager#description SecretSyncGcpSecretManager#description}
    */
    readonly description?: string;
    /**
    * The destination configuration for the secret sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gcp_secret_manager#destination_config SecretSyncGcpSecretManager#destination_config}
    */
    readonly destinationConfig: SecretSyncGcpSecretManagerDestinationConfig;
    /**
    * The slug of the project environment to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gcp_secret_manager#environment SecretSyncGcpSecretManager#environment}
    */
    readonly environment: string;
    /**
    * The name of the GCP Secret Manager sync to create. Must be slug-friendly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gcp_secret_manager#name SecretSyncGcpSecretManager#name}
    */
    readonly name: string;
    /**
    * The ID of the Infisical project to create the sync in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gcp_secret_manager#project_id SecretSyncGcpSecretManager#project_id}
    */
    readonly projectId: string;
    /**
    * The folder path to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gcp_secret_manager#secret_path SecretSyncGcpSecretManager#secret_path}
    */
    readonly secretPath: string;
    /**
    * Parameters to modify how secrets are synced.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gcp_secret_manager#sync_options SecretSyncGcpSecretManager#sync_options}
    */
    readonly syncOptions: SecretSyncGcpSecretManagerSyncOptions;
}
export interface SecretSyncGcpSecretManagerDestinationConfig {
    /**
    * The ID of the GCP project to sync with
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gcp_secret_manager#project_id SecretSyncGcpSecretManager#project_id}
    */
    readonly projectId: string;
    /**
    * The scope of the sync with GCP Secret Manager. Supported options: global
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gcp_secret_manager#scope SecretSyncGcpSecretManager#scope}
    */
    readonly scope?: string;
}
export declare function secretSyncGcpSecretManagerDestinationConfigToTerraform(struct?: SecretSyncGcpSecretManagerDestinationConfig | cdktf.IResolvable): any;
export declare function secretSyncGcpSecretManagerDestinationConfigToHclTerraform(struct?: SecretSyncGcpSecretManagerDestinationConfig | cdktf.IResolvable): any;
export declare class SecretSyncGcpSecretManagerDestinationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncGcpSecretManagerDestinationConfig | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncGcpSecretManagerDestinationConfig | cdktf.IResolvable | undefined);
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    resetScope(): void;
    get scopeInput(): string;
}
export interface SecretSyncGcpSecretManagerSyncOptions {
    /**
    * When set to true, Infisical will not remove secrets from GCP Secret Manager. Enable this option if you intend to manage some secrets manually outside of Infisical.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gcp_secret_manager#disable_secret_deletion SecretSyncGcpSecretManager#disable_secret_deletion}
    */
    readonly disableSecretDeletion?: boolean | cdktf.IResolvable;
    /**
    * Specify how Infisical should resolve the initial sync to the destination. Supported options: overwrite-destination, import-prioritize-source, import-prioritize-destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gcp_secret_manager#initial_sync_behavior SecretSyncGcpSecretManager#initial_sync_behavior}
    */
    readonly initialSyncBehavior: string;
    /**
    * The format to use for structuring secret keys in the GCP Secret Manager destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gcp_secret_manager#key_schema SecretSyncGcpSecretManager#key_schema}
    */
    readonly keySchema?: string;
}
export declare function secretSyncGcpSecretManagerSyncOptionsToTerraform(struct?: SecretSyncGcpSecretManagerSyncOptions | cdktf.IResolvable): any;
export declare function secretSyncGcpSecretManagerSyncOptionsToHclTerraform(struct?: SecretSyncGcpSecretManagerSyncOptions | cdktf.IResolvable): any;
export declare class SecretSyncGcpSecretManagerSyncOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncGcpSecretManagerSyncOptions | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncGcpSecretManagerSyncOptions | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gcp_secret_manager infisical_secret_sync_gcp_secret_manager}
*/
export declare class SecretSyncGcpSecretManager extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_sync_gcp_secret_manager";
    /**
    * Generates CDKTF code for importing a SecretSyncGcpSecretManager resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretSyncGcpSecretManager to import
    * @param importFromId The id of the existing SecretSyncGcpSecretManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gcp_secret_manager#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretSyncGcpSecretManager to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gcp_secret_manager infisical_secret_sync_gcp_secret_manager} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretSyncGcpSecretManagerConfig
    */
    constructor(scope: Construct, id: string, config: SecretSyncGcpSecretManagerConfig);
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
    get destinationConfig(): SecretSyncGcpSecretManagerDestinationConfigOutputReference;
    putDestinationConfig(value: SecretSyncGcpSecretManagerDestinationConfig): void;
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
    get syncOptions(): SecretSyncGcpSecretManagerSyncOptionsOutputReference;
    putSyncOptions(value: SecretSyncGcpSecretManagerSyncOptions): void;
    get syncOptionsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
