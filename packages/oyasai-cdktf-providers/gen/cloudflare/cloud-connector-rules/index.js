"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloud_connector_rules
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
exports.CloudConnectorRules = exports.CloudConnectorRulesRulesList = exports.CloudConnectorRulesRulesOutputReference = exports.CloudConnectorRulesRulesParametersOutputReference = void 0;
exports.cloudConnectorRulesRulesParametersToTerraform = cloudConnectorRulesRulesParametersToTerraform;
exports.cloudConnectorRulesRulesParametersToHclTerraform = cloudConnectorRulesRulesParametersToHclTerraform;
exports.cloudConnectorRulesRulesToTerraform = cloudConnectorRulesRulesToTerraform;
exports.cloudConnectorRulesRulesToHclTerraform = cloudConnectorRulesRulesToHclTerraform;
var cdktf = require("cdktf");
function cloudConnectorRulesRulesParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        host: cdktf.stringToTerraform(struct.host),
    };
}
function cloudConnectorRulesRulesParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        host: {
            value: cdktf.stringToHclTerraform(struct.host),
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
var CloudConnectorRulesRulesParametersOutputReference = /** @class */ (function (_super) {
    __extends(CloudConnectorRulesRulesParametersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function CloudConnectorRulesRulesParametersOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(CloudConnectorRulesRulesParametersOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._host !== undefined) {
                hasAnyValues = true;
                internalValueResult.host = this._host;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._host = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._host = value.host;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudConnectorRulesRulesParametersOutputReference.prototype, "host", {
        get: function () {
            return this.getStringAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudConnectorRulesRulesParametersOutputReference.prototype.resetHost = function () {
        this._host = undefined;
    };
    Object.defineProperty(CloudConnectorRulesRulesParametersOutputReference.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    return CloudConnectorRulesRulesParametersOutputReference;
}(cdktf.ComplexObject));
exports.CloudConnectorRulesRulesParametersOutputReference = CloudConnectorRulesRulesParametersOutputReference;
function cloudConnectorRulesRulesToTerraform(struct) {
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
        parameters: cloudConnectorRulesRulesParametersToTerraform(struct.parameters),
        provider: cdktf.stringToTerraform(struct.provider),
    };
}
function cloudConnectorRulesRulesToHclTerraform(struct) {
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
        parameters: {
            value: cloudConnectorRulesRulesParametersToHclTerraform(struct.parameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudConnectorRulesRulesParameters",
        },
        provider: {
            value: cdktf.stringToHclTerraform(struct.provider),
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
var CloudConnectorRulesRulesOutputReference = /** @class */ (function (_super) {
    __extends(CloudConnectorRulesRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function CloudConnectorRulesRulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // parameters - computed: false, optional: true, required: false
        _this._parameters = new CloudConnectorRulesRulesParametersOutputReference(_this, "parameters");
        return _this;
    }
    Object.defineProperty(CloudConnectorRulesRulesOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
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
            if (((_a = this._parameters) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.parameters = (_b = this._parameters) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._provider !== undefined) {
                hasAnyValues = true;
                internalValueResult.provider = this._provider;
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
                this._parameters.internalValue = undefined;
                this._provider = undefined;
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
                this._parameters.internalValue = value.parameters;
                this._provider = value.provider;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudConnectorRulesRulesOutputReference.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudConnectorRulesRulesOutputReference.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(CloudConnectorRulesRulesOutputReference.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudConnectorRulesRulesOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudConnectorRulesRulesOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(CloudConnectorRulesRulesOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudConnectorRulesRulesOutputReference.prototype, "expression", {
        get: function () {
            return this.getStringAttribute('expression');
        },
        set: function (value) {
            this._expression = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudConnectorRulesRulesOutputReference.prototype.resetExpression = function () {
        this._expression = undefined;
    };
    Object.defineProperty(CloudConnectorRulesRulesOutputReference.prototype, "expressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudConnectorRulesRulesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudConnectorRulesRulesOutputReference.prototype, "parameters", {
        get: function () {
            return this._parameters;
        },
        enumerable: false,
        configurable: true
    });
    CloudConnectorRulesRulesOutputReference.prototype.putParameters = function (value) {
        this._parameters.internalValue = value;
    };
    CloudConnectorRulesRulesOutputReference.prototype.resetParameters = function () {
        this._parameters.internalValue = undefined;
    };
    Object.defineProperty(CloudConnectorRulesRulesOutputReference.prototype, "parametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameters.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudConnectorRulesRulesOutputReference.prototype, "provider", {
        get: function () {
            return this.getStringAttribute('provider');
        },
        set: function (value) {
            this._provider = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudConnectorRulesRulesOutputReference.prototype.resetProvider = function () {
        this._provider = undefined;
    };
    Object.defineProperty(CloudConnectorRulesRulesOutputReference.prototype, "providerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._provider;
        },
        enumerable: false,
        configurable: true
    });
    return CloudConnectorRulesRulesOutputReference;
}(cdktf.ComplexObject));
exports.CloudConnectorRulesRulesOutputReference = CloudConnectorRulesRulesOutputReference;
var CloudConnectorRulesRulesList = /** @class */ (function (_super) {
    __extends(CloudConnectorRulesRulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function CloudConnectorRulesRulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    CloudConnectorRulesRulesList.prototype.get = function (index) {
        return new CloudConnectorRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return CloudConnectorRulesRulesList;
}(cdktf.ComplexList));
exports.CloudConnectorRulesRulesList = CloudConnectorRulesRulesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloud_connector_rules cloudflare_cloud_connector_rules}
*/
var CloudConnectorRules = /** @class */ (function (_super) {
    __extends(CloudConnectorRules, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloud_connector_rules cloudflare_cloud_connector_rules} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudConnectorRulesConfig
    */
    function CloudConnectorRules(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_cloud_connector_rules',
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
        // rules - computed: false, optional: true, required: false
        _this._rules = new CloudConnectorRulesRulesList(_this, "rules", false);
        _this._rules.internalValue = config.rules;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CloudConnectorRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudConnectorRules to import
    * @param importFromId The id of the existing CloudConnectorRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloud_connector_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudConnectorRules to import is found
    */
    CloudConnectorRules.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloud_connector_rules", importId: importFromId, provider: provider });
    };
    Object.defineProperty(CloudConnectorRules.prototype, "id", {
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
    Object.defineProperty(CloudConnectorRules.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    CloudConnectorRules.prototype.putRules = function (value) {
        this._rules.internalValue = value;
    };
    CloudConnectorRules.prototype.resetRules = function () {
        this._rules.internalValue = undefined;
    };
    Object.defineProperty(CloudConnectorRules.prototype, "rulesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rules.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudConnectorRules.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudConnectorRules.prototype, "zoneIdInput", {
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
    CloudConnectorRules.prototype.synthesizeAttributes = function () {
        return {
            rules: cdktf.listMapper(cloudConnectorRulesRulesToTerraform, false)(this._rules.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    CloudConnectorRules.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            rules: {
                value: cdktf.listMapperHcl(cloudConnectorRulesRulesToHclTerraform, false)(this._rules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CloudConnectorRulesRulesList",
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
    CloudConnectorRules.tfResourceType = "cloudflare_cloud_connector_rules";
    return CloudConnectorRules;
}(cdktf.TerraformResource));
exports.CloudConnectorRules = CloudConnectorRules;
