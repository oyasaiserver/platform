"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs
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
exports.CloudflareProvider = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs cloudflare}
*/
var CloudflareProvider = /** @class */ (function (_super) {
    __extends(CloudflareProvider, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs cloudflare} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudflareProviderConfig = {}
    */
    function CloudflareProvider(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
            },
            terraformProviderSource: 'cloudflare/cloudflare'
        }) || this;
        _this._apiKey = config.apiKey;
        _this._apiToken = config.apiToken;
        _this._apiUserServiceKey = config.apiUserServiceKey;
        _this._baseUrl = config.baseUrl;
        _this._email = config.email;
        _this._userAgentOperatorSuffix = config.userAgentOperatorSuffix;
        _this._alias = config.alias;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CloudflareProvider resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudflareProvider to import
    * @param importFromId The id of the existing CloudflareProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudflareProvider to import is found
    */
    CloudflareProvider.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare", importId: importFromId, provider: provider });
    };
    Object.defineProperty(CloudflareProvider.prototype, "apiKey", {
        get: function () {
            return this._apiKey;
        },
        set: function (value) {
            this._apiKey = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudflareProvider.prototype.resetApiKey = function () {
        this._apiKey = undefined;
    };
    Object.defineProperty(CloudflareProvider.prototype, "apiKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudflareProvider.prototype, "apiToken", {
        get: function () {
            return this._apiToken;
        },
        set: function (value) {
            this._apiToken = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudflareProvider.prototype.resetApiToken = function () {
        this._apiToken = undefined;
    };
    Object.defineProperty(CloudflareProvider.prototype, "apiTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudflareProvider.prototype, "apiUserServiceKey", {
        get: function () {
            return this._apiUserServiceKey;
        },
        set: function (value) {
            this._apiUserServiceKey = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudflareProvider.prototype.resetApiUserServiceKey = function () {
        this._apiUserServiceKey = undefined;
    };
    Object.defineProperty(CloudflareProvider.prototype, "apiUserServiceKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiUserServiceKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudflareProvider.prototype, "baseUrl", {
        get: function () {
            return this._baseUrl;
        },
        set: function (value) {
            this._baseUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudflareProvider.prototype.resetBaseUrl = function () {
        this._baseUrl = undefined;
    };
    Object.defineProperty(CloudflareProvider.prototype, "baseUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._baseUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudflareProvider.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudflareProvider.prototype.resetEmail = function () {
        this._email = undefined;
    };
    Object.defineProperty(CloudflareProvider.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudflareProvider.prototype, "userAgentOperatorSuffix", {
        get: function () {
            return this._userAgentOperatorSuffix;
        },
        set: function (value) {
            this._userAgentOperatorSuffix = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudflareProvider.prototype.resetUserAgentOperatorSuffix = function () {
        this._userAgentOperatorSuffix = undefined;
    };
    Object.defineProperty(CloudflareProvider.prototype, "userAgentOperatorSuffixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userAgentOperatorSuffix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudflareProvider.prototype, "alias", {
        get: function () {
            return this._alias;
        },
        set: function (value) {
            this._alias = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudflareProvider.prototype.resetAlias = function () {
        this._alias = undefined;
    };
    Object.defineProperty(CloudflareProvider.prototype, "aliasInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alias;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudflareProvider.prototype.synthesizeAttributes = function () {
        return {
            api_key: cdktf.stringToTerraform(this._apiKey),
            api_token: cdktf.stringToTerraform(this._apiToken),
            api_user_service_key: cdktf.stringToTerraform(this._apiUserServiceKey),
            base_url: cdktf.stringToTerraform(this._baseUrl),
            email: cdktf.stringToTerraform(this._email),
            user_agent_operator_suffix: cdktf.stringToTerraform(this._userAgentOperatorSuffix),
            alias: cdktf.stringToTerraform(this._alias),
        };
    };
    CloudflareProvider.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            api_key: {
                value: cdktf.stringToHclTerraform(this._apiKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            api_token: {
                value: cdktf.stringToHclTerraform(this._apiToken),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            api_user_service_key: {
                value: cdktf.stringToHclTerraform(this._apiUserServiceKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            base_url: {
                value: cdktf.stringToHclTerraform(this._baseUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            email: {
                value: cdktf.stringToHclTerraform(this._email),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_agent_operator_suffix: {
                value: cdktf.stringToHclTerraform(this._userAgentOperatorSuffix),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            alias: {
                value: cdktf.stringToHclTerraform(this._alias),
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
    CloudflareProvider.tfResourceType = "cloudflare";
    return CloudflareProvider;
}(cdktf.TerraformProvider));
exports.CloudflareProvider = CloudflareProvider;
