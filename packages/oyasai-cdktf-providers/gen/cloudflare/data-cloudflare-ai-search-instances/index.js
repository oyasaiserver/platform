"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instances
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
exports.DataCloudflareAiSearchInstances = exports.DataCloudflareAiSearchInstancesResultList = exports.DataCloudflareAiSearchInstancesResultOutputReference = exports.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference = exports.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference = exports.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference = exports.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference = exports.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorList = exports.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference = exports.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsOutputReference = exports.DataCloudflareAiSearchInstancesResultRetrievalOptionsOutputReference = exports.DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByList = exports.DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByOutputReference = exports.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference = exports.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference = exports.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference = exports.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference = exports.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference = exports.DataCloudflareAiSearchInstancesResultMetadataOutputReference = exports.DataCloudflareAiSearchInstancesResultMetadataSearchForAgentsOutputReference = exports.DataCloudflareAiSearchInstancesResultIndexingOptionsOutputReference = exports.DataCloudflareAiSearchInstancesResultIndexMethodOutputReference = exports.DataCloudflareAiSearchInstancesResultCustomMetadataList = exports.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference = void 0;
exports.dataCloudflareAiSearchInstancesResultCustomMetadataToTerraform = dataCloudflareAiSearchInstancesResultCustomMetadataToTerraform;
exports.dataCloudflareAiSearchInstancesResultCustomMetadataToHclTerraform = dataCloudflareAiSearchInstancesResultCustomMetadataToHclTerraform;
exports.dataCloudflareAiSearchInstancesResultIndexMethodToTerraform = dataCloudflareAiSearchInstancesResultIndexMethodToTerraform;
exports.dataCloudflareAiSearchInstancesResultIndexMethodToHclTerraform = dataCloudflareAiSearchInstancesResultIndexMethodToHclTerraform;
exports.dataCloudflareAiSearchInstancesResultIndexingOptionsToTerraform = dataCloudflareAiSearchInstancesResultIndexingOptionsToTerraform;
exports.dataCloudflareAiSearchInstancesResultIndexingOptionsToHclTerraform = dataCloudflareAiSearchInstancesResultIndexingOptionsToHclTerraform;
exports.dataCloudflareAiSearchInstancesResultMetadataSearchForAgentsToTerraform = dataCloudflareAiSearchInstancesResultMetadataSearchForAgentsToTerraform;
exports.dataCloudflareAiSearchInstancesResultMetadataSearchForAgentsToHclTerraform = dataCloudflareAiSearchInstancesResultMetadataSearchForAgentsToHclTerraform;
exports.dataCloudflareAiSearchInstancesResultMetadataToTerraform = dataCloudflareAiSearchInstancesResultMetadataToTerraform;
exports.dataCloudflareAiSearchInstancesResultMetadataToHclTerraform = dataCloudflareAiSearchInstancesResultMetadataToHclTerraform;
exports.dataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointToTerraform = dataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointToTerraform;
exports.dataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointToHclTerraform = dataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointToHclTerraform;
exports.dataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpToTerraform = dataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpToTerraform;
exports.dataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpToHclTerraform = dataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpToHclTerraform;
exports.dataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitToTerraform = dataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitToTerraform;
exports.dataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitToHclTerraform = dataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitToHclTerraform;
exports.dataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointToTerraform = dataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointToTerraform;
exports.dataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointToHclTerraform = dataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointToHclTerraform;
exports.dataCloudflareAiSearchInstancesResultPublicEndpointParamsToTerraform = dataCloudflareAiSearchInstancesResultPublicEndpointParamsToTerraform;
exports.dataCloudflareAiSearchInstancesResultPublicEndpointParamsToHclTerraform = dataCloudflareAiSearchInstancesResultPublicEndpointParamsToHclTerraform;
exports.dataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByToTerraform = dataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByToTerraform;
exports.dataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByToHclTerraform = dataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByToHclTerraform;
exports.dataCloudflareAiSearchInstancesResultRetrievalOptionsToTerraform = dataCloudflareAiSearchInstancesResultRetrievalOptionsToTerraform;
exports.dataCloudflareAiSearchInstancesResultRetrievalOptionsToHclTerraform = dataCloudflareAiSearchInstancesResultRetrievalOptionsToHclTerraform;
exports.dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsToTerraform = dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsToTerraform;
exports.dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsToHclTerraform = dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsToHclTerraform;
exports.dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorToTerraform = dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorToTerraform;
exports.dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorToHclTerraform = dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorToHclTerraform;
exports.dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsToTerraform = dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsToTerraform;
exports.dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsToHclTerraform = dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsToHclTerraform;
exports.dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsToTerraform = dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsToTerraform;
exports.dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsToHclTerraform = dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsToHclTerraform;
exports.dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerToTerraform = dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerToTerraform;
exports.dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerToHclTerraform = dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerToHclTerraform;
exports.dataCloudflareAiSearchInstancesResultSourceParamsToTerraform = dataCloudflareAiSearchInstancesResultSourceParamsToTerraform;
exports.dataCloudflareAiSearchInstancesResultSourceParamsToHclTerraform = dataCloudflareAiSearchInstancesResultSourceParamsToHclTerraform;
exports.dataCloudflareAiSearchInstancesResultToTerraform = dataCloudflareAiSearchInstancesResultToTerraform;
exports.dataCloudflareAiSearchInstancesResultToHclTerraform = dataCloudflareAiSearchInstancesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareAiSearchInstancesResultCustomMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstancesResultCustomMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.prototype, "dataType", {
        // data_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('data_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference.prototype, "fieldName", {
        // field_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('field_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference = DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference;
var DataCloudflareAiSearchInstancesResultCustomMetadataList = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancesResultCustomMetadataList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiSearchInstancesResultCustomMetadataList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAiSearchInstancesResultCustomMetadataList.prototype.get = function (index) {
        return new DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAiSearchInstancesResultCustomMetadataList;
}(cdktf.ComplexList));
exports.DataCloudflareAiSearchInstancesResultCustomMetadataList = DataCloudflareAiSearchInstancesResultCustomMetadataList;
function dataCloudflareAiSearchInstancesResultIndexMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstancesResultIndexMethodToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstancesResultIndexMethodOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancesResultIndexMethodOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstancesResultIndexMethodOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstancesResultIndexMethodOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstancesResultIndexMethodOutputReference.prototype, "keyword", {
        // keyword - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('keyword');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultIndexMethodOutputReference.prototype, "vector", {
        // vector - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('vector');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstancesResultIndexMethodOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstancesResultIndexMethodOutputReference = DataCloudflareAiSearchInstancesResultIndexMethodOutputReference;
function dataCloudflareAiSearchInstancesResultIndexingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstancesResultIndexingOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstancesResultIndexingOptionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancesResultIndexingOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstancesResultIndexingOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstancesResultIndexingOptionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstancesResultIndexingOptionsOutputReference.prototype, "keywordTokenizer", {
        // keyword_tokenizer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('keyword_tokenizer');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstancesResultIndexingOptionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstancesResultIndexingOptionsOutputReference = DataCloudflareAiSearchInstancesResultIndexingOptionsOutputReference;
function dataCloudflareAiSearchInstancesResultMetadataSearchForAgentsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstancesResultMetadataSearchForAgentsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstancesResultMetadataSearchForAgentsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancesResultMetadataSearchForAgentsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstancesResultMetadataSearchForAgentsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstancesResultMetadataSearchForAgentsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstancesResultMetadataSearchForAgentsOutputReference.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultMetadataSearchForAgentsOutputReference.prototype, "zoneId", {
        // zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultMetadataSearchForAgentsOutputReference.prototype, "zoneName", {
        // zone_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstancesResultMetadataSearchForAgentsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstancesResultMetadataSearchForAgentsOutputReference = DataCloudflareAiSearchInstancesResultMetadataSearchForAgentsOutputReference;
function dataCloudflareAiSearchInstancesResultMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstancesResultMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstancesResultMetadataOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancesResultMetadataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstancesResultMetadataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // search_for_agents - computed: true, optional: false, required: false
        _this._searchForAgents = new DataCloudflareAiSearchInstancesResultMetadataSearchForAgentsOutputReference(_this, "search_for_agents");
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstancesResultMetadataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstancesResultMetadataOutputReference.prototype, "createdFromAisearchWizard", {
        // created_from_aisearch_wizard - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('created_from_aisearch_wizard');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultMetadataOutputReference.prototype, "searchForAgents", {
        get: function () {
            return this._searchForAgents;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultMetadataOutputReference.prototype, "workerDomain", {
        // worker_domain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('worker_domain');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstancesResultMetadataOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstancesResultMetadataOutputReference = DataCloudflareAiSearchInstancesResultMetadataOutputReference;
function dataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference.prototype, "disabled", {
        // disabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference = DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference;
function dataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference.prototype, "disabled", {
        // disabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference = DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference;
function dataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.prototype, "periodMs", {
        // period_ms - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('period_ms');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.prototype, "requests", {
        // requests - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('requests');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference.prototype, "technique", {
        // technique - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('technique');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference = DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference;
function dataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference.prototype, "disabled", {
        // disabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference = DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference;
function dataCloudflareAiSearchInstancesResultPublicEndpointParamsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstancesResultPublicEndpointParamsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // chat_completions_endpoint - computed: true, optional: false, required: false
        _this._chatCompletionsEndpoint = new DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference(_this, "chat_completions_endpoint");
        // mcp - computed: true, optional: false, required: false
        _this._mcp = new DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference(_this, "mcp");
        // rate_limit - computed: true, optional: false, required: false
        _this._rateLimit = new DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference(_this, "rate_limit");
        // search_endpoint - computed: true, optional: false, required: false
        _this._searchEndpoint = new DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference(_this, "search_endpoint");
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.prototype, "authorizedHosts", {
        // authorized_hosts - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('authorized_hosts');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.prototype, "chatCompletionsEndpoint", {
        get: function () {
            return this._chatCompletionsEndpoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.prototype, "mcp", {
        get: function () {
            return this._mcp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.prototype, "rateLimit", {
        get: function () {
            return this._rateLimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference.prototype, "searchEndpoint", {
        get: function () {
            return this._searchEndpoint;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference = DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference;
function dataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByOutputReference.prototype, "direction", {
        // direction - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('direction');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByOutputReference.prototype, "field", {
        // field - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('field');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByOutputReference = DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByOutputReference;
var DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByList = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByList.prototype.get = function (index) {
        return new DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByList;
}(cdktf.ComplexList));
exports.DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByList = DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByList;
function dataCloudflareAiSearchInstancesResultRetrievalOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstancesResultRetrievalOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstancesResultRetrievalOptionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancesResultRetrievalOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstancesResultRetrievalOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // boost_by - computed: true, optional: false, required: false
        _this._boostBy = new DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByList(_this, "boost_by", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstancesResultRetrievalOptionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstancesResultRetrievalOptionsOutputReference.prototype, "boostBy", {
        get: function () {
            return this._boostBy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultRetrievalOptionsOutputReference.prototype, "keywordMatchMode", {
        // keyword_match_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('keyword_match_mode');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstancesResultRetrievalOptionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstancesResultRetrievalOptionsOutputReference = DataCloudflareAiSearchInstancesResultRetrievalOptionsOutputReference;
function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype, "depth", {
        // depth - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('depth');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype, "includeExternalLinks", {
        // include_external_links - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('include_external_links');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype, "includeSubdomains", {
        // include_subdomains - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('include_subdomains');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype, "maxAge", {
        // max_age - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_age');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype, "source", {
        // source - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsOutputReference = DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsOutputReference;
function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.prototype, "selector", {
        // selector - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('selector');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference = DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference;
var DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorList = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorList.prototype.get = function (index) {
        return new DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorList;
}(cdktf.ComplexList));
exports.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorList = DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorList;
function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // content_selector - computed: true, optional: false, required: false
        _this._contentSelector = new DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorList(_this, "content_selector", false);
        // include_headers - computed: true, optional: false, required: false
        _this._includeHeaders = new cdktf.StringMap(_this, "include_headers");
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.prototype, "contentSelector", {
        get: function () {
            return this._contentSelector;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.prototype, "includeHeaders", {
        get: function () {
            return this._includeHeaders;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.prototype, "includeImages", {
        // include_images - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('include_images');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.prototype, "specificSitemaps", {
        // specific_sitemaps - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('specific_sitemaps');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference.prototype, "useBrowserRendering", {
        // use_browser_rendering - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('use_browser_rendering');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference = DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference;
function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.prototype, "r2Jurisdiction", {
        // r2_jurisdiction - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('r2_jurisdiction');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.prototype, "storageId", {
        // storage_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('storage_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference.prototype, "storageType", {
        // storage_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('storage_type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference = DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference;
function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // crawl_options - computed: true, optional: false, required: false
        _this._crawlOptions = new DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsOutputReference(_this, "crawl_options");
        // parse_options - computed: true, optional: false, required: false
        _this._parseOptions = new DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference(_this, "parse_options");
        // store_options - computed: true, optional: false, required: false
        _this._storeOptions = new DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference(_this, "store_options");
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.prototype, "crawlOptions", {
        get: function () {
            return this._crawlOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.prototype, "parseOptions", {
        get: function () {
            return this._parseOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.prototype, "parseType", {
        // parse_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('parse_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference.prototype, "storeOptions", {
        get: function () {
            return this._storeOptions;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference = DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference;
function dataCloudflareAiSearchInstancesResultSourceParamsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstancesResultSourceParamsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstancesResultSourceParamsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancesResultSourceParamsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstancesResultSourceParamsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // web_crawler - computed: true, optional: false, required: false
        _this._webCrawler = new DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference(_this, "web_crawler");
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.prototype, "excludeItems", {
        // exclude_items - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('exclude_items');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.prototype, "includeItems", {
        // include_items - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('include_items');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.prototype, "prefix", {
        // prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prefix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.prototype, "r2Jurisdiction", {
        // r2_jurisdiction - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('r2_jurisdiction');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultSourceParamsOutputReference.prototype, "webCrawler", {
        get: function () {
            return this._webCrawler;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstancesResultSourceParamsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstancesResultSourceParamsOutputReference = DataCloudflareAiSearchInstancesResultSourceParamsOutputReference;
function dataCloudflareAiSearchInstancesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstancesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstancesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiSearchInstancesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // custom_metadata - computed: true, optional: false, required: false
        _this._customMetadata = new DataCloudflareAiSearchInstancesResultCustomMetadataList(_this, "custom_metadata", false);
        // index_method - computed: true, optional: false, required: false
        _this._indexMethod = new DataCloudflareAiSearchInstancesResultIndexMethodOutputReference(_this, "index_method");
        // indexing_options - computed: true, optional: false, required: false
        _this._indexingOptions = new DataCloudflareAiSearchInstancesResultIndexingOptionsOutputReference(_this, "indexing_options");
        // metadata - computed: true, optional: false, required: false
        _this._metadata = new DataCloudflareAiSearchInstancesResultMetadataOutputReference(_this, "metadata");
        // public_endpoint_params - computed: true, optional: false, required: false
        _this._publicEndpointParams = new DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference(_this, "public_endpoint_params");
        // retrieval_options - computed: true, optional: false, required: false
        _this._retrievalOptions = new DataCloudflareAiSearchInstancesResultRetrievalOptionsOutputReference(_this, "retrieval_options");
        // source_params - computed: true, optional: false, required: false
        _this._sourceParams = new DataCloudflareAiSearchInstancesResultSourceParamsOutputReference(_this, "source_params");
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "aiGatewayId", {
        // ai_gateway_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ai_gateway_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "aisearchModel", {
        // aisearch_model - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('aisearch_model');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "cache", {
        // cache - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cache');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "cacheThreshold", {
        // cache_threshold - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cache_threshold');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "chunkOverlap", {
        // chunk_overlap - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('chunk_overlap');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "chunkSize", {
        // chunk_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('chunk_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "createdBy", {
        // created_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "customMetadata", {
        get: function () {
            return this._customMetadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "embeddingModel", {
        // embedding_model - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('embedding_model');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "enable", {
        // enable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "engineVersion", {
        // engine_version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('engine_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "fusionMethod", {
        // fusion_method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fusion_method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "hybridSearchEnabled", {
        // hybrid_search_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('hybrid_search_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "indexMethod", {
        get: function () {
            return this._indexMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "indexingOptions", {
        get: function () {
            return this._indexingOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "lastActivity", {
        // last_activity - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_activity');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "maxNumResults", {
        // max_num_results - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_num_results');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "metadata", {
        get: function () {
            return this._metadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "modifiedBy", {
        // modified_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "namespace", {
        // namespace - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "paused", {
        // paused - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('paused');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "publicEndpointId", {
        // public_endpoint_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_endpoint_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "publicEndpointParams", {
        get: function () {
            return this._publicEndpointParams;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "reranking", {
        // reranking - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('reranking');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "rerankingModel", {
        // reranking_model - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('reranking_model');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "retrievalOptions", {
        get: function () {
            return this._retrievalOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "rewriteModel", {
        // rewrite_model - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('rewrite_model');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "rewriteQuery", {
        // rewrite_query - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('rewrite_query');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "scoreThreshold", {
        // score_threshold - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('score_threshold');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "source", {
        // source - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "sourceParams", {
        get: function () {
            return this._sourceParams;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "syncInterval", {
        // sync_interval - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('sync_interval');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "tokenId", {
        // token_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('token_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancesResultOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstancesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstancesResultOutputReference = DataCloudflareAiSearchInstancesResultOutputReference;
var DataCloudflareAiSearchInstancesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiSearchInstancesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAiSearchInstancesResultList.prototype.get = function (index) {
        return new DataCloudflareAiSearchInstancesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAiSearchInstancesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareAiSearchInstancesResultList = DataCloudflareAiSearchInstancesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instances cloudflare_ai_search_instances}
*/
var DataCloudflareAiSearchInstances = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstances, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instances cloudflare_ai_search_instances} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAiSearchInstancesConfig = {}
    */
    function DataCloudflareAiSearchInstances(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_ai_search_instances',
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
        _this._result = new DataCloudflareAiSearchInstancesResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        _this._namespace = config.namespace;
        _this._orderBy = config.orderBy;
        _this._orderByDirection = config.orderByDirection;
        _this._search = config.search;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAiSearchInstances resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAiSearchInstances to import
    * @param importFromId The id of the existing DataCloudflareAiSearchInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instances#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAiSearchInstances to import is found
    */
    DataCloudflareAiSearchInstances.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_search_instances", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareAiSearchInstances.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAiSearchInstances.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareAiSearchInstances.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstances.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAiSearchInstances.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareAiSearchInstances.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstances.prototype, "namespace", {
        get: function () {
            return this.getStringAttribute('namespace');
        },
        set: function (value) {
            this._namespace = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAiSearchInstances.prototype.resetNamespace = function () {
        this._namespace = undefined;
    };
    Object.defineProperty(DataCloudflareAiSearchInstances.prototype, "namespaceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namespace;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstances.prototype, "orderBy", {
        get: function () {
            return this.getStringAttribute('order_by');
        },
        set: function (value) {
            this._orderBy = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAiSearchInstances.prototype.resetOrderBy = function () {
        this._orderBy = undefined;
    };
    Object.defineProperty(DataCloudflareAiSearchInstances.prototype, "orderByInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._orderBy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstances.prototype, "orderByDirection", {
        get: function () {
            return this.getStringAttribute('order_by_direction');
        },
        set: function (value) {
            this._orderByDirection = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAiSearchInstances.prototype.resetOrderByDirection = function () {
        this._orderByDirection = undefined;
    };
    Object.defineProperty(DataCloudflareAiSearchInstances.prototype, "orderByDirectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._orderByDirection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstances.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstances.prototype, "search", {
        get: function () {
            return this.getStringAttribute('search');
        },
        set: function (value) {
            this._search = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAiSearchInstances.prototype.resetSearch = function () {
        this._search = undefined;
    };
    Object.defineProperty(DataCloudflareAiSearchInstances.prototype, "searchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._search;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareAiSearchInstances.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
            namespace: cdktf.stringToTerraform(this._namespace),
            order_by: cdktf.stringToTerraform(this._orderBy),
            order_by_direction: cdktf.stringToTerraform(this._orderByDirection),
            search: cdktf.stringToTerraform(this._search),
        };
    };
    DataCloudflareAiSearchInstances.prototype.synthesizeHclAttributes = function () {
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
            namespace: {
                value: cdktf.stringToHclTerraform(this._namespace),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            order_by: {
                value: cdktf.stringToHclTerraform(this._orderBy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            order_by_direction: {
                value: cdktf.stringToHclTerraform(this._orderByDirection),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            search: {
                value: cdktf.stringToHclTerraform(this._search),
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
    DataCloudflareAiSearchInstances.tfResourceType = "cloudflare_ai_search_instances";
    return DataCloudflareAiSearchInstances;
}(cdktf.TerraformDataSource));
exports.DataCloudflareAiSearchInstances = DataCloudflareAiSearchInstances;
