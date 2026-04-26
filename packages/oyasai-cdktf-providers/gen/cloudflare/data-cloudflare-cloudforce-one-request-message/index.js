"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_message
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
exports.DataCloudflareCloudforceOneRequestMessage = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_message cloudflare_cloudforce_one_request_message}
*/
var DataCloudflareCloudforceOneRequestMessage = /** @class */ (function (_super) {
    __extends(DataCloudflareCloudforceOneRequestMessage, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_message cloudflare_cloudforce_one_request_message} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCloudforceOneRequestMessageConfig
    */
    function DataCloudflareCloudforceOneRequestMessage(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_cloudforce_one_request_message',
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
        _this._accountId = config.accountId;
        _this._after = config.after;
        _this._before = config.before;
        _this._page = config.page;
        _this._perPage = config.perPage;
        _this._requestId = config.requestId;
        _this._sortBy = config.sortBy;
        _this._sortOrder = config.sortOrder;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareCloudforceOneRequestMessage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCloudforceOneRequestMessage to import
    * @param importFromId The id of the existing DataCloudflareCloudforceOneRequestMessage that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_message#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCloudforceOneRequestMessage to import is found
    */
    DataCloudflareCloudforceOneRequestMessage.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloudforce_one_request_message", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequestMessage.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequestMessage.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequestMessage.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestMessage.prototype, "after", {
        get: function () {
            return this.getStringAttribute('after');
        },
        set: function (value) {
            this._after = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequestMessage.prototype.resetAfter = function () {
        this._after = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequestMessage.prototype, "afterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._after;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestMessage.prototype, "author", {
        // author - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('author');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestMessage.prototype, "before", {
        get: function () {
            return this.getStringAttribute('before');
        },
        set: function (value) {
            this._before = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequestMessage.prototype.resetBefore = function () {
        this._before = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequestMessage.prototype, "beforeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._before;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestMessage.prototype, "content", {
        // content - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestMessage.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestMessage.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestMessage.prototype, "isFollowOnRequest", {
        // is_follow_on_request - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_follow_on_request');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestMessage.prototype, "page", {
        get: function () {
            return this.getNumberAttribute('page');
        },
        set: function (value) {
            this._page = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestMessage.prototype, "pageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._page;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestMessage.prototype, "perPage", {
        get: function () {
            return this.getNumberAttribute('per_page');
        },
        set: function (value) {
            this._perPage = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestMessage.prototype, "perPageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._perPage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestMessage.prototype, "requestId", {
        get: function () {
            return this.getStringAttribute('request_id');
        },
        set: function (value) {
            this._requestId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestMessage.prototype, "requestIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestMessage.prototype, "sortBy", {
        get: function () {
            return this.getStringAttribute('sort_by');
        },
        set: function (value) {
            this._sortBy = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequestMessage.prototype.resetSortBy = function () {
        this._sortBy = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequestMessage.prototype, "sortByInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sortBy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestMessage.prototype, "sortOrder", {
        get: function () {
            return this.getStringAttribute('sort_order');
        },
        set: function (value) {
            this._sortOrder = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequestMessage.prototype.resetSortOrder = function () {
        this._sortOrder = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequestMessage.prototype, "sortOrderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sortOrder;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestMessage.prototype, "updated", {
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
    DataCloudflareCloudforceOneRequestMessage.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            after: cdktf.stringToTerraform(this._after),
            before: cdktf.stringToTerraform(this._before),
            page: cdktf.numberToTerraform(this._page),
            per_page: cdktf.numberToTerraform(this._perPage),
            request_id: cdktf.stringToTerraform(this._requestId),
            sort_by: cdktf.stringToTerraform(this._sortBy),
            sort_order: cdktf.stringToTerraform(this._sortOrder),
        };
    };
    DataCloudflareCloudforceOneRequestMessage.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            after: {
                value: cdktf.stringToHclTerraform(this._after),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            before: {
                value: cdktf.stringToHclTerraform(this._before),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
            request_id: {
                value: cdktf.stringToHclTerraform(this._requestId),
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
    DataCloudflareCloudforceOneRequestMessage.tfResourceType = "cloudflare_cloudforce_one_request_message";
    return DataCloudflareCloudforceOneRequestMessage;
}(cdktf.TerraformDataSource));
exports.DataCloudflareCloudforceOneRequestMessage = DataCloudflareCloudforceOneRequestMessage;
