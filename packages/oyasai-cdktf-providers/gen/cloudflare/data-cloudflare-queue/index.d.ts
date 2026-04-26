import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareQueueConfig extends cdktf.TerraformMetaArguments {
    /**
    * A Resource identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue#account_id DataCloudflareQueue#account_id}
    */
    readonly accountId?: string;
    /**
    * A Resource identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue#queue_id DataCloudflareQueue#queue_id}
    */
    readonly queueId: string;
}
export interface DataCloudflareQueueConsumersSettings {
}
export declare function dataCloudflareQueueConsumersSettingsToTerraform(struct?: DataCloudflareQueueConsumersSettings): any;
export declare function dataCloudflareQueueConsumersSettingsToHclTerraform(struct?: DataCloudflareQueueConsumersSettings): any;
export declare class DataCloudflareQueueConsumersSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareQueueConsumersSettings | undefined;
    set internalValue(value: DataCloudflareQueueConsumersSettings | undefined);
    get batchSize(): any;
    get maxConcurrency(): any;
    get maxRetries(): any;
    get maxWaitTimeMs(): any;
    get retryDelay(): any;
    get visibilityTimeoutMs(): any;
}
export interface DataCloudflareQueueConsumers {
}
export declare function dataCloudflareQueueConsumersToTerraform(struct?: DataCloudflareQueueConsumers): any;
export declare function dataCloudflareQueueConsumersToHclTerraform(struct?: DataCloudflareQueueConsumers): any;
export declare class DataCloudflareQueueConsumersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareQueueConsumers | undefined;
    set internalValue(value: DataCloudflareQueueConsumers | undefined);
    get consumerId(): any;
    get createdOn(): any;
    get deadLetterQueue(): any;
    get queueName(): any;
    get scriptName(): any;
    private _settings;
    get settings(): DataCloudflareQueueConsumersSettingsOutputReference;
    get type(): any;
}
export declare class DataCloudflareQueueConsumersList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareQueueConsumersOutputReference;
}
export interface DataCloudflareQueueProducers {
}
export declare function dataCloudflareQueueProducersToTerraform(struct?: DataCloudflareQueueProducers): any;
export declare function dataCloudflareQueueProducersToHclTerraform(struct?: DataCloudflareQueueProducers): any;
export declare class DataCloudflareQueueProducersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareQueueProducers | undefined;
    set internalValue(value: DataCloudflareQueueProducers | undefined);
    get bucketName(): any;
    get script(): any;
    get type(): any;
}
export declare class DataCloudflareQueueProducersList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareQueueProducersOutputReference;
}
export interface DataCloudflareQueueSettings {
}
export declare function dataCloudflareQueueSettingsToTerraform(struct?: DataCloudflareQueueSettings): any;
export declare function dataCloudflareQueueSettingsToHclTerraform(struct?: DataCloudflareQueueSettings): any;
export declare class DataCloudflareQueueSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareQueueSettings | undefined;
    set internalValue(value: DataCloudflareQueueSettings | undefined);
    get deliveryDelay(): any;
    get deliveryPaused(): any;
    get messageRetentionPeriod(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue cloudflare_queue}
*/
export declare class DataCloudflareQueue extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_queue";
    /**
    * Generates CDKTF code for importing a DataCloudflareQueue resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareQueue to import
    * @param importFromId The id of the existing DataCloudflareQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareQueue to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue cloudflare_queue} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareQueueConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareQueueConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _consumers;
    get consumers(): DataCloudflareQueueConsumersList;
    get consumersTotalCount(): any;
    get createdOn(): any;
    get id(): any;
    get modifiedOn(): any;
    private _producers;
    get producers(): DataCloudflareQueueProducersList;
    get producersTotalCount(): any;
    private _queueId?;
    get queueId(): string;
    set queueId(value: string);
    get queueIdInput(): string;
    get queueName(): any;
    private _settings;
    get settings(): DataCloudflareQueueSettingsOutputReference;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
