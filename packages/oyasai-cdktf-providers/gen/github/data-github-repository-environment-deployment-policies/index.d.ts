import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubRepositoryEnvironmentDeploymentPoliciesConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_environment_deployment_policies#environment DataGithubRepositoryEnvironmentDeploymentPolicies#environment}
    */
    readonly environment: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_environment_deployment_policies#id DataGithubRepositoryEnvironmentDeploymentPolicies#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The name of the GitHub repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_environment_deployment_policies#repository DataGithubRepositoryEnvironmentDeploymentPolicies#repository}
    */
    readonly repository: string;
}
export interface DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies {
}
export declare function dataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesToTerraform(struct?: DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies): any;
export declare function dataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesToHclTerraform(struct?: DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies): any;
export declare class DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies | undefined;
    set internalValue(value: DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies | undefined);
    get pattern(): any;
    get type(): any;
}
export declare class DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList extends cdktf.ComplexList {
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
    get(index: number): DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_environment_deployment_policies github_repository_environment_deployment_policies}
*/
export declare class DataGithubRepositoryEnvironmentDeploymentPolicies extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_repository_environment_deployment_policies";
    /**
    * Generates CDKTF code for importing a DataGithubRepositoryEnvironmentDeploymentPolicies resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepositoryEnvironmentDeploymentPolicies to import
    * @param importFromId The id of the existing DataGithubRepositoryEnvironmentDeploymentPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_environment_deployment_policies#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepositoryEnvironmentDeploymentPolicies to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_environment_deployment_policies github_repository_environment_deployment_policies} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoryEnvironmentDeploymentPoliciesConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubRepositoryEnvironmentDeploymentPoliciesConfig);
    private _environment?;
    get environment(): string;
    set environment(value: string);
    get environmentInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _policies;
    get policies(): DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList;
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
