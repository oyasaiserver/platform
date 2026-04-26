import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubRepositoryPullRequestConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_request#base_repository DataGithubRepositoryPullRequest#base_repository}
    */
    readonly baseRepository: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_request#id DataGithubRepositoryPullRequest#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_request#number DataGithubRepositoryPullRequest#number}
    */
    readonly number: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_request#owner DataGithubRepositoryPullRequest#owner}
    */
    readonly owner?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_request github_repository_pull_request}
*/
export declare class DataGithubRepositoryPullRequest extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_repository_pull_request";
    /**
    * Generates CDKTF code for importing a DataGithubRepositoryPullRequest resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepositoryPullRequest to import
    * @param importFromId The id of the existing DataGithubRepositoryPullRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_request#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepositoryPullRequest to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_request github_repository_pull_request} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoryPullRequestConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubRepositoryPullRequestConfig);
    get baseRef(): any;
    private _baseRepository?;
    get baseRepository(): string;
    set baseRepository(value: string);
    get baseRepositoryInput(): string;
    get baseSha(): any;
    get body(): any;
    get draft(): any;
    get headOwner(): any;
    get headRef(): any;
    get headRepository(): any;
    get headSha(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get labels(): any;
    get maintainerCanModify(): any;
    private _number?;
    get number(): number;
    set number(value: number);
    get numberInput(): number;
    get openedAt(): any;
    get openedBy(): any;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    resetOwner(): void;
    get ownerInput(): string;
    get state(): any;
    get title(): any;
    get updatedAt(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
