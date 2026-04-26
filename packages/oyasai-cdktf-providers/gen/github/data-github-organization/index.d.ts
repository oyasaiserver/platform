import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubOrganizationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization#id DataGithubOrganization#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization#ignore_archived_repos DataGithubOrganization#ignore_archived_repos}
    */
    readonly ignoreArchivedRepos?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization#name DataGithubOrganization#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization#summary_only DataGithubOrganization#summary_only}
    */
    readonly summaryOnly?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization github_organization}
*/
export declare class DataGithubOrganization extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_organization";
    /**
    * Generates CDKTF code for importing a DataGithubOrganization resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubOrganization to import
    * @param importFromId The id of the existing DataGithubOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubOrganization to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization github_organization} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubOrganizationConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubOrganizationConfig);
    get advancedSecurityEnabledForNewRepositories(): any;
    get defaultRepositoryPermission(): any;
    get dependabotAlertsEnabledForNewRepositories(): any;
    get dependabotSecurityUpdatesEnabledForNewRepositories(): any;
    get dependencyGraphEnabledForNewRepositories(): any;
    get description(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _ignoreArchivedRepos?;
    get ignoreArchivedRepos(): boolean | cdktf.IResolvable;
    set ignoreArchivedRepos(value: boolean | cdktf.IResolvable);
    resetIgnoreArchivedRepos(): void;
    get ignoreArchivedReposInput(): any;
    get login(): any;
    get members(): any;
    get membersAllowedRepositoryCreationType(): any;
    get membersCanCreateInternalRepositories(): any;
    get membersCanCreatePages(): any;
    get membersCanCreatePrivatePages(): any;
    get membersCanCreatePrivateRepositories(): any;
    get membersCanCreatePublicPages(): any;
    get membersCanCreatePublicRepositories(): any;
    get membersCanCreateRepositories(): any;
    get membersCanForkPrivateRepositories(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get nodeId(): any;
    get orgname(): any;
    get plan(): any;
    get repositories(): any;
    get secretScanningEnabledForNewRepositories(): any;
    get secretScanningPushProtectionEnabledForNewRepositories(): any;
    private _summaryOnly?;
    get summaryOnly(): boolean | cdktf.IResolvable;
    set summaryOnly(value: boolean | cdktf.IResolvable);
    resetSummaryOnly(): void;
    get summaryOnlyInput(): any;
    get twoFactorRequirementEnabled(): any;
    private _users;
    get users(): any;
    get webCommitSignoffRequired(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
