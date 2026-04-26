"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_categories_list
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
exports.DataCloudflareZeroTrustGatewayCategoriesList = exports.DataCloudflareZeroTrustGatewayCategoriesListResultList = exports.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference = exports.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList = exports.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference = void 0;
exports.dataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesToTerraform = dataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesToTerraform;
exports.dataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesToHclTerraform = dataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesToHclTerraform;
exports.dataCloudflareZeroTrustGatewayCategoriesListResultToTerraform = dataCloudflareZeroTrustGatewayCategoriesListResultToTerraform;
exports.dataCloudflareZeroTrustGatewayCategoriesListResultToHclTerraform = dataCloudflareZeroTrustGatewayCategoriesListResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.prototype, "beta", {
        // beta - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('beta');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.prototype, "class", {
        // class - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('class');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference = DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference;
var DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList = DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList;
function dataCloudflareZeroTrustGatewayCategoriesListResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayCategoriesListResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // subcategories - computed: true, optional: false, required: false
        _this._subcategories = new DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList(_this, "subcategories", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.prototype, "beta", {
        // beta - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('beta');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.prototype, "class", {
        // class - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('class');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.prototype, "subcategories", {
        get: function () {
            return this._subcategories;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference = DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference;
var DataCloudflareZeroTrustGatewayCategoriesListResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayCategoriesListResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustGatewayCategoriesListResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustGatewayCategoriesListResultList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustGatewayCategoriesListResultList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustGatewayCategoriesListResultList = DataCloudflareZeroTrustGatewayCategoriesListResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_categories_list cloudflare_zero_trust_gateway_categories_list}
*/
var DataCloudflareZeroTrustGatewayCategoriesList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayCategoriesList, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_categories_list cloudflare_zero_trust_gateway_categories_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustGatewayCategoriesListConfig = {}
    */
    function DataCloudflareZeroTrustGatewayCategoriesList(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_gateway_categories_list',
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
        _this._result = new DataCloudflareZeroTrustGatewayCategoriesListResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayCategoriesList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustGatewayCategoriesList to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustGatewayCategoriesList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_categories_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustGatewayCategoriesList to import is found
    */
    DataCloudflareZeroTrustGatewayCategoriesList.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_gateway_categories_list", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustGatewayCategoriesList.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustGatewayCategoriesList.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustGatewayCategoriesList.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayCategoriesList.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustGatewayCategoriesList.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustGatewayCategoriesList.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayCategoriesList.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustGatewayCategoriesList.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareZeroTrustGatewayCategoriesList.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
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
    DataCloudflareZeroTrustGatewayCategoriesList.tfResourceType = "cloudflare_zero_trust_gateway_categories_list";
    return DataCloudflareZeroTrustGatewayCategoriesList;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustGatewayCategoriesList = DataCloudflareZeroTrustGatewayCategoriesList;
