import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubTeamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/team#id DataGithubTeam#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/team#membership_type DataGithubTeam#membership_type}
    */
    readonly membershipType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/team#results_per_page DataGithubTeam#results_per_page}
    */
    readonly resultsPerPage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/team#slug DataGithubTeam#slug}
    */
    readonly slug: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/team#summary_only DataGithubTeam#summary_only}
    */
    readonly summaryOnly?: boolean | cdktf.IResolvable;
}
export interface DataGithubTeamRepositoriesDetailed {
}
export declare function dataGithubTeamRepositoriesDetailedToTerraform(struct?: DataGithubTeamRepositoriesDetailed): any;
export declare function dataGithubTeamRepositoriesDetailedToHclTerraform(struct?: DataGithubTeamRepositoriesDetailed): any;
export declare class DataGithubTeamRepositoriesDetailedOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubTeamRepositoriesDetailed | undefined;
    set internalValue(value: DataGithubTeamRepositoriesDetailed | undefined);
    get repoId(): any;
    get repoName(): any;
    get roleName(): any;
}
export declare class DataGithubTeamRepositoriesDetailedList extends cdktf.ComplexList {
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
    get(index: number): DataGithubTeamRepositoriesDetailedOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/team github_team}
*/
export declare class DataGithubTeam extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_team";
    /**
    * Generates CDKTF code for importing a DataGithubTeam resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubTeam to import
    * @param importFromId The id of the existing DataGithubTeam that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/team#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubTeam to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/team github_team} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubTeamConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubTeamConfig);
    get description(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get members(): any;
    private _membershipType?;
    get membershipType(): string;
    set membershipType(value: string);
    resetMembershipType(): void;
    get membershipTypeInput(): string;
    get name(): any;
    get nodeId(): any;
    get notificationSetting(): any;
    get permission(): any;
    get privacy(): any;
    get repositories(): any;
    private _repositoriesDetailed;
    get repositoriesDetailed(): DataGithubTeamRepositoriesDetailedList;
    private _resultsPerPage?;
    get resultsPerPage(): number;
    set resultsPerPage(value: number);
    resetResultsPerPage(): void;
    get resultsPerPageInput(): number;
    private _slug?;
    get slug(): string;
    set slug(value: string);
    get slugInput(): string;
    private _summaryOnly?;
    get summaryOnly(): boolean | cdktf.IResolvable;
    set summaryOnly(value: boolean | cdktf.IResolvable);
    resetSummaryOnly(): void;
    get summaryOnlyInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
