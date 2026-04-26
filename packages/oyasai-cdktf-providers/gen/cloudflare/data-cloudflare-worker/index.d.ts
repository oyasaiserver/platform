import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareWorkerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker#account_id DataCloudflareWorker#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker#filter DataCloudflareWorker#filter}
    */
    readonly filter?: DataCloudflareWorkerFilter;
    /**
    * Identifier for the Worker, which can be ID or name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker#worker_id DataCloudflareWorker#worker_id}
    */
    readonly workerId?: string;
}
export interface DataCloudflareWorkerFilter {
    /**
    * Sort direction.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker#order DataCloudflareWorker#order}
    */
    readonly order?: string;
    /**
    * Property to sort results by.
    * Available values: "deployed_on", "updated_on", "created_on", "name".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker#order_by DataCloudflareWorker#order_by}
    */
    readonly orderBy?: string;
}
export declare function dataCloudflareWorkerFilterToTerraform(struct?: DataCloudflareWorkerFilter | cdktf.IResolvable): any;
export declare function dataCloudflareWorkerFilterToHclTerraform(struct?: DataCloudflareWorkerFilter | cdktf.IResolvable): any;
export declare class DataCloudflareWorkerFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkerFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareWorkerFilter | cdktf.IResolvable | undefined);
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
}
export interface DataCloudflareWorkerObservabilityLogs {
}
export declare function dataCloudflareWorkerObservabilityLogsToTerraform(struct?: DataCloudflareWorkerObservabilityLogs): any;
export declare function dataCloudflareWorkerObservabilityLogsToHclTerraform(struct?: DataCloudflareWorkerObservabilityLogs): any;
export declare class DataCloudflareWorkerObservabilityLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkerObservabilityLogs | undefined;
    set internalValue(value: DataCloudflareWorkerObservabilityLogs | undefined);
    get destinations(): any;
    get enabled(): any;
    get headSamplingRate(): any;
    get invocationLogs(): any;
    get persist(): any;
}
export interface DataCloudflareWorkerObservabilityTraces {
}
export declare function dataCloudflareWorkerObservabilityTracesToTerraform(struct?: DataCloudflareWorkerObservabilityTraces): any;
export declare function dataCloudflareWorkerObservabilityTracesToHclTerraform(struct?: DataCloudflareWorkerObservabilityTraces): any;
export declare class DataCloudflareWorkerObservabilityTracesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkerObservabilityTraces | undefined;
    set internalValue(value: DataCloudflareWorkerObservabilityTraces | undefined);
    get destinations(): any;
    get enabled(): any;
    get headSamplingRate(): any;
    get persist(): any;
}
export interface DataCloudflareWorkerObservability {
}
export declare function dataCloudflareWorkerObservabilityToTerraform(struct?: DataCloudflareWorkerObservability): any;
export declare function dataCloudflareWorkerObservabilityToHclTerraform(struct?: DataCloudflareWorkerObservability): any;
export declare class DataCloudflareWorkerObservabilityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkerObservability | undefined;
    set internalValue(value: DataCloudflareWorkerObservability | undefined);
    get enabled(): any;
    get headSamplingRate(): any;
    private _logs;
    get logs(): DataCloudflareWorkerObservabilityLogsOutputReference;
    private _traces;
    get traces(): DataCloudflareWorkerObservabilityTracesOutputReference;
}
export interface DataCloudflareWorkerReferencesDispatchNamespaceOutbounds {
}
export declare function dataCloudflareWorkerReferencesDispatchNamespaceOutboundsToTerraform(struct?: DataCloudflareWorkerReferencesDispatchNamespaceOutbounds): any;
export declare function dataCloudflareWorkerReferencesDispatchNamespaceOutboundsToHclTerraform(struct?: DataCloudflareWorkerReferencesDispatchNamespaceOutbounds): any;
export declare class DataCloudflareWorkerReferencesDispatchNamespaceOutboundsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerReferencesDispatchNamespaceOutbounds | undefined;
    set internalValue(value: DataCloudflareWorkerReferencesDispatchNamespaceOutbounds | undefined);
    get namespaceId(): any;
    get namespaceName(): any;
    get workerId(): any;
    get workerName(): any;
}
export declare class DataCloudflareWorkerReferencesDispatchNamespaceOutboundsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerReferencesDispatchNamespaceOutboundsOutputReference;
}
export interface DataCloudflareWorkerReferencesDomains {
}
export declare function dataCloudflareWorkerReferencesDomainsToTerraform(struct?: DataCloudflareWorkerReferencesDomains): any;
export declare function dataCloudflareWorkerReferencesDomainsToHclTerraform(struct?: DataCloudflareWorkerReferencesDomains): any;
export declare class DataCloudflareWorkerReferencesDomainsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerReferencesDomains | undefined;
    set internalValue(value: DataCloudflareWorkerReferencesDomains | undefined);
    get certificateId(): any;
    get hostname(): any;
    get id(): any;
    get zoneId(): any;
    get zoneName(): any;
}
export declare class DataCloudflareWorkerReferencesDomainsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerReferencesDomainsOutputReference;
}
export interface DataCloudflareWorkerReferencesDurableObjects {
}
export declare function dataCloudflareWorkerReferencesDurableObjectsToTerraform(struct?: DataCloudflareWorkerReferencesDurableObjects): any;
export declare function dataCloudflareWorkerReferencesDurableObjectsToHclTerraform(struct?: DataCloudflareWorkerReferencesDurableObjects): any;
export declare class DataCloudflareWorkerReferencesDurableObjectsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerReferencesDurableObjects | undefined;
    set internalValue(value: DataCloudflareWorkerReferencesDurableObjects | undefined);
    get namespaceId(): any;
    get namespaceName(): any;
    get workerId(): any;
    get workerName(): any;
}
export declare class DataCloudflareWorkerReferencesDurableObjectsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerReferencesDurableObjectsOutputReference;
}
export interface DataCloudflareWorkerReferencesQueues {
}
export declare function dataCloudflareWorkerReferencesQueuesToTerraform(struct?: DataCloudflareWorkerReferencesQueues): any;
export declare function dataCloudflareWorkerReferencesQueuesToHclTerraform(struct?: DataCloudflareWorkerReferencesQueues): any;
export declare class DataCloudflareWorkerReferencesQueuesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerReferencesQueues | undefined;
    set internalValue(value: DataCloudflareWorkerReferencesQueues | undefined);
    get queueConsumerId(): any;
    get queueId(): any;
    get queueName(): any;
}
export declare class DataCloudflareWorkerReferencesQueuesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerReferencesQueuesOutputReference;
}
export interface DataCloudflareWorkerReferencesWorkers {
}
export declare function dataCloudflareWorkerReferencesWorkersToTerraform(struct?: DataCloudflareWorkerReferencesWorkers): any;
export declare function dataCloudflareWorkerReferencesWorkersToHclTerraform(struct?: DataCloudflareWorkerReferencesWorkers): any;
export declare class DataCloudflareWorkerReferencesWorkersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerReferencesWorkers | undefined;
    set internalValue(value: DataCloudflareWorkerReferencesWorkers | undefined);
    get id(): any;
    get name(): any;
}
export declare class DataCloudflareWorkerReferencesWorkersList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerReferencesWorkersOutputReference;
}
export interface DataCloudflareWorkerReferences {
}
export declare function dataCloudflareWorkerReferencesToTerraform(struct?: DataCloudflareWorkerReferences): any;
export declare function dataCloudflareWorkerReferencesToHclTerraform(struct?: DataCloudflareWorkerReferences): any;
export declare class DataCloudflareWorkerReferencesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkerReferences | undefined;
    set internalValue(value: DataCloudflareWorkerReferences | undefined);
    private _dispatchNamespaceOutbounds;
    get dispatchNamespaceOutbounds(): DataCloudflareWorkerReferencesDispatchNamespaceOutboundsList;
    private _domains;
    get domains(): DataCloudflareWorkerReferencesDomainsList;
    private _durableObjects;
    get durableObjects(): DataCloudflareWorkerReferencesDurableObjectsList;
    private _queues;
    get queues(): DataCloudflareWorkerReferencesQueuesList;
    private _workers;
    get workers(): DataCloudflareWorkerReferencesWorkersList;
}
export interface DataCloudflareWorkerSubdomain {
}
export declare function dataCloudflareWorkerSubdomainToTerraform(struct?: DataCloudflareWorkerSubdomain): any;
export declare function dataCloudflareWorkerSubdomainToHclTerraform(struct?: DataCloudflareWorkerSubdomain): any;
export declare class DataCloudflareWorkerSubdomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWorkerSubdomain | undefined;
    set internalValue(value: DataCloudflareWorkerSubdomain | undefined);
    get enabled(): any;
    get previewsEnabled(): any;
}
export interface DataCloudflareWorkerTailConsumers {
}
export declare function dataCloudflareWorkerTailConsumersToTerraform(struct?: DataCloudflareWorkerTailConsumers): any;
export declare function dataCloudflareWorkerTailConsumersToHclTerraform(struct?: DataCloudflareWorkerTailConsumers): any;
export declare class DataCloudflareWorkerTailConsumersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkerTailConsumers | undefined;
    set internalValue(value: DataCloudflareWorkerTailConsumers | undefined);
    get name(): any;
}
export declare class DataCloudflareWorkerTailConsumersList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkerTailConsumersOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker cloudflare_worker}
*/
export declare class DataCloudflareWorker extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_worker";
    /**
    * Generates CDKTF code for importing a DataCloudflareWorker resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorker to import
    * @param importFromId The id of the existing DataCloudflareWorker that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorker to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker cloudflare_worker} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkerConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareWorkerConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdOn(): any;
    get deployedOn(): any;
    private _filter;
    get filter(): DataCloudflareWorkerFilterOutputReference;
    putFilter(value: DataCloudflareWorkerFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get logpush(): any;
    get name(): any;
    private _observability;
    get observability(): DataCloudflareWorkerObservabilityOutputReference;
    private _references;
    get references(): DataCloudflareWorkerReferencesOutputReference;
    private _subdomain;
    get subdomain(): DataCloudflareWorkerSubdomainOutputReference;
    get tags(): any;
    private _tailConsumers;
    get tailConsumers(): DataCloudflareWorkerTailConsumersList;
    get updatedOn(): any;
    private _workerId?;
    get workerId(): string;
    set workerId(value: string);
    resetWorkerId(): void;
    get workerIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
