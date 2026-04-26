"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule
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
exports.PageRule = exports.PageRuleActionsOutputReference = exports.PageRuleActionsForwardingUrlOutputReference = exports.PageRuleActionsCacheKeyFieldsOutputReference = exports.PageRuleActionsCacheKeyFieldsUserOutputReference = exports.PageRuleActionsCacheKeyFieldsQueryStringOutputReference = exports.PageRuleActionsCacheKeyFieldsHostOutputReference = exports.PageRuleActionsCacheKeyFieldsHeaderOutputReference = exports.PageRuleActionsCacheKeyFieldsCookieOutputReference = void 0;
exports.pageRuleActionsCacheKeyFieldsCookieToTerraform = pageRuleActionsCacheKeyFieldsCookieToTerraform;
exports.pageRuleActionsCacheKeyFieldsCookieToHclTerraform = pageRuleActionsCacheKeyFieldsCookieToHclTerraform;
exports.pageRuleActionsCacheKeyFieldsHeaderToTerraform = pageRuleActionsCacheKeyFieldsHeaderToTerraform;
exports.pageRuleActionsCacheKeyFieldsHeaderToHclTerraform = pageRuleActionsCacheKeyFieldsHeaderToHclTerraform;
exports.pageRuleActionsCacheKeyFieldsHostToTerraform = pageRuleActionsCacheKeyFieldsHostToTerraform;
exports.pageRuleActionsCacheKeyFieldsHostToHclTerraform = pageRuleActionsCacheKeyFieldsHostToHclTerraform;
exports.pageRuleActionsCacheKeyFieldsQueryStringToTerraform = pageRuleActionsCacheKeyFieldsQueryStringToTerraform;
exports.pageRuleActionsCacheKeyFieldsQueryStringToHclTerraform = pageRuleActionsCacheKeyFieldsQueryStringToHclTerraform;
exports.pageRuleActionsCacheKeyFieldsUserToTerraform = pageRuleActionsCacheKeyFieldsUserToTerraform;
exports.pageRuleActionsCacheKeyFieldsUserToHclTerraform = pageRuleActionsCacheKeyFieldsUserToHclTerraform;
exports.pageRuleActionsCacheKeyFieldsToTerraform = pageRuleActionsCacheKeyFieldsToTerraform;
exports.pageRuleActionsCacheKeyFieldsToHclTerraform = pageRuleActionsCacheKeyFieldsToHclTerraform;
exports.pageRuleActionsForwardingUrlToTerraform = pageRuleActionsForwardingUrlToTerraform;
exports.pageRuleActionsForwardingUrlToHclTerraform = pageRuleActionsForwardingUrlToHclTerraform;
exports.pageRuleActionsToTerraform = pageRuleActionsToTerraform;
exports.pageRuleActionsToHclTerraform = pageRuleActionsToHclTerraform;
var cdktf = require("cdktf");
function pageRuleActionsCacheKeyFieldsCookieToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        check_presence: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.checkPresence),
        include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.include),
    };
}
function pageRuleActionsCacheKeyFieldsCookieToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        check_presence: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.checkPresence),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        include: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.include),
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
var PageRuleActionsCacheKeyFieldsCookieOutputReference = /** @class */ (function (_super) {
    __extends(PageRuleActionsCacheKeyFieldsCookieOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PageRuleActionsCacheKeyFieldsCookieOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PageRuleActionsCacheKeyFieldsCookieOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._checkPresence !== undefined) {
                hasAnyValues = true;
                internalValueResult.checkPresence = this._checkPresence;
            }
            if (this._include !== undefined) {
                hasAnyValues = true;
                internalValueResult.include = this._include;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._checkPresence = undefined;
                this._include = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._checkPresence = value.checkPresence;
                this._include = value.include;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsCacheKeyFieldsCookieOutputReference.prototype, "checkPresence", {
        get: function () {
            return this.getListAttribute('check_presence');
        },
        set: function (value) {
            this._checkPresence = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsCacheKeyFieldsCookieOutputReference.prototype.resetCheckPresence = function () {
        this._checkPresence = undefined;
    };
    Object.defineProperty(PageRuleActionsCacheKeyFieldsCookieOutputReference.prototype, "checkPresenceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._checkPresence;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsCacheKeyFieldsCookieOutputReference.prototype, "include", {
        get: function () {
            return this.getListAttribute('include');
        },
        set: function (value) {
            this._include = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsCacheKeyFieldsCookieOutputReference.prototype.resetInclude = function () {
        this._include = undefined;
    };
    Object.defineProperty(PageRuleActionsCacheKeyFieldsCookieOutputReference.prototype, "includeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._include;
        },
        enumerable: false,
        configurable: true
    });
    return PageRuleActionsCacheKeyFieldsCookieOutputReference;
}(cdktf.ComplexObject));
exports.PageRuleActionsCacheKeyFieldsCookieOutputReference = PageRuleActionsCacheKeyFieldsCookieOutputReference;
function pageRuleActionsCacheKeyFieldsHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        check_presence: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.checkPresence),
        exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.exclude),
        include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.include),
    };
}
function pageRuleActionsCacheKeyFieldsHeaderToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        check_presence: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.checkPresence),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        exclude: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.exclude),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        include: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.include),
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
var PageRuleActionsCacheKeyFieldsHeaderOutputReference = /** @class */ (function (_super) {
    __extends(PageRuleActionsCacheKeyFieldsHeaderOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PageRuleActionsCacheKeyFieldsHeaderOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PageRuleActionsCacheKeyFieldsHeaderOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._checkPresence !== undefined) {
                hasAnyValues = true;
                internalValueResult.checkPresence = this._checkPresence;
            }
            if (this._exclude !== undefined) {
                hasAnyValues = true;
                internalValueResult.exclude = this._exclude;
            }
            if (this._include !== undefined) {
                hasAnyValues = true;
                internalValueResult.include = this._include;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._checkPresence = undefined;
                this._exclude = undefined;
                this._include = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._checkPresence = value.checkPresence;
                this._exclude = value.exclude;
                this._include = value.include;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsCacheKeyFieldsHeaderOutputReference.prototype, "checkPresence", {
        get: function () {
            return this.getListAttribute('check_presence');
        },
        set: function (value) {
            this._checkPresence = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsCacheKeyFieldsHeaderOutputReference.prototype.resetCheckPresence = function () {
        this._checkPresence = undefined;
    };
    Object.defineProperty(PageRuleActionsCacheKeyFieldsHeaderOutputReference.prototype, "checkPresenceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._checkPresence;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsCacheKeyFieldsHeaderOutputReference.prototype, "exclude", {
        get: function () {
            return this.getListAttribute('exclude');
        },
        set: function (value) {
            this._exclude = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsCacheKeyFieldsHeaderOutputReference.prototype.resetExclude = function () {
        this._exclude = undefined;
    };
    Object.defineProperty(PageRuleActionsCacheKeyFieldsHeaderOutputReference.prototype, "excludeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exclude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsCacheKeyFieldsHeaderOutputReference.prototype, "include", {
        get: function () {
            return this.getListAttribute('include');
        },
        set: function (value) {
            this._include = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsCacheKeyFieldsHeaderOutputReference.prototype.resetInclude = function () {
        this._include = undefined;
    };
    Object.defineProperty(PageRuleActionsCacheKeyFieldsHeaderOutputReference.prototype, "includeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._include;
        },
        enumerable: false,
        configurable: true
    });
    return PageRuleActionsCacheKeyFieldsHeaderOutputReference;
}(cdktf.ComplexObject));
exports.PageRuleActionsCacheKeyFieldsHeaderOutputReference = PageRuleActionsCacheKeyFieldsHeaderOutputReference;
function pageRuleActionsCacheKeyFieldsHostToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resolved: cdktf.booleanToTerraform(struct.resolved),
    };
}
function pageRuleActionsCacheKeyFieldsHostToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        resolved: {
            value: cdktf.booleanToHclTerraform(struct.resolved),
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
var PageRuleActionsCacheKeyFieldsHostOutputReference = /** @class */ (function (_super) {
    __extends(PageRuleActionsCacheKeyFieldsHostOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PageRuleActionsCacheKeyFieldsHostOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PageRuleActionsCacheKeyFieldsHostOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._resolved !== undefined) {
                hasAnyValues = true;
                internalValueResult.resolved = this._resolved;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._resolved = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._resolved = value.resolved;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsCacheKeyFieldsHostOutputReference.prototype, "resolved", {
        get: function () {
            return this.getBooleanAttribute('resolved');
        },
        set: function (value) {
            this._resolved = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsCacheKeyFieldsHostOutputReference.prototype.resetResolved = function () {
        this._resolved = undefined;
    };
    Object.defineProperty(PageRuleActionsCacheKeyFieldsHostOutputReference.prototype, "resolvedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resolved;
        },
        enumerable: false,
        configurable: true
    });
    return PageRuleActionsCacheKeyFieldsHostOutputReference;
}(cdktf.ComplexObject));
exports.PageRuleActionsCacheKeyFieldsHostOutputReference = PageRuleActionsCacheKeyFieldsHostOutputReference;
function pageRuleActionsCacheKeyFieldsQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.exclude),
        include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.include),
    };
}
function pageRuleActionsCacheKeyFieldsQueryStringToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        exclude: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.exclude),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        include: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.include),
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
var PageRuleActionsCacheKeyFieldsQueryStringOutputReference = /** @class */ (function (_super) {
    __extends(PageRuleActionsCacheKeyFieldsQueryStringOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PageRuleActionsCacheKeyFieldsQueryStringOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PageRuleActionsCacheKeyFieldsQueryStringOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._exclude !== undefined) {
                hasAnyValues = true;
                internalValueResult.exclude = this._exclude;
            }
            if (this._include !== undefined) {
                hasAnyValues = true;
                internalValueResult.include = this._include;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._exclude = undefined;
                this._include = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._exclude = value.exclude;
                this._include = value.include;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsCacheKeyFieldsQueryStringOutputReference.prototype, "exclude", {
        get: function () {
            return this.getListAttribute('exclude');
        },
        set: function (value) {
            this._exclude = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsCacheKeyFieldsQueryStringOutputReference.prototype.resetExclude = function () {
        this._exclude = undefined;
    };
    Object.defineProperty(PageRuleActionsCacheKeyFieldsQueryStringOutputReference.prototype, "excludeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exclude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsCacheKeyFieldsQueryStringOutputReference.prototype, "include", {
        get: function () {
            return this.getListAttribute('include');
        },
        set: function (value) {
            this._include = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsCacheKeyFieldsQueryStringOutputReference.prototype.resetInclude = function () {
        this._include = undefined;
    };
    Object.defineProperty(PageRuleActionsCacheKeyFieldsQueryStringOutputReference.prototype, "includeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._include;
        },
        enumerable: false,
        configurable: true
    });
    return PageRuleActionsCacheKeyFieldsQueryStringOutputReference;
}(cdktf.ComplexObject));
exports.PageRuleActionsCacheKeyFieldsQueryStringOutputReference = PageRuleActionsCacheKeyFieldsQueryStringOutputReference;
function pageRuleActionsCacheKeyFieldsUserToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        device_type: cdktf.booleanToTerraform(struct.deviceType),
        geo: cdktf.booleanToTerraform(struct.geo),
        lang: cdktf.booleanToTerraform(struct.lang),
    };
}
function pageRuleActionsCacheKeyFieldsUserToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        device_type: {
            value: cdktf.booleanToHclTerraform(struct.deviceType),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        geo: {
            value: cdktf.booleanToHclTerraform(struct.geo),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        lang: {
            value: cdktf.booleanToHclTerraform(struct.lang),
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
var PageRuleActionsCacheKeyFieldsUserOutputReference = /** @class */ (function (_super) {
    __extends(PageRuleActionsCacheKeyFieldsUserOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PageRuleActionsCacheKeyFieldsUserOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PageRuleActionsCacheKeyFieldsUserOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._deviceType !== undefined) {
                hasAnyValues = true;
                internalValueResult.deviceType = this._deviceType;
            }
            if (this._geo !== undefined) {
                hasAnyValues = true;
                internalValueResult.geo = this._geo;
            }
            if (this._lang !== undefined) {
                hasAnyValues = true;
                internalValueResult.lang = this._lang;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._deviceType = undefined;
                this._geo = undefined;
                this._lang = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._deviceType = value.deviceType;
                this._geo = value.geo;
                this._lang = value.lang;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsCacheKeyFieldsUserOutputReference.prototype, "deviceType", {
        get: function () {
            return this.getBooleanAttribute('device_type');
        },
        set: function (value) {
            this._deviceType = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsCacheKeyFieldsUserOutputReference.prototype.resetDeviceType = function () {
        this._deviceType = undefined;
    };
    Object.defineProperty(PageRuleActionsCacheKeyFieldsUserOutputReference.prototype, "deviceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deviceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsCacheKeyFieldsUserOutputReference.prototype, "geo", {
        get: function () {
            return this.getBooleanAttribute('geo');
        },
        set: function (value) {
            this._geo = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsCacheKeyFieldsUserOutputReference.prototype.resetGeo = function () {
        this._geo = undefined;
    };
    Object.defineProperty(PageRuleActionsCacheKeyFieldsUserOutputReference.prototype, "geoInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._geo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsCacheKeyFieldsUserOutputReference.prototype, "lang", {
        get: function () {
            return this.getBooleanAttribute('lang');
        },
        set: function (value) {
            this._lang = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsCacheKeyFieldsUserOutputReference.prototype.resetLang = function () {
        this._lang = undefined;
    };
    Object.defineProperty(PageRuleActionsCacheKeyFieldsUserOutputReference.prototype, "langInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lang;
        },
        enumerable: false,
        configurable: true
    });
    return PageRuleActionsCacheKeyFieldsUserOutputReference;
}(cdktf.ComplexObject));
exports.PageRuleActionsCacheKeyFieldsUserOutputReference = PageRuleActionsCacheKeyFieldsUserOutputReference;
function pageRuleActionsCacheKeyFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cookie: pageRuleActionsCacheKeyFieldsCookieToTerraform(struct.cookie),
        header: pageRuleActionsCacheKeyFieldsHeaderToTerraform(struct.header),
        host: pageRuleActionsCacheKeyFieldsHostToTerraform(struct.host),
        query_string: pageRuleActionsCacheKeyFieldsQueryStringToTerraform(struct.queryString),
        user: pageRuleActionsCacheKeyFieldsUserToTerraform(struct.user),
    };
}
function pageRuleActionsCacheKeyFieldsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cookie: {
            value: pageRuleActionsCacheKeyFieldsCookieToHclTerraform(struct.cookie),
            isBlock: true,
            type: "struct",
            storageClassType: "PageRuleActionsCacheKeyFieldsCookie",
        },
        header: {
            value: pageRuleActionsCacheKeyFieldsHeaderToHclTerraform(struct.header),
            isBlock: true,
            type: "struct",
            storageClassType: "PageRuleActionsCacheKeyFieldsHeader",
        },
        host: {
            value: pageRuleActionsCacheKeyFieldsHostToHclTerraform(struct.host),
            isBlock: true,
            type: "struct",
            storageClassType: "PageRuleActionsCacheKeyFieldsHost",
        },
        query_string: {
            value: pageRuleActionsCacheKeyFieldsQueryStringToHclTerraform(struct.queryString),
            isBlock: true,
            type: "struct",
            storageClassType: "PageRuleActionsCacheKeyFieldsQueryString",
        },
        user: {
            value: pageRuleActionsCacheKeyFieldsUserToHclTerraform(struct.user),
            isBlock: true,
            type: "struct",
            storageClassType: "PageRuleActionsCacheKeyFieldsUser",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var PageRuleActionsCacheKeyFieldsOutputReference = /** @class */ (function (_super) {
    __extends(PageRuleActionsCacheKeyFieldsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PageRuleActionsCacheKeyFieldsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // cookie - computed: false, optional: true, required: false
        _this._cookie = new PageRuleActionsCacheKeyFieldsCookieOutputReference(_this, "cookie");
        // header - computed: false, optional: true, required: false
        _this._header = new PageRuleActionsCacheKeyFieldsHeaderOutputReference(_this, "header");
        // host - computed: true, optional: true, required: false
        _this._host = new PageRuleActionsCacheKeyFieldsHostOutputReference(_this, "host");
        // query_string - computed: false, optional: true, required: false
        _this._queryString = new PageRuleActionsCacheKeyFieldsQueryStringOutputReference(_this, "query_string");
        // user - computed: true, optional: true, required: false
        _this._user = new PageRuleActionsCacheKeyFieldsUserOutputReference(_this, "user");
        return _this;
    }
    Object.defineProperty(PageRuleActionsCacheKeyFieldsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._cookie) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.cookie = (_b = this._cookie) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._header) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.header = (_d = this._header) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (((_e = this._host) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.host = (_f = this._host) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            if (((_g = this._queryString) === null || _g === void 0 ? void 0 : _g.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.queryString = (_h = this._queryString) === null || _h === void 0 ? void 0 : _h.internalValue;
            }
            if (((_j = this._user) === null || _j === void 0 ? void 0 : _j.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.user = (_k = this._user) === null || _k === void 0 ? void 0 : _k.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._cookie.internalValue = undefined;
                this._header.internalValue = undefined;
                this._host.internalValue = undefined;
                this._queryString.internalValue = undefined;
                this._user.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._cookie.internalValue = value.cookie;
                this._header.internalValue = value.header;
                this._host.internalValue = value.host;
                this._queryString.internalValue = value.queryString;
                this._user.internalValue = value.user;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsCacheKeyFieldsOutputReference.prototype, "cookie", {
        get: function () {
            return this._cookie;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsCacheKeyFieldsOutputReference.prototype.putCookie = function (value) {
        this._cookie.internalValue = value;
    };
    PageRuleActionsCacheKeyFieldsOutputReference.prototype.resetCookie = function () {
        this._cookie.internalValue = undefined;
    };
    Object.defineProperty(PageRuleActionsCacheKeyFieldsOutputReference.prototype, "cookieInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cookie.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsCacheKeyFieldsOutputReference.prototype, "header", {
        get: function () {
            return this._header;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsCacheKeyFieldsOutputReference.prototype.putHeader = function (value) {
        this._header.internalValue = value;
    };
    PageRuleActionsCacheKeyFieldsOutputReference.prototype.resetHeader = function () {
        this._header.internalValue = undefined;
    };
    Object.defineProperty(PageRuleActionsCacheKeyFieldsOutputReference.prototype, "headerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._header.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsCacheKeyFieldsOutputReference.prototype, "host", {
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsCacheKeyFieldsOutputReference.prototype.putHost = function (value) {
        this._host.internalValue = value;
    };
    PageRuleActionsCacheKeyFieldsOutputReference.prototype.resetHost = function () {
        this._host.internalValue = undefined;
    };
    Object.defineProperty(PageRuleActionsCacheKeyFieldsOutputReference.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsCacheKeyFieldsOutputReference.prototype, "queryString", {
        get: function () {
            return this._queryString;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsCacheKeyFieldsOutputReference.prototype.putQueryString = function (value) {
        this._queryString.internalValue = value;
    };
    PageRuleActionsCacheKeyFieldsOutputReference.prototype.resetQueryString = function () {
        this._queryString.internalValue = undefined;
    };
    Object.defineProperty(PageRuleActionsCacheKeyFieldsOutputReference.prototype, "queryStringInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queryString.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsCacheKeyFieldsOutputReference.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsCacheKeyFieldsOutputReference.prototype.putUser = function (value) {
        this._user.internalValue = value;
    };
    PageRuleActionsCacheKeyFieldsOutputReference.prototype.resetUser = function () {
        this._user.internalValue = undefined;
    };
    Object.defineProperty(PageRuleActionsCacheKeyFieldsOutputReference.prototype, "userInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._user.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return PageRuleActionsCacheKeyFieldsOutputReference;
}(cdktf.ComplexObject));
exports.PageRuleActionsCacheKeyFieldsOutputReference = PageRuleActionsCacheKeyFieldsOutputReference;
function pageRuleActionsForwardingUrlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        status_code: cdktf.numberToTerraform(struct.statusCode),
        url: cdktf.stringToTerraform(struct.url),
    };
}
function pageRuleActionsForwardingUrlToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        status_code: {
            value: cdktf.numberToHclTerraform(struct.statusCode),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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
var PageRuleActionsForwardingUrlOutputReference = /** @class */ (function (_super) {
    __extends(PageRuleActionsForwardingUrlOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PageRuleActionsForwardingUrlOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PageRuleActionsForwardingUrlOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._statusCode !== undefined) {
                hasAnyValues = true;
                internalValueResult.statusCode = this._statusCode;
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
                this._statusCode = undefined;
                this._url = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._statusCode = value.statusCode;
                this._url = value.url;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsForwardingUrlOutputReference.prototype, "statusCode", {
        get: function () {
            return this.getNumberAttribute('status_code');
        },
        set: function (value) {
            this._statusCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsForwardingUrlOutputReference.prototype, "statusCodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._statusCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsForwardingUrlOutputReference.prototype, "url", {
        get: function () {
            return this.getStringAttribute('url');
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsForwardingUrlOutputReference.prototype, "urlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    return PageRuleActionsForwardingUrlOutputReference;
}(cdktf.ComplexObject));
exports.PageRuleActionsForwardingUrlOutputReference = PageRuleActionsForwardingUrlOutputReference;
function pageRuleActionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        always_use_https: cdktf.booleanToTerraform(struct.alwaysUseHttps),
        automatic_https_rewrites: cdktf.stringToTerraform(struct.automaticHttpsRewrites),
        browser_cache_ttl: cdktf.numberToTerraform(struct.browserCacheTtl),
        browser_check: cdktf.stringToTerraform(struct.browserCheck),
        bypass_cache_on_cookie: cdktf.stringToTerraform(struct.bypassCacheOnCookie),
        cache_by_device_type: cdktf.stringToTerraform(struct.cacheByDeviceType),
        cache_deception_armor: cdktf.stringToTerraform(struct.cacheDeceptionArmor),
        cache_key_fields: pageRuleActionsCacheKeyFieldsToTerraform(struct.cacheKeyFields),
        cache_level: cdktf.stringToTerraform(struct.cacheLevel),
        cache_on_cookie: cdktf.stringToTerraform(struct.cacheOnCookie),
        cache_ttl_by_status: cdktf.hashMapper(cdktf.stringToTerraform)(struct.cacheTtlByStatus),
        disable_apps: cdktf.booleanToTerraform(struct.disableApps),
        disable_performance: cdktf.booleanToTerraform(struct.disablePerformance),
        disable_security: cdktf.booleanToTerraform(struct.disableSecurity),
        disable_zaraz: cdktf.booleanToTerraform(struct.disableZaraz),
        edge_cache_ttl: cdktf.numberToTerraform(struct.edgeCacheTtl),
        email_obfuscation: cdktf.stringToTerraform(struct.emailObfuscation),
        explicit_cache_control: cdktf.stringToTerraform(struct.explicitCacheControl),
        forwarding_url: pageRuleActionsForwardingUrlToTerraform(struct.forwardingUrl),
        host_header_override: cdktf.stringToTerraform(struct.hostHeaderOverride),
        ip_geolocation: cdktf.stringToTerraform(struct.ipGeolocation),
        mirage: cdktf.stringToTerraform(struct.mirage),
        opportunistic_encryption: cdktf.stringToTerraform(struct.opportunisticEncryption),
        origin_error_page_pass_thru: cdktf.stringToTerraform(struct.originErrorPagePassThru),
        polish: cdktf.stringToTerraform(struct.polish),
        resolve_override: cdktf.stringToTerraform(struct.resolveOverride),
        respect_strong_etag: cdktf.stringToTerraform(struct.respectStrongEtag),
        response_buffering: cdktf.stringToTerraform(struct.responseBuffering),
        rocket_loader: cdktf.stringToTerraform(struct.rocketLoader),
        security_level: cdktf.stringToTerraform(struct.securityLevel),
        sort_query_string_for_cache: cdktf.stringToTerraform(struct.sortQueryStringForCache),
        ssl: cdktf.stringToTerraform(struct.ssl),
        true_client_ip_header: cdktf.stringToTerraform(struct.trueClientIpHeader),
        waf: cdktf.stringToTerraform(struct.waf),
    };
}
function pageRuleActionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        always_use_https: {
            value: cdktf.booleanToHclTerraform(struct.alwaysUseHttps),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        automatic_https_rewrites: {
            value: cdktf.stringToHclTerraform(struct.automaticHttpsRewrites),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        browser_cache_ttl: {
            value: cdktf.numberToHclTerraform(struct.browserCacheTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        browser_check: {
            value: cdktf.stringToHclTerraform(struct.browserCheck),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bypass_cache_on_cookie: {
            value: cdktf.stringToHclTerraform(struct.bypassCacheOnCookie),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cache_by_device_type: {
            value: cdktf.stringToHclTerraform(struct.cacheByDeviceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cache_deception_armor: {
            value: cdktf.stringToHclTerraform(struct.cacheDeceptionArmor),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cache_key_fields: {
            value: pageRuleActionsCacheKeyFieldsToHclTerraform(struct.cacheKeyFields),
            isBlock: true,
            type: "struct",
            storageClassType: "PageRuleActionsCacheKeyFields",
        },
        cache_level: {
            value: cdktf.stringToHclTerraform(struct.cacheLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cache_on_cookie: {
            value: cdktf.stringToHclTerraform(struct.cacheOnCookie),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cache_ttl_by_status: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.cacheTtlByStatus),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        disable_apps: {
            value: cdktf.booleanToHclTerraform(struct.disableApps),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        disable_performance: {
            value: cdktf.booleanToHclTerraform(struct.disablePerformance),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        disable_security: {
            value: cdktf.booleanToHclTerraform(struct.disableSecurity),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        disable_zaraz: {
            value: cdktf.booleanToHclTerraform(struct.disableZaraz),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        edge_cache_ttl: {
            value: cdktf.numberToHclTerraform(struct.edgeCacheTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        email_obfuscation: {
            value: cdktf.stringToHclTerraform(struct.emailObfuscation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        explicit_cache_control: {
            value: cdktf.stringToHclTerraform(struct.explicitCacheControl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        forwarding_url: {
            value: pageRuleActionsForwardingUrlToHclTerraform(struct.forwardingUrl),
            isBlock: true,
            type: "struct",
            storageClassType: "PageRuleActionsForwardingUrl",
        },
        host_header_override: {
            value: cdktf.stringToHclTerraform(struct.hostHeaderOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ip_geolocation: {
            value: cdktf.stringToHclTerraform(struct.ipGeolocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mirage: {
            value: cdktf.stringToHclTerraform(struct.mirage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        opportunistic_encryption: {
            value: cdktf.stringToHclTerraform(struct.opportunisticEncryption),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        origin_error_page_pass_thru: {
            value: cdktf.stringToHclTerraform(struct.originErrorPagePassThru),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        polish: {
            value: cdktf.stringToHclTerraform(struct.polish),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resolve_override: {
            value: cdktf.stringToHclTerraform(struct.resolveOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        respect_strong_etag: {
            value: cdktf.stringToHclTerraform(struct.respectStrongEtag),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        response_buffering: {
            value: cdktf.stringToHclTerraform(struct.responseBuffering),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rocket_loader: {
            value: cdktf.stringToHclTerraform(struct.rocketLoader),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_level: {
            value: cdktf.stringToHclTerraform(struct.securityLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sort_query_string_for_cache: {
            value: cdktf.stringToHclTerraform(struct.sortQueryStringForCache),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl: {
            value: cdktf.stringToHclTerraform(struct.ssl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        true_client_ip_header: {
            value: cdktf.stringToHclTerraform(struct.trueClientIpHeader),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        waf: {
            value: cdktf.stringToHclTerraform(struct.waf),
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
var PageRuleActionsOutputReference = /** @class */ (function (_super) {
    __extends(PageRuleActionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PageRuleActionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // cache_key_fields - computed: false, optional: true, required: false
        _this._cacheKeyFields = new PageRuleActionsCacheKeyFieldsOutputReference(_this, "cache_key_fields");
        // forwarding_url - computed: false, optional: true, required: false
        _this._forwardingUrl = new PageRuleActionsForwardingUrlOutputReference(_this, "forwarding_url");
        return _this;
    }
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._alwaysUseHttps !== undefined) {
                hasAnyValues = true;
                internalValueResult.alwaysUseHttps = this._alwaysUseHttps;
            }
            if (this._automaticHttpsRewrites !== undefined) {
                hasAnyValues = true;
                internalValueResult.automaticHttpsRewrites = this._automaticHttpsRewrites;
            }
            if (this._browserCacheTtl !== undefined) {
                hasAnyValues = true;
                internalValueResult.browserCacheTtl = this._browserCacheTtl;
            }
            if (this._browserCheck !== undefined) {
                hasAnyValues = true;
                internalValueResult.browserCheck = this._browserCheck;
            }
            if (this._bypassCacheOnCookie !== undefined) {
                hasAnyValues = true;
                internalValueResult.bypassCacheOnCookie = this._bypassCacheOnCookie;
            }
            if (this._cacheByDeviceType !== undefined) {
                hasAnyValues = true;
                internalValueResult.cacheByDeviceType = this._cacheByDeviceType;
            }
            if (this._cacheDeceptionArmor !== undefined) {
                hasAnyValues = true;
                internalValueResult.cacheDeceptionArmor = this._cacheDeceptionArmor;
            }
            if (((_a = this._cacheKeyFields) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.cacheKeyFields = (_b = this._cacheKeyFields) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._cacheLevel !== undefined) {
                hasAnyValues = true;
                internalValueResult.cacheLevel = this._cacheLevel;
            }
            if (this._cacheOnCookie !== undefined) {
                hasAnyValues = true;
                internalValueResult.cacheOnCookie = this._cacheOnCookie;
            }
            if (this._cacheTtlByStatus !== undefined) {
                hasAnyValues = true;
                internalValueResult.cacheTtlByStatus = this._cacheTtlByStatus;
            }
            if (this._disableApps !== undefined) {
                hasAnyValues = true;
                internalValueResult.disableApps = this._disableApps;
            }
            if (this._disablePerformance !== undefined) {
                hasAnyValues = true;
                internalValueResult.disablePerformance = this._disablePerformance;
            }
            if (this._disableSecurity !== undefined) {
                hasAnyValues = true;
                internalValueResult.disableSecurity = this._disableSecurity;
            }
            if (this._disableZaraz !== undefined) {
                hasAnyValues = true;
                internalValueResult.disableZaraz = this._disableZaraz;
            }
            if (this._edgeCacheTtl !== undefined) {
                hasAnyValues = true;
                internalValueResult.edgeCacheTtl = this._edgeCacheTtl;
            }
            if (this._emailObfuscation !== undefined) {
                hasAnyValues = true;
                internalValueResult.emailObfuscation = this._emailObfuscation;
            }
            if (this._explicitCacheControl !== undefined) {
                hasAnyValues = true;
                internalValueResult.explicitCacheControl = this._explicitCacheControl;
            }
            if (((_c = this._forwardingUrl) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.forwardingUrl = (_d = this._forwardingUrl) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (this._hostHeaderOverride !== undefined) {
                hasAnyValues = true;
                internalValueResult.hostHeaderOverride = this._hostHeaderOverride;
            }
            if (this._ipGeolocation !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipGeolocation = this._ipGeolocation;
            }
            if (this._mirage !== undefined) {
                hasAnyValues = true;
                internalValueResult.mirage = this._mirage;
            }
            if (this._opportunisticEncryption !== undefined) {
                hasAnyValues = true;
                internalValueResult.opportunisticEncryption = this._opportunisticEncryption;
            }
            if (this._originErrorPagePassThru !== undefined) {
                hasAnyValues = true;
                internalValueResult.originErrorPagePassThru = this._originErrorPagePassThru;
            }
            if (this._polish !== undefined) {
                hasAnyValues = true;
                internalValueResult.polish = this._polish;
            }
            if (this._resolveOverride !== undefined) {
                hasAnyValues = true;
                internalValueResult.resolveOverride = this._resolveOverride;
            }
            if (this._respectStrongEtag !== undefined) {
                hasAnyValues = true;
                internalValueResult.respectStrongEtag = this._respectStrongEtag;
            }
            if (this._responseBuffering !== undefined) {
                hasAnyValues = true;
                internalValueResult.responseBuffering = this._responseBuffering;
            }
            if (this._rocketLoader !== undefined) {
                hasAnyValues = true;
                internalValueResult.rocketLoader = this._rocketLoader;
            }
            if (this._securityLevel !== undefined) {
                hasAnyValues = true;
                internalValueResult.securityLevel = this._securityLevel;
            }
            if (this._sortQueryStringForCache !== undefined) {
                hasAnyValues = true;
                internalValueResult.sortQueryStringForCache = this._sortQueryStringForCache;
            }
            if (this._ssl !== undefined) {
                hasAnyValues = true;
                internalValueResult.ssl = this._ssl;
            }
            if (this._trueClientIpHeader !== undefined) {
                hasAnyValues = true;
                internalValueResult.trueClientIpHeader = this._trueClientIpHeader;
            }
            if (this._waf !== undefined) {
                hasAnyValues = true;
                internalValueResult.waf = this._waf;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._alwaysUseHttps = undefined;
                this._automaticHttpsRewrites = undefined;
                this._browserCacheTtl = undefined;
                this._browserCheck = undefined;
                this._bypassCacheOnCookie = undefined;
                this._cacheByDeviceType = undefined;
                this._cacheDeceptionArmor = undefined;
                this._cacheKeyFields.internalValue = undefined;
                this._cacheLevel = undefined;
                this._cacheOnCookie = undefined;
                this._cacheTtlByStatus = undefined;
                this._disableApps = undefined;
                this._disablePerformance = undefined;
                this._disableSecurity = undefined;
                this._disableZaraz = undefined;
                this._edgeCacheTtl = undefined;
                this._emailObfuscation = undefined;
                this._explicitCacheControl = undefined;
                this._forwardingUrl.internalValue = undefined;
                this._hostHeaderOverride = undefined;
                this._ipGeolocation = undefined;
                this._mirage = undefined;
                this._opportunisticEncryption = undefined;
                this._originErrorPagePassThru = undefined;
                this._polish = undefined;
                this._resolveOverride = undefined;
                this._respectStrongEtag = undefined;
                this._responseBuffering = undefined;
                this._rocketLoader = undefined;
                this._securityLevel = undefined;
                this._sortQueryStringForCache = undefined;
                this._ssl = undefined;
                this._trueClientIpHeader = undefined;
                this._waf = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._alwaysUseHttps = value.alwaysUseHttps;
                this._automaticHttpsRewrites = value.automaticHttpsRewrites;
                this._browserCacheTtl = value.browserCacheTtl;
                this._browserCheck = value.browserCheck;
                this._bypassCacheOnCookie = value.bypassCacheOnCookie;
                this._cacheByDeviceType = value.cacheByDeviceType;
                this._cacheDeceptionArmor = value.cacheDeceptionArmor;
                this._cacheKeyFields.internalValue = value.cacheKeyFields;
                this._cacheLevel = value.cacheLevel;
                this._cacheOnCookie = value.cacheOnCookie;
                this._cacheTtlByStatus = value.cacheTtlByStatus;
                this._disableApps = value.disableApps;
                this._disablePerformance = value.disablePerformance;
                this._disableSecurity = value.disableSecurity;
                this._disableZaraz = value.disableZaraz;
                this._edgeCacheTtl = value.edgeCacheTtl;
                this._emailObfuscation = value.emailObfuscation;
                this._explicitCacheControl = value.explicitCacheControl;
                this._forwardingUrl.internalValue = value.forwardingUrl;
                this._hostHeaderOverride = value.hostHeaderOverride;
                this._ipGeolocation = value.ipGeolocation;
                this._mirage = value.mirage;
                this._opportunisticEncryption = value.opportunisticEncryption;
                this._originErrorPagePassThru = value.originErrorPagePassThru;
                this._polish = value.polish;
                this._resolveOverride = value.resolveOverride;
                this._respectStrongEtag = value.respectStrongEtag;
                this._responseBuffering = value.responseBuffering;
                this._rocketLoader = value.rocketLoader;
                this._securityLevel = value.securityLevel;
                this._sortQueryStringForCache = value.sortQueryStringForCache;
                this._ssl = value.ssl;
                this._trueClientIpHeader = value.trueClientIpHeader;
                this._waf = value.waf;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "alwaysUseHttps", {
        get: function () {
            return this.getBooleanAttribute('always_use_https');
        },
        set: function (value) {
            this._alwaysUseHttps = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetAlwaysUseHttps = function () {
        this._alwaysUseHttps = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "alwaysUseHttpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alwaysUseHttps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "automaticHttpsRewrites", {
        get: function () {
            return this.getStringAttribute('automatic_https_rewrites');
        },
        set: function (value) {
            this._automaticHttpsRewrites = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetAutomaticHttpsRewrites = function () {
        this._automaticHttpsRewrites = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "automaticHttpsRewritesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._automaticHttpsRewrites;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "browserCacheTtl", {
        get: function () {
            return this.getNumberAttribute('browser_cache_ttl');
        },
        set: function (value) {
            this._browserCacheTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetBrowserCacheTtl = function () {
        this._browserCacheTtl = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "browserCacheTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._browserCacheTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "browserCheck", {
        get: function () {
            return this.getStringAttribute('browser_check');
        },
        set: function (value) {
            this._browserCheck = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetBrowserCheck = function () {
        this._browserCheck = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "browserCheckInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._browserCheck;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "bypassCacheOnCookie", {
        get: function () {
            return this.getStringAttribute('bypass_cache_on_cookie');
        },
        set: function (value) {
            this._bypassCacheOnCookie = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetBypassCacheOnCookie = function () {
        this._bypassCacheOnCookie = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "bypassCacheOnCookieInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bypassCacheOnCookie;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "cacheByDeviceType", {
        get: function () {
            return this.getStringAttribute('cache_by_device_type');
        },
        set: function (value) {
            this._cacheByDeviceType = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetCacheByDeviceType = function () {
        this._cacheByDeviceType = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "cacheByDeviceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cacheByDeviceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "cacheDeceptionArmor", {
        get: function () {
            return this.getStringAttribute('cache_deception_armor');
        },
        set: function (value) {
            this._cacheDeceptionArmor = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetCacheDeceptionArmor = function () {
        this._cacheDeceptionArmor = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "cacheDeceptionArmorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cacheDeceptionArmor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "cacheKeyFields", {
        get: function () {
            return this._cacheKeyFields;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.putCacheKeyFields = function (value) {
        this._cacheKeyFields.internalValue = value;
    };
    PageRuleActionsOutputReference.prototype.resetCacheKeyFields = function () {
        this._cacheKeyFields.internalValue = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "cacheKeyFieldsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cacheKeyFields.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "cacheLevel", {
        get: function () {
            return this.getStringAttribute('cache_level');
        },
        set: function (value) {
            this._cacheLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetCacheLevel = function () {
        this._cacheLevel = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "cacheLevelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cacheLevel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "cacheOnCookie", {
        get: function () {
            return this.getStringAttribute('cache_on_cookie');
        },
        set: function (value) {
            this._cacheOnCookie = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetCacheOnCookie = function () {
        this._cacheOnCookie = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "cacheOnCookieInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cacheOnCookie;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "cacheTtlByStatus", {
        get: function () {
            return this.getStringMapAttribute('cache_ttl_by_status');
        },
        set: function (value) {
            this._cacheTtlByStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetCacheTtlByStatus = function () {
        this._cacheTtlByStatus = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "cacheTtlByStatusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cacheTtlByStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "disableApps", {
        get: function () {
            return this.getBooleanAttribute('disable_apps');
        },
        set: function (value) {
            this._disableApps = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetDisableApps = function () {
        this._disableApps = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "disableAppsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableApps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "disablePerformance", {
        get: function () {
            return this.getBooleanAttribute('disable_performance');
        },
        set: function (value) {
            this._disablePerformance = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetDisablePerformance = function () {
        this._disablePerformance = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "disablePerformanceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disablePerformance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "disableSecurity", {
        get: function () {
            return this.getBooleanAttribute('disable_security');
        },
        set: function (value) {
            this._disableSecurity = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetDisableSecurity = function () {
        this._disableSecurity = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "disableSecurityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableSecurity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "disableZaraz", {
        get: function () {
            return this.getBooleanAttribute('disable_zaraz');
        },
        set: function (value) {
            this._disableZaraz = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetDisableZaraz = function () {
        this._disableZaraz = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "disableZarazInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableZaraz;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "edgeCacheTtl", {
        get: function () {
            return this.getNumberAttribute('edge_cache_ttl');
        },
        set: function (value) {
            this._edgeCacheTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetEdgeCacheTtl = function () {
        this._edgeCacheTtl = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "edgeCacheTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._edgeCacheTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "emailObfuscation", {
        get: function () {
            return this.getStringAttribute('email_obfuscation');
        },
        set: function (value) {
            this._emailObfuscation = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetEmailObfuscation = function () {
        this._emailObfuscation = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "emailObfuscationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._emailObfuscation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "explicitCacheControl", {
        get: function () {
            return this.getStringAttribute('explicit_cache_control');
        },
        set: function (value) {
            this._explicitCacheControl = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetExplicitCacheControl = function () {
        this._explicitCacheControl = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "explicitCacheControlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._explicitCacheControl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "forwardingUrl", {
        get: function () {
            return this._forwardingUrl;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.putForwardingUrl = function (value) {
        this._forwardingUrl.internalValue = value;
    };
    PageRuleActionsOutputReference.prototype.resetForwardingUrl = function () {
        this._forwardingUrl.internalValue = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "forwardingUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forwardingUrl.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "hostHeaderOverride", {
        get: function () {
            return this.getStringAttribute('host_header_override');
        },
        set: function (value) {
            this._hostHeaderOverride = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetHostHeaderOverride = function () {
        this._hostHeaderOverride = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "hostHeaderOverrideInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostHeaderOverride;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "ipGeolocation", {
        get: function () {
            return this.getStringAttribute('ip_geolocation');
        },
        set: function (value) {
            this._ipGeolocation = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetIpGeolocation = function () {
        this._ipGeolocation = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "ipGeolocationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipGeolocation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "mirage", {
        get: function () {
            return this.getStringAttribute('mirage');
        },
        set: function (value) {
            this._mirage = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetMirage = function () {
        this._mirage = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "mirageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mirage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "opportunisticEncryption", {
        get: function () {
            return this.getStringAttribute('opportunistic_encryption');
        },
        set: function (value) {
            this._opportunisticEncryption = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetOpportunisticEncryption = function () {
        this._opportunisticEncryption = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "opportunisticEncryptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._opportunisticEncryption;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "originErrorPagePassThru", {
        get: function () {
            return this.getStringAttribute('origin_error_page_pass_thru');
        },
        set: function (value) {
            this._originErrorPagePassThru = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetOriginErrorPagePassThru = function () {
        this._originErrorPagePassThru = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "originErrorPagePassThruInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._originErrorPagePassThru;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "polish", {
        get: function () {
            return this.getStringAttribute('polish');
        },
        set: function (value) {
            this._polish = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetPolish = function () {
        this._polish = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "polishInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._polish;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "resolveOverride", {
        get: function () {
            return this.getStringAttribute('resolve_override');
        },
        set: function (value) {
            this._resolveOverride = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetResolveOverride = function () {
        this._resolveOverride = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "resolveOverrideInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resolveOverride;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "respectStrongEtag", {
        get: function () {
            return this.getStringAttribute('respect_strong_etag');
        },
        set: function (value) {
            this._respectStrongEtag = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetRespectStrongEtag = function () {
        this._respectStrongEtag = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "respectStrongEtagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._respectStrongEtag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "responseBuffering", {
        get: function () {
            return this.getStringAttribute('response_buffering');
        },
        set: function (value) {
            this._responseBuffering = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetResponseBuffering = function () {
        this._responseBuffering = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "responseBufferingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._responseBuffering;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "rocketLoader", {
        get: function () {
            return this.getStringAttribute('rocket_loader');
        },
        set: function (value) {
            this._rocketLoader = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetRocketLoader = function () {
        this._rocketLoader = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "rocketLoaderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rocketLoader;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "securityLevel", {
        get: function () {
            return this.getStringAttribute('security_level');
        },
        set: function (value) {
            this._securityLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetSecurityLevel = function () {
        this._securityLevel = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "securityLevelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityLevel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "sortQueryStringForCache", {
        get: function () {
            return this.getStringAttribute('sort_query_string_for_cache');
        },
        set: function (value) {
            this._sortQueryStringForCache = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetSortQueryStringForCache = function () {
        this._sortQueryStringForCache = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "sortQueryStringForCacheInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sortQueryStringForCache;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "ssl", {
        get: function () {
            return this.getStringAttribute('ssl');
        },
        set: function (value) {
            this._ssl = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetSsl = function () {
        this._ssl = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "sslInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ssl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "trueClientIpHeader", {
        get: function () {
            return this.getStringAttribute('true_client_ip_header');
        },
        set: function (value) {
            this._trueClientIpHeader = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetTrueClientIpHeader = function () {
        this._trueClientIpHeader = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "trueClientIpHeaderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._trueClientIpHeader;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "waf", {
        get: function () {
            return this.getStringAttribute('waf');
        },
        set: function (value) {
            this._waf = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRuleActionsOutputReference.prototype.resetWaf = function () {
        this._waf = undefined;
    };
    Object.defineProperty(PageRuleActionsOutputReference.prototype, "wafInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._waf;
        },
        enumerable: false,
        configurable: true
    });
    return PageRuleActionsOutputReference;
}(cdktf.ComplexObject));
exports.PageRuleActionsOutputReference = PageRuleActionsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule cloudflare_page_rule}
*/
var PageRule = /** @class */ (function (_super) {
    __extends(PageRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule cloudflare_page_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PageRuleConfig
    */
    function PageRule(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_page_rule',
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
        // actions - computed: false, optional: false, required: true
        _this._actions = new PageRuleActionsOutputReference(_this, "actions");
        _this._actions.internalValue = config.actions;
        _this._priority = config.priority;
        _this._status = config.status;
        _this._target = config.target;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a PageRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PageRule to import
    * @param importFromId The id of the existing PageRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PageRule to import is found
    */
    PageRule.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_page_rule", importId: importFromId, provider: provider });
    };
    Object.defineProperty(PageRule.prototype, "actions", {
        get: function () {
            return this._actions;
        },
        enumerable: false,
        configurable: true
    });
    PageRule.prototype.putActions = function (value) {
        this._actions.internalValue = value;
    };
    Object.defineProperty(PageRule.prototype, "actionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._actions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRule.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRule.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRule.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRule.prototype, "priority", {
        get: function () {
            return this.getNumberAttribute('priority');
        },
        set: function (value) {
            this._priority = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRule.prototype.resetPriority = function () {
        this._priority = undefined;
    };
    Object.defineProperty(PageRule.prototype, "priorityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._priority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRule.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRule.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(PageRule.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRule.prototype, "target", {
        get: function () {
            return this.getStringAttribute('target');
        },
        set: function (value) {
            this._target = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRule.prototype, "targetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageRule.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    PageRule.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(PageRule.prototype, "zoneIdInput", {
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
    PageRule.prototype.synthesizeAttributes = function () {
        return {
            actions: pageRuleActionsToTerraform(this._actions.internalValue),
            priority: cdktf.numberToTerraform(this._priority),
            status: cdktf.stringToTerraform(this._status),
            target: cdktf.stringToTerraform(this._target),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    PageRule.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            actions: {
                value: pageRuleActionsToHclTerraform(this._actions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "PageRuleActions",
            },
            priority: {
                value: cdktf.numberToHclTerraform(this._priority),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            status: {
                value: cdktf.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target: {
                value: cdktf.stringToHclTerraform(this._target),
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
    PageRule.tfResourceType = "cloudflare_page_rule";
    return PageRule;
}(cdktf.TerraformResource));
exports.PageRule = PageRule;
