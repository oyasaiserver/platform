"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/rate_limit
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
exports.DataCloudflareRateLimit = exports.DataCloudflareRateLimitMatchOutputReference = exports.DataCloudflareRateLimitMatchResponseOutputReference = exports.DataCloudflareRateLimitMatchRequestOutputReference = exports.DataCloudflareRateLimitMatchHeadersList = exports.DataCloudflareRateLimitMatchHeadersOutputReference = exports.DataCloudflareRateLimitBypassList = exports.DataCloudflareRateLimitBypassOutputReference = exports.DataCloudflareRateLimitActionOutputReference = exports.DataCloudflareRateLimitActionResponseOutputReference = void 0;
exports.dataCloudflareRateLimitActionResponseToTerraform = dataCloudflareRateLimitActionResponseToTerraform;
exports.dataCloudflareRateLimitActionResponseToHclTerraform = dataCloudflareRateLimitActionResponseToHclTerraform;
exports.dataCloudflareRateLimitActionToTerraform = dataCloudflareRateLimitActionToTerraform;
exports.dataCloudflareRateLimitActionToHclTerraform = dataCloudflareRateLimitActionToHclTerraform;
exports.dataCloudflareRateLimitBypassToTerraform = dataCloudflareRateLimitBypassToTerraform;
exports.dataCloudflareRateLimitBypassToHclTerraform = dataCloudflareRateLimitBypassToHclTerraform;
exports.dataCloudflareRateLimitMatchHeadersToTerraform = dataCloudflareRateLimitMatchHeadersToTerraform;
exports.dataCloudflareRateLimitMatchHeadersToHclTerraform = dataCloudflareRateLimitMatchHeadersToHclTerraform;
exports.dataCloudflareRateLimitMatchRequestToTerraform = dataCloudflareRateLimitMatchRequestToTerraform;
exports.dataCloudflareRateLimitMatchRequestToHclTerraform = dataCloudflareRateLimitMatchRequestToHclTerraform;
exports.dataCloudflareRateLimitMatchResponseToTerraform = dataCloudflareRateLimitMatchResponseToTerraform;
exports.dataCloudflareRateLimitMatchResponseToHclTerraform = dataCloudflareRateLimitMatchResponseToHclTerraform;
exports.dataCloudflareRateLimitMatchToTerraform = dataCloudflareRateLimitMatchToTerraform;
exports.dataCloudflareRateLimitMatchToHclTerraform = dataCloudflareRateLimitMatchToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareRateLimitActionResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRateLimitActionResponseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRateLimitActionResponseOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRateLimitActionResponseOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRateLimitActionResponseOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRateLimitActionResponseOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRateLimitActionResponseOutputReference.prototype, "body", {
        // body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitActionResponseOutputReference.prototype, "contentType", {
        // content_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content_type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRateLimitActionResponseOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRateLimitActionResponseOutputReference = DataCloudflareRateLimitActionResponseOutputReference;
function dataCloudflareRateLimitActionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRateLimitActionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRateLimitActionOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRateLimitActionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRateLimitActionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // response - computed: true, optional: false, required: false
        _this._response = new DataCloudflareRateLimitActionResponseOutputReference(_this, "response");
        return _this;
    }
    Object.defineProperty(DataCloudflareRateLimitActionOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRateLimitActionOutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitActionOutputReference.prototype, "response", {
        get: function () {
            return this._response;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitActionOutputReference.prototype, "timeout", {
        // timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('timeout');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRateLimitActionOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRateLimitActionOutputReference = DataCloudflareRateLimitActionOutputReference;
function dataCloudflareRateLimitBypassToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRateLimitBypassToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRateLimitBypassOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRateLimitBypassOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRateLimitBypassOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRateLimitBypassOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRateLimitBypassOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitBypassOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRateLimitBypassOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRateLimitBypassOutputReference = DataCloudflareRateLimitBypassOutputReference;
var DataCloudflareRateLimitBypassList = /** @class */ (function (_super) {
    __extends(DataCloudflareRateLimitBypassList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRateLimitBypassList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareRateLimitBypassList.prototype.get = function (index) {
        return new DataCloudflareRateLimitBypassOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareRateLimitBypassList;
}(cdktf.ComplexList));
exports.DataCloudflareRateLimitBypassList = DataCloudflareRateLimitBypassList;
function dataCloudflareRateLimitMatchHeadersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRateLimitMatchHeadersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRateLimitMatchHeadersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRateLimitMatchHeadersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRateLimitMatchHeadersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRateLimitMatchHeadersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRateLimitMatchHeadersOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitMatchHeadersOutputReference.prototype, "op", {
        // op - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('op');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitMatchHeadersOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRateLimitMatchHeadersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRateLimitMatchHeadersOutputReference = DataCloudflareRateLimitMatchHeadersOutputReference;
var DataCloudflareRateLimitMatchHeadersList = /** @class */ (function (_super) {
    __extends(DataCloudflareRateLimitMatchHeadersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRateLimitMatchHeadersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareRateLimitMatchHeadersList.prototype.get = function (index) {
        return new DataCloudflareRateLimitMatchHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareRateLimitMatchHeadersList;
}(cdktf.ComplexList));
exports.DataCloudflareRateLimitMatchHeadersList = DataCloudflareRateLimitMatchHeadersList;
function dataCloudflareRateLimitMatchRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRateLimitMatchRequestToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRateLimitMatchRequestOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRateLimitMatchRequestOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRateLimitMatchRequestOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRateLimitMatchRequestOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRateLimitMatchRequestOutputReference.prototype, "methods", {
        // methods - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('methods');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitMatchRequestOutputReference.prototype, "schemes", {
        // schemes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('schemes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitMatchRequestOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRateLimitMatchRequestOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRateLimitMatchRequestOutputReference = DataCloudflareRateLimitMatchRequestOutputReference;
function dataCloudflareRateLimitMatchResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRateLimitMatchResponseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRateLimitMatchResponseOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRateLimitMatchResponseOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRateLimitMatchResponseOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRateLimitMatchResponseOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRateLimitMatchResponseOutputReference.prototype, "originTraffic", {
        // origin_traffic - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('origin_traffic');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRateLimitMatchResponseOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRateLimitMatchResponseOutputReference = DataCloudflareRateLimitMatchResponseOutputReference;
function dataCloudflareRateLimitMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRateLimitMatchToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRateLimitMatchOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRateLimitMatchOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRateLimitMatchOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // headers - computed: true, optional: false, required: false
        _this._headers = new DataCloudflareRateLimitMatchHeadersList(_this, "headers", false);
        // request - computed: true, optional: false, required: false
        _this._request = new DataCloudflareRateLimitMatchRequestOutputReference(_this, "request");
        // response - computed: true, optional: false, required: false
        _this._response = new DataCloudflareRateLimitMatchResponseOutputReference(_this, "response");
        return _this;
    }
    Object.defineProperty(DataCloudflareRateLimitMatchOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRateLimitMatchOutputReference.prototype, "headers", {
        get: function () {
            return this._headers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitMatchOutputReference.prototype, "request", {
        get: function () {
            return this._request;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitMatchOutputReference.prototype, "response", {
        get: function () {
            return this._response;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRateLimitMatchOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRateLimitMatchOutputReference = DataCloudflareRateLimitMatchOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/rate_limit cloudflare_rate_limit}
*/
var DataCloudflareRateLimit = /** @class */ (function (_super) {
    __extends(DataCloudflareRateLimit, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/rate_limit cloudflare_rate_limit} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareRateLimitConfig
    */
    function DataCloudflareRateLimit(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_rate_limit',
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
        // action - computed: true, optional: false, required: false
        _this._action = new DataCloudflareRateLimitActionOutputReference(_this, "action");
        // bypass - computed: true, optional: false, required: false
        _this._bypass = new DataCloudflareRateLimitBypassList(_this, "bypass", false);
        // match - computed: true, optional: false, required: false
        _this._match = new DataCloudflareRateLimitMatchOutputReference(_this, "match");
        _this._rateLimitId = config.rateLimitId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareRateLimit resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareRateLimit to import
    * @param importFromId The id of the existing DataCloudflareRateLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/rate_limit#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareRateLimit to import is found
    */
    DataCloudflareRateLimit.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_rate_limit", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareRateLimit.prototype, "action", {
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimit.prototype, "bypass", {
        get: function () {
            return this._bypass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimit.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimit.prototype, "disabled", {
        // disabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimit.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimit.prototype, "match", {
        get: function () {
            return this._match;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimit.prototype, "period", {
        // period - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('period');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimit.prototype, "rateLimitId", {
        get: function () {
            return this.getStringAttribute('rate_limit_id');
        },
        set: function (value) {
            this._rateLimitId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimit.prototype, "rateLimitIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rateLimitId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimit.prototype, "threshold", {
        // threshold - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('threshold');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimit.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareRateLimit.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareRateLimit.prototype, "zoneIdInput", {
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
    DataCloudflareRateLimit.prototype.synthesizeAttributes = function () {
        return {
            rate_limit_id: cdktf.stringToTerraform(this._rateLimitId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareRateLimit.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            rate_limit_id: {
                value: cdktf.stringToHclTerraform(this._rateLimitId),
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
    DataCloudflareRateLimit.tfResourceType = "cloudflare_rate_limit";
    return DataCloudflareRateLimit;
}(cdktf.TerraformDataSource));
exports.DataCloudflareRateLimit = DataCloudflareRateLimit;
