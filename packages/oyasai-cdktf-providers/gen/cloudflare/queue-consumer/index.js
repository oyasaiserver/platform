"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue_consumer
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
exports.QueueConsumer = exports.QueueConsumerSettingsOutputReference = void 0;
exports.queueConsumerSettingsToTerraform = queueConsumerSettingsToTerraform;
exports.queueConsumerSettingsToHclTerraform = queueConsumerSettingsToHclTerraform;
var cdktf = require("cdktf");
function queueConsumerSettingsToTerraform(struct) {
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
function queueConsumerSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var QueueConsumerSettingsOutputReference = /** @class */ (function (_super) {
    __extends(QueueConsumerSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function QueueConsumerSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(QueueConsumerSettingsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
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
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumerSettingsOutputReference.prototype, "batchSize", {
        get: function () {
            return this.getNumberAttribute('batch_size');
        },
        set: function (value) {
            this._batchSize = value;
        },
        enumerable: false,
        configurable: true
    });
    QueueConsumerSettingsOutputReference.prototype.resetBatchSize = function () {
        this._batchSize = undefined;
    };
    Object.defineProperty(QueueConsumerSettingsOutputReference.prototype, "batchSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._batchSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumerSettingsOutputReference.prototype, "maxConcurrency", {
        get: function () {
            return this.getNumberAttribute('max_concurrency');
        },
        set: function (value) {
            this._maxConcurrency = value;
        },
        enumerable: false,
        configurable: true
    });
    QueueConsumerSettingsOutputReference.prototype.resetMaxConcurrency = function () {
        this._maxConcurrency = undefined;
    };
    Object.defineProperty(QueueConsumerSettingsOutputReference.prototype, "maxConcurrencyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxConcurrency;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumerSettingsOutputReference.prototype, "maxRetries", {
        get: function () {
            return this.getNumberAttribute('max_retries');
        },
        set: function (value) {
            this._maxRetries = value;
        },
        enumerable: false,
        configurable: true
    });
    QueueConsumerSettingsOutputReference.prototype.resetMaxRetries = function () {
        this._maxRetries = undefined;
    };
    Object.defineProperty(QueueConsumerSettingsOutputReference.prototype, "maxRetriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxRetries;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumerSettingsOutputReference.prototype, "maxWaitTimeMs", {
        get: function () {
            return this.getNumberAttribute('max_wait_time_ms');
        },
        set: function (value) {
            this._maxWaitTimeMs = value;
        },
        enumerable: false,
        configurable: true
    });
    QueueConsumerSettingsOutputReference.prototype.resetMaxWaitTimeMs = function () {
        this._maxWaitTimeMs = undefined;
    };
    Object.defineProperty(QueueConsumerSettingsOutputReference.prototype, "maxWaitTimeMsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxWaitTimeMs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumerSettingsOutputReference.prototype, "retryDelay", {
        get: function () {
            return this.getNumberAttribute('retry_delay');
        },
        set: function (value) {
            this._retryDelay = value;
        },
        enumerable: false,
        configurable: true
    });
    QueueConsumerSettingsOutputReference.prototype.resetRetryDelay = function () {
        this._retryDelay = undefined;
    };
    Object.defineProperty(QueueConsumerSettingsOutputReference.prototype, "retryDelayInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retryDelay;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumerSettingsOutputReference.prototype, "visibilityTimeoutMs", {
        get: function () {
            return this.getNumberAttribute('visibility_timeout_ms');
        },
        set: function (value) {
            this._visibilityTimeoutMs = value;
        },
        enumerable: false,
        configurable: true
    });
    QueueConsumerSettingsOutputReference.prototype.resetVisibilityTimeoutMs = function () {
        this._visibilityTimeoutMs = undefined;
    };
    Object.defineProperty(QueueConsumerSettingsOutputReference.prototype, "visibilityTimeoutMsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._visibilityTimeoutMs;
        },
        enumerable: false,
        configurable: true
    });
    return QueueConsumerSettingsOutputReference;
}(cdktf.ComplexObject));
exports.QueueConsumerSettingsOutputReference = QueueConsumerSettingsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/queue_consumer cloudflare_queue_consumer}
*/
var QueueConsumer = /** @class */ (function (_super) {
    __extends(QueueConsumer, _super);
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
    function QueueConsumer(scope, id, config) {
        var _this = _super.call(this, scope, id, {
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
        }) || this;
        // settings - computed: true, optional: true, required: false
        _this._settings = new QueueConsumerSettingsOutputReference(_this, "settings");
        _this._accountId = config.accountId;
        _this._deadLetterQueue = config.deadLetterQueue;
        _this._queueId = config.queueId;
        _this._scriptName = config.scriptName;
        _this._settings.internalValue = config.settings;
        _this._type = config.type;
        return _this;
    }
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
    QueueConsumer.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_queue_consumer", importId: importFromId, provider: provider });
    };
    Object.defineProperty(QueueConsumer.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    QueueConsumer.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(QueueConsumer.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumer.prototype, "consumerId", {
        // consumer_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('consumer_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumer.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumer.prototype, "deadLetterQueue", {
        get: function () {
            return this.getStringAttribute('dead_letter_queue');
        },
        set: function (value) {
            this._deadLetterQueue = value;
        },
        enumerable: false,
        configurable: true
    });
    QueueConsumer.prototype.resetDeadLetterQueue = function () {
        this._deadLetterQueue = undefined;
    };
    Object.defineProperty(QueueConsumer.prototype, "deadLetterQueueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deadLetterQueue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumer.prototype, "queueId", {
        get: function () {
            return this.getStringAttribute('queue_id');
        },
        set: function (value) {
            this._queueId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumer.prototype, "queueIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queueId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumer.prototype, "queueName", {
        // queue_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queue_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumer.prototype, "scriptName", {
        get: function () {
            return this.getStringAttribute('script_name');
        },
        set: function (value) {
            this._scriptName = value;
        },
        enumerable: false,
        configurable: true
    });
    QueueConsumer.prototype.resetScriptName = function () {
        this._scriptName = undefined;
    };
    Object.defineProperty(QueueConsumer.prototype, "scriptNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scriptName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumer.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        enumerable: false,
        configurable: true
    });
    QueueConsumer.prototype.putSettings = function (value) {
        this._settings.internalValue = value;
    };
    QueueConsumer.prototype.resetSettings = function () {
        this._settings.internalValue = undefined;
    };
    Object.defineProperty(QueueConsumer.prototype, "settingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._settings.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumer.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueConsumer.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    QueueConsumer.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            dead_letter_queue: cdktf.stringToTerraform(this._deadLetterQueue),
            queue_id: cdktf.stringToTerraform(this._queueId),
            script_name: cdktf.stringToTerraform(this._scriptName),
            settings: queueConsumerSettingsToTerraform(this._settings.internalValue),
            type: cdktf.stringToTerraform(this._type),
        };
    };
    QueueConsumer.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    QueueConsumer.tfResourceType = "cloudflare_queue_consumer";
    return QueueConsumer;
}(cdktf.TerraformResource));
exports.QueueConsumer = QueueConsumer;
