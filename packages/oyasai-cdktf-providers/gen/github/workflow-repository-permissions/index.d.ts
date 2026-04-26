import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorkflowRepositoryPermissionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether GitHub Actions can approve pull requests. Enabling this can be a security risk.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/workflow_repository_permissions#can_approve_pull_request_reviews WorkflowRepositoryPermissions#can_approve_pull_request_reviews}
    */
    readonly canApprovePullRequestReviews?: boolean | cdktf.IResolvable;
    /**
    * The default workflow permissions granted to the GITHUB_TOKEN when running workflows.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/workflow_repository_permissions#default_workflow_permissions WorkflowRepositoryPermissions#default_workflow_permissions}
    */
    readonly defaultWorkflowPermissions?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/workflow_repository_permissions#id WorkflowRepositoryPermissions#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The GitHub repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/workflow_repository_permissions#repository WorkflowRepositoryPermissions#repository}
    */
    readonly repository: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/workflow_repository_permissions github_workflow_repository_permissions}
*/
export declare class WorkflowRepositoryPermissions extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_workflow_repository_permissions";
    /**
    * Generates CDKTF code for importing a WorkflowRepositoryPermissions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkflowRepositoryPermissions to import
    * @param importFromId The id of the existing WorkflowRepositoryPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/workflow_repository_permissions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkflowRepositoryPermissions to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/workflow_repository_permissions github_workflow_repository_permissions} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkflowRepositoryPermissionsConfig
    */
    constructor(scope: Construct, id: string, config: WorkflowRepositoryPermissionsConfig);
    private _canApprovePullRequestReviews?;
    get canApprovePullRequestReviews(): boolean | cdktf.IResolvable;
    set canApprovePullRequestReviews(value: boolean | cdktf.IResolvable);
    resetCanApprovePullRequestReviews(): void;
    get canApprovePullRequestReviewsInput(): any;
    private _defaultWorkflowPermissions?;
    get defaultWorkflowPermissions(): string;
    set defaultWorkflowPermissions(value: string);
    resetDefaultWorkflowPermissions(): void;
    get defaultWorkflowPermissionsInput(): string;
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
