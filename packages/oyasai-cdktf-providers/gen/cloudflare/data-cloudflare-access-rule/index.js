"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rule
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
exports.DataCloudflareAccessRule = exports.DataCloudflareAccessRuleScopeOutputReference = exports.DataCloudflareAccessRuleFilterOutputReference = exports.DataCloudflareAccessRuleFilterConfigurationOutputReference = exports.DataCloudflareAccessRuleConfigurationOutputReference = void 0;
exports.dataCloudflareAccessRuleConfigurationToTerraform = dataCloudflareAccessRuleConfigurationToTerraform;
exports.dataCloudflareAccessRuleConfigurationToHclTerraform = dataCloudflareAccessRuleConfigurationToHclTerraform;
exports.dataCloudflareAccessRuleFilterConfigurationToTerraform = dataCloudflareAccessRuleFilterConfigurationToTerraform;
exports.dataCloudflareAccessRuleFilterConfigurationToHclTerraform = dataCloudflareAccessRuleFilterConfigurationToHclTerraform;
exports.dataCloudflareAccessRuleFilterToTerraform = dataCloudflareAccessRuleFilterToTerraform;
exports.dataCloudflareAccessRuleFilterToHclTerraform = dataCloudflareAccessRuleFilterToHclTerraform;
exports.dataCloudflareAccessRuleScopeToTerraform = dataCloudflareAccessRuleScopeToTerraform;
exports.dataCloudflareAccessRuleScopeToHclTerraform = dataCloudflareAccessRuleScopeToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareAccessRuleConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccessRuleConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccessRuleConfigurationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccessRuleConfigurationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccessRuleConfigurationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccessRuleConfigurationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccessRuleConfigurationOutputReference.prototype, "target", {
        // target - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRuleConfigurationOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccessRuleConfigurationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccessRuleConfigurationOutputReference = DataCloudflareAccessRuleConfigurationOutputReference;
function dataCloudflareAccessRuleFilterConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        target: cdktf.stringToTerraform(struct.target),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function dataCloudflareAccessRuleFilterConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        target: {
            value: cdktf.stringToHclTerraform(struct.target),
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
var DataCloudflareAccessRuleFilterConfigurationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccessRuleFilterConfigurationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccessRuleFilterConfigurationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccessRuleFilterConfigurationOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._target !== undefined) {
                hasAnyValues = true;
                internalValueResult.target = this._target;
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
                this._target = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._target = value.target;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRuleFilterConfigurationOutputReference.prototype, "target", {
        get: function () {
            return this.getStringAttribute('target');
        },
        set: function (value) {
            this._target = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccessRuleFilterConfigurationOutputReference.prototype.resetTarget = function () {
        this._target = undefined;
    };
    Object.defineProperty(DataCloudflareAccessRuleFilterConfigurationOutputReference.prototype, "targetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRuleFilterConfigurationOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccessRuleFilterConfigurationOutputReference.prototype.resetValue = function () {
        this._value = undefined;
    };
    Object.defineProperty(DataCloudflareAccessRuleFilterConfigurationOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccessRuleFilterConfigurationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccessRuleFilterConfigurationOutputReference = DataCloudflareAccessRuleFilterConfigurationOutputReference;
function dataCloudflareAccessRuleFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        configuration: dataCloudflareAccessRuleFilterConfigurationToTerraform(struct.configuration),
        direction: cdktf.stringToTerraform(struct.direction),
        match: cdktf.stringToTerraform(struct.match),
        mode: cdktf.stringToTerraform(struct.mode),
        notes: cdktf.stringToTerraform(struct.notes),
        order: cdktf.stringToTerraform(struct.order),
    };
}
function dataCloudflareAccessRuleFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        configuration: {
            value: dataCloudflareAccessRuleFilterConfigurationToHclTerraform(struct.configuration),
            isBlock: true,
            type: "struct",
            storageClassType: "DataCloudflareAccessRuleFilterConfiguration",
        },
        direction: {
            value: cdktf.stringToHclTerraform(struct.direction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        match: {
            value: cdktf.stringToHclTerraform(struct.match),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        notes: {
            value: cdktf.stringToHclTerraform(struct.notes),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        order: {
            value: cdktf.stringToHclTerraform(struct.order),
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
var DataCloudflareAccessRuleFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccessRuleFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccessRuleFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // configuration - computed: false, optional: true, required: false
        _this._configuration = new DataCloudflareAccessRuleFilterConfigurationOutputReference(_this, "configuration");
        return _this;
    }
    Object.defineProperty(DataCloudflareAccessRuleFilterOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._configuration) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.configuration = (_b = this._configuration) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._direction !== undefined) {
                hasAnyValues = true;
                internalValueResult.direction = this._direction;
            }
            if (this._match !== undefined) {
                hasAnyValues = true;
                internalValueResult.match = this._match;
            }
            if (this._mode !== undefined) {
                hasAnyValues = true;
                internalValueResult.mode = this._mode;
            }
            if (this._notes !== undefined) {
                hasAnyValues = true;
                internalValueResult.notes = this._notes;
            }
            if (this._order !== undefined) {
                hasAnyValues = true;
                internalValueResult.order = this._order;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._configuration.internalValue = undefined;
                this._direction = undefined;
                this._match = undefined;
                this._mode = undefined;
                this._notes = undefined;
                this._order = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._configuration.internalValue = value.configuration;
                this._direction = value.direction;
                this._match = value.match;
                this._mode = value.mode;
                this._notes = value.notes;
                this._order = value.order;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRuleFilterOutputReference.prototype, "configuration", {
        get: function () {
            return this._configuration;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccessRuleFilterOutputReference.prototype.putConfiguration = function (value) {
        this._configuration.internalValue = value;
    };
    DataCloudflareAccessRuleFilterOutputReference.prototype.resetConfiguration = function () {
        this._configuration.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareAccessRuleFilterOutputReference.prototype, "configurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configuration.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRuleFilterOutputReference.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccessRuleFilterOutputReference.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareAccessRuleFilterOutputReference.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRuleFilterOutputReference.prototype, "match", {
        get: function () {
            return this.getStringAttribute('match');
        },
        set: function (value) {
            this._match = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccessRuleFilterOutputReference.prototype.resetMatch = function () {
        this._match = undefined;
    };
    Object.defineProperty(DataCloudflareAccessRuleFilterOutputReference.prototype, "matchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._match;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRuleFilterOutputReference.prototype, "mode", {
        get: function () {
            return this.getStringAttribute('mode');
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccessRuleFilterOutputReference.prototype.resetMode = function () {
        this._mode = undefined;
    };
    Object.defineProperty(DataCloudflareAccessRuleFilterOutputReference.prototype, "modeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRuleFilterOutputReference.prototype, "notes", {
        get: function () {
            return this.getStringAttribute('notes');
        },
        set: function (value) {
            this._notes = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccessRuleFilterOutputReference.prototype.resetNotes = function () {
        this._notes = undefined;
    };
    Object.defineProperty(DataCloudflareAccessRuleFilterOutputReference.prototype, "notesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRuleFilterOutputReference.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccessRuleFilterOutputReference.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareAccessRuleFilterOutputReference.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccessRuleFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccessRuleFilterOutputReference = DataCloudflareAccessRuleFilterOutputReference;
function dataCloudflareAccessRuleScopeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccessRuleScopeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccessRuleScopeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccessRuleScopeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccessRuleScopeOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccessRuleScopeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccessRuleScopeOutputReference.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRuleScopeOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRuleScopeOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccessRuleScopeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccessRuleScopeOutputReference = DataCloudflareAccessRuleScopeOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rule cloudflare_access_rule}
*/
var DataCloudflareAccessRule = /** @class */ (function (_super) {
    __extends(DataCloudflareAccessRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rule cloudflare_access_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccessRuleConfig = {}
    */
    function DataCloudflareAccessRule(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_access_rule',
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
        // configuration - computed: true, optional: false, required: false
        _this._configuration = new DataCloudflareAccessRuleConfigurationOutputReference(_this, "configuration");
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareAccessRuleFilterOutputReference(_this, "filter");
        // scope - computed: true, optional: false, required: false
        _this._scope = new DataCloudflareAccessRuleScopeOutputReference(_this, "scope");
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._ruleId = config.ruleId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAccessRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccessRule to import
    * @param importFromId The id of the existing DataCloudflareAccessRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccessRule to import is found
    */
    DataCloudflareAccessRule.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_access_rule", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareAccessRule.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccessRule.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareAccessRule.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRule.prototype, "allowedModes", {
        // allowed_modes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('allowed_modes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRule.prototype, "configuration", {
        get: function () {
            return this._configuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRule.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRule.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccessRule.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareAccessRule.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareAccessRule.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRule.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRule.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRule.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRule.prototype, "notes", {
        // notes - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('notes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRule.prototype, "ruleId", {
        get: function () {
            return this.getStringAttribute('rule_id');
        },
        set: function (value) {
            this._ruleId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccessRule.prototype.resetRuleId = function () {
        this._ruleId = undefined;
    };
    Object.defineProperty(DataCloudflareAccessRule.prototype, "ruleIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ruleId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRule.prototype, "scope", {
        get: function () {
            return this._scope;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRule.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccessRule.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareAccessRule.prototype, "zoneIdInput", {
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
    DataCloudflareAccessRule.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareAccessRuleFilterToTerraform(this._filter.internalValue),
            rule_id: cdktf.stringToTerraform(this._ruleId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareAccessRule.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareAccessRuleFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareAccessRuleFilter",
            },
            rule_id: {
                value: cdktf.stringToHclTerraform(this._ruleId),
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
    DataCloudflareAccessRule.tfResourceType = "cloudflare_access_rule";
    return DataCloudflareAccessRule;
}(cdktf.TerraformDataSource));
exports.DataCloudflareAccessRule = DataCloudflareAccessRule;
