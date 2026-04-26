import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface UserGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group#account_id UserGroup#account_id}
    */
    readonly accountId: string;
    /**
    * Name of the User group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group#name UserGroup#name}
    */
    readonly name: string;
    /**
    * Policies attached to the User group
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group#policies UserGroup#policies}
    */
    readonly policies?: UserGroupPolicies[] | cdktf.IResolvable;
}
export interface UserGroupPoliciesPermissionGroups {
    /**
    * Permission Group identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group#id UserGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function userGroupPoliciesPermissionGroupsToTerraform(struct?: UserGroupPoliciesPermissionGroups | cdktf.IResolvable): any;
export declare function userGroupPoliciesPermissionGroupsToHclTerraform(struct?: UserGroupPoliciesPermissionGroups | cdktf.IResolvable): any;
export declare class UserGroupPoliciesPermissionGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): UserGroupPoliciesPermissionGroups | cdktf.IResolvable | undefined;
    set internalValue(value: UserGroupPoliciesPermissionGroups | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export declare class UserGroupPoliciesPermissionGroupsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: UserGroupPoliciesPermissionGroups[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): UserGroupPoliciesPermissionGroupsOutputReference;
}
export interface UserGroupPoliciesResourceGroups {
    /**
    * Resource Group identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group#id UserGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function userGroupPoliciesResourceGroupsToTerraform(struct?: UserGroupPoliciesResourceGroups | cdktf.IResolvable): any;
export declare function userGroupPoliciesResourceGroupsToHclTerraform(struct?: UserGroupPoliciesResourceGroups | cdktf.IResolvable): any;
export declare class UserGroupPoliciesResourceGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): UserGroupPoliciesResourceGroups | cdktf.IResolvable | undefined;
    set internalValue(value: UserGroupPoliciesResourceGroups | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export declare class UserGroupPoliciesResourceGroupsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: UserGroupPoliciesResourceGroups[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): UserGroupPoliciesResourceGroupsOutputReference;
}
export interface UserGroupPolicies {
    /**
    * Allow or deny operations against the resources.
    * Available values: "allow", "deny".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group#access UserGroup#access}
    */
    readonly access: string;
    /**
    * A set of permission groups that are specified to the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group#permission_groups UserGroup#permission_groups}
    */
    readonly permissionGroups: UserGroupPoliciesPermissionGroups[] | cdktf.IResolvable;
    /**
    * A set of resource groups that are specified to the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group#resource_groups UserGroup#resource_groups}
    */
    readonly resourceGroups: UserGroupPoliciesResourceGroups[] | cdktf.IResolvable;
}
export declare function userGroupPoliciesToTerraform(struct?: UserGroupPolicies | cdktf.IResolvable): any;
export declare function userGroupPoliciesToHclTerraform(struct?: UserGroupPolicies | cdktf.IResolvable): any;
export declare class UserGroupPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): UserGroupPolicies | cdktf.IResolvable | undefined;
    set internalValue(value: UserGroupPolicies | cdktf.IResolvable | undefined);
    private _access?;
    get access(): string;
    set access(value: string);
    get accessInput(): string;
    private _permissionGroups;
    get permissionGroups(): UserGroupPoliciesPermissionGroupsList;
    putPermissionGroups(value: UserGroupPoliciesPermissionGroups[] | cdktf.IResolvable): void;
    get permissionGroupsInput(): any;
    private _resourceGroups;
    get resourceGroups(): UserGroupPoliciesResourceGroupsList;
    putResourceGroups(value: UserGroupPoliciesResourceGroups[] | cdktf.IResolvable): void;
    get resourceGroupsInput(): any;
}
export declare class UserGroupPoliciesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: UserGroupPolicies[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): UserGroupPoliciesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group cloudflare_user_group}
*/
export declare class UserGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_user_group";
    /**
    * Generates CDKTF code for importing a UserGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the UserGroup to import
    * @param importFromId The id of the existing UserGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the UserGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group cloudflare_user_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options UserGroupConfig
    */
    constructor(scope: Construct, id: string, config: UserGroupConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    get createdOn(): any;
    get id(): any;
    get modifiedOn(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _policies;
    get policies(): UserGroupPoliciesList;
    putPolicies(value: UserGroupPolicies[] | cdktf.IResolvable): void;
    resetPolicies(): void;
    get policiesInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
