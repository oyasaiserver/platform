import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RepositoryEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Can Admins bypass deployment protections
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment#can_admins_bypass RepositoryEnvironment#can_admins_bypass}
    */
    readonly canAdminsBypass?: boolean | cdktf.IResolvable;
    /**
    * The name of the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment#environment RepositoryEnvironment#environment}
    */
    readonly environment: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment#id RepositoryEnvironment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Prevent users from approving workflows runs that they triggered.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment#prevent_self_review RepositoryEnvironment#prevent_self_review}
    */
    readonly preventSelfReview?: boolean | cdktf.IResolvable;
    /**
    * The repository of the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment#repository RepositoryEnvironment#repository}
    */
    readonly repository: string;
    /**
    * Amount of time to delay a job after the job is initially triggered.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment#wait_timer RepositoryEnvironment#wait_timer}
    */
    readonly waitTimer?: number;
    /**
    * deployment_branch_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment#deployment_branch_policy RepositoryEnvironment#deployment_branch_policy}
    */
    readonly deploymentBranchPolicy?: RepositoryEnvironmentDeploymentBranchPolicy;
    /**
    * reviewers block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment#reviewers RepositoryEnvironment#reviewers}
    */
    readonly reviewers?: RepositoryEnvironmentReviewers;
}
export interface RepositoryEnvironmentDeploymentBranchPolicy {
    /**
    * Whether only branches that match the specified name patterns can deploy to this environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment#custom_branch_policies RepositoryEnvironment#custom_branch_policies}
    */
    readonly customBranchPolicies: boolean | cdktf.IResolvable;
    /**
    * Whether only branches with branch protection rules can deploy to this environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment#protected_branches RepositoryEnvironment#protected_branches}
    */
    readonly protectedBranches: boolean | cdktf.IResolvable;
}
export declare function repositoryEnvironmentDeploymentBranchPolicyToTerraform(struct?: RepositoryEnvironmentDeploymentBranchPolicyOutputReference | RepositoryEnvironmentDeploymentBranchPolicy): any;
export declare function repositoryEnvironmentDeploymentBranchPolicyToHclTerraform(struct?: RepositoryEnvironmentDeploymentBranchPolicyOutputReference | RepositoryEnvironmentDeploymentBranchPolicy): any;
export declare class RepositoryEnvironmentDeploymentBranchPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryEnvironmentDeploymentBranchPolicy | undefined;
    set internalValue(value: RepositoryEnvironmentDeploymentBranchPolicy | undefined);
    private _customBranchPolicies?;
    get customBranchPolicies(): boolean | cdktf.IResolvable;
    set customBranchPolicies(value: boolean | cdktf.IResolvable);
    get customBranchPoliciesInput(): any;
    private _protectedBranches?;
    get protectedBranches(): boolean | cdktf.IResolvable;
    set protectedBranches(value: boolean | cdktf.IResolvable);
    get protectedBranchesInput(): any;
}
export interface RepositoryEnvironmentReviewers {
    /**
    * Up to 6 IDs for teams who may review jobs that reference the environment. Reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment#teams RepositoryEnvironment#teams}
    */
    readonly teams?: number[];
    /**
    * Up to 6 IDs for users who may review jobs that reference the environment. Reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment#users RepositoryEnvironment#users}
    */
    readonly users?: number[];
}
export declare function repositoryEnvironmentReviewersToTerraform(struct?: RepositoryEnvironmentReviewersOutputReference | RepositoryEnvironmentReviewers): any;
export declare function repositoryEnvironmentReviewersToHclTerraform(struct?: RepositoryEnvironmentReviewersOutputReference | RepositoryEnvironmentReviewers): any;
export declare class RepositoryEnvironmentReviewersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryEnvironmentReviewers | undefined;
    set internalValue(value: RepositoryEnvironmentReviewers | undefined);
    private _teams?;
    get teams(): number[];
    set teams(value: number[]);
    resetTeams(): void;
    get teamsInput(): number[];
    private _users?;
    get users(): number[];
    set users(value: number[]);
    resetUsers(): void;
    get usersInput(): number[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment github_repository_environment}
*/
export declare class RepositoryEnvironment extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_repository_environment";
    /**
    * Generates CDKTF code for importing a RepositoryEnvironment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryEnvironment to import
    * @param importFromId The id of the existing RepositoryEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryEnvironment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment github_repository_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryEnvironmentConfig
    */
    constructor(scope: Construct, id: string, config: RepositoryEnvironmentConfig);
    private _canAdminsBypass?;
    get canAdminsBypass(): boolean | cdktf.IResolvable;
    set canAdminsBypass(value: boolean | cdktf.IResolvable);
    resetCanAdminsBypass(): void;
    get canAdminsBypassInput(): any;
    private _environment?;
    get environment(): string;
    set environment(value: string);
    get environmentInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _preventSelfReview?;
    get preventSelfReview(): boolean | cdktf.IResolvable;
    set preventSelfReview(value: boolean | cdktf.IResolvable);
    resetPreventSelfReview(): void;
    get preventSelfReviewInput(): any;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    get repositoryId(): any;
    private _waitTimer?;
    get waitTimer(): number;
    set waitTimer(value: number);
    resetWaitTimer(): void;
    get waitTimerInput(): number;
    private _deploymentBranchPolicy;
    get deploymentBranchPolicy(): RepositoryEnvironmentDeploymentBranchPolicyOutputReference;
    putDeploymentBranchPolicy(value: RepositoryEnvironmentDeploymentBranchPolicy): void;
    resetDeploymentBranchPolicy(): void;
    get deploymentBranchPolicyInput(): RepositoryEnvironmentDeploymentBranchPolicy;
    private _reviewers;
    get reviewers(): RepositoryEnvironmentReviewersOutputReference;
    putReviewers(value: RepositoryEnvironmentReviewers): void;
    resetReviewers(): void;
    get reviewersInput(): RepositoryEnvironmentReviewers;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
