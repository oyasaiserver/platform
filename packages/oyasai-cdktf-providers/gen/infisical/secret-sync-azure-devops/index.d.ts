import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretSyncAzureDevopsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether secrets should be automatically synced when changes occur at the source location or not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_devops#auto_sync_enabled SecretSyncAzureDevops#auto_sync_enabled}
    */
    readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
    /**
    * The ID of the azure-devops Connection to use for syncing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_devops#connection_id SecretSyncAzureDevops#connection_id}
    */
    readonly connectionId: string;
    /**
    * An optional description for the Azure DevOps sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_devops#description SecretSyncAzureDevops#description}
    */
    readonly description?: string;
    /**
    * The destination configuration for the secret sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_devops#destination_config SecretSyncAzureDevops#destination_config}
    */
    readonly destinationConfig: SecretSyncAzureDevopsDestinationConfig;
    /**
    * The slug of the project environment to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_devops#environment SecretSyncAzureDevops#environment}
    */
    readonly environment: string;
    /**
    * The name of the Azure DevOps sync to create. Must be slug-friendly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_devops#name SecretSyncAzureDevops#name}
    */
    readonly name: string;
    /**
    * The ID of the Infisical project to create the sync in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_devops#project_id SecretSyncAzureDevops#project_id}
    */
    readonly projectId: string;
    /**
    * The folder path to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_devops#secret_path SecretSyncAzureDevops#secret_path}
    */
    readonly secretPath: string;
    /**
    * Parameters to modify how secrets are synced.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_devops#sync_options SecretSyncAzureDevops#sync_options}
    */
    readonly syncOptions: SecretSyncAzureDevopsSyncOptions;
}
export interface SecretSyncAzureDevopsDestinationConfig {
    /**
    * The ID of the Azure DevOps project to sync secrets to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_devops#devops_project_id SecretSyncAzureDevops#devops_project_id}
    */
    readonly devopsProjectId: string;
}
export declare function secretSyncAzureDevopsDestinationConfigToTerraform(struct?: SecretSyncAzureDevopsDestinationConfig | cdktf.IResolvable): any;
export declare function secretSyncAzureDevopsDestinationConfigToHclTerraform(struct?: SecretSyncAzureDevopsDestinationConfig | cdktf.IResolvable): any;
export declare class SecretSyncAzureDevopsDestinationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncAzureDevopsDestinationConfig | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncAzureDevopsDestinationConfig | cdktf.IResolvable | undefined);
    private _devopsProjectId?;
    get devopsProjectId(): string;
    set devopsProjectId(value: string);
    get devopsProjectIdInput(): string;
}
export interface SecretSyncAzureDevopsSyncOptions {
    /**
    * When set to true, Infisical will not remove secrets from Azure DevOps. Enable this option if you intend to manage some secrets manually outside of Infisical.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_devops#disable_secret_deletion SecretSyncAzureDevops#disable_secret_deletion}
    */
    readonly disableSecretDeletion?: boolean | cdktf.IResolvable;
    /**
    * The format to use for structuring secret keys in the Azure DevOps destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_devops#key_schema SecretSyncAzureDevops#key_schema}
    */
    readonly keySchema?: string;
}
export declare function secretSyncAzureDevopsSyncOptionsToTerraform(struct?: SecretSyncAzureDevopsSyncOptions | cdktf.IResolvable): any;
export declare function secretSyncAzureDevopsSyncOptionsToHclTerraform(struct?: SecretSyncAzureDevopsSyncOptions | cdktf.IResolvable): any;
export declare class SecretSyncAzureDevopsSyncOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncAzureDevopsSyncOptions | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncAzureDevopsSyncOptions | cdktf.IResolvable | undefined);
    private _disableSecretDeletion?;
    get disableSecretDeletion(): boolean | cdktf.IResolvable;
    set disableSecretDeletion(value: boolean | cdktf.IResolvable);
    resetDisableSecretDeletion(): void;
    get disableSecretDeletionInput(): any;
    private _keySchema?;
    get keySchema(): string;
    set keySchema(value: string);
    resetKeySchema(): void;
    get keySchemaInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_devops infisical_secret_sync_azure_devops}
*/
export declare class SecretSyncAzureDevops extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_sync_azure_devops";
    /**
    * Generates CDKTF code for importing a SecretSyncAzureDevops resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretSyncAzureDevops to import
    * @param importFromId The id of the existing SecretSyncAzureDevops that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_devops#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretSyncAzureDevops to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_devops infisical_secret_sync_azure_devops} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretSyncAzureDevopsConfig
    */
    constructor(scope: Construct, id: string, config: SecretSyncAzureDevopsConfig);
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
    get destinationConfig(): SecretSyncAzureDevopsDestinationConfigOutputReference;
    putDestinationConfig(value: SecretSyncAzureDevopsDestinationConfig): void;
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
    get syncOptions(): SecretSyncAzureDevopsSyncOptionsOutputReference;
    putSyncOptions(value: SecretSyncAzureDevopsSyncOptions): void;
    get syncOptionsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
