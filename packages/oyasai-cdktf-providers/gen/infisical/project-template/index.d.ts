import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ProjectTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * The description of the project template
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_template#description ProjectTemplate#description}
    */
    readonly description?: string;
    /**
    * The environments for the project template
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_template#environments ProjectTemplate#environments}
    */
    readonly environments?: ProjectTemplateEnvironments[] | cdktf.IResolvable;
    /**
    * The name of the project template
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_template#name ProjectTemplate#name}
    */
    readonly name: string;
    /**
    * The roles for the project template
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_template#roles ProjectTemplate#roles}
    */
    readonly roles?: ProjectTemplateRoles[] | cdktf.IResolvable;
    /**
    * The type of the project template. Refer to the documentation here https://infisical.com/docs/api-reference/endpoints/project-templates/create#body-type for the available options
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_template#type ProjectTemplate#type}
    */
    readonly type: string;
}
export interface ProjectTemplateEnvironments {
    /**
    * The name of the environment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_template#name ProjectTemplate#name}
    */
    readonly name: string;
    /**
    * The position of the environment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_template#position ProjectTemplate#position}
    */
    readonly position: number;
    /**
    * The slug of the environment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_template#slug ProjectTemplate#slug}
    */
    readonly slug: string;
}
export declare function projectTemplateEnvironmentsToTerraform(struct?: ProjectTemplateEnvironments | cdktf.IResolvable): any;
export declare function projectTemplateEnvironmentsToHclTerraform(struct?: ProjectTemplateEnvironments | cdktf.IResolvable): any;
export declare class ProjectTemplateEnvironmentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ProjectTemplateEnvironments | cdktf.IResolvable | undefined;
    set internalValue(value: ProjectTemplateEnvironments | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _position?;
    get position(): number;
    set position(value: number);
    get positionInput(): number;
    private _slug?;
    get slug(): string;
    set slug(value: string);
    get slugInput(): string;
}
export declare class ProjectTemplateEnvironmentsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ProjectTemplateEnvironments[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ProjectTemplateEnvironmentsOutputReference;
}
export interface ProjectTemplateRolesPermissions {
    /**
    * Describe what actions an entity can take.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_template#action ProjectTemplate#action}
    */
    readonly action: string[];
    /**
    * When specified, only matching conditions will be allowed to access given resource. Refer to the documentation in https://infisical.com/docs/internals/permissions#conditions for the complete list of supported properties and operators.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_template#conditions ProjectTemplate#conditions}
    */
    readonly conditions?: string;
    /**
    * Whether rule forbids. Set this to true if permission forbids.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_template#inverted ProjectTemplate#inverted}
    */
    readonly inverted?: boolean | cdktf.IResolvable;
    /**
    * Describe the entity the permission pertains to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_template#subject ProjectTemplate#subject}
    */
    readonly subject: string;
}
export declare function projectTemplateRolesPermissionsToTerraform(struct?: ProjectTemplateRolesPermissions | cdktf.IResolvable): any;
export declare function projectTemplateRolesPermissionsToHclTerraform(struct?: ProjectTemplateRolesPermissions | cdktf.IResolvable): any;
export declare class ProjectTemplateRolesPermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ProjectTemplateRolesPermissions | cdktf.IResolvable | undefined;
    set internalValue(value: ProjectTemplateRolesPermissions | cdktf.IResolvable | undefined);
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
export declare class ProjectTemplateRolesPermissionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ProjectTemplateRolesPermissions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ProjectTemplateRolesPermissionsOutputReference;
}
export interface ProjectTemplateRoles {
    /**
    * The name of the role
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_template#name ProjectTemplate#name}
    */
    readonly name: string;
    /**
    * The permissions assigned to the role. Refer to the documentation here https://infisical.com/docs/api-reference/endpoints/project-templates/create#body-roles-permissions for its usage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_template#permissions ProjectTemplate#permissions}
    */
    readonly permissions?: ProjectTemplateRolesPermissions[] | cdktf.IResolvable;
    /**
    * The slug of the role
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_template#slug ProjectTemplate#slug}
    */
    readonly slug: string;
}
export declare function projectTemplateRolesToTerraform(struct?: ProjectTemplateRoles | cdktf.IResolvable): any;
export declare function projectTemplateRolesToHclTerraform(struct?: ProjectTemplateRoles | cdktf.IResolvable): any;
export declare class ProjectTemplateRolesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ProjectTemplateRoles | cdktf.IResolvable | undefined;
    set internalValue(value: ProjectTemplateRoles | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _permissions;
    get permissions(): ProjectTemplateRolesPermissionsList;
    putPermissions(value: ProjectTemplateRolesPermissions[] | cdktf.IResolvable): void;
    resetPermissions(): void;
    get permissionsInput(): any;
    private _slug?;
    get slug(): string;
    set slug(value: string);
    get slugInput(): string;
}
export declare class ProjectTemplateRolesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ProjectTemplateRoles[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ProjectTemplateRolesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_template infisical_project_template}
*/
export declare class ProjectTemplate extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_project_template";
    /**
    * Generates CDKTF code for importing a ProjectTemplate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ProjectTemplate to import
    * @param importFromId The id of the existing ProjectTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ProjectTemplate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_template infisical_project_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProjectTemplateConfig
    */
    constructor(scope: Construct, id: string, config: ProjectTemplateConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _environments;
    get environments(): ProjectTemplateEnvironmentsList;
    putEnvironments(value: ProjectTemplateEnvironments[] | cdktf.IResolvable): void;
    resetEnvironments(): void;
    get environmentsInput(): any;
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _roles;
    get roles(): ProjectTemplateRolesList;
    putRoles(value: ProjectTemplateRoles[] | cdktf.IResolvable): void;
    resetRoles(): void;
    get rolesInput(): any;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
