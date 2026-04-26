// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue_consumer
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareQueueConsumerSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareQueueConsumerSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareQueueConsumerSettingsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // batch_size - computed: true, optional: false, required: false
    get batchSize() {
        return this.getNumberAttribute('batch_size');
    }
    // max_concurrency - computed: true, optional: false, required: false
    get maxConcurrency() {
        return this.getNumberAttribute('max_concurrency');
    }
    // max_retries - computed: true, optional: false, required: false
    get maxRetries() {
        return this.getNumberAttribute('max_retries');
    }
    // max_wait_time_ms - computed: true, optional: false, required: false
    get maxWaitTimeMs() {
        return this.getNumberAttribute('max_wait_time_ms');
    }
    // retry_delay - computed: true, optional: false, required: false
    get retryDelay() {
        return this.getNumberAttribute('retry_delay');
    }
    // visibility_timeout_ms - computed: true, optional: false, required: false
    get visibilityTimeoutMs() {
        return this.getNumberAttribute('visibility_timeout_ms');
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue_consumer cloudflare_queue_consumer}
*/
export class DataCloudflareQueueConsumer extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_queue_consumer";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareQueueConsumer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareQueueConsumer to import
    * @param importFromId The id of the existing DataCloudflareQueueConsumer that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue_consumer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareQueueConsumer to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_queue_consumer", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue_consumer cloudflare_queue_consumer} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareQueueConsumerConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_queue_consumer',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._accountId = config.accountId;
        this._queueId = config.queueId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: true, required: false
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // consumer_id - computed: true, optional: false, required: false
    get consumerId() {
        return this.getStringAttribute('consumer_id');
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // dead_letter_queue - computed: true, optional: false, required: false
    get deadLetterQueue() {
        return this.getStringAttribute('dead_letter_queue');
    }
    // queue_id - computed: false, optional: false, required: true
    _queueId;
    get queueId() {
        return this.getStringAttribute('queue_id');
    }
    set queueId(value) {
        this._queueId = value;
    }
    // Temporarily expose input value. Use with caution.
    get queueIdInput() {
        return this._queueId;
    }
    // queue_name - computed: true, optional: false, required: false
    get queueName() {
        return this.getStringAttribute('queue_name');
    }
    // script_name - computed: true, optional: false, required: false
    get scriptName() {
        return this.getStringAttribute('script_name');
    }
    // settings - computed: true, optional: false, required: false
    _settings = new DataCloudflareQueueConsumerSettingsOutputReference(this, "settings");
    get settings() {
        return this._settings;
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            queue_id: cdktf.stringToTerraform(this._queueId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            queue_id: {
                value: cdktf.stringToHclTerraform(this._queueId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
