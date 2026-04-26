import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubBranchConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/branch#branch DataGithubBranch#branch}
    */
    readonly branch: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/branch#id DataGithubBranch#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/branch#repository DataGithubBranch#repository}
    */
    readonly repository: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/branch github_branch}
*/
export declare class DataGithubBranch extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_branch";
    /**
    * Generates CDKTF code for importing a DataGithubBranch resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubBranch to import
    * @param importFromId The id of the existing DataGithubBranch that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/branch#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubBranch to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/branch github_branch} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubBranchConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubBranchConfig);
    private _branch?;
    get branch(): string;
    set branch(value: string);
    get branchInput(): string;
    get etag(): any;
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
