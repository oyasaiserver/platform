"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_certificate
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
exports.ZeroTrustGatewayCertificate = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_certificate cloudflare_zero_trust_gateway_certificate}
*/
var ZeroTrustGatewayCertificate = /** @class */ (function (_super) {
    __extends(ZeroTrustGatewayCertificate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_certificate cloudflare_zero_trust_gateway_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustGatewayCertificateConfig = {}
    */
    function ZeroTrustGatewayCertificate(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_gateway_certificate',
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
        _this._activate = config.activate;
        _this._validityPeriodDays = config.validityPeriodDays;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustGatewayCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustGatewayCertificate to import
    * @param importFromId The id of the existing ZeroTrustGatewayCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_gateway_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustGatewayCertificate to import is found
    */
    ZeroTrustGatewayCertificate.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_gateway_certificate", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustGatewayCertificate.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayCertificate.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayCertificate.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayCertificate.prototype, "activate", {
        get: function () {
            return this.getBooleanAttribute('activate');
        },
        set: function (value) {
            this._activate = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayCertificate.prototype.resetActivate = function () {
        this._activate = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayCertificate.prototype, "activateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._activate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayCertificate.prototype, "bindingStatus", {
        // binding_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('binding_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayCertificate.prototype, "certificate", {
        // certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayCertificate.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayCertificate.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayCertificate.prototype, "fingerprint", {
        // fingerprint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fingerprint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayCertificate.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayCertificate.prototype, "inUse", {
        // in_use - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('in_use');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayCertificate.prototype, "issuerOrg", {
        // issuer_org - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer_org');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayCertificate.prototype, "issuerRaw", {
        // issuer_raw - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer_raw');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayCertificate.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayCertificate.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayCertificate.prototype, "uploadedOn", {
        // uploaded_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uploaded_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustGatewayCertificate.prototype, "validityPeriodDays", {
        get: function () {
            return this.getNumberAttribute('validity_period_days');
        },
        set: function (value) {
            this._validityPeriodDays = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustGatewayCertificate.prototype.resetValidityPeriodDays = function () {
        this._validityPeriodDays = undefined;
    };
    Object.defineProperty(ZeroTrustGatewayCertificate.prototype, "validityPeriodDaysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._validityPeriodDays;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustGatewayCertificate.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            activate: cdktf.booleanToTerraform(this._activate),
            validity_period_days: cdktf.numberToTerraform(this._validityPeriodDays),
        };
    };
    ZeroTrustGatewayCertificate.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            activate: {
                value: cdktf.booleanToHclTerraform(this._activate),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            validity_period_days: {
                value: cdktf.numberToHclTerraform(this._validityPeriodDays),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    ZeroTrustGatewayCertificate.tfResourceType = "cloudflare_zero_trust_gateway_certificate";
    return ZeroTrustGatewayCertificate;
}(cdktf.TerraformResource));
exports.ZeroTrustGatewayCertificate = ZeroTrustGatewayCertificate;
