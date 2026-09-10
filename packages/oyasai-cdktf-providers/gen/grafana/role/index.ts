// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the role version should be incremented automatically on updates (and set to 1 on creation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/role#auto_increment_version Role#auto_increment_version}
  */
  readonly autoIncrementVersion?: boolean | cdktf.IResolvable;
  /**
  * Description of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/role#description Role#description}
  */
  readonly description?: string;
  /**
  * Display name of the role. Available with Grafana 8.5+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/role#display_name Role#display_name}
  */
  readonly displayName?: string;
  /**
  * Boolean to state whether the role is available across all organizations or not. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/role#global Role#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
  /**
  * Group of the role. Available with Grafana 8.5+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/role#group Role#group}
  */
  readonly group?: string;
  /**
  * Boolean to state whether the role should be visible in the Grafana UI or not. Available with Grafana 8.5+. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/role#hidden Role#hidden}
  */
  readonly hidden?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/role#id Role#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/role#name Role#name}
  */
  readonly name: string;
  /**
  * The Organization ID. If not set, the Org ID defined in the provider block will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/role#org_id Role#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the role. Used for assignments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/role#uid Role#uid}
  */
  readonly uid?: string;
  /**
  * Version of the role. The server manages this automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/role#version Role#version}
  */
  readonly version?: number;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/role#permissions Role#permissions}
  */
  readonly permissions?: RolePermissions[] | cdktf.IResolvable;
}
export interface RolePermissions {
  /**
  * Specific action users granted with the role will be allowed to perform (for example: `users:read`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/role#action Role#action}
  */
  readonly action: string;
  /**
  * Scope to restrict the action to a set of resources (for example: `users:*` or `roles:customrole1`) Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/role#scope Role#scope}
  */
  readonly scope?: string;
}

export function rolePermissionsToTerraform(struct?: RolePermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function rolePermissionsToHclTerraform(struct?: RolePermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RolePermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RolePermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RolePermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._scope = value.scope;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}

export class RolePermissionsList extends cdktf.ComplexList {
  public internalValue? : RolePermissions[] | cdktf.IResolvable

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
  public get(index: number): RolePermissionsOutputReference {
    return new RolePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/role grafana_role}
*/
export class Role extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Role resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Role to import
  * @param importFromId The id of the existing Role that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Role to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/role grafana_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleConfig
  */
  public constructor(scope: Construct, id: string, config: RoleConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_role',
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
    this._autoIncrementVersion = config.autoIncrementVersion;
    this._description = config.description;
    this._displayName = config.displayName;
    this._global = config.global;
    this._group = config.group;
    this._hidden = config.hidden;
    this._id = config.id;
    this._name = config.name;
    this._orgId = config.orgId;
    this._uid = config.uid;
    this._version = config.version;
    this._permissions.internalValue = config.permissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_increment_version - computed: false, optional: true, required: false
  private _autoIncrementVersion?: boolean | cdktf.IResolvable; 
  public get autoIncrementVersion() {
    return this.getBooleanAttribute('auto_increment_version');
  }
  public set autoIncrementVersion(value: boolean | cdktf.IResolvable) {
    this._autoIncrementVersion = value;
  }
  public resetAutoIncrementVersion() {
    this._autoIncrementVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIncrementVersionInput() {
    return this._autoIncrementVersion;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // global - computed: false, optional: true, required: false
  private _global?: boolean | cdktf.IResolvable; 
  public get global() {
    return this.getBooleanAttribute('global');
  }
  public set global(value: boolean | cdktf.IResolvable) {
    this._global = value;
  }
  public resetGlobal() {
    this._global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // hidden - computed: false, optional: true, required: false
  private _hidden?: boolean | cdktf.IResolvable; 
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }
  public set hidden(value: boolean | cdktf.IResolvable) {
    this._hidden = value;
  }
  public resetHidden() {
    this._hidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
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

  // uid - computed: true, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new RolePermissionsList(this, "permissions", true);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: RolePermissions[] | cdktf.IResolvable) {
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
      auto_increment_version: cdktf.booleanToTerraform(this._autoIncrementVersion),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      global: cdktf.booleanToTerraform(this._global),
      group: cdktf.stringToTerraform(this._group),
      hidden: cdktf.booleanToTerraform(this._hidden),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      uid: cdktf.stringToTerraform(this._uid),
      version: cdktf.numberToTerraform(this._version),
      permissions: cdktf.listMapper(rolePermissionsToTerraform, true)(this._permissions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_increment_version: {
        value: cdktf.booleanToHclTerraform(this._autoIncrementVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global: {
        value: cdktf.booleanToHclTerraform(this._global),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hidden: {
        value: cdktf.booleanToHclTerraform(this._hidden),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      permissions: {
        value: cdktf.listMapperHcl(rolePermissionsToHclTerraform, true)(this._permissions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RolePermissionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
