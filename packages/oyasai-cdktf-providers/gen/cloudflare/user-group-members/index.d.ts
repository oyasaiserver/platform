import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface UserGroupMembersConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group_members#account_id UserGroupMembers#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group_members#members UserGroupMembers#members}
    */
    readonly members: UserGroupMembersMembers[] | cdktf.IResolvable;
    /**
    * User Group identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group_members#user_group_id UserGroupMembers#user_group_id}
    */
    readonly userGroupId: string;
}
export interface UserGroupMembersMembers {
    /**
    * The identifier of an existing account Member.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group_members#id UserGroupMembers#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function userGroupMembersMembersToTerraform(struct?: UserGroupMembersMembers | cdktf.IResolvable): any;
export declare function userGroupMembersMembersToHclTerraform(struct?: UserGroupMembersMembers | cdktf.IResolvable): any;
export declare class UserGroupMembersMembersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): UserGroupMembersMembers | cdktf.IResolvable | undefined;
    set internalValue(value: UserGroupMembersMembers | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export declare class UserGroupMembersMembersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: UserGroupMembersMembers[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): UserGroupMembersMembersOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group_members cloudflare_user_group_members}
*/
export declare class UserGroupMembers extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_user_group_members";
    /**
    * Generates CDKTF code for importing a UserGroupMembers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the UserGroupMembers to import
    * @param importFromId The id of the existing UserGroupMembers that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group_members#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the UserGroupMembers to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_group_members cloudflare_user_group_members} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options UserGroupMembersConfig
    */
    constructor(scope: Construct, id: string, config: UserGroupMembersConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    get id(): any;
    private _members;
    get members(): UserGroupMembersMembersList;
    putMembers(value: UserGroupMembersMembers[] | cdktf.IResolvable): void;
    get membersInput(): any;
    private _userGroupId?;
    get userGroupId(): string;
    set userGroupId(value: string);
    get userGroupIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
