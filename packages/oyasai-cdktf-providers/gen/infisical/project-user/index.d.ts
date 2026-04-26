import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ProjectUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * The id of the project
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_user#project_id ProjectUser#project_id}
    */
    readonly projectId: string;
    /**
    * The roles assigned to the project user
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_user#roles ProjectUser#roles}
    */
    readonly roles: ProjectUserRoles[] | cdktf.IResolvable;
    /**
    * The usename of the user. By default its the email
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_user#username ProjectUser#username}
    */
    readonly username: string;
}
export interface ProjectUserRoles {
    /**
    * The id of the custom role slug
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_user#custom_role_id ProjectUser#custom_role_id}
    */
    readonly customRoleId?: string;
    /**
    * Flag to indicate the assigned role is temporary or not. When is_temporary is true fields temporary_mode, temporary_range and temporary_access_start_time is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_user#is_temporary ProjectUser#is_temporary}
    */
    readonly isTemporary?: boolean | cdktf.IResolvable;
    /**
    * The slug of the role
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_user#role_slug ProjectUser#role_slug}
    */
    readonly roleSlug: string;
    /**
    * ISO time for which temporary access will end. Computed based on temporary_range and temporary_access_start_time
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_user#temporary_access_end_time ProjectUser#temporary_access_end_time}
    */
    readonly temporaryAccessEndTime?: string;
    /**
    * ISO time for which temporary access should begin. The current time is used by default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_user#temporary_access_start_time ProjectUser#temporary_access_start_time}
    */
    readonly temporaryAccessStartTime?: string;
    /**
    * Type of temporary access given. Types: relative. Default: relative
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_user#temporary_mode ProjectUser#temporary_mode}
    */
    readonly temporaryMode?: string;
    /**
    * TTL for the temporary time. Eg: 1m, 1h, 1d. Default: 1h
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_user#temporary_range ProjectUser#temporary_range}
    */
    readonly temporaryRange?: string;
}
export declare function projectUserRolesToTerraform(struct?: ProjectUserRoles | cdktf.IResolvable): any;
export declare function projectUserRolesToHclTerraform(struct?: ProjectUserRoles | cdktf.IResolvable): any;
export declare class ProjectUserRolesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ProjectUserRoles | cdktf.IResolvable | undefined;
    set internalValue(value: ProjectUserRoles | cdktf.IResolvable | undefined);
    private _customRoleId?;
    get customRoleId(): string;
    set customRoleId(value: string);
    resetCustomRoleId(): void;
    get customRoleIdInput(): string;
    get id(): any;
    private _isTemporary?;
    get isTemporary(): boolean | cdktf.IResolvable;
    set isTemporary(value: boolean | cdktf.IResolvable);
    resetIsTemporary(): void;
    get isTemporaryInput(): any;
    private _roleSlug?;
    get roleSlug(): string;
    set roleSlug(value: string);
    get roleSlugInput(): string;
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
}
export declare class ProjectUserRolesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ProjectUserRoles[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ProjectUserRolesOutputReference;
}
export interface ProjectUserUser {
}
export declare function projectUserUserToTerraform(struct?: ProjectUserUser): any;
export declare function projectUserUserToHclTerraform(struct?: ProjectUserUser): any;
export declare class ProjectUserUserOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ProjectUserUser | undefined;
    set internalValue(value: ProjectUserUser | undefined);
    get email(): any;
    get firstName(): any;
    get id(): any;
    get lastName(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_user infisical_project_user}
*/
export declare class ProjectUser extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_project_user";
    /**
    * Generates CDKTF code for importing a ProjectUser resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ProjectUser to import
    * @param importFromId The id of the existing ProjectUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ProjectUser to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_user infisical_project_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProjectUserConfig
    */
    constructor(scope: Construct, id: string, config: ProjectUserConfig);
    get membershipId(): any;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
    private _roles;
    get roles(): ProjectUserRolesList;
    putRoles(value: ProjectUserRoles[] | cdktf.IResolvable): void;
    get rolesInput(): any;
    private _user;
    get user(): ProjectUserUserOutputReference;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
