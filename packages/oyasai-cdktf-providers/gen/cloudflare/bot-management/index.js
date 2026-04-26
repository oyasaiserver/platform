"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management
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
exports.BotManagement = exports.BotManagementStaleZoneConfigurationOutputReference = void 0;
exports.botManagementStaleZoneConfigurationToTerraform = botManagementStaleZoneConfigurationToTerraform;
exports.botManagementStaleZoneConfigurationToHclTerraform = botManagementStaleZoneConfigurationToHclTerraform;
var cdktf = require("cdktf");
function botManagementStaleZoneConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function botManagementStaleZoneConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var BotManagementStaleZoneConfigurationOutputReference = /** @class */ (function (_super) {
    __extends(BotManagementStaleZoneConfigurationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function BotManagementStaleZoneConfigurationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(BotManagementStaleZoneConfigurationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(BotManagementStaleZoneConfigurationOutputReference.prototype, "fightMode", {
        // fight_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('fight_mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotManagementStaleZoneConfigurationOutputReference.prototype, "optimizeWordpress", {
        // optimize_wordpress - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('optimize_wordpress');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotManagementStaleZoneConfigurationOutputReference.prototype, "sbfmDefinitelyAutomated", {
        // sbfm_definitely_automated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sbfm_definitely_automated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotManagementStaleZoneConfigurationOutputReference.prototype, "sbfmLikelyAutomated", {
        // sbfm_likely_automated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sbfm_likely_automated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotManagementStaleZoneConfigurationOutputReference.prototype, "sbfmStaticResourceProtection", {
        // sbfm_static_resource_protection - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sbfm_static_resource_protection');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotManagementStaleZoneConfigurationOutputReference.prototype, "sbfmVerifiedBots", {
        // sbfm_verified_bots - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sbfm_verified_bots');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotManagementStaleZoneConfigurationOutputReference.prototype, "suppressSessionScore", {
        // suppress_session_score - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('suppress_session_score');
        },
        enumerable: false,
        configurable: true
    });
    return BotManagementStaleZoneConfigurationOutputReference;
}(cdktf.ComplexObject));
exports.BotManagementStaleZoneConfigurationOutputReference = BotManagementStaleZoneConfigurationOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management cloudflare_bot_management}
*/
var BotManagement = /** @class */ (function (_super) {
    __extends(BotManagement, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management cloudflare_bot_management} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BotManagementConfig
    */
    function BotManagement(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_bot_management',
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
        // stale_zone_configuration - computed: true, optional: false, required: false
        _this._staleZoneConfiguration = new BotManagementStaleZoneConfigurationOutputReference(_this, "stale_zone_configuration");
        _this._aiBotsProtection = config.aiBotsProtection;
        _this._autoUpdateModel = config.autoUpdateModel;
        _this._bmCookieEnabled = config.bmCookieEnabled;
        _this._cfRobotsVariant = config.cfRobotsVariant;
        _this._contentBotsProtection = config.contentBotsProtection;
        _this._crawlerProtection = config.crawlerProtection;
        _this._enableJs = config.enableJs;
        _this._fightMode = config.fightMode;
        _this._isRobotsTxtManaged = config.isRobotsTxtManaged;
        _this._optimizeWordpress = config.optimizeWordpress;
        _this._sbfmDefinitelyAutomated = config.sbfmDefinitelyAutomated;
        _this._sbfmLikelyAutomated = config.sbfmLikelyAutomated;
        _this._sbfmStaticResourceProtection = config.sbfmStaticResourceProtection;
        _this._sbfmVerifiedBots = config.sbfmVerifiedBots;
        _this._suppressSessionScore = config.suppressSessionScore;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a BotManagement resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BotManagement to import
    * @param importFromId The id of the existing BotManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BotManagement to import is found
    */
    BotManagement.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_bot_management", importId: importFromId, provider: provider });
    };
    Object.defineProperty(BotManagement.prototype, "aiBotsProtection", {
        get: function () {
            return this.getStringAttribute('ai_bots_protection');
        },
        set: function (value) {
            this._aiBotsProtection = value;
        },
        enumerable: false,
        configurable: true
    });
    BotManagement.prototype.resetAiBotsProtection = function () {
        this._aiBotsProtection = undefined;
    };
    Object.defineProperty(BotManagement.prototype, "aiBotsProtectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._aiBotsProtection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotManagement.prototype, "autoUpdateModel", {
        get: function () {
            return this.getBooleanAttribute('auto_update_model');
        },
        set: function (value) {
            this._autoUpdateModel = value;
        },
        enumerable: false,
        configurable: true
    });
    BotManagement.prototype.resetAutoUpdateModel = function () {
        this._autoUpdateModel = undefined;
    };
    Object.defineProperty(BotManagement.prototype, "autoUpdateModelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoUpdateModel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotManagement.prototype, "bmCookieEnabled", {
        get: function () {
            return this.getBooleanAttribute('bm_cookie_enabled');
        },
        set: function (value) {
            this._bmCookieEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    BotManagement.prototype.resetBmCookieEnabled = function () {
        this._bmCookieEnabled = undefined;
    };
    Object.defineProperty(BotManagement.prototype, "bmCookieEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bmCookieEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotManagement.prototype, "cfRobotsVariant", {
        get: function () {
            return this.getStringAttribute('cf_robots_variant');
        },
        set: function (value) {
            this._cfRobotsVariant = value;
        },
        enumerable: false,
        configurable: true
    });
    BotManagement.prototype.resetCfRobotsVariant = function () {
        this._cfRobotsVariant = undefined;
    };
    Object.defineProperty(BotManagement.prototype, "cfRobotsVariantInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cfRobotsVariant;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotManagement.prototype, "contentBotsProtection", {
        get: function () {
            return this.getStringAttribute('content_bots_protection');
        },
        set: function (value) {
            this._contentBotsProtection = value;
        },
        enumerable: false,
        configurable: true
    });
    BotManagement.prototype.resetContentBotsProtection = function () {
        this._contentBotsProtection = undefined;
    };
    Object.defineProperty(BotManagement.prototype, "contentBotsProtectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentBotsProtection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotManagement.prototype, "crawlerProtection", {
        get: function () {
            return this.getStringAttribute('crawler_protection');
        },
        set: function (value) {
            this._crawlerProtection = value;
        },
        enumerable: false,
        configurable: true
    });
    BotManagement.prototype.resetCrawlerProtection = function () {
        this._crawlerProtection = undefined;
    };
    Object.defineProperty(BotManagement.prototype, "crawlerProtectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._crawlerProtection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotManagement.prototype, "enableJs", {
        get: function () {
            return this.getBooleanAttribute('enable_js');
        },
        set: function (value) {
            this._enableJs = value;
        },
        enumerable: false,
        configurable: true
    });
    BotManagement.prototype.resetEnableJs = function () {
        this._enableJs = undefined;
    };
    Object.defineProperty(BotManagement.prototype, "enableJsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableJs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotManagement.prototype, "fightMode", {
        get: function () {
            return this.getBooleanAttribute('fight_mode');
        },
        set: function (value) {
            this._fightMode = value;
        },
        enumerable: false,
        configurable: true
    });
    BotManagement.prototype.resetFightMode = function () {
        this._fightMode = undefined;
    };
    Object.defineProperty(BotManagement.prototype, "fightModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fightMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotManagement.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotManagement.prototype, "isRobotsTxtManaged", {
        get: function () {
            return this.getBooleanAttribute('is_robots_txt_managed');
        },
        set: function (value) {
            this._isRobotsTxtManaged = value;
        },
        enumerable: false,
        configurable: true
    });
    BotManagement.prototype.resetIsRobotsTxtManaged = function () {
        this._isRobotsTxtManaged = undefined;
    };
    Object.defineProperty(BotManagement.prototype, "isRobotsTxtManagedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isRobotsTxtManaged;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotManagement.prototype, "optimizeWordpress", {
        get: function () {
            return this.getBooleanAttribute('optimize_wordpress');
        },
        set: function (value) {
            this._optimizeWordpress = value;
        },
        enumerable: false,
        configurable: true
    });
    BotManagement.prototype.resetOptimizeWordpress = function () {
        this._optimizeWordpress = undefined;
    };
    Object.defineProperty(BotManagement.prototype, "optimizeWordpressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._optimizeWordpress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotManagement.prototype, "sbfmDefinitelyAutomated", {
        get: function () {
            return this.getStringAttribute('sbfm_definitely_automated');
        },
        set: function (value) {
            this._sbfmDefinitelyAutomated = value;
        },
        enumerable: false,
        configurable: true
    });
    BotManagement.prototype.resetSbfmDefinitelyAutomated = function () {
        this._sbfmDefinitelyAutomated = undefined;
    };
    Object.defineProperty(BotManagement.prototype, "sbfmDefinitelyAutomatedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sbfmDefinitelyAutomated;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotManagement.prototype, "sbfmLikelyAutomated", {
        get: function () {
            return this.getStringAttribute('sbfm_likely_automated');
        },
        set: function (value) {
            this._sbfmLikelyAutomated = value;
        },
        enumerable: false,
        configurable: true
    });
    BotManagement.prototype.resetSbfmLikelyAutomated = function () {
        this._sbfmLikelyAutomated = undefined;
    };
    Object.defineProperty(BotManagement.prototype, "sbfmLikelyAutomatedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sbfmLikelyAutomated;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotManagement.prototype, "sbfmStaticResourceProtection", {
        get: function () {
            return this.getBooleanAttribute('sbfm_static_resource_protection');
        },
        set: function (value) {
            this._sbfmStaticResourceProtection = value;
        },
        enumerable: false,
        configurable: true
    });
    BotManagement.prototype.resetSbfmStaticResourceProtection = function () {
        this._sbfmStaticResourceProtection = undefined;
    };
    Object.defineProperty(BotManagement.prototype, "sbfmStaticResourceProtectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sbfmStaticResourceProtection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotManagement.prototype, "sbfmVerifiedBots", {
        get: function () {
            return this.getStringAttribute('sbfm_verified_bots');
        },
        set: function (value) {
            this._sbfmVerifiedBots = value;
        },
        enumerable: false,
        configurable: true
    });
    BotManagement.prototype.resetSbfmVerifiedBots = function () {
        this._sbfmVerifiedBots = undefined;
    };
    Object.defineProperty(BotManagement.prototype, "sbfmVerifiedBotsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sbfmVerifiedBots;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotManagement.prototype, "staleZoneConfiguration", {
        get: function () {
            return this._staleZoneConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotManagement.prototype, "suppressSessionScore", {
        get: function () {
            return this.getBooleanAttribute('suppress_session_score');
        },
        set: function (value) {
            this._suppressSessionScore = value;
        },
        enumerable: false,
        configurable: true
    });
    BotManagement.prototype.resetSuppressSessionScore = function () {
        this._suppressSessionScore = undefined;
    };
    Object.defineProperty(BotManagement.prototype, "suppressSessionScoreInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._suppressSessionScore;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotManagement.prototype, "usingLatestModel", {
        // using_latest_model - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('using_latest_model');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotManagement.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BotManagement.prototype, "zoneIdInput", {
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
    BotManagement.prototype.synthesizeAttributes = function () {
        return {
            ai_bots_protection: cdktf.stringToTerraform(this._aiBotsProtection),
            auto_update_model: cdktf.booleanToTerraform(this._autoUpdateModel),
            bm_cookie_enabled: cdktf.booleanToTerraform(this._bmCookieEnabled),
            cf_robots_variant: cdktf.stringToTerraform(this._cfRobotsVariant),
            content_bots_protection: cdktf.stringToTerraform(this._contentBotsProtection),
            crawler_protection: cdktf.stringToTerraform(this._crawlerProtection),
            enable_js: cdktf.booleanToTerraform(this._enableJs),
            fight_mode: cdktf.booleanToTerraform(this._fightMode),
            is_robots_txt_managed: cdktf.booleanToTerraform(this._isRobotsTxtManaged),
            optimize_wordpress: cdktf.booleanToTerraform(this._optimizeWordpress),
            sbfm_definitely_automated: cdktf.stringToTerraform(this._sbfmDefinitelyAutomated),
            sbfm_likely_automated: cdktf.stringToTerraform(this._sbfmLikelyAutomated),
            sbfm_static_resource_protection: cdktf.booleanToTerraform(this._sbfmStaticResourceProtection),
            sbfm_verified_bots: cdktf.stringToTerraform(this._sbfmVerifiedBots),
            suppress_session_score: cdktf.booleanToTerraform(this._suppressSessionScore),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    BotManagement.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            ai_bots_protection: {
                value: cdktf.stringToHclTerraform(this._aiBotsProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auto_update_model: {
                value: cdktf.booleanToHclTerraform(this._autoUpdateModel),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            bm_cookie_enabled: {
                value: cdktf.booleanToHclTerraform(this._bmCookieEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            cf_robots_variant: {
                value: cdktf.stringToHclTerraform(this._cfRobotsVariant),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content_bots_protection: {
                value: cdktf.stringToHclTerraform(this._contentBotsProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            crawler_protection: {
                value: cdktf.stringToHclTerraform(this._crawlerProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enable_js: {
                value: cdktf.booleanToHclTerraform(this._enableJs),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            fight_mode: {
                value: cdktf.booleanToHclTerraform(this._fightMode),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            is_robots_txt_managed: {
                value: cdktf.booleanToHclTerraform(this._isRobotsTxtManaged),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            optimize_wordpress: {
                value: cdktf.booleanToHclTerraform(this._optimizeWordpress),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            sbfm_definitely_automated: {
                value: cdktf.stringToHclTerraform(this._sbfmDefinitelyAutomated),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sbfm_likely_automated: {
                value: cdktf.stringToHclTerraform(this._sbfmLikelyAutomated),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sbfm_static_resource_protection: {
                value: cdktf.booleanToHclTerraform(this._sbfmStaticResourceProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            sbfm_verified_bots: {
                value: cdktf.stringToHclTerraform(this._sbfmVerifiedBots),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            suppress_session_score: {
                value: cdktf.booleanToHclTerraform(this._suppressSessionScore),
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
    BotManagement.tfResourceType = "cloudflare_bot_management";
    return BotManagement;
}(cdktf.TerraformResource));
exports.BotManagement = BotManagement;
