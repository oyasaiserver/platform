"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_rule
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
exports.MagicNetworkMonitoringRule = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule}
*/
var MagicNetworkMonitoringRule = /** @class */ (function (_super) {
    __extends(MagicNetworkMonitoringRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicNetworkMonitoringRuleConfig
    */
    function MagicNetworkMonitoringRule(scope, id, config) {
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
        _this._automaticAdvertisement = config.automaticAdvertisement;
        _this._bandwidthThreshold = config.bandwidthThreshold;
        _this._duration = config.duration;
        _this._name = config.name;
        _this._packetThreshold = config.packetThreshold;
        _this._prefixMatch = config.prefixMatch;
        _this._prefixes = config.prefixes;
        _this._type = config.type;
        _this._zscoreSensitivity = config.zscoreSensitivity;
        _this._zscoreTarget = config.zscoreTarget;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a MagicNetworkMonitoringRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicNetworkMonitoringRule to import
    * @param importFromId The id of the existing MagicNetworkMonitoringRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicNetworkMonitoringRule to import is found
    */
    MagicNetworkMonitoringRule.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_network_monitoring_rule", importId: importFromId, provider: provider });
    };
    Object.defineProperty(MagicNetworkMonitoringRule.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicNetworkMonitoringRule.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(MagicNetworkMonitoringRule.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringRule.prototype, "automaticAdvertisement", {
        get: function () {
            return this.getBooleanAttribute('automatic_advertisement');
        },
        set: function (value) {
            this._automaticAdvertisement = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringRule.prototype, "automaticAdvertisementInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._automaticAdvertisement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringRule.prototype, "bandwidthThreshold", {
        get: function () {
            return this.getNumberAttribute('bandwidth_threshold');
        },
        set: function (value) {
            this._bandwidthThreshold = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicNetworkMonitoringRule.prototype.resetBandwidthThreshold = function () {
        this._bandwidthThreshold = undefined;
    };
    Object.defineProperty(MagicNetworkMonitoringRule.prototype, "bandwidthThresholdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bandwidthThreshold;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringRule.prototype, "duration", {
        get: function () {
            return this.getStringAttribute('duration');
        },
        set: function (value) {
            this._duration = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicNetworkMonitoringRule.prototype.resetDuration = function () {
        this._duration = undefined;
    };
    Object.defineProperty(MagicNetworkMonitoringRule.prototype, "durationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._duration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringRule.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringRule.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringRule.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringRule.prototype, "packetThreshold", {
        get: function () {
            return this.getNumberAttribute('packet_threshold');
        },
        set: function (value) {
            this._packetThreshold = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicNetworkMonitoringRule.prototype.resetPacketThreshold = function () {
        this._packetThreshold = undefined;
    };
    Object.defineProperty(MagicNetworkMonitoringRule.prototype, "packetThresholdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._packetThreshold;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringRule.prototype, "prefixMatch", {
        get: function () {
            return this.getStringAttribute('prefix_match');
        },
        set: function (value) {
            this._prefixMatch = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicNetworkMonitoringRule.prototype.resetPrefixMatch = function () {
        this._prefixMatch = undefined;
    };
    Object.defineProperty(MagicNetworkMonitoringRule.prototype, "prefixMatchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._prefixMatch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringRule.prototype, "prefixes", {
        get: function () {
            return this.getListAttribute('prefixes');
        },
        set: function (value) {
            this._prefixes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringRule.prototype, "prefixesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._prefixes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringRule.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringRule.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringRule.prototype, "zscoreSensitivity", {
        get: function () {
            return this.getStringAttribute('zscore_sensitivity');
        },
        set: function (value) {
            this._zscoreSensitivity = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicNetworkMonitoringRule.prototype.resetZscoreSensitivity = function () {
        this._zscoreSensitivity = undefined;
    };
    Object.defineProperty(MagicNetworkMonitoringRule.prototype, "zscoreSensitivityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zscoreSensitivity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicNetworkMonitoringRule.prototype, "zscoreTarget", {
        get: function () {
            return this.getStringAttribute('zscore_target');
        },
        set: function (value) {
            this._zscoreTarget = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicNetworkMonitoringRule.prototype.resetZscoreTarget = function () {
        this._zscoreTarget = undefined;
    };
    Object.defineProperty(MagicNetworkMonitoringRule.prototype, "zscoreTargetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zscoreTarget;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    MagicNetworkMonitoringRule.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            automatic_advertisement: cdktf.booleanToTerraform(this._automaticAdvertisement),
            bandwidth_threshold: cdktf.numberToTerraform(this._bandwidthThreshold),
            duration: cdktf.stringToTerraform(this._duration),
            name: cdktf.stringToTerraform(this._name),
            packet_threshold: cdktf.numberToTerraform(this._packetThreshold),
            prefix_match: cdktf.stringToTerraform(this._prefixMatch),
            prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prefixes),
            type: cdktf.stringToTerraform(this._type),
            zscore_sensitivity: cdktf.stringToTerraform(this._zscoreSensitivity),
            zscore_target: cdktf.stringToTerraform(this._zscoreTarget),
        };
    };
    MagicNetworkMonitoringRule.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            automatic_advertisement: {
                value: cdktf.booleanToHclTerraform(this._automaticAdvertisement),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            bandwidth_threshold: {
                value: cdktf.numberToHclTerraform(this._bandwidthThreshold),
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
            packet_threshold: {
                value: cdktf.numberToHclTerraform(this._packetThreshold),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            prefix_match: {
                value: cdktf.stringToHclTerraform(this._prefixMatch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            prefixes: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prefixes),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zscore_sensitivity: {
                value: cdktf.stringToHclTerraform(this._zscoreSensitivity),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zscore_target: {
                value: cdktf.stringToHclTerraform(this._zscoreTarget),
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
    MagicNetworkMonitoringRule.tfResourceType = "cloudflare_magic_network_monitoring_rule";
    return MagicNetworkMonitoringRule;
}(cdktf.TerraformResource));
exports.MagicNetworkMonitoringRule = MagicNetworkMonitoringRule;
