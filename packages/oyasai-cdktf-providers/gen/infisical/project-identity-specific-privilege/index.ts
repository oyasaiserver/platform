// https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/project_identity_specific_privilege
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectIdentitySpecificPrivilegeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identity id to create identity specific privilege
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/project_identity_specific_privilege#identity_id ProjectIdentitySpecificPrivilege#identity_id}
  */
  readonly identityId: string;
  /**
  * Flag to indicate the assigned specific privilege is temporary or not. When is_temporary is true fields temporary_mode, temporary_range and temporary_access_start_time is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/project_identity_specific_privilege#is_temporary ProjectIdentitySpecificPrivilege#is_temporary}
  */
  readonly isTemporary?: boolean | cdktf.IResolvable;
  /**
  * (DEPRECATED, USE permissions_v2. Refer to the migration guide in https://infisical.com/docs/internals/permissions#migrating-from-permission-v1-to-permission-v2) The permissions assigned to the project identity specific privilege
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/project_identity_specific_privilege#permission ProjectIdentitySpecificPrivilege#permission}
  */
  readonly permission?: ProjectIdentitySpecificPrivilegePermission;
  /**
  * The permissions assigned to the project identity specific privilege. Refer to the documentation here https://infisical.com/docs/internals/permissions/project-permissions for its usage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/project_identity_specific_privilege#permissions_v2 ProjectIdentitySpecificPrivilege#permissions_v2}
  */
  readonly permissionsV2?: ProjectIdentitySpecificPrivilegePermissionsV2[] | cdktf.IResolvable;
  /**
  * The slug of the project to create identity specific privilege
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/project_identity_specific_privilege#project_slug ProjectIdentitySpecificPrivilege#project_slug}
  */
  readonly projectSlug: string;
  /**
  * The slug for the new privilege
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/project_identity_specific_privilege#slug ProjectIdentitySpecificPrivilege#slug}
  */
  readonly slug?: string;
  /**
  * ISO time for which temporary access will end. Computed based on temporary_range and temporary_access_start_time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/project_identity_specific_privilege#temporary_access_end_time ProjectIdentitySpecificPrivilege#temporary_access_end_time}
  */
  readonly temporaryAccessEndTime?: string;
  /**
  * ISO time for which temporary access should begin. The current time is used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/project_identity_specific_privilege#temporary_access_start_time ProjectIdentitySpecificPrivilege#temporary_access_start_time}
  */
  readonly temporaryAccessStartTime?: string;
  /**
  * Type of temporary access given. Types: relative. Default: relative
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/project_identity_specific_privilege#temporary_mode ProjectIdentitySpecificPrivilege#temporary_mode}
  */
  readonly temporaryMode?: string;
  /**
  * TTL for the temporary time. Eg: 1m, 1h, 1d. Default: 1h
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/project_identity_specific_privilege#temporary_range ProjectIdentitySpecificPrivilege#temporary_range}
  */
  readonly temporaryRange?: string;
}
export interface ProjectIdentitySpecificPrivilegePermissionConditions {
  /**
  * The environment slug this permission should allow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/project_identity_specific_privilege#environment ProjectIdentitySpecificPrivilege#environment}
  */
  readonly environment: string;
  /**
  * The secret path this permission should be scoped to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/project_identity_specific_privilege#secret_path ProjectIdentitySpecificPrivilege#secret_path}
  */
  readonly secretPath?: string;
}

export function projectIdentitySpecificPrivilegePermissionConditionsToTerraform(struct?: ProjectIdentitySpecificPrivilegePermissionConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment: cdktf.stringToTerraform(struct!.environment),
    secret_path: cdktf.stringToTerraform(struct!.secretPath),
  }
}


export function projectIdentitySpecificPrivilegePermissionConditionsToHclTerraform(struct?: ProjectIdentitySpecificPrivilegePermissionConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_path: {
      value: cdktf.stringToHclTerraform(struct!.secretPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectIdentitySpecificPrivilegePermissionConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectIdentitySpecificPrivilegePermissionConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._secretPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretPath = this._secretPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectIdentitySpecificPrivilegePermissionConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environment = undefined;
      this._secretPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environment = value.environment;
      this._secretPath = value.secretPath;
    }
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // secret_path - computed: false, optional: true, required: false
  private _secretPath?: string; 
  public get secretPath() {
    return this.getStringAttribute('secret_path');
  }
  public set secretPath(value: string) {
    this._secretPath = value;
  }
  public resetSecretPath() {
    this._secretPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretPathInput() {
    return this._secretPath;
  }
}
export interface ProjectIdentitySpecificPrivilegePermission {
  /**
  * Describe what action an entity can take. Enum: create,edit,delete,read
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/project_identity_specific_privilege#actions ProjectIdentitySpecificPrivilege#actions}
  */
  readonly actions: string[];
  /**
  * The conditions to scope permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/project_identity_specific_privilege#conditions ProjectIdentitySpecificPrivilege#conditions}
  */
  readonly conditions: ProjectIdentitySpecificPrivilegePermissionConditions;
  /**
  * Describe what action an entity can take. Enum: role,member,groups,settings,integrations,webhooks,service-tokens,environments,tags,audit-logs,ip-allowlist,workspace,secrets,secret-rollback,secret-approval,secret-rotation,identity,certificate-authorities,certificates,certificate-policies,kms,pki-alerts,pki-collections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/project_identity_specific_privilege#subject ProjectIdentitySpecificPrivilege#subject}
  */
  readonly subject: string;
}

export function projectIdentitySpecificPrivilegePermissionToTerraform(struct?: ProjectIdentitySpecificPrivilegePermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    conditions: projectIdentitySpecificPrivilegePermissionConditionsToTerraform(struct!.conditions),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function projectIdentitySpecificPrivilegePermissionToHclTerraform(struct?: ProjectIdentitySpecificPrivilegePermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    conditions: {
      value: projectIdentitySpecificPrivilegePermissionConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "struct",
      storageClassType: "ProjectIdentitySpecificPrivilegePermissionConditions",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectIdentitySpecificPrivilegePermissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectIdentitySpecificPrivilegePermission | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectIdentitySpecificPrivilegePermission | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._conditions.internalValue = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._conditions.internalValue = value.conditions;
      this._subject = value.subject;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new ProjectIdentitySpecificPrivilegePermissionConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: ProjectIdentitySpecificPrivilegePermissionConditions) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface ProjectIdentitySpecificPrivilegePermissionsV2 {
  /**
  * Describe what actions an entity can take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/project_identity_specific_privilege#action ProjectIdentitySpecificPrivilege#action}
  */
  readonly action: string[];
  /**
  * When specified, only matching conditions will be allowed to access given resource. Refer to the documentation in https://infisical.com/docs/internals/permissions#conditions for the complete list of supported properties and operators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/project_identity_specific_privilege#conditions ProjectIdentitySpecificPrivilege#conditions}
  */
  readonly conditions?: string;
  /**
  * Whether rule forbids. Set this to true if permission forbids.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/project_identity_specific_privilege#inverted ProjectIdentitySpecificPrivilege#inverted}
  */
  readonly inverted?: boolean | cdktf.IResolvable;
  /**
  * Describe the entity the permission pertains to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/project_identity_specific_privilege#subject ProjectIdentitySpecificPrivilege#subject}
  */
  readonly subject: string;
}

export function projectIdentitySpecificPrivilegePermissionsV2ToTerraform(struct?: ProjectIdentitySpecificPrivilegePermissionsV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.action),
    conditions: cdktf.stringToTerraform(struct!.conditions),
    inverted: cdktf.booleanToTerraform(struct!.inverted),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function projectIdentitySpecificPrivilegePermissionsV2ToHclTerraform(struct?: ProjectIdentitySpecificPrivilegePermissionsV2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.action),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    conditions: {
      value: cdktf.stringToHclTerraform(struct!.conditions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inverted: {
      value: cdktf.booleanToHclTerraform(struct!.inverted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectIdentitySpecificPrivilegePermissionsV2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectIdentitySpecificPrivilegePermissionsV2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._conditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions;
    }
    if (this._inverted !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverted = this._inverted;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectIdentitySpecificPrivilegePermissionsV2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._conditions = undefined;
      this._inverted = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._conditions = value.conditions;
      this._inverted = value.inverted;
      this._subject = value.subject;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string[]; 
  public get action() {
    return cdktf.Fn.tolist(this.getListAttribute('action'));
  }
  public set action(value: string[]) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions?: string; 
  public get conditions() {
    return this.getStringAttribute('conditions');
  }
  public set conditions(value: string) {
    this._conditions = value;
  }
  public resetConditions() {
    this._conditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions;
  }

  // inverted - computed: true, optional: true, required: false
  private _inverted?: boolean | cdktf.IResolvable; 
  public get inverted() {
    return this.getBooleanAttribute('inverted');
  }
  public set inverted(value: boolean | cdktf.IResolvable) {
    this._inverted = value;
  }
  public resetInverted() {
    this._inverted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertedInput() {
    return this._inverted;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}

export class ProjectIdentitySpecificPrivilegePermissionsV2List extends cdktf.ComplexList {
  public internalValue? : ProjectIdentitySpecificPrivilegePermissionsV2[] | cdktf.IResolvable

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
  public get(index: number): ProjectIdentitySpecificPrivilegePermissionsV2OutputReference {
    return new ProjectIdentitySpecificPrivilegePermissionsV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/project_identity_specific_privilege infisical_project_identity_specific_privilege}
*/
export class ProjectIdentitySpecificPrivilege extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_project_identity_specific_privilege";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectIdentitySpecificPrivilege resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectIdentitySpecificPrivilege to import
  * @param importFromId The id of the existing ProjectIdentitySpecificPrivilege that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/project_identity_specific_privilege#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectIdentitySpecificPrivilege to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_project_identity_specific_privilege", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.30/docs/resources/project_identity_specific_privilege infisical_project_identity_specific_privilege} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectIdentitySpecificPrivilegeConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectIdentitySpecificPrivilegeConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_project_identity_specific_privilege',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.16.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._identityId = config.identityId;
    this._isTemporary = config.isTemporary;
    this._permission.internalValue = config.permission;
    this._permissionsV2.internalValue = config.permissionsV2;
    this._projectSlug = config.projectSlug;
    this._slug = config.slug;
    this._temporaryAccessEndTime = config.temporaryAccessEndTime;
    this._temporaryAccessStartTime = config.temporaryAccessStartTime;
    this._temporaryMode = config.temporaryMode;
    this._temporaryRange = config.temporaryRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_id - computed: false, optional: false, required: true
  private _identityId?: string; 
  public get identityId() {
    return this.getStringAttribute('identity_id');
  }
  public set identityId(value: string) {
    this._identityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdInput() {
    return this._identityId;
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

  // permission - computed: false, optional: true, required: false
  private _permission = new ProjectIdentitySpecificPrivilegePermissionOutputReference(this, "permission");
  public get permission() {
    return this._permission;
  }
  public putPermission(value: ProjectIdentitySpecificPrivilegePermission) {
    this._permission.internalValue = value;
  }
  public resetPermission() {
    this._permission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission.internalValue;
  }

  // permissions_v2 - computed: false, optional: true, required: false
  private _permissionsV2 = new ProjectIdentitySpecificPrivilegePermissionsV2List(this, "permissions_v2", false);
  public get permissionsV2() {
    return this._permissionsV2;
  }
  public putPermissionsV2(value: ProjectIdentitySpecificPrivilegePermissionsV2[] | cdktf.IResolvable) {
    this._permissionsV2.internalValue = value;
  }
  public resetPermissionsV2() {
    this._permissionsV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsV2Input() {
    return this._permissionsV2.internalValue;
  }

  // project_slug - computed: false, optional: false, required: true
  private _projectSlug?: string; 
  public get projectSlug() {
    return this.getStringAttribute('project_slug');
  }
  public set projectSlug(value: string) {
    this._projectSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectSlugInput() {
    return this._projectSlug;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      identity_id: cdktf.stringToTerraform(this._identityId),
      is_temporary: cdktf.booleanToTerraform(this._isTemporary),
      permission: projectIdentitySpecificPrivilegePermissionToTerraform(this._permission.internalValue),
      permissions_v2: cdktf.listMapper(projectIdentitySpecificPrivilegePermissionsV2ToTerraform, false)(this._permissionsV2.internalValue),
      project_slug: cdktf.stringToTerraform(this._projectSlug),
      slug: cdktf.stringToTerraform(this._slug),
      temporary_access_end_time: cdktf.stringToTerraform(this._temporaryAccessEndTime),
      temporary_access_start_time: cdktf.stringToTerraform(this._temporaryAccessStartTime),
      temporary_mode: cdktf.stringToTerraform(this._temporaryMode),
      temporary_range: cdktf.stringToTerraform(this._temporaryRange),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      identity_id: {
        value: cdktf.stringToHclTerraform(this._identityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_temporary: {
        value: cdktf.booleanToHclTerraform(this._isTemporary),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      permission: {
        value: projectIdentitySpecificPrivilegePermissionToHclTerraform(this._permission.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProjectIdentitySpecificPrivilegePermission",
      },
      permissions_v2: {
        value: cdktf.listMapperHcl(projectIdentitySpecificPrivilegePermissionsV2ToHclTerraform, false)(this._permissionsV2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectIdentitySpecificPrivilegePermissionsV2List",
      },
      project_slug: {
        value: cdktf.stringToHclTerraform(this._projectSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      temporary_access_end_time: {
        value: cdktf.stringToHclTerraform(this._temporaryAccessEndTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      temporary_access_start_time: {
        value: cdktf.stringToHclTerraform(this._temporaryAccessStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      temporary_mode: {
        value: cdktf.stringToHclTerraform(this._temporaryMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      temporary_range: {
        value: cdktf.stringToHclTerraform(this._temporaryRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
