import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MembershipConfig extends cdktf.TerraformMetaArguments {
    /**
    * Instead of removing the member from the org, you can choose to downgrade their membership to 'member' when this resource is destroyed. This is useful when wanting to downgrade admins while keeping them in the organization
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/membership#downgrade_on_destroy Membership#downgrade_on_destroy}
    */
    readonly downgradeOnDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/membership#id Membership#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The role of the user within the organization. Must be one of 'member' or 'admin'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/membership#role Membership#role}
    */
    readonly role?: string;
    /**
    * The user to add to the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/membership#username Membership#username}
    */
    readonly username: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/membership github_membership}
*/
export declare class Membership extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_membership";
    /**
    * Generates CDKTF code for importing a Membership resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Membership to import
    * @param importFromId The id of the existing Membership that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/membership#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Membership to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/membership github_membership} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MembershipConfig
    */
    constructor(scope: Construct, id: string, config: MembershipConfig);
    private _downgradeOnDestroy?;
    get downgradeOnDestroy(): boolean | cdktf.IResolvable;
    set downgradeOnDestroy(value: boolean | cdktf.IResolvable);
    resetDowngradeOnDestroy(): void;
    get downgradeOnDestroyInput(): any;
    get etag(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _role?;
    get role(): string;
    set role(value: string);
    resetRole(): void;
    get roleInput(): string;
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
