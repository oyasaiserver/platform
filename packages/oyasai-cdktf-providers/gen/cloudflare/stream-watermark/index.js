// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_watermark
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_watermark cloudflare_stream_watermark}
*/
export class StreamWatermarkA extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_stream_watermark";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a StreamWatermarkA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the StreamWatermarkA to import
    * @param importFromId The id of the existing StreamWatermarkA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_watermark#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the StreamWatermarkA to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_stream_watermark", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_watermark cloudflare_stream_watermark} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StreamWatermarkAConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_stream_watermark',
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
        this._identifier = config.identifier;
        this._name = config.name;
        this._opacity = config.opacity;
        this._padding = config.padding;
        this._position = config.position;
        this._scale = config.scale;
        this._url = config.url;
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
    // created - computed: true, optional: false, required: false
    get created() {
        return this.getStringAttribute('created');
    }
    // downloaded_from - computed: true, optional: false, required: false
    get downloadedFrom() {
        return this.getStringAttribute('downloaded_from');
    }
    // height - computed: true, optional: false, required: false
    get height() {
        return this.getNumberAttribute('height');
    }
    // identifier - computed: false, optional: true, required: false
    _identifier;
    get identifier() {
        return this.getStringAttribute('identifier');
    }
    set identifier(value) {
        this._identifier = value;
    }
    resetIdentifier() {
        this._identifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get identifierInput() {
        return this._identifier;
    }
    // name - computed: true, optional: true, required: false
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // opacity - computed: true, optional: true, required: false
    _opacity;
    get opacity() {
        return this.getNumberAttribute('opacity');
    }
    set opacity(value) {
        this._opacity = value;
    }
    resetOpacity() {
        this._opacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get opacityInput() {
        return this._opacity;
    }
    // padding - computed: true, optional: true, required: false
    _padding;
    get padding() {
        return this.getNumberAttribute('padding');
    }
    set padding(value) {
        this._padding = value;
    }
    resetPadding() {
        this._padding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get paddingInput() {
        return this._padding;
    }
    // position - computed: true, optional: true, required: false
    _position;
    get position() {
        return this.getStringAttribute('position');
    }
    set position(value) {
        this._position = value;
    }
    resetPosition() {
        this._position = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get positionInput() {
        return this._position;
    }
    // scale - computed: true, optional: true, required: false
    _scale;
    get scale() {
        return this.getNumberAttribute('scale');
    }
    set scale(value) {
        this._scale = value;
    }
    resetScale() {
        this._scale = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scaleInput() {
        return this._scale;
    }
    // size - computed: true, optional: false, required: false
    get size() {
        return this.getNumberAttribute('size');
    }
    // uid - computed: true, optional: false, required: false
    get uid() {
        return this.getStringAttribute('uid');
    }
    // url - computed: false, optional: true, required: false
    _url;
    get url() {
        return this.getStringAttribute('url');
    }
    set url(value) {
        this._url = value;
    }
    resetUrl() {
        this._url = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get urlInput() {
        return this._url;
    }
    // width - computed: true, optional: false, required: false
    get width() {
        return this.getNumberAttribute('width');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            identifier: cdktf.stringToTerraform(this._identifier),
            name: cdktf.stringToTerraform(this._name),
            opacity: cdktf.numberToTerraform(this._opacity),
            padding: cdktf.numberToTerraform(this._padding),
            position: cdktf.stringToTerraform(this._position),
            scale: cdktf.numberToTerraform(this._scale),
            url: cdktf.stringToTerraform(this._url),
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
            identifier: {
                value: cdktf.stringToHclTerraform(this._identifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            opacity: {
                value: cdktf.numberToHclTerraform(this._opacity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            padding: {
                value: cdktf.numberToHclTerraform(this._padding),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            position: {
                value: cdktf.stringToHclTerraform(this._position),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scale: {
                value: cdktf.numberToHclTerraform(this._scale),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            url: {
                value: cdktf.stringToHclTerraform(this._url),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
