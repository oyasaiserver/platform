import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RepositoryFileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Automatically create the branch if it could not be found. Subsequent reads if the branch is deleted will occur from 'autocreate_branch_source_branch'
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_file#autocreate_branch RepositoryFile#autocreate_branch}
    */
    readonly autocreateBranch?: boolean | cdktf.IResolvable;
    /**
    * The branch name to start from, if 'autocreate_branch' is set. Defaults to 'main'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_file#autocreate_branch_source_branch RepositoryFile#autocreate_branch_source_branch}
    */
    readonly autocreateBranchSourceBranch?: string;
    /**
    * The commit hash to start from, if 'autocreate_branch' is set. Defaults to the tip of 'autocreate_branch_source_branch'. If provided, 'autocreate_branch_source_branch' is ignored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_file#autocreate_branch_source_sha RepositoryFile#autocreate_branch_source_sha}
    */
    readonly autocreateBranchSourceSha?: string;
    /**
    * The branch name, defaults to the repository's default branch
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_file#branch RepositoryFile#branch}
    */
    readonly branch?: string;
    /**
    * The commit author name, defaults to the authenticated user's name. GitHub app users may omit author and email information so GitHub can verify commits as the GitHub App.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_file#commit_author RepositoryFile#commit_author}
    */
    readonly commitAuthor?: string;
    /**
    * The commit author email address, defaults to the authenticated user's email address. GitHub app users may omit author and email information so GitHub can verify commits as the GitHub App.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_file#commit_email RepositoryFile#commit_email}
    */
    readonly commitEmail?: string;
    /**
    * The commit message when creating, updating or deleting the file
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_file#commit_message RepositoryFile#commit_message}
    */
    readonly commitMessage?: string;
    /**
    * The file's content
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_file#content RepositoryFile#content}
    */
    readonly content: string;
    /**
    * The file path to manage
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_file#file RepositoryFile#file}
    */
    readonly file: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_file#id RepositoryFile#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Enable overwriting existing files, defaults to "false"
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_file#overwrite_on_create RepositoryFile#overwrite_on_create}
    */
    readonly overwriteOnCreate?: boolean | cdktf.IResolvable;
    /**
    * The repository name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_file#repository RepositoryFile#repository}
    */
    readonly repository: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_file github_repository_file}
*/
export declare class RepositoryFile extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_repository_file";
    /**
    * Generates CDKTF code for importing a RepositoryFile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryFile to import
    * @param importFromId The id of the existing RepositoryFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_file#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryFile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_file github_repository_file} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryFileConfig
    */
    constructor(scope: Construct, id: string, config: RepositoryFileConfig);
    private _autocreateBranch?;
    get autocreateBranch(): boolean | cdktf.IResolvable;
    set autocreateBranch(value: boolean | cdktf.IResolvable);
    resetAutocreateBranch(): void;
    get autocreateBranchInput(): any;
    private _autocreateBranchSourceBranch?;
    get autocreateBranchSourceBranch(): string;
    set autocreateBranchSourceBranch(value: string);
    resetAutocreateBranchSourceBranch(): void;
    get autocreateBranchSourceBranchInput(): string;
    private _autocreateBranchSourceSha?;
    get autocreateBranchSourceSha(): string;
    set autocreateBranchSourceSha(value: string);
    resetAutocreateBranchSourceSha(): void;
    get autocreateBranchSourceShaInput(): string;
    private _branch?;
    get branch(): string;
    set branch(value: string);
    resetBranch(): void;
    get branchInput(): string;
    private _commitAuthor?;
    get commitAuthor(): string;
    set commitAuthor(value: string);
    resetCommitAuthor(): void;
    get commitAuthorInput(): string;
    private _commitEmail?;
    get commitEmail(): string;
    set commitEmail(value: string);
    resetCommitEmail(): void;
    get commitEmailInput(): string;
    private _commitMessage?;
    get commitMessage(): string;
    set commitMessage(value: string);
    resetCommitMessage(): void;
    get commitMessageInput(): string;
    get commitSha(): any;
    private _content?;
    get content(): string;
    set content(value: string);
    get contentInput(): string;
    private _file?;
    get file(): string;
    set file(value: string);
    get fileInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _overwriteOnCreate?;
    get overwriteOnCreate(): boolean | cdktf.IResolvable;
    set overwriteOnCreate(value: boolean | cdktf.IResolvable);
    resetOverwriteOnCreate(): void;
    get overwriteOnCreateInput(): any;
    get ref(): any;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    get repositoryId(): any;
    get sha(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
