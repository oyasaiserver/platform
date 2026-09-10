// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The login name of the configured default admin user for the Grafana
  * installation. If unset, this value defaults to admin, the Grafana default.
  * Grafana adds the default admin user to all organizations automatically upon
  * creation, and this parameter keeps Terraform from removing it from
  * organizations.
  *  Defaults to `admin`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/organization#admin_user Organization#admin_user}
  */
  readonly adminUser?: string;
  /**
  * A list of email addresses corresponding to users who should be given admin
  * access to the organization. Note: users specified here must already exist in
  * Grafana unless 'create_users' is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/organization#admins Organization#admins}
  */
  readonly admins?: string[];
  /**
  * Whether or not to create Grafana users specified in the organization's
  * membership if they don't already exist in Grafana. If unspecified, this
  * parameter defaults to true, creating placeholder users with the name, login,
  * and email set to the email of the user, and a random password. Setting this
  * option to false will cause an error to be thrown for any users that do not
  * already exist in Grafana.
  *  Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/organization#create_users Organization#create_users}
  */
  readonly createUsers?: boolean | cdktf.IResolvable;
  /**
  * A list of email addresses corresponding to users who should be given editor
  * access to the organization. Note: users specified here must already exist in
  * Grafana unless 'create_users' is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/organization#editors Organization#editors}
  */
  readonly editors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/organization#id Organization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The display name for the Grafana organization created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/organization#name Organization#name}
  */
  readonly name: string;
  /**
  * A list of email addresses corresponding to users who should be given none access to the organization.
  * Note: users specified here must already exist in Grafana, unless 'create_users' is
  * set to true. This feature is only available in Grafana 10.2+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/organization#users_without_access Organization#users_without_access}
  */
  readonly usersWithoutAccess?: string[];
  /**
  * A list of email addresses corresponding to users who should be given viewer
  * access to the organization. Note: users specified here must already exist in
  * Grafana unless 'create_users' is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/organization#viewers Organization#viewers}
  */
  readonly viewers?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/organization grafana_organization}
*/
export class Organization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Organization to import
  * @param importFromId The id of the existing Organization that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Organization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/organization grafana_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_organization',
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
    this._adminUser = config.adminUser;
    this._admins = config.admins;
    this._createUsers = config.createUsers;
    this._editors = config.editors;
    this._id = config.id;
    this._name = config.name;
    this._usersWithoutAccess = config.usersWithoutAccess;
    this._viewers = config.viewers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_user - computed: false, optional: true, required: false
  private _adminUser?: string; 
  public get adminUser() {
    return this.getStringAttribute('admin_user');
  }
  public set adminUser(value: string) {
    this._adminUser = value;
  }
  public resetAdminUser() {
    this._adminUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUserInput() {
    return this._adminUser;
  }

  // admins - computed: false, optional: true, required: false
  private _admins?: string[]; 
  public get admins() {
    return cdktf.Fn.tolist(this.getListAttribute('admins'));
  }
  public set admins(value: string[]) {
    this._admins = value;
  }
  public resetAdmins() {
    this._admins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminsInput() {
    return this._admins;
  }

  // create_users - computed: false, optional: true, required: false
  private _createUsers?: boolean | cdktf.IResolvable; 
  public get createUsers() {
    return this.getBooleanAttribute('create_users');
  }
  public set createUsers(value: boolean | cdktf.IResolvable) {
    this._createUsers = value;
  }
  public resetCreateUsers() {
    this._createUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createUsersInput() {
    return this._createUsers;
  }

  // editors - computed: false, optional: true, required: false
  private _editors?: string[]; 
  public get editors() {
    return cdktf.Fn.tolist(this.getListAttribute('editors'));
  }
  public set editors(value: string[]) {
    this._editors = value;
  }
  public resetEditors() {
    this._editors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editorsInput() {
    return this._editors;
  }

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

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getNumberAttribute('org_id');
  }

  // users_without_access - computed: false, optional: true, required: false
  private _usersWithoutAccess?: string[]; 
  public get usersWithoutAccess() {
    return cdktf.Fn.tolist(this.getListAttribute('users_without_access'));
  }
  public set usersWithoutAccess(value: string[]) {
    this._usersWithoutAccess = value;
  }
  public resetUsersWithoutAccess() {
    this._usersWithoutAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersWithoutAccessInput() {
    return this._usersWithoutAccess;
  }

  // viewers - computed: false, optional: true, required: false
  private _viewers?: string[]; 
  public get viewers() {
    return cdktf.Fn.tolist(this.getListAttribute('viewers'));
  }
  public set viewers(value: string[]) {
    this._viewers = value;
  }
  public resetViewers() {
    this._viewers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewersInput() {
    return this._viewers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_user: cdktf.stringToTerraform(this._adminUser),
      admins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._admins),
      create_users: cdktf.booleanToTerraform(this._createUsers),
      editors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._editors),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      users_without_access: cdktf.listMapper(cdktf.stringToTerraform, false)(this._usersWithoutAccess),
      viewers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._viewers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_user: {
        value: cdktf.stringToHclTerraform(this._adminUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admins: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._admins),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      create_users: {
        value: cdktf.booleanToHclTerraform(this._createUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      editors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._editors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      users_without_access: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._usersWithoutAccess),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      viewers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._viewers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
