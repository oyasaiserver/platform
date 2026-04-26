import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ProjectIdentitySpecificPrivilegeConfig extends cdktf.TerraformMetaArguments {
    /**
    * The identity id to create identity specific privilege
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege#identity_id ProjectIdentitySpecificPrivilege#identity_id}
    */
    readonly identityId: string;
    /**
    * Flag to indicate the assigned specific privilege is temporary or not. When is_temporary is true fields temporary_mode, temporary_range and temporary_access_start_time is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege#is_temporary ProjectIdentitySpecificPrivilege#is_temporary}
    */
    readonly isTemporary?: boolean | cdktf.IResolvable;
    /**
    * (DEPRECATED, USE permissions_v2. Refer to the migration guide in https://infisical.com/docs/internals/permissions#migrating-from-permission-v1-to-permission-v2) The permissions assigned to the project identity specific privilege
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege#permission ProjectIdentitySpecificPrivilege#permission}
    */
    readonly permission?: ProjectIdentitySpecificPrivilegePermission;
    /**
    * The permissions assigned to the project identity specific privilege. Refer to the documentation here https://infisical.com/docs/internals/permissions for its usage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege#permissions_v2 ProjectIdentitySpecificPrivilege#permissions_v2}
    */
    readonly permissionsV2?: ProjectIdentitySpecificPrivilegePermissionsV2[] | cdktf.IResolvable;
    /**
    * The slug of the project to create identity specific privilege
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege#project_slug ProjectIdentitySpecificPrivilege#project_slug}
    */
    readonly projectSlug: string;
    /**
    * The slug for the new privilege
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege#slug ProjectIdentitySpecificPrivilege#slug}
    */
    readonly slug?: string;
    /**
    * ISO time for which temporary access will end. Computed based on temporary_range and temporary_access_start_time
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege#temporary_access_end_time ProjectIdentitySpecificPrivilege#temporary_access_end_time}
    */
    readonly temporaryAccessEndTime?: string;
    /**
    * ISO time for which temporary access should begin. The current time is used by default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege#temporary_access_start_time ProjectIdentitySpecificPrivilege#temporary_access_start_time}
    */
    readonly temporaryAccessStartTime?: string;
    /**
    * Type of temporary access given. Types: relative. Default: relative
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege#temporary_mode ProjectIdentitySpecificPrivilege#temporary_mode}
    */
    readonly temporaryMode?: string;
    /**
    * TTL for the temporary time. Eg: 1m, 1h, 1d. Default: 1h
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege#temporary_range ProjectIdentitySpecificPrivilege#temporary_range}
    */
    readonly temporaryRange?: string;
}
export interface ProjectIdentitySpecificPrivilegePermissionConditions {
    /**
    * The environment slug this permission should allow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege#environment ProjectIdentitySpecificPrivilege#environment}
    */
    readonly environment: string;
    /**
    * The secret path this permission should be scoped to
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege#secret_path ProjectIdentitySpecificPrivilege#secret_path}
    */
    readonly secretPath?: string;
}
export declare function projectIdentitySpecificPrivilegePermissionConditionsToTerraform(struct?: ProjectIdentitySpecificPrivilegePermissionConditions | cdktf.IResolvable): any;
export declare function projectIdentitySpecificPrivilegePermissionConditionsToHclTerraform(struct?: ProjectIdentitySpecificPrivilegePermissionConditions | cdktf.IResolvable): any;
export declare class ProjectIdentitySpecificPrivilegePermissionConditionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ProjectIdentitySpecificPrivilegePermissionConditions | cdktf.IResolvable | undefined;
    set internalValue(value: ProjectIdentitySpecificPrivilegePermissionConditions | cdktf.IResolvable | undefined);
    private _environment?;
    get environment(): string;
    set environment(value: string);
    get environmentInput(): string;
    private _secretPath?;
    get secretPath(): string;
    set secretPath(value: string);
    resetSecretPath(): void;
    get secretPathInput(): string;
}
export interface ProjectIdentitySpecificPrivilegePermission {
    /**
    * Describe what action an entity can take. Enum: create,edit,delete,read
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege#actions ProjectIdentitySpecificPrivilege#actions}
    */
    readonly actions: string[];
    /**
    * The conditions to scope permissions
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege#conditions ProjectIdentitySpecificPrivilege#conditions}
    */
    readonly conditions: ProjectIdentitySpecificPrivilegePermissionConditions;
    /**
    * Describe what action an entity can take. Enum: role,member,groups,settings,integrations,webhooks,service-tokens,environments,tags,audit-logs,ip-allowlist,workspace,secrets,secret-rollback,secret-approval,secret-rotation,identity,certificate-authorities,certificates,certificate-policies,kms,pki-alerts,pki-collections
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege#subject ProjectIdentitySpecificPrivilege#subject}
    */
    readonly subject: string;
}
export declare function projectIdentitySpecificPrivilegePermissionToTerraform(struct?: ProjectIdentitySpecificPrivilegePermission | cdktf.IResolvable): any;
export declare function projectIdentitySpecificPrivilegePermissionToHclTerraform(struct?: ProjectIdentitySpecificPrivilegePermission | cdktf.IResolvable): any;
export declare class ProjectIdentitySpecificPrivilegePermissionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ProjectIdentitySpecificPrivilegePermission | cdktf.IResolvable | undefined;
    set internalValue(value: ProjectIdentitySpecificPrivilegePermission | cdktf.IResolvable | undefined);
    private _actions?;
    get actions(): string[];
    set actions(value: string[]);
    get actionsInput(): string[];
    private _conditions;
    get conditions(): ProjectIdentitySpecificPrivilegePermissionConditionsOutputReference;
    putConditions(value: ProjectIdentitySpecificPrivilegePermissionConditions): void;
    get conditionsInput(): any;
    private _subject?;
    get subject(): string;
    set subject(value: string);
    get subjectInput(): string;
}
export interface ProjectIdentitySpecificPrivilegePermissionsV2 {
    /**
    * Describe what actions an entity can take.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege#action ProjectIdentitySpecificPrivilege#action}
    */
    readonly action: string[];
    /**
    * When specified, only matching conditions will be allowed to access given resource. Refer to the documentation in https://infisical.com/docs/internals/permissions#conditions for the complete list of supported properties and operators.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege#conditions ProjectIdentitySpecificPrivilege#conditions}
    */
    readonly conditions?: string;
    /**
    * Whether rule forbids. Set this to true if permission forbids.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege#inverted ProjectIdentitySpecificPrivilege#inverted}
    */
    readonly inverted?: boolean | cdktf.IResolvable;
    /**
    * Describe the entity the permission pertains to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege#subject ProjectIdentitySpecificPrivilege#subject}
    */
    readonly subject: string;
}
export declare function projectIdentitySpecificPrivilegePermissionsV2ToTerraform(struct?: ProjectIdentitySpecificPrivilegePermissionsV2 | cdktf.IResolvable): any;
export declare function projectIdentitySpecificPrivilegePermissionsV2ToHclTerraform(struct?: ProjectIdentitySpecificPrivilegePermissionsV2 | cdktf.IResolvable): any;
export declare class ProjectIdentitySpecificPrivilegePermissionsV2OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ProjectIdentitySpecificPrivilegePermissionsV2 | cdktf.IResolvable | undefined;
    set internalValue(value: ProjectIdentitySpecificPrivilegePermissionsV2 | cdktf.IResolvable | undefined);
    private _action?;
    get action(): string[];
    set action(value: string[]);
    get actionInput(): string[];
    private _conditions?;
    get conditions(): string;
    set conditions(value: string);
    resetConditions(): void;
    get conditionsInput(): string;
    private _inverted?;
    get inverted(): boolean | cdktf.IResolvable;
    set inverted(value: boolean | cdktf.IResolvable);
    resetInverted(): void;
    get invertedInput(): any;
    private _subject?;
    get subject(): string;
    set subject(value: string);
    get subjectInput(): string;
}
export declare class ProjectIdentitySpecificPrivilegePermissionsV2List extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ProjectIdentitySpecificPrivilegePermissionsV2[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ProjectIdentitySpecificPrivilegePermissionsV2OutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege infisical_project_identity_specific_privilege}
*/
export declare class ProjectIdentitySpecificPrivilege extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_project_identity_specific_privilege";
    /**
    * Generates CDKTF code for importing a ProjectIdentitySpecificPrivilege resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ProjectIdentitySpecificPrivilege to import
    * @param importFromId The id of the existing ProjectIdentitySpecificPrivilege that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ProjectIdentitySpecificPrivilege to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege infisical_project_identity_specific_privilege} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProjectIdentitySpecificPrivilegeConfig
    */
    constructor(scope: Construct, id: string, config: ProjectIdentitySpecificPrivilegeConfig);
    get id(): any;
    private _identityId?;
    get identityId(): string;
    set identityId(value: string);
    get identityIdInput(): string;
    private _isTemporary?;
    get isTemporary(): boolean | cdktf.IResolvable;
    set isTemporary(value: boolean | cdktf.IResolvable);
    resetIsTemporary(): void;
    get isTemporaryInput(): any;
    private _permission;
    get permission(): ProjectIdentitySpecificPrivilegePermissionOutputReference;
    putPermission(value: ProjectIdentitySpecificPrivilegePermission): void;
    resetPermission(): void;
    get permissionInput(): any;
    private _permissionsV2;
    get permissionsV2(): ProjectIdentitySpecificPrivilegePermissionsV2List;
    putPermissionsV2(value: ProjectIdentitySpecificPrivilegePermissionsV2[] | cdktf.IResolvable): void;
    resetPermissionsV2(): void;
    get permissionsV2Input(): any;
    private _projectSlug?;
    get projectSlug(): string;
    set projectSlug(value: string);
    get projectSlugInput(): string;
    private _slug?;
    get slug(): string;
    set slug(value: string);
    resetSlug(): void;
    get slugInput(): string;
    private _temporaryAccessEndTime?;
    get temporaryAccessEndTime(): string;
    set temporaryAccessEndTime(value: string);
    resetTemporaryAccessEndTime(): void;
    get temporaryAccessEndTimeInput(): string;
    private _temporaryAccessStartTime?;
    get temporaryAccessStartTime(): string;
    set temporaryAccessStartTime(value: string);
    resetTemporaryAccessStartTime(): void;
    get temporaryAccessStartTimeInput(): string;
    private _temporaryMode?;
    get temporaryMode(): string;
    set temporaryMode(value: string);
    resetTemporaryMode(): void;
    get temporaryModeInput(): string;
    private _temporaryRange?;
    get temporaryRange(): string;
    set temporaryRange(value: string);
    resetTemporaryRange(): void;
    get temporaryRangeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
