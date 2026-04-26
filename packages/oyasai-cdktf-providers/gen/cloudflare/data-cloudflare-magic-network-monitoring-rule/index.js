"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_rule
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
exports.DataCloudflareMagicNetworkMonitoringRule = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule}
*/
var DataCloudflareMagicNetworkMonitoringRule = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicNetworkMonitoringRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicNetworkMonitoringRuleConfig
    */
    function DataCloudflareMagicNetworkMonitoringRule(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_magic_network_monitoring_rule',
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
        _this._ruleId = config.ruleId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicNetworkMonitoringRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicNetworkMonitoringRule to import
    * @param importFromId The id of the existing DataCloudflareMagicNetworkMonitoringRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicNetworkMonitoringRule to import is found
    */
    DataCloudflareMagicNetworkMonitoringRule.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_network_monitoring_rule", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRule.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareMagicNetworkMonitoringRule.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRule.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRule.prototype, "automaticAdvertisement", {
        // automatic_advertisement - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('automatic_advertisement');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRule.prototype, "bandwidthThreshold", {
        // bandwidth_threshold - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('bandwidth_threshold');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRule.prototype, "duration", {
        // duration - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('duration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRule.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRule.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRule.prototype, "packetThreshold", {
        // packet_threshold - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('packet_threshold');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRule.prototype, "prefixMatch", {
        // prefix_match - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prefix_match');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRule.prototype, "prefixes", {
        // prefixes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('prefixes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRule.prototype, "ruleId", {
        get: function () {
            return this.getStringAttribute('rule_id');
        },
        set: function (value) {
            this._ruleId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRule.prototype, "ruleIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ruleId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRule.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRule.prototype, "zscoreSensitivity", {
        // zscore_sensitivity - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zscore_sensitivity');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRule.prototype, "zscoreTarget", {
        // zscore_target - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zscore_target');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareMagicNetworkMonitoringRule.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            rule_id: cdktf.stringToTerraform(this._ruleId),
        };
    };
    DataCloudflareMagicNetworkMonitoringRule.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rule_id: {
                value: cdktf.stringToHclTerraform(this._ruleId),
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
    DataCloudflareMagicNetworkMonitoringRule.tfResourceType = "cloudflare_magic_network_monitoring_rule";
    return DataCloudflareMagicNetworkMonitoringRule;
}(cdktf.TerraformDataSource));
exports.DataCloudflareMagicNetworkMonitoringRule = DataCloudflareMagicNetworkMonitoringRule;
