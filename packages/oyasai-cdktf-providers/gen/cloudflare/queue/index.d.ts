import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface QueueConfig extends cdktf.TerraformMetaArguments {
    /**
    * A Resource identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue#account_id Queue#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue#queue_name Queue#queue_name}
    */
    readonly queueName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue#settings Queue#settings}
    */
    readonly settings?: QueueSettings;
}
export interface QueueConsumersSettings {
}
export declare function queueConsumersSettingsToTerraform(struct?: QueueConsumersSettings): any;
export declare function queueConsumersSettingsToHclTerraform(struct?: QueueConsumersSettings): any;
export declare class QueueConsumersSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QueueConsumersSettings | undefined;
    set internalValue(value: QueueConsumersSettings | undefined);
    get batchSize(): any;
    get maxConcurrency(): any;
    get maxRetries(): any;
    get maxWaitTimeMs(): any;
    get retryDelay(): any;
    get visibilityTimeoutMs(): any;
}
export interface QueueConsumers {
}
export declare function queueConsumersToTerraform(struct?: QueueConsumers): any;
export declare function queueConsumersToHclTerraform(struct?: QueueConsumers): any;
export declare class QueueConsumersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QueueConsumers | undefined;
    set internalValue(value: QueueConsumers | undefined);
    get consumerId(): any;
    get createdOn(): any;
    get deadLetterQueue(): any;
    get queueName(): any;
    get scriptName(): any;
    private _settings;
    get settings(): QueueConsumersSettingsOutputReference;
    get type(): any;
}
export declare class QueueConsumersList extends cdktf.ComplexList {
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
    get(index: number): QueueConsumersOutputReference;
}
export interface QueueProducers {
}
export declare function queueProducersToTerraform(struct?: QueueProducers): any;
export declare function queueProducersToHclTerraform(struct?: QueueProducers): any;
export declare class QueueProducersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QueueProducers | undefined;
    set internalValue(value: QueueProducers | undefined);
    get bucketName(): any;
    get script(): any;
    get type(): any;
}
export declare class QueueProducersList extends cdktf.ComplexList {
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
    get(index: number): QueueProducersOutputReference;
}
export interface QueueSettings {
    /**
    * Number of seconds to delay delivery of all messages to consumers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue#delivery_delay Queue#delivery_delay}
    */
    readonly deliveryDelay?: number;
    /**
    * Indicates if message delivery to consumers is currently paused.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue#delivery_paused Queue#delivery_paused}
    */
    readonly deliveryPaused?: boolean | cdktf.IResolvable;
    /**
    * Number of seconds after which an unconsumed message will be delayed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue#message_retention_period Queue#message_retention_period}
    */
    readonly messageRetentionPeriod?: number;
}
export declare function queueSettingsToTerraform(struct?: QueueSettings | cdktf.IResolvable): any;
export declare function queueSettingsToHclTerraform(struct?: QueueSettings | cdktf.IResolvable): any;
export declare class QueueSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QueueSettings | cdktf.IResolvable | undefined;
    set internalValue(value: QueueSettings | cdktf.IResolvable | undefined);
    private _deliveryDelay?;
    get deliveryDelay(): number;
    set deliveryDelay(value: number);
    resetDeliveryDelay(): void;
    get deliveryDelayInput(): number;
    private _deliveryPaused?;
    get deliveryPaused(): boolean | cdktf.IResolvable;
    set deliveryPaused(value: boolean | cdktf.IResolvable);
    resetDeliveryPaused(): void;
    get deliveryPausedInput(): any;
    private _messageRetentionPeriod?;
    get messageRetentionPeriod(): number;
    set messageRetentionPeriod(value: number);
    resetMessageRetentionPeriod(): void;
    get messageRetentionPeriodInput(): number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue cloudflare_queue}
*/
export declare class Queue extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_queue";
    /**
    * Generates CDKTF code for importing a Queue resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Queue to import
    * @param importFromId The id of the existing Queue that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Queue to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue cloudflare_queue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QueueConfig
    */
    constructor(scope: Construct, id: string, config: QueueConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _consumers;
    get consumers(): QueueConsumersList;
    get consumersTotalCount(): any;
    get createdOn(): any;
    get id(): any;
    get modifiedOn(): any;
    private _producers;
    get producers(): QueueProducersList;
    get producersTotalCount(): any;
    get queueId(): any;
    private _queueName?;
    get queueName(): string;
    set queueName(value: string);
    get queueNameInput(): string;
    private _settings;
    get settings(): QueueSettingsOutputReference;
    putSettings(value: QueueSettings): void;
    resetSettings(): void;
    get settingsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
