"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_pools
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
exports.DataCloudflareLoadBalancerPools = exports.DataCloudflareLoadBalancerPoolsResultList = exports.DataCloudflareLoadBalancerPoolsResultOutputReference = exports.DataCloudflareLoadBalancerPoolsResultOriginsList = exports.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference = exports.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference = exports.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference = exports.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference = exports.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference = exports.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference = exports.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference = void 0;
exports.dataCloudflareLoadBalancerPoolsResultLoadSheddingToTerraform = dataCloudflareLoadBalancerPoolsResultLoadSheddingToTerraform;
exports.dataCloudflareLoadBalancerPoolsResultLoadSheddingToHclTerraform = dataCloudflareLoadBalancerPoolsResultLoadSheddingToHclTerraform;
exports.dataCloudflareLoadBalancerPoolsResultNotificationFilterOriginToTerraform = dataCloudflareLoadBalancerPoolsResultNotificationFilterOriginToTerraform;
exports.dataCloudflareLoadBalancerPoolsResultNotificationFilterOriginToHclTerraform = dataCloudflareLoadBalancerPoolsResultNotificationFilterOriginToHclTerraform;
exports.dataCloudflareLoadBalancerPoolsResultNotificationFilterPoolToTerraform = dataCloudflareLoadBalancerPoolsResultNotificationFilterPoolToTerraform;
exports.dataCloudflareLoadBalancerPoolsResultNotificationFilterPoolToHclTerraform = dataCloudflareLoadBalancerPoolsResultNotificationFilterPoolToHclTerraform;
exports.dataCloudflareLoadBalancerPoolsResultNotificationFilterToTerraform = dataCloudflareLoadBalancerPoolsResultNotificationFilterToTerraform;
exports.dataCloudflareLoadBalancerPoolsResultNotificationFilterToHclTerraform = dataCloudflareLoadBalancerPoolsResultNotificationFilterToHclTerraform;
exports.dataCloudflareLoadBalancerPoolsResultOriginSteeringToTerraform = dataCloudflareLoadBalancerPoolsResultOriginSteeringToTerraform;
exports.dataCloudflareLoadBalancerPoolsResultOriginSteeringToHclTerraform = dataCloudflareLoadBalancerPoolsResultOriginSteeringToHclTerraform;
exports.dataCloudflareLoadBalancerPoolsResultOriginsHeaderToTerraform = dataCloudflareLoadBalancerPoolsResultOriginsHeaderToTerraform;
exports.dataCloudflareLoadBalancerPoolsResultOriginsHeaderToHclTerraform = dataCloudflareLoadBalancerPoolsResultOriginsHeaderToHclTerraform;
exports.dataCloudflareLoadBalancerPoolsResultOriginsToTerraform = dataCloudflareLoadBalancerPoolsResultOriginsToTerraform;
exports.dataCloudflareLoadBalancerPoolsResultOriginsToHclTerraform = dataCloudflareLoadBalancerPoolsResultOriginsToHclTerraform;
exports.dataCloudflareLoadBalancerPoolsResultToTerraform = dataCloudflareLoadBalancerPoolsResultToTerraform;
exports.dataCloudflareLoadBalancerPoolsResultToHclTerraform = dataCloudflareLoadBalancerPoolsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareLoadBalancerPoolsResultLoadSheddingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancerPoolsResultLoadSheddingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.prototype, "defaultPercent", {
        // default_percent - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('default_percent');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.prototype, "defaultPolicy", {
        // default_policy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('default_policy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.prototype, "sessionPercent", {
        // session_percent - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('session_percent');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.prototype, "sessionPolicy", {
        // session_policy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('session_policy');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference = DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference;
function dataCloudflareLoadBalancerPoolsResultNotificationFilterOriginToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancerPoolsResultNotificationFilterOriginToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.prototype, "disable", {
        // disable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.prototype, "healthy", {
        // healthy - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('healthy');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference = DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference;
function dataCloudflareLoadBalancerPoolsResultNotificationFilterPoolToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancerPoolsResultNotificationFilterPoolToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.prototype, "disable", {
        // disable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.prototype, "healthy", {
        // healthy - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('healthy');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference = DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference;
function dataCloudflareLoadBalancerPoolsResultNotificationFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancerPoolsResultNotificationFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // origin - computed: true, optional: false, required: false
        _this._origin = new DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference(_this, "origin");
        // pool - computed: true, optional: false, required: false
        _this._pool = new DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference(_this, "pool");
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.prototype, "origin", {
        get: function () {
            return this._origin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.prototype, "pool", {
        get: function () {
            return this._pool;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference = DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference;
function dataCloudflareLoadBalancerPoolsResultOriginSteeringToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancerPoolsResultOriginSteeringToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.prototype, "policy", {
        // policy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('policy');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference = DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference;
function dataCloudflareLoadBalancerPoolsResultOriginsHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancerPoolsResultOriginsHeaderToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference = DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference;
function dataCloudflareLoadBalancerPoolsResultOriginsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancerPoolsResultOriginsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancerPoolsResultOriginsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerPoolsResultOriginsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareLoadBalancerPoolsResultOriginsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // header - computed: true, optional: false, required: false
        _this._header = new DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference(_this, "header");
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.prototype, "address", {
        // address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.prototype, "disabledAt", {
        // disabled_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('disabled_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.prototype, "flattenCname", {
        // flatten_cname - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('flatten_cname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.prototype, "header", {
        get: function () {
            return this._header;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.prototype, "virtualNetworkId", {
        // virtual_network_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('virtual_network_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.prototype, "weight", {
        // weight - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('weight');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerPoolsResultOriginsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference = DataCloudflareLoadBalancerPoolsResultOriginsOutputReference;
var DataCloudflareLoadBalancerPoolsResultOriginsList = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerPoolsResultOriginsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareLoadBalancerPoolsResultOriginsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareLoadBalancerPoolsResultOriginsList.prototype.get = function (index) {
        return new DataCloudflareLoadBalancerPoolsResultOriginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareLoadBalancerPoolsResultOriginsList;
}(cdktf.ComplexList));
exports.DataCloudflareLoadBalancerPoolsResultOriginsList = DataCloudflareLoadBalancerPoolsResultOriginsList;
function dataCloudflareLoadBalancerPoolsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareLoadBalancerPoolsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareLoadBalancerPoolsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerPoolsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareLoadBalancerPoolsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // load_shedding - computed: true, optional: false, required: false
        _this._loadShedding = new DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference(_this, "load_shedding");
        // notification_filter - computed: true, optional: false, required: false
        _this._notificationFilter = new DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference(_this, "notification_filter");
        // origin_steering - computed: true, optional: false, required: false
        _this._originSteering = new DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference(_this, "origin_steering");
        // origins - computed: true, optional: false, required: false
        _this._origins = new DataCloudflareLoadBalancerPoolsResultOriginsList(_this, "origins", true);
        return _this;
    }
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOutputReference.prototype, "checkRegions", {
        // check_regions - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('check_regions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOutputReference.prototype, "disabledAt", {
        // disabled_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('disabled_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOutputReference.prototype, "latitude", {
        // latitude - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('latitude');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOutputReference.prototype, "loadShedding", {
        get: function () {
            return this._loadShedding;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOutputReference.prototype, "longitude", {
        // longitude - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('longitude');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOutputReference.prototype, "minimumOrigins", {
        // minimum_origins - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('minimum_origins');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOutputReference.prototype, "monitor", {
        // monitor - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('monitor');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOutputReference.prototype, "monitorGroup", {
        // monitor_group - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('monitor_group');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOutputReference.prototype, "networks", {
        // networks - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('networks');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOutputReference.prototype, "notificationEmail", {
        // notification_email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('notification_email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOutputReference.prototype, "notificationFilter", {
        get: function () {
            return this._notificationFilter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOutputReference.prototype, "originSteering", {
        get: function () {
            return this._originSteering;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPoolsResultOutputReference.prototype, "origins", {
        get: function () {
            return this._origins;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareLoadBalancerPoolsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareLoadBalancerPoolsResultOutputReference = DataCloudflareLoadBalancerPoolsResultOutputReference;
var DataCloudflareLoadBalancerPoolsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerPoolsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareLoadBalancerPoolsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareLoadBalancerPoolsResultList.prototype.get = function (index) {
        return new DataCloudflareLoadBalancerPoolsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareLoadBalancerPoolsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareLoadBalancerPoolsResultList = DataCloudflareLoadBalancerPoolsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_pools cloudflare_load_balancer_pools}
*/
var DataCloudflareLoadBalancerPools = /** @class */ (function (_super) {
    __extends(DataCloudflareLoadBalancerPools, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_pools cloudflare_load_balancer_pools} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareLoadBalancerPoolsConfig = {}
    */
    function DataCloudflareLoadBalancerPools(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_load_balancer_pools',
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
        _this._result = new DataCloudflareLoadBalancerPoolsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        _this._monitor = config.monitor;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareLoadBalancerPools resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLoadBalancerPools to import
    * @param importFromId The id of the existing DataCloudflareLoadBalancerPools that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_pools#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLoadBalancerPools to import is found
    */
    DataCloudflareLoadBalancerPools.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_load_balancer_pools", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareLoadBalancerPools.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancerPools.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancerPools.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPools.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancerPools.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancerPools.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPools.prototype, "monitor", {
        get: function () {
            return this.getStringAttribute('monitor');
        },
        set: function (value) {
            this._monitor = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareLoadBalancerPools.prototype.resetMonitor = function () {
        this._monitor = undefined;
    };
    Object.defineProperty(DataCloudflareLoadBalancerPools.prototype, "monitorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._monitor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareLoadBalancerPools.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareLoadBalancerPools.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
            monitor: cdktf.stringToTerraform(this._monitor),
        };
    };
    DataCloudflareLoadBalancerPools.prototype.synthesizeHclAttributes = function () {
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
            monitor: {
                value: cdktf.stringToHclTerraform(this._monitor),
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
    DataCloudflareLoadBalancerPools.tfResourceType = "cloudflare_load_balancer_pools";
    return DataCloudflareLoadBalancerPools;
}(cdktf.TerraformDataSource));
exports.DataCloudflareLoadBalancerPools = DataCloudflareLoadBalancerPools;
