"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer
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
exports.LoadBalancer = exports.LoadBalancerSessionAffinityAttributesOutputReference = exports.LoadBalancerRulesList = exports.LoadBalancerRulesOutputReference = exports.LoadBalancerRulesOverridesOutputReference = exports.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference = exports.LoadBalancerRulesOverridesRandomSteeringOutputReference = exports.LoadBalancerRulesOverridesLocationStrategyOutputReference = exports.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference = exports.LoadBalancerRulesFixedResponseOutputReference = exports.LoadBalancerRandomSteeringOutputReference = exports.LoadBalancerLocationStrategyOutputReference = exports.LoadBalancerAdaptiveRoutingOutputReference = void 0;
exports.loadBalancerAdaptiveRoutingToTerraform = loadBalancerAdaptiveRoutingToTerraform;
exports.loadBalancerAdaptiveRoutingToHclTerraform = loadBalancerAdaptiveRoutingToHclTerraform;
exports.loadBalancerLocationStrategyToTerraform = loadBalancerLocationStrategyToTerraform;
exports.loadBalancerLocationStrategyToHclTerraform = loadBalancerLocationStrategyToHclTerraform;
exports.loadBalancerRandomSteeringToTerraform = loadBalancerRandomSteeringToTerraform;
exports.loadBalancerRandomSteeringToHclTerraform = loadBalancerRandomSteeringToHclTerraform;
exports.loadBalancerRulesFixedResponseToTerraform = loadBalancerRulesFixedResponseToTerraform;
exports.loadBalancerRulesFixedResponseToHclTerraform = loadBalancerRulesFixedResponseToHclTerraform;
exports.loadBalancerRulesOverridesAdaptiveRoutingToTerraform = loadBalancerRulesOverridesAdaptiveRoutingToTerraform;
exports.loadBalancerRulesOverridesAdaptiveRoutingToHclTerraform = loadBalancerRulesOverridesAdaptiveRoutingToHclTerraform;
exports.loadBalancerRulesOverridesLocationStrategyToTerraform = loadBalancerRulesOverridesLocationStrategyToTerraform;
exports.loadBalancerRulesOverridesLocationStrategyToHclTerraform = loadBalancerRulesOverridesLocationStrategyToHclTerraform;
exports.loadBalancerRulesOverridesRandomSteeringToTerraform = loadBalancerRulesOverridesRandomSteeringToTerraform;
exports.loadBalancerRulesOverridesRandomSteeringToHclTerraform = loadBalancerRulesOverridesRandomSteeringToHclTerraform;
exports.loadBalancerRulesOverridesSessionAffinityAttributesToTerraform = loadBalancerRulesOverridesSessionAffinityAttributesToTerraform;
exports.loadBalancerRulesOverridesSessionAffinityAttributesToHclTerraform = loadBalancerRulesOverridesSessionAffinityAttributesToHclTerraform;
exports.loadBalancerRulesOverridesToTerraform = loadBalancerRulesOverridesToTerraform;
exports.loadBalancerRulesOverridesToHclTerraform = loadBalancerRulesOverridesToHclTerraform;
exports.loadBalancerRulesToTerraform = loadBalancerRulesToTerraform;
exports.loadBalancerRulesToHclTerraform = loadBalancerRulesToHclTerraform;
exports.loadBalancerSessionAffinityAttributesToTerraform = loadBalancerSessionAffinityAttributesToTerraform;
exports.loadBalancerSessionAffinityAttributesToHclTerraform = loadBalancerSessionAffinityAttributesToHclTerraform;
var cdktf = require("cdktf");
function loadBalancerAdaptiveRoutingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        failover_across_pools: cdktf.booleanToTerraform(struct.failoverAcrossPools),
    };
}
function loadBalancerAdaptiveRoutingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        failover_across_pools: {
            value: cdktf.booleanToHclTerraform(struct.failoverAcrossPools),
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
var LoadBalancerAdaptiveRoutingOutputReference = /** @class */ (function (_super) {
    __extends(LoadBalancerAdaptiveRoutingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function LoadBalancerAdaptiveRoutingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(LoadBalancerAdaptiveRoutingOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._failoverAcrossPools !== undefined) {
                hasAnyValues = true;
                internalValueResult.failoverAcrossPools = this._failoverAcrossPools;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._failoverAcrossPools = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._failoverAcrossPools = value.failoverAcrossPools;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerAdaptiveRoutingOutputReference.prototype, "failoverAcrossPools", {
        get: function () {
            return this.getBooleanAttribute('failover_across_pools');
        },
        set: function (value) {
            this._failoverAcrossPools = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerAdaptiveRoutingOutputReference.prototype.resetFailoverAcrossPools = function () {
        this._failoverAcrossPools = undefined;
    };
    Object.defineProperty(LoadBalancerAdaptiveRoutingOutputReference.prototype, "failoverAcrossPoolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._failoverAcrossPools;
        },
        enumerable: false,
        configurable: true
    });
    return LoadBalancerAdaptiveRoutingOutputReference;
}(cdktf.ComplexObject));
exports.LoadBalancerAdaptiveRoutingOutputReference = LoadBalancerAdaptiveRoutingOutputReference;
function loadBalancerLocationStrategyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
        prefer_ecs: cdktf.stringToTerraform(struct.preferEcs),
    };
}
function loadBalancerLocationStrategyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefer_ecs: {
            value: cdktf.stringToHclTerraform(struct.preferEcs),
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
var LoadBalancerLocationStrategyOutputReference = /** @class */ (function (_super) {
    __extends(LoadBalancerLocationStrategyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function LoadBalancerLocationStrategyOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(LoadBalancerLocationStrategyOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._mode !== undefined) {
                hasAnyValues = true;
                internalValueResult.mode = this._mode;
            }
            if (this._preferEcs !== undefined) {
                hasAnyValues = true;
                internalValueResult.preferEcs = this._preferEcs;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._mode = undefined;
                this._preferEcs = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._mode = value.mode;
                this._preferEcs = value.preferEcs;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerLocationStrategyOutputReference.prototype, "mode", {
        get: function () {
            return this.getStringAttribute('mode');
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerLocationStrategyOutputReference.prototype.resetMode = function () {
        this._mode = undefined;
    };
    Object.defineProperty(LoadBalancerLocationStrategyOutputReference.prototype, "modeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerLocationStrategyOutputReference.prototype, "preferEcs", {
        get: function () {
            return this.getStringAttribute('prefer_ecs');
        },
        set: function (value) {
            this._preferEcs = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerLocationStrategyOutputReference.prototype.resetPreferEcs = function () {
        this._preferEcs = undefined;
    };
    Object.defineProperty(LoadBalancerLocationStrategyOutputReference.prototype, "preferEcsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferEcs;
        },
        enumerable: false,
        configurable: true
    });
    return LoadBalancerLocationStrategyOutputReference;
}(cdktf.ComplexObject));
exports.LoadBalancerLocationStrategyOutputReference = LoadBalancerLocationStrategyOutputReference;
function loadBalancerRandomSteeringToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        default_weight: cdktf.numberToTerraform(struct.defaultWeight),
        pool_weights: cdktf.hashMapper(cdktf.numberToTerraform)(struct.poolWeights),
    };
}
function loadBalancerRandomSteeringToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        default_weight: {
            value: cdktf.numberToHclTerraform(struct.defaultWeight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        pool_weights: {
            value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(struct.poolWeights),
            isBlock: false,
            type: "map",
            storageClassType: "numberMap",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var LoadBalancerRandomSteeringOutputReference = /** @class */ (function (_super) {
    __extends(LoadBalancerRandomSteeringOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function LoadBalancerRandomSteeringOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(LoadBalancerRandomSteeringOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._defaultWeight !== undefined) {
                hasAnyValues = true;
                internalValueResult.defaultWeight = this._defaultWeight;
            }
            if (this._poolWeights !== undefined) {
                hasAnyValues = true;
                internalValueResult.poolWeights = this._poolWeights;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._defaultWeight = undefined;
                this._poolWeights = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._defaultWeight = value.defaultWeight;
                this._poolWeights = value.poolWeights;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRandomSteeringOutputReference.prototype, "defaultWeight", {
        get: function () {
            return this.getNumberAttribute('default_weight');
        },
        set: function (value) {
            this._defaultWeight = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRandomSteeringOutputReference.prototype.resetDefaultWeight = function () {
        this._defaultWeight = undefined;
    };
    Object.defineProperty(LoadBalancerRandomSteeringOutputReference.prototype, "defaultWeightInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultWeight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRandomSteeringOutputReference.prototype, "poolWeights", {
        get: function () {
            return this.getNumberMapAttribute('pool_weights');
        },
        set: function (value) {
            this._poolWeights = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRandomSteeringOutputReference.prototype.resetPoolWeights = function () {
        this._poolWeights = undefined;
    };
    Object.defineProperty(LoadBalancerRandomSteeringOutputReference.prototype, "poolWeightsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._poolWeights;
        },
        enumerable: false,
        configurable: true
    });
    return LoadBalancerRandomSteeringOutputReference;
}(cdktf.ComplexObject));
exports.LoadBalancerRandomSteeringOutputReference = LoadBalancerRandomSteeringOutputReference;
function loadBalancerRulesFixedResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content_type: cdktf.stringToTerraform(struct.contentType),
        location: cdktf.stringToTerraform(struct.location),
        message_body: cdktf.stringToTerraform(struct.messageBody),
        status_code: cdktf.numberToTerraform(struct.statusCode),
    };
}
function loadBalancerRulesFixedResponseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        content_type: {
            value: cdktf.stringToHclTerraform(struct.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        location: {
            value: cdktf.stringToHclTerraform(struct.location),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        message_body: {
            value: cdktf.stringToHclTerraform(struct.messageBody),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status_code: {
            value: cdktf.numberToHclTerraform(struct.statusCode),
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
var LoadBalancerRulesFixedResponseOutputReference = /** @class */ (function (_super) {
    __extends(LoadBalancerRulesFixedResponseOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function LoadBalancerRulesFixedResponseOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(LoadBalancerRulesFixedResponseOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._contentType !== undefined) {
                hasAnyValues = true;
                internalValueResult.contentType = this._contentType;
            }
            if (this._location !== undefined) {
                hasAnyValues = true;
                internalValueResult.location = this._location;
            }
            if (this._messageBody !== undefined) {
                hasAnyValues = true;
                internalValueResult.messageBody = this._messageBody;
            }
            if (this._statusCode !== undefined) {
                hasAnyValues = true;
                internalValueResult.statusCode = this._statusCode;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._contentType = undefined;
                this._location = undefined;
                this._messageBody = undefined;
                this._statusCode = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._contentType = value.contentType;
                this._location = value.location;
                this._messageBody = value.messageBody;
                this._statusCode = value.statusCode;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesFixedResponseOutputReference.prototype, "contentType", {
        get: function () {
            return this.getStringAttribute('content_type');
        },
        set: function (value) {
            this._contentType = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesFixedResponseOutputReference.prototype.resetContentType = function () {
        this._contentType = undefined;
    };
    Object.defineProperty(LoadBalancerRulesFixedResponseOutputReference.prototype, "contentTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesFixedResponseOutputReference.prototype, "location", {
        get: function () {
            return this.getStringAttribute('location');
        },
        set: function (value) {
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesFixedResponseOutputReference.prototype.resetLocation = function () {
        this._location = undefined;
    };
    Object.defineProperty(LoadBalancerRulesFixedResponseOutputReference.prototype, "locationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._location;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesFixedResponseOutputReference.prototype, "messageBody", {
        get: function () {
            return this.getStringAttribute('message_body');
        },
        set: function (value) {
            this._messageBody = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesFixedResponseOutputReference.prototype.resetMessageBody = function () {
        this._messageBody = undefined;
    };
    Object.defineProperty(LoadBalancerRulesFixedResponseOutputReference.prototype, "messageBodyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._messageBody;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesFixedResponseOutputReference.prototype, "statusCode", {
        get: function () {
            return this.getNumberAttribute('status_code');
        },
        set: function (value) {
            this._statusCode = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesFixedResponseOutputReference.prototype.resetStatusCode = function () {
        this._statusCode = undefined;
    };
    Object.defineProperty(LoadBalancerRulesFixedResponseOutputReference.prototype, "statusCodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._statusCode;
        },
        enumerable: false,
        configurable: true
    });
    return LoadBalancerRulesFixedResponseOutputReference;
}(cdktf.ComplexObject));
exports.LoadBalancerRulesFixedResponseOutputReference = LoadBalancerRulesFixedResponseOutputReference;
function loadBalancerRulesOverridesAdaptiveRoutingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        failover_across_pools: cdktf.booleanToTerraform(struct.failoverAcrossPools),
    };
}
function loadBalancerRulesOverridesAdaptiveRoutingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        failover_across_pools: {
            value: cdktf.booleanToHclTerraform(struct.failoverAcrossPools),
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
var LoadBalancerRulesOverridesAdaptiveRoutingOutputReference = /** @class */ (function (_super) {
    __extends(LoadBalancerRulesOverridesAdaptiveRoutingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function LoadBalancerRulesOverridesAdaptiveRoutingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._failoverAcrossPools !== undefined) {
                hasAnyValues = true;
                internalValueResult.failoverAcrossPools = this._failoverAcrossPools;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._failoverAcrossPools = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._failoverAcrossPools = value.failoverAcrossPools;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.prototype, "failoverAcrossPools", {
        get: function () {
            return this.getBooleanAttribute('failover_across_pools');
        },
        set: function (value) {
            this._failoverAcrossPools = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.prototype.resetFailoverAcrossPools = function () {
        this._failoverAcrossPools = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.prototype, "failoverAcrossPoolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._failoverAcrossPools;
        },
        enumerable: false,
        configurable: true
    });
    return LoadBalancerRulesOverridesAdaptiveRoutingOutputReference;
}(cdktf.ComplexObject));
exports.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference = LoadBalancerRulesOverridesAdaptiveRoutingOutputReference;
function loadBalancerRulesOverridesLocationStrategyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
        prefer_ecs: cdktf.stringToTerraform(struct.preferEcs),
    };
}
function loadBalancerRulesOverridesLocationStrategyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefer_ecs: {
            value: cdktf.stringToHclTerraform(struct.preferEcs),
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
var LoadBalancerRulesOverridesLocationStrategyOutputReference = /** @class */ (function (_super) {
    __extends(LoadBalancerRulesOverridesLocationStrategyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function LoadBalancerRulesOverridesLocationStrategyOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(LoadBalancerRulesOverridesLocationStrategyOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._mode !== undefined) {
                hasAnyValues = true;
                internalValueResult.mode = this._mode;
            }
            if (this._preferEcs !== undefined) {
                hasAnyValues = true;
                internalValueResult.preferEcs = this._preferEcs;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._mode = undefined;
                this._preferEcs = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._mode = value.mode;
                this._preferEcs = value.preferEcs;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOverridesLocationStrategyOutputReference.prototype, "mode", {
        get: function () {
            return this.getStringAttribute('mode');
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOverridesLocationStrategyOutputReference.prototype.resetMode = function () {
        this._mode = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOverridesLocationStrategyOutputReference.prototype, "modeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOverridesLocationStrategyOutputReference.prototype, "preferEcs", {
        get: function () {
            return this.getStringAttribute('prefer_ecs');
        },
        set: function (value) {
            this._preferEcs = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOverridesLocationStrategyOutputReference.prototype.resetPreferEcs = function () {
        this._preferEcs = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOverridesLocationStrategyOutputReference.prototype, "preferEcsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferEcs;
        },
        enumerable: false,
        configurable: true
    });
    return LoadBalancerRulesOverridesLocationStrategyOutputReference;
}(cdktf.ComplexObject));
exports.LoadBalancerRulesOverridesLocationStrategyOutputReference = LoadBalancerRulesOverridesLocationStrategyOutputReference;
function loadBalancerRulesOverridesRandomSteeringToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        default_weight: cdktf.numberToTerraform(struct.defaultWeight),
        pool_weights: cdktf.hashMapper(cdktf.numberToTerraform)(struct.poolWeights),
    };
}
function loadBalancerRulesOverridesRandomSteeringToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        default_weight: {
            value: cdktf.numberToHclTerraform(struct.defaultWeight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        pool_weights: {
            value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(struct.poolWeights),
            isBlock: false,
            type: "map",
            storageClassType: "numberMap",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var LoadBalancerRulesOverridesRandomSteeringOutputReference = /** @class */ (function (_super) {
    __extends(LoadBalancerRulesOverridesRandomSteeringOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function LoadBalancerRulesOverridesRandomSteeringOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(LoadBalancerRulesOverridesRandomSteeringOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._defaultWeight !== undefined) {
                hasAnyValues = true;
                internalValueResult.defaultWeight = this._defaultWeight;
            }
            if (this._poolWeights !== undefined) {
                hasAnyValues = true;
                internalValueResult.poolWeights = this._poolWeights;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._defaultWeight = undefined;
                this._poolWeights = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._defaultWeight = value.defaultWeight;
                this._poolWeights = value.poolWeights;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOverridesRandomSteeringOutputReference.prototype, "defaultWeight", {
        get: function () {
            return this.getNumberAttribute('default_weight');
        },
        set: function (value) {
            this._defaultWeight = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOverridesRandomSteeringOutputReference.prototype.resetDefaultWeight = function () {
        this._defaultWeight = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOverridesRandomSteeringOutputReference.prototype, "defaultWeightInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultWeight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOverridesRandomSteeringOutputReference.prototype, "poolWeights", {
        get: function () {
            return this.getNumberMapAttribute('pool_weights');
        },
        set: function (value) {
            this._poolWeights = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOverridesRandomSteeringOutputReference.prototype.resetPoolWeights = function () {
        this._poolWeights = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOverridesRandomSteeringOutputReference.prototype, "poolWeightsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._poolWeights;
        },
        enumerable: false,
        configurable: true
    });
    return LoadBalancerRulesOverridesRandomSteeringOutputReference;
}(cdktf.ComplexObject));
exports.LoadBalancerRulesOverridesRandomSteeringOutputReference = LoadBalancerRulesOverridesRandomSteeringOutputReference;
function loadBalancerRulesOverridesSessionAffinityAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        drain_duration: cdktf.numberToTerraform(struct.drainDuration),
        headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.headers),
        require_all_headers: cdktf.booleanToTerraform(struct.requireAllHeaders),
        samesite: cdktf.stringToTerraform(struct.samesite),
        secure: cdktf.stringToTerraform(struct.secure),
        zero_downtime_failover: cdktf.stringToTerraform(struct.zeroDowntimeFailover),
    };
}
function loadBalancerRulesOverridesSessionAffinityAttributesToHclTerraform(struct) {
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
        headers: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.headers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        require_all_headers: {
            value: cdktf.booleanToHclTerraform(struct.requireAllHeaders),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        samesite: {
            value: cdktf.stringToHclTerraform(struct.samesite),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secure: {
            value: cdktf.stringToHclTerraform(struct.secure),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        zero_downtime_failover: {
            value: cdktf.stringToHclTerraform(struct.zeroDowntimeFailover),
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
var LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference = /** @class */ (function (_super) {
    __extends(LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._drainDuration !== undefined) {
                hasAnyValues = true;
                internalValueResult.drainDuration = this._drainDuration;
            }
            if (this._headers !== undefined) {
                hasAnyValues = true;
                internalValueResult.headers = this._headers;
            }
            if (this._requireAllHeaders !== undefined) {
                hasAnyValues = true;
                internalValueResult.requireAllHeaders = this._requireAllHeaders;
            }
            if (this._samesite !== undefined) {
                hasAnyValues = true;
                internalValueResult.samesite = this._samesite;
            }
            if (this._secure !== undefined) {
                hasAnyValues = true;
                internalValueResult.secure = this._secure;
            }
            if (this._zeroDowntimeFailover !== undefined) {
                hasAnyValues = true;
                internalValueResult.zeroDowntimeFailover = this._zeroDowntimeFailover;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._drainDuration = undefined;
                this._headers = undefined;
                this._requireAllHeaders = undefined;
                this._samesite = undefined;
                this._secure = undefined;
                this._zeroDowntimeFailover = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._drainDuration = value.drainDuration;
                this._headers = value.headers;
                this._requireAllHeaders = value.requireAllHeaders;
                this._samesite = value.samesite;
                this._secure = value.secure;
                this._zeroDowntimeFailover = value.zeroDowntimeFailover;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype, "drainDuration", {
        get: function () {
            return this.getNumberAttribute('drain_duration');
        },
        set: function (value) {
            this._drainDuration = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype.resetDrainDuration = function () {
        this._drainDuration = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype, "drainDurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._drainDuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype, "headers", {
        get: function () {
            return this.getListAttribute('headers');
        },
        set: function (value) {
            this._headers = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype.resetHeaders = function () {
        this._headers = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype, "headersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._headers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype, "requireAllHeaders", {
        get: function () {
            return this.getBooleanAttribute('require_all_headers');
        },
        set: function (value) {
            this._requireAllHeaders = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype.resetRequireAllHeaders = function () {
        this._requireAllHeaders = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype, "requireAllHeadersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireAllHeaders;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype, "samesite", {
        get: function () {
            return this.getStringAttribute('samesite');
        },
        set: function (value) {
            this._samesite = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype.resetSamesite = function () {
        this._samesite = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype, "samesiteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._samesite;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype, "secure", {
        get: function () {
            return this.getStringAttribute('secure');
        },
        set: function (value) {
            this._secure = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype.resetSecure = function () {
        this._secure = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype, "secureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secure;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype, "zeroDowntimeFailover", {
        get: function () {
            return this.getStringAttribute('zero_downtime_failover');
        },
        set: function (value) {
            this._zeroDowntimeFailover = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype.resetZeroDowntimeFailover = function () {
        this._zeroDowntimeFailover = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.prototype, "zeroDowntimeFailoverInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zeroDowntimeFailover;
        },
        enumerable: false,
        configurable: true
    });
    return LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference;
}(cdktf.ComplexObject));
exports.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference = LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference;
function loadBalancerRulesOverridesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        adaptive_routing: loadBalancerRulesOverridesAdaptiveRoutingToTerraform(struct.adaptiveRouting),
        country_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.countryPools),
        default_pools: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.defaultPools),
        fallback_pool: cdktf.stringToTerraform(struct.fallbackPool),
        location_strategy: loadBalancerRulesOverridesLocationStrategyToTerraform(struct.locationStrategy),
        pop_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.popPools),
        random_steering: loadBalancerRulesOverridesRandomSteeringToTerraform(struct.randomSteering),
        region_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.regionPools),
        session_affinity: cdktf.stringToTerraform(struct.sessionAffinity),
        session_affinity_attributes: loadBalancerRulesOverridesSessionAffinityAttributesToTerraform(struct.sessionAffinityAttributes),
        session_affinity_ttl: cdktf.numberToTerraform(struct.sessionAffinityTtl),
        steering_policy: cdktf.stringToTerraform(struct.steeringPolicy),
        ttl: cdktf.numberToTerraform(struct.ttl),
    };
}
function loadBalancerRulesOverridesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        adaptive_routing: {
            value: loadBalancerRulesOverridesAdaptiveRoutingToHclTerraform(struct.adaptiveRouting),
            isBlock: true,
            type: "struct",
            storageClassType: "LoadBalancerRulesOverridesAdaptiveRouting",
        },
        country_pools: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.countryPools),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
        default_pools: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.defaultPools),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        fallback_pool: {
            value: cdktf.stringToHclTerraform(struct.fallbackPool),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        location_strategy: {
            value: loadBalancerRulesOverridesLocationStrategyToHclTerraform(struct.locationStrategy),
            isBlock: true,
            type: "struct",
            storageClassType: "LoadBalancerRulesOverridesLocationStrategy",
        },
        pop_pools: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.popPools),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
        random_steering: {
            value: loadBalancerRulesOverridesRandomSteeringToHclTerraform(struct.randomSteering),
            isBlock: true,
            type: "struct",
            storageClassType: "LoadBalancerRulesOverridesRandomSteering",
        },
        region_pools: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.regionPools),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
        session_affinity: {
            value: cdktf.stringToHclTerraform(struct.sessionAffinity),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        session_affinity_attributes: {
            value: loadBalancerRulesOverridesSessionAffinityAttributesToHclTerraform(struct.sessionAffinityAttributes),
            isBlock: true,
            type: "struct",
            storageClassType: "LoadBalancerRulesOverridesSessionAffinityAttributes",
        },
        session_affinity_ttl: {
            value: cdktf.numberToHclTerraform(struct.sessionAffinityTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        steering_policy: {
            value: cdktf.stringToHclTerraform(struct.steeringPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ttl: {
            value: cdktf.numberToHclTerraform(struct.ttl),
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
var LoadBalancerRulesOverridesOutputReference = /** @class */ (function (_super) {
    __extends(LoadBalancerRulesOverridesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function LoadBalancerRulesOverridesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // adaptive_routing - computed: true, optional: true, required: false
        _this._adaptiveRouting = new LoadBalancerRulesOverridesAdaptiveRoutingOutputReference(_this, "adaptive_routing");
        // location_strategy - computed: true, optional: true, required: false
        _this._locationStrategy = new LoadBalancerRulesOverridesLocationStrategyOutputReference(_this, "location_strategy");
        // random_steering - computed: true, optional: true, required: false
        _this._randomSteering = new LoadBalancerRulesOverridesRandomSteeringOutputReference(_this, "random_steering");
        // session_affinity_attributes - computed: true, optional: true, required: false
        _this._sessionAffinityAttributes = new LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference(_this, "session_affinity_attributes");
        return _this;
    }
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._adaptiveRouting) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.adaptiveRouting = (_b = this._adaptiveRouting) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._countryPools !== undefined) {
                hasAnyValues = true;
                internalValueResult.countryPools = this._countryPools;
            }
            if (this._defaultPools !== undefined) {
                hasAnyValues = true;
                internalValueResult.defaultPools = this._defaultPools;
            }
            if (this._fallbackPool !== undefined) {
                hasAnyValues = true;
                internalValueResult.fallbackPool = this._fallbackPool;
            }
            if (((_c = this._locationStrategy) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.locationStrategy = (_d = this._locationStrategy) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (this._popPools !== undefined) {
                hasAnyValues = true;
                internalValueResult.popPools = this._popPools;
            }
            if (((_e = this._randomSteering) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.randomSteering = (_f = this._randomSteering) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            if (this._regionPools !== undefined) {
                hasAnyValues = true;
                internalValueResult.regionPools = this._regionPools;
            }
            if (this._sessionAffinity !== undefined) {
                hasAnyValues = true;
                internalValueResult.sessionAffinity = this._sessionAffinity;
            }
            if (((_g = this._sessionAffinityAttributes) === null || _g === void 0 ? void 0 : _g.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.sessionAffinityAttributes = (_h = this._sessionAffinityAttributes) === null || _h === void 0 ? void 0 : _h.internalValue;
            }
            if (this._sessionAffinityTtl !== undefined) {
                hasAnyValues = true;
                internalValueResult.sessionAffinityTtl = this._sessionAffinityTtl;
            }
            if (this._steeringPolicy !== undefined) {
                hasAnyValues = true;
                internalValueResult.steeringPolicy = this._steeringPolicy;
            }
            if (this._ttl !== undefined) {
                hasAnyValues = true;
                internalValueResult.ttl = this._ttl;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._adaptiveRouting.internalValue = undefined;
                this._countryPools = undefined;
                this._defaultPools = undefined;
                this._fallbackPool = undefined;
                this._locationStrategy.internalValue = undefined;
                this._popPools = undefined;
                this._randomSteering.internalValue = undefined;
                this._regionPools = undefined;
                this._sessionAffinity = undefined;
                this._sessionAffinityAttributes.internalValue = undefined;
                this._sessionAffinityTtl = undefined;
                this._steeringPolicy = undefined;
                this._ttl = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._adaptiveRouting.internalValue = value.adaptiveRouting;
                this._countryPools = value.countryPools;
                this._defaultPools = value.defaultPools;
                this._fallbackPool = value.fallbackPool;
                this._locationStrategy.internalValue = value.locationStrategy;
                this._popPools = value.popPools;
                this._randomSteering.internalValue = value.randomSteering;
                this._regionPools = value.regionPools;
                this._sessionAffinity = value.sessionAffinity;
                this._sessionAffinityAttributes.internalValue = value.sessionAffinityAttributes;
                this._sessionAffinityTtl = value.sessionAffinityTtl;
                this._steeringPolicy = value.steeringPolicy;
                this._ttl = value.ttl;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "adaptiveRouting", {
        get: function () {
            return this._adaptiveRouting;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOverridesOutputReference.prototype.putAdaptiveRouting = function (value) {
        this._adaptiveRouting.internalValue = value;
    };
    LoadBalancerRulesOverridesOutputReference.prototype.resetAdaptiveRouting = function () {
        this._adaptiveRouting.internalValue = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "adaptiveRoutingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._adaptiveRouting.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "countryPools", {
        get: function () {
            return this.interpolationForAttribute('country_pools');
        },
        set: function (value) {
            this._countryPools = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOverridesOutputReference.prototype.resetCountryPools = function () {
        this._countryPools = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "countryPoolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._countryPools;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "defaultPools", {
        get: function () {
            return this.getListAttribute('default_pools');
        },
        set: function (value) {
            this._defaultPools = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOverridesOutputReference.prototype.resetDefaultPools = function () {
        this._defaultPools = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "defaultPoolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultPools;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "fallbackPool", {
        get: function () {
            return this.getStringAttribute('fallback_pool');
        },
        set: function (value) {
            this._fallbackPool = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOverridesOutputReference.prototype.resetFallbackPool = function () {
        this._fallbackPool = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "fallbackPoolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fallbackPool;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "locationStrategy", {
        get: function () {
            return this._locationStrategy;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOverridesOutputReference.prototype.putLocationStrategy = function (value) {
        this._locationStrategy.internalValue = value;
    };
    LoadBalancerRulesOverridesOutputReference.prototype.resetLocationStrategy = function () {
        this._locationStrategy.internalValue = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "locationStrategyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._locationStrategy.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "popPools", {
        get: function () {
            return this.interpolationForAttribute('pop_pools');
        },
        set: function (value) {
            this._popPools = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOverridesOutputReference.prototype.resetPopPools = function () {
        this._popPools = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "popPoolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._popPools;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "randomSteering", {
        get: function () {
            return this._randomSteering;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOverridesOutputReference.prototype.putRandomSteering = function (value) {
        this._randomSteering.internalValue = value;
    };
    LoadBalancerRulesOverridesOutputReference.prototype.resetRandomSteering = function () {
        this._randomSteering.internalValue = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "randomSteeringInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._randomSteering.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "regionPools", {
        get: function () {
            return this.interpolationForAttribute('region_pools');
        },
        set: function (value) {
            this._regionPools = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOverridesOutputReference.prototype.resetRegionPools = function () {
        this._regionPools = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "regionPoolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._regionPools;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "sessionAffinity", {
        get: function () {
            return this.getStringAttribute('session_affinity');
        },
        set: function (value) {
            this._sessionAffinity = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOverridesOutputReference.prototype.resetSessionAffinity = function () {
        this._sessionAffinity = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "sessionAffinityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sessionAffinity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "sessionAffinityAttributes", {
        get: function () {
            return this._sessionAffinityAttributes;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOverridesOutputReference.prototype.putSessionAffinityAttributes = function (value) {
        this._sessionAffinityAttributes.internalValue = value;
    };
    LoadBalancerRulesOverridesOutputReference.prototype.resetSessionAffinityAttributes = function () {
        this._sessionAffinityAttributes.internalValue = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "sessionAffinityAttributesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sessionAffinityAttributes.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "sessionAffinityTtl", {
        get: function () {
            return this.getNumberAttribute('session_affinity_ttl');
        },
        set: function (value) {
            this._sessionAffinityTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOverridesOutputReference.prototype.resetSessionAffinityTtl = function () {
        this._sessionAffinityTtl = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "sessionAffinityTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sessionAffinityTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "steeringPolicy", {
        get: function () {
            return this.getStringAttribute('steering_policy');
        },
        set: function (value) {
            this._steeringPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOverridesOutputReference.prototype.resetSteeringPolicy = function () {
        this._steeringPolicy = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "steeringPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._steeringPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "ttl", {
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        set: function (value) {
            this._ttl = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOverridesOutputReference.prototype.resetTtl = function () {
        this._ttl = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOverridesOutputReference.prototype, "ttlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ttl;
        },
        enumerable: false,
        configurable: true
    });
    return LoadBalancerRulesOverridesOutputReference;
}(cdktf.ComplexObject));
exports.LoadBalancerRulesOverridesOutputReference = LoadBalancerRulesOverridesOutputReference;
function loadBalancerRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        condition: cdktf.stringToTerraform(struct.condition),
        disabled: cdktf.booleanToTerraform(struct.disabled),
        fixed_response: loadBalancerRulesFixedResponseToTerraform(struct.fixedResponse),
        name: cdktf.stringToTerraform(struct.name),
        overrides: loadBalancerRulesOverridesToTerraform(struct.overrides),
        priority: cdktf.numberToTerraform(struct.priority),
        terminates: cdktf.booleanToTerraform(struct.terminates),
    };
}
function loadBalancerRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        condition: {
            value: cdktf.stringToHclTerraform(struct.condition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        disabled: {
            value: cdktf.booleanToHclTerraform(struct.disabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        fixed_response: {
            value: loadBalancerRulesFixedResponseToHclTerraform(struct.fixedResponse),
            isBlock: true,
            type: "struct",
            storageClassType: "LoadBalancerRulesFixedResponse",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        overrides: {
            value: loadBalancerRulesOverridesToHclTerraform(struct.overrides),
            isBlock: true,
            type: "struct",
            storageClassType: "LoadBalancerRulesOverrides",
        },
        priority: {
            value: cdktf.numberToHclTerraform(struct.priority),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        terminates: {
            value: cdktf.booleanToHclTerraform(struct.terminates),
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
var LoadBalancerRulesOutputReference = /** @class */ (function (_super) {
    __extends(LoadBalancerRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function LoadBalancerRulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // fixed_response - computed: true, optional: true, required: false
        _this._fixedResponse = new LoadBalancerRulesFixedResponseOutputReference(_this, "fixed_response");
        // overrides - computed: true, optional: true, required: false
        _this._overrides = new LoadBalancerRulesOverridesOutputReference(_this, "overrides");
        return _this;
    }
    Object.defineProperty(LoadBalancerRulesOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._condition !== undefined) {
                hasAnyValues = true;
                internalValueResult.condition = this._condition;
            }
            if (this._disabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.disabled = this._disabled;
            }
            if (((_a = this._fixedResponse) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.fixedResponse = (_b = this._fixedResponse) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (((_c = this._overrides) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.overrides = (_d = this._overrides) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (this._priority !== undefined) {
                hasAnyValues = true;
                internalValueResult.priority = this._priority;
            }
            if (this._terminates !== undefined) {
                hasAnyValues = true;
                internalValueResult.terminates = this._terminates;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._condition = undefined;
                this._disabled = undefined;
                this._fixedResponse.internalValue = undefined;
                this._name = undefined;
                this._overrides.internalValue = undefined;
                this._priority = undefined;
                this._terminates = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._condition = value.condition;
                this._disabled = value.disabled;
                this._fixedResponse.internalValue = value.fixedResponse;
                this._name = value.name;
                this._overrides.internalValue = value.overrides;
                this._priority = value.priority;
                this._terminates = value.terminates;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOutputReference.prototype, "condition", {
        get: function () {
            return this.getStringAttribute('condition');
        },
        set: function (value) {
            this._condition = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOutputReference.prototype.resetCondition = function () {
        this._condition = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOutputReference.prototype, "conditionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._condition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOutputReference.prototype, "disabled", {
        get: function () {
            return this.getBooleanAttribute('disabled');
        },
        set: function (value) {
            this._disabled = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOutputReference.prototype.resetDisabled = function () {
        this._disabled = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOutputReference.prototype, "disabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOutputReference.prototype, "fixedResponse", {
        get: function () {
            return this._fixedResponse;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOutputReference.prototype.putFixedResponse = function (value) {
        this._fixedResponse.internalValue = value;
    };
    LoadBalancerRulesOutputReference.prototype.resetFixedResponse = function () {
        this._fixedResponse.internalValue = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOutputReference.prototype, "fixedResponseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fixedResponse.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOutputReference.prototype, "overrides", {
        get: function () {
            return this._overrides;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOutputReference.prototype.putOverrides = function (value) {
        this._overrides.internalValue = value;
    };
    LoadBalancerRulesOutputReference.prototype.resetOverrides = function () {
        this._overrides.internalValue = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOutputReference.prototype, "overridesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._overrides.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOutputReference.prototype, "priority", {
        get: function () {
            return this.getNumberAttribute('priority');
        },
        set: function (value) {
            this._priority = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOutputReference.prototype.resetPriority = function () {
        this._priority = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOutputReference.prototype, "priorityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._priority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerRulesOutputReference.prototype, "terminates", {
        get: function () {
            return this.getBooleanAttribute('terminates');
        },
        set: function (value) {
            this._terminates = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerRulesOutputReference.prototype.resetTerminates = function () {
        this._terminates = undefined;
    };
    Object.defineProperty(LoadBalancerRulesOutputReference.prototype, "terminatesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._terminates;
        },
        enumerable: false,
        configurable: true
    });
    return LoadBalancerRulesOutputReference;
}(cdktf.ComplexObject));
exports.LoadBalancerRulesOutputReference = LoadBalancerRulesOutputReference;
var LoadBalancerRulesList = /** @class */ (function (_super) {
    __extends(LoadBalancerRulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function LoadBalancerRulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    LoadBalancerRulesList.prototype.get = function (index) {
        return new LoadBalancerRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return LoadBalancerRulesList;
}(cdktf.ComplexList));
exports.LoadBalancerRulesList = LoadBalancerRulesList;
function loadBalancerSessionAffinityAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        drain_duration: cdktf.numberToTerraform(struct.drainDuration),
        headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.headers),
        require_all_headers: cdktf.booleanToTerraform(struct.requireAllHeaders),
        samesite: cdktf.stringToTerraform(struct.samesite),
        secure: cdktf.stringToTerraform(struct.secure),
        zero_downtime_failover: cdktf.stringToTerraform(struct.zeroDowntimeFailover),
    };
}
function loadBalancerSessionAffinityAttributesToHclTerraform(struct) {
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
        headers: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.headers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        require_all_headers: {
            value: cdktf.booleanToHclTerraform(struct.requireAllHeaders),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        samesite: {
            value: cdktf.stringToHclTerraform(struct.samesite),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secure: {
            value: cdktf.stringToHclTerraform(struct.secure),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        zero_downtime_failover: {
            value: cdktf.stringToHclTerraform(struct.zeroDowntimeFailover),
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
var LoadBalancerSessionAffinityAttributesOutputReference = /** @class */ (function (_super) {
    __extends(LoadBalancerSessionAffinityAttributesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function LoadBalancerSessionAffinityAttributesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(LoadBalancerSessionAffinityAttributesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._drainDuration !== undefined) {
                hasAnyValues = true;
                internalValueResult.drainDuration = this._drainDuration;
            }
            if (this._headers !== undefined) {
                hasAnyValues = true;
                internalValueResult.headers = this._headers;
            }
            if (this._requireAllHeaders !== undefined) {
                hasAnyValues = true;
                internalValueResult.requireAllHeaders = this._requireAllHeaders;
            }
            if (this._samesite !== undefined) {
                hasAnyValues = true;
                internalValueResult.samesite = this._samesite;
            }
            if (this._secure !== undefined) {
                hasAnyValues = true;
                internalValueResult.secure = this._secure;
            }
            if (this._zeroDowntimeFailover !== undefined) {
                hasAnyValues = true;
                internalValueResult.zeroDowntimeFailover = this._zeroDowntimeFailover;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._drainDuration = undefined;
                this._headers = undefined;
                this._requireAllHeaders = undefined;
                this._samesite = undefined;
                this._secure = undefined;
                this._zeroDowntimeFailover = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._drainDuration = value.drainDuration;
                this._headers = value.headers;
                this._requireAllHeaders = value.requireAllHeaders;
                this._samesite = value.samesite;
                this._secure = value.secure;
                this._zeroDowntimeFailover = value.zeroDowntimeFailover;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerSessionAffinityAttributesOutputReference.prototype, "drainDuration", {
        get: function () {
            return this.getNumberAttribute('drain_duration');
        },
        set: function (value) {
            this._drainDuration = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerSessionAffinityAttributesOutputReference.prototype.resetDrainDuration = function () {
        this._drainDuration = undefined;
    };
    Object.defineProperty(LoadBalancerSessionAffinityAttributesOutputReference.prototype, "drainDurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._drainDuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerSessionAffinityAttributesOutputReference.prototype, "headers", {
        get: function () {
            return this.getListAttribute('headers');
        },
        set: function (value) {
            this._headers = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerSessionAffinityAttributesOutputReference.prototype.resetHeaders = function () {
        this._headers = undefined;
    };
    Object.defineProperty(LoadBalancerSessionAffinityAttributesOutputReference.prototype, "headersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._headers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerSessionAffinityAttributesOutputReference.prototype, "requireAllHeaders", {
        get: function () {
            return this.getBooleanAttribute('require_all_headers');
        },
        set: function (value) {
            this._requireAllHeaders = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerSessionAffinityAttributesOutputReference.prototype.resetRequireAllHeaders = function () {
        this._requireAllHeaders = undefined;
    };
    Object.defineProperty(LoadBalancerSessionAffinityAttributesOutputReference.prototype, "requireAllHeadersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireAllHeaders;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerSessionAffinityAttributesOutputReference.prototype, "samesite", {
        get: function () {
            return this.getStringAttribute('samesite');
        },
        set: function (value) {
            this._samesite = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerSessionAffinityAttributesOutputReference.prototype.resetSamesite = function () {
        this._samesite = undefined;
    };
    Object.defineProperty(LoadBalancerSessionAffinityAttributesOutputReference.prototype, "samesiteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._samesite;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerSessionAffinityAttributesOutputReference.prototype, "secure", {
        get: function () {
            return this.getStringAttribute('secure');
        },
        set: function (value) {
            this._secure = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerSessionAffinityAttributesOutputReference.prototype.resetSecure = function () {
        this._secure = undefined;
    };
    Object.defineProperty(LoadBalancerSessionAffinityAttributesOutputReference.prototype, "secureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secure;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerSessionAffinityAttributesOutputReference.prototype, "zeroDowntimeFailover", {
        get: function () {
            return this.getStringAttribute('zero_downtime_failover');
        },
        set: function (value) {
            this._zeroDowntimeFailover = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerSessionAffinityAttributesOutputReference.prototype.resetZeroDowntimeFailover = function () {
        this._zeroDowntimeFailover = undefined;
    };
    Object.defineProperty(LoadBalancerSessionAffinityAttributesOutputReference.prototype, "zeroDowntimeFailoverInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zeroDowntimeFailover;
        },
        enumerable: false,
        configurable: true
    });
    return LoadBalancerSessionAffinityAttributesOutputReference;
}(cdktf.ComplexObject));
exports.LoadBalancerSessionAffinityAttributesOutputReference = LoadBalancerSessionAffinityAttributesOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer cloudflare_load_balancer}
*/
var LoadBalancer = /** @class */ (function (_super) {
    __extends(LoadBalancer, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer cloudflare_load_balancer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LoadBalancerConfig
    */
    function LoadBalancer(scope, id, config) {
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
        // adaptive_routing - computed: true, optional: true, required: false
        _this._adaptiveRouting = new LoadBalancerAdaptiveRoutingOutputReference(_this, "adaptive_routing");
        // location_strategy - computed: true, optional: true, required: false
        _this._locationStrategy = new LoadBalancerLocationStrategyOutputReference(_this, "location_strategy");
        // random_steering - computed: true, optional: true, required: false
        _this._randomSteering = new LoadBalancerRandomSteeringOutputReference(_this, "random_steering");
        // rules - computed: true, optional: true, required: false
        _this._rules = new LoadBalancerRulesList(_this, "rules", false);
        // session_affinity_attributes - computed: true, optional: true, required: false
        _this._sessionAffinityAttributes = new LoadBalancerSessionAffinityAttributesOutputReference(_this, "session_affinity_attributes");
        _this._adaptiveRouting.internalValue = config.adaptiveRouting;
        _this._countryPools = config.countryPools;
        _this._defaultPools = config.defaultPools;
        _this._description = config.description;
        _this._enabled = config.enabled;
        _this._fallbackPool = config.fallbackPool;
        _this._locationStrategy.internalValue = config.locationStrategy;
        _this._name = config.name;
        _this._networks = config.networks;
        _this._popPools = config.popPools;
        _this._proxied = config.proxied;
        _this._randomSteering.internalValue = config.randomSteering;
        _this._regionPools = config.regionPools;
        _this._rules.internalValue = config.rules;
        _this._sessionAffinity = config.sessionAffinity;
        _this._sessionAffinityAttributes.internalValue = config.sessionAffinityAttributes;
        _this._sessionAffinityTtl = config.sessionAffinityTtl;
        _this._steeringPolicy = config.steeringPolicy;
        _this._ttl = config.ttl;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a LoadBalancer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LoadBalancer to import
    * @param importFromId The id of the existing LoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LoadBalancer to import is found
    */
    LoadBalancer.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_load_balancer", importId: importFromId, provider: provider });
    };
    Object.defineProperty(LoadBalancer.prototype, "adaptiveRouting", {
        get: function () {
            return this._adaptiveRouting;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancer.prototype.putAdaptiveRouting = function (value) {
        this._adaptiveRouting.internalValue = value;
    };
    LoadBalancer.prototype.resetAdaptiveRouting = function () {
        this._adaptiveRouting.internalValue = undefined;
    };
    Object.defineProperty(LoadBalancer.prototype, "adaptiveRoutingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._adaptiveRouting.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "countryPools", {
        get: function () {
            return this.interpolationForAttribute('country_pools');
        },
        set: function (value) {
            this._countryPools = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancer.prototype.resetCountryPools = function () {
        this._countryPools = undefined;
    };
    Object.defineProperty(LoadBalancer.prototype, "countryPoolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._countryPools;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "defaultPools", {
        get: function () {
            return this.getListAttribute('default_pools');
        },
        set: function (value) {
            this._defaultPools = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "defaultPoolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultPools;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancer.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(LoadBalancer.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancer.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(LoadBalancer.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "fallbackPool", {
        get: function () {
            return this.getStringAttribute('fallback_pool');
        },
        set: function (value) {
            this._fallbackPool = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "fallbackPoolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fallbackPool;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "locationStrategy", {
        get: function () {
            return this._locationStrategy;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancer.prototype.putLocationStrategy = function (value) {
        this._locationStrategy.internalValue = value;
    };
    LoadBalancer.prototype.resetLocationStrategy = function () {
        this._locationStrategy.internalValue = undefined;
    };
    Object.defineProperty(LoadBalancer.prototype, "locationStrategyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._locationStrategy.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "networks", {
        get: function () {
            return this.getListAttribute('networks');
        },
        set: function (value) {
            this._networks = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancer.prototype.resetNetworks = function () {
        this._networks = undefined;
    };
    Object.defineProperty(LoadBalancer.prototype, "networksInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "popPools", {
        get: function () {
            return this.interpolationForAttribute('pop_pools');
        },
        set: function (value) {
            this._popPools = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancer.prototype.resetPopPools = function () {
        this._popPools = undefined;
    };
    Object.defineProperty(LoadBalancer.prototype, "popPoolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._popPools;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "proxied", {
        get: function () {
            return this.getBooleanAttribute('proxied');
        },
        set: function (value) {
            this._proxied = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancer.prototype.resetProxied = function () {
        this._proxied = undefined;
    };
    Object.defineProperty(LoadBalancer.prototype, "proxiedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._proxied;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "randomSteering", {
        get: function () {
            return this._randomSteering;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancer.prototype.putRandomSteering = function (value) {
        this._randomSteering.internalValue = value;
    };
    LoadBalancer.prototype.resetRandomSteering = function () {
        this._randomSteering.internalValue = undefined;
    };
    Object.defineProperty(LoadBalancer.prototype, "randomSteeringInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._randomSteering.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "regionPools", {
        get: function () {
            return this.interpolationForAttribute('region_pools');
        },
        set: function (value) {
            this._regionPools = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancer.prototype.resetRegionPools = function () {
        this._regionPools = undefined;
    };
    Object.defineProperty(LoadBalancer.prototype, "regionPoolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._regionPools;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancer.prototype.putRules = function (value) {
        this._rules.internalValue = value;
    };
    LoadBalancer.prototype.resetRules = function () {
        this._rules.internalValue = undefined;
    };
    Object.defineProperty(LoadBalancer.prototype, "rulesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rules.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "sessionAffinity", {
        get: function () {
            return this.getStringAttribute('session_affinity');
        },
        set: function (value) {
            this._sessionAffinity = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancer.prototype.resetSessionAffinity = function () {
        this._sessionAffinity = undefined;
    };
    Object.defineProperty(LoadBalancer.prototype, "sessionAffinityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sessionAffinity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "sessionAffinityAttributes", {
        get: function () {
            return this._sessionAffinityAttributes;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancer.prototype.putSessionAffinityAttributes = function (value) {
        this._sessionAffinityAttributes.internalValue = value;
    };
    LoadBalancer.prototype.resetSessionAffinityAttributes = function () {
        this._sessionAffinityAttributes.internalValue = undefined;
    };
    Object.defineProperty(LoadBalancer.prototype, "sessionAffinityAttributesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sessionAffinityAttributes.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "sessionAffinityTtl", {
        get: function () {
            return this.getNumberAttribute('session_affinity_ttl');
        },
        set: function (value) {
            this._sessionAffinityTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancer.prototype.resetSessionAffinityTtl = function () {
        this._sessionAffinityTtl = undefined;
    };
    Object.defineProperty(LoadBalancer.prototype, "sessionAffinityTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sessionAffinityTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "steeringPolicy", {
        get: function () {
            return this.getStringAttribute('steering_policy');
        },
        set: function (value) {
            this._steeringPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancer.prototype.resetSteeringPolicy = function () {
        this._steeringPolicy = undefined;
    };
    Object.defineProperty(LoadBalancer.prototype, "steeringPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._steeringPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "ttl", {
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        set: function (value) {
            this._ttl = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancer.prototype.resetTtl = function () {
        this._ttl = undefined;
    };
    Object.defineProperty(LoadBalancer.prototype, "ttlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ttl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancer.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(LoadBalancer.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "zoneName", {
        // zone_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_name');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LoadBalancer.prototype.synthesizeAttributes = function () {
        return {
            adaptive_routing: loadBalancerAdaptiveRoutingToTerraform(this._adaptiveRouting.internalValue),
            country_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._countryPools),
            default_pools: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultPools),
            description: cdktf.stringToTerraform(this._description),
            enabled: cdktf.booleanToTerraform(this._enabled),
            fallback_pool: cdktf.stringToTerraform(this._fallbackPool),
            location_strategy: loadBalancerLocationStrategyToTerraform(this._locationStrategy.internalValue),
            name: cdktf.stringToTerraform(this._name),
            networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networks),
            pop_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._popPools),
            proxied: cdktf.booleanToTerraform(this._proxied),
            random_steering: loadBalancerRandomSteeringToTerraform(this._randomSteering.internalValue),
            region_pools: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._regionPools),
            rules: cdktf.listMapper(loadBalancerRulesToTerraform, false)(this._rules.internalValue),
            session_affinity: cdktf.stringToTerraform(this._sessionAffinity),
            session_affinity_attributes: loadBalancerSessionAffinityAttributesToTerraform(this._sessionAffinityAttributes.internalValue),
            session_affinity_ttl: cdktf.numberToTerraform(this._sessionAffinityTtl),
            steering_policy: cdktf.stringToTerraform(this._steeringPolicy),
            ttl: cdktf.numberToTerraform(this._ttl),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    LoadBalancer.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            adaptive_routing: {
                value: loadBalancerAdaptiveRoutingToHclTerraform(this._adaptiveRouting.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "LoadBalancerAdaptiveRouting",
            },
            country_pools: {
                value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._countryPools),
                isBlock: false,
                type: "map",
                storageClassType: "stringListMap",
            },
            default_pools: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultPools),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            fallback_pool: {
                value: cdktf.stringToHclTerraform(this._fallbackPool),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            location_strategy: {
                value: loadBalancerLocationStrategyToHclTerraform(this._locationStrategy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "LoadBalancerLocationStrategy",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            networks: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networks),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            pop_pools: {
                value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._popPools),
                isBlock: false,
                type: "map",
                storageClassType: "stringListMap",
            },
            proxied: {
                value: cdktf.booleanToHclTerraform(this._proxied),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            random_steering: {
                value: loadBalancerRandomSteeringToHclTerraform(this._randomSteering.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "LoadBalancerRandomSteering",
            },
            region_pools: {
                value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._regionPools),
                isBlock: false,
                type: "map",
                storageClassType: "stringListMap",
            },
            rules: {
                value: cdktf.listMapperHcl(loadBalancerRulesToHclTerraform, false)(this._rules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "LoadBalancerRulesList",
            },
            session_affinity: {
                value: cdktf.stringToHclTerraform(this._sessionAffinity),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            session_affinity_attributes: {
                value: loadBalancerSessionAffinityAttributesToHclTerraform(this._sessionAffinityAttributes.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "LoadBalancerSessionAffinityAttributes",
            },
            session_affinity_ttl: {
                value: cdktf.numberToHclTerraform(this._sessionAffinityTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            steering_policy: {
                value: cdktf.stringToHclTerraform(this._steeringPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ttl: {
                value: cdktf.numberToHclTerraform(this._ttl),
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
    LoadBalancer.tfResourceType = "cloudflare_load_balancer";
    return LoadBalancer;
}(cdktf.TerraformResource));
exports.LoadBalancer = LoadBalancer;
