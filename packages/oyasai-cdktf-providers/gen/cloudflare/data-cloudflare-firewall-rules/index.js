"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/firewall_rules
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
exports.DataCloudflareFirewallRules = exports.DataCloudflareFirewallRulesResultList = exports.DataCloudflareFirewallRulesResultOutputReference = exports.DataCloudflareFirewallRulesResultFilterOutputReference = void 0;
exports.dataCloudflareFirewallRulesResultFilterToTerraform = dataCloudflareFirewallRulesResultFilterToTerraform;
exports.dataCloudflareFirewallRulesResultFilterToHclTerraform = dataCloudflareFirewallRulesResultFilterToHclTerraform;
exports.dataCloudflareFirewallRulesResultToTerraform = dataCloudflareFirewallRulesResultToTerraform;
exports.dataCloudflareFirewallRulesResultToHclTerraform = dataCloudflareFirewallRulesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareFirewallRulesResultFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareFirewallRulesResultFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareFirewallRulesResultFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareFirewallRulesResultFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareFirewallRulesResultFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareFirewallRulesResultFilterOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareFirewallRulesResultFilterOutputReference.prototype, "deleted", {
        // deleted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('deleted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareFirewallRulesResultFilterOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareFirewallRulesResultFilterOutputReference.prototype, "expression", {
        // expression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareFirewallRulesResultFilterOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareFirewallRulesResultFilterOutputReference.prototype, "paused", {
        // paused - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('paused');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareFirewallRulesResultFilterOutputReference.prototype, "ref", {
        // ref - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ref');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareFirewallRulesResultFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareFirewallRulesResultFilterOutputReference = DataCloudflareFirewallRulesResultFilterOutputReference;
function dataCloudflareFirewallRulesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareFirewallRulesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareFirewallRulesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareFirewallRulesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareFirewallRulesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // filter - computed: true, optional: false, required: false
        _this._filter = new DataCloudflareFirewallRulesResultFilterOutputReference(_this, "filter");
        return _this;
    }
    Object.defineProperty(DataCloudflareFirewallRulesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareFirewallRulesResultOutputReference.prototype, "action", {
        // action - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('action');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareFirewallRulesResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareFirewallRulesResultOutputReference.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareFirewallRulesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareFirewallRulesResultOutputReference.prototype, "paused", {
        // paused - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('paused');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareFirewallRulesResultOutputReference.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareFirewallRulesResultOutputReference.prototype, "products", {
        // products - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('products');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareFirewallRulesResultOutputReference.prototype, "ref", {
        // ref - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ref');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareFirewallRulesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareFirewallRulesResultOutputReference = DataCloudflareFirewallRulesResultOutputReference;
var DataCloudflareFirewallRulesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareFirewallRulesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareFirewallRulesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareFirewallRulesResultList.prototype.get = function (index) {
        return new DataCloudflareFirewallRulesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareFirewallRulesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareFirewallRulesResultList = DataCloudflareFirewallRulesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/firewall_rules cloudflare_firewall_rules}
*/
var DataCloudflareFirewallRules = /** @class */ (function (_super) {
    __extends(DataCloudflareFirewallRules, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/firewall_rules cloudflare_firewall_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareFirewallRulesConfig = {}
    */
    function DataCloudflareFirewallRules(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_firewall_rules',
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
        _this._result = new DataCloudflareFirewallRulesResultList(_this, "result", false);
        _this._action = config.action;
        _this._description = config.description;
        _this._id = config.id;
        _this._maxItems = config.maxItems;
        _this._paused = config.paused;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareFirewallRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareFirewallRules to import
    * @param importFromId The id of the existing DataCloudflareFirewallRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/firewall_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareFirewallRules to import is found
    */
    DataCloudflareFirewallRules.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_firewall_rules", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareFirewallRules.prototype, "action", {
        get: function () {
            return this.getStringAttribute('action');
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareFirewallRules.prototype.resetAction = function () {
        this._action = undefined;
    };
    Object.defineProperty(DataCloudflareFirewallRules.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareFirewallRules.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareFirewallRules.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(DataCloudflareFirewallRules.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareFirewallRules.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareFirewallRules.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataCloudflareFirewallRules.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareFirewallRules.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareFirewallRules.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareFirewallRules.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareFirewallRules.prototype, "paused", {
        get: function () {
            return this.getBooleanAttribute('paused');
        },
        set: function (value) {
            this._paused = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareFirewallRules.prototype.resetPaused = function () {
        this._paused = undefined;
    };
    Object.defineProperty(DataCloudflareFirewallRules.prototype, "pausedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._paused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareFirewallRules.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareFirewallRules.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareFirewallRules.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareFirewallRules.prototype, "zoneIdInput", {
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
    DataCloudflareFirewallRules.prototype.synthesizeAttributes = function () {
        return {
            action: cdktf.stringToTerraform(this._action),
            description: cdktf.stringToTerraform(this._description),
            id: cdktf.stringToTerraform(this._id),
            max_items: cdktf.numberToTerraform(this._maxItems),
            paused: cdktf.booleanToTerraform(this._paused),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareFirewallRules.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            action: {
                value: cdktf.stringToHclTerraform(this._action),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
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
    DataCloudflareFirewallRules.tfResourceType = "cloudflare_firewall_rules";
    return DataCloudflareFirewallRules;
}(cdktf.TerraformDataSource));
exports.DataCloudflareFirewallRules = DataCloudflareFirewallRules;
