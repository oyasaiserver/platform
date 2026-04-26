import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorkflowConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workflow#account_id Workflow#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workflow#class_name Workflow#class_name}
    */
    readonly className: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workflow#limits Workflow#limits}
    */
    readonly limits?: WorkflowLimits;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workflow#script_name Workflow#script_name}
    */
    readonly scriptName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workflow#workflow_name Workflow#workflow_name}
    */
    readonly workflowName: string;
}
export interface WorkflowInstances {
}
export declare function workflowInstancesToTerraform(struct?: WorkflowInstances): any;
export declare function workflowInstancesToHclTerraform(struct?: WorkflowInstances): any;
export declare class WorkflowInstancesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkflowInstances | undefined;
    set internalValue(value: WorkflowInstances | undefined);
    get complete(): any;
    get errored(): any;
    get paused(): any;
    get queued(): any;
    get running(): any;
    get terminated(): any;
    get waiting(): any;
    get waitingForPause(): any;
}
export interface WorkflowLimits {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workflow#steps Workflow#steps}
    */
    readonly steps?: number;
}
export declare function workflowLimitsToTerraform(struct?: WorkflowLimits | cdktf.IResolvable): any;
export declare function workflowLimitsToHclTerraform(struct?: WorkflowLimits | cdktf.IResolvable): any;
export declare class WorkflowLimitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkflowLimits | cdktf.IResolvable | undefined;
    set internalValue(value: WorkflowLimits | cdktf.IResolvable | undefined);
    private _steps?;
    get steps(): number;
    set steps(value: number);
    resetSteps(): void;
    get stepsInput(): number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workflow cloudflare_workflow}
*/
export declare class Workflow extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_workflow";
    /**
    * Generates CDKTF code for importing a Workflow resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Workflow to import
    * @param importFromId The id of the existing Workflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workflow#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Workflow to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workflow cloudflare_workflow} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkflowConfig
    */
    constructor(scope: Construct, id: string, config: WorkflowConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _className?;
    get className(): string;
    set className(value: string);
    get classNameInput(): string;
    get createdOn(): any;
    get id(): any;
    private _instances;
    get instances(): WorkflowInstancesOutputReference;
    get isDeleted(): any;
    private _limits;
    get limits(): WorkflowLimitsOutputReference;
    putLimits(value: WorkflowLimits): void;
    resetLimits(): void;
    get limitsInput(): any;
    get modifiedOn(): any;
    get name(): any;
    private _scriptName?;
    get scriptName(): string;
    set scriptName(value: string);
    get scriptNameInput(): string;
    get terminatorRunning(): any;
    get triggeredOn(): any;
    get versionId(): any;
    private _workflowName?;
    get workflowName(): string;
    set workflowName(value: string);
    get workflowNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
