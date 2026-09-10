// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/scim_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScimConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether group synchronization is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/scim_config#enable_group_sync ScimConfig#enable_group_sync}
  */
  readonly enableGroupSync: boolean | cdktf.IResolvable;
  /**
  * Whether user synchronization is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/scim_config#enable_user_sync ScimConfig#enable_user_sync}
  */
  readonly enableUserSync: boolean | cdktf.IResolvable;
  /**
  * The Organization ID. If not set, the default organization is used for basic authentication, or the one that owns your service account for token authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/scim_config#org_id ScimConfig#org_id}
  */
  readonly orgId?: string;
  /**
  * Whether to block non-provisioned user access to Grafana. Cloud Portal users will always be able to access Grafana, regardless of this setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/scim_config#reject_non_provisioned_users ScimConfig#reject_non_provisioned_users}
  */
  readonly rejectNonProvisionedUsers: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/scim_config grafana_scim_config}
*/
export class ScimConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_scim_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScimConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScimConfig to import
  * @param importFromId The id of the existing ScimConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/scim_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScimConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_scim_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/scim_config grafana_scim_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScimConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ScimConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_scim_config',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '4.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableGroupSync = config.enableGroupSync;
    this._enableUserSync = config.enableUserSync;
    this._orgId = config.orgId;
    this._rejectNonProvisionedUsers = config.rejectNonProvisionedUsers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_group_sync - computed: false, optional: false, required: true
  private _enableGroupSync?: boolean | cdktf.IResolvable; 
  public get enableGroupSync() {
    return this.getBooleanAttribute('enable_group_sync');
  }
  public set enableGroupSync(value: boolean | cdktf.IResolvable) {
    this._enableGroupSync = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGroupSyncInput() {
    return this._enableGroupSync;
  }

  // enable_user_sync - computed: false, optional: false, required: true
  private _enableUserSync?: boolean | cdktf.IResolvable; 
  public get enableUserSync() {
    return this.getBooleanAttribute('enable_user_sync');
  }
  public set enableUserSync(value: boolean | cdktf.IResolvable) {
    this._enableUserSync = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUserSyncInput() {
    return this._enableUserSync;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // org_id - computed: true, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // reject_non_provisioned_users - computed: false, optional: false, required: true
  private _rejectNonProvisionedUsers?: boolean | cdktf.IResolvable; 
  public get rejectNonProvisionedUsers() {
    return this.getBooleanAttribute('reject_non_provisioned_users');
  }
  public set rejectNonProvisionedUsers(value: boolean | cdktf.IResolvable) {
    this._rejectNonProvisionedUsers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectNonProvisionedUsersInput() {
    return this._rejectNonProvisionedUsers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_group_sync: cdktf.booleanToTerraform(this._enableGroupSync),
      enable_user_sync: cdktf.booleanToTerraform(this._enableUserSync),
      org_id: cdktf.stringToTerraform(this._orgId),
      reject_non_provisioned_users: cdktf.booleanToTerraform(this._rejectNonProvisionedUsers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_group_sync: {
        value: cdktf.booleanToHclTerraform(this._enableGroupSync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_user_sync: {
        value: cdktf.booleanToHclTerraform(this._enableUserSync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reject_non_provisioned_users: {
        value: cdktf.booleanToHclTerraform(this._rejectNonProvisionedUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
