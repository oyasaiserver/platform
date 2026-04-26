import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RepositoryPullRequestConfig extends cdktf.TerraformMetaArguments {
    /**
    * Name of the branch serving as the base of the Pull Request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pull_request#base_ref RepositoryPullRequest#base_ref}
    */
    readonly baseRef: string;
    /**
    * Name of the base repository to retrieve the Pull Requests from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pull_request#base_repository RepositoryPullRequest#base_repository}
    */
    readonly baseRepository: string;
    /**
    * Body of the Pull Request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pull_request#body RepositoryPullRequest#body}
    */
    readonly body?: string;
    /**
    * Name of the branch serving as the head of the Pull Request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pull_request#head_ref RepositoryPullRequest#head_ref}
    */
    readonly headRef: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pull_request#id RepositoryPullRequest#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Controls whether the base repository maintainers can modify the Pull Request. Default: 'false'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pull_request#maintainer_can_modify RepositoryPullRequest#maintainer_can_modify}
    */
    readonly maintainerCanModify?: boolean | cdktf.IResolvable;
    /**
    * Owner of the repository. If not provided, the provider's default owner is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pull_request#owner RepositoryPullRequest#owner}
    */
    readonly owner?: string;
    /**
    * The title of the Pull Request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pull_request#title RepositoryPullRequest#title}
    */
    readonly title: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pull_request github_repository_pull_request}
*/
export declare class RepositoryPullRequest extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_repository_pull_request";
    /**
    * Generates CDKTF code for importing a RepositoryPullRequest resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryPullRequest to import
    * @param importFromId The id of the existing RepositoryPullRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pull_request#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryPullRequest to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pull_request github_repository_pull_request} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryPullRequestConfig
    */
    constructor(scope: Construct, id: string, config: RepositoryPullRequestConfig);
    private _baseRef?;
    get baseRef(): string;
    set baseRef(value: string);
    get baseRefInput(): string;
    private _baseRepository?;
    get baseRepository(): string;
    set baseRepository(value: string);
    get baseRepositoryInput(): string;
    get baseSha(): any;
    private _body?;
    get body(): string;
    set body(value: string);
    resetBody(): void;
    get bodyInput(): string;
    get draft(): any;
    private _headRef?;
    get headRef(): string;
    set headRef(value: string);
    get headRefInput(): string;
    get headSha(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get labels(): any;
    private _maintainerCanModify?;
    get maintainerCanModify(): boolean | cdktf.IResolvable;
    set maintainerCanModify(value: boolean | cdktf.IResolvable);
    resetMaintainerCanModify(): void;
    get maintainerCanModifyInput(): any;
    get number(): any;
    get openedAt(): any;
    get openedBy(): any;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    resetOwner(): void;
    get ownerInput(): string;
    get state(): any;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string;
    get updatedAt(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
