"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue
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
exports.DataCloudflareQueue = exports.DataCloudflareQueueSettingsOutputReference = exports.DataCloudflareQueueProducersList = exports.DataCloudflareQueueProducersOutputReference = exports.DataCloudflareQueueConsumersList = exports.DataCloudflareQueueConsumersOutputReference = exports.DataCloudflareQueueConsumersSettingsOutputReference = void 0;
exports.dataCloudflareQueueConsumersSettingsToTerraform = dataCloudflareQueueConsumersSettingsToTerraform;
exports.dataCloudflareQueueConsumersSettingsToHclTerraform = dataCloudflareQueueConsumersSettingsToHclTerraform;
exports.dataCloudflareQueueConsumersToTerraform = dataCloudflareQueueConsumersToTerraform;
exports.dataCloudflareQueueConsumersToHclTerraform = dataCloudflareQueueConsumersToHclTerraform;
exports.dataCloudflareQueueProducersToTerraform = dataCloudflareQueueProducersToTerraform;
exports.dataCloudflareQueueProducersToHclTerraform = dataCloudflareQueueProducersToHclTerraform;
exports.dataCloudflareQueueSettingsToTerraform = dataCloudflareQueueSettingsToTerraform;
exports.dataCloudflareQueueSettingsToHclTerraform = dataCloudflareQueueSettingsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareQueueConsumersSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareQueueConsumersSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareQueueConsumersSettingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareQueueConsumersSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareQueueConsumersSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareQueueConsumersSettingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareQueueConsumersSettingsOutputReference.prototype, "batchSize", {
        // batch_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('batch_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersSettingsOutputReference.prototype, "maxConcurrency", {
        // max_concurrency - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_concurrency');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersSettingsOutputReference.prototype, "maxRetries", {
        // max_retries - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_retries');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersSettingsOutputReference.prototype, "maxWaitTimeMs", {
        // max_wait_time_ms - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_wait_time_ms');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersSettingsOutputReference.prototype, "retryDelay", {
        // retry_delay - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('retry_delay');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersSettingsOutputReference.prototype, "visibilityTimeoutMs", {
        // visibility_timeout_ms - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('visibility_timeout_ms');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareQueueConsumersSettingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareQueueConsumersSettingsOutputReference = DataCloudflareQueueConsumersSettingsOutputReference;
function dataCloudflareQueueConsumersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareQueueConsumersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareQueueConsumersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareQueueConsumersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareQueueConsumersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // settings - computed: true, optional: false, required: false
        _this._settings = new DataCloudflareQueueConsumersSettingsOutputReference(_this, "settings");
        return _this;
    }
    Object.defineProperty(DataCloudflareQueueConsumersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareQueueConsumersOutputReference.prototype, "consumerId", {
        // consumer_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('consumer_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersOutputReference.prototype, "deadLetterQueue", {
        // dead_letter_queue - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dead_letter_queue');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersOutputReference.prototype, "queueName", {
        // queue_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queue_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersOutputReference.prototype, "scriptName", {
        // script_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('script_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersOutputReference.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareQueueConsumersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareQueueConsumersOutputReference = DataCloudflareQueueConsumersOutputReference;
var DataCloudflareQueueConsumersList = /** @class */ (function (_super) {
    __extends(DataCloudflareQueueConsumersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareQueueConsumersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareQueueConsumersList.prototype.get = function (index) {
        return new DataCloudflareQueueConsumersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareQueueConsumersList;
}(cdktf.ComplexList));
exports.DataCloudflareQueueConsumersList = DataCloudflareQueueConsumersList;
function dataCloudflareQueueProducersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareQueueProducersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareQueueProducersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareQueueProducersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareQueueProducersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareQueueProducersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareQueueProducersOutputReference.prototype, "bucketName", {
        // bucket_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bucket_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueProducersOutputReference.prototype, "script", {
        // script - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('script');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueProducersOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareQueueProducersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareQueueProducersOutputReference = DataCloudflareQueueProducersOutputReference;
var DataCloudflareQueueProducersList = /** @class */ (function (_super) {
    __extends(DataCloudflareQueueProducersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareQueueProducersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareQueueProducersList.prototype.get = function (index) {
        return new DataCloudflareQueueProducersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareQueueProducersList;
}(cdktf.ComplexList));
exports.DataCloudflareQueueProducersList = DataCloudflareQueueProducersList;
function dataCloudflareQueueSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareQueueSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareQueueSettingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareQueueSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareQueueSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareQueueSettingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareQueueSettingsOutputReference.prototype, "deliveryDelay", {
        // delivery_delay - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('delivery_delay');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueSettingsOutputReference.prototype, "deliveryPaused", {
        // delivery_paused - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('delivery_paused');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueSettingsOutputReference.prototype, "messageRetentionPeriod", {
        // message_retention_period - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('message_retention_period');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareQueueSettingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareQueueSettingsOutputReference = DataCloudflareQueueSettingsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue cloudflare_queue}
*/
var DataCloudflareQueue = /** @class */ (function (_super) {
    __extends(DataCloudflareQueue, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue cloudflare_queue} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareQueueConfig
    */
    function DataCloudflareQueue(scope, id, config) {
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
        _this._consumers = new DataCloudflareQueueConsumersList(_this, "consumers", false);
        // producers - computed: true, optional: false, required: false
        _this._producers = new DataCloudflareQueueProducersList(_this, "producers", false);
        // settings - computed: true, optional: false, required: false
        _this._settings = new DataCloudflareQueueSettingsOutputReference(_this, "settings");
        _this._accountId = config.accountId;
        _this._queueId = config.queueId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareQueue resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareQueue to import
    * @param importFromId The id of the existing DataCloudflareQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareQueue to import is found
    */
    DataCloudflareQueue.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_queue", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareQueue.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareQueue.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareQueue.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueue.prototype, "consumers", {
        get: function () {
            return this._consumers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueue.prototype, "consumersTotalCount", {
        // consumers_total_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('consumers_total_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueue.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueue.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueue.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueue.prototype, "producers", {
        get: function () {
            return this._producers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueue.prototype, "producersTotalCount", {
        // producers_total_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('producers_total_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueue.prototype, "queueId", {
        get: function () {
            return this.getStringAttribute('queue_id');
        },
        set: function (value) {
            this._queueId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueue.prototype, "queueIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queueId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueue.prototype, "queueName", {
        // queue_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queue_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueue.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareQueue.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            queue_id: cdktf.stringToTerraform(this._queueId),
        };
    };
    DataCloudflareQueue.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareQueue.tfResourceType = "cloudflare_queue";
    return DataCloudflareQueue;
}(cdktf.TerraformDataSource));
exports.DataCloudflareQueue = DataCloudflareQueue;
