"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_cache_variants
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
exports.DataCloudflareZoneCacheVariants = exports.DataCloudflareZoneCacheVariantsValueOutputReference = void 0;
exports.dataCloudflareZoneCacheVariantsValueToTerraform = dataCloudflareZoneCacheVariantsValueToTerraform;
exports.dataCloudflareZoneCacheVariantsValueToHclTerraform = dataCloudflareZoneCacheVariantsValueToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZoneCacheVariantsValueToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZoneCacheVariantsValueToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZoneCacheVariantsValueOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZoneCacheVariantsValueOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZoneCacheVariantsValueOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZoneCacheVariantsValueOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZoneCacheVariantsValueOutputReference.prototype, "avif", {
        // avif - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('avif');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneCacheVariantsValueOutputReference.prototype, "bmp", {
        // bmp - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('bmp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneCacheVariantsValueOutputReference.prototype, "gif", {
        // gif - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('gif');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneCacheVariantsValueOutputReference.prototype, "jp2", {
        // jp2 - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('jp2');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneCacheVariantsValueOutputReference.prototype, "jpeg", {
        // jpeg - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('jpeg');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneCacheVariantsValueOutputReference.prototype, "jpg", {
        // jpg - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('jpg');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneCacheVariantsValueOutputReference.prototype, "jpg2", {
        // jpg2 - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('jpg2');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneCacheVariantsValueOutputReference.prototype, "png", {
        // png - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('png');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneCacheVariantsValueOutputReference.prototype, "tif", {
        // tif - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('tif');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneCacheVariantsValueOutputReference.prototype, "tiff", {
        // tiff - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('tiff');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneCacheVariantsValueOutputReference.prototype, "webp", {
        // webp - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('webp');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZoneCacheVariantsValueOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZoneCacheVariantsValueOutputReference = DataCloudflareZoneCacheVariantsValueOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_cache_variants cloudflare_zone_cache_variants}
*/
var DataCloudflareZoneCacheVariants = /** @class */ (function (_super) {
    __extends(DataCloudflareZoneCacheVariants, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_cache_variants cloudflare_zone_cache_variants} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZoneCacheVariantsConfig = {}
    */
    function DataCloudflareZoneCacheVariants(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zone_cache_variants',
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
        // value - computed: true, optional: false, required: false
        _this._value = new DataCloudflareZoneCacheVariantsValueOutputReference(_this, "value");
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZoneCacheVariants resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZoneCacheVariants to import
    * @param importFromId The id of the existing DataCloudflareZoneCacheVariants that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_cache_variants#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZoneCacheVariants to import is found
    */
    DataCloudflareZoneCacheVariants.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_cache_variants", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZoneCacheVariants.prototype, "editable", {
        // ==========
        // ATTRIBUTES
        // ==========
        // editable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('editable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneCacheVariants.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneCacheVariants.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneCacheVariants.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneCacheVariants.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneCacheVariants.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareZoneCacheVariants.prototype, "zoneIdInput", {
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
    DataCloudflareZoneCacheVariants.prototype.synthesizeAttributes = function () {
        return {
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareZoneCacheVariants.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
    DataCloudflareZoneCacheVariants.tfResourceType = "cloudflare_zone_cache_variants";
    return DataCloudflareZoneCacheVariants;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZoneCacheVariants = DataCloudflareZoneCacheVariants;
