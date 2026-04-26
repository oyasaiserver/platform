// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image_variant
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function imageVariantOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fit: cdktf.stringToTerraform(struct.fit),
        height: cdktf.numberToTerraform(struct.height),
        metadata: cdktf.stringToTerraform(struct.metadata),
        width: cdktf.numberToTerraform(struct.width),
    };
}
export function imageVariantOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        fit: {
            value: cdktf.stringToHclTerraform(struct.fit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        height: {
            value: cdktf.numberToHclTerraform(struct.height),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        metadata: {
            value: cdktf.stringToHclTerraform(struct.metadata),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        width: {
            value: cdktf.numberToHclTerraform(struct.width),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ImageVariantOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._fit !== undefined) {
            hasAnyValues = true;
            internalValueResult.fit = this._fit;
        }
        if (this._height !== undefined) {
            hasAnyValues = true;
            internalValueResult.height = this._height;
        }
        if (this._metadata !== undefined) {
            hasAnyValues = true;
            internalValueResult.metadata = this._metadata;
        }
        if (this._width !== undefined) {
            hasAnyValues = true;
            internalValueResult.width = this._width;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fit = undefined;
            this._height = undefined;
            this._metadata = undefined;
            this._width = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fit = value.fit;
            this._height = value.height;
            this._metadata = value.metadata;
            this._width = value.width;
        }
    }
    // fit - computed: false, optional: false, required: true
    _fit;
    get fit() {
        return this.getStringAttribute('fit');
    }
    set fit(value) {
        this._fit = value;
    }
    // Temporarily expose input value. Use with caution.
    get fitInput() {
        return this._fit;
    }
    // height - computed: false, optional: false, required: true
    _height;
    get height() {
        return this.getNumberAttribute('height');
    }
    set height(value) {
        this._height = value;
    }
    // Temporarily expose input value. Use with caution.
    get heightInput() {
        return this._height;
    }
    // metadata - computed: false, optional: false, required: true
    _metadata;
    get metadata() {
        return this.getStringAttribute('metadata');
    }
    set metadata(value) {
        this._metadata = value;
    }
    // Temporarily expose input value. Use with caution.
    get metadataInput() {
        return this._metadata;
    }
    // width - computed: false, optional: false, required: true
    _width;
    get width() {
        return this.getNumberAttribute('width');
    }
    set width(value) {
        this._width = value;
    }
    // Temporarily expose input value. Use with caution.
    get widthInput() {
        return this._width;
    }
}
export function imageVariantVariantOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function imageVariantVariantOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ImageVariantVariantOptionsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // fit - computed: true, optional: false, required: false
    get fit() {
        return this.getStringAttribute('fit');
    }
    // height - computed: true, optional: false, required: false
    get height() {
        return this.getNumberAttribute('height');
    }
    // metadata - computed: true, optional: false, required: false
    get metadata() {
        return this.getStringAttribute('metadata');
    }
    // width - computed: true, optional: false, required: false
    get width() {
        return this.getNumberAttribute('width');
    }
}
export function imageVariantVariantToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function imageVariantVariantToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ImageVariantVariantOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // never_require_signed_urls - computed: true, optional: false, required: false
    get neverRequireSignedUrls() {
        return this.getBooleanAttribute('never_require_signed_urls');
    }
    // options - computed: true, optional: false, required: false
    _options = new ImageVariantVariantOptionsOutputReference(this, "options");
    get options() {
        return this._options;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image_variant cloudflare_image_variant}
*/
export class ImageVariant extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_image_variant";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ImageVariant resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ImageVariant to import
    * @param importFromId The id of the existing ImageVariant that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image_variant#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ImageVariant to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_image_variant", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image_variant cloudflare_image_variant} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImageVariantConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_image_variant',
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
        this._accountId = config.accountId;
        this._id = config.id;
        this._neverRequireSignedUrls = config.neverRequireSignedUrls;
        this._options.internalValue = config.options;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: true, required: false
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // id - computed: false, optional: false, required: true
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // never_require_signed_urls - computed: true, optional: true, required: false
    _neverRequireSignedUrls;
    get neverRequireSignedUrls() {
        return this.getBooleanAttribute('never_require_signed_urls');
    }
    set neverRequireSignedUrls(value) {
        this._neverRequireSignedUrls = value;
    }
    resetNeverRequireSignedUrls() {
        this._neverRequireSignedUrls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get neverRequireSignedUrlsInput() {
        return this._neverRequireSignedUrls;
    }
    // options - computed: false, optional: false, required: true
    _options = new ImageVariantOptionsOutputReference(this, "options");
    get options() {
        return this._options;
    }
    putOptions(value) {
        this._options.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get optionsInput() {
        return this._options.internalValue;
    }
    // variant - computed: true, optional: false, required: false
    _variant = new ImageVariantVariantOutputReference(this, "variant");
    get variant() {
        return this._variant;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            id: cdktf.stringToTerraform(this._id),
            never_require_signed_urls: cdktf.booleanToTerraform(this._neverRequireSignedUrls),
            options: imageVariantOptionsToTerraform(this._options.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            never_require_signed_urls: {
                value: cdktf.booleanToHclTerraform(this._neverRequireSignedUrls),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            options: {
                value: imageVariantOptionsToHclTerraform(this._options.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ImageVariantOptions",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
