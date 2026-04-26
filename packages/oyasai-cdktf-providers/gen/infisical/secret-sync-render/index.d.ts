import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretSyncRenderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether secrets should be automatically synced when changes occur at the source location or not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_render#auto_sync_enabled SecretSyncRender#auto_sync_enabled}
    */
    readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
    /**
    * The ID of the render Connection to use for syncing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_render#connection_id SecretSyncRender#connection_id}
    */
    readonly connectionId: string;
    /**
    * An optional description for the Render sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_render#description SecretSyncRender#description}
    */
    readonly description?: string;
    /**
    * The destination configuration for the secret sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_render#destination_config SecretSyncRender#destination_config}
    */
    readonly destinationConfig: SecretSyncRenderDestinationConfig;
    /**
    * The slug of the project environment to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_render#environment SecretSyncRender#environment}
    */
    readonly environment: string;
    /**
    * The name of the Render sync to create. Must be slug-friendly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_render#name SecretSyncRender#name}
    */
    readonly name: string;
    /**
    * The ID of the Infisical project to create the sync in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_render#project_id SecretSyncRender#project_id}
    */
    readonly projectId: string;
    /**
    * The folder path to sync secrets from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_render#secret_path SecretSyncRender#secret_path}
    */
    readonly secretPath: string;
    /**
    * Parameters to modify how secrets are synced.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_render#sync_options SecretSyncRender#sync_options}
    */
    readonly syncOptions: SecretSyncRenderSyncOptions;
}
export interface SecretSyncRenderDestinationConfig {
    /**
    * The Render scope that secrets should be synced to. Supported options: service
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_render#scope SecretSyncRender#scope}
    */
    readonly scope: string;
    /**
    * The ID of the Render service to sync secrets to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_render#service_id SecretSyncRender#service_id}
    */
    readonly serviceId: string;
    /**
    * The Render resource type to sync secrets to. Supported options: env, file
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_render#type SecretSyncRender#type}
    */
    readonly type: string;
}
export declare function secretSyncRenderDestinationConfigToTerraform(struct?: SecretSyncRenderDestinationConfig | cdktf.IResolvable): any;
export declare function secretSyncRenderDestinationConfigToHclTerraform(struct?: SecretSyncRenderDestinationConfig | cdktf.IResolvable): any;
export declare class SecretSyncRenderDestinationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncRenderDestinationConfig | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncRenderDestinationConfig | cdktf.IResolvable | undefined);
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
    private _serviceId?;
    get serviceId(): string;
    set serviceId(value: string);
    get serviceIdInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export interface SecretSyncRenderSyncOptions {
    /**
    * When set to true, Infisical will not remove secrets from Render. Enable this option if you intend to manage some secrets manually outside of Infisical.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_render#disable_secret_deletion SecretSyncRender#disable_secret_deletion}
    */
    readonly disableSecretDeletion?: boolean | cdktf.IResolvable;
    /**
    * Specify how Infisical should resolve the initial sync to the destination. Supported options: overwrite-destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_render#initial_sync_behavior SecretSyncRender#initial_sync_behavior}
    */
    readonly initialSyncBehavior: string;
    /**
    * The format to use for structuring secret keys in the Render destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_render#key_schema SecretSyncRender#key_schema}
    */
    readonly keySchema?: string;
}
export declare function secretSyncRenderSyncOptionsToTerraform(struct?: SecretSyncRenderSyncOptions | cdktf.IResolvable): any;
export declare function secretSyncRenderSyncOptionsToHclTerraform(struct?: SecretSyncRenderSyncOptions | cdktf.IResolvable): any;
export declare class SecretSyncRenderSyncOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecretSyncRenderSyncOptions | cdktf.IResolvable | undefined;
    set internalValue(value: SecretSyncRenderSyncOptions | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_render infisical_secret_sync_render}
*/
export declare class SecretSyncRender extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_secret_sync_render";
    /**
    * Generates CDKTF code for importing a SecretSyncRender resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretSyncRender to import
    * @param importFromId The id of the existing SecretSyncRender that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_render#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretSyncRender to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_render infisical_secret_sync_render} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretSyncRenderConfig
    */
    constructor(scope: Construct, id: string, config: SecretSyncRenderConfig);
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
    get destinationConfig(): SecretSyncRenderDestinationConfigOutputReference;
    putDestinationConfig(value: SecretSyncRenderDestinationConfig): void;
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
    get syncOptions(): SecretSyncRenderSyncOptionsOutputReference;
    putSyncOptions(value: SecretSyncRenderSyncOptions): void;
    get syncOptionsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
