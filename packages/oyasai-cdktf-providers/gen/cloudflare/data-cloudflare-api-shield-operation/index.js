"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation
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
exports.DataCloudflareApiShieldOperation = exports.DataCloudflareApiShieldOperationFilterOutputReference = exports.DataCloudflareApiShieldOperationFeaturesOutputReference = exports.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference = exports.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference = exports.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference = exports.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference = exports.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference = exports.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference = exports.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference = exports.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference = exports.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference = exports.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference = exports.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference = exports.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference = void 0;
exports.dataCloudflareApiShieldOperationFeaturesApiRoutingToTerraform = dataCloudflareApiShieldOperationFeaturesApiRoutingToTerraform;
exports.dataCloudflareApiShieldOperationFeaturesApiRoutingToHclTerraform = dataCloudflareApiShieldOperationFeaturesApiRoutingToHclTerraform;
exports.dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToTerraform = dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToTerraform;
exports.dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToHclTerraform = dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToHclTerraform;
exports.dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToTerraform = dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToTerraform;
exports.dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToHclTerraform = dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToHclTerraform;
exports.dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToTerraform = dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToTerraform;
exports.dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToHclTerraform = dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToHclTerraform;
exports.dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToTerraform = dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToTerraform;
exports.dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToHclTerraform = dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToHclTerraform;
exports.dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdToTerraform = dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdToTerraform;
exports.dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdToHclTerraform = dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdToHclTerraform;
exports.dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsToTerraform = dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsToTerraform;
exports.dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsToHclTerraform = dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsToHclTerraform;
exports.dataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasToTerraform = dataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasToTerraform;
exports.dataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasToHclTerraform = dataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasToHclTerraform;
exports.dataCloudflareApiShieldOperationFeaturesParameterSchemasToTerraform = dataCloudflareApiShieldOperationFeaturesParameterSchemasToTerraform;
exports.dataCloudflareApiShieldOperationFeaturesParameterSchemasToHclTerraform = dataCloudflareApiShieldOperationFeaturesParameterSchemasToHclTerraform;
exports.dataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaToTerraform = dataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaToTerraform;
exports.dataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaToHclTerraform = dataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaToHclTerraform;
exports.dataCloudflareApiShieldOperationFeaturesSchemaInfoToTerraform = dataCloudflareApiShieldOperationFeaturesSchemaInfoToTerraform;
exports.dataCloudflareApiShieldOperationFeaturesSchemaInfoToHclTerraform = dataCloudflareApiShieldOperationFeaturesSchemaInfoToHclTerraform;
exports.dataCloudflareApiShieldOperationFeaturesThresholdsToTerraform = dataCloudflareApiShieldOperationFeaturesThresholdsToTerraform;
exports.dataCloudflareApiShieldOperationFeaturesThresholdsToHclTerraform = dataCloudflareApiShieldOperationFeaturesThresholdsToHclTerraform;
exports.dataCloudflareApiShieldOperationFeaturesToTerraform = dataCloudflareApiShieldOperationFeaturesToTerraform;
exports.dataCloudflareApiShieldOperationFeaturesToHclTerraform = dataCloudflareApiShieldOperationFeaturesToHclTerraform;
exports.dataCloudflareApiShieldOperationFilterToTerraform = dataCloudflareApiShieldOperationFilterToTerraform;
exports.dataCloudflareApiShieldOperationFilterToHclTerraform = dataCloudflareApiShieldOperationFilterToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareApiShieldOperationFeaturesApiRoutingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationFeaturesApiRoutingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference.prototype, "route", {
        // route - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('route');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference = DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference;
function dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.prototype, "lower", {
        // lower - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('lower');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.prototype, "upper", {
        // upper - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('upper');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference = DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference;
function dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.prototype, "lower", {
        // lower - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('lower');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.prototype, "upper", {
        // upper - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('upper');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference = DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference;
function dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.prototype, "lower", {
        // lower - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('lower');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.prototype, "upper", {
        // upper - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('upper');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference = DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference;
function dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // p90 - computed: true, optional: false, required: false
        _this._p90 = new DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference(_this, "p90");
        // p95 - computed: true, optional: false, required: false
        _this._p95 = new DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference(_this, "p95");
        // p99 - computed: true, optional: false, required: false
        _this._p99 = new DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference(_this, "p99");
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.prototype, "p90", {
        get: function () {
            return this._p90;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.prototype, "p95", {
        get: function () {
            return this._p95;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.prototype, "p99", {
        get: function () {
            return this._p99;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference = DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference;
function dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // confidence_intervals - computed: true, optional: false, required: false
        _this._confidenceIntervals = new DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference(_this, "confidence_intervals");
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.prototype, "confidenceIntervals", {
        get: function () {
            return this._confidenceIntervals;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.prototype, "mean", {
        // mean - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('mean');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference = DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference;
function dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationFeaturesConfidenceIntervalsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // suggested_threshold - computed: true, optional: false, required: false
        _this._suggestedThreshold = new DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference(_this, "suggested_threshold");
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference.prototype, "suggestedThreshold", {
        get: function () {
            return this._suggestedThreshold;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference = DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference;
function dataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.prototype, "parameters", {
        // parameters - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('parameters');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.prototype, "responses", {
        // responses - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('responses');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference = DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference;
function dataCloudflareApiShieldOperationFeaturesParameterSchemasToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationFeaturesParameterSchemasToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // parameter_schemas - computed: true, optional: false, required: false
        _this._parameterSchemas = new DataCloudflareApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference(_this, "parameter_schemas");
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference.prototype, "parameterSchemas", {
        get: function () {
            return this._parameterSchemas;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference = DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference;
function dataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.prototype, "isLearned", {
        // is_learned - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_learned');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference = DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference;
function dataCloudflareApiShieldOperationFeaturesSchemaInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationFeaturesSchemaInfoToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // active_schema - computed: true, optional: false, required: false
        _this._activeSchema = new DataCloudflareApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference(_this, "active_schema");
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.prototype, "activeSchema", {
        get: function () {
            return this._activeSchema;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.prototype, "learnedAvailable", {
        // learned_available - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('learned_available');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference.prototype, "mitigationAction", {
        // mitigation_action - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mitigation_action');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference = DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference;
function dataCloudflareApiShieldOperationFeaturesThresholdsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationFeaturesThresholdsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.prototype, "authIdTokens", {
        // auth_id_tokens - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('auth_id_tokens');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.prototype, "dataPoints", {
        // data_points - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('data_points');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.prototype, "p50", {
        // p50 - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('p50');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.prototype, "p90", {
        // p90 - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('p90');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.prototype, "p99", {
        // p99 - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('p99');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.prototype, "periodSeconds", {
        // period_seconds - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('period_seconds');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.prototype, "requests", {
        // requests - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('requests');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference.prototype, "suggestedThreshold", {
        // suggested_threshold - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('suggested_threshold');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference = DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference;
function dataCloudflareApiShieldOperationFeaturesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldOperationFeaturesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldOperationFeaturesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationFeaturesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationFeaturesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // api_routing - computed: true, optional: false, required: false
        _this._apiRouting = new DataCloudflareApiShieldOperationFeaturesApiRoutingOutputReference(_this, "api_routing");
        // confidence_intervals - computed: true, optional: false, required: false
        _this._confidenceIntervals = new DataCloudflareApiShieldOperationFeaturesConfidenceIntervalsOutputReference(_this, "confidence_intervals");
        // parameter_schemas - computed: true, optional: false, required: false
        _this._parameterSchemas = new DataCloudflareApiShieldOperationFeaturesParameterSchemasOutputReference(_this, "parameter_schemas");
        // schema_info - computed: true, optional: false, required: false
        _this._schemaInfo = new DataCloudflareApiShieldOperationFeaturesSchemaInfoOutputReference(_this, "schema_info");
        // thresholds - computed: true, optional: false, required: false
        _this._thresholds = new DataCloudflareApiShieldOperationFeaturesThresholdsOutputReference(_this, "thresholds");
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesOutputReference.prototype, "apiRouting", {
        get: function () {
            return this._apiRouting;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesOutputReference.prototype, "confidenceIntervals", {
        get: function () {
            return this._confidenceIntervals;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesOutputReference.prototype, "parameterSchemas", {
        get: function () {
            return this._parameterSchemas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesOutputReference.prototype, "schemaInfo", {
        get: function () {
            return this._schemaInfo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFeaturesOutputReference.prototype, "thresholds", {
        get: function () {
            return this._thresholds;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationFeaturesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationFeaturesOutputReference = DataCloudflareApiShieldOperationFeaturesOutputReference;
function dataCloudflareApiShieldOperationFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        direction: cdktf.stringToTerraform(struct.direction),
        endpoint: cdktf.stringToTerraform(struct.endpoint),
        feature: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.feature),
        host: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.host),
        method: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.method),
        order: cdktf.stringToTerraform(struct.order),
    };
}
function dataCloudflareApiShieldOperationFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        direction: {
            value: cdktf.stringToHclTerraform(struct.direction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endpoint: {
            value: cdktf.stringToHclTerraform(struct.endpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        feature: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.feature),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        host: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.host),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        method: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.method),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        order: {
            value: cdktf.stringToHclTerraform(struct.order),
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
var DataCloudflareApiShieldOperationFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperationFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareApiShieldOperationFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldOperationFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._direction !== undefined) {
                hasAnyValues = true;
                internalValueResult.direction = this._direction;
            }
            if (this._endpoint !== undefined) {
                hasAnyValues = true;
                internalValueResult.endpoint = this._endpoint;
            }
            if (this._feature !== undefined) {
                hasAnyValues = true;
                internalValueResult.feature = this._feature;
            }
            if (this._host !== undefined) {
                hasAnyValues = true;
                internalValueResult.host = this._host;
            }
            if (this._method !== undefined) {
                hasAnyValues = true;
                internalValueResult.method = this._method;
            }
            if (this._order !== undefined) {
                hasAnyValues = true;
                internalValueResult.order = this._order;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._direction = undefined;
                this._endpoint = undefined;
                this._feature = undefined;
                this._host = undefined;
                this._method = undefined;
                this._order = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._direction = value.direction;
                this._endpoint = value.endpoint;
                this._feature = value.feature;
                this._host = value.host;
                this._method = value.method;
                this._order = value.order;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFilterOutputReference.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldOperationFilterOutputReference.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldOperationFilterOutputReference.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFilterOutputReference.prototype, "endpoint", {
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        set: function (value) {
            this._endpoint = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldOperationFilterOutputReference.prototype.resetEndpoint = function () {
        this._endpoint = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldOperationFilterOutputReference.prototype, "endpointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endpoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFilterOutputReference.prototype, "feature", {
        get: function () {
            return this.getListAttribute('feature');
        },
        set: function (value) {
            this._feature = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldOperationFilterOutputReference.prototype.resetFeature = function () {
        this._feature = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldOperationFilterOutputReference.prototype, "featureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._feature;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFilterOutputReference.prototype, "host", {
        get: function () {
            return this.getListAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldOperationFilterOutputReference.prototype.resetHost = function () {
        this._host = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldOperationFilterOutputReference.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFilterOutputReference.prototype, "method", {
        get: function () {
            return this.getListAttribute('method');
        },
        set: function (value) {
            this._method = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldOperationFilterOutputReference.prototype.resetMethod = function () {
        this._method = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldOperationFilterOutputReference.prototype, "methodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._method;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperationFilterOutputReference.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldOperationFilterOutputReference.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldOperationFilterOutputReference.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldOperationFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldOperationFilterOutputReference = DataCloudflareApiShieldOperationFilterOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation cloudflare_api_shield_operation}
*/
var DataCloudflareApiShieldOperation = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldOperation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation cloudflare_api_shield_operation} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareApiShieldOperationConfig = {}
    */
    function DataCloudflareApiShieldOperation(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_api_shield_operation',
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
        // features - computed: true, optional: false, required: false
        _this._features = new DataCloudflareApiShieldOperationFeaturesOutputReference(_this, "features");
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareApiShieldOperationFilterOutputReference(_this, "filter");
        _this._feature = config.feature;
        _this._filter.internalValue = config.filter;
        _this._operationId = config.operationId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareApiShieldOperation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareApiShieldOperation to import
    * @param importFromId The id of the existing DataCloudflareApiShieldOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield_operation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareApiShieldOperation to import is found
    */
    DataCloudflareApiShieldOperation.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_api_shield_operation", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareApiShieldOperation.prototype, "endpoint", {
        // ==========
        // ATTRIBUTES
        // ==========
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperation.prototype, "feature", {
        get: function () {
            return this.getListAttribute('feature');
        },
        set: function (value) {
            this._feature = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldOperation.prototype.resetFeature = function () {
        this._feature = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldOperation.prototype, "featureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._feature;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperation.prototype, "features", {
        get: function () {
            return this._features;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperation.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldOperation.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareApiShieldOperation.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldOperation.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperation.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperation.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperation.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperation.prototype, "method", {
        // method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperation.prototype, "operationId", {
        get: function () {
            return this.getStringAttribute('operation_id');
        },
        set: function (value) {
            this._operationId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldOperation.prototype.resetOperationId = function () {
        this._operationId = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldOperation.prototype, "operationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldOperation.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShieldOperation.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareApiShieldOperation.prototype, "zoneIdInput", {
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
    DataCloudflareApiShieldOperation.prototype.synthesizeAttributes = function () {
        return {
            feature: cdktf.listMapper(cdktf.stringToTerraform, false)(this._feature),
            filter: dataCloudflareApiShieldOperationFilterToTerraform(this._filter.internalValue),
            operation_id: cdktf.stringToTerraform(this._operationId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareApiShieldOperation.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            feature: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._feature),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            filter: {
                value: dataCloudflareApiShieldOperationFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareApiShieldOperationFilter",
            },
            operation_id: {
                value: cdktf.stringToHclTerraform(this._operationId),
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
    DataCloudflareApiShieldOperation.tfResourceType = "cloudflare_api_shield_operation";
    return DataCloudflareApiShieldOperation;
}(cdktf.TerraformDataSource));
exports.DataCloudflareApiShieldOperation = DataCloudflareApiShieldOperation;
