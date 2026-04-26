import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorkerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#account_id Worker#account_id}
    */
    readonly accountId?: string;
    /**
    * Whether logpush is enabled for the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#logpush Worker#logpush}
    */
    readonly logpush?: boolean | cdktf.IResolvable;
    /**
    * Name of the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#name Worker#name}
    */
    readonly name: string;
    /**
    * Observability settings for the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#observability Worker#observability}
    */
    readonly observability?: WorkerObservability;
    /**
    * Subdomain settings for the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#subdomain Worker#subdomain}
    */
    readonly subdomain?: WorkerSubdomain;
    /**
    * Tags associated with the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#tags Worker#tags}
    */
    readonly tags?: string[];
    /**
    * Other Workers that should consume logs from the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#tail_consumers Worker#tail_consumers}
    */
    readonly tailConsumers?: WorkerTailConsumers[] | cdktf.IResolvable;
}
export interface WorkerObservabilityLogs {
    /**
    * A list of destinations where logs will be exported to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#destinations Worker#destinations}
    */
    readonly destinations?: string[];
    /**
    * Whether logs are enabled for the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#enabled Worker#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}
    */
    readonly headSamplingRate?: number;
    /**
    * Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#invocation_logs Worker#invocation_logs}
    */
    readonly invocationLogs?: boolean | cdktf.IResolvable;
    /**
    * Whether log persistence is enabled for the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#persist Worker#persist}
    */
    readonly persist?: boolean | cdktf.IResolvable;
}
export declare function workerObservabilityLogsToTerraform(struct?: WorkerObservabilityLogs | cdktf.IResolvable): any;
export declare function workerObservabilityLogsToHclTerraform(struct?: WorkerObservabilityLogs | cdktf.IResolvable): any;
export declare class WorkerObservabilityLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkerObservabilityLogs | cdktf.IResolvable | undefined;
    set internalValue(value: WorkerObservabilityLogs | cdktf.IResolvable | undefined);
    private _destinations?;
    get destinations(): string[];
    set destinations(value: string[]);
    resetDestinations(): void;
    get destinationsInput(): string[];
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _headSamplingRate?;
    get headSamplingRate(): number;
    set headSamplingRate(value: number);
    resetHeadSamplingRate(): void;
    get headSamplingRateInput(): number;
    private _invocationLogs?;
    get invocationLogs(): boolean | cdktf.IResolvable;
    set invocationLogs(value: boolean | cdktf.IResolvable);
    resetInvocationLogs(): void;
    get invocationLogsInput(): any;
    private _persist?;
    get persist(): boolean | cdktf.IResolvable;
    set persist(value: boolean | cdktf.IResolvable);
    resetPersist(): void;
    get persistInput(): any;
}
export interface WorkerObservabilityTraces {
    /**
    * A list of destinations where traces will be exported to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#destinations Worker#destinations}
    */
    readonly destinations?: string[];
    /**
    * Whether traces are enabled for the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#enabled Worker#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}
    */
    readonly headSamplingRate?: number;
    /**
    * Whether trace persistence is enabled for the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#persist Worker#persist}
    */
    readonly persist?: boolean | cdktf.IResolvable;
}
export declare function workerObservabilityTracesToTerraform(struct?: WorkerObservabilityTraces | cdktf.IResolvable): any;
export declare function workerObservabilityTracesToHclTerraform(struct?: WorkerObservabilityTraces | cdktf.IResolvable): any;
export declare class WorkerObservabilityTracesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkerObservabilityTraces | cdktf.IResolvable | undefined;
    set internalValue(value: WorkerObservabilityTraces | cdktf.IResolvable | undefined);
    private _destinations?;
    get destinations(): string[];
    set destinations(value: string[]);
    resetDestinations(): void;
    get destinationsInput(): string[];
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _headSamplingRate?;
    get headSamplingRate(): number;
    set headSamplingRate(value: number);
    resetHeadSamplingRate(): void;
    get headSamplingRateInput(): number;
    private _persist?;
    get persist(): boolean | cdktf.IResolvable;
    set persist(value: boolean | cdktf.IResolvable);
    resetPersist(): void;
    get persistInput(): any;
}
export interface WorkerObservability {
    /**
    * Whether observability is enabled for the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#enabled Worker#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}
    */
    readonly headSamplingRate?: number;
    /**
    * Log settings for the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#logs Worker#logs}
    */
    readonly logs?: WorkerObservabilityLogs;
    /**
    * Trace settings for the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#traces Worker#traces}
    */
    readonly traces?: WorkerObservabilityTraces;
}
export declare function workerObservabilityToTerraform(struct?: WorkerObservability | cdktf.IResolvable): any;
export declare function workerObservabilityToHclTerraform(struct?: WorkerObservability | cdktf.IResolvable): any;
export declare class WorkerObservabilityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkerObservability | cdktf.IResolvable | undefined;
    set internalValue(value: WorkerObservability | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _headSamplingRate?;
    get headSamplingRate(): number;
    set headSamplingRate(value: number);
    resetHeadSamplingRate(): void;
    get headSamplingRateInput(): number;
    private _logs;
    get logs(): WorkerObservabilityLogsOutputReference;
    putLogs(value: WorkerObservabilityLogs): void;
    resetLogs(): void;
    get logsInput(): any;
    private _traces;
    get traces(): WorkerObservabilityTracesOutputReference;
    putTraces(value: WorkerObservabilityTraces): void;
    resetTraces(): void;
    get tracesInput(): any;
}
export interface WorkerReferencesDispatchNamespaceOutbounds {
}
export declare function workerReferencesDispatchNamespaceOutboundsToTerraform(struct?: WorkerReferencesDispatchNamespaceOutbounds): any;
export declare function workerReferencesDispatchNamespaceOutboundsToHclTerraform(struct?: WorkerReferencesDispatchNamespaceOutbounds): any;
export declare class WorkerReferencesDispatchNamespaceOutboundsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkerReferencesDispatchNamespaceOutbounds | undefined;
    set internalValue(value: WorkerReferencesDispatchNamespaceOutbounds | undefined);
    get namespaceId(): any;
    get namespaceName(): any;
    get workerId(): any;
    get workerName(): any;
}
export declare class WorkerReferencesDispatchNamespaceOutboundsList extends cdktf.ComplexList {
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
    get(index: number): WorkerReferencesDispatchNamespaceOutboundsOutputReference;
}
export interface WorkerReferencesDomains {
}
export declare function workerReferencesDomainsToTerraform(struct?: WorkerReferencesDomains): any;
export declare function workerReferencesDomainsToHclTerraform(struct?: WorkerReferencesDomains): any;
export declare class WorkerReferencesDomainsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkerReferencesDomains | undefined;
    set internalValue(value: WorkerReferencesDomains | undefined);
    get certificateId(): any;
    get hostname(): any;
    get id(): any;
    get zoneId(): any;
    get zoneName(): any;
}
export declare class WorkerReferencesDomainsList extends cdktf.ComplexList {
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
    get(index: number): WorkerReferencesDomainsOutputReference;
}
export interface WorkerReferencesDurableObjects {
}
export declare function workerReferencesDurableObjectsToTerraform(struct?: WorkerReferencesDurableObjects): any;
export declare function workerReferencesDurableObjectsToHclTerraform(struct?: WorkerReferencesDurableObjects): any;
export declare class WorkerReferencesDurableObjectsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkerReferencesDurableObjects | undefined;
    set internalValue(value: WorkerReferencesDurableObjects | undefined);
    get namespaceId(): any;
    get namespaceName(): any;
    get workerId(): any;
    get workerName(): any;
}
export declare class WorkerReferencesDurableObjectsList extends cdktf.ComplexList {
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
    get(index: number): WorkerReferencesDurableObjectsOutputReference;
}
export interface WorkerReferencesQueues {
}
export declare function workerReferencesQueuesToTerraform(struct?: WorkerReferencesQueues): any;
export declare function workerReferencesQueuesToHclTerraform(struct?: WorkerReferencesQueues): any;
export declare class WorkerReferencesQueuesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkerReferencesQueues | undefined;
    set internalValue(value: WorkerReferencesQueues | undefined);
    get queueConsumerId(): any;
    get queueId(): any;
    get queueName(): any;
}
export declare class WorkerReferencesQueuesList extends cdktf.ComplexList {
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
    get(index: number): WorkerReferencesQueuesOutputReference;
}
export interface WorkerReferencesWorkers {
}
export declare function workerReferencesWorkersToTerraform(struct?: WorkerReferencesWorkers): any;
export declare function workerReferencesWorkersToHclTerraform(struct?: WorkerReferencesWorkers): any;
export declare class WorkerReferencesWorkersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkerReferencesWorkers | undefined;
    set internalValue(value: WorkerReferencesWorkers | undefined);
    get id(): any;
    get name(): any;
}
export declare class WorkerReferencesWorkersList extends cdktf.ComplexList {
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
    get(index: number): WorkerReferencesWorkersOutputReference;
}
export interface WorkerReferences {
}
export declare function workerReferencesToTerraform(struct?: WorkerReferences): any;
export declare function workerReferencesToHclTerraform(struct?: WorkerReferences): any;
export declare class WorkerReferencesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkerReferences | undefined;
    set internalValue(value: WorkerReferences | undefined);
    private _dispatchNamespaceOutbounds;
    get dispatchNamespaceOutbounds(): WorkerReferencesDispatchNamespaceOutboundsList;
    private _domains;
    get domains(): WorkerReferencesDomainsList;
    private _durableObjects;
    get durableObjects(): WorkerReferencesDurableObjectsList;
    private _queues;
    get queues(): WorkerReferencesQueuesList;
    private _workers;
    get workers(): WorkerReferencesWorkersList;
}
export interface WorkerSubdomain {
    /**
    * Whether the *.workers.dev subdomain is enabled for the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#enabled Worker#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Whether [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/) are enabled for the Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#previews_enabled Worker#previews_enabled}
    */
    readonly previewsEnabled?: boolean | cdktf.IResolvable;
}
export declare function workerSubdomainToTerraform(struct?: WorkerSubdomain | cdktf.IResolvable): any;
export declare function workerSubdomainToHclTerraform(struct?: WorkerSubdomain | cdktf.IResolvable): any;
export declare class WorkerSubdomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkerSubdomain | cdktf.IResolvable | undefined;
    set internalValue(value: WorkerSubdomain | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _previewsEnabled?;
    get previewsEnabled(): boolean | cdktf.IResolvable;
    set previewsEnabled(value: boolean | cdktf.IResolvable);
    resetPreviewsEnabled(): void;
    get previewsEnabledInput(): any;
}
export interface WorkerTailConsumers {
    /**
    * Name of the consumer Worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#name Worker#name}
    */
    readonly name: string;
}
export declare function workerTailConsumersToTerraform(struct?: WorkerTailConsumers | cdktf.IResolvable): any;
export declare function workerTailConsumersToHclTerraform(struct?: WorkerTailConsumers | cdktf.IResolvable): any;
export declare class WorkerTailConsumersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkerTailConsumers | cdktf.IResolvable | undefined;
    set internalValue(value: WorkerTailConsumers | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export declare class WorkerTailConsumersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkerTailConsumers[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkerTailConsumersOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker cloudflare_worker}
*/
export declare class Worker extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_worker";
    /**
    * Generates CDKTF code for importing a Worker resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Worker to import
    * @param importFromId The id of the existing Worker that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Worker to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker cloudflare_worker} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkerConfig
    */
    constructor(scope: Construct, id: string, config: WorkerConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdOn(): any;
    get deployedOn(): any;
    get id(): any;
    private _logpush?;
    get logpush(): boolean | cdktf.IResolvable;
    set logpush(value: boolean | cdktf.IResolvable);
    resetLogpush(): void;
    get logpushInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _observability;
    get observability(): WorkerObservabilityOutputReference;
    putObservability(value: WorkerObservability): void;
    resetObservability(): void;
    get observabilityInput(): any;
    private _references;
    get references(): WorkerReferencesOutputReference;
    private _subdomain;
    get subdomain(): WorkerSubdomainOutputReference;
    putSubdomain(value: WorkerSubdomain): void;
    resetSubdomain(): void;
    get subdomainInput(): any;
    private _tags?;
    get tags(): string[];
    set tags(value: string[]);
    resetTags(): void;
    get tagsInput(): string[];
    private _tailConsumers;
    get tailConsumers(): WorkerTailConsumersList;
    putTailConsumers(value: WorkerTailConsumers[] | cdktf.IResolvable): void;
    resetTailConsumers(): void;
    get tailConsumersInput(): any;
    get updatedOn(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
