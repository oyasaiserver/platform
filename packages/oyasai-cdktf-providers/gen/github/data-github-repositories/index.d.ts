import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubRepositoriesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repositories#id DataGithubRepositories#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repositories#include_repo_id DataGithubRepositories#include_repo_id}
    */
    readonly includeRepoId?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repositories#query DataGithubRepositories#query}
    */
    readonly query: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repositories#results_per_page DataGithubRepositories#results_per_page}
    */
    readonly resultsPerPage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repositories#sort DataGithubRepositories#sort}
    */
    readonly sort?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repositories github_repositories}
*/
export declare class DataGithubRepositories extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_repositories";
    /**
    * Generates CDKTF code for importing a DataGithubRepositories resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepositories to import
    * @param importFromId The id of the existing DataGithubRepositories that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repositories#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepositories to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repositories github_repositories} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoriesConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubRepositoriesConfig);
    get fullNames(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _includeRepoId?;
    get includeRepoId(): boolean | cdktf.IResolvable;
    set includeRepoId(value: boolean | cdktf.IResolvable);
    resetIncludeRepoId(): void;
    get includeRepoIdInput(): any;
    get names(): any;
    private _query?;
    get query(): string;
    set query(value: string);
    get queryInput(): string;
    get repoIds(): any;
    private _resultsPerPage?;
    get resultsPerPage(): number;
    set resultsPerPage(value: number);
    resetResultsPerPage(): void;
    get resultsPerPageInput(): number;
    private _sort?;
    get sort(): string;
    set sort(value: string);
    resetSort(): void;
    get sortInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
