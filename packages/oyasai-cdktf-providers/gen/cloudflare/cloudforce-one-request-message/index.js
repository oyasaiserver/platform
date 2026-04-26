// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_message
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_message cloudflare_cloudforce_one_request_message}
*/
export class CloudforceOneRequestMessage extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_cloudforce_one_request_message";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CloudforceOneRequestMessage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudforceOneRequestMessage to import
    * @param importFromId The id of the existing CloudforceOneRequestMessage that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_message#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudforceOneRequestMessage to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloudforce_one_request_message", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_message cloudflare_cloudforce_one_request_message} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudforceOneRequestMessageConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_cloudforce_one_request_message',
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
        this._content = config.content;
        this._requestId = config.requestId;
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
    // author - computed: true, optional: false, required: false
    get author() {
        return this.getStringAttribute('author');
    }
    // content - computed: false, optional: true, required: false
    _content;
    get content() {
        return this.getStringAttribute('content');
    }
    set content(value) {
        this._content = value;
    }
    resetContent() {
        this._content = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentInput() {
        return this._content;
    }
    // created - computed: true, optional: false, required: false
    get created() {
        return this.getStringAttribute('created');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getNumberAttribute('id');
    }
    // is_follow_on_request - computed: true, optional: false, required: false
    get isFollowOnRequest() {
        return this.getBooleanAttribute('is_follow_on_request');
    }
    // request_id - computed: false, optional: false, required: true
    _requestId;
    get requestId() {
        return this.getStringAttribute('request_id');
    }
    set requestId(value) {
        this._requestId = value;
    }
    // Temporarily expose input value. Use with caution.
    get requestIdInput() {
        return this._requestId;
    }
    // updated - computed: true, optional: false, required: false
    get updated() {
        return this.getStringAttribute('updated');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            content: cdktf.stringToTerraform(this._content),
            request_id: cdktf.stringToTerraform(this._requestId),
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
            content: {
                value: cdktf.stringToHclTerraform(this._content),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            request_id: {
                value: cdktf.stringToHclTerraform(this._requestId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
