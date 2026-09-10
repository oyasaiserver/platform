// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/data_source_permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSourcePermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The plugin type of the datasource (e.g. "prometheus"). If set, skips the lookup of the datasource type from the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/data_source_permission#datasource_type DataSourcePermission#datasource_type}
  */
  readonly datasourceType?: string;
  /**
  * UID of the datasource to apply permissions to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/data_source_permission#datasource_uid DataSourcePermission#datasource_uid}
  */
  readonly datasourceUid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/data_source_permission#id DataSourcePermission#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Organization ID. If not set, the Org ID defined in the provider block will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/data_source_permission#org_id DataSourcePermission#org_id}
  */
  readonly orgId?: string;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/data_source_permission#permissions DataSourcePermission#permissions}
  */
  readonly permissions?: DataSourcePermissionPermissions[] | cdktf.IResolvable;
}
export interface DataSourcePermissionPermissions {
  /**
  * Name of the basic role to manage permissions for. Options: `Viewer`, `Editor` or `Admin`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/data_source_permission#built_in_role DataSourcePermission#built_in_role}
  */
  readonly builtInRole?: string;
  /**
  * Permission to associate with item. Options: `Query`, `Edit` or `Admin` (`Admin` can only be used with Grafana v10.3.0+).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/data_source_permission#permission DataSourcePermission#permission}
  */
  readonly permission: string;
  /**
  * ID of the team to manage permissions for. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/data_source_permission#team_id DataSourcePermission#team_id}
  */
  readonly teamId?: string;
  /**
  * ID of the user or service account to manage permissions for. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/data_source_permission#user_id DataSourcePermission#user_id}
  */
  readonly userId?: string;
}

export function dataSourcePermissionPermissionsToTerraform(struct?: DataSourcePermissionPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    built_in_role: cdktf.stringToTerraform(struct!.builtInRole),
    permission: cdktf.stringToTerraform(struct!.permission),
    team_id: cdktf.stringToTerraform(struct!.teamId),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function dataSourcePermissionPermissionsToHclTerraform(struct?: DataSourcePermissionPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    built_in_role: {
      value: cdktf.stringToHclTerraform(struct!.builtInRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
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

export class DataSourcePermissionPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSourcePermissionPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._builtInRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.builtInRole = this._builtInRole;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
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

  public set internalValue(value: DataSourcePermissionPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._builtInRole = undefined;
      this._permission = undefined;
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
      this._builtInRole = value.builtInRole;
      this._permission = value.permission;
      this._teamId = value.teamId;
      this._userId = value.userId;
    }
  }

  // built_in_role - computed: false, optional: true, required: false
  private _builtInRole?: string; 
  public get builtInRole() {
    return this.getStringAttribute('built_in_role');
  }
  public set builtInRole(value: string) {
    this._builtInRole = value;
  }
  public resetBuiltInRole() {
    this._builtInRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtInRoleInput() {
    return this._builtInRole;
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

export class DataSourcePermissionPermissionsList extends cdktf.ComplexList {
  public internalValue? : DataSourcePermissionPermissions[] | cdktf.IResolvable

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
  public get(index: number): DataSourcePermissionPermissionsOutputReference {
    return new DataSourcePermissionPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/data_source_permission grafana_data_source_permission}
*/
export class DataSourcePermission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_data_source_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSourcePermission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSourcePermission to import
  * @param importFromId The id of the existing DataSourcePermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/data_source_permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSourcePermission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_data_source_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/data_source_permission grafana_data_source_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSourcePermissionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSourcePermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_data_source_permission',
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
    this._datasourceType = config.datasourceType;
    this._datasourceUid = config.datasourceUid;
    this._id = config.id;
    this._orgId = config.orgId;
    this._permissions.internalValue = config.permissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datasource_type - computed: false, optional: true, required: false
  private _datasourceType?: string; 
  public get datasourceType() {
    return this.getStringAttribute('datasource_type');
  }
  public set datasourceType(value: string) {
    this._datasourceType = value;
  }
  public resetDatasourceType() {
    this._datasourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceTypeInput() {
    return this._datasourceType;
  }

  // datasource_uid - computed: false, optional: false, required: true
  private _datasourceUid?: string; 
  public get datasourceUid() {
    return this.getStringAttribute('datasource_uid');
  }
  public set datasourceUid(value: string) {
    this._datasourceUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceUidInput() {
    return this._datasourceUid;
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

  // permissions - computed: false, optional: true, required: false
  private _permissions = new DataSourcePermissionPermissionsList(this, "permissions", true);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: DataSourcePermissionPermissions[] | cdktf.IResolvable) {
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
      datasource_type: cdktf.stringToTerraform(this._datasourceType),
      datasource_uid: cdktf.stringToTerraform(this._datasourceUid),
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
      permissions: cdktf.listMapper(dataSourcePermissionPermissionsToTerraform, true)(this._permissions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datasource_type: {
        value: cdktf.stringToHclTerraform(this._datasourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datasource_uid: {
        value: cdktf.stringToHclTerraform(this._datasourceUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      permissions: {
        value: cdktf.listMapperHcl(dataSourcePermissionPermissionsToHclTerraform, true)(this._permissions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataSourcePermissionPermissionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
