import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareWorkflowConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workflow#account_id DataCloudflareWorkflow#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workflow#filter DataCloudflareWorkflow#filter}
    */
    readonly filter?: DataCloudflareWorkflowFilter;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workflow#workflow_name DataCloudflareWorkflow#workflow_name}
    */
    readonly workflowName?: string;
}
export interface DataCloudflareWorkflowFilter {
    /**
    * Allows filtering workflows` name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workflow#search DataCloudflareWorkflow#search}
    */
    readonly search?: string;
}
export declare function dataCloudflareWorkflowFilterToTerraform(struct?: DataCloudflareWorkflowFilter | cdktf.IResolvable): any;
export declare function dataCloudflareWorkflowFilterToHclTerraform(struct?: DataCloudflareWorkflowFilter | cdktf.IResolvable): any;
export declare class DataCloudflareWorkflowFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkflowFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareWorkflowFilter | cdktf.IResolvable | undefined);
    private _search?;
    get search(): string;
    set search(value: string);
    resetSearch(): void;
    get searchInput(): string;
}
export interface DataCloudflareWorkflowInstances {
}
export declare function dataCloudflareWorkflowInstancesToTerraform(struct?: DataCloudflareWorkflowInstances): any;
export declare function dataCloudflareWorkflowInstancesToHclTerraform(struct?: DataCloudflareWorkflowInstances): any;
export declare class DataCloudflareWorkflowInstancesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkflowInstances | undefined;
    set internalValue(value: DataCloudflareWorkflowInstances | undefined);
    get complete(): any;
    get errored(): any;
    get paused(): any;
    get queued(): any;
    get running(): any;
    get terminated(): any;
    get waiting(): any;
    get waitingForPause(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workflow cloudflare_workflow}
*/
export declare class DataCloudflareWorkflow extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_workflow";
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkflow resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkflow to import
    * @param importFromId The id of the existing DataCloudflareWorkflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workflow#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkflow to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workflow cloudflare_workflow} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkflowConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareWorkflowConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get className(): any;
    get createdOn(): any;
    private _filter;
    get filter(): DataCloudflareWorkflowFilterOutputReference;
    putFilter(value: DataCloudflareWorkflowFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    private _instances;
    get instances(): DataCloudflareWorkflowInstancesOutputReference;
    get modifiedOn(): any;
    get name(): any;
    get scriptName(): any;
    get triggeredOn(): any;
    private _workflowName?;
    get workflowName(): string;
    set workflowName(value: string);
    resetWorkflowName(): void;
    get workflowNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
