"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool
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
exports.LoadBalancerPool = exports.LoadBalancerPoolOriginsList = exports.LoadBalancerPoolOriginsOutputReference = exports.LoadBalancerPoolOriginsHeaderOutputReference = exports.LoadBalancerPoolOriginSteeringOutputReference = exports.LoadBalancerPoolNotificationFilterOutputReference = exports.LoadBalancerPoolNotificationFilterPoolOutputReference = exports.LoadBalancerPoolNotificationFilterOriginOutputReference = exports.LoadBalancerPoolLoadSheddingOutputReference = void 0;
exports.loadBalancerPoolLoadSheddingToTerraform = loadBalancerPoolLoadSheddingToTerraform;
exports.loadBalancerPoolLoadSheddingToHclTerraform = loadBalancerPoolLoadSheddingToHclTerraform;
exports.loadBalancerPoolNotificationFilterOriginToTerraform = loadBalancerPoolNotificationFilterOriginToTerraform;
exports.loadBalancerPoolNotificationFilterOriginToHclTerraform = loadBalancerPoolNotificationFilterOriginToHclTerraform;
exports.loadBalancerPoolNotificationFilterPoolToTerraform = loadBalancerPoolNotificationFilterPoolToTerraform;
exports.loadBalancerPoolNotificationFilterPoolToHclTerraform = loadBalancerPoolNotificationFilterPoolToHclTerraform;
exports.loadBalancerPoolNotificationFilterToTerraform = loadBalancerPoolNotificationFilterToTerraform;
exports.loadBalancerPoolNotificationFilterToHclTerraform = loadBalancerPoolNotificationFilterToHclTerraform;
exports.loadBalancerPoolOriginSteeringToTerraform = loadBalancerPoolOriginSteeringToTerraform;
exports.loadBalancerPoolOriginSteeringToHclTerraform = loadBalancerPoolOriginSteeringToHclTerraform;
exports.loadBalancerPoolOriginsHeaderToTerraform = loadBalancerPoolOriginsHeaderToTerraform;
exports.loadBalancerPoolOriginsHeaderToHclTerraform = loadBalancerPoolOriginsHeaderToHclTerraform;
exports.loadBalancerPoolOriginsToTerraform = loadBalancerPoolOriginsToTerraform;
exports.loadBalancerPoolOriginsToHclTerraform = loadBalancerPoolOriginsToHclTerraform;
var cdktf = require("cdktf");
function loadBalancerPoolLoadSheddingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        default_percent: cdktf.numberToTerraform(struct.defaultPercent),
        default_policy: cdktf.stringToTerraform(struct.defaultPolicy),
        session_percent: cdktf.numberToTerraform(struct.sessionPercent),
        session_policy: cdktf.stringToTerraform(struct.sessionPolicy),
    };
}
function loadBalancerPoolLoadSheddingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        default_percent: {
            value: cdktf.numberToHclTerraform(struct.defaultPercent),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        default_policy: {
            value: cdktf.stringToHclTerraform(struct.defaultPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        session_percent: {
            value: cdktf.numberToHclTerraform(struct.sessionPercent),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        session_policy: {
            value: cdktf.stringToHclTerraform(struct.sessionPolicy),
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
var LoadBalancerPoolLoadSheddingOutputReference = /** @class */ (function (_super) {
    __extends(LoadBalancerPoolLoadSheddingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function LoadBalancerPoolLoadSheddingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(LoadBalancerPoolLoadSheddingOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._defaultPercent !== undefined) {
                hasAnyValues = true;
                internalValueResult.defaultPercent = this._defaultPercent;
            }
            if (this._defaultPolicy !== undefined) {
                hasAnyValues = true;
                internalValueResult.defaultPolicy = this._defaultPolicy;
            }
            if (this._sessionPercent !== undefined) {
                hasAnyValues = true;
                internalValueResult.sessionPercent = this._sessionPercent;
            }
            if (this._sessionPolicy !== undefined) {
                hasAnyValues = true;
                internalValueResult.sessionPolicy = this._sessionPolicy;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._defaultPercent = undefined;
                this._defaultPolicy = undefined;
                this._sessionPercent = undefined;
                this._sessionPolicy = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._defaultPercent = value.defaultPercent;
                this._defaultPolicy = value.defaultPolicy;
                this._sessionPercent = value.sessionPercent;
                this._sessionPolicy = value.sessionPolicy;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPoolLoadSheddingOutputReference.prototype, "defaultPercent", {
        get: function () {
            return this.getNumberAttribute('default_percent');
        },
        set: function (value) {
            this._defaultPercent = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPoolLoadSheddingOutputReference.prototype.resetDefaultPercent = function () {
        this._defaultPercent = undefined;
    };
    Object.defineProperty(LoadBalancerPoolLoadSheddingOutputReference.prototype, "defaultPercentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultPercent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPoolLoadSheddingOutputReference.prototype, "defaultPolicy", {
        get: function () {
            return this.getStringAttribute('default_policy');
        },
        set: function (value) {
            this._defaultPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPoolLoadSheddingOutputReference.prototype.resetDefaultPolicy = function () {
        this._defaultPolicy = undefined;
    };
    Object.defineProperty(LoadBalancerPoolLoadSheddingOutputReference.prototype, "defaultPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPoolLoadSheddingOutputReference.prototype, "sessionPercent", {
        get: function () {
            return this.getNumberAttribute('session_percent');
        },
        set: function (value) {
            this._sessionPercent = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPoolLoadSheddingOutputReference.prototype.resetSessionPercent = function () {
        this._sessionPercent = undefined;
    };
    Object.defineProperty(LoadBalancerPoolLoadSheddingOutputReference.prototype, "sessionPercentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sessionPercent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPoolLoadSheddingOutputReference.prototype, "sessionPolicy", {
        get: function () {
            return this.getStringAttribute('session_policy');
        },
        set: function (value) {
            this._sessionPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPoolLoadSheddingOutputReference.prototype.resetSessionPolicy = function () {
        this._sessionPolicy = undefined;
    };
    Object.defineProperty(LoadBalancerPoolLoadSheddingOutputReference.prototype, "sessionPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sessionPolicy;
        },
        enumerable: false,
        configurable: true
    });
    return LoadBalancerPoolLoadSheddingOutputReference;
}(cdktf.ComplexObject));
exports.LoadBalancerPoolLoadSheddingOutputReference = LoadBalancerPoolLoadSheddingOutputReference;
function loadBalancerPoolNotificationFilterOriginToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disable: cdktf.booleanToTerraform(struct.disable),
        healthy: cdktf.booleanToTerraform(struct.healthy),
    };
}
function loadBalancerPoolNotificationFilterOriginToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        disable: {
            value: cdktf.booleanToHclTerraform(struct.disable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        healthy: {
            value: cdktf.booleanToHclTerraform(struct.healthy),
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
var LoadBalancerPoolNotificationFilterOriginOutputReference = /** @class */ (function (_super) {
    __extends(LoadBalancerPoolNotificationFilterOriginOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function LoadBalancerPoolNotificationFilterOriginOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(LoadBalancerPoolNotificationFilterOriginOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._disable !== undefined) {
                hasAnyValues = true;
                internalValueResult.disable = this._disable;
            }
            if (this._healthy !== undefined) {
                hasAnyValues = true;
                internalValueResult.healthy = this._healthy;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._disable = undefined;
                this._healthy = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._disable = value.disable;
                this._healthy = value.healthy;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPoolNotificationFilterOriginOutputReference.prototype, "disable", {
        get: function () {
            return this.getBooleanAttribute('disable');
        },
        set: function (value) {
            this._disable = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPoolNotificationFilterOriginOutputReference.prototype.resetDisable = function () {
        this._disable = undefined;
    };
    Object.defineProperty(LoadBalancerPoolNotificationFilterOriginOutputReference.prototype, "disableInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disable;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPoolNotificationFilterOriginOutputReference.prototype, "healthy", {
        get: function () {
            return this.getBooleanAttribute('healthy');
        },
        set: function (value) {
            this._healthy = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPoolNotificationFilterOriginOutputReference.prototype.resetHealthy = function () {
        this._healthy = undefined;
    };
    Object.defineProperty(LoadBalancerPoolNotificationFilterOriginOutputReference.prototype, "healthyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._healthy;
        },
        enumerable: false,
        configurable: true
    });
    return LoadBalancerPoolNotificationFilterOriginOutputReference;
}(cdktf.ComplexObject));
exports.LoadBalancerPoolNotificationFilterOriginOutputReference = LoadBalancerPoolNotificationFilterOriginOutputReference;
function loadBalancerPoolNotificationFilterPoolToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disable: cdktf.booleanToTerraform(struct.disable),
        healthy: cdktf.booleanToTerraform(struct.healthy),
    };
}
function loadBalancerPoolNotificationFilterPoolToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        disable: {
            value: cdktf.booleanToHclTerraform(struct.disable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        healthy: {
            value: cdktf.booleanToHclTerraform(struct.healthy),
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
var LoadBalancerPoolNotificationFilterPoolOutputReference = /** @class */ (function (_super) {
    __extends(LoadBalancerPoolNotificationFilterPoolOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function LoadBalancerPoolNotificationFilterPoolOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(LoadBalancerPoolNotificationFilterPoolOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._disable !== undefined) {
                hasAnyValues = true;
                internalValueResult.disable = this._disable;
            }
            if (this._healthy !== undefined) {
                hasAnyValues = true;
                internalValueResult.healthy = this._healthy;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._disable = undefined;
                this._healthy = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._disable = value.disable;
                this._healthy = value.healthy;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPoolNotificationFilterPoolOutputReference.prototype, "disable", {
        get: function () {
            return this.getBooleanAttribute('disable');
        },
        set: function (value) {
            this._disable = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPoolNotificationFilterPoolOutputReference.prototype.resetDisable = function () {
        this._disable = undefined;
    };
    Object.defineProperty(LoadBalancerPoolNotificationFilterPoolOutputReference.prototype, "disableInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disable;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPoolNotificationFilterPoolOutputReference.prototype, "healthy", {
        get: function () {
            return this.getBooleanAttribute('healthy');
        },
        set: function (value) {
            this._healthy = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPoolNotificationFilterPoolOutputReference.prototype.resetHealthy = function () {
        this._healthy = undefined;
    };
    Object.defineProperty(LoadBalancerPoolNotificationFilterPoolOutputReference.prototype, "healthyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._healthy;
        },
        enumerable: false,
        configurable: true
    });
    return LoadBalancerPoolNotificationFilterPoolOutputReference;
}(cdktf.ComplexObject));
exports.LoadBalancerPoolNotificationFilterPoolOutputReference = LoadBalancerPoolNotificationFilterPoolOutputReference;
function loadBalancerPoolNotificationFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        origin: loadBalancerPoolNotificationFilterOriginToTerraform(struct.origin),
        pool: loadBalancerPoolNotificationFilterPoolToTerraform(struct.pool),
    };
}
function loadBalancerPoolNotificationFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        origin: {
            value: loadBalancerPoolNotificationFilterOriginToHclTerraform(struct.origin),
            isBlock: true,
            type: "struct",
            storageClassType: "LoadBalancerPoolNotificationFilterOrigin",
        },
        pool: {
            value: loadBalancerPoolNotificationFilterPoolToHclTerraform(struct.pool),
            isBlock: true,
            type: "struct",
            storageClassType: "LoadBalancerPoolNotificationFilterPool",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var LoadBalancerPoolNotificationFilterOutputReference = /** @class */ (function (_super) {
    __extends(LoadBalancerPoolNotificationFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function LoadBalancerPoolNotificationFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // origin - computed: true, optional: true, required: false
        _this._origin = new LoadBalancerPoolNotificationFilterOriginOutputReference(_this, "origin");
        // pool - computed: true, optional: true, required: false
        _this._pool = new LoadBalancerPoolNotificationFilterPoolOutputReference(_this, "pool");
        return _this;
    }
    Object.defineProperty(LoadBalancerPoolNotificationFilterOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._origin) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.origin = (_b = this._origin) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._pool) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.pool = (_d = this._pool) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._origin.internalValue = undefined;
                this._pool.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._origin.internalValue = value.origin;
                this._pool.internalValue = value.pool;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPoolNotificationFilterOutputReference.prototype, "origin", {
        get: function () {
            return this._origin;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPoolNotificationFilterOutputReference.prototype.putOrigin = function (value) {
        this._origin.internalValue = value;
    };
    LoadBalancerPoolNotificationFilterOutputReference.prototype.resetOrigin = function () {
        this._origin.internalValue = undefined;
    };
    Object.defineProperty(LoadBalancerPoolNotificationFilterOutputReference.prototype, "originInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._origin.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPoolNotificationFilterOutputReference.prototype, "pool", {
        get: function () {
            return this._pool;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPoolNotificationFilterOutputReference.prototype.putPool = function (value) {
        this._pool.internalValue = value;
    };
    LoadBalancerPoolNotificationFilterOutputReference.prototype.resetPool = function () {
        this._pool.internalValue = undefined;
    };
    Object.defineProperty(LoadBalancerPoolNotificationFilterOutputReference.prototype, "poolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pool.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return LoadBalancerPoolNotificationFilterOutputReference;
}(cdktf.ComplexObject));
exports.LoadBalancerPoolNotificationFilterOutputReference = LoadBalancerPoolNotificationFilterOutputReference;
function loadBalancerPoolOriginSteeringToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        policy: cdktf.stringToTerraform(struct.policy),
    };
}
function loadBalancerPoolOriginSteeringToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        policy: {
            value: cdktf.stringToHclTerraform(struct.policy),
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
var LoadBalancerPoolOriginSteeringOutputReference = /** @class */ (function (_super) {
    __extends(LoadBalancerPoolOriginSteeringOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function LoadBalancerPoolOriginSteeringOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(LoadBalancerPoolOriginSteeringOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._policy !== undefined) {
                hasAnyValues = true;
                internalValueResult.policy = this._policy;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._policy = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._policy = value.policy;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPoolOriginSteeringOutputReference.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPoolOriginSteeringOutputReference.prototype.resetPolicy = function () {
        this._policy = undefined;
    };
    Object.defineProperty(LoadBalancerPoolOriginSteeringOutputReference.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    return LoadBalancerPoolOriginSteeringOutputReference;
}(cdktf.ComplexObject));
exports.LoadBalancerPoolOriginSteeringOutputReference = LoadBalancerPoolOriginSteeringOutputReference;
function loadBalancerPoolOriginsHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        host: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.host),
    };
}
function loadBalancerPoolOriginsHeaderToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        host: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.host),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var LoadBalancerPoolOriginsHeaderOutputReference = /** @class */ (function (_super) {
    __extends(LoadBalancerPoolOriginsHeaderOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function LoadBalancerPoolOriginsHeaderOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(LoadBalancerPoolOriginsHeaderOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._host !== undefined) {
                hasAnyValues = true;
                internalValueResult.host = this._host;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._host = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._host = value.host;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPoolOriginsHeaderOutputReference.prototype, "host", {
        get: function () {
            return this.getListAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPoolOriginsHeaderOutputReference.prototype.resetHost = function () {
        this._host = undefined;
    };
    Object.defineProperty(LoadBalancerPoolOriginsHeaderOutputReference.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    return LoadBalancerPoolOriginsHeaderOutputReference;
}(cdktf.ComplexObject));
exports.LoadBalancerPoolOriginsHeaderOutputReference = LoadBalancerPoolOriginsHeaderOutputReference;
function loadBalancerPoolOriginsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        address: cdktf.stringToTerraform(struct.address),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        flatten_cname: cdktf.booleanToTerraform(struct.flattenCname),
        header: loadBalancerPoolOriginsHeaderToTerraform(struct.header),
        name: cdktf.stringToTerraform(struct.name),
        port: cdktf.numberToTerraform(struct.port),
        virtual_network_id: cdktf.stringToTerraform(struct.virtualNetworkId),
        weight: cdktf.numberToTerraform(struct.weight),
    };
}
function loadBalancerPoolOriginsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        address: {
            value: cdktf.stringToHclTerraform(struct.address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        flatten_cname: {
            value: cdktf.booleanToHclTerraform(struct.flattenCname),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        header: {
            value: loadBalancerPoolOriginsHeaderToHclTerraform(struct.header),
            isBlock: true,
            type: "struct",
            storageClassType: "LoadBalancerPoolOriginsHeader",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktf.numberToHclTerraform(struct.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        virtual_network_id: {
            value: cdktf.stringToHclTerraform(struct.virtualNetworkId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        weight: {
            value: cdktf.numberToHclTerraform(struct.weight),
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
var LoadBalancerPoolOriginsOutputReference = /** @class */ (function (_super) {
    __extends(LoadBalancerPoolOriginsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function LoadBalancerPoolOriginsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // header - computed: false, optional: true, required: false
        _this._header = new LoadBalancerPoolOriginsHeaderOutputReference(_this, "header");
        return _this;
    }
    Object.defineProperty(LoadBalancerPoolOriginsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._address !== undefined) {
                hasAnyValues = true;
                internalValueResult.address = this._address;
            }
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._flattenCname !== undefined) {
                hasAnyValues = true;
                internalValueResult.flattenCname = this._flattenCname;
            }
            if (((_a = this._header) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.header = (_b = this._header) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (this._port !== undefined) {
                hasAnyValues = true;
                internalValueResult.port = this._port;
            }
            if (this._virtualNetworkId !== undefined) {
                hasAnyValues = true;
                internalValueResult.virtualNetworkId = this._virtualNetworkId;
            }
            if (this._weight !== undefined) {
                hasAnyValues = true;
                internalValueResult.weight = this._weight;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._address = undefined;
                this._enabled = undefined;
                this._flattenCname = undefined;
                this._header.internalValue = undefined;
                this._name = undefined;
                this._port = undefined;
                this._virtualNetworkId = undefined;
                this._weight = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._address = value.address;
                this._enabled = value.enabled;
                this._flattenCname = value.flattenCname;
                this._header.internalValue = value.header;
                this._name = value.name;
                this._port = value.port;
                this._virtualNetworkId = value.virtualNetworkId;
                this._weight = value.weight;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPoolOriginsOutputReference.prototype, "address", {
        get: function () {
            return this.getStringAttribute('address');
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPoolOriginsOutputReference.prototype.resetAddress = function () {
        this._address = undefined;
    };
    Object.defineProperty(LoadBalancerPoolOriginsOutputReference.prototype, "addressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPoolOriginsOutputReference.prototype, "disabledAt", {
        // disabled_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('disabled_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPoolOriginsOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPoolOriginsOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(LoadBalancerPoolOriginsOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPoolOriginsOutputReference.prototype, "flattenCname", {
        get: function () {
            return this.getBooleanAttribute('flatten_cname');
        },
        set: function (value) {
            this._flattenCname = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPoolOriginsOutputReference.prototype.resetFlattenCname = function () {
        this._flattenCname = undefined;
    };
    Object.defineProperty(LoadBalancerPoolOriginsOutputReference.prototype, "flattenCnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._flattenCname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPoolOriginsOutputReference.prototype, "header", {
        get: function () {
            return this._header;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPoolOriginsOutputReference.prototype.putHeader = function (value) {
        this._header.internalValue = value;
    };
    LoadBalancerPoolOriginsOutputReference.prototype.resetHeader = function () {
        this._header.internalValue = undefined;
    };
    Object.defineProperty(LoadBalancerPoolOriginsOutputReference.prototype, "headerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._header.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPoolOriginsOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPoolOriginsOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(LoadBalancerPoolOriginsOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPoolOriginsOutputReference.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPoolOriginsOutputReference.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(LoadBalancerPoolOriginsOutputReference.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPoolOriginsOutputReference.prototype, "virtualNetworkId", {
        get: function () {
            return this.getStringAttribute('virtual_network_id');
        },
        set: function (value) {
            this._virtualNetworkId = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPoolOriginsOutputReference.prototype.resetVirtualNetworkId = function () {
        this._virtualNetworkId = undefined;
    };
    Object.defineProperty(LoadBalancerPoolOriginsOutputReference.prototype, "virtualNetworkIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._virtualNetworkId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPoolOriginsOutputReference.prototype, "weight", {
        get: function () {
            return this.getNumberAttribute('weight');
        },
        set: function (value) {
            this._weight = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPoolOriginsOutputReference.prototype.resetWeight = function () {
        this._weight = undefined;
    };
    Object.defineProperty(LoadBalancerPoolOriginsOutputReference.prototype, "weightInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._weight;
        },
        enumerable: false,
        configurable: true
    });
    return LoadBalancerPoolOriginsOutputReference;
}(cdktf.ComplexObject));
exports.LoadBalancerPoolOriginsOutputReference = LoadBalancerPoolOriginsOutputReference;
var LoadBalancerPoolOriginsList = /** @class */ (function (_super) {
    __extends(LoadBalancerPoolOriginsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function LoadBalancerPoolOriginsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    LoadBalancerPoolOriginsList.prototype.get = function (index) {
        return new LoadBalancerPoolOriginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return LoadBalancerPoolOriginsList;
}(cdktf.ComplexList));
exports.LoadBalancerPoolOriginsList = LoadBalancerPoolOriginsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool cloudflare_load_balancer_pool}
*/
var LoadBalancerPool = /** @class */ (function (_super) {
    __extends(LoadBalancerPool, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool cloudflare_load_balancer_pool} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LoadBalancerPoolConfig
    */
    function LoadBalancerPool(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_load_balancer_pool',
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
        // load_shedding - computed: true, optional: true, required: false
        _this._loadShedding = new LoadBalancerPoolLoadSheddingOutputReference(_this, "load_shedding");
        // notification_filter - computed: true, optional: true, required: false
        _this._notificationFilter = new LoadBalancerPoolNotificationFilterOutputReference(_this, "notification_filter");
        // origin_steering - computed: true, optional: true, required: false
        _this._originSteering = new LoadBalancerPoolOriginSteeringOutputReference(_this, "origin_steering");
        // origins - computed: false, optional: false, required: true
        _this._origins = new LoadBalancerPoolOriginsList(_this, "origins", false);
        _this._accountId = config.accountId;
        _this._checkRegions = config.checkRegions;
        _this._description = config.description;
        _this._enabled = config.enabled;
        _this._latitude = config.latitude;
        _this._loadShedding.internalValue = config.loadShedding;
        _this._longitude = config.longitude;
        _this._minimumOrigins = config.minimumOrigins;
        _this._monitor = config.monitor;
        _this._monitorGroup = config.monitorGroup;
        _this._name = config.name;
        _this._notificationEmail = config.notificationEmail;
        _this._notificationFilter.internalValue = config.notificationFilter;
        _this._originSteering.internalValue = config.originSteering;
        _this._origins.internalValue = config.origins;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a LoadBalancerPool resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LoadBalancerPool to import
    * @param importFromId The id of the existing LoadBalancerPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_pool#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LoadBalancerPool to import is found
    */
    LoadBalancerPool.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_load_balancer_pool", importId: importFromId, provider: provider });
    };
    Object.defineProperty(LoadBalancerPool.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPool.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(LoadBalancerPool.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "checkRegions", {
        get: function () {
            return this.getListAttribute('check_regions');
        },
        set: function (value) {
            this._checkRegions = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPool.prototype.resetCheckRegions = function () {
        this._checkRegions = undefined;
    };
    Object.defineProperty(LoadBalancerPool.prototype, "checkRegionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._checkRegions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPool.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(LoadBalancerPool.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "disabledAt", {
        // disabled_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('disabled_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPool.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(LoadBalancerPool.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "latitude", {
        get: function () {
            return this.getNumberAttribute('latitude');
        },
        set: function (value) {
            this._latitude = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPool.prototype.resetLatitude = function () {
        this._latitude = undefined;
    };
    Object.defineProperty(LoadBalancerPool.prototype, "latitudeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._latitude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "loadShedding", {
        get: function () {
            return this._loadShedding;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPool.prototype.putLoadShedding = function (value) {
        this._loadShedding.internalValue = value;
    };
    LoadBalancerPool.prototype.resetLoadShedding = function () {
        this._loadShedding.internalValue = undefined;
    };
    Object.defineProperty(LoadBalancerPool.prototype, "loadSheddingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loadShedding.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "longitude", {
        get: function () {
            return this.getNumberAttribute('longitude');
        },
        set: function (value) {
            this._longitude = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPool.prototype.resetLongitude = function () {
        this._longitude = undefined;
    };
    Object.defineProperty(LoadBalancerPool.prototype, "longitudeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._longitude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "minimumOrigins", {
        get: function () {
            return this.getNumberAttribute('minimum_origins');
        },
        set: function (value) {
            this._minimumOrigins = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPool.prototype.resetMinimumOrigins = function () {
        this._minimumOrigins = undefined;
    };
    Object.defineProperty(LoadBalancerPool.prototype, "minimumOriginsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minimumOrigins;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "monitor", {
        get: function () {
            return this.getStringAttribute('monitor');
        },
        set: function (value) {
            this._monitor = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPool.prototype.resetMonitor = function () {
        this._monitor = undefined;
    };
    Object.defineProperty(LoadBalancerPool.prototype, "monitorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._monitor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "monitorGroup", {
        get: function () {
            return this.getStringAttribute('monitor_group');
        },
        set: function (value) {
            this._monitorGroup = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPool.prototype.resetMonitorGroup = function () {
        this._monitorGroup = undefined;
    };
    Object.defineProperty(LoadBalancerPool.prototype, "monitorGroupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._monitorGroup;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "networks", {
        // networks - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('networks');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "notificationEmail", {
        get: function () {
            return this.getStringAttribute('notification_email');
        },
        set: function (value) {
            this._notificationEmail = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPool.prototype.resetNotificationEmail = function () {
        this._notificationEmail = undefined;
    };
    Object.defineProperty(LoadBalancerPool.prototype, "notificationEmailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notificationEmail;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "notificationFilter", {
        get: function () {
            return this._notificationFilter;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPool.prototype.putNotificationFilter = function (value) {
        this._notificationFilter.internalValue = value;
    };
    LoadBalancerPool.prototype.resetNotificationFilter = function () {
        this._notificationFilter.internalValue = undefined;
    };
    Object.defineProperty(LoadBalancerPool.prototype, "notificationFilterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notificationFilter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "originSteering", {
        get: function () {
            return this._originSteering;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPool.prototype.putOriginSteering = function (value) {
        this._originSteering.internalValue = value;
    };
    LoadBalancerPool.prototype.resetOriginSteering = function () {
        this._originSteering.internalValue = undefined;
    };
    Object.defineProperty(LoadBalancerPool.prototype, "originSteeringInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._originSteering.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "origins", {
        get: function () {
            return this._origins;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPool.prototype.putOrigins = function (value) {
        this._origins.internalValue = value;
    };
    Object.defineProperty(LoadBalancerPool.prototype, "originsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._origins.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LoadBalancerPool.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            check_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._checkRegions),
            description: cdktf.stringToTerraform(this._description),
            enabled: cdktf.booleanToTerraform(this._enabled),
            latitude: cdktf.numberToTerraform(this._latitude),
            load_shedding: loadBalancerPoolLoadSheddingToTerraform(this._loadShedding.internalValue),
            longitude: cdktf.numberToTerraform(this._longitude),
            minimum_origins: cdktf.numberToTerraform(this._minimumOrigins),
            monitor: cdktf.stringToTerraform(this._monitor),
            monitor_group: cdktf.stringToTerraform(this._monitorGroup),
            name: cdktf.stringToTerraform(this._name),
            notification_email: cdktf.stringToTerraform(this._notificationEmail),
            notification_filter: loadBalancerPoolNotificationFilterToTerraform(this._notificationFilter.internalValue),
            origin_steering: loadBalancerPoolOriginSteeringToTerraform(this._originSteering.internalValue),
            origins: cdktf.listMapper(loadBalancerPoolOriginsToTerraform, false)(this._origins.internalValue),
        };
    };
    LoadBalancerPool.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            check_regions: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._checkRegions),
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
            latitude: {
                value: cdktf.numberToHclTerraform(this._latitude),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            load_shedding: {
                value: loadBalancerPoolLoadSheddingToHclTerraform(this._loadShedding.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "LoadBalancerPoolLoadShedding",
            },
            longitude: {
                value: cdktf.numberToHclTerraform(this._longitude),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            minimum_origins: {
                value: cdktf.numberToHclTerraform(this._minimumOrigins),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            monitor: {
                value: cdktf.stringToHclTerraform(this._monitor),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            monitor_group: {
                value: cdktf.stringToHclTerraform(this._monitorGroup),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            notification_email: {
                value: cdktf.stringToHclTerraform(this._notificationEmail),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            notification_filter: {
                value: loadBalancerPoolNotificationFilterToHclTerraform(this._notificationFilter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "LoadBalancerPoolNotificationFilter",
            },
            origin_steering: {
                value: loadBalancerPoolOriginSteeringToHclTerraform(this._originSteering.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "LoadBalancerPoolOriginSteering",
            },
            origins: {
                value: cdktf.listMapperHcl(loadBalancerPoolOriginsToHclTerraform, false)(this._origins.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "LoadBalancerPoolOriginsList",
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
    LoadBalancerPool.tfResourceType = "cloudflare_load_balancer_pool";
    return LoadBalancerPool;
}(cdktf.TerraformResource));
exports.LoadBalancerPool = LoadBalancerPool;
