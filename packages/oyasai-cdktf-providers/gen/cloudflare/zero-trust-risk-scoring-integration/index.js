"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_scoring_integration
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
exports.ZeroTrustRiskScoringIntegration = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_scoring_integration cloudflare_zero_trust_risk_scoring_integration}
*/
var ZeroTrustRiskScoringIntegration = /** @class */ (function (_super) {
    __extends(ZeroTrustRiskScoringIntegration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_scoring_integration cloudflare_zero_trust_risk_scoring_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustRiskScoringIntegrationConfig
    */
    function ZeroTrustRiskScoringIntegration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_risk_scoring_integration',
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
        _this._active = config.active;
        _this._integrationType = config.integrationType;
        _this._referenceId = config.referenceId;
        _this._tenantUrl = config.tenantUrl;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustRiskScoringIntegration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustRiskScoringIntegration to import
    * @param importFromId The id of the existing ZeroTrustRiskScoringIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_scoring_integration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustRiskScoringIntegration to import is found
    */
    ZeroTrustRiskScoringIntegration.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_risk_scoring_integration", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustRiskScoringIntegration.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustRiskScoringIntegration.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustRiskScoringIntegration.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustRiskScoringIntegration.prototype, "accountTag", {
        // account_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustRiskScoringIntegration.prototype, "active", {
        get: function () {
            return this.getBooleanAttribute('active');
        },
        set: function (value) {
            this._active = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustRiskScoringIntegration.prototype.resetActive = function () {
        this._active = undefined;
    };
    Object.defineProperty(ZeroTrustRiskScoringIntegration.prototype, "activeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._active;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustRiskScoringIntegration.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustRiskScoringIntegration.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustRiskScoringIntegration.prototype, "integrationType", {
        get: function () {
            return this.getStringAttribute('integration_type');
        },
        set: function (value) {
            this._integrationType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustRiskScoringIntegration.prototype, "integrationTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._integrationType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustRiskScoringIntegration.prototype, "referenceId", {
        get: function () {
            return this.getStringAttribute('reference_id');
        },
        set: function (value) {
            this._referenceId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustRiskScoringIntegration.prototype.resetReferenceId = function () {
        this._referenceId = undefined;
    };
    Object.defineProperty(ZeroTrustRiskScoringIntegration.prototype, "referenceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._referenceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustRiskScoringIntegration.prototype, "tenantUrl", {
        get: function () {
            return this.getStringAttribute('tenant_url');
        },
        set: function (value) {
            this._tenantUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustRiskScoringIntegration.prototype, "tenantUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tenantUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustRiskScoringIntegration.prototype, "wellKnownUrl", {
        // well_known_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('well_known_url');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustRiskScoringIntegration.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            active: cdktf.booleanToTerraform(this._active),
            integration_type: cdktf.stringToTerraform(this._integrationType),
            reference_id: cdktf.stringToTerraform(this._referenceId),
            tenant_url: cdktf.stringToTerraform(this._tenantUrl),
        };
    };
    ZeroTrustRiskScoringIntegration.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            active: {
                value: cdktf.booleanToHclTerraform(this._active),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            integration_type: {
                value: cdktf.stringToHclTerraform(this._integrationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            reference_id: {
                value: cdktf.stringToHclTerraform(this._referenceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tenant_url: {
                value: cdktf.stringToHclTerraform(this._tenantUrl),
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
    ZeroTrustRiskScoringIntegration.tfResourceType = "cloudflare_zero_trust_risk_scoring_integration";
    return ZeroTrustRiskScoringIntegration;
}(cdktf.TerraformResource));
exports.ZeroTrustRiskScoringIntegration = ZeroTrustRiskScoringIntegration;
