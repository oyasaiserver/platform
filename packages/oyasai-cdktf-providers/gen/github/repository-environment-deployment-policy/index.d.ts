import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RepositoryEnvironmentDeploymentPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name pattern that branches must match in order to deploy to the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment_deployment_policy#branch_pattern RepositoryEnvironmentDeploymentPolicy#branch_pattern}
    */
    readonly branchPattern?: string;
    /**
    * The name of the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment_deployment_policy#environment RepositoryEnvironmentDeploymentPolicy#environment}
    */
    readonly environment: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment_deployment_policy#id RepositoryEnvironmentDeploymentPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The name of the GitHub repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment_deployment_policy#repository RepositoryEnvironmentDeploymentPolicy#repository}
    */
    readonly repository: string;
    /**
    * The name pattern that tags must match in order to deploy to the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment_deployment_policy#tag_pattern RepositoryEnvironmentDeploymentPolicy#tag_pattern}
    */
    readonly tagPattern?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment_deployment_policy github_repository_environment_deployment_policy}
*/
export declare class RepositoryEnvironmentDeploymentPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_repository_environment_deployment_policy";
    /**
    * Generates CDKTF code for importing a RepositoryEnvironmentDeploymentPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryEnvironmentDeploymentPolicy to import
    * @param importFromId The id of the existing RepositoryEnvironmentDeploymentPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment_deployment_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryEnvironmentDeploymentPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment_deployment_policy github_repository_environment_deployment_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryEnvironmentDeploymentPolicyConfig
    */
    constructor(scope: Construct, id: string, config: RepositoryEnvironmentDeploymentPolicyConfig);
    private _branchPattern?;
    get branchPattern(): string;
    set branchPattern(value: string);
    resetBranchPattern(): void;
    get branchPatternInput(): string;
    private _environment?;
    get environment(): string;
    set environment(value: string);
    get environmentInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get policyId(): any;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    get repositoryId(): any;
    private _tagPattern?;
    get tagPattern(): string;
    set tagPattern(value: string);
    resetTagPattern(): void;
    get tagPatternInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
