import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EnterpriseActionsWorkflowPermissionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether GitHub Actions can approve pull request reviews.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_workflow_permissions#can_approve_pull_request_reviews EnterpriseActionsWorkflowPermissions#can_approve_pull_request_reviews}
    */
    readonly canApprovePullRequestReviews?: boolean | cdktf.IResolvable;
    /**
    * The default workflow permissions granted to the GITHUB_TOKEN when running workflows. Can be 'read' or 'write'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_workflow_permissions#default_workflow_permissions EnterpriseActionsWorkflowPermissions#default_workflow_permissions}
    */
    readonly defaultWorkflowPermissions?: string;
    /**
    * The slug of the enterprise.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_workflow_permissions#enterprise_slug EnterpriseActionsWorkflowPermissions#enterprise_slug}
    */
    readonly enterpriseSlug: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_workflow_permissions#id EnterpriseActionsWorkflowPermissions#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_workflow_permissions github_enterprise_actions_workflow_permissions}
*/
export declare class EnterpriseActionsWorkflowPermissions extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_enterprise_actions_workflow_permissions";
    /**
    * Generates CDKTF code for importing a EnterpriseActionsWorkflowPermissions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EnterpriseActionsWorkflowPermissions to import
    * @param importFromId The id of the existing EnterpriseActionsWorkflowPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_workflow_permissions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EnterpriseActionsWorkflowPermissions to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_workflow_permissions github_enterprise_actions_workflow_permissions} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EnterpriseActionsWorkflowPermissionsConfig
    */
    constructor(scope: Construct, id: string, config: EnterpriseActionsWorkflowPermissionsConfig);
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
    private _enterpriseSlug?;
    get enterpriseSlug(): string;
    set enterpriseSlug(value: string);
    get enterpriseSlugInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
