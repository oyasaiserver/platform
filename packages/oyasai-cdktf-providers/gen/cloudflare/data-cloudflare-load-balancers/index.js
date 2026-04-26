"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancers
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
exports.DataCloudflareLoadBalancers = exports.DataCloudflareLoadBalancersResultList = exports.DataCloudflareLoadBalancersResultOutputReference = exports.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference = exports.DataCloudflareLoadBalancersResultRulesList = exports.DataCloudflareLoadBalancersResultRulesOutputReference = exports.DataCloudflareLoadBalancersResultRulesOverridesOutputReference = exports.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference = exports.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference = exports.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference = exports.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference = exports.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference = exports.DataCloudflareLoadBalancersResultRandomSteeringOutputReference = exports.DataCloudflareLoadBalancersResultLocationStrategyOutputReference = exports.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference = void 0;
exports.dataCloudflareLoadBalancersResultAdaptiveRoutingToTerraform = dataCloudflareLoadBalancersResultAdaptiveRoutingToTerraform;
exports.dataCloudflareLoadBalancersResultAdaptiveRoutingToHclTerraform = dataCloudflareLoadBalancersResultAdaptiveRoutingToHclTerraform;
exports.dataCloudflareLoadBalancersResultLocationStrategyToTerraform = dataCloudflareLoadBalancersResultLocationStrategyToTerraform;
exports.dataCloudflareLoadBalancersResultLocationStrategyToHclTerraform = dataCloudflareLoadBalancersResultLocationStrategyToHclTerraform;
exports.dataCloudflareLoadBalancersResultRandomSteeringToTerraform = dataCloudflareLoadBalancersResultRandomSteeringToTerraform;
exports.dataCloudflareLoadBalancersResultRandomSteeringToHclTerraform = dataCloudflareLoadBalancersResultRandomSteeringToHclTerraform;
exports.dataCloudflareLoadBalancersResultRulesFixedResponseToTerraform = dataCloudflareLoadBalancersResultRulesFixedResponseToTerraform;
exports.dataCloudflareLoadBalancersResultRulesFixedResponseToHclTerraform = dataCloudflareLoadBalancersResultRulesFixedResponseToHclTerraform;
exports.dataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingToTerraform = dataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingToTerraform;
exports.dataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingToHclTerraform = dataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingToHclTerraform;
exports.dataCloudflareLoadBalancersResultRulesOverridesLocationStrategyToTerraform = dataCloudflareLoadBalancersResultRulesOverridesLocationStrategyToTerraform;
exports.dataCloudflareLoadBalancersResultRulesOverridesLocationStrategyToHclTerraform = dataCloudflareLoadBalancersResultRulesOverridesLocationStrategyToHclTerraform;
exports.dataCloudflareLoadBalancersResultRulesOverridesRandomSteeringToTerraform = dataCloudflareLoadBalancersResultRulesOverridesRandomSteeringToTerraform;
exports.dataCloudflareLoadBalancersResultRulesOverridesRandomSteeringToHclTerraform = dataCloudflareLoadBalancersResultRulesOverridesRandomSteeringToHclTerraform;
exports.dataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesToTerraform = dataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesToTerraform;
exports.dataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesToHclTerraform = dataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesToHclTerraform;
exports.dataCloudflareLoadBalancersResultRulesOverridesToTerraform = dataCloudflareLoadBalancersResultRulesOverridesToTerraform;
exports.dataCloudflareLoadBalancersResultRulesOverridesToHclTerraform = dataCloudflareLoadBalancersResultRulesOverridesToHclTerraform;
exports.dataCloudflareLoadBalancersResultRulesToTerraform = dataCloudflareLoadBalancersResultRulesToTerraform;
exports.dataCloudflareLoadBalancersResultRulesToHclTerraform = dataCloudflareLoadBalancersResultRulesToHclTerraform;
exports.dataCloudflareLoadBalancersResultSessionAffinityAttributesToTerraform = dataCloudflareLoadBalancersResultSessionAffinityAttributesToTerraform;
exports.dataCloudflareLoadBalancersResultSessionAffinityAttributesToHclTerraform = dataCloudflareLoadBalancersResultSessionAffinityAttributesToHclTerraform;
exports.dataCloudflareLoadBalancersResultToTerraform = dataCloudflareLoadBalancersResultToTerraform;
exports.dataCloudflareLoadBalancersResultToHclTerraform = dataCloudflareLoadBalancersResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareLoadBalancersResultAdaptiveRoutingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancersResultAdaptiveRoutingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.prototype, "failoverAcrossPools", {
        // failover_across_pools - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('failover_across_pools');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference = DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference;
function dataCloudflareLoadBalancersResultLocationStrategyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancersResultLocationStrategyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancersResultLocationStrategyOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancersResultLocationStrategyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancersResultLocationStrategyOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancersResultLocationStrategyOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancersResultLocationStrategyOutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultLocationStrategyOutputReference.prototype, "preferEcs", {
        // prefer_ecs - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prefer_ecs');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancersResultLocationStrategyOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancersResultLocationStrategyOutputReference = DataCloudflareLoadBalancersResultLocationStrategyOutputReference;
function dataCloudflareLoadBalancersResultRandomSteeringToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancersResultRandomSteeringToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancersResultRandomSteeringOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancersResultRandomSteeringOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancersResultRandomSteeringOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // pool_weights - computed: true, optional: false, required: false
        _this._poolWeights = new cdktf.NumberMap(_this, "pool_weights");
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancersResultRandomSteeringOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancersResultRandomSteeringOutputReference.prototype, "defaultWeight", {
        // default_weight - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('default_weight');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRandomSteeringOutputReference.prototype, "poolWeights", {
        get: function () {
            return this._poolWeights;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancersResultRandomSteeringOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancersResultRandomSteeringOutputReference = DataCloudflareLoadBalancersResultRandomSteeringOutputReference;
function dataCloudflareLoadBalancersResultRulesFixedResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancersResultRulesFixedResponseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.prototype, "contentType", {
        // content_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.prototype, "location", {
        // location - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('location');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.prototype, "messageBody", {
        // message_body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('message_body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.prototype, "statusCode", {
        // status_code - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('status_code');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference = DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference;
function dataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.prototype, "failoverAcrossPools", {
        // failover_across_pools - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('failover_across_pools');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference = DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference;
function dataCloudflareLoadBalancersResultRulesOverridesLocationStrategyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancersResultRulesOverridesLocationStrategyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.prototype, "preferEcs", {
        // prefer_ecs - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prefer_ecs');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference = DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference;
function dataCloudflareLoadBalancersResultRulesOverridesRandomSteeringToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancersResultRulesOverridesRandomSteeringToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // pool_weights - computed: true, optional: false, required: false
        _this._poolWeights = new cdktf.NumberMap(_this, "pool_weights");
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.prototype, "defaultWeight", {
        // default_weight - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('default_weight');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.prototype, "poolWeights", {
        get: function () {
            return this._poolWeights;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference = DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference;
function dataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        drain_duration: cdktf.numberToTerraform(struct.drainDuration),
    };
}
function dataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        drain_duration: {
            value: cdktf.numberToHclTerraform(struct.drainDuration),
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
}
var DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._drainDuration !== undefined) {
                hasAnyValues = true;
                internalValueResult.drainDuration = this._drainDuration;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._drainDuration = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._drainDuration = value.drainDuration;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.prototype, "drainDuration", {
        get: function () {
            return this.getNumberAttribute('drain_duration');
        },
        set: function (value) {
            this._drainDuration = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.prototype.resetDrainDuration = function () {
        this._drainDuration = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.prototype, "drainDurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._drainDuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.prototype, "headers", {
        // headers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('headers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.prototype, "requireAllHeaders", {
        // require_all_headers - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('require_all_headers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.prototype, "samesite", {
        // samesite - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('samesite');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.prototype, "secure", {
        // secure - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secure');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.prototype, "zeroDowntimeFailover", {
        // zero_downtime_failover - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zero_downtime_failover');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference = DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference;
function dataCloudflareLoadBalancersResultRulesOverridesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.countryPools),
        pop_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.popPools),
        region_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.regionPools),
    };
}
function dataCloudflareLoadBalancersResultRulesOverridesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        country_pools: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.countryPools),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
        pop_pools: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.popPools),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
        region_pools: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.regionPools),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var DataCloudflareLoadBalancersResultRulesOverridesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancersResultRulesOverridesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancersResultRulesOverridesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // adaptive_routing - computed: true, optional: false, required: false
        _this._adaptiveRouting = new DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference(_this, "adaptive_routing");
        // location_strategy - computed: true, optional: false, required: false
        _this._locationStrategy = new DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference(_this, "location_strategy");
        // random_steering - computed: true, optional: false, required: false
        _this._randomSteering = new DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference(_this, "random_steering");
        // session_affinity_attributes - computed: true, optional: false, required: false
        _this._sessionAffinityAttributes = new DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference(_this, "session_affinity_attributes");
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._countryPools !== undefined) {
                hasAnyValues = true;
                internalValueResult.countryPools = this._countryPools;
            }
            if (this._popPools !== undefined) {
                hasAnyValues = true;
                internalValueResult.popPools = this._popPools;
            }
            if (this._regionPools !== undefined) {
                hasAnyValues = true;
                internalValueResult.regionPools = this._regionPools;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._countryPools = undefined;
                this._popPools = undefined;
                this._regionPools = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._countryPools = value.countryPools;
                this._popPools = value.popPools;
                this._regionPools = value.regionPools;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesOutputReference.prototype, "adaptiveRouting", {
        get: function () {
            return this._adaptiveRouting;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesOutputReference.prototype, "countryPools", {
        get: function () {
            return this.interpolationForAttribute('country_pools');
        },
        set: function (value) {
            this._countryPools = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancersResultRulesOverridesOutputReference.prototype.resetCountryPools = function () {
        this._countryPools = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesOutputReference.prototype, "countryPoolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._countryPools;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesOutputReference.prototype, "defaultPools", {
        // default_pools - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('default_pools');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesOutputReference.prototype, "fallbackPool", {
        // fallback_pool - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fallback_pool');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesOutputReference.prototype, "locationStrategy", {
        get: function () {
            return this._locationStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesOutputReference.prototype, "popPools", {
        get: function () {
            return this.interpolationForAttribute('pop_pools');
        },
        set: function (value) {
            this._popPools = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancersResultRulesOverridesOutputReference.prototype.resetPopPools = function () {
        this._popPools = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesOutputReference.prototype, "popPoolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._popPools;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesOutputReference.prototype, "randomSteering", {
        get: function () {
            return this._randomSteering;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesOutputReference.prototype, "regionPools", {
        get: function () {
            return this.interpolationForAttribute('region_pools');
        },
        set: function (value) {
            this._regionPools = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancersResultRulesOverridesOutputReference.prototype.resetRegionPools = function () {
        this._regionPools = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesOutputReference.prototype, "regionPoolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._regionPools;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesOutputReference.prototype, "sessionAffinity", {
        // session_affinity - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('session_affinity');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesOutputReference.prototype, "sessionAffinityAttributes", {
        get: function () {
            return this._sessionAffinityAttributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesOutputReference.prototype, "sessionAffinityTtl", {
        // session_affinity_ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('session_affinity_ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesOutputReference.prototype, "steeringPolicy", {
        // steering_policy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('steering_policy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOverridesOutputReference.prototype, "ttl", {
        // ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancersResultRulesOverridesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancersResultRulesOverridesOutputReference = DataCloudflareLoadBalancersResultRulesOverridesOutputReference;
function dataCloudflareLoadBalancersResultRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancersResultRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancersResultRulesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancersResultRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareLoadBalancersResultRulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // fixed_response - computed: true, optional: false, required: false
        _this._fixedResponse = new DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference(_this, "fixed_response");
        // overrides - computed: true, optional: false, required: false
        _this._overrides = new DataCloudflareLoadBalancersResultRulesOverridesOutputReference(_this, "overrides");
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOutputReference.prototype, "condition", {
        // condition - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('condition');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOutputReference.prototype, "disabled", {
        // disabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOutputReference.prototype, "fixedResponse", {
        get: function () {
            return this._fixedResponse;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOutputReference.prototype, "overrides", {
        get: function () {
            return this._overrides;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOutputReference.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultRulesOutputReference.prototype, "terminates", {
        // terminates - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('terminates');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancersResultRulesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancersResultRulesOutputReference = DataCloudflareLoadBalancersResultRulesOutputReference;
var DataCloudflareLoadBalancersResultRulesList = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancersResultRulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareLoadBalancersResultRulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareLoadBalancersResultRulesList.prototype.get = function (index) {
        return new DataCloudflareLoadBalancersResultRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareLoadBalancersResultRulesList;
}(cdktf.ComplexList));
exports.DataCloudflareLoadBalancersResultRulesList = DataCloudflareLoadBalancersResultRulesList;
function dataCloudflareLoadBalancersResultSessionAffinityAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        drain_duration: cdktf.numberToTerraform(struct.drainDuration),
    };
}
function dataCloudflareLoadBalancersResultSessionAffinityAttributesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        drain_duration: {
            value: cdktf.numberToHclTerraform(struct.drainDuration),
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
}
var DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._drainDuration !== undefined) {
                hasAnyValues = true;
                internalValueResult.drainDuration = this._drainDuration;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._drainDuration = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._drainDuration = value.drainDuration;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.prototype, "drainDuration", {
        get: function () {
            return this.getNumberAttribute('drain_duration');
        },
        set: function (value) {
            this._drainDuration = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.prototype.resetDrainDuration = function () {
        this._drainDuration = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.prototype, "drainDurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._drainDuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.prototype, "headers", {
        // headers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('headers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.prototype, "requireAllHeaders", {
        // require_all_headers - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('require_all_headers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.prototype, "samesite", {
        // samesite - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('samesite');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.prototype, "secure", {
        // secure - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secure');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.prototype, "zeroDowntimeFailover", {
        // zero_downtime_failover - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zero_downtime_failover');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference = DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference;
function dataCloudflareLoadBalancersResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.countryPools),
        pop_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.popPools),
        region_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.regionPools),
    };
}
function dataCloudflareLoadBalancersResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        country_pools: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.countryPools),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
        pop_pools: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.popPools),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
        region_pools: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.regionPools),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var DataCloudflareLoadBalancersResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancersResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareLoadBalancersResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // adaptive_routing - computed: true, optional: false, required: false
        _this._adaptiveRouting = new DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference(_this, "adaptive_routing");
        // location_strategy - computed: true, optional: false, required: false
        _this._locationStrategy = new DataCloudflareLoadBalancersResultLocationStrategyOutputReference(_this, "location_strategy");
        // random_steering - computed: true, optional: false, required: false
        _this._randomSteering = new DataCloudflareLoadBalancersResultRandomSteeringOutputReference(_this, "random_steering");
        // rules - computed: true, optional: false, required: false
        _this._rules = new DataCloudflareLoadBalancersResultRulesList(_this, "rules", false);
        // session_affinity_attributes - computed: true, optional: false, required: false
        _this._sessionAffinityAttributes = new DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference(_this, "session_affinity_attributes");
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._countryPools !== undefined) {
                hasAnyValues = true;
                internalValueResult.countryPools = this._countryPools;
            }
            if (this._popPools !== undefined) {
                hasAnyValues = true;
                internalValueResult.popPools = this._popPools;
            }
            if (this._regionPools !== undefined) {
                hasAnyValues = true;
                internalValueResult.regionPools = this._regionPools;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._countryPools = undefined;
                this._popPools = undefined;
                this._regionPools = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._countryPools = value.countryPools;
                this._popPools = value.popPools;
                this._regionPools = value.regionPools;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "adaptiveRouting", {
        get: function () {
            return this._adaptiveRouting;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "countryPools", {
        get: function () {
            return this.interpolationForAttribute('country_pools');
        },
        set: function (value) {
            this._countryPools = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancersResultOutputReference.prototype.resetCountryPools = function () {
        this._countryPools = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "countryPoolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._countryPools;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "defaultPools", {
        // default_pools - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('default_pools');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "fallbackPool", {
        // fallback_pool - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fallback_pool');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "locationStrategy", {
        get: function () {
            return this._locationStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "networks", {
        // networks - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('networks');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "popPools", {
        get: function () {
            return this.interpolationForAttribute('pop_pools');
        },
        set: function (value) {
            this._popPools = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancersResultOutputReference.prototype.resetPopPools = function () {
        this._popPools = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "popPoolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._popPools;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "proxied", {
        // proxied - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('proxied');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "randomSteering", {
        get: function () {
            return this._randomSteering;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "regionPools", {
        get: function () {
            return this.interpolationForAttribute('region_pools');
        },
        set: function (value) {
            this._regionPools = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancersResultOutputReference.prototype.resetRegionPools = function () {
        this._regionPools = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "regionPoolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._regionPools;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "sessionAffinity", {
        // session_affinity - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('session_affinity');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "sessionAffinityAttributes", {
        get: function () {
            return this._sessionAffinityAttributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "sessionAffinityTtl", {
        // session_affinity_ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('session_affinity_ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "steeringPolicy", {
        // steering_policy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('steering_policy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "ttl", {
        // ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancersResultOutputReference.prototype, "zoneName", {
        // zone_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancersResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancersResultOutputReference = DataCloudflareLoadBalancersResultOutputReference;
var DataCloudflareLoadBalancersResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancersResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareLoadBalancersResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareLoadBalancersResultList.prototype.get = function (index) {
        return new DataCloudflareLoadBalancersResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareLoadBalancersResultList;
}(cdktf.ComplexList));
exports.DataCloudflareLoadBalancersResultList = DataCloudflareLoadBalancersResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancers cloudflare_load_balancers}
*/
var DataCloudflareLoadBalancers = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancers, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancers cloudflare_load_balancers} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareLoadBalancersConfig = {}
    */
    function DataCloudflareLoadBalancers(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_load_balancers',
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
        _this._result = new DataCloudflareLoadBalancersResultList(_this, "result", false);
        _this._maxItems = config.maxItems;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareLoadBalancers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLoadBalancers to import
    * @param importFromId The id of the existing DataCloudflareLoadBalancers that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancers#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLoadBalancers to import is found
    */
    DataCloudflareLoadBalancers.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_load_balancers", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareLoadBalancers.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancers.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancers.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancers.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancers.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancers.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancers.prototype, "zoneIdInput", {
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
    DataCloudflareLoadBalancers.prototype.synthesizeAttributes = function () {
        return {
            max_items: cdktf.numberToTerraform(this._maxItems),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareLoadBalancers.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    DataCloudflareLoadBalancers.tfResourceType = "cloudflare_load_balancers";
    return DataCloudflareLoadBalancers;
}(cdktf.TerraformDataSource));
exports.DataCloudflareLoadBalancers = DataCloudflareLoadBalancers;
