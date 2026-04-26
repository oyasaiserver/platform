"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker
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
exports.DataCloudflareWorker = exports.DataCloudflareWorkerTailConsumersList = exports.DataCloudflareWorkerTailConsumersOutputReference = exports.DataCloudflareWorkerSubdomainOutputReference = exports.DataCloudflareWorkerReferencesOutputReference = exports.DataCloudflareWorkerReferencesWorkersList = exports.DataCloudflareWorkerReferencesWorkersOutputReference = exports.DataCloudflareWorkerReferencesQueuesList = exports.DataCloudflareWorkerReferencesQueuesOutputReference = exports.DataCloudflareWorkerReferencesDurableObjectsList = exports.DataCloudflareWorkerReferencesDurableObjectsOutputReference = exports.DataCloudflareWorkerReferencesDomainsList = exports.DataCloudflareWorkerReferencesDomainsOutputReference = exports.DataCloudflareWorkerReferencesDispatchNamespaceOutboundsList = exports.DataCloudflareWorkerReferencesDispatchNamespaceOutboundsOutputReference = exports.DataCloudflareWorkerObservabilityOutputReference = exports.DataCloudflareWorkerObservabilityTracesOutputReference = exports.DataCloudflareWorkerObservabilityLogsOutputReference = exports.DataCloudflareWorkerFilterOutputReference = void 0;
exports.dataCloudflareWorkerFilterToTerraform = dataCloudflareWorkerFilterToTerraform;
exports.dataCloudflareWorkerFilterToHclTerraform = dataCloudflareWorkerFilterToHclTerraform;
exports.dataCloudflareWorkerObservabilityLogsToTerraform = dataCloudflareWorkerObservabilityLogsToTerraform;
exports.dataCloudflareWorkerObservabilityLogsToHclTerraform = dataCloudflareWorkerObservabilityLogsToHclTerraform;
exports.dataCloudflareWorkerObservabilityTracesToTerraform = dataCloudflareWorkerObservabilityTracesToTerraform;
exports.dataCloudflareWorkerObservabilityTracesToHclTerraform = dataCloudflareWorkerObservabilityTracesToHclTerraform;
exports.dataCloudflareWorkerObservabilityToTerraform = dataCloudflareWorkerObservabilityToTerraform;
exports.dataCloudflareWorkerObservabilityToHclTerraform = dataCloudflareWorkerObservabilityToHclTerraform;
exports.dataCloudflareWorkerReferencesDispatchNamespaceOutboundsToTerraform = dataCloudflareWorkerReferencesDispatchNamespaceOutboundsToTerraform;
exports.dataCloudflareWorkerReferencesDispatchNamespaceOutboundsToHclTerraform = dataCloudflareWorkerReferencesDispatchNamespaceOutboundsToHclTerraform;
exports.dataCloudflareWorkerReferencesDomainsToTerraform = dataCloudflareWorkerReferencesDomainsToTerraform;
exports.dataCloudflareWorkerReferencesDomainsToHclTerraform = dataCloudflareWorkerReferencesDomainsToHclTerraform;
exports.dataCloudflareWorkerReferencesDurableObjectsToTerraform = dataCloudflareWorkerReferencesDurableObjectsToTerraform;
exports.dataCloudflareWorkerReferencesDurableObjectsToHclTerraform = dataCloudflareWorkerReferencesDurableObjectsToHclTerraform;
exports.dataCloudflareWorkerReferencesQueuesToTerraform = dataCloudflareWorkerReferencesQueuesToTerraform;
exports.dataCloudflareWorkerReferencesQueuesToHclTerraform = dataCloudflareWorkerReferencesQueuesToHclTerraform;
exports.dataCloudflareWorkerReferencesWorkersToTerraform = dataCloudflareWorkerReferencesWorkersToTerraform;
exports.dataCloudflareWorkerReferencesWorkersToHclTerraform = dataCloudflareWorkerReferencesWorkersToHclTerraform;
exports.dataCloudflareWorkerReferencesToTerraform = dataCloudflareWorkerReferencesToTerraform;
exports.dataCloudflareWorkerReferencesToHclTerraform = dataCloudflareWorkerReferencesToHclTerraform;
exports.dataCloudflareWorkerSubdomainToTerraform = dataCloudflareWorkerSubdomainToTerraform;
exports.dataCloudflareWorkerSubdomainToHclTerraform = dataCloudflareWorkerSubdomainToHclTerraform;
exports.dataCloudflareWorkerTailConsumersToTerraform = dataCloudflareWorkerTailConsumersToTerraform;
exports.dataCloudflareWorkerTailConsumersToHclTerraform = dataCloudflareWorkerTailConsumersToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareWorkerFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        order: cdktf.stringToTerraform(struct.order),
        order_by: cdktf.stringToTerraform(struct.orderBy),
    };
}
function dataCloudflareWorkerFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        order: {
            value: cdktf.stringToHclTerraform(struct.order),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        order_by: {
            value: cdktf.stringToHclTerraform(struct.orderBy),
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
}
var DataCloudflareWorkerFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkerFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._order !== undefined) {
                hasAnyValues = true;
                internalValueResult.order = this._order;
            }
            if (this._orderBy !== undefined) {
                hasAnyValues = true;
                internalValueResult.orderBy = this._orderBy;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._order = undefined;
                this._orderBy = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._order = value.order;
                this._orderBy = value.orderBy;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerFilterOutputReference.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkerFilterOutputReference.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareWorkerFilterOutputReference.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerFilterOutputReference.prototype, "orderBy", {
        get: function () {
            return this.getStringAttribute('order_by');
        },
        set: function (value) {
            this._orderBy = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkerFilterOutputReference.prototype.resetOrderBy = function () {
        this._orderBy = undefined;
    };
    Object.defineProperty(DataCloudflareWorkerFilterOutputReference.prototype, "orderByInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._orderBy;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerFilterOutputReference = DataCloudflareWorkerFilterOutputReference;
function dataCloudflareWorkerObservabilityLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerObservabilityLogsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerObservabilityLogsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerObservabilityLogsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkerObservabilityLogsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerObservabilityLogsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerObservabilityLogsOutputReference.prototype, "destinations", {
        // destinations - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('destinations');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerObservabilityLogsOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerObservabilityLogsOutputReference.prototype, "headSamplingRate", {
        // head_sampling_rate - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('head_sampling_rate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerObservabilityLogsOutputReference.prototype, "invocationLogs", {
        // invocation_logs - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('invocation_logs');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerObservabilityLogsOutputReference.prototype, "persist", {
        // persist - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('persist');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerObservabilityLogsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerObservabilityLogsOutputReference = DataCloudflareWorkerObservabilityLogsOutputReference;
function dataCloudflareWorkerObservabilityTracesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerObservabilityTracesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerObservabilityTracesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerObservabilityTracesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkerObservabilityTracesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerObservabilityTracesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerObservabilityTracesOutputReference.prototype, "destinations", {
        // destinations - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('destinations');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerObservabilityTracesOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerObservabilityTracesOutputReference.prototype, "headSamplingRate", {
        // head_sampling_rate - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('head_sampling_rate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerObservabilityTracesOutputReference.prototype, "persist", {
        // persist - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('persist');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerObservabilityTracesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerObservabilityTracesOutputReference = DataCloudflareWorkerObservabilityTracesOutputReference;
function dataCloudflareWorkerObservabilityToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerObservabilityToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerObservabilityOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerObservabilityOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkerObservabilityOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // logs - computed: true, optional: false, required: false
        _this._logs = new DataCloudflareWorkerObservabilityLogsOutputReference(_this, "logs");
        // traces - computed: true, optional: false, required: false
        _this._traces = new DataCloudflareWorkerObservabilityTracesOutputReference(_this, "traces");
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerObservabilityOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerObservabilityOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerObservabilityOutputReference.prototype, "headSamplingRate", {
        // head_sampling_rate - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('head_sampling_rate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerObservabilityOutputReference.prototype, "logs", {
        get: function () {
            return this._logs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerObservabilityOutputReference.prototype, "traces", {
        get: function () {
            return this._traces;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerObservabilityOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerObservabilityOutputReference = DataCloudflareWorkerObservabilityOutputReference;
function dataCloudflareWorkerReferencesDispatchNamespaceOutboundsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerReferencesDispatchNamespaceOutboundsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerReferencesDispatchNamespaceOutboundsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerReferencesDispatchNamespaceOutboundsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerReferencesDispatchNamespaceOutboundsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerReferencesDispatchNamespaceOutboundsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerReferencesDispatchNamespaceOutboundsOutputReference.prototype, "namespaceId", {
        // namespace_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerReferencesDispatchNamespaceOutboundsOutputReference.prototype, "namespaceName", {
        // namespace_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerReferencesDispatchNamespaceOutboundsOutputReference.prototype, "workerId", {
        // worker_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('worker_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerReferencesDispatchNamespaceOutboundsOutputReference.prototype, "workerName", {
        // worker_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('worker_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerReferencesDispatchNamespaceOutboundsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerReferencesDispatchNamespaceOutboundsOutputReference = DataCloudflareWorkerReferencesDispatchNamespaceOutboundsOutputReference;
var DataCloudflareWorkerReferencesDispatchNamespaceOutboundsList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerReferencesDispatchNamespaceOutboundsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerReferencesDispatchNamespaceOutboundsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerReferencesDispatchNamespaceOutboundsList.prototype.get = function (index) {
        return new DataCloudflareWorkerReferencesDispatchNamespaceOutboundsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerReferencesDispatchNamespaceOutboundsList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerReferencesDispatchNamespaceOutboundsList = DataCloudflareWorkerReferencesDispatchNamespaceOutboundsList;
function dataCloudflareWorkerReferencesDomainsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerReferencesDomainsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerReferencesDomainsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerReferencesDomainsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerReferencesDomainsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerReferencesDomainsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerReferencesDomainsOutputReference.prototype, "certificateId", {
        // certificate_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerReferencesDomainsOutputReference.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerReferencesDomainsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerReferencesDomainsOutputReference.prototype, "zoneId", {
        // zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerReferencesDomainsOutputReference.prototype, "zoneName", {
        // zone_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerReferencesDomainsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerReferencesDomainsOutputReference = DataCloudflareWorkerReferencesDomainsOutputReference;
var DataCloudflareWorkerReferencesDomainsList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerReferencesDomainsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerReferencesDomainsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerReferencesDomainsList.prototype.get = function (index) {
        return new DataCloudflareWorkerReferencesDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerReferencesDomainsList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerReferencesDomainsList = DataCloudflareWorkerReferencesDomainsList;
function dataCloudflareWorkerReferencesDurableObjectsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerReferencesDurableObjectsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerReferencesDurableObjectsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerReferencesDurableObjectsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerReferencesDurableObjectsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerReferencesDurableObjectsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerReferencesDurableObjectsOutputReference.prototype, "namespaceId", {
        // namespace_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerReferencesDurableObjectsOutputReference.prototype, "namespaceName", {
        // namespace_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerReferencesDurableObjectsOutputReference.prototype, "workerId", {
        // worker_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('worker_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerReferencesDurableObjectsOutputReference.prototype, "workerName", {
        // worker_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('worker_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerReferencesDurableObjectsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerReferencesDurableObjectsOutputReference = DataCloudflareWorkerReferencesDurableObjectsOutputReference;
var DataCloudflareWorkerReferencesDurableObjectsList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerReferencesDurableObjectsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerReferencesDurableObjectsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerReferencesDurableObjectsList.prototype.get = function (index) {
        return new DataCloudflareWorkerReferencesDurableObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerReferencesDurableObjectsList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerReferencesDurableObjectsList = DataCloudflareWorkerReferencesDurableObjectsList;
function dataCloudflareWorkerReferencesQueuesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerReferencesQueuesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerReferencesQueuesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerReferencesQueuesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerReferencesQueuesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerReferencesQueuesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerReferencesQueuesOutputReference.prototype, "queueConsumerId", {
        // queue_consumer_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queue_consumer_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerReferencesQueuesOutputReference.prototype, "queueId", {
        // queue_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queue_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerReferencesQueuesOutputReference.prototype, "queueName", {
        // queue_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queue_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerReferencesQueuesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerReferencesQueuesOutputReference = DataCloudflareWorkerReferencesQueuesOutputReference;
var DataCloudflareWorkerReferencesQueuesList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerReferencesQueuesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerReferencesQueuesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerReferencesQueuesList.prototype.get = function (index) {
        return new DataCloudflareWorkerReferencesQueuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerReferencesQueuesList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerReferencesQueuesList = DataCloudflareWorkerReferencesQueuesList;
function dataCloudflareWorkerReferencesWorkersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerReferencesWorkersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerReferencesWorkersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerReferencesWorkersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerReferencesWorkersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerReferencesWorkersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerReferencesWorkersOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerReferencesWorkersOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerReferencesWorkersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerReferencesWorkersOutputReference = DataCloudflareWorkerReferencesWorkersOutputReference;
var DataCloudflareWorkerReferencesWorkersList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerReferencesWorkersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerReferencesWorkersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerReferencesWorkersList.prototype.get = function (index) {
        return new DataCloudflareWorkerReferencesWorkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerReferencesWorkersList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerReferencesWorkersList = DataCloudflareWorkerReferencesWorkersList;
function dataCloudflareWorkerReferencesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerReferencesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerReferencesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerReferencesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkerReferencesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // dispatch_namespace_outbounds - computed: true, optional: false, required: false
        _this._dispatchNamespaceOutbounds = new DataCloudflareWorkerReferencesDispatchNamespaceOutboundsList(_this, "dispatch_namespace_outbounds", false);
        // domains - computed: true, optional: false, required: false
        _this._domains = new DataCloudflareWorkerReferencesDomainsList(_this, "domains", false);
        // durable_objects - computed: true, optional: false, required: false
        _this._durableObjects = new DataCloudflareWorkerReferencesDurableObjectsList(_this, "durable_objects", false);
        // queues - computed: true, optional: false, required: false
        _this._queues = new DataCloudflareWorkerReferencesQueuesList(_this, "queues", false);
        // workers - computed: true, optional: false, required: false
        _this._workers = new DataCloudflareWorkerReferencesWorkersList(_this, "workers", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerReferencesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerReferencesOutputReference.prototype, "dispatchNamespaceOutbounds", {
        get: function () {
            return this._dispatchNamespaceOutbounds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerReferencesOutputReference.prototype, "domains", {
        get: function () {
            return this._domains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerReferencesOutputReference.prototype, "durableObjects", {
        get: function () {
            return this._durableObjects;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerReferencesOutputReference.prototype, "queues", {
        get: function () {
            return this._queues;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerReferencesOutputReference.prototype, "workers", {
        get: function () {
            return this._workers;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerReferencesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerReferencesOutputReference = DataCloudflareWorkerReferencesOutputReference;
function dataCloudflareWorkerSubdomainToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerSubdomainToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerSubdomainOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerSubdomainOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkerSubdomainOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerSubdomainOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerSubdomainOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerSubdomainOutputReference.prototype, "previewsEnabled", {
        // previews_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('previews_enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerSubdomainOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerSubdomainOutputReference = DataCloudflareWorkerSubdomainOutputReference;
function dataCloudflareWorkerTailConsumersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerTailConsumersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerTailConsumersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerTailConsumersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerTailConsumersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerTailConsumersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerTailConsumersOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerTailConsumersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerTailConsumersOutputReference = DataCloudflareWorkerTailConsumersOutputReference;
var DataCloudflareWorkerTailConsumersList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerTailConsumersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerTailConsumersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerTailConsumersList.prototype.get = function (index) {
        return new DataCloudflareWorkerTailConsumersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerTailConsumersList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerTailConsumersList = DataCloudflareWorkerTailConsumersList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker cloudflare_worker}
*/
var DataCloudflareWorker = /** @class */ (function (_super) {
    __extends(DataCloudflareWorker, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker cloudflare_worker} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkerConfig = {}
    */
    function DataCloudflareWorker(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_worker',
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
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareWorkerFilterOutputReference(_this, "filter");
        // observability - computed: true, optional: false, required: false
        _this._observability = new DataCloudflareWorkerObservabilityOutputReference(_this, "observability");
        // references - computed: true, optional: false, required: false
        _this._references = new DataCloudflareWorkerReferencesOutputReference(_this, "references");
        // subdomain - computed: true, optional: false, required: false
        _this._subdomain = new DataCloudflareWorkerSubdomainOutputReference(_this, "subdomain");
        // tail_consumers - computed: true, optional: false, required: false
        _this._tailConsumers = new DataCloudflareWorkerTailConsumersList(_this, "tail_consumers", true);
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._workerId = config.workerId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareWorker resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorker to import
    * @param importFromId The id of the existing DataCloudflareWorker that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorker to import is found
    */
    DataCloudflareWorker.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_worker", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareWorker.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorker.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareWorker.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorker.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorker.prototype, "deployedOn", {
        // deployed_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deployed_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorker.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorker.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareWorker.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareWorker.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorker.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorker.prototype, "logpush", {
        // logpush - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('logpush');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorker.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorker.prototype, "observability", {
        get: function () {
            return this._observability;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorker.prototype, "references", {
        get: function () {
            return this._references;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorker.prototype, "subdomain", {
        get: function () {
            return this._subdomain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorker.prototype, "tags", {
        // tags - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('tags'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorker.prototype, "tailConsumers", {
        get: function () {
            return this._tailConsumers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorker.prototype, "updatedOn", {
        // updated_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorker.prototype, "workerId", {
        get: function () {
            return this.getStringAttribute('worker_id');
        },
        set: function (value) {
            this._workerId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorker.prototype.resetWorkerId = function () {
        this._workerId = undefined;
    };
    Object.defineProperty(DataCloudflareWorker.prototype, "workerIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workerId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareWorker.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareWorkerFilterToTerraform(this._filter.internalValue),
            worker_id: cdktf.stringToTerraform(this._workerId),
        };
    };
    DataCloudflareWorker.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareWorkerFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareWorkerFilter",
            },
            worker_id: {
                value: cdktf.stringToHclTerraform(this._workerId),
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
    DataCloudflareWorker.tfResourceType = "cloudflare_worker";
    return DataCloudflareWorker;
}(cdktf.TerraformDataSource));
exports.DataCloudflareWorker = DataCloudflareWorker;
