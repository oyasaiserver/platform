"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/web_analytics_site
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
exports.DataCloudflareWebAnalyticsSite = exports.DataCloudflareWebAnalyticsSiteRulesetOutputReference = exports.DataCloudflareWebAnalyticsSiteRulesList = exports.DataCloudflareWebAnalyticsSiteRulesOutputReference = exports.DataCloudflareWebAnalyticsSiteFilterOutputReference = void 0;
exports.dataCloudflareWebAnalyticsSiteFilterToTerraform = dataCloudflareWebAnalyticsSiteFilterToTerraform;
exports.dataCloudflareWebAnalyticsSiteFilterToHclTerraform = dataCloudflareWebAnalyticsSiteFilterToHclTerraform;
exports.dataCloudflareWebAnalyticsSiteRulesToTerraform = dataCloudflareWebAnalyticsSiteRulesToTerraform;
exports.dataCloudflareWebAnalyticsSiteRulesToHclTerraform = dataCloudflareWebAnalyticsSiteRulesToHclTerraform;
exports.dataCloudflareWebAnalyticsSiteRulesetToTerraform = dataCloudflareWebAnalyticsSiteRulesetToTerraform;
exports.dataCloudflareWebAnalyticsSiteRulesetToHclTerraform = dataCloudflareWebAnalyticsSiteRulesetToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareWebAnalyticsSiteFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        order_by: cdktf.stringToTerraform(struct.orderBy),
    };
}
function dataCloudflareWebAnalyticsSiteFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        order_by: {
            value: cdktf.stringToHclTerraform(struct.orderBy),
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
}
var DataCloudflareWebAnalyticsSiteFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWebAnalyticsSiteFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWebAnalyticsSiteFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWebAnalyticsSiteFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._orderBy !== undefined) {
                hasAnyValues = true;
                internalValueResult.orderBy = this._orderBy;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._orderBy = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._orderBy = value.orderBy;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSiteFilterOutputReference.prototype, "orderBy", {
        get: function () {
            return this.getStringAttribute('order_by');
        },
        set: function (value) {
            this._orderBy = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWebAnalyticsSiteFilterOutputReference.prototype.resetOrderBy = function () {
        this._orderBy = undefined;
    };
    Object.defineProperty(DataCloudflareWebAnalyticsSiteFilterOutputReference.prototype, "orderByInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._orderBy;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWebAnalyticsSiteFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWebAnalyticsSiteFilterOutputReference = DataCloudflareWebAnalyticsSiteFilterOutputReference;
function dataCloudflareWebAnalyticsSiteRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWebAnalyticsSiteRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWebAnalyticsSiteRulesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWebAnalyticsSiteRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWebAnalyticsSiteRulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWebAnalyticsSiteRulesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWebAnalyticsSiteRulesOutputReference.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSiteRulesOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSiteRulesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSiteRulesOutputReference.prototype, "inclusive", {
        // inclusive - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('inclusive');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSiteRulesOutputReference.prototype, "isPaused", {
        // is_paused - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_paused');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSiteRulesOutputReference.prototype, "paths", {
        // paths - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('paths');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSiteRulesOutputReference.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWebAnalyticsSiteRulesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWebAnalyticsSiteRulesOutputReference = DataCloudflareWebAnalyticsSiteRulesOutputReference;
var DataCloudflareWebAnalyticsSiteRulesList = /** @class */ (function (_super) {
    __extends(DataCloudflareWebAnalyticsSiteRulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWebAnalyticsSiteRulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWebAnalyticsSiteRulesList.prototype.get = function (index) {
        return new DataCloudflareWebAnalyticsSiteRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWebAnalyticsSiteRulesList;
}(cdktf.ComplexList));
exports.DataCloudflareWebAnalyticsSiteRulesList = DataCloudflareWebAnalyticsSiteRulesList;
function dataCloudflareWebAnalyticsSiteRulesetToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWebAnalyticsSiteRulesetToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWebAnalyticsSiteRulesetOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWebAnalyticsSiteRulesetOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWebAnalyticsSiteRulesetOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWebAnalyticsSiteRulesetOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWebAnalyticsSiteRulesetOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSiteRulesetOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSiteRulesetOutputReference.prototype, "zoneName", {
        // zone_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSiteRulesetOutputReference.prototype, "zoneTag", {
        // zone_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_tag');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWebAnalyticsSiteRulesetOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWebAnalyticsSiteRulesetOutputReference = DataCloudflareWebAnalyticsSiteRulesetOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/web_analytics_site cloudflare_web_analytics_site}
*/
var DataCloudflareWebAnalyticsSite = /** @class */ (function (_super) {
    __extends(DataCloudflareWebAnalyticsSite, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/web_analytics_site cloudflare_web_analytics_site} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWebAnalyticsSiteConfig = {}
    */
    function DataCloudflareWebAnalyticsSite(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_web_analytics_site',
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
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareWebAnalyticsSiteFilterOutputReference(_this, "filter");
        // rules - computed: true, optional: false, required: false
        _this._rules = new DataCloudflareWebAnalyticsSiteRulesList(_this, "rules", false);
        // ruleset - computed: true, optional: false, required: false
        _this._ruleset = new DataCloudflareWebAnalyticsSiteRulesetOutputReference(_this, "ruleset");
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._siteId = config.siteId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareWebAnalyticsSite resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWebAnalyticsSite to import
    * @param importFromId The id of the existing DataCloudflareWebAnalyticsSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/web_analytics_site#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWebAnalyticsSite to import is found
    */
    DataCloudflareWebAnalyticsSite.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_web_analytics_site", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareWebAnalyticsSite.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWebAnalyticsSite.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareWebAnalyticsSite.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSite.prototype, "autoInstall", {
        // auto_install - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('auto_install');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSite.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSite.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWebAnalyticsSite.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareWebAnalyticsSite.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareWebAnalyticsSite.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSite.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSite.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSite.prototype, "ruleset", {
        get: function () {
            return this._ruleset;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSite.prototype, "siteId", {
        get: function () {
            return this.getStringAttribute('site_id');
        },
        set: function (value) {
            this._siteId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWebAnalyticsSite.prototype.resetSiteId = function () {
        this._siteId = undefined;
    };
    Object.defineProperty(DataCloudflareWebAnalyticsSite.prototype, "siteIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._siteId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSite.prototype, "siteTag", {
        // site_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('site_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSite.prototype, "siteToken", {
        // site_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('site_token');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWebAnalyticsSite.prototype, "snippet", {
        // snippet - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('snippet');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareWebAnalyticsSite.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareWebAnalyticsSiteFilterToTerraform(this._filter.internalValue),
            site_id: cdktf.stringToTerraform(this._siteId),
        };
    };
    DataCloudflareWebAnalyticsSite.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareWebAnalyticsSiteFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareWebAnalyticsSiteFilter",
            },
            site_id: {
                value: cdktf.stringToHclTerraform(this._siteId),
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
    DataCloudflareWebAnalyticsSite.tfResourceType = "cloudflare_web_analytics_site";
    return DataCloudflareWebAnalyticsSite;
}(cdktf.TerraformDataSource));
exports.DataCloudflareWebAnalyticsSite = DataCloudflareWebAnalyticsSite;
