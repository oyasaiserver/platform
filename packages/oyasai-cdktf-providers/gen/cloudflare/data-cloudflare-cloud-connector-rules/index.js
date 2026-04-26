"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloud_connector_rules
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
exports.DataCloudflareCloudConnectorRules = exports.DataCloudflareCloudConnectorRulesRulesList = exports.DataCloudflareCloudConnectorRulesRulesOutputReference = exports.DataCloudflareCloudConnectorRulesRulesParametersOutputReference = void 0;
exports.dataCloudflareCloudConnectorRulesRulesParametersToTerraform = dataCloudflareCloudConnectorRulesRulesParametersToTerraform;
exports.dataCloudflareCloudConnectorRulesRulesParametersToHclTerraform = dataCloudflareCloudConnectorRulesRulesParametersToHclTerraform;
exports.dataCloudflareCloudConnectorRulesRulesToTerraform = dataCloudflareCloudConnectorRulesRulesToTerraform;
exports.dataCloudflareCloudConnectorRulesRulesToHclTerraform = dataCloudflareCloudConnectorRulesRulesToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareCloudConnectorRulesRulesParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCloudConnectorRulesRulesParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCloudConnectorRulesRulesParametersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCloudConnectorRulesRulesParametersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareCloudConnectorRulesRulesParametersOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCloudConnectorRulesRulesParametersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCloudConnectorRulesRulesParametersOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCloudConnectorRulesRulesParametersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCloudConnectorRulesRulesParametersOutputReference = DataCloudflareCloudConnectorRulesRulesParametersOutputReference;
function dataCloudflareCloudConnectorRulesRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCloudConnectorRulesRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCloudConnectorRulesRulesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCloudConnectorRulesRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCloudConnectorRulesRulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // parameters - computed: true, optional: false, required: false
        _this._parameters = new DataCloudflareCloudConnectorRulesRulesParametersOutputReference(_this, "parameters");
        return _this;
    }
    Object.defineProperty(DataCloudflareCloudConnectorRulesRulesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCloudConnectorRulesRulesOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudConnectorRulesRulesOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudConnectorRulesRulesOutputReference.prototype, "expression", {
        // expression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudConnectorRulesRulesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudConnectorRulesRulesOutputReference.prototype, "parameters", {
        get: function () {
            return this._parameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudConnectorRulesRulesOutputReference.prototype, "provider", {
        // provider - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('provider');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCloudConnectorRulesRulesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCloudConnectorRulesRulesOutputReference = DataCloudflareCloudConnectorRulesRulesOutputReference;
var DataCloudflareCloudConnectorRulesRulesList = /** @class */ (function (_super) {
    __extends(DataCloudflareCloudConnectorRulesRulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCloudConnectorRulesRulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareCloudConnectorRulesRulesList.prototype.get = function (index) {
        return new DataCloudflareCloudConnectorRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareCloudConnectorRulesRulesList;
}(cdktf.ComplexList));
exports.DataCloudflareCloudConnectorRulesRulesList = DataCloudflareCloudConnectorRulesRulesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloud_connector_rules cloudflare_cloud_connector_rules}
*/
var DataCloudflareCloudConnectorRules = /** @class */ (function (_super) {
    __extends(DataCloudflareCloudConnectorRules, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloud_connector_rules cloudflare_cloud_connector_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCloudConnectorRulesConfig = {}
    */
    function DataCloudflareCloudConnectorRules(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_cloud_connector_rules',
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
        // rules - computed: true, optional: false, required: false
        _this._rules = new DataCloudflareCloudConnectorRulesRulesList(_this, "rules", false);
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareCloudConnectorRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCloudConnectorRules to import
    * @param importFromId The id of the existing DataCloudflareCloudConnectorRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloud_connector_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCloudConnectorRules to import is found
    */
    DataCloudflareCloudConnectorRules.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloud_connector_rules", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareCloudConnectorRules.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudConnectorRules.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCloudConnectorRules.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCloudConnectorRules.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareCloudConnectorRules.prototype, "zoneIdInput", {
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
    DataCloudflareCloudConnectorRules.prototype.synthesizeAttributes = function () {
        return {
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareCloudConnectorRules.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
    DataCloudflareCloudConnectorRules.tfResourceType = "cloudflare_cloud_connector_rules";
    return DataCloudflareCloudConnectorRules;
}(cdktf.TerraformDataSource));
exports.DataCloudflareCloudConnectorRules = DataCloudflareCloudConnectorRules;
