"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policy_webhooks
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
exports.DataCloudflareNotificationPolicyWebhooks = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policy_webhooks cloudflare_notification_policy_webhooks}
*/
var DataCloudflareNotificationPolicyWebhooks = /** @class */ (function (_super) {
    __extends(DataCloudflareNotificationPolicyWebhooks, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policy_webhooks cloudflare_notification_policy_webhooks} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareNotificationPolicyWebhooksConfig
    */
    function DataCloudflareNotificationPolicyWebhooks(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_notification_policy_webhooks',
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
        _this._webhookId = config.webhookId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareNotificationPolicyWebhooks resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareNotificationPolicyWebhooks to import
    * @param importFromId The id of the existing DataCloudflareNotificationPolicyWebhooks that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policy_webhooks#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareNotificationPolicyWebhooks to import is found
    */
    DataCloudflareNotificationPolicyWebhooks.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_notification_policy_webhooks", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareNotificationPolicyWebhooks.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareNotificationPolicyWebhooks.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareNotificationPolicyWebhooks.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyWebhooks.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyWebhooks.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyWebhooks.prototype, "lastFailure", {
        // last_failure - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_failure');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyWebhooks.prototype, "lastSuccess", {
        // last_success - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_success');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyWebhooks.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyWebhooks.prototype, "secret", {
        // secret - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyWebhooks.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyWebhooks.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyWebhooks.prototype, "webhookId", {
        get: function () {
            return this.getStringAttribute('webhook_id');
        },
        set: function (value) {
            this._webhookId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareNotificationPolicyWebhooks.prototype, "webhookIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._webhookId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareNotificationPolicyWebhooks.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            webhook_id: cdktf.stringToTerraform(this._webhookId),
        };
    };
    DataCloudflareNotificationPolicyWebhooks.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            webhook_id: {
                value: cdktf.stringToHclTerraform(this._webhookId),
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
    DataCloudflareNotificationPolicyWebhooks.tfResourceType = "cloudflare_notification_policy_webhooks";
    return DataCloudflareNotificationPolicyWebhooks;
}(cdktf.TerraformDataSource));
exports.DataCloudflareNotificationPolicyWebhooks = DataCloudflareNotificationPolicyWebhooks;
