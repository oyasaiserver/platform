import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RepositoryDeploymentBranchPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * The target environment name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deployment_branch_policy#environment_name RepositoryDeploymentBranchPolicy#environment_name}
    */
    readonly environmentName: string;
    /**
    * An etag representing the Branch object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deployment_branch_policy#etag RepositoryDeploymentBranchPolicy#etag}
    */
    readonly etag?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deployment_branch_policy#id RepositoryDeploymentBranchPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The name of the branch
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deployment_branch_policy#name RepositoryDeploymentBranchPolicy#name}
    */
    readonly name: string;
    /**
    * The GitHub repository name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deployment_branch_policy#repository RepositoryDeploymentBranchPolicy#repository}
    */
    readonly repository: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deployment_branch_policy github_repository_deployment_branch_policy}
*/
export declare class RepositoryDeploymentBranchPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_repository_deployment_branch_policy";
    /**
    * Generates CDKTF code for importing a RepositoryDeploymentBranchPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryDeploymentBranchPolicy to import
    * @param importFromId The id of the existing RepositoryDeploymentBranchPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deployment_branch_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryDeploymentBranchPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deployment_branch_policy github_repository_deployment_branch_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryDeploymentBranchPolicyConfig
    */
    constructor(scope: Construct, id: string, config: RepositoryDeploymentBranchPolicyConfig);
    private _environmentName?;
    get environmentName(): string;
    set environmentName(value: string);
    get environmentNameInput(): string;
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
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
