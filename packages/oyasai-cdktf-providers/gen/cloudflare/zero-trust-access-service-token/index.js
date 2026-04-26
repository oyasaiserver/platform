"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_service_token
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
exports.ZeroTrustAccessServiceToken = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_service_token cloudflare_zero_trust_access_service_token}
*/
var ZeroTrustAccessServiceToken = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessServiceToken, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_service_token cloudflare_zero_trust_access_service_token} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessServiceTokenConfig
    */
    function ZeroTrustAccessServiceToken(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_access_service_token',
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
        _this._clientSecretVersion = config.clientSecretVersion;
        _this._duration = config.duration;
        _this._name = config.name;
        _this._previousClientSecretExpiresAt = config.previousClientSecretExpiresAt;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessServiceToken resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessServiceToken to import
    * @param importFromId The id of the existing ZeroTrustAccessServiceToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_service_token#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessServiceToken to import is found
    */
    ZeroTrustAccessServiceToken.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_service_token", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustAccessServiceToken.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessServiceToken.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustAccessServiceToken.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessServiceToken.prototype, "clientId", {
        // client_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('client_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessServiceToken.prototype, "clientSecret", {
        // client_secret - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('client_secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessServiceToken.prototype, "clientSecretVersion", {
        get: function () {
            return this.getNumberAttribute('client_secret_version');
        },
        set: function (value) {
            this._clientSecretVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessServiceToken.prototype.resetClientSecretVersion = function () {
        this._clientSecretVersion = undefined;
    };
    Object.defineProperty(ZeroTrustAccessServiceToken.prototype, "clientSecretVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientSecretVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessServiceToken.prototype, "duration", {
        get: function () {
            return this.getStringAttribute('duration');
        },
        set: function (value) {
            this._duration = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessServiceToken.prototype.resetDuration = function () {
        this._duration = undefined;
    };
    Object.defineProperty(ZeroTrustAccessServiceToken.prototype, "durationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._duration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessServiceToken.prototype, "expiresAt", {
        // expires_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessServiceToken.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessServiceToken.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessServiceToken.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessServiceToken.prototype, "previousClientSecretExpiresAt", {
        get: function () {
            return this.getStringAttribute('previous_client_secret_expires_at');
        },
        set: function (value) {
            this._previousClientSecretExpiresAt = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessServiceToken.prototype.resetPreviousClientSecretExpiresAt = function () {
        this._previousClientSecretExpiresAt = undefined;
    };
    Object.defineProperty(ZeroTrustAccessServiceToken.prototype, "previousClientSecretExpiresAtInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._previousClientSecretExpiresAt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessServiceToken.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessServiceToken.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(ZeroTrustAccessServiceToken.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustAccessServiceToken.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            client_secret_version: cdktf.numberToTerraform(this._clientSecretVersion),
            duration: cdktf.stringToTerraform(this._duration),
            name: cdktf.stringToTerraform(this._name),
            previous_client_secret_expires_at: cdktf.stringToTerraform(this._previousClientSecretExpiresAt),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    ZeroTrustAccessServiceToken.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            client_secret_version: {
                value: cdktf.numberToHclTerraform(this._clientSecretVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            duration: {
                value: cdktf.stringToHclTerraform(this._duration),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            previous_client_secret_expires_at: {
                value: cdktf.stringToHclTerraform(this._previousClientSecretExpiresAt),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
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
    ZeroTrustAccessServiceToken.tfResourceType = "cloudflare_zero_trust_access_service_token";
    return ZeroTrustAccessServiceToken;
}(cdktf.TerraformResource));
exports.ZeroTrustAccessServiceToken = ZeroTrustAccessServiceToken;
