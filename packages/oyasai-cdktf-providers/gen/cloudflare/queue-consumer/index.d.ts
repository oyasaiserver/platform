import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface QueueConsumerConfig extends cdktf.TerraformMetaArguments {
    /**
    * A Resource identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue_consumer#account_id QueueConsumer#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue_consumer#dead_letter_queue QueueConsumer#dead_letter_queue}
    */
    readonly deadLetterQueue?: string;
    /**
    * A Resource identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue_consumer#queue_id QueueConsumer#queue_id}
    */
    readonly queueId: string;
    /**
    * Name of a Worker
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue_consumer#script_name QueueConsumer#script_name}
    */
    readonly scriptName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue_consumer#settings QueueConsumer#settings}
    */
    readonly settings?: QueueConsumerSettings;
    /**
    * Available values: "worker", "http_pull".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue_consumer#type QueueConsumer#type}
    */
    readonly type: string;
}
export interface QueueConsumerSettings {
    /**
    * The maximum number of messages to include in a batch.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue_consumer#batch_size QueueConsumer#batch_size}
    */
    readonly batchSize?: number;
    /**
    * Maximum number of concurrent consumers that may consume from this Queue. Set to `null` to automatically opt in to the platform's maximum (recommended).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue_consumer#max_concurrency QueueConsumer#max_concurrency}
    */
    readonly maxConcurrency?: number;
    /**
    * The maximum number of retries
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue_consumer#max_retries QueueConsumer#max_retries}
    */
    readonly maxRetries?: number;
    /**
    * The number of milliseconds to wait for a batch to fill up before attempting to deliver it
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue_consumer#max_wait_time_ms QueueConsumer#max_wait_time_ms}
    */
    readonly maxWaitTimeMs?: number;
    /**
    * The number of seconds to delay before making the message available for another attempt.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue_consumer#retry_delay QueueConsumer#retry_delay}
    */
    readonly retryDelay?: number;
    /**
    * The number of milliseconds that a message is exclusively leased. After the timeout, the message becomes available for another attempt.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue_consumer#visibility_timeout_ms QueueConsumer#visibility_timeout_ms}
    */
    readonly visibilityTimeoutMs?: number;
}
export declare function queueConsumerSettingsToTerraform(struct?: QueueConsumerSettings | cdktf.IResolvable): any;
export declare function queueConsumerSettingsToHclTerraform(struct?: QueueConsumerSettings | cdktf.IResolvable): any;
export declare class QueueConsumerSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QueueConsumerSettings | cdktf.IResolvable | undefined;
    set internalValue(value: QueueConsumerSettings | cdktf.IResolvable | undefined);
    private _batchSize?;
    get batchSize(): number;
    set batchSize(value: number);
    resetBatchSize(): void;
    get batchSizeInput(): number;
    private _maxConcurrency?;
    get maxConcurrency(): number;
    set maxConcurrency(value: number);
    resetMaxConcurrency(): void;
    get maxConcurrencyInput(): number;
    private _maxRetries?;
    get maxRetries(): number;
    set maxRetries(value: number);
    resetMaxRetries(): void;
    get maxRetriesInput(): number;
    private _maxWaitTimeMs?;
    get maxWaitTimeMs(): number;
    set maxWaitTimeMs(value: number);
    resetMaxWaitTimeMs(): void;
    get maxWaitTimeMsInput(): number;
    private _retryDelay?;
    get retryDelay(): number;
    set retryDelay(value: number);
    resetRetryDelay(): void;
    get retryDelayInput(): number;
    private _visibilityTimeoutMs?;
    get visibilityTimeoutMs(): number;
    set visibilityTimeoutMs(value: number);
    resetVisibilityTimeoutMs(): void;
    get visibilityTimeoutMsInput(): number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue_consumer cloudflare_queue_consumer}
*/
export declare class QueueConsumer extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_queue_consumer";
    /**
    * Generates CDKTF code for importing a QueueConsumer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the QueueConsumer to import
    * @param importFromId The id of the existing QueueConsumer that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue_consumer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the QueueConsumer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue_consumer cloudflare_queue_consumer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QueueConsumerConfig
    */
    constructor(scope: Construct, id: string, config: QueueConsumerConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get consumerId(): any;
    get createdOn(): any;
    private _deadLetterQueue?;
    get deadLetterQueue(): string;
    set deadLetterQueue(value: string);
    resetDeadLetterQueue(): void;
    get deadLetterQueueInput(): string;
    private _queueId?;
    get queueId(): string;
    set queueId(value: string);
    get queueIdInput(): string;
    get queueName(): any;
    private _scriptName?;
    get scriptName(): string;
    set scriptName(value: string);
    resetScriptName(): void;
    get scriptNameInput(): string;
    private _settings;
    get settings(): QueueConsumerSettingsOutputReference;
    putSettings(value: QueueConsumerSettings): void;
    resetSettings(): void;
    get settingsInput(): any;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
