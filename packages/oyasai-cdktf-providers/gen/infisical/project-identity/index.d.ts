import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ProjectIdentityConfig extends cdktf.TerraformMetaArguments {
    /**
    * The id of the identity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity#identity_id ProjectIdentity#identity_id}
    */
    readonly identityId: string;
    /**
    * The id of the project
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity#project_id ProjectIdentity#project_id}
    */
    readonly projectId: string;
    /**
    * The roles assigned to the project identity
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity#roles ProjectIdentity#roles}
    */
    readonly roles: ProjectIdentityRoles[] | cdktf.IResolvable;
}
export interface ProjectIdentityIdentity {
}
export declare function projectIdentityIdentityToTerraform(struct?: ProjectIdentityIdentity): any;
export declare function projectIdentityIdentityToHclTerraform(struct?: ProjectIdentityIdentity): any;
export declare class ProjectIdentityIdentityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ProjectIdentityIdentity | undefined;
    set internalValue(value: ProjectIdentityIdentity | undefined);
    get authMethods(): any;
    get id(): any;
    get name(): any;
}
export interface ProjectIdentityRoles {
    /**
    * The id of the custom role slug
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity#custom_role_id ProjectIdentity#custom_role_id}
    */
    readonly customRoleId?: string;
    /**
    * Flag to indicate the assigned role is temporary or not. When is_temporary is true fields temporary_mode, temporary_range and temporary_access_start_time is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity#is_temporary ProjectIdentity#is_temporary}
    */
    readonly isTemporary?: boolean | cdktf.IResolvable;
    /**
    * The slug of the role
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity#role_slug ProjectIdentity#role_slug}
    */
    readonly roleSlug: string;
    /**
    * ISO time for which temporary access will end. Computed based on temporary_range and temporary_access_start_time
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity#temporary_access_end_time ProjectIdentity#temporary_access_end_time}
    */
    readonly temporaryAccessEndTime?: string;
    /**
    * ISO time for which temporary access should begin. The current time is used by default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity#temporary_access_start_time ProjectIdentity#temporary_access_start_time}
    */
    readonly temporaryAccessStartTime?: string;
    /**
    * Type of temporary access given. Types: relative. Default: relative
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity#temporary_mode ProjectIdentity#temporary_mode}
    */
    readonly temporaryMode?: string;
    /**
    * TTL for the temporary time. Eg: 1m, 1h, 1d. Default: 1h
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity#temporary_range ProjectIdentity#temporary_range}
    */
    readonly temporaryRange?: string;
}
export declare function projectIdentityRolesToTerraform(struct?: ProjectIdentityRoles | cdktf.IResolvable): any;
export declare function projectIdentityRolesToHclTerraform(struct?: ProjectIdentityRoles | cdktf.IResolvable): any;
export declare class ProjectIdentityRolesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ProjectIdentityRoles | cdktf.IResolvable | undefined;
    set internalValue(value: ProjectIdentityRoles | cdktf.IResolvable | undefined);
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
export declare class ProjectIdentityRolesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ProjectIdentityRoles[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ProjectIdentityRolesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity infisical_project_identity}
*/
export declare class ProjectIdentity extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_project_identity";
    /**
    * Generates CDKTF code for importing a ProjectIdentity resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ProjectIdentity to import
    * @param importFromId The id of the existing ProjectIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ProjectIdentity to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity infisical_project_identity} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProjectIdentityConfig
    */
    constructor(scope: Construct, id: string, config: ProjectIdentityConfig);
    private _identity;
    get identity(): ProjectIdentityIdentityOutputReference;
    private _identityId?;
    get identityId(): string;
    set identityId(value: string);
    get identityIdInput(): string;
    get membershipId(): any;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
    private _roles;
    get roles(): ProjectIdentityRolesList;
    putRoles(value: ProjectIdentityRoles[] | cdktf.IResolvable): void;
    get rolesInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
