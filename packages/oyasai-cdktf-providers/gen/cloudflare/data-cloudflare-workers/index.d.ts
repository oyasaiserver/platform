import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareWorkersConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers#account_id DataCloudflareWorkers#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers#max_items DataCloudflareWorkers#max_items}
    */
    readonly maxItems?: number;
    /**
    * Sort direction.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers#order DataCloudflareWorkers#order}
    */
    readonly order?: string;
    /**
    * Property to sort results by.
    * Available values: "deployed_on", "updated_on", "created_on", "name".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers#order_by DataCloudflareWorkers#order_by}
    */
    readonly orderBy?: string;
}
export interface DataCloudflareWorkersResultObservabilityLogs {
}
export declare function dataCloudflareWorkersResultObservabilityLogsToTerraform(struct?: DataCloudflareWorkersResultObservabilityLogs): any;
export declare function dataCloudflareWorkersResultObservabilityLogsToHclTerraform(struct?: DataCloudflareWorkersResultObservabilityLogs): any;
export declare class DataCloudflareWorkersResultObservabilityLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkersResultObservabilityLogs | undefined;
    set internalValue(value: DataCloudflareWorkersResultObservabilityLogs | undefined);
    get destinations(): any;
    get enabled(): any;
    get headSamplingRate(): any;
    get invocationLogs(): any;
    get persist(): any;
}
export interface DataCloudflareWorkersResultObservabilityTraces {
}
export declare function dataCloudflareWorkersResultObservabilityTracesToTerraform(struct?: DataCloudflareWorkersResultObservabilityTraces): any;
export declare function dataCloudflareWorkersResultObservabilityTracesToHclTerraform(struct?: DataCloudflareWorkersResultObservabilityTraces): any;
export declare class DataCloudflareWorkersResultObservabilityTracesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkersResultObservabilityTraces | undefined;
    set internalValue(value: DataCloudflareWorkersResultObservabilityTraces | undefined);
    get destinations(): any;
    get enabled(): any;
    get headSamplingRate(): any;
    get persist(): any;
}
export interface DataCloudflareWorkersResultObservability {
}
export declare function dataCloudflareWorkersResultObservabilityToTerraform(struct?: DataCloudflareWorkersResultObservability): any;
export declare function dataCloudflareWorkersResultObservabilityToHclTerraform(struct?: DataCloudflareWorkersResultObservability): any;
export declare class DataCloudflareWorkersResultObservabilityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkersResultObservability | undefined;
    set internalValue(value: DataCloudflareWorkersResultObservability | undefined);
    get enabled(): any;
    get headSamplingRate(): any;
    private _logs;
    get logs(): DataCloudflareWorkersResultObservabilityLogsOutputReference;
    private _traces;
    get traces(): DataCloudflareWorkersResultObservabilityTracesOutputReference;
}
export interface DataCloudflareWorkersResultReferencesDispatchNamespaceOutbounds {
}
export declare function dataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsToTerraform(struct?: DataCloudflareWorkersResultReferencesDispatchNamespaceOutbounds): any;
export declare function dataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsToHclTerraform(struct?: DataCloudflareWorkersResultReferencesDispatchNamespaceOutbounds): any;
export declare class DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkersResultReferencesDispatchNamespaceOutbounds | undefined;
    set internalValue(value: DataCloudflareWorkersResultReferencesDispatchNamespaceOutbounds | undefined);
    get namespaceId(): any;
    get namespaceName(): any;
    get workerId(): any;
    get workerName(): any;
}
export declare class DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsOutputReference;
}
export interface DataCloudflareWorkersResultReferencesDomains {
}
export declare function dataCloudflareWorkersResultReferencesDomainsToTerraform(struct?: DataCloudflareWorkersResultReferencesDomains): any;
export declare function dataCloudflareWorkersResultReferencesDomainsToHclTerraform(struct?: DataCloudflareWorkersResultReferencesDomains): any;
export declare class DataCloudflareWorkersResultReferencesDomainsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkersResultReferencesDomains | undefined;
    set internalValue(value: DataCloudflareWorkersResultReferencesDomains | undefined);
    get certificateId(): any;
    get hostname(): any;
    get id(): any;
    get zoneId(): any;
    get zoneName(): any;
}
export declare class DataCloudflareWorkersResultReferencesDomainsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkersResultReferencesDomainsOutputReference;
}
export interface DataCloudflareWorkersResultReferencesDurableObjects {
}
export declare function dataCloudflareWorkersResultReferencesDurableObjectsToTerraform(struct?: DataCloudflareWorkersResultReferencesDurableObjects): any;
export declare function dataCloudflareWorkersResultReferencesDurableObjectsToHclTerraform(struct?: DataCloudflareWorkersResultReferencesDurableObjects): any;
export declare class DataCloudflareWorkersResultReferencesDurableObjectsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkersResultReferencesDurableObjects | undefined;
    set internalValue(value: DataCloudflareWorkersResultReferencesDurableObjects | undefined);
    get namespaceId(): any;
    get namespaceName(): any;
    get workerId(): any;
    get workerName(): any;
}
export declare class DataCloudflareWorkersResultReferencesDurableObjectsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkersResultReferencesDurableObjectsOutputReference;
}
export interface DataCloudflareWorkersResultReferencesQueues {
}
export declare function dataCloudflareWorkersResultReferencesQueuesToTerraform(struct?: DataCloudflareWorkersResultReferencesQueues): any;
export declare function dataCloudflareWorkersResultReferencesQueuesToHclTerraform(struct?: DataCloudflareWorkersResultReferencesQueues): any;
export declare class DataCloudflareWorkersResultReferencesQueuesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkersResultReferencesQueues | undefined;
    set internalValue(value: DataCloudflareWorkersResultReferencesQueues | undefined);
    get queueConsumerId(): any;
    get queueId(): any;
    get queueName(): any;
}
export declare class DataCloudflareWorkersResultReferencesQueuesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkersResultReferencesQueuesOutputReference;
}
export interface DataCloudflareWorkersResultReferencesWorkers {
}
export declare function dataCloudflareWorkersResultReferencesWorkersToTerraform(struct?: DataCloudflareWorkersResultReferencesWorkers): any;
export declare function dataCloudflareWorkersResultReferencesWorkersToHclTerraform(struct?: DataCloudflareWorkersResultReferencesWorkers): any;
export declare class DataCloudflareWorkersResultReferencesWorkersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkersResultReferencesWorkers | undefined;
    set internalValue(value: DataCloudflareWorkersResultReferencesWorkers | undefined);
    get id(): any;
    get name(): any;
}
export declare class DataCloudflareWorkersResultReferencesWorkersList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkersResultReferencesWorkersOutputReference;
}
export interface DataCloudflareWorkersResultReferences {
}
export declare function dataCloudflareWorkersResultReferencesToTerraform(struct?: DataCloudflareWorkersResultReferences): any;
export declare function dataCloudflareWorkersResultReferencesToHclTerraform(struct?: DataCloudflareWorkersResultReferences): any;
export declare class DataCloudflareWorkersResultReferencesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkersResultReferences | undefined;
    set internalValue(value: DataCloudflareWorkersResultReferences | undefined);
    private _dispatchNamespaceOutbounds;
    get dispatchNamespaceOutbounds(): DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsList;
    private _domains;
    get domains(): DataCloudflareWorkersResultReferencesDomainsList;
    private _durableObjects;
    get durableObjects(): DataCloudflareWorkersResultReferencesDurableObjectsList;
    private _queues;
    get queues(): DataCloudflareWorkersResultReferencesQueuesList;
    private _workers;
    get workers(): DataCloudflareWorkersResultReferencesWorkersList;
}
export interface DataCloudflareWorkersResultSubdomain {
}
export declare function dataCloudflareWorkersResultSubdomainToTerraform(struct?: DataCloudflareWorkersResultSubdomain): any;
export declare function dataCloudflareWorkersResultSubdomainToHclTerraform(struct?: DataCloudflareWorkersResultSubdomain): any;
export declare class DataCloudflareWorkersResultSubdomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkersResultSubdomain | undefined;
    set internalValue(value: DataCloudflareWorkersResultSubdomain | undefined);
    get enabled(): any;
    get previewsEnabled(): any;
}
export interface DataCloudflareWorkersResultTailConsumers {
}
export declare function dataCloudflareWorkersResultTailConsumersToTerraform(struct?: DataCloudflareWorkersResultTailConsumers): any;
export declare function dataCloudflareWorkersResultTailConsumersToHclTerraform(struct?: DataCloudflareWorkersResultTailConsumers): any;
export declare class DataCloudflareWorkersResultTailConsumersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkersResultTailConsumers | undefined;
    set internalValue(value: DataCloudflareWorkersResultTailConsumers | undefined);
    get name(): any;
}
export declare class DataCloudflareWorkersResultTailConsumersList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkersResultTailConsumersOutputReference;
}
export interface DataCloudflareWorkersResult {
}
export declare function dataCloudflareWorkersResultToTerraform(struct?: DataCloudflareWorkersResult): any;
export declare function dataCloudflareWorkersResultToHclTerraform(struct?: DataCloudflareWorkersResult): any;
export declare class DataCloudflareWorkersResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkersResult | undefined;
    set internalValue(value: DataCloudflareWorkersResult | undefined);
    get createdOn(): any;
    get deployedOn(): any;
    get id(): any;
    get logpush(): any;
    get name(): any;
    private _observability;
    get observability(): DataCloudflareWorkersResultObservabilityOutputReference;
    private _references;
    get references(): DataCloudflareWorkersResultReferencesOutputReference;
    private _subdomain;
    get subdomain(): DataCloudflareWorkersResultSubdomainOutputReference;
    get tags(): any;
    private _tailConsumers;
    get tailConsumers(): DataCloudflareWorkersResultTailConsumersList;
    get updatedOn(): any;
}
export declare class DataCloudflareWorkersResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkersResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers cloudflare_workers}
*/
export declare class DataCloudflareWorkers extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_workers";
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkers to import
    * @param importFromId The id of the existing DataCloudflareWorkers that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkers to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers cloudflare_workers} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkersConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareWorkersConfig);
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
    private _order?;
    get order(): string;
    set order(value: string);
    resetOrder(): void;
    get orderInput(): string;
    private _orderBy?;
    get orderBy(): string;
    set orderBy(value: string);
    resetOrderBy(): void;
    get orderByInput(): string;
    private _result;
    get result(): DataCloudflareWorkersResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
