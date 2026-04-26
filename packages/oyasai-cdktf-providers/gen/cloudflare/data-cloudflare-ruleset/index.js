"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ruleset
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
exports.DataCloudflareRulesetRulesActionParametersSMaxageOutputReference = exports.DataCloudflareRulesetRulesActionParametersResponseFieldsList = exports.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference = exports.DataCloudflareRulesetRulesActionParametersResponseOutputReference = exports.DataCloudflareRulesetRulesActionParametersRequestFieldsList = exports.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference = exports.DataCloudflareRulesetRulesActionParametersRawResponseFieldsList = exports.DataCloudflareRulesetRulesActionParametersRawResponseFieldsOutputReference = exports.DataCloudflareRulesetRulesActionParametersPublicOutputReference = exports.DataCloudflareRulesetRulesActionParametersProxyRevalidateOutputReference = exports.DataCloudflareRulesetRulesActionParametersPrivateOutputReference = exports.DataCloudflareRulesetRulesActionParametersOverridesOutputReference = exports.DataCloudflareRulesetRulesActionParametersOverridesRulesList = exports.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference = exports.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList = exports.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference = exports.DataCloudflareRulesetRulesActionParametersOriginOutputReference = exports.DataCloudflareRulesetRulesActionParametersNoTransformOutputReference = exports.DataCloudflareRulesetRulesActionParametersNoStoreOutputReference = exports.DataCloudflareRulesetRulesActionParametersNoCacheOutputReference = exports.DataCloudflareRulesetRulesActionParametersMustUnderstandOutputReference = exports.DataCloudflareRulesetRulesActionParametersMustRevalidateOutputReference = exports.DataCloudflareRulesetRulesActionParametersMaxAgeOutputReference = exports.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference = exports.DataCloudflareRulesetRulesActionParametersImmutableOutputReference = exports.DataCloudflareRulesetRulesActionParametersHeadersMap = exports.DataCloudflareRulesetRulesActionParametersHeadersOutputReference = exports.DataCloudflareRulesetRulesActionParametersFromValueOutputReference = exports.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference = exports.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference = exports.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference = exports.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList = exports.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference = exports.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference = exports.DataCloudflareRulesetRulesActionParametersCookieFieldsList = exports.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference = exports.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference = exports.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference = exports.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference = exports.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference = exports.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference = exports.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference = exports.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference = exports.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference = exports.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference = exports.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference = exports.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference = exports.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference = exports.DataCloudflareRulesetRulesActionParametersAlgorithmsList = exports.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference = void 0;
exports.DataCloudflareRuleset = exports.DataCloudflareRulesetRulesList = exports.DataCloudflareRulesetRulesOutputReference = exports.DataCloudflareRulesetRulesRatelimitOutputReference = exports.DataCloudflareRulesetRulesLoggingOutputReference = exports.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference = exports.DataCloudflareRulesetRulesActionParametersOutputReference = exports.DataCloudflareRulesetRulesActionParametersUriOutputReference = exports.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference = exports.DataCloudflareRulesetRulesActionParametersUriPathOutputReference = exports.DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsList = exports.DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsOutputReference = exports.DataCloudflareRulesetRulesActionParametersStaleWhileRevalidateOutputReference = exports.DataCloudflareRulesetRulesActionParametersStaleIfErrorOutputReference = exports.DataCloudflareRulesetRulesActionParametersSniOutputReference = exports.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference = void 0;
exports.dataCloudflareRulesetRulesActionParametersAlgorithmsToTerraform = dataCloudflareRulesetRulesActionParametersAlgorithmsToTerraform;
exports.dataCloudflareRulesetRulesActionParametersAlgorithmsToHclTerraform = dataCloudflareRulesetRulesActionParametersAlgorithmsToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersAutominifyToTerraform = dataCloudflareRulesetRulesActionParametersAutominifyToTerraform;
exports.dataCloudflareRulesetRulesActionParametersAutominifyToHclTerraform = dataCloudflareRulesetRulesActionParametersAutominifyToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersBrowserTtlToTerraform = dataCloudflareRulesetRulesActionParametersBrowserTtlToTerraform;
exports.dataCloudflareRulesetRulesActionParametersBrowserTtlToHclTerraform = dataCloudflareRulesetRulesActionParametersBrowserTtlToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieToTerraform = dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieToTerraform;
exports.dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieToHclTerraform = dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderToTerraform = dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderToTerraform;
exports.dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderToHclTerraform = dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostToTerraform = dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostToTerraform;
exports.dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostToHclTerraform = dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeToTerraform = dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeToTerraform;
exports.dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeToHclTerraform = dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeToTerraform = dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeToTerraform;
exports.dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeToHclTerraform = dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringToTerraform = dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringToTerraform;
exports.dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringToHclTerraform = dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserToTerraform = dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserToTerraform;
exports.dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserToHclTerraform = dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyToTerraform = dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyToTerraform;
exports.dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyToHclTerraform = dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersCacheKeyToTerraform = dataCloudflareRulesetRulesActionParametersCacheKeyToTerraform;
exports.dataCloudflareRulesetRulesActionParametersCacheKeyToHclTerraform = dataCloudflareRulesetRulesActionParametersCacheKeyToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersCacheReserveToTerraform = dataCloudflareRulesetRulesActionParametersCacheReserveToTerraform;
exports.dataCloudflareRulesetRulesActionParametersCacheReserveToHclTerraform = dataCloudflareRulesetRulesActionParametersCacheReserveToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersCookieFieldsToTerraform = dataCloudflareRulesetRulesActionParametersCookieFieldsToTerraform;
exports.dataCloudflareRulesetRulesActionParametersCookieFieldsToHclTerraform = dataCloudflareRulesetRulesActionParametersCookieFieldsToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToTerraform = dataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToTerraform;
exports.dataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToHclTerraform = dataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlToTerraform = dataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlToTerraform;
exports.dataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlToHclTerraform = dataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersEdgeTtlToTerraform = dataCloudflareRulesetRulesActionParametersEdgeTtlToTerraform;
exports.dataCloudflareRulesetRulesActionParametersEdgeTtlToHclTerraform = dataCloudflareRulesetRulesActionParametersEdgeTtlToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersFromListStructToTerraform = dataCloudflareRulesetRulesActionParametersFromListStructToTerraform;
exports.dataCloudflareRulesetRulesActionParametersFromListStructToHclTerraform = dataCloudflareRulesetRulesActionParametersFromListStructToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersFromValueTargetUrlToTerraform = dataCloudflareRulesetRulesActionParametersFromValueTargetUrlToTerraform;
exports.dataCloudflareRulesetRulesActionParametersFromValueTargetUrlToHclTerraform = dataCloudflareRulesetRulesActionParametersFromValueTargetUrlToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersFromValueToTerraform = dataCloudflareRulesetRulesActionParametersFromValueToTerraform;
exports.dataCloudflareRulesetRulesActionParametersFromValueToHclTerraform = dataCloudflareRulesetRulesActionParametersFromValueToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersHeadersToTerraform = dataCloudflareRulesetRulesActionParametersHeadersToTerraform;
exports.dataCloudflareRulesetRulesActionParametersHeadersToHclTerraform = dataCloudflareRulesetRulesActionParametersHeadersToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersImmutableToTerraform = dataCloudflareRulesetRulesActionParametersImmutableToTerraform;
exports.dataCloudflareRulesetRulesActionParametersImmutableToHclTerraform = dataCloudflareRulesetRulesActionParametersImmutableToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersMatchedDataToTerraform = dataCloudflareRulesetRulesActionParametersMatchedDataToTerraform;
exports.dataCloudflareRulesetRulesActionParametersMatchedDataToHclTerraform = dataCloudflareRulesetRulesActionParametersMatchedDataToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersMaxAgeToTerraform = dataCloudflareRulesetRulesActionParametersMaxAgeToTerraform;
exports.dataCloudflareRulesetRulesActionParametersMaxAgeToHclTerraform = dataCloudflareRulesetRulesActionParametersMaxAgeToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersMustRevalidateToTerraform = dataCloudflareRulesetRulesActionParametersMustRevalidateToTerraform;
exports.dataCloudflareRulesetRulesActionParametersMustRevalidateToHclTerraform = dataCloudflareRulesetRulesActionParametersMustRevalidateToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersMustUnderstandToTerraform = dataCloudflareRulesetRulesActionParametersMustUnderstandToTerraform;
exports.dataCloudflareRulesetRulesActionParametersMustUnderstandToHclTerraform = dataCloudflareRulesetRulesActionParametersMustUnderstandToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersNoCacheToTerraform = dataCloudflareRulesetRulesActionParametersNoCacheToTerraform;
exports.dataCloudflareRulesetRulesActionParametersNoCacheToHclTerraform = dataCloudflareRulesetRulesActionParametersNoCacheToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersNoStoreToTerraform = dataCloudflareRulesetRulesActionParametersNoStoreToTerraform;
exports.dataCloudflareRulesetRulesActionParametersNoStoreToHclTerraform = dataCloudflareRulesetRulesActionParametersNoStoreToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersNoTransformToTerraform = dataCloudflareRulesetRulesActionParametersNoTransformToTerraform;
exports.dataCloudflareRulesetRulesActionParametersNoTransformToHclTerraform = dataCloudflareRulesetRulesActionParametersNoTransformToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersOriginToTerraform = dataCloudflareRulesetRulesActionParametersOriginToTerraform;
exports.dataCloudflareRulesetRulesActionParametersOriginToHclTerraform = dataCloudflareRulesetRulesActionParametersOriginToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersOverridesCategoriesToTerraform = dataCloudflareRulesetRulesActionParametersOverridesCategoriesToTerraform;
exports.dataCloudflareRulesetRulesActionParametersOverridesCategoriesToHclTerraform = dataCloudflareRulesetRulesActionParametersOverridesCategoriesToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersOverridesRulesToTerraform = dataCloudflareRulesetRulesActionParametersOverridesRulesToTerraform;
exports.dataCloudflareRulesetRulesActionParametersOverridesRulesToHclTerraform = dataCloudflareRulesetRulesActionParametersOverridesRulesToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersOverridesToTerraform = dataCloudflareRulesetRulesActionParametersOverridesToTerraform;
exports.dataCloudflareRulesetRulesActionParametersOverridesToHclTerraform = dataCloudflareRulesetRulesActionParametersOverridesToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersPrivateToTerraform = dataCloudflareRulesetRulesActionParametersPrivateToTerraform;
exports.dataCloudflareRulesetRulesActionParametersPrivateToHclTerraform = dataCloudflareRulesetRulesActionParametersPrivateToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersProxyRevalidateToTerraform = dataCloudflareRulesetRulesActionParametersProxyRevalidateToTerraform;
exports.dataCloudflareRulesetRulesActionParametersProxyRevalidateToHclTerraform = dataCloudflareRulesetRulesActionParametersProxyRevalidateToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersPublicToTerraform = dataCloudflareRulesetRulesActionParametersPublicToTerraform;
exports.dataCloudflareRulesetRulesActionParametersPublicToHclTerraform = dataCloudflareRulesetRulesActionParametersPublicToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersRawResponseFieldsToTerraform = dataCloudflareRulesetRulesActionParametersRawResponseFieldsToTerraform;
exports.dataCloudflareRulesetRulesActionParametersRawResponseFieldsToHclTerraform = dataCloudflareRulesetRulesActionParametersRawResponseFieldsToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersRequestFieldsToTerraform = dataCloudflareRulesetRulesActionParametersRequestFieldsToTerraform;
exports.dataCloudflareRulesetRulesActionParametersRequestFieldsToHclTerraform = dataCloudflareRulesetRulesActionParametersRequestFieldsToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersResponseToTerraform = dataCloudflareRulesetRulesActionParametersResponseToTerraform;
exports.dataCloudflareRulesetRulesActionParametersResponseToHclTerraform = dataCloudflareRulesetRulesActionParametersResponseToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersResponseFieldsToTerraform = dataCloudflareRulesetRulesActionParametersResponseFieldsToTerraform;
exports.dataCloudflareRulesetRulesActionParametersResponseFieldsToHclTerraform = dataCloudflareRulesetRulesActionParametersResponseFieldsToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersSMaxageToTerraform = dataCloudflareRulesetRulesActionParametersSMaxageToTerraform;
exports.dataCloudflareRulesetRulesActionParametersSMaxageToHclTerraform = dataCloudflareRulesetRulesActionParametersSMaxageToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersServeStaleToTerraform = dataCloudflareRulesetRulesActionParametersServeStaleToTerraform;
exports.dataCloudflareRulesetRulesActionParametersServeStaleToHclTerraform = dataCloudflareRulesetRulesActionParametersServeStaleToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersSniToTerraform = dataCloudflareRulesetRulesActionParametersSniToTerraform;
exports.dataCloudflareRulesetRulesActionParametersSniToHclTerraform = dataCloudflareRulesetRulesActionParametersSniToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersStaleIfErrorToTerraform = dataCloudflareRulesetRulesActionParametersStaleIfErrorToTerraform;
exports.dataCloudflareRulesetRulesActionParametersStaleIfErrorToHclTerraform = dataCloudflareRulesetRulesActionParametersStaleIfErrorToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersStaleWhileRevalidateToTerraform = dataCloudflareRulesetRulesActionParametersStaleWhileRevalidateToTerraform;
exports.dataCloudflareRulesetRulesActionParametersStaleWhileRevalidateToHclTerraform = dataCloudflareRulesetRulesActionParametersStaleWhileRevalidateToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersTransformedRequestFieldsToTerraform = dataCloudflareRulesetRulesActionParametersTransformedRequestFieldsToTerraform;
exports.dataCloudflareRulesetRulesActionParametersTransformedRequestFieldsToHclTerraform = dataCloudflareRulesetRulesActionParametersTransformedRequestFieldsToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersUriPathToTerraform = dataCloudflareRulesetRulesActionParametersUriPathToTerraform;
exports.dataCloudflareRulesetRulesActionParametersUriPathToHclTerraform = dataCloudflareRulesetRulesActionParametersUriPathToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersUriQueryToTerraform = dataCloudflareRulesetRulesActionParametersUriQueryToTerraform;
exports.dataCloudflareRulesetRulesActionParametersUriQueryToHclTerraform = dataCloudflareRulesetRulesActionParametersUriQueryToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersUriToTerraform = dataCloudflareRulesetRulesActionParametersUriToTerraform;
exports.dataCloudflareRulesetRulesActionParametersUriToHclTerraform = dataCloudflareRulesetRulesActionParametersUriToHclTerraform;
exports.dataCloudflareRulesetRulesActionParametersToTerraform = dataCloudflareRulesetRulesActionParametersToTerraform;
exports.dataCloudflareRulesetRulesActionParametersToHclTerraform = dataCloudflareRulesetRulesActionParametersToHclTerraform;
exports.dataCloudflareRulesetRulesExposedCredentialCheckToTerraform = dataCloudflareRulesetRulesExposedCredentialCheckToTerraform;
exports.dataCloudflareRulesetRulesExposedCredentialCheckToHclTerraform = dataCloudflareRulesetRulesExposedCredentialCheckToHclTerraform;
exports.dataCloudflareRulesetRulesLoggingToTerraform = dataCloudflareRulesetRulesLoggingToTerraform;
exports.dataCloudflareRulesetRulesLoggingToHclTerraform = dataCloudflareRulesetRulesLoggingToHclTerraform;
exports.dataCloudflareRulesetRulesRatelimitToTerraform = dataCloudflareRulesetRulesRatelimitToTerraform;
exports.dataCloudflareRulesetRulesRatelimitToHclTerraform = dataCloudflareRulesetRulesRatelimitToHclTerraform;
exports.dataCloudflareRulesetRulesToTerraform = dataCloudflareRulesetRulesToTerraform;
exports.dataCloudflareRulesetRulesToHclTerraform = dataCloudflareRulesetRulesToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareRulesetRulesActionParametersAlgorithmsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersAlgorithmsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference = DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference;
var DataCloudflareRulesetRulesActionParametersAlgorithmsList = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersAlgorithmsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRulesetRulesActionParametersAlgorithmsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareRulesetRulesActionParametersAlgorithmsList.prototype.get = function (index) {
        return new DataCloudflareRulesetRulesActionParametersAlgorithmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareRulesetRulesActionParametersAlgorithmsList;
}(cdktf.ComplexList));
exports.DataCloudflareRulesetRulesActionParametersAlgorithmsList = DataCloudflareRulesetRulesActionParametersAlgorithmsList;
function dataCloudflareRulesetRulesActionParametersAutominifyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersAutominifyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersAutominifyOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersAutominifyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersAutominifyOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.prototype, "css", {
        // css - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('css');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.prototype, "html", {
        // html - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('html');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersAutominifyOutputReference.prototype, "js", {
        // js - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('js');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersAutominifyOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersAutominifyOutputReference = DataCloudflareRulesetRulesActionParametersAutominifyOutputReference;
function dataCloudflareRulesetRulesActionParametersBrowserTtlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersBrowserTtlToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.prototype, "default", {
        // default - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('default');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference = DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference;
function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.prototype, "checkPresence", {
        // check_presence - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('check_presence');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.prototype, "include", {
        // include - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('include');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference = DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference;
function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // contains - computed: true, optional: false, required: false
        _this._contains = new cdktf.StringListMap(_this, "contains");
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.prototype, "checkPresence", {
        // check_presence - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('check_presence');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.prototype, "contains", {
        get: function () {
            return this._contains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.prototype, "excludeOrigin", {
        // exclude_origin - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('exclude_origin');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.prototype, "include", {
        // include - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('include');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference = DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference;
function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.prototype, "resolved", {
        // resolved - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('resolved');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference = DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference;
function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.prototype, "all", {
        // all - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('all');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference.prototype, "list", {
        // list - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('list');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference = DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference;
function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.prototype, "all", {
        // all - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('all');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference.prototype, "list", {
        // list - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('list');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference = DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference;
function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // exclude - computed: true, optional: false, required: false
        _this._exclude = new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringExcludeOutputReference(_this, "exclude");
        // include - computed: true, optional: false, required: false
        _this._include = new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringIncludeOutputReference(_this, "include");
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.prototype, "exclude", {
        get: function () {
            return this._exclude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.prototype, "include", {
        get: function () {
            return this._include;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference = DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference;
function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.prototype, "deviceType", {
        // device_type - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('device_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.prototype, "geo", {
        // geo - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('geo');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.prototype, "lang", {
        // lang - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('lang');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference = DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference;
function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // cookie - computed: true, optional: false, required: false
        _this._cookie = new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference(_this, "cookie");
        // header - computed: true, optional: false, required: false
        _this._header = new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference(_this, "header");
        // host - computed: true, optional: false, required: false
        _this._host = new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference(_this, "host");
        // query_string - computed: true, optional: false, required: false
        _this._queryString = new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference(_this, "query_string");
        // user - computed: true, optional: false, required: false
        _this._user = new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference(_this, "user");
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype, "cookie", {
        get: function () {
            return this._cookie;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype, "header", {
        get: function () {
            return this._header;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype, "host", {
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype, "queryString", {
        get: function () {
            return this._queryString;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference = DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference;
function dataCloudflareRulesetRulesActionParametersCacheKeyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersCacheKeyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // custom_key - computed: true, optional: false, required: false
        _this._customKey = new DataCloudflareRulesetRulesActionParametersCacheKeyCustomKeyOutputReference(_this, "custom_key");
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.prototype, "cacheByDeviceType", {
        // cache_by_device_type - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cache_by_device_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.prototype, "cacheDeceptionArmor", {
        // cache_deception_armor - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cache_deception_armor');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.prototype, "customKey", {
        get: function () {
            return this._customKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference.prototype, "ignoreQueryStringsOrder", {
        // ignore_query_strings_order - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ignore_query_strings_order');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference = DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference;
function dataCloudflareRulesetRulesActionParametersCacheReserveToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersCacheReserveToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.prototype, "eligible", {
        // eligible - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('eligible');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference.prototype, "minimumFileSize", {
        // minimum_file_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('minimum_file_size');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference = DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference;
function dataCloudflareRulesetRulesActionParametersCookieFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersCookieFieldsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference = DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference;
var DataCloudflareRulesetRulesActionParametersCookieFieldsList = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersCookieFieldsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRulesetRulesActionParametersCookieFieldsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareRulesetRulesActionParametersCookieFieldsList.prototype.get = function (index) {
        return new DataCloudflareRulesetRulesActionParametersCookieFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareRulesetRulesActionParametersCookieFieldsList;
}(cdktf.ComplexList));
exports.DataCloudflareRulesetRulesActionParametersCookieFieldsList = DataCloudflareRulesetRulesActionParametersCookieFieldsList;
function dataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.prototype, "from", {
        // from - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('from');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.prototype, "to", {
        // to - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('to');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference = DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference;
function dataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // status_code_range - computed: true, optional: false, required: false
        _this._statusCodeRange = new DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference(_this, "status_code_range");
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.prototype, "statusCode", {
        // status_code - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('status_code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.prototype, "statusCodeRange", {
        get: function () {
            return this._statusCodeRange;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference = DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference;
var DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList.prototype.get = function (index) {
        return new DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList;
}(cdktf.ComplexList));
exports.DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList = DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList;
function dataCloudflareRulesetRulesActionParametersEdgeTtlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersEdgeTtlToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // status_code_ttl - computed: true, optional: false, required: false
        _this._statusCodeTtl = new DataCloudflareRulesetRulesActionParametersEdgeTtlStatusCodeTtlList(_this, "status_code_ttl", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.prototype, "default", {
        // default - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('default');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference.prototype, "statusCodeTtl", {
        get: function () {
            return this._statusCodeTtl;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference = DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference;
function dataCloudflareRulesetRulesActionParametersFromListStructToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersFromListStructToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersFromListStructOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersFromListStructOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersFromListStructOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersFromListStructOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersFromListStructOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersFromListStructOutputReference = DataCloudflareRulesetRulesActionParametersFromListStructOutputReference;
function dataCloudflareRulesetRulesActionParametersFromValueTargetUrlToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersFromValueTargetUrlToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.prototype, "expression", {
        // expression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference = DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference;
function dataCloudflareRulesetRulesActionParametersFromValueToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersFromValueToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersFromValueOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersFromValueOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersFromValueOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // target_url - computed: true, optional: false, required: false
        _this._targetUrl = new DataCloudflareRulesetRulesActionParametersFromValueTargetUrlOutputReference(_this, "target_url");
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersFromValueOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersFromValueOutputReference.prototype, "preserveQueryString", {
        // preserve_query_string - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('preserve_query_string');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersFromValueOutputReference.prototype, "statusCode", {
        // status_code - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('status_code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersFromValueOutputReference.prototype, "targetUrl", {
        get: function () {
            return this._targetUrl;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersFromValueOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersFromValueOutputReference = DataCloudflareRulesetRulesActionParametersFromValueOutputReference;
function dataCloudflareRulesetRulesActionParametersHeadersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersHeadersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersHeadersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersHeadersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflareRulesetRulesActionParametersHeadersOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersHeadersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersHeadersOutputReference.prototype, "expression", {
        // expression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersHeadersOutputReference.prototype, "operation", {
        // operation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('operation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersHeadersOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersHeadersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersHeadersOutputReference = DataCloudflareRulesetRulesActionParametersHeadersOutputReference;
var DataCloudflareRulesetRulesActionParametersHeadersMap = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersHeadersMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersHeadersMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflareRulesetRulesActionParametersHeadersMap.prototype.get = function (key) {
        return new DataCloudflareRulesetRulesActionParametersHeadersOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflareRulesetRulesActionParametersHeadersMap;
}(cdktf.ComplexMap));
exports.DataCloudflareRulesetRulesActionParametersHeadersMap = DataCloudflareRulesetRulesActionParametersHeadersMap;
function dataCloudflareRulesetRulesActionParametersImmutableToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersImmutableToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersImmutableOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersImmutableOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersImmutableOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersImmutableOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersImmutableOutputReference.prototype, "cloudflareOnly", {
        // cloudflare_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersImmutableOutputReference.prototype, "operation", {
        // operation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('operation');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersImmutableOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersImmutableOutputReference = DataCloudflareRulesetRulesActionParametersImmutableOutputReference;
function dataCloudflareRulesetRulesActionParametersMatchedDataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersMatchedDataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference.prototype, "publicKey", {
        // public_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_key');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference = DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference;
function dataCloudflareRulesetRulesActionParametersMaxAgeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersMaxAgeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersMaxAgeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersMaxAgeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersMaxAgeOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersMaxAgeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersMaxAgeOutputReference.prototype, "cloudflareOnly", {
        // cloudflare_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersMaxAgeOutputReference.prototype, "operation", {
        // operation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('operation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersMaxAgeOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersMaxAgeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersMaxAgeOutputReference = DataCloudflareRulesetRulesActionParametersMaxAgeOutputReference;
function dataCloudflareRulesetRulesActionParametersMustRevalidateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersMustRevalidateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersMustRevalidateOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersMustRevalidateOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersMustRevalidateOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersMustRevalidateOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersMustRevalidateOutputReference.prototype, "cloudflareOnly", {
        // cloudflare_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersMustRevalidateOutputReference.prototype, "operation", {
        // operation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('operation');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersMustRevalidateOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersMustRevalidateOutputReference = DataCloudflareRulesetRulesActionParametersMustRevalidateOutputReference;
function dataCloudflareRulesetRulesActionParametersMustUnderstandToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersMustUnderstandToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersMustUnderstandOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersMustUnderstandOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersMustUnderstandOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersMustUnderstandOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersMustUnderstandOutputReference.prototype, "cloudflareOnly", {
        // cloudflare_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersMustUnderstandOutputReference.prototype, "operation", {
        // operation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('operation');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersMustUnderstandOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersMustUnderstandOutputReference = DataCloudflareRulesetRulesActionParametersMustUnderstandOutputReference;
function dataCloudflareRulesetRulesActionParametersNoCacheToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersNoCacheToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersNoCacheOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersNoCacheOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersNoCacheOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersNoCacheOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersNoCacheOutputReference.prototype, "cloudflareOnly", {
        // cloudflare_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersNoCacheOutputReference.prototype, "operation", {
        // operation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('operation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersNoCacheOutputReference.prototype, "qualifiers", {
        // qualifiers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('qualifiers');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersNoCacheOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersNoCacheOutputReference = DataCloudflareRulesetRulesActionParametersNoCacheOutputReference;
function dataCloudflareRulesetRulesActionParametersNoStoreToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersNoStoreToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersNoStoreOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersNoStoreOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersNoStoreOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersNoStoreOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersNoStoreOutputReference.prototype, "cloudflareOnly", {
        // cloudflare_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersNoStoreOutputReference.prototype, "operation", {
        // operation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('operation');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersNoStoreOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersNoStoreOutputReference = DataCloudflareRulesetRulesActionParametersNoStoreOutputReference;
function dataCloudflareRulesetRulesActionParametersNoTransformToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersNoTransformToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersNoTransformOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersNoTransformOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersNoTransformOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersNoTransformOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersNoTransformOutputReference.prototype, "cloudflareOnly", {
        // cloudflare_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersNoTransformOutputReference.prototype, "operation", {
        // operation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('operation');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersNoTransformOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersNoTransformOutputReference = DataCloudflareRulesetRulesActionParametersNoTransformOutputReference;
function dataCloudflareRulesetRulesActionParametersOriginToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersOriginToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersOriginOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersOriginOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersOriginOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOriginOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOriginOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOriginOutputReference.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersOriginOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersOriginOutputReference = DataCloudflareRulesetRulesActionParametersOriginOutputReference;
function dataCloudflareRulesetRulesActionParametersOverridesCategoriesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersOverridesCategoriesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.prototype, "action", {
        // action - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('action');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.prototype, "category", {
        // category - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('category');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference.prototype, "sensitivityLevel", {
        // sensitivity_level - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sensitivity_level');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference = DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference;
var DataCloudflareRulesetRulesActionParametersOverridesCategoriesList = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersOverridesCategoriesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRulesetRulesActionParametersOverridesCategoriesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareRulesetRulesActionParametersOverridesCategoriesList.prototype.get = function (index) {
        return new DataCloudflareRulesetRulesActionParametersOverridesCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareRulesetRulesActionParametersOverridesCategoriesList;
}(cdktf.ComplexList));
exports.DataCloudflareRulesetRulesActionParametersOverridesCategoriesList = DataCloudflareRulesetRulesActionParametersOverridesCategoriesList;
function dataCloudflareRulesetRulesActionParametersOverridesRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersOverridesRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.prototype, "action", {
        // action - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('action');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.prototype, "scoreThreshold", {
        // score_threshold - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('score_threshold');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference.prototype, "sensitivityLevel", {
        // sensitivity_level - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sensitivity_level');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference = DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference;
var DataCloudflareRulesetRulesActionParametersOverridesRulesList = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersOverridesRulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRulesetRulesActionParametersOverridesRulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareRulesetRulesActionParametersOverridesRulesList.prototype.get = function (index) {
        return new DataCloudflareRulesetRulesActionParametersOverridesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareRulesetRulesActionParametersOverridesRulesList;
}(cdktf.ComplexList));
exports.DataCloudflareRulesetRulesActionParametersOverridesRulesList = DataCloudflareRulesetRulesActionParametersOverridesRulesList;
function dataCloudflareRulesetRulesActionParametersOverridesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersOverridesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersOverridesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersOverridesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersOverridesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // categories - computed: true, optional: false, required: false
        _this._categories = new DataCloudflareRulesetRulesActionParametersOverridesCategoriesList(_this, "categories", false);
        // rules - computed: true, optional: false, required: false
        _this._rules = new DataCloudflareRulesetRulesActionParametersOverridesRulesList(_this, "rules", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOverridesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOverridesOutputReference.prototype, "action", {
        // action - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('action');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOverridesOutputReference.prototype, "categories", {
        get: function () {
            return this._categories;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOverridesOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOverridesOutputReference.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOverridesOutputReference.prototype, "sensitivityLevel", {
        // sensitivity_level - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sensitivity_level');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersOverridesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersOverridesOutputReference = DataCloudflareRulesetRulesActionParametersOverridesOutputReference;
function dataCloudflareRulesetRulesActionParametersPrivateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersPrivateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersPrivateOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersPrivateOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersPrivateOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersPrivateOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersPrivateOutputReference.prototype, "cloudflareOnly", {
        // cloudflare_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersPrivateOutputReference.prototype, "operation", {
        // operation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('operation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersPrivateOutputReference.prototype, "qualifiers", {
        // qualifiers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('qualifiers');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersPrivateOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersPrivateOutputReference = DataCloudflareRulesetRulesActionParametersPrivateOutputReference;
function dataCloudflareRulesetRulesActionParametersProxyRevalidateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersProxyRevalidateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersProxyRevalidateOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersProxyRevalidateOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersProxyRevalidateOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersProxyRevalidateOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersProxyRevalidateOutputReference.prototype, "cloudflareOnly", {
        // cloudflare_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersProxyRevalidateOutputReference.prototype, "operation", {
        // operation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('operation');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersProxyRevalidateOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersProxyRevalidateOutputReference = DataCloudflareRulesetRulesActionParametersProxyRevalidateOutputReference;
function dataCloudflareRulesetRulesActionParametersPublicToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersPublicToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersPublicOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersPublicOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersPublicOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersPublicOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersPublicOutputReference.prototype, "cloudflareOnly", {
        // cloudflare_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersPublicOutputReference.prototype, "operation", {
        // operation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('operation');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersPublicOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersPublicOutputReference = DataCloudflareRulesetRulesActionParametersPublicOutputReference;
function dataCloudflareRulesetRulesActionParametersRawResponseFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersRawResponseFieldsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersRawResponseFieldsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersRawResponseFieldsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRulesetRulesActionParametersRawResponseFieldsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersRawResponseFieldsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersRawResponseFieldsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersRawResponseFieldsOutputReference.prototype, "preserveDuplicates", {
        // preserve_duplicates - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('preserve_duplicates');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersRawResponseFieldsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersRawResponseFieldsOutputReference = DataCloudflareRulesetRulesActionParametersRawResponseFieldsOutputReference;
var DataCloudflareRulesetRulesActionParametersRawResponseFieldsList = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersRawResponseFieldsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRulesetRulesActionParametersRawResponseFieldsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareRulesetRulesActionParametersRawResponseFieldsList.prototype.get = function (index) {
        return new DataCloudflareRulesetRulesActionParametersRawResponseFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareRulesetRulesActionParametersRawResponseFieldsList;
}(cdktf.ComplexList));
exports.DataCloudflareRulesetRulesActionParametersRawResponseFieldsList = DataCloudflareRulesetRulesActionParametersRawResponseFieldsList;
function dataCloudflareRulesetRulesActionParametersRequestFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersRequestFieldsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference = DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference;
var DataCloudflareRulesetRulesActionParametersRequestFieldsList = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersRequestFieldsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRulesetRulesActionParametersRequestFieldsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareRulesetRulesActionParametersRequestFieldsList.prototype.get = function (index) {
        return new DataCloudflareRulesetRulesActionParametersRequestFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareRulesetRulesActionParametersRequestFieldsList;
}(cdktf.ComplexList));
exports.DataCloudflareRulesetRulesActionParametersRequestFieldsList = DataCloudflareRulesetRulesActionParametersRequestFieldsList;
function dataCloudflareRulesetRulesActionParametersResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersResponseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersResponseOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersResponseOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersResponseOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersResponseOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersResponseOutputReference.prototype, "content", {
        // content - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersResponseOutputReference.prototype, "contentType", {
        // content_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersResponseOutputReference.prototype, "statusCode", {
        // status_code - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('status_code');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersResponseOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersResponseOutputReference = DataCloudflareRulesetRulesActionParametersResponseOutputReference;
function dataCloudflareRulesetRulesActionParametersResponseFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersResponseFieldsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference.prototype, "preserveDuplicates", {
        // preserve_duplicates - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('preserve_duplicates');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference = DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference;
var DataCloudflareRulesetRulesActionParametersResponseFieldsList = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersResponseFieldsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRulesetRulesActionParametersResponseFieldsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareRulesetRulesActionParametersResponseFieldsList.prototype.get = function (index) {
        return new DataCloudflareRulesetRulesActionParametersResponseFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareRulesetRulesActionParametersResponseFieldsList;
}(cdktf.ComplexList));
exports.DataCloudflareRulesetRulesActionParametersResponseFieldsList = DataCloudflareRulesetRulesActionParametersResponseFieldsList;
function dataCloudflareRulesetRulesActionParametersSMaxageToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersSMaxageToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersSMaxageOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersSMaxageOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersSMaxageOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersSMaxageOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersSMaxageOutputReference.prototype, "cloudflareOnly", {
        // cloudflare_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersSMaxageOutputReference.prototype, "operation", {
        // operation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('operation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersSMaxageOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersSMaxageOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersSMaxageOutputReference = DataCloudflareRulesetRulesActionParametersSMaxageOutputReference;
function dataCloudflareRulesetRulesActionParametersServeStaleToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersServeStaleToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersServeStaleOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersServeStaleOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersServeStaleOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersServeStaleOutputReference.prototype, "disableStaleWhileUpdating", {
        // disable_stale_while_updating - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disable_stale_while_updating');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersServeStaleOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersServeStaleOutputReference = DataCloudflareRulesetRulesActionParametersServeStaleOutputReference;
function dataCloudflareRulesetRulesActionParametersSniToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersSniToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersSniOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersSniOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersSniOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersSniOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersSniOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersSniOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersSniOutputReference = DataCloudflareRulesetRulesActionParametersSniOutputReference;
function dataCloudflareRulesetRulesActionParametersStaleIfErrorToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersStaleIfErrorToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersStaleIfErrorOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersStaleIfErrorOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersStaleIfErrorOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersStaleIfErrorOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersStaleIfErrorOutputReference.prototype, "cloudflareOnly", {
        // cloudflare_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersStaleIfErrorOutputReference.prototype, "operation", {
        // operation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('operation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersStaleIfErrorOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersStaleIfErrorOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersStaleIfErrorOutputReference = DataCloudflareRulesetRulesActionParametersStaleIfErrorOutputReference;
function dataCloudflareRulesetRulesActionParametersStaleWhileRevalidateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersStaleWhileRevalidateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersStaleWhileRevalidateOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersStaleWhileRevalidateOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersStaleWhileRevalidateOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersStaleWhileRevalidateOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersStaleWhileRevalidateOutputReference.prototype, "cloudflareOnly", {
        // cloudflare_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cloudflare_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersStaleWhileRevalidateOutputReference.prototype, "operation", {
        // operation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('operation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersStaleWhileRevalidateOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersStaleWhileRevalidateOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersStaleWhileRevalidateOutputReference = DataCloudflareRulesetRulesActionParametersStaleWhileRevalidateOutputReference;
function dataCloudflareRulesetRulesActionParametersTransformedRequestFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersTransformedRequestFieldsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsOutputReference = DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsOutputReference;
var DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsList = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsList.prototype.get = function (index) {
        return new DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsList;
}(cdktf.ComplexList));
exports.DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsList = DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsList;
function dataCloudflareRulesetRulesActionParametersUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersUriPathToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersUriPathOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersUriPathOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersUriPathOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersUriPathOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersUriPathOutputReference.prototype, "expression", {
        // expression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersUriPathOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersUriPathOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersUriPathOutputReference = DataCloudflareRulesetRulesActionParametersUriPathOutputReference;
function dataCloudflareRulesetRulesActionParametersUriQueryToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersUriQueryToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersUriQueryOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersUriQueryOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersUriQueryOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.prototype, "expression", {
        // expression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersUriQueryOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersUriQueryOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersUriQueryOutputReference = DataCloudflareRulesetRulesActionParametersUriQueryOutputReference;
function dataCloudflareRulesetRulesActionParametersUriToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersUriToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersUriOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersUriOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersUriOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // path - computed: true, optional: false, required: false
        _this._path = new DataCloudflareRulesetRulesActionParametersUriPathOutputReference(_this, "path");
        // query - computed: true, optional: false, required: false
        _this._query = new DataCloudflareRulesetRulesActionParametersUriQueryOutputReference(_this, "query");
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersUriOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersUriOutputReference.prototype, "origin", {
        // origin - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('origin');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersUriOutputReference.prototype, "path", {
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersUriOutputReference.prototype, "query", {
        get: function () {
            return this._query;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersUriOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersUriOutputReference = DataCloudflareRulesetRulesActionParametersUriOutputReference;
function dataCloudflareRulesetRulesActionParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesActionParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesActionParametersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesActionParametersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesActionParametersOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // algorithms - computed: true, optional: false, required: false
        _this._algorithms = new DataCloudflareRulesetRulesActionParametersAlgorithmsList(_this, "algorithms", false);
        // autominify - computed: true, optional: false, required: false
        _this._autominify = new DataCloudflareRulesetRulesActionParametersAutominifyOutputReference(_this, "autominify");
        // browser_ttl - computed: true, optional: false, required: false
        _this._browserTtl = new DataCloudflareRulesetRulesActionParametersBrowserTtlOutputReference(_this, "browser_ttl");
        // cache_key - computed: true, optional: false, required: false
        _this._cacheKey = new DataCloudflareRulesetRulesActionParametersCacheKeyOutputReference(_this, "cache_key");
        // cache_reserve - computed: true, optional: false, required: false
        _this._cacheReserve = new DataCloudflareRulesetRulesActionParametersCacheReserveOutputReference(_this, "cache_reserve");
        // cookie_fields - computed: true, optional: false, required: false
        _this._cookieFields = new DataCloudflareRulesetRulesActionParametersCookieFieldsList(_this, "cookie_fields", false);
        // edge_ttl - computed: true, optional: false, required: false
        _this._edgeTtl = new DataCloudflareRulesetRulesActionParametersEdgeTtlOutputReference(_this, "edge_ttl");
        // from_list - computed: true, optional: false, required: false
        _this._fromList = new DataCloudflareRulesetRulesActionParametersFromListStructOutputReference(_this, "from_list");
        // from_value - computed: true, optional: false, required: false
        _this._fromValue = new DataCloudflareRulesetRulesActionParametersFromValueOutputReference(_this, "from_value");
        // headers - computed: true, optional: false, required: false
        _this._headers = new DataCloudflareRulesetRulesActionParametersHeadersMap(_this, "headers");
        // immutable - computed: true, optional: false, required: false
        _this._immutable = new DataCloudflareRulesetRulesActionParametersImmutableOutputReference(_this, "immutable");
        // matched_data - computed: true, optional: false, required: false
        _this._matchedData = new DataCloudflareRulesetRulesActionParametersMatchedDataOutputReference(_this, "matched_data");
        // max_age - computed: true, optional: false, required: false
        _this._maxAge = new DataCloudflareRulesetRulesActionParametersMaxAgeOutputReference(_this, "max_age");
        // must_revalidate - computed: true, optional: false, required: false
        _this._mustRevalidate = new DataCloudflareRulesetRulesActionParametersMustRevalidateOutputReference(_this, "must_revalidate");
        // must_understand - computed: true, optional: false, required: false
        _this._mustUnderstand = new DataCloudflareRulesetRulesActionParametersMustUnderstandOutputReference(_this, "must_understand");
        // no_cache - computed: true, optional: false, required: false
        _this._noCache = new DataCloudflareRulesetRulesActionParametersNoCacheOutputReference(_this, "no_cache");
        // no_store - computed: true, optional: false, required: false
        _this._noStore = new DataCloudflareRulesetRulesActionParametersNoStoreOutputReference(_this, "no_store");
        // no_transform - computed: true, optional: false, required: false
        _this._noTransform = new DataCloudflareRulesetRulesActionParametersNoTransformOutputReference(_this, "no_transform");
        // origin - computed: true, optional: false, required: false
        _this._origin = new DataCloudflareRulesetRulesActionParametersOriginOutputReference(_this, "origin");
        // overrides - computed: true, optional: false, required: false
        _this._overrides = new DataCloudflareRulesetRulesActionParametersOverridesOutputReference(_this, "overrides");
        // private - computed: true, optional: false, required: false
        _this._private = new DataCloudflareRulesetRulesActionParametersPrivateOutputReference(_this, "private");
        // proxy_revalidate - computed: true, optional: false, required: false
        _this._proxyRevalidate = new DataCloudflareRulesetRulesActionParametersProxyRevalidateOutputReference(_this, "proxy_revalidate");
        // public - computed: true, optional: false, required: false
        _this._public = new DataCloudflareRulesetRulesActionParametersPublicOutputReference(_this, "public");
        // raw_response_fields - computed: true, optional: false, required: false
        _this._rawResponseFields = new DataCloudflareRulesetRulesActionParametersRawResponseFieldsList(_this, "raw_response_fields", false);
        // request_fields - computed: true, optional: false, required: false
        _this._requestFields = new DataCloudflareRulesetRulesActionParametersRequestFieldsList(_this, "request_fields", false);
        // response - computed: true, optional: false, required: false
        _this._response = new DataCloudflareRulesetRulesActionParametersResponseOutputReference(_this, "response");
        // response_fields - computed: true, optional: false, required: false
        _this._responseFields = new DataCloudflareRulesetRulesActionParametersResponseFieldsList(_this, "response_fields", false);
        // rules - computed: true, optional: false, required: false
        _this._rules = new cdktf.StringListMap(_this, "rules");
        // s_maxage - computed: true, optional: false, required: false
        _this._sMaxage = new DataCloudflareRulesetRulesActionParametersSMaxageOutputReference(_this, "s_maxage");
        // serve_stale - computed: true, optional: false, required: false
        _this._serveStale = new DataCloudflareRulesetRulesActionParametersServeStaleOutputReference(_this, "serve_stale");
        // sni - computed: true, optional: false, required: false
        _this._sni = new DataCloudflareRulesetRulesActionParametersSniOutputReference(_this, "sni");
        // stale_if_error - computed: true, optional: false, required: false
        _this._staleIfError = new DataCloudflareRulesetRulesActionParametersStaleIfErrorOutputReference(_this, "stale_if_error");
        // stale_while_revalidate - computed: true, optional: false, required: false
        _this._staleWhileRevalidate = new DataCloudflareRulesetRulesActionParametersStaleWhileRevalidateOutputReference(_this, "stale_while_revalidate");
        // transformed_request_fields - computed: true, optional: false, required: false
        _this._transformedRequestFields = new DataCloudflareRulesetRulesActionParametersTransformedRequestFieldsList(_this, "transformed_request_fields", false);
        // uri - computed: true, optional: false, required: false
        _this._uri = new DataCloudflareRulesetRulesActionParametersUriOutputReference(_this, "uri");
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "additionalCacheablePorts", {
        // additional_cacheable_ports - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberListAttribute('additional_cacheable_ports');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "algorithms", {
        get: function () {
            return this._algorithms;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "assetName", {
        // asset_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('asset_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "automaticHttpsRewrites", {
        // automatic_https_rewrites - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('automatic_https_rewrites');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "autominify", {
        get: function () {
            return this._autominify;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "bic", {
        // bic - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('bic');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "browserTtl", {
        get: function () {
            return this._browserTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "cache", {
        // cache - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cache');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "cacheKey", {
        get: function () {
            return this._cacheKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "cacheReserve", {
        get: function () {
            return this._cacheReserve;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "content", {
        // content - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "contentConverter", {
        // content_converter - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('content_converter');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "contentType", {
        // content_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "cookieFields", {
        get: function () {
            return this._cookieFields;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "disableApps", {
        // disable_apps - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disable_apps');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "disableRum", {
        // disable_rum - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disable_rum');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "disableZaraz", {
        // disable_zaraz - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disable_zaraz');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "edgeTtl", {
        get: function () {
            return this._edgeTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "emailObfuscation", {
        // email_obfuscation - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('email_obfuscation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "expression", {
        // expression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "fonts", {
        // fonts - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('fonts');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "fromList", {
        get: function () {
            return this._fromList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "fromValue", {
        get: function () {
            return this._fromValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "headers", {
        get: function () {
            return this._headers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "hostHeader", {
        // host_header - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host_header');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "hotlinkProtection", {
        // hotlink_protection - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('hotlink_protection');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "immutable", {
        get: function () {
            return this._immutable;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "increment", {
        // increment - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('increment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "matchedData", {
        get: function () {
            return this._matchedData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "maxAge", {
        get: function () {
            return this._maxAge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "mirage", {
        // mirage - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('mirage');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "mustRevalidate", {
        get: function () {
            return this._mustRevalidate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "mustUnderstand", {
        get: function () {
            return this._mustUnderstand;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "noCache", {
        get: function () {
            return this._noCache;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "noStore", {
        get: function () {
            return this._noStore;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "noTransform", {
        get: function () {
            return this._noTransform;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "operation", {
        // operation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('operation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "opportunisticEncryption", {
        // opportunistic_encryption - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('opportunistic_encryption');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "origin", {
        get: function () {
            return this._origin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "originCacheControl", {
        // origin_cache_control - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('origin_cache_control');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "originErrorPagePassthru", {
        // origin_error_page_passthru - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('origin_error_page_passthru');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "overrides", {
        get: function () {
            return this._overrides;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "phases", {
        // phases - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('phases');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "polish", {
        // polish - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('polish');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "private", {
        get: function () {
            return this._private;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "products", {
        // products - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('products');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "proxyRevalidate", {
        get: function () {
            return this._proxyRevalidate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "public", {
        get: function () {
            return this._public;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "rawResponseFields", {
        get: function () {
            return this._rawResponseFields;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "readTimeout", {
        // read_timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('read_timeout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "redirectsForAiTraining", {
        // redirects_for_ai_training - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('redirects_for_ai_training');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "requestBodyBuffering", {
        // request_body_buffering - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('request_body_buffering');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "requestFields", {
        get: function () {
            return this._requestFields;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "respectStrongEtags", {
        // respect_strong_etags - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('respect_strong_etags');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "response", {
        get: function () {
            return this._response;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "responseBodyBuffering", {
        // response_body_buffering - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('response_body_buffering');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "responseFields", {
        get: function () {
            return this._responseFields;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "rocketLoader", {
        // rocket_loader - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('rocket_loader');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "ruleset", {
        // ruleset - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ruleset');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "rulesets", {
        // rulesets - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('rulesets');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "sMaxage", {
        get: function () {
            return this._sMaxage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "securityLevel", {
        // security_level - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('security_level');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "serveStale", {
        get: function () {
            return this._serveStale;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "serverSideExcludes", {
        // server_side_excludes - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('server_side_excludes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "sni", {
        get: function () {
            return this._sni;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "ssl", {
        // ssl - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ssl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "staleIfError", {
        get: function () {
            return this._staleIfError;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "staleWhileRevalidate", {
        get: function () {
            return this._staleWhileRevalidate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "statusCode", {
        // status_code - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('status_code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "stripEtags", {
        // strip_etags - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('strip_etags');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "stripLastModified", {
        // strip_last_modified - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('strip_last_modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "stripSetCookie", {
        // strip_set_cookie - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('strip_set_cookie');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "sxg", {
        // sxg - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('sxg');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "transformedRequestFields", {
        get: function () {
            return this._transformedRequestFields;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "uri", {
        get: function () {
            return this._uri;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesActionParametersOutputReference.prototype, "values", {
        // values - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('values');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesActionParametersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesActionParametersOutputReference = DataCloudflareRulesetRulesActionParametersOutputReference;
function dataCloudflareRulesetRulesExposedCredentialCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesExposedCredentialCheckToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesExposedCredentialCheckOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesExposedCredentialCheckOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesExposedCredentialCheckOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.prototype, "passwordExpression", {
        // password_expression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('password_expression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesExposedCredentialCheckOutputReference.prototype, "usernameExpression", {
        // username_expression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('username_expression');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesExposedCredentialCheckOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesExposedCredentialCheckOutputReference = DataCloudflareRulesetRulesExposedCredentialCheckOutputReference;
function dataCloudflareRulesetRulesLoggingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesLoggingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesLoggingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesLoggingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesLoggingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesLoggingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesLoggingOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesLoggingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesLoggingOutputReference = DataCloudflareRulesetRulesLoggingOutputReference;
function dataCloudflareRulesetRulesRatelimitToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesRatelimitToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesRatelimitOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesRatelimitOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareRulesetRulesRatelimitOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesRatelimitOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesRatelimitOutputReference.prototype, "characteristics", {
        // characteristics - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('characteristics');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesRatelimitOutputReference.prototype, "countingExpression", {
        // counting_expression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('counting_expression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesRatelimitOutputReference.prototype, "mitigationTimeout", {
        // mitigation_timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('mitigation_timeout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesRatelimitOutputReference.prototype, "period", {
        // period - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('period');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesRatelimitOutputReference.prototype, "requestsPerPeriod", {
        // requests_per_period - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('requests_per_period');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesRatelimitOutputReference.prototype, "requestsToOrigin", {
        // requests_to_origin - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('requests_to_origin');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesRatelimitOutputReference.prototype, "scorePerPeriod", {
        // score_per_period - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('score_per_period');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesRatelimitOutputReference.prototype, "scoreResponseHeaderName", {
        // score_response_header_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('score_response_header_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesRatelimitOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesRatelimitOutputReference = DataCloudflareRulesetRulesRatelimitOutputReference;
function dataCloudflareRulesetRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareRulesetRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareRulesetRulesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRulesetRulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // action_parameters - computed: true, optional: false, required: false
        _this._actionParameters = new DataCloudflareRulesetRulesActionParametersOutputReference(_this, "action_parameters");
        // exposed_credential_check - computed: true, optional: false, required: false
        _this._exposedCredentialCheck = new DataCloudflareRulesetRulesExposedCredentialCheckOutputReference(_this, "exposed_credential_check");
        // logging - computed: true, optional: false, required: false
        _this._logging = new DataCloudflareRulesetRulesLoggingOutputReference(_this, "logging");
        // ratelimit - computed: true, optional: false, required: false
        _this._ratelimit = new DataCloudflareRulesetRulesRatelimitOutputReference(_this, "ratelimit");
        return _this;
    }
    Object.defineProperty(DataCloudflareRulesetRulesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareRulesetRulesOutputReference.prototype, "action", {
        // action - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('action');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesOutputReference.prototype, "actionParameters", {
        get: function () {
            return this._actionParameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesOutputReference.prototype, "categories", {
        // categories - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('categories');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesOutputReference.prototype, "exposedCredentialCheck", {
        get: function () {
            return this._exposedCredentialCheck;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesOutputReference.prototype, "expression", {
        // expression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesOutputReference.prototype, "logging", {
        get: function () {
            return this._logging;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesOutputReference.prototype, "ratelimit", {
        get: function () {
            return this._ratelimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRulesetRulesOutputReference.prototype, "ref", {
        // ref - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ref');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareRulesetRulesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareRulesetRulesOutputReference = DataCloudflareRulesetRulesOutputReference;
var DataCloudflareRulesetRulesList = /** @class */ (function (_super) {
    __extends(DataCloudflareRulesetRulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareRulesetRulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareRulesetRulesList.prototype.get = function (index) {
        return new DataCloudflareRulesetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareRulesetRulesList;
}(cdktf.ComplexList));
exports.DataCloudflareRulesetRulesList = DataCloudflareRulesetRulesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ruleset cloudflare_ruleset}
*/
var DataCloudflareRuleset = /** @class */ (function (_super) {
    __extends(DataCloudflareRuleset, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ruleset cloudflare_ruleset} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareRulesetConfig = {}
    */
    function DataCloudflareRuleset(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        // rules - computed: true, optional: false, required: false
        _this._rules = new DataCloudflareRulesetRulesList(_this, "rules", false);
        _this._accountId = config.accountId;
        _this._id = config.id;
        _this._rulesetId = config.rulesetId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareRuleset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareRuleset to import
    * @param importFromId The id of the existing DataCloudflareRuleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ruleset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareRuleset to import is found
    */
    DataCloudflareRuleset.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ruleset", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareRuleset.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareRuleset.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareRuleset.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRuleset.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRuleset.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareRuleset.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataCloudflareRuleset.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRuleset.prototype, "kind", {
        // kind - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kind');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRuleset.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRuleset.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRuleset.prototype, "phase", {
        // phase - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('phase');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRuleset.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRuleset.prototype, "rulesetId", {
        get: function () {
            return this.getStringAttribute('ruleset_id');
        },
        set: function (value) {
            this._rulesetId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareRuleset.prototype.resetRulesetId = function () {
        this._rulesetId = undefined;
    };
    Object.defineProperty(DataCloudflareRuleset.prototype, "rulesetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rulesetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRuleset.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareRuleset.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareRuleset.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareRuleset.prototype, "zoneIdInput", {
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
    DataCloudflareRuleset.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            id: cdktf.stringToTerraform(this._id),
            ruleset_id: cdktf.stringToTerraform(this._rulesetId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareRuleset.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ruleset_id: {
                value: cdktf.stringToHclTerraform(this._rulesetId),
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
    DataCloudflareRuleset.tfResourceType = "cloudflare_ruleset";
    return DataCloudflareRuleset;
}(cdktf.TerraformDataSource));
exports.DataCloudflareRuleset = DataCloudflareRuleset;
