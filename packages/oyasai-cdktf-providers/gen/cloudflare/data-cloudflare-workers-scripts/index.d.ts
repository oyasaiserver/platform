import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareWorkersScriptsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_scripts#account_id DataCloudflareWorkersScripts#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_scripts#max_items DataCloudflareWorkersScripts#max_items}
    */
    readonly maxItems?: number;
    /**
    * Filter scripts by tags. Format: comma-separated list of tag:allowed pairs where allowed is 'yes' or 'no'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_scripts#tags DataCloudflareWorkersScripts#tags}
    */
    readonly tags?: string;
}
export interface DataCloudflareWorkersScriptsResultNamedHandlers {
}
export declare function dataCloudflareWorkersScriptsResultNamedHandlersToTerraform(struct?: DataCloudflareWorkersScriptsResultNamedHandlers): any;
export declare function dataCloudflareWorkersScriptsResultNamedHandlersToHclTerraform(struct?: DataCloudflareWorkersScriptsResultNamedHandlers): any;
export declare class DataCloudflareWorkersScriptsResultNamedHandlersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkersScriptsResultNamedHandlers | undefined;
    set internalValue(value: DataCloudflareWorkersScriptsResultNamedHandlers | undefined);
    get handlers(): any;
    get name(): any;
}
export declare class DataCloudflareWorkersScriptsResultNamedHandlersList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkersScriptsResultNamedHandlersOutputReference;
}
export interface DataCloudflareWorkersScriptsResultObservabilityLogs {
}
export declare function dataCloudflareWorkersScriptsResultObservabilityLogsToTerraform(struct?: DataCloudflareWorkersScriptsResultObservabilityLogs): any;
export declare function dataCloudflareWorkersScriptsResultObservabilityLogsToHclTerraform(struct?: DataCloudflareWorkersScriptsResultObservabilityLogs): any;
export declare class DataCloudflareWorkersScriptsResultObservabilityLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkersScriptsResultObservabilityLogs | undefined;
    set internalValue(value: DataCloudflareWorkersScriptsResultObservabilityLogs | undefined);
    get destinations(): any;
    get enabled(): any;
    get headSamplingRate(): any;
    get invocationLogs(): any;
    get persist(): any;
}
export interface DataCloudflareWorkersScriptsResultObservabilityTraces {
}
export declare function dataCloudflareWorkersScriptsResultObservabilityTracesToTerraform(struct?: DataCloudflareWorkersScriptsResultObservabilityTraces): any;
export declare function dataCloudflareWorkersScriptsResultObservabilityTracesToHclTerraform(struct?: DataCloudflareWorkersScriptsResultObservabilityTraces): any;
export declare class DataCloudflareWorkersScriptsResultObservabilityTracesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkersScriptsResultObservabilityTraces | undefined;
    set internalValue(value: DataCloudflareWorkersScriptsResultObservabilityTraces | undefined);
    get destinations(): any;
    get enabled(): any;
    get headSamplingRate(): any;
    get persist(): any;
}
export interface DataCloudflareWorkersScriptsResultObservability {
}
export declare function dataCloudflareWorkersScriptsResultObservabilityToTerraform(struct?: DataCloudflareWorkersScriptsResultObservability): any;
export declare function dataCloudflareWorkersScriptsResultObservabilityToHclTerraform(struct?: DataCloudflareWorkersScriptsResultObservability): any;
export declare class DataCloudflareWorkersScriptsResultObservabilityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkersScriptsResultObservability | undefined;
    set internalValue(value: DataCloudflareWorkersScriptsResultObservability | undefined);
    get enabled(): any;
    get headSamplingRate(): any;
    private _logs;
    get logs(): DataCloudflareWorkersScriptsResultObservabilityLogsOutputReference;
    private _traces;
    get traces(): DataCloudflareWorkersScriptsResultObservabilityTracesOutputReference;
}
export interface DataCloudflareWorkersScriptsResultPlacementTarget {
}
export declare function dataCloudflareWorkersScriptsResultPlacementTargetToTerraform(struct?: DataCloudflareWorkersScriptsResultPlacementTarget): any;
export declare function dataCloudflareWorkersScriptsResultPlacementTargetToHclTerraform(struct?: DataCloudflareWorkersScriptsResultPlacementTarget): any;
export declare class DataCloudflareWorkersScriptsResultPlacementTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkersScriptsResultPlacementTarget | undefined;
    set internalValue(value: DataCloudflareWorkersScriptsResultPlacementTarget | undefined);
    get host(): any;
    get hostname(): any;
    get region(): any;
}
export declare class DataCloudflareWorkersScriptsResultPlacementTargetList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkersScriptsResultPlacementTargetOutputReference;
}
export interface DataCloudflareWorkersScriptsResultPlacement {
}
export declare function dataCloudflareWorkersScriptsResultPlacementToTerraform(struct?: DataCloudflareWorkersScriptsResultPlacement): any;
export declare function dataCloudflareWorkersScriptsResultPlacementToHclTerraform(struct?: DataCloudflareWorkersScriptsResultPlacement): any;
export declare class DataCloudflareWorkersScriptsResultPlacementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkersScriptsResultPlacement | undefined;
    set internalValue(value: DataCloudflareWorkersScriptsResultPlacement | undefined);
    get host(): any;
    get hostname(): any;
    get lastAnalyzedAt(): any;
    get mode(): any;
    get region(): any;
    get status(): any;
    private _target;
    get target(): DataCloudflareWorkersScriptsResultPlacementTargetList;
}
export interface DataCloudflareWorkersScriptsResultRoutes {
}
export declare function dataCloudflareWorkersScriptsResultRoutesToTerraform(struct?: DataCloudflareWorkersScriptsResultRoutes): any;
export declare function dataCloudflareWorkersScriptsResultRoutesToHclTerraform(struct?: DataCloudflareWorkersScriptsResultRoutes): any;
export declare class DataCloudflareWorkersScriptsResultRoutesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkersScriptsResultRoutes | undefined;
    set internalValue(value: DataCloudflareWorkersScriptsResultRoutes | undefined);
    get id(): any;
    get pattern(): any;
    get script(): any;
}
export declare class DataCloudflareWorkersScriptsResultRoutesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkersScriptsResultRoutesOutputReference;
}
export interface DataCloudflareWorkersScriptsResultTailConsumers {
}
export declare function dataCloudflareWorkersScriptsResultTailConsumersToTerraform(struct?: DataCloudflareWorkersScriptsResultTailConsumers): any;
export declare function dataCloudflareWorkersScriptsResultTailConsumersToHclTerraform(struct?: DataCloudflareWorkersScriptsResultTailConsumers): any;
export declare class DataCloudflareWorkersScriptsResultTailConsumersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkersScriptsResultTailConsumers | undefined;
    set internalValue(value: DataCloudflareWorkersScriptsResultTailConsumers | undefined);
    get environment(): any;
    get namespace(): any;
    get service(): any;
}
export declare class DataCloudflareWorkersScriptsResultTailConsumersList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkersScriptsResultTailConsumersOutputReference;
}
export interface DataCloudflareWorkersScriptsResult {
}
export declare function dataCloudflareWorkersScriptsResultToTerraform(struct?: DataCloudflareWorkersScriptsResult): any;
export declare function dataCloudflareWorkersScriptsResultToHclTerraform(struct?: DataCloudflareWorkersScriptsResult): any;
export declare class DataCloudflareWorkersScriptsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkersScriptsResult | undefined;
    set internalValue(value: DataCloudflareWorkersScriptsResult | undefined);
    get compatibilityDate(): any;
    get compatibilityFlags(): any;
    get createdOn(): any;
    get etag(): any;
    get handlers(): any;
    get hasAssets(): any;
    get hasModules(): any;
    get id(): any;
    get lastDeployedFrom(): any;
    get logpush(): any;
    get migrationTag(): any;
    get modifiedOn(): any;
    private _namedHandlers;
    get namedHandlers(): DataCloudflareWorkersScriptsResultNamedHandlersList;
    private _observability;
    get observability(): DataCloudflareWorkersScriptsResultObservabilityOutputReference;
    private _placement;
    get placement(): DataCloudflareWorkersScriptsResultPlacementOutputReference;
    get placementMode(): any;
    get placementStatus(): any;
    private _routes;
    get routes(): DataCloudflareWorkersScriptsResultRoutesList;
    get tag(): any;
    get tags(): any;
    private _tailConsumers;
    get tailConsumers(): DataCloudflareWorkersScriptsResultTailConsumersList;
    get usageModel(): any;
}
export declare class DataCloudflareWorkersScriptsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkersScriptsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_scripts cloudflare_workers_scripts}
*/
export declare class DataCloudflareWorkersScripts extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_workers_scripts";
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkersScripts resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkersScripts to import
    * @param importFromId The id of the existing DataCloudflareWorkersScripts that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_scripts#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkersScripts to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_scripts cloudflare_workers_scripts} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkersScriptsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareWorkersScriptsConfig);
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
    get result(): DataCloudflareWorkersScriptsResultList;
    private _tags?;
    get tags(): string;
    set tags(value: string);
    resetTags(): void;
    get tagsInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
