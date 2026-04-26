import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretSyncDatabricksConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether secrets should be automatically synced when changes occur at the source location or not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_databricks#auto_sync_enabled SecretSyncDatabricks#auto_sync_enabled}
    */
    readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
    /**
    * The ID of the databricks Connection to use for syncing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_databricks#connection_id SecretSyncDatabricks#connection_id}
    */
    readonly connectionId: string;
    /**
    * An optional description for the Databricks sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_databricks#description SecretSyncDatabricks#description}
    */
    readonly description?: string;
    /**
    * The destination configuration for the secret sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_databricks#destination_config SecretSyncDatabricks#destination_config}
    */
    readonly destinationConfig: SecretSyncDatabricksDestinationConfig;
    /**
    * The slug of the project environment to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_databricks#environment SecretSyncDatabricks#environment}
    */
    readonly environment: string;
    /**
    * The name of the Databricks sync to create. Must be slug-friendly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_databricks#name SecretSyncDatabricks#name}
    */
    readonly name: string;
    /**
    * The ID of the Infisical project to create the sync in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_databricks#project_id SecretSyncDatabricks#project_id}
    */
    readonly projectId: string;
    /**
    * The folder path to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_databricks#secret_path SecretSyncDatabricks#secret_path}
    */
    readonly secretPath: string;
    /**
    * Parameters to modify how secrets are synced.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_databricks#sync_options SecretSyncDatabricks#sync_options}
    */
    readonly syncOptions: SecretSyncDatabricksSyncOptions;
}
export interface SecretSyncDatabricksDestinationConfig {
    /**
    * The Databricks secret scope to sync secrets to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_databricks#scope SecretSyncDatabricks#scope}
    */
    readonly scope: string;
}
export declare function secretSyncDatabricksDestinationConfigToTerraform(struct?: SecretSyncDatabricksDestinationConfig | cdktf.IResolvable): any;
export declare function secretSyncDatabricksDestinationConfigToHclTerraform(struct?: SecretSyncDatabricksDestinationConfig | cdktf.IResolvable): any;
export declare class SecretSyncDatabricksDestinationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncDatabricksDestinationConfig | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncDatabricksDestinationConfig | cdktf.IResolvable | undefined);
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface SecretSyncDatabricksSyncOptions {
    /**
    * When set to true, Infisical will not remove secrets from Databricks. Enable this option if you intend to manage some secrets manually outside of Infisical.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_databricks#disable_secret_deletion SecretSyncDatabricks#disable_secret_deletion}
    */
    readonly disableSecretDeletion?: boolean | cdktf.IResolvable;
    /**
    * Specify how Infisical should resolve the initial sync to the destination. Supported options: overwrite-destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_databricks#initial_sync_behavior SecretSyncDatabricks#initial_sync_behavior}
    */
    readonly initialSyncBehavior: string;
    /**
    * The format to use for structuring secret keys in the Databricks destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_databricks#key_schema SecretSyncDatabricks#key_schema}
    */
    readonly keySchema?: string;
}
export declare function secretSyncDatabricksSyncOptionsToTerraform(struct?: SecretSyncDatabricksSyncOptions | cdktf.IResolvable): any;
export declare function secretSyncDatabricksSyncOptionsToHclTerraform(struct?: SecretSyncDatabricksSyncOptions | cdktf.IResolvable): any;
export declare class SecretSyncDatabricksSyncOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncDatabricksSyncOptions | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncDatabricksSyncOptions | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_databricks infisical_secret_sync_databricks}
*/
export declare class SecretSyncDatabricks extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_sync_databricks";
    /**
    * Generates CDKTF code for importing a SecretSyncDatabricks resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretSyncDatabricks to import
    * @param importFromId The id of the existing SecretSyncDatabricks that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_databricks#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretSyncDatabricks to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_databricks infisical_secret_sync_databricks} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretSyncDatabricksConfig
    */
    constructor(scope: Construct, id: string, config: SecretSyncDatabricksConfig);
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
    get destinationConfig(): SecretSyncDatabricksDestinationConfigOutputReference;
    putDestinationConfig(value: SecretSyncDatabricksDestinationConfig): void;
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
    get syncOptions(): SecretSyncDatabricksSyncOptionsOutputReference;
    putSyncOptions(value: SecretSyncDatabricksSyncOptions): void;
    get syncOptionsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
