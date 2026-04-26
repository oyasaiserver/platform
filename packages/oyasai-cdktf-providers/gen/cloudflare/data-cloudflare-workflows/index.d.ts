import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareWorkflowsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workflows#account_id DataCloudflareWorkflows#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workflows#max_items DataCloudflareWorkflows#max_items}
    */
    readonly maxItems?: number;
    /**
    * Allows filtering workflows` name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workflows#search DataCloudflareWorkflows#search}
    */
    readonly search?: string;
}
export interface DataCloudflareWorkflowsResultInstances {
}
export declare function dataCloudflareWorkflowsResultInstancesToTerraform(struct?: DataCloudflareWorkflowsResultInstances): any;
export declare function dataCloudflareWorkflowsResultInstancesToHclTerraform(struct?: DataCloudflareWorkflowsResultInstances): any;
export declare class DataCloudflareWorkflowsResultInstancesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkflowsResultInstances | undefined;
    set internalValue(value: DataCloudflareWorkflowsResultInstances | undefined);
    get complete(): any;
    get errored(): any;
    get paused(): any;
    get queued(): any;
    get running(): any;
    get terminated(): any;
    get waiting(): any;
    get waitingForPause(): any;
}
export interface DataCloudflareWorkflowsResult {
}
export declare function dataCloudflareWorkflowsResultToTerraform(struct?: DataCloudflareWorkflowsResult): any;
export declare function dataCloudflareWorkflowsResultToHclTerraform(struct?: DataCloudflareWorkflowsResult): any;
export declare class DataCloudflareWorkflowsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkflowsResult | undefined;
    set internalValue(value: DataCloudflareWorkflowsResult | undefined);
    get className(): any;
    get createdOn(): any;
    get id(): any;
    private _instances;
    get instances(): DataCloudflareWorkflowsResultInstancesOutputReference;
    get modifiedOn(): any;
    get name(): any;
    get scriptName(): any;
    get triggeredOn(): any;
}
export declare class DataCloudflareWorkflowsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkflowsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workflows cloudflare_workflows}
*/
export declare class DataCloudflareWorkflows extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_workflows";
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkflows resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkflows to import
    * @param importFromId The id of the existing DataCloudflareWorkflows that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workflows#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkflows to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workflows cloudflare_workflows} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkflowsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareWorkflowsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareWorkflowsResultList;
    private _search?;
    get search(): string;
    set search(value: string);
    resetSearch(): void;
    get searchInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
