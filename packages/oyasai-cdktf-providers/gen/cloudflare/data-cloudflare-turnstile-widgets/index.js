"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/turnstile_widgets
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
exports.DataCloudflareTurnstileWidgets = exports.DataCloudflareTurnstileWidgetsResultList = exports.DataCloudflareTurnstileWidgetsResultOutputReference = void 0;
exports.dataCloudflareTurnstileWidgetsResultToTerraform = dataCloudflareTurnstileWidgetsResultToTerraform;
exports.dataCloudflareTurnstileWidgetsResultToHclTerraform = dataCloudflareTurnstileWidgetsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareTurnstileWidgetsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareTurnstileWidgetsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareTurnstileWidgetsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareTurnstileWidgetsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareTurnstileWidgetsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareTurnstileWidgetsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareTurnstileWidgetsResultOutputReference.prototype, "botFightMode", {
        // bot_fight_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('bot_fight_mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidgetsResultOutputReference.prototype, "clearanceLevel", {
        // clearance_level - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('clearance_level');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidgetsResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidgetsResultOutputReference.prototype, "domains", {
        // domains - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('domains');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidgetsResultOutputReference.prototype, "ephemeralId", {
        // ephemeral_id - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ephemeral_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidgetsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidgetsResultOutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidgetsResultOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidgetsResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidgetsResultOutputReference.prototype, "offlabel", {
        // offlabel - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('offlabel');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidgetsResultOutputReference.prototype, "region", {
        // region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('region');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidgetsResultOutputReference.prototype, "sitekey", {
        // sitekey - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sitekey');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareTurnstileWidgetsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareTurnstileWidgetsResultOutputReference = DataCloudflareTurnstileWidgetsResultOutputReference;
var DataCloudflareTurnstileWidgetsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareTurnstileWidgetsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareTurnstileWidgetsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareTurnstileWidgetsResultList.prototype.get = function (index) {
        return new DataCloudflareTurnstileWidgetsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareTurnstileWidgetsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareTurnstileWidgetsResultList = DataCloudflareTurnstileWidgetsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/turnstile_widgets cloudflare_turnstile_widgets}
*/
var DataCloudflareTurnstileWidgets = /** @class */ (function (_super) {
    __extends(DataCloudflareTurnstileWidgets, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/turnstile_widgets cloudflare_turnstile_widgets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareTurnstileWidgetsConfig = {}
    */
    function DataCloudflareTurnstileWidgets(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_turnstile_widgets',
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
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareTurnstileWidgetsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._direction = config.direction;
        _this._filter = config.filter;
        _this._maxItems = config.maxItems;
        _this._order = config.order;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareTurnstileWidgets resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareTurnstileWidgets to import
    * @param importFromId The id of the existing DataCloudflareTurnstileWidgets that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/turnstile_widgets#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareTurnstileWidgets to import is found
    */
    DataCloudflareTurnstileWidgets.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_turnstile_widgets", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareTurnstileWidgets.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTurnstileWidgets.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareTurnstileWidgets.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidgets.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTurnstileWidgets.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareTurnstileWidgets.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidgets.prototype, "filter", {
        get: function () {
            return this.getStringAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTurnstileWidgets.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataCloudflareTurnstileWidgets.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidgets.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTurnstileWidgets.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareTurnstileWidgets.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidgets.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTurnstileWidgets.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareTurnstileWidgets.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidgets.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareTurnstileWidgets.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            direction: cdktf.stringToTerraform(this._direction),
            filter: cdktf.stringToTerraform(this._filter),
            max_items: cdktf.numberToTerraform(this._maxItems),
            order: cdktf.stringToTerraform(this._order),
        };
    };
    DataCloudflareTurnstileWidgets.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            direction: {
                value: cdktf.stringToHclTerraform(this._direction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: cdktf.stringToHclTerraform(this._filter),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            order: {
                value: cdktf.stringToHclTerraform(this._order),
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
    DataCloudflareTurnstileWidgets.tfResourceType = "cloudflare_turnstile_widgets";
    return DataCloudflareTurnstileWidgets;
}(cdktf.TerraformDataSource));
exports.DataCloudflareTurnstileWidgets = DataCloudflareTurnstileWidgets;
