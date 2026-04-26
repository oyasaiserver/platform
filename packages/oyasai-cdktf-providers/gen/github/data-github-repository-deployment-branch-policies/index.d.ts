import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubRepositoryDeploymentBranchPoliciesConfig extends cdktf.TerraformMetaArguments {
    /**
    * The target environment name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_deployment_branch_policies#environment_name DataGithubRepositoryDeploymentBranchPolicies#environment_name}
    */
    readonly environmentName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_deployment_branch_policies#id DataGithubRepositoryDeploymentBranchPolicies#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The GitHub repository name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_deployment_branch_policies#repository DataGithubRepositoryDeploymentBranchPolicies#repository}
    */
    readonly repository: string;
}
export interface DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies {
}
export declare function dataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesToTerraform(struct?: DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies): any;
export declare function dataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesToHclTerraform(struct?: DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies): any;
export declare class DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies | undefined;
    set internalValue(value: DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies | undefined);
    get id(): any;
    get name(): any;
}
export declare class DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList extends cdktf.ComplexList {
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
    get(index: number): DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_deployment_branch_policies github_repository_deployment_branch_policies}
*/
export declare class DataGithubRepositoryDeploymentBranchPolicies extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_repository_deployment_branch_policies";
    /**
    * Generates CDKTF code for importing a DataGithubRepositoryDeploymentBranchPolicies resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepositoryDeploymentBranchPolicies to import
    * @param importFromId The id of the existing DataGithubRepositoryDeploymentBranchPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_deployment_branch_policies#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepositoryDeploymentBranchPolicies to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_deployment_branch_policies github_repository_deployment_branch_policies} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoryDeploymentBranchPoliciesConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubRepositoryDeploymentBranchPoliciesConfig);
    private _deploymentBranchPolicies;
    get deploymentBranchPolicies(): DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList;
    private _environmentName?;
    get environmentName(): string;
    set environmentName(value: string);
    get environmentNameInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
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
