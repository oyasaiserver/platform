"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers
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
exports.DataCloudflareWorkers = exports.DataCloudflareWorkersResultList = exports.DataCloudflareWorkersResultOutputReference = exports.DataCloudflareWorkersResultTailConsumersList = exports.DataCloudflareWorkersResultTailConsumersOutputReference = exports.DataCloudflareWorkersResultSubdomainOutputReference = exports.DataCloudflareWorkersResultReferencesOutputReference = exports.DataCloudflareWorkersResultReferencesWorkersList = exports.DataCloudflareWorkersResultReferencesWorkersOutputReference = exports.DataCloudflareWorkersResultReferencesQueuesList = exports.DataCloudflareWorkersResultReferencesQueuesOutputReference = exports.DataCloudflareWorkersResultReferencesDurableObjectsList = exports.DataCloudflareWorkersResultReferencesDurableObjectsOutputReference = exports.DataCloudflareWorkersResultReferencesDomainsList = exports.DataCloudflareWorkersResultReferencesDomainsOutputReference = exports.DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsList = exports.DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsOutputReference = exports.DataCloudflareWorkersResultObservabilityOutputReference = exports.DataCloudflareWorkersResultObservabilityTracesOutputReference = exports.DataCloudflareWorkersResultObservabilityLogsOutputReference = void 0;
exports.dataCloudflareWorkersResultObservabilityLogsToTerraform = dataCloudflareWorkersResultObservabilityLogsToTerraform;
exports.dataCloudflareWorkersResultObservabilityLogsToHclTerraform = dataCloudflareWorkersResultObservabilityLogsToHclTerraform;
exports.dataCloudflareWorkersResultObservabilityTracesToTerraform = dataCloudflareWorkersResultObservabilityTracesToTerraform;
exports.dataCloudflareWorkersResultObservabilityTracesToHclTerraform = dataCloudflareWorkersResultObservabilityTracesToHclTerraform;
exports.dataCloudflareWorkersResultObservabilityToTerraform = dataCloudflareWorkersResultObservabilityToTerraform;
exports.dataCloudflareWorkersResultObservabilityToHclTerraform = dataCloudflareWorkersResultObservabilityToHclTerraform;
exports.dataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsToTerraform = dataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsToTerraform;
exports.dataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsToHclTerraform = dataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsToHclTerraform;
exports.dataCloudflareWorkersResultReferencesDomainsToTerraform = dataCloudflareWorkersResultReferencesDomainsToTerraform;
exports.dataCloudflareWorkersResultReferencesDomainsToHclTerraform = dataCloudflareWorkersResultReferencesDomainsToHclTerraform;
exports.dataCloudflareWorkersResultReferencesDurableObjectsToTerraform = dataCloudflareWorkersResultReferencesDurableObjectsToTerraform;
exports.dataCloudflareWorkersResultReferencesDurableObjectsToHclTerraform = dataCloudflareWorkersResultReferencesDurableObjectsToHclTerraform;
exports.dataCloudflareWorkersResultReferencesQueuesToTerraform = dataCloudflareWorkersResultReferencesQueuesToTerraform;
exports.dataCloudflareWorkersResultReferencesQueuesToHclTerraform = dataCloudflareWorkersResultReferencesQueuesToHclTerraform;
exports.dataCloudflareWorkersResultReferencesWorkersToTerraform = dataCloudflareWorkersResultReferencesWorkersToTerraform;
exports.dataCloudflareWorkersResultReferencesWorkersToHclTerraform = dataCloudflareWorkersResultReferencesWorkersToHclTerraform;
exports.dataCloudflareWorkersResultReferencesToTerraform = dataCloudflareWorkersResultReferencesToTerraform;
exports.dataCloudflareWorkersResultReferencesToHclTerraform = dataCloudflareWorkersResultReferencesToHclTerraform;
exports.dataCloudflareWorkersResultSubdomainToTerraform = dataCloudflareWorkersResultSubdomainToTerraform;
exports.dataCloudflareWorkersResultSubdomainToHclTerraform = dataCloudflareWorkersResultSubdomainToHclTerraform;
exports.dataCloudflareWorkersResultTailConsumersToTerraform = dataCloudflareWorkersResultTailConsumersToTerraform;
exports.dataCloudflareWorkersResultTailConsumersToHclTerraform = dataCloudflareWorkersResultTailConsumersToHclTerraform;
exports.dataCloudflareWorkersResultToTerraform = dataCloudflareWorkersResultToTerraform;
exports.dataCloudflareWorkersResultToHclTerraform = dataCloudflareWorkersResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareWorkersResultObservabilityLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersResultObservabilityLogsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersResultObservabilityLogsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersResultObservabilityLogsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkersResultObservabilityLogsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersResultObservabilityLogsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersResultObservabilityLogsOutputReference.prototype, "destinations", {
        // destinations - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('destinations');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultObservabilityLogsOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultObservabilityLogsOutputReference.prototype, "headSamplingRate", {
        // head_sampling_rate - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('head_sampling_rate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultObservabilityLogsOutputReference.prototype, "invocationLogs", {
        // invocation_logs - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('invocation_logs');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultObservabilityLogsOutputReference.prototype, "persist", {
        // persist - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('persist');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersResultObservabilityLogsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersResultObservabilityLogsOutputReference = DataCloudflareWorkersResultObservabilityLogsOutputReference;
function dataCloudflareWorkersResultObservabilityTracesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersResultObservabilityTracesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersResultObservabilityTracesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersResultObservabilityTracesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkersResultObservabilityTracesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersResultObservabilityTracesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersResultObservabilityTracesOutputReference.prototype, "destinations", {
        // destinations - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('destinations');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultObservabilityTracesOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultObservabilityTracesOutputReference.prototype, "headSamplingRate", {
        // head_sampling_rate - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('head_sampling_rate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultObservabilityTracesOutputReference.prototype, "persist", {
        // persist - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('persist');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersResultObservabilityTracesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersResultObservabilityTracesOutputReference = DataCloudflareWorkersResultObservabilityTracesOutputReference;
function dataCloudflareWorkersResultObservabilityToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersResultObservabilityToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersResultObservabilityOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersResultObservabilityOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkersResultObservabilityOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // logs - computed: true, optional: false, required: false
        _this._logs = new DataCloudflareWorkersResultObservabilityLogsOutputReference(_this, "logs");
        // traces - computed: true, optional: false, required: false
        _this._traces = new DataCloudflareWorkersResultObservabilityTracesOutputReference(_this, "traces");
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersResultObservabilityOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersResultObservabilityOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultObservabilityOutputReference.prototype, "headSamplingRate", {
        // head_sampling_rate - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('head_sampling_rate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultObservabilityOutputReference.prototype, "logs", {
        get: function () {
            return this._logs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultObservabilityOutputReference.prototype, "traces", {
        get: function () {
            return this._traces;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersResultObservabilityOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersResultObservabilityOutputReference = DataCloudflareWorkersResultObservabilityOutputReference;
function dataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsOutputReference.prototype, "namespaceId", {
        // namespace_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsOutputReference.prototype, "namespaceName", {
        // namespace_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsOutputReference.prototype, "workerId", {
        // worker_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('worker_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsOutputReference.prototype, "workerName", {
        // worker_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('worker_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsOutputReference = DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsOutputReference;
var DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsList.prototype.get = function (index) {
        return new DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsList = DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsList;
function dataCloudflareWorkersResultReferencesDomainsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersResultReferencesDomainsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersResultReferencesDomainsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersResultReferencesDomainsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersResultReferencesDomainsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersResultReferencesDomainsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersResultReferencesDomainsOutputReference.prototype, "certificateId", {
        // certificate_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultReferencesDomainsOutputReference.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultReferencesDomainsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultReferencesDomainsOutputReference.prototype, "zoneId", {
        // zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultReferencesDomainsOutputReference.prototype, "zoneName", {
        // zone_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersResultReferencesDomainsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersResultReferencesDomainsOutputReference = DataCloudflareWorkersResultReferencesDomainsOutputReference;
var DataCloudflareWorkersResultReferencesDomainsList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersResultReferencesDomainsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersResultReferencesDomainsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkersResultReferencesDomainsList.prototype.get = function (index) {
        return new DataCloudflareWorkersResultReferencesDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkersResultReferencesDomainsList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkersResultReferencesDomainsList = DataCloudflareWorkersResultReferencesDomainsList;
function dataCloudflareWorkersResultReferencesDurableObjectsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersResultReferencesDurableObjectsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersResultReferencesDurableObjectsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersResultReferencesDurableObjectsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersResultReferencesDurableObjectsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersResultReferencesDurableObjectsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersResultReferencesDurableObjectsOutputReference.prototype, "namespaceId", {
        // namespace_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultReferencesDurableObjectsOutputReference.prototype, "namespaceName", {
        // namespace_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultReferencesDurableObjectsOutputReference.prototype, "workerId", {
        // worker_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('worker_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultReferencesDurableObjectsOutputReference.prototype, "workerName", {
        // worker_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('worker_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersResultReferencesDurableObjectsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersResultReferencesDurableObjectsOutputReference = DataCloudflareWorkersResultReferencesDurableObjectsOutputReference;
var DataCloudflareWorkersResultReferencesDurableObjectsList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersResultReferencesDurableObjectsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersResultReferencesDurableObjectsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkersResultReferencesDurableObjectsList.prototype.get = function (index) {
        return new DataCloudflareWorkersResultReferencesDurableObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkersResultReferencesDurableObjectsList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkersResultReferencesDurableObjectsList = DataCloudflareWorkersResultReferencesDurableObjectsList;
function dataCloudflareWorkersResultReferencesQueuesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersResultReferencesQueuesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersResultReferencesQueuesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersResultReferencesQueuesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersResultReferencesQueuesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersResultReferencesQueuesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersResultReferencesQueuesOutputReference.prototype, "queueConsumerId", {
        // queue_consumer_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queue_consumer_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultReferencesQueuesOutputReference.prototype, "queueId", {
        // queue_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queue_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultReferencesQueuesOutputReference.prototype, "queueName", {
        // queue_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queue_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersResultReferencesQueuesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersResultReferencesQueuesOutputReference = DataCloudflareWorkersResultReferencesQueuesOutputReference;
var DataCloudflareWorkersResultReferencesQueuesList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersResultReferencesQueuesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersResultReferencesQueuesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkersResultReferencesQueuesList.prototype.get = function (index) {
        return new DataCloudflareWorkersResultReferencesQueuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkersResultReferencesQueuesList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkersResultReferencesQueuesList = DataCloudflareWorkersResultReferencesQueuesList;
function dataCloudflareWorkersResultReferencesWorkersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersResultReferencesWorkersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersResultReferencesWorkersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersResultReferencesWorkersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersResultReferencesWorkersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersResultReferencesWorkersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersResultReferencesWorkersOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultReferencesWorkersOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersResultReferencesWorkersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersResultReferencesWorkersOutputReference = DataCloudflareWorkersResultReferencesWorkersOutputReference;
var DataCloudflareWorkersResultReferencesWorkersList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersResultReferencesWorkersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersResultReferencesWorkersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkersResultReferencesWorkersList.prototype.get = function (index) {
        return new DataCloudflareWorkersResultReferencesWorkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkersResultReferencesWorkersList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkersResultReferencesWorkersList = DataCloudflareWorkersResultReferencesWorkersList;
function dataCloudflareWorkersResultReferencesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersResultReferencesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersResultReferencesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersResultReferencesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkersResultReferencesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // dispatch_namespace_outbounds - computed: true, optional: false, required: false
        _this._dispatchNamespaceOutbounds = new DataCloudflareWorkersResultReferencesDispatchNamespaceOutboundsList(_this, "dispatch_namespace_outbounds", false);
        // domains - computed: true, optional: false, required: false
        _this._domains = new DataCloudflareWorkersResultReferencesDomainsList(_this, "domains", false);
        // durable_objects - computed: true, optional: false, required: false
        _this._durableObjects = new DataCloudflareWorkersResultReferencesDurableObjectsList(_this, "durable_objects", false);
        // queues - computed: true, optional: false, required: false
        _this._queues = new DataCloudflareWorkersResultReferencesQueuesList(_this, "queues", false);
        // workers - computed: true, optional: false, required: false
        _this._workers = new DataCloudflareWorkersResultReferencesWorkersList(_this, "workers", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersResultReferencesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersResultReferencesOutputReference.prototype, "dispatchNamespaceOutbounds", {
        get: function () {
            return this._dispatchNamespaceOutbounds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultReferencesOutputReference.prototype, "domains", {
        get: function () {
            return this._domains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultReferencesOutputReference.prototype, "durableObjects", {
        get: function () {
            return this._durableObjects;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultReferencesOutputReference.prototype, "queues", {
        get: function () {
            return this._queues;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultReferencesOutputReference.prototype, "workers", {
        get: function () {
            return this._workers;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersResultReferencesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersResultReferencesOutputReference = DataCloudflareWorkersResultReferencesOutputReference;
function dataCloudflareWorkersResultSubdomainToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersResultSubdomainToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersResultSubdomainOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersResultSubdomainOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkersResultSubdomainOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersResultSubdomainOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersResultSubdomainOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultSubdomainOutputReference.prototype, "previewsEnabled", {
        // previews_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('previews_enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersResultSubdomainOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersResultSubdomainOutputReference = DataCloudflareWorkersResultSubdomainOutputReference;
function dataCloudflareWorkersResultTailConsumersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersResultTailConsumersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersResultTailConsumersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersResultTailConsumersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersResultTailConsumersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersResultTailConsumersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersResultTailConsumersOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersResultTailConsumersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersResultTailConsumersOutputReference = DataCloudflareWorkersResultTailConsumersOutputReference;
var DataCloudflareWorkersResultTailConsumersList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersResultTailConsumersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersResultTailConsumersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkersResultTailConsumersList.prototype.get = function (index) {
        return new DataCloudflareWorkersResultTailConsumersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkersResultTailConsumersList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkersResultTailConsumersList = DataCloudflareWorkersResultTailConsumersList;
function dataCloudflareWorkersResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // observability - computed: true, optional: false, required: false
        _this._observability = new DataCloudflareWorkersResultObservabilityOutputReference(_this, "observability");
        // references - computed: true, optional: false, required: false
        _this._references = new DataCloudflareWorkersResultReferencesOutputReference(_this, "references");
        // subdomain - computed: true, optional: false, required: false
        _this._subdomain = new DataCloudflareWorkersResultSubdomainOutputReference(_this, "subdomain");
        // tail_consumers - computed: true, optional: false, required: false
        _this._tailConsumers = new DataCloudflareWorkersResultTailConsumersList(_this, "tail_consumers", true);
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultOutputReference.prototype, "deployedOn", {
        // deployed_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deployed_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultOutputReference.prototype, "logpush", {
        // logpush - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('logpush');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultOutputReference.prototype, "observability", {
        get: function () {
            return this._observability;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultOutputReference.prototype, "references", {
        get: function () {
            return this._references;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultOutputReference.prototype, "subdomain", {
        get: function () {
            return this._subdomain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultOutputReference.prototype, "tags", {
        // tags - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('tags'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultOutputReference.prototype, "tailConsumers", {
        get: function () {
            return this._tailConsumers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersResultOutputReference.prototype, "updatedOn", {
        // updated_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_on');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersResultOutputReference = DataCloudflareWorkersResultOutputReference;
var DataCloudflareWorkersResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkersResultList.prototype.get = function (index) {
        return new DataCloudflareWorkersResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkersResultList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkersResultList = DataCloudflareWorkersResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers cloudflare_workers}
*/
var DataCloudflareWorkers = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkers, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers cloudflare_workers} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkersConfig = {}
    */
    function DataCloudflareWorkers(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_workers',
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
        _this._result = new DataCloudflareWorkersResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        _this._order = config.order;
        _this._orderBy = config.orderBy;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkers to import
    * @param importFromId The id of the existing DataCloudflareWorkers that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkers to import is found
    */
    DataCloudflareWorkers.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workers", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareWorkers.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkers.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareWorkers.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkers.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkers.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareWorkers.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkers.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkers.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareWorkers.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkers.prototype, "orderBy", {
        get: function () {
            return this.getStringAttribute('order_by');
        },
        set: function (value) {
            this._orderBy = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkers.prototype.resetOrderBy = function () {
        this._orderBy = undefined;
    };
    Object.defineProperty(DataCloudflareWorkers.prototype, "orderByInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._orderBy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkers.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareWorkers.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
            order: cdktf.stringToTerraform(this._order),
            order_by: cdktf.stringToTerraform(this._orderBy),
        };
    };
    DataCloudflareWorkers.prototype.synthesizeHclAttributes = function () {
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
            order: {
                value: cdktf.stringToHclTerraform(this._order),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            order_by: {
                value: cdktf.stringToHclTerraform(this._orderBy),
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
    DataCloudflareWorkers.tfResourceType = "cloudflare_workers";
    return DataCloudflareWorkers;
}(cdktf.TerraformDataSource));
exports.DataCloudflareWorkers = DataCloudflareWorkers;
