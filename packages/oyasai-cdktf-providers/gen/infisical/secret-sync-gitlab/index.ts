// https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_gitlab
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretSyncGitlabConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether secrets should be automatically synced when changes occur at the source location or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_gitlab#auto_sync_enabled SecretSyncGitlab#auto_sync_enabled}
  */
  readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
  /**
  * The ID of the gitlab Connection to use for syncing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_gitlab#connection_id SecretSyncGitlab#connection_id}
  */
  readonly connectionId: string;
  /**
  * An optional description for the GitLab sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_gitlab#description SecretSyncGitlab#description}
  */
  readonly description?: string;
  /**
  * The destination configuration for the secret sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_gitlab#destination_config SecretSyncGitlab#destination_config}
  */
  readonly destinationConfig: SecretSyncGitlabDestinationConfig;
  /**
  * The slug of the project environment to sync secrets from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_gitlab#environment SecretSyncGitlab#environment}
  */
  readonly environment: string;
  /**
  * The name of the GitLab sync to create. Must be slug-friendly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_gitlab#name SecretSyncGitlab#name}
  */
  readonly name: string;
  /**
  * The ID of the Infisical project to create the sync in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_gitlab#project_id SecretSyncGitlab#project_id}
  */
  readonly projectId: string;
  /**
  * The folder path to sync secrets from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_gitlab#secret_path SecretSyncGitlab#secret_path}
  */
  readonly secretPath: string;
  /**
  * Parameters to modify how secrets are synced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_gitlab#sync_options SecretSyncGitlab#sync_options}
  */
  readonly syncOptions: SecretSyncGitlabSyncOptions;
}
export interface SecretSyncGitlabDestinationConfig {
  /**
  * The GitLab Group ID to sync secrets to. Required when scope is 'group'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_gitlab#group_id SecretSyncGitlab#group_id}
  */
  readonly groupId?: string;
  /**
  * The GitLab Group Name to sync secrets to. Optional when scope is 'group'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_gitlab#group_name SecretSyncGitlab#group_name}
  */
  readonly groupName?: string;
  /**
  * The GitLab Project ID to sync secrets to. Required when scope is 'project'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_gitlab#project_id SecretSyncGitlab#project_id}
  */
  readonly projectId?: string;
  /**
  * The GitLab Project Name to sync secrets to. Optional when scope is 'project'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_gitlab#project_name SecretSyncGitlab#project_name}
  */
  readonly projectName?: string;
  /**
  * The GitLab scope that secrets should be synced to. Supported options: 'project', 'group'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_gitlab#scope SecretSyncGitlab#scope}
  */
  readonly scope: string;
  /**
  * Whether variables should be hidden
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_gitlab#should_hide_secrets SecretSyncGitlab#should_hide_secrets}
  */
  readonly shouldHideSecrets?: boolean | cdktf.IResolvable;
  /**
  * Whether variables should be masked in logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_gitlab#should_mask_secrets SecretSyncGitlab#should_mask_secrets}
  */
  readonly shouldMaskSecrets?: boolean | cdktf.IResolvable;
  /**
  * Whether variables should be protected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_gitlab#should_protect_secrets SecretSyncGitlab#should_protect_secrets}
  */
  readonly shouldProtectSecrets?: boolean | cdktf.IResolvable;
  /**
  * The GitLab environment scope that secrets should be synced to. (default: *)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_gitlab#target_environment SecretSyncGitlab#target_environment}
  */
  readonly targetEnvironment: string;
}

export function secretSyncGitlabDestinationConfigToTerraform(struct?: SecretSyncGitlabDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    project_name: cdktf.stringToTerraform(struct!.projectName),
    scope: cdktf.stringToTerraform(struct!.scope),
    should_hide_secrets: cdktf.booleanToTerraform(struct!.shouldHideSecrets),
    should_mask_secrets: cdktf.booleanToTerraform(struct!.shouldMaskSecrets),
    should_protect_secrets: cdktf.booleanToTerraform(struct!.shouldProtectSecrets),
    target_environment: cdktf.stringToTerraform(struct!.targetEnvironment),
  }
}


export function secretSyncGitlabDestinationConfigToHclTerraform(struct?: SecretSyncGitlabDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
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
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_hide_secrets: {
      value: cdktf.booleanToHclTerraform(struct!.shouldHideSecrets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_mask_secrets: {
      value: cdktf.booleanToHclTerraform(struct!.shouldMaskSecrets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_protect_secrets: {
      value: cdktf.booleanToHclTerraform(struct!.shouldProtectSecrets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_environment: {
      value: cdktf.stringToHclTerraform(struct!.targetEnvironment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretSyncGitlabDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretSyncGitlabDestinationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._projectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectName = this._projectName;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._shouldHideSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldHideSecrets = this._shouldHideSecrets;
    }
    if (this._shouldMaskSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldMaskSecrets = this._shouldMaskSecrets;
    }
    if (this._shouldProtectSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldProtectSecrets = this._shouldProtectSecrets;
    }
    if (this._targetEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetEnvironment = this._targetEnvironment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretSyncGitlabDestinationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
      this._groupName = undefined;
      this._projectId = undefined;
      this._projectName = undefined;
      this._scope = undefined;
      this._shouldHideSecrets = undefined;
      this._shouldMaskSecrets = undefined;
      this._shouldProtectSecrets = undefined;
      this._targetEnvironment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
      this._groupName = value.groupName;
      this._projectId = value.projectId;
      this._projectName = value.projectName;
      this._scope = value.scope;
      this._shouldHideSecrets = value.shouldHideSecrets;
      this._shouldMaskSecrets = value.shouldMaskSecrets;
      this._shouldProtectSecrets = value.shouldProtectSecrets;
      this._targetEnvironment = value.targetEnvironment;
    }
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // should_hide_secrets - computed: true, optional: true, required: false
  private _shouldHideSecrets?: boolean | cdktf.IResolvable; 
  public get shouldHideSecrets() {
    return this.getBooleanAttribute('should_hide_secrets');
  }
  public set shouldHideSecrets(value: boolean | cdktf.IResolvable) {
    this._shouldHideSecrets = value;
  }
  public resetShouldHideSecrets() {
    this._shouldHideSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldHideSecretsInput() {
    return this._shouldHideSecrets;
  }

  // should_mask_secrets - computed: true, optional: true, required: false
  private _shouldMaskSecrets?: boolean | cdktf.IResolvable; 
  public get shouldMaskSecrets() {
    return this.getBooleanAttribute('should_mask_secrets');
  }
  public set shouldMaskSecrets(value: boolean | cdktf.IResolvable) {
    this._shouldMaskSecrets = value;
  }
  public resetShouldMaskSecrets() {
    this._shouldMaskSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldMaskSecretsInput() {
    return this._shouldMaskSecrets;
  }

  // should_protect_secrets - computed: true, optional: true, required: false
  private _shouldProtectSecrets?: boolean | cdktf.IResolvable; 
  public get shouldProtectSecrets() {
    return this.getBooleanAttribute('should_protect_secrets');
  }
  public set shouldProtectSecrets(value: boolean | cdktf.IResolvable) {
    this._shouldProtectSecrets = value;
  }
  public resetShouldProtectSecrets() {
    this._shouldProtectSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldProtectSecretsInput() {
    return this._shouldProtectSecrets;
  }

  // target_environment - computed: false, optional: false, required: true
  private _targetEnvironment?: string; 
  public get targetEnvironment() {
    return this.getStringAttribute('target_environment');
  }
  public set targetEnvironment(value: string) {
    this._targetEnvironment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetEnvironmentInput() {
    return this._targetEnvironment;
  }
}
export interface SecretSyncGitlabSyncOptions {
  /**
  * When set to true, Infisical will not remove secrets from GitLab. Enable this option if you intend to manage some secrets manually outside of Infisical.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_gitlab#disable_secret_deletion SecretSyncGitlab#disable_secret_deletion}
  */
  readonly disableSecretDeletion?: boolean | cdktf.IResolvable;
  /**
  * Specify how Infisical should resolve the initial sync to the destination. Supported options: overwrite-destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_gitlab#initial_sync_behavior SecretSyncGitlab#initial_sync_behavior}
  */
  readonly initialSyncBehavior: string;
  /**
  * The format to use for structuring secret keys in the GitLab destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_gitlab#key_schema SecretSyncGitlab#key_schema}
  */
  readonly keySchema?: string;
}

export function secretSyncGitlabSyncOptionsToTerraform(struct?: SecretSyncGitlabSyncOptions | cdktf.IResolvable): any {
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


export function secretSyncGitlabSyncOptionsToHclTerraform(struct?: SecretSyncGitlabSyncOptions | cdktf.IResolvable): any {
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

export class SecretSyncGitlabSyncOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretSyncGitlabSyncOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecretSyncGitlabSyncOptions | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_gitlab infisical_secret_sync_gitlab}
*/
export class SecretSyncGitlab extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_secret_sync_gitlab";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretSyncGitlab resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretSyncGitlab to import
  * @param importFromId The id of the existing SecretSyncGitlab that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_gitlab#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretSyncGitlab to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_sync_gitlab", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/secret_sync_gitlab infisical_secret_sync_gitlab} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretSyncGitlabConfig
  */
  public constructor(scope: Construct, id: string, config: SecretSyncGitlabConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_secret_sync_gitlab',
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
  private _destinationConfig = new SecretSyncGitlabDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: SecretSyncGitlabDestinationConfig) {
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
  private _syncOptions = new SecretSyncGitlabSyncOptionsOutputReference(this, "sync_options");
  public get syncOptions() {
    return this._syncOptions;
  }
  public putSyncOptions(value: SecretSyncGitlabSyncOptions) {
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
      destination_config: secretSyncGitlabDestinationConfigToTerraform(this._destinationConfig.internalValue),
      environment: cdktf.stringToTerraform(this._environment),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      secret_path: cdktf.stringToTerraform(this._secretPath),
      sync_options: secretSyncGitlabSyncOptionsToTerraform(this._syncOptions.internalValue),
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
        value: secretSyncGitlabDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretSyncGitlabDestinationConfig",
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
        value: secretSyncGitlabSyncOptionsToHclTerraform(this._syncOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretSyncGitlabSyncOptions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
