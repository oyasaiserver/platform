"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_webhook
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
exports.StreamWebhook = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_webhook cloudflare_stream_webhook}
*/
var StreamWebhook = /** @class */ (function (_super) {
    __extends(StreamWebhook, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_webhook cloudflare_stream_webhook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StreamWebhookConfig = {}
    */
    function StreamWebhook(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_stream_webhook',
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
        _this._notificationUrl = config.notificationUrl;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a StreamWebhook resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the StreamWebhook to import
    * @param importFromId The id of the existing StreamWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_webhook#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the StreamWebhook to import is found
    */
    StreamWebhook.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_stream_webhook", importId: importFromId, provider: provider });
    };
    Object.defineProperty(StreamWebhook.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamWebhook.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(StreamWebhook.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWebhook.prototype, "modified", {
        // modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWebhook.prototype, "notificationUrl", {
        get: function () {
            return this.getStringAttribute('notification_url');
        },
        set: function (value) {
            this._notificationUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    StreamWebhook.prototype.resetNotificationUrl = function () {
        this._notificationUrl = undefined;
    };
    Object.defineProperty(StreamWebhook.prototype, "notificationUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notificationUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StreamWebhook.prototype, "secret", {
        // secret - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secret');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    StreamWebhook.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            notification_url: cdktf.stringToTerraform(this._notificationUrl),
        };
    };
    StreamWebhook.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            notification_url: {
                value: cdktf.stringToHclTerraform(this._notificationUrl),
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
    StreamWebhook.tfResourceType = "cloudflare_stream_webhook";
    return StreamWebhook;
}(cdktf.TerraformResource));
exports.StreamWebhook = StreamWebhook;
