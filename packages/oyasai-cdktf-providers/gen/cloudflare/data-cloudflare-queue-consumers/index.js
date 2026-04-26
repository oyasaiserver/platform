"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue_consumers
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
exports.DataCloudflareQueueConsumersA = exports.DataCloudflareQueueConsumersResultList = exports.DataCloudflareQueueConsumersResultOutputReference = exports.DataCloudflareQueueConsumersResultSettingsOutputReference = void 0;
exports.dataCloudflareQueueConsumersResultSettingsToTerraform = dataCloudflareQueueConsumersResultSettingsToTerraform;
exports.dataCloudflareQueueConsumersResultSettingsToHclTerraform = dataCloudflareQueueConsumersResultSettingsToHclTerraform;
exports.dataCloudflareQueueConsumersResultToTerraform = dataCloudflareQueueConsumersResultToTerraform;
exports.dataCloudflareQueueConsumersResultToHclTerraform = dataCloudflareQueueConsumersResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareQueueConsumersResultSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareQueueConsumersResultSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareQueueConsumersResultSettingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareQueueConsumersResultSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareQueueConsumersResultSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareQueueConsumersResultSettingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareQueueConsumersResultSettingsOutputReference.prototype, "batchSize", {
        // batch_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('batch_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersResultSettingsOutputReference.prototype, "maxConcurrency", {
        // max_concurrency - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_concurrency');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersResultSettingsOutputReference.prototype, "maxRetries", {
        // max_retries - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_retries');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersResultSettingsOutputReference.prototype, "maxWaitTimeMs", {
        // max_wait_time_ms - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_wait_time_ms');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersResultSettingsOutputReference.prototype, "retryDelay", {
        // retry_delay - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('retry_delay');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersResultSettingsOutputReference.prototype, "visibilityTimeoutMs", {
        // visibility_timeout_ms - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('visibility_timeout_ms');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareQueueConsumersResultSettingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareQueueConsumersResultSettingsOutputReference = DataCloudflareQueueConsumersResultSettingsOutputReference;
function dataCloudflareQueueConsumersResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareQueueConsumersResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareQueueConsumersResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareQueueConsumersResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareQueueConsumersResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // settings - computed: true, optional: false, required: false
        _this._settings = new DataCloudflareQueueConsumersResultSettingsOutputReference(_this, "settings");
        return _this;
    }
    Object.defineProperty(DataCloudflareQueueConsumersResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareQueueConsumersResultOutputReference.prototype, "consumerId", {
        // consumer_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('consumer_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersResultOutputReference.prototype, "deadLetterQueue", {
        // dead_letter_queue - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dead_letter_queue');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersResultOutputReference.prototype, "queueName", {
        // queue_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queue_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersResultOutputReference.prototype, "scriptName", {
        // script_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('script_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersResultOutputReference.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersResultOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareQueueConsumersResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareQueueConsumersResultOutputReference = DataCloudflareQueueConsumersResultOutputReference;
var DataCloudflareQueueConsumersResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareQueueConsumersResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareQueueConsumersResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareQueueConsumersResultList.prototype.get = function (index) {
        return new DataCloudflareQueueConsumersResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareQueueConsumersResultList;
}(cdktf.ComplexList));
exports.DataCloudflareQueueConsumersResultList = DataCloudflareQueueConsumersResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue_consumers cloudflare_queue_consumers}
*/
var DataCloudflareQueueConsumersA = /** @class */ (function (_super) {
    __extends(DataCloudflareQueueConsumersA, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue_consumers cloudflare_queue_consumers} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareQueueConsumersAConfig
    */
    function DataCloudflareQueueConsumersA(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_queue_consumers',
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
        _this._result = new DataCloudflareQueueConsumersResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        _this._queueId = config.queueId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareQueueConsumersA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareQueueConsumersA to import
    * @param importFromId The id of the existing DataCloudflareQueueConsumersA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/queue_consumers#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareQueueConsumersA to import is found
    */
    DataCloudflareQueueConsumersA.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_queue_consumers", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareQueueConsumersA.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareQueueConsumersA.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareQueueConsumersA.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersA.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareQueueConsumersA.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareQueueConsumersA.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersA.prototype, "queueId", {
        get: function () {
            return this.getStringAttribute('queue_id');
        },
        set: function (value) {
            this._queueId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersA.prototype, "queueIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queueId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareQueueConsumersA.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareQueueConsumersA.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
            queue_id: cdktf.stringToTerraform(this._queueId),
        };
    };
    DataCloudflareQueueConsumersA.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareQueueConsumersA.tfResourceType = "cloudflare_queue_consumers";
    return DataCloudflareQueueConsumersA;
}(cdktf.TerraformDataSource));
exports.DataCloudflareQueueConsumersA = DataCloudflareQueueConsumersA;
