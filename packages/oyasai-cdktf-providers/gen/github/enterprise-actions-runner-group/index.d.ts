import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EnterpriseActionsRunnerGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether public repositories can be added to the runner group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_runner_group#allows_public_repositories EnterpriseActionsRunnerGroup#allows_public_repositories}
    */
    readonly allowsPublicRepositories?: boolean | cdktf.IResolvable;
    /**
    * The slug of the enterprise.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_runner_group#enterprise_slug EnterpriseActionsRunnerGroup#enterprise_slug}
    */
    readonly enterpriseSlug: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_runner_group#id EnterpriseActionsRunnerGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Name of the runner group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_runner_group#name EnterpriseActionsRunnerGroup#name}
    */
    readonly name: string;
    /**
    * If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array. Defaults to 'false'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_runner_group#restricted_to_workflows EnterpriseActionsRunnerGroup#restricted_to_workflows}
    */
    readonly restrictedToWorkflows?: boolean | cdktf.IResolvable;
    /**
    * List of organization IDs that can access the runner group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_runner_group#selected_organization_ids EnterpriseActionsRunnerGroup#selected_organization_ids}
    */
    readonly selectedOrganizationIds?: number[];
    /**
    * List of workflows the runner group should be allowed to run. This setting will be ignored unless restricted_to_workflows is set to 'true'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_runner_group#selected_workflows EnterpriseActionsRunnerGroup#selected_workflows}
    */
    readonly selectedWorkflows?: string[];
    /**
    * The visibility of the runner group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_runner_group#visibility EnterpriseActionsRunnerGroup#visibility}
    */
    readonly visibility: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_runner_group github_enterprise_actions_runner_group}
*/
export declare class EnterpriseActionsRunnerGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_enterprise_actions_runner_group";
    /**
    * Generates CDKTF code for importing a EnterpriseActionsRunnerGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EnterpriseActionsRunnerGroup to import
    * @param importFromId The id of the existing EnterpriseActionsRunnerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_runner_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EnterpriseActionsRunnerGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_runner_group github_enterprise_actions_runner_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EnterpriseActionsRunnerGroupConfig
    */
    constructor(scope: Construct, id: string, config: EnterpriseActionsRunnerGroupConfig);
    private _allowsPublicRepositories?;
    get allowsPublicRepositories(): boolean | cdktf.IResolvable;
    set allowsPublicRepositories(value: boolean | cdktf.IResolvable);
    resetAllowsPublicRepositories(): void;
    get allowsPublicRepositoriesInput(): any;
    get default(): any;
    private _enterpriseSlug?;
    get enterpriseSlug(): string;
    set enterpriseSlug(value: string);
    get enterpriseSlugInput(): string;
    get etag(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _restrictedToWorkflows?;
    get restrictedToWorkflows(): boolean | cdktf.IResolvable;
    set restrictedToWorkflows(value: boolean | cdktf.IResolvable);
    resetRestrictedToWorkflows(): void;
    get restrictedToWorkflowsInput(): any;
    get runnersUrl(): any;
    private _selectedOrganizationIds?;
    get selectedOrganizationIds(): number[];
    set selectedOrganizationIds(value: number[]);
    resetSelectedOrganizationIds(): void;
    get selectedOrganizationIdsInput(): number[];
    get selectedOrganizationsUrl(): any;
    private _selectedWorkflows?;
    get selectedWorkflows(): string[];
    set selectedWorkflows(value: string[]);
    resetSelectedWorkflows(): void;
    get selectedWorkflowsInput(): string[];
    private _visibility?;
    get visibility(): string;
    set visibility(value: string);
    get visibilityInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
