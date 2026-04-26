"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_site
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
exports.WebAnalyticsSite = exports.WebAnalyticsSiteRulesetOutputReference = exports.WebAnalyticsSiteRulesList = exports.WebAnalyticsSiteRulesOutputReference = void 0;
exports.webAnalyticsSiteRulesToTerraform = webAnalyticsSiteRulesToTerraform;
exports.webAnalyticsSiteRulesToHclTerraform = webAnalyticsSiteRulesToHclTerraform;
exports.webAnalyticsSiteRulesetToTerraform = webAnalyticsSiteRulesetToTerraform;
exports.webAnalyticsSiteRulesetToHclTerraform = webAnalyticsSiteRulesetToHclTerraform;
var cdktf = require("cdktf");
function webAnalyticsSiteRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function webAnalyticsSiteRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var WebAnalyticsSiteRulesOutputReference = /** @class */ (function (_super) {
    __extends(WebAnalyticsSiteRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WebAnalyticsSiteRulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WebAnalyticsSiteRulesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(WebAnalyticsSiteRulesOutputReference.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsSiteRulesOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsSiteRulesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsSiteRulesOutputReference.prototype, "inclusive", {
        // inclusive - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('inclusive');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsSiteRulesOutputReference.prototype, "isPaused", {
        // is_paused - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_paused');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsSiteRulesOutputReference.prototype, "paths", {
        // paths - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('paths');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsSiteRulesOutputReference.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    return WebAnalyticsSiteRulesOutputReference;
}(cdktf.ComplexObject));
exports.WebAnalyticsSiteRulesOutputReference = WebAnalyticsSiteRulesOutputReference;
var WebAnalyticsSiteRulesList = /** @class */ (function (_super) {
    __extends(WebAnalyticsSiteRulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WebAnalyticsSiteRulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WebAnalyticsSiteRulesList.prototype.get = function (index) {
        return new WebAnalyticsSiteRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WebAnalyticsSiteRulesList;
}(cdktf.ComplexList));
exports.WebAnalyticsSiteRulesList = WebAnalyticsSiteRulesList;
function webAnalyticsSiteRulesetToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function webAnalyticsSiteRulesetToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var WebAnalyticsSiteRulesetOutputReference = /** @class */ (function (_super) {
    __extends(WebAnalyticsSiteRulesetOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WebAnalyticsSiteRulesetOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WebAnalyticsSiteRulesetOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(WebAnalyticsSiteRulesetOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsSiteRulesetOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsSiteRulesetOutputReference.prototype, "zoneName", {
        // zone_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsSiteRulesetOutputReference.prototype, "zoneTag", {
        // zone_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_tag');
        },
        enumerable: false,
        configurable: true
    });
    return WebAnalyticsSiteRulesetOutputReference;
}(cdktf.ComplexObject));
exports.WebAnalyticsSiteRulesetOutputReference = WebAnalyticsSiteRulesetOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_site cloudflare_web_analytics_site}
*/
var WebAnalyticsSite = /** @class */ (function (_super) {
    __extends(WebAnalyticsSite, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_site cloudflare_web_analytics_site} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WebAnalyticsSiteConfig = {}
    */
    function WebAnalyticsSite(scope, id, config) {
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
        // rules - computed: true, optional: false, required: false
        _this._rules = new WebAnalyticsSiteRulesList(_this, "rules", false);
        // ruleset - computed: true, optional: false, required: false
        _this._ruleset = new WebAnalyticsSiteRulesetOutputReference(_this, "ruleset");
        _this._accountId = config.accountId;
        _this._autoInstall = config.autoInstall;
        _this._enabled = config.enabled;
        _this._host = config.host;
        _this._lite = config.lite;
        _this._zoneTag = config.zoneTag;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a WebAnalyticsSite resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WebAnalyticsSite to import
    * @param importFromId The id of the existing WebAnalyticsSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_site#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WebAnalyticsSite to import is found
    */
    WebAnalyticsSite.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_web_analytics_site", importId: importFromId, provider: provider });
    };
    Object.defineProperty(WebAnalyticsSite.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    WebAnalyticsSite.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(WebAnalyticsSite.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsSite.prototype, "autoInstall", {
        get: function () {
            return this.getBooleanAttribute('auto_install');
        },
        set: function (value) {
            this._autoInstall = value;
        },
        enumerable: false,
        configurable: true
    });
    WebAnalyticsSite.prototype.resetAutoInstall = function () {
        this._autoInstall = undefined;
    };
    Object.defineProperty(WebAnalyticsSite.prototype, "autoInstallInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoInstall;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsSite.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsSite.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    WebAnalyticsSite.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(WebAnalyticsSite.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsSite.prototype, "host", {
        get: function () {
            return this.getStringAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    WebAnalyticsSite.prototype.resetHost = function () {
        this._host = undefined;
    };
    Object.defineProperty(WebAnalyticsSite.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsSite.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsSite.prototype, "lite", {
        get: function () {
            return this.getBooleanAttribute('lite');
        },
        set: function (value) {
            this._lite = value;
        },
        enumerable: false,
        configurable: true
    });
    WebAnalyticsSite.prototype.resetLite = function () {
        this._lite = undefined;
    };
    Object.defineProperty(WebAnalyticsSite.prototype, "liteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lite;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsSite.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsSite.prototype, "ruleset", {
        get: function () {
            return this._ruleset;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsSite.prototype, "siteTag", {
        // site_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('site_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsSite.prototype, "siteToken", {
        // site_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('site_token');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsSite.prototype, "snippet", {
        // snippet - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('snippet');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsSite.prototype, "zoneTag", {
        get: function () {
            return this.getStringAttribute('zone_tag');
        },
        set: function (value) {
            this._zoneTag = value;
        },
        enumerable: false,
        configurable: true
    });
    WebAnalyticsSite.prototype.resetZoneTag = function () {
        this._zoneTag = undefined;
    };
    Object.defineProperty(WebAnalyticsSite.prototype, "zoneTagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneTag;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WebAnalyticsSite.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            auto_install: cdktf.booleanToTerraform(this._autoInstall),
            enabled: cdktf.booleanToTerraform(this._enabled),
            host: cdktf.stringToTerraform(this._host),
            lite: cdktf.booleanToTerraform(this._lite),
            zone_tag: cdktf.stringToTerraform(this._zoneTag),
        };
    };
    WebAnalyticsSite.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auto_install: {
                value: cdktf.booleanToHclTerraform(this._autoInstall),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
            lite: {
                value: cdktf.booleanToHclTerraform(this._lite),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            zone_tag: {
                value: cdktf.stringToHclTerraform(this._zoneTag),
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
    WebAnalyticsSite.tfResourceType = "cloudflare_web_analytics_site";
    return WebAnalyticsSite;
}(cdktf.TerraformResource));
exports.WebAnalyticsSite = WebAnalyticsSite;
