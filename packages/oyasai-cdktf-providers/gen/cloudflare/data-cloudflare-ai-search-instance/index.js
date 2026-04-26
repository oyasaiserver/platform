"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instance
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
exports.DataCloudflareAiSearchInstance = exports.DataCloudflareAiSearchInstanceSourceParamsOutputReference = exports.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference = exports.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference = exports.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference = exports.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList = exports.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference = exports.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference = exports.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference = exports.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList = exports.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference = exports.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference = exports.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference = exports.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference = exports.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference = exports.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference = exports.DataCloudflareAiSearchInstanceMetadataOutputReference = exports.DataCloudflareAiSearchInstanceMetadataSearchForAgentsOutputReference = exports.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference = exports.DataCloudflareAiSearchInstanceIndexMethodOutputReference = exports.DataCloudflareAiSearchInstanceFilterOutputReference = exports.DataCloudflareAiSearchInstanceCustomMetadataList = exports.DataCloudflareAiSearchInstanceCustomMetadataOutputReference = void 0;
exports.dataCloudflareAiSearchInstanceCustomMetadataToTerraform = dataCloudflareAiSearchInstanceCustomMetadataToTerraform;
exports.dataCloudflareAiSearchInstanceCustomMetadataToHclTerraform = dataCloudflareAiSearchInstanceCustomMetadataToHclTerraform;
exports.dataCloudflareAiSearchInstanceFilterToTerraform = dataCloudflareAiSearchInstanceFilterToTerraform;
exports.dataCloudflareAiSearchInstanceFilterToHclTerraform = dataCloudflareAiSearchInstanceFilterToHclTerraform;
exports.dataCloudflareAiSearchInstanceIndexMethodToTerraform = dataCloudflareAiSearchInstanceIndexMethodToTerraform;
exports.dataCloudflareAiSearchInstanceIndexMethodToHclTerraform = dataCloudflareAiSearchInstanceIndexMethodToHclTerraform;
exports.dataCloudflareAiSearchInstanceIndexingOptionsToTerraform = dataCloudflareAiSearchInstanceIndexingOptionsToTerraform;
exports.dataCloudflareAiSearchInstanceIndexingOptionsToHclTerraform = dataCloudflareAiSearchInstanceIndexingOptionsToHclTerraform;
exports.dataCloudflareAiSearchInstanceMetadataSearchForAgentsToTerraform = dataCloudflareAiSearchInstanceMetadataSearchForAgentsToTerraform;
exports.dataCloudflareAiSearchInstanceMetadataSearchForAgentsToHclTerraform = dataCloudflareAiSearchInstanceMetadataSearchForAgentsToHclTerraform;
exports.dataCloudflareAiSearchInstanceMetadataToTerraform = dataCloudflareAiSearchInstanceMetadataToTerraform;
exports.dataCloudflareAiSearchInstanceMetadataToHclTerraform = dataCloudflareAiSearchInstanceMetadataToHclTerraform;
exports.dataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointToTerraform = dataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointToTerraform;
exports.dataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointToHclTerraform = dataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointToHclTerraform;
exports.dataCloudflareAiSearchInstancePublicEndpointParamsMcpToTerraform = dataCloudflareAiSearchInstancePublicEndpointParamsMcpToTerraform;
exports.dataCloudflareAiSearchInstancePublicEndpointParamsMcpToHclTerraform = dataCloudflareAiSearchInstancePublicEndpointParamsMcpToHclTerraform;
exports.dataCloudflareAiSearchInstancePublicEndpointParamsRateLimitToTerraform = dataCloudflareAiSearchInstancePublicEndpointParamsRateLimitToTerraform;
exports.dataCloudflareAiSearchInstancePublicEndpointParamsRateLimitToHclTerraform = dataCloudflareAiSearchInstancePublicEndpointParamsRateLimitToHclTerraform;
exports.dataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointToTerraform = dataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointToTerraform;
exports.dataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointToHclTerraform = dataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointToHclTerraform;
exports.dataCloudflareAiSearchInstancePublicEndpointParamsToTerraform = dataCloudflareAiSearchInstancePublicEndpointParamsToTerraform;
exports.dataCloudflareAiSearchInstancePublicEndpointParamsToHclTerraform = dataCloudflareAiSearchInstancePublicEndpointParamsToHclTerraform;
exports.dataCloudflareAiSearchInstanceRetrievalOptionsBoostByToTerraform = dataCloudflareAiSearchInstanceRetrievalOptionsBoostByToTerraform;
exports.dataCloudflareAiSearchInstanceRetrievalOptionsBoostByToHclTerraform = dataCloudflareAiSearchInstanceRetrievalOptionsBoostByToHclTerraform;
exports.dataCloudflareAiSearchInstanceRetrievalOptionsToTerraform = dataCloudflareAiSearchInstanceRetrievalOptionsToTerraform;
exports.dataCloudflareAiSearchInstanceRetrievalOptionsToHclTerraform = dataCloudflareAiSearchInstanceRetrievalOptionsToHclTerraform;
exports.dataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsToTerraform = dataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsToTerraform;
exports.dataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsToHclTerraform = dataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsToHclTerraform;
exports.dataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToTerraform = dataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToTerraform;
exports.dataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToHclTerraform = dataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToHclTerraform;
exports.dataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsToTerraform = dataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsToTerraform;
exports.dataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsToHclTerraform = dataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsToHclTerraform;
exports.dataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsToTerraform = dataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsToTerraform;
exports.dataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsToHclTerraform = dataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsToHclTerraform;
exports.dataCloudflareAiSearchInstanceSourceParamsWebCrawlerToTerraform = dataCloudflareAiSearchInstanceSourceParamsWebCrawlerToTerraform;
exports.dataCloudflareAiSearchInstanceSourceParamsWebCrawlerToHclTerraform = dataCloudflareAiSearchInstanceSourceParamsWebCrawlerToHclTerraform;
exports.dataCloudflareAiSearchInstanceSourceParamsToTerraform = dataCloudflareAiSearchInstanceSourceParamsToTerraform;
exports.dataCloudflareAiSearchInstanceSourceParamsToHclTerraform = dataCloudflareAiSearchInstanceSourceParamsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareAiSearchInstanceCustomMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstanceCustomMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstanceCustomMetadataOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstanceCustomMetadataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiSearchInstanceCustomMetadataOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstanceCustomMetadataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstanceCustomMetadataOutputReference.prototype, "dataType", {
        // data_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('data_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceCustomMetadataOutputReference.prototype, "fieldName", {
        // field_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('field_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstanceCustomMetadataOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstanceCustomMetadataOutputReference = DataCloudflareAiSearchInstanceCustomMetadataOutputReference;
var DataCloudflareAiSearchInstanceCustomMetadataList = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstanceCustomMetadataList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiSearchInstanceCustomMetadataList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAiSearchInstanceCustomMetadataList.prototype.get = function (index) {
        return new DataCloudflareAiSearchInstanceCustomMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAiSearchInstanceCustomMetadataList;
}(cdktf.ComplexList));
exports.DataCloudflareAiSearchInstanceCustomMetadataList = DataCloudflareAiSearchInstanceCustomMetadataList;
function dataCloudflareAiSearchInstanceFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        namespace: cdktf.stringToTerraform(struct.namespace),
        order_by: cdktf.stringToTerraform(struct.orderBy),
        order_by_direction: cdktf.stringToTerraform(struct.orderByDirection),
        search: cdktf.stringToTerraform(struct.search),
    };
}
function dataCloudflareAiSearchInstanceFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        namespace: {
            value: cdktf.stringToHclTerraform(struct.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        order_by: {
            value: cdktf.stringToHclTerraform(struct.orderBy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        order_by_direction: {
            value: cdktf.stringToHclTerraform(struct.orderByDirection),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        search: {
            value: cdktf.stringToHclTerraform(struct.search),
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
var DataCloudflareAiSearchInstanceFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstanceFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstanceFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstanceFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._namespace !== undefined) {
                hasAnyValues = true;
                internalValueResult.namespace = this._namespace;
            }
            if (this._orderBy !== undefined) {
                hasAnyValues = true;
                internalValueResult.orderBy = this._orderBy;
            }
            if (this._orderByDirection !== undefined) {
                hasAnyValues = true;
                internalValueResult.orderByDirection = this._orderByDirection;
            }
            if (this._search !== undefined) {
                hasAnyValues = true;
                internalValueResult.search = this._search;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._namespace = undefined;
                this._orderBy = undefined;
                this._orderByDirection = undefined;
                this._search = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._namespace = value.namespace;
                this._orderBy = value.orderBy;
                this._orderByDirection = value.orderByDirection;
                this._search = value.search;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceFilterOutputReference.prototype, "namespace", {
        get: function () {
            return this.getStringAttribute('namespace');
        },
        set: function (value) {
            this._namespace = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAiSearchInstanceFilterOutputReference.prototype.resetNamespace = function () {
        this._namespace = undefined;
    };
    Object.defineProperty(DataCloudflareAiSearchInstanceFilterOutputReference.prototype, "namespaceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namespace;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceFilterOutputReference.prototype, "orderBy", {
        get: function () {
            return this.getStringAttribute('order_by');
        },
        set: function (value) {
            this._orderBy = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAiSearchInstanceFilterOutputReference.prototype.resetOrderBy = function () {
        this._orderBy = undefined;
    };
    Object.defineProperty(DataCloudflareAiSearchInstanceFilterOutputReference.prototype, "orderByInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._orderBy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceFilterOutputReference.prototype, "orderByDirection", {
        get: function () {
            return this.getStringAttribute('order_by_direction');
        },
        set: function (value) {
            this._orderByDirection = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAiSearchInstanceFilterOutputReference.prototype.resetOrderByDirection = function () {
        this._orderByDirection = undefined;
    };
    Object.defineProperty(DataCloudflareAiSearchInstanceFilterOutputReference.prototype, "orderByDirectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._orderByDirection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceFilterOutputReference.prototype, "search", {
        get: function () {
            return this.getStringAttribute('search');
        },
        set: function (value) {
            this._search = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAiSearchInstanceFilterOutputReference.prototype.resetSearch = function () {
        this._search = undefined;
    };
    Object.defineProperty(DataCloudflareAiSearchInstanceFilterOutputReference.prototype, "searchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._search;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstanceFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstanceFilterOutputReference = DataCloudflareAiSearchInstanceFilterOutputReference;
function dataCloudflareAiSearchInstanceIndexMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstanceIndexMethodToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstanceIndexMethodOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstanceIndexMethodOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstanceIndexMethodOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstanceIndexMethodOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstanceIndexMethodOutputReference.prototype, "keyword", {
        // keyword - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('keyword');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceIndexMethodOutputReference.prototype, "vector", {
        // vector - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('vector');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstanceIndexMethodOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstanceIndexMethodOutputReference = DataCloudflareAiSearchInstanceIndexMethodOutputReference;
function dataCloudflareAiSearchInstanceIndexingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstanceIndexingOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstanceIndexingOptionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstanceIndexingOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstanceIndexingOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstanceIndexingOptionsOutputReference.prototype, "keywordTokenizer", {
        // keyword_tokenizer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('keyword_tokenizer');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstanceIndexingOptionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstanceIndexingOptionsOutputReference = DataCloudflareAiSearchInstanceIndexingOptionsOutputReference;
function dataCloudflareAiSearchInstanceMetadataSearchForAgentsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstanceMetadataSearchForAgentsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstanceMetadataSearchForAgentsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstanceMetadataSearchForAgentsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstanceMetadataSearchForAgentsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstanceMetadataSearchForAgentsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstanceMetadataSearchForAgentsOutputReference.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceMetadataSearchForAgentsOutputReference.prototype, "zoneId", {
        // zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceMetadataSearchForAgentsOutputReference.prototype, "zoneName", {
        // zone_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstanceMetadataSearchForAgentsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstanceMetadataSearchForAgentsOutputReference = DataCloudflareAiSearchInstanceMetadataSearchForAgentsOutputReference;
function dataCloudflareAiSearchInstanceMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstanceMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstanceMetadataOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstanceMetadataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstanceMetadataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // search_for_agents - computed: true, optional: false, required: false
        _this._searchForAgents = new DataCloudflareAiSearchInstanceMetadataSearchForAgentsOutputReference(_this, "search_for_agents");
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstanceMetadataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstanceMetadataOutputReference.prototype, "createdFromAisearchWizard", {
        // created_from_aisearch_wizard - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('created_from_aisearch_wizard');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceMetadataOutputReference.prototype, "searchForAgents", {
        get: function () {
            return this._searchForAgents;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceMetadataOutputReference.prototype, "workerDomain", {
        // worker_domain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('worker_domain');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstanceMetadataOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstanceMetadataOutputReference = DataCloudflareAiSearchInstanceMetadataOutputReference;
function dataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference.prototype, "disabled", {
        // disabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference = DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference;
function dataCloudflareAiSearchInstancePublicEndpointParamsMcpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstancePublicEndpointParamsMcpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference.prototype, "disabled", {
        // disabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference = DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference;
function dataCloudflareAiSearchInstancePublicEndpointParamsRateLimitToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstancePublicEndpointParamsRateLimitToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.prototype, "periodMs", {
        // period_ms - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('period_ms');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.prototype, "requests", {
        // requests - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('requests');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference.prototype, "technique", {
        // technique - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('technique');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference = DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference;
function dataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference.prototype, "disabled", {
        // disabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference = DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference;
function dataCloudflareAiSearchInstancePublicEndpointParamsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstancePublicEndpointParamsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // chat_completions_endpoint - computed: true, optional: false, required: false
        _this._chatCompletionsEndpoint = new DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference(_this, "chat_completions_endpoint");
        // mcp - computed: true, optional: false, required: false
        _this._mcp = new DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference(_this, "mcp");
        // rate_limit - computed: true, optional: false, required: false
        _this._rateLimit = new DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference(_this, "rate_limit");
        // search_endpoint - computed: true, optional: false, required: false
        _this._searchEndpoint = new DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference(_this, "search_endpoint");
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.prototype, "authorizedHosts", {
        // authorized_hosts - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('authorized_hosts');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.prototype, "chatCompletionsEndpoint", {
        get: function () {
            return this._chatCompletionsEndpoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.prototype, "mcp", {
        get: function () {
            return this._mcp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.prototype, "rateLimit", {
        get: function () {
            return this._rateLimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference.prototype, "searchEndpoint", {
        get: function () {
            return this._searchEndpoint;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference = DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference;
function dataCloudflareAiSearchInstanceRetrievalOptionsBoostByToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstanceRetrievalOptionsBoostByToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.prototype, "direction", {
        // direction - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('direction');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference.prototype, "field", {
        // field - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('field');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference = DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference;
var DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList.prototype.get = function (index) {
        return new DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList;
}(cdktf.ComplexList));
exports.DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList = DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList;
function dataCloudflareAiSearchInstanceRetrievalOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstanceRetrievalOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // boost_by - computed: true, optional: false, required: false
        _this._boostBy = new DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList(_this, "boost_by", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.prototype, "boostBy", {
        get: function () {
            return this._boostBy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference.prototype, "keywordMatchMode", {
        // keyword_match_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('keyword_match_mode');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference = DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference;
function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype, "depth", {
        // depth - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('depth');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype, "includeExternalLinks", {
        // include_external_links - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('include_external_links');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype, "includeSubdomains", {
        // include_subdomains - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('include_subdomains');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype, "maxAge", {
        // max_age - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_age');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference.prototype, "source", {
        // source - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference = DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference;
function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference.prototype, "selector", {
        // selector - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('selector');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference = DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference;
var DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList.prototype.get = function (index) {
        return new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList;
}(cdktf.ComplexList));
exports.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList = DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList;
function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // content_selector - computed: true, optional: false, required: false
        _this._contentSelector = new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList(_this, "content_selector", false);
        // include_headers - computed: true, optional: false, required: false
        _this._includeHeaders = new cdktf.StringMap(_this, "include_headers");
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.prototype, "contentSelector", {
        get: function () {
            return this._contentSelector;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.prototype, "includeHeaders", {
        get: function () {
            return this._includeHeaders;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.prototype, "includeImages", {
        // include_images - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('include_images');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.prototype, "specificSitemaps", {
        // specific_sitemaps - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('specific_sitemaps');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference.prototype, "useBrowserRendering", {
        // use_browser_rendering - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('use_browser_rendering');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference = DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference;
function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.prototype, "r2Jurisdiction", {
        // r2_jurisdiction - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('r2_jurisdiction');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.prototype, "storageId", {
        // storage_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('storage_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference.prototype, "storageType", {
        // storage_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('storage_type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference = DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference;
function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // crawl_options - computed: true, optional: false, required: false
        _this._crawlOptions = new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference(_this, "crawl_options");
        // parse_options - computed: true, optional: false, required: false
        _this._parseOptions = new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference(_this, "parse_options");
        // store_options - computed: true, optional: false, required: false
        _this._storeOptions = new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference(_this, "store_options");
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.prototype, "crawlOptions", {
        get: function () {
            return this._crawlOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.prototype, "parseOptions", {
        get: function () {
            return this._parseOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.prototype, "parseType", {
        // parse_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('parse_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference.prototype, "storeOptions", {
        get: function () {
            return this._storeOptions;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference = DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference;
function dataCloudflareAiSearchInstanceSourceParamsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAiSearchInstanceSourceParamsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAiSearchInstanceSourceParamsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstanceSourceParamsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAiSearchInstanceSourceParamsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // web_crawler - computed: true, optional: false, required: false
        _this._webCrawler = new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference(_this, "web_crawler");
        return _this;
    }
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsOutputReference.prototype, "excludeItems", {
        // exclude_items - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('exclude_items');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsOutputReference.prototype, "includeItems", {
        // include_items - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('include_items');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsOutputReference.prototype, "prefix", {
        // prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prefix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsOutputReference.prototype, "r2Jurisdiction", {
        // r2_jurisdiction - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('r2_jurisdiction');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstanceSourceParamsOutputReference.prototype, "webCrawler", {
        get: function () {
            return this._webCrawler;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAiSearchInstanceSourceParamsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAiSearchInstanceSourceParamsOutputReference = DataCloudflareAiSearchInstanceSourceParamsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instance cloudflare_ai_search_instance}
*/
var DataCloudflareAiSearchInstance = /** @class */ (function (_super) {
    __extends(DataCloudflareAiSearchInstance, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instance cloudflare_ai_search_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAiSearchInstanceConfig = {}
    */
    function DataCloudflareAiSearchInstance(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        // custom_metadata - computed: true, optional: false, required: false
        _this._customMetadata = new DataCloudflareAiSearchInstanceCustomMetadataList(_this, "custom_metadata", false);
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareAiSearchInstanceFilterOutputReference(_this, "filter");
        // index_method - computed: true, optional: false, required: false
        _this._indexMethod = new DataCloudflareAiSearchInstanceIndexMethodOutputReference(_this, "index_method");
        // indexing_options - computed: true, optional: false, required: false
        _this._indexingOptions = new DataCloudflareAiSearchInstanceIndexingOptionsOutputReference(_this, "indexing_options");
        // metadata - computed: true, optional: false, required: false
        _this._metadata = new DataCloudflareAiSearchInstanceMetadataOutputReference(_this, "metadata");
        // public_endpoint_params - computed: true, optional: false, required: false
        _this._publicEndpointParams = new DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference(_this, "public_endpoint_params");
        // retrieval_options - computed: true, optional: false, required: false
        _this._retrievalOptions = new DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference(_this, "retrieval_options");
        // source_params - computed: true, optional: false, required: false
        _this._sourceParams = new DataCloudflareAiSearchInstanceSourceParamsOutputReference(_this, "source_params");
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._id = config.id;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAiSearchInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAiSearchInstance to import
    * @param importFromId The id of the existing DataCloudflareAiSearchInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAiSearchInstance to import is found
    */
    DataCloudflareAiSearchInstance.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_search_instance", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAiSearchInstance.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "aiGatewayId", {
        // ai_gateway_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ai_gateway_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "aisearchModel", {
        // aisearch_model - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('aisearch_model');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "cache", {
        // cache - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cache');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "cacheThreshold", {
        // cache_threshold - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cache_threshold');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "chunkOverlap", {
        // chunk_overlap - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('chunk_overlap');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "chunkSize", {
        // chunk_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('chunk_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "createdBy", {
        // created_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "customMetadata", {
        get: function () {
            return this._customMetadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "embeddingModel", {
        // embedding_model - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('embedding_model');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "enable", {
        // enable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "engineVersion", {
        // engine_version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('engine_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAiSearchInstance.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareAiSearchInstance.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "fusionMethod", {
        // fusion_method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fusion_method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "hybridSearchEnabled", {
        // hybrid_search_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('hybrid_search_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAiSearchInstance.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "indexMethod", {
        get: function () {
            return this._indexMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "indexingOptions", {
        get: function () {
            return this._indexingOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "lastActivity", {
        // last_activity - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_activity');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "maxNumResults", {
        // max_num_results - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_num_results');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "metadata", {
        get: function () {
            return this._metadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "modifiedBy", {
        // modified_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "namespace", {
        // namespace - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "paused", {
        // paused - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('paused');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "publicEndpointId", {
        // public_endpoint_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_endpoint_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "publicEndpointParams", {
        get: function () {
            return this._publicEndpointParams;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "reranking", {
        // reranking - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('reranking');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "rerankingModel", {
        // reranking_model - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('reranking_model');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "retrievalOptions", {
        get: function () {
            return this._retrievalOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "rewriteModel", {
        // rewrite_model - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('rewrite_model');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "rewriteQuery", {
        // rewrite_query - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('rewrite_query');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "scoreThreshold", {
        // score_threshold - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('score_threshold');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "source", {
        // source - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "sourceParams", {
        get: function () {
            return this._sourceParams;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "syncInterval", {
        // sync_interval - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('sync_interval');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "tokenId", {
        // token_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('token_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAiSearchInstance.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareAiSearchInstance.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareAiSearchInstanceFilterToTerraform(this._filter.internalValue),
            id: cdktf.stringToTerraform(this._id),
        };
    };
    DataCloudflareAiSearchInstance.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareAiSearchInstanceFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareAiSearchInstanceFilter",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
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
    DataCloudflareAiSearchInstance.tfResourceType = "cloudflare_ai_search_instance";
    return DataCloudflareAiSearchInstance;
}(cdktf.TerraformDataSource));
exports.DataCloudflareAiSearchInstance = DataCloudflareAiSearchInstance;
