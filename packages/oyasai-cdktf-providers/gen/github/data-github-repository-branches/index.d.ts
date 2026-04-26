import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubRepositoryBranchesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_branches#id DataGithubRepositoryBranches#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_branches#only_non_protected_branches DataGithubRepositoryBranches#only_non_protected_branches}
    */
    readonly onlyNonProtectedBranches?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_branches#only_protected_branches DataGithubRepositoryBranches#only_protected_branches}
    */
    readonly onlyProtectedBranches?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_branches#repository DataGithubRepositoryBranches#repository}
    */
    readonly repository: string;
}
export interface DataGithubRepositoryBranchesBranches {
}
export declare function dataGithubRepositoryBranchesBranchesToTerraform(struct?: DataGithubRepositoryBranchesBranches): any;
export declare function dataGithubRepositoryBranchesBranchesToHclTerraform(struct?: DataGithubRepositoryBranchesBranches): any;
export declare class DataGithubRepositoryBranchesBranchesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubRepositoryBranchesBranches | undefined;
    set internalValue(value: DataGithubRepositoryBranchesBranches | undefined);
    get name(): any;
    get protected(): any;
}
export declare class DataGithubRepositoryBranchesBranchesList extends cdktf.ComplexList {
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
    get(index: number): DataGithubRepositoryBranchesBranchesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_branches github_repository_branches}
*/
export declare class DataGithubRepositoryBranches extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_repository_branches";
    /**
    * Generates CDKTF code for importing a DataGithubRepositoryBranches resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepositoryBranches to import
    * @param importFromId The id of the existing DataGithubRepositoryBranches that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_branches#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepositoryBranches to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_branches github_repository_branches} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoryBranchesConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubRepositoryBranchesConfig);
    private _branches;
    get branches(): DataGithubRepositoryBranchesBranchesList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _onlyNonProtectedBranches?;
    get onlyNonProtectedBranches(): boolean | cdktf.IResolvable;
    set onlyNonProtectedBranches(value: boolean | cdktf.IResolvable);
    resetOnlyNonProtectedBranches(): void;
    get onlyNonProtectedBranchesInput(): any;
    private _onlyProtectedBranches?;
    get onlyProtectedBranches(): boolean | cdktf.IResolvable;
    set onlyProtectedBranches(value: boolean | cdktf.IResolvable);
    resetOnlyProtectedBranches(): void;
    get onlyProtectedBranchesInput(): any;
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
