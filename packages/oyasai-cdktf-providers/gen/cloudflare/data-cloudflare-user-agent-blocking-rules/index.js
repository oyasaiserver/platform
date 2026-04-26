"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_agent_blocking_rules
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
exports.DataCloudflareUserAgentBlockingRules = exports.DataCloudflareUserAgentBlockingRulesResultList = exports.DataCloudflareUserAgentBlockingRulesResultOutputReference = exports.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference = void 0;
exports.dataCloudflareUserAgentBlockingRulesResultConfigurationToTerraform = dataCloudflareUserAgentBlockingRulesResultConfigurationToTerraform;
exports.dataCloudflareUserAgentBlockingRulesResultConfigurationToHclTerraform = dataCloudflareUserAgentBlockingRulesResultConfigurationToHclTerraform;
exports.dataCloudflareUserAgentBlockingRulesResultToTerraform = dataCloudflareUserAgentBlockingRulesResultToTerraform;
exports.dataCloudflareUserAgentBlockingRulesResultToHclTerraform = dataCloudflareUserAgentBlockingRulesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareUserAgentBlockingRulesResultConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareUserAgentBlockingRulesResultConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.prototype, "target", {
        // target - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference = DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference;
function dataCloudflareUserAgentBlockingRulesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareUserAgentBlockingRulesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareUserAgentBlockingRulesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareUserAgentBlockingRulesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserAgentBlockingRulesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // configuration - computed: true, optional: false, required: false
        _this._configuration = new DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference(_this, "configuration");
        return _this;
    }
    Object.defineProperty(DataCloudflareUserAgentBlockingRulesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareUserAgentBlockingRulesResultOutputReference.prototype, "configuration", {
        get: function () {
            return this._configuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserAgentBlockingRulesResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserAgentBlockingRulesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserAgentBlockingRulesResultOutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserAgentBlockingRulesResultOutputReference.prototype, "paused", {
        // paused - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('paused');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareUserAgentBlockingRulesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareUserAgentBlockingRulesResultOutputReference = DataCloudflareUserAgentBlockingRulesResultOutputReference;
var DataCloudflareUserAgentBlockingRulesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareUserAgentBlockingRulesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserAgentBlockingRulesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareUserAgentBlockingRulesResultList.prototype.get = function (index) {
        return new DataCloudflareUserAgentBlockingRulesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareUserAgentBlockingRulesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareUserAgentBlockingRulesResultList = DataCloudflareUserAgentBlockingRulesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_agent_blocking_rules cloudflare_user_agent_blocking_rules}
*/
var DataCloudflareUserAgentBlockingRules = /** @class */ (function (_super) {
    __extends(DataCloudflareUserAgentBlockingRules, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_agent_blocking_rules cloudflare_user_agent_blocking_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareUserAgentBlockingRulesConfig = {}
    */
    function DataCloudflareUserAgentBlockingRules(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_user_agent_blocking_rules',
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
        _this._result = new DataCloudflareUserAgentBlockingRulesResultList(_this, "result", false);
        _this._description = config.description;
        _this._maxItems = config.maxItems;
        _this._paused = config.paused;
        _this._userAgent = config.userAgent;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareUserAgentBlockingRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareUserAgentBlockingRules to import
    * @param importFromId The id of the existing DataCloudflareUserAgentBlockingRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_agent_blocking_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareUserAgentBlockingRules to import is found
    */
    DataCloudflareUserAgentBlockingRules.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_user_agent_blocking_rules", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareUserAgentBlockingRules.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareUserAgentBlockingRules.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(DataCloudflareUserAgentBlockingRules.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserAgentBlockingRules.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareUserAgentBlockingRules.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareUserAgentBlockingRules.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserAgentBlockingRules.prototype, "paused", {
        get: function () {
            return this.getBooleanAttribute('paused');
        },
        set: function (value) {
            this._paused = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareUserAgentBlockingRules.prototype.resetPaused = function () {
        this._paused = undefined;
    };
    Object.defineProperty(DataCloudflareUserAgentBlockingRules.prototype, "pausedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._paused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserAgentBlockingRules.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserAgentBlockingRules.prototype, "userAgent", {
        get: function () {
            return this.getStringAttribute('user_agent');
        },
        set: function (value) {
            this._userAgent = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareUserAgentBlockingRules.prototype.resetUserAgent = function () {
        this._userAgent = undefined;
    };
    Object.defineProperty(DataCloudflareUserAgentBlockingRules.prototype, "userAgentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userAgent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserAgentBlockingRules.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareUserAgentBlockingRules.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareUserAgentBlockingRules.prototype, "zoneIdInput", {
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
    DataCloudflareUserAgentBlockingRules.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            max_items: cdktf.numberToTerraform(this._maxItems),
            paused: cdktf.booleanToTerraform(this._paused),
            user_agent: cdktf.stringToTerraform(this._userAgent),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareUserAgentBlockingRules.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            description: {
                value: cdktf.stringToHclTerraform(this._description),
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
            paused: {
                value: cdktf.booleanToHclTerraform(this._paused),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            user_agent: {
                value: cdktf.stringToHclTerraform(this._userAgent),
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
    DataCloudflareUserAgentBlockingRules.tfResourceType = "cloudflare_user_agent_blocking_rules";
    return DataCloudflareUserAgentBlockingRules;
}(cdktf.TerraformDataSource));
exports.DataCloudflareUserAgentBlockingRules = DataCloudflareUserAgentBlockingRules;
