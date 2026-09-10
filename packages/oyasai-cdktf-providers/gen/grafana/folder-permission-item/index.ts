// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/folder_permission_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FolderPermissionItemConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UID of the folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/folder_permission_item#folder_uid FolderPermissionItem#folder_uid}
  */
  readonly folderUid: string;
  /**
  * The Organization ID. If not set, the default organization is used for basic authentication, or the one that owns your service account for token authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/folder_permission_item#org_id FolderPermissionItem#org_id}
  */
  readonly orgId?: string;
  /**
  * the permission to be assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/folder_permission_item#permission FolderPermissionItem#permission}
  */
  readonly permission: string;
  /**
  * the role onto which the permission is to be assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/folder_permission_item#role FolderPermissionItem#role}
  */
  readonly role?: string;
  /**
  * the team onto which the permission is to be assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/folder_permission_item#team FolderPermissionItem#team}
  */
  readonly team?: string;
  /**
  * the user or service account onto which the permission is to be assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/folder_permission_item#user FolderPermissionItem#user}
  */
  readonly user?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/folder_permission_item grafana_folder_permission_item}
*/
export class FolderPermissionItem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_folder_permission_item";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FolderPermissionItem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FolderPermissionItem to import
  * @param importFromId The id of the existing FolderPermissionItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/folder_permission_item#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FolderPermissionItem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_folder_permission_item", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/folder_permission_item grafana_folder_permission_item} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FolderPermissionItemConfig
  */
  public constructor(scope: Construct, id: string, config: FolderPermissionItemConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_folder_permission_item',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '4.45.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._folderUid = config.folderUid;
    this._orgId = config.orgId;
    this._permission = config.permission;
    this._role = config.role;
    this._team = config.team;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // folder_uid - computed: false, optional: false, required: true
  private _folderUid?: string; 
  public get folderUid() {
    return this.getStringAttribute('folder_uid');
  }
  public set folderUid(value: string) {
    this._folderUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderUidInput() {
    return this._folderUid;
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

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // team - computed: false, optional: true, required: false
  private _team?: string; 
  public get team() {
    return this.getStringAttribute('team');
  }
  public set team(value: string) {
    this._team = value;
  }
  public resetTeam() {
    this._team = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      folder_uid: cdktf.stringToTerraform(this._folderUid),
      org_id: cdktf.stringToTerraform(this._orgId),
      permission: cdktf.stringToTerraform(this._permission),
      role: cdktf.stringToTerraform(this._role),
      team: cdktf.stringToTerraform(this._team),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      folder_uid: {
        value: cdktf.stringToHclTerraform(this._folderUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission: {
        value: cdktf.stringToHclTerraform(this._permission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team: {
        value: cdktf.stringToHclTerraform(this._team),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
