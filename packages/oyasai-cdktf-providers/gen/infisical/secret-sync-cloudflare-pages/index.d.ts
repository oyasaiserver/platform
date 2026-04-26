import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretSyncCloudflarePagesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether secrets should be automatically synced when changes occur at the source location or not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_pages#auto_sync_enabled SecretSyncCloudflarePages#auto_sync_enabled}
    */
    readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
    /**
    * The ID of the cloudflare Connection to use for syncing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_pages#connection_id SecretSyncCloudflarePages#connection_id}
    */
    readonly connectionId: string;
    /**
    * An optional description for the Cloudflare Pages sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_pages#description SecretSyncCloudflarePages#description}
    */
    readonly description?: string;
    /**
    * The destination configuration for the secret sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_pages#destination_config SecretSyncCloudflarePages#destination_config}
    */
    readonly destinationConfig: SecretSyncCloudflarePagesDestinationConfig;
    /**
    * The slug of the project environment to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_pages#environment SecretSyncCloudflarePages#environment}
    */
    readonly environment: string;
    /**
    * The name of the Cloudflare Pages sync to create. Must be slug-friendly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_pages#name SecretSyncCloudflarePages#name}
    */
    readonly name: string;
    /**
    * The ID of the Infisical project to create the sync in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_pages#project_id SecretSyncCloudflarePages#project_id}
    */
    readonly projectId: string;
    /**
    * The folder path to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_pages#secret_path SecretSyncCloudflarePages#secret_path}
    */
    readonly secretPath: string;
    /**
    * Parameters to modify how secrets are synced.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_pages#sync_options SecretSyncCloudflarePages#sync_options}
    */
    readonly syncOptions: SecretSyncCloudflarePagesSyncOptions;
}
export interface SecretSyncCloudflarePagesDestinationConfig {
    /**
    * The Cloudflare Pages environment (production, preview) where the secrets will be synced
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_pages#environment SecretSyncCloudflarePages#environment}
    */
    readonly environment: string;
    /**
    * The Cloudflare Pages project name where the secrets will be synced
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_pages#project_name SecretSyncCloudflarePages#project_name}
    */
    readonly projectName: string;
}
export declare function secretSyncCloudflarePagesDestinationConfigToTerraform(struct?: SecretSyncCloudflarePagesDestinationConfig | cdktf.IResolvable): any;
export declare function secretSyncCloudflarePagesDestinationConfigToHclTerraform(struct?: SecretSyncCloudflarePagesDestinationConfig | cdktf.IResolvable): any;
export declare class SecretSyncCloudflarePagesDestinationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncCloudflarePagesDestinationConfig | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncCloudflarePagesDestinationConfig | cdktf.IResolvable | undefined);
    private _environment?;
    get environment(): string;
    set environment(value: string);
    get environmentInput(): string;
    private _projectName?;
    get projectName(): string;
    set projectName(value: string);
    get projectNameInput(): string;
}
export interface SecretSyncCloudflarePagesSyncOptions {
    /**
    * When set to true, Infisical will not remove secrets from Cloudflare Pages. Enable this option if you intend to manage some secrets manually outside of Infisical.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_pages#disable_secret_deletion SecretSyncCloudflarePages#disable_secret_deletion}
    */
    readonly disableSecretDeletion?: boolean | cdktf.IResolvable;
    /**
    * Specify how Infisical should resolve the initial sync to the destination. Supported options: overwrite-destination, import-prioritize-source, import-prioritize-destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_pages#initial_sync_behavior SecretSyncCloudflarePages#initial_sync_behavior}
    */
    readonly initialSyncBehavior: string;
    /**
    * The format to use for structuring secret keys in the Cloudflare Pages destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_pages#key_schema SecretSyncCloudflarePages#key_schema}
    */
    readonly keySchema?: string;
}
export declare function secretSyncCloudflarePagesSyncOptionsToTerraform(struct?: SecretSyncCloudflarePagesSyncOptions | cdktf.IResolvable): any;
export declare function secretSyncCloudflarePagesSyncOptionsToHclTerraform(struct?: SecretSyncCloudflarePagesSyncOptions | cdktf.IResolvable): any;
export declare class SecretSyncCloudflarePagesSyncOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncCloudflarePagesSyncOptions | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncCloudflarePagesSyncOptions | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_pages infisical_secret_sync_cloudflare_pages}
*/
export declare class SecretSyncCloudflarePages extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_sync_cloudflare_pages";
    /**
    * Generates CDKTF code for importing a SecretSyncCloudflarePages resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretSyncCloudflarePages to import
    * @param importFromId The id of the existing SecretSyncCloudflarePages that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_pages#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretSyncCloudflarePages to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_cloudflare_pages infisical_secret_sync_cloudflare_pages} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretSyncCloudflarePagesConfig
    */
    constructor(scope: Construct, id: string, config: SecretSyncCloudflarePagesConfig);
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
    get destinationConfig(): SecretSyncCloudflarePagesDestinationConfigOutputReference;
    putDestinationConfig(value: SecretSyncCloudflarePagesDestinationConfig): void;
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
    get syncOptions(): SecretSyncCloudflarePagesSyncOptionsOutputReference;
    putSyncOptions(value: SecretSyncCloudflarePagesSyncOptions): void;
    get syncOptionsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
