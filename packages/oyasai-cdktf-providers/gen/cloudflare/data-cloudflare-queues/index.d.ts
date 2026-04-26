import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareQueuesConfig extends cdktf.TerraformMetaArguments {
    /**
    * A Resource identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queues#account_id DataCloudflareQueues#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queues#max_items DataCloudflareQueues#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareQueuesResultConsumersSettings {
}
export declare function dataCloudflareQueuesResultConsumersSettingsToTerraform(struct?: DataCloudflareQueuesResultConsumersSettings): any;
export declare function dataCloudflareQueuesResultConsumersSettingsToHclTerraform(struct?: DataCloudflareQueuesResultConsumersSettings): any;
export declare class DataCloudflareQueuesResultConsumersSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareQueuesResultConsumersSettings | undefined;
    set internalValue(value: DataCloudflareQueuesResultConsumersSettings | undefined);
    get batchSize(): any;
    get maxConcurrency(): any;
    get maxRetries(): any;
    get maxWaitTimeMs(): any;
    get retryDelay(): any;
    get visibilityTimeoutMs(): any;
}
export interface DataCloudflareQueuesResultConsumers {
}
export declare function dataCloudflareQueuesResultConsumersToTerraform(struct?: DataCloudflareQueuesResultConsumers): any;
export declare function dataCloudflareQueuesResultConsumersToHclTerraform(struct?: DataCloudflareQueuesResultConsumers): any;
export declare class DataCloudflareQueuesResultConsumersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareQueuesResultConsumers | undefined;
    set internalValue(value: DataCloudflareQueuesResultConsumers | undefined);
    get consumerId(): any;
    get createdOn(): any;
    get deadLetterQueue(): any;
    get queueName(): any;
    get scriptName(): any;
    private _settings;
    get settings(): DataCloudflareQueuesResultConsumersSettingsOutputReference;
    get type(): any;
}
export declare class DataCloudflareQueuesResultConsumersList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareQueuesResultConsumersOutputReference;
}
export interface DataCloudflareQueuesResultProducers {
}
export declare function dataCloudflareQueuesResultProducersToTerraform(struct?: DataCloudflareQueuesResultProducers): any;
export declare function dataCloudflareQueuesResultProducersToHclTerraform(struct?: DataCloudflareQueuesResultProducers): any;
export declare class DataCloudflareQueuesResultProducersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareQueuesResultProducers | undefined;
    set internalValue(value: DataCloudflareQueuesResultProducers | undefined);
    get bucketName(): any;
    get script(): any;
    get type(): any;
}
export declare class DataCloudflareQueuesResultProducersList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareQueuesResultProducersOutputReference;
}
export interface DataCloudflareQueuesResultSettings {
}
export declare function dataCloudflareQueuesResultSettingsToTerraform(struct?: DataCloudflareQueuesResultSettings): any;
export declare function dataCloudflareQueuesResultSettingsToHclTerraform(struct?: DataCloudflareQueuesResultSettings): any;
export declare class DataCloudflareQueuesResultSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareQueuesResultSettings | undefined;
    set internalValue(value: DataCloudflareQueuesResultSettings | undefined);
    get deliveryDelay(): any;
    get deliveryPaused(): any;
    get messageRetentionPeriod(): any;
}
export interface DataCloudflareQueuesResult {
}
export declare function dataCloudflareQueuesResultToTerraform(struct?: DataCloudflareQueuesResult): any;
export declare function dataCloudflareQueuesResultToHclTerraform(struct?: DataCloudflareQueuesResult): any;
export declare class DataCloudflareQueuesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareQueuesResult | undefined;
    set internalValue(value: DataCloudflareQueuesResult | undefined);
    private _consumers;
    get consumers(): DataCloudflareQueuesResultConsumersList;
    get consumersTotalCount(): any;
    get createdOn(): any;
    get id(): any;
    get modifiedOn(): any;
    private _producers;
    get producers(): DataCloudflareQueuesResultProducersList;
    get producersTotalCount(): any;
    get queueId(): any;
    get queueName(): any;
    private _settings;
    get settings(): DataCloudflareQueuesResultSettingsOutputReference;
}
export declare class DataCloudflareQueuesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareQueuesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queues cloudflare_queues}
*/
export declare class DataCloudflareQueues extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_queues";
    /**
    * Generates CDKTF code for importing a DataCloudflareQueues resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareQueues to import
    * @param importFromId The id of the existing DataCloudflareQueues that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queues#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareQueues to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queues cloudflare_queues} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareQueuesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareQueuesConfig);
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
    get result(): DataCloudflareQueuesResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
