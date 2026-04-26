"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/bot_management
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
exports.DataCloudflareBotManagement = exports.DataCloudflareBotManagementStaleZoneConfigurationOutputReference = void 0;
exports.dataCloudflareBotManagementStaleZoneConfigurationToTerraform = dataCloudflareBotManagementStaleZoneConfigurationToTerraform;
exports.dataCloudflareBotManagementStaleZoneConfigurationToHclTerraform = dataCloudflareBotManagementStaleZoneConfigurationToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareBotManagementStaleZoneConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareBotManagementStaleZoneConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareBotManagementStaleZoneConfigurationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareBotManagementStaleZoneConfigurationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareBotManagementStaleZoneConfigurationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareBotManagementStaleZoneConfigurationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareBotManagementStaleZoneConfigurationOutputReference.prototype, "fightMode", {
        // fight_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('fight_mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareBotManagementStaleZoneConfigurationOutputReference.prototype, "optimizeWordpress", {
        // optimize_wordpress - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('optimize_wordpress');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareBotManagementStaleZoneConfigurationOutputReference.prototype, "sbfmDefinitelyAutomated", {
        // sbfm_definitely_automated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sbfm_definitely_automated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareBotManagementStaleZoneConfigurationOutputReference.prototype, "sbfmLikelyAutomated", {
        // sbfm_likely_automated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sbfm_likely_automated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareBotManagementStaleZoneConfigurationOutputReference.prototype, "sbfmStaticResourceProtection", {
        // sbfm_static_resource_protection - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sbfm_static_resource_protection');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareBotManagementStaleZoneConfigurationOutputReference.prototype, "sbfmVerifiedBots", {
        // sbfm_verified_bots - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sbfm_verified_bots');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareBotManagementStaleZoneConfigurationOutputReference.prototype, "suppressSessionScore", {
        // suppress_session_score - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('suppress_session_score');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareBotManagementStaleZoneConfigurationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareBotManagementStaleZoneConfigurationOutputReference = DataCloudflareBotManagementStaleZoneConfigurationOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/bot_management cloudflare_bot_management}
*/
var DataCloudflareBotManagement = /** @class */ (function (_super) {
    __extends(DataCloudflareBotManagement, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/bot_management cloudflare_bot_management} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareBotManagementConfig = {}
    */
    function DataCloudflareBotManagement(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        _this._staleZoneConfiguration = new DataCloudflareBotManagementStaleZoneConfigurationOutputReference(_this, "stale_zone_configuration");
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareBotManagement resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareBotManagement to import
    * @param importFromId The id of the existing DataCloudflareBotManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/bot_management#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareBotManagement to import is found
    */
    DataCloudflareBotManagement.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_bot_management", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareBotManagement.prototype, "aiBotsProtection", {
        // ==========
        // ATTRIBUTES
        // ==========
        // ai_bots_protection - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ai_bots_protection');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareBotManagement.prototype, "autoUpdateModel", {
        // auto_update_model - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('auto_update_model');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareBotManagement.prototype, "bmCookieEnabled", {
        // bm_cookie_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('bm_cookie_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareBotManagement.prototype, "cfRobotsVariant", {
        // cf_robots_variant - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cf_robots_variant');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareBotManagement.prototype, "contentBotsProtection", {
        // content_bots_protection - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content_bots_protection');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareBotManagement.prototype, "crawlerProtection", {
        // crawler_protection - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('crawler_protection');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareBotManagement.prototype, "enableJs", {
        // enable_js - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enable_js');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareBotManagement.prototype, "fightMode", {
        // fight_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('fight_mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareBotManagement.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareBotManagement.prototype, "isRobotsTxtManaged", {
        // is_robots_txt_managed - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_robots_txt_managed');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareBotManagement.prototype, "optimizeWordpress", {
        // optimize_wordpress - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('optimize_wordpress');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareBotManagement.prototype, "sbfmDefinitelyAutomated", {
        // sbfm_definitely_automated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sbfm_definitely_automated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareBotManagement.prototype, "sbfmLikelyAutomated", {
        // sbfm_likely_automated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sbfm_likely_automated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareBotManagement.prototype, "sbfmStaticResourceProtection", {
        // sbfm_static_resource_protection - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('sbfm_static_resource_protection');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareBotManagement.prototype, "sbfmVerifiedBots", {
        // sbfm_verified_bots - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sbfm_verified_bots');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareBotManagement.prototype, "staleZoneConfiguration", {
        get: function () {
            return this._staleZoneConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareBotManagement.prototype, "suppressSessionScore", {
        // suppress_session_score - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('suppress_session_score');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareBotManagement.prototype, "usingLatestModel", {
        // using_latest_model - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('using_latest_model');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareBotManagement.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareBotManagement.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareBotManagement.prototype, "zoneIdInput", {
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
    DataCloudflareBotManagement.prototype.synthesizeAttributes = function () {
        return {
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareBotManagement.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareBotManagement.tfResourceType = "cloudflare_bot_management";
    return DataCloudflareBotManagement;
}(cdktf.TerraformDataSource));
exports.DataCloudflareBotManagement = DataCloudflareBotManagement;
