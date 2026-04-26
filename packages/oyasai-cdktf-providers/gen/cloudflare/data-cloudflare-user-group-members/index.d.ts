import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareUserGroupMembersConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group_members#account_id DataCloudflareUserGroupMembers#account_id}
    */
    readonly accountId: string;
    /**
    * The sort order of returned user group members by email.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group_members#direction DataCloudflareUserGroupMembers#direction}
    */
    readonly direction?: string;
    /**
    * A string used for filtering members by partial email match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group_members#fuzzy_email DataCloudflareUserGroupMembers#fuzzy_email}
    */
    readonly fuzzyEmail?: string;
    /**
    * User Group identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group_members#user_group_id DataCloudflareUserGroupMembers#user_group_id}
    */
    readonly userGroupId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group_members cloudflare_user_group_members}
*/
export declare class DataCloudflareUserGroupMembers extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_user_group_members";
    /**
    * Generates CDKTF code for importing a DataCloudflareUserGroupMembers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareUserGroupMembers to import
    * @param importFromId The id of the existing DataCloudflareUserGroupMembers that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group_members#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareUserGroupMembers to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_group_members cloudflare_user_group_members} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareUserGroupMembersConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareUserGroupMembersConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    get email(): any;
    private _fuzzyEmail?;
    get fuzzyEmail(): string;
    set fuzzyEmail(value: string);
    resetFuzzyEmail(): void;
    get fuzzyEmailInput(): string;
    get id(): any;
    get status(): any;
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
