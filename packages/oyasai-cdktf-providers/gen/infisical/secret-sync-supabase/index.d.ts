import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretSyncSupabaseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether secrets should be automatically synced when changes occur at the source location or not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_supabase#auto_sync_enabled SecretSyncSupabase#auto_sync_enabled}
    */
    readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
    /**
    * The ID of the supabase Connection to use for syncing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_supabase#connection_id SecretSyncSupabase#connection_id}
    */
    readonly connectionId: string;
    /**
    * An optional description for the Supabase sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_supabase#description SecretSyncSupabase#description}
    */
    readonly description?: string;
    /**
    * The destination configuration for the secret sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_supabase#destination_config SecretSyncSupabase#destination_config}
    */
    readonly destinationConfig: SecretSyncSupabaseDestinationConfig;
    /**
    * The slug of the project environment to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_supabase#environment SecretSyncSupabase#environment}
    */
    readonly environment: string;
    /**
    * The name of the Supabase sync to create. Must be slug-friendly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_supabase#name SecretSyncSupabase#name}
    */
    readonly name: string;
    /**
    * The ID of the Infisical project to create the sync in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_supabase#project_id SecretSyncSupabase#project_id}
    */
    readonly projectId: string;
    /**
    * The folder path to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_supabase#secret_path SecretSyncSupabase#secret_path}
    */
    readonly secretPath: string;
    /**
    * Parameters to modify how secrets are synced.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_supabase#sync_options SecretSyncSupabase#sync_options}
    */
    readonly syncOptions: SecretSyncSupabaseSyncOptions;
}
export interface SecretSyncSupabaseDestinationConfig {
    /**
    * The Supabase project ID to sync secrets to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_supabase#project_id SecretSyncSupabase#project_id}
    */
    readonly projectId: string;
    /**
    * The Supabase project name (optional).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_supabase#project_name SecretSyncSupabase#project_name}
    */
    readonly projectName?: string;
}
export declare function secretSyncSupabaseDestinationConfigToTerraform(struct?: SecretSyncSupabaseDestinationConfig | cdktf.IResolvable): any;
export declare function secretSyncSupabaseDestinationConfigToHclTerraform(struct?: SecretSyncSupabaseDestinationConfig | cdktf.IResolvable): any;
export declare class SecretSyncSupabaseDestinationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncSupabaseDestinationConfig | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncSupabaseDestinationConfig | cdktf.IResolvable | undefined);
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
    private _projectName?;
    get projectName(): string;
    set projectName(value: string);
    resetProjectName(): void;
    get projectNameInput(): string;
}
export interface SecretSyncSupabaseSyncOptions {
    /**
    * When set to true, Infisical will not remove secrets from Supabase. Enable this option if you intend to manage some secrets manually outside of Infisical.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_supabase#disable_secret_deletion SecretSyncSupabase#disable_secret_deletion}
    */
    readonly disableSecretDeletion?: boolean | cdktf.IResolvable;
    /**
    * Specify how Infisical should resolve the initial sync to the destination. Supported options: overwrite-destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_supabase#initial_sync_behavior SecretSyncSupabase#initial_sync_behavior}
    */
    readonly initialSyncBehavior: string;
    /**
    * The format to use for structuring secret keys in the Supabase destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_supabase#key_schema SecretSyncSupabase#key_schema}
    */
    readonly keySchema?: string;
}
export declare function secretSyncSupabaseSyncOptionsToTerraform(struct?: SecretSyncSupabaseSyncOptions | cdktf.IResolvable): any;
export declare function secretSyncSupabaseSyncOptionsToHclTerraform(struct?: SecretSyncSupabaseSyncOptions | cdktf.IResolvable): any;
export declare class SecretSyncSupabaseSyncOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncSupabaseSyncOptions | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncSupabaseSyncOptions | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_supabase infisical_secret_sync_supabase}
*/
export declare class SecretSyncSupabase extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_sync_supabase";
    /**
    * Generates CDKTF code for importing a SecretSyncSupabase resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretSyncSupabase to import
    * @param importFromId The id of the existing SecretSyncSupabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_supabase#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretSyncSupabase to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_supabase infisical_secret_sync_supabase} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretSyncSupabaseConfig
    */
    constructor(scope: Construct, id: string, config: SecretSyncSupabaseConfig);
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
    get destinationConfig(): SecretSyncSupabaseDestinationConfigOutputReference;
    putDestinationConfig(value: SecretSyncSupabaseDestinationConfig): void;
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
    get syncOptions(): SecretSyncSupabaseSyncOptionsOutputReference;
    putSyncOptions(value: SecretSyncSupabaseSyncOptions): void;
    get syncOptionsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
