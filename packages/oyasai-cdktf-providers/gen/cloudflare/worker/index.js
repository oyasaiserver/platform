"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker
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
exports.Worker = exports.WorkerTailConsumersList = exports.WorkerTailConsumersOutputReference = exports.WorkerSubdomainOutputReference = exports.WorkerReferencesOutputReference = exports.WorkerReferencesWorkersList = exports.WorkerReferencesWorkersOutputReference = exports.WorkerReferencesQueuesList = exports.WorkerReferencesQueuesOutputReference = exports.WorkerReferencesDurableObjectsList = exports.WorkerReferencesDurableObjectsOutputReference = exports.WorkerReferencesDomainsList = exports.WorkerReferencesDomainsOutputReference = exports.WorkerReferencesDispatchNamespaceOutboundsList = exports.WorkerReferencesDispatchNamespaceOutboundsOutputReference = exports.WorkerObservabilityOutputReference = exports.WorkerObservabilityTracesOutputReference = exports.WorkerObservabilityLogsOutputReference = void 0;
exports.workerObservabilityLogsToTerraform = workerObservabilityLogsToTerraform;
exports.workerObservabilityLogsToHclTerraform = workerObservabilityLogsToHclTerraform;
exports.workerObservabilityTracesToTerraform = workerObservabilityTracesToTerraform;
exports.workerObservabilityTracesToHclTerraform = workerObservabilityTracesToHclTerraform;
exports.workerObservabilityToTerraform = workerObservabilityToTerraform;
exports.workerObservabilityToHclTerraform = workerObservabilityToHclTerraform;
exports.workerReferencesDispatchNamespaceOutboundsToTerraform = workerReferencesDispatchNamespaceOutboundsToTerraform;
exports.workerReferencesDispatchNamespaceOutboundsToHclTerraform = workerReferencesDispatchNamespaceOutboundsToHclTerraform;
exports.workerReferencesDomainsToTerraform = workerReferencesDomainsToTerraform;
exports.workerReferencesDomainsToHclTerraform = workerReferencesDomainsToHclTerraform;
exports.workerReferencesDurableObjectsToTerraform = workerReferencesDurableObjectsToTerraform;
exports.workerReferencesDurableObjectsToHclTerraform = workerReferencesDurableObjectsToHclTerraform;
exports.workerReferencesQueuesToTerraform = workerReferencesQueuesToTerraform;
exports.workerReferencesQueuesToHclTerraform = workerReferencesQueuesToHclTerraform;
exports.workerReferencesWorkersToTerraform = workerReferencesWorkersToTerraform;
exports.workerReferencesWorkersToHclTerraform = workerReferencesWorkersToHclTerraform;
exports.workerReferencesToTerraform = workerReferencesToTerraform;
exports.workerReferencesToHclTerraform = workerReferencesToHclTerraform;
exports.workerSubdomainToTerraform = workerSubdomainToTerraform;
exports.workerSubdomainToHclTerraform = workerSubdomainToHclTerraform;
exports.workerTailConsumersToTerraform = workerTailConsumersToTerraform;
exports.workerTailConsumersToHclTerraform = workerTailConsumersToHclTerraform;
var cdktf = require("cdktf");
function workerObservabilityLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        destinations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.destinations),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        head_sampling_rate: cdktf.numberToTerraform(struct.headSamplingRate),
        invocation_logs: cdktf.booleanToTerraform(struct.invocationLogs),
        persist: cdktf.booleanToTerraform(struct.persist),
    };
}
function workerObservabilityLogsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        destinations: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.destinations),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        head_sampling_rate: {
            value: cdktf.numberToHclTerraform(struct.headSamplingRate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        invocation_logs: {
            value: cdktf.booleanToHclTerraform(struct.invocationLogs),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        persist: {
            value: cdktf.booleanToHclTerraform(struct.persist),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkerObservabilityLogsOutputReference = /** @class */ (function (_super) {
    __extends(WorkerObservabilityLogsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkerObservabilityLogsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkerObservabilityLogsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._destinations !== undefined) {
                hasAnyValues = true;
                internalValueResult.destinations = this._destinations;
            }
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._headSamplingRate !== undefined) {
                hasAnyValues = true;
                internalValueResult.headSamplingRate = this._headSamplingRate;
            }
            if (this._invocationLogs !== undefined) {
                hasAnyValues = true;
                internalValueResult.invocationLogs = this._invocationLogs;
            }
            if (this._persist !== undefined) {
                hasAnyValues = true;
                internalValueResult.persist = this._persist;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._destinations = undefined;
                this._enabled = undefined;
                this._headSamplingRate = undefined;
                this._invocationLogs = undefined;
                this._persist = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._destinations = value.destinations;
                this._enabled = value.enabled;
                this._headSamplingRate = value.headSamplingRate;
                this._invocationLogs = value.invocationLogs;
                this._persist = value.persist;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerObservabilityLogsOutputReference.prototype, "destinations", {
        get: function () {
            return this.getListAttribute('destinations');
        },
        set: function (value) {
            this._destinations = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerObservabilityLogsOutputReference.prototype.resetDestinations = function () {
        this._destinations = undefined;
    };
    Object.defineProperty(WorkerObservabilityLogsOutputReference.prototype, "destinationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerObservabilityLogsOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerObservabilityLogsOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(WorkerObservabilityLogsOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerObservabilityLogsOutputReference.prototype, "headSamplingRate", {
        get: function () {
            return this.getNumberAttribute('head_sampling_rate');
        },
        set: function (value) {
            this._headSamplingRate = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerObservabilityLogsOutputReference.prototype.resetHeadSamplingRate = function () {
        this._headSamplingRate = undefined;
    };
    Object.defineProperty(WorkerObservabilityLogsOutputReference.prototype, "headSamplingRateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._headSamplingRate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerObservabilityLogsOutputReference.prototype, "invocationLogs", {
        get: function () {
            return this.getBooleanAttribute('invocation_logs');
        },
        set: function (value) {
            this._invocationLogs = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerObservabilityLogsOutputReference.prototype.resetInvocationLogs = function () {
        this._invocationLogs = undefined;
    };
    Object.defineProperty(WorkerObservabilityLogsOutputReference.prototype, "invocationLogsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._invocationLogs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerObservabilityLogsOutputReference.prototype, "persist", {
        get: function () {
            return this.getBooleanAttribute('persist');
        },
        set: function (value) {
            this._persist = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerObservabilityLogsOutputReference.prototype.resetPersist = function () {
        this._persist = undefined;
    };
    Object.defineProperty(WorkerObservabilityLogsOutputReference.prototype, "persistInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._persist;
        },
        enumerable: false,
        configurable: true
    });
    return WorkerObservabilityLogsOutputReference;
}(cdktf.ComplexObject));
exports.WorkerObservabilityLogsOutputReference = WorkerObservabilityLogsOutputReference;
function workerObservabilityTracesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        destinations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.destinations),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        head_sampling_rate: cdktf.numberToTerraform(struct.headSamplingRate),
        persist: cdktf.booleanToTerraform(struct.persist),
    };
}
function workerObservabilityTracesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        destinations: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.destinations),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        head_sampling_rate: {
            value: cdktf.numberToHclTerraform(struct.headSamplingRate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        persist: {
            value: cdktf.booleanToHclTerraform(struct.persist),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkerObservabilityTracesOutputReference = /** @class */ (function (_super) {
    __extends(WorkerObservabilityTracesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkerObservabilityTracesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkerObservabilityTracesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._destinations !== undefined) {
                hasAnyValues = true;
                internalValueResult.destinations = this._destinations;
            }
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._headSamplingRate !== undefined) {
                hasAnyValues = true;
                internalValueResult.headSamplingRate = this._headSamplingRate;
            }
            if (this._persist !== undefined) {
                hasAnyValues = true;
                internalValueResult.persist = this._persist;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._destinations = undefined;
                this._enabled = undefined;
                this._headSamplingRate = undefined;
                this._persist = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._destinations = value.destinations;
                this._enabled = value.enabled;
                this._headSamplingRate = value.headSamplingRate;
                this._persist = value.persist;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerObservabilityTracesOutputReference.prototype, "destinations", {
        get: function () {
            return this.getListAttribute('destinations');
        },
        set: function (value) {
            this._destinations = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerObservabilityTracesOutputReference.prototype.resetDestinations = function () {
        this._destinations = undefined;
    };
    Object.defineProperty(WorkerObservabilityTracesOutputReference.prototype, "destinationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerObservabilityTracesOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerObservabilityTracesOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(WorkerObservabilityTracesOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerObservabilityTracesOutputReference.prototype, "headSamplingRate", {
        get: function () {
            return this.getNumberAttribute('head_sampling_rate');
        },
        set: function (value) {
            this._headSamplingRate = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerObservabilityTracesOutputReference.prototype.resetHeadSamplingRate = function () {
        this._headSamplingRate = undefined;
    };
    Object.defineProperty(WorkerObservabilityTracesOutputReference.prototype, "headSamplingRateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._headSamplingRate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerObservabilityTracesOutputReference.prototype, "persist", {
        get: function () {
            return this.getBooleanAttribute('persist');
        },
        set: function (value) {
            this._persist = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerObservabilityTracesOutputReference.prototype.resetPersist = function () {
        this._persist = undefined;
    };
    Object.defineProperty(WorkerObservabilityTracesOutputReference.prototype, "persistInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._persist;
        },
        enumerable: false,
        configurable: true
    });
    return WorkerObservabilityTracesOutputReference;
}(cdktf.ComplexObject));
exports.WorkerObservabilityTracesOutputReference = WorkerObservabilityTracesOutputReference;
function workerObservabilityToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        head_sampling_rate: cdktf.numberToTerraform(struct.headSamplingRate),
        logs: workerObservabilityLogsToTerraform(struct.logs),
        traces: workerObservabilityTracesToTerraform(struct.traces),
    };
}
function workerObservabilityToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        head_sampling_rate: {
            value: cdktf.numberToHclTerraform(struct.headSamplingRate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        logs: {
            value: workerObservabilityLogsToHclTerraform(struct.logs),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkerObservabilityLogs",
        },
        traces: {
            value: workerObservabilityTracesToHclTerraform(struct.traces),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkerObservabilityTraces",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkerObservabilityOutputReference = /** @class */ (function (_super) {
    __extends(WorkerObservabilityOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkerObservabilityOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // logs - computed: true, optional: true, required: false
        _this._logs = new WorkerObservabilityLogsOutputReference(_this, "logs");
        // traces - computed: true, optional: true, required: false
        _this._traces = new WorkerObservabilityTracesOutputReference(_this, "traces");
        return _this;
    }
    Object.defineProperty(WorkerObservabilityOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._headSamplingRate !== undefined) {
                hasAnyValues = true;
                internalValueResult.headSamplingRate = this._headSamplingRate;
            }
            if (((_a = this._logs) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.logs = (_b = this._logs) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._traces) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.traces = (_d = this._traces) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._enabled = undefined;
                this._headSamplingRate = undefined;
                this._logs.internalValue = undefined;
                this._traces.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._enabled = value.enabled;
                this._headSamplingRate = value.headSamplingRate;
                this._logs.internalValue = value.logs;
                this._traces.internalValue = value.traces;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerObservabilityOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerObservabilityOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(WorkerObservabilityOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerObservabilityOutputReference.prototype, "headSamplingRate", {
        get: function () {
            return this.getNumberAttribute('head_sampling_rate');
        },
        set: function (value) {
            this._headSamplingRate = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerObservabilityOutputReference.prototype.resetHeadSamplingRate = function () {
        this._headSamplingRate = undefined;
    };
    Object.defineProperty(WorkerObservabilityOutputReference.prototype, "headSamplingRateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._headSamplingRate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerObservabilityOutputReference.prototype, "logs", {
        get: function () {
            return this._logs;
        },
        enumerable: false,
        configurable: true
    });
    WorkerObservabilityOutputReference.prototype.putLogs = function (value) {
        this._logs.internalValue = value;
    };
    WorkerObservabilityOutputReference.prototype.resetLogs = function () {
        this._logs.internalValue = undefined;
    };
    Object.defineProperty(WorkerObservabilityOutputReference.prototype, "logsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logs.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerObservabilityOutputReference.prototype, "traces", {
        get: function () {
            return this._traces;
        },
        enumerable: false,
        configurable: true
    });
    WorkerObservabilityOutputReference.prototype.putTraces = function (value) {
        this._traces.internalValue = value;
    };
    WorkerObservabilityOutputReference.prototype.resetTraces = function () {
        this._traces.internalValue = undefined;
    };
    Object.defineProperty(WorkerObservabilityOutputReference.prototype, "tracesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._traces.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return WorkerObservabilityOutputReference;
}(cdktf.ComplexObject));
exports.WorkerObservabilityOutputReference = WorkerObservabilityOutputReference;
function workerReferencesDispatchNamespaceOutboundsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function workerReferencesDispatchNamespaceOutboundsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var WorkerReferencesDispatchNamespaceOutboundsOutputReference = /** @class */ (function (_super) {
    __extends(WorkerReferencesDispatchNamespaceOutboundsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerReferencesDispatchNamespaceOutboundsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkerReferencesDispatchNamespaceOutboundsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(WorkerReferencesDispatchNamespaceOutboundsOutputReference.prototype, "namespaceId", {
        // namespace_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerReferencesDispatchNamespaceOutboundsOutputReference.prototype, "namespaceName", {
        // namespace_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerReferencesDispatchNamespaceOutboundsOutputReference.prototype, "workerId", {
        // worker_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('worker_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerReferencesDispatchNamespaceOutboundsOutputReference.prototype, "workerName", {
        // worker_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('worker_name');
        },
        enumerable: false,
        configurable: true
    });
    return WorkerReferencesDispatchNamespaceOutboundsOutputReference;
}(cdktf.ComplexObject));
exports.WorkerReferencesDispatchNamespaceOutboundsOutputReference = WorkerReferencesDispatchNamespaceOutboundsOutputReference;
var WorkerReferencesDispatchNamespaceOutboundsList = /** @class */ (function (_super) {
    __extends(WorkerReferencesDispatchNamespaceOutboundsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerReferencesDispatchNamespaceOutboundsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkerReferencesDispatchNamespaceOutboundsList.prototype.get = function (index) {
        return new WorkerReferencesDispatchNamespaceOutboundsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkerReferencesDispatchNamespaceOutboundsList;
}(cdktf.ComplexList));
exports.WorkerReferencesDispatchNamespaceOutboundsList = WorkerReferencesDispatchNamespaceOutboundsList;
function workerReferencesDomainsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function workerReferencesDomainsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var WorkerReferencesDomainsOutputReference = /** @class */ (function (_super) {
    __extends(WorkerReferencesDomainsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerReferencesDomainsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkerReferencesDomainsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(WorkerReferencesDomainsOutputReference.prototype, "certificateId", {
        // certificate_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerReferencesDomainsOutputReference.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerReferencesDomainsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerReferencesDomainsOutputReference.prototype, "zoneId", {
        // zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerReferencesDomainsOutputReference.prototype, "zoneName", {
        // zone_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_name');
        },
        enumerable: false,
        configurable: true
    });
    return WorkerReferencesDomainsOutputReference;
}(cdktf.ComplexObject));
exports.WorkerReferencesDomainsOutputReference = WorkerReferencesDomainsOutputReference;
var WorkerReferencesDomainsList = /** @class */ (function (_super) {
    __extends(WorkerReferencesDomainsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerReferencesDomainsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkerReferencesDomainsList.prototype.get = function (index) {
        return new WorkerReferencesDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkerReferencesDomainsList;
}(cdktf.ComplexList));
exports.WorkerReferencesDomainsList = WorkerReferencesDomainsList;
function workerReferencesDurableObjectsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function workerReferencesDurableObjectsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var WorkerReferencesDurableObjectsOutputReference = /** @class */ (function (_super) {
    __extends(WorkerReferencesDurableObjectsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerReferencesDurableObjectsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkerReferencesDurableObjectsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(WorkerReferencesDurableObjectsOutputReference.prototype, "namespaceId", {
        // namespace_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerReferencesDurableObjectsOutputReference.prototype, "namespaceName", {
        // namespace_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerReferencesDurableObjectsOutputReference.prototype, "workerId", {
        // worker_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('worker_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerReferencesDurableObjectsOutputReference.prototype, "workerName", {
        // worker_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('worker_name');
        },
        enumerable: false,
        configurable: true
    });
    return WorkerReferencesDurableObjectsOutputReference;
}(cdktf.ComplexObject));
exports.WorkerReferencesDurableObjectsOutputReference = WorkerReferencesDurableObjectsOutputReference;
var WorkerReferencesDurableObjectsList = /** @class */ (function (_super) {
    __extends(WorkerReferencesDurableObjectsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerReferencesDurableObjectsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkerReferencesDurableObjectsList.prototype.get = function (index) {
        return new WorkerReferencesDurableObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkerReferencesDurableObjectsList;
}(cdktf.ComplexList));
exports.WorkerReferencesDurableObjectsList = WorkerReferencesDurableObjectsList;
function workerReferencesQueuesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function workerReferencesQueuesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var WorkerReferencesQueuesOutputReference = /** @class */ (function (_super) {
    __extends(WorkerReferencesQueuesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerReferencesQueuesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkerReferencesQueuesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(WorkerReferencesQueuesOutputReference.prototype, "queueConsumerId", {
        // queue_consumer_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queue_consumer_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerReferencesQueuesOutputReference.prototype, "queueId", {
        // queue_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queue_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerReferencesQueuesOutputReference.prototype, "queueName", {
        // queue_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queue_name');
        },
        enumerable: false,
        configurable: true
    });
    return WorkerReferencesQueuesOutputReference;
}(cdktf.ComplexObject));
exports.WorkerReferencesQueuesOutputReference = WorkerReferencesQueuesOutputReference;
var WorkerReferencesQueuesList = /** @class */ (function (_super) {
    __extends(WorkerReferencesQueuesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerReferencesQueuesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkerReferencesQueuesList.prototype.get = function (index) {
        return new WorkerReferencesQueuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkerReferencesQueuesList;
}(cdktf.ComplexList));
exports.WorkerReferencesQueuesList = WorkerReferencesQueuesList;
function workerReferencesWorkersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function workerReferencesWorkersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var WorkerReferencesWorkersOutputReference = /** @class */ (function (_super) {
    __extends(WorkerReferencesWorkersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerReferencesWorkersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkerReferencesWorkersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(WorkerReferencesWorkersOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerReferencesWorkersOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return WorkerReferencesWorkersOutputReference;
}(cdktf.ComplexObject));
exports.WorkerReferencesWorkersOutputReference = WorkerReferencesWorkersOutputReference;
var WorkerReferencesWorkersList = /** @class */ (function (_super) {
    __extends(WorkerReferencesWorkersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerReferencesWorkersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkerReferencesWorkersList.prototype.get = function (index) {
        return new WorkerReferencesWorkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkerReferencesWorkersList;
}(cdktf.ComplexList));
exports.WorkerReferencesWorkersList = WorkerReferencesWorkersList;
function workerReferencesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function workerReferencesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var WorkerReferencesOutputReference = /** @class */ (function (_super) {
    __extends(WorkerReferencesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkerReferencesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // dispatch_namespace_outbounds - computed: true, optional: false, required: false
        _this._dispatchNamespaceOutbounds = new WorkerReferencesDispatchNamespaceOutboundsList(_this, "dispatch_namespace_outbounds", false);
        // domains - computed: true, optional: false, required: false
        _this._domains = new WorkerReferencesDomainsList(_this, "domains", false);
        // durable_objects - computed: true, optional: false, required: false
        _this._durableObjects = new WorkerReferencesDurableObjectsList(_this, "durable_objects", false);
        // queues - computed: true, optional: false, required: false
        _this._queues = new WorkerReferencesQueuesList(_this, "queues", false);
        // workers - computed: true, optional: false, required: false
        _this._workers = new WorkerReferencesWorkersList(_this, "workers", false);
        return _this;
    }
    Object.defineProperty(WorkerReferencesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(WorkerReferencesOutputReference.prototype, "dispatchNamespaceOutbounds", {
        get: function () {
            return this._dispatchNamespaceOutbounds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerReferencesOutputReference.prototype, "domains", {
        get: function () {
            return this._domains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerReferencesOutputReference.prototype, "durableObjects", {
        get: function () {
            return this._durableObjects;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerReferencesOutputReference.prototype, "queues", {
        get: function () {
            return this._queues;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerReferencesOutputReference.prototype, "workers", {
        get: function () {
            return this._workers;
        },
        enumerable: false,
        configurable: true
    });
    return WorkerReferencesOutputReference;
}(cdktf.ComplexObject));
exports.WorkerReferencesOutputReference = WorkerReferencesOutputReference;
function workerSubdomainToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        previews_enabled: cdktf.booleanToTerraform(struct.previewsEnabled),
    };
}
function workerSubdomainToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        previews_enabled: {
            value: cdktf.booleanToHclTerraform(struct.previewsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkerSubdomainOutputReference = /** @class */ (function (_super) {
    __extends(WorkerSubdomainOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkerSubdomainOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkerSubdomainOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._previewsEnabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.previewsEnabled = this._previewsEnabled;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._enabled = undefined;
                this._previewsEnabled = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._enabled = value.enabled;
                this._previewsEnabled = value.previewsEnabled;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerSubdomainOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerSubdomainOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(WorkerSubdomainOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerSubdomainOutputReference.prototype, "previewsEnabled", {
        get: function () {
            return this.getBooleanAttribute('previews_enabled');
        },
        set: function (value) {
            this._previewsEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerSubdomainOutputReference.prototype.resetPreviewsEnabled = function () {
        this._previewsEnabled = undefined;
    };
    Object.defineProperty(WorkerSubdomainOutputReference.prototype, "previewsEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._previewsEnabled;
        },
        enumerable: false,
        configurable: true
    });
    return WorkerSubdomainOutputReference;
}(cdktf.ComplexObject));
exports.WorkerSubdomainOutputReference = WorkerSubdomainOutputReference;
function workerTailConsumersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
function workerTailConsumersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
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
var WorkerTailConsumersOutputReference = /** @class */ (function (_super) {
    __extends(WorkerTailConsumersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerTailConsumersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkerTailConsumersOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._name = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._name = value.name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerTailConsumersOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerTailConsumersOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return WorkerTailConsumersOutputReference;
}(cdktf.ComplexObject));
exports.WorkerTailConsumersOutputReference = WorkerTailConsumersOutputReference;
var WorkerTailConsumersList = /** @class */ (function (_super) {
    __extends(WorkerTailConsumersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerTailConsumersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkerTailConsumersList.prototype.get = function (index) {
        return new WorkerTailConsumersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkerTailConsumersList;
}(cdktf.ComplexList));
exports.WorkerTailConsumersList = WorkerTailConsumersList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker cloudflare_worker}
*/
var Worker = /** @class */ (function (_super) {
    __extends(Worker, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker cloudflare_worker} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkerConfig
    */
    function Worker(scope, id, config) {
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
        // observability - computed: true, optional: true, required: false
        _this._observability = new WorkerObservabilityOutputReference(_this, "observability");
        // references - computed: true, optional: false, required: false
        _this._references = new WorkerReferencesOutputReference(_this, "references");
        // subdomain - computed: true, optional: true, required: false
        _this._subdomain = new WorkerSubdomainOutputReference(_this, "subdomain");
        // tail_consumers - computed: true, optional: true, required: false
        _this._tailConsumers = new WorkerTailConsumersList(_this, "tail_consumers", true);
        _this._accountId = config.accountId;
        _this._logpush = config.logpush;
        _this._name = config.name;
        _this._observability.internalValue = config.observability;
        _this._subdomain.internalValue = config.subdomain;
        _this._tags = config.tags;
        _this._tailConsumers.internalValue = config.tailConsumers;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Worker resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Worker to import
    * @param importFromId The id of the existing Worker that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Worker to import is found
    */
    Worker.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_worker", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Worker.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Worker.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(Worker.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Worker.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Worker.prototype, "deployedOn", {
        // deployed_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deployed_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Worker.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Worker.prototype, "logpush", {
        get: function () {
            return this.getBooleanAttribute('logpush');
        },
        set: function (value) {
            this._logpush = value;
        },
        enumerable: false,
        configurable: true
    });
    Worker.prototype.resetLogpush = function () {
        this._logpush = undefined;
    };
    Object.defineProperty(Worker.prototype, "logpushInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logpush;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Worker.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Worker.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Worker.prototype, "observability", {
        get: function () {
            return this._observability;
        },
        enumerable: false,
        configurable: true
    });
    Worker.prototype.putObservability = function (value) {
        this._observability.internalValue = value;
    };
    Worker.prototype.resetObservability = function () {
        this._observability.internalValue = undefined;
    };
    Object.defineProperty(Worker.prototype, "observabilityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._observability.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Worker.prototype, "references", {
        get: function () {
            return this._references;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Worker.prototype, "subdomain", {
        get: function () {
            return this._subdomain;
        },
        enumerable: false,
        configurable: true
    });
    Worker.prototype.putSubdomain = function (value) {
        this._subdomain.internalValue = value;
    };
    Worker.prototype.resetSubdomain = function () {
        this._subdomain.internalValue = undefined;
    };
    Object.defineProperty(Worker.prototype, "subdomainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subdomain.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Worker.prototype, "tags", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('tags'));
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Worker.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Worker.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Worker.prototype, "tailConsumers", {
        get: function () {
            return this._tailConsumers;
        },
        enumerable: false,
        configurable: true
    });
    Worker.prototype.putTailConsumers = function (value) {
        this._tailConsumers.internalValue = value;
    };
    Worker.prototype.resetTailConsumers = function () {
        this._tailConsumers.internalValue = undefined;
    };
    Object.defineProperty(Worker.prototype, "tailConsumersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tailConsumers.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Worker.prototype, "updatedOn", {
        // updated_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_on');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Worker.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            logpush: cdktf.booleanToTerraform(this._logpush),
            name: cdktf.stringToTerraform(this._name),
            observability: workerObservabilityToTerraform(this._observability.internalValue),
            subdomain: workerSubdomainToTerraform(this._subdomain.internalValue),
            tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
            tail_consumers: cdktf.listMapper(workerTailConsumersToTerraform, false)(this._tailConsumers.internalValue),
        };
    };
    Worker.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            logpush: {
                value: cdktf.booleanToHclTerraform(this._logpush),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            observability: {
                value: workerObservabilityToHclTerraform(this._observability.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkerObservability",
            },
            subdomain: {
                value: workerSubdomainToHclTerraform(this._subdomain.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkerSubdomain",
            },
            tags: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            tail_consumers: {
                value: cdktf.listMapperHcl(workerTailConsumersToHclTerraform, false)(this._tailConsumers.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "WorkerTailConsumersList",
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
    Worker.tfResourceType = "cloudflare_worker";
    return Worker;
}(cdktf.TerraformResource));
exports.Worker = Worker;
