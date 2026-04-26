"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_scoring_integration
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
exports.DataCloudflareZeroTrustRiskScoringIntegration = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_scoring_integration cloudflare_zero_trust_risk_scoring_integration}
*/
var DataCloudflareZeroTrustRiskScoringIntegration = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustRiskScoringIntegration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_scoring_integration cloudflare_zero_trust_risk_scoring_integration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustRiskScoringIntegrationConfig
    */
    function DataCloudflareZeroTrustRiskScoringIntegration(scope, id, config) {
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
        _this._integrationId = config.integrationId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustRiskScoringIntegration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustRiskScoringIntegration to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustRiskScoringIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_scoring_integration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustRiskScoringIntegration to import is found
    */
    DataCloudflareZeroTrustRiskScoringIntegration.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_risk_scoring_integration", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegration.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustRiskScoringIntegration.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegration.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegration.prototype, "accountTag", {
        // account_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegration.prototype, "active", {
        // active - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('active');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegration.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegration.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegration.prototype, "integrationId", {
        get: function () {
            return this.getStringAttribute('integration_id');
        },
        set: function (value) {
            this._integrationId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegration.prototype, "integrationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._integrationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegration.prototype, "integrationType", {
        // integration_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('integration_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegration.prototype, "referenceId", {
        // reference_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('reference_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegration.prototype, "tenantUrl", {
        // tenant_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tenant_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegration.prototype, "wellKnownUrl", {
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
    DataCloudflareZeroTrustRiskScoringIntegration.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            integration_id: cdktf.stringToTerraform(this._integrationId),
        };
    };
    DataCloudflareZeroTrustRiskScoringIntegration.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            integration_id: {
                value: cdktf.stringToHclTerraform(this._integrationId),
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
    DataCloudflareZeroTrustRiskScoringIntegration.tfResourceType = "cloudflare_zero_trust_risk_scoring_integration";
    return DataCloudflareZeroTrustRiskScoringIntegration;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustRiskScoringIntegration = DataCloudflareZeroTrustRiskScoringIntegration;
