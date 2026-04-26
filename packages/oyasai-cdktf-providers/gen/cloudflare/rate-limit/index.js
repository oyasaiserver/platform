"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit
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
exports.RateLimit = exports.RateLimitMatchOutputReference = exports.RateLimitMatchResponseOutputReference = exports.RateLimitMatchRequestOutputReference = exports.RateLimitMatchHeadersList = exports.RateLimitMatchHeadersOutputReference = exports.RateLimitBypassList = exports.RateLimitBypassOutputReference = exports.RateLimitActionOutputReference = exports.RateLimitActionResponseOutputReference = void 0;
exports.rateLimitActionResponseToTerraform = rateLimitActionResponseToTerraform;
exports.rateLimitActionResponseToHclTerraform = rateLimitActionResponseToHclTerraform;
exports.rateLimitActionToTerraform = rateLimitActionToTerraform;
exports.rateLimitActionToHclTerraform = rateLimitActionToHclTerraform;
exports.rateLimitBypassToTerraform = rateLimitBypassToTerraform;
exports.rateLimitBypassToHclTerraform = rateLimitBypassToHclTerraform;
exports.rateLimitMatchHeadersToTerraform = rateLimitMatchHeadersToTerraform;
exports.rateLimitMatchHeadersToHclTerraform = rateLimitMatchHeadersToHclTerraform;
exports.rateLimitMatchRequestToTerraform = rateLimitMatchRequestToTerraform;
exports.rateLimitMatchRequestToHclTerraform = rateLimitMatchRequestToHclTerraform;
exports.rateLimitMatchResponseToTerraform = rateLimitMatchResponseToTerraform;
exports.rateLimitMatchResponseToHclTerraform = rateLimitMatchResponseToHclTerraform;
exports.rateLimitMatchToTerraform = rateLimitMatchToTerraform;
exports.rateLimitMatchToHclTerraform = rateLimitMatchToHclTerraform;
var cdktf = require("cdktf");
function rateLimitActionResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        body: cdktf.stringToTerraform(struct.body),
        content_type: cdktf.stringToTerraform(struct.contentType),
    };
}
function rateLimitActionResponseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        body: {
            value: cdktf.stringToHclTerraform(struct.body),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_type: {
            value: cdktf.stringToHclTerraform(struct.contentType),
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
var RateLimitActionResponseOutputReference = /** @class */ (function (_super) {
    __extends(RateLimitActionResponseOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RateLimitActionResponseOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RateLimitActionResponseOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._body !== undefined) {
                hasAnyValues = true;
                internalValueResult.body = this._body;
            }
            if (this._contentType !== undefined) {
                hasAnyValues = true;
                internalValueResult.contentType = this._contentType;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._body = undefined;
                this._contentType = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._body = value.body;
                this._contentType = value.contentType;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimitActionResponseOutputReference.prototype, "body", {
        get: function () {
            return this.getStringAttribute('body');
        },
        set: function (value) {
            this._body = value;
        },
        enumerable: false,
        configurable: true
    });
    RateLimitActionResponseOutputReference.prototype.resetBody = function () {
        this._body = undefined;
    };
    Object.defineProperty(RateLimitActionResponseOutputReference.prototype, "bodyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._body;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimitActionResponseOutputReference.prototype, "contentType", {
        get: function () {
            return this.getStringAttribute('content_type');
        },
        set: function (value) {
            this._contentType = value;
        },
        enumerable: false,
        configurable: true
    });
    RateLimitActionResponseOutputReference.prototype.resetContentType = function () {
        this._contentType = undefined;
    };
    Object.defineProperty(RateLimitActionResponseOutputReference.prototype, "contentTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentType;
        },
        enumerable: false,
        configurable: true
    });
    return RateLimitActionResponseOutputReference;
}(cdktf.ComplexObject));
exports.RateLimitActionResponseOutputReference = RateLimitActionResponseOutputReference;
function rateLimitActionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
        response: rateLimitActionResponseToTerraform(struct.response),
        timeout: cdktf.numberToTerraform(struct.timeout),
    };
}
function rateLimitActionToHclTerraform(struct) {
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
        response: {
            value: rateLimitActionResponseToHclTerraform(struct.response),
            isBlock: true,
            type: "struct",
            storageClassType: "RateLimitActionResponse",
        },
        timeout: {
            value: cdktf.numberToHclTerraform(struct.timeout),
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
var RateLimitActionOutputReference = /** @class */ (function (_super) {
    __extends(RateLimitActionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RateLimitActionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // response - computed: false, optional: true, required: false
        _this._response = new RateLimitActionResponseOutputReference(_this, "response");
        return _this;
    }
    Object.defineProperty(RateLimitActionOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._mode !== undefined) {
                hasAnyValues = true;
                internalValueResult.mode = this._mode;
            }
            if (((_a = this._response) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.response = (_b = this._response) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._timeout !== undefined) {
                hasAnyValues = true;
                internalValueResult.timeout = this._timeout;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._mode = undefined;
                this._response.internalValue = undefined;
                this._timeout = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._mode = value.mode;
                this._response.internalValue = value.response;
                this._timeout = value.timeout;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimitActionOutputReference.prototype, "mode", {
        get: function () {
            return this.getStringAttribute('mode');
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: false,
        configurable: true
    });
    RateLimitActionOutputReference.prototype.resetMode = function () {
        this._mode = undefined;
    };
    Object.defineProperty(RateLimitActionOutputReference.prototype, "modeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimitActionOutputReference.prototype, "response", {
        get: function () {
            return this._response;
        },
        enumerable: false,
        configurable: true
    });
    RateLimitActionOutputReference.prototype.putResponse = function (value) {
        this._response.internalValue = value;
    };
    RateLimitActionOutputReference.prototype.resetResponse = function () {
        this._response.internalValue = undefined;
    };
    Object.defineProperty(RateLimitActionOutputReference.prototype, "responseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._response.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimitActionOutputReference.prototype, "timeout", {
        get: function () {
            return this.getNumberAttribute('timeout');
        },
        set: function (value) {
            this._timeout = value;
        },
        enumerable: false,
        configurable: true
    });
    RateLimitActionOutputReference.prototype.resetTimeout = function () {
        this._timeout = undefined;
    };
    Object.defineProperty(RateLimitActionOutputReference.prototype, "timeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeout;
        },
        enumerable: false,
        configurable: true
    });
    return RateLimitActionOutputReference;
}(cdktf.ComplexObject));
exports.RateLimitActionOutputReference = RateLimitActionOutputReference;
function rateLimitBypassToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function rateLimitBypassToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var RateLimitBypassOutputReference = /** @class */ (function (_super) {
    __extends(RateLimitBypassOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RateLimitBypassOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RateLimitBypassOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(RateLimitBypassOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimitBypassOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return RateLimitBypassOutputReference;
}(cdktf.ComplexObject));
exports.RateLimitBypassOutputReference = RateLimitBypassOutputReference;
var RateLimitBypassList = /** @class */ (function (_super) {
    __extends(RateLimitBypassList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RateLimitBypassList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    RateLimitBypassList.prototype.get = function (index) {
        return new RateLimitBypassOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return RateLimitBypassList;
}(cdktf.ComplexList));
exports.RateLimitBypassList = RateLimitBypassList;
function rateLimitMatchHeadersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        op: cdktf.stringToTerraform(struct.op),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function rateLimitMatchHeadersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        op: {
            value: cdktf.stringToHclTerraform(struct.op),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
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
var RateLimitMatchHeadersOutputReference = /** @class */ (function (_super) {
    __extends(RateLimitMatchHeadersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RateLimitMatchHeadersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RateLimitMatchHeadersOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (this._op !== undefined) {
                hasAnyValues = true;
                internalValueResult.op = this._op;
            }
            if (this._value !== undefined) {
                hasAnyValues = true;
                internalValueResult.value = this._value;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._name = undefined;
                this._op = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._name = value.name;
                this._op = value.op;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimitMatchHeadersOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    RateLimitMatchHeadersOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(RateLimitMatchHeadersOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimitMatchHeadersOutputReference.prototype, "op", {
        get: function () {
            return this.getStringAttribute('op');
        },
        set: function (value) {
            this._op = value;
        },
        enumerable: false,
        configurable: true
    });
    RateLimitMatchHeadersOutputReference.prototype.resetOp = function () {
        this._op = undefined;
    };
    Object.defineProperty(RateLimitMatchHeadersOutputReference.prototype, "opInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._op;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimitMatchHeadersOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    RateLimitMatchHeadersOutputReference.prototype.resetValue = function () {
        this._value = undefined;
    };
    Object.defineProperty(RateLimitMatchHeadersOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return RateLimitMatchHeadersOutputReference;
}(cdktf.ComplexObject));
exports.RateLimitMatchHeadersOutputReference = RateLimitMatchHeadersOutputReference;
var RateLimitMatchHeadersList = /** @class */ (function (_super) {
    __extends(RateLimitMatchHeadersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RateLimitMatchHeadersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    RateLimitMatchHeadersList.prototype.get = function (index) {
        return new RateLimitMatchHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return RateLimitMatchHeadersList;
}(cdktf.ComplexList));
exports.RateLimitMatchHeadersList = RateLimitMatchHeadersList;
function rateLimitMatchRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.methods),
        schemes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.schemes),
        url: cdktf.stringToTerraform(struct.url),
    };
}
function rateLimitMatchRequestToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        methods: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.methods),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        schemes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.schemes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        url: {
            value: cdktf.stringToHclTerraform(struct.url),
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
var RateLimitMatchRequestOutputReference = /** @class */ (function (_super) {
    __extends(RateLimitMatchRequestOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RateLimitMatchRequestOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RateLimitMatchRequestOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._methods !== undefined) {
                hasAnyValues = true;
                internalValueResult.methods = this._methods;
            }
            if (this._schemes !== undefined) {
                hasAnyValues = true;
                internalValueResult.schemes = this._schemes;
            }
            if (this._url !== undefined) {
                hasAnyValues = true;
                internalValueResult.url = this._url;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._methods = undefined;
                this._schemes = undefined;
                this._url = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._methods = value.methods;
                this._schemes = value.schemes;
                this._url = value.url;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimitMatchRequestOutputReference.prototype, "methods", {
        get: function () {
            return this.getListAttribute('methods');
        },
        set: function (value) {
            this._methods = value;
        },
        enumerable: false,
        configurable: true
    });
    RateLimitMatchRequestOutputReference.prototype.resetMethods = function () {
        this._methods = undefined;
    };
    Object.defineProperty(RateLimitMatchRequestOutputReference.prototype, "methodsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._methods;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimitMatchRequestOutputReference.prototype, "schemes", {
        get: function () {
            return this.getListAttribute('schemes');
        },
        set: function (value) {
            this._schemes = value;
        },
        enumerable: false,
        configurable: true
    });
    RateLimitMatchRequestOutputReference.prototype.resetSchemes = function () {
        this._schemes = undefined;
    };
    Object.defineProperty(RateLimitMatchRequestOutputReference.prototype, "schemesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schemes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimitMatchRequestOutputReference.prototype, "url", {
        get: function () {
            return this.getStringAttribute('url');
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: false,
        configurable: true
    });
    RateLimitMatchRequestOutputReference.prototype.resetUrl = function () {
        this._url = undefined;
    };
    Object.defineProperty(RateLimitMatchRequestOutputReference.prototype, "urlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    return RateLimitMatchRequestOutputReference;
}(cdktf.ComplexObject));
exports.RateLimitMatchRequestOutputReference = RateLimitMatchRequestOutputReference;
function rateLimitMatchResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        origin_traffic: cdktf.booleanToTerraform(struct.originTraffic),
    };
}
function rateLimitMatchResponseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        origin_traffic: {
            value: cdktf.booleanToHclTerraform(struct.originTraffic),
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
var RateLimitMatchResponseOutputReference = /** @class */ (function (_super) {
    __extends(RateLimitMatchResponseOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RateLimitMatchResponseOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RateLimitMatchResponseOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._originTraffic !== undefined) {
                hasAnyValues = true;
                internalValueResult.originTraffic = this._originTraffic;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._originTraffic = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._originTraffic = value.originTraffic;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimitMatchResponseOutputReference.prototype, "originTraffic", {
        get: function () {
            return this.getBooleanAttribute('origin_traffic');
        },
        set: function (value) {
            this._originTraffic = value;
        },
        enumerable: false,
        configurable: true
    });
    RateLimitMatchResponseOutputReference.prototype.resetOriginTraffic = function () {
        this._originTraffic = undefined;
    };
    Object.defineProperty(RateLimitMatchResponseOutputReference.prototype, "originTrafficInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._originTraffic;
        },
        enumerable: false,
        configurable: true
    });
    return RateLimitMatchResponseOutputReference;
}(cdktf.ComplexObject));
exports.RateLimitMatchResponseOutputReference = RateLimitMatchResponseOutputReference;
function rateLimitMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        headers: cdktf.listMapper(rateLimitMatchHeadersToTerraform, false)(struct.headers),
        request: rateLimitMatchRequestToTerraform(struct.request),
        response: rateLimitMatchResponseToTerraform(struct.response),
    };
}
function rateLimitMatchToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        headers: {
            value: cdktf.listMapperHcl(rateLimitMatchHeadersToHclTerraform, false)(struct.headers),
            isBlock: true,
            type: "list",
            storageClassType: "RateLimitMatchHeadersList",
        },
        request: {
            value: rateLimitMatchRequestToHclTerraform(struct.request),
            isBlock: true,
            type: "struct",
            storageClassType: "RateLimitMatchRequest",
        },
        response: {
            value: rateLimitMatchResponseToHclTerraform(struct.response),
            isBlock: true,
            type: "struct",
            storageClassType: "RateLimitMatchResponse",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var RateLimitMatchOutputReference = /** @class */ (function (_super) {
    __extends(RateLimitMatchOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RateLimitMatchOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // headers - computed: false, optional: true, required: false
        _this._headers = new RateLimitMatchHeadersList(_this, "headers", false);
        // request - computed: false, optional: true, required: false
        _this._request = new RateLimitMatchRequestOutputReference(_this, "request");
        // response - computed: false, optional: true, required: false
        _this._response = new RateLimitMatchResponseOutputReference(_this, "response");
        return _this;
    }
    Object.defineProperty(RateLimitMatchOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._headers) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.headers = (_b = this._headers) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._request) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.request = (_d = this._request) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (((_e = this._response) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.response = (_f = this._response) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._headers.internalValue = undefined;
                this._request.internalValue = undefined;
                this._response.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._headers.internalValue = value.headers;
                this._request.internalValue = value.request;
                this._response.internalValue = value.response;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimitMatchOutputReference.prototype, "headers", {
        get: function () {
            return this._headers;
        },
        enumerable: false,
        configurable: true
    });
    RateLimitMatchOutputReference.prototype.putHeaders = function (value) {
        this._headers.internalValue = value;
    };
    RateLimitMatchOutputReference.prototype.resetHeaders = function () {
        this._headers.internalValue = undefined;
    };
    Object.defineProperty(RateLimitMatchOutputReference.prototype, "headersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._headers.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimitMatchOutputReference.prototype, "request", {
        get: function () {
            return this._request;
        },
        enumerable: false,
        configurable: true
    });
    RateLimitMatchOutputReference.prototype.putRequest = function (value) {
        this._request.internalValue = value;
    };
    RateLimitMatchOutputReference.prototype.resetRequest = function () {
        this._request.internalValue = undefined;
    };
    Object.defineProperty(RateLimitMatchOutputReference.prototype, "requestInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._request.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimitMatchOutputReference.prototype, "response", {
        get: function () {
            return this._response;
        },
        enumerable: false,
        configurable: true
    });
    RateLimitMatchOutputReference.prototype.putResponse = function (value) {
        this._response.internalValue = value;
    };
    RateLimitMatchOutputReference.prototype.resetResponse = function () {
        this._response.internalValue = undefined;
    };
    Object.defineProperty(RateLimitMatchOutputReference.prototype, "responseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._response.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return RateLimitMatchOutputReference;
}(cdktf.ComplexObject));
exports.RateLimitMatchOutputReference = RateLimitMatchOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit cloudflare_rate_limit}
*/
var RateLimit = /** @class */ (function (_super) {
    __extends(RateLimit, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit cloudflare_rate_limit} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RateLimitConfig
    */
    function RateLimit(scope, id, config) {
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
        // action - computed: false, optional: false, required: true
        _this._action = new RateLimitActionOutputReference(_this, "action");
        // bypass - computed: true, optional: false, required: false
        _this._bypass = new RateLimitBypassList(_this, "bypass", false);
        // match - computed: false, optional: false, required: true
        _this._match = new RateLimitMatchOutputReference(_this, "match");
        _this._action.internalValue = config.action;
        _this._match.internalValue = config.match;
        _this._period = config.period;
        _this._threshold = config.threshold;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RateLimit resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RateLimit to import
    * @param importFromId The id of the existing RateLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RateLimit to import is found
    */
    RateLimit.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_rate_limit", importId: importFromId, provider: provider });
    };
    Object.defineProperty(RateLimit.prototype, "action", {
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    RateLimit.prototype.putAction = function (value) {
        this._action.internalValue = value;
    };
    Object.defineProperty(RateLimit.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimit.prototype, "bypass", {
        get: function () {
            return this._bypass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimit.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimit.prototype, "disabled", {
        // disabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimit.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimit.prototype, "match", {
        get: function () {
            return this._match;
        },
        enumerable: false,
        configurable: true
    });
    RateLimit.prototype.putMatch = function (value) {
        this._match.internalValue = value;
    };
    Object.defineProperty(RateLimit.prototype, "matchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._match.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimit.prototype, "period", {
        get: function () {
            return this.getNumberAttribute('period');
        },
        set: function (value) {
            this._period = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimit.prototype, "periodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._period;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimit.prototype, "threshold", {
        get: function () {
            return this.getNumberAttribute('threshold');
        },
        set: function (value) {
            this._threshold = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimit.prototype, "thresholdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._threshold;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RateLimit.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    RateLimit.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(RateLimit.prototype, "zoneIdInput", {
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
    RateLimit.prototype.synthesizeAttributes = function () {
        return {
            action: rateLimitActionToTerraform(this._action.internalValue),
            match: rateLimitMatchToTerraform(this._match.internalValue),
            period: cdktf.numberToTerraform(this._period),
            threshold: cdktf.numberToTerraform(this._threshold),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    RateLimit.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            action: {
                value: rateLimitActionToHclTerraform(this._action.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "RateLimitAction",
            },
            match: {
                value: rateLimitMatchToHclTerraform(this._match.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "RateLimitMatch",
            },
            period: {
                value: cdktf.numberToHclTerraform(this._period),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            threshold: {
                value: cdktf.numberToHclTerraform(this._threshold),
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
    RateLimit.tfResourceType = "cloudflare_rate_limit";
    return RateLimit;
}(cdktf.TerraformResource));
exports.RateLimit = RateLimit;
