// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function queueConsumersSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function queueConsumersSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class QueueConsumersSettingsOutputReference extends cdktf.ComplexObject {
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
export function queueConsumersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function queueConsumersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class QueueConsumersOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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
    // queue_name - computed: true, optional: false, required: false
    get queueName() {
        return this.getStringAttribute('queue_name');
    }
    // script_name - computed: true, optional: false, required: false
    get scriptName() {
        return this.getStringAttribute('script_name');
    }
    // settings - computed: true, optional: false, required: false
    _settings = new QueueConsumersSettingsOutputReference(this, "settings");
    get settings() {
        return this._settings;
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
export class QueueConsumersList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new QueueConsumersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function queueProducersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function queueProducersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class QueueProducersOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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
    // bucket_name - computed: true, optional: false, required: false
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    // script - computed: true, optional: false, required: false
    get script() {
        return this.getStringAttribute('script');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
export class QueueProducersList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new QueueProducersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function queueSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        delivery_delay: cdktf.numberToTerraform(struct.deliveryDelay),
        delivery_paused: cdktf.booleanToTerraform(struct.deliveryPaused),
        message_retention_period: cdktf.numberToTerraform(struct.messageRetentionPeriod),
    };
}
export function queueSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        delivery_delay: {
            value: cdktf.numberToHclTerraform(struct.deliveryDelay),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        delivery_paused: {
            value: cdktf.booleanToHclTerraform(struct.deliveryPaused),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        message_retention_period: {
            value: cdktf.numberToHclTerraform(struct.messageRetentionPeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class QueueSettingsOutputReference extends cdktf.ComplexObject {
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
        if (this._deliveryDelay !== undefined) {
            hasAnyValues = true;
            internalValueResult.deliveryDelay = this._deliveryDelay;
        }
        if (this._deliveryPaused !== undefined) {
            hasAnyValues = true;
            internalValueResult.deliveryPaused = this._deliveryPaused;
        }
        if (this._messageRetentionPeriod !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageRetentionPeriod = this._messageRetentionPeriod;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deliveryDelay = undefined;
            this._deliveryPaused = undefined;
            this._messageRetentionPeriod = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deliveryDelay = value.deliveryDelay;
            this._deliveryPaused = value.deliveryPaused;
            this._messageRetentionPeriod = value.messageRetentionPeriod;
        }
    }
    // delivery_delay - computed: true, optional: true, required: false
    _deliveryDelay;
    get deliveryDelay() {
        return this.getNumberAttribute('delivery_delay');
    }
    set deliveryDelay(value) {
        this._deliveryDelay = value;
    }
    resetDeliveryDelay() {
        this._deliveryDelay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deliveryDelayInput() {
        return this._deliveryDelay;
    }
    // delivery_paused - computed: true, optional: true, required: false
    _deliveryPaused;
    get deliveryPaused() {
        return this.getBooleanAttribute('delivery_paused');
    }
    set deliveryPaused(value) {
        this._deliveryPaused = value;
    }
    resetDeliveryPaused() {
        this._deliveryPaused = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deliveryPausedInput() {
        return this._deliveryPaused;
    }
    // message_retention_period - computed: true, optional: true, required: false
    _messageRetentionPeriod;
    get messageRetentionPeriod() {
        return this.getNumberAttribute('message_retention_period');
    }
    set messageRetentionPeriod(value) {
        this._messageRetentionPeriod = value;
    }
    resetMessageRetentionPeriod() {
        this._messageRetentionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get messageRetentionPeriodInput() {
        return this._messageRetentionPeriod;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue cloudflare_queue}
*/
export class Queue extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_queue";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Queue resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Queue to import
    * @param importFromId The id of the existing Queue that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Queue to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_queue", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue cloudflare_queue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QueueConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_queue',
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
        this._queueName = config.queueName;
        this._settings.internalValue = config.settings;
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
    // consumers - computed: true, optional: false, required: false
    _consumers = new QueueConsumersList(this, "consumers", false);
    get consumers() {
        return this._consumers;
    }
    // consumers_total_count - computed: true, optional: false, required: false
    get consumersTotalCount() {
        return this.getNumberAttribute('consumers_total_count');
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // producers - computed: true, optional: false, required: false
    _producers = new QueueProducersList(this, "producers", false);
    get producers() {
        return this._producers;
    }
    // producers_total_count - computed: true, optional: false, required: false
    get producersTotalCount() {
        return this.getNumberAttribute('producers_total_count');
    }
    // queue_id - computed: true, optional: false, required: false
    get queueId() {
        return this.getStringAttribute('queue_id');
    }
    // queue_name - computed: false, optional: false, required: true
    _queueName;
    get queueName() {
        return this.getStringAttribute('queue_name');
    }
    set queueName(value) {
        this._queueName = value;
    }
    // Temporarily expose input value. Use with caution.
    get queueNameInput() {
        return this._queueName;
    }
    // settings - computed: true, optional: true, required: false
    _settings = new QueueSettingsOutputReference(this, "settings");
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            queue_name: cdktf.stringToTerraform(this._queueName),
            settings: queueSettingsToTerraform(this._settings.internalValue),
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
            queue_name: {
                value: cdktf.stringToHclTerraform(this._queueName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            settings: {
                value: queueSettingsToHclTerraform(this._settings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "QueueSettings",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
