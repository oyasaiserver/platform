"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_rules
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
exports.DataCloudflareMagicNetworkMonitoringRules = exports.DataCloudflareMagicNetworkMonitoringRulesResultList = exports.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference = void 0;
exports.dataCloudflareMagicNetworkMonitoringRulesResultToTerraform = dataCloudflareMagicNetworkMonitoringRulesResultToTerraform;
exports.dataCloudflareMagicNetworkMonitoringRulesResultToHclTerraform = dataCloudflareMagicNetworkMonitoringRulesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareMagicNetworkMonitoringRulesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicNetworkMonitoringRulesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicNetworkMonitoringRulesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicNetworkMonitoringRulesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareMagicNetworkMonitoringRulesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.prototype, "automaticAdvertisement", {
        // automatic_advertisement - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('automatic_advertisement');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.prototype, "bandwidthThreshold", {
        // bandwidth_threshold - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('bandwidth_threshold');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.prototype, "duration", {
        // duration - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('duration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.prototype, "packetThreshold", {
        // packet_threshold - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('packet_threshold');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.prototype, "prefixMatch", {
        // prefix_match - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prefix_match');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.prototype, "prefixes", {
        // prefixes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('prefixes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.prototype, "zscoreSensitivity", {
        // zscore_sensitivity - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zscore_sensitivity');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.prototype, "zscoreTarget", {
        // zscore_target - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zscore_target');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicNetworkMonitoringRulesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference = DataCloudflareMagicNetworkMonitoringRulesResultOutputReference;
var DataCloudflareMagicNetworkMonitoringRulesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicNetworkMonitoringRulesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareMagicNetworkMonitoringRulesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareMagicNetworkMonitoringRulesResultList.prototype.get = function (index) {
        return new DataCloudflareMagicNetworkMonitoringRulesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareMagicNetworkMonitoringRulesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareMagicNetworkMonitoringRulesResultList = DataCloudflareMagicNetworkMonitoringRulesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_rules cloudflare_magic_network_monitoring_rules}
*/
var DataCloudflareMagicNetworkMonitoringRules = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicNetworkMonitoringRules, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_rules cloudflare_magic_network_monitoring_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicNetworkMonitoringRulesConfig = {}
    */
    function DataCloudflareMagicNetworkMonitoringRules(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_magic_network_monitoring_rules',
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
        _this._result = new DataCloudflareMagicNetworkMonitoringRulesResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicNetworkMonitoringRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicNetworkMonitoringRules to import
    * @param importFromId The id of the existing DataCloudflareMagicNetworkMonitoringRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicNetworkMonitoringRules to import is found
    */
    DataCloudflareMagicNetworkMonitoringRules.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_network_monitoring_rules", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRules.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareMagicNetworkMonitoringRules.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRules.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRules.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareMagicNetworkMonitoringRules.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRules.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicNetworkMonitoringRules.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareMagicNetworkMonitoringRules.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareMagicNetworkMonitoringRules.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareMagicNetworkMonitoringRules.tfResourceType = "cloudflare_magic_network_monitoring_rules";
    return DataCloudflareMagicNetworkMonitoringRules;
}(cdktf.TerraformDataSource));
exports.DataCloudflareMagicNetworkMonitoringRules = DataCloudflareMagicNetworkMonitoringRules;
