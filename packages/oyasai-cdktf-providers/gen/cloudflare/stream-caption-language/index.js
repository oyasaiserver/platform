// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_caption_language
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_caption_language cloudflare_stream_caption_language}
*/
export class StreamCaptionLanguage extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_stream_caption_language";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a StreamCaptionLanguage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the StreamCaptionLanguage to import
    * @param importFromId The id of the existing StreamCaptionLanguage that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_caption_language#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the StreamCaptionLanguage to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_stream_caption_language", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_caption_language cloudflare_stream_caption_language} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StreamCaptionLanguageConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_stream_caption_language',
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
        this._file = config.file;
        this._identifier = config.identifier;
        this._language = config.language;
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
    // generated - computed: true, optional: false, required: false
    get generated() {
        return this.getBooleanAttribute('generated');
    }
    // identifier - computed: false, optional: false, required: true
    _identifier;
    get identifier() {
        return this.getStringAttribute('identifier');
    }
    set identifier(value) {
        this._identifier = value;
    }
    // Temporarily expose input value. Use with caution.
    get identifierInput() {
        return this._identifier;
    }
    // label - computed: true, optional: false, required: false
    get label() {
        return this.getStringAttribute('label');
    }
    // language - computed: false, optional: false, required: true
    _language;
    get language() {
        return this.getStringAttribute('language');
    }
    set language(value) {
        this._language = value;
    }
    // Temporarily expose input value. Use with caution.
    get languageInput() {
        return this._language;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            file: cdktf.stringToTerraform(this._file),
            identifier: cdktf.stringToTerraform(this._identifier),
            language: cdktf.stringToTerraform(this._language),
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
            file: {
                value: cdktf.stringToHclTerraform(this._file),
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
            language: {
                value: cdktf.stringToHclTerraform(this._language),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
