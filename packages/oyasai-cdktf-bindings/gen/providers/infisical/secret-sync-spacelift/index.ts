// https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_sync_spacelift
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretSyncSpaceliftConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether secrets should be automatically synced when changes occur at the source location or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_sync_spacelift#auto_sync_enabled SecretSyncSpacelift#auto_sync_enabled}
  */
  readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
  /**
  * The ID of the spacelift Connection to use for syncing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_sync_spacelift#connection_id SecretSyncSpacelift#connection_id}
  */
  readonly connectionId: string;
  /**
  * An optional description for the Spacelift sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_sync_spacelift#description SecretSyncSpacelift#description}
  */
  readonly description?: string;
  /**
  * The destination configuration for the secret sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_sync_spacelift#destination_config SecretSyncSpacelift#destination_config}
  */
  readonly destinationConfig: SecretSyncSpaceliftDestinationConfig;
  /**
  * The slug of the project environment to sync secrets from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_sync_spacelift#environment SecretSyncSpacelift#environment}
  */
  readonly environment: string;
  /**
  * Whether to sync secrets from folders beneath the source path as well.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_sync_spacelift#include_all_sub_folders SecretSyncSpacelift#include_all_sub_folders}
  */
  readonly includeAllSubFolders?: boolean | cdktf.IResolvable;
  /**
  * The name of the Spacelift sync to create. Must be slug-friendly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_sync_spacelift#name SecretSyncSpacelift#name}
  */
  readonly name: string;
  /**
  * The ID of the Infisical project to create the sync in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_sync_spacelift#project_id SecretSyncSpacelift#project_id}
  */
  readonly projectId: string;
  /**
  * The folder path to sync secrets from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_sync_spacelift#secret_path SecretSyncSpacelift#secret_path}
  */
  readonly secretPath: string;
  /**
  * Parameters to modify how secrets are synced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_sync_spacelift#sync_options SecretSyncSpacelift#sync_options}
  */
  readonly syncOptions: SecretSyncSpaceliftSyncOptions;
}
export interface SecretSyncSpaceliftDestinationConfig {
  /**
  * The type of config element to create in Spacelift. Supported options: environment-variable, file-mount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_sync_spacelift#config_type SecretSyncSpacelift#config_type}
  */
  readonly configType: string;
  /**
  * The ID of the Spacelift context to sync secrets to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_sync_spacelift#context_id SecretSyncSpacelift#context_id}
  */
  readonly contextId: string;
  /**
  * The name of the Spacelift context to sync secrets to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_sync_spacelift#context_name SecretSyncSpacelift#context_name}
  */
  readonly contextName: string;
  /**
  * The format for file mount config elements. Supported options: dot-env (default), secret-per-file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_sync_spacelift#file_mount_format SecretSyncSpacelift#file_mount_format}
  */
  readonly fileMountFormat?: string;
  /**
  * The file path for the mounted file relative to /mnt/workspace/. Required when config_type is 'file-mount' and file_mount_format is not 'secret-per-file'. When file_mount_format is 'secret-per-file', this is the directory path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_sync_spacelift#mount_path SecretSyncSpacelift#mount_path}
  */
  readonly mountPath?: string;
}

export function secretSyncSpaceliftDestinationConfigToTerraform(struct?: SecretSyncSpaceliftDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_type: cdktf.stringToTerraform(struct!.configType),
    context_id: cdktf.stringToTerraform(struct!.contextId),
    context_name: cdktf.stringToTerraform(struct!.contextName),
    file_mount_format: cdktf.stringToTerraform(struct!.fileMountFormat),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
  }
}


export function secretSyncSpaceliftDestinationConfigToHclTerraform(struct?: SecretSyncSpaceliftDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_type: {
      value: cdktf.stringToHclTerraform(struct!.configType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_id: {
      value: cdktf.stringToHclTerraform(struct!.contextId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_name: {
      value: cdktf.stringToHclTerraform(struct!.contextName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_mount_format: {
      value: cdktf.stringToHclTerraform(struct!.fileMountFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretSyncSpaceliftDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretSyncSpaceliftDestinationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configType !== undefined) {
      hasAnyValues = true;
      internalValueResult.configType = this._configType;
    }
    if (this._contextId !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextId = this._contextId;
    }
    if (this._contextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextName = this._contextName;
    }
    if (this._fileMountFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileMountFormat = this._fileMountFormat;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretSyncSpaceliftDestinationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configType = undefined;
      this._contextId = undefined;
      this._contextName = undefined;
      this._fileMountFormat = undefined;
      this._mountPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configType = value.configType;
      this._contextId = value.contextId;
      this._contextName = value.contextName;
      this._fileMountFormat = value.fileMountFormat;
      this._mountPath = value.mountPath;
    }
  }

  // config_type - computed: false, optional: false, required: true
  private _configType?: string; 
  public get configType() {
    return this.getStringAttribute('config_type');
  }
  public set configType(value: string) {
    this._configType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configTypeInput() {
    return this._configType;
  }

  // context_id - computed: false, optional: false, required: true
  private _contextId?: string; 
  public get contextId() {
    return this.getStringAttribute('context_id');
  }
  public set contextId(value: string) {
    this._contextId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextIdInput() {
    return this._contextId;
  }

  // context_name - computed: false, optional: false, required: true
  private _contextName?: string; 
  public get contextName() {
    return this.getStringAttribute('context_name');
  }
  public set contextName(value: string) {
    this._contextName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNameInput() {
    return this._contextName;
  }

  // file_mount_format - computed: false, optional: true, required: false
  private _fileMountFormat?: string; 
  public get fileMountFormat() {
    return this.getStringAttribute('file_mount_format');
  }
  public set fileMountFormat(value: string) {
    this._fileMountFormat = value;
  }
  public resetFileMountFormat() {
    this._fileMountFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileMountFormatInput() {
    return this._fileMountFormat;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }
}
export interface SecretSyncSpaceliftSyncOptions {
  /**
  * When set to true, Infisical will not remove secrets from Spacelift. Enable this option if you intend to manage some secrets manually outside of Infisical.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_sync_spacelift#disable_secret_deletion SecretSyncSpacelift#disable_secret_deletion}
  */
  readonly disableSecretDeletion?: boolean | cdktf.IResolvable;
  /**
  * Whether to sync secrets from folders beneath the source path as well. Deprecated: use the top-level include_all_sub_folders instead. When both are set, the top-level include_all_sub_folders takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_sync_spacelift#include_all_sub_folders SecretSyncSpacelift#include_all_sub_folders}
  */
  readonly includeAllSubFolders?: boolean | cdktf.IResolvable;
  /**
  * The format to use for structuring secret keys in the Spacelift destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_sync_spacelift#key_schema SecretSyncSpacelift#key_schema}
  */
  readonly keySchema?: string;
  /**
  * Whether secrets should be marked as secret in Spacelift. Secret values are only available to Runs and Tasks and are not accessible in the web GUI or through the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_sync_spacelift#write_only SecretSyncSpacelift#write_only}
  */
  readonly writeOnly?: boolean | cdktf.IResolvable;
}

export function secretSyncSpaceliftSyncOptionsToTerraform(struct?: SecretSyncSpaceliftSyncOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_secret_deletion: cdktf.booleanToTerraform(struct!.disableSecretDeletion),
    include_all_sub_folders: cdktf.booleanToTerraform(struct!.includeAllSubFolders),
    key_schema: cdktf.stringToTerraform(struct!.keySchema),
    write_only: cdktf.booleanToTerraform(struct!.writeOnly),
  }
}


export function secretSyncSpaceliftSyncOptionsToHclTerraform(struct?: SecretSyncSpaceliftSyncOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_secret_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.disableSecretDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_all_sub_folders: {
      value: cdktf.booleanToHclTerraform(struct!.includeAllSubFolders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_schema: {
      value: cdktf.stringToHclTerraform(struct!.keySchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_only: {
      value: cdktf.booleanToHclTerraform(struct!.writeOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretSyncSpaceliftSyncOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretSyncSpaceliftSyncOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableSecretDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSecretDeletion = this._disableSecretDeletion;
    }
    if (this._includeAllSubFolders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAllSubFolders = this._includeAllSubFolders;
    }
    if (this._keySchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySchema = this._keySchema;
    }
    if (this._writeOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeOnly = this._writeOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretSyncSpaceliftSyncOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableSecretDeletion = undefined;
      this._includeAllSubFolders = undefined;
      this._keySchema = undefined;
      this._writeOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableSecretDeletion = value.disableSecretDeletion;
      this._includeAllSubFolders = value.includeAllSubFolders;
      this._keySchema = value.keySchema;
      this._writeOnly = value.writeOnly;
    }
  }

  // disable_secret_deletion - computed: true, optional: true, required: false
  private _disableSecretDeletion?: boolean | cdktf.IResolvable; 
  public get disableSecretDeletion() {
    return this.getBooleanAttribute('disable_secret_deletion');
  }
  public set disableSecretDeletion(value: boolean | cdktf.IResolvable) {
    this._disableSecretDeletion = value;
  }
  public resetDisableSecretDeletion() {
    this._disableSecretDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSecretDeletionInput() {
    return this._disableSecretDeletion;
  }

  // include_all_sub_folders - computed: true, optional: true, required: false
  private _includeAllSubFolders?: boolean | cdktf.IResolvable; 
  public get includeAllSubFolders() {
    return this.getBooleanAttribute('include_all_sub_folders');
  }
  public set includeAllSubFolders(value: boolean | cdktf.IResolvable) {
    this._includeAllSubFolders = value;
  }
  public resetIncludeAllSubFolders() {
    this._includeAllSubFolders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllSubFoldersInput() {
    return this._includeAllSubFolders;
  }

  // key_schema - computed: false, optional: true, required: false
  private _keySchema?: string; 
  public get keySchema() {
    return this.getStringAttribute('key_schema');
  }
  public set keySchema(value: string) {
    this._keySchema = value;
  }
  public resetKeySchema() {
    this._keySchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySchemaInput() {
    return this._keySchema;
  }

  // write_only - computed: true, optional: true, required: false
  private _writeOnly?: boolean | cdktf.IResolvable; 
  public get writeOnly() {
    return this.getBooleanAttribute('write_only');
  }
  public set writeOnly(value: boolean | cdktf.IResolvable) {
    this._writeOnly = value;
  }
  public resetWriteOnly() {
    this._writeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeOnlyInput() {
    return this._writeOnly;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_sync_spacelift infisical_secret_sync_spacelift}
*/
export class SecretSyncSpacelift extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_secret_sync_spacelift";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretSyncSpacelift resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretSyncSpacelift to import
  * @param importFromId The id of the existing SecretSyncSpacelift that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_sync_spacelift#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretSyncSpacelift to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_sync_spacelift", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/secret_sync_spacelift infisical_secret_sync_spacelift} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretSyncSpaceliftConfig
  */
  public constructor(scope: Construct, id: string, config: SecretSyncSpaceliftConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_secret_sync_spacelift',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.20.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoSyncEnabled = config.autoSyncEnabled;
    this._connectionId = config.connectionId;
    this._description = config.description;
    this._destinationConfig.internalValue = config.destinationConfig;
    this._environment = config.environment;
    this._includeAllSubFolders = config.includeAllSubFolders;
    this._name = config.name;
    this._projectId = config.projectId;
    this._secretPath = config.secretPath;
    this._syncOptions.internalValue = config.syncOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_sync_enabled - computed: true, optional: true, required: false
  private _autoSyncEnabled?: boolean | cdktf.IResolvable; 
  public get autoSyncEnabled() {
    return this.getBooleanAttribute('auto_sync_enabled');
  }
  public set autoSyncEnabled(value: boolean | cdktf.IResolvable) {
    this._autoSyncEnabled = value;
  }
  public resetAutoSyncEnabled() {
    this._autoSyncEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSyncEnabledInput() {
    return this._autoSyncEnabled;
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination_config - computed: false, optional: false, required: true
  private _destinationConfig = new SecretSyncSpaceliftDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: SecretSyncSpaceliftDestinationConfig) {
    this._destinationConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigInput() {
    return this._destinationConfig.internalValue;
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_all_sub_folders - computed: true, optional: true, required: false
  private _includeAllSubFolders?: boolean | cdktf.IResolvable; 
  public get includeAllSubFolders() {
    return this.getBooleanAttribute('include_all_sub_folders');
  }
  public set includeAllSubFolders(value: boolean | cdktf.IResolvable) {
    this._includeAllSubFolders = value;
  }
  public resetIncludeAllSubFolders() {
    this._includeAllSubFolders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllSubFoldersInput() {
    return this._includeAllSubFolders;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // secret_path - computed: false, optional: false, required: true
  private _secretPath?: string; 
  public get secretPath() {
    return this.getStringAttribute('secret_path');
  }
  public set secretPath(value: string) {
    this._secretPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretPathInput() {
    return this._secretPath;
  }

  // sync_options - computed: false, optional: false, required: true
  private _syncOptions = new SecretSyncSpaceliftSyncOptionsOutputReference(this, "sync_options");
  public get syncOptions() {
    return this._syncOptions;
  }
  public putSyncOptions(value: SecretSyncSpaceliftSyncOptions) {
    this._syncOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syncOptionsInput() {
    return this._syncOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_sync_enabled: cdktf.booleanToTerraform(this._autoSyncEnabled),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      description: cdktf.stringToTerraform(this._description),
      destination_config: secretSyncSpaceliftDestinationConfigToTerraform(this._destinationConfig.internalValue),
      environment: cdktf.stringToTerraform(this._environment),
      include_all_sub_folders: cdktf.booleanToTerraform(this._includeAllSubFolders),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      secret_path: cdktf.stringToTerraform(this._secretPath),
      sync_options: secretSyncSpaceliftSyncOptionsToTerraform(this._syncOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_sync_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoSyncEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_config: {
        value: secretSyncSpaceliftDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretSyncSpaceliftDestinationConfig",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_all_sub_folders: {
        value: cdktf.booleanToHclTerraform(this._includeAllSubFolders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_path: {
        value: cdktf.stringToHclTerraform(this._secretPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_options: {
        value: secretSyncSpaceliftSyncOptionsToHclTerraform(this._syncOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretSyncSpaceliftSyncOptions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
