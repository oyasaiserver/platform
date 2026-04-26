import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OrgRoleConfig extends cdktf.TerraformMetaArguments {
    /**
    * The description for the new role. Defaults to an empty string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/org_role#description OrgRole#description}
    */
    readonly description?: string;
    /**
    * The name for the new role
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/org_role#name OrgRole#name}
    */
    readonly name: string;
    /**
    * The permissions assigned to the organization role. Refer to the documentation here https://infisical.com/docs/internals/permissions for its usage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/org_role#permissions OrgRole#permissions}
    */
    readonly permissions: OrgRolePermissions[] | cdktf.IResolvable;
    /**
    * The slug for the new role
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/org_role#slug OrgRole#slug}
    */
    readonly slug: string;
}
export interface OrgRolePermissions {
    /**
    * Describe what actions an entity can take.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/org_role#action OrgRole#action}
    */
    readonly action: string[];
    /**
    * When specified, only matching conditions will be allowed to access given resource. Refer to the documentation in https://infisical.com/docs/internals/permissions#conditions for the complete list of supported properties and operators.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/org_role#conditions OrgRole#conditions}
    */
    readonly conditions?: string;
    /**
    * Whether rule forbids. Set this to true if permission forbids.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/org_role#inverted OrgRole#inverted}
    */
    readonly inverted?: boolean | cdktf.IResolvable;
    /**
    * Describe the entity the permission pertains to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/org_role#subject OrgRole#subject}
    */
    readonly subject: string;
}
export declare function orgRolePermissionsToTerraform(struct?: OrgRolePermissions | cdktf.IResolvable): any;
export declare function orgRolePermissionsToHclTerraform(struct?: OrgRolePermissions | cdktf.IResolvable): any;
export declare class OrgRolePermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OrgRolePermissions | cdktf.IResolvable | undefined;
    set internalValue(value: OrgRolePermissions | cdktf.IResolvable | undefined);
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
export declare class OrgRolePermissionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OrgRolePermissions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OrgRolePermissionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/org_role infisical_org_role}
*/
export declare class OrgRole extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_org_role";
    /**
    * Generates CDKTF code for importing a OrgRole resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrgRole to import
    * @param importFromId The id of the existing OrgRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/org_role#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrgRole to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/org_role infisical_org_role} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrgRoleConfig
    */
    constructor(scope: Construct, id: string, config: OrgRoleConfig);
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
    get permissions(): OrgRolePermissionsList;
    putPermissions(value: OrgRolePermissions[] | cdktf.IResolvable): void;
    get permissionsInput(): any;
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
