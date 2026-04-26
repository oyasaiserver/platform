"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/rate_limits
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
exports.DataCloudflareRateLimits = exports.DataCloudflareRateLimitsResultList = exports.DataCloudflareRateLimitsResultOutputReference = exports.DataCloudflareRateLimitsResultMatchOutputReference = exports.DataCloudflareRateLimitsResultMatchResponseOutputReference = exports.DataCloudflareRateLimitsResultMatchRequestOutputReference = exports.DataCloudflareRateLimitsResultMatchHeadersList = exports.DataCloudflareRateLimitsResultMatchHeadersOutputReference = exports.DataCloudflareRateLimitsResultBypassList = exports.DataCloudflareRateLimitsResultBypassOutputReference = exports.DataCloudflareRateLimitsResultActionOutputReference = exports.DataCloudflareRateLimitsResultActionResponseOutputReference = void 0;
exports.dataCloudflareRateLimitsResultActionResponseToTerraform = dataCloudflareRateLimitsResultActionResponseToTerraform;
exports.dataCloudflareRateLimitsResultActionResponseToHclTerraform = dataCloudflareRateLimitsResultActionResponseToHclTerraform;
exports.dataCloudflareRateLimitsResultActionToTerraform = dataCloudflareRateLimitsResultActionToTerraform;
exports.dataCloudflareRateLimitsResultActionToHclTerraform = dataCloudflareRateLimitsResultActionToHclTerraform;
exports.dataCloudflareRateLimitsResultBypassToTerraform = dataCloudflareRateLimitsResultBypassToTerraform;
exports.dataCloudflareRateLimitsResultBypassToHclTerraform = dataCloudflareRateLimitsResultBypassToHclTerraform;
exports.dataCloudflareRateLimitsResultMatchHeadersToTerraform = dataCloudflareRateLimitsResultMatchHeadersToTerraform;
exports.dataCloudflareRateLimitsResultMatchHeadersToHclTerraform = dataCloudflareRateLimitsResultMatchHeadersToHclTerraform;
exports.dataCloudflareRateLimitsResultMatchRequestToTerraform = dataCloudflareRateLimitsResultMatchRequestToTerraform;
exports.dataCloudflareRateLimitsResultMatchRequestToHclTerraform = dataCloudflareRateLimitsResultMatchRequestToHclTerraform;
exports.dataCloudflareRateLimitsResultMatchResponseToTerraform = dataCloudflareRateLimitsResultMatchResponseToTerraform;
exports.dataCloudflareRateLimitsResultMatchResponseToHclTerraform = dataCloudflareRateLimitsResultMatchResponseToHclTerraform;
exports.dataCloudflareRateLimitsResultMatchToTerraform = dataCloudflareRateLimitsResultMatchToTerraform;
exports.dataCloudflareRateLimitsResultMatchToHclTerraform = dataCloudflareRateLimitsResultMatchToHclTerraform;
exports.dataCloudflareRateLimitsResultToTerraform = dataCloudflareRateLimitsResultToTerraform;
exports.dataCloudflareRateLimitsResultToHclTerraform = dataCloudflareRateLimitsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareRateLimitsResultActionResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRateLimitsResultActionResponseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRateLimitsResultActionResponseOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRateLimitsResultActionResponseOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRateLimitsResultActionResponseOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRateLimitsResultActionResponseOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRateLimitsResultActionResponseOutputReference.prototype, "body", {
        // body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitsResultActionResponseOutputReference.prototype, "contentType", {
        // content_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content_type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRateLimitsResultActionResponseOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRateLimitsResultActionResponseOutputReference = DataCloudflareRateLimitsResultActionResponseOutputReference;
function dataCloudflareRateLimitsResultActionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRateLimitsResultActionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRateLimitsResultActionOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRateLimitsResultActionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRateLimitsResultActionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // response - computed: true, optional: false, required: false
        _this._response = new DataCloudflareRateLimitsResultActionResponseOutputReference(_this, "response");
        return _this;
    }
    Object.defineProperty(DataCloudflareRateLimitsResultActionOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRateLimitsResultActionOutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitsResultActionOutputReference.prototype, "response", {
        get: function () {
            return this._response;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitsResultActionOutputReference.prototype, "timeout", {
        // timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('timeout');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRateLimitsResultActionOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRateLimitsResultActionOutputReference = DataCloudflareRateLimitsResultActionOutputReference;
function dataCloudflareRateLimitsResultBypassToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRateLimitsResultBypassToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRateLimitsResultBypassOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRateLimitsResultBypassOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRateLimitsResultBypassOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRateLimitsResultBypassOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRateLimitsResultBypassOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitsResultBypassOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRateLimitsResultBypassOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRateLimitsResultBypassOutputReference = DataCloudflareRateLimitsResultBypassOutputReference;
var DataCloudflareRateLimitsResultBypassList = /** @class */ (function (_super) {
    __extends(DataCloudflareRateLimitsResultBypassList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRateLimitsResultBypassList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareRateLimitsResultBypassList.prototype.get = function (index) {
        return new DataCloudflareRateLimitsResultBypassOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareRateLimitsResultBypassList;
}(cdktf.ComplexList));
exports.DataCloudflareRateLimitsResultBypassList = DataCloudflareRateLimitsResultBypassList;
function dataCloudflareRateLimitsResultMatchHeadersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRateLimitsResultMatchHeadersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRateLimitsResultMatchHeadersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRateLimitsResultMatchHeadersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRateLimitsResultMatchHeadersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRateLimitsResultMatchHeadersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRateLimitsResultMatchHeadersOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitsResultMatchHeadersOutputReference.prototype, "op", {
        // op - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('op');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitsResultMatchHeadersOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRateLimitsResultMatchHeadersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRateLimitsResultMatchHeadersOutputReference = DataCloudflareRateLimitsResultMatchHeadersOutputReference;
var DataCloudflareRateLimitsResultMatchHeadersList = /** @class */ (function (_super) {
    __extends(DataCloudflareRateLimitsResultMatchHeadersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRateLimitsResultMatchHeadersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareRateLimitsResultMatchHeadersList.prototype.get = function (index) {
        return new DataCloudflareRateLimitsResultMatchHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareRateLimitsResultMatchHeadersList;
}(cdktf.ComplexList));
exports.DataCloudflareRateLimitsResultMatchHeadersList = DataCloudflareRateLimitsResultMatchHeadersList;
function dataCloudflareRateLimitsResultMatchRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRateLimitsResultMatchRequestToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRateLimitsResultMatchRequestOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRateLimitsResultMatchRequestOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRateLimitsResultMatchRequestOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRateLimitsResultMatchRequestOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRateLimitsResultMatchRequestOutputReference.prototype, "methods", {
        // methods - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('methods');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitsResultMatchRequestOutputReference.prototype, "schemes", {
        // schemes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('schemes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitsResultMatchRequestOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRateLimitsResultMatchRequestOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRateLimitsResultMatchRequestOutputReference = DataCloudflareRateLimitsResultMatchRequestOutputReference;
function dataCloudflareRateLimitsResultMatchResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRateLimitsResultMatchResponseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRateLimitsResultMatchResponseOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRateLimitsResultMatchResponseOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRateLimitsResultMatchResponseOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRateLimitsResultMatchResponseOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRateLimitsResultMatchResponseOutputReference.prototype, "originTraffic", {
        // origin_traffic - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('origin_traffic');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRateLimitsResultMatchResponseOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRateLimitsResultMatchResponseOutputReference = DataCloudflareRateLimitsResultMatchResponseOutputReference;
function dataCloudflareRateLimitsResultMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRateLimitsResultMatchToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRateLimitsResultMatchOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRateLimitsResultMatchOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRateLimitsResultMatchOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // headers - computed: true, optional: false, required: false
        _this._headers = new DataCloudflareRateLimitsResultMatchHeadersList(_this, "headers", false);
        // request - computed: true, optional: false, required: false
        _this._request = new DataCloudflareRateLimitsResultMatchRequestOutputReference(_this, "request");
        // response - computed: true, optional: false, required: false
        _this._response = new DataCloudflareRateLimitsResultMatchResponseOutputReference(_this, "response");
        return _this;
    }
    Object.defineProperty(DataCloudflareRateLimitsResultMatchOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRateLimitsResultMatchOutputReference.prototype, "headers", {
        get: function () {
            return this._headers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitsResultMatchOutputReference.prototype, "request", {
        get: function () {
            return this._request;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitsResultMatchOutputReference.prototype, "response", {
        get: function () {
            return this._response;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRateLimitsResultMatchOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRateLimitsResultMatchOutputReference = DataCloudflareRateLimitsResultMatchOutputReference;
function dataCloudflareRateLimitsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRateLimitsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRateLimitsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRateLimitsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRateLimitsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // action - computed: true, optional: false, required: false
        _this._action = new DataCloudflareRateLimitsResultActionOutputReference(_this, "action");
        // bypass - computed: true, optional: false, required: false
        _this._bypass = new DataCloudflareRateLimitsResultBypassList(_this, "bypass", false);
        // match - computed: true, optional: false, required: false
        _this._match = new DataCloudflareRateLimitsResultMatchOutputReference(_this, "match");
        return _this;
    }
    Object.defineProperty(DataCloudflareRateLimitsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRateLimitsResultOutputReference.prototype, "action", {
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitsResultOutputReference.prototype, "bypass", {
        get: function () {
            return this._bypass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitsResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitsResultOutputReference.prototype, "disabled", {
        // disabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitsResultOutputReference.prototype, "match", {
        get: function () {
            return this._match;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitsResultOutputReference.prototype, "period", {
        // period - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('period');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimitsResultOutputReference.prototype, "threshold", {
        // threshold - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('threshold');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRateLimitsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRateLimitsResultOutputReference = DataCloudflareRateLimitsResultOutputReference;
var DataCloudflareRateLimitsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareRateLimitsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRateLimitsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareRateLimitsResultList.prototype.get = function (index) {
        return new DataCloudflareRateLimitsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareRateLimitsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareRateLimitsResultList = DataCloudflareRateLimitsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/rate_limits cloudflare_rate_limits}
*/
var DataCloudflareRateLimits = /** @class */ (function (_super) {
    __extends(DataCloudflareRateLimits, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/rate_limits cloudflare_rate_limits} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareRateLimitsConfig = {}
    */
    function DataCloudflareRateLimits(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_rate_limits',
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
        _this._result = new DataCloudflareRateLimitsResultList(_this, "result", false);
        _this._maxItems = config.maxItems;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareRateLimits resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareRateLimits to import
    * @param importFromId The id of the existing DataCloudflareRateLimits that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/rate_limits#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareRateLimits to import is found
    */
    DataCloudflareRateLimits.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_rate_limits", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareRateLimits.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareRateLimits.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareRateLimits.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimits.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRateLimits.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareRateLimits.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareRateLimits.prototype, "zoneIdInput", {
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
    DataCloudflareRateLimits.prototype.synthesizeAttributes = function () {
        return {
            max_items: cdktf.numberToTerraform(this._maxItems),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareRateLimits.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareRateLimits.tfResourceType = "cloudflare_rate_limits";
    return DataCloudflareRateLimits;
}(cdktf.TerraformDataSource));
exports.DataCloudflareRateLimits = DataCloudflareRateLimits;
