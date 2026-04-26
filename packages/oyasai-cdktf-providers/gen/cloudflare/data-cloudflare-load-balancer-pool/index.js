"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_pool
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
exports.DataCloudflareLoadBalancerPool = exports.DataCloudflareLoadBalancerPoolOriginsList = exports.DataCloudflareLoadBalancerPoolOriginsOutputReference = exports.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference = exports.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference = exports.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference = exports.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference = exports.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference = exports.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference = exports.DataCloudflareLoadBalancerPoolFilterOutputReference = void 0;
exports.dataCloudflareLoadBalancerPoolFilterToTerraform = dataCloudflareLoadBalancerPoolFilterToTerraform;
exports.dataCloudflareLoadBalancerPoolFilterToHclTerraform = dataCloudflareLoadBalancerPoolFilterToHclTerraform;
exports.dataCloudflareLoadBalancerPoolLoadSheddingToTerraform = dataCloudflareLoadBalancerPoolLoadSheddingToTerraform;
exports.dataCloudflareLoadBalancerPoolLoadSheddingToHclTerraform = dataCloudflareLoadBalancerPoolLoadSheddingToHclTerraform;
exports.dataCloudflareLoadBalancerPoolNotificationFilterOriginToTerraform = dataCloudflareLoadBalancerPoolNotificationFilterOriginToTerraform;
exports.dataCloudflareLoadBalancerPoolNotificationFilterOriginToHclTerraform = dataCloudflareLoadBalancerPoolNotificationFilterOriginToHclTerraform;
exports.dataCloudflareLoadBalancerPoolNotificationFilterPoolToTerraform = dataCloudflareLoadBalancerPoolNotificationFilterPoolToTerraform;
exports.dataCloudflareLoadBalancerPoolNotificationFilterPoolToHclTerraform = dataCloudflareLoadBalancerPoolNotificationFilterPoolToHclTerraform;
exports.dataCloudflareLoadBalancerPoolNotificationFilterToTerraform = dataCloudflareLoadBalancerPoolNotificationFilterToTerraform;
exports.dataCloudflareLoadBalancerPoolNotificationFilterToHclTerraform = dataCloudflareLoadBalancerPoolNotificationFilterToHclTerraform;
exports.dataCloudflareLoadBalancerPoolOriginSteeringToTerraform = dataCloudflareLoadBalancerPoolOriginSteeringToTerraform;
exports.dataCloudflareLoadBalancerPoolOriginSteeringToHclTerraform = dataCloudflareLoadBalancerPoolOriginSteeringToHclTerraform;
exports.dataCloudflareLoadBalancerPoolOriginsHeaderToTerraform = dataCloudflareLoadBalancerPoolOriginsHeaderToTerraform;
exports.dataCloudflareLoadBalancerPoolOriginsHeaderToHclTerraform = dataCloudflareLoadBalancerPoolOriginsHeaderToHclTerraform;
exports.dataCloudflareLoadBalancerPoolOriginsToTerraform = dataCloudflareLoadBalancerPoolOriginsToTerraform;
exports.dataCloudflareLoadBalancerPoolOriginsToHclTerraform = dataCloudflareLoadBalancerPoolOriginsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareLoadBalancerPoolFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        monitor: cdktf.stringToTerraform(struct.monitor),
    };
}
function dataCloudflareLoadBalancerPoolFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        monitor: {
            value: cdktf.stringToHclTerraform(struct.monitor),
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
var DataCloudflareLoadBalancerPoolFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerPoolFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancerPoolFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerPoolFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._monitor !== undefined) {
                hasAnyValues = true;
                internalValueResult.monitor = this._monitor;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._monitor = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._monitor = value.monitor;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolFilterOutputReference.prototype, "monitor", {
        get: function () {
            return this.getStringAttribute('monitor');
        },
        set: function (value) {
            this._monitor = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancerPoolFilterOutputReference.prototype.resetMonitor = function () {
        this._monitor = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancerPoolFilterOutputReference.prototype, "monitorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._monitor;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerPoolFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerPoolFilterOutputReference = DataCloudflareLoadBalancerPoolFilterOutputReference;
function dataCloudflareLoadBalancerPoolLoadSheddingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancerPoolLoadSheddingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancerPoolLoadSheddingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerPoolLoadSheddingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancerPoolLoadSheddingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.prototype, "defaultPercent", {
        // default_percent - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('default_percent');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.prototype, "defaultPolicy", {
        // default_policy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('default_policy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.prototype, "sessionPercent", {
        // session_percent - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('session_percent');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.prototype, "sessionPolicy", {
        // session_policy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('session_policy');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerPoolLoadSheddingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference = DataCloudflareLoadBalancerPoolLoadSheddingOutputReference;
function dataCloudflareLoadBalancerPoolNotificationFilterOriginToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancerPoolNotificationFilterOriginToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.prototype, "disable", {
        // disable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.prototype, "healthy", {
        // healthy - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('healthy');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference = DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference;
function dataCloudflareLoadBalancerPoolNotificationFilterPoolToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancerPoolNotificationFilterPoolToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.prototype, "disable", {
        // disable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.prototype, "healthy", {
        // healthy - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('healthy');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference = DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference;
function dataCloudflareLoadBalancerPoolNotificationFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancerPoolNotificationFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancerPoolNotificationFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerPoolNotificationFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancerPoolNotificationFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // origin - computed: true, optional: false, required: false
        _this._origin = new DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference(_this, "origin");
        // pool - computed: true, optional: false, required: false
        _this._pool = new DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference(_this, "pool");
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.prototype, "origin", {
        get: function () {
            return this._origin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.prototype, "pool", {
        get: function () {
            return this._pool;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerPoolNotificationFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference = DataCloudflareLoadBalancerPoolNotificationFilterOutputReference;
function dataCloudflareLoadBalancerPoolOriginSteeringToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancerPoolOriginSteeringToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancerPoolOriginSteeringOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerPoolOriginSteeringOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancerPoolOriginSteeringOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.prototype, "policy", {
        // policy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('policy');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerPoolOriginSteeringOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference = DataCloudflareLoadBalancerPoolOriginSteeringOutputReference;
function dataCloudflareLoadBalancerPoolOriginsHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancerPoolOriginsHeaderToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference = DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference;
function dataCloudflareLoadBalancerPoolOriginsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancerPoolOriginsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancerPoolOriginsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerPoolOriginsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareLoadBalancerPoolOriginsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // header - computed: true, optional: false, required: false
        _this._header = new DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference(_this, "header");
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerPoolOriginsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerPoolOriginsOutputReference.prototype, "address", {
        // address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolOriginsOutputReference.prototype, "disabledAt", {
        // disabled_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('disabled_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolOriginsOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolOriginsOutputReference.prototype, "flattenCname", {
        // flatten_cname - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('flatten_cname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolOriginsOutputReference.prototype, "header", {
        get: function () {
            return this._header;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolOriginsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolOriginsOutputReference.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolOriginsOutputReference.prototype, "virtualNetworkId", {
        // virtual_network_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('virtual_network_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolOriginsOutputReference.prototype, "weight", {
        // weight - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('weight');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerPoolOriginsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerPoolOriginsOutputReference = DataCloudflareLoadBalancerPoolOriginsOutputReference;
var DataCloudflareLoadBalancerPoolOriginsList = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerPoolOriginsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareLoadBalancerPoolOriginsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareLoadBalancerPoolOriginsList.prototype.get = function (index) {
        return new DataCloudflareLoadBalancerPoolOriginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareLoadBalancerPoolOriginsList;
}(cdktf.ComplexList));
exports.DataCloudflareLoadBalancerPoolOriginsList = DataCloudflareLoadBalancerPoolOriginsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_pool cloudflare_load_balancer_pool}
*/
var DataCloudflareLoadBalancerPool = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerPool, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_pool cloudflare_load_balancer_pool} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareLoadBalancerPoolConfig = {}
    */
    function DataCloudflareLoadBalancerPool(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareLoadBalancerPoolFilterOutputReference(_this, "filter");
        // load_shedding - computed: true, optional: false, required: false
        _this._loadShedding = new DataCloudflareLoadBalancerPoolLoadSheddingOutputReference(_this, "load_shedding");
        // notification_filter - computed: true, optional: false, required: false
        _this._notificationFilter = new DataCloudflareLoadBalancerPoolNotificationFilterOutputReference(_this, "notification_filter");
        // origin_steering - computed: true, optional: false, required: false
        _this._originSteering = new DataCloudflareLoadBalancerPoolOriginSteeringOutputReference(_this, "origin_steering");
        // origins - computed: true, optional: false, required: false
        _this._origins = new DataCloudflareLoadBalancerPoolOriginsList(_this, "origins", true);
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._poolId = config.poolId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareLoadBalancerPool resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLoadBalancerPool to import
    * @param importFromId The id of the existing DataCloudflareLoadBalancerPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_pool#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLoadBalancerPool to import is found
    */
    DataCloudflareLoadBalancerPool.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_load_balancer_pool", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareLoadBalancerPool.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancerPool.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancerPool.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPool.prototype, "checkRegions", {
        // check_regions - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('check_regions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPool.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPool.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPool.prototype, "disabledAt", {
        // disabled_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('disabled_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPool.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPool.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancerPool.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareLoadBalancerPool.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancerPool.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPool.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPool.prototype, "latitude", {
        // latitude - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('latitude');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPool.prototype, "loadShedding", {
        get: function () {
            return this._loadShedding;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPool.prototype, "longitude", {
        // longitude - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('longitude');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPool.prototype, "minimumOrigins", {
        // minimum_origins - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('minimum_origins');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPool.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPool.prototype, "monitor", {
        // monitor - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('monitor');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPool.prototype, "monitorGroup", {
        // monitor_group - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('monitor_group');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPool.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPool.prototype, "networks", {
        // networks - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('networks');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPool.prototype, "notificationEmail", {
        // notification_email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('notification_email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPool.prototype, "notificationFilter", {
        get: function () {
            return this._notificationFilter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPool.prototype, "originSteering", {
        get: function () {
            return this._originSteering;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPool.prototype, "origins", {
        get: function () {
            return this._origins;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPool.prototype, "poolId", {
        get: function () {
            return this.getStringAttribute('pool_id');
        },
        set: function (value) {
            this._poolId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancerPool.prototype.resetPoolId = function () {
        this._poolId = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancerPool.prototype, "poolIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._poolId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareLoadBalancerPool.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareLoadBalancerPoolFilterToTerraform(this._filter.internalValue),
            pool_id: cdktf.stringToTerraform(this._poolId),
        };
    };
    DataCloudflareLoadBalancerPool.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareLoadBalancerPoolFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareLoadBalancerPoolFilter",
            },
            pool_id: {
                value: cdktf.stringToHclTerraform(this._poolId),
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
    DataCloudflareLoadBalancerPool.tfResourceType = "cloudflare_load_balancer_pool";
    return DataCloudflareLoadBalancerPool;
}(cdktf.TerraformDataSource));
exports.DataCloudflareLoadBalancerPool = DataCloudflareLoadBalancerPool;
