import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ActionsRunnerGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether public repositories can be added to the runner group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_runner_group#allows_public_repositories ActionsRunnerGroup#allows_public_repositories}
    */
    readonly allowsPublicRepositories?: boolean | cdktf.IResolvable;
    /**
    * Name of the runner group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_runner_group#name ActionsRunnerGroup#name}
    */
    readonly name: string;
    /**
    * If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array. Defaults to 'false'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_runner_group#restricted_to_workflows ActionsRunnerGroup#restricted_to_workflows}
    */
    readonly restrictedToWorkflows?: boolean | cdktf.IResolvable;
    /**
    * List of repository IDs that can access the runner group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_runner_group#selected_repository_ids ActionsRunnerGroup#selected_repository_ids}
    */
    readonly selectedRepositoryIds?: number[];
    /**
    * List of workflows the runner group should be allowed to run. This setting will be ignored unless restricted_to_workflows is set to 'true'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_runner_group#selected_workflows ActionsRunnerGroup#selected_workflows}
    */
    readonly selectedWorkflows?: string[];
    /**
    * The visibility of the runner group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_runner_group#visibility ActionsRunnerGroup#visibility}
    */
    readonly visibility: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_runner_group github_actions_runner_group}
*/
export declare class ActionsRunnerGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_actions_runner_group";
    /**
    * Generates CDKTF code for importing a ActionsRunnerGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsRunnerGroup to import
    * @param importFromId The id of the existing ActionsRunnerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_runner_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsRunnerGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_runner_group github_actions_runner_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsRunnerGroupConfig
    */
    constructor(scope: Construct, id: string, config: ActionsRunnerGroupConfig);
    private _allowsPublicRepositories?;
    get allowsPublicRepositories(): boolean | cdktf.IResolvable;
    set allowsPublicRepositories(value: boolean | cdktf.IResolvable);
    resetAllowsPublicRepositories(): void;
    get allowsPublicRepositoriesInput(): any;
    get default(): any;
    get etag(): any;
    get id(): any;
    get inherited(): any;
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
    get selectedRepositoriesUrl(): any;
    private _selectedRepositoryIds?;
    get selectedRepositoryIds(): number[];
    set selectedRepositoryIds(value: number[]);
    resetSelectedRepositoryIds(): void;
    get selectedRepositoryIdsInput(): number[];
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
