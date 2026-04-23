// https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/project_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/project_group#group_id ProjectGroup#group_id}
  */
  readonly groupId?: string;
  /**
  * The name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/project_group#group_name ProjectGroup#group_name}
  */
  readonly groupName?: string;
  /**
  * The id of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/project_group#project_id ProjectGroup#project_id}
  */
  readonly projectId: string;
  /**
  * The roles assigned to the project group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/project_group#roles ProjectGroup#roles}
  */
  readonly roles: ProjectGroupRoles[] | cdktf.IResolvable;
}
export interface ProjectGroupRoles {
  /**
  * Flag to indicate the assigned role is temporary or not. When is_temporary is true fields temporary_mode, temporary_range and temporary_access_start_time is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/project_group#is_temporary ProjectGroup#is_temporary}
  */
  readonly isTemporary?: boolean | cdktf.IResolvable;
  /**
  * The slug of the role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/project_group#role_slug ProjectGroup#role_slug}
  */
  readonly roleSlug: string;
  /**
  * ISO time for which temporary access should begin. This is in the format YYYY-MM-DDTHH:MM:SSZ e.g. 2024-09-19T12:43:13Z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/project_group#temporary_access_start_time ProjectGroup#temporary_access_start_time}
  */
  readonly temporaryAccessStartTime?: string;
  /**
  * TTL for the temporary time. Eg: 1m, 1h, 1d. Default: 1h
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/project_group#temporary_range ProjectGroup#temporary_range}
  */
  readonly temporaryRange?: string;
}

export function projectGroupRolesToTerraform(struct?: ProjectGroupRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_temporary: cdktf.booleanToTerraform(struct!.isTemporary),
    role_slug: cdktf.stringToTerraform(struct!.roleSlug),
    temporary_access_start_time: cdktf.stringToTerraform(struct!.temporaryAccessStartTime),
    temporary_range: cdktf.stringToTerraform(struct!.temporaryRange),
  }
}


export function projectGroupRolesToHclTerraform(struct?: ProjectGroupRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_temporary: {
      value: cdktf.booleanToHclTerraform(struct!.isTemporary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    role_slug: {
      value: cdktf.stringToHclTerraform(struct!.roleSlug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temporary_access_start_time: {
      value: cdktf.stringToHclTerraform(struct!.temporaryAccessStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temporary_range: {
      value: cdktf.stringToHclTerraform(struct!.temporaryRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectGroupRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectGroupRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isTemporary !== undefined) {
      hasAnyValues = true;
      internalValueResult.isTemporary = this._isTemporary;
    }
    if (this._roleSlug !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleSlug = this._roleSlug;
    }
    if (this._temporaryAccessStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporaryAccessStartTime = this._temporaryAccessStartTime;
    }
    if (this._temporaryRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporaryRange = this._temporaryRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectGroupRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isTemporary = undefined;
      this._roleSlug = undefined;
      this._temporaryAccessStartTime = undefined;
      this._temporaryRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isTemporary = value.isTemporary;
      this._roleSlug = value.roleSlug;
      this._temporaryAccessStartTime = value.temporaryAccessStartTime;
      this._temporaryRange = value.temporaryRange;
    }
  }

  // is_temporary - computed: false, optional: true, required: false
  private _isTemporary?: boolean | cdktf.IResolvable; 
  public get isTemporary() {
    return this.getBooleanAttribute('is_temporary');
  }
  public set isTemporary(value: boolean | cdktf.IResolvable) {
    this._isTemporary = value;
  }
  public resetIsTemporary() {
    this._isTemporary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTemporaryInput() {
    return this._isTemporary;
  }

  // role_slug - computed: false, optional: false, required: true
  private _roleSlug?: string; 
  public get roleSlug() {
    return this.getStringAttribute('role_slug');
  }
  public set roleSlug(value: string) {
    this._roleSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleSlugInput() {
    return this._roleSlug;
  }

  // temporary_access_start_time - computed: false, optional: true, required: false
  private _temporaryAccessStartTime?: string; 
  public get temporaryAccessStartTime() {
    return this.getStringAttribute('temporary_access_start_time');
  }
  public set temporaryAccessStartTime(value: string) {
    this._temporaryAccessStartTime = value;
  }
  public resetTemporaryAccessStartTime() {
    this._temporaryAccessStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryAccessStartTimeInput() {
    return this._temporaryAccessStartTime;
  }

  // temporary_range - computed: false, optional: true, required: false
  private _temporaryRange?: string; 
  public get temporaryRange() {
    return this.getStringAttribute('temporary_range');
  }
  public set temporaryRange(value: string) {
    this._temporaryRange = value;
  }
  public resetTemporaryRange() {
    this._temporaryRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryRangeInput() {
    return this._temporaryRange;
  }
}

export class ProjectGroupRolesList extends cdktf.ComplexList {
  public internalValue? : ProjectGroupRoles[] | cdktf.IResolvable

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
  public get(index: number): ProjectGroupRolesOutputReference {
    return new ProjectGroupRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/project_group infisical_project_group}
*/
export class ProjectGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_project_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectGroup to import
  * @param importFromId The id of the existing ProjectGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/project_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_project_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.17/docs/resources/project_group infisical_project_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_project_group',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.16.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._groupName = config.groupName;
    this._projectId = config.projectId;
    this._roles.internalValue = config.roles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // membership_id - computed: true, optional: false, required: false
  public get membershipId() {
    return this.getStringAttribute('membership_id');
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

  // roles - computed: false, optional: false, required: true
  private _roles = new ProjectGroupRolesList(this, "roles", true);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: ProjectGroupRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      group_name: cdktf.stringToTerraform(this._groupName),
      project_id: cdktf.stringToTerraform(this._projectId),
      roles: cdktf.listMapper(projectGroupRolesToTerraform, false)(this._roles.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roles: {
        value: cdktf.listMapperHcl(projectGroupRolesToHclTerraform, false)(this._roles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectGroupRolesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
