import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OrganizationRoleTeamAssignmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_role_team_assignment#id OrganizationRoleTeamAssignment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The GitHub organization role id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_role_team_assignment#role_id OrganizationRoleTeamAssignment#role_id}
    */
    readonly roleId: string;
    /**
    * The GitHub team slug.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_role_team_assignment#team_slug OrganizationRoleTeamAssignment#team_slug}
    */
    readonly teamSlug: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_role_team_assignment github_organization_role_team_assignment}
*/
export declare class OrganizationRoleTeamAssignment extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_organization_role_team_assignment";
    /**
    * Generates CDKTF code for importing a OrganizationRoleTeamAssignment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationRoleTeamAssignment to import
    * @param importFromId The id of the existing OrganizationRoleTeamAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_role_team_assignment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationRoleTeamAssignment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_role_team_assignment github_organization_role_team_assignment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationRoleTeamAssignmentConfig
    */
    constructor(scope: Construct, id: string, config: OrganizationRoleTeamAssignmentConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _roleId?;
    get roleId(): string;
    set roleId(value: string);
    get roleIdInput(): string;
    private _teamSlug?;
    get teamSlug(): string;
    set teamSlug(value: string);
    get teamSlugInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
