import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AccountMemberConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_member#account_id AccountMember#account_id}
    */
    readonly accountId?: string;
    /**
    * The contact email address of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_member#email AccountMember#email}
    */
    readonly email: string;
    /**
    * Array of policies associated with this member.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_member#policies AccountMember#policies}
    */
    readonly policies?: AccountMemberPolicies[] | cdktf.IResolvable;
    /**
    * Set of roles associated with this member.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_member#roles AccountMember#roles}
    */
    readonly roles?: string[];
    /**
    * Status of the member invitation. If not provided during creation, defaults to 'pending'.
    * Changing from 'accepted' back to 'pending' will trigger a replacement of the member resource in Terraform.
    * Available values: "accepted", "pending".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_member#status AccountMember#status}
    */
    readonly status?: string;
}
export interface AccountMemberPoliciesPermissionGroups {
    /**
    * Identifier of the group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_member#id AccountMember#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function accountMemberPoliciesPermissionGroupsToTerraform(struct?: AccountMemberPoliciesPermissionGroups): any;
export declare function accountMemberPoliciesPermissionGroupsToHclTerraform(struct?: AccountMemberPoliciesPermissionGroups): any;
export declare class AccountMemberPoliciesPermissionGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AccountMemberPoliciesPermissionGroups | undefined;
    set internalValue(value: AccountMemberPoliciesPermissionGroups | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export declare class AccountMemberPoliciesPermissionGroupsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AccountMemberPoliciesPermissionGroups[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AccountMemberPoliciesPermissionGroupsOutputReference;
}
export interface AccountMemberPoliciesResourceGroups {
    /**
    * Identifier of the group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_member#id AccountMember#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function accountMemberPoliciesResourceGroupsToTerraform(struct?: AccountMemberPoliciesResourceGroups): any;
export declare function accountMemberPoliciesResourceGroupsToHclTerraform(struct?: AccountMemberPoliciesResourceGroups): any;
export declare class AccountMemberPoliciesResourceGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AccountMemberPoliciesResourceGroups | undefined;
    set internalValue(value: AccountMemberPoliciesResourceGroups | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export declare class AccountMemberPoliciesResourceGroupsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AccountMemberPoliciesResourceGroups[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AccountMemberPoliciesResourceGroupsOutputReference;
}
export interface AccountMemberPolicies {
    /**
    * Allow or deny operations against the resources.
    * Available values: "allow", "deny".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_member#access AccountMember#access}
    */
    readonly access: string;
    /**
    * A set of permission groups that are specified to the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_member#permission_groups AccountMember#permission_groups}
    */
    readonly permissionGroups: AccountMemberPoliciesPermissionGroups[] | cdktf.IResolvable;
    /**
    * A list of resource groups that the policy applies to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_member#resource_groups AccountMember#resource_groups}
    */
    readonly resourceGroups: AccountMemberPoliciesResourceGroups[] | cdktf.IResolvable;
}
export declare function accountMemberPoliciesToTerraform(struct?: AccountMemberPolicies | cdktf.IResolvable): any;
export declare function accountMemberPoliciesToHclTerraform(struct?: AccountMemberPolicies | cdktf.IResolvable): any;
export declare class AccountMemberPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AccountMemberPolicies | cdktf.IResolvable | undefined;
    set internalValue(value: AccountMemberPolicies | cdktf.IResolvable | undefined);
    private _access?;
    get access(): string;
    set access(value: string);
    get accessInput(): string;
    private _permissionGroups;
    get permissionGroups(): AccountMemberPoliciesPermissionGroupsList;
    putPermissionGroups(value: AccountMemberPoliciesPermissionGroups[] | cdktf.IResolvable): void;
    get permissionGroupsInput(): any;
    private _resourceGroups;
    get resourceGroups(): AccountMemberPoliciesResourceGroupsList;
    putResourceGroups(value: AccountMemberPoliciesResourceGroups[] | cdktf.IResolvable): void;
    get resourceGroupsInput(): any;
}
export declare class AccountMemberPoliciesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AccountMemberPolicies[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AccountMemberPoliciesOutputReference;
}
export interface AccountMemberUser {
}
export declare function accountMemberUserToTerraform(struct?: AccountMemberUser): any;
export declare function accountMemberUserToHclTerraform(struct?: AccountMemberUser): any;
export declare class AccountMemberUserOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AccountMemberUser | undefined;
    set internalValue(value: AccountMemberUser | undefined);
    get email(): any;
    get firstName(): any;
    get id(): any;
    get lastName(): any;
    get twoFactorAuthenticationEnabled(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_member cloudflare_account_member}
*/
export declare class AccountMember extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_account_member";
    /**
    * Generates CDKTF code for importing a AccountMember resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AccountMember to import
    * @param importFromId The id of the existing AccountMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_member#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AccountMember to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_member cloudflare_account_member} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AccountMemberConfig
    */
    constructor(scope: Construct, id: string, config: AccountMemberConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
    get id(): any;
    private _policies;
    get policies(): AccountMemberPoliciesList;
    putPolicies(value: AccountMemberPolicies[] | cdktf.IResolvable): void;
    resetPolicies(): void;
    get policiesInput(): any;
    private _roles?;
    get roles(): string[];
    set roles(value: string[]);
    resetRoles(): void;
    get rolesInput(): string[];
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
    private _user;
    get user(): AccountMemberUserOutputReference;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
