// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/dashboard_permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardPermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * UID of the dashboard to apply permissions to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/dashboard_permission#dashboard_uid DashboardPermission#dashboard_uid}
  */
  readonly dashboardUid: string;
  /**
  * The Organization ID. If not set, the default organization is used for basic authentication, or the one that owns your service account for token authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/dashboard_permission#org_id DashboardPermission#org_id}
  */
  readonly orgId?: string;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/dashboard_permission#permissions DashboardPermission#permissions}
  */
  readonly permissions?: DashboardPermissionPermissions[] | cdktf.IResolvable;
}
export interface DashboardPermissionPermissions {
  /**
  * Permission to associate with item. Options: View, Edit, Admin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/dashboard_permission#permission DashboardPermission#permission}
  */
  readonly permission: string;
  /**
  * Name of the basic role to manage permissions for. Options: `Viewer`, `Editor` or `Admin`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/dashboard_permission#role DashboardPermission#role}
  */
  readonly role?: string;
  /**
  * ID of the team to manage permissions for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/dashboard_permission#team_id DashboardPermission#team_id}
  */
  readonly teamId?: string;
  /**
  * ID of the user or service account to manage permissions for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/dashboard_permission#user_id DashboardPermission#user_id}
  */
  readonly userId?: string;
}

export function dashboardPermissionPermissionsToTerraform(struct?: DashboardPermissionPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission: cdktf.stringToTerraform(struct!.permission),
    role: cdktf.stringToTerraform(struct!.role),
    team_id: cdktf.stringToTerraform(struct!.teamId),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function dashboardPermissionPermissionsToHclTerraform(struct?: DashboardPermissionPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team_id: {
      value: cdktf.stringToHclTerraform(struct!.teamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardPermissionPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardPermissionPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._teamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamId = this._teamId;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPermissionPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permission = undefined;
      this._role = undefined;
      this._teamId = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permission = value.permission;
      this._role = value.role;
      this._teamId = value.teamId;
      this._userId = value.userId;
    }
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

  // team_id - computed: false, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

export class DashboardPermissionPermissionsList extends cdktf.ComplexList {
  public internalValue? : DashboardPermissionPermissions[] | cdktf.IResolvable

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
  public get(index: number): DashboardPermissionPermissionsOutputReference {
    return new DashboardPermissionPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/dashboard_permission grafana_dashboard_permission}
*/
export class DashboardPermission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_dashboard_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DashboardPermission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DashboardPermission to import
  * @param importFromId The id of the existing DashboardPermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/dashboard_permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DashboardPermission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_dashboard_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/dashboard_permission grafana_dashboard_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardPermissionConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardPermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_dashboard_permission',
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
    this._dashboardUid = config.dashboardUid;
    this._orgId = config.orgId;
    this._permissions.internalValue = config.permissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboard_uid - computed: false, optional: false, required: true
  private _dashboardUid?: string; 
  public get dashboardUid() {
    return this.getStringAttribute('dashboard_uid');
  }
  public set dashboardUid(value: string) {
    this._dashboardUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardUidInput() {
    return this._dashboardUid;
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

  // permissions - computed: false, optional: true, required: false
  private _permissions = new DashboardPermissionPermissionsList(this, "permissions", true);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: DashboardPermissionPermissions[] | cdktf.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboard_uid: cdktf.stringToTerraform(this._dashboardUid),
      org_id: cdktf.stringToTerraform(this._orgId),
      permissions: cdktf.listMapper(dashboardPermissionPermissionsToTerraform, true)(this._permissions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dashboard_uid: {
        value: cdktf.stringToHclTerraform(this._dashboardUid),
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
      permissions: {
        value: cdktf.listMapperHcl(dashboardPermissionPermissionsToHclTerraform, true)(this._permissions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DashboardPermissionPermissionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
