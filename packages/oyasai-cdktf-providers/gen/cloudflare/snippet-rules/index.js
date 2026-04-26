"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet_rules
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
exports.SnippetRules = exports.SnippetRulesRulesList = exports.SnippetRulesRulesOutputReference = void 0;
exports.snippetRulesRulesToTerraform = snippetRulesRulesToTerraform;
exports.snippetRulesRulesToHclTerraform = snippetRulesRulesToHclTerraform;
var cdktf = require("cdktf");
function snippetRulesRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        description: cdktf.stringToTerraform(struct.description),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        expression: cdktf.stringToTerraform(struct.expression),
        snippet_name: cdktf.stringToTerraform(struct.snippetName),
    };
}
function snippetRulesRulesToHclTerraform(struct) {
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
        snippet_name: {
            value: cdktf.stringToHclTerraform(struct.snippetName),
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
var SnippetRulesRulesOutputReference = /** @class */ (function (_super) {
    __extends(SnippetRulesRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function SnippetRulesRulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SnippetRulesRulesOutputReference.prototype, "internalValue", {
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
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._expression !== undefined) {
                hasAnyValues = true;
                internalValueResult.expression = this._expression;
            }
            if (this._snippetName !== undefined) {
                hasAnyValues = true;
                internalValueResult.snippetName = this._snippetName;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._description = undefined;
                this._enabled = undefined;
                this._expression = undefined;
                this._snippetName = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._description = value.description;
                this._enabled = value.enabled;
                this._expression = value.expression;
                this._snippetName = value.snippetName;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnippetRulesRulesOutputReference.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    SnippetRulesRulesOutputReference.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(SnippetRulesRulesOutputReference.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnippetRulesRulesOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    SnippetRulesRulesOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(SnippetRulesRulesOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnippetRulesRulesOutputReference.prototype, "expression", {
        get: function () {
            return this.getStringAttribute('expression');
        },
        set: function (value) {
            this._expression = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnippetRulesRulesOutputReference.prototype, "expressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnippetRulesRulesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnippetRulesRulesOutputReference.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnippetRulesRulesOutputReference.prototype, "snippetName", {
        get: function () {
            return this.getStringAttribute('snippet_name');
        },
        set: function (value) {
            this._snippetName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnippetRulesRulesOutputReference.prototype, "snippetNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snippetName;
        },
        enumerable: false,
        configurable: true
    });
    return SnippetRulesRulesOutputReference;
}(cdktf.ComplexObject));
exports.SnippetRulesRulesOutputReference = SnippetRulesRulesOutputReference;
var SnippetRulesRulesList = /** @class */ (function (_super) {
    __extends(SnippetRulesRulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function SnippetRulesRulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    SnippetRulesRulesList.prototype.get = function (index) {
        return new SnippetRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return SnippetRulesRulesList;
}(cdktf.ComplexList));
exports.SnippetRulesRulesList = SnippetRulesRulesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet_rules cloudflare_snippet_rules}
*/
var SnippetRules = /** @class */ (function (_super) {
    __extends(SnippetRules, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet_rules cloudflare_snippet_rules} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnippetRulesConfig
    */
    function SnippetRules(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_snippet_rules',
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
        // rules - computed: false, optional: false, required: true
        _this._rules = new SnippetRulesRulesList(_this, "rules", false);
        _this._rules.internalValue = config.rules;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SnippetRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SnippetRules to import
    * @param importFromId The id of the existing SnippetRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SnippetRules to import is found
    */
    SnippetRules.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_snippet_rules", importId: importFromId, provider: provider });
    };
    Object.defineProperty(SnippetRules.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    SnippetRules.prototype.putRules = function (value) {
        this._rules.internalValue = value;
    };
    Object.defineProperty(SnippetRules.prototype, "rulesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rules.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnippetRules.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    SnippetRules.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(SnippetRules.prototype, "zoneIdInput", {
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
    SnippetRules.prototype.synthesizeAttributes = function () {
        return {
            rules: cdktf.listMapper(snippetRulesRulesToTerraform, false)(this._rules.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    SnippetRules.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            rules: {
                value: cdktf.listMapperHcl(snippetRulesRulesToHclTerraform, false)(this._rules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "SnippetRulesRulesList",
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
    SnippetRules.tfResourceType = "cloudflare_snippet_rules";
    return SnippetRules;
}(cdktf.TerraformResource));
exports.SnippetRules = SnippetRules;
