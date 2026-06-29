// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustDeviceDeploymentGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#account_id ZeroTrustDeviceDeploymentGroups#account_id}
  */
  readonly accountId: string;
  /**
  * A user-friendly name for the deployment group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#name ZeroTrustDeviceDeploymentGroups#name}
  */
  readonly name: string;
  /**
  * Contains an optional list of policy IDs assigned to a group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#policy_ids ZeroTrustDeviceDeploymentGroups#policy_ids}
  */
  readonly policyIds?: string[];
  /**
  * Contains at least one version configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#version_config ZeroTrustDeviceDeploymentGroups#version_config}
  */
  readonly versionConfig: ZeroTrustDeviceDeploymentGroupsVersionConfig[] | cdktf.IResolvable;
}
export interface ZeroTrustDeviceDeploymentGroupsVersionConfig {
  /**
  * The target environment for the client version (e.g., windows, macos).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#target_environment ZeroTrustDeviceDeploymentGroups#target_environment}
  */
  readonly targetEnvironment: string;
  /**
  * The specific client version to deploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#version ZeroTrustDeviceDeploymentGroups#version}
  */
  readonly version: string;
}

export function zeroTrustDeviceDeploymentGroupsVersionConfigToTerraform(struct?: ZeroTrustDeviceDeploymentGroupsVersionConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_environment: cdktf.stringToTerraform(struct!.targetEnvironment),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function zeroTrustDeviceDeploymentGroupsVersionConfigToHclTerraform(struct?: ZeroTrustDeviceDeploymentGroupsVersionConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_environment: {
      value: cdktf.stringToHclTerraform(struct!.targetEnvironment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ZeroTrustDeviceDeploymentGroupsVersionConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetEnvironment = this._targetEnvironment;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustDeviceDeploymentGroupsVersionConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetEnvironment = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetEnvironment = value.targetEnvironment;
      this._version = value.version;
    }
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class ZeroTrustDeviceDeploymentGroupsVersionConfigList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustDeviceDeploymentGroupsVersionConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference {
    return new ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups cloudflare_zero_trust_device_deployment_groups}
*/
export class ZeroTrustDeviceDeploymentGroups extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_device_deployment_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustDeviceDeploymentGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustDeviceDeploymentGroups to import
  * @param importFromId The id of the existing ZeroTrustDeviceDeploymentGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustDeviceDeploymentGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_deployment_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups cloudflare_zero_trust_device_deployment_groups} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustDeviceDeploymentGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustDeviceDeploymentGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_device_deployment_groups',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.21.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._name = config.name;
    this._policyIds = config.policyIds;
    this._versionConfig.internalValue = config.versionConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // policy_ids - computed: false, optional: true, required: false
  private _policyIds?: string[]; 
  public get policyIds() {
    return this.getListAttribute('policy_ids');
  }
  public set policyIds(value: string[]) {
    this._policyIds = value;
  }
  public resetPolicyIds() {
    this._policyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdsInput() {
    return this._policyIds;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // version_config - computed: false, optional: false, required: true
  private _versionConfig = new ZeroTrustDeviceDeploymentGroupsVersionConfigList(this, "version_config", false);
  public get versionConfig() {
    return this._versionConfig;
  }
  public putVersionConfig(value: ZeroTrustDeviceDeploymentGroupsVersionConfig[] | cdktf.IResolvable) {
    this._versionConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionConfigInput() {
    return this._versionConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      name: cdktf.stringToTerraform(this._name),
      policy_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policyIds),
      version_config: cdktf.listMapper(zeroTrustDeviceDeploymentGroupsVersionConfigToTerraform, false)(this._versionConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
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
      policy_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policyIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      version_config: {
        value: cdktf.listMapperHcl(zeroTrustDeviceDeploymentGroupsVersionConfigToHclTerraform, false)(this._versionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustDeviceDeploymentGroupsVersionConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
