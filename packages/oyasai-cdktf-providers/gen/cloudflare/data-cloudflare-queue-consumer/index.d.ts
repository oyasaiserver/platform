import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareQueueConsumerConfig extends cdktf.TerraformMetaArguments {
    /**
    * A Resource identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue_consumer#account_id DataCloudflareQueueConsumer#account_id}
    */
    readonly accountId?: string;
    /**
    * A Resource identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue_consumer#queue_id DataCloudflareQueueConsumer#queue_id}
    */
    readonly queueId: string;
}
export interface DataCloudflareQueueConsumerSettings {
}
export declare function dataCloudflareQueueConsumerSettingsToTerraform(struct?: DataCloudflareQueueConsumerSettings): any;
export declare function dataCloudflareQueueConsumerSettingsToHclTerraform(struct?: DataCloudflareQueueConsumerSettings): any;
export declare class DataCloudflareQueueConsumerSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareQueueConsumerSettings | undefined;
    set internalValue(value: DataCloudflareQueueConsumerSettings | undefined);
    get batchSize(): any;
    get maxConcurrency(): any;
    get maxRetries(): any;
    get maxWaitTimeMs(): any;
    get retryDelay(): any;
    get visibilityTimeoutMs(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue_consumer cloudflare_queue_consumer}
*/
export declare class DataCloudflareQueueConsumer extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_queue_consumer";
    /**
    * Generates CDKTF code for importing a DataCloudflareQueueConsumer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareQueueConsumer to import
    * @param importFromId The id of the existing DataCloudflareQueueConsumer that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue_consumer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareQueueConsumer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue_consumer cloudflare_queue_consumer} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareQueueConsumerConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareQueueConsumerConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get consumerId(): any;
    get createdOn(): any;
    get deadLetterQueue(): any;
    private _queueId?;
    get queueId(): string;
    set queueId(value: string);
    get queueIdInput(): string;
    get queueName(): any;
    get scriptName(): any;
    private _settings;
    get settings(): DataCloudflareQueueConsumerSettingsOutputReference;
    get type(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
