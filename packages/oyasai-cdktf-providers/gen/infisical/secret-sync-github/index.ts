// https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/secret_sync_github
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretSyncGithubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether secrets should be automatically synced when changes occur at the source location or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/secret_sync_github#auto_sync_enabled SecretSyncGithub#auto_sync_enabled}
  */
  readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
  /**
  * The ID of the github Connection to use for syncing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/secret_sync_github#connection_id SecretSyncGithub#connection_id}
  */
  readonly connectionId: string;
  /**
  * An optional description for the Github sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/secret_sync_github#description SecretSyncGithub#description}
  */
  readonly description?: string;
  /**
  * The destination configuration for the secret sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/secret_sync_github#destination_config SecretSyncGithub#destination_config}
  */
  readonly destinationConfig: SecretSyncGithubDestinationConfig;
  /**
  * The slug of the project environment to sync secrets from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/secret_sync_github#environment SecretSyncGithub#environment}
  */
  readonly environment: string;
  /**
  * The name of the Github sync to create. Must be slug-friendly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/secret_sync_github#name SecretSyncGithub#name}
  */
  readonly name: string;
  /**
  * The ID of the Infisical project to create the sync in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/secret_sync_github#project_id SecretSyncGithub#project_id}
  */
  readonly projectId: string;
  /**
  * The folder path to sync secrets from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/secret_sync_github#secret_path SecretSyncGithub#secret_path}
  */
  readonly secretPath: string;
  /**
  * Parameters to modify how secrets are synced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/secret_sync_github#sync_options SecretSyncGithub#sync_options}
  */
  readonly syncOptions: SecretSyncGithubSyncOptions;
}
export interface SecretSyncGithubDestinationConfig {
  /**
  * The environment to sync the secrets to, required if scope is `repository-environment`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/secret_sync_github#repository_environment SecretSyncGithub#repository_environment}
  */
  readonly repositoryEnvironment?: string;
  /**
  * The repository to sync the secrets to, required if scope is `repository` or `repository-environment`. This is only the name of the repository, without the repository owner included. As an example if you have a repository called Infisical/go-sdk, you would only need to provide `go-sdk` here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/secret_sync_github#repository_name SecretSyncGithub#repository_name}
  */
  readonly repositoryName?: string;
  /**
  * The owner of the Github repository, required if scope is `repository`, `repository-environment`, or `organization`. This is the organization name, or the username for personal repositories. As an example if you have a repository called Infisical/go-sdk, you would only need to provide `Infisical` here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/secret_sync_github#repository_owner SecretSyncGithub#repository_owner}
  */
  readonly repositoryOwner?: string;
  /**
  * The scope to sync the secrets to, repository|organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/secret_sync_github#scope SecretSyncGithub#scope}
  */
  readonly scope: string;
  /**
  * The repository ids to sync the secrets to, required if scope is `organization` and the visibility field is set to `selected`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/secret_sync_github#selected_repository_ids SecretSyncGithub#selected_repository_ids}
  */
  readonly selectedRepositoryIds?: number[];
  /**
  * The visibility of the Github repository, required if scope is `organization`. Accepted values are: `all`|`private`|`selected`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/secret_sync_github#visibility SecretSyncGithub#visibility}
  */
  readonly visibility?: string;
}

export function secretSyncGithubDestinationConfigToTerraform(struct?: SecretSyncGithubDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_environment: cdktf.stringToTerraform(struct!.repositoryEnvironment),
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
    repository_owner: cdktf.stringToTerraform(struct!.repositoryOwner),
    scope: cdktf.stringToTerraform(struct!.scope),
    selected_repository_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.selectedRepositoryIds),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}


export function secretSyncGithubDestinationConfigToHclTerraform(struct?: SecretSyncGithubDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_environment: {
      value: cdktf.stringToHclTerraform(struct!.repositoryEnvironment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_name: {
      value: cdktf.stringToHclTerraform(struct!.repositoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_owner: {
      value: cdktf.stringToHclTerraform(struct!.repositoryOwner),
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
    selected_repository_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.selectedRepositoryIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    visibility: {
      value: cdktf.stringToHclTerraform(struct!.visibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretSyncGithubDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretSyncGithubDestinationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryEnvironment = this._repositoryEnvironment;
    }
    if (this._repositoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryName = this._repositoryName;
    }
    if (this._repositoryOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryOwner = this._repositoryOwner;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._selectedRepositoryIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedRepositoryIds = this._selectedRepositoryIds;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretSyncGithubDestinationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repositoryEnvironment = undefined;
      this._repositoryName = undefined;
      this._repositoryOwner = undefined;
      this._scope = undefined;
      this._selectedRepositoryIds = undefined;
      this._visibility = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repositoryEnvironment = value.repositoryEnvironment;
      this._repositoryName = value.repositoryName;
      this._repositoryOwner = value.repositoryOwner;
      this._scope = value.scope;
      this._selectedRepositoryIds = value.selectedRepositoryIds;
      this._visibility = value.visibility;
    }
  }

  // repository_environment - computed: false, optional: true, required: false
  private _repositoryEnvironment?: string; 
  public get repositoryEnvironment() {
    return this.getStringAttribute('repository_environment');
  }
  public set repositoryEnvironment(value: string) {
    this._repositoryEnvironment = value;
  }
  public resetRepositoryEnvironment() {
    this._repositoryEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryEnvironmentInput() {
    return this._repositoryEnvironment;
  }

  // repository_name - computed: false, optional: true, required: false
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  public resetRepositoryName() {
    this._repositoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }

  // repository_owner - computed: false, optional: true, required: false
  private _repositoryOwner?: string; 
  public get repositoryOwner() {
    return this.getStringAttribute('repository_owner');
  }
  public set repositoryOwner(value: string) {
    this._repositoryOwner = value;
  }
  public resetRepositoryOwner() {
    this._repositoryOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryOwnerInput() {
    return this._repositoryOwner;
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

  // selected_repository_ids - computed: false, optional: true, required: false
  private _selectedRepositoryIds?: number[]; 
  public get selectedRepositoryIds() {
    return this.getNumberListAttribute('selected_repository_ids');
  }
  public set selectedRepositoryIds(value: number[]) {
    this._selectedRepositoryIds = value;
  }
  public resetSelectedRepositoryIds() {
    this._selectedRepositoryIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedRepositoryIdsInput() {
    return this._selectedRepositoryIds;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface SecretSyncGithubSyncOptions {
  /**
  * When set to true, Infisical will not remove secrets from Github. Enable this option if you intend to manage some secrets manually outside of Infisical.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/secret_sync_github#disable_secret_deletion SecretSyncGithub#disable_secret_deletion}
  */
  readonly disableSecretDeletion?: boolean | cdktf.IResolvable;
  /**
  * Specify how Infisical should resolve the initial sync to the destination. Supported options: overwrite-destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/secret_sync_github#initial_sync_behavior SecretSyncGithub#initial_sync_behavior}
  */
  readonly initialSyncBehavior: string;
  /**
  * The format to use for structuring secret keys in the Github destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/secret_sync_github#key_schema SecretSyncGithub#key_schema}
  */
  readonly keySchema?: string;
}

export function secretSyncGithubSyncOptionsToTerraform(struct?: SecretSyncGithubSyncOptions | cdktf.IResolvable): any {
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


export function secretSyncGithubSyncOptionsToHclTerraform(struct?: SecretSyncGithubSyncOptions | cdktf.IResolvable): any {
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

export class SecretSyncGithubSyncOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretSyncGithubSyncOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecretSyncGithubSyncOptions | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/secret_sync_github infisical_secret_sync_github}
*/
export class SecretSyncGithub extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_secret_sync_github";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretSyncGithub resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretSyncGithub to import
  * @param importFromId The id of the existing SecretSyncGithub that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/secret_sync_github#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretSyncGithub to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_sync_github", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.22/docs/resources/secret_sync_github infisical_secret_sync_github} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretSyncGithubConfig
  */
  public constructor(scope: Construct, id: string, config: SecretSyncGithubConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_secret_sync_github',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.16.22'
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
  private _destinationConfig = new SecretSyncGithubDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: SecretSyncGithubDestinationConfig) {
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
  private _syncOptions = new SecretSyncGithubSyncOptionsOutputReference(this, "sync_options");
  public get syncOptions() {
    return this._syncOptions;
  }
  public putSyncOptions(value: SecretSyncGithubSyncOptions) {
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
      destination_config: secretSyncGithubDestinationConfigToTerraform(this._destinationConfig.internalValue),
      environment: cdktf.stringToTerraform(this._environment),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      secret_path: cdktf.stringToTerraform(this._secretPath),
      sync_options: secretSyncGithubSyncOptionsToTerraform(this._syncOptions.internalValue),
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
        value: secretSyncGithubDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretSyncGithubDestinationConfig",
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
        value: secretSyncGithubSyncOptionsToHclTerraform(this._syncOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretSyncGithubSyncOptions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
