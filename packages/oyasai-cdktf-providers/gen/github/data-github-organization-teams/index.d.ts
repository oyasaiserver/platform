import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubOrganizationTeamsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_teams#id DataGithubOrganizationTeams#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_teams#results_per_page DataGithubOrganizationTeams#results_per_page}
    */
    readonly resultsPerPage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_teams#root_teams_only DataGithubOrganizationTeams#root_teams_only}
    */
    readonly rootTeamsOnly?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_teams#summary_only DataGithubOrganizationTeams#summary_only}
    */
    readonly summaryOnly?: boolean | cdktf.IResolvable;
}
export interface DataGithubOrganizationTeamsTeams {
}
export declare function dataGithubOrganizationTeamsTeamsToTerraform(struct?: DataGithubOrganizationTeamsTeams): any;
export declare function dataGithubOrganizationTeamsTeamsToHclTerraform(struct?: DataGithubOrganizationTeamsTeams): any;
export declare class DataGithubOrganizationTeamsTeamsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubOrganizationTeamsTeams | undefined;
    set internalValue(value: DataGithubOrganizationTeamsTeams | undefined);
    get description(): any;
    get id(): any;
    get members(): any;
    get name(): any;
    get nodeId(): any;
    private _parent;
    get parent(): any;
    get parentTeamId(): any;
    get parentTeamSlug(): any;
    get privacy(): any;
    get repositories(): any;
    get slug(): any;
}
export declare class DataGithubOrganizationTeamsTeamsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataGithubOrganizationTeamsTeamsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_teams github_organization_teams}
*/
export declare class DataGithubOrganizationTeams extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_organization_teams";
    /**
    * Generates CDKTF code for importing a DataGithubOrganizationTeams resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubOrganizationTeams to import
    * @param importFromId The id of the existing DataGithubOrganizationTeams that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_teams#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubOrganizationTeams to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_teams github_organization_teams} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubOrganizationTeamsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataGithubOrganizationTeamsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _resultsPerPage?;
    get resultsPerPage(): number;
    set resultsPerPage(value: number);
    resetResultsPerPage(): void;
    get resultsPerPageInput(): number;
    private _rootTeamsOnly?;
    get rootTeamsOnly(): boolean | cdktf.IResolvable;
    set rootTeamsOnly(value: boolean | cdktf.IResolvable);
    resetRootTeamsOnly(): void;
    get rootTeamsOnlyInput(): any;
    private _summaryOnly?;
    get summaryOnly(): boolean | cdktf.IResolvable;
    set summaryOnly(value: boolean | cdktf.IResolvable);
    resetSummaryOnly(): void;
    get summaryOnlyInput(): any;
    private _teams;
    get teams(): DataGithubOrganizationTeamsTeamsList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
