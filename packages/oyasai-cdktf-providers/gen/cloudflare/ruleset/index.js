"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset
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
exports.RulesetRulesActionParametersSMaxageOutputReference = exports.RulesetRulesActionParametersResponseFieldsList = exports.RulesetRulesActionParametersResponseFieldsOutputReference = exports.RulesetRulesActionParametersResponseOutputReference = exports.RulesetRulesActionParametersRequestFieldsList = exports.RulesetRulesActionParametersRequestFieldsOutputReference = exports.RulesetRulesActionParametersRawResponseFieldsList = exports.RulesetRulesActionParametersRawResponseFieldsOutputReference = exports.RulesetRulesActionParametersPublicOutputReference = exports.RulesetRulesActionParametersProxyRevalidateOutputReference = exports.RulesetRulesActionParametersPrivateOutputReference = exports.RulesetRulesActionParametersOverridesOutputReference = exports.RulesetRulesActionParametersOverridesRulesList = exports.RulesetRulesActionParametersOverridesRulesOutputReference = exports.RulesetRulesActionParametersOverridesCategoriesList = exports.RulesetRulesActionParametersOverridesCategoriesOutputReference = exports.RulesetRulesActionParametersOriginOutputReference = exports.RulesetRulesActionParametersNoTransformOutputReference = exports.RulesetRulesActionParametersNoStoreOutputReference = exports.RulesetRulesActionParametersNoCacheOutputReference = exports.RulesetRulesActionParametersMustUnderstandOutputReference = exports.RulesetRulesActionParametersMustRevalidateOutputReference = exports.RulesetRulesActionParametersMaxAgeOutputReference = exports.RulesetRulesActionParametersMatchedDataOutputReference = exports.RulesetRulesActionParametersImmutableOutputReference = exports.RulesetRulesActionParametersHeadersMap = exports.RulesetRulesActionParametersHeadersOutputReference = exports.RulesetRulesActionParametersFromValueOutputReference = exports.RulesetRulesActionParametersFromValueTargetUrlOutputReference = exports.RulesetRulesActionParametersFromListStructOutputReference = exports.RulesetRulesActionParametersEdgeTtlOutputReference = exports.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList = exports.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference = exports.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference = exports.RulesetRulesActionParametersCookieFieldsList = exports.RulesetRulesActionParametersCookieFieldsOutputReference = exports.RulesetRulesActionParametersCacheReserveOutputReference = exports.RulesetRulesActionParametersCacheKeyOutputReference = exports.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference = exports.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference = exports.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference = exports.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference = exports.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference = exports.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference = exports.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference = exports.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference = exports.RulesetRulesActionParametersBrowserTtlOutputReference = exports.RulesetRulesActionParametersAutominifyOutputReference = exports.RulesetRulesActionParametersAlgorithmsList = exports.RulesetRulesActionParametersAlgorithmsOutputReference = void 0;
exports.Ruleset = exports.RulesetRulesList = exports.RulesetRulesOutputReference = exports.RulesetRulesRatelimitOutputReference = exports.RulesetRulesLoggingOutputReference = exports.RulesetRulesExposedCredentialCheckOutputReference = exports.RulesetRulesActionParametersOutputReference = exports.RulesetRulesActionParametersUriOutputReference = exports.RulesetRulesActionParametersUriQueryOutputReference = exports.RulesetRulesActionParametersUriPathOutputReference = exports.RulesetRulesActionParametersTransformedRequestFieldsList = exports.RulesetRulesActionParametersTransformedRequestFieldsOutputReference = exports.RulesetRulesActionParametersStaleWhileRevalidateOutputReference = exports.RulesetRulesActionParametersStaleIfErrorOutputReference = exports.RulesetRulesActionParametersSniOutputReference = exports.RulesetRulesActionParametersServeStaleOutputReference = void 0;
exports.rulesetRulesActionParametersAlgorithmsToTerraform = rulesetRulesActionParametersAlgorithmsToTerraform;
exports.rulesetRulesActionParametersAlgorithmsToHclTerraform = rulesetRulesActionParametersAlgorithmsToHclTerraform;
exports.rulesetRulesActionParametersAutominifyToTerraform = rulesetRulesActionParametersAutominifyToTerraform;
exports.rulesetRulesActionParametersAutominifyToHclTerraform = rulesetRulesActionParametersAutominifyToHclTerraform;
exports.rulesetRulesActionParametersBrowserTtlToTerraform = rulesetRulesActionParametersBrowserTtlToTerraform;
exports.rulesetRulesActionParametersBrowserTtlToHclTerraform = rulesetRulesActionParametersBrowserTtlToHclTerraform;
exports.rulesetRulesActionParametersCacheKeyCustomKeyCookieToTerraform = rulesetRulesActionParametersCacheKeyCustomKeyCookieToTerraform;
exports.rulesetRulesActionParametersCacheKeyCustomKeyCookieToHclTerraform = rulesetRulesActionParametersCacheKeyCustomKeyCookieToHclTerraform;
exports.rulesetRulesActionParametersCacheKeyCustomKeyHeaderToTerraform = rulesetRulesActionParametersCacheKeyCustomKeyHeaderToTerraform;
exports.rulesetRulesActionParametersCacheKeyCustomKeyHeaderToHclTerraform = rulesetRulesActionParametersCacheKeyCustomKeyHeaderToHclTerraform;
exports.rulesetRulesActionParametersCacheKeyCustomKeyHostToTerraform = rulesetRulesActionParametersCacheKeyCustomKeyHostToTerraform;
exports.rulesetRulesActionParametersCacheKeyCustomKeyHostToHclTerraform = rulesetRulesActionParametersCacheKeyCustomKeyHostToHclTerraform;
exports.rulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeToTerraform = rulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeToTerraform;
exports.rulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeToHclTerraform = rulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeToHclTerraform;
exports.rulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeToTerraform = rulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeToTerraform;
exports.rulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeToHclTerraform = rulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeToHclTerraform;
exports.rulesetRulesActionParametersCacheKeyCustomKeyQueryStringToTerraform = rulesetRulesActionParametersCacheKeyCustomKeyQueryStringToTerraform;
exports.rulesetRulesActionParametersCacheKeyCustomKeyQueryStringToHclTerraform = rulesetRulesActionParametersCacheKeyCustomKeyQueryStringToHclTerraform;
exports.rulesetRulesActionParametersCacheKeyCustomKeyUserToTerraform = rulesetRulesActionParametersCacheKeyCustomKeyUserToTerraform;
exports.rulesetRulesActionParametersCacheKeyCustomKeyUserToHclTerraform = rulesetRulesActionParametersCacheKeyCustomKeyUserToHclTerraform;
exports.rulesetRulesActionParametersCacheKeyCustomKeyToTerraform = rulesetRulesActionParametersCacheKeyCustomKeyToTerraform;
exports.rulesetRulesActionParametersCacheKeyCustomKeyToHclTerraform = rulesetRulesActionParametersCacheKeyCustomKeyToHclTerraform;
exports.rulesetRulesActionParametersCacheKeyToTerraform = rulesetRulesActionParametersCacheKeyToTerraform;
exports.rulesetRulesActionParametersCacheKeyToHclTerraform = rulesetRulesActionParametersCacheKeyToHclTerraform;
exports.rulesetRulesActionParametersCacheReserveToTerraform = rulesetRulesActionParametersCacheReserveToTerraform;
exports.rulesetRulesActionParametersCacheReserveToHclTerraform = rulesetRulesActionParametersCacheReserveToHclTerraform;
exports.rulesetRulesActionParametersCookieFieldsToTerraform = rulesetRulesActionParametersCookieFieldsToTerraform;
exports.rulesetRulesActionParametersCookieFieldsToHclTerraform = rulesetRulesActionParametersCookieFieldsToHclTerraform;
exports.rulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToTerraform = rulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToTerraform;
exports.rulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToHclTerraform = rulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToHclTerraform;
exports.rulesetRulesActionParametersEdgeTtlStatusCodeTtlToTerraform = rulesetRulesActionParametersEdgeTtlStatusCodeTtlToTerraform;
exports.rulesetRulesActionParametersEdgeTtlStatusCodeTtlToHclTerraform = rulesetRulesActionParametersEdgeTtlStatusCodeTtlToHclTerraform;
exports.rulesetRulesActionParametersEdgeTtlToTerraform = rulesetRulesActionParametersEdgeTtlToTerraform;
exports.rulesetRulesActionParametersEdgeTtlToHclTerraform = rulesetRulesActionParametersEdgeTtlToHclTerraform;
exports.rulesetRulesActionParametersFromListStructToTerraform = rulesetRulesActionParametersFromListStructToTerraform;
exports.rulesetRulesActionParametersFromListStructToHclTerraform = rulesetRulesActionParametersFromListStructToHclTerraform;
exports.rulesetRulesActionParametersFromValueTargetUrlToTerraform = rulesetRulesActionParametersFromValueTargetUrlToTerraform;
exports.rulesetRulesActionParametersFromValueTargetUrlToHclTerraform = rulesetRulesActionParametersFromValueTargetUrlToHclTerraform;
exports.rulesetRulesActionParametersFromValueToTerraform = rulesetRulesActionParametersFromValueToTerraform;
exports.rulesetRulesActionParametersFromValueToHclTerraform = rulesetRulesActionParametersFromValueToHclTerraform;
exports.rulesetRulesActionParametersHeadersToTerraform = rulesetRulesActionParametersHeadersToTerraform;
exports.rulesetRulesActionParametersHeadersToHclTerraform = rulesetRulesActionParametersHeadersToHclTerraform;
exports.rulesetRulesActionParametersImmutableToTerraform = rulesetRulesActionParametersImmutableToTerraform;
exports.rulesetRulesActionParametersImmutableToHclTerraform = rulesetRulesActionParametersImmutableToHclTerraform;
exports.rulesetRulesActionParametersMatchedDataToTerraform = rulesetRulesActionParametersMatchedDataToTerraform;
exports.rulesetRulesActionParametersMatchedDataToHclTerraform = rulesetRulesActionParametersMatchedDataToHclTerraform;
exports.rulesetRulesActionParametersMaxAgeToTerraform = rulesetRulesActionParametersMaxAgeToTerraform;
exports.rulesetRulesActionParametersMaxAgeToHclTerraform = rulesetRulesActionParametersMaxAgeToHclTerraform;
exports.rulesetRulesActionParametersMustRevalidateToTerraform = rulesetRulesActionParametersMustRevalidateToTerraform;
exports.rulesetRulesActionParametersMustRevalidateToHclTerraform = rulesetRulesActionParametersMustRevalidateToHclTerraform;
exports.rulesetRulesActionParametersMustUnderstandToTerraform = rulesetRulesActionParametersMustUnderstandToTerraform;
exports.rulesetRulesActionParametersMustUnderstandToHclTerraform = rulesetRulesActionParametersMustUnderstandToHclTerraform;
exports.rulesetRulesActionParametersNoCacheToTerraform = rulesetRulesActionParametersNoCacheToTerraform;
exports.rulesetRulesActionParametersNoCacheToHclTerraform = rulesetRulesActionParametersNoCacheToHclTerraform;
exports.rulesetRulesActionParametersNoStoreToTerraform = rulesetRulesActionParametersNoStoreToTerraform;
exports.rulesetRulesActionParametersNoStoreToHclTerraform = rulesetRulesActionParametersNoStoreToHclTerraform;
exports.rulesetRulesActionParametersNoTransformToTerraform = rulesetRulesActionParametersNoTransformToTerraform;
exports.rulesetRulesActionParametersNoTransformToHclTerraform = rulesetRulesActionParametersNoTransformToHclTerraform;
exports.rulesetRulesActionParametersOriginToTerraform = rulesetRulesActionParametersOriginToTerraform;
exports.rulesetRulesActionParametersOriginToHclTerraform = rulesetRulesActionParametersOriginToHclTerraform;
exports.rulesetRulesActionParametersOverridesCategoriesToTerraform = rulesetRulesActionParametersOverridesCategoriesToTerraform;
exports.rulesetRulesActionParametersOverridesCategoriesToHclTerraform = rulesetRulesActionParametersOverridesCategoriesToHclTerraform;
exports.rulesetRulesActionParametersOverridesRulesToTerraform = rulesetRulesActionParametersOverridesRulesToTerraform;
exports.rulesetRulesActionParametersOverridesRulesToHclTerraform = rulesetRulesActionParametersOverridesRulesToHclTerraform;
exports.rulesetRulesActionParametersOverridesToTerraform = rulesetRulesActionParametersOverridesToTerraform;
exports.rulesetRulesActionParametersOverridesToHclTerraform = rulesetRulesActionParametersOverridesToHclTerraform;
exports.rulesetRulesActionParametersPrivateToTerraform = rulesetRulesActionParametersPrivateToTerraform;
exports.rulesetRulesActionParametersPrivateToHclTerraform = rulesetRulesActionParametersPrivateToHclTerraform;
exports.rulesetRulesActionParametersProxyRevalidateToTerraform = rulesetRulesActionParametersProxyRevalidateToTerraform;
exports.rulesetRulesActionParametersProxyRevalidateToHclTerraform = rulesetRulesActionParametersProxyRevalidateToHclTerraform;
exports.rulesetRulesActionParametersPublicToTerraform = rulesetRulesActionParametersPublicToTerraform;
exports.rulesetRulesActionParametersPublicToHclTerraform = rulesetRulesActionParametersPublicToHclTerraform;
exports.rulesetRulesActionParametersRawResponseFieldsToTerraform = rulesetRulesActionParametersRawResponseFieldsToTerraform;
exports.rulesetRulesActionParametersRawResponseFieldsToHclTerraform = rulesetRulesActionParametersRawResponseFieldsToHclTerraform;
exports.rulesetRulesActionParametersRequestFieldsToTerraform = rulesetRulesActionParametersRequestFieldsToTerraform;
exports.rulesetRulesActionParametersRequestFieldsToHclTerraform = rulesetRulesActionParametersRequestFieldsToHclTerraform;
exports.rulesetRulesActionParametersResponseToTerraform = rulesetRulesActionParametersResponseToTerraform;
exports.rulesetRulesActionParametersResponseToHclTerraform = rulesetRulesActionParametersResponseToHclTerraform;
exports.rulesetRulesActionParametersResponseFieldsToTerraform = rulesetRulesActionParametersResponseFieldsToTerraform;
exports.rulesetRulesActionParametersResponseFieldsToHclTerraform = rulesetRulesActionParametersResponseFieldsToHclTerraform;
exports.rulesetRulesActionParametersSMaxageToTerraform = rulesetRulesActionParametersSMaxageToTerraform;
exports.rulesetRulesActionParametersSMaxageToHclTerraform = rulesetRulesActionParametersSMaxageToHclTerraform;
exports.rulesetRulesActionParametersServeStaleToTerraform = rulesetRulesActionParametersServeStaleToTerraform;
exports.rulesetRulesActionParametersServeStaleToHclTerraform = rulesetRulesActionParametersServeStaleToHclTerraform;
exports.rulesetRulesActionParametersSniToTerraform = rulesetRulesActionParametersSniToTerraform;
exports.rulesetRulesActionParametersSniToHclTerraform = rulesetRulesActionParametersSniToHclTerraform;
exports.rulesetRulesActionParametersStaleIfErrorToTerraform = rulesetRulesActionParametersStaleIfErrorToTerraform;
exports.rulesetRulesActionParametersStaleIfErrorToHclTerraform = rulesetRulesActionParametersStaleIfErrorToHclTerraform;
exports.rulesetRulesActionParametersStaleWhileRevalidateToTerraform = rulesetRulesActionParametersStaleWhileRevalidateToTerraform;
exports.rulesetRulesActionParametersStaleWhileRevalidateToHclTerraform = rulesetRulesActionParametersStaleWhileRevalidateToHclTerraform;
exports.rulesetRulesActionParametersTransformedRequestFieldsToTerraform = rulesetRulesActionParametersTransformedRequestFieldsToTerraform;
exports.rulesetRulesActionParametersTransformedRequestFieldsToHclTerraform = rulesetRulesActionParametersTransformedRequestFieldsToHclTerraform;
exports.rulesetRulesActionParametersUriPathToTerraform = rulesetRulesActionParametersUriPathToTerraform;
exports.rulesetRulesActionParametersUriPathToHclTerraform = rulesetRulesActionParametersUriPathToHclTerraform;
exports.rulesetRulesActionParametersUriQueryToTerraform = rulesetRulesActionParametersUriQueryToTerraform;
exports.rulesetRulesActionParametersUriQueryToHclTerraform = rulesetRulesActionParametersUriQueryToHclTerraform;
exports.rulesetRulesActionParametersUriToTerraform = rulesetRulesActionParametersUriToTerraform;
exports.rulesetRulesActionParametersUriToHclTerraform = rulesetRulesActionParametersUriToHclTerraform;
exports.rulesetRulesActionParametersToTerraform = rulesetRulesActionParametersToTerraform;
exports.rulesetRulesActionParametersToHclTerraform = rulesetRulesActionParametersToHclTerraform;
exports.rulesetRulesExposedCredentialCheckToTerraform = rulesetRulesExposedCredentialCheckToTerraform;
exports.rulesetRulesExposedCredentialCheckToHclTerraform = rulesetRulesExposedCredentialCheckToHclTerraform;
exports.rulesetRulesLoggingToTerraform = rulesetRulesLoggingToTerraform;
exports.rulesetRulesLoggingToHclTerraform = rulesetRulesLoggingToHclTerraform;
exports.rulesetRulesRatelimitToTerraform = rulesetRulesRatelimitToTerraform;
exports.rulesetRulesRatelimitToHclTerraform = rulesetRulesRatelimitToHclTerraform;
exports.rulesetRulesToTerraform = rulesetRulesToTerraform;
exports.rulesetRulesToHclTerraform = rulesetRulesToHclTerraform;
var cdktf = require("cdktf");
function rulesetRulesActionParametersAlgorithmsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
function rulesetRulesActionParametersAlgorithmsToHclTerraform(struct) {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var RulesetRulesActionParametersAlgorithmsOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersAlgorithmsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RulesetRulesActionParametersAlgorithmsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersAlgorithmsOutputReference.prototype, "internalValue", {
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
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._name = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._name = value.name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersAlgorithmsOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersAlgorithmsOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersAlgorithmsOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersAlgorithmsOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersAlgorithmsOutputReference = RulesetRulesActionParametersAlgorithmsOutputReference;
var RulesetRulesActionParametersAlgorithmsList = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersAlgorithmsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RulesetRulesActionParametersAlgorithmsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    RulesetRulesActionParametersAlgorithmsList.prototype.get = function (index) {
        return new RulesetRulesActionParametersAlgorithmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return RulesetRulesActionParametersAlgorithmsList;
}(cdktf.ComplexList));
exports.RulesetRulesActionParametersAlgorithmsList = RulesetRulesActionParametersAlgorithmsList;
function rulesetRulesActionParametersAutominifyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        css: cdktf.booleanToTerraform(struct.css),
        html: cdktf.booleanToTerraform(struct.html),
        js: cdktf.booleanToTerraform(struct.js),
    };
}
function rulesetRulesActionParametersAutominifyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        css: {
            value: cdktf.booleanToHclTerraform(struct.css),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        html: {
            value: cdktf.booleanToHclTerraform(struct.html),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        js: {
            value: cdktf.booleanToHclTerraform(struct.js),
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
var RulesetRulesActionParametersAutominifyOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersAutominifyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersAutominifyOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersAutominifyOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._css !== undefined) {
                hasAnyValues = true;
                internalValueResult.css = this._css;
            }
            if (this._html !== undefined) {
                hasAnyValues = true;
                internalValueResult.html = this._html;
            }
            if (this._js !== undefined) {
                hasAnyValues = true;
                internalValueResult.js = this._js;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._css = undefined;
                this._html = undefined;
                this._js = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._css = value.css;
                this._html = value.html;
                this._js = value.js;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersAutominifyOutputReference.prototype, "css", {
        get: function () {
            return this.getBooleanAttribute('css');
        },
        set: function (value) {
            this._css = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersAutominifyOutputReference.prototype.resetCss = function () {
        this._css = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersAutominifyOutputReference.prototype, "cssInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._css;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersAutominifyOutputReference.prototype, "html", {
        get: function () {
            return this.getBooleanAttribute('html');
        },
        set: function (value) {
            this._html = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersAutominifyOutputReference.prototype.resetHtml = function () {
        this._html = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersAutominifyOutputReference.prototype, "htmlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._html;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersAutominifyOutputReference.prototype, "js", {
        get: function () {
            return this.getBooleanAttribute('js');
        },
        set: function (value) {
            this._js = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersAutominifyOutputReference.prototype.resetJs = function () {
        this._js = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersAutominifyOutputReference.prototype, "jsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._js;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersAutominifyOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersAutominifyOutputReference = RulesetRulesActionParametersAutominifyOutputReference;
function rulesetRulesActionParametersBrowserTtlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        default: cdktf.numberToTerraform(struct.default),
        mode: cdktf.stringToTerraform(struct.mode),
    };
}
function rulesetRulesActionParametersBrowserTtlToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        default: {
            value: cdktf.numberToHclTerraform(struct.default),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
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
var RulesetRulesActionParametersBrowserTtlOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersBrowserTtlOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersBrowserTtlOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersBrowserTtlOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._default !== undefined) {
                hasAnyValues = true;
                internalValueResult.default = this._default;
            }
            if (this._mode !== undefined) {
                hasAnyValues = true;
                internalValueResult.mode = this._mode;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._default = undefined;
                this._mode = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._default = value.default;
                this._mode = value.mode;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersBrowserTtlOutputReference.prototype, "default", {
        get: function () {
            return this.getNumberAttribute('default');
        },
        set: function (value) {
            this._default = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersBrowserTtlOutputReference.prototype.resetDefault = function () {
        this._default = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersBrowserTtlOutputReference.prototype, "defaultInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._default;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersBrowserTtlOutputReference.prototype, "mode", {
        get: function () {
            return this.getStringAttribute('mode');
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersBrowserTtlOutputReference.prototype, "modeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mode;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersBrowserTtlOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersBrowserTtlOutputReference = RulesetRulesActionParametersBrowserTtlOutputReference;
function rulesetRulesActionParametersCacheKeyCustomKeyCookieToTerraform(struct) {
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
function rulesetRulesActionParametersCacheKeyCustomKeyCookieToHclTerraform(struct) {
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
var RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.prototype, "checkPresence", {
        get: function () {
            return this.getListAttribute('check_presence');
        },
        set: function (value) {
            this._checkPresence = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.prototype.resetCheckPresence = function () {
        this._checkPresence = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.prototype, "checkPresenceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._checkPresence;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.prototype, "include", {
        get: function () {
            return this.getListAttribute('include');
        },
        set: function (value) {
            this._include = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.prototype.resetInclude = function () {
        this._include = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.prototype, "includeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._include;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference = RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference;
function rulesetRulesActionParametersCacheKeyCustomKeyHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        check_presence: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.checkPresence),
        contains: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.contains),
        exclude_origin: cdktf.booleanToTerraform(struct.excludeOrigin),
        include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.include),
    };
}
function rulesetRulesActionParametersCacheKeyCustomKeyHeaderToHclTerraform(struct) {
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
        contains: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.contains),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
        exclude_origin: {
            value: cdktf.booleanToHclTerraform(struct.excludeOrigin),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
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
var RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.prototype, "internalValue", {
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
            if (this._contains !== undefined) {
                hasAnyValues = true;
                internalValueResult.contains = this._contains;
            }
            if (this._excludeOrigin !== undefined) {
                hasAnyValues = true;
                internalValueResult.excludeOrigin = this._excludeOrigin;
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
                this._contains = undefined;
                this._excludeOrigin = undefined;
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
                this._contains = value.contains;
                this._excludeOrigin = value.excludeOrigin;
                this._include = value.include;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.prototype, "checkPresence", {
        get: function () {
            return this.getListAttribute('check_presence');
        },
        set: function (value) {
            this._checkPresence = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.prototype.resetCheckPresence = function () {
        this._checkPresence = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.prototype, "checkPresenceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._checkPresence;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.prototype, "contains", {
        get: function () {
            return this.interpolationForAttribute('contains');
        },
        set: function (value) {
            this._contains = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.prototype.resetContains = function () {
        this._contains = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.prototype, "containsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.prototype, "excludeOrigin", {
        get: function () {
            return this.getBooleanAttribute('exclude_origin');
        },
        set: function (value) {
            this._excludeOrigin = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.prototype.resetExcludeOrigin = function () {
        this._excludeOrigin = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.prototype, "excludeOriginInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._excludeOrigin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.prototype, "include", {
        get: function () {
            return this.getListAttribute('include');
        },
        set: function (value) {
            this._include = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.prototype.resetInclude = function () {
        this._include = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.prototype, "includeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._include;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference = RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference;
function rulesetRulesActionParametersCacheKeyCustomKeyHostToTerraform(struct) {
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
function rulesetRulesActionParametersCacheKeyCustomKeyHostToHclTerraform(struct) {
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
var RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.prototype, "resolved", {
        get: function () {
            return this.getBooleanAttribute('resolved');
        },
        set: function (value) {
            this._resolved = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.prototype.resetResolved = function () {
        this._resolved = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.prototype, "resolvedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resolved;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference = RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference;
function rulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all: cdktf.booleanToTerraform(struct.all),
        list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.list),
    };
}
function rulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        all: {
            value: cdktf.booleanToHclTerraform(struct.all),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        list: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.list),
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
var RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._all !== undefined) {
                hasAnyValues = true;
                internalValueResult.all = this._all;
            }
            if (this._list !== undefined) {
                hasAnyValues = true;
                internalValueResult.list = this._list;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._all = undefined;
                this._list = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._all = value.all;
                this._list = value.list;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.prototype, "all", {
        get: function () {
            return this.getBooleanAttribute('all');
        },
        set: function (value) {
            this._all = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.prototype.resetAll = function () {
        this._all = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.prototype, "allInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._all;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.prototype, "list", {
        get: function () {
            return this.getListAttribute('list');
        },
        set: function (value) {
            this._list = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.prototype.resetList = function () {
        this._list = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.prototype, "listInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._list;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference = RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference;
function rulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all: cdktf.booleanToTerraform(struct.all),
        list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.list),
    };
}
function rulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        all: {
            value: cdktf.booleanToHclTerraform(struct.all),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        list: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.list),
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
var RulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._all !== undefined) {
                hasAnyValues = true;
                internalValueResult.all = this._all;
            }
            if (this._list !== undefined) {
                hasAnyValues = true;
                internalValueResult.list = this._list;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._all = undefined;
                this._list = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._all = value.all;
                this._list = value.list;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.prototype, "all", {
        get: function () {
            return this.getBooleanAttribute('all');
        },
        set: function (value) {
            this._all = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.prototype.resetAll = function () {
        this._all = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.prototype, "allInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._all;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.prototype, "list", {
        get: function () {
            return this.getListAttribute('list');
        },
        set: function (value) {
            this._list = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.prototype.resetList = function () {
        this._list = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.prototype, "listInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._list;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference = RulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference;
function rulesetRulesActionParametersCacheKeyCustomKeyQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        exclude: rulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeToTerraform(struct.exclude),
        include: rulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeToTerraform(struct.include),
    };
}
function rulesetRulesActionParametersCacheKeyCustomKeyQueryStringToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        exclude: {
            value: rulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeToHclTerraform(struct.exclude),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExclude",
        },
        include: {
            value: rulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeToHclTerraform(struct.include),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersCacheKeyCustomKeyQueryStringInclude",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // exclude - computed: true, optional: true, required: false
        _this._exclude = new RulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference(_this, "exclude");
        // include - computed: true, optional: true, required: false
        _this._include = new RulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference(_this, "include");
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._exclude) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.exclude = (_b = this._exclude) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._include) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.include = (_d = this._include) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._exclude.internalValue = undefined;
                this._include.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._exclude.internalValue = value.exclude;
                this._include.internalValue = value.include;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.prototype, "exclude", {
        get: function () {
            return this._exclude;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.prototype.putExclude = function (value) {
        this._exclude.internalValue = value;
    };
    RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.prototype.resetExclude = function () {
        this._exclude.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.prototype, "excludeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exclude.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.prototype, "include", {
        get: function () {
            return this._include;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.prototype.putInclude = function (value) {
        this._include.internalValue = value;
    };
    RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.prototype.resetInclude = function () {
        this._include.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.prototype, "includeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._include.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference = RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference;
function rulesetRulesActionParametersCacheKeyCustomKeyUserToTerraform(struct) {
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
function rulesetRulesActionParametersCacheKeyCustomKeyUserToHclTerraform(struct) {
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
var RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.prototype, "deviceType", {
        get: function () {
            return this.getBooleanAttribute('device_type');
        },
        set: function (value) {
            this._deviceType = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.prototype.resetDeviceType = function () {
        this._deviceType = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.prototype, "deviceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deviceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.prototype, "geo", {
        get: function () {
            return this.getBooleanAttribute('geo');
        },
        set: function (value) {
            this._geo = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.prototype.resetGeo = function () {
        this._geo = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.prototype, "geoInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._geo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.prototype, "lang", {
        get: function () {
            return this.getBooleanAttribute('lang');
        },
        set: function (value) {
            this._lang = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.prototype.resetLang = function () {
        this._lang = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.prototype, "langInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lang;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference = RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference;
function rulesetRulesActionParametersCacheKeyCustomKeyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cookie: rulesetRulesActionParametersCacheKeyCustomKeyCookieToTerraform(struct.cookie),
        header: rulesetRulesActionParametersCacheKeyCustomKeyHeaderToTerraform(struct.header),
        host: rulesetRulesActionParametersCacheKeyCustomKeyHostToTerraform(struct.host),
        query_string: rulesetRulesActionParametersCacheKeyCustomKeyQueryStringToTerraform(struct.queryString),
        user: rulesetRulesActionParametersCacheKeyCustomKeyUserToTerraform(struct.user),
    };
}
function rulesetRulesActionParametersCacheKeyCustomKeyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cookie: {
            value: rulesetRulesActionParametersCacheKeyCustomKeyCookieToHclTerraform(struct.cookie),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersCacheKeyCustomKeyCookie",
        },
        header: {
            value: rulesetRulesActionParametersCacheKeyCustomKeyHeaderToHclTerraform(struct.header),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersCacheKeyCustomKeyHeader",
        },
        host: {
            value: rulesetRulesActionParametersCacheKeyCustomKeyHostToHclTerraform(struct.host),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersCacheKeyCustomKeyHost",
        },
        query_string: {
            value: rulesetRulesActionParametersCacheKeyCustomKeyQueryStringToHclTerraform(struct.queryString),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersCacheKeyCustomKeyQueryString",
        },
        user: {
            value: rulesetRulesActionParametersCacheKeyCustomKeyUserToHclTerraform(struct.user),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersCacheKeyCustomKeyUser",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var RulesetRulesActionParametersCacheKeyCustomKeyOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersCacheKeyCustomKeyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersCacheKeyCustomKeyOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // cookie - computed: true, optional: true, required: false
        _this._cookie = new RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference(_this, "cookie");
        // header - computed: true, optional: true, required: false
        _this._header = new RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference(_this, "header");
        // host - computed: true, optional: true, required: false
        _this._host = new RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference(_this, "host");
        // query_string - computed: true, optional: true, required: false
        _this._queryString = new RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference(_this, "query_string");
        // user - computed: true, optional: true, required: false
        _this._user = new RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference(_this, "user");
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype, "cookie", {
        get: function () {
            return this._cookie;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype.putCookie = function (value) {
        this._cookie.internalValue = value;
    };
    RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype.resetCookie = function () {
        this._cookie.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype, "cookieInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cookie.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype, "header", {
        get: function () {
            return this._header;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype.putHeader = function (value) {
        this._header.internalValue = value;
    };
    RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype.resetHeader = function () {
        this._header.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype, "headerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._header.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype, "host", {
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype.putHost = function (value) {
        this._host.internalValue = value;
    };
    RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype.resetHost = function () {
        this._host.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype, "queryString", {
        get: function () {
            return this._queryString;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype.putQueryString = function (value) {
        this._queryString.internalValue = value;
    };
    RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype.resetQueryString = function () {
        this._queryString.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype, "queryStringInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queryString.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype.putUser = function (value) {
        this._user.internalValue = value;
    };
    RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype.resetUser = function () {
        this._user.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype, "userInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._user.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersCacheKeyCustomKeyOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference = RulesetRulesActionParametersCacheKeyCustomKeyOutputReference;
function rulesetRulesActionParametersCacheKeyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cache_by_device_type: cdktf.booleanToTerraform(struct.cacheByDeviceType),
        cache_deception_armor: cdktf.booleanToTerraform(struct.cacheDeceptionArmor),
        custom_key: rulesetRulesActionParametersCacheKeyCustomKeyToTerraform(struct.customKey),
        ignore_query_strings_order: cdktf.booleanToTerraform(struct.ignoreQueryStringsOrder),
    };
}
function rulesetRulesActionParametersCacheKeyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cache_by_device_type: {
            value: cdktf.booleanToHclTerraform(struct.cacheByDeviceType),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        cache_deception_armor: {
            value: cdktf.booleanToHclTerraform(struct.cacheDeceptionArmor),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        custom_key: {
            value: rulesetRulesActionParametersCacheKeyCustomKeyToHclTerraform(struct.customKey),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersCacheKeyCustomKey",
        },
        ignore_query_strings_order: {
            value: cdktf.booleanToHclTerraform(struct.ignoreQueryStringsOrder),
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
var RulesetRulesActionParametersCacheKeyOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersCacheKeyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersCacheKeyOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // custom_key - computed: true, optional: true, required: false
        _this._customKey = new RulesetRulesActionParametersCacheKeyCustomKeyOutputReference(_this, "custom_key");
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersCacheKeyOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._cacheByDeviceType !== undefined) {
                hasAnyValues = true;
                internalValueResult.cacheByDeviceType = this._cacheByDeviceType;
            }
            if (this._cacheDeceptionArmor !== undefined) {
                hasAnyValues = true;
                internalValueResult.cacheDeceptionArmor = this._cacheDeceptionArmor;
            }
            if (((_a = this._customKey) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.customKey = (_b = this._customKey) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._ignoreQueryStringsOrder !== undefined) {
                hasAnyValues = true;
                internalValueResult.ignoreQueryStringsOrder = this._ignoreQueryStringsOrder;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._cacheByDeviceType = undefined;
                this._cacheDeceptionArmor = undefined;
                this._customKey.internalValue = undefined;
                this._ignoreQueryStringsOrder = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._cacheByDeviceType = value.cacheByDeviceType;
                this._cacheDeceptionArmor = value.cacheDeceptionArmor;
                this._customKey.internalValue = value.customKey;
                this._ignoreQueryStringsOrder = value.ignoreQueryStringsOrder;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCacheKeyOutputReference.prototype, "cacheByDeviceType", {
        get: function () {
            return this.getBooleanAttribute('cache_by_device_type');
        },
        set: function (value) {
            this._cacheByDeviceType = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheKeyOutputReference.prototype.resetCacheByDeviceType = function () {
        this._cacheByDeviceType = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheKeyOutputReference.prototype, "cacheByDeviceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cacheByDeviceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCacheKeyOutputReference.prototype, "cacheDeceptionArmor", {
        get: function () {
            return this.getBooleanAttribute('cache_deception_armor');
        },
        set: function (value) {
            this._cacheDeceptionArmor = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheKeyOutputReference.prototype.resetCacheDeceptionArmor = function () {
        this._cacheDeceptionArmor = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheKeyOutputReference.prototype, "cacheDeceptionArmorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cacheDeceptionArmor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCacheKeyOutputReference.prototype, "customKey", {
        get: function () {
            return this._customKey;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheKeyOutputReference.prototype.putCustomKey = function (value) {
        this._customKey.internalValue = value;
    };
    RulesetRulesActionParametersCacheKeyOutputReference.prototype.resetCustomKey = function () {
        this._customKey.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheKeyOutputReference.prototype, "customKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customKey.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCacheKeyOutputReference.prototype, "ignoreQueryStringsOrder", {
        get: function () {
            return this.getBooleanAttribute('ignore_query_strings_order');
        },
        set: function (value) {
            this._ignoreQueryStringsOrder = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheKeyOutputReference.prototype.resetIgnoreQueryStringsOrder = function () {
        this._ignoreQueryStringsOrder = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheKeyOutputReference.prototype, "ignoreQueryStringsOrderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ignoreQueryStringsOrder;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersCacheKeyOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersCacheKeyOutputReference = RulesetRulesActionParametersCacheKeyOutputReference;
function rulesetRulesActionParametersCacheReserveToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        eligible: cdktf.booleanToTerraform(struct.eligible),
        minimum_file_size: cdktf.numberToTerraform(struct.minimumFileSize),
    };
}
function rulesetRulesActionParametersCacheReserveToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        eligible: {
            value: cdktf.booleanToHclTerraform(struct.eligible),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        minimum_file_size: {
            value: cdktf.numberToHclTerraform(struct.minimumFileSize),
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
var RulesetRulesActionParametersCacheReserveOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersCacheReserveOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersCacheReserveOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersCacheReserveOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._eligible !== undefined) {
                hasAnyValues = true;
                internalValueResult.eligible = this._eligible;
            }
            if (this._minimumFileSize !== undefined) {
                hasAnyValues = true;
                internalValueResult.minimumFileSize = this._minimumFileSize;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._eligible = undefined;
                this._minimumFileSize = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._eligible = value.eligible;
                this._minimumFileSize = value.minimumFileSize;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCacheReserveOutputReference.prototype, "eligible", {
        get: function () {
            return this.getBooleanAttribute('eligible');
        },
        set: function (value) {
            this._eligible = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCacheReserveOutputReference.prototype, "eligibleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._eligible;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCacheReserveOutputReference.prototype, "minimumFileSize", {
        get: function () {
            return this.getNumberAttribute('minimum_file_size');
        },
        set: function (value) {
            this._minimumFileSize = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersCacheReserveOutputReference.prototype.resetMinimumFileSize = function () {
        this._minimumFileSize = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersCacheReserveOutputReference.prototype, "minimumFileSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minimumFileSize;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersCacheReserveOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersCacheReserveOutputReference = RulesetRulesActionParametersCacheReserveOutputReference;
function rulesetRulesActionParametersCookieFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
function rulesetRulesActionParametersCookieFieldsToHclTerraform(struct) {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var RulesetRulesActionParametersCookieFieldsOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersCookieFieldsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RulesetRulesActionParametersCookieFieldsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersCookieFieldsOutputReference.prototype, "internalValue", {
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
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._name = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._name = value.name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCookieFieldsOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersCookieFieldsOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersCookieFieldsOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersCookieFieldsOutputReference = RulesetRulesActionParametersCookieFieldsOutputReference;
var RulesetRulesActionParametersCookieFieldsList = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersCookieFieldsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RulesetRulesActionParametersCookieFieldsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    RulesetRulesActionParametersCookieFieldsList.prototype.get = function (index) {
        return new RulesetRulesActionParametersCookieFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return RulesetRulesActionParametersCookieFieldsList;
}(cdktf.ComplexList));
exports.RulesetRulesActionParametersCookieFieldsList = RulesetRulesActionParametersCookieFieldsList;
function rulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        from: cdktf.numberToTerraform(struct.from),
        to: cdktf.numberToTerraform(struct.to),
    };
}
function rulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        from: {
            value: cdktf.numberToHclTerraform(struct.from),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        to: {
            value: cdktf.numberToHclTerraform(struct.to),
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
var RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._from !== undefined) {
                hasAnyValues = true;
                internalValueResult.from = this._from;
            }
            if (this._to !== undefined) {
                hasAnyValues = true;
                internalValueResult.to = this._to;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._from = undefined;
                this._to = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._from = value.from;
                this._to = value.to;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.prototype, "from", {
        get: function () {
            return this.getNumberAttribute('from');
        },
        set: function (value) {
            this._from = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.prototype.resetFrom = function () {
        this._from = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.prototype, "fromInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._from;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.prototype, "to", {
        get: function () {
            return this.getNumberAttribute('to');
        },
        set: function (value) {
            this._to = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.prototype.resetTo = function () {
        this._to = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.prototype, "toInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._to;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference = RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference;
function rulesetRulesActionParametersEdgeTtlStatusCodeTtlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        status_code: cdktf.numberToTerraform(struct.statusCode),
        status_code_range: rulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToTerraform(struct.statusCodeRange),
        value: cdktf.numberToTerraform(struct.value),
    };
}
function rulesetRulesActionParametersEdgeTtlStatusCodeTtlToHclTerraform(struct) {
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
        status_code_range: {
            value: rulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToHclTerraform(struct.statusCodeRange),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange",
        },
        value: {
            value: cdktf.numberToHclTerraform(struct.value),
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
var RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // status_code_range - computed: true, optional: true, required: false
        _this._statusCodeRange = new RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference(_this, "status_code_range");
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._statusCode !== undefined) {
                hasAnyValues = true;
                internalValueResult.statusCode = this._statusCode;
            }
            if (((_a = this._statusCodeRange) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.statusCodeRange = (_b = this._statusCodeRange) === null || _b === void 0 ? void 0 : _b.internalValue;
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
                this._statusCode = undefined;
                this._statusCodeRange.internalValue = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._statusCode = value.statusCode;
                this._statusCodeRange.internalValue = value.statusCodeRange;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.prototype, "statusCode", {
        get: function () {
            return this.getNumberAttribute('status_code');
        },
        set: function (value) {
            this._statusCode = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.prototype.resetStatusCode = function () {
        this._statusCode = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.prototype, "statusCodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._statusCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.prototype, "statusCodeRange", {
        get: function () {
            return this._statusCodeRange;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.prototype.putStatusCodeRange = function (value) {
        this._statusCodeRange.internalValue = value;
    };
    RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.prototype.resetStatusCodeRange = function () {
        this._statusCodeRange.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.prototype, "statusCodeRangeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._statusCodeRange.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.prototype, "value", {
        get: function () {
            return this.getNumberAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference = RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference;
var RulesetRulesActionParametersEdgeTtlStatusCodeTtlList = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersEdgeTtlStatusCodeTtlList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RulesetRulesActionParametersEdgeTtlStatusCodeTtlList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.prototype.get = function (index) {
        return new RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return RulesetRulesActionParametersEdgeTtlStatusCodeTtlList;
}(cdktf.ComplexList));
exports.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList = RulesetRulesActionParametersEdgeTtlStatusCodeTtlList;
function rulesetRulesActionParametersEdgeTtlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        default: cdktf.numberToTerraform(struct.default),
        mode: cdktf.stringToTerraform(struct.mode),
        status_code_ttl: cdktf.listMapper(rulesetRulesActionParametersEdgeTtlStatusCodeTtlToTerraform, false)(struct.statusCodeTtl),
    };
}
function rulesetRulesActionParametersEdgeTtlToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        default: {
            value: cdktf.numberToHclTerraform(struct.default),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status_code_ttl: {
            value: cdktf.listMapperHcl(rulesetRulesActionParametersEdgeTtlStatusCodeTtlToHclTerraform, false)(struct.statusCodeTtl),
            isBlock: true,
            type: "list",
            storageClassType: "RulesetRulesActionParametersEdgeTtlStatusCodeTtlList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var RulesetRulesActionParametersEdgeTtlOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersEdgeTtlOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersEdgeTtlOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // status_code_ttl - computed: true, optional: true, required: false
        _this._statusCodeTtl = new RulesetRulesActionParametersEdgeTtlStatusCodeTtlList(_this, "status_code_ttl", false);
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersEdgeTtlOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._default !== undefined) {
                hasAnyValues = true;
                internalValueResult.default = this._default;
            }
            if (this._mode !== undefined) {
                hasAnyValues = true;
                internalValueResult.mode = this._mode;
            }
            if (((_a = this._statusCodeTtl) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.statusCodeTtl = (_b = this._statusCodeTtl) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._default = undefined;
                this._mode = undefined;
                this._statusCodeTtl.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._default = value.default;
                this._mode = value.mode;
                this._statusCodeTtl.internalValue = value.statusCodeTtl;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersEdgeTtlOutputReference.prototype, "default", {
        get: function () {
            return this.getNumberAttribute('default');
        },
        set: function (value) {
            this._default = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersEdgeTtlOutputReference.prototype.resetDefault = function () {
        this._default = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersEdgeTtlOutputReference.prototype, "defaultInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._default;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersEdgeTtlOutputReference.prototype, "mode", {
        get: function () {
            return this.getStringAttribute('mode');
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersEdgeTtlOutputReference.prototype, "modeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersEdgeTtlOutputReference.prototype, "statusCodeTtl", {
        get: function () {
            return this._statusCodeTtl;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersEdgeTtlOutputReference.prototype.putStatusCodeTtl = function (value) {
        this._statusCodeTtl.internalValue = value;
    };
    RulesetRulesActionParametersEdgeTtlOutputReference.prototype.resetStatusCodeTtl = function () {
        this._statusCodeTtl.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersEdgeTtlOutputReference.prototype, "statusCodeTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._statusCodeTtl.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersEdgeTtlOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersEdgeTtlOutputReference = RulesetRulesActionParametersEdgeTtlOutputReference;
function rulesetRulesActionParametersFromListStructToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        name: cdktf.stringToTerraform(struct.name),
    };
}
function rulesetRulesActionParametersFromListStructToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        key: {
            value: cdktf.stringToHclTerraform(struct.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
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
var RulesetRulesActionParametersFromListStructOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersFromListStructOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersFromListStructOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersFromListStructOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._key !== undefined) {
                hasAnyValues = true;
                internalValueResult.key = this._key;
            }
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._key = undefined;
                this._name = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._key = value.key;
                this._name = value.name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersFromListStructOutputReference.prototype, "key", {
        get: function () {
            return this.getStringAttribute('key');
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersFromListStructOutputReference.prototype, "keyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersFromListStructOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersFromListStructOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersFromListStructOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersFromListStructOutputReference = RulesetRulesActionParametersFromListStructOutputReference;
function rulesetRulesActionParametersFromValueTargetUrlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        expression: cdktf.stringToTerraform(struct.expression),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function rulesetRulesActionParametersFromValueTargetUrlToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        expression: {
            value: cdktf.stringToHclTerraform(struct.expression),
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
var RulesetRulesActionParametersFromValueTargetUrlOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersFromValueTargetUrlOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersFromValueTargetUrlOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersFromValueTargetUrlOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._expression !== undefined) {
                hasAnyValues = true;
                internalValueResult.expression = this._expression;
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
                this._expression = undefined;
                this._value = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._expression = value.expression;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersFromValueTargetUrlOutputReference.prototype, "expression", {
        get: function () {
            return this.getStringAttribute('expression');
        },
        set: function (value) {
            this._expression = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersFromValueTargetUrlOutputReference.prototype.resetExpression = function () {
        this._expression = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersFromValueTargetUrlOutputReference.prototype, "expressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersFromValueTargetUrlOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersFromValueTargetUrlOutputReference.prototype.resetValue = function () {
        this._value = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersFromValueTargetUrlOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersFromValueTargetUrlOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersFromValueTargetUrlOutputReference = RulesetRulesActionParametersFromValueTargetUrlOutputReference;
function rulesetRulesActionParametersFromValueToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        preserve_query_string: cdktf.booleanToTerraform(struct.preserveQueryString),
        status_code: cdktf.numberToTerraform(struct.statusCode),
        target_url: rulesetRulesActionParametersFromValueTargetUrlToTerraform(struct.targetUrl),
    };
}
function rulesetRulesActionParametersFromValueToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        preserve_query_string: {
            value: cdktf.booleanToHclTerraform(struct.preserveQueryString),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        status_code: {
            value: cdktf.numberToHclTerraform(struct.statusCode),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        target_url: {
            value: rulesetRulesActionParametersFromValueTargetUrlToHclTerraform(struct.targetUrl),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersFromValueTargetUrl",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var RulesetRulesActionParametersFromValueOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersFromValueOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersFromValueOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // target_url - computed: true, optional: false, required: true
        _this._targetUrl = new RulesetRulesActionParametersFromValueTargetUrlOutputReference(_this, "target_url");
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersFromValueOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._preserveQueryString !== undefined) {
                hasAnyValues = true;
                internalValueResult.preserveQueryString = this._preserveQueryString;
            }
            if (this._statusCode !== undefined) {
                hasAnyValues = true;
                internalValueResult.statusCode = this._statusCode;
            }
            if (((_a = this._targetUrl) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.targetUrl = (_b = this._targetUrl) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._preserveQueryString = undefined;
                this._statusCode = undefined;
                this._targetUrl.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._preserveQueryString = value.preserveQueryString;
                this._statusCode = value.statusCode;
                this._targetUrl.internalValue = value.targetUrl;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersFromValueOutputReference.prototype, "preserveQueryString", {
        get: function () {
            return this.getBooleanAttribute('preserve_query_string');
        },
        set: function (value) {
            this._preserveQueryString = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersFromValueOutputReference.prototype.resetPreserveQueryString = function () {
        this._preserveQueryString = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersFromValueOutputReference.prototype, "preserveQueryStringInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preserveQueryString;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersFromValueOutputReference.prototype, "statusCode", {
        get: function () {
            return this.getNumberAttribute('status_code');
        },
        set: function (value) {
            this._statusCode = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersFromValueOutputReference.prototype.resetStatusCode = function () {
        this._statusCode = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersFromValueOutputReference.prototype, "statusCodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._statusCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersFromValueOutputReference.prototype, "targetUrl", {
        get: function () {
            return this._targetUrl;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersFromValueOutputReference.prototype.putTargetUrl = function (value) {
        this._targetUrl.internalValue = value;
    };
    Object.defineProperty(RulesetRulesActionParametersFromValueOutputReference.prototype, "targetUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetUrl.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersFromValueOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersFromValueOutputReference = RulesetRulesActionParametersFromValueOutputReference;
function rulesetRulesActionParametersHeadersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        expression: cdktf.stringToTerraform(struct.expression),
        operation: cdktf.stringToTerraform(struct.operation),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function rulesetRulesActionParametersHeadersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        expression: {
            value: cdktf.stringToHclTerraform(struct.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
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
var RulesetRulesActionParametersHeadersOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersHeadersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function RulesetRulesActionParametersHeadersOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersHeadersOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._expression !== undefined) {
                hasAnyValues = true;
                internalValueResult.expression = this._expression;
            }
            if (this._operation !== undefined) {
                hasAnyValues = true;
                internalValueResult.operation = this._operation;
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
                this._expression = undefined;
                this._operation = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._expression = value.expression;
                this._operation = value.operation;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersHeadersOutputReference.prototype, "expression", {
        get: function () {
            return this.getStringAttribute('expression');
        },
        set: function (value) {
            this._expression = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersHeadersOutputReference.prototype.resetExpression = function () {
        this._expression = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersHeadersOutputReference.prototype, "expressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersHeadersOutputReference.prototype, "operation", {
        get: function () {
            return this.getStringAttribute('operation');
        },
        set: function (value) {
            this._operation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersHeadersOutputReference.prototype, "operationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersHeadersOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersHeadersOutputReference.prototype.resetValue = function () {
        this._value = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersHeadersOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersHeadersOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersHeadersOutputReference = RulesetRulesActionParametersHeadersOutputReference;
var RulesetRulesActionParametersHeadersMap = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersHeadersMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersHeadersMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    RulesetRulesActionParametersHeadersMap.prototype.get = function (key) {
        return new RulesetRulesActionParametersHeadersOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return RulesetRulesActionParametersHeadersMap;
}(cdktf.ComplexMap));
exports.RulesetRulesActionParametersHeadersMap = RulesetRulesActionParametersHeadersMap;
function rulesetRulesActionParametersImmutableToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
    };
}
function rulesetRulesActionParametersImmutableToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
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
var RulesetRulesActionParametersImmutableOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersImmutableOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersImmutableOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersImmutableOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._cloudflareOnly !== undefined) {
                hasAnyValues = true;
                internalValueResult.cloudflareOnly = this._cloudflareOnly;
            }
            if (this._operation !== undefined) {
                hasAnyValues = true;
                internalValueResult.operation = this._operation;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._cloudflareOnly = undefined;
                this._operation = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._cloudflareOnly = value.cloudflareOnly;
                this._operation = value.operation;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersImmutableOutputReference.prototype, "cloudflareOnly", {
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        set: function (value) {
            this._cloudflareOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersImmutableOutputReference.prototype.resetCloudflareOnly = function () {
        this._cloudflareOnly = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersImmutableOutputReference.prototype, "cloudflareOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudflareOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersImmutableOutputReference.prototype, "operation", {
        get: function () {
            return this.getStringAttribute('operation');
        },
        set: function (value) {
            this._operation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersImmutableOutputReference.prototype, "operationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operation;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersImmutableOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersImmutableOutputReference = RulesetRulesActionParametersImmutableOutputReference;
function rulesetRulesActionParametersMatchedDataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        public_key: cdktf.stringToTerraform(struct.publicKey),
    };
}
function rulesetRulesActionParametersMatchedDataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        public_key: {
            value: cdktf.stringToHclTerraform(struct.publicKey),
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
var RulesetRulesActionParametersMatchedDataOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersMatchedDataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersMatchedDataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersMatchedDataOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._publicKey !== undefined) {
                hasAnyValues = true;
                internalValueResult.publicKey = this._publicKey;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._publicKey = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._publicKey = value.publicKey;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersMatchedDataOutputReference.prototype, "publicKey", {
        get: function () {
            return this.getStringAttribute('public_key');
        },
        set: function (value) {
            this._publicKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersMatchedDataOutputReference.prototype, "publicKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publicKey;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersMatchedDataOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersMatchedDataOutputReference = RulesetRulesActionParametersMatchedDataOutputReference;
function rulesetRulesActionParametersMaxAgeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
        value: cdktf.numberToTerraform(struct.value),
    };
}
function rulesetRulesActionParametersMaxAgeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.numberToHclTerraform(struct.value),
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
var RulesetRulesActionParametersMaxAgeOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersMaxAgeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersMaxAgeOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersMaxAgeOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._cloudflareOnly !== undefined) {
                hasAnyValues = true;
                internalValueResult.cloudflareOnly = this._cloudflareOnly;
            }
            if (this._operation !== undefined) {
                hasAnyValues = true;
                internalValueResult.operation = this._operation;
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
                this._cloudflareOnly = undefined;
                this._operation = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._cloudflareOnly = value.cloudflareOnly;
                this._operation = value.operation;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersMaxAgeOutputReference.prototype, "cloudflareOnly", {
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        set: function (value) {
            this._cloudflareOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersMaxAgeOutputReference.prototype.resetCloudflareOnly = function () {
        this._cloudflareOnly = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersMaxAgeOutputReference.prototype, "cloudflareOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudflareOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersMaxAgeOutputReference.prototype, "operation", {
        get: function () {
            return this.getStringAttribute('operation');
        },
        set: function (value) {
            this._operation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersMaxAgeOutputReference.prototype, "operationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersMaxAgeOutputReference.prototype, "value", {
        get: function () {
            return this.getNumberAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersMaxAgeOutputReference.prototype.resetValue = function () {
        this._value = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersMaxAgeOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersMaxAgeOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersMaxAgeOutputReference = RulesetRulesActionParametersMaxAgeOutputReference;
function rulesetRulesActionParametersMustRevalidateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
    };
}
function rulesetRulesActionParametersMustRevalidateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
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
var RulesetRulesActionParametersMustRevalidateOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersMustRevalidateOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersMustRevalidateOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersMustRevalidateOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._cloudflareOnly !== undefined) {
                hasAnyValues = true;
                internalValueResult.cloudflareOnly = this._cloudflareOnly;
            }
            if (this._operation !== undefined) {
                hasAnyValues = true;
                internalValueResult.operation = this._operation;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._cloudflareOnly = undefined;
                this._operation = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._cloudflareOnly = value.cloudflareOnly;
                this._operation = value.operation;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersMustRevalidateOutputReference.prototype, "cloudflareOnly", {
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        set: function (value) {
            this._cloudflareOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersMustRevalidateOutputReference.prototype.resetCloudflareOnly = function () {
        this._cloudflareOnly = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersMustRevalidateOutputReference.prototype, "cloudflareOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudflareOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersMustRevalidateOutputReference.prototype, "operation", {
        get: function () {
            return this.getStringAttribute('operation');
        },
        set: function (value) {
            this._operation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersMustRevalidateOutputReference.prototype, "operationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operation;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersMustRevalidateOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersMustRevalidateOutputReference = RulesetRulesActionParametersMustRevalidateOutputReference;
function rulesetRulesActionParametersMustUnderstandToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
    };
}
function rulesetRulesActionParametersMustUnderstandToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
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
var RulesetRulesActionParametersMustUnderstandOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersMustUnderstandOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersMustUnderstandOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersMustUnderstandOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._cloudflareOnly !== undefined) {
                hasAnyValues = true;
                internalValueResult.cloudflareOnly = this._cloudflareOnly;
            }
            if (this._operation !== undefined) {
                hasAnyValues = true;
                internalValueResult.operation = this._operation;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._cloudflareOnly = undefined;
                this._operation = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._cloudflareOnly = value.cloudflareOnly;
                this._operation = value.operation;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersMustUnderstandOutputReference.prototype, "cloudflareOnly", {
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        set: function (value) {
            this._cloudflareOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersMustUnderstandOutputReference.prototype.resetCloudflareOnly = function () {
        this._cloudflareOnly = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersMustUnderstandOutputReference.prototype, "cloudflareOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudflareOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersMustUnderstandOutputReference.prototype, "operation", {
        get: function () {
            return this.getStringAttribute('operation');
        },
        set: function (value) {
            this._operation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersMustUnderstandOutputReference.prototype, "operationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operation;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersMustUnderstandOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersMustUnderstandOutputReference = RulesetRulesActionParametersMustUnderstandOutputReference;
function rulesetRulesActionParametersNoCacheToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
        qualifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.qualifiers),
    };
}
function rulesetRulesActionParametersNoCacheToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        qualifiers: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.qualifiers),
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
var RulesetRulesActionParametersNoCacheOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersNoCacheOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersNoCacheOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersNoCacheOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._cloudflareOnly !== undefined) {
                hasAnyValues = true;
                internalValueResult.cloudflareOnly = this._cloudflareOnly;
            }
            if (this._operation !== undefined) {
                hasAnyValues = true;
                internalValueResult.operation = this._operation;
            }
            if (this._qualifiers !== undefined) {
                hasAnyValues = true;
                internalValueResult.qualifiers = this._qualifiers;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._cloudflareOnly = undefined;
                this._operation = undefined;
                this._qualifiers = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._cloudflareOnly = value.cloudflareOnly;
                this._operation = value.operation;
                this._qualifiers = value.qualifiers;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersNoCacheOutputReference.prototype, "cloudflareOnly", {
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        set: function (value) {
            this._cloudflareOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersNoCacheOutputReference.prototype.resetCloudflareOnly = function () {
        this._cloudflareOnly = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersNoCacheOutputReference.prototype, "cloudflareOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudflareOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersNoCacheOutputReference.prototype, "operation", {
        get: function () {
            return this.getStringAttribute('operation');
        },
        set: function (value) {
            this._operation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersNoCacheOutputReference.prototype, "operationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersNoCacheOutputReference.prototype, "qualifiers", {
        get: function () {
            return this.getListAttribute('qualifiers');
        },
        set: function (value) {
            this._qualifiers = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersNoCacheOutputReference.prototype.resetQualifiers = function () {
        this._qualifiers = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersNoCacheOutputReference.prototype, "qualifiersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._qualifiers;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersNoCacheOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersNoCacheOutputReference = RulesetRulesActionParametersNoCacheOutputReference;
function rulesetRulesActionParametersNoStoreToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
    };
}
function rulesetRulesActionParametersNoStoreToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
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
var RulesetRulesActionParametersNoStoreOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersNoStoreOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersNoStoreOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersNoStoreOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._cloudflareOnly !== undefined) {
                hasAnyValues = true;
                internalValueResult.cloudflareOnly = this._cloudflareOnly;
            }
            if (this._operation !== undefined) {
                hasAnyValues = true;
                internalValueResult.operation = this._operation;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._cloudflareOnly = undefined;
                this._operation = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._cloudflareOnly = value.cloudflareOnly;
                this._operation = value.operation;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersNoStoreOutputReference.prototype, "cloudflareOnly", {
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        set: function (value) {
            this._cloudflareOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersNoStoreOutputReference.prototype.resetCloudflareOnly = function () {
        this._cloudflareOnly = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersNoStoreOutputReference.prototype, "cloudflareOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudflareOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersNoStoreOutputReference.prototype, "operation", {
        get: function () {
            return this.getStringAttribute('operation');
        },
        set: function (value) {
            this._operation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersNoStoreOutputReference.prototype, "operationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operation;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersNoStoreOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersNoStoreOutputReference = RulesetRulesActionParametersNoStoreOutputReference;
function rulesetRulesActionParametersNoTransformToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
    };
}
function rulesetRulesActionParametersNoTransformToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
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
var RulesetRulesActionParametersNoTransformOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersNoTransformOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersNoTransformOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersNoTransformOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._cloudflareOnly !== undefined) {
                hasAnyValues = true;
                internalValueResult.cloudflareOnly = this._cloudflareOnly;
            }
            if (this._operation !== undefined) {
                hasAnyValues = true;
                internalValueResult.operation = this._operation;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._cloudflareOnly = undefined;
                this._operation = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._cloudflareOnly = value.cloudflareOnly;
                this._operation = value.operation;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersNoTransformOutputReference.prototype, "cloudflareOnly", {
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        set: function (value) {
            this._cloudflareOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersNoTransformOutputReference.prototype.resetCloudflareOnly = function () {
        this._cloudflareOnly = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersNoTransformOutputReference.prototype, "cloudflareOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudflareOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersNoTransformOutputReference.prototype, "operation", {
        get: function () {
            return this.getStringAttribute('operation');
        },
        set: function (value) {
            this._operation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersNoTransformOutputReference.prototype, "operationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operation;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersNoTransformOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersNoTransformOutputReference = RulesetRulesActionParametersNoTransformOutputReference;
function rulesetRulesActionParametersOriginToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port),
    };
}
function rulesetRulesActionParametersOriginToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        host: {
            value: cdktf.stringToHclTerraform(struct.host),
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var RulesetRulesActionParametersOriginOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersOriginOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersOriginOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersOriginOutputReference.prototype, "internalValue", {
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
            if (this._port !== undefined) {
                hasAnyValues = true;
                internalValueResult.port = this._port;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._host = undefined;
                this._port = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._host = value.host;
                this._port = value.port;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOriginOutputReference.prototype, "host", {
        get: function () {
            return this.getStringAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOriginOutputReference.prototype.resetHost = function () {
        this._host = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOriginOutputReference.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOriginOutputReference.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOriginOutputReference.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOriginOutputReference.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersOriginOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersOriginOutputReference = RulesetRulesActionParametersOriginOutputReference;
function rulesetRulesActionParametersOverridesCategoriesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        category: cdktf.stringToTerraform(struct.category),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        sensitivity_level: cdktf.stringToTerraform(struct.sensitivityLevel),
    };
}
function rulesetRulesActionParametersOverridesCategoriesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        action: {
            value: cdktf.stringToHclTerraform(struct.action),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        category: {
            value: cdktf.stringToHclTerraform(struct.category),
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
        sensitivity_level: {
            value: cdktf.stringToHclTerraform(struct.sensitivityLevel),
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
var RulesetRulesActionParametersOverridesCategoriesOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersOverridesCategoriesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RulesetRulesActionParametersOverridesCategoriesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersOverridesCategoriesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._action !== undefined) {
                hasAnyValues = true;
                internalValueResult.action = this._action;
            }
            if (this._category !== undefined) {
                hasAnyValues = true;
                internalValueResult.category = this._category;
            }
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._sensitivityLevel !== undefined) {
                hasAnyValues = true;
                internalValueResult.sensitivityLevel = this._sensitivityLevel;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._action = undefined;
                this._category = undefined;
                this._enabled = undefined;
                this._sensitivityLevel = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._action = value.action;
                this._category = value.category;
                this._enabled = value.enabled;
                this._sensitivityLevel = value.sensitivityLevel;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOverridesCategoriesOutputReference.prototype, "action", {
        get: function () {
            return this.getStringAttribute('action');
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOverridesCategoriesOutputReference.prototype.resetAction = function () {
        this._action = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOverridesCategoriesOutputReference.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOverridesCategoriesOutputReference.prototype, "category", {
        get: function () {
            return this.getStringAttribute('category');
        },
        set: function (value) {
            this._category = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOverridesCategoriesOutputReference.prototype, "categoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._category;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOverridesCategoriesOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOverridesCategoriesOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOverridesCategoriesOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOverridesCategoriesOutputReference.prototype, "sensitivityLevel", {
        get: function () {
            return this.getStringAttribute('sensitivity_level');
        },
        set: function (value) {
            this._sensitivityLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOverridesCategoriesOutputReference.prototype.resetSensitivityLevel = function () {
        this._sensitivityLevel = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOverridesCategoriesOutputReference.prototype, "sensitivityLevelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sensitivityLevel;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersOverridesCategoriesOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersOverridesCategoriesOutputReference = RulesetRulesActionParametersOverridesCategoriesOutputReference;
var RulesetRulesActionParametersOverridesCategoriesList = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersOverridesCategoriesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RulesetRulesActionParametersOverridesCategoriesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    RulesetRulesActionParametersOverridesCategoriesList.prototype.get = function (index) {
        return new RulesetRulesActionParametersOverridesCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return RulesetRulesActionParametersOverridesCategoriesList;
}(cdktf.ComplexList));
exports.RulesetRulesActionParametersOverridesCategoriesList = RulesetRulesActionParametersOverridesCategoriesList;
function rulesetRulesActionParametersOverridesRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        id: cdktf.stringToTerraform(struct.id),
        score_threshold: cdktf.numberToTerraform(struct.scoreThreshold),
        sensitivity_level: cdktf.stringToTerraform(struct.sensitivityLevel),
    };
}
function rulesetRulesActionParametersOverridesRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        action: {
            value: cdktf.stringToHclTerraform(struct.action),
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
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        score_threshold: {
            value: cdktf.numberToHclTerraform(struct.scoreThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        sensitivity_level: {
            value: cdktf.stringToHclTerraform(struct.sensitivityLevel),
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
var RulesetRulesActionParametersOverridesRulesOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersOverridesRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RulesetRulesActionParametersOverridesRulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersOverridesRulesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._action !== undefined) {
                hasAnyValues = true;
                internalValueResult.action = this._action;
            }
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            if (this._scoreThreshold !== undefined) {
                hasAnyValues = true;
                internalValueResult.scoreThreshold = this._scoreThreshold;
            }
            if (this._sensitivityLevel !== undefined) {
                hasAnyValues = true;
                internalValueResult.sensitivityLevel = this._sensitivityLevel;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._action = undefined;
                this._enabled = undefined;
                this._id = undefined;
                this._scoreThreshold = undefined;
                this._sensitivityLevel = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._action = value.action;
                this._enabled = value.enabled;
                this._id = value.id;
                this._scoreThreshold = value.scoreThreshold;
                this._sensitivityLevel = value.sensitivityLevel;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOverridesRulesOutputReference.prototype, "action", {
        get: function () {
            return this.getStringAttribute('action');
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOverridesRulesOutputReference.prototype.resetAction = function () {
        this._action = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOverridesRulesOutputReference.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOverridesRulesOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOverridesRulesOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOverridesRulesOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOverridesRulesOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOverridesRulesOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOverridesRulesOutputReference.prototype, "scoreThreshold", {
        get: function () {
            return this.getNumberAttribute('score_threshold');
        },
        set: function (value) {
            this._scoreThreshold = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOverridesRulesOutputReference.prototype.resetScoreThreshold = function () {
        this._scoreThreshold = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOverridesRulesOutputReference.prototype, "scoreThresholdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scoreThreshold;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOverridesRulesOutputReference.prototype, "sensitivityLevel", {
        get: function () {
            return this.getStringAttribute('sensitivity_level');
        },
        set: function (value) {
            this._sensitivityLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOverridesRulesOutputReference.prototype.resetSensitivityLevel = function () {
        this._sensitivityLevel = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOverridesRulesOutputReference.prototype, "sensitivityLevelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sensitivityLevel;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersOverridesRulesOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersOverridesRulesOutputReference = RulesetRulesActionParametersOverridesRulesOutputReference;
var RulesetRulesActionParametersOverridesRulesList = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersOverridesRulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RulesetRulesActionParametersOverridesRulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    RulesetRulesActionParametersOverridesRulesList.prototype.get = function (index) {
        return new RulesetRulesActionParametersOverridesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return RulesetRulesActionParametersOverridesRulesList;
}(cdktf.ComplexList));
exports.RulesetRulesActionParametersOverridesRulesList = RulesetRulesActionParametersOverridesRulesList;
function rulesetRulesActionParametersOverridesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        categories: cdktf.listMapper(rulesetRulesActionParametersOverridesCategoriesToTerraform, false)(struct.categories),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        rules: cdktf.listMapper(rulesetRulesActionParametersOverridesRulesToTerraform, false)(struct.rules),
        sensitivity_level: cdktf.stringToTerraform(struct.sensitivityLevel),
    };
}
function rulesetRulesActionParametersOverridesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        action: {
            value: cdktf.stringToHclTerraform(struct.action),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        categories: {
            value: cdktf.listMapperHcl(rulesetRulesActionParametersOverridesCategoriesToHclTerraform, false)(struct.categories),
            isBlock: true,
            type: "list",
            storageClassType: "RulesetRulesActionParametersOverridesCategoriesList",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        rules: {
            value: cdktf.listMapperHcl(rulesetRulesActionParametersOverridesRulesToHclTerraform, false)(struct.rules),
            isBlock: true,
            type: "list",
            storageClassType: "RulesetRulesActionParametersOverridesRulesList",
        },
        sensitivity_level: {
            value: cdktf.stringToHclTerraform(struct.sensitivityLevel),
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
var RulesetRulesActionParametersOverridesOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersOverridesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersOverridesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // categories - computed: true, optional: true, required: false
        _this._categories = new RulesetRulesActionParametersOverridesCategoriesList(_this, "categories", false);
        // rules - computed: true, optional: true, required: false
        _this._rules = new RulesetRulesActionParametersOverridesRulesList(_this, "rules", false);
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersOverridesOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._action !== undefined) {
                hasAnyValues = true;
                internalValueResult.action = this._action;
            }
            if (((_a = this._categories) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.categories = (_b = this._categories) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (((_c = this._rules) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.rules = (_d = this._rules) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (this._sensitivityLevel !== undefined) {
                hasAnyValues = true;
                internalValueResult.sensitivityLevel = this._sensitivityLevel;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._action = undefined;
                this._categories.internalValue = undefined;
                this._enabled = undefined;
                this._rules.internalValue = undefined;
                this._sensitivityLevel = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._action = value.action;
                this._categories.internalValue = value.categories;
                this._enabled = value.enabled;
                this._rules.internalValue = value.rules;
                this._sensitivityLevel = value.sensitivityLevel;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOverridesOutputReference.prototype, "action", {
        get: function () {
            return this.getStringAttribute('action');
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOverridesOutputReference.prototype.resetAction = function () {
        this._action = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOverridesOutputReference.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOverridesOutputReference.prototype, "categories", {
        get: function () {
            return this._categories;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOverridesOutputReference.prototype.putCategories = function (value) {
        this._categories.internalValue = value;
    };
    RulesetRulesActionParametersOverridesOutputReference.prototype.resetCategories = function () {
        this._categories.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOverridesOutputReference.prototype, "categoriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._categories.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOverridesOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOverridesOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOverridesOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOverridesOutputReference.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOverridesOutputReference.prototype.putRules = function (value) {
        this._rules.internalValue = value;
    };
    RulesetRulesActionParametersOverridesOutputReference.prototype.resetRules = function () {
        this._rules.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOverridesOutputReference.prototype, "rulesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rules.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOverridesOutputReference.prototype, "sensitivityLevel", {
        get: function () {
            return this.getStringAttribute('sensitivity_level');
        },
        set: function (value) {
            this._sensitivityLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOverridesOutputReference.prototype.resetSensitivityLevel = function () {
        this._sensitivityLevel = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOverridesOutputReference.prototype, "sensitivityLevelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sensitivityLevel;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersOverridesOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersOverridesOutputReference = RulesetRulesActionParametersOverridesOutputReference;
function rulesetRulesActionParametersPrivateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
        qualifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.qualifiers),
    };
}
function rulesetRulesActionParametersPrivateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        qualifiers: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.qualifiers),
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
var RulesetRulesActionParametersPrivateOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersPrivateOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersPrivateOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersPrivateOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._cloudflareOnly !== undefined) {
                hasAnyValues = true;
                internalValueResult.cloudflareOnly = this._cloudflareOnly;
            }
            if (this._operation !== undefined) {
                hasAnyValues = true;
                internalValueResult.operation = this._operation;
            }
            if (this._qualifiers !== undefined) {
                hasAnyValues = true;
                internalValueResult.qualifiers = this._qualifiers;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._cloudflareOnly = undefined;
                this._operation = undefined;
                this._qualifiers = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._cloudflareOnly = value.cloudflareOnly;
                this._operation = value.operation;
                this._qualifiers = value.qualifiers;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersPrivateOutputReference.prototype, "cloudflareOnly", {
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        set: function (value) {
            this._cloudflareOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersPrivateOutputReference.prototype.resetCloudflareOnly = function () {
        this._cloudflareOnly = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersPrivateOutputReference.prototype, "cloudflareOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudflareOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersPrivateOutputReference.prototype, "operation", {
        get: function () {
            return this.getStringAttribute('operation');
        },
        set: function (value) {
            this._operation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersPrivateOutputReference.prototype, "operationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersPrivateOutputReference.prototype, "qualifiers", {
        get: function () {
            return this.getListAttribute('qualifiers');
        },
        set: function (value) {
            this._qualifiers = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersPrivateOutputReference.prototype.resetQualifiers = function () {
        this._qualifiers = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersPrivateOutputReference.prototype, "qualifiersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._qualifiers;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersPrivateOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersPrivateOutputReference = RulesetRulesActionParametersPrivateOutputReference;
function rulesetRulesActionParametersProxyRevalidateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
    };
}
function rulesetRulesActionParametersProxyRevalidateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
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
var RulesetRulesActionParametersProxyRevalidateOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersProxyRevalidateOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersProxyRevalidateOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersProxyRevalidateOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._cloudflareOnly !== undefined) {
                hasAnyValues = true;
                internalValueResult.cloudflareOnly = this._cloudflareOnly;
            }
            if (this._operation !== undefined) {
                hasAnyValues = true;
                internalValueResult.operation = this._operation;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._cloudflareOnly = undefined;
                this._operation = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._cloudflareOnly = value.cloudflareOnly;
                this._operation = value.operation;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersProxyRevalidateOutputReference.prototype, "cloudflareOnly", {
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        set: function (value) {
            this._cloudflareOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersProxyRevalidateOutputReference.prototype.resetCloudflareOnly = function () {
        this._cloudflareOnly = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersProxyRevalidateOutputReference.prototype, "cloudflareOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudflareOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersProxyRevalidateOutputReference.prototype, "operation", {
        get: function () {
            return this.getStringAttribute('operation');
        },
        set: function (value) {
            this._operation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersProxyRevalidateOutputReference.prototype, "operationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operation;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersProxyRevalidateOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersProxyRevalidateOutputReference = RulesetRulesActionParametersProxyRevalidateOutputReference;
function rulesetRulesActionParametersPublicToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
    };
}
function rulesetRulesActionParametersPublicToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
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
var RulesetRulesActionParametersPublicOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersPublicOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersPublicOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersPublicOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._cloudflareOnly !== undefined) {
                hasAnyValues = true;
                internalValueResult.cloudflareOnly = this._cloudflareOnly;
            }
            if (this._operation !== undefined) {
                hasAnyValues = true;
                internalValueResult.operation = this._operation;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._cloudflareOnly = undefined;
                this._operation = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._cloudflareOnly = value.cloudflareOnly;
                this._operation = value.operation;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersPublicOutputReference.prototype, "cloudflareOnly", {
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        set: function (value) {
            this._cloudflareOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersPublicOutputReference.prototype.resetCloudflareOnly = function () {
        this._cloudflareOnly = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersPublicOutputReference.prototype, "cloudflareOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudflareOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersPublicOutputReference.prototype, "operation", {
        get: function () {
            return this.getStringAttribute('operation');
        },
        set: function (value) {
            this._operation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersPublicOutputReference.prototype, "operationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operation;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersPublicOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersPublicOutputReference = RulesetRulesActionParametersPublicOutputReference;
function rulesetRulesActionParametersRawResponseFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        preserve_duplicates: cdktf.booleanToTerraform(struct.preserveDuplicates),
    };
}
function rulesetRulesActionParametersRawResponseFieldsToHclTerraform(struct) {
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
        preserve_duplicates: {
            value: cdktf.booleanToHclTerraform(struct.preserveDuplicates),
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
var RulesetRulesActionParametersRawResponseFieldsOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersRawResponseFieldsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RulesetRulesActionParametersRawResponseFieldsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersRawResponseFieldsOutputReference.prototype, "internalValue", {
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
            if (this._preserveDuplicates !== undefined) {
                hasAnyValues = true;
                internalValueResult.preserveDuplicates = this._preserveDuplicates;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._name = undefined;
                this._preserveDuplicates = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._name = value.name;
                this._preserveDuplicates = value.preserveDuplicates;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersRawResponseFieldsOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersRawResponseFieldsOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersRawResponseFieldsOutputReference.prototype, "preserveDuplicates", {
        get: function () {
            return this.getBooleanAttribute('preserve_duplicates');
        },
        set: function (value) {
            this._preserveDuplicates = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersRawResponseFieldsOutputReference.prototype.resetPreserveDuplicates = function () {
        this._preserveDuplicates = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersRawResponseFieldsOutputReference.prototype, "preserveDuplicatesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preserveDuplicates;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersRawResponseFieldsOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersRawResponseFieldsOutputReference = RulesetRulesActionParametersRawResponseFieldsOutputReference;
var RulesetRulesActionParametersRawResponseFieldsList = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersRawResponseFieldsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RulesetRulesActionParametersRawResponseFieldsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    RulesetRulesActionParametersRawResponseFieldsList.prototype.get = function (index) {
        return new RulesetRulesActionParametersRawResponseFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return RulesetRulesActionParametersRawResponseFieldsList;
}(cdktf.ComplexList));
exports.RulesetRulesActionParametersRawResponseFieldsList = RulesetRulesActionParametersRawResponseFieldsList;
function rulesetRulesActionParametersRequestFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
function rulesetRulesActionParametersRequestFieldsToHclTerraform(struct) {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var RulesetRulesActionParametersRequestFieldsOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersRequestFieldsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RulesetRulesActionParametersRequestFieldsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersRequestFieldsOutputReference.prototype, "internalValue", {
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
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._name = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._name = value.name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersRequestFieldsOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersRequestFieldsOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersRequestFieldsOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersRequestFieldsOutputReference = RulesetRulesActionParametersRequestFieldsOutputReference;
var RulesetRulesActionParametersRequestFieldsList = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersRequestFieldsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RulesetRulesActionParametersRequestFieldsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    RulesetRulesActionParametersRequestFieldsList.prototype.get = function (index) {
        return new RulesetRulesActionParametersRequestFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return RulesetRulesActionParametersRequestFieldsList;
}(cdktf.ComplexList));
exports.RulesetRulesActionParametersRequestFieldsList = RulesetRulesActionParametersRequestFieldsList;
function rulesetRulesActionParametersResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_type: cdktf.stringToTerraform(struct.contentType),
        status_code: cdktf.numberToTerraform(struct.statusCode),
    };
}
function rulesetRulesActionParametersResponseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        content: {
            value: cdktf.stringToHclTerraform(struct.content),
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
var RulesetRulesActionParametersResponseOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersResponseOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersResponseOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersResponseOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._content !== undefined) {
                hasAnyValues = true;
                internalValueResult.content = this._content;
            }
            if (this._contentType !== undefined) {
                hasAnyValues = true;
                internalValueResult.contentType = this._contentType;
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
                this._content = undefined;
                this._contentType = undefined;
                this._statusCode = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._content = value.content;
                this._contentType = value.contentType;
                this._statusCode = value.statusCode;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersResponseOutputReference.prototype, "content", {
        get: function () {
            return this.getStringAttribute('content');
        },
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersResponseOutputReference.prototype, "contentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersResponseOutputReference.prototype, "contentType", {
        get: function () {
            return this.getStringAttribute('content_type');
        },
        set: function (value) {
            this._contentType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersResponseOutputReference.prototype, "contentTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersResponseOutputReference.prototype, "statusCode", {
        get: function () {
            return this.getNumberAttribute('status_code');
        },
        set: function (value) {
            this._statusCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersResponseOutputReference.prototype, "statusCodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._statusCode;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersResponseOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersResponseOutputReference = RulesetRulesActionParametersResponseOutputReference;
function rulesetRulesActionParametersResponseFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        preserve_duplicates: cdktf.booleanToTerraform(struct.preserveDuplicates),
    };
}
function rulesetRulesActionParametersResponseFieldsToHclTerraform(struct) {
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
        preserve_duplicates: {
            value: cdktf.booleanToHclTerraform(struct.preserveDuplicates),
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
var RulesetRulesActionParametersResponseFieldsOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersResponseFieldsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RulesetRulesActionParametersResponseFieldsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersResponseFieldsOutputReference.prototype, "internalValue", {
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
            if (this._preserveDuplicates !== undefined) {
                hasAnyValues = true;
                internalValueResult.preserveDuplicates = this._preserveDuplicates;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._name = undefined;
                this._preserveDuplicates = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._name = value.name;
                this._preserveDuplicates = value.preserveDuplicates;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersResponseFieldsOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersResponseFieldsOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersResponseFieldsOutputReference.prototype, "preserveDuplicates", {
        get: function () {
            return this.getBooleanAttribute('preserve_duplicates');
        },
        set: function (value) {
            this._preserveDuplicates = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersResponseFieldsOutputReference.prototype.resetPreserveDuplicates = function () {
        this._preserveDuplicates = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersResponseFieldsOutputReference.prototype, "preserveDuplicatesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preserveDuplicates;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersResponseFieldsOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersResponseFieldsOutputReference = RulesetRulesActionParametersResponseFieldsOutputReference;
var RulesetRulesActionParametersResponseFieldsList = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersResponseFieldsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RulesetRulesActionParametersResponseFieldsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    RulesetRulesActionParametersResponseFieldsList.prototype.get = function (index) {
        return new RulesetRulesActionParametersResponseFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return RulesetRulesActionParametersResponseFieldsList;
}(cdktf.ComplexList));
exports.RulesetRulesActionParametersResponseFieldsList = RulesetRulesActionParametersResponseFieldsList;
function rulesetRulesActionParametersSMaxageToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
        value: cdktf.numberToTerraform(struct.value),
    };
}
function rulesetRulesActionParametersSMaxageToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.numberToHclTerraform(struct.value),
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
var RulesetRulesActionParametersSMaxageOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersSMaxageOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersSMaxageOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersSMaxageOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._cloudflareOnly !== undefined) {
                hasAnyValues = true;
                internalValueResult.cloudflareOnly = this._cloudflareOnly;
            }
            if (this._operation !== undefined) {
                hasAnyValues = true;
                internalValueResult.operation = this._operation;
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
                this._cloudflareOnly = undefined;
                this._operation = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._cloudflareOnly = value.cloudflareOnly;
                this._operation = value.operation;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersSMaxageOutputReference.prototype, "cloudflareOnly", {
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        set: function (value) {
            this._cloudflareOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersSMaxageOutputReference.prototype.resetCloudflareOnly = function () {
        this._cloudflareOnly = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersSMaxageOutputReference.prototype, "cloudflareOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudflareOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersSMaxageOutputReference.prototype, "operation", {
        get: function () {
            return this.getStringAttribute('operation');
        },
        set: function (value) {
            this._operation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersSMaxageOutputReference.prototype, "operationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersSMaxageOutputReference.prototype, "value", {
        get: function () {
            return this.getNumberAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersSMaxageOutputReference.prototype.resetValue = function () {
        this._value = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersSMaxageOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersSMaxageOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersSMaxageOutputReference = RulesetRulesActionParametersSMaxageOutputReference;
function rulesetRulesActionParametersServeStaleToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disable_stale_while_updating: cdktf.booleanToTerraform(struct.disableStaleWhileUpdating),
    };
}
function rulesetRulesActionParametersServeStaleToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        disable_stale_while_updating: {
            value: cdktf.booleanToHclTerraform(struct.disableStaleWhileUpdating),
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
var RulesetRulesActionParametersServeStaleOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersServeStaleOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersServeStaleOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersServeStaleOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._disableStaleWhileUpdating !== undefined) {
                hasAnyValues = true;
                internalValueResult.disableStaleWhileUpdating = this._disableStaleWhileUpdating;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._disableStaleWhileUpdating = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._disableStaleWhileUpdating = value.disableStaleWhileUpdating;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersServeStaleOutputReference.prototype, "disableStaleWhileUpdating", {
        get: function () {
            return this.getBooleanAttribute('disable_stale_while_updating');
        },
        set: function (value) {
            this._disableStaleWhileUpdating = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersServeStaleOutputReference.prototype.resetDisableStaleWhileUpdating = function () {
        this._disableStaleWhileUpdating = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersServeStaleOutputReference.prototype, "disableStaleWhileUpdatingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableStaleWhileUpdating;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersServeStaleOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersServeStaleOutputReference = RulesetRulesActionParametersServeStaleOutputReference;
function rulesetRulesActionParametersSniToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        value: cdktf.stringToTerraform(struct.value),
    };
}
function rulesetRulesActionParametersSniToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
var RulesetRulesActionParametersSniOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersSniOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersSniOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersSniOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
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
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersSniOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersSniOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersSniOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersSniOutputReference = RulesetRulesActionParametersSniOutputReference;
function rulesetRulesActionParametersStaleIfErrorToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
        value: cdktf.numberToTerraform(struct.value),
    };
}
function rulesetRulesActionParametersStaleIfErrorToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.numberToHclTerraform(struct.value),
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
var RulesetRulesActionParametersStaleIfErrorOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersStaleIfErrorOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersStaleIfErrorOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersStaleIfErrorOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._cloudflareOnly !== undefined) {
                hasAnyValues = true;
                internalValueResult.cloudflareOnly = this._cloudflareOnly;
            }
            if (this._operation !== undefined) {
                hasAnyValues = true;
                internalValueResult.operation = this._operation;
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
                this._cloudflareOnly = undefined;
                this._operation = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._cloudflareOnly = value.cloudflareOnly;
                this._operation = value.operation;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersStaleIfErrorOutputReference.prototype, "cloudflareOnly", {
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        set: function (value) {
            this._cloudflareOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersStaleIfErrorOutputReference.prototype.resetCloudflareOnly = function () {
        this._cloudflareOnly = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersStaleIfErrorOutputReference.prototype, "cloudflareOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudflareOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersStaleIfErrorOutputReference.prototype, "operation", {
        get: function () {
            return this.getStringAttribute('operation');
        },
        set: function (value) {
            this._operation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersStaleIfErrorOutputReference.prototype, "operationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersStaleIfErrorOutputReference.prototype, "value", {
        get: function () {
            return this.getNumberAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersStaleIfErrorOutputReference.prototype.resetValue = function () {
        this._value = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersStaleIfErrorOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersStaleIfErrorOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersStaleIfErrorOutputReference = RulesetRulesActionParametersStaleIfErrorOutputReference;
function rulesetRulesActionParametersStaleWhileRevalidateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudflare_only: cdktf.booleanToTerraform(struct.cloudflareOnly),
        operation: cdktf.stringToTerraform(struct.operation),
        value: cdktf.numberToTerraform(struct.value),
    };
}
function rulesetRulesActionParametersStaleWhileRevalidateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cloudflare_only: {
            value: cdktf.booleanToHclTerraform(struct.cloudflareOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.numberToHclTerraform(struct.value),
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
var RulesetRulesActionParametersStaleWhileRevalidateOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersStaleWhileRevalidateOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersStaleWhileRevalidateOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersStaleWhileRevalidateOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._cloudflareOnly !== undefined) {
                hasAnyValues = true;
                internalValueResult.cloudflareOnly = this._cloudflareOnly;
            }
            if (this._operation !== undefined) {
                hasAnyValues = true;
                internalValueResult.operation = this._operation;
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
                this._cloudflareOnly = undefined;
                this._operation = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._cloudflareOnly = value.cloudflareOnly;
                this._operation = value.operation;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersStaleWhileRevalidateOutputReference.prototype, "cloudflareOnly", {
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        set: function (value) {
            this._cloudflareOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersStaleWhileRevalidateOutputReference.prototype.resetCloudflareOnly = function () {
        this._cloudflareOnly = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersStaleWhileRevalidateOutputReference.prototype, "cloudflareOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudflareOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersStaleWhileRevalidateOutputReference.prototype, "operation", {
        get: function () {
            return this.getStringAttribute('operation');
        },
        set: function (value) {
            this._operation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersStaleWhileRevalidateOutputReference.prototype, "operationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersStaleWhileRevalidateOutputReference.prototype, "value", {
        get: function () {
            return this.getNumberAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersStaleWhileRevalidateOutputReference.prototype.resetValue = function () {
        this._value = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersStaleWhileRevalidateOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersStaleWhileRevalidateOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersStaleWhileRevalidateOutputReference = RulesetRulesActionParametersStaleWhileRevalidateOutputReference;
function rulesetRulesActionParametersTransformedRequestFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
function rulesetRulesActionParametersTransformedRequestFieldsToHclTerraform(struct) {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var RulesetRulesActionParametersTransformedRequestFieldsOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersTransformedRequestFieldsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RulesetRulesActionParametersTransformedRequestFieldsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersTransformedRequestFieldsOutputReference.prototype, "internalValue", {
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
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._name = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._name = value.name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersTransformedRequestFieldsOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersTransformedRequestFieldsOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersTransformedRequestFieldsOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersTransformedRequestFieldsOutputReference = RulesetRulesActionParametersTransformedRequestFieldsOutputReference;
var RulesetRulesActionParametersTransformedRequestFieldsList = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersTransformedRequestFieldsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RulesetRulesActionParametersTransformedRequestFieldsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    RulesetRulesActionParametersTransformedRequestFieldsList.prototype.get = function (index) {
        return new RulesetRulesActionParametersTransformedRequestFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return RulesetRulesActionParametersTransformedRequestFieldsList;
}(cdktf.ComplexList));
exports.RulesetRulesActionParametersTransformedRequestFieldsList = RulesetRulesActionParametersTransformedRequestFieldsList;
function rulesetRulesActionParametersUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        expression: cdktf.stringToTerraform(struct.expression),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function rulesetRulesActionParametersUriPathToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        expression: {
            value: cdktf.stringToHclTerraform(struct.expression),
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
var RulesetRulesActionParametersUriPathOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersUriPathOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersUriPathOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersUriPathOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._expression !== undefined) {
                hasAnyValues = true;
                internalValueResult.expression = this._expression;
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
                this._expression = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._expression = value.expression;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersUriPathOutputReference.prototype, "expression", {
        get: function () {
            return this.getStringAttribute('expression');
        },
        set: function (value) {
            this._expression = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersUriPathOutputReference.prototype.resetExpression = function () {
        this._expression = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersUriPathOutputReference.prototype, "expressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersUriPathOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersUriPathOutputReference.prototype.resetValue = function () {
        this._value = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersUriPathOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersUriPathOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersUriPathOutputReference = RulesetRulesActionParametersUriPathOutputReference;
function rulesetRulesActionParametersUriQueryToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        expression: cdktf.stringToTerraform(struct.expression),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function rulesetRulesActionParametersUriQueryToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        expression: {
            value: cdktf.stringToHclTerraform(struct.expression),
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
var RulesetRulesActionParametersUriQueryOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersUriQueryOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersUriQueryOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersUriQueryOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._expression !== undefined) {
                hasAnyValues = true;
                internalValueResult.expression = this._expression;
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
                this._expression = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._expression = value.expression;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersUriQueryOutputReference.prototype, "expression", {
        get: function () {
            return this.getStringAttribute('expression');
        },
        set: function (value) {
            this._expression = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersUriQueryOutputReference.prototype.resetExpression = function () {
        this._expression = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersUriQueryOutputReference.prototype, "expressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersUriQueryOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersUriQueryOutputReference.prototype.resetValue = function () {
        this._value = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersUriQueryOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersUriQueryOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersUriQueryOutputReference = RulesetRulesActionParametersUriQueryOutputReference;
function rulesetRulesActionParametersUriToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        path: rulesetRulesActionParametersUriPathToTerraform(struct.path),
        query: rulesetRulesActionParametersUriQueryToTerraform(struct.query),
    };
}
function rulesetRulesActionParametersUriToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        path: {
            value: rulesetRulesActionParametersUriPathToHclTerraform(struct.path),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersUriPath",
        },
        query: {
            value: rulesetRulesActionParametersUriQueryToHclTerraform(struct.query),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersUriQuery",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var RulesetRulesActionParametersUriOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersUriOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersUriOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // path - computed: true, optional: true, required: false
        _this._path = new RulesetRulesActionParametersUriPathOutputReference(_this, "path");
        // query - computed: true, optional: true, required: false
        _this._query = new RulesetRulesActionParametersUriQueryOutputReference(_this, "query");
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersUriOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._path) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.path = (_b = this._path) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._query) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.query = (_d = this._query) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._path.internalValue = undefined;
                this._query.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._path.internalValue = value.path;
                this._query.internalValue = value.query;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersUriOutputReference.prototype, "path", {
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersUriOutputReference.prototype.putPath = function (value) {
        this._path.internalValue = value;
    };
    RulesetRulesActionParametersUriOutputReference.prototype.resetPath = function () {
        this._path.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersUriOutputReference.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersUriOutputReference.prototype, "query", {
        get: function () {
            return this._query;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersUriOutputReference.prototype.putQuery = function (value) {
        this._query.internalValue = value;
    };
    RulesetRulesActionParametersUriOutputReference.prototype.resetQuery = function () {
        this._query.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersUriOutputReference.prototype, "queryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._query.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersUriOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersUriOutputReference = RulesetRulesActionParametersUriOutputReference;
function rulesetRulesActionParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        additional_cacheable_ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct.additionalCacheablePorts),
        algorithms: cdktf.listMapper(rulesetRulesActionParametersAlgorithmsToTerraform, false)(struct.algorithms),
        asset_name: cdktf.stringToTerraform(struct.assetName),
        automatic_https_rewrites: cdktf.booleanToTerraform(struct.automaticHttpsRewrites),
        autominify: rulesetRulesActionParametersAutominifyToTerraform(struct.autominify),
        bic: cdktf.booleanToTerraform(struct.bic),
        browser_ttl: rulesetRulesActionParametersBrowserTtlToTerraform(struct.browserTtl),
        cache: cdktf.booleanToTerraform(struct.cache),
        cache_key: rulesetRulesActionParametersCacheKeyToTerraform(struct.cacheKey),
        cache_reserve: rulesetRulesActionParametersCacheReserveToTerraform(struct.cacheReserve),
        content: cdktf.stringToTerraform(struct.content),
        content_converter: cdktf.booleanToTerraform(struct.contentConverter),
        content_type: cdktf.stringToTerraform(struct.contentType),
        cookie_fields: cdktf.listMapper(rulesetRulesActionParametersCookieFieldsToTerraform, false)(struct.cookieFields),
        disable_apps: cdktf.booleanToTerraform(struct.disableApps),
        disable_rum: cdktf.booleanToTerraform(struct.disableRum),
        disable_zaraz: cdktf.booleanToTerraform(struct.disableZaraz),
        edge_ttl: rulesetRulesActionParametersEdgeTtlToTerraform(struct.edgeTtl),
        email_obfuscation: cdktf.booleanToTerraform(struct.emailObfuscation),
        expression: cdktf.stringToTerraform(struct.expression),
        fonts: cdktf.booleanToTerraform(struct.fonts),
        from_list: rulesetRulesActionParametersFromListStructToTerraform(struct.fromList),
        from_value: rulesetRulesActionParametersFromValueToTerraform(struct.fromValue),
        headers: cdktf.hashMapper(rulesetRulesActionParametersHeadersToTerraform)(struct.headers),
        host_header: cdktf.stringToTerraform(struct.hostHeader),
        hotlink_protection: cdktf.booleanToTerraform(struct.hotlinkProtection),
        id: cdktf.stringToTerraform(struct.id),
        immutable: rulesetRulesActionParametersImmutableToTerraform(struct.immutable),
        increment: cdktf.numberToTerraform(struct.increment),
        matched_data: rulesetRulesActionParametersMatchedDataToTerraform(struct.matchedData),
        max_age: rulesetRulesActionParametersMaxAgeToTerraform(struct.maxAge),
        mirage: cdktf.booleanToTerraform(struct.mirage),
        must_revalidate: rulesetRulesActionParametersMustRevalidateToTerraform(struct.mustRevalidate),
        must_understand: rulesetRulesActionParametersMustUnderstandToTerraform(struct.mustUnderstand),
        no_cache: rulesetRulesActionParametersNoCacheToTerraform(struct.noCache),
        no_store: rulesetRulesActionParametersNoStoreToTerraform(struct.noStore),
        no_transform: rulesetRulesActionParametersNoTransformToTerraform(struct.noTransform),
        operation: cdktf.stringToTerraform(struct.operation),
        opportunistic_encryption: cdktf.booleanToTerraform(struct.opportunisticEncryption),
        origin: rulesetRulesActionParametersOriginToTerraform(struct.origin),
        origin_cache_control: cdktf.booleanToTerraform(struct.originCacheControl),
        origin_error_page_passthru: cdktf.booleanToTerraform(struct.originErrorPagePassthru),
        overrides: rulesetRulesActionParametersOverridesToTerraform(struct.overrides),
        phases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.phases),
        polish: cdktf.stringToTerraform(struct.polish),
        private: rulesetRulesActionParametersPrivateToTerraform(struct.private),
        products: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.products),
        proxy_revalidate: rulesetRulesActionParametersProxyRevalidateToTerraform(struct.proxyRevalidate),
        public: rulesetRulesActionParametersPublicToTerraform(struct.public),
        raw_response_fields: cdktf.listMapper(rulesetRulesActionParametersRawResponseFieldsToTerraform, false)(struct.rawResponseFields),
        read_timeout: cdktf.numberToTerraform(struct.readTimeout),
        redirects_for_ai_training: cdktf.booleanToTerraform(struct.redirectsForAiTraining),
        request_body_buffering: cdktf.stringToTerraform(struct.requestBodyBuffering),
        request_fields: cdktf.listMapper(rulesetRulesActionParametersRequestFieldsToTerraform, false)(struct.requestFields),
        respect_strong_etags: cdktf.booleanToTerraform(struct.respectStrongEtags),
        response: rulesetRulesActionParametersResponseToTerraform(struct.response),
        response_body_buffering: cdktf.stringToTerraform(struct.responseBodyBuffering),
        response_fields: cdktf.listMapper(rulesetRulesActionParametersResponseFieldsToTerraform, false)(struct.responseFields),
        rocket_loader: cdktf.booleanToTerraform(struct.rocketLoader),
        rules: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct.rules),
        ruleset: cdktf.stringToTerraform(struct.ruleset),
        rulesets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.rulesets),
        s_maxage: rulesetRulesActionParametersSMaxageToTerraform(struct.sMaxage),
        security_level: cdktf.stringToTerraform(struct.securityLevel),
        serve_stale: rulesetRulesActionParametersServeStaleToTerraform(struct.serveStale),
        server_side_excludes: cdktf.booleanToTerraform(struct.serverSideExcludes),
        sni: rulesetRulesActionParametersSniToTerraform(struct.sni),
        ssl: cdktf.stringToTerraform(struct.ssl),
        stale_if_error: rulesetRulesActionParametersStaleIfErrorToTerraform(struct.staleIfError),
        stale_while_revalidate: rulesetRulesActionParametersStaleWhileRevalidateToTerraform(struct.staleWhileRevalidate),
        status_code: cdktf.numberToTerraform(struct.statusCode),
        strip_etags: cdktf.booleanToTerraform(struct.stripEtags),
        strip_last_modified: cdktf.booleanToTerraform(struct.stripLastModified),
        strip_set_cookie: cdktf.booleanToTerraform(struct.stripSetCookie),
        sxg: cdktf.booleanToTerraform(struct.sxg),
        transformed_request_fields: cdktf.listMapper(rulesetRulesActionParametersTransformedRequestFieldsToTerraform, false)(struct.transformedRequestFields),
        uri: rulesetRulesActionParametersUriToTerraform(struct.uri),
        values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.values),
    };
}
function rulesetRulesActionParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        additional_cacheable_ports: {
            value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct.additionalCacheablePorts),
            isBlock: false,
            type: "list",
            storageClassType: "numberList",
        },
        algorithms: {
            value: cdktf.listMapperHcl(rulesetRulesActionParametersAlgorithmsToHclTerraform, false)(struct.algorithms),
            isBlock: true,
            type: "list",
            storageClassType: "RulesetRulesActionParametersAlgorithmsList",
        },
        asset_name: {
            value: cdktf.stringToHclTerraform(struct.assetName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        automatic_https_rewrites: {
            value: cdktf.booleanToHclTerraform(struct.automaticHttpsRewrites),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        autominify: {
            value: rulesetRulesActionParametersAutominifyToHclTerraform(struct.autominify),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersAutominify",
        },
        bic: {
            value: cdktf.booleanToHclTerraform(struct.bic),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        browser_ttl: {
            value: rulesetRulesActionParametersBrowserTtlToHclTerraform(struct.browserTtl),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersBrowserTtl",
        },
        cache: {
            value: cdktf.booleanToHclTerraform(struct.cache),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        cache_key: {
            value: rulesetRulesActionParametersCacheKeyToHclTerraform(struct.cacheKey),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersCacheKey",
        },
        cache_reserve: {
            value: rulesetRulesActionParametersCacheReserveToHclTerraform(struct.cacheReserve),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersCacheReserve",
        },
        content: {
            value: cdktf.stringToHclTerraform(struct.content),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_converter: {
            value: cdktf.booleanToHclTerraform(struct.contentConverter),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        content_type: {
            value: cdktf.stringToHclTerraform(struct.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cookie_fields: {
            value: cdktf.listMapperHcl(rulesetRulesActionParametersCookieFieldsToHclTerraform, false)(struct.cookieFields),
            isBlock: true,
            type: "list",
            storageClassType: "RulesetRulesActionParametersCookieFieldsList",
        },
        disable_apps: {
            value: cdktf.booleanToHclTerraform(struct.disableApps),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        disable_rum: {
            value: cdktf.booleanToHclTerraform(struct.disableRum),
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
        edge_ttl: {
            value: rulesetRulesActionParametersEdgeTtlToHclTerraform(struct.edgeTtl),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersEdgeTtl",
        },
        email_obfuscation: {
            value: cdktf.booleanToHclTerraform(struct.emailObfuscation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        expression: {
            value: cdktf.stringToHclTerraform(struct.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fonts: {
            value: cdktf.booleanToHclTerraform(struct.fonts),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        from_list: {
            value: rulesetRulesActionParametersFromListStructToHclTerraform(struct.fromList),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersFromListStruct",
        },
        from_value: {
            value: rulesetRulesActionParametersFromValueToHclTerraform(struct.fromValue),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersFromValue",
        },
        headers: {
            value: cdktf.hashMapperHcl(rulesetRulesActionParametersHeadersToHclTerraform)(struct.headers),
            isBlock: true,
            type: "map",
            storageClassType: "RulesetRulesActionParametersHeadersMap",
        },
        host_header: {
            value: cdktf.stringToHclTerraform(struct.hostHeader),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hotlink_protection: {
            value: cdktf.booleanToHclTerraform(struct.hotlinkProtection),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        immutable: {
            value: rulesetRulesActionParametersImmutableToHclTerraform(struct.immutable),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersImmutable",
        },
        increment: {
            value: cdktf.numberToHclTerraform(struct.increment),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        matched_data: {
            value: rulesetRulesActionParametersMatchedDataToHclTerraform(struct.matchedData),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersMatchedData",
        },
        max_age: {
            value: rulesetRulesActionParametersMaxAgeToHclTerraform(struct.maxAge),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersMaxAge",
        },
        mirage: {
            value: cdktf.booleanToHclTerraform(struct.mirage),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        must_revalidate: {
            value: rulesetRulesActionParametersMustRevalidateToHclTerraform(struct.mustRevalidate),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersMustRevalidate",
        },
        must_understand: {
            value: rulesetRulesActionParametersMustUnderstandToHclTerraform(struct.mustUnderstand),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersMustUnderstand",
        },
        no_cache: {
            value: rulesetRulesActionParametersNoCacheToHclTerraform(struct.noCache),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersNoCache",
        },
        no_store: {
            value: rulesetRulesActionParametersNoStoreToHclTerraform(struct.noStore),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersNoStore",
        },
        no_transform: {
            value: rulesetRulesActionParametersNoTransformToHclTerraform(struct.noTransform),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersNoTransform",
        },
        operation: {
            value: cdktf.stringToHclTerraform(struct.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        opportunistic_encryption: {
            value: cdktf.booleanToHclTerraform(struct.opportunisticEncryption),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        origin: {
            value: rulesetRulesActionParametersOriginToHclTerraform(struct.origin),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersOrigin",
        },
        origin_cache_control: {
            value: cdktf.booleanToHclTerraform(struct.originCacheControl),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        origin_error_page_passthru: {
            value: cdktf.booleanToHclTerraform(struct.originErrorPagePassthru),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        overrides: {
            value: rulesetRulesActionParametersOverridesToHclTerraform(struct.overrides),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersOverrides",
        },
        phases: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.phases),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        polish: {
            value: cdktf.stringToHclTerraform(struct.polish),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        private: {
            value: rulesetRulesActionParametersPrivateToHclTerraform(struct.private),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersPrivate",
        },
        products: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.products),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        proxy_revalidate: {
            value: rulesetRulesActionParametersProxyRevalidateToHclTerraform(struct.proxyRevalidate),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersProxyRevalidate",
        },
        public: {
            value: rulesetRulesActionParametersPublicToHclTerraform(struct.public),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersPublic",
        },
        raw_response_fields: {
            value: cdktf.listMapperHcl(rulesetRulesActionParametersRawResponseFieldsToHclTerraform, false)(struct.rawResponseFields),
            isBlock: true,
            type: "list",
            storageClassType: "RulesetRulesActionParametersRawResponseFieldsList",
        },
        read_timeout: {
            value: cdktf.numberToHclTerraform(struct.readTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        redirects_for_ai_training: {
            value: cdktf.booleanToHclTerraform(struct.redirectsForAiTraining),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        request_body_buffering: {
            value: cdktf.stringToHclTerraform(struct.requestBodyBuffering),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        request_fields: {
            value: cdktf.listMapperHcl(rulesetRulesActionParametersRequestFieldsToHclTerraform, false)(struct.requestFields),
            isBlock: true,
            type: "list",
            storageClassType: "RulesetRulesActionParametersRequestFieldsList",
        },
        respect_strong_etags: {
            value: cdktf.booleanToHclTerraform(struct.respectStrongEtags),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        response: {
            value: rulesetRulesActionParametersResponseToHclTerraform(struct.response),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersResponse",
        },
        response_body_buffering: {
            value: cdktf.stringToHclTerraform(struct.responseBodyBuffering),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        response_fields: {
            value: cdktf.listMapperHcl(rulesetRulesActionParametersResponseFieldsToHclTerraform, false)(struct.responseFields),
            isBlock: true,
            type: "list",
            storageClassType: "RulesetRulesActionParametersResponseFieldsList",
        },
        rocket_loader: {
            value: cdktf.booleanToHclTerraform(struct.rocketLoader),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        rules: {
            value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct.rules),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
        ruleset: {
            value: cdktf.stringToHclTerraform(struct.ruleset),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rulesets: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.rulesets),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        s_maxage: {
            value: rulesetRulesActionParametersSMaxageToHclTerraform(struct.sMaxage),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersSMaxage",
        },
        security_level: {
            value: cdktf.stringToHclTerraform(struct.securityLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        serve_stale: {
            value: rulesetRulesActionParametersServeStaleToHclTerraform(struct.serveStale),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersServeStale",
        },
        server_side_excludes: {
            value: cdktf.booleanToHclTerraform(struct.serverSideExcludes),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        sni: {
            value: rulesetRulesActionParametersSniToHclTerraform(struct.sni),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersSni",
        },
        ssl: {
            value: cdktf.stringToHclTerraform(struct.ssl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        stale_if_error: {
            value: rulesetRulesActionParametersStaleIfErrorToHclTerraform(struct.staleIfError),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersStaleIfError",
        },
        stale_while_revalidate: {
            value: rulesetRulesActionParametersStaleWhileRevalidateToHclTerraform(struct.staleWhileRevalidate),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersStaleWhileRevalidate",
        },
        status_code: {
            value: cdktf.numberToHclTerraform(struct.statusCode),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        strip_etags: {
            value: cdktf.booleanToHclTerraform(struct.stripEtags),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        strip_last_modified: {
            value: cdktf.booleanToHclTerraform(struct.stripLastModified),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        strip_set_cookie: {
            value: cdktf.booleanToHclTerraform(struct.stripSetCookie),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        sxg: {
            value: cdktf.booleanToHclTerraform(struct.sxg),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        transformed_request_fields: {
            value: cdktf.listMapperHcl(rulesetRulesActionParametersTransformedRequestFieldsToHclTerraform, false)(struct.transformedRequestFields),
            isBlock: true,
            type: "list",
            storageClassType: "RulesetRulesActionParametersTransformedRequestFieldsList",
        },
        uri: {
            value: rulesetRulesActionParametersUriToHclTerraform(struct.uri),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParametersUri",
        },
        values: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.values),
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
var RulesetRulesActionParametersOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesActionParametersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesActionParametersOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // algorithms - computed: true, optional: true, required: false
        _this._algorithms = new RulesetRulesActionParametersAlgorithmsList(_this, "algorithms", false);
        // autominify - computed: true, optional: true, required: false
        _this._autominify = new RulesetRulesActionParametersAutominifyOutputReference(_this, "autominify");
        // browser_ttl - computed: true, optional: true, required: false
        _this._browserTtl = new RulesetRulesActionParametersBrowserTtlOutputReference(_this, "browser_ttl");
        // cache_key - computed: true, optional: true, required: false
        _this._cacheKey = new RulesetRulesActionParametersCacheKeyOutputReference(_this, "cache_key");
        // cache_reserve - computed: true, optional: true, required: false
        _this._cacheReserve = new RulesetRulesActionParametersCacheReserveOutputReference(_this, "cache_reserve");
        // cookie_fields - computed: true, optional: true, required: false
        _this._cookieFields = new RulesetRulesActionParametersCookieFieldsList(_this, "cookie_fields", false);
        // edge_ttl - computed: true, optional: true, required: false
        _this._edgeTtl = new RulesetRulesActionParametersEdgeTtlOutputReference(_this, "edge_ttl");
        // from_list - computed: true, optional: true, required: false
        _this._fromList = new RulesetRulesActionParametersFromListStructOutputReference(_this, "from_list");
        // from_value - computed: true, optional: true, required: false
        _this._fromValue = new RulesetRulesActionParametersFromValueOutputReference(_this, "from_value");
        // headers - computed: true, optional: true, required: false
        _this._headers = new RulesetRulesActionParametersHeadersMap(_this, "headers");
        // immutable - computed: true, optional: true, required: false
        _this._immutable = new RulesetRulesActionParametersImmutableOutputReference(_this, "immutable");
        // matched_data - computed: true, optional: true, required: false
        _this._matchedData = new RulesetRulesActionParametersMatchedDataOutputReference(_this, "matched_data");
        // max_age - computed: true, optional: true, required: false
        _this._maxAge = new RulesetRulesActionParametersMaxAgeOutputReference(_this, "max_age");
        // must_revalidate - computed: true, optional: true, required: false
        _this._mustRevalidate = new RulesetRulesActionParametersMustRevalidateOutputReference(_this, "must_revalidate");
        // must_understand - computed: true, optional: true, required: false
        _this._mustUnderstand = new RulesetRulesActionParametersMustUnderstandOutputReference(_this, "must_understand");
        // no_cache - computed: true, optional: true, required: false
        _this._noCache = new RulesetRulesActionParametersNoCacheOutputReference(_this, "no_cache");
        // no_store - computed: true, optional: true, required: false
        _this._noStore = new RulesetRulesActionParametersNoStoreOutputReference(_this, "no_store");
        // no_transform - computed: true, optional: true, required: false
        _this._noTransform = new RulesetRulesActionParametersNoTransformOutputReference(_this, "no_transform");
        // origin - computed: true, optional: true, required: false
        _this._origin = new RulesetRulesActionParametersOriginOutputReference(_this, "origin");
        // overrides - computed: true, optional: true, required: false
        _this._overrides = new RulesetRulesActionParametersOverridesOutputReference(_this, "overrides");
        // private - computed: true, optional: true, required: false
        _this._private = new RulesetRulesActionParametersPrivateOutputReference(_this, "private");
        // proxy_revalidate - computed: true, optional: true, required: false
        _this._proxyRevalidate = new RulesetRulesActionParametersProxyRevalidateOutputReference(_this, "proxy_revalidate");
        // public - computed: true, optional: true, required: false
        _this._public = new RulesetRulesActionParametersPublicOutputReference(_this, "public");
        // raw_response_fields - computed: true, optional: true, required: false
        _this._rawResponseFields = new RulesetRulesActionParametersRawResponseFieldsList(_this, "raw_response_fields", false);
        // request_fields - computed: true, optional: true, required: false
        _this._requestFields = new RulesetRulesActionParametersRequestFieldsList(_this, "request_fields", false);
        // response - computed: true, optional: true, required: false
        _this._response = new RulesetRulesActionParametersResponseOutputReference(_this, "response");
        // response_fields - computed: true, optional: true, required: false
        _this._responseFields = new RulesetRulesActionParametersResponseFieldsList(_this, "response_fields", false);
        // s_maxage - computed: true, optional: true, required: false
        _this._sMaxage = new RulesetRulesActionParametersSMaxageOutputReference(_this, "s_maxage");
        // serve_stale - computed: true, optional: true, required: false
        _this._serveStale = new RulesetRulesActionParametersServeStaleOutputReference(_this, "serve_stale");
        // sni - computed: true, optional: true, required: false
        _this._sni = new RulesetRulesActionParametersSniOutputReference(_this, "sni");
        // stale_if_error - computed: true, optional: true, required: false
        _this._staleIfError = new RulesetRulesActionParametersStaleIfErrorOutputReference(_this, "stale_if_error");
        // stale_while_revalidate - computed: true, optional: true, required: false
        _this._staleWhileRevalidate = new RulesetRulesActionParametersStaleWhileRevalidateOutputReference(_this, "stale_while_revalidate");
        // transformed_request_fields - computed: true, optional: true, required: false
        _this._transformedRequestFields = new RulesetRulesActionParametersTransformedRequestFieldsList(_this, "transformed_request_fields", false);
        // uri - computed: true, optional: true, required: false
        _this._uri = new RulesetRulesActionParametersUriOutputReference(_this, "uri");
        return _this;
    }
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._additionalCacheablePorts !== undefined) {
                hasAnyValues = true;
                internalValueResult.additionalCacheablePorts = this._additionalCacheablePorts;
            }
            if (((_a = this._algorithms) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.algorithms = (_b = this._algorithms) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._assetName !== undefined) {
                hasAnyValues = true;
                internalValueResult.assetName = this._assetName;
            }
            if (this._automaticHttpsRewrites !== undefined) {
                hasAnyValues = true;
                internalValueResult.automaticHttpsRewrites = this._automaticHttpsRewrites;
            }
            if (((_c = this._autominify) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.autominify = (_d = this._autominify) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (this._bic !== undefined) {
                hasAnyValues = true;
                internalValueResult.bic = this._bic;
            }
            if (((_e = this._browserTtl) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.browserTtl = (_f = this._browserTtl) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            if (this._cache !== undefined) {
                hasAnyValues = true;
                internalValueResult.cache = this._cache;
            }
            if (((_g = this._cacheKey) === null || _g === void 0 ? void 0 : _g.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.cacheKey = (_h = this._cacheKey) === null || _h === void 0 ? void 0 : _h.internalValue;
            }
            if (((_j = this._cacheReserve) === null || _j === void 0 ? void 0 : _j.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.cacheReserve = (_k = this._cacheReserve) === null || _k === void 0 ? void 0 : _k.internalValue;
            }
            if (this._content !== undefined) {
                hasAnyValues = true;
                internalValueResult.content = this._content;
            }
            if (this._contentConverter !== undefined) {
                hasAnyValues = true;
                internalValueResult.contentConverter = this._contentConverter;
            }
            if (this._contentType !== undefined) {
                hasAnyValues = true;
                internalValueResult.contentType = this._contentType;
            }
            if (((_l = this._cookieFields) === null || _l === void 0 ? void 0 : _l.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.cookieFields = (_m = this._cookieFields) === null || _m === void 0 ? void 0 : _m.internalValue;
            }
            if (this._disableApps !== undefined) {
                hasAnyValues = true;
                internalValueResult.disableApps = this._disableApps;
            }
            if (this._disableRum !== undefined) {
                hasAnyValues = true;
                internalValueResult.disableRum = this._disableRum;
            }
            if (this._disableZaraz !== undefined) {
                hasAnyValues = true;
                internalValueResult.disableZaraz = this._disableZaraz;
            }
            if (((_o = this._edgeTtl) === null || _o === void 0 ? void 0 : _o.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.edgeTtl = (_p = this._edgeTtl) === null || _p === void 0 ? void 0 : _p.internalValue;
            }
            if (this._emailObfuscation !== undefined) {
                hasAnyValues = true;
                internalValueResult.emailObfuscation = this._emailObfuscation;
            }
            if (this._expression !== undefined) {
                hasAnyValues = true;
                internalValueResult.expression = this._expression;
            }
            if (this._fonts !== undefined) {
                hasAnyValues = true;
                internalValueResult.fonts = this._fonts;
            }
            if (((_q = this._fromList) === null || _q === void 0 ? void 0 : _q.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.fromList = (_r = this._fromList) === null || _r === void 0 ? void 0 : _r.internalValue;
            }
            if (((_s = this._fromValue) === null || _s === void 0 ? void 0 : _s.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.fromValue = (_t = this._fromValue) === null || _t === void 0 ? void 0 : _t.internalValue;
            }
            if (((_u = this._headers) === null || _u === void 0 ? void 0 : _u.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.headers = (_v = this._headers) === null || _v === void 0 ? void 0 : _v.internalValue;
            }
            if (this._hostHeader !== undefined) {
                hasAnyValues = true;
                internalValueResult.hostHeader = this._hostHeader;
            }
            if (this._hotlinkProtection !== undefined) {
                hasAnyValues = true;
                internalValueResult.hotlinkProtection = this._hotlinkProtection;
            }
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            if (((_w = this._immutable) === null || _w === void 0 ? void 0 : _w.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.immutable = (_x = this._immutable) === null || _x === void 0 ? void 0 : _x.internalValue;
            }
            if (this._increment !== undefined) {
                hasAnyValues = true;
                internalValueResult.increment = this._increment;
            }
            if (((_y = this._matchedData) === null || _y === void 0 ? void 0 : _y.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.matchedData = (_z = this._matchedData) === null || _z === void 0 ? void 0 : _z.internalValue;
            }
            if (((_0 = this._maxAge) === null || _0 === void 0 ? void 0 : _0.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.maxAge = (_1 = this._maxAge) === null || _1 === void 0 ? void 0 : _1.internalValue;
            }
            if (this._mirage !== undefined) {
                hasAnyValues = true;
                internalValueResult.mirage = this._mirage;
            }
            if (((_2 = this._mustRevalidate) === null || _2 === void 0 ? void 0 : _2.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.mustRevalidate = (_3 = this._mustRevalidate) === null || _3 === void 0 ? void 0 : _3.internalValue;
            }
            if (((_4 = this._mustUnderstand) === null || _4 === void 0 ? void 0 : _4.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.mustUnderstand = (_5 = this._mustUnderstand) === null || _5 === void 0 ? void 0 : _5.internalValue;
            }
            if (((_6 = this._noCache) === null || _6 === void 0 ? void 0 : _6.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.noCache = (_7 = this._noCache) === null || _7 === void 0 ? void 0 : _7.internalValue;
            }
            if (((_8 = this._noStore) === null || _8 === void 0 ? void 0 : _8.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.noStore = (_9 = this._noStore) === null || _9 === void 0 ? void 0 : _9.internalValue;
            }
            if (((_10 = this._noTransform) === null || _10 === void 0 ? void 0 : _10.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.noTransform = (_11 = this._noTransform) === null || _11 === void 0 ? void 0 : _11.internalValue;
            }
            if (this._operation !== undefined) {
                hasAnyValues = true;
                internalValueResult.operation = this._operation;
            }
            if (this._opportunisticEncryption !== undefined) {
                hasAnyValues = true;
                internalValueResult.opportunisticEncryption = this._opportunisticEncryption;
            }
            if (((_12 = this._origin) === null || _12 === void 0 ? void 0 : _12.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.origin = (_13 = this._origin) === null || _13 === void 0 ? void 0 : _13.internalValue;
            }
            if (this._originCacheControl !== undefined) {
                hasAnyValues = true;
                internalValueResult.originCacheControl = this._originCacheControl;
            }
            if (this._originErrorPagePassthru !== undefined) {
                hasAnyValues = true;
                internalValueResult.originErrorPagePassthru = this._originErrorPagePassthru;
            }
            if (((_14 = this._overrides) === null || _14 === void 0 ? void 0 : _14.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.overrides = (_15 = this._overrides) === null || _15 === void 0 ? void 0 : _15.internalValue;
            }
            if (this._phases !== undefined) {
                hasAnyValues = true;
                internalValueResult.phases = this._phases;
            }
            if (this._polish !== undefined) {
                hasAnyValues = true;
                internalValueResult.polish = this._polish;
            }
            if (((_16 = this._private) === null || _16 === void 0 ? void 0 : _16.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.private = (_17 = this._private) === null || _17 === void 0 ? void 0 : _17.internalValue;
            }
            if (this._products !== undefined) {
                hasAnyValues = true;
                internalValueResult.products = this._products;
            }
            if (((_18 = this._proxyRevalidate) === null || _18 === void 0 ? void 0 : _18.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.proxyRevalidate = (_19 = this._proxyRevalidate) === null || _19 === void 0 ? void 0 : _19.internalValue;
            }
            if (((_20 = this._public) === null || _20 === void 0 ? void 0 : _20.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.public = (_21 = this._public) === null || _21 === void 0 ? void 0 : _21.internalValue;
            }
            if (((_22 = this._rawResponseFields) === null || _22 === void 0 ? void 0 : _22.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.rawResponseFields = (_23 = this._rawResponseFields) === null || _23 === void 0 ? void 0 : _23.internalValue;
            }
            if (this._readTimeout !== undefined) {
                hasAnyValues = true;
                internalValueResult.readTimeout = this._readTimeout;
            }
            if (this._redirectsForAiTraining !== undefined) {
                hasAnyValues = true;
                internalValueResult.redirectsForAiTraining = this._redirectsForAiTraining;
            }
            if (this._requestBodyBuffering !== undefined) {
                hasAnyValues = true;
                internalValueResult.requestBodyBuffering = this._requestBodyBuffering;
            }
            if (((_24 = this._requestFields) === null || _24 === void 0 ? void 0 : _24.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.requestFields = (_25 = this._requestFields) === null || _25 === void 0 ? void 0 : _25.internalValue;
            }
            if (this._respectStrongEtags !== undefined) {
                hasAnyValues = true;
                internalValueResult.respectStrongEtags = this._respectStrongEtags;
            }
            if (((_26 = this._response) === null || _26 === void 0 ? void 0 : _26.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.response = (_27 = this._response) === null || _27 === void 0 ? void 0 : _27.internalValue;
            }
            if (this._responseBodyBuffering !== undefined) {
                hasAnyValues = true;
                internalValueResult.responseBodyBuffering = this._responseBodyBuffering;
            }
            if (((_28 = this._responseFields) === null || _28 === void 0 ? void 0 : _28.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.responseFields = (_29 = this._responseFields) === null || _29 === void 0 ? void 0 : _29.internalValue;
            }
            if (this._rocketLoader !== undefined) {
                hasAnyValues = true;
                internalValueResult.rocketLoader = this._rocketLoader;
            }
            if (this._rules !== undefined) {
                hasAnyValues = true;
                internalValueResult.rules = this._rules;
            }
            if (this._ruleset !== undefined) {
                hasAnyValues = true;
                internalValueResult.ruleset = this._ruleset;
            }
            if (this._rulesets !== undefined) {
                hasAnyValues = true;
                internalValueResult.rulesets = this._rulesets;
            }
            if (((_30 = this._sMaxage) === null || _30 === void 0 ? void 0 : _30.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.sMaxage = (_31 = this._sMaxage) === null || _31 === void 0 ? void 0 : _31.internalValue;
            }
            if (this._securityLevel !== undefined) {
                hasAnyValues = true;
                internalValueResult.securityLevel = this._securityLevel;
            }
            if (((_32 = this._serveStale) === null || _32 === void 0 ? void 0 : _32.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.serveStale = (_33 = this._serveStale) === null || _33 === void 0 ? void 0 : _33.internalValue;
            }
            if (this._serverSideExcludes !== undefined) {
                hasAnyValues = true;
                internalValueResult.serverSideExcludes = this._serverSideExcludes;
            }
            if (((_34 = this._sni) === null || _34 === void 0 ? void 0 : _34.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.sni = (_35 = this._sni) === null || _35 === void 0 ? void 0 : _35.internalValue;
            }
            if (this._ssl !== undefined) {
                hasAnyValues = true;
                internalValueResult.ssl = this._ssl;
            }
            if (((_36 = this._staleIfError) === null || _36 === void 0 ? void 0 : _36.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.staleIfError = (_37 = this._staleIfError) === null || _37 === void 0 ? void 0 : _37.internalValue;
            }
            if (((_38 = this._staleWhileRevalidate) === null || _38 === void 0 ? void 0 : _38.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.staleWhileRevalidate = (_39 = this._staleWhileRevalidate) === null || _39 === void 0 ? void 0 : _39.internalValue;
            }
            if (this._statusCode !== undefined) {
                hasAnyValues = true;
                internalValueResult.statusCode = this._statusCode;
            }
            if (this._stripEtags !== undefined) {
                hasAnyValues = true;
                internalValueResult.stripEtags = this._stripEtags;
            }
            if (this._stripLastModified !== undefined) {
                hasAnyValues = true;
                internalValueResult.stripLastModified = this._stripLastModified;
            }
            if (this._stripSetCookie !== undefined) {
                hasAnyValues = true;
                internalValueResult.stripSetCookie = this._stripSetCookie;
            }
            if (this._sxg !== undefined) {
                hasAnyValues = true;
                internalValueResult.sxg = this._sxg;
            }
            if (((_40 = this._transformedRequestFields) === null || _40 === void 0 ? void 0 : _40.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.transformedRequestFields = (_41 = this._transformedRequestFields) === null || _41 === void 0 ? void 0 : _41.internalValue;
            }
            if (((_42 = this._uri) === null || _42 === void 0 ? void 0 : _42.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.uri = (_43 = this._uri) === null || _43 === void 0 ? void 0 : _43.internalValue;
            }
            if (this._values !== undefined) {
                hasAnyValues = true;
                internalValueResult.values = this._values;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._additionalCacheablePorts = undefined;
                this._algorithms.internalValue = undefined;
                this._assetName = undefined;
                this._automaticHttpsRewrites = undefined;
                this._autominify.internalValue = undefined;
                this._bic = undefined;
                this._browserTtl.internalValue = undefined;
                this._cache = undefined;
                this._cacheKey.internalValue = undefined;
                this._cacheReserve.internalValue = undefined;
                this._content = undefined;
                this._contentConverter = undefined;
                this._contentType = undefined;
                this._cookieFields.internalValue = undefined;
                this._disableApps = undefined;
                this._disableRum = undefined;
                this._disableZaraz = undefined;
                this._edgeTtl.internalValue = undefined;
                this._emailObfuscation = undefined;
                this._expression = undefined;
                this._fonts = undefined;
                this._fromList.internalValue = undefined;
                this._fromValue.internalValue = undefined;
                this._headers.internalValue = undefined;
                this._hostHeader = undefined;
                this._hotlinkProtection = undefined;
                this._id = undefined;
                this._immutable.internalValue = undefined;
                this._increment = undefined;
                this._matchedData.internalValue = undefined;
                this._maxAge.internalValue = undefined;
                this._mirage = undefined;
                this._mustRevalidate.internalValue = undefined;
                this._mustUnderstand.internalValue = undefined;
                this._noCache.internalValue = undefined;
                this._noStore.internalValue = undefined;
                this._noTransform.internalValue = undefined;
                this._operation = undefined;
                this._opportunisticEncryption = undefined;
                this._origin.internalValue = undefined;
                this._originCacheControl = undefined;
                this._originErrorPagePassthru = undefined;
                this._overrides.internalValue = undefined;
                this._phases = undefined;
                this._polish = undefined;
                this._private.internalValue = undefined;
                this._products = undefined;
                this._proxyRevalidate.internalValue = undefined;
                this._public.internalValue = undefined;
                this._rawResponseFields.internalValue = undefined;
                this._readTimeout = undefined;
                this._redirectsForAiTraining = undefined;
                this._requestBodyBuffering = undefined;
                this._requestFields.internalValue = undefined;
                this._respectStrongEtags = undefined;
                this._response.internalValue = undefined;
                this._responseBodyBuffering = undefined;
                this._responseFields.internalValue = undefined;
                this._rocketLoader = undefined;
                this._rules = undefined;
                this._ruleset = undefined;
                this._rulesets = undefined;
                this._sMaxage.internalValue = undefined;
                this._securityLevel = undefined;
                this._serveStale.internalValue = undefined;
                this._serverSideExcludes = undefined;
                this._sni.internalValue = undefined;
                this._ssl = undefined;
                this._staleIfError.internalValue = undefined;
                this._staleWhileRevalidate.internalValue = undefined;
                this._statusCode = undefined;
                this._stripEtags = undefined;
                this._stripLastModified = undefined;
                this._stripSetCookie = undefined;
                this._sxg = undefined;
                this._transformedRequestFields.internalValue = undefined;
                this._uri.internalValue = undefined;
                this._values = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._additionalCacheablePorts = value.additionalCacheablePorts;
                this._algorithms.internalValue = value.algorithms;
                this._assetName = value.assetName;
                this._automaticHttpsRewrites = value.automaticHttpsRewrites;
                this._autominify.internalValue = value.autominify;
                this._bic = value.bic;
                this._browserTtl.internalValue = value.browserTtl;
                this._cache = value.cache;
                this._cacheKey.internalValue = value.cacheKey;
                this._cacheReserve.internalValue = value.cacheReserve;
                this._content = value.content;
                this._contentConverter = value.contentConverter;
                this._contentType = value.contentType;
                this._cookieFields.internalValue = value.cookieFields;
                this._disableApps = value.disableApps;
                this._disableRum = value.disableRum;
                this._disableZaraz = value.disableZaraz;
                this._edgeTtl.internalValue = value.edgeTtl;
                this._emailObfuscation = value.emailObfuscation;
                this._expression = value.expression;
                this._fonts = value.fonts;
                this._fromList.internalValue = value.fromList;
                this._fromValue.internalValue = value.fromValue;
                this._headers.internalValue = value.headers;
                this._hostHeader = value.hostHeader;
                this._hotlinkProtection = value.hotlinkProtection;
                this._id = value.id;
                this._immutable.internalValue = value.immutable;
                this._increment = value.increment;
                this._matchedData.internalValue = value.matchedData;
                this._maxAge.internalValue = value.maxAge;
                this._mirage = value.mirage;
                this._mustRevalidate.internalValue = value.mustRevalidate;
                this._mustUnderstand.internalValue = value.mustUnderstand;
                this._noCache.internalValue = value.noCache;
                this._noStore.internalValue = value.noStore;
                this._noTransform.internalValue = value.noTransform;
                this._operation = value.operation;
                this._opportunisticEncryption = value.opportunisticEncryption;
                this._origin.internalValue = value.origin;
                this._originCacheControl = value.originCacheControl;
                this._originErrorPagePassthru = value.originErrorPagePassthru;
                this._overrides.internalValue = value.overrides;
                this._phases = value.phases;
                this._polish = value.polish;
                this._private.internalValue = value.private;
                this._products = value.products;
                this._proxyRevalidate.internalValue = value.proxyRevalidate;
                this._public.internalValue = value.public;
                this._rawResponseFields.internalValue = value.rawResponseFields;
                this._readTimeout = value.readTimeout;
                this._redirectsForAiTraining = value.redirectsForAiTraining;
                this._requestBodyBuffering = value.requestBodyBuffering;
                this._requestFields.internalValue = value.requestFields;
                this._respectStrongEtags = value.respectStrongEtags;
                this._response.internalValue = value.response;
                this._responseBodyBuffering = value.responseBodyBuffering;
                this._responseFields.internalValue = value.responseFields;
                this._rocketLoader = value.rocketLoader;
                this._rules = value.rules;
                this._ruleset = value.ruleset;
                this._rulesets = value.rulesets;
                this._sMaxage.internalValue = value.sMaxage;
                this._securityLevel = value.securityLevel;
                this._serveStale.internalValue = value.serveStale;
                this._serverSideExcludes = value.serverSideExcludes;
                this._sni.internalValue = value.sni;
                this._ssl = value.ssl;
                this._staleIfError.internalValue = value.staleIfError;
                this._staleWhileRevalidate.internalValue = value.staleWhileRevalidate;
                this._statusCode = value.statusCode;
                this._stripEtags = value.stripEtags;
                this._stripLastModified = value.stripLastModified;
                this._stripSetCookie = value.stripSetCookie;
                this._sxg = value.sxg;
                this._transformedRequestFields.internalValue = value.transformedRequestFields;
                this._uri.internalValue = value.uri;
                this._values = value.values;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "additionalCacheablePorts", {
        get: function () {
            return this.getNumberListAttribute('additional_cacheable_ports');
        },
        set: function (value) {
            this._additionalCacheablePorts = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetAdditionalCacheablePorts = function () {
        this._additionalCacheablePorts = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "additionalCacheablePortsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._additionalCacheablePorts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "algorithms", {
        get: function () {
            return this._algorithms;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putAlgorithms = function (value) {
        this._algorithms.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetAlgorithms = function () {
        this._algorithms.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "algorithmsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._algorithms.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "assetName", {
        get: function () {
            return this.getStringAttribute('asset_name');
        },
        set: function (value) {
            this._assetName = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetAssetName = function () {
        this._assetName = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "assetNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._assetName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "automaticHttpsRewrites", {
        get: function () {
            return this.getBooleanAttribute('automatic_https_rewrites');
        },
        set: function (value) {
            this._automaticHttpsRewrites = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetAutomaticHttpsRewrites = function () {
        this._automaticHttpsRewrites = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "automaticHttpsRewritesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._automaticHttpsRewrites;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "autominify", {
        get: function () {
            return this._autominify;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putAutominify = function (value) {
        this._autominify.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetAutominify = function () {
        this._autominify.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "autominifyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autominify.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "bic", {
        get: function () {
            return this.getBooleanAttribute('bic');
        },
        set: function (value) {
            this._bic = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetBic = function () {
        this._bic = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "bicInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bic;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "browserTtl", {
        get: function () {
            return this._browserTtl;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putBrowserTtl = function (value) {
        this._browserTtl.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetBrowserTtl = function () {
        this._browserTtl.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "browserTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._browserTtl.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "cache", {
        get: function () {
            return this.getBooleanAttribute('cache');
        },
        set: function (value) {
            this._cache = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetCache = function () {
        this._cache = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "cacheInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cache;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "cacheKey", {
        get: function () {
            return this._cacheKey;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putCacheKey = function (value) {
        this._cacheKey.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetCacheKey = function () {
        this._cacheKey.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "cacheKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cacheKey.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "cacheReserve", {
        get: function () {
            return this._cacheReserve;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putCacheReserve = function (value) {
        this._cacheReserve.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetCacheReserve = function () {
        this._cacheReserve.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "cacheReserveInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cacheReserve.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "content", {
        get: function () {
            return this.getStringAttribute('content');
        },
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetContent = function () {
        this._content = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "contentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "contentConverter", {
        get: function () {
            return this.getBooleanAttribute('content_converter');
        },
        set: function (value) {
            this._contentConverter = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetContentConverter = function () {
        this._contentConverter = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "contentConverterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentConverter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "contentType", {
        get: function () {
            return this.getStringAttribute('content_type');
        },
        set: function (value) {
            this._contentType = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetContentType = function () {
        this._contentType = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "contentTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "cookieFields", {
        get: function () {
            return this._cookieFields;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putCookieFields = function (value) {
        this._cookieFields.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetCookieFields = function () {
        this._cookieFields.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "cookieFieldsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cookieFields.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "disableApps", {
        get: function () {
            return this.getBooleanAttribute('disable_apps');
        },
        set: function (value) {
            this._disableApps = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetDisableApps = function () {
        this._disableApps = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "disableAppsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableApps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "disableRum", {
        get: function () {
            return this.getBooleanAttribute('disable_rum');
        },
        set: function (value) {
            this._disableRum = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetDisableRum = function () {
        this._disableRum = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "disableRumInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableRum;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "disableZaraz", {
        get: function () {
            return this.getBooleanAttribute('disable_zaraz');
        },
        set: function (value) {
            this._disableZaraz = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetDisableZaraz = function () {
        this._disableZaraz = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "disableZarazInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableZaraz;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "edgeTtl", {
        get: function () {
            return this._edgeTtl;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putEdgeTtl = function (value) {
        this._edgeTtl.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetEdgeTtl = function () {
        this._edgeTtl.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "edgeTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._edgeTtl.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "emailObfuscation", {
        get: function () {
            return this.getBooleanAttribute('email_obfuscation');
        },
        set: function (value) {
            this._emailObfuscation = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetEmailObfuscation = function () {
        this._emailObfuscation = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "emailObfuscationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._emailObfuscation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "expression", {
        get: function () {
            return this.getStringAttribute('expression');
        },
        set: function (value) {
            this._expression = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetExpression = function () {
        this._expression = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "expressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "fonts", {
        get: function () {
            return this.getBooleanAttribute('fonts');
        },
        set: function (value) {
            this._fonts = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetFonts = function () {
        this._fonts = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "fontsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fonts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "fromList", {
        get: function () {
            return this._fromList;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putFromList = function (value) {
        this._fromList.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetFromList = function () {
        this._fromList.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "fromListInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fromList.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "fromValue", {
        get: function () {
            return this._fromValue;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putFromValue = function (value) {
        this._fromValue.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetFromValue = function () {
        this._fromValue.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "fromValueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fromValue.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "headers", {
        get: function () {
            return this._headers;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putHeaders = function (value) {
        this._headers.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetHeaders = function () {
        this._headers.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "headersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._headers.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "hostHeader", {
        get: function () {
            return this.getStringAttribute('host_header');
        },
        set: function (value) {
            this._hostHeader = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetHostHeader = function () {
        this._hostHeader = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "hostHeaderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostHeader;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "hotlinkProtection", {
        get: function () {
            return this.getBooleanAttribute('hotlink_protection');
        },
        set: function (value) {
            this._hotlinkProtection = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetHotlinkProtection = function () {
        this._hotlinkProtection = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "hotlinkProtectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hotlinkProtection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "immutable", {
        get: function () {
            return this._immutable;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putImmutable = function (value) {
        this._immutable.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetImmutable = function () {
        this._immutable.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "immutableInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._immutable.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "increment", {
        get: function () {
            return this.getNumberAttribute('increment');
        },
        set: function (value) {
            this._increment = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetIncrement = function () {
        this._increment = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "incrementInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._increment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "matchedData", {
        get: function () {
            return this._matchedData;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putMatchedData = function (value) {
        this._matchedData.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetMatchedData = function () {
        this._matchedData.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "matchedDataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._matchedData.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "maxAge", {
        get: function () {
            return this._maxAge;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putMaxAge = function (value) {
        this._maxAge.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetMaxAge = function () {
        this._maxAge.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "maxAgeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxAge.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "mirage", {
        get: function () {
            return this.getBooleanAttribute('mirage');
        },
        set: function (value) {
            this._mirage = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetMirage = function () {
        this._mirage = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "mirageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mirage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "mustRevalidate", {
        get: function () {
            return this._mustRevalidate;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putMustRevalidate = function (value) {
        this._mustRevalidate.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetMustRevalidate = function () {
        this._mustRevalidate.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "mustRevalidateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mustRevalidate.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "mustUnderstand", {
        get: function () {
            return this._mustUnderstand;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putMustUnderstand = function (value) {
        this._mustUnderstand.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetMustUnderstand = function () {
        this._mustUnderstand.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "mustUnderstandInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mustUnderstand.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "noCache", {
        get: function () {
            return this._noCache;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putNoCache = function (value) {
        this._noCache.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetNoCache = function () {
        this._noCache.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "noCacheInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._noCache.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "noStore", {
        get: function () {
            return this._noStore;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putNoStore = function (value) {
        this._noStore.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetNoStore = function () {
        this._noStore.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "noStoreInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._noStore.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "noTransform", {
        get: function () {
            return this._noTransform;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putNoTransform = function (value) {
        this._noTransform.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetNoTransform = function () {
        this._noTransform.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "noTransformInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._noTransform.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "operation", {
        get: function () {
            return this.getStringAttribute('operation');
        },
        set: function (value) {
            this._operation = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetOperation = function () {
        this._operation = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "operationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "opportunisticEncryption", {
        get: function () {
            return this.getBooleanAttribute('opportunistic_encryption');
        },
        set: function (value) {
            this._opportunisticEncryption = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetOpportunisticEncryption = function () {
        this._opportunisticEncryption = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "opportunisticEncryptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._opportunisticEncryption;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "origin", {
        get: function () {
            return this._origin;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putOrigin = function (value) {
        this._origin.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetOrigin = function () {
        this._origin.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "originInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._origin.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "originCacheControl", {
        get: function () {
            return this.getBooleanAttribute('origin_cache_control');
        },
        set: function (value) {
            this._originCacheControl = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetOriginCacheControl = function () {
        this._originCacheControl = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "originCacheControlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._originCacheControl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "originErrorPagePassthru", {
        get: function () {
            return this.getBooleanAttribute('origin_error_page_passthru');
        },
        set: function (value) {
            this._originErrorPagePassthru = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetOriginErrorPagePassthru = function () {
        this._originErrorPagePassthru = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "originErrorPagePassthruInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._originErrorPagePassthru;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "overrides", {
        get: function () {
            return this._overrides;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putOverrides = function (value) {
        this._overrides.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetOverrides = function () {
        this._overrides.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "overridesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._overrides.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "phases", {
        get: function () {
            return this.getListAttribute('phases');
        },
        set: function (value) {
            this._phases = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetPhases = function () {
        this._phases = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "phasesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._phases;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "polish", {
        get: function () {
            return this.getStringAttribute('polish');
        },
        set: function (value) {
            this._polish = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetPolish = function () {
        this._polish = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "polishInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._polish;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "private", {
        get: function () {
            return this._private;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putPrivate = function (value) {
        this._private.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetPrivate = function () {
        this._private.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "privateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._private.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "products", {
        get: function () {
            return this.getListAttribute('products');
        },
        set: function (value) {
            this._products = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetProducts = function () {
        this._products = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "productsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._products;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "proxyRevalidate", {
        get: function () {
            return this._proxyRevalidate;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putProxyRevalidate = function (value) {
        this._proxyRevalidate.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetProxyRevalidate = function () {
        this._proxyRevalidate.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "proxyRevalidateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._proxyRevalidate.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "public", {
        get: function () {
            return this._public;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putPublic = function (value) {
        this._public.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetPublic = function () {
        this._public.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "publicInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._public.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "rawResponseFields", {
        get: function () {
            return this._rawResponseFields;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putRawResponseFields = function (value) {
        this._rawResponseFields.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetRawResponseFields = function () {
        this._rawResponseFields.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "rawResponseFieldsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rawResponseFields.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "readTimeout", {
        get: function () {
            return this.getNumberAttribute('read_timeout');
        },
        set: function (value) {
            this._readTimeout = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetReadTimeout = function () {
        this._readTimeout = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "readTimeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._readTimeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "redirectsForAiTraining", {
        get: function () {
            return this.getBooleanAttribute('redirects_for_ai_training');
        },
        set: function (value) {
            this._redirectsForAiTraining = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetRedirectsForAiTraining = function () {
        this._redirectsForAiTraining = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "redirectsForAiTrainingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._redirectsForAiTraining;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "requestBodyBuffering", {
        get: function () {
            return this.getStringAttribute('request_body_buffering');
        },
        set: function (value) {
            this._requestBodyBuffering = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetRequestBodyBuffering = function () {
        this._requestBodyBuffering = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "requestBodyBufferingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestBodyBuffering;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "requestFields", {
        get: function () {
            return this._requestFields;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putRequestFields = function (value) {
        this._requestFields.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetRequestFields = function () {
        this._requestFields.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "requestFieldsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestFields.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "respectStrongEtags", {
        get: function () {
            return this.getBooleanAttribute('respect_strong_etags');
        },
        set: function (value) {
            this._respectStrongEtags = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetRespectStrongEtags = function () {
        this._respectStrongEtags = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "respectStrongEtagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._respectStrongEtags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "response", {
        get: function () {
            return this._response;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putResponse = function (value) {
        this._response.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetResponse = function () {
        this._response.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "responseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._response.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "responseBodyBuffering", {
        get: function () {
            return this.getStringAttribute('response_body_buffering');
        },
        set: function (value) {
            this._responseBodyBuffering = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetResponseBodyBuffering = function () {
        this._responseBodyBuffering = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "responseBodyBufferingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._responseBodyBuffering;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "responseFields", {
        get: function () {
            return this._responseFields;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putResponseFields = function (value) {
        this._responseFields.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetResponseFields = function () {
        this._responseFields.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "responseFieldsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._responseFields.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "rocketLoader", {
        get: function () {
            return this.getBooleanAttribute('rocket_loader');
        },
        set: function (value) {
            this._rocketLoader = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetRocketLoader = function () {
        this._rocketLoader = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "rocketLoaderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rocketLoader;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "rules", {
        get: function () {
            return this.interpolationForAttribute('rules');
        },
        set: function (value) {
            this._rules = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetRules = function () {
        this._rules = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "rulesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "ruleset", {
        get: function () {
            return this.getStringAttribute('ruleset');
        },
        set: function (value) {
            this._ruleset = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetRuleset = function () {
        this._ruleset = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "rulesetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ruleset;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "rulesets", {
        get: function () {
            return this.getListAttribute('rulesets');
        },
        set: function (value) {
            this._rulesets = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetRulesets = function () {
        this._rulesets = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "rulesetsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rulesets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "sMaxage", {
        get: function () {
            return this._sMaxage;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putSMaxage = function (value) {
        this._sMaxage.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetSMaxage = function () {
        this._sMaxage.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "sMaxageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sMaxage.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "securityLevel", {
        get: function () {
            return this.getStringAttribute('security_level');
        },
        set: function (value) {
            this._securityLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetSecurityLevel = function () {
        this._securityLevel = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "securityLevelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityLevel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "serveStale", {
        get: function () {
            return this._serveStale;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putServeStale = function (value) {
        this._serveStale.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetServeStale = function () {
        this._serveStale.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "serveStaleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serveStale.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "serverSideExcludes", {
        get: function () {
            return this.getBooleanAttribute('server_side_excludes');
        },
        set: function (value) {
            this._serverSideExcludes = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetServerSideExcludes = function () {
        this._serverSideExcludes = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "serverSideExcludesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serverSideExcludes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "sni", {
        get: function () {
            return this._sni;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putSni = function (value) {
        this._sni.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetSni = function () {
        this._sni.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "sniInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sni.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "ssl", {
        get: function () {
            return this.getStringAttribute('ssl');
        },
        set: function (value) {
            this._ssl = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetSsl = function () {
        this._ssl = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "sslInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ssl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "staleIfError", {
        get: function () {
            return this._staleIfError;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putStaleIfError = function (value) {
        this._staleIfError.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetStaleIfError = function () {
        this._staleIfError.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "staleIfErrorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._staleIfError.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "staleWhileRevalidate", {
        get: function () {
            return this._staleWhileRevalidate;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putStaleWhileRevalidate = function (value) {
        this._staleWhileRevalidate.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetStaleWhileRevalidate = function () {
        this._staleWhileRevalidate.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "staleWhileRevalidateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._staleWhileRevalidate.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "statusCode", {
        get: function () {
            return this.getNumberAttribute('status_code');
        },
        set: function (value) {
            this._statusCode = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetStatusCode = function () {
        this._statusCode = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "statusCodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._statusCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "stripEtags", {
        get: function () {
            return this.getBooleanAttribute('strip_etags');
        },
        set: function (value) {
            this._stripEtags = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetStripEtags = function () {
        this._stripEtags = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "stripEtagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stripEtags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "stripLastModified", {
        get: function () {
            return this.getBooleanAttribute('strip_last_modified');
        },
        set: function (value) {
            this._stripLastModified = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetStripLastModified = function () {
        this._stripLastModified = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "stripLastModifiedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stripLastModified;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "stripSetCookie", {
        get: function () {
            return this.getBooleanAttribute('strip_set_cookie');
        },
        set: function (value) {
            this._stripSetCookie = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetStripSetCookie = function () {
        this._stripSetCookie = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "stripSetCookieInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stripSetCookie;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "sxg", {
        get: function () {
            return this.getBooleanAttribute('sxg');
        },
        set: function (value) {
            this._sxg = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetSxg = function () {
        this._sxg = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "sxgInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sxg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "transformedRequestFields", {
        get: function () {
            return this._transformedRequestFields;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putTransformedRequestFields = function (value) {
        this._transformedRequestFields.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetTransformedRequestFields = function () {
        this._transformedRequestFields.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "transformedRequestFieldsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._transformedRequestFields.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "uri", {
        get: function () {
            return this._uri;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.putUri = function (value) {
        this._uri.internalValue = value;
    };
    RulesetRulesActionParametersOutputReference.prototype.resetUri = function () {
        this._uri.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "uriInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._uri.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "values", {
        get: function () {
            return this.getListAttribute('values');
        },
        set: function (value) {
            this._values = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesActionParametersOutputReference.prototype.resetValues = function () {
        this._values = undefined;
    };
    Object.defineProperty(RulesetRulesActionParametersOutputReference.prototype, "valuesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._values;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesActionParametersOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesActionParametersOutputReference = RulesetRulesActionParametersOutputReference;
function rulesetRulesExposedCredentialCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        password_expression: cdktf.stringToTerraform(struct.passwordExpression),
        username_expression: cdktf.stringToTerraform(struct.usernameExpression),
    };
}
function rulesetRulesExposedCredentialCheckToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        password_expression: {
            value: cdktf.stringToHclTerraform(struct.passwordExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        username_expression: {
            value: cdktf.stringToHclTerraform(struct.usernameExpression),
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
var RulesetRulesExposedCredentialCheckOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesExposedCredentialCheckOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesExposedCredentialCheckOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesExposedCredentialCheckOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._passwordExpression !== undefined) {
                hasAnyValues = true;
                internalValueResult.passwordExpression = this._passwordExpression;
            }
            if (this._usernameExpression !== undefined) {
                hasAnyValues = true;
                internalValueResult.usernameExpression = this._usernameExpression;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._passwordExpression = undefined;
                this._usernameExpression = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._passwordExpression = value.passwordExpression;
                this._usernameExpression = value.usernameExpression;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesExposedCredentialCheckOutputReference.prototype, "passwordExpression", {
        get: function () {
            return this.getStringAttribute('password_expression');
        },
        set: function (value) {
            this._passwordExpression = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesExposedCredentialCheckOutputReference.prototype, "passwordExpressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._passwordExpression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesExposedCredentialCheckOutputReference.prototype, "usernameExpression", {
        get: function () {
            return this.getStringAttribute('username_expression');
        },
        set: function (value) {
            this._usernameExpression = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesExposedCredentialCheckOutputReference.prototype, "usernameExpressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._usernameExpression;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesExposedCredentialCheckOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesExposedCredentialCheckOutputReference = RulesetRulesExposedCredentialCheckOutputReference;
function rulesetRulesLoggingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
function rulesetRulesLoggingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
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
var RulesetRulesLoggingOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesLoggingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesLoggingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesLoggingOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._enabled = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._enabled = value.enabled;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesLoggingOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesLoggingOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(RulesetRulesLoggingOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesLoggingOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesLoggingOutputReference = RulesetRulesLoggingOutputReference;
function rulesetRulesRatelimitToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        characteristics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.characteristics),
        counting_expression: cdktf.stringToTerraform(struct.countingExpression),
        mitigation_timeout: cdktf.numberToTerraform(struct.mitigationTimeout),
        period: cdktf.numberToTerraform(struct.period),
        requests_per_period: cdktf.numberToTerraform(struct.requestsPerPeriod),
        requests_to_origin: cdktf.booleanToTerraform(struct.requestsToOrigin),
        score_per_period: cdktf.numberToTerraform(struct.scorePerPeriod),
        score_response_header_name: cdktf.stringToTerraform(struct.scoreResponseHeaderName),
    };
}
function rulesetRulesRatelimitToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        characteristics: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.characteristics),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        counting_expression: {
            value: cdktf.stringToHclTerraform(struct.countingExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mitigation_timeout: {
            value: cdktf.numberToHclTerraform(struct.mitigationTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        period: {
            value: cdktf.numberToHclTerraform(struct.period),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        requests_per_period: {
            value: cdktf.numberToHclTerraform(struct.requestsPerPeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        requests_to_origin: {
            value: cdktf.booleanToHclTerraform(struct.requestsToOrigin),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        score_per_period: {
            value: cdktf.numberToHclTerraform(struct.scorePerPeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        score_response_header_name: {
            value: cdktf.stringToHclTerraform(struct.scoreResponseHeaderName),
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
var RulesetRulesRatelimitOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesRatelimitOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RulesetRulesRatelimitOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RulesetRulesRatelimitOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._characteristics !== undefined) {
                hasAnyValues = true;
                internalValueResult.characteristics = this._characteristics;
            }
            if (this._countingExpression !== undefined) {
                hasAnyValues = true;
                internalValueResult.countingExpression = this._countingExpression;
            }
            if (this._mitigationTimeout !== undefined) {
                hasAnyValues = true;
                internalValueResult.mitigationTimeout = this._mitigationTimeout;
            }
            if (this._period !== undefined) {
                hasAnyValues = true;
                internalValueResult.period = this._period;
            }
            if (this._requestsPerPeriod !== undefined) {
                hasAnyValues = true;
                internalValueResult.requestsPerPeriod = this._requestsPerPeriod;
            }
            if (this._requestsToOrigin !== undefined) {
                hasAnyValues = true;
                internalValueResult.requestsToOrigin = this._requestsToOrigin;
            }
            if (this._scorePerPeriod !== undefined) {
                hasAnyValues = true;
                internalValueResult.scorePerPeriod = this._scorePerPeriod;
            }
            if (this._scoreResponseHeaderName !== undefined) {
                hasAnyValues = true;
                internalValueResult.scoreResponseHeaderName = this._scoreResponseHeaderName;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._characteristics = undefined;
                this._countingExpression = undefined;
                this._mitigationTimeout = undefined;
                this._period = undefined;
                this._requestsPerPeriod = undefined;
                this._requestsToOrigin = undefined;
                this._scorePerPeriod = undefined;
                this._scoreResponseHeaderName = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._characteristics = value.characteristics;
                this._countingExpression = value.countingExpression;
                this._mitigationTimeout = value.mitigationTimeout;
                this._period = value.period;
                this._requestsPerPeriod = value.requestsPerPeriod;
                this._requestsToOrigin = value.requestsToOrigin;
                this._scorePerPeriod = value.scorePerPeriod;
                this._scoreResponseHeaderName = value.scoreResponseHeaderName;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesRatelimitOutputReference.prototype, "characteristics", {
        get: function () {
            return this.getListAttribute('characteristics');
        },
        set: function (value) {
            this._characteristics = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesRatelimitOutputReference.prototype, "characteristicsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._characteristics;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesRatelimitOutputReference.prototype, "countingExpression", {
        get: function () {
            return this.getStringAttribute('counting_expression');
        },
        set: function (value) {
            this._countingExpression = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesRatelimitOutputReference.prototype.resetCountingExpression = function () {
        this._countingExpression = undefined;
    };
    Object.defineProperty(RulesetRulesRatelimitOutputReference.prototype, "countingExpressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._countingExpression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesRatelimitOutputReference.prototype, "mitigationTimeout", {
        get: function () {
            return this.getNumberAttribute('mitigation_timeout');
        },
        set: function (value) {
            this._mitigationTimeout = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesRatelimitOutputReference.prototype.resetMitigationTimeout = function () {
        this._mitigationTimeout = undefined;
    };
    Object.defineProperty(RulesetRulesRatelimitOutputReference.prototype, "mitigationTimeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mitigationTimeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesRatelimitOutputReference.prototype, "period", {
        get: function () {
            return this.getNumberAttribute('period');
        },
        set: function (value) {
            this._period = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesRatelimitOutputReference.prototype, "periodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._period;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesRatelimitOutputReference.prototype, "requestsPerPeriod", {
        get: function () {
            return this.getNumberAttribute('requests_per_period');
        },
        set: function (value) {
            this._requestsPerPeriod = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesRatelimitOutputReference.prototype.resetRequestsPerPeriod = function () {
        this._requestsPerPeriod = undefined;
    };
    Object.defineProperty(RulesetRulesRatelimitOutputReference.prototype, "requestsPerPeriodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestsPerPeriod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesRatelimitOutputReference.prototype, "requestsToOrigin", {
        get: function () {
            return this.getBooleanAttribute('requests_to_origin');
        },
        set: function (value) {
            this._requestsToOrigin = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesRatelimitOutputReference.prototype.resetRequestsToOrigin = function () {
        this._requestsToOrigin = undefined;
    };
    Object.defineProperty(RulesetRulesRatelimitOutputReference.prototype, "requestsToOriginInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestsToOrigin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesRatelimitOutputReference.prototype, "scorePerPeriod", {
        get: function () {
            return this.getNumberAttribute('score_per_period');
        },
        set: function (value) {
            this._scorePerPeriod = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesRatelimitOutputReference.prototype.resetScorePerPeriod = function () {
        this._scorePerPeriod = undefined;
    };
    Object.defineProperty(RulesetRulesRatelimitOutputReference.prototype, "scorePerPeriodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scorePerPeriod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesRatelimitOutputReference.prototype, "scoreResponseHeaderName", {
        get: function () {
            return this.getStringAttribute('score_response_header_name');
        },
        set: function (value) {
            this._scoreResponseHeaderName = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesRatelimitOutputReference.prototype.resetScoreResponseHeaderName = function () {
        this._scoreResponseHeaderName = undefined;
    };
    Object.defineProperty(RulesetRulesRatelimitOutputReference.prototype, "scoreResponseHeaderNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scoreResponseHeaderName;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesRatelimitOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesRatelimitOutputReference = RulesetRulesRatelimitOutputReference;
function rulesetRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        action_parameters: rulesetRulesActionParametersToTerraform(struct.actionParameters),
        description: cdktf.stringToTerraform(struct.description),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        exposed_credential_check: rulesetRulesExposedCredentialCheckToTerraform(struct.exposedCredentialCheck),
        expression: cdktf.stringToTerraform(struct.expression),
        logging: rulesetRulesLoggingToTerraform(struct.logging),
        ratelimit: rulesetRulesRatelimitToTerraform(struct.ratelimit),
        ref: cdktf.stringToTerraform(struct.ref),
    };
}
function rulesetRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        action: {
            value: cdktf.stringToHclTerraform(struct.action),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        action_parameters: {
            value: rulesetRulesActionParametersToHclTerraform(struct.actionParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesActionParameters",
        },
        description: {
            value: cdktf.stringToHclTerraform(struct.description),
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
        exposed_credential_check: {
            value: rulesetRulesExposedCredentialCheckToHclTerraform(struct.exposedCredentialCheck),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesExposedCredentialCheck",
        },
        expression: {
            value: cdktf.stringToHclTerraform(struct.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        logging: {
            value: rulesetRulesLoggingToHclTerraform(struct.logging),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesLogging",
        },
        ratelimit: {
            value: rulesetRulesRatelimitToHclTerraform(struct.ratelimit),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesetRulesRatelimit",
        },
        ref: {
            value: cdktf.stringToHclTerraform(struct.ref),
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
var RulesetRulesOutputReference = /** @class */ (function (_super) {
    __extends(RulesetRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RulesetRulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // action_parameters - computed: true, optional: true, required: false
        _this._actionParameters = new RulesetRulesActionParametersOutputReference(_this, "action_parameters");
        // exposed_credential_check - computed: true, optional: true, required: false
        _this._exposedCredentialCheck = new RulesetRulesExposedCredentialCheckOutputReference(_this, "exposed_credential_check");
        // logging - computed: true, optional: true, required: false
        _this._logging = new RulesetRulesLoggingOutputReference(_this, "logging");
        // ratelimit - computed: true, optional: true, required: false
        _this._ratelimit = new RulesetRulesRatelimitOutputReference(_this, "ratelimit");
        return _this;
    }
    Object.defineProperty(RulesetRulesOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._action !== undefined) {
                hasAnyValues = true;
                internalValueResult.action = this._action;
            }
            if (((_a = this._actionParameters) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.actionParameters = (_b = this._actionParameters) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._description !== undefined) {
                hasAnyValues = true;
                internalValueResult.description = this._description;
            }
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (((_c = this._exposedCredentialCheck) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.exposedCredentialCheck = (_d = this._exposedCredentialCheck) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (this._expression !== undefined) {
                hasAnyValues = true;
                internalValueResult.expression = this._expression;
            }
            if (((_e = this._logging) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.logging = (_f = this._logging) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            if (((_g = this._ratelimit) === null || _g === void 0 ? void 0 : _g.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.ratelimit = (_h = this._ratelimit) === null || _h === void 0 ? void 0 : _h.internalValue;
            }
            if (this._ref !== undefined) {
                hasAnyValues = true;
                internalValueResult.ref = this._ref;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._action = undefined;
                this._actionParameters.internalValue = undefined;
                this._description = undefined;
                this._enabled = undefined;
                this._exposedCredentialCheck.internalValue = undefined;
                this._expression = undefined;
                this._logging.internalValue = undefined;
                this._ratelimit.internalValue = undefined;
                this._ref = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._action = value.action;
                this._actionParameters.internalValue = value.actionParameters;
                this._description = value.description;
                this._enabled = value.enabled;
                this._exposedCredentialCheck.internalValue = value.exposedCredentialCheck;
                this._expression = value.expression;
                this._logging.internalValue = value.logging;
                this._ratelimit.internalValue = value.ratelimit;
                this._ref = value.ref;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesOutputReference.prototype, "action", {
        get: function () {
            return this.getStringAttribute('action');
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesOutputReference.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesOutputReference.prototype, "actionParameters", {
        get: function () {
            return this._actionParameters;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesOutputReference.prototype.putActionParameters = function (value) {
        this._actionParameters.internalValue = value;
    };
    RulesetRulesOutputReference.prototype.resetActionParameters = function () {
        this._actionParameters.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesOutputReference.prototype, "actionParametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._actionParameters.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesOutputReference.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesOutputReference.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(RulesetRulesOutputReference.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(RulesetRulesOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesOutputReference.prototype, "exposedCredentialCheck", {
        get: function () {
            return this._exposedCredentialCheck;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesOutputReference.prototype.putExposedCredentialCheck = function (value) {
        this._exposedCredentialCheck.internalValue = value;
    };
    RulesetRulesOutputReference.prototype.resetExposedCredentialCheck = function () {
        this._exposedCredentialCheck.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesOutputReference.prototype, "exposedCredentialCheckInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exposedCredentialCheck.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesOutputReference.prototype, "expression", {
        get: function () {
            return this.getStringAttribute('expression');
        },
        set: function (value) {
            this._expression = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesOutputReference.prototype, "expressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesOutputReference.prototype, "logging", {
        get: function () {
            return this._logging;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesOutputReference.prototype.putLogging = function (value) {
        this._logging.internalValue = value;
    };
    RulesetRulesOutputReference.prototype.resetLogging = function () {
        this._logging.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesOutputReference.prototype, "loggingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logging.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesOutputReference.prototype, "ratelimit", {
        get: function () {
            return this._ratelimit;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesOutputReference.prototype.putRatelimit = function (value) {
        this._ratelimit.internalValue = value;
    };
    RulesetRulesOutputReference.prototype.resetRatelimit = function () {
        this._ratelimit.internalValue = undefined;
    };
    Object.defineProperty(RulesetRulesOutputReference.prototype, "ratelimitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ratelimit.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RulesetRulesOutputReference.prototype, "ref", {
        get: function () {
            return this.getStringAttribute('ref');
        },
        set: function (value) {
            this._ref = value;
        },
        enumerable: false,
        configurable: true
    });
    RulesetRulesOutputReference.prototype.resetRef = function () {
        this._ref = undefined;
    };
    Object.defineProperty(RulesetRulesOutputReference.prototype, "refInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ref;
        },
        enumerable: false,
        configurable: true
    });
    return RulesetRulesOutputReference;
}(cdktf.ComplexObject));
exports.RulesetRulesOutputReference = RulesetRulesOutputReference;
var RulesetRulesList = /** @class */ (function (_super) {
    __extends(RulesetRulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RulesetRulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    RulesetRulesList.prototype.get = function (index) {
        return new RulesetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return RulesetRulesList;
}(cdktf.ComplexList));
exports.RulesetRulesList = RulesetRulesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset cloudflare_ruleset}
*/
var Ruleset = /** @class */ (function (_super) {
    __extends(Ruleset, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset cloudflare_ruleset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RulesetConfig
    */
    function Ruleset(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_ruleset',
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
        // rules - computed: true, optional: true, required: false
        _this._rules = new RulesetRulesList(_this, "rules", false);
        _this._accountId = config.accountId;
        _this._description = config.description;
        _this._kind = config.kind;
        _this._name = config.name;
        _this._phase = config.phase;
        _this._rules.internalValue = config.rules;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Ruleset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ruleset to import
    * @param importFromId The id of the existing Ruleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ruleset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ruleset to import is found
    */
    Ruleset.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ruleset", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Ruleset.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Ruleset.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(Ruleset.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ruleset.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Ruleset.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Ruleset.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ruleset.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ruleset.prototype, "kind", {
        get: function () {
            return this.getStringAttribute('kind');
        },
        set: function (value) {
            this._kind = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ruleset.prototype, "kindInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kind;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ruleset.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ruleset.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ruleset.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ruleset.prototype, "phase", {
        get: function () {
            return this.getStringAttribute('phase');
        },
        set: function (value) {
            this._phase = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ruleset.prototype, "phaseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._phase;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ruleset.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    Ruleset.prototype.putRules = function (value) {
        this._rules.internalValue = value;
    };
    Ruleset.prototype.resetRules = function () {
        this._rules.internalValue = undefined;
    };
    Object.defineProperty(Ruleset.prototype, "rulesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rules.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ruleset.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ruleset.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Ruleset.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(Ruleset.prototype, "zoneIdInput", {
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
    Ruleset.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            description: cdktf.stringToTerraform(this._description),
            kind: cdktf.stringToTerraform(this._kind),
            name: cdktf.stringToTerraform(this._name),
            phase: cdktf.stringToTerraform(this._phase),
            rules: cdktf.listMapper(rulesetRulesToTerraform, false)(this._rules.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    Ruleset.prototype.synthesizeHclAttributes = function () {
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
            phase: {
                value: cdktf.stringToHclTerraform(this._phase),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rules: {
                value: cdktf.listMapperHcl(rulesetRulesToHclTerraform, false)(this._rules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "RulesetRulesList",
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
    Ruleset.tfResourceType = "cloudflare_ruleset";
    return Ruleset;
}(cdktf.TerraformResource));
exports.Ruleset = Ruleset;
