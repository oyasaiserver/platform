import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TeamRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_repository#id TeamRepository#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The permissions of team members regarding the repository. Must be one of 'pull', 'triage', 'push', 'maintain', 'admin' or the name of an existing custom repository role within the organisation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_repository#permission TeamRepository#permission}
    */
    readonly permission?: string;
    /**
    * The repository to add to the team.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_repository#repository TeamRepository#repository}
    */
    readonly repository: string;
    /**
    * ID or slug of team
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_repository#team_id TeamRepository#team_id}
    */
    readonly teamId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_repository github_team_repository}
*/
export declare class TeamRepository extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_team_repository";
    /**
    * Generates CDKTF code for importing a TeamRepository resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TeamRepository to import
    * @param importFromId The id of the existing TeamRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TeamRepository to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_repository github_team_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TeamRepositoryConfig
    */
    constructor(scope: Construct, id: string, config: TeamRepositoryConfig);
    get etag(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _permission?;
    get permission(): string;
    set permission(value: string);
    resetPermission(): void;
    get permissionInput(): string;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    private _teamId?;
    get teamId(): string;
    set teamId(value: string);
    get teamIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
