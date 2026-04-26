"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer
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
exports.DataCloudflareLoadBalancer = exports.DataCloudflareLoadBalancerSessionAffinityAttributesOutputReference = exports.DataCloudflareLoadBalancerRulesList = exports.DataCloudflareLoadBalancerRulesOutputReference = exports.DataCloudflareLoadBalancerRulesOverridesOutputReference = exports.DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesOutputReference = exports.DataCloudflareLoadBalancerRulesOverridesRandomSteeringOutputReference = exports.DataCloudflareLoadBalancerRulesOverridesLocationStrategyOutputReference = exports.DataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingOutputReference = exports.DataCloudflareLoadBalancerRulesFixedResponseOutputReference = exports.DataCloudflareLoadBalancerRandomSteeringOutputReference = exports.DataCloudflareLoadBalancerLocationStrategyOutputReference = exports.DataCloudflareLoadBalancerAdaptiveRoutingOutputReference = void 0;
exports.dataCloudflareLoadBalancerAdaptiveRoutingToTerraform = dataCloudflareLoadBalancerAdaptiveRoutingToTerraform;
exports.dataCloudflareLoadBalancerAdaptiveRoutingToHclTerraform = dataCloudflareLoadBalancerAdaptiveRoutingToHclTerraform;
exports.dataCloudflareLoadBalancerLocationStrategyToTerraform = dataCloudflareLoadBalancerLocationStrategyToTerraform;
exports.dataCloudflareLoadBalancerLocationStrategyToHclTerraform = dataCloudflareLoadBalancerLocationStrategyToHclTerraform;
exports.dataCloudflareLoadBalancerRandomSteeringToTerraform = dataCloudflareLoadBalancerRandomSteeringToTerraform;
exports.dataCloudflareLoadBalancerRandomSteeringToHclTerraform = dataCloudflareLoadBalancerRandomSteeringToHclTerraform;
exports.dataCloudflareLoadBalancerRulesFixedResponseToTerraform = dataCloudflareLoadBalancerRulesFixedResponseToTerraform;
exports.dataCloudflareLoadBalancerRulesFixedResponseToHclTerraform = dataCloudflareLoadBalancerRulesFixedResponseToHclTerraform;
exports.dataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingToTerraform = dataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingToTerraform;
exports.dataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingToHclTerraform = dataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingToHclTerraform;
exports.dataCloudflareLoadBalancerRulesOverridesLocationStrategyToTerraform = dataCloudflareLoadBalancerRulesOverridesLocationStrategyToTerraform;
exports.dataCloudflareLoadBalancerRulesOverridesLocationStrategyToHclTerraform = dataCloudflareLoadBalancerRulesOverridesLocationStrategyToHclTerraform;
exports.dataCloudflareLoadBalancerRulesOverridesRandomSteeringToTerraform = dataCloudflareLoadBalancerRulesOverridesRandomSteeringToTerraform;
exports.dataCloudflareLoadBalancerRulesOverridesRandomSteeringToHclTerraform = dataCloudflareLoadBalancerRulesOverridesRandomSteeringToHclTerraform;
exports.dataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesToTerraform = dataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesToTerraform;
exports.dataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesToHclTerraform = dataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesToHclTerraform;
exports.dataCloudflareLoadBalancerRulesOverridesToTerraform = dataCloudflareLoadBalancerRulesOverridesToTerraform;
exports.dataCloudflareLoadBalancerRulesOverridesToHclTerraform = dataCloudflareLoadBalancerRulesOverridesToHclTerraform;
exports.dataCloudflareLoadBalancerRulesToTerraform = dataCloudflareLoadBalancerRulesToTerraform;
exports.dataCloudflareLoadBalancerRulesToHclTerraform = dataCloudflareLoadBalancerRulesToHclTerraform;
exports.dataCloudflareLoadBalancerSessionAffinityAttributesToTerraform = dataCloudflareLoadBalancerSessionAffinityAttributesToTerraform;
exports.dataCloudflareLoadBalancerSessionAffinityAttributesToHclTerraform = dataCloudflareLoadBalancerSessionAffinityAttributesToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareLoadBalancerAdaptiveRoutingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancerAdaptiveRoutingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancerAdaptiveRoutingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerAdaptiveRoutingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancerAdaptiveRoutingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerAdaptiveRoutingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerAdaptiveRoutingOutputReference.prototype, "failoverAcrossPools", {
        // failover_across_pools - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('failover_across_pools');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerAdaptiveRoutingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerAdaptiveRoutingOutputReference = DataCloudflareLoadBalancerAdaptiveRoutingOutputReference;
function dataCloudflareLoadBalancerLocationStrategyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancerLocationStrategyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancerLocationStrategyOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerLocationStrategyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancerLocationStrategyOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerLocationStrategyOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerLocationStrategyOutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerLocationStrategyOutputReference.prototype, "preferEcs", {
        // prefer_ecs - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prefer_ecs');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerLocationStrategyOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerLocationStrategyOutputReference = DataCloudflareLoadBalancerLocationStrategyOutputReference;
function dataCloudflareLoadBalancerRandomSteeringToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancerRandomSteeringToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancerRandomSteeringOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerRandomSteeringOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancerRandomSteeringOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // pool_weights - computed: true, optional: false, required: false
        _this._poolWeights = new cdktf.NumberMap(_this, "pool_weights");
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerRandomSteeringOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerRandomSteeringOutputReference.prototype, "defaultWeight", {
        // default_weight - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('default_weight');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRandomSteeringOutputReference.prototype, "poolWeights", {
        get: function () {
            return this._poolWeights;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerRandomSteeringOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerRandomSteeringOutputReference = DataCloudflareLoadBalancerRandomSteeringOutputReference;
function dataCloudflareLoadBalancerRulesFixedResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancerRulesFixedResponseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancerRulesFixedResponseOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerRulesFixedResponseOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancerRulesFixedResponseOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerRulesFixedResponseOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerRulesFixedResponseOutputReference.prototype, "contentType", {
        // content_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesFixedResponseOutputReference.prototype, "location", {
        // location - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('location');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesFixedResponseOutputReference.prototype, "messageBody", {
        // message_body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('message_body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesFixedResponseOutputReference.prototype, "statusCode", {
        // status_code - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('status_code');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerRulesFixedResponseOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerRulesFixedResponseOutputReference = DataCloudflareLoadBalancerRulesFixedResponseOutputReference;
function dataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingOutputReference.prototype, "failoverAcrossPools", {
        // failover_across_pools - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('failover_across_pools');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingOutputReference = DataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingOutputReference;
function dataCloudflareLoadBalancerRulesOverridesLocationStrategyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancerRulesOverridesLocationStrategyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancerRulesOverridesLocationStrategyOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerRulesOverridesLocationStrategyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancerRulesOverridesLocationStrategyOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesLocationStrategyOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesLocationStrategyOutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesLocationStrategyOutputReference.prototype, "preferEcs", {
        // prefer_ecs - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prefer_ecs');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerRulesOverridesLocationStrategyOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerRulesOverridesLocationStrategyOutputReference = DataCloudflareLoadBalancerRulesOverridesLocationStrategyOutputReference;
function dataCloudflareLoadBalancerRulesOverridesRandomSteeringToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancerRulesOverridesRandomSteeringToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancerRulesOverridesRandomSteeringOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerRulesOverridesRandomSteeringOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancerRulesOverridesRandomSteeringOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // pool_weights - computed: true, optional: false, required: false
        _this._poolWeights = new cdktf.NumberMap(_this, "pool_weights");
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesRandomSteeringOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesRandomSteeringOutputReference.prototype, "defaultWeight", {
        // default_weight - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('default_weight');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesRandomSteeringOutputReference.prototype, "poolWeights", {
        get: function () {
            return this._poolWeights;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerRulesOverridesRandomSteeringOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerRulesOverridesRandomSteeringOutputReference = DataCloudflareLoadBalancerRulesOverridesRandomSteeringOutputReference;
function dataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesToTerraform(struct) {
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
function dataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesToHclTerraform(struct) {
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
var DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype, "drainDuration", {
        get: function () {
            return this.getNumberAttribute('drain_duration');
        },
        set: function (value) {
            this._drainDuration = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype.resetDrainDuration = function () {
        this._drainDuration = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype, "drainDurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._drainDuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype, "headers", {
        // headers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('headers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype, "requireAllHeaders", {
        // require_all_headers - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('require_all_headers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype, "samesite", {
        // samesite - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('samesite');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype, "secure", {
        // secure - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secure');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype, "zeroDowntimeFailover", {
        // zero_downtime_failover - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zero_downtime_failover');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesOutputReference = DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesOutputReference;
function dataCloudflareLoadBalancerRulesOverridesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        pop_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.popPools),
    };
}
function dataCloudflareLoadBalancerRulesOverridesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        pop_pools: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.popPools),
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
var DataCloudflareLoadBalancerRulesOverridesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerRulesOverridesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancerRulesOverridesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // adaptive_routing - computed: true, optional: false, required: false
        _this._adaptiveRouting = new DataCloudflareLoadBalancerRulesOverridesAdaptiveRoutingOutputReference(_this, "adaptive_routing");
        // country_pools - computed: true, optional: false, required: false
        _this._countryPools = new cdktf.StringListMap(_this, "country_pools");
        // location_strategy - computed: true, optional: false, required: false
        _this._locationStrategy = new DataCloudflareLoadBalancerRulesOverridesLocationStrategyOutputReference(_this, "location_strategy");
        // random_steering - computed: true, optional: false, required: false
        _this._randomSteering = new DataCloudflareLoadBalancerRulesOverridesRandomSteeringOutputReference(_this, "random_steering");
        // region_pools - computed: true, optional: false, required: false
        _this._regionPools = new cdktf.StringListMap(_this, "region_pools");
        // session_affinity_attributes - computed: true, optional: false, required: false
        _this._sessionAffinityAttributes = new DataCloudflareLoadBalancerRulesOverridesSessionAffinityAttributesOutputReference(_this, "session_affinity_attributes");
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._popPools !== undefined) {
                hasAnyValues = true;
                internalValueResult.popPools = this._popPools;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._popPools = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._popPools = value.popPools;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesOutputReference.prototype, "adaptiveRouting", {
        get: function () {
            return this._adaptiveRouting;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesOutputReference.prototype, "countryPools", {
        get: function () {
            return this._countryPools;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesOutputReference.prototype, "defaultPools", {
        // default_pools - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('default_pools');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesOutputReference.prototype, "fallbackPool", {
        // fallback_pool - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fallback_pool');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesOutputReference.prototype, "locationStrategy", {
        get: function () {
            return this._locationStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesOutputReference.prototype, "popPools", {
        get: function () {
            return this.interpolationForAttribute('pop_pools');
        },
        set: function (value) {
            this._popPools = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancerRulesOverridesOutputReference.prototype.resetPopPools = function () {
        this._popPools = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesOutputReference.prototype, "popPoolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._popPools;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesOutputReference.prototype, "randomSteering", {
        get: function () {
            return this._randomSteering;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesOutputReference.prototype, "regionPools", {
        get: function () {
            return this._regionPools;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesOutputReference.prototype, "sessionAffinity", {
        // session_affinity - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('session_affinity');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesOutputReference.prototype, "sessionAffinityAttributes", {
        get: function () {
            return this._sessionAffinityAttributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesOutputReference.prototype, "sessionAffinityTtl", {
        // session_affinity_ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('session_affinity_ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesOutputReference.prototype, "steeringPolicy", {
        // steering_policy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('steering_policy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOverridesOutputReference.prototype, "ttl", {
        // ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerRulesOverridesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerRulesOverridesOutputReference = DataCloudflareLoadBalancerRulesOverridesOutputReference;
function dataCloudflareLoadBalancerRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancerRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancerRulesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareLoadBalancerRulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // fixed_response - computed: true, optional: false, required: false
        _this._fixedResponse = new DataCloudflareLoadBalancerRulesFixedResponseOutputReference(_this, "fixed_response");
        // overrides - computed: true, optional: false, required: false
        _this._overrides = new DataCloudflareLoadBalancerRulesOverridesOutputReference(_this, "overrides");
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerRulesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerRulesOutputReference.prototype, "condition", {
        // condition - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('condition');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOutputReference.prototype, "disabled", {
        // disabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOutputReference.prototype, "fixedResponse", {
        get: function () {
            return this._fixedResponse;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOutputReference.prototype, "overrides", {
        get: function () {
            return this._overrides;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOutputReference.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerRulesOutputReference.prototype, "terminates", {
        // terminates - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('terminates');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerRulesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerRulesOutputReference = DataCloudflareLoadBalancerRulesOutputReference;
var DataCloudflareLoadBalancerRulesList = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerRulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareLoadBalancerRulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareLoadBalancerRulesList.prototype.get = function (index) {
        return new DataCloudflareLoadBalancerRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareLoadBalancerRulesList;
}(cdktf.ComplexList));
exports.DataCloudflareLoadBalancerRulesList = DataCloudflareLoadBalancerRulesList;
function dataCloudflareLoadBalancerSessionAffinityAttributesToTerraform(struct) {
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
function dataCloudflareLoadBalancerSessionAffinityAttributesToHclTerraform(struct) {
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
var DataCloudflareLoadBalancerSessionAffinityAttributesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerSessionAffinityAttributesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancerSessionAffinityAttributesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerSessionAffinityAttributesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerSessionAffinityAttributesOutputReference.prototype, "drainDuration", {
        get: function () {
            return this.getNumberAttribute('drain_duration');
        },
        set: function (value) {
            this._drainDuration = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancerSessionAffinityAttributesOutputReference.prototype.resetDrainDuration = function () {
        this._drainDuration = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancerSessionAffinityAttributesOutputReference.prototype, "drainDurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._drainDuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerSessionAffinityAttributesOutputReference.prototype, "headers", {
        // headers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('headers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerSessionAffinityAttributesOutputReference.prototype, "requireAllHeaders", {
        // require_all_headers - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('require_all_headers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerSessionAffinityAttributesOutputReference.prototype, "samesite", {
        // samesite - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('samesite');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerSessionAffinityAttributesOutputReference.prototype, "secure", {
        // secure - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secure');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerSessionAffinityAttributesOutputReference.prototype, "zeroDowntimeFailover", {
        // zero_downtime_failover - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zero_downtime_failover');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerSessionAffinityAttributesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerSessionAffinityAttributesOutputReference = DataCloudflareLoadBalancerSessionAffinityAttributesOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer cloudflare_load_balancer}
*/
var DataCloudflareLoadBalancer = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancer, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer cloudflare_load_balancer} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareLoadBalancerConfig
    */
    function DataCloudflareLoadBalancer(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_load_balancer',
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
        // ==========
        // ATTRIBUTES
        // ==========
        // adaptive_routing - computed: true, optional: false, required: false
        _this._adaptiveRouting = new DataCloudflareLoadBalancerAdaptiveRoutingOutputReference(_this, "adaptive_routing");
        // country_pools - computed: true, optional: false, required: false
        _this._countryPools = new cdktf.StringListMap(_this, "country_pools");
        // location_strategy - computed: true, optional: false, required: false
        _this._locationStrategy = new DataCloudflareLoadBalancerLocationStrategyOutputReference(_this, "location_strategy");
        // random_steering - computed: true, optional: false, required: false
        _this._randomSteering = new DataCloudflareLoadBalancerRandomSteeringOutputReference(_this, "random_steering");
        // rules - computed: true, optional: false, required: false
        _this._rules = new DataCloudflareLoadBalancerRulesList(_this, "rules", false);
        // session_affinity_attributes - computed: true, optional: false, required: false
        _this._sessionAffinityAttributes = new DataCloudflareLoadBalancerSessionAffinityAttributesOutputReference(_this, "session_affinity_attributes");
        _this._loadBalancerId = config.loadBalancerId;
        _this._popPools = config.popPools;
        _this._regionPools = config.regionPools;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareLoadBalancer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLoadBalancer to import
    * @param importFromId The id of the existing DataCloudflareLoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLoadBalancer to import is found
    */
    DataCloudflareLoadBalancer.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_load_balancer", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "adaptiveRouting", {
        get: function () {
            return this._adaptiveRouting;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "countryPools", {
        get: function () {
            return this._countryPools;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "defaultPools", {
        // default_pools - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('default_pools');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "fallbackPool", {
        // fallback_pool - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fallback_pool');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "loadBalancerId", {
        get: function () {
            return this.getStringAttribute('load_balancer_id');
        },
        set: function (value) {
            this._loadBalancerId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "loadBalancerIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loadBalancerId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "locationStrategy", {
        get: function () {
            return this._locationStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "networks", {
        // networks - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('networks');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "popPools", {
        get: function () {
            return this.interpolationForAttribute('pop_pools');
        },
        set: function (value) {
            this._popPools = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancer.prototype.resetPopPools = function () {
        this._popPools = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "popPoolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._popPools;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "proxied", {
        // proxied - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('proxied');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "randomSteering", {
        get: function () {
            return this._randomSteering;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "regionPools", {
        get: function () {
            return this.interpolationForAttribute('region_pools');
        },
        set: function (value) {
            this._regionPools = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancer.prototype.resetRegionPools = function () {
        this._regionPools = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "regionPoolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._regionPools;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "sessionAffinity", {
        // session_affinity - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('session_affinity');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "sessionAffinityAttributes", {
        get: function () {
            return this._sessionAffinityAttributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "sessionAffinityTtl", {
        // session_affinity_ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('session_affinity_ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "steeringPolicy", {
        // steering_policy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('steering_policy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "ttl", {
        // ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancer.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancer.prototype, "zoneIdInput", {
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
    DataCloudflareLoadBalancer.prototype.synthesizeAttributes = function () {
        return {
            load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
            pop_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._popPools),
            region_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._regionPools),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareLoadBalancer.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            load_balancer_id: {
                value: cdktf.stringToHclTerraform(this._loadBalancerId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pop_pools: {
                value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._popPools),
                isBlock: false,
                type: "map",
                storageClassType: "stringListMap",
            },
            region_pools: {
                value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._regionPools),
                isBlock: false,
                type: "map",
                storageClassType: "stringListMap",
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
    DataCloudflareLoadBalancer.tfResourceType = "cloudflare_load_balancer";
    return DataCloudflareLoadBalancer;
}(cdktf.TerraformDataSource));
exports.DataCloudflareLoadBalancer = DataCloudflareLoadBalancer;
