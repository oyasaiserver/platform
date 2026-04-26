// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_block_sender
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_block_sender cloudflare_email_security_block_sender}
*/
export class EmailSecurityBlockSender extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_email_security_block_sender";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a EmailSecurityBlockSender resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmailSecurityBlockSender to import
    * @param importFromId The id of the existing EmailSecurityBlockSender that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_block_sender#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmailSecurityBlockSender to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_security_block_sender", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_block_sender cloudflare_email_security_block_sender} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmailSecurityBlockSenderConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_email_security_block_sender',
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
        this._comments = config.comments;
        this._isRegex = config.isRegex;
        this._pattern = config.pattern;
        this._patternType = config.patternType;
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
    // comments - computed: false, optional: true, required: false
    _comments;
    get comments() {
        return this.getStringAttribute('comments');
    }
    set comments(value) {
        this._comments = value;
    }
    resetComments() {
        this._comments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commentsInput() {
        return this._comments;
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getNumberAttribute('id');
    }
    // is_regex - computed: false, optional: false, required: true
    _isRegex;
    get isRegex() {
        return this.getBooleanAttribute('is_regex');
    }
    set isRegex(value) {
        this._isRegex = value;
    }
    // Temporarily expose input value. Use with caution.
    get isRegexInput() {
        return this._isRegex;
    }
    // last_modified - computed: true, optional: false, required: false
    get lastModified() {
        return this.getStringAttribute('last_modified');
    }
    // pattern - computed: false, optional: false, required: true
    _pattern;
    get pattern() {
        return this.getStringAttribute('pattern');
    }
    set pattern(value) {
        this._pattern = value;
    }
    // Temporarily expose input value. Use with caution.
    get patternInput() {
        return this._pattern;
    }
    // pattern_type - computed: false, optional: false, required: true
    _patternType;
    get patternType() {
        return this.getStringAttribute('pattern_type');
    }
    set patternType(value) {
        this._patternType = value;
    }
    // Temporarily expose input value. Use with caution.
    get patternTypeInput() {
        return this._patternType;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            comments: cdktf.stringToTerraform(this._comments),
            is_regex: cdktf.booleanToTerraform(this._isRegex),
            pattern: cdktf.stringToTerraform(this._pattern),
            pattern_type: cdktf.stringToTerraform(this._patternType),
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
            comments: {
                value: cdktf.stringToHclTerraform(this._comments),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            is_regex: {
                value: cdktf.booleanToHclTerraform(this._isRegex),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            pattern: {
                value: cdktf.stringToHclTerraform(this._pattern),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pattern_type: {
                value: cdktf.stringToHclTerraform(this._patternType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
