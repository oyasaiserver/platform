"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_rules
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
exports.TokenValidationRules = exports.TokenValidationRulesSelectorOutputReference = exports.TokenValidationRulesSelectorIncludeList = exports.TokenValidationRulesSelectorIncludeOutputReference = exports.TokenValidationRulesSelectorExcludeList = exports.TokenValidationRulesSelectorExcludeOutputReference = exports.TokenValidationRulesPositionOutputReference = void 0;
exports.tokenValidationRulesPositionToTerraform = tokenValidationRulesPositionToTerraform;
exports.tokenValidationRulesPositionToHclTerraform = tokenValidationRulesPositionToHclTerraform;
exports.tokenValidationRulesSelectorExcludeToTerraform = tokenValidationRulesSelectorExcludeToTerraform;
exports.tokenValidationRulesSelectorExcludeToHclTerraform = tokenValidationRulesSelectorExcludeToHclTerraform;
exports.tokenValidationRulesSelectorIncludeToTerraform = tokenValidationRulesSelectorIncludeToTerraform;
exports.tokenValidationRulesSelectorIncludeToHclTerraform = tokenValidationRulesSelectorIncludeToHclTerraform;
exports.tokenValidationRulesSelectorToTerraform = tokenValidationRulesSelectorToTerraform;
exports.tokenValidationRulesSelectorToHclTerraform = tokenValidationRulesSelectorToHclTerraform;
var cdktf = require("cdktf");
function tokenValidationRulesPositionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        after: cdktf.stringToTerraform(struct.after),
        before: cdktf.stringToTerraform(struct.before),
        index: cdktf.numberToTerraform(struct.index),
    };
}
function tokenValidationRulesPositionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        after: {
            value: cdktf.stringToHclTerraform(struct.after),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        before: {
            value: cdktf.stringToHclTerraform(struct.before),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        index: {
            value: cdktf.numberToHclTerraform(struct.index),
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
var TokenValidationRulesPositionOutputReference = /** @class */ (function (_super) {
    __extends(TokenValidationRulesPositionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function TokenValidationRulesPositionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(TokenValidationRulesPositionOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._after !== undefined) {
                hasAnyValues = true;
                internalValueResult.after = this._after;
            }
            if (this._before !== undefined) {
                hasAnyValues = true;
                internalValueResult.before = this._before;
            }
            if (this._index !== undefined) {
                hasAnyValues = true;
                internalValueResult.index = this._index;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._after = undefined;
                this._before = undefined;
                this._index = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._after = value.after;
                this._before = value.before;
                this._index = value.index;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationRulesPositionOutputReference.prototype, "after", {
        get: function () {
            return this.getStringAttribute('after');
        },
        set: function (value) {
            this._after = value;
        },
        enumerable: false,
        configurable: true
    });
    TokenValidationRulesPositionOutputReference.prototype.resetAfter = function () {
        this._after = undefined;
    };
    Object.defineProperty(TokenValidationRulesPositionOutputReference.prototype, "afterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._after;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationRulesPositionOutputReference.prototype, "before", {
        get: function () {
            return this.getStringAttribute('before');
        },
        set: function (value) {
            this._before = value;
        },
        enumerable: false,
        configurable: true
    });
    TokenValidationRulesPositionOutputReference.prototype.resetBefore = function () {
        this._before = undefined;
    };
    Object.defineProperty(TokenValidationRulesPositionOutputReference.prototype, "beforeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._before;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationRulesPositionOutputReference.prototype, "index", {
        get: function () {
            return this.getNumberAttribute('index');
        },
        set: function (value) {
            this._index = value;
        },
        enumerable: false,
        configurable: true
    });
    TokenValidationRulesPositionOutputReference.prototype.resetIndex = function () {
        this._index = undefined;
    };
    Object.defineProperty(TokenValidationRulesPositionOutputReference.prototype, "indexInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._index;
        },
        enumerable: false,
        configurable: true
    });
    return TokenValidationRulesPositionOutputReference;
}(cdktf.ComplexObject));
exports.TokenValidationRulesPositionOutputReference = TokenValidationRulesPositionOutputReference;
function tokenValidationRulesSelectorExcludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        operation_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.operationIds),
    };
}
function tokenValidationRulesSelectorExcludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        operation_ids: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.operationIds),
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
var TokenValidationRulesSelectorExcludeOutputReference = /** @class */ (function (_super) {
    __extends(TokenValidationRulesSelectorExcludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function TokenValidationRulesSelectorExcludeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(TokenValidationRulesSelectorExcludeOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._operationIds !== undefined) {
                hasAnyValues = true;
                internalValueResult.operationIds = this._operationIds;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._operationIds = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._operationIds = value.operationIds;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationRulesSelectorExcludeOutputReference.prototype, "operationIds", {
        get: function () {
            return this.getListAttribute('operation_ids');
        },
        set: function (value) {
            this._operationIds = value;
        },
        enumerable: false,
        configurable: true
    });
    TokenValidationRulesSelectorExcludeOutputReference.prototype.resetOperationIds = function () {
        this._operationIds = undefined;
    };
    Object.defineProperty(TokenValidationRulesSelectorExcludeOutputReference.prototype, "operationIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operationIds;
        },
        enumerable: false,
        configurable: true
    });
    return TokenValidationRulesSelectorExcludeOutputReference;
}(cdktf.ComplexObject));
exports.TokenValidationRulesSelectorExcludeOutputReference = TokenValidationRulesSelectorExcludeOutputReference;
var TokenValidationRulesSelectorExcludeList = /** @class */ (function (_super) {
    __extends(TokenValidationRulesSelectorExcludeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function TokenValidationRulesSelectorExcludeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    TokenValidationRulesSelectorExcludeList.prototype.get = function (index) {
        return new TokenValidationRulesSelectorExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return TokenValidationRulesSelectorExcludeList;
}(cdktf.ComplexList));
exports.TokenValidationRulesSelectorExcludeList = TokenValidationRulesSelectorExcludeList;
function tokenValidationRulesSelectorIncludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        host: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.host),
    };
}
function tokenValidationRulesSelectorIncludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        host: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.host),
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
var TokenValidationRulesSelectorIncludeOutputReference = /** @class */ (function (_super) {
    __extends(TokenValidationRulesSelectorIncludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function TokenValidationRulesSelectorIncludeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(TokenValidationRulesSelectorIncludeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(TokenValidationRulesSelectorIncludeOutputReference.prototype, "host", {
        get: function () {
            return this.getListAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    TokenValidationRulesSelectorIncludeOutputReference.prototype.resetHost = function () {
        this._host = undefined;
    };
    Object.defineProperty(TokenValidationRulesSelectorIncludeOutputReference.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    return TokenValidationRulesSelectorIncludeOutputReference;
}(cdktf.ComplexObject));
exports.TokenValidationRulesSelectorIncludeOutputReference = TokenValidationRulesSelectorIncludeOutputReference;
var TokenValidationRulesSelectorIncludeList = /** @class */ (function (_super) {
    __extends(TokenValidationRulesSelectorIncludeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function TokenValidationRulesSelectorIncludeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    TokenValidationRulesSelectorIncludeList.prototype.get = function (index) {
        return new TokenValidationRulesSelectorIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return TokenValidationRulesSelectorIncludeList;
}(cdktf.ComplexList));
exports.TokenValidationRulesSelectorIncludeList = TokenValidationRulesSelectorIncludeList;
function tokenValidationRulesSelectorToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        exclude: cdktf.listMapper(tokenValidationRulesSelectorExcludeToTerraform, false)(struct.exclude),
        include: cdktf.listMapper(tokenValidationRulesSelectorIncludeToTerraform, false)(struct.include),
    };
}
function tokenValidationRulesSelectorToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        exclude: {
            value: cdktf.listMapperHcl(tokenValidationRulesSelectorExcludeToHclTerraform, false)(struct.exclude),
            isBlock: true,
            type: "list",
            storageClassType: "TokenValidationRulesSelectorExcludeList",
        },
        include: {
            value: cdktf.listMapperHcl(tokenValidationRulesSelectorIncludeToHclTerraform, false)(struct.include),
            isBlock: true,
            type: "list",
            storageClassType: "TokenValidationRulesSelectorIncludeList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var TokenValidationRulesSelectorOutputReference = /** @class */ (function (_super) {
    __extends(TokenValidationRulesSelectorOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function TokenValidationRulesSelectorOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // exclude - computed: false, optional: true, required: false
        _this._exclude = new TokenValidationRulesSelectorExcludeList(_this, "exclude", false);
        // include - computed: false, optional: true, required: false
        _this._include = new TokenValidationRulesSelectorIncludeList(_this, "include", false);
        return _this;
    }
    Object.defineProperty(TokenValidationRulesSelectorOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._exclude) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.exclude = (_b = this._exclude) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._include) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.include = (_d = this._include) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._exclude.internalValue = undefined;
                this._include.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._exclude.internalValue = value.exclude;
                this._include.internalValue = value.include;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationRulesSelectorOutputReference.prototype, "exclude", {
        get: function () {
            return this._exclude;
        },
        enumerable: false,
        configurable: true
    });
    TokenValidationRulesSelectorOutputReference.prototype.putExclude = function (value) {
        this._exclude.internalValue = value;
    };
    TokenValidationRulesSelectorOutputReference.prototype.resetExclude = function () {
        this._exclude.internalValue = undefined;
    };
    Object.defineProperty(TokenValidationRulesSelectorOutputReference.prototype, "excludeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exclude.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationRulesSelectorOutputReference.prototype, "include", {
        get: function () {
            return this._include;
        },
        enumerable: false,
        configurable: true
    });
    TokenValidationRulesSelectorOutputReference.prototype.putInclude = function (value) {
        this._include.internalValue = value;
    };
    TokenValidationRulesSelectorOutputReference.prototype.resetInclude = function () {
        this._include.internalValue = undefined;
    };
    Object.defineProperty(TokenValidationRulesSelectorOutputReference.prototype, "includeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._include.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return TokenValidationRulesSelectorOutputReference;
}(cdktf.ComplexObject));
exports.TokenValidationRulesSelectorOutputReference = TokenValidationRulesSelectorOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_rules cloudflare_token_validation_rules}
*/
var TokenValidationRules = /** @class */ (function (_super) {
    __extends(TokenValidationRules, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_rules cloudflare_token_validation_rules} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TokenValidationRulesConfig
    */
    function TokenValidationRules(scope, id, config) {
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
        // position - computed: false, optional: true, required: false
        _this._position = new TokenValidationRulesPositionOutputReference(_this, "position");
        // selector - computed: false, optional: false, required: true
        _this._selector = new TokenValidationRulesSelectorOutputReference(_this, "selector");
        _this._action = config.action;
        _this._description = config.description;
        _this._enabled = config.enabled;
        _this._expression = config.expression;
        _this._position.internalValue = config.position;
        _this._selector.internalValue = config.selector;
        _this._title = config.title;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a TokenValidationRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TokenValidationRules to import
    * @param importFromId The id of the existing TokenValidationRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TokenValidationRules to import is found
    */
    TokenValidationRules.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_token_validation_rules", importId: importFromId, provider: provider });
    };
    Object.defineProperty(TokenValidationRules.prototype, "action", {
        get: function () {
            return this.getStringAttribute('action');
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationRules.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationRules.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationRules.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationRules.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationRules.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationRules.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationRules.prototype, "expression", {
        get: function () {
            return this.getStringAttribute('expression');
        },
        set: function (value) {
            this._expression = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationRules.prototype, "expressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationRules.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationRules.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationRules.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: false,
        configurable: true
    });
    TokenValidationRules.prototype.putPosition = function (value) {
        this._position.internalValue = value;
    };
    TokenValidationRules.prototype.resetPosition = function () {
        this._position.internalValue = undefined;
    };
    Object.defineProperty(TokenValidationRules.prototype, "positionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._position.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationRules.prototype, "selector", {
        get: function () {
            return this._selector;
        },
        enumerable: false,
        configurable: true
    });
    TokenValidationRules.prototype.putSelector = function (value) {
        this._selector.internalValue = value;
    };
    Object.defineProperty(TokenValidationRules.prototype, "selectorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._selector.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationRules.prototype, "title", {
        get: function () {
            return this.getStringAttribute('title');
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationRules.prototype, "titleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationRules.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    TokenValidationRules.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(TokenValidationRules.prototype, "zoneIdInput", {
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
    TokenValidationRules.prototype.synthesizeAttributes = function () {
        return {
            action: cdktf.stringToTerraform(this._action),
            description: cdktf.stringToTerraform(this._description),
            enabled: cdktf.booleanToTerraform(this._enabled),
            expression: cdktf.stringToTerraform(this._expression),
            position: tokenValidationRulesPositionToTerraform(this._position.internalValue),
            selector: tokenValidationRulesSelectorToTerraform(this._selector.internalValue),
            title: cdktf.stringToTerraform(this._title),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    TokenValidationRules.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            action: {
                value: cdktf.stringToHclTerraform(this._action),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            expression: {
                value: cdktf.stringToHclTerraform(this._expression),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            position: {
                value: tokenValidationRulesPositionToHclTerraform(this._position.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "TokenValidationRulesPosition",
            },
            selector: {
                value: tokenValidationRulesSelectorToHclTerraform(this._selector.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "TokenValidationRulesSelector",
            },
            title: {
                value: cdktf.stringToHclTerraform(this._title),
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
    TokenValidationRules.tfResourceType = "cloudflare_token_validation_rules";
    return TokenValidationRules;
}(cdktf.TerraformResource));
exports.TokenValidationRules = TokenValidationRules;
