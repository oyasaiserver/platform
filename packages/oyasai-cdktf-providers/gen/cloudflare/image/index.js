// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image cloudflare_image}
*/
export class Image extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_image";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Image resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Image to import
    * @param importFromId The id of the existing Image that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Image to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_image", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image cloudflare_image} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImageConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_image',
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
        this._creator = config.creator;
        this._file = config.file;
        this._id = config.id;
        this._metadata = config.metadata;
        this._requireSignedUrls = config.requireSignedUrls;
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
    // creator - computed: false, optional: true, required: false
    _creator;
    get creator() {
        return this.getStringAttribute('creator');
    }
    set creator(value) {
        this._creator = value;
    }
    resetCreator() {
        this._creator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get creatorInput() {
        return this._creator;
    }
    // file - computed: false, optional: true, required: false
    _file;
    get file() {
        return this.getStringAttribute('file');
    }
    set file(value) {
        this._file = value;
    }
    resetFile() {
        this._file = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fileInput() {
        return this._file;
    }
    // filename - computed: true, optional: false, required: false
    get filename() {
        return this.getStringAttribute('filename');
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
    // meta - computed: true, optional: false, required: false
    get meta() {
        return this.getStringAttribute('meta');
    }
    // metadata - computed: false, optional: true, required: false
    _metadata;
    get metadata() {
        return this.getStringAttribute('metadata');
    }
    set metadata(value) {
        this._metadata = value;
    }
    resetMetadata() {
        this._metadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metadataInput() {
        return this._metadata;
    }
    // require_signed_urls - computed: true, optional: true, required: false
    _requireSignedUrls;
    get requireSignedUrls() {
        return this.getBooleanAttribute('require_signed_urls');
    }
    set requireSignedUrls(value) {
        this._requireSignedUrls = value;
    }
    resetRequireSignedUrls() {
        this._requireSignedUrls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireSignedUrlsInput() {
        return this._requireSignedUrls;
    }
    // uploaded - computed: true, optional: false, required: false
    get uploaded() {
        return this.getStringAttribute('uploaded');
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
    // variants - computed: true, optional: false, required: false
    get variants() {
        return this.getListAttribute('variants');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            creator: cdktf.stringToTerraform(this._creator),
            file: cdktf.stringToTerraform(this._file),
            id: cdktf.stringToTerraform(this._id),
            metadata: cdktf.stringToTerraform(this._metadata),
            require_signed_urls: cdktf.booleanToTerraform(this._requireSignedUrls),
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
            creator: {
                value: cdktf.stringToHclTerraform(this._creator),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            file: {
                value: cdktf.stringToHclTerraform(this._file),
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
            metadata: {
                value: cdktf.stringToHclTerraform(this._metadata),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            require_signed_urls: {
                value: cdktf.booleanToHclTerraform(this._requireSignedUrls),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
