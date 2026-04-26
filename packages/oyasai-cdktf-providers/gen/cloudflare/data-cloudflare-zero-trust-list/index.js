"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_list
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
exports.DataCloudflareZeroTrustList = exports.DataCloudflareZeroTrustListItemsList = exports.DataCloudflareZeroTrustListItemsOutputReference = exports.DataCloudflareZeroTrustListFilterOutputReference = void 0;
exports.dataCloudflareZeroTrustListFilterToTerraform = dataCloudflareZeroTrustListFilterToTerraform;
exports.dataCloudflareZeroTrustListFilterToHclTerraform = dataCloudflareZeroTrustListFilterToHclTerraform;
exports.dataCloudflareZeroTrustListItemsToTerraform = dataCloudflareZeroTrustListItemsToTerraform;
exports.dataCloudflareZeroTrustListItemsToHclTerraform = dataCloudflareZeroTrustListItemsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustListFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
    };
}
function dataCloudflareZeroTrustListFilterToHclTerraform(struct) {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var DataCloudflareZeroTrustListFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustListFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustListFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustListFilterOutputReference.prototype, "internalValue", {
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
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._type = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._type = value.type;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustListFilterOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustListFilterOutputReference.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustListFilterOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustListFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustListFilterOutputReference = DataCloudflareZeroTrustListFilterOutputReference;
function dataCloudflareZeroTrustListItemsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustListItemsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustListItemsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustListItemsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustListItemsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustListItemsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustListItemsOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustListItemsOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustListItemsOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustListItemsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustListItemsOutputReference = DataCloudflareZeroTrustListItemsOutputReference;
var DataCloudflareZeroTrustListItemsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustListItemsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustListItemsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustListItemsList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustListItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustListItemsList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustListItemsList = DataCloudflareZeroTrustListItemsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_list cloudflare_zero_trust_list}
*/
var DataCloudflareZeroTrustList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustList, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_list cloudflare_zero_trust_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustListConfig = {}
    */
    function DataCloudflareZeroTrustList(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_list',
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
        _this._filter = new DataCloudflareZeroTrustListFilterOutputReference(_this, "filter");
        // items - computed: true, optional: false, required: false
        _this._items = new DataCloudflareZeroTrustListItemsList(_this, "items", true);
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._listId = config.listId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustList to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustList to import is found
    */
    DataCloudflareZeroTrustList.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_list", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustList.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustList.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustList.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustList.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustList.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustList.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustList.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareZeroTrustList.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustList.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustList.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustList.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustList.prototype, "listCount", {
        // list_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('list_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustList.prototype, "listId", {
        get: function () {
            return this.getStringAttribute('list_id');
        },
        set: function (value) {
            this._listId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustList.prototype.resetListId = function () {
        this._listId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustList.prototype, "listIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._listId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustList.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustList.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustList.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustList.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareZeroTrustListFilterToTerraform(this._filter.internalValue),
            list_id: cdktf.stringToTerraform(this._listId),
        };
    };
    DataCloudflareZeroTrustList.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareZeroTrustListFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareZeroTrustListFilter",
            },
            list_id: {
                value: cdktf.stringToHclTerraform(this._listId),
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
    DataCloudflareZeroTrustList.tfResourceType = "cloudflare_zero_trust_list";
    return DataCloudflareZeroTrustList;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustList = DataCloudflareZeroTrustList;
