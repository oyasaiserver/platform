"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_token
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
exports.AiSearchToken = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_token cloudflare_ai_search_token}
*/
var AiSearchToken = /** @class */ (function (_super) {
    __extends(AiSearchToken, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_token cloudflare_ai_search_token} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AiSearchTokenConfig
    */
    function AiSearchToken(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_ai_search_token',
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
        _this._cfApiId = config.cfApiId;
        _this._cfApiKey = config.cfApiKey;
        _this._legacy = config.legacy;
        _this._name = config.name;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AiSearchToken resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AiSearchToken to import
    * @param importFromId The id of the existing AiSearchToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_token#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AiSearchToken to import is found
    */
    AiSearchToken.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_search_token", importId: importFromId, provider: provider });
    };
    Object.defineProperty(AiSearchToken.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchToken.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(AiSearchToken.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchToken.prototype, "cfApiId", {
        get: function () {
            return this.getStringAttribute('cf_api_id');
        },
        set: function (value) {
            this._cfApiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchToken.prototype, "cfApiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cfApiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchToken.prototype, "cfApiKey", {
        get: function () {
            return this.getStringAttribute('cf_api_key');
        },
        set: function (value) {
            this._cfApiKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchToken.prototype, "cfApiKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cfApiKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchToken.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchToken.prototype, "createdBy", {
        // created_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchToken.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchToken.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchToken.prototype, "legacy", {
        get: function () {
            return this.getBooleanAttribute('legacy');
        },
        set: function (value) {
            this._legacy = value;
        },
        enumerable: false,
        configurable: true
    });
    AiSearchToken.prototype.resetLegacy = function () {
        this._legacy = undefined;
    };
    Object.defineProperty(AiSearchToken.prototype, "legacyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._legacy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchToken.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchToken.prototype, "modifiedBy", {
        // modified_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchToken.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AiSearchToken.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AiSearchToken.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            cf_api_id: cdktf.stringToTerraform(this._cfApiId),
            cf_api_key: cdktf.stringToTerraform(this._cfApiKey),
            legacy: cdktf.booleanToTerraform(this._legacy),
            name: cdktf.stringToTerraform(this._name),
        };
    };
    AiSearchToken.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cf_api_id: {
                value: cdktf.stringToHclTerraform(this._cfApiId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cf_api_key: {
                value: cdktf.stringToHclTerraform(this._cfApiKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            legacy: {
                value: cdktf.booleanToHclTerraform(this._legacy),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
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
    AiSearchToken.tfResourceType = "cloudflare_ai_search_token";
    return AiSearchToken;
}(cdktf.TerraformResource));
exports.AiSearchToken = AiSearchToken;
