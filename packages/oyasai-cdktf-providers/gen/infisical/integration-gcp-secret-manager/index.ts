// https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/integration_gcp_secret_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationGcpSecretManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The slug of the environment to sync to GCP Secret Manager (prod, dev, staging, etc).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/integration_gcp_secret_manager#environment IntegrationGcpSecretManager#environment}
  */
  readonly environment: string;
  /**
  * The ID of the GCP project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/integration_gcp_secret_manager#gcp_project_id IntegrationGcpSecretManager#gcp_project_id}
  */
  readonly gcpProjectId: string;
  /**
  * Integration options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/integration_gcp_secret_manager#options IntegrationGcpSecretManager#options}
  */
  readonly options?: IntegrationGcpSecretManagerOptions;
  /**
  * The ID of your Infisical project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/integration_gcp_secret_manager#project_id IntegrationGcpSecretManager#project_id}
  */
  readonly projectId: string;
  /**
  * The secret path in Infisical to sync secrets from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/integration_gcp_secret_manager#secret_path IntegrationGcpSecretManager#secret_path}
  */
  readonly secretPath: string;
  /**
  * Service account json for the GCP project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/integration_gcp_secret_manager#service_account_json IntegrationGcpSecretManager#service_account_json}
  */
  readonly serviceAccountJson: string;
}
export interface IntegrationGcpSecretManagerOptions {
  /**
  * The prefix to add to the secret name in GCP Secret Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/integration_gcp_secret_manager#secret_prefix IntegrationGcpSecretManager#secret_prefix}
  */
  readonly secretPrefix?: string;
  /**
  * The suffix to add to the secret name in GCP Secret Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/integration_gcp_secret_manager#secret_suffix IntegrationGcpSecretManager#secret_suffix}
  */
  readonly secretSuffix?: string;
}

export function integrationGcpSecretManagerOptionsToTerraform(struct?: IntegrationGcpSecretManagerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_prefix: cdktf.stringToTerraform(struct!.secretPrefix),
    secret_suffix: cdktf.stringToTerraform(struct!.secretSuffix),
  }
}


export function integrationGcpSecretManagerOptionsToHclTerraform(struct?: IntegrationGcpSecretManagerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_prefix: {
      value: cdktf.stringToHclTerraform(struct!.secretPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_suffix: {
      value: cdktf.stringToHclTerraform(struct!.secretSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationGcpSecretManagerOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationGcpSecretManagerOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretPrefix = this._secretPrefix;
    }
    if (this._secretSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretSuffix = this._secretSuffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationGcpSecretManagerOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretPrefix = undefined;
      this._secretSuffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretPrefix = value.secretPrefix;
      this._secretSuffix = value.secretSuffix;
    }
  }

  // secret_prefix - computed: true, optional: true, required: false
  private _secretPrefix?: string; 
  public get secretPrefix() {
    return this.getStringAttribute('secret_prefix');
  }
  public set secretPrefix(value: string) {
    this._secretPrefix = value;
  }
  public resetSecretPrefix() {
    this._secretPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretPrefixInput() {
    return this._secretPrefix;
  }

  // secret_suffix - computed: true, optional: true, required: false
  private _secretSuffix?: string; 
  public get secretSuffix() {
    return this.getStringAttribute('secret_suffix');
  }
  public set secretSuffix(value: string) {
    this._secretSuffix = value;
  }
  public resetSecretSuffix() {
    this._secretSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretSuffixInput() {
    return this._secretSuffix;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/integration_gcp_secret_manager infisical_integration_gcp_secret_manager}
*/
export class IntegrationGcpSecretManager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_integration_gcp_secret_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationGcpSecretManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationGcpSecretManager to import
  * @param importFromId The id of the existing IntegrationGcpSecretManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/integration_gcp_secret_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationGcpSecretManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_integration_gcp_secret_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.18.0/docs/resources/integration_gcp_secret_manager infisical_integration_gcp_secret_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationGcpSecretManagerConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationGcpSecretManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_integration_gcp_secret_manager',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environment = config.environment;
    this._gcpProjectId = config.gcpProjectId;
    this._options.internalValue = config.options;
    this._projectId = config.projectId;
    this._secretPath = config.secretPath;
    this._serviceAccountJson = config.serviceAccountJson;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // gcp_project_id - computed: false, optional: false, required: true
  private _gcpProjectId?: string; 
  public get gcpProjectId() {
    return this.getStringAttribute('gcp_project_id');
  }
  public set gcpProjectId(value: string) {
    this._gcpProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectIdInput() {
    return this._gcpProjectId;
  }

  // integration_auth_id - computed: true, optional: false, required: false
  public get integrationAuthId() {
    return this.getStringAttribute('integration_auth_id');
  }

  // integration_id - computed: true, optional: false, required: false
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }

  // options - computed: true, optional: true, required: false
  private _options = new IntegrationGcpSecretManagerOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: IntegrationGcpSecretManagerOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
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

  // service_account_json - computed: false, optional: false, required: true
  private _serviceAccountJson?: string; 
  public get serviceAccountJson() {
    return this.getStringAttribute('service_account_json');
  }
  public set serviceAccountJson(value: string) {
    this._serviceAccountJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountJsonInput() {
    return this._serviceAccountJson;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment: cdktf.stringToTerraform(this._environment),
      gcp_project_id: cdktf.stringToTerraform(this._gcpProjectId),
      options: integrationGcpSecretManagerOptionsToTerraform(this._options.internalValue),
      project_id: cdktf.stringToTerraform(this._projectId),
      secret_path: cdktf.stringToTerraform(this._secretPath),
      service_account_json: cdktf.stringToTerraform(this._serviceAccountJson),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_project_id: {
        value: cdktf.stringToHclTerraform(this._gcpProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: integrationGcpSecretManagerOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationGcpSecretManagerOptions",
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
      service_account_json: {
        value: cdktf.stringToHclTerraform(this._serviceAccountJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
