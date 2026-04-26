"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_rule
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
exports.EmailRoutingRule = exports.EmailRoutingRuleMatchersList = exports.EmailRoutingRuleMatchersOutputReference = exports.EmailRoutingRuleActionsList = exports.EmailRoutingRuleActionsOutputReference = void 0;
exports.emailRoutingRuleActionsToTerraform = emailRoutingRuleActionsToTerraform;
exports.emailRoutingRuleActionsToHclTerraform = emailRoutingRuleActionsToHclTerraform;
exports.emailRoutingRuleMatchersToTerraform = emailRoutingRuleMatchersToTerraform;
exports.emailRoutingRuleMatchersToHclTerraform = emailRoutingRuleMatchersToHclTerraform;
var cdktf = require("cdktf");
function emailRoutingRuleActionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.value),
    };
}
function emailRoutingRuleActionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.value),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var EmailRoutingRuleActionsOutputReference = /** @class */ (function (_super) {
    __extends(EmailRoutingRuleActionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function EmailRoutingRuleActionsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(EmailRoutingRuleActionsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            if (this._value !== undefined) {
                hasAnyValues = true;
                internalValueResult.value = this._value;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._type = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._type = value.type;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingRuleActionsOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingRuleActionsOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingRuleActionsOutputReference.prototype, "value", {
        get: function () {
            return this.getListAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    EmailRoutingRuleActionsOutputReference.prototype.resetValue = function () {
        this._value = undefined;
    };
    Object.defineProperty(EmailRoutingRuleActionsOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return EmailRoutingRuleActionsOutputReference;
}(cdktf.ComplexObject));
exports.EmailRoutingRuleActionsOutputReference = EmailRoutingRuleActionsOutputReference;
var EmailRoutingRuleActionsList = /** @class */ (function (_super) {
    __extends(EmailRoutingRuleActionsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function EmailRoutingRuleActionsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    EmailRoutingRuleActionsList.prototype.get = function (index) {
        return new EmailRoutingRuleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return EmailRoutingRuleActionsList;
}(cdktf.ComplexList));
exports.EmailRoutingRuleActionsList = EmailRoutingRuleActionsList;
function emailRoutingRuleMatchersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field: cdktf.stringToTerraform(struct.field),
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function emailRoutingRuleMatchersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        field: {
            value: cdktf.stringToHclTerraform(struct.field),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
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
var EmailRoutingRuleMatchersOutputReference = /** @class */ (function (_super) {
    __extends(EmailRoutingRuleMatchersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function EmailRoutingRuleMatchersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(EmailRoutingRuleMatchersOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._field !== undefined) {
                hasAnyValues = true;
                internalValueResult.field = this._field;
            }
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            if (this._value !== undefined) {
                hasAnyValues = true;
                internalValueResult.value = this._value;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._field = undefined;
                this._type = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._field = value.field;
                this._type = value.type;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingRuleMatchersOutputReference.prototype, "field", {
        get: function () {
            return this.getStringAttribute('field');
        },
        set: function (value) {
            this._field = value;
        },
        enumerable: false,
        configurable: true
    });
    EmailRoutingRuleMatchersOutputReference.prototype.resetField = function () {
        this._field = undefined;
    };
    Object.defineProperty(EmailRoutingRuleMatchersOutputReference.prototype, "fieldInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._field;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingRuleMatchersOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingRuleMatchersOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingRuleMatchersOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    EmailRoutingRuleMatchersOutputReference.prototype.resetValue = function () {
        this._value = undefined;
    };
    Object.defineProperty(EmailRoutingRuleMatchersOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return EmailRoutingRuleMatchersOutputReference;
}(cdktf.ComplexObject));
exports.EmailRoutingRuleMatchersOutputReference = EmailRoutingRuleMatchersOutputReference;
var EmailRoutingRuleMatchersList = /** @class */ (function (_super) {
    __extends(EmailRoutingRuleMatchersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function EmailRoutingRuleMatchersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    EmailRoutingRuleMatchersList.prototype.get = function (index) {
        return new EmailRoutingRuleMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return EmailRoutingRuleMatchersList;
}(cdktf.ComplexList));
exports.EmailRoutingRuleMatchersList = EmailRoutingRuleMatchersList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_rule cloudflare_email_routing_rule}
*/
var EmailRoutingRule = /** @class */ (function (_super) {
    __extends(EmailRoutingRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_rule cloudflare_email_routing_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmailRoutingRuleConfig
    */
    function EmailRoutingRule(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_email_routing_rule',
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
        // actions - computed: false, optional: false, required: true
        _this._actions = new EmailRoutingRuleActionsList(_this, "actions", false);
        // matchers - computed: false, optional: false, required: true
        _this._matchers = new EmailRoutingRuleMatchersList(_this, "matchers", false);
        _this._actions.internalValue = config.actions;
        _this._enabled = config.enabled;
        _this._matchers.internalValue = config.matchers;
        _this._name = config.name;
        _this._priority = config.priority;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a EmailRoutingRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmailRoutingRule to import
    * @param importFromId The id of the existing EmailRoutingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmailRoutingRule to import is found
    */
    EmailRoutingRule.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_routing_rule", importId: importFromId, provider: provider });
    };
    Object.defineProperty(EmailRoutingRule.prototype, "actions", {
        get: function () {
            return this._actions;
        },
        enumerable: false,
        configurable: true
    });
    EmailRoutingRule.prototype.putActions = function (value) {
        this._actions.internalValue = value;
    };
    Object.defineProperty(EmailRoutingRule.prototype, "actionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._actions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingRule.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    EmailRoutingRule.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(EmailRoutingRule.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingRule.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingRule.prototype, "matchers", {
        get: function () {
            return this._matchers;
        },
        enumerable: false,
        configurable: true
    });
    EmailRoutingRule.prototype.putMatchers = function (value) {
        this._matchers.internalValue = value;
    };
    Object.defineProperty(EmailRoutingRule.prototype, "matchersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._matchers.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingRule.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    EmailRoutingRule.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(EmailRoutingRule.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingRule.prototype, "priority", {
        get: function () {
            return this.getNumberAttribute('priority');
        },
        set: function (value) {
            this._priority = value;
        },
        enumerable: false,
        configurable: true
    });
    EmailRoutingRule.prototype.resetPriority = function () {
        this._priority = undefined;
    };
    Object.defineProperty(EmailRoutingRule.prototype, "priorityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._priority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingRule.prototype, "tag", {
        // tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingRule.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    EmailRoutingRule.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(EmailRoutingRule.prototype, "zoneIdInput", {
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
    EmailRoutingRule.prototype.synthesizeAttributes = function () {
        return {
            actions: cdktf.listMapper(emailRoutingRuleActionsToTerraform, false)(this._actions.internalValue),
            enabled: cdktf.booleanToTerraform(this._enabled),
            matchers: cdktf.listMapper(emailRoutingRuleMatchersToTerraform, false)(this._matchers.internalValue),
            name: cdktf.stringToTerraform(this._name),
            priority: cdktf.numberToTerraform(this._priority),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    EmailRoutingRule.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            actions: {
                value: cdktf.listMapperHcl(emailRoutingRuleActionsToHclTerraform, false)(this._actions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "EmailRoutingRuleActionsList",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            matchers: {
                value: cdktf.listMapperHcl(emailRoutingRuleMatchersToHclTerraform, false)(this._matchers.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "EmailRoutingRuleMatchersList",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            priority: {
                value: cdktf.numberToHclTerraform(this._priority),
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
    EmailRoutingRule.tfResourceType = "cloudflare_email_routing_rule";
    return EmailRoutingRule;
}(cdktf.TerraformResource));
exports.EmailRoutingRule = EmailRoutingRule;
