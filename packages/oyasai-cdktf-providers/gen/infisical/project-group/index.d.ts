import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ProjectGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * The id of the group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_group#group_id ProjectGroup#group_id}
    */
    readonly groupId?: string;
    /**
    * The name of the group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_group#group_name ProjectGroup#group_name}
    */
    readonly groupName?: string;
    /**
    * The id of the project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_group#project_id ProjectGroup#project_id}
    */
    readonly projectId: string;
    /**
    * The roles assigned to the project group
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_group#roles ProjectGroup#roles}
    */
    readonly roles: ProjectGroupRoles[] | cdktf.IResolvable;
}
export interface ProjectGroupRoles {
    /**
    * Flag to indicate the assigned role is temporary or not. When is_temporary is true fields temporary_mode, temporary_range and temporary_access_start_time is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_group#is_temporary ProjectGroup#is_temporary}
    */
    readonly isTemporary?: boolean | cdktf.IResolvable;
    /**
    * The slug of the role
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_group#role_slug ProjectGroup#role_slug}
    */
    readonly roleSlug: string;
    /**
    * ISO time for which temporary access should begin. This is in the format YYYY-MM-DDTHH:MM:SSZ e.g. 2024-09-19T12:43:13Z
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_group#temporary_access_start_time ProjectGroup#temporary_access_start_time}
    */
    readonly temporaryAccessStartTime?: string;
    /**
    * TTL for the temporary time. Eg: 1m, 1h, 1d. Default: 1h
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_group#temporary_range ProjectGroup#temporary_range}
    */
    readonly temporaryRange?: string;
}
export declare function projectGroupRolesToTerraform(struct?: ProjectGroupRoles | cdktf.IResolvable): any;
export declare function projectGroupRolesToHclTerraform(struct?: ProjectGroupRoles | cdktf.IResolvable): any;
export declare class ProjectGroupRolesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ProjectGroupRoles | cdktf.IResolvable | undefined;
    set internalValue(value: ProjectGroupRoles | cdktf.IResolvable | undefined);
    private _isTemporary?;
    get isTemporary(): boolean | cdktf.IResolvable;
    set isTemporary(value: boolean | cdktf.IResolvable);
    resetIsTemporary(): void;
    get isTemporaryInput(): any;
    private _roleSlug?;
    get roleSlug(): string;
    set roleSlug(value: string);
    get roleSlugInput(): string;
    private _temporaryAccessStartTime?;
    get temporaryAccessStartTime(): string;
    set temporaryAccessStartTime(value: string);
    resetTemporaryAccessStartTime(): void;
    get temporaryAccessStartTimeInput(): string;
    private _temporaryRange?;
    get temporaryRange(): string;
    set temporaryRange(value: string);
    resetTemporaryRange(): void;
    get temporaryRangeInput(): string;
}
export declare class ProjectGroupRolesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ProjectGroupRoles[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ProjectGroupRolesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_group infisical_project_group}
*/
export declare class ProjectGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_project_group";
    /**
    * Generates CDKTF code for importing a ProjectGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ProjectGroup to import
    * @param importFromId The id of the existing ProjectGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ProjectGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_group infisical_project_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProjectGroupConfig
    */
    constructor(scope: Construct, id: string, config: ProjectGroupConfig);
    private _groupId?;
    get groupId(): string;
    set groupId(value: string);
    resetGroupId(): void;
    get groupIdInput(): string;
    private _groupName?;
    get groupName(): string;
    set groupName(value: string);
    resetGroupName(): void;
    get groupNameInput(): string;
    get membershipId(): any;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
    private _roles;
    get roles(): ProjectGroupRolesList;
    putRoles(value: ProjectGroupRoles[] | cdktf.IResolvable): void;
    get rolesInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
