"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_priority
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
exports.CloudforceOneRequestPriority = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_priority cloudflare_cloudforce_one_request_priority}
*/
var CloudforceOneRequestPriority = /** @class */ (function (_super) {
    __extends(CloudforceOneRequestPriority, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_priority cloudflare_cloudforce_one_request_priority} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudforceOneRequestPriorityConfig
    */
    function CloudforceOneRequestPriority(scope, id, config) {
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
        _this._labels = config.labels;
        _this._priority = config.priority;
        _this._requirement = config.requirement;
        _this._tlp = config.tlp;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CloudforceOneRequestPriority resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudforceOneRequestPriority to import
    * @param importFromId The id of the existing CloudforceOneRequestPriority that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_priority#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudforceOneRequestPriority to import is found
    */
    CloudforceOneRequestPriority.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloudforce_one_request_priority", importId: importFromId, provider: provider });
    };
    Object.defineProperty(CloudforceOneRequestPriority.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudforceOneRequestPriority.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(CloudforceOneRequestPriority.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestPriority.prototype, "completed", {
        // completed - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('completed');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestPriority.prototype, "content", {
        // content - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestPriority.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestPriority.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestPriority.prototype, "labels", {
        get: function () {
            return this.getListAttribute('labels');
        },
        set: function (value) {
            this._labels = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestPriority.prototype, "labelsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._labels;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestPriority.prototype, "messageTokens", {
        // message_tokens - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('message_tokens');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestPriority.prototype, "priority", {
        get: function () {
            return this.getNumberAttribute('priority');
        },
        set: function (value) {
            this._priority = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestPriority.prototype, "priorityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._priority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestPriority.prototype, "readableId", {
        // readable_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('readable_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestPriority.prototype, "request", {
        // request - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('request');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestPriority.prototype, "requirement", {
        get: function () {
            return this.getStringAttribute('requirement');
        },
        set: function (value) {
            this._requirement = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestPriority.prototype, "requirementInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requirement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestPriority.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestPriority.prototype, "summary", {
        // summary - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('summary');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestPriority.prototype, "tlp", {
        get: function () {
            return this.getStringAttribute('tlp');
        },
        set: function (value) {
            this._tlp = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestPriority.prototype, "tlpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tlp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestPriority.prototype, "tokens", {
        // tokens - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('tokens');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestPriority.prototype, "updated", {
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
    CloudforceOneRequestPriority.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
            priority: cdktf.numberToTerraform(this._priority),
            requirement: cdktf.stringToTerraform(this._requirement),
            tlp: cdktf.stringToTerraform(this._tlp),
        };
    };
    CloudforceOneRequestPriority.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            labels: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            priority: {
                value: cdktf.numberToHclTerraform(this._priority),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            requirement: {
                value: cdktf.stringToHclTerraform(this._requirement),
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
    CloudforceOneRequestPriority.tfResourceType = "cloudflare_cloudforce_one_request_priority";
    return CloudforceOneRequestPriority;
}(cdktf.TerraformResource));
exports.CloudforceOneRequestPriority = CloudforceOneRequestPriority;
