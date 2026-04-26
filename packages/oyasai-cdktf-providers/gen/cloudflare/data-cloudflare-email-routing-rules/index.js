"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_rules
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
exports.DataCloudflareEmailRoutingRules = exports.DataCloudflareEmailRoutingRulesResultList = exports.DataCloudflareEmailRoutingRulesResultOutputReference = exports.DataCloudflareEmailRoutingRulesResultMatchersList = exports.DataCloudflareEmailRoutingRulesResultMatchersOutputReference = exports.DataCloudflareEmailRoutingRulesResultActionsList = exports.DataCloudflareEmailRoutingRulesResultActionsOutputReference = void 0;
exports.dataCloudflareEmailRoutingRulesResultActionsToTerraform = dataCloudflareEmailRoutingRulesResultActionsToTerraform;
exports.dataCloudflareEmailRoutingRulesResultActionsToHclTerraform = dataCloudflareEmailRoutingRulesResultActionsToHclTerraform;
exports.dataCloudflareEmailRoutingRulesResultMatchersToTerraform = dataCloudflareEmailRoutingRulesResultMatchersToTerraform;
exports.dataCloudflareEmailRoutingRulesResultMatchersToHclTerraform = dataCloudflareEmailRoutingRulesResultMatchersToHclTerraform;
exports.dataCloudflareEmailRoutingRulesResultToTerraform = dataCloudflareEmailRoutingRulesResultToTerraform;
exports.dataCloudflareEmailRoutingRulesResultToHclTerraform = dataCloudflareEmailRoutingRulesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareEmailRoutingRulesResultActionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareEmailRoutingRulesResultActionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareEmailRoutingRulesResultActionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingRulesResultActionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailRoutingRulesResultActionsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareEmailRoutingRulesResultActionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareEmailRoutingRulesResultActionsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingRulesResultActionsOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareEmailRoutingRulesResultActionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareEmailRoutingRulesResultActionsOutputReference = DataCloudflareEmailRoutingRulesResultActionsOutputReference;
var DataCloudflareEmailRoutingRulesResultActionsList = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingRulesResultActionsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailRoutingRulesResultActionsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareEmailRoutingRulesResultActionsList.prototype.get = function (index) {
        return new DataCloudflareEmailRoutingRulesResultActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareEmailRoutingRulesResultActionsList;
}(cdktf.ComplexList));
exports.DataCloudflareEmailRoutingRulesResultActionsList = DataCloudflareEmailRoutingRulesResultActionsList;
function dataCloudflareEmailRoutingRulesResultMatchersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareEmailRoutingRulesResultMatchersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareEmailRoutingRulesResultMatchersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingRulesResultMatchersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailRoutingRulesResultMatchersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareEmailRoutingRulesResultMatchersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareEmailRoutingRulesResultMatchersOutputReference.prototype, "field", {
        // field - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('field');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingRulesResultMatchersOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingRulesResultMatchersOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareEmailRoutingRulesResultMatchersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareEmailRoutingRulesResultMatchersOutputReference = DataCloudflareEmailRoutingRulesResultMatchersOutputReference;
var DataCloudflareEmailRoutingRulesResultMatchersList = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingRulesResultMatchersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailRoutingRulesResultMatchersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareEmailRoutingRulesResultMatchersList.prototype.get = function (index) {
        return new DataCloudflareEmailRoutingRulesResultMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareEmailRoutingRulesResultMatchersList;
}(cdktf.ComplexList));
exports.DataCloudflareEmailRoutingRulesResultMatchersList = DataCloudflareEmailRoutingRulesResultMatchersList;
function dataCloudflareEmailRoutingRulesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareEmailRoutingRulesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareEmailRoutingRulesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingRulesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailRoutingRulesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // actions - computed: true, optional: false, required: false
        _this._actions = new DataCloudflareEmailRoutingRulesResultActionsList(_this, "actions", false);
        // matchers - computed: true, optional: false, required: false
        _this._matchers = new DataCloudflareEmailRoutingRulesResultMatchersList(_this, "matchers", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareEmailRoutingRulesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareEmailRoutingRulesResultOutputReference.prototype, "actions", {
        get: function () {
            return this._actions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingRulesResultOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingRulesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingRulesResultOutputReference.prototype, "matchers", {
        get: function () {
            return this._matchers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingRulesResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingRulesResultOutputReference.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingRulesResultOutputReference.prototype, "tag", {
        // tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tag');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareEmailRoutingRulesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareEmailRoutingRulesResultOutputReference = DataCloudflareEmailRoutingRulesResultOutputReference;
var DataCloudflareEmailRoutingRulesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingRulesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailRoutingRulesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareEmailRoutingRulesResultList.prototype.get = function (index) {
        return new DataCloudflareEmailRoutingRulesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareEmailRoutingRulesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareEmailRoutingRulesResultList = DataCloudflareEmailRoutingRulesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_rules cloudflare_email_routing_rules}
*/
var DataCloudflareEmailRoutingRules = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingRules, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_rules cloudflare_email_routing_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareEmailRoutingRulesConfig = {}
    */
    function DataCloudflareEmailRoutingRules(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_email_routing_rules',
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
        _this._result = new DataCloudflareEmailRoutingRulesResultList(_this, "result", false);
        _this._enabled = config.enabled;
        _this._maxItems = config.maxItems;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareEmailRoutingRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareEmailRoutingRules to import
    * @param importFromId The id of the existing DataCloudflareEmailRoutingRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareEmailRoutingRules to import is found
    */
    DataCloudflareEmailRoutingRules.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_routing_rules", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareEmailRoutingRules.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailRoutingRules.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(DataCloudflareEmailRoutingRules.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingRules.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailRoutingRules.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareEmailRoutingRules.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingRules.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingRules.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailRoutingRules.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareEmailRoutingRules.prototype, "zoneIdInput", {
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
    DataCloudflareEmailRoutingRules.prototype.synthesizeAttributes = function () {
        return {
            enabled: cdktf.booleanToTerraform(this._enabled),
            max_items: cdktf.numberToTerraform(this._maxItems),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareEmailRoutingRules.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    DataCloudflareEmailRoutingRules.tfResourceType = "cloudflare_email_routing_rules";
    return DataCloudflareEmailRoutingRules;
}(cdktf.TerraformDataSource));
exports.DataCloudflareEmailRoutingRules = DataCloudflareEmailRoutingRules;
