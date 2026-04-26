"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request
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
exports.CloudforceOneRequest = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request cloudflare_cloudforce_one_request}
*/
var CloudforceOneRequest = /** @class */ (function (_super) {
    __extends(CloudforceOneRequest, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request cloudflare_cloudforce_one_request} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudforceOneRequestConfig = {}
    */
    function CloudforceOneRequest(scope, id, config) {
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
        _this._accountId = config.accountId;
        _this._content = config.content;
        _this._priority = config.priority;
        _this._requestType = config.requestType;
        _this._summary = config.summary;
        _this._tlp = config.tlp;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CloudforceOneRequest resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudforceOneRequest to import
    * @param importFromId The id of the existing CloudforceOneRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudforceOneRequest to import is found
    */
    CloudforceOneRequest.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloudforce_one_request", importId: importFromId, provider: provider });
    };
    Object.defineProperty(CloudforceOneRequest.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudforceOneRequest.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(CloudforceOneRequest.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequest.prototype, "completed", {
        // completed - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('completed');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequest.prototype, "content", {
        get: function () {
            return this.getStringAttribute('content');
        },
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudforceOneRequest.prototype.resetContent = function () {
        this._content = undefined;
    };
    Object.defineProperty(CloudforceOneRequest.prototype, "contentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequest.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequest.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequest.prototype, "messageTokens", {
        // message_tokens - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('message_tokens');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequest.prototype, "priority", {
        get: function () {
            return this.getStringAttribute('priority');
        },
        set: function (value) {
            this._priority = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudforceOneRequest.prototype.resetPriority = function () {
        this._priority = undefined;
    };
    Object.defineProperty(CloudforceOneRequest.prototype, "priorityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._priority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequest.prototype, "readableId", {
        // readable_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('readable_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequest.prototype, "request", {
        // request - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('request');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequest.prototype, "requestType", {
        get: function () {
            return this.getStringAttribute('request_type');
        },
        set: function (value) {
            this._requestType = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudforceOneRequest.prototype.resetRequestType = function () {
        this._requestType = undefined;
    };
    Object.defineProperty(CloudforceOneRequest.prototype, "requestTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequest.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequest.prototype, "summary", {
        get: function () {
            return this.getStringAttribute('summary');
        },
        set: function (value) {
            this._summary = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudforceOneRequest.prototype.resetSummary = function () {
        this._summary = undefined;
    };
    Object.defineProperty(CloudforceOneRequest.prototype, "summaryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._summary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequest.prototype, "tlp", {
        get: function () {
            return this.getStringAttribute('tlp');
        },
        set: function (value) {
            this._tlp = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudforceOneRequest.prototype.resetTlp = function () {
        this._tlp = undefined;
    };
    Object.defineProperty(CloudforceOneRequest.prototype, "tlpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tlp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequest.prototype, "tokens", {
        // tokens - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('tokens');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequest.prototype, "updated", {
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
    CloudforceOneRequest.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            content: cdktf.stringToTerraform(this._content),
            priority: cdktf.stringToTerraform(this._priority),
            request_type: cdktf.stringToTerraform(this._requestType),
            summary: cdktf.stringToTerraform(this._summary),
            tlp: cdktf.stringToTerraform(this._tlp),
        };
    };
    CloudforceOneRequest.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content: {
                value: cdktf.stringToHclTerraform(this._content),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            priority: {
                value: cdktf.stringToHclTerraform(this._priority),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            request_type: {
                value: cdktf.stringToHclTerraform(this._requestType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            summary: {
                value: cdktf.stringToHclTerraform(this._summary),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tlp: {
                value: cdktf.stringToHclTerraform(this._tlp),
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
    CloudforceOneRequest.tfResourceType = "cloudflare_cloudforce_one_request";
    return CloudforceOneRequest;
}(cdktf.TerraformResource));
exports.CloudforceOneRequest = CloudforceOneRequest;
