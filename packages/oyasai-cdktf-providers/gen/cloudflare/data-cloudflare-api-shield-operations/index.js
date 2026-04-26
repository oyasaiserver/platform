"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operations
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
exports.DataCloudflareApiShieldOperations = exports.DataCloudflareApiShieldOperationsResultList = exports.DataCloudflareApiShieldOperationsResultOutputReference = exports.DataCloudflareApiShieldOperationsResultFeaturesOutputReference = exports.DataCloudflareApiShieldOperationsResultFeaturesThresholdsOutputReference = exports.DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoOutputReference = exports.DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaOutputReference = exports.DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasOutputReference = exports.DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemasOutputReference = exports.DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsOutputReference = exports.DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdOutputReference = exports.DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference = exports.DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference = exports.DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference = exports.DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference = exports.DataCloudflareApiShieldOperationsResultFeaturesApiRoutingOutputReference = void 0;
exports.dataCloudflareApiShieldOperationsResultFeaturesApiRoutingToTerraform = dataCloudflareApiShieldOperationsResultFeaturesApiRoutingToTerraform;
exports.dataCloudflareApiShieldOperationsResultFeaturesApiRoutingToHclTerraform = dataCloudflareApiShieldOperationsResultFeaturesApiRoutingToHclTerraform;
exports.dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToTerraform = dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToTerraform;
exports.dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToHclTerraform = dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToHclTerraform;
exports.dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToTerraform = dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToTerraform;
exports.dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToHclTerraform = dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToHclTerraform;
exports.dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToTerraform = dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToTerraform;
exports.dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToHclTerraform = dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToHclTerraform;
exports.dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToTerraform = dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToTerraform;
exports.dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToHclTerraform = dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToHclTerraform;
exports.dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdToTerraform = dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdToTerraform;
exports.dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdToHclTerraform = dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdToHclTerraform;
exports.dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsToTerraform = dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsToTerraform;
exports.dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsToHclTerraform = dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsToHclTerraform;
exports.dataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemasToTerraform = dataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemasToTerraform;
exports.dataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemasToHclTerraform = dataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemasToHclTerraform;
exports.dataCloudflareApiShieldOperationsResultFeaturesParameterSchemasToTerraform = dataCloudflareApiShieldOperationsResultFeaturesParameterSchemasToTerraform;
exports.dataCloudflareApiShieldOperationsResultFeaturesParameterSchemasToHclTerraform = dataCloudflareApiShieldOperationsResultFeaturesParameterSchemasToHclTerraform;
exports.dataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaToTerraform = dataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaToTerraform;
exports.dataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaToHclTerraform = dataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaToHclTerraform;
exports.dataCloudflareApiShieldOperationsResultFeaturesSchemaInfoToTerraform = dataCloudflareApiShieldOperationsResultFeaturesSchemaInfoToTerraform;
exports.dataCloudflareApiShieldOperationsResultFeaturesSchemaInfoToHclTerraform = dataCloudflareApiShieldOperationsResultFeaturesSchemaInfoToHclTerraform;
exports.dataCloudflareApiShieldOperationsResultFeaturesThresholdsToTerraform = dataCloudflareApiShieldOperationsResultFeaturesThresholdsToTerraform;
exports.dataCloudflareApiShieldOperationsResultFeaturesThresholdsToHclTerraform = dataCloudflareApiShieldOperationsResultFeaturesThresholdsToHclTerraform;
exports.dataCloudflareApiShieldOperationsResultFeaturesToTerraform = dataCloudflareApiShieldOperationsResultFeaturesToTerraform;
exports.dataCloudflareApiShieldOperationsResultFeaturesToHclTerraform = dataCloudflareApiShieldOperationsResultFeaturesToHclTerraform;
exports.dataCloudflareApiShieldOperationsResultToTerraform = dataCloudflareApiShieldOperationsResultToTerraform;
exports.dataCloudflareApiShieldOperationsResultToHclTerraform = dataCloudflareApiShieldOperationsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareApiShieldOperationsResultFeaturesApiRoutingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationsResultFeaturesApiRoutingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationsResultFeaturesApiRoutingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationsResultFeaturesApiRoutingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationsResultFeaturesApiRoutingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesApiRoutingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesApiRoutingOutputReference.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesApiRoutingOutputReference.prototype, "route", {
        // route - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('route');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationsResultFeaturesApiRoutingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationsResultFeaturesApiRoutingOutputReference = DataCloudflareApiShieldOperationsResultFeaturesApiRoutingOutputReference;
function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.prototype, "lower", {
        // lower - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('lower');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.prototype, "upper", {
        // upper - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('upper');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference = DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference;
function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.prototype, "lower", {
        // lower - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('lower');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.prototype, "upper", {
        // upper - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('upper');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference = DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference;
function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.prototype, "lower", {
        // lower - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('lower');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.prototype, "upper", {
        // upper - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('upper');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference = DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference;
function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // p90 - computed: true, optional: false, required: false
        _this._p90 = new DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference(_this, "p90");
        // p95 - computed: true, optional: false, required: false
        _this._p95 = new DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference(_this, "p95");
        // p99 - computed: true, optional: false, required: false
        _this._p99 = new DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference(_this, "p99");
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.prototype, "p90", {
        get: function () {
            return this._p90;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.prototype, "p95", {
        get: function () {
            return this._p95;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.prototype, "p99", {
        get: function () {
            return this._p99;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference = DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference;
function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // confidence_intervals - computed: true, optional: false, required: false
        _this._confidenceIntervals = new DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference(_this, "confidence_intervals");
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.prototype, "confidenceIntervals", {
        get: function () {
            return this._confidenceIntervals;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.prototype, "mean", {
        // mean - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('mean');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdOutputReference = DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdOutputReference;
function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // suggested_threshold - computed: true, optional: false, required: false
        _this._suggestedThreshold = new DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsSuggestedThresholdOutputReference(_this, "suggested_threshold");
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsOutputReference.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsOutputReference.prototype, "suggestedThreshold", {
        get: function () {
            return this._suggestedThreshold;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsOutputReference = DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsOutputReference;
function dataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemasToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemasToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemasOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemasOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemasOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemasOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemasOutputReference.prototype, "parameters", {
        // parameters - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('parameters');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemasOutputReference.prototype, "responses", {
        // responses - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('responses');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemasOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemasOutputReference = DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemasOutputReference;
function dataCloudflareApiShieldOperationsResultFeaturesParameterSchemasToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationsResultFeaturesParameterSchemasToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // parameter_schemas - computed: true, optional: false, required: false
        _this._parameterSchemas = new DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasParameterSchemasOutputReference(_this, "parameter_schemas");
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasOutputReference.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasOutputReference.prototype, "parameterSchemas", {
        get: function () {
            return this._parameterSchemas;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasOutputReference = DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasOutputReference;
function dataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaOutputReference.prototype, "isLearned", {
        // is_learned - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_learned');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaOutputReference = DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaOutputReference;
function dataCloudflareApiShieldOperationsResultFeaturesSchemaInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationsResultFeaturesSchemaInfoToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // active_schema - computed: true, optional: false, required: false
        _this._activeSchema = new DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoActiveSchemaOutputReference(_this, "active_schema");
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoOutputReference.prototype, "activeSchema", {
        get: function () {
            return this._activeSchema;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoOutputReference.prototype, "learnedAvailable", {
        // learned_available - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('learned_available');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoOutputReference.prototype, "mitigationAction", {
        // mitigation_action - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mitigation_action');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoOutputReference = DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoOutputReference;
function dataCloudflareApiShieldOperationsResultFeaturesThresholdsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationsResultFeaturesThresholdsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationsResultFeaturesThresholdsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationsResultFeaturesThresholdsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationsResultFeaturesThresholdsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesThresholdsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesThresholdsOutputReference.prototype, "authIdTokens", {
        // auth_id_tokens - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('auth_id_tokens');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesThresholdsOutputReference.prototype, "dataPoints", {
        // data_points - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('data_points');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesThresholdsOutputReference.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesThresholdsOutputReference.prototype, "p50", {
        // p50 - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('p50');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesThresholdsOutputReference.prototype, "p90", {
        // p90 - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('p90');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesThresholdsOutputReference.prototype, "p99", {
        // p99 - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('p99');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesThresholdsOutputReference.prototype, "periodSeconds", {
        // period_seconds - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('period_seconds');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesThresholdsOutputReference.prototype, "requests", {
        // requests - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('requests');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesThresholdsOutputReference.prototype, "suggestedThreshold", {
        // suggested_threshold - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('suggested_threshold');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationsResultFeaturesThresholdsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationsResultFeaturesThresholdsOutputReference = DataCloudflareApiShieldOperationsResultFeaturesThresholdsOutputReference;
function dataCloudflareApiShieldOperationsResultFeaturesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationsResultFeaturesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationsResultFeaturesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationsResultFeaturesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationsResultFeaturesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // api_routing - computed: true, optional: false, required: false
        _this._apiRouting = new DataCloudflareApiShieldOperationsResultFeaturesApiRoutingOutputReference(_this, "api_routing");
        // confidence_intervals - computed: true, optional: false, required: false
        _this._confidenceIntervals = new DataCloudflareApiShieldOperationsResultFeaturesConfidenceIntervalsOutputReference(_this, "confidence_intervals");
        // parameter_schemas - computed: true, optional: false, required: false
        _this._parameterSchemas = new DataCloudflareApiShieldOperationsResultFeaturesParameterSchemasOutputReference(_this, "parameter_schemas");
        // schema_info - computed: true, optional: false, required: false
        _this._schemaInfo = new DataCloudflareApiShieldOperationsResultFeaturesSchemaInfoOutputReference(_this, "schema_info");
        // thresholds - computed: true, optional: false, required: false
        _this._thresholds = new DataCloudflareApiShieldOperationsResultFeaturesThresholdsOutputReference(_this, "thresholds");
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesOutputReference.prototype, "apiRouting", {
        get: function () {
            return this._apiRouting;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesOutputReference.prototype, "confidenceIntervals", {
        get: function () {
            return this._confidenceIntervals;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesOutputReference.prototype, "parameterSchemas", {
        get: function () {
            return this._parameterSchemas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesOutputReference.prototype, "schemaInfo", {
        get: function () {
            return this._schemaInfo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultFeaturesOutputReference.prototype, "thresholds", {
        get: function () {
            return this._thresholds;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationsResultFeaturesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationsResultFeaturesOutputReference = DataCloudflareApiShieldOperationsResultFeaturesOutputReference;
function dataCloudflareApiShieldOperationsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareApiShieldOperationsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // features - computed: true, optional: false, required: false
        _this._features = new DataCloudflareApiShieldOperationsResultFeaturesOutputReference(_this, "features");
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationsResultOutputReference.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultOutputReference.prototype, "features", {
        get: function () {
            return this._features;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultOutputReference.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultOutputReference.prototype, "method", {
        // method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationsResultOutputReference.prototype, "operationId", {
        // operation_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('operation_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationsResultOutputReference = DataCloudflareApiShieldOperationsResultOutputReference;
var DataCloudflareApiShieldOperationsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareApiShieldOperationsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareApiShieldOperationsResultList.prototype.get = function (index) {
        return new DataCloudflareApiShieldOperationsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareApiShieldOperationsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareApiShieldOperationsResultList = DataCloudflareApiShieldOperationsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operations cloudflare_api_shield_operations}
*/
var DataCloudflareApiShieldOperations = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperations, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operations cloudflare_api_shield_operations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareApiShieldOperationsConfig = {}
    */
    function DataCloudflareApiShieldOperations(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_api_shield_operations',
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
        _this._result = new DataCloudflareApiShieldOperationsResultList(_this, "result", false);
        _this._direction = config.direction;
        _this._endpoint = config.endpoint;
        _this._feature = config.feature;
        _this._host = config.host;
        _this._maxItems = config.maxItems;
        _this._method = config.method;
        _this._order = config.order;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareApiShieldOperations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareApiShieldOperations to import
    * @param importFromId The id of the existing DataCloudflareApiShieldOperations that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareApiShieldOperations to import is found
    */
    DataCloudflareApiShieldOperations.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_api_shield_operations", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareApiShieldOperations.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldOperations.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldOperations.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperations.prototype, "endpoint", {
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        set: function (value) {
            this._endpoint = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldOperations.prototype.resetEndpoint = function () {
        this._endpoint = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldOperations.prototype, "endpointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endpoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperations.prototype, "feature", {
        get: function () {
            return this.getListAttribute('feature');
        },
        set: function (value) {
            this._feature = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldOperations.prototype.resetFeature = function () {
        this._feature = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldOperations.prototype, "featureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._feature;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperations.prototype, "host", {
        get: function () {
            return this.getListAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldOperations.prototype.resetHost = function () {
        this._host = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldOperations.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperations.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldOperations.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldOperations.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperations.prototype, "method", {
        get: function () {
            return this.getListAttribute('method');
        },
        set: function (value) {
            this._method = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldOperations.prototype.resetMethod = function () {
        this._method = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldOperations.prototype, "methodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._method;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperations.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldOperations.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldOperations.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperations.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperations.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldOperations.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldOperations.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareApiShieldOperations.prototype.synthesizeAttributes = function () {
        return {
            direction: cdktf.stringToTerraform(this._direction),
            endpoint: cdktf.stringToTerraform(this._endpoint),
            feature: cdktf.listMapper(cdktf.stringToTerraform, false)(this._feature),
            host: cdktf.listMapper(cdktf.stringToTerraform, false)(this._host),
            max_items: cdktf.numberToTerraform(this._maxItems),
            method: cdktf.listMapper(cdktf.stringToTerraform, false)(this._method),
            order: cdktf.stringToTerraform(this._order),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareApiShieldOperations.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            direction: {
                value: cdktf.stringToHclTerraform(this._direction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            endpoint: {
                value: cdktf.stringToHclTerraform(this._endpoint),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            feature: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._feature),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            host: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._host),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            method: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._method),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            order: {
                value: cdktf.stringToHclTerraform(this._order),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
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
    DataCloudflareApiShieldOperations.tfResourceType = "cloudflare_api_shield_operations";
    return DataCloudflareApiShieldOperations;
}(cdktf.TerraformDataSource));
exports.DataCloudflareApiShieldOperations = DataCloudflareApiShieldOperations;
