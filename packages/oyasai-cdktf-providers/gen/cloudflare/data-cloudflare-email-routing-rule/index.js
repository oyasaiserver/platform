"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_rule
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
exports.DataCloudflareEmailRoutingRule = exports.DataCloudflareEmailRoutingRuleMatchersList = exports.DataCloudflareEmailRoutingRuleMatchersOutputReference = exports.DataCloudflareEmailRoutingRuleFilterOutputReference = exports.DataCloudflareEmailRoutingRuleActionsList = exports.DataCloudflareEmailRoutingRuleActionsOutputReference = void 0;
exports.dataCloudflareEmailRoutingRuleActionsToTerraform = dataCloudflareEmailRoutingRuleActionsToTerraform;
exports.dataCloudflareEmailRoutingRuleActionsToHclTerraform = dataCloudflareEmailRoutingRuleActionsToHclTerraform;
exports.dataCloudflareEmailRoutingRuleFilterToTerraform = dataCloudflareEmailRoutingRuleFilterToTerraform;
exports.dataCloudflareEmailRoutingRuleFilterToHclTerraform = dataCloudflareEmailRoutingRuleFilterToHclTerraform;
exports.dataCloudflareEmailRoutingRuleMatchersToTerraform = dataCloudflareEmailRoutingRuleMatchersToTerraform;
exports.dataCloudflareEmailRoutingRuleMatchersToHclTerraform = dataCloudflareEmailRoutingRuleMatchersToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareEmailRoutingRuleActionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareEmailRoutingRuleActionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareEmailRoutingRuleActionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingRuleActionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailRoutingRuleActionsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareEmailRoutingRuleActionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareEmailRoutingRuleActionsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingRuleActionsOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareEmailRoutingRuleActionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareEmailRoutingRuleActionsOutputReference = DataCloudflareEmailRoutingRuleActionsOutputReference;
var DataCloudflareEmailRoutingRuleActionsList = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingRuleActionsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailRoutingRuleActionsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareEmailRoutingRuleActionsList.prototype.get = function (index) {
        return new DataCloudflareEmailRoutingRuleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareEmailRoutingRuleActionsList;
}(cdktf.ComplexList));
exports.DataCloudflareEmailRoutingRuleActionsList = DataCloudflareEmailRoutingRuleActionsList;
function dataCloudflareEmailRoutingRuleFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
function dataCloudflareEmailRoutingRuleFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var DataCloudflareEmailRoutingRuleFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingRuleFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareEmailRoutingRuleFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareEmailRoutingRuleFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._enabled = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._enabled = value.enabled;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingRuleFilterOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailRoutingRuleFilterOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(DataCloudflareEmailRoutingRuleFilterOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareEmailRoutingRuleFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareEmailRoutingRuleFilterOutputReference = DataCloudflareEmailRoutingRuleFilterOutputReference;
function dataCloudflareEmailRoutingRuleMatchersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareEmailRoutingRuleMatchersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareEmailRoutingRuleMatchersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingRuleMatchersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailRoutingRuleMatchersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareEmailRoutingRuleMatchersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareEmailRoutingRuleMatchersOutputReference.prototype, "field", {
        // field - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('field');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingRuleMatchersOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingRuleMatchersOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareEmailRoutingRuleMatchersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareEmailRoutingRuleMatchersOutputReference = DataCloudflareEmailRoutingRuleMatchersOutputReference;
var DataCloudflareEmailRoutingRuleMatchersList = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingRuleMatchersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailRoutingRuleMatchersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareEmailRoutingRuleMatchersList.prototype.get = function (index) {
        return new DataCloudflareEmailRoutingRuleMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareEmailRoutingRuleMatchersList;
}(cdktf.ComplexList));
exports.DataCloudflareEmailRoutingRuleMatchersList = DataCloudflareEmailRoutingRuleMatchersList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_rule cloudflare_email_routing_rule}
*/
var DataCloudflareEmailRoutingRule = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_rule cloudflare_email_routing_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareEmailRoutingRuleConfig = {}
    */
    function DataCloudflareEmailRoutingRule(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_email_routing_rule',
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
        // ==========
        // ATTRIBUTES
        // ==========
        // actions - computed: true, optional: false, required: false
        _this._actions = new DataCloudflareEmailRoutingRuleActionsList(_this, "actions", false);
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareEmailRoutingRuleFilterOutputReference(_this, "filter");
        // matchers - computed: true, optional: false, required: false
        _this._matchers = new DataCloudflareEmailRoutingRuleMatchersList(_this, "matchers", false);
        _this._filter.internalValue = config.filter;
        _this._ruleIdentifier = config.ruleIdentifier;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareEmailRoutingRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareEmailRoutingRule to import
    * @param importFromId The id of the existing DataCloudflareEmailRoutingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareEmailRoutingRule to import is found
    */
    DataCloudflareEmailRoutingRule.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_routing_rule", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareEmailRoutingRule.prototype, "actions", {
        get: function () {
            return this._actions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingRule.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingRule.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailRoutingRule.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareEmailRoutingRule.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareEmailRoutingRule.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingRule.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingRule.prototype, "matchers", {
        get: function () {
            return this._matchers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingRule.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingRule.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingRule.prototype, "ruleIdentifier", {
        get: function () {
            return this.getStringAttribute('rule_identifier');
        },
        set: function (value) {
            this._ruleIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailRoutingRule.prototype.resetRuleIdentifier = function () {
        this._ruleIdentifier = undefined;
    };
    Object.defineProperty(DataCloudflareEmailRoutingRule.prototype, "ruleIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ruleIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingRule.prototype, "tag", {
        // tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingRule.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailRoutingRule.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareEmailRoutingRule.prototype, "zoneIdInput", {
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
    DataCloudflareEmailRoutingRule.prototype.synthesizeAttributes = function () {
        return {
            filter: dataCloudflareEmailRoutingRuleFilterToTerraform(this._filter.internalValue),
            rule_identifier: cdktf.stringToTerraform(this._ruleIdentifier),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareEmailRoutingRule.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            filter: {
                value: dataCloudflareEmailRoutingRuleFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareEmailRoutingRuleFilter",
            },
            rule_identifier: {
                value: cdktf.stringToHclTerraform(this._ruleIdentifier),
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
    DataCloudflareEmailRoutingRule.tfResourceType = "cloudflare_email_routing_rule";
    return DataCloudflareEmailRoutingRule;
}(cdktf.TerraformDataSource));
exports.DataCloudflareEmailRoutingRule = DataCloudflareEmailRoutingRule;
