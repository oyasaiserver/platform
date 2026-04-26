"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_rule
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
exports.WebAnalyticsRule = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_rule cloudflare_web_analytics_rule}
*/
var WebAnalyticsRule = /** @class */ (function (_super) {
    __extends(WebAnalyticsRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_rule cloudflare_web_analytics_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WebAnalyticsRuleConfig
    */
    function WebAnalyticsRule(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_web_analytics_rule',
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
        _this._accountId = config.accountId;
        _this._host = config.host;
        _this._inclusive = config.inclusive;
        _this._isPaused = config.isPaused;
        _this._paths = config.paths;
        _this._rulesetId = config.rulesetId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a WebAnalyticsRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WebAnalyticsRule to import
    * @param importFromId The id of the existing WebAnalyticsRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WebAnalyticsRule to import is found
    */
    WebAnalyticsRule.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_web_analytics_rule", importId: importFromId, provider: provider });
    };
    Object.defineProperty(WebAnalyticsRule.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    WebAnalyticsRule.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(WebAnalyticsRule.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsRule.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsRule.prototype, "host", {
        get: function () {
            return this.getStringAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    WebAnalyticsRule.prototype.resetHost = function () {
        this._host = undefined;
    };
    Object.defineProperty(WebAnalyticsRule.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsRule.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsRule.prototype, "inclusive", {
        get: function () {
            return this.getBooleanAttribute('inclusive');
        },
        set: function (value) {
            this._inclusive = value;
        },
        enumerable: false,
        configurable: true
    });
    WebAnalyticsRule.prototype.resetInclusive = function () {
        this._inclusive = undefined;
    };
    Object.defineProperty(WebAnalyticsRule.prototype, "inclusiveInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inclusive;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsRule.prototype, "isPaused", {
        get: function () {
            return this.getBooleanAttribute('is_paused');
        },
        set: function (value) {
            this._isPaused = value;
        },
        enumerable: false,
        configurable: true
    });
    WebAnalyticsRule.prototype.resetIsPaused = function () {
        this._isPaused = undefined;
    };
    Object.defineProperty(WebAnalyticsRule.prototype, "isPausedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isPaused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsRule.prototype, "paths", {
        get: function () {
            return this.getListAttribute('paths');
        },
        set: function (value) {
            this._paths = value;
        },
        enumerable: false,
        configurable: true
    });
    WebAnalyticsRule.prototype.resetPaths = function () {
        this._paths = undefined;
    };
    Object.defineProperty(WebAnalyticsRule.prototype, "pathsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._paths;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsRule.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsRule.prototype, "rulesetId", {
        get: function () {
            return this.getStringAttribute('ruleset_id');
        },
        set: function (value) {
            this._rulesetId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAnalyticsRule.prototype, "rulesetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rulesetId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WebAnalyticsRule.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            host: cdktf.stringToTerraform(this._host),
            inclusive: cdktf.booleanToTerraform(this._inclusive),
            is_paused: cdktf.booleanToTerraform(this._isPaused),
            paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._paths),
            ruleset_id: cdktf.stringToTerraform(this._rulesetId),
        };
    };
    WebAnalyticsRule.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            host: {
                value: cdktf.stringToHclTerraform(this._host),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            inclusive: {
                value: cdktf.booleanToHclTerraform(this._inclusive),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            is_paused: {
                value: cdktf.booleanToHclTerraform(this._isPaused),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            paths: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._paths),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            ruleset_id: {
                value: cdktf.stringToHclTerraform(this._rulesetId),
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
    WebAnalyticsRule.tfResourceType = "cloudflare_web_analytics_rule";
    return WebAnalyticsRule;
}(cdktf.TerraformResource));
exports.WebAnalyticsRule = WebAnalyticsRule;
