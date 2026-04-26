"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_agent_blocking_rule
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
exports.DataCloudflareUserAgentBlockingRule = exports.DataCloudflareUserAgentBlockingRuleFilterOutputReference = exports.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference = void 0;
exports.dataCloudflareUserAgentBlockingRuleConfigurationToTerraform = dataCloudflareUserAgentBlockingRuleConfigurationToTerraform;
exports.dataCloudflareUserAgentBlockingRuleConfigurationToHclTerraform = dataCloudflareUserAgentBlockingRuleConfigurationToHclTerraform;
exports.dataCloudflareUserAgentBlockingRuleFilterToTerraform = dataCloudflareUserAgentBlockingRuleFilterToTerraform;
exports.dataCloudflareUserAgentBlockingRuleFilterToHclTerraform = dataCloudflareUserAgentBlockingRuleFilterToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareUserAgentBlockingRuleConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareUserAgentBlockingRuleConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareUserAgentBlockingRuleConfigurationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareUserAgentBlockingRuleConfigurationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareUserAgentBlockingRuleConfigurationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.prototype, "target", {
        // target - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserAgentBlockingRuleConfigurationOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareUserAgentBlockingRuleConfigurationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareUserAgentBlockingRuleConfigurationOutputReference = DataCloudflareUserAgentBlockingRuleConfigurationOutputReference;
function dataCloudflareUserAgentBlockingRuleFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        description: cdktf.stringToTerraform(struct.description),
        paused: cdktf.booleanToTerraform(struct.paused),
        user_agent: cdktf.stringToTerraform(struct.userAgent),
    };
}
function dataCloudflareUserAgentBlockingRuleFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        description: {
            value: cdktf.stringToHclTerraform(struct.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        paused: {
            value: cdktf.booleanToHclTerraform(struct.paused),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        user_agent: {
            value: cdktf.stringToHclTerraform(struct.userAgent),
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
var DataCloudflareUserAgentBlockingRuleFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareUserAgentBlockingRuleFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareUserAgentBlockingRuleFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareUserAgentBlockingRuleFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._description !== undefined) {
                hasAnyValues = true;
                internalValueResult.description = this._description;
            }
            if (this._paused !== undefined) {
                hasAnyValues = true;
                internalValueResult.paused = this._paused;
            }
            if (this._userAgent !== undefined) {
                hasAnyValues = true;
                internalValueResult.userAgent = this._userAgent;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._description = undefined;
                this._paused = undefined;
                this._userAgent = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._description = value.description;
                this._paused = value.paused;
                this._userAgent = value.userAgent;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserAgentBlockingRuleFilterOutputReference.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareUserAgentBlockingRuleFilterOutputReference.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(DataCloudflareUserAgentBlockingRuleFilterOutputReference.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserAgentBlockingRuleFilterOutputReference.prototype, "paused", {
        get: function () {
            return this.getBooleanAttribute('paused');
        },
        set: function (value) {
            this._paused = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareUserAgentBlockingRuleFilterOutputReference.prototype.resetPaused = function () {
        this._paused = undefined;
    };
    Object.defineProperty(DataCloudflareUserAgentBlockingRuleFilterOutputReference.prototype, "pausedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._paused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserAgentBlockingRuleFilterOutputReference.prototype, "userAgent", {
        get: function () {
            return this.getStringAttribute('user_agent');
        },
        set: function (value) {
            this._userAgent = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareUserAgentBlockingRuleFilterOutputReference.prototype.resetUserAgent = function () {
        this._userAgent = undefined;
    };
    Object.defineProperty(DataCloudflareUserAgentBlockingRuleFilterOutputReference.prototype, "userAgentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userAgent;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareUserAgentBlockingRuleFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareUserAgentBlockingRuleFilterOutputReference = DataCloudflareUserAgentBlockingRuleFilterOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_agent_blocking_rule cloudflare_user_agent_blocking_rule}
*/
var DataCloudflareUserAgentBlockingRule = /** @class */ (function (_super) {
    __extends(DataCloudflareUserAgentBlockingRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_agent_blocking_rule cloudflare_user_agent_blocking_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareUserAgentBlockingRuleConfig = {}
    */
    function DataCloudflareUserAgentBlockingRule(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_user_agent_blocking_rule',
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
        // configuration - computed: true, optional: false, required: false
        _this._configuration = new DataCloudflareUserAgentBlockingRuleConfigurationOutputReference(_this, "configuration");
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareUserAgentBlockingRuleFilterOutputReference(_this, "filter");
        _this._filter.internalValue = config.filter;
        _this._uaRuleId = config.uaRuleId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareUserAgentBlockingRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareUserAgentBlockingRule to import
    * @param importFromId The id of the existing DataCloudflareUserAgentBlockingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_agent_blocking_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareUserAgentBlockingRule to import is found
    */
    DataCloudflareUserAgentBlockingRule.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_user_agent_blocking_rule", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareUserAgentBlockingRule.prototype, "configuration", {
        get: function () {
            return this._configuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserAgentBlockingRule.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserAgentBlockingRule.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareUserAgentBlockingRule.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareUserAgentBlockingRule.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareUserAgentBlockingRule.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserAgentBlockingRule.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserAgentBlockingRule.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserAgentBlockingRule.prototype, "paused", {
        // paused - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('paused');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserAgentBlockingRule.prototype, "uaRuleId", {
        get: function () {
            return this.getStringAttribute('ua_rule_id');
        },
        set: function (value) {
            this._uaRuleId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareUserAgentBlockingRule.prototype.resetUaRuleId = function () {
        this._uaRuleId = undefined;
    };
    Object.defineProperty(DataCloudflareUserAgentBlockingRule.prototype, "uaRuleIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._uaRuleId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserAgentBlockingRule.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareUserAgentBlockingRule.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareUserAgentBlockingRule.prototype, "zoneIdInput", {
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
    DataCloudflareUserAgentBlockingRule.prototype.synthesizeAttributes = function () {
        return {
            filter: dataCloudflareUserAgentBlockingRuleFilterToTerraform(this._filter.internalValue),
            ua_rule_id: cdktf.stringToTerraform(this._uaRuleId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareUserAgentBlockingRule.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            filter: {
                value: dataCloudflareUserAgentBlockingRuleFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareUserAgentBlockingRuleFilter",
            },
            ua_rule_id: {
                value: cdktf.stringToHclTerraform(this._uaRuleId),
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
    DataCloudflareUserAgentBlockingRule.tfResourceType = "cloudflare_user_agent_blocking_rule";
    return DataCloudflareUserAgentBlockingRule;
}(cdktf.TerraformDataSource));
exports.DataCloudflareUserAgentBlockingRule = DataCloudflareUserAgentBlockingRule;
