import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubRepositoryFileConfig extends cdktf.TerraformMetaArguments {
    /**
    * The branch name, defaults to the repository's default branch
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_file#branch DataGithubRepositoryFile#branch}
    */
    readonly branch?: string;
    /**
    * The file path to manage
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_file#file DataGithubRepositoryFile#file}
    */
    readonly file: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_file#id DataGithubRepositoryFile#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The repository name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_file#repository DataGithubRepositoryFile#repository}
    */
    readonly repository: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_file github_repository_file}
*/
export declare class DataGithubRepositoryFile extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_repository_file";
    /**
    * Generates CDKTF code for importing a DataGithubRepositoryFile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepositoryFile to import
    * @param importFromId The id of the existing DataGithubRepositoryFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_file#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepositoryFile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_file github_repository_file} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoryFileConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubRepositoryFileConfig);
    private _branch?;
    get branch(): string;
    set branch(value: string);
    resetBranch(): void;
    get branchInput(): string;
    get commitAuthor(): any;
    get commitEmail(): any;
    get commitMessage(): any;
    get commitSha(): any;
    get content(): any;
    private _file?;
    get file(): string;
    set file(value: string);
    get fileInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get ref(): any;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    get sha(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
