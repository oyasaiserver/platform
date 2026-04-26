import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareQueueConsumersAConfig extends cdktf.TerraformMetaArguments {
    /**
    * A Resource identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue_consumers#account_id DataCloudflareQueueConsumersA#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue_consumers#max_items DataCloudflareQueueConsumersA#max_items}
    */
    readonly maxItems?: number;
    /**
    * A Resource identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue_consumers#queue_id DataCloudflareQueueConsumersA#queue_id}
    */
    readonly queueId: string;
}
export interface DataCloudflareQueueConsumersResultSettings {
}
export declare function dataCloudflareQueueConsumersResultSettingsToTerraform(struct?: DataCloudflareQueueConsumersResultSettings): any;
export declare function dataCloudflareQueueConsumersResultSettingsToHclTerraform(struct?: DataCloudflareQueueConsumersResultSettings): any;
export declare class DataCloudflareQueueConsumersResultSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareQueueConsumersResultSettings | undefined;
    set internalValue(value: DataCloudflareQueueConsumersResultSettings | undefined);
    get batchSize(): any;
    get maxConcurrency(): any;
    get maxRetries(): any;
    get maxWaitTimeMs(): any;
    get retryDelay(): any;
    get visibilityTimeoutMs(): any;
}
export interface DataCloudflareQueueConsumersResult {
}
export declare function dataCloudflareQueueConsumersResultToTerraform(struct?: DataCloudflareQueueConsumersResult): any;
export declare function dataCloudflareQueueConsumersResultToHclTerraform(struct?: DataCloudflareQueueConsumersResult): any;
export declare class DataCloudflareQueueConsumersResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareQueueConsumersResult | undefined;
    set internalValue(value: DataCloudflareQueueConsumersResult | undefined);
    get consumerId(): any;
    get createdOn(): any;
    get deadLetterQueue(): any;
    get queueName(): any;
    get scriptName(): any;
    private _settings;
    get settings(): DataCloudflareQueueConsumersResultSettingsOutputReference;
    get type(): any;
}
export declare class DataCloudflareQueueConsumersResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareQueueConsumersResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue_consumers cloudflare_queue_consumers}
*/
export declare class DataCloudflareQueueConsumersA extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_queue_consumers";
    /**
    * Generates CDKTF code for importing a DataCloudflareQueueConsumersA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareQueueConsumersA to import
    * @param importFromId The id of the existing DataCloudflareQueueConsumersA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue_consumers#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareQueueConsumersA to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue_consumers cloudflare_queue_consumers} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareQueueConsumersAConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareQueueConsumersAConfig);
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
    private _queueId?;
    get queueId(): string;
    set queueId(value: string);
    get queueIdInput(): string;
    private _result;
    get result(): DataCloudflareQueueConsumersResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
