import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TeamMembersConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_members#id TeamMembers#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The GitHub team id or slug
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_members#team_id TeamMembers#team_id}
    */
    readonly teamId: string;
    /**
    * members block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_members#members TeamMembers#members}
    */
    readonly members: TeamMembersMembers[] | cdktf.IResolvable;
}
export interface TeamMembersMembers {
    /**
    * The role of the user within the team. Must be one of 'member' or 'maintainer'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_members#role TeamMembers#role}
    */
    readonly role?: string;
    /**
    * The user to add to the team.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_members#username TeamMembers#username}
    */
    readonly username: string;
}
export declare function teamMembersMembersToTerraform(struct?: TeamMembersMembers | cdktf.IResolvable): any;
export declare function teamMembersMembersToHclTerraform(struct?: TeamMembersMembers | cdktf.IResolvable): any;
export declare class TeamMembersMembersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TeamMembersMembers | cdktf.IResolvable | undefined;
    set internalValue(value: TeamMembersMembers | cdktf.IResolvable | undefined);
    private _role?;
    get role(): string;
    set role(value: string);
    resetRole(): void;
    get roleInput(): string;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string;
}
export declare class TeamMembersMembersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TeamMembersMembers[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TeamMembersMembersOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_members github_team_members}
*/
export declare class TeamMembers extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_team_members";
    /**
    * Generates CDKTF code for importing a TeamMembers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TeamMembers to import
    * @param importFromId The id of the existing TeamMembers that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_members#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TeamMembers to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_members github_team_members} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TeamMembersConfig
    */
    constructor(scope: Construct, id: string, config: TeamMembersConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _teamId?;
    get teamId(): string;
    set teamId(value: string);
    get teamIdInput(): string;
    private _members;
    get members(): TeamMembersMembersList;
    putMembers(value: TeamMembersMembers[] | cdktf.IResolvable): void;
    get membersInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
