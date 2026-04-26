"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_priority
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
exports.DataCloudflareCloudforceOneRequestPriority = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_priority cloudflare_cloudforce_one_request_priority}
*/
var DataCloudflareCloudforceOneRequestPriority = /** @class */ (function (_super) {
    __extends(DataCloudflareCloudforceOneRequestPriority, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_priority cloudflare_cloudforce_one_request_priority} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCloudforceOneRequestPriorityConfig
    */
    function DataCloudflareCloudforceOneRequestPriority(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_cloudforce_one_request_priority',
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
        _this._priorityId = config.priorityId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareCloudforceOneRequestPriority resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCloudforceOneRequestPriority to import
    * @param importFromId The id of the existing DataCloudflareCloudforceOneRequestPriority that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_priority#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCloudforceOneRequestPriority to import is found
    */
    DataCloudflareCloudforceOneRequestPriority.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloudforce_one_request_priority", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequestPriority.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudforceOneRequestPriority.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareCloudforceOneRequestPriority.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestPriority.prototype, "completed", {
        // completed - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('completed');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestPriority.prototype, "content", {
        // content - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestPriority.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestPriority.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestPriority.prototype, "messageTokens", {
        // message_tokens - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('message_tokens');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestPriority.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestPriority.prototype, "priorityId", {
        get: function () {
            return this.getStringAttribute('priority_id');
        },
        set: function (value) {
            this._priorityId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestPriority.prototype, "priorityIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._priorityId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestPriority.prototype, "readableId", {
        // readable_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('readable_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestPriority.prototype, "request", {
        // request - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('request');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestPriority.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestPriority.prototype, "summary", {
        // summary - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('summary');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestPriority.prototype, "tlp", {
        // tlp - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tlp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestPriority.prototype, "tokens", {
        // tokens - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('tokens');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudforceOneRequestPriority.prototype, "updated", {
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
    DataCloudflareCloudforceOneRequestPriority.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            priority_id: cdktf.stringToTerraform(this._priorityId),
        };
    };
    DataCloudflareCloudforceOneRequestPriority.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            priority_id: {
                value: cdktf.stringToHclTerraform(this._priorityId),
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
    DataCloudflareCloudforceOneRequestPriority.tfResourceType = "cloudflare_cloudforce_one_request_priority";
    return DataCloudflareCloudforceOneRequestPriority;
}(cdktf.TerraformDataSource));
exports.DataCloudflareCloudforceOneRequestPriority = DataCloudflareCloudforceOneRequestPriority;
