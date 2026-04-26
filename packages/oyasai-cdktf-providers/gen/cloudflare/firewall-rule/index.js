"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/firewall_rule
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
exports.FirewallRule = exports.FirewallRuleFilterOutputReference = exports.FirewallRuleActionOutputReference = exports.FirewallRuleActionResponseOutputReference = void 0;
exports.firewallRuleActionResponseToTerraform = firewallRuleActionResponseToTerraform;
exports.firewallRuleActionResponseToHclTerraform = firewallRuleActionResponseToHclTerraform;
exports.firewallRuleActionToTerraform = firewallRuleActionToTerraform;
exports.firewallRuleActionToHclTerraform = firewallRuleActionToHclTerraform;
exports.firewallRuleFilterToTerraform = firewallRuleFilterToTerraform;
exports.firewallRuleFilterToHclTerraform = firewallRuleFilterToHclTerraform;
var cdktf = require("cdktf");
function firewallRuleActionResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        body: cdktf.stringToTerraform(struct.body),
        content_type: cdktf.stringToTerraform(struct.contentType),
    };
}
function firewallRuleActionResponseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        body: {
            value: cdktf.stringToHclTerraform(struct.body),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_type: {
            value: cdktf.stringToHclTerraform(struct.contentType),
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
var FirewallRuleActionResponseOutputReference = /** @class */ (function (_super) {
    __extends(FirewallRuleActionResponseOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function FirewallRuleActionResponseOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(FirewallRuleActionResponseOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._body !== undefined) {
                hasAnyValues = true;
                internalValueResult.body = this._body;
            }
            if (this._contentType !== undefined) {
                hasAnyValues = true;
                internalValueResult.contentType = this._contentType;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._body = undefined;
                this._contentType = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._body = value.body;
                this._contentType = value.contentType;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirewallRuleActionResponseOutputReference.prototype, "body", {
        get: function () {
            return this.getStringAttribute('body');
        },
        set: function (value) {
            this._body = value;
        },
        enumerable: false,
        configurable: true
    });
    FirewallRuleActionResponseOutputReference.prototype.resetBody = function () {
        this._body = undefined;
    };
    Object.defineProperty(FirewallRuleActionResponseOutputReference.prototype, "bodyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._body;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirewallRuleActionResponseOutputReference.prototype, "contentType", {
        get: function () {
            return this.getStringAttribute('content_type');
        },
        set: function (value) {
            this._contentType = value;
        },
        enumerable: false,
        configurable: true
    });
    FirewallRuleActionResponseOutputReference.prototype.resetContentType = function () {
        this._contentType = undefined;
    };
    Object.defineProperty(FirewallRuleActionResponseOutputReference.prototype, "contentTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentType;
        },
        enumerable: false,
        configurable: true
    });
    return FirewallRuleActionResponseOutputReference;
}(cdktf.ComplexObject));
exports.FirewallRuleActionResponseOutputReference = FirewallRuleActionResponseOutputReference;
function firewallRuleActionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
        response: firewallRuleActionResponseToTerraform(struct.response),
        timeout: cdktf.numberToTerraform(struct.timeout),
    };
}
function firewallRuleActionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        response: {
            value: firewallRuleActionResponseToHclTerraform(struct.response),
            isBlock: true,
            type: "struct",
            storageClassType: "FirewallRuleActionResponse",
        },
        timeout: {
            value: cdktf.numberToHclTerraform(struct.timeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var FirewallRuleActionOutputReference = /** @class */ (function (_super) {
    __extends(FirewallRuleActionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function FirewallRuleActionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // response - computed: false, optional: true, required: false
        _this._response = new FirewallRuleActionResponseOutputReference(_this, "response");
        return _this;
    }
    Object.defineProperty(FirewallRuleActionOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._mode !== undefined) {
                hasAnyValues = true;
                internalValueResult.mode = this._mode;
            }
            if (((_a = this._response) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.response = (_b = this._response) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._timeout !== undefined) {
                hasAnyValues = true;
                internalValueResult.timeout = this._timeout;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._mode = undefined;
                this._response.internalValue = undefined;
                this._timeout = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._mode = value.mode;
                this._response.internalValue = value.response;
                this._timeout = value.timeout;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirewallRuleActionOutputReference.prototype, "mode", {
        get: function () {
            return this.getStringAttribute('mode');
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: false,
        configurable: true
    });
    FirewallRuleActionOutputReference.prototype.resetMode = function () {
        this._mode = undefined;
    };
    Object.defineProperty(FirewallRuleActionOutputReference.prototype, "modeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirewallRuleActionOutputReference.prototype, "response", {
        get: function () {
            return this._response;
        },
        enumerable: false,
        configurable: true
    });
    FirewallRuleActionOutputReference.prototype.putResponse = function (value) {
        this._response.internalValue = value;
    };
    FirewallRuleActionOutputReference.prototype.resetResponse = function () {
        this._response.internalValue = undefined;
    };
    Object.defineProperty(FirewallRuleActionOutputReference.prototype, "responseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._response.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirewallRuleActionOutputReference.prototype, "timeout", {
        get: function () {
            return this.getNumberAttribute('timeout');
        },
        set: function (value) {
            this._timeout = value;
        },
        enumerable: false,
        configurable: true
    });
    FirewallRuleActionOutputReference.prototype.resetTimeout = function () {
        this._timeout = undefined;
    };
    Object.defineProperty(FirewallRuleActionOutputReference.prototype, "timeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeout;
        },
        enumerable: false,
        configurable: true
    });
    return FirewallRuleActionOutputReference;
}(cdktf.ComplexObject));
exports.FirewallRuleActionOutputReference = FirewallRuleActionOutputReference;
function firewallRuleFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        description: cdktf.stringToTerraform(struct.description),
        expression: cdktf.stringToTerraform(struct.expression),
        paused: cdktf.booleanToTerraform(struct.paused),
        ref: cdktf.stringToTerraform(struct.ref),
    };
}
function firewallRuleFilterToHclTerraform(struct) {
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
        expression: {
            value: cdktf.stringToHclTerraform(struct.expression),
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
        ref: {
            value: cdktf.stringToHclTerraform(struct.ref),
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
var FirewallRuleFilterOutputReference = /** @class */ (function (_super) {
    __extends(FirewallRuleFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function FirewallRuleFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(FirewallRuleFilterOutputReference.prototype, "internalValue", {
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
            if (this._expression !== undefined) {
                hasAnyValues = true;
                internalValueResult.expression = this._expression;
            }
            if (this._paused !== undefined) {
                hasAnyValues = true;
                internalValueResult.paused = this._paused;
            }
            if (this._ref !== undefined) {
                hasAnyValues = true;
                internalValueResult.ref = this._ref;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._description = undefined;
                this._expression = undefined;
                this._paused = undefined;
                this._ref = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._description = value.description;
                this._expression = value.expression;
                this._paused = value.paused;
                this._ref = value.ref;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirewallRuleFilterOutputReference.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    FirewallRuleFilterOutputReference.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(FirewallRuleFilterOutputReference.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirewallRuleFilterOutputReference.prototype, "expression", {
        get: function () {
            return this.getStringAttribute('expression');
        },
        set: function (value) {
            this._expression = value;
        },
        enumerable: false,
        configurable: true
    });
    FirewallRuleFilterOutputReference.prototype.resetExpression = function () {
        this._expression = undefined;
    };
    Object.defineProperty(FirewallRuleFilterOutputReference.prototype, "expressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirewallRuleFilterOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirewallRuleFilterOutputReference.prototype, "paused", {
        get: function () {
            return this.getBooleanAttribute('paused');
        },
        set: function (value) {
            this._paused = value;
        },
        enumerable: false,
        configurable: true
    });
    FirewallRuleFilterOutputReference.prototype.resetPaused = function () {
        this._paused = undefined;
    };
    Object.defineProperty(FirewallRuleFilterOutputReference.prototype, "pausedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._paused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirewallRuleFilterOutputReference.prototype, "ref", {
        get: function () {
            return this.getStringAttribute('ref');
        },
        set: function (value) {
            this._ref = value;
        },
        enumerable: false,
        configurable: true
    });
    FirewallRuleFilterOutputReference.prototype.resetRef = function () {
        this._ref = undefined;
    };
    Object.defineProperty(FirewallRuleFilterOutputReference.prototype, "refInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ref;
        },
        enumerable: false,
        configurable: true
    });
    return FirewallRuleFilterOutputReference;
}(cdktf.ComplexObject));
exports.FirewallRuleFilterOutputReference = FirewallRuleFilterOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/firewall_rule cloudflare_firewall_rule}
*/
var FirewallRule = /** @class */ (function (_super) {
    __extends(FirewallRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/firewall_rule cloudflare_firewall_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FirewallRuleConfig
    */
    function FirewallRule(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_firewall_rule',
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
        // action - computed: false, optional: false, required: true
        _this._action = new FirewallRuleActionOutputReference(_this, "action");
        // filter - computed: false, optional: false, required: true
        _this._filter = new FirewallRuleFilterOutputReference(_this, "filter");
        _this._action.internalValue = config.action;
        _this._filter.internalValue = config.filter;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a FirewallRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the FirewallRule to import
    * @param importFromId The id of the existing FirewallRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/firewall_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the FirewallRule to import is found
    */
    FirewallRule.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_firewall_rule", importId: importFromId, provider: provider });
    };
    Object.defineProperty(FirewallRule.prototype, "action", {
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    FirewallRule.prototype.putAction = function (value) {
        this._action.internalValue = value;
    };
    Object.defineProperty(FirewallRule.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirewallRule.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirewallRule.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    FirewallRule.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    Object.defineProperty(FirewallRule.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirewallRule.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirewallRule.prototype, "paused", {
        // paused - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('paused');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirewallRule.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirewallRule.prototype, "products", {
        // products - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('products');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirewallRule.prototype, "ref", {
        // ref - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ref');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirewallRule.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    FirewallRule.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(FirewallRule.prototype, "zoneIdInput", {
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
    FirewallRule.prototype.synthesizeAttributes = function () {
        return {
            action: firewallRuleActionToTerraform(this._action.internalValue),
            filter: firewallRuleFilterToTerraform(this._filter.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    FirewallRule.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            action: {
                value: firewallRuleActionToHclTerraform(this._action.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "FirewallRuleAction",
            },
            filter: {
                value: firewallRuleFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "FirewallRuleFilter",
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
    FirewallRule.tfResourceType = "cloudflare_firewall_rule";
    return FirewallRule;
}(cdktf.TerraformResource));
exports.FirewallRule = FirewallRule;
