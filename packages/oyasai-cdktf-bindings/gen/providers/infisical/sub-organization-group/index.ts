// https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/sub_organization_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubOrganizationGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the root-organization group to link. Exactly one of `group_id` or `group_slug` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/sub_organization_group#group_id SubOrganizationGroup#group_id}
  */
  readonly groupId?: string;
  /**
  * The slug of the root-organization group to link. Exactly one of `group_id` or `group_slug` must be set. Pointing it at a different group replaces the link. If the linked group's slug is renamed in the root organization, update this to the new slug and the link is kept.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/sub_organization_group#group_slug SubOrganizationGroup#group_slug}
  */
  readonly groupSlug?: string;
  /**
  * The organization roles assigned to the group within the sub-organization. At least one role must be permanent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/sub_organization_group#roles SubOrganizationGroup#roles}
  */
  readonly roles: SubOrganizationGroupRoles[] | cdktf.IResolvable;
}
export interface SubOrganizationGroupRoles {
  /**
  * Flag to indicate the assigned role is temporary or not. When is_temporary is true, temporary_access_start_time is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/sub_organization_group#is_temporary SubOrganizationGroup#is_temporary}
  */
  readonly isTemporary?: boolean | cdktf.IResolvable;
  /**
  * The slug of the organization role, e.g. `admin`, `member`, `no-access`, or the slug of a custom role of the sub-organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/sub_organization_group#role_slug SubOrganizationGroup#role_slug}
  */
  readonly roleSlug: string;
  /**
  * ISO time for which temporary access should begin. This is in the format YYYY-MM-DDTHH:MM:SSZ e.g. 2024-09-19T12:43:13Z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/sub_organization_group#temporary_access_start_time SubOrganizationGroup#temporary_access_start_time}
  */
  readonly temporaryAccessStartTime?: string;
  /**
  * TTL for the temporary time. Eg: 1m, 1h, 1d. Default: 1h
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/sub_organization_group#temporary_range SubOrganizationGroup#temporary_range}
  */
  readonly temporaryRange?: string;
}

export function subOrganizationGroupRolesToTerraform(struct?: SubOrganizationGroupRoles | cdktf.IResolvable): any {
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


export function subOrganizationGroupRolesToHclTerraform(struct?: SubOrganizationGroupRoles | cdktf.IResolvable): any {
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

export class SubOrganizationGroupRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SubOrganizationGroupRoles | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SubOrganizationGroupRoles | cdktf.IResolvable | undefined) {
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

  // is_temporary - computed: true, optional: true, required: false
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

export class SubOrganizationGroupRolesList extends cdktf.ComplexList {
  public internalValue? : SubOrganizationGroupRoles[] | cdktf.IResolvable

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
  public get(index: number): SubOrganizationGroupRolesOutputReference {
    return new SubOrganizationGroupRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/sub_organization_group infisical_sub_organization_group}
*/
export class SubOrganizationGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_sub_organization_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SubOrganizationGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SubOrganizationGroup to import
  * @param importFromId The id of the existing SubOrganizationGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/sub_organization_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SubOrganizationGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_sub_organization_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/sub_organization_group infisical_sub_organization_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubOrganizationGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SubOrganizationGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_sub_organization_group',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.20.14'
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
    this._groupSlug = config.groupSlug;
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

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // group_slug - computed: true, optional: true, required: false
  private _groupSlug?: string; 
  public get groupSlug() {
    return this.getStringAttribute('group_slug');
  }
  public set groupSlug(value: string) {
    this._groupSlug = value;
  }
  public resetGroupSlug() {
    this._groupSlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSlugInput() {
    return this._groupSlug;
  }

  // membership_id - computed: true, optional: false, required: false
  public get membershipId() {
    return this.getStringAttribute('membership_id');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // roles - computed: false, optional: false, required: true
  private _roles = new SubOrganizationGroupRolesList(this, "roles", true);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: SubOrganizationGroupRoles[] | cdktf.IResolvable) {
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
      group_slug: cdktf.stringToTerraform(this._groupSlug),
      roles: cdktf.listMapper(subOrganizationGroupRolesToTerraform, false)(this._roles.internalValue),
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
      group_slug: {
        value: cdktf.stringToHclTerraform(this._groupSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roles: {
        value: cdktf.listMapperHcl(subOrganizationGroupRolesToHclTerraform, false)(this._roles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SubOrganizationGroupRolesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
