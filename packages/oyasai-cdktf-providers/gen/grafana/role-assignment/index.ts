// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/role_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/role_assignment#id RoleAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Organization ID. If not set, the Org ID defined in the provider block will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/role_assignment#org_id RoleAssignment#org_id}
  */
  readonly orgId?: string;
  /**
  * Grafana RBAC role UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/role_assignment#role_uid RoleAssignment#role_uid}
  */
  readonly roleUid: string;
  /**
  * IDs of service accounts that the role should be assigned to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/role_assignment#service_accounts RoleAssignment#service_accounts}
  */
  readonly serviceAccounts?: string[];
  /**
  * IDs of teams that the role should be assigned to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/role_assignment#teams RoleAssignment#teams}
  */
  readonly teams?: string[];
  /**
  * IDs of users that the role should be assigned to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/role_assignment#users RoleAssignment#users}
  */
  readonly users?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/role_assignment grafana_role_assignment}
*/
export class RoleAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_role_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoleAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoleAssignment to import
  * @param importFromId The id of the existing RoleAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/role_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoleAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_role_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/role_assignment grafana_role_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: RoleAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_role_assignment',
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
    this._id = config.id;
    this._orgId = config.orgId;
    this._roleUid = config.roleUid;
    this._serviceAccounts = config.serviceAccounts;
    this._teams = config.teams;
    this._users = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // org_id - computed: false, optional: true, required: false
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

  // role_uid - computed: false, optional: false, required: true
  private _roleUid?: string; 
  public get roleUid() {
    return this.getStringAttribute('role_uid');
  }
  public set roleUid(value: string) {
    this._roleUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleUidInput() {
    return this._roleUid;
  }

  // service_accounts - computed: false, optional: true, required: false
  private _serviceAccounts?: string[]; 
  public get serviceAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('service_accounts'));
  }
  public set serviceAccounts(value: string[]) {
    this._serviceAccounts = value;
  }
  public resetServiceAccounts() {
    this._serviceAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountsInput() {
    return this._serviceAccounts;
  }

  // teams - computed: false, optional: true, required: false
  private _teams?: string[]; 
  public get teams() {
    return cdktf.Fn.tolist(this.getListAttribute('teams'));
  }
  public set teams(value: string[]) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
  }

  // users - computed: false, optional: true, required: false
  private _users?: number[]; 
  public get users() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('users')));
  }
  public set users(value: number[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
      role_uid: cdktf.stringToTerraform(this._roleUid),
      service_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceAccounts),
      teams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._teams),
      users: cdktf.listMapper(cdktf.numberToTerraform, false)(this._users),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      role_uid: {
        value: cdktf.stringToHclTerraform(this._roleUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceAccounts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      teams: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._teams),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._users),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
