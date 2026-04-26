import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BranchConfig extends cdktf.TerraformMetaArguments {
    /**
    * The repository branch to create.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch#branch Branch#branch}
    */
    readonly branch: string;
    /**
    * An etag representing the Branch object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch#etag Branch#etag}
    */
    readonly etag?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch#id Branch#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The GitHub repository name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch#repository Branch#repository}
    */
    readonly repository: string;
    /**
    * The branch name to start from. Defaults to 'main'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch#source_branch Branch#source_branch}
    */
    readonly sourceBranch?: string;
    /**
    * The commit hash to start from. Defaults to the tip of 'source_branch'. If provided, 'source_branch' is ignored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch#source_sha Branch#source_sha}
    */
    readonly sourceSha?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch github_branch}
*/
export declare class Branch extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_branch";
    /**
    * Generates CDKTF code for importing a Branch resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Branch to import
    * @param importFromId The id of the existing Branch that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Branch to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch github_branch} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BranchConfig
    */
    constructor(scope: Construct, id: string, config: BranchConfig);
    private _branch?;
    get branch(): string;
    set branch(value: string);
    get branchInput(): string;
    private _etag?;
    get etag(): string;
    set etag(value: string);
    resetEtag(): void;
    get etagInput(): string;
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
    private _sourceBranch?;
    get sourceBranch(): string;
    set sourceBranch(value: string);
    resetSourceBranch(): void;
    get sourceBranchInput(): string;
    private _sourceSha?;
    get sourceSha(): string;
    set sourceSha(value: string);
    resetSourceSha(): void;
    get sourceShaInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
