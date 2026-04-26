// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_variants
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function zoneCacheVariantsValueToTerraform(struct) {
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
export function zoneCacheVariantsValueToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZoneCacheVariantsValueOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
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
    }
    set internalValue(value) {
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
    }
    // avif - computed: false, optional: true, required: false
    _avif;
    get avif() {
        return this.getListAttribute('avif');
    }
    set avif(value) {
        this._avif = value;
    }
    resetAvif() {
        this._avif = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get avifInput() {
        return this._avif;
    }
    // bmp - computed: false, optional: true, required: false
    _bmp;
    get bmp() {
        return this.getListAttribute('bmp');
    }
    set bmp(value) {
        this._bmp = value;
    }
    resetBmp() {
        this._bmp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bmpInput() {
        return this._bmp;
    }
    // gif - computed: false, optional: true, required: false
    _gif;
    get gif() {
        return this.getListAttribute('gif');
    }
    set gif(value) {
        this._gif = value;
    }
    resetGif() {
        this._gif = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gifInput() {
        return this._gif;
    }
    // jp2 - computed: false, optional: true, required: false
    _jp2;
    get jp2() {
        return this.getListAttribute('jp2');
    }
    set jp2(value) {
        this._jp2 = value;
    }
    resetJp2() {
        this._jp2 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jp2Input() {
        return this._jp2;
    }
    // jpeg - computed: false, optional: true, required: false
    _jpeg;
    get jpeg() {
        return this.getListAttribute('jpeg');
    }
    set jpeg(value) {
        this._jpeg = value;
    }
    resetJpeg() {
        this._jpeg = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jpegInput() {
        return this._jpeg;
    }
    // jpg - computed: false, optional: true, required: false
    _jpg;
    get jpg() {
        return this.getListAttribute('jpg');
    }
    set jpg(value) {
        this._jpg = value;
    }
    resetJpg() {
        this._jpg = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jpgInput() {
        return this._jpg;
    }
    // jpg2 - computed: false, optional: true, required: false
    _jpg2;
    get jpg2() {
        return this.getListAttribute('jpg2');
    }
    set jpg2(value) {
        this._jpg2 = value;
    }
    resetJpg2() {
        this._jpg2 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jpg2Input() {
        return this._jpg2;
    }
    // png - computed: false, optional: true, required: false
    _png;
    get png() {
        return this.getListAttribute('png');
    }
    set png(value) {
        this._png = value;
    }
    resetPng() {
        this._png = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pngInput() {
        return this._png;
    }
    // tif - computed: false, optional: true, required: false
    _tif;
    get tif() {
        return this.getListAttribute('tif');
    }
    set tif(value) {
        this._tif = value;
    }
    resetTif() {
        this._tif = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tifInput() {
        return this._tif;
    }
    // tiff - computed: false, optional: true, required: false
    _tiff;
    get tiff() {
        return this.getListAttribute('tiff');
    }
    set tiff(value) {
        this._tiff = value;
    }
    resetTiff() {
        this._tiff = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tiffInput() {
        return this._tiff;
    }
    // webp - computed: false, optional: true, required: false
    _webp;
    get webp() {
        return this.getListAttribute('webp');
    }
    set webp(value) {
        this._webp = value;
    }
    resetWebp() {
        this._webp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get webpInput() {
        return this._webp;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_cache_variants cloudflare_zone_cache_variants}
*/
export class ZoneCacheVariants extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zone_cache_variants";
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
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_cache_variants", importId: importFromId, provider });
    }
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
    constructor(scope, id, config) {
        super(scope, id, {
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
        });
        this._value.internalValue = config.value;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // editable - computed: true, optional: false, required: false
    get editable() {
        return this.getBooleanAttribute('editable');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // value - computed: false, optional: false, required: true
    _value = new ZoneCacheVariantsValueOutputReference(this, "value");
    get value() {
        return this._value;
    }
    putValue(value) {
        this._value.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value.internalValue;
    }
    // zone_id - computed: false, optional: false, required: true
    _zoneId;
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    set zoneId(value) {
        this._zoneId = value;
    }
    // Temporarily expose input value. Use with caution.
    get zoneIdInput() {
        return this._zoneId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            value: zoneCacheVariantsValueToTerraform(this._value.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
