import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretSyncFlyioConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether secrets should be automatically synced when changes occur at the source location or not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_flyio#auto_sync_enabled SecretSyncFlyio#auto_sync_enabled}
    */
    readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
    /**
    * The ID of the flyio Connection to use for syncing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_flyio#connection_id SecretSyncFlyio#connection_id}
    */
    readonly connectionId: string;
    /**
    * An optional description for the Fly.io sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_flyio#description SecretSyncFlyio#description}
    */
    readonly description?: string;
    /**
    * The destination configuration for the secret sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_flyio#destination_config SecretSyncFlyio#destination_config}
    */
    readonly destinationConfig: SecretSyncFlyioDestinationConfig;
    /**
    * The slug of the project environment to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_flyio#environment SecretSyncFlyio#environment}
    */
    readonly environment: string;
    /**
    * The name of the Fly.io sync to create. Must be slug-friendly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_flyio#name SecretSyncFlyio#name}
    */
    readonly name: string;
    /**
    * The ID of the Infisical project to create the sync in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_flyio#project_id SecretSyncFlyio#project_id}
    */
    readonly projectId: string;
    /**
    * The folder path to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_flyio#secret_path SecretSyncFlyio#secret_path}
    */
    readonly secretPath: string;
    /**
    * Parameters to modify how secrets are synced.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_flyio#sync_options SecretSyncFlyio#sync_options}
    */
    readonly syncOptions: SecretSyncFlyioSyncOptions;
}
export interface SecretSyncFlyioDestinationConfig {
    /**
    * The Fly.io app ID to sync secrets to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_flyio#app_id SecretSyncFlyio#app_id}
    */
    readonly appId: string;
}
export declare function secretSyncFlyioDestinationConfigToTerraform(struct?: SecretSyncFlyioDestinationConfig | cdktf.IResolvable): any;
export declare function secretSyncFlyioDestinationConfigToHclTerraform(struct?: SecretSyncFlyioDestinationConfig | cdktf.IResolvable): any;
export declare class SecretSyncFlyioDestinationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncFlyioDestinationConfig | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncFlyioDestinationConfig | cdktf.IResolvable | undefined);
    private _appId?;
    get appId(): string;
    set appId(value: string);
    get appIdInput(): string;
}
export interface SecretSyncFlyioSyncOptions {
    /**
    * When set to true, Infisical will not remove secrets from Fly.io. Enable this option if you intend to manage some secrets manually outside of Infisical.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_flyio#disable_secret_deletion SecretSyncFlyio#disable_secret_deletion}
    */
    readonly disableSecretDeletion?: boolean | cdktf.IResolvable;
    /**
    * Specify how Infisical should resolve the initial sync to the destination. Supported options: overwrite-destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_flyio#initial_sync_behavior SecretSyncFlyio#initial_sync_behavior}
    */
    readonly initialSyncBehavior: string;
    /**
    * The format to use for structuring secret keys in the Fly.io destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_flyio#key_schema SecretSyncFlyio#key_schema}
    */
    readonly keySchema?: string;
}
export declare function secretSyncFlyioSyncOptionsToTerraform(struct?: SecretSyncFlyioSyncOptions | cdktf.IResolvable): any;
export declare function secretSyncFlyioSyncOptionsToHclTerraform(struct?: SecretSyncFlyioSyncOptions | cdktf.IResolvable): any;
export declare class SecretSyncFlyioSyncOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncFlyioSyncOptions | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncFlyioSyncOptions | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_flyio infisical_secret_sync_flyio}
*/
export declare class SecretSyncFlyio extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_sync_flyio";
    /**
    * Generates CDKTF code for importing a SecretSyncFlyio resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretSyncFlyio to import
    * @param importFromId The id of the existing SecretSyncFlyio that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_flyio#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretSyncFlyio to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_flyio infisical_secret_sync_flyio} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretSyncFlyioConfig
    */
    constructor(scope: Construct, id: string, config: SecretSyncFlyioConfig);
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
    get destinationConfig(): SecretSyncFlyioDestinationConfigOutputReference;
    putDestinationConfig(value: SecretSyncFlyioDestinationConfig): void;
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
    get syncOptions(): SecretSyncFlyioSyncOptionsOutputReference;
    putSyncOptions(value: SecretSyncFlyioSyncOptions): void;
    get syncOptionsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
