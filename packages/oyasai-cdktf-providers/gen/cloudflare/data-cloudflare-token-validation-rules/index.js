"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules
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
exports.DataCloudflareTokenValidationRules = exports.DataCloudflareTokenValidationRulesSelectorOutputReference = exports.DataCloudflareTokenValidationRulesSelectorIncludeList = exports.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference = exports.DataCloudflareTokenValidationRulesSelectorExcludeList = exports.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference = exports.DataCloudflareTokenValidationRulesFilterOutputReference = void 0;
exports.dataCloudflareTokenValidationRulesFilterToTerraform = dataCloudflareTokenValidationRulesFilterToTerraform;
exports.dataCloudflareTokenValidationRulesFilterToHclTerraform = dataCloudflareTokenValidationRulesFilterToHclTerraform;
exports.dataCloudflareTokenValidationRulesSelectorExcludeToTerraform = dataCloudflareTokenValidationRulesSelectorExcludeToTerraform;
exports.dataCloudflareTokenValidationRulesSelectorExcludeToHclTerraform = dataCloudflareTokenValidationRulesSelectorExcludeToHclTerraform;
exports.dataCloudflareTokenValidationRulesSelectorIncludeToTerraform = dataCloudflareTokenValidationRulesSelectorIncludeToTerraform;
exports.dataCloudflareTokenValidationRulesSelectorIncludeToHclTerraform = dataCloudflareTokenValidationRulesSelectorIncludeToHclTerraform;
exports.dataCloudflareTokenValidationRulesSelectorToTerraform = dataCloudflareTokenValidationRulesSelectorToTerraform;
exports.dataCloudflareTokenValidationRulesSelectorToHclTerraform = dataCloudflareTokenValidationRulesSelectorToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareTokenValidationRulesFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        host: cdktf.stringToTerraform(struct.host),
        hostname: cdktf.stringToTerraform(struct.hostname),
        id: cdktf.stringToTerraform(struct.id),
        token_configuration: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.tokenConfiguration),
    };
}
function dataCloudflareTokenValidationRulesFilterToHclTerraform(struct) {
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
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        host: {
            value: cdktf.stringToHclTerraform(struct.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hostname: {
            value: cdktf.stringToHclTerraform(struct.hostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_configuration: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.tokenConfiguration),
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
var DataCloudflareTokenValidationRulesFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareTokenValidationRulesFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareTokenValidationRulesFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareTokenValidationRulesFilterOutputReference.prototype, "internalValue", {
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
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._host !== undefined) {
                hasAnyValues = true;
                internalValueResult.host = this._host;
            }
            if (this._hostname !== undefined) {
                hasAnyValues = true;
                internalValueResult.hostname = this._hostname;
            }
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            if (this._tokenConfiguration !== undefined) {
                hasAnyValues = true;
                internalValueResult.tokenConfiguration = this._tokenConfiguration;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._action = undefined;
                this._enabled = undefined;
                this._host = undefined;
                this._hostname = undefined;
                this._id = undefined;
                this._tokenConfiguration = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._action = value.action;
                this._enabled = value.enabled;
                this._host = value.host;
                this._hostname = value.hostname;
                this._id = value.id;
                this._tokenConfiguration = value.tokenConfiguration;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRulesFilterOutputReference.prototype, "action", {
        get: function () {
            return this.getStringAttribute('action');
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTokenValidationRulesFilterOutputReference.prototype.resetAction = function () {
        this._action = undefined;
    };
    Object.defineProperty(DataCloudflareTokenValidationRulesFilterOutputReference.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRulesFilterOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTokenValidationRulesFilterOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(DataCloudflareTokenValidationRulesFilterOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRulesFilterOutputReference.prototype, "host", {
        get: function () {
            return this.getStringAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTokenValidationRulesFilterOutputReference.prototype.resetHost = function () {
        this._host = undefined;
    };
    Object.defineProperty(DataCloudflareTokenValidationRulesFilterOutputReference.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRulesFilterOutputReference.prototype, "hostname", {
        get: function () {
            return this.getStringAttribute('hostname');
        },
        set: function (value) {
            this._hostname = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTokenValidationRulesFilterOutputReference.prototype.resetHostname = function () {
        this._hostname = undefined;
    };
    Object.defineProperty(DataCloudflareTokenValidationRulesFilterOutputReference.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRulesFilterOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTokenValidationRulesFilterOutputReference.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataCloudflareTokenValidationRulesFilterOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRulesFilterOutputReference.prototype, "tokenConfiguration", {
        get: function () {
            return this.getListAttribute('token_configuration');
        },
        set: function (value) {
            this._tokenConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTokenValidationRulesFilterOutputReference.prototype.resetTokenConfiguration = function () {
        this._tokenConfiguration = undefined;
    };
    Object.defineProperty(DataCloudflareTokenValidationRulesFilterOutputReference.prototype, "tokenConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tokenConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareTokenValidationRulesFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareTokenValidationRulesFilterOutputReference = DataCloudflareTokenValidationRulesFilterOutputReference;
function dataCloudflareTokenValidationRulesSelectorExcludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareTokenValidationRulesSelectorExcludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareTokenValidationRulesSelectorExcludeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareTokenValidationRulesSelectorExcludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareTokenValidationRulesSelectorExcludeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareTokenValidationRulesSelectorExcludeOutputReference.prototype, "operationIds", {
        // operation_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('operation_ids');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareTokenValidationRulesSelectorExcludeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareTokenValidationRulesSelectorExcludeOutputReference = DataCloudflareTokenValidationRulesSelectorExcludeOutputReference;
var DataCloudflareTokenValidationRulesSelectorExcludeList = /** @class */ (function (_super) {
    __extends(DataCloudflareTokenValidationRulesSelectorExcludeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareTokenValidationRulesSelectorExcludeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareTokenValidationRulesSelectorExcludeList.prototype.get = function (index) {
        return new DataCloudflareTokenValidationRulesSelectorExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareTokenValidationRulesSelectorExcludeList;
}(cdktf.ComplexList));
exports.DataCloudflareTokenValidationRulesSelectorExcludeList = DataCloudflareTokenValidationRulesSelectorExcludeList;
function dataCloudflareTokenValidationRulesSelectorIncludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareTokenValidationRulesSelectorIncludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareTokenValidationRulesSelectorIncludeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareTokenValidationRulesSelectorIncludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareTokenValidationRulesSelectorIncludeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareTokenValidationRulesSelectorIncludeOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareTokenValidationRulesSelectorIncludeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareTokenValidationRulesSelectorIncludeOutputReference = DataCloudflareTokenValidationRulesSelectorIncludeOutputReference;
var DataCloudflareTokenValidationRulesSelectorIncludeList = /** @class */ (function (_super) {
    __extends(DataCloudflareTokenValidationRulesSelectorIncludeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareTokenValidationRulesSelectorIncludeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareTokenValidationRulesSelectorIncludeList.prototype.get = function (index) {
        return new DataCloudflareTokenValidationRulesSelectorIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareTokenValidationRulesSelectorIncludeList;
}(cdktf.ComplexList));
exports.DataCloudflareTokenValidationRulesSelectorIncludeList = DataCloudflareTokenValidationRulesSelectorIncludeList;
function dataCloudflareTokenValidationRulesSelectorToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareTokenValidationRulesSelectorToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareTokenValidationRulesSelectorOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareTokenValidationRulesSelectorOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareTokenValidationRulesSelectorOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // exclude - computed: true, optional: false, required: false
        _this._exclude = new DataCloudflareTokenValidationRulesSelectorExcludeList(_this, "exclude", false);
        // include - computed: true, optional: false, required: false
        _this._include = new DataCloudflareTokenValidationRulesSelectorIncludeList(_this, "include", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareTokenValidationRulesSelectorOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareTokenValidationRulesSelectorOutputReference.prototype, "exclude", {
        get: function () {
            return this._exclude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRulesSelectorOutputReference.prototype, "include", {
        get: function () {
            return this._include;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareTokenValidationRulesSelectorOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareTokenValidationRulesSelectorOutputReference = DataCloudflareTokenValidationRulesSelectorOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules cloudflare_token_validation_rules}
*/
var DataCloudflareTokenValidationRules = /** @class */ (function (_super) {
    __extends(DataCloudflareTokenValidationRules, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules cloudflare_token_validation_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareTokenValidationRulesConfig = {}
    */
    function DataCloudflareTokenValidationRules(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_token_validation_rules',
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
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareTokenValidationRulesFilterOutputReference(_this, "filter");
        // selector - computed: true, optional: false, required: false
        _this._selector = new DataCloudflareTokenValidationRulesSelectorOutputReference(_this, "selector");
        _this._filter.internalValue = config.filter;
        _this._ruleId = config.ruleId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareTokenValidationRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareTokenValidationRules to import
    * @param importFromId The id of the existing DataCloudflareTokenValidationRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareTokenValidationRules to import is found
    */
    DataCloudflareTokenValidationRules.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_token_validation_rules", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareTokenValidationRules.prototype, "action", {
        // ==========
        // ATTRIBUTES
        // ==========
        // action - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('action');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRules.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRules.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRules.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRules.prototype, "expression", {
        // expression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRules.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTokenValidationRules.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareTokenValidationRules.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareTokenValidationRules.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRules.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRules.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRules.prototype, "ruleId", {
        get: function () {
            return this.getStringAttribute('rule_id');
        },
        set: function (value) {
            this._ruleId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTokenValidationRules.prototype.resetRuleId = function () {
        this._ruleId = undefined;
    };
    Object.defineProperty(DataCloudflareTokenValidationRules.prototype, "ruleIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ruleId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRules.prototype, "selector", {
        get: function () {
            return this._selector;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRules.prototype, "title", {
        // title - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('title');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationRules.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTokenValidationRules.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareTokenValidationRules.prototype, "zoneIdInput", {
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
    DataCloudflareTokenValidationRules.prototype.synthesizeAttributes = function () {
        return {
            filter: dataCloudflareTokenValidationRulesFilterToTerraform(this._filter.internalValue),
            rule_id: cdktf.stringToTerraform(this._ruleId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareTokenValidationRules.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            filter: {
                value: dataCloudflareTokenValidationRulesFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareTokenValidationRulesFilter",
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
    DataCloudflareTokenValidationRules.tfResourceType = "cloudflare_token_validation_rules";
    return DataCloudflareTokenValidationRules;
}(cdktf.TerraformDataSource));
exports.DataCloudflareTokenValidationRules = DataCloudflareTokenValidationRules;
