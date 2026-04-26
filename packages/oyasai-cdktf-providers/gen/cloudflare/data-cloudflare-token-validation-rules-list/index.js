"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules_list
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
exports.DataCloudflareTokenValidationRulesList = exports.DataCloudflareTokenValidationRulesListResultList = exports.DataCloudflareTokenValidationRulesListResultOutputReference = exports.DataCloudflareTokenValidationRulesListResultSelectorOutputReference = exports.DataCloudflareTokenValidationRulesListResultSelectorIncludeList = exports.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference = exports.DataCloudflareTokenValidationRulesListResultSelectorExcludeList = exports.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference = void 0;
exports.dataCloudflareTokenValidationRulesListResultSelectorExcludeToTerraform = dataCloudflareTokenValidationRulesListResultSelectorExcludeToTerraform;
exports.dataCloudflareTokenValidationRulesListResultSelectorExcludeToHclTerraform = dataCloudflareTokenValidationRulesListResultSelectorExcludeToHclTerraform;
exports.dataCloudflareTokenValidationRulesListResultSelectorIncludeToTerraform = dataCloudflareTokenValidationRulesListResultSelectorIncludeToTerraform;
exports.dataCloudflareTokenValidationRulesListResultSelectorIncludeToHclTerraform = dataCloudflareTokenValidationRulesListResultSelectorIncludeToHclTerraform;
exports.dataCloudflareTokenValidationRulesListResultSelectorToTerraform = dataCloudflareTokenValidationRulesListResultSelectorToTerraform;
exports.dataCloudflareTokenValidationRulesListResultSelectorToHclTerraform = dataCloudflareTokenValidationRulesListResultSelectorToHclTerraform;
exports.dataCloudflareTokenValidationRulesListResultToTerraform = dataCloudflareTokenValidationRulesListResultToTerraform;
exports.dataCloudflareTokenValidationRulesListResultToHclTerraform = dataCloudflareTokenValidationRulesListResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareTokenValidationRulesListResultSelectorExcludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareTokenValidationRulesListResultSelectorExcludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference.prototype, "operationIds", {
        // operation_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('operation_ids');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference = DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference;
var DataCloudflareTokenValidationRulesListResultSelectorExcludeList = /** @class */ (function (_super) {
    __extends(DataCloudflareTokenValidationRulesListResultSelectorExcludeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareTokenValidationRulesListResultSelectorExcludeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareTokenValidationRulesListResultSelectorExcludeList.prototype.get = function (index) {
        return new DataCloudflareTokenValidationRulesListResultSelectorExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareTokenValidationRulesListResultSelectorExcludeList;
}(cdktf.ComplexList));
exports.DataCloudflareTokenValidationRulesListResultSelectorExcludeList = DataCloudflareTokenValidationRulesListResultSelectorExcludeList;
function dataCloudflareTokenValidationRulesListResultSelectorIncludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareTokenValidationRulesListResultSelectorIncludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference = DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference;
var DataCloudflareTokenValidationRulesListResultSelectorIncludeList = /** @class */ (function (_super) {
    __extends(DataCloudflareTokenValidationRulesListResultSelectorIncludeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareTokenValidationRulesListResultSelectorIncludeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareTokenValidationRulesListResultSelectorIncludeList.prototype.get = function (index) {
        return new DataCloudflareTokenValidationRulesListResultSelectorIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareTokenValidationRulesListResultSelectorIncludeList;
}(cdktf.ComplexList));
exports.DataCloudflareTokenValidationRulesListResultSelectorIncludeList = DataCloudflareTokenValidationRulesListResultSelectorIncludeList;
function dataCloudflareTokenValidationRulesListResultSelectorToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareTokenValidationRulesListResultSelectorToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareTokenValidationRulesListResultSelectorOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareTokenValidationRulesListResultSelectorOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareTokenValidationRulesListResultSelectorOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // exclude - computed: true, optional: false, required: false
        _this._exclude = new DataCloudflareTokenValidationRulesListResultSelectorExcludeList(_this, "exclude", false);
        // include - computed: true, optional: false, required: false
        _this._include = new DataCloudflareTokenValidationRulesListResultSelectorIncludeList(_this, "include", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareTokenValidationRulesListResultSelectorOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareTokenValidationRulesListResultSelectorOutputReference.prototype, "exclude", {
        get: function () {
            return this._exclude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRulesListResultSelectorOutputReference.prototype, "include", {
        get: function () {
            return this._include;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareTokenValidationRulesListResultSelectorOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareTokenValidationRulesListResultSelectorOutputReference = DataCloudflareTokenValidationRulesListResultSelectorOutputReference;
function dataCloudflareTokenValidationRulesListResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareTokenValidationRulesListResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareTokenValidationRulesListResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareTokenValidationRulesListResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareTokenValidationRulesListResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // selector - computed: true, optional: false, required: false
        _this._selector = new DataCloudflareTokenValidationRulesListResultSelectorOutputReference(_this, "selector");
        return _this;
    }
    Object.defineProperty(DataCloudflareTokenValidationRulesListResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareTokenValidationRulesListResultOutputReference.prototype, "action", {
        // action - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('action');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRulesListResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRulesListResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRulesListResultOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRulesListResultOutputReference.prototype, "expression", {
        // expression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRulesListResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRulesListResultOutputReference.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRulesListResultOutputReference.prototype, "selector", {
        get: function () {
            return this._selector;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRulesListResultOutputReference.prototype, "title", {
        // title - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('title');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareTokenValidationRulesListResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareTokenValidationRulesListResultOutputReference = DataCloudflareTokenValidationRulesListResultOutputReference;
var DataCloudflareTokenValidationRulesListResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareTokenValidationRulesListResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareTokenValidationRulesListResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareTokenValidationRulesListResultList.prototype.get = function (index) {
        return new DataCloudflareTokenValidationRulesListResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareTokenValidationRulesListResultList;
}(cdktf.ComplexList));
exports.DataCloudflareTokenValidationRulesListResultList = DataCloudflareTokenValidationRulesListResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules_list cloudflare_token_validation_rules_list}
*/
var DataCloudflareTokenValidationRulesList = /** @class */ (function (_super) {
    __extends(DataCloudflareTokenValidationRulesList, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules_list cloudflare_token_validation_rules_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareTokenValidationRulesListConfig = {}
    */
    function DataCloudflareTokenValidationRulesList(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_token_validation_rules_list',
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
        _this._result = new DataCloudflareTokenValidationRulesListResultList(_this, "result", false);
        _this._action = config.action;
        _this._enabled = config.enabled;
        _this._host = config.host;
        _this._hostname = config.hostname;
        _this._id = config.id;
        _this._maxItems = config.maxItems;
        _this._ruleId = config.ruleId;
        _this._tokenConfiguration = config.tokenConfiguration;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareTokenValidationRulesList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareTokenValidationRulesList to import
    * @param importFromId The id of the existing DataCloudflareTokenValidationRulesList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareTokenValidationRulesList to import is found
    */
    DataCloudflareTokenValidationRulesList.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_token_validation_rules_list", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareTokenValidationRulesList.prototype, "action", {
        get: function () {
            return this.getStringAttribute('action');
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTokenValidationRulesList.prototype.resetAction = function () {
        this._action = undefined;
    };
    Object.defineProperty(DataCloudflareTokenValidationRulesList.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRulesList.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTokenValidationRulesList.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(DataCloudflareTokenValidationRulesList.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRulesList.prototype, "host", {
        get: function () {
            return this.getStringAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTokenValidationRulesList.prototype.resetHost = function () {
        this._host = undefined;
    };
    Object.defineProperty(DataCloudflareTokenValidationRulesList.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRulesList.prototype, "hostname", {
        get: function () {
            return this.getStringAttribute('hostname');
        },
        set: function (value) {
            this._hostname = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTokenValidationRulesList.prototype.resetHostname = function () {
        this._hostname = undefined;
    };
    Object.defineProperty(DataCloudflareTokenValidationRulesList.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRulesList.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTokenValidationRulesList.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataCloudflareTokenValidationRulesList.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRulesList.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTokenValidationRulesList.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareTokenValidationRulesList.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRulesList.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRulesList.prototype, "ruleId", {
        get: function () {
            return this.getStringAttribute('rule_id');
        },
        set: function (value) {
            this._ruleId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTokenValidationRulesList.prototype.resetRuleId = function () {
        this._ruleId = undefined;
    };
    Object.defineProperty(DataCloudflareTokenValidationRulesList.prototype, "ruleIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ruleId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRulesList.prototype, "tokenConfiguration", {
        get: function () {
            return this.getListAttribute('token_configuration');
        },
        set: function (value) {
            this._tokenConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTokenValidationRulesList.prototype.resetTokenConfiguration = function () {
        this._tokenConfiguration = undefined;
    };
    Object.defineProperty(DataCloudflareTokenValidationRulesList.prototype, "tokenConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tokenConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRulesList.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTokenValidationRulesList.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareTokenValidationRulesList.prototype, "zoneIdInput", {
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
    DataCloudflareTokenValidationRulesList.prototype.synthesizeAttributes = function () {
        return {
            action: cdktf.stringToTerraform(this._action),
            enabled: cdktf.booleanToTerraform(this._enabled),
            host: cdktf.stringToTerraform(this._host),
            hostname: cdktf.stringToTerraform(this._hostname),
            id: cdktf.stringToTerraform(this._id),
            max_items: cdktf.numberToTerraform(this._maxItems),
            rule_id: cdktf.stringToTerraform(this._ruleId),
            token_configuration: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tokenConfiguration),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareTokenValidationRulesList.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            action: {
                value: cdktf.stringToHclTerraform(this._action),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            host: {
                value: cdktf.stringToHclTerraform(this._host),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hostname: {
                value: cdktf.stringToHclTerraform(this._hostname),
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
            rule_id: {
                value: cdktf.stringToHclTerraform(this._ruleId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            token_configuration: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tokenConfiguration),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
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
    DataCloudflareTokenValidationRulesList.tfResourceType = "cloudflare_token_validation_rules_list";
    return DataCloudflareTokenValidationRulesList;
}(cdktf.TerraformDataSource));
exports.DataCloudflareTokenValidationRulesList = DataCloudflareTokenValidationRulesList;
