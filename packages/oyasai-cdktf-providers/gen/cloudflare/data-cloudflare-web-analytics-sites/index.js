"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/web_analytics_sites
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
exports.DataCloudflareWebAnalyticsSites = exports.DataCloudflareWebAnalyticsSitesResultList = exports.DataCloudflareWebAnalyticsSitesResultOutputReference = exports.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference = exports.DataCloudflareWebAnalyticsSitesResultRulesList = exports.DataCloudflareWebAnalyticsSitesResultRulesOutputReference = void 0;
exports.dataCloudflareWebAnalyticsSitesResultRulesToTerraform = dataCloudflareWebAnalyticsSitesResultRulesToTerraform;
exports.dataCloudflareWebAnalyticsSitesResultRulesToHclTerraform = dataCloudflareWebAnalyticsSitesResultRulesToHclTerraform;
exports.dataCloudflareWebAnalyticsSitesResultRulesetToTerraform = dataCloudflareWebAnalyticsSitesResultRulesetToTerraform;
exports.dataCloudflareWebAnalyticsSitesResultRulesetToHclTerraform = dataCloudflareWebAnalyticsSitesResultRulesetToHclTerraform;
exports.dataCloudflareWebAnalyticsSitesResultToTerraform = dataCloudflareWebAnalyticsSitesResultToTerraform;
exports.dataCloudflareWebAnalyticsSitesResultToHclTerraform = dataCloudflareWebAnalyticsSitesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareWebAnalyticsSitesResultRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWebAnalyticsSitesResultRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWebAnalyticsSitesResultRulesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWebAnalyticsSitesResultRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWebAnalyticsSitesResultRulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWebAnalyticsSitesResultRulesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWebAnalyticsSitesResultRulesOutputReference.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSitesResultRulesOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSitesResultRulesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSitesResultRulesOutputReference.prototype, "inclusive", {
        // inclusive - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('inclusive');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSitesResultRulesOutputReference.prototype, "isPaused", {
        // is_paused - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_paused');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSitesResultRulesOutputReference.prototype, "paths", {
        // paths - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('paths');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSitesResultRulesOutputReference.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWebAnalyticsSitesResultRulesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWebAnalyticsSitesResultRulesOutputReference = DataCloudflareWebAnalyticsSitesResultRulesOutputReference;
var DataCloudflareWebAnalyticsSitesResultRulesList = /** @class */ (function (_super) {
    __extends(DataCloudflareWebAnalyticsSitesResultRulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWebAnalyticsSitesResultRulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWebAnalyticsSitesResultRulesList.prototype.get = function (index) {
        return new DataCloudflareWebAnalyticsSitesResultRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWebAnalyticsSitesResultRulesList;
}(cdktf.ComplexList));
exports.DataCloudflareWebAnalyticsSitesResultRulesList = DataCloudflareWebAnalyticsSitesResultRulesList;
function dataCloudflareWebAnalyticsSitesResultRulesetToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWebAnalyticsSitesResultRulesetToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWebAnalyticsSitesResultRulesetOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWebAnalyticsSitesResultRulesetOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWebAnalyticsSitesResultRulesetOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.prototype, "zoneName", {
        // zone_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSitesResultRulesetOutputReference.prototype, "zoneTag", {
        // zone_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_tag');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWebAnalyticsSitesResultRulesetOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWebAnalyticsSitesResultRulesetOutputReference = DataCloudflareWebAnalyticsSitesResultRulesetOutputReference;
function dataCloudflareWebAnalyticsSitesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWebAnalyticsSitesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWebAnalyticsSitesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWebAnalyticsSitesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWebAnalyticsSitesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // rules - computed: true, optional: false, required: false
        _this._rules = new DataCloudflareWebAnalyticsSitesResultRulesList(_this, "rules", false);
        // ruleset - computed: true, optional: false, required: false
        _this._ruleset = new DataCloudflareWebAnalyticsSitesResultRulesetOutputReference(_this, "ruleset");
        return _this;
    }
    Object.defineProperty(DataCloudflareWebAnalyticsSitesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWebAnalyticsSitesResultOutputReference.prototype, "autoInstall", {
        // auto_install - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('auto_install');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSitesResultOutputReference.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSitesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSitesResultOutputReference.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSitesResultOutputReference.prototype, "ruleset", {
        get: function () {
            return this._ruleset;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSitesResultOutputReference.prototype, "siteTag", {
        // site_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('site_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSitesResultOutputReference.prototype, "siteToken", {
        // site_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('site_token');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSitesResultOutputReference.prototype, "snippet", {
        // snippet - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('snippet');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWebAnalyticsSitesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWebAnalyticsSitesResultOutputReference = DataCloudflareWebAnalyticsSitesResultOutputReference;
var DataCloudflareWebAnalyticsSitesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareWebAnalyticsSitesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWebAnalyticsSitesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWebAnalyticsSitesResultList.prototype.get = function (index) {
        return new DataCloudflareWebAnalyticsSitesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWebAnalyticsSitesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareWebAnalyticsSitesResultList = DataCloudflareWebAnalyticsSitesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/web_analytics_sites cloudflare_web_analytics_sites}
*/
var DataCloudflareWebAnalyticsSites = /** @class */ (function (_super) {
    __extends(DataCloudflareWebAnalyticsSites, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/web_analytics_sites cloudflare_web_analytics_sites} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWebAnalyticsSitesConfig = {}
    */
    function DataCloudflareWebAnalyticsSites(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_web_analytics_sites',
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
        _this._result = new DataCloudflareWebAnalyticsSitesResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        _this._orderBy = config.orderBy;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareWebAnalyticsSites resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWebAnalyticsSites to import
    * @param importFromId The id of the existing DataCloudflareWebAnalyticsSites that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/web_analytics_sites#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWebAnalyticsSites to import is found
    */
    DataCloudflareWebAnalyticsSites.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_web_analytics_sites", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareWebAnalyticsSites.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWebAnalyticsSites.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareWebAnalyticsSites.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSites.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWebAnalyticsSites.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareWebAnalyticsSites.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSites.prototype, "orderBy", {
        get: function () {
            return this.getStringAttribute('order_by');
        },
        set: function (value) {
            this._orderBy = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWebAnalyticsSites.prototype.resetOrderBy = function () {
        this._orderBy = undefined;
    };
    Object.defineProperty(DataCloudflareWebAnalyticsSites.prototype, "orderByInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._orderBy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSites.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareWebAnalyticsSites.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
            order_by: cdktf.stringToTerraform(this._orderBy),
        };
    };
    DataCloudflareWebAnalyticsSites.prototype.synthesizeHclAttributes = function () {
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
            order_by: {
                value: cdktf.stringToHclTerraform(this._orderBy),
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
    DataCloudflareWebAnalyticsSites.tfResourceType = "cloudflare_web_analytics_sites";
    return DataCloudflareWebAnalyticsSites;
}(cdktf.TerraformDataSource));
exports.DataCloudflareWebAnalyticsSites = DataCloudflareWebAnalyticsSites;
