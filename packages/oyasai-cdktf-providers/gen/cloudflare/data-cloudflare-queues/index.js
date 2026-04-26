"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queues
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
exports.DataCloudflareQueues = exports.DataCloudflareQueuesResultList = exports.DataCloudflareQueuesResultOutputReference = exports.DataCloudflareQueuesResultSettingsOutputReference = exports.DataCloudflareQueuesResultProducersList = exports.DataCloudflareQueuesResultProducersOutputReference = exports.DataCloudflareQueuesResultConsumersList = exports.DataCloudflareQueuesResultConsumersOutputReference = exports.DataCloudflareQueuesResultConsumersSettingsOutputReference = void 0;
exports.dataCloudflareQueuesResultConsumersSettingsToTerraform = dataCloudflareQueuesResultConsumersSettingsToTerraform;
exports.dataCloudflareQueuesResultConsumersSettingsToHclTerraform = dataCloudflareQueuesResultConsumersSettingsToHclTerraform;
exports.dataCloudflareQueuesResultConsumersToTerraform = dataCloudflareQueuesResultConsumersToTerraform;
exports.dataCloudflareQueuesResultConsumersToHclTerraform = dataCloudflareQueuesResultConsumersToHclTerraform;
exports.dataCloudflareQueuesResultProducersToTerraform = dataCloudflareQueuesResultProducersToTerraform;
exports.dataCloudflareQueuesResultProducersToHclTerraform = dataCloudflareQueuesResultProducersToHclTerraform;
exports.dataCloudflareQueuesResultSettingsToTerraform = dataCloudflareQueuesResultSettingsToTerraform;
exports.dataCloudflareQueuesResultSettingsToHclTerraform = dataCloudflareQueuesResultSettingsToHclTerraform;
exports.dataCloudflareQueuesResultToTerraform = dataCloudflareQueuesResultToTerraform;
exports.dataCloudflareQueuesResultToHclTerraform = dataCloudflareQueuesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareQueuesResultConsumersSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareQueuesResultConsumersSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareQueuesResultConsumersSettingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareQueuesResultConsumersSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareQueuesResultConsumersSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareQueuesResultConsumersSettingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareQueuesResultConsumersSettingsOutputReference.prototype, "batchSize", {
        // batch_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('batch_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueuesResultConsumersSettingsOutputReference.prototype, "maxConcurrency", {
        // max_concurrency - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_concurrency');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueuesResultConsumersSettingsOutputReference.prototype, "maxRetries", {
        // max_retries - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_retries');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueuesResultConsumersSettingsOutputReference.prototype, "maxWaitTimeMs", {
        // max_wait_time_ms - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_wait_time_ms');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueuesResultConsumersSettingsOutputReference.prototype, "retryDelay", {
        // retry_delay - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('retry_delay');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueuesResultConsumersSettingsOutputReference.prototype, "visibilityTimeoutMs", {
        // visibility_timeout_ms - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('visibility_timeout_ms');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareQueuesResultConsumersSettingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareQueuesResultConsumersSettingsOutputReference = DataCloudflareQueuesResultConsumersSettingsOutputReference;
function dataCloudflareQueuesResultConsumersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareQueuesResultConsumersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareQueuesResultConsumersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareQueuesResultConsumersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareQueuesResultConsumersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // settings - computed: true, optional: false, required: false
        _this._settings = new DataCloudflareQueuesResultConsumersSettingsOutputReference(_this, "settings");
        return _this;
    }
    Object.defineProperty(DataCloudflareQueuesResultConsumersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareQueuesResultConsumersOutputReference.prototype, "consumerId", {
        // consumer_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('consumer_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueuesResultConsumersOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueuesResultConsumersOutputReference.prototype, "deadLetterQueue", {
        // dead_letter_queue - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dead_letter_queue');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueuesResultConsumersOutputReference.prototype, "queueName", {
        // queue_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queue_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueuesResultConsumersOutputReference.prototype, "scriptName", {
        // script_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('script_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueuesResultConsumersOutputReference.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueuesResultConsumersOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareQueuesResultConsumersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareQueuesResultConsumersOutputReference = DataCloudflareQueuesResultConsumersOutputReference;
var DataCloudflareQueuesResultConsumersList = /** @class */ (function (_super) {
    __extends(DataCloudflareQueuesResultConsumersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareQueuesResultConsumersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareQueuesResultConsumersList.prototype.get = function (index) {
        return new DataCloudflareQueuesResultConsumersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareQueuesResultConsumersList;
}(cdktf.ComplexList));
exports.DataCloudflareQueuesResultConsumersList = DataCloudflareQueuesResultConsumersList;
function dataCloudflareQueuesResultProducersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareQueuesResultProducersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareQueuesResultProducersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareQueuesResultProducersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareQueuesResultProducersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareQueuesResultProducersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareQueuesResultProducersOutputReference.prototype, "bucketName", {
        // bucket_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bucket_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueuesResultProducersOutputReference.prototype, "script", {
        // script - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('script');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueuesResultProducersOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareQueuesResultProducersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareQueuesResultProducersOutputReference = DataCloudflareQueuesResultProducersOutputReference;
var DataCloudflareQueuesResultProducersList = /** @class */ (function (_super) {
    __extends(DataCloudflareQueuesResultProducersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareQueuesResultProducersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareQueuesResultProducersList.prototype.get = function (index) {
        return new DataCloudflareQueuesResultProducersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareQueuesResultProducersList;
}(cdktf.ComplexList));
exports.DataCloudflareQueuesResultProducersList = DataCloudflareQueuesResultProducersList;
function dataCloudflareQueuesResultSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareQueuesResultSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareQueuesResultSettingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareQueuesResultSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareQueuesResultSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareQueuesResultSettingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareQueuesResultSettingsOutputReference.prototype, "deliveryDelay", {
        // delivery_delay - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('delivery_delay');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueuesResultSettingsOutputReference.prototype, "deliveryPaused", {
        // delivery_paused - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('delivery_paused');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueuesResultSettingsOutputReference.prototype, "messageRetentionPeriod", {
        // message_retention_period - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('message_retention_period');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareQueuesResultSettingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareQueuesResultSettingsOutputReference = DataCloudflareQueuesResultSettingsOutputReference;
function dataCloudflareQueuesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareQueuesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareQueuesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareQueuesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareQueuesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // consumers - computed: true, optional: false, required: false
        _this._consumers = new DataCloudflareQueuesResultConsumersList(_this, "consumers", false);
        // producers - computed: true, optional: false, required: false
        _this._producers = new DataCloudflareQueuesResultProducersList(_this, "producers", false);
        // settings - computed: true, optional: false, required: false
        _this._settings = new DataCloudflareQueuesResultSettingsOutputReference(_this, "settings");
        return _this;
    }
    Object.defineProperty(DataCloudflareQueuesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareQueuesResultOutputReference.prototype, "consumers", {
        get: function () {
            return this._consumers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueuesResultOutputReference.prototype, "consumersTotalCount", {
        // consumers_total_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('consumers_total_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueuesResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueuesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueuesResultOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueuesResultOutputReference.prototype, "producers", {
        get: function () {
            return this._producers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueuesResultOutputReference.prototype, "producersTotalCount", {
        // producers_total_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('producers_total_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueuesResultOutputReference.prototype, "queueId", {
        // queue_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queue_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueuesResultOutputReference.prototype, "queueName", {
        // queue_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queue_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueuesResultOutputReference.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareQueuesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareQueuesResultOutputReference = DataCloudflareQueuesResultOutputReference;
var DataCloudflareQueuesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareQueuesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareQueuesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareQueuesResultList.prototype.get = function (index) {
        return new DataCloudflareQueuesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareQueuesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareQueuesResultList = DataCloudflareQueuesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queues cloudflare_queues}
*/
var DataCloudflareQueues = /** @class */ (function (_super) {
    __extends(DataCloudflareQueues, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queues cloudflare_queues} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareQueuesConfig = {}
    */
    function DataCloudflareQueues(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_queues',
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
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareQueuesResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareQueues resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareQueues to import
    * @param importFromId The id of the existing DataCloudflareQueues that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queues#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareQueues to import is found
    */
    DataCloudflareQueues.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_queues", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareQueues.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareQueues.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareQueues.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueues.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareQueues.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareQueues.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueues.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareQueues.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareQueues.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
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
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataCloudflareQueues.tfResourceType = "cloudflare_queues";
    return DataCloudflareQueues;
}(cdktf.TerraformDataSource));
exports.DataCloudflareQueues = DataCloudflareQueues;
