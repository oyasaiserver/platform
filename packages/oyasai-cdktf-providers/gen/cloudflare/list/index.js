"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list
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
exports.List = exports.ListItemsList = exports.ListItemsOutputReference = exports.ListItemsRedirectOutputReference = exports.ListItemsHostnameOutputReference = void 0;
exports.listItemsHostnameToTerraform = listItemsHostnameToTerraform;
exports.listItemsHostnameToHclTerraform = listItemsHostnameToHclTerraform;
exports.listItemsRedirectToTerraform = listItemsRedirectToTerraform;
exports.listItemsRedirectToHclTerraform = listItemsRedirectToHclTerraform;
exports.listItemsToTerraform = listItemsToTerraform;
exports.listItemsToHclTerraform = listItemsToHclTerraform;
var cdktf = require("cdktf");
function listItemsHostnameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        exclude_exact_hostname: cdktf.booleanToTerraform(struct.excludeExactHostname),
        url_hostname: cdktf.stringToTerraform(struct.urlHostname),
    };
}
function listItemsHostnameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        exclude_exact_hostname: {
            value: cdktf.booleanToHclTerraform(struct.excludeExactHostname),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        url_hostname: {
            value: cdktf.stringToHclTerraform(struct.urlHostname),
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
var ListItemsHostnameOutputReference = /** @class */ (function (_super) {
    __extends(ListItemsHostnameOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ListItemsHostnameOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ListItemsHostnameOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._excludeExactHostname !== undefined) {
                hasAnyValues = true;
                internalValueResult.excludeExactHostname = this._excludeExactHostname;
            }
            if (this._urlHostname !== undefined) {
                hasAnyValues = true;
                internalValueResult.urlHostname = this._urlHostname;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._excludeExactHostname = undefined;
                this._urlHostname = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._excludeExactHostname = value.excludeExactHostname;
                this._urlHostname = value.urlHostname;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItemsHostnameOutputReference.prototype, "excludeExactHostname", {
        get: function () {
            return this.getBooleanAttribute('exclude_exact_hostname');
        },
        set: function (value) {
            this._excludeExactHostname = value;
        },
        enumerable: false,
        configurable: true
    });
    ListItemsHostnameOutputReference.prototype.resetExcludeExactHostname = function () {
        this._excludeExactHostname = undefined;
    };
    Object.defineProperty(ListItemsHostnameOutputReference.prototype, "excludeExactHostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._excludeExactHostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItemsHostnameOutputReference.prototype, "urlHostname", {
        get: function () {
            return this.getStringAttribute('url_hostname');
        },
        set: function (value) {
            this._urlHostname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItemsHostnameOutputReference.prototype, "urlHostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._urlHostname;
        },
        enumerable: false,
        configurable: true
    });
    return ListItemsHostnameOutputReference;
}(cdktf.ComplexObject));
exports.ListItemsHostnameOutputReference = ListItemsHostnameOutputReference;
function listItemsRedirectToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        include_subdomains: cdktf.booleanToTerraform(struct.includeSubdomains),
        preserve_path_suffix: cdktf.booleanToTerraform(struct.preservePathSuffix),
        preserve_query_string: cdktf.booleanToTerraform(struct.preserveQueryString),
        source_url: cdktf.stringToTerraform(struct.sourceUrl),
        status_code: cdktf.numberToTerraform(struct.statusCode),
        subpath_matching: cdktf.booleanToTerraform(struct.subpathMatching),
        target_url: cdktf.stringToTerraform(struct.targetUrl),
    };
}
function listItemsRedirectToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        include_subdomains: {
            value: cdktf.booleanToHclTerraform(struct.includeSubdomains),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        preserve_path_suffix: {
            value: cdktf.booleanToHclTerraform(struct.preservePathSuffix),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        preserve_query_string: {
            value: cdktf.booleanToHclTerraform(struct.preserveQueryString),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        source_url: {
            value: cdktf.stringToHclTerraform(struct.sourceUrl),
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
        subpath_matching: {
            value: cdktf.booleanToHclTerraform(struct.subpathMatching),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        target_url: {
            value: cdktf.stringToHclTerraform(struct.targetUrl),
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
var ListItemsRedirectOutputReference = /** @class */ (function (_super) {
    __extends(ListItemsRedirectOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ListItemsRedirectOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ListItemsRedirectOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._includeSubdomains !== undefined) {
                hasAnyValues = true;
                internalValueResult.includeSubdomains = this._includeSubdomains;
            }
            if (this._preservePathSuffix !== undefined) {
                hasAnyValues = true;
                internalValueResult.preservePathSuffix = this._preservePathSuffix;
            }
            if (this._preserveQueryString !== undefined) {
                hasAnyValues = true;
                internalValueResult.preserveQueryString = this._preserveQueryString;
            }
            if (this._sourceUrl !== undefined) {
                hasAnyValues = true;
                internalValueResult.sourceUrl = this._sourceUrl;
            }
            if (this._statusCode !== undefined) {
                hasAnyValues = true;
                internalValueResult.statusCode = this._statusCode;
            }
            if (this._subpathMatching !== undefined) {
                hasAnyValues = true;
                internalValueResult.subpathMatching = this._subpathMatching;
            }
            if (this._targetUrl !== undefined) {
                hasAnyValues = true;
                internalValueResult.targetUrl = this._targetUrl;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._includeSubdomains = undefined;
                this._preservePathSuffix = undefined;
                this._preserveQueryString = undefined;
                this._sourceUrl = undefined;
                this._statusCode = undefined;
                this._subpathMatching = undefined;
                this._targetUrl = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._includeSubdomains = value.includeSubdomains;
                this._preservePathSuffix = value.preservePathSuffix;
                this._preserveQueryString = value.preserveQueryString;
                this._sourceUrl = value.sourceUrl;
                this._statusCode = value.statusCode;
                this._subpathMatching = value.subpathMatching;
                this._targetUrl = value.targetUrl;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItemsRedirectOutputReference.prototype, "includeSubdomains", {
        get: function () {
            return this.getBooleanAttribute('include_subdomains');
        },
        set: function (value) {
            this._includeSubdomains = value;
        },
        enumerable: false,
        configurable: true
    });
    ListItemsRedirectOutputReference.prototype.resetIncludeSubdomains = function () {
        this._includeSubdomains = undefined;
    };
    Object.defineProperty(ListItemsRedirectOutputReference.prototype, "includeSubdomainsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includeSubdomains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItemsRedirectOutputReference.prototype, "preservePathSuffix", {
        get: function () {
            return this.getBooleanAttribute('preserve_path_suffix');
        },
        set: function (value) {
            this._preservePathSuffix = value;
        },
        enumerable: false,
        configurable: true
    });
    ListItemsRedirectOutputReference.prototype.resetPreservePathSuffix = function () {
        this._preservePathSuffix = undefined;
    };
    Object.defineProperty(ListItemsRedirectOutputReference.prototype, "preservePathSuffixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preservePathSuffix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItemsRedirectOutputReference.prototype, "preserveQueryString", {
        get: function () {
            return this.getBooleanAttribute('preserve_query_string');
        },
        set: function (value) {
            this._preserveQueryString = value;
        },
        enumerable: false,
        configurable: true
    });
    ListItemsRedirectOutputReference.prototype.resetPreserveQueryString = function () {
        this._preserveQueryString = undefined;
    };
    Object.defineProperty(ListItemsRedirectOutputReference.prototype, "preserveQueryStringInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preserveQueryString;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItemsRedirectOutputReference.prototype, "sourceUrl", {
        get: function () {
            return this.getStringAttribute('source_url');
        },
        set: function (value) {
            this._sourceUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItemsRedirectOutputReference.prototype, "sourceUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItemsRedirectOutputReference.prototype, "statusCode", {
        get: function () {
            return this.getNumberAttribute('status_code');
        },
        set: function (value) {
            this._statusCode = value;
        },
        enumerable: false,
        configurable: true
    });
    ListItemsRedirectOutputReference.prototype.resetStatusCode = function () {
        this._statusCode = undefined;
    };
    Object.defineProperty(ListItemsRedirectOutputReference.prototype, "statusCodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._statusCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItemsRedirectOutputReference.prototype, "subpathMatching", {
        get: function () {
            return this.getBooleanAttribute('subpath_matching');
        },
        set: function (value) {
            this._subpathMatching = value;
        },
        enumerable: false,
        configurable: true
    });
    ListItemsRedirectOutputReference.prototype.resetSubpathMatching = function () {
        this._subpathMatching = undefined;
    };
    Object.defineProperty(ListItemsRedirectOutputReference.prototype, "subpathMatchingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subpathMatching;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItemsRedirectOutputReference.prototype, "targetUrl", {
        get: function () {
            return this.getStringAttribute('target_url');
        },
        set: function (value) {
            this._targetUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItemsRedirectOutputReference.prototype, "targetUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetUrl;
        },
        enumerable: false,
        configurable: true
    });
    return ListItemsRedirectOutputReference;
}(cdktf.ComplexObject));
exports.ListItemsRedirectOutputReference = ListItemsRedirectOutputReference;
function listItemsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        asn: cdktf.numberToTerraform(struct.asn),
        comment: cdktf.stringToTerraform(struct.comment),
        hostname: listItemsHostnameToTerraform(struct.hostname),
        ip: cdktf.stringToTerraform(struct.ip),
        redirect: listItemsRedirectToTerraform(struct.redirect),
    };
}
function listItemsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        asn: {
            value: cdktf.numberToHclTerraform(struct.asn),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        comment: {
            value: cdktf.stringToHclTerraform(struct.comment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hostname: {
            value: listItemsHostnameToHclTerraform(struct.hostname),
            isBlock: true,
            type: "struct",
            storageClassType: "ListItemsHostname",
        },
        ip: {
            value: cdktf.stringToHclTerraform(struct.ip),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        redirect: {
            value: listItemsRedirectToHclTerraform(struct.redirect),
            isBlock: true,
            type: "struct",
            storageClassType: "ListItemsRedirect",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ListItemsOutputReference = /** @class */ (function (_super) {
    __extends(ListItemsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ListItemsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // hostname - computed: false, optional: true, required: false
        _this._hostname = new ListItemsHostnameOutputReference(_this, "hostname");
        // redirect - computed: false, optional: true, required: false
        _this._redirect = new ListItemsRedirectOutputReference(_this, "redirect");
        return _this;
    }
    Object.defineProperty(ListItemsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._asn !== undefined) {
                hasAnyValues = true;
                internalValueResult.asn = this._asn;
            }
            if (this._comment !== undefined) {
                hasAnyValues = true;
                internalValueResult.comment = this._comment;
            }
            if (((_a = this._hostname) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.hostname = (_b = this._hostname) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._ip !== undefined) {
                hasAnyValues = true;
                internalValueResult.ip = this._ip;
            }
            if (((_c = this._redirect) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.redirect = (_d = this._redirect) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._asn = undefined;
                this._comment = undefined;
                this._hostname.internalValue = undefined;
                this._ip = undefined;
                this._redirect.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._asn = value.asn;
                this._comment = value.comment;
                this._hostname.internalValue = value.hostname;
                this._ip = value.ip;
                this._redirect.internalValue = value.redirect;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItemsOutputReference.prototype, "asn", {
        get: function () {
            return this.getNumberAttribute('asn');
        },
        set: function (value) {
            this._asn = value;
        },
        enumerable: false,
        configurable: true
    });
    ListItemsOutputReference.prototype.resetAsn = function () {
        this._asn = undefined;
    };
    Object.defineProperty(ListItemsOutputReference.prototype, "asnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._asn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItemsOutputReference.prototype, "comment", {
        get: function () {
            return this.getStringAttribute('comment');
        },
        set: function (value) {
            this._comment = value;
        },
        enumerable: false,
        configurable: true
    });
    ListItemsOutputReference.prototype.resetComment = function () {
        this._comment = undefined;
    };
    Object.defineProperty(ListItemsOutputReference.prototype, "commentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._comment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItemsOutputReference.prototype, "hostname", {
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    ListItemsOutputReference.prototype.putHostname = function (value) {
        this._hostname.internalValue = value;
    };
    ListItemsOutputReference.prototype.resetHostname = function () {
        this._hostname.internalValue = undefined;
    };
    Object.defineProperty(ListItemsOutputReference.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItemsOutputReference.prototype, "ip", {
        get: function () {
            return this.getStringAttribute('ip');
        },
        set: function (value) {
            this._ip = value;
        },
        enumerable: false,
        configurable: true
    });
    ListItemsOutputReference.prototype.resetIp = function () {
        this._ip = undefined;
    };
    Object.defineProperty(ListItemsOutputReference.prototype, "ipInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItemsOutputReference.prototype, "redirect", {
        get: function () {
            return this._redirect;
        },
        enumerable: false,
        configurable: true
    });
    ListItemsOutputReference.prototype.putRedirect = function (value) {
        this._redirect.internalValue = value;
    };
    ListItemsOutputReference.prototype.resetRedirect = function () {
        this._redirect.internalValue = undefined;
    };
    Object.defineProperty(ListItemsOutputReference.prototype, "redirectInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._redirect.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ListItemsOutputReference;
}(cdktf.ComplexObject));
exports.ListItemsOutputReference = ListItemsOutputReference;
var ListItemsList = /** @class */ (function (_super) {
    __extends(ListItemsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ListItemsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ListItemsList.prototype.get = function (index) {
        return new ListItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ListItemsList;
}(cdktf.ComplexList));
exports.ListItemsList = ListItemsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list cloudflare_list}
*/
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list cloudflare_list} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ListConfig
    */
    function List(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_list',
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
        // items - computed: false, optional: true, required: false
        _this._items = new ListItemsList(_this, "items", true);
        _this._accountId = config.accountId;
        _this._description = config.description;
        _this._items.internalValue = config.items;
        _this._kind = config.kind;
        _this._name = config.name;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a List resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the List to import
    * @param importFromId The id of the existing List that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the List to import is found
    */
    List.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_list", importId: importFromId, provider: provider });
    };
    Object.defineProperty(List.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    List.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(List.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    List.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(List.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: false,
        configurable: true
    });
    List.prototype.putItems = function (value) {
        this._items.internalValue = value;
    };
    List.prototype.resetItems = function () {
        this._items.internalValue = undefined;
    };
    Object.defineProperty(List.prototype, "itemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._items.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "kind", {
        get: function () {
            return this.getStringAttribute('kind');
        },
        set: function (value) {
            this._kind = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "kindInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kind;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "numItems", {
        // num_items - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('num_items');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "numReferencingFilters", {
        // num_referencing_filters - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('num_referencing_filters');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    List.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            description: cdktf.stringToTerraform(this._description),
            items: cdktf.listMapper(listItemsToTerraform, false)(this._items.internalValue),
            kind: cdktf.stringToTerraform(this._kind),
            name: cdktf.stringToTerraform(this._name),
        };
    };
    List.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            items: {
                value: cdktf.listMapperHcl(listItemsToHclTerraform, false)(this._items.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ListItemsList",
            },
            kind: {
                value: cdktf.stringToHclTerraform(this._kind),
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
    List.tfResourceType = "cloudflare_list";
    return List;
}(cdktf.TerraformResource));
exports.List = List;
