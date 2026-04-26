import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TeamMembershipConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_membership#id TeamMembership#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The role of the user within the team. Must be one of 'member' or 'maintainer'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_membership#role TeamMembership#role}
    */
    readonly role?: string;
    /**
    * The GitHub team id or the GitHub team slug.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_membership#team_id TeamMembership#team_id}
    */
    readonly teamId: string;
    /**
    * The user to add to the team.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_membership#username TeamMembership#username}
    */
    readonly username: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_membership github_team_membership}
*/
export declare class TeamMembership extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_team_membership";
    /**
    * Generates CDKTF code for importing a TeamMembership resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TeamMembership to import
    * @param importFromId The id of the existing TeamMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_membership#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TeamMembership to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_membership github_team_membership} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TeamMembershipConfig
    */
    constructor(scope: Construct, id: string, config: TeamMembershipConfig);
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
    private _teamId?;
    get teamId(): string;
    set teamId(value: string);
    get teamIdInput(): string;
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
