"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_watermarks
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
exports.DataCloudflareStreamWatermarks = exports.DataCloudflareStreamWatermarksResultList = exports.DataCloudflareStreamWatermarksResultOutputReference = void 0;
exports.dataCloudflareStreamWatermarksResultToTerraform = dataCloudflareStreamWatermarksResultToTerraform;
exports.dataCloudflareStreamWatermarksResultToHclTerraform = dataCloudflareStreamWatermarksResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareStreamWatermarksResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareStreamWatermarksResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareStreamWatermarksResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamWatermarksResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareStreamWatermarksResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareStreamWatermarksResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareStreamWatermarksResultOutputReference.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamWatermarksResultOutputReference.prototype, "downloadedFrom", {
        // downloaded_from - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('downloaded_from');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamWatermarksResultOutputReference.prototype, "height", {
        // height - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('height');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamWatermarksResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamWatermarksResultOutputReference.prototype, "opacity", {
        // opacity - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('opacity');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamWatermarksResultOutputReference.prototype, "padding", {
        // padding - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('padding');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamWatermarksResultOutputReference.prototype, "position", {
        // position - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('position');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamWatermarksResultOutputReference.prototype, "scale", {
        // scale - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('scale');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamWatermarksResultOutputReference.prototype, "size", {
        // size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamWatermarksResultOutputReference.prototype, "uid", {
        // uid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uid');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamWatermarksResultOutputReference.prototype, "width", {
        // width - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('width');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareStreamWatermarksResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareStreamWatermarksResultOutputReference = DataCloudflareStreamWatermarksResultOutputReference;
var DataCloudflareStreamWatermarksResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamWatermarksResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareStreamWatermarksResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareStreamWatermarksResultList.prototype.get = function (index) {
        return new DataCloudflareStreamWatermarksResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareStreamWatermarksResultList;
}(cdktf.ComplexList));
exports.DataCloudflareStreamWatermarksResultList = DataCloudflareStreamWatermarksResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_watermarks cloudflare_stream_watermarks}
*/
var DataCloudflareStreamWatermarks = /** @class */ (function (_super) {
    __extends(DataCloudflareStreamWatermarks, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_watermarks cloudflare_stream_watermarks} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareStreamWatermarksConfig = {}
    */
    function DataCloudflareStreamWatermarks(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_stream_watermarks',
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
        _this._result = new DataCloudflareStreamWatermarksResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareStreamWatermarks resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareStreamWatermarks to import
    * @param importFromId The id of the existing DataCloudflareStreamWatermarks that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/stream_watermarks#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareStreamWatermarks to import is found
    */
    DataCloudflareStreamWatermarks.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_stream_watermarks", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareStreamWatermarks.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareStreamWatermarks.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareStreamWatermarks.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamWatermarks.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareStreamWatermarks.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareStreamWatermarks.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareStreamWatermarks.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareStreamWatermarks.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareStreamWatermarks.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareStreamWatermarks.tfResourceType = "cloudflare_stream_watermarks";
    return DataCloudflareStreamWatermarks;
}(cdktf.TerraformDataSource));
exports.DataCloudflareStreamWatermarks = DataCloudflareStreamWatermarks;
