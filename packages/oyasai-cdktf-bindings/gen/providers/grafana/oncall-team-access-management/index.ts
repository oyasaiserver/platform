// https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/oncall_team_access_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OncallTeamAccessManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the team's resources are visible to all users (`true`), or only to team members and admins (`false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/oncall_team_access_management#is_sharing_resources_to_all OncallTeamAccessManagement#is_sharing_resources_to_all}
  */
  readonly isSharingResourcesToAll: boolean | cdktf.IResolvable;
  /**
  * The ID of the OnCall team, for example from the `grafana_oncall_team` data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/oncall_team_access_management#team_id OncallTeamAccessManagement#team_id}
  */
  readonly teamId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/oncall_team_access_management grafana_oncall_team_access_management}
*/
export class OncallTeamAccessManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_oncall_team_access_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OncallTeamAccessManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OncallTeamAccessManagement to import
  * @param importFromId The id of the existing OncallTeamAccessManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/oncall_team_access_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OncallTeamAccessManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_oncall_team_access_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/oncall_team_access_management grafana_oncall_team_access_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OncallTeamAccessManagementConfig
  */
  public constructor(scope: Construct, id: string, config: OncallTeamAccessManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_oncall_team_access_management',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '4.54.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._isSharingResourcesToAll = config.isSharingResourcesToAll;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_sharing_resources_to_all - computed: false, optional: false, required: true
  private _isSharingResourcesToAll?: boolean | cdktf.IResolvable; 
  public get isSharingResourcesToAll() {
    return this.getBooleanAttribute('is_sharing_resources_to_all');
  }
  public set isSharingResourcesToAll(value: boolean | cdktf.IResolvable) {
    this._isSharingResourcesToAll = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isSharingResourcesToAllInput() {
    return this._isSharingResourcesToAll;
  }

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      is_sharing_resources_to_all: cdktf.booleanToTerraform(this._isSharingResourcesToAll),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      is_sharing_resources_to_all: {
        value: cdktf.booleanToHclTerraform(this._isSharingResourcesToAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
