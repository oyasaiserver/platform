"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request
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
exports.DataCloudflareCloudforceOneRequest = exports.DataCloudflareCloudforceOneRequestFilterOutputReference = void 0;
exports.dataCloudflareCloudforceOneRequestFilterToTerraform = dataCloudflareCloudforceOneRequestFilterToTerraform;
exports.dataCloudflareCloudforceOneRequestFilterToHclTerraform = dataCloudflareCloudforceOneRequestFilterToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareCloudforceOneRequestFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        completed_after: cdktf.stringToTerraform(struct.completedAfter),
        completed_before: cdktf.stringToTerraform(struct.completedBefore),
        created_after: cdktf.stringToTerraform(struct.createdAfter),
        created_before: cdktf.stringToTerraform(struct.createdBefore),
        page: cdktf.numberToTerraform(struct.page),
        per_page: cdktf.numberToTerraform(struct.perPage),
        request_type: cdktf.stringToTerraform(struct.requestType),
        sort_by: cdktf.stringToTerraform(struct.sortBy),
        sort_order: cdktf.stringToTerraform(struct.sortOrder),
        status: cdktf.stringToTerraform(struct.status),
    };
}
function dataCloudflareCloudforceOneRequestFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        completed_after: {
            value: cdktf.stringToHclTerraform(struct.completedAfter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        completed_before: {
            value: cdktf.stringToHclTerraform(struct.completedBefore),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        created_after: {
            value: cdktf.stringToHclTerraform(struct.createdAfter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        created_before: {
            value: cdktf.stringToHclTerraform(struct.createdBefore),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        page: {
            value: cdktf.numberToHclTerraform(struct.page),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        per_page: {
            value: cdktf.numberToHclTerraform(struct.perPage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        request_type: {
            value: cdktf.stringToHclTerraform(struct.requestType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sort_by: {
            value: cdktf.stringToHclTerraform(struct.sortBy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sort_order: {
            value: cdktf.stringToHclTerraform(struct.sortOrder),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
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
var DataCloudflareCloudforceOneRequestFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCloudforceOneRequestFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareCloudforceOneRequestFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCloudforceOneRequestFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._completedAfter !== undefined) {
                hasAnyValues = true;
                internalValueResult.completedAfter = this._completedAfter;
            }
            if (this._completedBefore !== undefined) {
                hasAnyValues = true;
                internalValueResult.completedBefore = this._completedBefore;
            }
            if (this._createdAfter !== undefined) {
                hasAnyValues = true;
                internalValueResult.createdAfter = this._createdAfter;
            }
            if (this._createdBefore !== undefined) {
                hasAnyValues = true;
                internalValueResult.createdBefore = this._createdBefore;
            }
            if (this._page !== undefined) {
                hasAnyValues = true;
                internalValueResult.page = this._page;
            }
            if (this._perPage !== undefined) {
                hasAnyValues = true;
                internalValueResult.perPage = this._perPage;
            }
            if (this._requestType !== undefined) {
                hasAnyValues = true;
                internalValueResult.requestType = this._requestType;
            }
            if (this._sortBy !== undefined) {
                hasAnyValues = true;
                internalValueResult.sortBy = this._sortBy;
            }
            if (this._sortOrder !== undefined) {
                hasAnyValues = true;
                internalValueResult.sortOrder = this._sortOrder;
            }
            if (this._status !== undefined) {
                hasAnyValues = true;
                internalValueResult.status = this._status;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._completedAfter = undefined;
                this._completedBefore = undefined;
                this._createdAfter = undefined;
                this._createdBefore = undefined;
                this._page = undefined;
                this._perPage = undefined;
                this._requestType = undefined;
                this._sortBy = undefined;
                this._sortOrder = undefined;
                this._status = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._completedAfter = value.completedAfter;
                this._completedBefore = value.completedBefore;
                this._createdAfter = value.createdAfter;
                this._createdBefore = value.createdBefore;
                this._page = value.page;
                this._perPage = value.perPage;
                this._requestType = value.requestType;
                this._sortBy = value.sortBy;
                this._sortOrder = value.sortOrder;
                this._status = value.status;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestFilterOutputReference.prototype, "completedAfter", {
        get: function () {
            return this.getStringAttribute('completed_after');
        },
        set: function (value) {
            this._completedAfter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequestFilterOutputReference.prototype.resetCompletedAfter = function () {
        this._completedAfter = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequestFilterOutputReference.prototype, "completedAfterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._completedAfter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestFilterOutputReference.prototype, "completedBefore", {
        get: function () {
            return this.getStringAttribute('completed_before');
        },
        set: function (value) {
            this._completedBefore = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequestFilterOutputReference.prototype.resetCompletedBefore = function () {
        this._completedBefore = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequestFilterOutputReference.prototype, "completedBeforeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._completedBefore;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestFilterOutputReference.prototype, "createdAfter", {
        get: function () {
            return this.getStringAttribute('created_after');
        },
        set: function (value) {
            this._createdAfter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequestFilterOutputReference.prototype.resetCreatedAfter = function () {
        this._createdAfter = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequestFilterOutputReference.prototype, "createdAfterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._createdAfter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestFilterOutputReference.prototype, "createdBefore", {
        get: function () {
            return this.getStringAttribute('created_before');
        },
        set: function (value) {
            this._createdBefore = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequestFilterOutputReference.prototype.resetCreatedBefore = function () {
        this._createdBefore = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequestFilterOutputReference.prototype, "createdBeforeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._createdBefore;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestFilterOutputReference.prototype, "page", {
        get: function () {
            return this.getNumberAttribute('page');
        },
        set: function (value) {
            this._page = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestFilterOutputReference.prototype, "pageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._page;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestFilterOutputReference.prototype, "perPage", {
        get: function () {
            return this.getNumberAttribute('per_page');
        },
        set: function (value) {
            this._perPage = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestFilterOutputReference.prototype, "perPageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._perPage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestFilterOutputReference.prototype, "requestType", {
        get: function () {
            return this.getStringAttribute('request_type');
        },
        set: function (value) {
            this._requestType = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequestFilterOutputReference.prototype.resetRequestType = function () {
        this._requestType = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequestFilterOutputReference.prototype, "requestTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestFilterOutputReference.prototype, "sortBy", {
        get: function () {
            return this.getStringAttribute('sort_by');
        },
        set: function (value) {
            this._sortBy = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequestFilterOutputReference.prototype.resetSortBy = function () {
        this._sortBy = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequestFilterOutputReference.prototype, "sortByInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sortBy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestFilterOutputReference.prototype, "sortOrder", {
        get: function () {
            return this.getStringAttribute('sort_order');
        },
        set: function (value) {
            this._sortOrder = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequestFilterOutputReference.prototype.resetSortOrder = function () {
        this._sortOrder = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequestFilterOutputReference.prototype, "sortOrderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sortOrder;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestFilterOutputReference.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequestFilterOutputReference.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequestFilterOutputReference.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCloudforceOneRequestFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCloudforceOneRequestFilterOutputReference = DataCloudflareCloudforceOneRequestFilterOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request cloudflare_cloudforce_one_request}
*/
var DataCloudflareCloudforceOneRequest = /** @class */ (function (_super) {
    __extends(DataCloudflareCloudforceOneRequest, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request cloudflare_cloudforce_one_request} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCloudforceOneRequestConfig = {}
    */
    function DataCloudflareCloudforceOneRequest(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_cloudforce_one_request',
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
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareCloudforceOneRequestFilterOutputReference(_this, "filter");
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._requestId = config.requestId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareCloudforceOneRequest resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCloudforceOneRequest to import
    * @param importFromId The id of the existing DataCloudflareCloudforceOneRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCloudforceOneRequest to import is found
    */
    DataCloudflareCloudforceOneRequest.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloudforce_one_request", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequest.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequest.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequest.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequest.prototype, "completed", {
        // completed - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('completed');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequest.prototype, "content", {
        // content - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequest.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequest.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequest.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareCloudforceOneRequest.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequest.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequest.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequest.prototype, "messageTokens", {
        // message_tokens - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('message_tokens');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequest.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequest.prototype, "readableId", {
        // readable_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('readable_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequest.prototype, "request", {
        // request - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('request');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequest.prototype, "requestId", {
        get: function () {
            return this.getStringAttribute('request_id');
        },
        set: function (value) {
            this._requestId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequest.prototype.resetRequestId = function () {
        this._requestId = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequest.prototype, "requestIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequest.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequest.prototype, "summary", {
        // summary - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('summary');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequest.prototype, "tlp", {
        // tlp - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tlp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequest.prototype, "tokens", {
        // tokens - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('tokens');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequest.prototype, "updated", {
        // updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareCloudforceOneRequest.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareCloudforceOneRequestFilterToTerraform(this._filter.internalValue),
            request_id: cdktf.stringToTerraform(this._requestId),
        };
    };
    DataCloudflareCloudforceOneRequest.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareCloudforceOneRequestFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareCloudforceOneRequestFilter",
            },
            request_id: {
                value: cdktf.stringToHclTerraform(this._requestId),
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
    DataCloudflareCloudforceOneRequest.tfResourceType = "cloudflare_cloudforce_one_request";
    return DataCloudflareCloudforceOneRequest;
}(cdktf.TerraformDataSource));
exports.DataCloudflareCloudforceOneRequest = DataCloudflareCloudforceOneRequest;
