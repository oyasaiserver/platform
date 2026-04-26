import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretSyncCloudflareWorkersConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether secrets should be automatically synced when changes occur at the source location or not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_workers#auto_sync_enabled SecretSyncCloudflareWorkers#auto_sync_enabled}
    */
    readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
    /**
    * The ID of the cloudflare Connection to use for syncing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_workers#connection_id SecretSyncCloudflareWorkers#connection_id}
    */
    readonly connectionId: string;
    /**
    * An optional description for the Cloudflare Workers sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_workers#description SecretSyncCloudflareWorkers#description}
    */
    readonly description?: string;
    /**
    * The destination configuration for the secret sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_workers#destination_config SecretSyncCloudflareWorkers#destination_config}
    */
    readonly destinationConfig: SecretSyncCloudflareWorkersDestinationConfig;
    /**
    * The slug of the project environment to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_workers#environment SecretSyncCloudflareWorkers#environment}
    */
    readonly environment: string;
    /**
    * The name of the Cloudflare Workers sync to create. Must be slug-friendly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_workers#name SecretSyncCloudflareWorkers#name}
    */
    readonly name: string;
    /**
    * The ID of the Infisical project to create the sync in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_workers#project_id SecretSyncCloudflareWorkers#project_id}
    */
    readonly projectId: string;
    /**
    * The folder path to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_workers#secret_path SecretSyncCloudflareWorkers#secret_path}
    */
    readonly secretPath: string;
    /**
    * Parameters to modify how secrets are synced.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_workers#sync_options SecretSyncCloudflareWorkers#sync_options}
    */
    readonly syncOptions: SecretSyncCloudflareWorkersSyncOptions;
}
export interface SecretSyncCloudflareWorkersDestinationConfig {
    /**
    * The Cloudflare Workers script ID where the secrets will be synced
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_workers#script_id SecretSyncCloudflareWorkers#script_id}
    */
    readonly scriptId: string;
}
export declare function secretSyncCloudflareWorkersDestinationConfigToTerraform(struct?: SecretSyncCloudflareWorkersDestinationConfig | cdktf.IResolvable): any;
export declare function secretSyncCloudflareWorkersDestinationConfigToHclTerraform(struct?: SecretSyncCloudflareWorkersDestinationConfig | cdktf.IResolvable): any;
export declare class SecretSyncCloudflareWorkersDestinationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncCloudflareWorkersDestinationConfig | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncCloudflareWorkersDestinationConfig | cdktf.IResolvable | undefined);
    private _scriptId?;
    get scriptId(): string;
    set scriptId(value: string);
    get scriptIdInput(): string;
}
export interface SecretSyncCloudflareWorkersSyncOptions {
    /**
    * When set to true, Infisical will not remove secrets from Cloudflare Workers. Enable this option if you intend to manage some secrets manually outside of Infisical.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_workers#disable_secret_deletion SecretSyncCloudflareWorkers#disable_secret_deletion}
    */
    readonly disableSecretDeletion?: boolean | cdktf.IResolvable;
    /**
    * Specify how Infisical should resolve the initial sync to the destination. Supported options: overwrite-destination, import-prioritize-source, import-prioritize-destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_workers#initial_sync_behavior SecretSyncCloudflareWorkers#initial_sync_behavior}
    */
    readonly initialSyncBehavior: string;
    /**
    * The format to use for structuring secret keys in the Cloudflare Workers destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_workers#key_schema SecretSyncCloudflareWorkers#key_schema}
    */
    readonly keySchema?: string;
}
export declare function secretSyncCloudflareWorkersSyncOptionsToTerraform(struct?: SecretSyncCloudflareWorkersSyncOptions | cdktf.IResolvable): any;
export declare function secretSyncCloudflareWorkersSyncOptionsToHclTerraform(struct?: SecretSyncCloudflareWorkersSyncOptions | cdktf.IResolvable): any;
export declare class SecretSyncCloudflareWorkersSyncOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncCloudflareWorkersSyncOptions | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncCloudflareWorkersSyncOptions | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_workers infisical_secret_sync_cloudflare_workers}
*/
export declare class SecretSyncCloudflareWorkers extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_sync_cloudflare_workers";
    /**
    * Generates CDKTF code for importing a SecretSyncCloudflareWorkers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretSyncCloudflareWorkers to import
    * @param importFromId The id of the existing SecretSyncCloudflareWorkers that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_workers#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretSyncCloudflareWorkers to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_workers infisical_secret_sync_cloudflare_workers} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretSyncCloudflareWorkersConfig
    */
    constructor(scope: Construct, id: string, config: SecretSyncCloudflareWorkersConfig);
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
    get destinationConfig(): SecretSyncCloudflareWorkersDestinationConfigOutputReference;
    putDestinationConfig(value: SecretSyncCloudflareWorkersDestinationConfig): void;
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
    get syncOptions(): SecretSyncCloudflareWorkersSyncOptionsOutputReference;
    putSyncOptions(value: SecretSyncCloudflareWorkersSyncOptions): void;
    get syncOptionsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
