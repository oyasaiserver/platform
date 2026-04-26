"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_requests
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
exports.DataCloudflareCloudforceOneRequests = exports.DataCloudflareCloudforceOneRequestsResultList = exports.DataCloudflareCloudforceOneRequestsResultOutputReference = void 0;
exports.dataCloudflareCloudforceOneRequestsResultToTerraform = dataCloudflareCloudforceOneRequestsResultToTerraform;
exports.dataCloudflareCloudforceOneRequestsResultToHclTerraform = dataCloudflareCloudforceOneRequestsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareCloudforceOneRequestsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCloudforceOneRequestsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCloudforceOneRequestsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCloudforceOneRequestsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCloudforceOneRequestsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCloudforceOneRequestsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCloudforceOneRequestsResultOutputReference.prototype, "completed", {
        // completed - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('completed');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestsResultOutputReference.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestsResultOutputReference.prototype, "messageTokens", {
        // message_tokens - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('message_tokens');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestsResultOutputReference.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestsResultOutputReference.prototype, "readableId", {
        // readable_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('readable_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestsResultOutputReference.prototype, "request", {
        // request - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('request');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestsResultOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestsResultOutputReference.prototype, "summary", {
        // summary - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('summary');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestsResultOutputReference.prototype, "tlp", {
        // tlp - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tlp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestsResultOutputReference.prototype, "tokens", {
        // tokens - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('tokens');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestsResultOutputReference.prototype, "updated", {
        // updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCloudforceOneRequestsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCloudforceOneRequestsResultOutputReference = DataCloudflareCloudforceOneRequestsResultOutputReference;
var DataCloudflareCloudforceOneRequestsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareCloudforceOneRequestsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCloudforceOneRequestsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareCloudforceOneRequestsResultList.prototype.get = function (index) {
        return new DataCloudflareCloudforceOneRequestsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareCloudforceOneRequestsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareCloudforceOneRequestsResultList = DataCloudflareCloudforceOneRequestsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_requests cloudflare_cloudforce_one_requests}
*/
var DataCloudflareCloudforceOneRequests = /** @class */ (function (_super) {
    __extends(DataCloudflareCloudforceOneRequests, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_requests cloudflare_cloudforce_one_requests} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCloudforceOneRequestsConfig
    */
    function DataCloudflareCloudforceOneRequests(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_cloudforce_one_requests',
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
        _this._result = new DataCloudflareCloudforceOneRequestsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._completedAfter = config.completedAfter;
        _this._completedBefore = config.completedBefore;
        _this._createdAfter = config.createdAfter;
        _this._createdBefore = config.createdBefore;
        _this._maxItems = config.maxItems;
        _this._page = config.page;
        _this._perPage = config.perPage;
        _this._requestType = config.requestType;
        _this._sortBy = config.sortBy;
        _this._sortOrder = config.sortOrder;
        _this._status = config.status;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareCloudforceOneRequests resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCloudforceOneRequests to import
    * @param importFromId The id of the existing DataCloudflareCloudforceOneRequests that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_requests#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCloudforceOneRequests to import is found
    */
    DataCloudflareCloudforceOneRequests.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloudforce_one_requests", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequests.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequests.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequests.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequests.prototype, "completedAfter", {
        get: function () {
            return this.getStringAttribute('completed_after');
        },
        set: function (value) {
            this._completedAfter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequests.prototype.resetCompletedAfter = function () {
        this._completedAfter = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequests.prototype, "completedAfterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._completedAfter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequests.prototype, "completedBefore", {
        get: function () {
            return this.getStringAttribute('completed_before');
        },
        set: function (value) {
            this._completedBefore = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequests.prototype.resetCompletedBefore = function () {
        this._completedBefore = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequests.prototype, "completedBeforeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._completedBefore;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequests.prototype, "createdAfter", {
        get: function () {
            return this.getStringAttribute('created_after');
        },
        set: function (value) {
            this._createdAfter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequests.prototype.resetCreatedAfter = function () {
        this._createdAfter = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequests.prototype, "createdAfterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._createdAfter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequests.prototype, "createdBefore", {
        get: function () {
            return this.getStringAttribute('created_before');
        },
        set: function (value) {
            this._createdBefore = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequests.prototype.resetCreatedBefore = function () {
        this._createdBefore = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequests.prototype, "createdBeforeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._createdBefore;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequests.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequests.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequests.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequests.prototype, "page", {
        get: function () {
            return this.getNumberAttribute('page');
        },
        set: function (value) {
            this._page = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequests.prototype, "pageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._page;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequests.prototype, "perPage", {
        get: function () {
            return this.getNumberAttribute('per_page');
        },
        set: function (value) {
            this._perPage = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequests.prototype, "perPageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._perPage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequests.prototype, "requestType", {
        get: function () {
            return this.getStringAttribute('request_type');
        },
        set: function (value) {
            this._requestType = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequests.prototype.resetRequestType = function () {
        this._requestType = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequests.prototype, "requestTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequests.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequests.prototype, "sortBy", {
        get: function () {
            return this.getStringAttribute('sort_by');
        },
        set: function (value) {
            this._sortBy = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequests.prototype.resetSortBy = function () {
        this._sortBy = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequests.prototype, "sortByInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sortBy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequests.prototype, "sortOrder", {
        get: function () {
            return this.getStringAttribute('sort_order');
        },
        set: function (value) {
            this._sortOrder = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequests.prototype.resetSortOrder = function () {
        this._sortOrder = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequests.prototype, "sortOrderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sortOrder;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequests.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequests.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequests.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareCloudforceOneRequests.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            completed_after: cdktf.stringToTerraform(this._completedAfter),
            completed_before: cdktf.stringToTerraform(this._completedBefore),
            created_after: cdktf.stringToTerraform(this._createdAfter),
            created_before: cdktf.stringToTerraform(this._createdBefore),
            max_items: cdktf.numberToTerraform(this._maxItems),
            page: cdktf.numberToTerraform(this._page),
            per_page: cdktf.numberToTerraform(this._perPage),
            request_type: cdktf.stringToTerraform(this._requestType),
            sort_by: cdktf.stringToTerraform(this._sortBy),
            sort_order: cdktf.stringToTerraform(this._sortOrder),
            status: cdktf.stringToTerraform(this._status),
        };
    };
    DataCloudflareCloudforceOneRequests.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            completed_after: {
                value: cdktf.stringToHclTerraform(this._completedAfter),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            completed_before: {
                value: cdktf.stringToHclTerraform(this._completedBefore),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            created_after: {
                value: cdktf.stringToHclTerraform(this._createdAfter),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            created_before: {
                value: cdktf.stringToHclTerraform(this._createdBefore),
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
            page: {
                value: cdktf.numberToHclTerraform(this._page),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            per_page: {
                value: cdktf.numberToHclTerraform(this._perPage),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            request_type: {
                value: cdktf.stringToHclTerraform(this._requestType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sort_by: {
                value: cdktf.stringToHclTerraform(this._sortBy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sort_order: {
                value: cdktf.stringToHclTerraform(this._sortOrder),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            status: {
                value: cdktf.stringToHclTerraform(this._status),
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
    DataCloudflareCloudforceOneRequests.tfResourceType = "cloudflare_cloudforce_one_requests";
    return DataCloudflareCloudforceOneRequests;
}(cdktf.TerraformDataSource));
exports.DataCloudflareCloudforceOneRequests = DataCloudflareCloudforceOneRequests;
