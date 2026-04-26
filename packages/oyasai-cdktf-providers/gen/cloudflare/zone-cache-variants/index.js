"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_variants
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
exports.ZoneCacheVariants = exports.ZoneCacheVariantsValueOutputReference = void 0;
exports.zoneCacheVariantsValueToTerraform = zoneCacheVariantsValueToTerraform;
exports.zoneCacheVariantsValueToHclTerraform = zoneCacheVariantsValueToHclTerraform;
var cdktf = require("cdktf");
function zoneCacheVariantsValueToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        avif: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.avif),
        bmp: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.bmp),
        gif: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.gif),
        jp2: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.jp2),
        jpeg: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.jpeg),
        jpg: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.jpg),
        jpg2: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.jpg2),
        png: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.png),
        tif: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.tif),
        tiff: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.tiff),
        webp: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.webp),
    };
}
function zoneCacheVariantsValueToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        avif: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.avif),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        bmp: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.bmp),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        gif: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.gif),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        jp2: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.jp2),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        jpeg: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.jpeg),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        jpg: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.jpg),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        jpg2: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.jpg2),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        png: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.png),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        tif: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.tif),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        tiff: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.tiff),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        webp: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.webp),
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
var ZoneCacheVariantsValueOutputReference = /** @class */ (function (_super) {
    __extends(ZoneCacheVariantsValueOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZoneCacheVariantsValueOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZoneCacheVariantsValueOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._avif !== undefined) {
                hasAnyValues = true;
                internalValueResult.avif = this._avif;
            }
            if (this._bmp !== undefined) {
                hasAnyValues = true;
                internalValueResult.bmp = this._bmp;
            }
            if (this._gif !== undefined) {
                hasAnyValues = true;
                internalValueResult.gif = this._gif;
            }
            if (this._jp2 !== undefined) {
                hasAnyValues = true;
                internalValueResult.jp2 = this._jp2;
            }
            if (this._jpeg !== undefined) {
                hasAnyValues = true;
                internalValueResult.jpeg = this._jpeg;
            }
            if (this._jpg !== undefined) {
                hasAnyValues = true;
                internalValueResult.jpg = this._jpg;
            }
            if (this._jpg2 !== undefined) {
                hasAnyValues = true;
                internalValueResult.jpg2 = this._jpg2;
            }
            if (this._png !== undefined) {
                hasAnyValues = true;
                internalValueResult.png = this._png;
            }
            if (this._tif !== undefined) {
                hasAnyValues = true;
                internalValueResult.tif = this._tif;
            }
            if (this._tiff !== undefined) {
                hasAnyValues = true;
                internalValueResult.tiff = this._tiff;
            }
            if (this._webp !== undefined) {
                hasAnyValues = true;
                internalValueResult.webp = this._webp;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._avif = undefined;
                this._bmp = undefined;
                this._gif = undefined;
                this._jp2 = undefined;
                this._jpeg = undefined;
                this._jpg = undefined;
                this._jpg2 = undefined;
                this._png = undefined;
                this._tif = undefined;
                this._tiff = undefined;
                this._webp = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._avif = value.avif;
                this._bmp = value.bmp;
                this._gif = value.gif;
                this._jp2 = value.jp2;
                this._jpeg = value.jpeg;
                this._jpg = value.jpg;
                this._jpg2 = value.jpg2;
                this._png = value.png;
                this._tif = value.tif;
                this._tiff = value.tiff;
                this._webp = value.webp;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneCacheVariantsValueOutputReference.prototype, "avif", {
        get: function () {
            return this.getListAttribute('avif');
        },
        set: function (value) {
            this._avif = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneCacheVariantsValueOutputReference.prototype.resetAvif = function () {
        this._avif = undefined;
    };
    Object.defineProperty(ZoneCacheVariantsValueOutputReference.prototype, "avifInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._avif;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneCacheVariantsValueOutputReference.prototype, "bmp", {
        get: function () {
            return this.getListAttribute('bmp');
        },
        set: function (value) {
            this._bmp = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneCacheVariantsValueOutputReference.prototype.resetBmp = function () {
        this._bmp = undefined;
    };
    Object.defineProperty(ZoneCacheVariantsValueOutputReference.prototype, "bmpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bmp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneCacheVariantsValueOutputReference.prototype, "gif", {
        get: function () {
            return this.getListAttribute('gif');
        },
        set: function (value) {
            this._gif = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneCacheVariantsValueOutputReference.prototype.resetGif = function () {
        this._gif = undefined;
    };
    Object.defineProperty(ZoneCacheVariantsValueOutputReference.prototype, "gifInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gif;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneCacheVariantsValueOutputReference.prototype, "jp2", {
        get: function () {
            return this.getListAttribute('jp2');
        },
        set: function (value) {
            this._jp2 = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneCacheVariantsValueOutputReference.prototype.resetJp2 = function () {
        this._jp2 = undefined;
    };
    Object.defineProperty(ZoneCacheVariantsValueOutputReference.prototype, "jp2Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jp2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneCacheVariantsValueOutputReference.prototype, "jpeg", {
        get: function () {
            return this.getListAttribute('jpeg');
        },
        set: function (value) {
            this._jpeg = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneCacheVariantsValueOutputReference.prototype.resetJpeg = function () {
        this._jpeg = undefined;
    };
    Object.defineProperty(ZoneCacheVariantsValueOutputReference.prototype, "jpegInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jpeg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneCacheVariantsValueOutputReference.prototype, "jpg", {
        get: function () {
            return this.getListAttribute('jpg');
        },
        set: function (value) {
            this._jpg = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneCacheVariantsValueOutputReference.prototype.resetJpg = function () {
        this._jpg = undefined;
    };
    Object.defineProperty(ZoneCacheVariantsValueOutputReference.prototype, "jpgInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jpg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneCacheVariantsValueOutputReference.prototype, "jpg2", {
        get: function () {
            return this.getListAttribute('jpg2');
        },
        set: function (value) {
            this._jpg2 = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneCacheVariantsValueOutputReference.prototype.resetJpg2 = function () {
        this._jpg2 = undefined;
    };
    Object.defineProperty(ZoneCacheVariantsValueOutputReference.prototype, "jpg2Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jpg2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneCacheVariantsValueOutputReference.prototype, "png", {
        get: function () {
            return this.getListAttribute('png');
        },
        set: function (value) {
            this._png = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneCacheVariantsValueOutputReference.prototype.resetPng = function () {
        this._png = undefined;
    };
    Object.defineProperty(ZoneCacheVariantsValueOutputReference.prototype, "pngInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._png;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneCacheVariantsValueOutputReference.prototype, "tif", {
        get: function () {
            return this.getListAttribute('tif');
        },
        set: function (value) {
            this._tif = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneCacheVariantsValueOutputReference.prototype.resetTif = function () {
        this._tif = undefined;
    };
    Object.defineProperty(ZoneCacheVariantsValueOutputReference.prototype, "tifInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tif;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneCacheVariantsValueOutputReference.prototype, "tiff", {
        get: function () {
            return this.getListAttribute('tiff');
        },
        set: function (value) {
            this._tiff = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneCacheVariantsValueOutputReference.prototype.resetTiff = function () {
        this._tiff = undefined;
    };
    Object.defineProperty(ZoneCacheVariantsValueOutputReference.prototype, "tiffInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tiff;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneCacheVariantsValueOutputReference.prototype, "webp", {
        get: function () {
            return this.getListAttribute('webp');
        },
        set: function (value) {
            this._webp = value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneCacheVariantsValueOutputReference.prototype.resetWebp = function () {
        this._webp = undefined;
    };
    Object.defineProperty(ZoneCacheVariantsValueOutputReference.prototype, "webpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._webp;
        },
        enumerable: false,
        configurable: true
    });
    return ZoneCacheVariantsValueOutputReference;
}(cdktf.ComplexObject));
exports.ZoneCacheVariantsValueOutputReference = ZoneCacheVariantsValueOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_variants cloudflare_zone_cache_variants}
*/
var ZoneCacheVariants = /** @class */ (function (_super) {
    __extends(ZoneCacheVariants, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_variants cloudflare_zone_cache_variants} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZoneCacheVariantsConfig
    */
    function ZoneCacheVariants(scope, id, config) {
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
        // value - computed: false, optional: false, required: true
        _this._value = new ZoneCacheVariantsValueOutputReference(_this, "value");
        _this._value.internalValue = config.value;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZoneCacheVariants resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZoneCacheVariants to import
    * @param importFromId The id of the existing ZoneCacheVariants that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_variants#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZoneCacheVariants to import is found
    */
    ZoneCacheVariants.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_cache_variants", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZoneCacheVariants.prototype, "editable", {
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
    Object.defineProperty(ZoneCacheVariants.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneCacheVariants.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneCacheVariants.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    ZoneCacheVariants.prototype.putValue = function (value) {
        this._value.internalValue = value;
    };
    Object.defineProperty(ZoneCacheVariants.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneCacheVariants.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZoneCacheVariants.prototype, "zoneIdInput", {
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
    ZoneCacheVariants.prototype.synthesizeAttributes = function () {
        return {
            value: zoneCacheVariantsValueToTerraform(this._value.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    ZoneCacheVariants.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            value: {
                value: zoneCacheVariantsValueToHclTerraform(this._value.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZoneCacheVariantsValue",
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
    ZoneCacheVariants.tfResourceType = "cloudflare_zone_cache_variants";
    return ZoneCacheVariants;
}(cdktf.TerraformResource));
exports.ZoneCacheVariants = ZoneCacheVariants;
