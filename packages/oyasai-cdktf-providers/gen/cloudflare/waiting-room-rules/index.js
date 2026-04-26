"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_rules
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
exports.WaitingRoomRules = exports.WaitingRoomRulesRulesList = exports.WaitingRoomRulesRulesOutputReference = void 0;
exports.waitingRoomRulesRulesToTerraform = waitingRoomRulesRulesToTerraform;
exports.waitingRoomRulesRulesToHclTerraform = waitingRoomRulesRulesToHclTerraform;
var cdktf = require("cdktf");
function waitingRoomRulesRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        description: cdktf.stringToTerraform(struct.description),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        expression: cdktf.stringToTerraform(struct.expression),
    };
}
function waitingRoomRulesRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        action: {
            value: cdktf.stringToHclTerraform(struct.action),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktf.stringToHclTerraform(struct.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        expression: {
            value: cdktf.stringToHclTerraform(struct.expression),
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
var WaitingRoomRulesRulesOutputReference = /** @class */ (function (_super) {
    __extends(WaitingRoomRulesRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WaitingRoomRulesRulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WaitingRoomRulesRulesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._action !== undefined) {
                hasAnyValues = true;
                internalValueResult.action = this._action;
            }
            if (this._description !== undefined) {
                hasAnyValues = true;
                internalValueResult.description = this._description;
            }
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._expression !== undefined) {
                hasAnyValues = true;
                internalValueResult.expression = this._expression;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._action = undefined;
                this._description = undefined;
                this._enabled = undefined;
                this._expression = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._action = value.action;
                this._description = value.description;
                this._enabled = value.enabled;
                this._expression = value.expression;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomRulesRulesOutputReference.prototype, "action", {
        get: function () {
            return this.getStringAttribute('action');
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomRulesRulesOutputReference.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomRulesRulesOutputReference.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoomRulesRulesOutputReference.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(WaitingRoomRulesRulesOutputReference.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomRulesRulesOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoomRulesRulesOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(WaitingRoomRulesRulesOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomRulesRulesOutputReference.prototype, "expression", {
        get: function () {
            return this.getStringAttribute('expression');
        },
        set: function (value) {
            this._expression = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomRulesRulesOutputReference.prototype, "expressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expression;
        },
        enumerable: false,
        configurable: true
    });
    return WaitingRoomRulesRulesOutputReference;
}(cdktf.ComplexObject));
exports.WaitingRoomRulesRulesOutputReference = WaitingRoomRulesRulesOutputReference;
var WaitingRoomRulesRulesList = /** @class */ (function (_super) {
    __extends(WaitingRoomRulesRulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WaitingRoomRulesRulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WaitingRoomRulesRulesList.prototype.get = function (index) {
        return new WaitingRoomRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WaitingRoomRulesRulesList;
}(cdktf.ComplexList));
exports.WaitingRoomRulesRulesList = WaitingRoomRulesRulesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_rules cloudflare_waiting_room_rules}
*/
var WaitingRoomRules = /** @class */ (function (_super) {
    __extends(WaitingRoomRules, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_rules cloudflare_waiting_room_rules} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WaitingRoomRulesConfig
    */
    function WaitingRoomRules(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_waiting_room_rules',
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
        // rules - computed: false, optional: false, required: true
        _this._rules = new WaitingRoomRulesRulesList(_this, "rules", false);
        _this._rules.internalValue = config.rules;
        _this._waitingRoomId = config.waitingRoomId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a WaitingRoomRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WaitingRoomRules to import
    * @param importFromId The id of the existing WaitingRoomRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WaitingRoomRules to import is found
    */
    WaitingRoomRules.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_waiting_room_rules", importId: importFromId, provider: provider });
    };
    Object.defineProperty(WaitingRoomRules.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomRules.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoomRules.prototype.putRules = function (value) {
        this._rules.internalValue = value;
    };
    Object.defineProperty(WaitingRoomRules.prototype, "rulesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rules.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomRules.prototype, "waitingRoomId", {
        get: function () {
            return this.getStringAttribute('waiting_room_id');
        },
        set: function (value) {
            this._waitingRoomId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomRules.prototype, "waitingRoomIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._waitingRoomId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomRules.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoomRules.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(WaitingRoomRules.prototype, "zoneIdInput", {
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
    WaitingRoomRules.prototype.synthesizeAttributes = function () {
        return {
            rules: cdktf.listMapper(waitingRoomRulesRulesToTerraform, false)(this._rules.internalValue),
            waiting_room_id: cdktf.stringToTerraform(this._waitingRoomId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    WaitingRoomRules.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            rules: {
                value: cdktf.listMapperHcl(waitingRoomRulesRulesToHclTerraform, false)(this._rules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "WaitingRoomRulesRulesList",
            },
            waiting_room_id: {
                value: cdktf.stringToHclTerraform(this._waitingRoomId),
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
    WaitingRoomRules.tfResourceType = "cloudflare_waiting_room_rules";
    return WaitingRoomRules;
}(cdktf.TerraformResource));
exports.WaitingRoomRules = WaitingRoomRules;
