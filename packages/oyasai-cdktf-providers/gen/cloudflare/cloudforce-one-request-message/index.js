"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_message
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
exports.CloudforceOneRequestMessage = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_message cloudflare_cloudforce_one_request_message}
*/
var CloudforceOneRequestMessage = /** @class */ (function (_super) {
    __extends(CloudforceOneRequestMessage, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_message cloudflare_cloudforce_one_request_message} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudforceOneRequestMessageConfig
    */
    function CloudforceOneRequestMessage(scope, id, config) {
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
        _this._content = config.content;
        _this._requestId = config.requestId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CloudforceOneRequestMessage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudforceOneRequestMessage to import
    * @param importFromId The id of the existing CloudforceOneRequestMessage that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_message#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudforceOneRequestMessage to import is found
    */
    CloudforceOneRequestMessage.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloudforce_one_request_message", importId: importFromId, provider: provider });
    };
    Object.defineProperty(CloudforceOneRequestMessage.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudforceOneRequestMessage.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(CloudforceOneRequestMessage.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestMessage.prototype, "author", {
        // author - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('author');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestMessage.prototype, "content", {
        get: function () {
            return this.getStringAttribute('content');
        },
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudforceOneRequestMessage.prototype.resetContent = function () {
        this._content = undefined;
    };
    Object.defineProperty(CloudforceOneRequestMessage.prototype, "contentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestMessage.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestMessage.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestMessage.prototype, "isFollowOnRequest", {
        // is_follow_on_request - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_follow_on_request');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestMessage.prototype, "requestId", {
        get: function () {
            return this.getStringAttribute('request_id');
        },
        set: function (value) {
            this._requestId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestMessage.prototype, "requestIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudforceOneRequestMessage.prototype, "updated", {
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
    CloudforceOneRequestMessage.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            content: cdktf.stringToTerraform(this._content),
            request_id: cdktf.stringToTerraform(this._requestId),
        };
    };
    CloudforceOneRequestMessage.prototype.synthesizeHclAttributes = function () {
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
    CloudforceOneRequestMessage.tfResourceType = "cloudflare_cloudforce_one_request_message";
    return CloudforceOneRequestMessage;
}(cdktf.TerraformResource));
exports.CloudforceOneRequestMessage = CloudforceOneRequestMessage;
