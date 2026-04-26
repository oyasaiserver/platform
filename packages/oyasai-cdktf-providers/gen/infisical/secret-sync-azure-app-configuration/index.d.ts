import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretSyncAzureAppConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether secrets should be automatically synced when changes occur at the source location or not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_app_configuration#auto_sync_enabled SecretSyncAzureAppConfiguration#auto_sync_enabled}
    */
    readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
    /**
    * The ID of the azure Connection to use for syncing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_app_configuration#connection_id SecretSyncAzureAppConfiguration#connection_id}
    */
    readonly connectionId: string;
    /**
    * An optional description for the Azure App Configuration sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_app_configuration#description SecretSyncAzureAppConfiguration#description}
    */
    readonly description?: string;
    /**
    * The destination configuration for the secret sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_app_configuration#destination_config SecretSyncAzureAppConfiguration#destination_config}
    */
    readonly destinationConfig: SecretSyncAzureAppConfigurationDestinationConfig;
    /**
    * The slug of the project environment to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_app_configuration#environment SecretSyncAzureAppConfiguration#environment}
    */
    readonly environment: string;
    /**
    * The name of the Azure App Configuration sync to create. Must be slug-friendly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_app_configuration#name SecretSyncAzureAppConfiguration#name}
    */
    readonly name: string;
    /**
    * The ID of the Infisical project to create the sync in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_app_configuration#project_id SecretSyncAzureAppConfiguration#project_id}
    */
    readonly projectId: string;
    /**
    * The folder path to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_app_configuration#secret_path SecretSyncAzureAppConfiguration#secret_path}
    */
    readonly secretPath: string;
    /**
    * Parameters to modify how secrets are synced.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_app_configuration#sync_options SecretSyncAzureAppConfiguration#sync_options}
    */
    readonly syncOptions: SecretSyncAzureAppConfigurationSyncOptions;
}
export interface SecretSyncAzureAppConfigurationDestinationConfig {
    /**
    * The URL of your Azure App Configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_app_configuration#configuration_url SecretSyncAzureAppConfiguration#configuration_url}
    */
    readonly configurationUrl: string;
    /**
    * The label to attach to secrets created in Azure App Configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_app_configuration#label SecretSyncAzureAppConfiguration#label}
    */
    readonly label?: string;
}
export declare function secretSyncAzureAppConfigurationDestinationConfigToTerraform(struct?: SecretSyncAzureAppConfigurationDestinationConfig | cdktf.IResolvable): any;
export declare function secretSyncAzureAppConfigurationDestinationConfigToHclTerraform(struct?: SecretSyncAzureAppConfigurationDestinationConfig | cdktf.IResolvable): any;
export declare class SecretSyncAzureAppConfigurationDestinationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncAzureAppConfigurationDestinationConfig | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncAzureAppConfigurationDestinationConfig | cdktf.IResolvable | undefined);
    private _configurationUrl?;
    get configurationUrl(): string;
    set configurationUrl(value: string);
    get configurationUrlInput(): string;
    private _label?;
    get label(): string;
    set label(value: string);
    resetLabel(): void;
    get labelInput(): string;
}
export interface SecretSyncAzureAppConfigurationSyncOptions {
    /**
    * When set to true, Infisical will not remove secrets from Azure App Configuration. Enable this option if you intend to manage some secrets manually outside of Infisical.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_app_configuration#disable_secret_deletion SecretSyncAzureAppConfiguration#disable_secret_deletion}
    */
    readonly disableSecretDeletion?: boolean | cdktf.IResolvable;
    /**
    * Specify how Infisical should resolve the initial sync to the destination. Supported options: overwrite-destination, import-prioritize-source, import-prioritize-destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_app_configuration#initial_sync_behavior SecretSyncAzureAppConfiguration#initial_sync_behavior}
    */
    readonly initialSyncBehavior: string;
    /**
    * The format to use for structuring secret keys in the Azure App Configuration destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_app_configuration#key_schema SecretSyncAzureAppConfiguration#key_schema}
    */
    readonly keySchema?: string;
}
export declare function secretSyncAzureAppConfigurationSyncOptionsToTerraform(struct?: SecretSyncAzureAppConfigurationSyncOptions | cdktf.IResolvable): any;
export declare function secretSyncAzureAppConfigurationSyncOptionsToHclTerraform(struct?: SecretSyncAzureAppConfigurationSyncOptions | cdktf.IResolvable): any;
export declare class SecretSyncAzureAppConfigurationSyncOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncAzureAppConfigurationSyncOptions | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncAzureAppConfigurationSyncOptions | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_app_configuration infisical_secret_sync_azure_app_configuration}
*/
export declare class SecretSyncAzureAppConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_sync_azure_app_configuration";
    /**
    * Generates CDKTF code for importing a SecretSyncAzureAppConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretSyncAzureAppConfiguration to import
    * @param importFromId The id of the existing SecretSyncAzureAppConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_app_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretSyncAzureAppConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_app_configuration infisical_secret_sync_azure_app_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretSyncAzureAppConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: SecretSyncAzureAppConfigurationConfig);
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
    get destinationConfig(): SecretSyncAzureAppConfigurationDestinationConfigOutputReference;
    putDestinationConfig(value: SecretSyncAzureAppConfigurationDestinationConfig): void;
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
    get syncOptions(): SecretSyncAzureAppConfigurationSyncOptionsOutputReference;
    putSyncOptions(value: SecretSyncAzureAppConfigurationSyncOptions): void;
    get syncOptionsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
