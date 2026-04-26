import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretSyncAzureKeyVaultConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether secrets should be automatically synced when changes occur at the source location or not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_key_vault#auto_sync_enabled SecretSyncAzureKeyVault#auto_sync_enabled}
    */
    readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
    /**
    * The ID of the azure Connection to use for syncing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_key_vault#connection_id SecretSyncAzureKeyVault#connection_id}
    */
    readonly connectionId: string;
    /**
    * An optional description for the Azure Key Vault sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_key_vault#description SecretSyncAzureKeyVault#description}
    */
    readonly description?: string;
    /**
    * The destination configuration for the secret sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_key_vault#destination_config SecretSyncAzureKeyVault#destination_config}
    */
    readonly destinationConfig: SecretSyncAzureKeyVaultDestinationConfig;
    /**
    * The slug of the project environment to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_key_vault#environment SecretSyncAzureKeyVault#environment}
    */
    readonly environment: string;
    /**
    * The name of the Azure Key Vault sync to create. Must be slug-friendly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_key_vault#name SecretSyncAzureKeyVault#name}
    */
    readonly name: string;
    /**
    * The ID of the Infisical project to create the sync in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_key_vault#project_id SecretSyncAzureKeyVault#project_id}
    */
    readonly projectId: string;
    /**
    * The folder path to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_key_vault#secret_path SecretSyncAzureKeyVault#secret_path}
    */
    readonly secretPath: string;
    /**
    * Parameters to modify how secrets are synced.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_key_vault#sync_options SecretSyncAzureKeyVault#sync_options}
    */
    readonly syncOptions: SecretSyncAzureKeyVaultSyncOptions;
}
export interface SecretSyncAzureKeyVaultDestinationConfig {
    /**
    * The base URL of your Azure Key Vault
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_key_vault#vault_base_url SecretSyncAzureKeyVault#vault_base_url}
    */
    readonly vaultBaseUrl: string;
}
export declare function secretSyncAzureKeyVaultDestinationConfigToTerraform(struct?: SecretSyncAzureKeyVaultDestinationConfig | cdktf.IResolvable): any;
export declare function secretSyncAzureKeyVaultDestinationConfigToHclTerraform(struct?: SecretSyncAzureKeyVaultDestinationConfig | cdktf.IResolvable): any;
export declare class SecretSyncAzureKeyVaultDestinationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncAzureKeyVaultDestinationConfig | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncAzureKeyVaultDestinationConfig | cdktf.IResolvable | undefined);
    private _vaultBaseUrl?;
    get vaultBaseUrl(): string;
    set vaultBaseUrl(value: string);
    get vaultBaseUrlInput(): string;
}
export interface SecretSyncAzureKeyVaultSyncOptions {
    /**
    * When set to true, Infisical will not remove secrets from Azure Key Vault. Enable this option if you intend to manage some secrets manually outside of Infisical.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_key_vault#disable_secret_deletion SecretSyncAzureKeyVault#disable_secret_deletion}
    */
    readonly disableSecretDeletion?: boolean | cdktf.IResolvable;
    /**
    * Specify how Infisical should resolve the initial sync to the destination. Supported options: overwrite-destination, import-prioritize-source, import-prioritize-destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_key_vault#initial_sync_behavior SecretSyncAzureKeyVault#initial_sync_behavior}
    */
    readonly initialSyncBehavior: string;
    /**
    * The format to use for structuring secret keys in the Azure Key Vault destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_key_vault#key_schema SecretSyncAzureKeyVault#key_schema}
    */
    readonly keySchema?: string;
}
export declare function secretSyncAzureKeyVaultSyncOptionsToTerraform(struct?: SecretSyncAzureKeyVaultSyncOptions | cdktf.IResolvable): any;
export declare function secretSyncAzureKeyVaultSyncOptionsToHclTerraform(struct?: SecretSyncAzureKeyVaultSyncOptions | cdktf.IResolvable): any;
export declare class SecretSyncAzureKeyVaultSyncOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncAzureKeyVaultSyncOptions | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncAzureKeyVaultSyncOptions | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_key_vault infisical_secret_sync_azure_key_vault}
*/
export declare class SecretSyncAzureKeyVault extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_sync_azure_key_vault";
    /**
    * Generates CDKTF code for importing a SecretSyncAzureKeyVault resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretSyncAzureKeyVault to import
    * @param importFromId The id of the existing SecretSyncAzureKeyVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_key_vault#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretSyncAzureKeyVault to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_key_vault infisical_secret_sync_azure_key_vault} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretSyncAzureKeyVaultConfig
    */
    constructor(scope: Construct, id: string, config: SecretSyncAzureKeyVaultConfig);
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
    get destinationConfig(): SecretSyncAzureKeyVaultDestinationConfigOutputReference;
    putDestinationConfig(value: SecretSyncAzureKeyVaultDestinationConfig): void;
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
    get syncOptions(): SecretSyncAzureKeyVaultSyncOptionsOutputReference;
    putSyncOptions(value: SecretSyncAzureKeyVaultSyncOptions): void;
    get syncOptionsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
