import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ProjectRoleConfig extends cdktf.TerraformMetaArguments {
    /**
    * The description for the new role. Defaults to an empty string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_role#description ProjectRole#description}
    */
    readonly description?: string;
    /**
    * The name for the new role
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_role#name ProjectRole#name}
    */
    readonly name: string;
    /**
    * (DEPRECATED, USE permissions_v2. Refer to the migration guide in https://infisical.com/docs/internals/permissions#migrating-from-permission-v1-to-permission-v2) The permissions assigned to the project role
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_role#permissions ProjectRole#permissions}
    */
    readonly permissions?: ProjectRolePermissions[] | cdktf.IResolvable;
    /**
    * The permissions assigned to the project role. Refer to the documentation here https://infisical.com/docs/internals/permissions for its usage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_role#permissions_v2 ProjectRole#permissions_v2}
    */
    readonly permissionsV2?: ProjectRolePermissionsV2[] | cdktf.IResolvable;
    /**
    * The ID of the project to create role. Must provide either project_id or project_slug, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_role#project_id ProjectRole#project_id}
    */
    readonly projectId?: string;
    /**
    * The slug of the project to create role. Must provide either project_slug or project_id, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_role#project_slug ProjectRole#project_slug}
    */
    readonly projectSlug?: string;
    /**
    * The slug for the new role
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_role#slug ProjectRole#slug}
    */
    readonly slug: string;
}
export interface ProjectRolePermissionsConditions {
    /**
    * The environment slug this permission should allow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_role#environment ProjectRole#environment}
    */
    readonly environment?: string;
    /**
    * The secret path this permission should be scoped to
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_role#secret_path ProjectRole#secret_path}
    */
    readonly secretPath?: string;
}
export declare function projectRolePermissionsConditionsToTerraform(struct?: ProjectRolePermissionsConditions | cdktf.IResolvable): any;
export declare function projectRolePermissionsConditionsToHclTerraform(struct?: ProjectRolePermissionsConditions | cdktf.IResolvable): any;
export declare class ProjectRolePermissionsConditionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ProjectRolePermissionsConditions | cdktf.IResolvable | undefined;
    set internalValue(value: ProjectRolePermissionsConditions | cdktf.IResolvable | undefined);
    private _environment?;
    get environment(): string;
    set environment(value: string);
    resetEnvironment(): void;
    get environmentInput(): string;
    private _secretPath?;
    get secretPath(): string;
    set secretPath(value: string);
    resetSecretPath(): void;
    get secretPathInput(): string;
}
export interface ProjectRolePermissions {
    /**
    * Describe what action an entity can take. Enum: create,edit,delete,read
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_role#action ProjectRole#action}
    */
    readonly action: string;
    /**
    * The conditions to scope permissions
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_role#conditions ProjectRole#conditions}
    */
    readonly conditions?: ProjectRolePermissionsConditions;
    /**
    * Describe what action an entity can take. Enum: role,member,groups,settings,integrations,webhooks,service-tokens,environments,tags,audit-logs,ip-allowlist,workspace,secrets,secret-rollback,secret-approval,secret-rotation,identity,certificate-authorities,certificates,certificate-policies,kms,pki-alerts,pki-collections
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_role#subject ProjectRole#subject}
    */
    readonly subject: string;
}
export declare function projectRolePermissionsToTerraform(struct?: ProjectRolePermissions | cdktf.IResolvable): any;
export declare function projectRolePermissionsToHclTerraform(struct?: ProjectRolePermissions | cdktf.IResolvable): any;
export declare class ProjectRolePermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ProjectRolePermissions | cdktf.IResolvable | undefined;
    set internalValue(value: ProjectRolePermissions | cdktf.IResolvable | undefined);
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string;
    private _conditions;
    get conditions(): ProjectRolePermissionsConditionsOutputReference;
    putConditions(value: ProjectRolePermissionsConditions): void;
    resetConditions(): void;
    get conditionsInput(): any;
    private _subject?;
    get subject(): string;
    set subject(value: string);
    get subjectInput(): string;
}
export declare class ProjectRolePermissionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ProjectRolePermissions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ProjectRolePermissionsOutputReference;
}
export interface ProjectRolePermissionsV2 {
    /**
    * Describe what actions an entity can take.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_role#action ProjectRole#action}
    */
    readonly action: string[];
    /**
    * When specified, only matching conditions will be allowed to access given resource. Refer to the documentation in https://infisical.com/docs/internals/permissions#conditions for the complete list of supported properties and operators.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_role#conditions ProjectRole#conditions}
    */
    readonly conditions?: string;
    /**
    * Whether rule forbids. Set this to true if permission forbids.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_role#inverted ProjectRole#inverted}
    */
    readonly inverted?: boolean | cdktf.IResolvable;
    /**
    * Describe the entity the permission pertains to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_role#subject ProjectRole#subject}
    */
    readonly subject: string;
}
export declare function projectRolePermissionsV2ToTerraform(struct?: ProjectRolePermissionsV2 | cdktf.IResolvable): any;
export declare function projectRolePermissionsV2ToHclTerraform(struct?: ProjectRolePermissionsV2 | cdktf.IResolvable): any;
export declare class ProjectRolePermissionsV2OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ProjectRolePermissionsV2 | cdktf.IResolvable | undefined;
    set internalValue(value: ProjectRolePermissionsV2 | cdktf.IResolvable | undefined);
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
export declare class ProjectRolePermissionsV2List extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ProjectRolePermissionsV2[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ProjectRolePermissionsV2OutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_role infisical_project_role}
*/
export declare class ProjectRole extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_project_role";
    /**
    * Generates CDKTF code for importing a ProjectRole resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ProjectRole to import
    * @param importFromId The id of the existing ProjectRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_role#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ProjectRole to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_role infisical_project_role} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProjectRoleConfig
    */
    constructor(scope: Construct, id: string, config: ProjectRoleConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _permissions;
    get permissions(): ProjectRolePermissionsList;
    putPermissions(value: ProjectRolePermissions[] | cdktf.IResolvable): void;
    resetPermissions(): void;
    get permissionsInput(): any;
    private _permissionsV2;
    get permissionsV2(): ProjectRolePermissionsV2List;
    putPermissionsV2(value: ProjectRolePermissionsV2[] | cdktf.IResolvable): void;
    resetPermissionsV2(): void;
    get permissionsV2Input(): any;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    resetProjectId(): void;
    get projectIdInput(): string;
    private _projectSlug?;
    get projectSlug(): string;
    set projectSlug(value: string);
    resetProjectSlug(): void;
    get projectSlugInput(): string;
    private _slug?;
    get slug(): string;
    set slug(value: string);
    get slugInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
