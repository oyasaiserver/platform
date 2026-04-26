"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = exports.QueueSettingsOutputReference = exports.QueueProducersList = exports.QueueProducersOutputReference = exports.QueueConsumersList = exports.QueueConsumersOutputReference = exports.QueueConsumersSettingsOutputReference = void 0;
exports.queueConsumersSettingsToTerraform = queueConsumersSettingsToTerraform;
exports.queueConsumersSettingsToHclTerraform = queueConsumersSettingsToHclTerraform;
exports.queueConsumersToTerraform = queueConsumersToTerraform;
exports.queueConsumersToHclTerraform = queueConsumersToHclTerraform;
exports.queueProducersToTerraform = queueProducersToTerraform;
exports.queueProducersToHclTerraform = queueProducersToHclTerraform;
exports.queueSettingsToTerraform = queueSettingsToTerraform;
exports.queueSettingsToHclTerraform = queueSettingsToHclTerraform;
var cdktf = require("cdktf");
function queueConsumersSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function queueConsumersSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var QueueConsumersSettingsOutputReference = /** @class */ (function (_super) {
    __extends(QueueConsumersSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function QueueConsumersSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(QueueConsumersSettingsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumersSettingsOutputReference.prototype, "batchSize", {
        // batch_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('batch_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumersSettingsOutputReference.prototype, "maxConcurrency", {
        // max_concurrency - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_concurrency');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumersSettingsOutputReference.prototype, "maxRetries", {
        // max_retries - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_retries');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumersSettingsOutputReference.prototype, "maxWaitTimeMs", {
        // max_wait_time_ms - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_wait_time_ms');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumersSettingsOutputReference.prototype, "retryDelay", {
        // retry_delay - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('retry_delay');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumersSettingsOutputReference.prototype, "visibilityTimeoutMs", {
        // visibility_timeout_ms - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('visibility_timeout_ms');
        },
        enumerable: false,
        configurable: true
    });
    return QueueConsumersSettingsOutputReference;
}(cdktf.ComplexObject));
exports.QueueConsumersSettingsOutputReference = QueueConsumersSettingsOutputReference;
function queueConsumersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function queueConsumersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var QueueConsumersOutputReference = /** @class */ (function (_super) {
    __extends(QueueConsumersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function QueueConsumersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // settings - computed: true, optional: false, required: false
        _this._settings = new QueueConsumersSettingsOutputReference(_this, "settings");
        return _this;
    }
    Object.defineProperty(QueueConsumersOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumersOutputReference.prototype, "consumerId", {
        // consumer_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('consumer_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumersOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumersOutputReference.prototype, "deadLetterQueue", {
        // dead_letter_queue - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dead_letter_queue');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumersOutputReference.prototype, "queueName", {
        // queue_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queue_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumersOutputReference.prototype, "scriptName", {
        // script_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('script_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumersOutputReference.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumersOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return QueueConsumersOutputReference;
}(cdktf.ComplexObject));
exports.QueueConsumersOutputReference = QueueConsumersOutputReference;
var QueueConsumersList = /** @class */ (function (_super) {
    __extends(QueueConsumersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function QueueConsumersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    QueueConsumersList.prototype.get = function (index) {
        return new QueueConsumersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return QueueConsumersList;
}(cdktf.ComplexList));
exports.QueueConsumersList = QueueConsumersList;
function queueProducersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function queueProducersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var QueueProducersOutputReference = /** @class */ (function (_super) {
    __extends(QueueProducersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function QueueProducersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(QueueProducersOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueProducersOutputReference.prototype, "bucketName", {
        // bucket_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bucket_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueProducersOutputReference.prototype, "script", {
        // script - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('script');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueProducersOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return QueueProducersOutputReference;
}(cdktf.ComplexObject));
exports.QueueProducersOutputReference = QueueProducersOutputReference;
var QueueProducersList = /** @class */ (function (_super) {
    __extends(QueueProducersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function QueueProducersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    QueueProducersList.prototype.get = function (index) {
        return new QueueProducersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return QueueProducersList;
}(cdktf.ComplexList));
exports.QueueProducersList = QueueProducersList;
function queueSettingsToTerraform(struct) {
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
function queueSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var QueueSettingsOutputReference = /** @class */ (function (_super) {
    __extends(QueueSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function QueueSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(QueueSettingsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
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
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueSettingsOutputReference.prototype, "deliveryDelay", {
        get: function () {
            return this.getNumberAttribute('delivery_delay');
        },
        set: function (value) {
            this._deliveryDelay = value;
        },
        enumerable: false,
        configurable: true
    });
    QueueSettingsOutputReference.prototype.resetDeliveryDelay = function () {
        this._deliveryDelay = undefined;
    };
    Object.defineProperty(QueueSettingsOutputReference.prototype, "deliveryDelayInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deliveryDelay;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueSettingsOutputReference.prototype, "deliveryPaused", {
        get: function () {
            return this.getBooleanAttribute('delivery_paused');
        },
        set: function (value) {
            this._deliveryPaused = value;
        },
        enumerable: false,
        configurable: true
    });
    QueueSettingsOutputReference.prototype.resetDeliveryPaused = function () {
        this._deliveryPaused = undefined;
    };
    Object.defineProperty(QueueSettingsOutputReference.prototype, "deliveryPausedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deliveryPaused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueSettingsOutputReference.prototype, "messageRetentionPeriod", {
        get: function () {
            return this.getNumberAttribute('message_retention_period');
        },
        set: function (value) {
            this._messageRetentionPeriod = value;
        },
        enumerable: false,
        configurable: true
    });
    QueueSettingsOutputReference.prototype.resetMessageRetentionPeriod = function () {
        this._messageRetentionPeriod = undefined;
    };
    Object.defineProperty(QueueSettingsOutputReference.prototype, "messageRetentionPeriodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._messageRetentionPeriod;
        },
        enumerable: false,
        configurable: true
    });
    return QueueSettingsOutputReference;
}(cdktf.ComplexObject));
exports.QueueSettingsOutputReference = QueueSettingsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue cloudflare_queue}
*/
var Queue = /** @class */ (function (_super) {
    __extends(Queue, _super);
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
    function Queue(scope, id, config) {
        var _this = _super.call(this, scope, id, {
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
        }) || this;
        // consumers - computed: true, optional: false, required: false
        _this._consumers = new QueueConsumersList(_this, "consumers", false);
        // producers - computed: true, optional: false, required: false
        _this._producers = new QueueProducersList(_this, "producers", false);
        // settings - computed: true, optional: true, required: false
        _this._settings = new QueueSettingsOutputReference(_this, "settings");
        _this._accountId = config.accountId;
        _this._queueName = config.queueName;
        _this._settings.internalValue = config.settings;
        return _this;
    }
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
    Queue.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_queue", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Queue.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(Queue.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "consumers", {
        get: function () {
            return this._consumers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "consumersTotalCount", {
        // consumers_total_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('consumers_total_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "producers", {
        get: function () {
            return this._producers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "producersTotalCount", {
        // producers_total_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('producers_total_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "queueId", {
        // queue_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queue_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "queueName", {
        get: function () {
            return this.getStringAttribute('queue_name');
        },
        set: function (value) {
            this._queueName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "queueNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queueName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.putSettings = function (value) {
        this._settings.internalValue = value;
    };
    Queue.prototype.resetSettings = function () {
        this._settings.internalValue = undefined;
    };
    Object.defineProperty(Queue.prototype, "settingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._settings.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Queue.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            queue_name: cdktf.stringToTerraform(this._queueName),
            settings: queueSettingsToTerraform(this._settings.internalValue),
        };
    };
    Queue.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Queue.tfResourceType = "cloudflare_queue";
    return Queue;
}(cdktf.TerraformResource));
exports.Queue = Queue;
