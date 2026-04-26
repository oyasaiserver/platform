import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubRepositoryPullRequestsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_requests#base_ref DataGithubRepositoryPullRequests#base_ref}
    */
    readonly baseRef?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_requests#base_repository DataGithubRepositoryPullRequests#base_repository}
    */
    readonly baseRepository: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_requests#head_ref DataGithubRepositoryPullRequests#head_ref}
    */
    readonly headRef?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_requests#id DataGithubRepositoryPullRequests#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_requests#owner DataGithubRepositoryPullRequests#owner}
    */
    readonly owner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_requests#sort_by DataGithubRepositoryPullRequests#sort_by}
    */
    readonly sortBy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_requests#sort_direction DataGithubRepositoryPullRequests#sort_direction}
    */
    readonly sortDirection?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_requests#state DataGithubRepositoryPullRequests#state}
    */
    readonly state?: string;
}
export interface DataGithubRepositoryPullRequestsResults {
}
export declare function dataGithubRepositoryPullRequestsResultsToTerraform(struct?: DataGithubRepositoryPullRequestsResults): any;
export declare function dataGithubRepositoryPullRequestsResultsToHclTerraform(struct?: DataGithubRepositoryPullRequestsResults): any;
export declare class DataGithubRepositoryPullRequestsResultsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubRepositoryPullRequestsResults | undefined;
    set internalValue(value: DataGithubRepositoryPullRequestsResults | undefined);
    get baseRef(): any;
    get baseSha(): any;
    get body(): any;
    get draft(): any;
    get headOwner(): any;
    get headRef(): any;
    get headRepository(): any;
    get headSha(): any;
    get labels(): any;
    get maintainerCanModify(): any;
    get number(): any;
    get openedAt(): any;
    get openedBy(): any;
    get state(): any;
    get title(): any;
    get updatedAt(): any;
}
export declare class DataGithubRepositoryPullRequestsResultsList extends cdktf.ComplexList {
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
    get(index: number): DataGithubRepositoryPullRequestsResultsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_requests github_repository_pull_requests}
*/
export declare class DataGithubRepositoryPullRequests extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_repository_pull_requests";
    /**
    * Generates CDKTF code for importing a DataGithubRepositoryPullRequests resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepositoryPullRequests to import
    * @param importFromId The id of the existing DataGithubRepositoryPullRequests that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_requests#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepositoryPullRequests to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_requests github_repository_pull_requests} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoryPullRequestsConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubRepositoryPullRequestsConfig);
    private _baseRef?;
    get baseRef(): string;
    set baseRef(value: string);
    resetBaseRef(): void;
    get baseRefInput(): string;
    private _baseRepository?;
    get baseRepository(): string;
    set baseRepository(value: string);
    get baseRepositoryInput(): string;
    private _headRef?;
    get headRef(): string;
    set headRef(value: string);
    resetHeadRef(): void;
    get headRefInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    resetOwner(): void;
    get ownerInput(): string;
    private _results;
    get results(): DataGithubRepositoryPullRequestsResultsList;
    private _sortBy?;
    get sortBy(): string;
    set sortBy(value: string);
    resetSortBy(): void;
    get sortByInput(): string;
    private _sortDirection?;
    get sortDirection(): string;
    set sortDirection(value: string);
    resetSortDirection(): void;
    get sortDirectionInput(): string;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
