// https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/project_scoped_identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectScopedIdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the identity has delete protection enabled. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/project_scoped_identity#has_delete_protection ProjectScopedIdentity#has_delete_protection}
  */
  readonly hasDeleteProtection?: boolean | cdktf.IResolvable;
  /**
  * The metadata associated with this identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/project_scoped_identity#metadata ProjectScopedIdentity#metadata}
  */
  readonly metadata?: ProjectScopedIdentityMetadata[] | cdktf.IResolvable;
  /**
  * The name of the identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/project_scoped_identity#name ProjectScopedIdentity#name}
  */
  readonly name: string;
  /**
  * The ID of the project that owns this identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/project_scoped_identity#project_id ProjectScopedIdentity#project_id}
  */
  readonly projectId: string;
  /**
  * The roles assigned to the project-scoped identity. At least one permanent (non-temporary) role is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/project_scoped_identity#roles ProjectScopedIdentity#roles}
  */
  readonly roles: ProjectScopedIdentityRoles[] | cdktf.IResolvable;
}
export interface ProjectScopedIdentityMetadata {
  /**
  * The key of the metadata entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/project_scoped_identity#key ProjectScopedIdentity#key}
  */
  readonly key: string;
  /**
  * The value of the metadata entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/project_scoped_identity#value ProjectScopedIdentity#value}
  */
  readonly value: string;
}

export function projectScopedIdentityMetadataToTerraform(struct?: ProjectScopedIdentityMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function projectScopedIdentityMetadataToHclTerraform(struct?: ProjectScopedIdentityMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectScopedIdentityMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectScopedIdentityMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectScopedIdentityMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProjectScopedIdentityMetadataList extends cdktf.ComplexList {
  public internalValue? : ProjectScopedIdentityMetadata[] | cdktf.IResolvable

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
  public get(index: number): ProjectScopedIdentityMetadataOutputReference {
    return new ProjectScopedIdentityMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectScopedIdentityRoles {
  /**
  * Flag to indicate the assigned role is temporary or not. When is_temporary is true fields temporary_mode, temporary_range and temporary_access_start_time is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/project_scoped_identity#is_temporary ProjectScopedIdentity#is_temporary}
  */
  readonly isTemporary?: boolean | cdktf.IResolvable;
  /**
  * The slug of the role. To assign a custom role, set this to the custom role's slug.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/project_scoped_identity#role_slug ProjectScopedIdentity#role_slug}
  */
  readonly roleSlug: string;
  /**
  * ISO time for which temporary access will end. Computed based on temporary_range and temporary_access_start_time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/project_scoped_identity#temporary_access_end_time ProjectScopedIdentity#temporary_access_end_time}
  */
  readonly temporaryAccessEndTime?: string;
  /**
  * ISO time for which temporary access should begin. The current time is used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/project_scoped_identity#temporary_access_start_time ProjectScopedIdentity#temporary_access_start_time}
  */
  readonly temporaryAccessStartTime?: string;
  /**
  * Type of temporary access given. Types: relative. Default: relative
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/project_scoped_identity#temporary_mode ProjectScopedIdentity#temporary_mode}
  */
  readonly temporaryMode?: string;
  /**
  * TTL for the temporary time. Eg: 1m, 1h, 1d. Default: 1h
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/project_scoped_identity#temporary_range ProjectScopedIdentity#temporary_range}
  */
  readonly temporaryRange?: string;
}

export function projectScopedIdentityRolesToTerraform(struct?: ProjectScopedIdentityRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_temporary: cdktf.booleanToTerraform(struct!.isTemporary),
    role_slug: cdktf.stringToTerraform(struct!.roleSlug),
    temporary_access_end_time: cdktf.stringToTerraform(struct!.temporaryAccessEndTime),
    temporary_access_start_time: cdktf.stringToTerraform(struct!.temporaryAccessStartTime),
    temporary_mode: cdktf.stringToTerraform(struct!.temporaryMode),
    temporary_range: cdktf.stringToTerraform(struct!.temporaryRange),
  }
}


export function projectScopedIdentityRolesToHclTerraform(struct?: ProjectScopedIdentityRoles | cdktf.IResolvable): any {
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
    temporary_access_end_time: {
      value: cdktf.stringToHclTerraform(struct!.temporaryAccessEndTime),
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
    temporary_mode: {
      value: cdktf.stringToHclTerraform(struct!.temporaryMode),
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

export class ProjectScopedIdentityRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectScopedIdentityRoles | cdktf.IResolvable | undefined {
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
    if (this._temporaryAccessEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporaryAccessEndTime = this._temporaryAccessEndTime;
    }
    if (this._temporaryAccessStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporaryAccessStartTime = this._temporaryAccessStartTime;
    }
    if (this._temporaryMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporaryMode = this._temporaryMode;
    }
    if (this._temporaryRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporaryRange = this._temporaryRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectScopedIdentityRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isTemporary = undefined;
      this._roleSlug = undefined;
      this._temporaryAccessEndTime = undefined;
      this._temporaryAccessStartTime = undefined;
      this._temporaryMode = undefined;
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
      this._temporaryAccessEndTime = value.temporaryAccessEndTime;
      this._temporaryAccessStartTime = value.temporaryAccessStartTime;
      this._temporaryMode = value.temporaryMode;
      this._temporaryRange = value.temporaryRange;
    }
  }

  // custom_role_id - computed: true, optional: false, required: false
  public get customRoleId() {
    return this.getStringAttribute('custom_role_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // temporary_access_end_time - computed: true, optional: true, required: false
  private _temporaryAccessEndTime?: string; 
  public get temporaryAccessEndTime() {
    return this.getStringAttribute('temporary_access_end_time');
  }
  public set temporaryAccessEndTime(value: string) {
    this._temporaryAccessEndTime = value;
  }
  public resetTemporaryAccessEndTime() {
    this._temporaryAccessEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryAccessEndTimeInput() {
    return this._temporaryAccessEndTime;
  }

  // temporary_access_start_time - computed: true, optional: true, required: false
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

  // temporary_mode - computed: true, optional: true, required: false
  private _temporaryMode?: string; 
  public get temporaryMode() {
    return this.getStringAttribute('temporary_mode');
  }
  public set temporaryMode(value: string) {
    this._temporaryMode = value;
  }
  public resetTemporaryMode() {
    this._temporaryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryModeInput() {
    return this._temporaryMode;
  }

  // temporary_range - computed: true, optional: true, required: false
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

export class ProjectScopedIdentityRolesList extends cdktf.ComplexList {
  public internalValue? : ProjectScopedIdentityRoles[] | cdktf.IResolvable

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
  public get(index: number): ProjectScopedIdentityRolesOutputReference {
    return new ProjectScopedIdentityRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/project_scoped_identity infisical_project_scoped_identity}
*/
export class ProjectScopedIdentity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_project_scoped_identity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectScopedIdentity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectScopedIdentity to import
  * @param importFromId The id of the existing ProjectScopedIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/project_scoped_identity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectScopedIdentity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_project_scoped_identity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.19.26/docs/resources/project_scoped_identity infisical_project_scoped_identity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectScopedIdentityConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectScopedIdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_project_scoped_identity',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.19.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hasDeleteProtection = config.hasDeleteProtection;
    this._metadata.internalValue = config.metadata;
    this._name = config.name;
    this._projectId = config.projectId;
    this._roles.internalValue = config.roles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_methods - computed: true, optional: false, required: false
  public get authMethods() {
    return this.getListAttribute('auth_methods');
  }

  // has_delete_protection - computed: true, optional: true, required: false
  private _hasDeleteProtection?: boolean | cdktf.IResolvable; 
  public get hasDeleteProtection() {
    return this.getBooleanAttribute('has_delete_protection');
  }
  public set hasDeleteProtection(value: boolean | cdktf.IResolvable) {
    this._hasDeleteProtection = value;
  }
  public resetHasDeleteProtection() {
    this._hasDeleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasDeleteProtectionInput() {
    return this._hasDeleteProtection;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new ProjectScopedIdentityMetadataList(this, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ProjectScopedIdentityMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
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
  private _roles = new ProjectScopedIdentityRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: ProjectScopedIdentityRoles[] | cdktf.IResolvable) {
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
      has_delete_protection: cdktf.booleanToTerraform(this._hasDeleteProtection),
      metadata: cdktf.listMapper(projectScopedIdentityMetadataToTerraform, false)(this._metadata.internalValue),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      roles: cdktf.listMapper(projectScopedIdentityRolesToTerraform, false)(this._roles.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      has_delete_protection: {
        value: cdktf.booleanToHclTerraform(this._hasDeleteProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metadata: {
        value: cdktf.listMapperHcl(projectScopedIdentityMetadataToHclTerraform, false)(this._metadata.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectScopedIdentityMetadataList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
        value: cdktf.listMapperHcl(projectScopedIdentityRolesToHclTerraform, false)(this._roles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectScopedIdentityRolesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
