// https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_circleci
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretSyncCircleciConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether secrets should be automatically synced when changes occur at the source location or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_circleci#auto_sync_enabled SecretSyncCircleci#auto_sync_enabled}
  */
  readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
  /**
  * The ID of the circleci Connection to use for syncing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_circleci#connection_id SecretSyncCircleci#connection_id}
  */
  readonly connectionId: string;
  /**
  * An optional description for the CircleCI sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_circleci#description SecretSyncCircleci#description}
  */
  readonly description?: string;
  /**
  * The destination configuration for the secret sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_circleci#destination_config SecretSyncCircleci#destination_config}
  */
  readonly destinationConfig: SecretSyncCircleciDestinationConfig;
  /**
  * The slug of the project environment to sync secrets from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_circleci#environment SecretSyncCircleci#environment}
  */
  readonly environment: string;
  /**
  * The name of the CircleCI sync to create. Must be slug-friendly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_circleci#name SecretSyncCircleci#name}
  */
  readonly name: string;
  /**
  * The ID of the Infisical project to create the sync in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_circleci#project_id SecretSyncCircleci#project_id}
  */
  readonly projectId: string;
  /**
  * The folder path to sync secrets from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_circleci#secret_path SecretSyncCircleci#secret_path}
  */
  readonly secretPath: string;
  /**
  * Parameters to modify how secrets are synced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_circleci#sync_options SecretSyncCircleci#sync_options}
  */
  readonly syncOptions: SecretSyncCircleciSyncOptions;
}
export interface SecretSyncCircleciDestinationConfig {
  /**
  * The name of the CircleCI organization to sync secrets to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_circleci#org_name SecretSyncCircleci#org_name}
  */
  readonly orgName: string;
  /**
  * The ID of the CircleCI project to sync secrets to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_circleci#project_id SecretSyncCircleci#project_id}
  */
  readonly projectId: string;
  /**
  * The name of the CircleCI project to sync secrets to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_circleci#project_name SecretSyncCircleci#project_name}
  */
  readonly projectName: string;
}

export function secretSyncCircleciDestinationConfigToTerraform(struct?: SecretSyncCircleciDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    org_name: cdktf.stringToTerraform(struct!.orgName),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    project_name: cdktf.stringToTerraform(struct!.projectName),
  }
}


export function secretSyncCircleciDestinationConfigToHclTerraform(struct?: SecretSyncCircleciDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    org_name: {
      value: cdktf.stringToHclTerraform(struct!.orgName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_name: {
      value: cdktf.stringToHclTerraform(struct!.projectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretSyncCircleciDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretSyncCircleciDestinationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._orgName !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgName = this._orgName;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._projectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectName = this._projectName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretSyncCircleciDestinationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._orgName = undefined;
      this._projectId = undefined;
      this._projectName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._orgName = value.orgName;
      this._projectId = value.projectId;
      this._projectName = value.projectName;
    }
  }

  // org_name - computed: false, optional: false, required: true
  private _orgName?: string; 
  public get orgName() {
    return this.getStringAttribute('org_name');
  }
  public set orgName(value: string) {
    this._orgName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgNameInput() {
    return this._orgName;
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

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }
}
export interface SecretSyncCircleciSyncOptions {
  /**
  * When set to true, Infisical will not remove secrets from CircleCI. Enable this option if you intend to manage some secrets manually outside of Infisical.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_circleci#disable_secret_deletion SecretSyncCircleci#disable_secret_deletion}
  */
  readonly disableSecretDeletion?: boolean | cdktf.IResolvable;
  /**
  * Specify how Infisical should resolve the initial sync to the destination. Supported options: overwrite-destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_circleci#initial_sync_behavior SecretSyncCircleci#initial_sync_behavior}
  */
  readonly initialSyncBehavior: string;
  /**
  * The format to use for structuring secret keys in the CircleCI destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_circleci#key_schema SecretSyncCircleci#key_schema}
  */
  readonly keySchema?: string;
}

export function secretSyncCircleciSyncOptionsToTerraform(struct?: SecretSyncCircleciSyncOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_secret_deletion: cdktf.booleanToTerraform(struct!.disableSecretDeletion),
    initial_sync_behavior: cdktf.stringToTerraform(struct!.initialSyncBehavior),
    key_schema: cdktf.stringToTerraform(struct!.keySchema),
  }
}


export function secretSyncCircleciSyncOptionsToHclTerraform(struct?: SecretSyncCircleciSyncOptions | cdktf.IResolvable): any {
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
    initial_sync_behavior: {
      value: cdktf.stringToHclTerraform(struct!.initialSyncBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_schema: {
      value: cdktf.stringToHclTerraform(struct!.keySchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretSyncCircleciSyncOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretSyncCircleciSyncOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableSecretDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSecretDeletion = this._disableSecretDeletion;
    }
    if (this._initialSyncBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialSyncBehavior = this._initialSyncBehavior;
    }
    if (this._keySchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySchema = this._keySchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretSyncCircleciSyncOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableSecretDeletion = undefined;
      this._initialSyncBehavior = undefined;
      this._keySchema = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableSecretDeletion = value.disableSecretDeletion;
      this._initialSyncBehavior = value.initialSyncBehavior;
      this._keySchema = value.keySchema;
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

  // initial_sync_behavior - computed: false, optional: false, required: true
  private _initialSyncBehavior?: string; 
  public get initialSyncBehavior() {
    return this.getStringAttribute('initial_sync_behavior');
  }
  public set initialSyncBehavior(value: string) {
    this._initialSyncBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSyncBehaviorInput() {
    return this._initialSyncBehavior;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_circleci infisical_secret_sync_circleci}
*/
export class SecretSyncCircleci extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_secret_sync_circleci";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretSyncCircleci resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretSyncCircleci to import
  * @param importFromId The id of the existing SecretSyncCircleci that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_circleci#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretSyncCircleci to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_sync_circleci", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_circleci infisical_secret_sync_circleci} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretSyncCircleciConfig
  */
  public constructor(scope: Construct, id: string, config: SecretSyncCircleciConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_secret_sync_circleci',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.19.26'
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
  private _destinationConfig = new SecretSyncCircleciDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: SecretSyncCircleciDestinationConfig) {
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
  private _syncOptions = new SecretSyncCircleciSyncOptionsOutputReference(this, "sync_options");
  public get syncOptions() {
    return this._syncOptions;
  }
  public putSyncOptions(value: SecretSyncCircleciSyncOptions) {
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
      destination_config: secretSyncCircleciDestinationConfigToTerraform(this._destinationConfig.internalValue),
      environment: cdktf.stringToTerraform(this._environment),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      secret_path: cdktf.stringToTerraform(this._secretPath),
      sync_options: secretSyncCircleciSyncOptionsToTerraform(this._syncOptions.internalValue),
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
        value: secretSyncCircleciDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretSyncCircleciDestinationConfig",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: secretSyncCircleciSyncOptionsToHclTerraform(this._syncOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretSyncCircleciSyncOptions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
