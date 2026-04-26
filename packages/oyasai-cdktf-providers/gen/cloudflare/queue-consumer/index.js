// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue_consumer
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function queueConsumerSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        batch_size: cdktf.numberToTerraform(struct.batchSize),
        max_concurrency: cdktf.numberToTerraform(struct.maxConcurrency),
        max_retries: cdktf.numberToTerraform(struct.maxRetries),
        max_wait_time_ms: cdktf.numberToTerraform(struct.maxWaitTimeMs),
        retry_delay: cdktf.numberToTerraform(struct.retryDelay),
        visibility_timeout_ms: cdktf.numberToTerraform(struct.visibilityTimeoutMs),
    };
}
export function queueConsumerSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        batch_size: {
            value: cdktf.numberToHclTerraform(struct.batchSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_concurrency: {
            value: cdktf.numberToHclTerraform(struct.maxConcurrency),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_retries: {
            value: cdktf.numberToHclTerraform(struct.maxRetries),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_wait_time_ms: {
            value: cdktf.numberToHclTerraform(struct.maxWaitTimeMs),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        retry_delay: {
            value: cdktf.numberToHclTerraform(struct.retryDelay),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        visibility_timeout_ms: {
            value: cdktf.numberToHclTerraform(struct.visibilityTimeoutMs),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class QueueConsumerSettingsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._batchSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchSize = this._batchSize;
        }
        if (this._maxConcurrency !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxConcurrency = this._maxConcurrency;
        }
        if (this._maxRetries !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxRetries = this._maxRetries;
        }
        if (this._maxWaitTimeMs !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxWaitTimeMs = this._maxWaitTimeMs;
        }
        if (this._retryDelay !== undefined) {
            hasAnyValues = true;
            internalValueResult.retryDelay = this._retryDelay;
        }
        if (this._visibilityTimeoutMs !== undefined) {
            hasAnyValues = true;
            internalValueResult.visibilityTimeoutMs = this._visibilityTimeoutMs;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._batchSize = undefined;
            this._maxConcurrency = undefined;
            this._maxRetries = undefined;
            this._maxWaitTimeMs = undefined;
            this._retryDelay = undefined;
            this._visibilityTimeoutMs = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._batchSize = value.batchSize;
            this._maxConcurrency = value.maxConcurrency;
            this._maxRetries = value.maxRetries;
            this._maxWaitTimeMs = value.maxWaitTimeMs;
            this._retryDelay = value.retryDelay;
            this._visibilityTimeoutMs = value.visibilityTimeoutMs;
        }
    }
    // batch_size - computed: true, optional: true, required: false
    _batchSize;
    get batchSize() {
        return this.getNumberAttribute('batch_size');
    }
    set batchSize(value) {
        this._batchSize = value;
    }
    resetBatchSize() {
        this._batchSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get batchSizeInput() {
        return this._batchSize;
    }
    // max_concurrency - computed: true, optional: true, required: false
    _maxConcurrency;
    get maxConcurrency() {
        return this.getNumberAttribute('max_concurrency');
    }
    set maxConcurrency(value) {
        this._maxConcurrency = value;
    }
    resetMaxConcurrency() {
        this._maxConcurrency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxConcurrencyInput() {
        return this._maxConcurrency;
    }
    // max_retries - computed: true, optional: true, required: false
    _maxRetries;
    get maxRetries() {
        return this.getNumberAttribute('max_retries');
    }
    set maxRetries(value) {
        this._maxRetries = value;
    }
    resetMaxRetries() {
        this._maxRetries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxRetriesInput() {
        return this._maxRetries;
    }
    // max_wait_time_ms - computed: true, optional: true, required: false
    _maxWaitTimeMs;
    get maxWaitTimeMs() {
        return this.getNumberAttribute('max_wait_time_ms');
    }
    set maxWaitTimeMs(value) {
        this._maxWaitTimeMs = value;
    }
    resetMaxWaitTimeMs() {
        this._maxWaitTimeMs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxWaitTimeMsInput() {
        return this._maxWaitTimeMs;
    }
    // retry_delay - computed: true, optional: true, required: false
    _retryDelay;
    get retryDelay() {
        return this.getNumberAttribute('retry_delay');
    }
    set retryDelay(value) {
        this._retryDelay = value;
    }
    resetRetryDelay() {
        this._retryDelay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retryDelayInput() {
        return this._retryDelay;
    }
    // visibility_timeout_ms - computed: true, optional: true, required: false
    _visibilityTimeoutMs;
    get visibilityTimeoutMs() {
        return this.getNumberAttribute('visibility_timeout_ms');
    }
    set visibilityTimeoutMs(value) {
        this._visibilityTimeoutMs = value;
    }
    resetVisibilityTimeoutMs() {
        this._visibilityTimeoutMs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get visibilityTimeoutMsInput() {
        return this._visibilityTimeoutMs;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue_consumer cloudflare_queue_consumer}
*/
export class QueueConsumer extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_queue_consumer";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a QueueConsumer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the QueueConsumer to import
    * @param importFromId The id of the existing QueueConsumer that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue_consumer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the QueueConsumer to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_queue_consumer", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue_consumer cloudflare_queue_consumer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QueueConsumerConfig
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
        this._deadLetterQueue = config.deadLetterQueue;
        this._queueId = config.queueId;
        this._scriptName = config.scriptName;
        this._settings.internalValue = config.settings;
        this._type = config.type;
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
    // dead_letter_queue - computed: false, optional: true, required: false
    _deadLetterQueue;
    get deadLetterQueue() {
        return this.getStringAttribute('dead_letter_queue');
    }
    set deadLetterQueue(value) {
        this._deadLetterQueue = value;
    }
    resetDeadLetterQueue() {
        this._deadLetterQueue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deadLetterQueueInput() {
        return this._deadLetterQueue;
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
    // script_name - computed: true, optional: true, required: false
    _scriptName;
    get scriptName() {
        return this.getStringAttribute('script_name');
    }
    set scriptName(value) {
        this._scriptName = value;
    }
    resetScriptName() {
        this._scriptName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scriptNameInput() {
        return this._scriptName;
    }
    // settings - computed: true, optional: true, required: false
    _settings = new QueueConsumerSettingsOutputReference(this, "settings");
    get settings() {
        return this._settings;
    }
    putSettings(value) {
        this._settings.internalValue = value;
    }
    resetSettings() {
        this._settings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get settingsInput() {
        return this._settings.internalValue;
    }
    // type - computed: false, optional: false, required: true
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            dead_letter_queue: cdktf.stringToTerraform(this._deadLetterQueue),
            queue_id: cdktf.stringToTerraform(this._queueId),
            script_name: cdktf.stringToTerraform(this._scriptName),
            settings: queueConsumerSettingsToTerraform(this._settings.internalValue),
            type: cdktf.stringToTerraform(this._type),
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
            dead_letter_queue: {
                value: cdktf.stringToHclTerraform(this._deadLetterQueue),
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
            script_name: {
                value: cdktf.stringToHclTerraform(this._scriptName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            settings: {
                value: queueConsumerSettingsToHclTerraform(this._settings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "QueueConsumerSettings",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
