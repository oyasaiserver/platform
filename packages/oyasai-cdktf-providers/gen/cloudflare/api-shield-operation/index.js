"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_operation
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
exports.ApiShieldOperation = exports.ApiShieldOperationFeaturesOutputReference = exports.ApiShieldOperationFeaturesThresholdsOutputReference = exports.ApiShieldOperationFeaturesSchemaInfoOutputReference = exports.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference = exports.ApiShieldOperationFeaturesParameterSchemasOutputReference = exports.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference = exports.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference = exports.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference = exports.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference = exports.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference = exports.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference = exports.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference = exports.ApiShieldOperationFeaturesApiRoutingOutputReference = void 0;
exports.apiShieldOperationFeaturesApiRoutingToTerraform = apiShieldOperationFeaturesApiRoutingToTerraform;
exports.apiShieldOperationFeaturesApiRoutingToHclTerraform = apiShieldOperationFeaturesApiRoutingToHclTerraform;
exports.apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToTerraform = apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToTerraform;
exports.apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToHclTerraform = apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToHclTerraform;
exports.apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToTerraform = apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToTerraform;
exports.apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToHclTerraform = apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToHclTerraform;
exports.apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToTerraform = apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToTerraform;
exports.apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToHclTerraform = apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToHclTerraform;
exports.apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToTerraform = apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToTerraform;
exports.apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToHclTerraform = apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToHclTerraform;
exports.apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdToTerraform = apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdToTerraform;
exports.apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdToHclTerraform = apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdToHclTerraform;
exports.apiShieldOperationFeaturesConfidenceIntervalsToTerraform = apiShieldOperationFeaturesConfidenceIntervalsToTerraform;
exports.apiShieldOperationFeaturesConfidenceIntervalsToHclTerraform = apiShieldOperationFeaturesConfidenceIntervalsToHclTerraform;
exports.apiShieldOperationFeaturesParameterSchemasParameterSchemasToTerraform = apiShieldOperationFeaturesParameterSchemasParameterSchemasToTerraform;
exports.apiShieldOperationFeaturesParameterSchemasParameterSchemasToHclTerraform = apiShieldOperationFeaturesParameterSchemasParameterSchemasToHclTerraform;
exports.apiShieldOperationFeaturesParameterSchemasToTerraform = apiShieldOperationFeaturesParameterSchemasToTerraform;
exports.apiShieldOperationFeaturesParameterSchemasToHclTerraform = apiShieldOperationFeaturesParameterSchemasToHclTerraform;
exports.apiShieldOperationFeaturesSchemaInfoActiveSchemaToTerraform = apiShieldOperationFeaturesSchemaInfoActiveSchemaToTerraform;
exports.apiShieldOperationFeaturesSchemaInfoActiveSchemaToHclTerraform = apiShieldOperationFeaturesSchemaInfoActiveSchemaToHclTerraform;
exports.apiShieldOperationFeaturesSchemaInfoToTerraform = apiShieldOperationFeaturesSchemaInfoToTerraform;
exports.apiShieldOperationFeaturesSchemaInfoToHclTerraform = apiShieldOperationFeaturesSchemaInfoToHclTerraform;
exports.apiShieldOperationFeaturesThresholdsToTerraform = apiShieldOperationFeaturesThresholdsToTerraform;
exports.apiShieldOperationFeaturesThresholdsToHclTerraform = apiShieldOperationFeaturesThresholdsToHclTerraform;
exports.apiShieldOperationFeaturesToTerraform = apiShieldOperationFeaturesToTerraform;
exports.apiShieldOperationFeaturesToHclTerraform = apiShieldOperationFeaturesToHclTerraform;
var cdktf = require("cdktf");
function apiShieldOperationFeaturesApiRoutingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function apiShieldOperationFeaturesApiRoutingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ApiShieldOperationFeaturesApiRoutingOutputReference = /** @class */ (function (_super) {
    __extends(ApiShieldOperationFeaturesApiRoutingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ApiShieldOperationFeaturesApiRoutingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ApiShieldOperationFeaturesApiRoutingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ApiShieldOperationFeaturesApiRoutingOutputReference.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesApiRoutingOutputReference.prototype, "route", {
        // route - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('route');
        },
        enumerable: false,
        configurable: true
    });
    return ApiShieldOperationFeaturesApiRoutingOutputReference;
}(cdktf.ComplexObject));
exports.ApiShieldOperationFeaturesApiRoutingOutputReference = ApiShieldOperationFeaturesApiRoutingOutputReference;
function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference = /** @class */ (function (_super) {
    __extends(ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.prototype, "lower", {
        // lower - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('lower');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference.prototype, "upper", {
        // upper - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('upper');
        },
        enumerable: false,
        configurable: true
    });
    return ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference;
}(cdktf.ComplexObject));
exports.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference = ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference;
function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference = /** @class */ (function (_super) {
    __extends(ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.prototype, "lower", {
        // lower - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('lower');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference.prototype, "upper", {
        // upper - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('upper');
        },
        enumerable: false,
        configurable: true
    });
    return ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference;
}(cdktf.ComplexObject));
exports.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference = ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference;
function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference = /** @class */ (function (_super) {
    __extends(ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.prototype, "lower", {
        // lower - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('lower');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference.prototype, "upper", {
        // upper - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('upper');
        },
        enumerable: false,
        configurable: true
    });
    return ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference;
}(cdktf.ComplexObject));
exports.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference = ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference;
function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference = /** @class */ (function (_super) {
    __extends(ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // p90 - computed: true, optional: false, required: false
        _this._p90 = new ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP90OutputReference(_this, "p90");
        // p95 - computed: true, optional: false, required: false
        _this._p95 = new ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP95OutputReference(_this, "p95");
        // p99 - computed: true, optional: false, required: false
        _this._p99 = new ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsP99OutputReference(_this, "p99");
        return _this;
    }
    Object.defineProperty(ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.prototype, "p90", {
        get: function () {
            return this._p90;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.prototype, "p95", {
        get: function () {
            return this._p95;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference.prototype, "p99", {
        get: function () {
            return this._p99;
        },
        enumerable: false,
        configurable: true
    });
    return ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference;
}(cdktf.ComplexObject));
exports.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference = ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference;
function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function apiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference = /** @class */ (function (_super) {
    __extends(ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // confidence_intervals - computed: true, optional: false, required: false
        _this._confidenceIntervals = new ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdConfidenceIntervalsOutputReference(_this, "confidence_intervals");
        return _this;
    }
    Object.defineProperty(ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.prototype, "confidenceIntervals", {
        get: function () {
            return this._confidenceIntervals;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference.prototype, "mean", {
        // mean - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('mean');
        },
        enumerable: false,
        configurable: true
    });
    return ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference;
}(cdktf.ComplexObject));
exports.ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference = ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference;
function apiShieldOperationFeaturesConfidenceIntervalsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function apiShieldOperationFeaturesConfidenceIntervalsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ApiShieldOperationFeaturesConfidenceIntervalsOutputReference = /** @class */ (function (_super) {
    __extends(ApiShieldOperationFeaturesConfidenceIntervalsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ApiShieldOperationFeaturesConfidenceIntervalsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // suggested_threshold - computed: true, optional: false, required: false
        _this._suggestedThreshold = new ApiShieldOperationFeaturesConfidenceIntervalsSuggestedThresholdOutputReference(_this, "suggested_threshold");
        return _this;
    }
    Object.defineProperty(ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesConfidenceIntervalsOutputReference.prototype, "suggestedThreshold", {
        get: function () {
            return this._suggestedThreshold;
        },
        enumerable: false,
        configurable: true
    });
    return ApiShieldOperationFeaturesConfidenceIntervalsOutputReference;
}(cdktf.ComplexObject));
exports.ApiShieldOperationFeaturesConfidenceIntervalsOutputReference = ApiShieldOperationFeaturesConfidenceIntervalsOutputReference;
function apiShieldOperationFeaturesParameterSchemasParameterSchemasToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function apiShieldOperationFeaturesParameterSchemasParameterSchemasToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference = /** @class */ (function (_super) {
    __extends(ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.prototype, "parameters", {
        // parameters - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('parameters');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference.prototype, "responses", {
        // responses - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('responses');
        },
        enumerable: false,
        configurable: true
    });
    return ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference;
}(cdktf.ComplexObject));
exports.ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference = ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference;
function apiShieldOperationFeaturesParameterSchemasToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function apiShieldOperationFeaturesParameterSchemasToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ApiShieldOperationFeaturesParameterSchemasOutputReference = /** @class */ (function (_super) {
    __extends(ApiShieldOperationFeaturesParameterSchemasOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ApiShieldOperationFeaturesParameterSchemasOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // parameter_schemas - computed: true, optional: false, required: false
        _this._parameterSchemas = new ApiShieldOperationFeaturesParameterSchemasParameterSchemasOutputReference(_this, "parameter_schemas");
        return _this;
    }
    Object.defineProperty(ApiShieldOperationFeaturesParameterSchemasOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ApiShieldOperationFeaturesParameterSchemasOutputReference.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesParameterSchemasOutputReference.prototype, "parameterSchemas", {
        get: function () {
            return this._parameterSchemas;
        },
        enumerable: false,
        configurable: true
    });
    return ApiShieldOperationFeaturesParameterSchemasOutputReference;
}(cdktf.ComplexObject));
exports.ApiShieldOperationFeaturesParameterSchemasOutputReference = ApiShieldOperationFeaturesParameterSchemasOutputReference;
function apiShieldOperationFeaturesSchemaInfoActiveSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function apiShieldOperationFeaturesSchemaInfoActiveSchemaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference = /** @class */ (function (_super) {
    __extends(ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.prototype, "isLearned", {
        // is_learned - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_learned');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference;
}(cdktf.ComplexObject));
exports.ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference = ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference;
function apiShieldOperationFeaturesSchemaInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function apiShieldOperationFeaturesSchemaInfoToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ApiShieldOperationFeaturesSchemaInfoOutputReference = /** @class */ (function (_super) {
    __extends(ApiShieldOperationFeaturesSchemaInfoOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ApiShieldOperationFeaturesSchemaInfoOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // active_schema - computed: true, optional: false, required: false
        _this._activeSchema = new ApiShieldOperationFeaturesSchemaInfoActiveSchemaOutputReference(_this, "active_schema");
        return _this;
    }
    Object.defineProperty(ApiShieldOperationFeaturesSchemaInfoOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ApiShieldOperationFeaturesSchemaInfoOutputReference.prototype, "activeSchema", {
        get: function () {
            return this._activeSchema;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesSchemaInfoOutputReference.prototype, "learnedAvailable", {
        // learned_available - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('learned_available');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesSchemaInfoOutputReference.prototype, "mitigationAction", {
        // mitigation_action - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mitigation_action');
        },
        enumerable: false,
        configurable: true
    });
    return ApiShieldOperationFeaturesSchemaInfoOutputReference;
}(cdktf.ComplexObject));
exports.ApiShieldOperationFeaturesSchemaInfoOutputReference = ApiShieldOperationFeaturesSchemaInfoOutputReference;
function apiShieldOperationFeaturesThresholdsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function apiShieldOperationFeaturesThresholdsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ApiShieldOperationFeaturesThresholdsOutputReference = /** @class */ (function (_super) {
    __extends(ApiShieldOperationFeaturesThresholdsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ApiShieldOperationFeaturesThresholdsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ApiShieldOperationFeaturesThresholdsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ApiShieldOperationFeaturesThresholdsOutputReference.prototype, "authIdTokens", {
        // auth_id_tokens - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('auth_id_tokens');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesThresholdsOutputReference.prototype, "dataPoints", {
        // data_points - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('data_points');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesThresholdsOutputReference.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesThresholdsOutputReference.prototype, "p50", {
        // p50 - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('p50');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesThresholdsOutputReference.prototype, "p90", {
        // p90 - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('p90');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesThresholdsOutputReference.prototype, "p99", {
        // p99 - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('p99');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesThresholdsOutputReference.prototype, "periodSeconds", {
        // period_seconds - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('period_seconds');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesThresholdsOutputReference.prototype, "requests", {
        // requests - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('requests');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesThresholdsOutputReference.prototype, "suggestedThreshold", {
        // suggested_threshold - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('suggested_threshold');
        },
        enumerable: false,
        configurable: true
    });
    return ApiShieldOperationFeaturesThresholdsOutputReference;
}(cdktf.ComplexObject));
exports.ApiShieldOperationFeaturesThresholdsOutputReference = ApiShieldOperationFeaturesThresholdsOutputReference;
function apiShieldOperationFeaturesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function apiShieldOperationFeaturesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ApiShieldOperationFeaturesOutputReference = /** @class */ (function (_super) {
    __extends(ApiShieldOperationFeaturesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ApiShieldOperationFeaturesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // api_routing - computed: true, optional: false, required: false
        _this._apiRouting = new ApiShieldOperationFeaturesApiRoutingOutputReference(_this, "api_routing");
        // confidence_intervals - computed: true, optional: false, required: false
        _this._confidenceIntervals = new ApiShieldOperationFeaturesConfidenceIntervalsOutputReference(_this, "confidence_intervals");
        // parameter_schemas - computed: true, optional: false, required: false
        _this._parameterSchemas = new ApiShieldOperationFeaturesParameterSchemasOutputReference(_this, "parameter_schemas");
        // schema_info - computed: true, optional: false, required: false
        _this._schemaInfo = new ApiShieldOperationFeaturesSchemaInfoOutputReference(_this, "schema_info");
        // thresholds - computed: true, optional: false, required: false
        _this._thresholds = new ApiShieldOperationFeaturesThresholdsOutputReference(_this, "thresholds");
        return _this;
    }
    Object.defineProperty(ApiShieldOperationFeaturesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ApiShieldOperationFeaturesOutputReference.prototype, "apiRouting", {
        get: function () {
            return this._apiRouting;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesOutputReference.prototype, "confidenceIntervals", {
        get: function () {
            return this._confidenceIntervals;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesOutputReference.prototype, "parameterSchemas", {
        get: function () {
            return this._parameterSchemas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesOutputReference.prototype, "schemaInfo", {
        get: function () {
            return this._schemaInfo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperationFeaturesOutputReference.prototype, "thresholds", {
        get: function () {
            return this._thresholds;
        },
        enumerable: false,
        configurable: true
    });
    return ApiShieldOperationFeaturesOutputReference;
}(cdktf.ComplexObject));
exports.ApiShieldOperationFeaturesOutputReference = ApiShieldOperationFeaturesOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_operation cloudflare_api_shield_operation}
*/
var ApiShieldOperation = /** @class */ (function (_super) {
    __extends(ApiShieldOperation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_operation cloudflare_api_shield_operation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiShieldOperationConfig
    */
    function ApiShieldOperation(scope, id, config) {
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
        _this._features = new ApiShieldOperationFeaturesOutputReference(_this, "features");
        _this._endpoint = config.endpoint;
        _this._host = config.host;
        _this._method = config.method;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ApiShieldOperation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiShieldOperation to import
    * @param importFromId The id of the existing ApiShieldOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_operation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiShieldOperation to import is found
    */
    ApiShieldOperation.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_api_shield_operation", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ApiShieldOperation.prototype, "endpoint", {
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        set: function (value) {
            this._endpoint = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperation.prototype, "endpointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endpoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperation.prototype, "features", {
        get: function () {
            return this._features;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperation.prototype, "host", {
        get: function () {
            return this.getStringAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperation.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperation.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperation.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperation.prototype, "method", {
        get: function () {
            return this.getStringAttribute('method');
        },
        set: function (value) {
            this._method = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperation.prototype, "methodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._method;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperation.prototype, "operationId", {
        // operation_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('operation_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldOperation.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiShieldOperation.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(ApiShieldOperation.prototype, "zoneIdInput", {
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
    ApiShieldOperation.prototype.synthesizeAttributes = function () {
        return {
            endpoint: cdktf.stringToTerraform(this._endpoint),
            host: cdktf.stringToTerraform(this._host),
            method: cdktf.stringToTerraform(this._method),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    ApiShieldOperation.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            endpoint: {
                value: cdktf.stringToHclTerraform(this._endpoint),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            host: {
                value: cdktf.stringToHclTerraform(this._host),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            method: {
                value: cdktf.stringToHclTerraform(this._method),
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
    ApiShieldOperation.tfResourceType = "cloudflare_api_shield_operation";
    return ApiShieldOperation;
}(cdktf.TerraformResource));
exports.ApiShieldOperation = ApiShieldOperation;
