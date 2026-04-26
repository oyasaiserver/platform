"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance
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
exports.AiSearchInstance = exports.AiSearchInstanceSourceParamsOutputReference = exports.AiSearchInstanceSourceParamsWebCrawlerOutputReference = exports.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference = exports.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference = exports.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList = exports.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference = exports.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference = exports.AiSearchInstanceRetrievalOptionsOutputReference = exports.AiSearchInstanceRetrievalOptionsBoostByList = exports.AiSearchInstanceRetrievalOptionsBoostByOutputReference = exports.AiSearchInstancePublicEndpointParamsOutputReference = exports.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference = exports.AiSearchInstancePublicEndpointParamsRateLimitOutputReference = exports.AiSearchInstancePublicEndpointParamsMcpOutputReference = exports.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference = exports.AiSearchInstanceMetadataOutputReference = exports.AiSearchInstanceMetadataSearchForAgentsOutputReference = exports.AiSearchInstanceIndexingOptionsOutputReference = exports.AiSearchInstanceIndexMethodOutputReference = exports.AiSearchInstanceCustomMetadataList = exports.AiSearchInstanceCustomMetadataOutputReference = void 0;
exports.aiSearchInstanceCustomMetadataToTerraform = aiSearchInstanceCustomMetadataToTerraform;
exports.aiSearchInstanceCustomMetadataToHclTerraform = aiSearchInstanceCustomMetadataToHclTerraform;
exports.aiSearchInstanceIndexMethodToTerraform = aiSearchInstanceIndexMethodToTerraform;
exports.aiSearchInstanceIndexMethodToHclTerraform = aiSearchInstanceIndexMethodToHclTerraform;
exports.aiSearchInstanceIndexingOptionsToTerraform = aiSearchInstanceIndexingOptionsToTerraform;
exports.aiSearchInstanceIndexingOptionsToHclTerraform = aiSearchInstanceIndexingOptionsToHclTerraform;
exports.aiSearchInstanceMetadataSearchForAgentsToTerraform = aiSearchInstanceMetadataSearchForAgentsToTerraform;
exports.aiSearchInstanceMetadataSearchForAgentsToHclTerraform = aiSearchInstanceMetadataSearchForAgentsToHclTerraform;
exports.aiSearchInstanceMetadataToTerraform = aiSearchInstanceMetadataToTerraform;
exports.aiSearchInstanceMetadataToHclTerraform = aiSearchInstanceMetadataToHclTerraform;
exports.aiSearchInstancePublicEndpointParamsChatCompletionsEndpointToTerraform = aiSearchInstancePublicEndpointParamsChatCompletionsEndpointToTerraform;
exports.aiSearchInstancePublicEndpointParamsChatCompletionsEndpointToHclTerraform = aiSearchInstancePublicEndpointParamsChatCompletionsEndpointToHclTerraform;
exports.aiSearchInstancePublicEndpointParamsMcpToTerraform = aiSearchInstancePublicEndpointParamsMcpToTerraform;
exports.aiSearchInstancePublicEndpointParamsMcpToHclTerraform = aiSearchInstancePublicEndpointParamsMcpToHclTerraform;
exports.aiSearchInstancePublicEndpointParamsRateLimitToTerraform = aiSearchInstancePublicEndpointParamsRateLimitToTerraform;
exports.aiSearchInstancePublicEndpointParamsRateLimitToHclTerraform = aiSearchInstancePublicEndpointParamsRateLimitToHclTerraform;
exports.aiSearchInstancePublicEndpointParamsSearchEndpointToTerraform = aiSearchInstancePublicEndpointParamsSearchEndpointToTerraform;
exports.aiSearchInstancePublicEndpointParamsSearchEndpointToHclTerraform = aiSearchInstancePublicEndpointParamsSearchEndpointToHclTerraform;
exports.aiSearchInstancePublicEndpointParamsToTerraform = aiSearchInstancePublicEndpointParamsToTerraform;
exports.aiSearchInstancePublicEndpointParamsToHclTerraform = aiSearchInstancePublicEndpointParamsToHclTerraform;
exports.aiSearchInstanceRetrievalOptionsBoostByToTerraform = aiSearchInstanceRetrievalOptionsBoostByToTerraform;
exports.aiSearchInstanceRetrievalOptionsBoostByToHclTerraform = aiSearchInstanceRetrievalOptionsBoostByToHclTerraform;
exports.aiSearchInstanceRetrievalOptionsToTerraform = aiSearchInstanceRetrievalOptionsToTerraform;
exports.aiSearchInstanceRetrievalOptionsToHclTerraform = aiSearchInstanceRetrievalOptionsToHclTerraform;
exports.aiSearchInstanceSourceParamsWebCrawlerCrawlOptionsToTerraform = aiSearchInstanceSourceParamsWebCrawlerCrawlOptionsToTerraform;
exports.aiSearchInstanceSourceParamsWebCrawlerCrawlOptionsToHclTerraform = aiSearchInstanceSourceParamsWebCrawlerCrawlOptionsToHclTerraform;
exports.aiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToTerraform = aiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToTerraform;
exports.aiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToHclTerraform = aiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToHclTerraform;
exports.aiSearchInstanceSourceParamsWebCrawlerParseOptionsToTerraform = aiSearchInstanceSourceParamsWebCrawlerParseOptionsToTerraform;
exports.aiSearchInstanceSourceParamsWebCrawlerParseOptionsToHclTerraform = aiSearchInstanceSourceParamsWebCrawlerParseOptionsToHclTerraform;
exports.aiSearchInstanceSourceParamsWebCrawlerStoreOptionsToTerraform = aiSearchInstanceSourceParamsWebCrawlerStoreOptionsToTerraform;
exports.aiSearchInstanceSourceParamsWebCrawlerStoreOptionsToHclTerraform = aiSearchInstanceSourceParamsWebCrawlerStoreOptionsToHclTerraform;
exports.aiSearchInstanceSourceParamsWebCrawlerToTerraform = aiSearchInstanceSourceParamsWebCrawlerToTerraform;
exports.aiSearchInstanceSourceParamsWebCrawlerToHclTerraform = aiSearchInstanceSourceParamsWebCrawlerToHclTerraform;
exports.aiSearchInstanceSourceParamsToTerraform = aiSearchInstanceSourceParamsToTerraform;
exports.aiSearchInstanceSourceParamsToHclTerraform = aiSearchInstanceSourceParamsToHclTerraform;
var cdktf = require("cdktf");
function aiSearchInstanceCustomMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        data_type: cdktf.stringToTerraform(struct.dataType),
        field_name: cdktf.stringToTerraform(struct.fieldName),
    };
}
function aiSearchInstanceCustomMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        data_type: {
            value: cdktf.stringToHclTerraform(struct.dataType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        field_name: {
            value: cdktf.stringToHclTerraform(struct.fieldName),
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
var AiSearchInstanceCustomMetadataOutputReference = /** @class */ (function (_super) {
    __extends(AiSearchInstanceCustomMetadataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AiSearchInstanceCustomMetadataOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiSearchInstanceCustomMetadataOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._dataType !== undefined) {
                hasAnyValues = true;
                internalValueResult.dataType = this._dataType;
            }
            if (this._fieldName !== undefined) {
                hasAnyValues = true;
                internalValueResult.fieldName = this._fieldName;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._dataType = undefined;
                this._fieldName = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._dataType = value.dataType;
                this._fieldName = value.fieldName;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceCustomMetadataOutputReference.prototype, "dataType", {
        get: function () {
            return this.getStringAttribute('data_type');
        },
        set: function (value) {
            this._dataType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceCustomMetadataOutputReference.prototype, "dataTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dataType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceCustomMetadataOutputReference.prototype, "fieldName", {
        get: function () {
            return this.getStringAttribute('field_name');
        },
        set: function (value) {
            this._fieldName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceCustomMetadataOutputReference.prototype, "fieldNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fieldName;
        },
        enumerable: false,
        configurable: true
    });
    return AiSearchInstanceCustomMetadataOutputReference;
}(cdktf.ComplexObject));
exports.AiSearchInstanceCustomMetadataOutputReference = AiSearchInstanceCustomMetadataOutputReference;
var AiSearchInstanceCustomMetadataList = /** @class */ (function (_super) {
    __extends(AiSearchInstanceCustomMetadataList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AiSearchInstanceCustomMetadataList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    AiSearchInstanceCustomMetadataList.prototype.get = function (index) {
        return new AiSearchInstanceCustomMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return AiSearchInstanceCustomMetadataList;
}(cdktf.ComplexList));
exports.AiSearchInstanceCustomMetadataList = AiSearchInstanceCustomMetadataList;
function aiSearchInstanceIndexMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        keyword: cdktf.booleanToTerraform(struct.keyword),
        vector: cdktf.booleanToTerraform(struct.vector),
    };
}
function aiSearchInstanceIndexMethodToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        keyword: {
            value: cdktf.booleanToHclTerraform(struct.keyword),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        vector: {
            value: cdktf.booleanToHclTerraform(struct.vector),
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
var AiSearchInstanceIndexMethodOutputReference = /** @class */ (function (_super) {
    __extends(AiSearchInstanceIndexMethodOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiSearchInstanceIndexMethodOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiSearchInstanceIndexMethodOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._keyword !== undefined) {
                hasAnyValues = true;
                internalValueResult.keyword = this._keyword;
            }
            if (this._vector !== undefined) {
                hasAnyValues = true;
                internalValueResult.vector = this._vector;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._keyword = undefined;
                this._vector = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._keyword = value.keyword;
                this._vector = value.vector;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceIndexMethodOutputReference.prototype, "keyword", {
        get: function () {
            return this.getBooleanAttribute('keyword');
        },
        set: function (value) {
            this._keyword = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceIndexMethodOutputReference.prototype, "keywordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyword;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceIndexMethodOutputReference.prototype, "vector", {
        get: function () {
            return this.getBooleanAttribute('vector');
        },
        set: function (value) {
            this._vector = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceIndexMethodOutputReference.prototype, "vectorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vector;
        },
        enumerable: false,
        configurable: true
    });
    return AiSearchInstanceIndexMethodOutputReference;
}(cdktf.ComplexObject));
exports.AiSearchInstanceIndexMethodOutputReference = AiSearchInstanceIndexMethodOutputReference;
function aiSearchInstanceIndexingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        keyword_tokenizer: cdktf.stringToTerraform(struct.keywordTokenizer),
    };
}
function aiSearchInstanceIndexingOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        keyword_tokenizer: {
            value: cdktf.stringToHclTerraform(struct.keywordTokenizer),
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
var AiSearchInstanceIndexingOptionsOutputReference = /** @class */ (function (_super) {
    __extends(AiSearchInstanceIndexingOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiSearchInstanceIndexingOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiSearchInstanceIndexingOptionsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._keywordTokenizer !== undefined) {
                hasAnyValues = true;
                internalValueResult.keywordTokenizer = this._keywordTokenizer;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._keywordTokenizer = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._keywordTokenizer = value.keywordTokenizer;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceIndexingOptionsOutputReference.prototype, "keywordTokenizer", {
        get: function () {
            return this.getStringAttribute('keyword_tokenizer');
        },
        set: function (value) {
            this._keywordTokenizer = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceIndexingOptionsOutputReference.prototype.resetKeywordTokenizer = function () {
        this._keywordTokenizer = undefined;
    };
    Object.defineProperty(AiSearchInstanceIndexingOptionsOutputReference.prototype, "keywordTokenizerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keywordTokenizer;
        },
        enumerable: false,
        configurable: true
    });
    return AiSearchInstanceIndexingOptionsOutputReference;
}(cdktf.ComplexObject));
exports.AiSearchInstanceIndexingOptionsOutputReference = AiSearchInstanceIndexingOptionsOutputReference;
function aiSearchInstanceMetadataSearchForAgentsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        hostname: cdktf.stringToTerraform(struct.hostname),
        zone_id: cdktf.stringToTerraform(struct.zoneId),
        zone_name: cdktf.stringToTerraform(struct.zoneName),
    };
}
function aiSearchInstanceMetadataSearchForAgentsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        hostname: {
            value: cdktf.stringToHclTerraform(struct.hostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        zone_id: {
            value: cdktf.stringToHclTerraform(struct.zoneId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        zone_name: {
            value: cdktf.stringToHclTerraform(struct.zoneName),
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
var AiSearchInstanceMetadataSearchForAgentsOutputReference = /** @class */ (function (_super) {
    __extends(AiSearchInstanceMetadataSearchForAgentsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiSearchInstanceMetadataSearchForAgentsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiSearchInstanceMetadataSearchForAgentsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._hostname !== undefined) {
                hasAnyValues = true;
                internalValueResult.hostname = this._hostname;
            }
            if (this._zoneId !== undefined) {
                hasAnyValues = true;
                internalValueResult.zoneId = this._zoneId;
            }
            if (this._zoneName !== undefined) {
                hasAnyValues = true;
                internalValueResult.zoneName = this._zoneName;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._hostname = undefined;
                this._zoneId = undefined;
                this._zoneName = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._hostname = value.hostname;
                this._zoneId = value.zoneId;
                this._zoneName = value.zoneName;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceMetadataSearchForAgentsOutputReference.prototype, "hostname", {
        get: function () {
            return this.getStringAttribute('hostname');
        },
        set: function (value) {
            this._hostname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceMetadataSearchForAgentsOutputReference.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceMetadataSearchForAgentsOutputReference.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceMetadataSearchForAgentsOutputReference.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceMetadataSearchForAgentsOutputReference.prototype, "zoneName", {
        get: function () {
            return this.getStringAttribute('zone_name');
        },
        set: function (value) {
            this._zoneName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceMetadataSearchForAgentsOutputReference.prototype, "zoneNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneName;
        },
        enumerable: false,
        configurable: true
    });
    return AiSearchInstanceMetadataSearchForAgentsOutputReference;
}(cdktf.ComplexObject));
exports.AiSearchInstanceMetadataSearchForAgentsOutputReference = AiSearchInstanceMetadataSearchForAgentsOutputReference;
function aiSearchInstanceMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        created_from_aisearch_wizard: cdktf.booleanToTerraform(struct.createdFromAisearchWizard),
        search_for_agents: aiSearchInstanceMetadataSearchForAgentsToTerraform(struct.searchForAgents),
        worker_domain: cdktf.stringToTerraform(struct.workerDomain),
    };
}
function aiSearchInstanceMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        created_from_aisearch_wizard: {
            value: cdktf.booleanToHclTerraform(struct.createdFromAisearchWizard),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        search_for_agents: {
            value: aiSearchInstanceMetadataSearchForAgentsToHclTerraform(struct.searchForAgents),
            isBlock: true,
            type: "struct",
            storageClassType: "AiSearchInstanceMetadataSearchForAgents",
        },
        worker_domain: {
            value: cdktf.stringToHclTerraform(struct.workerDomain),
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
var AiSearchInstanceMetadataOutputReference = /** @class */ (function (_super) {
    __extends(AiSearchInstanceMetadataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiSearchInstanceMetadataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // search_for_agents - computed: false, optional: true, required: false
        _this._searchForAgents = new AiSearchInstanceMetadataSearchForAgentsOutputReference(_this, "search_for_agents");
        return _this;
    }
    Object.defineProperty(AiSearchInstanceMetadataOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._createdFromAisearchWizard !== undefined) {
                hasAnyValues = true;
                internalValueResult.createdFromAisearchWizard = this._createdFromAisearchWizard;
            }
            if (((_a = this._searchForAgents) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.searchForAgents = (_b = this._searchForAgents) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._workerDomain !== undefined) {
                hasAnyValues = true;
                internalValueResult.workerDomain = this._workerDomain;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._createdFromAisearchWizard = undefined;
                this._searchForAgents.internalValue = undefined;
                this._workerDomain = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._createdFromAisearchWizard = value.createdFromAisearchWizard;
                this._searchForAgents.internalValue = value.searchForAgents;
                this._workerDomain = value.workerDomain;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceMetadataOutputReference.prototype, "createdFromAisearchWizard", {
        get: function () {
            return this.getBooleanAttribute('created_from_aisearch_wizard');
        },
        set: function (value) {
            this._createdFromAisearchWizard = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceMetadataOutputReference.prototype.resetCreatedFromAisearchWizard = function () {
        this._createdFromAisearchWizard = undefined;
    };
    Object.defineProperty(AiSearchInstanceMetadataOutputReference.prototype, "createdFromAisearchWizardInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._createdFromAisearchWizard;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceMetadataOutputReference.prototype, "searchForAgents", {
        get: function () {
            return this._searchForAgents;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceMetadataOutputReference.prototype.putSearchForAgents = function (value) {
        this._searchForAgents.internalValue = value;
    };
    AiSearchInstanceMetadataOutputReference.prototype.resetSearchForAgents = function () {
        this._searchForAgents.internalValue = undefined;
    };
    Object.defineProperty(AiSearchInstanceMetadataOutputReference.prototype, "searchForAgentsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._searchForAgents.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceMetadataOutputReference.prototype, "workerDomain", {
        get: function () {
            return this.getStringAttribute('worker_domain');
        },
        set: function (value) {
            this._workerDomain = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceMetadataOutputReference.prototype.resetWorkerDomain = function () {
        this._workerDomain = undefined;
    };
    Object.defineProperty(AiSearchInstanceMetadataOutputReference.prototype, "workerDomainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workerDomain;
        },
        enumerable: false,
        configurable: true
    });
    return AiSearchInstanceMetadataOutputReference;
}(cdktf.ComplexObject));
exports.AiSearchInstanceMetadataOutputReference = AiSearchInstanceMetadataOutputReference;
function aiSearchInstancePublicEndpointParamsChatCompletionsEndpointToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disabled: cdktf.booleanToTerraform(struct.disabled),
    };
}
function aiSearchInstancePublicEndpointParamsChatCompletionsEndpointToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        disabled: {
            value: cdktf.booleanToHclTerraform(struct.disabled),
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
var AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference = /** @class */ (function (_super) {
    __extends(AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._disabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.disabled = this._disabled;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._disabled = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._disabled = value.disabled;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.prototype, "disabled", {
        get: function () {
            return this.getBooleanAttribute('disabled');
        },
        set: function (value) {
            this._disabled = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.prototype.resetDisabled = function () {
        this._disabled = undefined;
    };
    Object.defineProperty(AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.prototype, "disabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disabled;
        },
        enumerable: false,
        configurable: true
    });
    return AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference;
}(cdktf.ComplexObject));
exports.AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference = AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference;
function aiSearchInstancePublicEndpointParamsMcpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        description: cdktf.stringToTerraform(struct.description),
        disabled: cdktf.booleanToTerraform(struct.disabled),
    };
}
function aiSearchInstancePublicEndpointParamsMcpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        description: {
            value: cdktf.stringToHclTerraform(struct.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        disabled: {
            value: cdktf.booleanToHclTerraform(struct.disabled),
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
var AiSearchInstancePublicEndpointParamsMcpOutputReference = /** @class */ (function (_super) {
    __extends(AiSearchInstancePublicEndpointParamsMcpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiSearchInstancePublicEndpointParamsMcpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiSearchInstancePublicEndpointParamsMcpOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._description !== undefined) {
                hasAnyValues = true;
                internalValueResult.description = this._description;
            }
            if (this._disabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.disabled = this._disabled;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._description = undefined;
                this._disabled = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._description = value.description;
                this._disabled = value.disabled;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstancePublicEndpointParamsMcpOutputReference.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstancePublicEndpointParamsMcpOutputReference.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AiSearchInstancePublicEndpointParamsMcpOutputReference.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstancePublicEndpointParamsMcpOutputReference.prototype, "disabled", {
        get: function () {
            return this.getBooleanAttribute('disabled');
        },
        set: function (value) {
            this._disabled = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstancePublicEndpointParamsMcpOutputReference.prototype.resetDisabled = function () {
        this._disabled = undefined;
    };
    Object.defineProperty(AiSearchInstancePublicEndpointParamsMcpOutputReference.prototype, "disabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disabled;
        },
        enumerable: false,
        configurable: true
    });
    return AiSearchInstancePublicEndpointParamsMcpOutputReference;
}(cdktf.ComplexObject));
exports.AiSearchInstancePublicEndpointParamsMcpOutputReference = AiSearchInstancePublicEndpointParamsMcpOutputReference;
function aiSearchInstancePublicEndpointParamsRateLimitToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        period_ms: cdktf.numberToTerraform(struct.periodMs),
        requests: cdktf.numberToTerraform(struct.requests),
        technique: cdktf.stringToTerraform(struct.technique),
    };
}
function aiSearchInstancePublicEndpointParamsRateLimitToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        period_ms: {
            value: cdktf.numberToHclTerraform(struct.periodMs),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        requests: {
            value: cdktf.numberToHclTerraform(struct.requests),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        technique: {
            value: cdktf.stringToHclTerraform(struct.technique),
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
var AiSearchInstancePublicEndpointParamsRateLimitOutputReference = /** @class */ (function (_super) {
    __extends(AiSearchInstancePublicEndpointParamsRateLimitOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiSearchInstancePublicEndpointParamsRateLimitOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiSearchInstancePublicEndpointParamsRateLimitOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._periodMs !== undefined) {
                hasAnyValues = true;
                internalValueResult.periodMs = this._periodMs;
            }
            if (this._requests !== undefined) {
                hasAnyValues = true;
                internalValueResult.requests = this._requests;
            }
            if (this._technique !== undefined) {
                hasAnyValues = true;
                internalValueResult.technique = this._technique;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._periodMs = undefined;
                this._requests = undefined;
                this._technique = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._periodMs = value.periodMs;
                this._requests = value.requests;
                this._technique = value.technique;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstancePublicEndpointParamsRateLimitOutputReference.prototype, "periodMs", {
        get: function () {
            return this.getNumberAttribute('period_ms');
        },
        set: function (value) {
            this._periodMs = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstancePublicEndpointParamsRateLimitOutputReference.prototype.resetPeriodMs = function () {
        this._periodMs = undefined;
    };
    Object.defineProperty(AiSearchInstancePublicEndpointParamsRateLimitOutputReference.prototype, "periodMsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._periodMs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstancePublicEndpointParamsRateLimitOutputReference.prototype, "requests", {
        get: function () {
            return this.getNumberAttribute('requests');
        },
        set: function (value) {
            this._requests = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstancePublicEndpointParamsRateLimitOutputReference.prototype.resetRequests = function () {
        this._requests = undefined;
    };
    Object.defineProperty(AiSearchInstancePublicEndpointParamsRateLimitOutputReference.prototype, "requestsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requests;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstancePublicEndpointParamsRateLimitOutputReference.prototype, "technique", {
        get: function () {
            return this.getStringAttribute('technique');
        },
        set: function (value) {
            this._technique = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstancePublicEndpointParamsRateLimitOutputReference.prototype.resetTechnique = function () {
        this._technique = undefined;
    };
    Object.defineProperty(AiSearchInstancePublicEndpointParamsRateLimitOutputReference.prototype, "techniqueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._technique;
        },
        enumerable: false,
        configurable: true
    });
    return AiSearchInstancePublicEndpointParamsRateLimitOutputReference;
}(cdktf.ComplexObject));
exports.AiSearchInstancePublicEndpointParamsRateLimitOutputReference = AiSearchInstancePublicEndpointParamsRateLimitOutputReference;
function aiSearchInstancePublicEndpointParamsSearchEndpointToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disabled: cdktf.booleanToTerraform(struct.disabled),
    };
}
function aiSearchInstancePublicEndpointParamsSearchEndpointToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        disabled: {
            value: cdktf.booleanToHclTerraform(struct.disabled),
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
var AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference = /** @class */ (function (_super) {
    __extends(AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._disabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.disabled = this._disabled;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._disabled = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._disabled = value.disabled;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.prototype, "disabled", {
        get: function () {
            return this.getBooleanAttribute('disabled');
        },
        set: function (value) {
            this._disabled = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.prototype.resetDisabled = function () {
        this._disabled = undefined;
    };
    Object.defineProperty(AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.prototype, "disabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disabled;
        },
        enumerable: false,
        configurable: true
    });
    return AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference;
}(cdktf.ComplexObject));
exports.AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference = AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference;
function aiSearchInstancePublicEndpointParamsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        authorized_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.authorizedHosts),
        chat_completions_endpoint: aiSearchInstancePublicEndpointParamsChatCompletionsEndpointToTerraform(struct.chatCompletionsEndpoint),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        mcp: aiSearchInstancePublicEndpointParamsMcpToTerraform(struct.mcp),
        rate_limit: aiSearchInstancePublicEndpointParamsRateLimitToTerraform(struct.rateLimit),
        search_endpoint: aiSearchInstancePublicEndpointParamsSearchEndpointToTerraform(struct.searchEndpoint),
    };
}
function aiSearchInstancePublicEndpointParamsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        authorized_hosts: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.authorizedHosts),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        chat_completions_endpoint: {
            value: aiSearchInstancePublicEndpointParamsChatCompletionsEndpointToHclTerraform(struct.chatCompletionsEndpoint),
            isBlock: true,
            type: "struct",
            storageClassType: "AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        mcp: {
            value: aiSearchInstancePublicEndpointParamsMcpToHclTerraform(struct.mcp),
            isBlock: true,
            type: "struct",
            storageClassType: "AiSearchInstancePublicEndpointParamsMcp",
        },
        rate_limit: {
            value: aiSearchInstancePublicEndpointParamsRateLimitToHclTerraform(struct.rateLimit),
            isBlock: true,
            type: "struct",
            storageClassType: "AiSearchInstancePublicEndpointParamsRateLimit",
        },
        search_endpoint: {
            value: aiSearchInstancePublicEndpointParamsSearchEndpointToHclTerraform(struct.searchEndpoint),
            isBlock: true,
            type: "struct",
            storageClassType: "AiSearchInstancePublicEndpointParamsSearchEndpoint",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var AiSearchInstancePublicEndpointParamsOutputReference = /** @class */ (function (_super) {
    __extends(AiSearchInstancePublicEndpointParamsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiSearchInstancePublicEndpointParamsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // chat_completions_endpoint - computed: true, optional: true, required: false
        _this._chatCompletionsEndpoint = new AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference(_this, "chat_completions_endpoint");
        // mcp - computed: true, optional: true, required: false
        _this._mcp = new AiSearchInstancePublicEndpointParamsMcpOutputReference(_this, "mcp");
        // rate_limit - computed: true, optional: true, required: false
        _this._rateLimit = new AiSearchInstancePublicEndpointParamsRateLimitOutputReference(_this, "rate_limit");
        // search_endpoint - computed: true, optional: true, required: false
        _this._searchEndpoint = new AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference(_this, "search_endpoint");
        return _this;
    }
    Object.defineProperty(AiSearchInstancePublicEndpointParamsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._authorizedHosts !== undefined) {
                hasAnyValues = true;
                internalValueResult.authorizedHosts = this._authorizedHosts;
            }
            if (((_a = this._chatCompletionsEndpoint) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.chatCompletionsEndpoint = (_b = this._chatCompletionsEndpoint) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (((_c = this._mcp) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.mcp = (_d = this._mcp) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (((_e = this._rateLimit) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.rateLimit = (_f = this._rateLimit) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            if (((_g = this._searchEndpoint) === null || _g === void 0 ? void 0 : _g.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.searchEndpoint = (_h = this._searchEndpoint) === null || _h === void 0 ? void 0 : _h.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._authorizedHosts = undefined;
                this._chatCompletionsEndpoint.internalValue = undefined;
                this._enabled = undefined;
                this._mcp.internalValue = undefined;
                this._rateLimit.internalValue = undefined;
                this._searchEndpoint.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._authorizedHosts = value.authorizedHosts;
                this._chatCompletionsEndpoint.internalValue = value.chatCompletionsEndpoint;
                this._enabled = value.enabled;
                this._mcp.internalValue = value.mcp;
                this._rateLimit.internalValue = value.rateLimit;
                this._searchEndpoint.internalValue = value.searchEndpoint;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstancePublicEndpointParamsOutputReference.prototype, "authorizedHosts", {
        get: function () {
            return this.getListAttribute('authorized_hosts');
        },
        set: function (value) {
            this._authorizedHosts = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstancePublicEndpointParamsOutputReference.prototype.resetAuthorizedHosts = function () {
        this._authorizedHosts = undefined;
    };
    Object.defineProperty(AiSearchInstancePublicEndpointParamsOutputReference.prototype, "authorizedHostsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authorizedHosts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstancePublicEndpointParamsOutputReference.prototype, "chatCompletionsEndpoint", {
        get: function () {
            return this._chatCompletionsEndpoint;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstancePublicEndpointParamsOutputReference.prototype.putChatCompletionsEndpoint = function (value) {
        this._chatCompletionsEndpoint.internalValue = value;
    };
    AiSearchInstancePublicEndpointParamsOutputReference.prototype.resetChatCompletionsEndpoint = function () {
        this._chatCompletionsEndpoint.internalValue = undefined;
    };
    Object.defineProperty(AiSearchInstancePublicEndpointParamsOutputReference.prototype, "chatCompletionsEndpointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._chatCompletionsEndpoint.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstancePublicEndpointParamsOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstancePublicEndpointParamsOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(AiSearchInstancePublicEndpointParamsOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstancePublicEndpointParamsOutputReference.prototype, "mcp", {
        get: function () {
            return this._mcp;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstancePublicEndpointParamsOutputReference.prototype.putMcp = function (value) {
        this._mcp.internalValue = value;
    };
    AiSearchInstancePublicEndpointParamsOutputReference.prototype.resetMcp = function () {
        this._mcp.internalValue = undefined;
    };
    Object.defineProperty(AiSearchInstancePublicEndpointParamsOutputReference.prototype, "mcpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mcp.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstancePublicEndpointParamsOutputReference.prototype, "rateLimit", {
        get: function () {
            return this._rateLimit;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstancePublicEndpointParamsOutputReference.prototype.putRateLimit = function (value) {
        this._rateLimit.internalValue = value;
    };
    AiSearchInstancePublicEndpointParamsOutputReference.prototype.resetRateLimit = function () {
        this._rateLimit.internalValue = undefined;
    };
    Object.defineProperty(AiSearchInstancePublicEndpointParamsOutputReference.prototype, "rateLimitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rateLimit.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstancePublicEndpointParamsOutputReference.prototype, "searchEndpoint", {
        get: function () {
            return this._searchEndpoint;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstancePublicEndpointParamsOutputReference.prototype.putSearchEndpoint = function (value) {
        this._searchEndpoint.internalValue = value;
    };
    AiSearchInstancePublicEndpointParamsOutputReference.prototype.resetSearchEndpoint = function () {
        this._searchEndpoint.internalValue = undefined;
    };
    Object.defineProperty(AiSearchInstancePublicEndpointParamsOutputReference.prototype, "searchEndpointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._searchEndpoint.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return AiSearchInstancePublicEndpointParamsOutputReference;
}(cdktf.ComplexObject));
exports.AiSearchInstancePublicEndpointParamsOutputReference = AiSearchInstancePublicEndpointParamsOutputReference;
function aiSearchInstanceRetrievalOptionsBoostByToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        direction: cdktf.stringToTerraform(struct.direction),
        field: cdktf.stringToTerraform(struct.field),
    };
}
function aiSearchInstanceRetrievalOptionsBoostByToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        direction: {
            value: cdktf.stringToHclTerraform(struct.direction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        field: {
            value: cdktf.stringToHclTerraform(struct.field),
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
var AiSearchInstanceRetrievalOptionsBoostByOutputReference = /** @class */ (function (_super) {
    __extends(AiSearchInstanceRetrievalOptionsBoostByOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AiSearchInstanceRetrievalOptionsBoostByOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiSearchInstanceRetrievalOptionsBoostByOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._direction !== undefined) {
                hasAnyValues = true;
                internalValueResult.direction = this._direction;
            }
            if (this._field !== undefined) {
                hasAnyValues = true;
                internalValueResult.field = this._field;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._direction = undefined;
                this._field = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._direction = value.direction;
                this._field = value.field;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceRetrievalOptionsBoostByOutputReference.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceRetrievalOptionsBoostByOutputReference.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(AiSearchInstanceRetrievalOptionsBoostByOutputReference.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceRetrievalOptionsBoostByOutputReference.prototype, "field", {
        get: function () {
            return this.getStringAttribute('field');
        },
        set: function (value) {
            this._field = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceRetrievalOptionsBoostByOutputReference.prototype, "fieldInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._field;
        },
        enumerable: false,
        configurable: true
    });
    return AiSearchInstanceRetrievalOptionsBoostByOutputReference;
}(cdktf.ComplexObject));
exports.AiSearchInstanceRetrievalOptionsBoostByOutputReference = AiSearchInstanceRetrievalOptionsBoostByOutputReference;
var AiSearchInstanceRetrievalOptionsBoostByList = /** @class */ (function (_super) {
    __extends(AiSearchInstanceRetrievalOptionsBoostByList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AiSearchInstanceRetrievalOptionsBoostByList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    AiSearchInstanceRetrievalOptionsBoostByList.prototype.get = function (index) {
        return new AiSearchInstanceRetrievalOptionsBoostByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return AiSearchInstanceRetrievalOptionsBoostByList;
}(cdktf.ComplexList));
exports.AiSearchInstanceRetrievalOptionsBoostByList = AiSearchInstanceRetrievalOptionsBoostByList;
function aiSearchInstanceRetrievalOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        boost_by: cdktf.listMapper(aiSearchInstanceRetrievalOptionsBoostByToTerraform, false)(struct.boostBy),
        keyword_match_mode: cdktf.stringToTerraform(struct.keywordMatchMode),
    };
}
function aiSearchInstanceRetrievalOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        boost_by: {
            value: cdktf.listMapperHcl(aiSearchInstanceRetrievalOptionsBoostByToHclTerraform, false)(struct.boostBy),
            isBlock: true,
            type: "list",
            storageClassType: "AiSearchInstanceRetrievalOptionsBoostByList",
        },
        keyword_match_mode: {
            value: cdktf.stringToHclTerraform(struct.keywordMatchMode),
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
var AiSearchInstanceRetrievalOptionsOutputReference = /** @class */ (function (_super) {
    __extends(AiSearchInstanceRetrievalOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiSearchInstanceRetrievalOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // boost_by - computed: true, optional: true, required: false
        _this._boostBy = new AiSearchInstanceRetrievalOptionsBoostByList(_this, "boost_by", false);
        return _this;
    }
    Object.defineProperty(AiSearchInstanceRetrievalOptionsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._boostBy) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.boostBy = (_b = this._boostBy) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._keywordMatchMode !== undefined) {
                hasAnyValues = true;
                internalValueResult.keywordMatchMode = this._keywordMatchMode;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._boostBy.internalValue = undefined;
                this._keywordMatchMode = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._boostBy.internalValue = value.boostBy;
                this._keywordMatchMode = value.keywordMatchMode;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceRetrievalOptionsOutputReference.prototype, "boostBy", {
        get: function () {
            return this._boostBy;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceRetrievalOptionsOutputReference.prototype.putBoostBy = function (value) {
        this._boostBy.internalValue = value;
    };
    AiSearchInstanceRetrievalOptionsOutputReference.prototype.resetBoostBy = function () {
        this._boostBy.internalValue = undefined;
    };
    Object.defineProperty(AiSearchInstanceRetrievalOptionsOutputReference.prototype, "boostByInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._boostBy.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceRetrievalOptionsOutputReference.prototype, "keywordMatchMode", {
        get: function () {
            return this.getStringAttribute('keyword_match_mode');
        },
        set: function (value) {
            this._keywordMatchMode = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceRetrievalOptionsOutputReference.prototype.resetKeywordMatchMode = function () {
        this._keywordMatchMode = undefined;
    };
    Object.defineProperty(AiSearchInstanceRetrievalOptionsOutputReference.prototype, "keywordMatchModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keywordMatchMode;
        },
        enumerable: false,
        configurable: true
    });
    return AiSearchInstanceRetrievalOptionsOutputReference;
}(cdktf.ComplexObject));
exports.AiSearchInstanceRetrievalOptionsOutputReference = AiSearchInstanceRetrievalOptionsOutputReference;
function aiSearchInstanceSourceParamsWebCrawlerCrawlOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        depth: cdktf.numberToTerraform(struct.depth),
        include_external_links: cdktf.booleanToTerraform(struct.includeExternalLinks),
        include_subdomains: cdktf.booleanToTerraform(struct.includeSubdomains),
        max_age: cdktf.numberToTerraform(struct.maxAge),
        source: cdktf.stringToTerraform(struct.source),
    };
}
function aiSearchInstanceSourceParamsWebCrawlerCrawlOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        depth: {
            value: cdktf.numberToHclTerraform(struct.depth),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        include_external_links: {
            value: cdktf.booleanToHclTerraform(struct.includeExternalLinks),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_subdomains: {
            value: cdktf.booleanToHclTerraform(struct.includeSubdomains),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        max_age: {
            value: cdktf.numberToHclTerraform(struct.maxAge),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        source: {
            value: cdktf.stringToHclTerraform(struct.source),
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
var AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference = /** @class */ (function (_super) {
    __extends(AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._depth !== undefined) {
                hasAnyValues = true;
                internalValueResult.depth = this._depth;
            }
            if (this._includeExternalLinks !== undefined) {
                hasAnyValues = true;
                internalValueResult.includeExternalLinks = this._includeExternalLinks;
            }
            if (this._includeSubdomains !== undefined) {
                hasAnyValues = true;
                internalValueResult.includeSubdomains = this._includeSubdomains;
            }
            if (this._maxAge !== undefined) {
                hasAnyValues = true;
                internalValueResult.maxAge = this._maxAge;
            }
            if (this._source !== undefined) {
                hasAnyValues = true;
                internalValueResult.source = this._source;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._depth = undefined;
                this._includeExternalLinks = undefined;
                this._includeSubdomains = undefined;
                this._maxAge = undefined;
                this._source = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._depth = value.depth;
                this._includeExternalLinks = value.includeExternalLinks;
                this._includeSubdomains = value.includeSubdomains;
                this._maxAge = value.maxAge;
                this._source = value.source;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype, "depth", {
        get: function () {
            return this.getNumberAttribute('depth');
        },
        set: function (value) {
            this._depth = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype.resetDepth = function () {
        this._depth = undefined;
    };
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype, "depthInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._depth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype, "includeExternalLinks", {
        get: function () {
            return this.getBooleanAttribute('include_external_links');
        },
        set: function (value) {
            this._includeExternalLinks = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype.resetIncludeExternalLinks = function () {
        this._includeExternalLinks = undefined;
    };
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype, "includeExternalLinksInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includeExternalLinks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype, "includeSubdomains", {
        get: function () {
            return this.getBooleanAttribute('include_subdomains');
        },
        set: function (value) {
            this._includeSubdomains = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype.resetIncludeSubdomains = function () {
        this._includeSubdomains = undefined;
    };
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype, "includeSubdomainsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includeSubdomains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype, "maxAge", {
        get: function () {
            return this.getNumberAttribute('max_age');
        },
        set: function (value) {
            this._maxAge = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype.resetMaxAge = function () {
        this._maxAge = undefined;
    };
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype, "maxAgeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxAge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype, "source", {
        get: function () {
            return this.getStringAttribute('source');
        },
        set: function (value) {
            this._source = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype.resetSource = function () {
        this._source = undefined;
    };
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype, "sourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    return AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference;
}(cdktf.ComplexObject));
exports.AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference = AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference;
function aiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        path: cdktf.stringToTerraform(struct.path),
        selector: cdktf.stringToTerraform(struct.selector),
    };
}
function aiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        path: {
            value: cdktf.stringToHclTerraform(struct.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        selector: {
            value: cdktf.stringToHclTerraform(struct.selector),
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
var AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference = /** @class */ (function (_super) {
    __extends(AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._path !== undefined) {
                hasAnyValues = true;
                internalValueResult.path = this._path;
            }
            if (this._selector !== undefined) {
                hasAnyValues = true;
                internalValueResult.selector = this._selector;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._path = undefined;
                this._selector = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._path = value.path;
                this._selector = value.selector;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.prototype, "path", {
        get: function () {
            return this.getStringAttribute('path');
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.prototype, "selector", {
        get: function () {
            return this.getStringAttribute('selector');
        },
        set: function (value) {
            this._selector = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.prototype, "selectorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._selector;
        },
        enumerable: false,
        configurable: true
    });
    return AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference;
}(cdktf.ComplexObject));
exports.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference = AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference;
var AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList = /** @class */ (function (_super) {
    __extends(AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.prototype.get = function (index) {
        return new AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList;
}(cdktf.ComplexList));
exports.AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList = AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList;
function aiSearchInstanceSourceParamsWebCrawlerParseOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content_selector: cdktf.listMapper(aiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToTerraform, false)(struct.contentSelector),
        include_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct.includeHeaders),
        include_images: cdktf.booleanToTerraform(struct.includeImages),
        specific_sitemaps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.specificSitemaps),
        use_browser_rendering: cdktf.booleanToTerraform(struct.useBrowserRendering),
    };
}
function aiSearchInstanceSourceParamsWebCrawlerParseOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        content_selector: {
            value: cdktf.listMapperHcl(aiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToHclTerraform, false)(struct.contentSelector),
            isBlock: true,
            type: "list",
            storageClassType: "AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList",
        },
        include_headers: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.includeHeaders),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        include_images: {
            value: cdktf.booleanToHclTerraform(struct.includeImages),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        specific_sitemaps: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.specificSitemaps),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        use_browser_rendering: {
            value: cdktf.booleanToHclTerraform(struct.useBrowserRendering),
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
var AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference = /** @class */ (function (_super) {
    __extends(AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // content_selector - computed: true, optional: true, required: false
        _this._contentSelector = new AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList(_this, "content_selector", false);
        return _this;
    }
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._contentSelector) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.contentSelector = (_b = this._contentSelector) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._includeHeaders !== undefined) {
                hasAnyValues = true;
                internalValueResult.includeHeaders = this._includeHeaders;
            }
            if (this._includeImages !== undefined) {
                hasAnyValues = true;
                internalValueResult.includeImages = this._includeImages;
            }
            if (this._specificSitemaps !== undefined) {
                hasAnyValues = true;
                internalValueResult.specificSitemaps = this._specificSitemaps;
            }
            if (this._useBrowserRendering !== undefined) {
                hasAnyValues = true;
                internalValueResult.useBrowserRendering = this._useBrowserRendering;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._contentSelector.internalValue = undefined;
                this._includeHeaders = undefined;
                this._includeImages = undefined;
                this._specificSitemaps = undefined;
                this._useBrowserRendering = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._contentSelector.internalValue = value.contentSelector;
                this._includeHeaders = value.includeHeaders;
                this._includeImages = value.includeImages;
                this._specificSitemaps = value.specificSitemaps;
                this._useBrowserRendering = value.useBrowserRendering;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.prototype, "contentSelector", {
        get: function () {
            return this._contentSelector;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.prototype.putContentSelector = function (value) {
        this._contentSelector.internalValue = value;
    };
    AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.prototype.resetContentSelector = function () {
        this._contentSelector.internalValue = undefined;
    };
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.prototype, "contentSelectorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentSelector.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.prototype, "includeHeaders", {
        get: function () {
            return this.getStringMapAttribute('include_headers');
        },
        set: function (value) {
            this._includeHeaders = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.prototype.resetIncludeHeaders = function () {
        this._includeHeaders = undefined;
    };
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.prototype, "includeHeadersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includeHeaders;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.prototype, "includeImages", {
        get: function () {
            return this.getBooleanAttribute('include_images');
        },
        set: function (value) {
            this._includeImages = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.prototype.resetIncludeImages = function () {
        this._includeImages = undefined;
    };
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.prototype, "includeImagesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includeImages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.prototype, "specificSitemaps", {
        get: function () {
            return this.getListAttribute('specific_sitemaps');
        },
        set: function (value) {
            this._specificSitemaps = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.prototype.resetSpecificSitemaps = function () {
        this._specificSitemaps = undefined;
    };
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.prototype, "specificSitemapsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._specificSitemaps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.prototype, "useBrowserRendering", {
        get: function () {
            return this.getBooleanAttribute('use_browser_rendering');
        },
        set: function (value) {
            this._useBrowserRendering = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.prototype.resetUseBrowserRendering = function () {
        this._useBrowserRendering = undefined;
    };
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.prototype, "useBrowserRenderingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._useBrowserRendering;
        },
        enumerable: false,
        configurable: true
    });
    return AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference;
}(cdktf.ComplexObject));
exports.AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference = AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference;
function aiSearchInstanceSourceParamsWebCrawlerStoreOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        r2_jurisdiction: cdktf.stringToTerraform(struct.r2Jurisdiction),
        storage_id: cdktf.stringToTerraform(struct.storageId),
        storage_type: cdktf.stringToTerraform(struct.storageType),
    };
}
function aiSearchInstanceSourceParamsWebCrawlerStoreOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        r2_jurisdiction: {
            value: cdktf.stringToHclTerraform(struct.r2Jurisdiction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        storage_id: {
            value: cdktf.stringToHclTerraform(struct.storageId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        storage_type: {
            value: cdktf.stringToHclTerraform(struct.storageType),
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
var AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference = /** @class */ (function (_super) {
    __extends(AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._r2Jurisdiction !== undefined) {
                hasAnyValues = true;
                internalValueResult.r2Jurisdiction = this._r2Jurisdiction;
            }
            if (this._storageId !== undefined) {
                hasAnyValues = true;
                internalValueResult.storageId = this._storageId;
            }
            if (this._storageType !== undefined) {
                hasAnyValues = true;
                internalValueResult.storageType = this._storageType;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._r2Jurisdiction = undefined;
                this._storageId = undefined;
                this._storageType = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._r2Jurisdiction = value.r2Jurisdiction;
                this._storageId = value.storageId;
                this._storageType = value.storageType;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.prototype, "r2Jurisdiction", {
        get: function () {
            return this.getStringAttribute('r2_jurisdiction');
        },
        set: function (value) {
            this._r2Jurisdiction = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.prototype.resetR2Jurisdiction = function () {
        this._r2Jurisdiction = undefined;
    };
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.prototype, "r2JurisdictionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._r2Jurisdiction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.prototype, "storageId", {
        get: function () {
            return this.getStringAttribute('storage_id');
        },
        set: function (value) {
            this._storageId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.prototype, "storageIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.prototype, "storageType", {
        get: function () {
            return this.getStringAttribute('storage_type');
        },
        set: function (value) {
            this._storageType = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.prototype.resetStorageType = function () {
        this._storageType = undefined;
    };
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.prototype, "storageTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageType;
        },
        enumerable: false,
        configurable: true
    });
    return AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference;
}(cdktf.ComplexObject));
exports.AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference = AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference;
function aiSearchInstanceSourceParamsWebCrawlerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        crawl_options: aiSearchInstanceSourceParamsWebCrawlerCrawlOptionsToTerraform(struct.crawlOptions),
        parse_options: aiSearchInstanceSourceParamsWebCrawlerParseOptionsToTerraform(struct.parseOptions),
        parse_type: cdktf.stringToTerraform(struct.parseType),
        store_options: aiSearchInstanceSourceParamsWebCrawlerStoreOptionsToTerraform(struct.storeOptions),
    };
}
function aiSearchInstanceSourceParamsWebCrawlerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        crawl_options: {
            value: aiSearchInstanceSourceParamsWebCrawlerCrawlOptionsToHclTerraform(struct.crawlOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "AiSearchInstanceSourceParamsWebCrawlerCrawlOptions",
        },
        parse_options: {
            value: aiSearchInstanceSourceParamsWebCrawlerParseOptionsToHclTerraform(struct.parseOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "AiSearchInstanceSourceParamsWebCrawlerParseOptions",
        },
        parse_type: {
            value: cdktf.stringToHclTerraform(struct.parseType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        store_options: {
            value: aiSearchInstanceSourceParamsWebCrawlerStoreOptionsToHclTerraform(struct.storeOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "AiSearchInstanceSourceParamsWebCrawlerStoreOptions",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var AiSearchInstanceSourceParamsWebCrawlerOutputReference = /** @class */ (function (_super) {
    __extends(AiSearchInstanceSourceParamsWebCrawlerOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiSearchInstanceSourceParamsWebCrawlerOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // crawl_options - computed: true, optional: true, required: false
        _this._crawlOptions = new AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference(_this, "crawl_options");
        // parse_options - computed: true, optional: true, required: false
        _this._parseOptions = new AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference(_this, "parse_options");
        // store_options - computed: true, optional: true, required: false
        _this._storeOptions = new AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference(_this, "store_options");
        return _this;
    }
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._crawlOptions) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.crawlOptions = (_b = this._crawlOptions) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._parseOptions) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.parseOptions = (_d = this._parseOptions) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (this._parseType !== undefined) {
                hasAnyValues = true;
                internalValueResult.parseType = this._parseType;
            }
            if (((_e = this._storeOptions) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.storeOptions = (_f = this._storeOptions) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._crawlOptions.internalValue = undefined;
                this._parseOptions.internalValue = undefined;
                this._parseType = undefined;
                this._storeOptions.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._crawlOptions.internalValue = value.crawlOptions;
                this._parseOptions.internalValue = value.parseOptions;
                this._parseType = value.parseType;
                this._storeOptions.internalValue = value.storeOptions;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerOutputReference.prototype, "crawlOptions", {
        get: function () {
            return this._crawlOptions;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceSourceParamsWebCrawlerOutputReference.prototype.putCrawlOptions = function (value) {
        this._crawlOptions.internalValue = value;
    };
    AiSearchInstanceSourceParamsWebCrawlerOutputReference.prototype.resetCrawlOptions = function () {
        this._crawlOptions.internalValue = undefined;
    };
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerOutputReference.prototype, "crawlOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._crawlOptions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerOutputReference.prototype, "parseOptions", {
        get: function () {
            return this._parseOptions;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceSourceParamsWebCrawlerOutputReference.prototype.putParseOptions = function (value) {
        this._parseOptions.internalValue = value;
    };
    AiSearchInstanceSourceParamsWebCrawlerOutputReference.prototype.resetParseOptions = function () {
        this._parseOptions.internalValue = undefined;
    };
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerOutputReference.prototype, "parseOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parseOptions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerOutputReference.prototype, "parseType", {
        get: function () {
            return this.getStringAttribute('parse_type');
        },
        set: function (value) {
            this._parseType = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceSourceParamsWebCrawlerOutputReference.prototype.resetParseType = function () {
        this._parseType = undefined;
    };
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerOutputReference.prototype, "parseTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parseType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerOutputReference.prototype, "storeOptions", {
        get: function () {
            return this._storeOptions;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceSourceParamsWebCrawlerOutputReference.prototype.putStoreOptions = function (value) {
        this._storeOptions.internalValue = value;
    };
    AiSearchInstanceSourceParamsWebCrawlerOutputReference.prototype.resetStoreOptions = function () {
        this._storeOptions.internalValue = undefined;
    };
    Object.defineProperty(AiSearchInstanceSourceParamsWebCrawlerOutputReference.prototype, "storeOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storeOptions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return AiSearchInstanceSourceParamsWebCrawlerOutputReference;
}(cdktf.ComplexObject));
exports.AiSearchInstanceSourceParamsWebCrawlerOutputReference = AiSearchInstanceSourceParamsWebCrawlerOutputReference;
function aiSearchInstanceSourceParamsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        exclude_items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.excludeItems),
        include_items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.includeItems),
        prefix: cdktf.stringToTerraform(struct.prefix),
        r2_jurisdiction: cdktf.stringToTerraform(struct.r2Jurisdiction),
        web_crawler: aiSearchInstanceSourceParamsWebCrawlerToTerraform(struct.webCrawler),
    };
}
function aiSearchInstanceSourceParamsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        exclude_items: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.excludeItems),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        include_items: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.includeItems),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        prefix: {
            value: cdktf.stringToHclTerraform(struct.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        r2_jurisdiction: {
            value: cdktf.stringToHclTerraform(struct.r2Jurisdiction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        web_crawler: {
            value: aiSearchInstanceSourceParamsWebCrawlerToHclTerraform(struct.webCrawler),
            isBlock: true,
            type: "struct",
            storageClassType: "AiSearchInstanceSourceParamsWebCrawler",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var AiSearchInstanceSourceParamsOutputReference = /** @class */ (function (_super) {
    __extends(AiSearchInstanceSourceParamsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AiSearchInstanceSourceParamsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // web_crawler - computed: true, optional: true, required: false
        _this._webCrawler = new AiSearchInstanceSourceParamsWebCrawlerOutputReference(_this, "web_crawler");
        return _this;
    }
    Object.defineProperty(AiSearchInstanceSourceParamsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._excludeItems !== undefined) {
                hasAnyValues = true;
                internalValueResult.excludeItems = this._excludeItems;
            }
            if (this._includeItems !== undefined) {
                hasAnyValues = true;
                internalValueResult.includeItems = this._includeItems;
            }
            if (this._prefix !== undefined) {
                hasAnyValues = true;
                internalValueResult.prefix = this._prefix;
            }
            if (this._r2Jurisdiction !== undefined) {
                hasAnyValues = true;
                internalValueResult.r2Jurisdiction = this._r2Jurisdiction;
            }
            if (((_a = this._webCrawler) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.webCrawler = (_b = this._webCrawler) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._excludeItems = undefined;
                this._includeItems = undefined;
                this._prefix = undefined;
                this._r2Jurisdiction = undefined;
                this._webCrawler.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._excludeItems = value.excludeItems;
                this._includeItems = value.includeItems;
                this._prefix = value.prefix;
                this._r2Jurisdiction = value.r2Jurisdiction;
                this._webCrawler.internalValue = value.webCrawler;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsOutputReference.prototype, "excludeItems", {
        get: function () {
            return this.getListAttribute('exclude_items');
        },
        set: function (value) {
            this._excludeItems = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceSourceParamsOutputReference.prototype.resetExcludeItems = function () {
        this._excludeItems = undefined;
    };
    Object.defineProperty(AiSearchInstanceSourceParamsOutputReference.prototype, "excludeItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._excludeItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsOutputReference.prototype, "includeItems", {
        get: function () {
            return this.getListAttribute('include_items');
        },
        set: function (value) {
            this._includeItems = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceSourceParamsOutputReference.prototype.resetIncludeItems = function () {
        this._includeItems = undefined;
    };
    Object.defineProperty(AiSearchInstanceSourceParamsOutputReference.prototype, "includeItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includeItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsOutputReference.prototype, "prefix", {
        get: function () {
            return this.getStringAttribute('prefix');
        },
        set: function (value) {
            this._prefix = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceSourceParamsOutputReference.prototype.resetPrefix = function () {
        this._prefix = undefined;
    };
    Object.defineProperty(AiSearchInstanceSourceParamsOutputReference.prototype, "prefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._prefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsOutputReference.prototype, "r2Jurisdiction", {
        get: function () {
            return this.getStringAttribute('r2_jurisdiction');
        },
        set: function (value) {
            this._r2Jurisdiction = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceSourceParamsOutputReference.prototype.resetR2Jurisdiction = function () {
        this._r2Jurisdiction = undefined;
    };
    Object.defineProperty(AiSearchInstanceSourceParamsOutputReference.prototype, "r2JurisdictionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._r2Jurisdiction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstanceSourceParamsOutputReference.prototype, "webCrawler", {
        get: function () {
            return this._webCrawler;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstanceSourceParamsOutputReference.prototype.putWebCrawler = function (value) {
        this._webCrawler.internalValue = value;
    };
    AiSearchInstanceSourceParamsOutputReference.prototype.resetWebCrawler = function () {
        this._webCrawler.internalValue = undefined;
    };
    Object.defineProperty(AiSearchInstanceSourceParamsOutputReference.prototype, "webCrawlerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._webCrawler.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return AiSearchInstanceSourceParamsOutputReference;
}(cdktf.ComplexObject));
exports.AiSearchInstanceSourceParamsOutputReference = AiSearchInstanceSourceParamsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance cloudflare_ai_search_instance}
*/
var AiSearchInstance = /** @class */ (function (_super) {
    __extends(AiSearchInstance, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance cloudflare_ai_search_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AiSearchInstanceConfig
    */
    function AiSearchInstance(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_ai_search_instance',
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
        // custom_metadata - computed: false, optional: true, required: false
        _this._customMetadata = new AiSearchInstanceCustomMetadataList(_this, "custom_metadata", false);
        // index_method - computed: true, optional: true, required: false
        _this._indexMethod = new AiSearchInstanceIndexMethodOutputReference(_this, "index_method");
        // indexing_options - computed: true, optional: true, required: false
        _this._indexingOptions = new AiSearchInstanceIndexingOptionsOutputReference(_this, "indexing_options");
        // metadata - computed: false, optional: true, required: false
        _this._metadata = new AiSearchInstanceMetadataOutputReference(_this, "metadata");
        // public_endpoint_params - computed: true, optional: true, required: false
        _this._publicEndpointParams = new AiSearchInstancePublicEndpointParamsOutputReference(_this, "public_endpoint_params");
        // retrieval_options - computed: true, optional: true, required: false
        _this._retrievalOptions = new AiSearchInstanceRetrievalOptionsOutputReference(_this, "retrieval_options");
        // source_params - computed: true, optional: true, required: false
        _this._sourceParams = new AiSearchInstanceSourceParamsOutputReference(_this, "source_params");
        _this._accountId = config.accountId;
        _this._aiGatewayId = config.aiGatewayId;
        _this._aisearchModel = config.aisearchModel;
        _this._cache = config.cache;
        _this._cacheThreshold = config.cacheThreshold;
        _this._chunk = config.chunk;
        _this._chunkOverlap = config.chunkOverlap;
        _this._chunkSize = config.chunkSize;
        _this._customMetadata.internalValue = config.customMetadata;
        _this._embeddingModel = config.embeddingModel;
        _this._fusionMethod = config.fusionMethod;
        _this._hybridSearchEnabled = config.hybridSearchEnabled;
        _this._id = config.id;
        _this._indexMethod.internalValue = config.indexMethod;
        _this._indexingOptions.internalValue = config.indexingOptions;
        _this._maxNumResults = config.maxNumResults;
        _this._metadata.internalValue = config.metadata;
        _this._paused = config.paused;
        _this._publicEndpointParams.internalValue = config.publicEndpointParams;
        _this._reranking = config.reranking;
        _this._rerankingModel = config.rerankingModel;
        _this._retrievalOptions.internalValue = config.retrievalOptions;
        _this._rewriteModel = config.rewriteModel;
        _this._rewriteQuery = config.rewriteQuery;
        _this._scoreThreshold = config.scoreThreshold;
        _this._source = config.source;
        _this._sourceParams.internalValue = config.sourceParams;
        _this._summarization = config.summarization;
        _this._summarizationModel = config.summarizationModel;
        _this._syncInterval = config.syncInterval;
        _this._systemPromptAisearch = config.systemPromptAisearch;
        _this._systemPromptIndexSummarization = config.systemPromptIndexSummarization;
        _this._systemPromptRewriteQuery = config.systemPromptRewriteQuery;
        _this._tokenId = config.tokenId;
        _this._type = config.type;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AiSearchInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AiSearchInstance to import
    * @param importFromId The id of the existing AiSearchInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AiSearchInstance to import is found
    */
    AiSearchInstance.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_search_instance", importId: importFromId, provider: provider });
    };
    Object.defineProperty(AiSearchInstance.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "aiGatewayId", {
        get: function () {
            return this.getStringAttribute('ai_gateway_id');
        },
        set: function (value) {
            this._aiGatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetAiGatewayId = function () {
        this._aiGatewayId = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "aiGatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._aiGatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "aisearchModel", {
        get: function () {
            return this.getStringAttribute('aisearch_model');
        },
        set: function (value) {
            this._aisearchModel = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetAisearchModel = function () {
        this._aisearchModel = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "aisearchModelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._aisearchModel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "cache", {
        get: function () {
            return this.getBooleanAttribute('cache');
        },
        set: function (value) {
            this._cache = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetCache = function () {
        this._cache = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "cacheInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cache;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "cacheThreshold", {
        get: function () {
            return this.getStringAttribute('cache_threshold');
        },
        set: function (value) {
            this._cacheThreshold = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetCacheThreshold = function () {
        this._cacheThreshold = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "cacheThresholdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cacheThreshold;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "chunk", {
        get: function () {
            return this.getBooleanAttribute('chunk');
        },
        set: function (value) {
            this._chunk = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetChunk = function () {
        this._chunk = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "chunkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._chunk;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "chunkOverlap", {
        get: function () {
            return this.getNumberAttribute('chunk_overlap');
        },
        set: function (value) {
            this._chunkOverlap = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetChunkOverlap = function () {
        this._chunkOverlap = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "chunkOverlapInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._chunkOverlap;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "chunkSize", {
        get: function () {
            return this.getNumberAttribute('chunk_size');
        },
        set: function (value) {
            this._chunkSize = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetChunkSize = function () {
        this._chunkSize = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "chunkSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._chunkSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "createdBy", {
        // created_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "customMetadata", {
        get: function () {
            return this._customMetadata;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.putCustomMetadata = function (value) {
        this._customMetadata.internalValue = value;
    };
    AiSearchInstance.prototype.resetCustomMetadata = function () {
        this._customMetadata.internalValue = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "customMetadataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customMetadata.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "embeddingModel", {
        get: function () {
            return this.getStringAttribute('embedding_model');
        },
        set: function (value) {
            this._embeddingModel = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetEmbeddingModel = function () {
        this._embeddingModel = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "embeddingModelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._embeddingModel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "enable", {
        // enable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "engineVersion", {
        // engine_version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('engine_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "fusionMethod", {
        get: function () {
            return this.getStringAttribute('fusion_method');
        },
        set: function (value) {
            this._fusionMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetFusionMethod = function () {
        this._fusionMethod = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "fusionMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fusionMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "hybridSearchEnabled", {
        get: function () {
            return this.getBooleanAttribute('hybrid_search_enabled');
        },
        set: function (value) {
            this._hybridSearchEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetHybridSearchEnabled = function () {
        this._hybridSearchEnabled = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "hybridSearchEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hybridSearchEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "indexMethod", {
        get: function () {
            return this._indexMethod;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.putIndexMethod = function (value) {
        this._indexMethod.internalValue = value;
    };
    AiSearchInstance.prototype.resetIndexMethod = function () {
        this._indexMethod.internalValue = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "indexMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._indexMethod.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "indexingOptions", {
        get: function () {
            return this._indexingOptions;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.putIndexingOptions = function (value) {
        this._indexingOptions.internalValue = value;
    };
    AiSearchInstance.prototype.resetIndexingOptions = function () {
        this._indexingOptions.internalValue = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "indexingOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._indexingOptions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "lastActivity", {
        // last_activity - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_activity');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "maxNumResults", {
        get: function () {
            return this.getNumberAttribute('max_num_results');
        },
        set: function (value) {
            this._maxNumResults = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetMaxNumResults = function () {
        this._maxNumResults = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "maxNumResultsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxNumResults;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "metadata", {
        get: function () {
            return this._metadata;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.putMetadata = function (value) {
        this._metadata.internalValue = value;
    };
    AiSearchInstance.prototype.resetMetadata = function () {
        this._metadata.internalValue = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "metadataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metadata.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "modifiedBy", {
        // modified_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "namespace", {
        // namespace - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "paused", {
        get: function () {
            return this.getBooleanAttribute('paused');
        },
        set: function (value) {
            this._paused = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetPaused = function () {
        this._paused = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "pausedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._paused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "publicEndpointId", {
        // public_endpoint_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_endpoint_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "publicEndpointParams", {
        get: function () {
            return this._publicEndpointParams;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.putPublicEndpointParams = function (value) {
        this._publicEndpointParams.internalValue = value;
    };
    AiSearchInstance.prototype.resetPublicEndpointParams = function () {
        this._publicEndpointParams.internalValue = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "publicEndpointParamsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publicEndpointParams.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "reranking", {
        get: function () {
            return this.getBooleanAttribute('reranking');
        },
        set: function (value) {
            this._reranking = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetReranking = function () {
        this._reranking = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "rerankingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._reranking;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "rerankingModel", {
        get: function () {
            return this.getStringAttribute('reranking_model');
        },
        set: function (value) {
            this._rerankingModel = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetRerankingModel = function () {
        this._rerankingModel = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "rerankingModelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rerankingModel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "retrievalOptions", {
        get: function () {
            return this._retrievalOptions;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.putRetrievalOptions = function (value) {
        this._retrievalOptions.internalValue = value;
    };
    AiSearchInstance.prototype.resetRetrievalOptions = function () {
        this._retrievalOptions.internalValue = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "retrievalOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retrievalOptions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "rewriteModel", {
        get: function () {
            return this.getStringAttribute('rewrite_model');
        },
        set: function (value) {
            this._rewriteModel = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetRewriteModel = function () {
        this._rewriteModel = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "rewriteModelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rewriteModel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "rewriteQuery", {
        get: function () {
            return this.getBooleanAttribute('rewrite_query');
        },
        set: function (value) {
            this._rewriteQuery = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetRewriteQuery = function () {
        this._rewriteQuery = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "rewriteQueryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rewriteQuery;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "scoreThreshold", {
        get: function () {
            return this.getNumberAttribute('score_threshold');
        },
        set: function (value) {
            this._scoreThreshold = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetScoreThreshold = function () {
        this._scoreThreshold = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "scoreThresholdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scoreThreshold;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "source", {
        get: function () {
            return this.getStringAttribute('source');
        },
        set: function (value) {
            this._source = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetSource = function () {
        this._source = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "sourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "sourceParams", {
        get: function () {
            return this._sourceParams;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.putSourceParams = function (value) {
        this._sourceParams.internalValue = value;
    };
    AiSearchInstance.prototype.resetSourceParams = function () {
        this._sourceParams.internalValue = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "sourceParamsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceParams.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "summarization", {
        get: function () {
            return this.getBooleanAttribute('summarization');
        },
        set: function (value) {
            this._summarization = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetSummarization = function () {
        this._summarization = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "summarizationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._summarization;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "summarizationModel", {
        get: function () {
            return this.getStringAttribute('summarization_model');
        },
        set: function (value) {
            this._summarizationModel = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetSummarizationModel = function () {
        this._summarizationModel = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "summarizationModelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._summarizationModel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "syncInterval", {
        get: function () {
            return this.getNumberAttribute('sync_interval');
        },
        set: function (value) {
            this._syncInterval = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetSyncInterval = function () {
        this._syncInterval = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "syncIntervalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._syncInterval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "systemPromptAisearch", {
        get: function () {
            return this.getStringAttribute('system_prompt_aisearch');
        },
        set: function (value) {
            this._systemPromptAisearch = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetSystemPromptAisearch = function () {
        this._systemPromptAisearch = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "systemPromptAisearchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._systemPromptAisearch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "systemPromptIndexSummarization", {
        get: function () {
            return this.getStringAttribute('system_prompt_index_summarization');
        },
        set: function (value) {
            this._systemPromptIndexSummarization = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetSystemPromptIndexSummarization = function () {
        this._systemPromptIndexSummarization = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "systemPromptIndexSummarizationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._systemPromptIndexSummarization;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "systemPromptRewriteQuery", {
        get: function () {
            return this.getStringAttribute('system_prompt_rewrite_query');
        },
        set: function (value) {
            this._systemPromptRewriteQuery = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetSystemPromptRewriteQuery = function () {
        this._systemPromptRewriteQuery = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "systemPromptRewriteQueryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._systemPromptRewriteQuery;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "tokenId", {
        get: function () {
            return this.getStringAttribute('token_id');
        },
        set: function (value) {
            this._tokenId = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetTokenId = function () {
        this._tokenId = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "tokenIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tokenId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchInstance.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(AiSearchInstance.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchInstance.prototype, "vectorizeName", {
        // vectorize_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vectorize_name');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AiSearchInstance.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            ai_gateway_id: cdktf.stringToTerraform(this._aiGatewayId),
            aisearch_model: cdktf.stringToTerraform(this._aisearchModel),
            cache: cdktf.booleanToTerraform(this._cache),
            cache_threshold: cdktf.stringToTerraform(this._cacheThreshold),
            chunk: cdktf.booleanToTerraform(this._chunk),
            chunk_overlap: cdktf.numberToTerraform(this._chunkOverlap),
            chunk_size: cdktf.numberToTerraform(this._chunkSize),
            custom_metadata: cdktf.listMapper(aiSearchInstanceCustomMetadataToTerraform, false)(this._customMetadata.internalValue),
            embedding_model: cdktf.stringToTerraform(this._embeddingModel),
            fusion_method: cdktf.stringToTerraform(this._fusionMethod),
            hybrid_search_enabled: cdktf.booleanToTerraform(this._hybridSearchEnabled),
            id: cdktf.stringToTerraform(this._id),
            index_method: aiSearchInstanceIndexMethodToTerraform(this._indexMethod.internalValue),
            indexing_options: aiSearchInstanceIndexingOptionsToTerraform(this._indexingOptions.internalValue),
            max_num_results: cdktf.numberToTerraform(this._maxNumResults),
            metadata: aiSearchInstanceMetadataToTerraform(this._metadata.internalValue),
            paused: cdktf.booleanToTerraform(this._paused),
            public_endpoint_params: aiSearchInstancePublicEndpointParamsToTerraform(this._publicEndpointParams.internalValue),
            reranking: cdktf.booleanToTerraform(this._reranking),
            reranking_model: cdktf.stringToTerraform(this._rerankingModel),
            retrieval_options: aiSearchInstanceRetrievalOptionsToTerraform(this._retrievalOptions.internalValue),
            rewrite_model: cdktf.stringToTerraform(this._rewriteModel),
            rewrite_query: cdktf.booleanToTerraform(this._rewriteQuery),
            score_threshold: cdktf.numberToTerraform(this._scoreThreshold),
            source: cdktf.stringToTerraform(this._source),
            source_params: aiSearchInstanceSourceParamsToTerraform(this._sourceParams.internalValue),
            summarization: cdktf.booleanToTerraform(this._summarization),
            summarization_model: cdktf.stringToTerraform(this._summarizationModel),
            sync_interval: cdktf.numberToTerraform(this._syncInterval),
            system_prompt_aisearch: cdktf.stringToTerraform(this._systemPromptAisearch),
            system_prompt_index_summarization: cdktf.stringToTerraform(this._systemPromptIndexSummarization),
            system_prompt_rewrite_query: cdktf.stringToTerraform(this._systemPromptRewriteQuery),
            token_id: cdktf.stringToTerraform(this._tokenId),
            type: cdktf.stringToTerraform(this._type),
        };
    };
    AiSearchInstance.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ai_gateway_id: {
                value: cdktf.stringToHclTerraform(this._aiGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            aisearch_model: {
                value: cdktf.stringToHclTerraform(this._aisearchModel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cache: {
                value: cdktf.booleanToHclTerraform(this._cache),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            cache_threshold: {
                value: cdktf.stringToHclTerraform(this._cacheThreshold),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            chunk: {
                value: cdktf.booleanToHclTerraform(this._chunk),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            chunk_overlap: {
                value: cdktf.numberToHclTerraform(this._chunkOverlap),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            chunk_size: {
                value: cdktf.numberToHclTerraform(this._chunkSize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            custom_metadata: {
                value: cdktf.listMapperHcl(aiSearchInstanceCustomMetadataToHclTerraform, false)(this._customMetadata.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AiSearchInstanceCustomMetadataList",
            },
            embedding_model: {
                value: cdktf.stringToHclTerraform(this._embeddingModel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            fusion_method: {
                value: cdktf.stringToHclTerraform(this._fusionMethod),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hybrid_search_enabled: {
                value: cdktf.booleanToHclTerraform(this._hybridSearchEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            index_method: {
                value: aiSearchInstanceIndexMethodToHclTerraform(this._indexMethod.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AiSearchInstanceIndexMethod",
            },
            indexing_options: {
                value: aiSearchInstanceIndexingOptionsToHclTerraform(this._indexingOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AiSearchInstanceIndexingOptions",
            },
            max_num_results: {
                value: cdktf.numberToHclTerraform(this._maxNumResults),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            metadata: {
                value: aiSearchInstanceMetadataToHclTerraform(this._metadata.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AiSearchInstanceMetadata",
            },
            paused: {
                value: cdktf.booleanToHclTerraform(this._paused),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            public_endpoint_params: {
                value: aiSearchInstancePublicEndpointParamsToHclTerraform(this._publicEndpointParams.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AiSearchInstancePublicEndpointParams",
            },
            reranking: {
                value: cdktf.booleanToHclTerraform(this._reranking),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            reranking_model: {
                value: cdktf.stringToHclTerraform(this._rerankingModel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            retrieval_options: {
                value: aiSearchInstanceRetrievalOptionsToHclTerraform(this._retrievalOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AiSearchInstanceRetrievalOptions",
            },
            rewrite_model: {
                value: cdktf.stringToHclTerraform(this._rewriteModel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rewrite_query: {
                value: cdktf.booleanToHclTerraform(this._rewriteQuery),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            score_threshold: {
                value: cdktf.numberToHclTerraform(this._scoreThreshold),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            source: {
                value: cdktf.stringToHclTerraform(this._source),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_params: {
                value: aiSearchInstanceSourceParamsToHclTerraform(this._sourceParams.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AiSearchInstanceSourceParams",
            },
            summarization: {
                value: cdktf.booleanToHclTerraform(this._summarization),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            summarization_model: {
                value: cdktf.stringToHclTerraform(this._summarizationModel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sync_interval: {
                value: cdktf.numberToHclTerraform(this._syncInterval),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            system_prompt_aisearch: {
                value: cdktf.stringToHclTerraform(this._systemPromptAisearch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            system_prompt_index_summarization: {
                value: cdktf.stringToHclTerraform(this._systemPromptIndexSummarization),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            system_prompt_rewrite_query: {
                value: cdktf.stringToHclTerraform(this._systemPromptRewriteQuery),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            token_id: {
                value: cdktf.stringToHclTerraform(this._tokenId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
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
    AiSearchInstance.tfResourceType = "cloudflare_ai_search_instance";
    return AiSearchInstance;
}(cdktf.TerraformResource));
exports.AiSearchInstance = AiSearchInstance;
