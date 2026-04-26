import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BranchDefaultConfig extends cdktf.TerraformMetaArguments {
    /**
    * The branch (e.g. 'main').
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_default#branch BranchDefault#branch}
    */
    readonly branch: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_default#etag BranchDefault#etag}
    */
    readonly etag?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_default#id BranchDefault#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Indicate if it should rename the branch rather than use an existing branch. Defaults to 'false'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_default#rename BranchDefault#rename}
    */
    readonly rename?: boolean | cdktf.IResolvable;
    /**
    * The GitHub repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_default#repository BranchDefault#repository}
    */
    readonly repository: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_default github_branch_default}
*/
export declare class BranchDefault extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_branch_default";
    /**
    * Generates CDKTF code for importing a BranchDefault resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BranchDefault to import
    * @param importFromId The id of the existing BranchDefault that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_default#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BranchDefault to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_default github_branch_default} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BranchDefaultConfig
    */
    constructor(scope: Construct, id: string, config: BranchDefaultConfig);
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
    private _rename?;
    get rename(): boolean | cdktf.IResolvable;
    set rename(value: boolean | cdktf.IResolvable);
    resetRename(): void;
    get renameInput(): any;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
