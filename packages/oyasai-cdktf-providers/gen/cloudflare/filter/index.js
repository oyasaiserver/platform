"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/filter
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
exports.Filter = exports.FilterBodyList = exports.FilterBodyOutputReference = void 0;
exports.filterBodyToTerraform = filterBodyToTerraform;
exports.filterBodyToHclTerraform = filterBodyToHclTerraform;
var cdktf = require("cdktf");
function filterBodyToTerraform(struct) {
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
function filterBodyToHclTerraform(struct) {
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
var FilterBodyOutputReference = /** @class */ (function (_super) {
    __extends(FilterBodyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function FilterBodyOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(FilterBodyOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(FilterBodyOutputReference.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    FilterBodyOutputReference.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(FilterBodyOutputReference.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilterBodyOutputReference.prototype, "expression", {
        get: function () {
            return this.getStringAttribute('expression');
        },
        set: function (value) {
            this._expression = value;
        },
        enumerable: false,
        configurable: true
    });
    FilterBodyOutputReference.prototype.resetExpression = function () {
        this._expression = undefined;
    };
    Object.defineProperty(FilterBodyOutputReference.prototype, "expressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilterBodyOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilterBodyOutputReference.prototype, "paused", {
        get: function () {
            return this.getBooleanAttribute('paused');
        },
        set: function (value) {
            this._paused = value;
        },
        enumerable: false,
        configurable: true
    });
    FilterBodyOutputReference.prototype.resetPaused = function () {
        this._paused = undefined;
    };
    Object.defineProperty(FilterBodyOutputReference.prototype, "pausedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._paused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilterBodyOutputReference.prototype, "ref", {
        get: function () {
            return this.getStringAttribute('ref');
        },
        set: function (value) {
            this._ref = value;
        },
        enumerable: false,
        configurable: true
    });
    FilterBodyOutputReference.prototype.resetRef = function () {
        this._ref = undefined;
    };
    Object.defineProperty(FilterBodyOutputReference.prototype, "refInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ref;
        },
        enumerable: false,
        configurable: true
    });
    return FilterBodyOutputReference;
}(cdktf.ComplexObject));
exports.FilterBodyOutputReference = FilterBodyOutputReference;
var FilterBodyList = /** @class */ (function (_super) {
    __extends(FilterBodyList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function FilterBodyList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    FilterBodyList.prototype.get = function (index) {
        return new FilterBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return FilterBodyList;
}(cdktf.ComplexList));
exports.FilterBodyList = FilterBodyList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/filter cloudflare_filter}
*/
var Filter = /** @class */ (function (_super) {
    __extends(Filter, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/filter cloudflare_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FilterConfig
    */
    function Filter(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_filter',
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
        // body - computed: false, optional: false, required: true
        _this._body = new FilterBodyList(_this, "body", false);
        _this._body.internalValue = config.body;
        _this._description = config.description;
        _this._expression = config.expression;
        _this._paused = config.paused;
        _this._ref = config.ref;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Filter resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Filter to import
    * @param importFromId The id of the existing Filter that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/filter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Filter to import is found
    */
    Filter.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_filter", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Filter.prototype, "body", {
        get: function () {
            return this._body;
        },
        enumerable: false,
        configurable: true
    });
    Filter.prototype.putBody = function (value) {
        this._body.internalValue = value;
    };
    Object.defineProperty(Filter.prototype, "bodyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._body.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Filter.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Filter.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "expression", {
        get: function () {
            return this.getStringAttribute('expression');
        },
        set: function (value) {
            this._expression = value;
        },
        enumerable: false,
        configurable: true
    });
    Filter.prototype.resetExpression = function () {
        this._expression = undefined;
    };
    Object.defineProperty(Filter.prototype, "expressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "paused", {
        get: function () {
            return this.getBooleanAttribute('paused');
        },
        set: function (value) {
            this._paused = value;
        },
        enumerable: false,
        configurable: true
    });
    Filter.prototype.resetPaused = function () {
        this._paused = undefined;
    };
    Object.defineProperty(Filter.prototype, "pausedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._paused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "ref", {
        get: function () {
            return this.getStringAttribute('ref');
        },
        set: function (value) {
            this._ref = value;
        },
        enumerable: false,
        configurable: true
    });
    Filter.prototype.resetRef = function () {
        this._ref = undefined;
    };
    Object.defineProperty(Filter.prototype, "refInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ref;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Filter.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(Filter.prototype, "zoneIdInput", {
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
    Filter.prototype.synthesizeAttributes = function () {
        return {
            body: cdktf.listMapper(filterBodyToTerraform, false)(this._body.internalValue),
            description: cdktf.stringToTerraform(this._description),
            expression: cdktf.stringToTerraform(this._expression),
            paused: cdktf.booleanToTerraform(this._paused),
            ref: cdktf.stringToTerraform(this._ref),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    Filter.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            body: {
                value: cdktf.listMapperHcl(filterBodyToHclTerraform, false)(this._body.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "FilterBodyList",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            expression: {
                value: cdktf.stringToHclTerraform(this._expression),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            paused: {
                value: cdktf.booleanToHclTerraform(this._paused),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            ref: {
                value: cdktf.stringToHclTerraform(this._ref),
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
    Filter.tfResourceType = "cloudflare_filter";
    return Filter;
}(cdktf.TerraformResource));
exports.Filter = Filter;
