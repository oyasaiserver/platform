"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_scripts
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
exports.DataCloudflareWorkersScripts = exports.DataCloudflareWorkersScriptsResultList = exports.DataCloudflareWorkersScriptsResultOutputReference = exports.DataCloudflareWorkersScriptsResultTailConsumersList = exports.DataCloudflareWorkersScriptsResultTailConsumersOutputReference = exports.DataCloudflareWorkersScriptsResultRoutesList = exports.DataCloudflareWorkersScriptsResultRoutesOutputReference = exports.DataCloudflareWorkersScriptsResultPlacementOutputReference = exports.DataCloudflareWorkersScriptsResultPlacementTargetList = exports.DataCloudflareWorkersScriptsResultPlacementTargetOutputReference = exports.DataCloudflareWorkersScriptsResultObservabilityOutputReference = exports.DataCloudflareWorkersScriptsResultObservabilityTracesOutputReference = exports.DataCloudflareWorkersScriptsResultObservabilityLogsOutputReference = exports.DataCloudflareWorkersScriptsResultNamedHandlersList = exports.DataCloudflareWorkersScriptsResultNamedHandlersOutputReference = void 0;
exports.dataCloudflareWorkersScriptsResultNamedHandlersToTerraform = dataCloudflareWorkersScriptsResultNamedHandlersToTerraform;
exports.dataCloudflareWorkersScriptsResultNamedHandlersToHclTerraform = dataCloudflareWorkersScriptsResultNamedHandlersToHclTerraform;
exports.dataCloudflareWorkersScriptsResultObservabilityLogsToTerraform = dataCloudflareWorkersScriptsResultObservabilityLogsToTerraform;
exports.dataCloudflareWorkersScriptsResultObservabilityLogsToHclTerraform = dataCloudflareWorkersScriptsResultObservabilityLogsToHclTerraform;
exports.dataCloudflareWorkersScriptsResultObservabilityTracesToTerraform = dataCloudflareWorkersScriptsResultObservabilityTracesToTerraform;
exports.dataCloudflareWorkersScriptsResultObservabilityTracesToHclTerraform = dataCloudflareWorkersScriptsResultObservabilityTracesToHclTerraform;
exports.dataCloudflareWorkersScriptsResultObservabilityToTerraform = dataCloudflareWorkersScriptsResultObservabilityToTerraform;
exports.dataCloudflareWorkersScriptsResultObservabilityToHclTerraform = dataCloudflareWorkersScriptsResultObservabilityToHclTerraform;
exports.dataCloudflareWorkersScriptsResultPlacementTargetToTerraform = dataCloudflareWorkersScriptsResultPlacementTargetToTerraform;
exports.dataCloudflareWorkersScriptsResultPlacementTargetToHclTerraform = dataCloudflareWorkersScriptsResultPlacementTargetToHclTerraform;
exports.dataCloudflareWorkersScriptsResultPlacementToTerraform = dataCloudflareWorkersScriptsResultPlacementToTerraform;
exports.dataCloudflareWorkersScriptsResultPlacementToHclTerraform = dataCloudflareWorkersScriptsResultPlacementToHclTerraform;
exports.dataCloudflareWorkersScriptsResultRoutesToTerraform = dataCloudflareWorkersScriptsResultRoutesToTerraform;
exports.dataCloudflareWorkersScriptsResultRoutesToHclTerraform = dataCloudflareWorkersScriptsResultRoutesToHclTerraform;
exports.dataCloudflareWorkersScriptsResultTailConsumersToTerraform = dataCloudflareWorkersScriptsResultTailConsumersToTerraform;
exports.dataCloudflareWorkersScriptsResultTailConsumersToHclTerraform = dataCloudflareWorkersScriptsResultTailConsumersToHclTerraform;
exports.dataCloudflareWorkersScriptsResultToTerraform = dataCloudflareWorkersScriptsResultToTerraform;
exports.dataCloudflareWorkersScriptsResultToHclTerraform = dataCloudflareWorkersScriptsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareWorkersScriptsResultNamedHandlersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersScriptsResultNamedHandlersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersScriptsResultNamedHandlersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersScriptsResultNamedHandlersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersScriptsResultNamedHandlersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersScriptsResultNamedHandlersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersScriptsResultNamedHandlersOutputReference.prototype, "handlers", {
        // handlers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('handlers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultNamedHandlersOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersScriptsResultNamedHandlersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersScriptsResultNamedHandlersOutputReference = DataCloudflareWorkersScriptsResultNamedHandlersOutputReference;
var DataCloudflareWorkersScriptsResultNamedHandlersList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersScriptsResultNamedHandlersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersScriptsResultNamedHandlersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkersScriptsResultNamedHandlersList.prototype.get = function (index) {
        return new DataCloudflareWorkersScriptsResultNamedHandlersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkersScriptsResultNamedHandlersList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkersScriptsResultNamedHandlersList = DataCloudflareWorkersScriptsResultNamedHandlersList;
function dataCloudflareWorkersScriptsResultObservabilityLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersScriptsResultObservabilityLogsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersScriptsResultObservabilityLogsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersScriptsResultObservabilityLogsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkersScriptsResultObservabilityLogsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersScriptsResultObservabilityLogsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersScriptsResultObservabilityLogsOutputReference.prototype, "destinations", {
        // destinations - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('destinations');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultObservabilityLogsOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultObservabilityLogsOutputReference.prototype, "headSamplingRate", {
        // head_sampling_rate - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('head_sampling_rate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultObservabilityLogsOutputReference.prototype, "invocationLogs", {
        // invocation_logs - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('invocation_logs');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultObservabilityLogsOutputReference.prototype, "persist", {
        // persist - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('persist');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersScriptsResultObservabilityLogsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersScriptsResultObservabilityLogsOutputReference = DataCloudflareWorkersScriptsResultObservabilityLogsOutputReference;
function dataCloudflareWorkersScriptsResultObservabilityTracesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersScriptsResultObservabilityTracesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersScriptsResultObservabilityTracesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersScriptsResultObservabilityTracesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkersScriptsResultObservabilityTracesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersScriptsResultObservabilityTracesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersScriptsResultObservabilityTracesOutputReference.prototype, "destinations", {
        // destinations - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('destinations');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultObservabilityTracesOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultObservabilityTracesOutputReference.prototype, "headSamplingRate", {
        // head_sampling_rate - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('head_sampling_rate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultObservabilityTracesOutputReference.prototype, "persist", {
        // persist - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('persist');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersScriptsResultObservabilityTracesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersScriptsResultObservabilityTracesOutputReference = DataCloudflareWorkersScriptsResultObservabilityTracesOutputReference;
function dataCloudflareWorkersScriptsResultObservabilityToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersScriptsResultObservabilityToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersScriptsResultObservabilityOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersScriptsResultObservabilityOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkersScriptsResultObservabilityOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // logs - computed: true, optional: false, required: false
        _this._logs = new DataCloudflareWorkersScriptsResultObservabilityLogsOutputReference(_this, "logs");
        // traces - computed: true, optional: false, required: false
        _this._traces = new DataCloudflareWorkersScriptsResultObservabilityTracesOutputReference(_this, "traces");
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersScriptsResultObservabilityOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersScriptsResultObservabilityOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultObservabilityOutputReference.prototype, "headSamplingRate", {
        // head_sampling_rate - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('head_sampling_rate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultObservabilityOutputReference.prototype, "logs", {
        get: function () {
            return this._logs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultObservabilityOutputReference.prototype, "traces", {
        get: function () {
            return this._traces;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersScriptsResultObservabilityOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersScriptsResultObservabilityOutputReference = DataCloudflareWorkersScriptsResultObservabilityOutputReference;
function dataCloudflareWorkersScriptsResultPlacementTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersScriptsResultPlacementTargetToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersScriptsResultPlacementTargetOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersScriptsResultPlacementTargetOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersScriptsResultPlacementTargetOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersScriptsResultPlacementTargetOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersScriptsResultPlacementTargetOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultPlacementTargetOutputReference.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultPlacementTargetOutputReference.prototype, "region", {
        // region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('region');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersScriptsResultPlacementTargetOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersScriptsResultPlacementTargetOutputReference = DataCloudflareWorkersScriptsResultPlacementTargetOutputReference;
var DataCloudflareWorkersScriptsResultPlacementTargetList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersScriptsResultPlacementTargetList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersScriptsResultPlacementTargetList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkersScriptsResultPlacementTargetList.prototype.get = function (index) {
        return new DataCloudflareWorkersScriptsResultPlacementTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkersScriptsResultPlacementTargetList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkersScriptsResultPlacementTargetList = DataCloudflareWorkersScriptsResultPlacementTargetList;
function dataCloudflareWorkersScriptsResultPlacementToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersScriptsResultPlacementToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersScriptsResultPlacementOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersScriptsResultPlacementOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkersScriptsResultPlacementOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // target - computed: true, optional: false, required: false
        _this._target = new DataCloudflareWorkersScriptsResultPlacementTargetList(_this, "target", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersScriptsResultPlacementOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersScriptsResultPlacementOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultPlacementOutputReference.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultPlacementOutputReference.prototype, "lastAnalyzedAt", {
        // last_analyzed_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_analyzed_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultPlacementOutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultPlacementOutputReference.prototype, "region", {
        // region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('region');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultPlacementOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultPlacementOutputReference.prototype, "target", {
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersScriptsResultPlacementOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersScriptsResultPlacementOutputReference = DataCloudflareWorkersScriptsResultPlacementOutputReference;
function dataCloudflareWorkersScriptsResultRoutesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersScriptsResultRoutesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersScriptsResultRoutesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersScriptsResultRoutesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersScriptsResultRoutesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersScriptsResultRoutesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersScriptsResultRoutesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultRoutesOutputReference.prototype, "pattern", {
        // pattern - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('pattern');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultRoutesOutputReference.prototype, "script", {
        // script - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('script');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersScriptsResultRoutesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersScriptsResultRoutesOutputReference = DataCloudflareWorkersScriptsResultRoutesOutputReference;
var DataCloudflareWorkersScriptsResultRoutesList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersScriptsResultRoutesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersScriptsResultRoutesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkersScriptsResultRoutesList.prototype.get = function (index) {
        return new DataCloudflareWorkersScriptsResultRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkersScriptsResultRoutesList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkersScriptsResultRoutesList = DataCloudflareWorkersScriptsResultRoutesList;
function dataCloudflareWorkersScriptsResultTailConsumersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersScriptsResultTailConsumersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersScriptsResultTailConsumersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersScriptsResultTailConsumersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersScriptsResultTailConsumersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersScriptsResultTailConsumersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersScriptsResultTailConsumersOutputReference.prototype, "environment", {
        // environment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('environment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultTailConsumersOutputReference.prototype, "namespace", {
        // namespace - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultTailConsumersOutputReference.prototype, "service", {
        // service - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersScriptsResultTailConsumersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersScriptsResultTailConsumersOutputReference = DataCloudflareWorkersScriptsResultTailConsumersOutputReference;
var DataCloudflareWorkersScriptsResultTailConsumersList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersScriptsResultTailConsumersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersScriptsResultTailConsumersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkersScriptsResultTailConsumersList.prototype.get = function (index) {
        return new DataCloudflareWorkersScriptsResultTailConsumersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkersScriptsResultTailConsumersList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkersScriptsResultTailConsumersList = DataCloudflareWorkersScriptsResultTailConsumersList;
function dataCloudflareWorkersScriptsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersScriptsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersScriptsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersScriptsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersScriptsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // named_handlers - computed: true, optional: false, required: false
        _this._namedHandlers = new DataCloudflareWorkersScriptsResultNamedHandlersList(_this, "named_handlers", false);
        // observability - computed: true, optional: false, required: false
        _this._observability = new DataCloudflareWorkersScriptsResultObservabilityOutputReference(_this, "observability");
        // placement - computed: true, optional: false, required: false
        _this._placement = new DataCloudflareWorkersScriptsResultPlacementOutputReference(_this, "placement");
        // routes - computed: true, optional: false, required: false
        _this._routes = new DataCloudflareWorkersScriptsResultRoutesList(_this, "routes", false);
        // tail_consumers - computed: true, optional: false, required: false
        _this._tailConsumers = new DataCloudflareWorkersScriptsResultTailConsumersList(_this, "tail_consumers", true);
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersScriptsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersScriptsResultOutputReference.prototype, "compatibilityDate", {
        // compatibility_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('compatibility_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultOutputReference.prototype, "compatibilityFlags", {
        // compatibility_flags - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('compatibility_flags'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultOutputReference.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultOutputReference.prototype, "handlers", {
        // handlers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('handlers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultOutputReference.prototype, "hasAssets", {
        // has_assets - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('has_assets');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultOutputReference.prototype, "hasModules", {
        // has_modules - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('has_modules');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultOutputReference.prototype, "lastDeployedFrom", {
        // last_deployed_from - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_deployed_from');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultOutputReference.prototype, "logpush", {
        // logpush - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('logpush');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultOutputReference.prototype, "migrationTag", {
        // migration_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('migration_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultOutputReference.prototype, "namedHandlers", {
        get: function () {
            return this._namedHandlers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultOutputReference.prototype, "observability", {
        get: function () {
            return this._observability;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultOutputReference.prototype, "placement", {
        get: function () {
            return this._placement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultOutputReference.prototype, "placementMode", {
        // placement_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('placement_mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultOutputReference.prototype, "placementStatus", {
        // placement_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('placement_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultOutputReference.prototype, "routes", {
        get: function () {
            return this._routes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultOutputReference.prototype, "tag", {
        // tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultOutputReference.prototype, "tags", {
        // tags - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('tags'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultOutputReference.prototype, "tailConsumers", {
        get: function () {
            return this._tailConsumers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptsResultOutputReference.prototype, "usageModel", {
        // usage_model - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('usage_model');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersScriptsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersScriptsResultOutputReference = DataCloudflareWorkersScriptsResultOutputReference;
var DataCloudflareWorkersScriptsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersScriptsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersScriptsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkersScriptsResultList.prototype.get = function (index) {
        return new DataCloudflareWorkersScriptsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkersScriptsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkersScriptsResultList = DataCloudflareWorkersScriptsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_scripts cloudflare_workers_scripts}
*/
var DataCloudflareWorkersScripts = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersScripts, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_scripts cloudflare_workers_scripts} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkersScriptsConfig = {}
    */
    function DataCloudflareWorkersScripts(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_workers_scripts',
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
        _this._result = new DataCloudflareWorkersScriptsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        _this._tags = config.tags;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkersScripts resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkersScripts to import
    * @param importFromId The id of the existing DataCloudflareWorkersScripts that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_scripts#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkersScripts to import is found
    */
    DataCloudflareWorkersScripts.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workers_scripts", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareWorkersScripts.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersScripts.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersScripts.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScripts.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersScripts.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersScripts.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScripts.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScripts.prototype, "tags", {
        get: function () {
            return this.getStringAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersScripts.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersScripts.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareWorkersScripts.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
            tags: cdktf.stringToTerraform(this._tags),
        };
    };
    DataCloudflareWorkersScripts.prototype.synthesizeHclAttributes = function () {
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
            tags: {
                value: cdktf.stringToHclTerraform(this._tags),
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
    DataCloudflareWorkersScripts.tfResourceType = "cloudflare_workers_scripts";
    return DataCloudflareWorkersScripts;
}(cdktf.TerraformDataSource));
exports.DataCloudflareWorkersScripts = DataCloudflareWorkersScripts;
