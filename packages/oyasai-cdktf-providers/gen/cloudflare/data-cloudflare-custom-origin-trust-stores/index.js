"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_origin_trust_stores
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
exports.DataCloudflareCustomOriginTrustStores = exports.DataCloudflareCustomOriginTrustStoresResultList = exports.DataCloudflareCustomOriginTrustStoresResultOutputReference = void 0;
exports.dataCloudflareCustomOriginTrustStoresResultToTerraform = dataCloudflareCustomOriginTrustStoresResultToTerraform;
exports.dataCloudflareCustomOriginTrustStoresResultToHclTerraform = dataCloudflareCustomOriginTrustStoresResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareCustomOriginTrustStoresResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCustomOriginTrustStoresResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCustomOriginTrustStoresResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomOriginTrustStoresResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCustomOriginTrustStoresResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCustomOriginTrustStoresResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCustomOriginTrustStoresResultOutputReference.prototype, "certificate", {
        // certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomOriginTrustStoresResultOutputReference.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomOriginTrustStoresResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomOriginTrustStoresResultOutputReference.prototype, "issuer", {
        // issuer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomOriginTrustStoresResultOutputReference.prototype, "signature", {
        // signature - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signature');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomOriginTrustStoresResultOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomOriginTrustStoresResultOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomOriginTrustStoresResultOutputReference.prototype, "uploadedOn", {
        // uploaded_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uploaded_on');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCustomOriginTrustStoresResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCustomOriginTrustStoresResultOutputReference = DataCloudflareCustomOriginTrustStoresResultOutputReference;
var DataCloudflareCustomOriginTrustStoresResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomOriginTrustStoresResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCustomOriginTrustStoresResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareCustomOriginTrustStoresResultList.prototype.get = function (index) {
        return new DataCloudflareCustomOriginTrustStoresResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareCustomOriginTrustStoresResultList;
}(cdktf.ComplexList));
exports.DataCloudflareCustomOriginTrustStoresResultList = DataCloudflareCustomOriginTrustStoresResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_origin_trust_stores cloudflare_custom_origin_trust_stores}
*/
var DataCloudflareCustomOriginTrustStores = /** @class */ (function (_super) {
    __extends(DataCloudflareCustomOriginTrustStores, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_origin_trust_stores cloudflare_custom_origin_trust_stores} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCustomOriginTrustStoresConfig = {}
    */
    function DataCloudflareCustomOriginTrustStores(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_custom_origin_trust_stores',
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
        _this._result = new DataCloudflareCustomOriginTrustStoresResultList(_this, "result", false);
        _this._limit = config.limit;
        _this._maxItems = config.maxItems;
        _this._offset = config.offset;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareCustomOriginTrustStores resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCustomOriginTrustStores to import
    * @param importFromId The id of the existing DataCloudflareCustomOriginTrustStores that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_origin_trust_stores#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCustomOriginTrustStores to import is found
    */
    DataCloudflareCustomOriginTrustStores.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_custom_origin_trust_stores", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareCustomOriginTrustStores.prototype, "limit", {
        get: function () {
            return this.getNumberAttribute('limit');
        },
        set: function (value) {
            this._limit = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomOriginTrustStores.prototype.resetLimit = function () {
        this._limit = undefined;
    };
    Object.defineProperty(DataCloudflareCustomOriginTrustStores.prototype, "limitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._limit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomOriginTrustStores.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomOriginTrustStores.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareCustomOriginTrustStores.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomOriginTrustStores.prototype, "offset", {
        get: function () {
            return this.getNumberAttribute('offset');
        },
        set: function (value) {
            this._offset = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomOriginTrustStores.prototype.resetOffset = function () {
        this._offset = undefined;
    };
    Object.defineProperty(DataCloudflareCustomOriginTrustStores.prototype, "offsetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._offset;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomOriginTrustStores.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCustomOriginTrustStores.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCustomOriginTrustStores.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareCustomOriginTrustStores.prototype, "zoneIdInput", {
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
    DataCloudflareCustomOriginTrustStores.prototype.synthesizeAttributes = function () {
        return {
            limit: cdktf.numberToTerraform(this._limit),
            max_items: cdktf.numberToTerraform(this._maxItems),
            offset: cdktf.numberToTerraform(this._offset),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareCustomOriginTrustStores.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            limit: {
                value: cdktf.numberToHclTerraform(this._limit),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            offset: {
                value: cdktf.numberToHclTerraform(this._offset),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    DataCloudflareCustomOriginTrustStores.tfResourceType = "cloudflare_custom_origin_trust_stores";
    return DataCloudflareCustomOriginTrustStores;
}(cdktf.TerraformDataSource));
exports.DataCloudflareCustomOriginTrustStores = DataCloudflareCustomOriginTrustStores;
