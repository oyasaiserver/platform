"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_scoring_integrations
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
exports.DataCloudflareZeroTrustRiskScoringIntegrations = exports.DataCloudflareZeroTrustRiskScoringIntegrationsResultList = exports.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference = void 0;
exports.dataCloudflareZeroTrustRiskScoringIntegrationsResultToTerraform = dataCloudflareZeroTrustRiskScoringIntegrationsResultToTerraform;
exports.dataCloudflareZeroTrustRiskScoringIntegrationsResultToHclTerraform = dataCloudflareZeroTrustRiskScoringIntegrationsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustRiskScoringIntegrationsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustRiskScoringIntegrationsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.prototype, "accountTag", {
        // account_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.prototype, "active", {
        // active - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('active');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.prototype, "integrationType", {
        // integration_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('integration_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.prototype, "referenceId", {
        // reference_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('reference_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.prototype, "tenantUrl", {
        // tenant_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tenant_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference.prototype, "wellKnownUrl", {
        // well_known_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('well_known_url');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference = DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference;
var DataCloudflareZeroTrustRiskScoringIntegrationsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustRiskScoringIntegrationsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustRiskScoringIntegrationsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustRiskScoringIntegrationsResultList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustRiskScoringIntegrationsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustRiskScoringIntegrationsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustRiskScoringIntegrationsResultList = DataCloudflareZeroTrustRiskScoringIntegrationsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_scoring_integrations cloudflare_zero_trust_risk_scoring_integrations}
*/
var DataCloudflareZeroTrustRiskScoringIntegrations = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustRiskScoringIntegrations, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_scoring_integrations cloudflare_zero_trust_risk_scoring_integrations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustRiskScoringIntegrationsConfig = {}
    */
    function DataCloudflareZeroTrustRiskScoringIntegrations(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_risk_scoring_integrations',
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
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareZeroTrustRiskScoringIntegrationsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustRiskScoringIntegrations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustRiskScoringIntegrations to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustRiskScoringIntegrations that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_scoring_integrations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustRiskScoringIntegrations to import is found
    */
    DataCloudflareZeroTrustRiskScoringIntegrations.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_risk_scoring_integrations", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegrations.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustRiskScoringIntegrations.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegrations.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegrations.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustRiskScoringIntegrations.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegrations.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustRiskScoringIntegrations.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustRiskScoringIntegrations.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareZeroTrustRiskScoringIntegrations.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
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
    DataCloudflareZeroTrustRiskScoringIntegrations.tfResourceType = "cloudflare_zero_trust_risk_scoring_integrations";
    return DataCloudflareZeroTrustRiskScoringIntegrations;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustRiskScoringIntegrations = DataCloudflareZeroTrustRiskScoringIntegrations;
