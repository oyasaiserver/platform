"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue_consumer
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
exports.DataCloudflareQueueConsumer = exports.DataCloudflareQueueConsumerSettingsOutputReference = void 0;
exports.dataCloudflareQueueConsumerSettingsToTerraform = dataCloudflareQueueConsumerSettingsToTerraform;
exports.dataCloudflareQueueConsumerSettingsToHclTerraform = dataCloudflareQueueConsumerSettingsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareQueueConsumerSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareQueueConsumerSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareQueueConsumerSettingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareQueueConsumerSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareQueueConsumerSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareQueueConsumerSettingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareQueueConsumerSettingsOutputReference.prototype, "batchSize", {
        // batch_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('batch_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumerSettingsOutputReference.prototype, "maxConcurrency", {
        // max_concurrency - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_concurrency');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumerSettingsOutputReference.prototype, "maxRetries", {
        // max_retries - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_retries');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumerSettingsOutputReference.prototype, "maxWaitTimeMs", {
        // max_wait_time_ms - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_wait_time_ms');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumerSettingsOutputReference.prototype, "retryDelay", {
        // retry_delay - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('retry_delay');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumerSettingsOutputReference.prototype, "visibilityTimeoutMs", {
        // visibility_timeout_ms - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('visibility_timeout_ms');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareQueueConsumerSettingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareQueueConsumerSettingsOutputReference = DataCloudflareQueueConsumerSettingsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue_consumer cloudflare_queue_consumer}
*/
var DataCloudflareQueueConsumer = /** @class */ (function (_super) {
    __extends(DataCloudflareQueueConsumer, _super);
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
    function DataCloudflareQueueConsumer(scope, id, config) {
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
        // settings - computed: true, optional: false, required: false
        _this._settings = new DataCloudflareQueueConsumerSettingsOutputReference(_this, "settings");
        _this._accountId = config.accountId;
        _this._queueId = config.queueId;
        return _this;
    }
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
    DataCloudflareQueueConsumer.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_queue_consumer", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareQueueConsumer.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareQueueConsumer.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareQueueConsumer.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumer.prototype, "consumerId", {
        // consumer_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('consumer_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumer.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumer.prototype, "deadLetterQueue", {
        // dead_letter_queue - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dead_letter_queue');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumer.prototype, "queueId", {
        get: function () {
            return this.getStringAttribute('queue_id');
        },
        set: function (value) {
            this._queueId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumer.prototype, "queueIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queueId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumer.prototype, "queueName", {
        // queue_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queue_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumer.prototype, "scriptName", {
        // script_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('script_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumer.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumer.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareQueueConsumer.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            queue_id: cdktf.stringToTerraform(this._queueId),
        };
    };
    DataCloudflareQueueConsumer.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataCloudflareQueueConsumer.tfResourceType = "cloudflare_queue_consumer";
    return DataCloudflareQueueConsumer;
}(cdktf.TerraformDataSource));
exports.DataCloudflareQueueConsumer = DataCloudflareQueueConsumer;
