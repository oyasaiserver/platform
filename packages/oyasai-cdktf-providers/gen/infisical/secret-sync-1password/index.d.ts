import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretSync1PasswordConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether secrets should be automatically synced when changes occur at the source location or not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_1password#auto_sync_enabled SecretSync1Password#auto_sync_enabled}
    */
    readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
    /**
    * The ID of the 1password Connection to use for syncing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_1password#connection_id SecretSync1Password#connection_id}
    */
    readonly connectionId: string;
    /**
    * An optional description for the 1Password sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_1password#description SecretSync1Password#description}
    */
    readonly description?: string;
    /**
    * The destination configuration for the secret sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_1password#destination_config SecretSync1Password#destination_config}
    */
    readonly destinationConfig: SecretSync1PasswordDestinationConfig;
    /**
    * The slug of the project environment to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_1password#environment SecretSync1Password#environment}
    */
    readonly environment: string;
    /**
    * The name of the 1Password sync to create. Must be slug-friendly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_1password#name SecretSync1Password#name}
    */
    readonly name: string;
    /**
    * The ID of the Infisical project to create the sync in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_1password#project_id SecretSync1Password#project_id}
    */
    readonly projectId: string;
    /**
    * The folder path to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_1password#secret_path SecretSync1Password#secret_path}
    */
    readonly secretPath: string;
    /**
    * Parameters to modify how secrets are synced.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_1password#sync_options SecretSync1Password#sync_options}
    */
    readonly syncOptions: SecretSync1PasswordSyncOptions;
}
export interface SecretSync1PasswordDestinationConfig {
    /**
    * The label of the 1Password item field which will hold your secret value. For example, if you were to sync Infisical secret 'foo: bar', the 1Password item equivalent would have an item title of 'foo', and a field on that item 'value: bar'. The field label 'value' is what gets changed by this option
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_1password#value_label SecretSync1Password#value_label}
    */
    readonly valueLabel?: string;
    /**
    * The ID of the 1Password vault to sync secrets to
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_1password#vault_id SecretSync1Password#vault_id}
    */
    readonly vaultId: string;
}
export declare function secretSync1PasswordDestinationConfigToTerraform(struct?: SecretSync1PasswordDestinationConfig | cdktf.IResolvable): any;
export declare function secretSync1PasswordDestinationConfigToHclTerraform(struct?: SecretSync1PasswordDestinationConfig | cdktf.IResolvable): any;
export declare class SecretSync1PasswordDestinationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSync1PasswordDestinationConfig | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSync1PasswordDestinationConfig | cdktf.IResolvable | undefined);
    private _valueLabel?;
    get valueLabel(): string;
    set valueLabel(value: string);
    resetValueLabel(): void;
    get valueLabelInput(): string;
    private _vaultId?;
    get vaultId(): string;
    set vaultId(value: string);
    get vaultIdInput(): string;
}
export interface SecretSync1PasswordSyncOptions {
    /**
    * When set to true, Infisical will not remove secrets from 1Password. Enable this option if you intend to manage some secrets manually outside of Infisical.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_1password#disable_secret_deletion SecretSync1Password#disable_secret_deletion}
    */
    readonly disableSecretDeletion?: boolean | cdktf.IResolvable;
    /**
    * Specify how Infisical should resolve the initial sync to the destination. Supported options: overwrite-destination, import-prioritize-source, import-prioritize-destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_1password#initial_sync_behavior SecretSync1Password#initial_sync_behavior}
    */
    readonly initialSyncBehavior: string;
    /**
    * The format to use for structuring secret keys in the 1Password destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_1password#key_schema SecretSync1Password#key_schema}
    */
    readonly keySchema?: string;
}
export declare function secretSync1PasswordSyncOptionsToTerraform(struct?: SecretSync1PasswordSyncOptions | cdktf.IResolvable): any;
export declare function secretSync1PasswordSyncOptionsToHclTerraform(struct?: SecretSync1PasswordSyncOptions | cdktf.IResolvable): any;
export declare class SecretSync1PasswordSyncOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSync1PasswordSyncOptions | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSync1PasswordSyncOptions | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_1password infisical_secret_sync_1password}
*/
export declare class SecretSync1Password extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_sync_1password";
    /**
    * Generates CDKTF code for importing a SecretSync1Password resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretSync1Password to import
    * @param importFromId The id of the existing SecretSync1Password that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_1password#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretSync1Password to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_1password infisical_secret_sync_1password} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretSync1PasswordConfig
    */
    constructor(scope: Construct, id: string, config: SecretSync1PasswordConfig);
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
    get destinationConfig(): SecretSync1PasswordDestinationConfigOutputReference;
    putDestinationConfig(value: SecretSync1PasswordDestinationConfig): void;
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
    get syncOptions(): SecretSync1PasswordSyncOptionsOutputReference;
    putSyncOptions(value: SecretSync1PasswordSyncOptions): void;
    get syncOptionsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
