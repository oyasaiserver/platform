// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request cloudflare_cloudforce_one_request}
*/
export class CloudforceOneRequest extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_cloudforce_one_request";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CloudforceOneRequest resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudforceOneRequest to import
    * @param importFromId The id of the existing CloudforceOneRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudforceOneRequest to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloudforce_one_request", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request cloudflare_cloudforce_one_request} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudforceOneRequestConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_cloudforce_one_request',
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
        this._priority = config.priority;
        this._requestType = config.requestType;
        this._summary = config.summary;
        this._tlp = config.tlp;
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
    // completed - computed: true, optional: false, required: false
    get completed() {
        return this.getStringAttribute('completed');
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
        return this.getStringAttribute('id');
    }
    // message_tokens - computed: true, optional: false, required: false
    get messageTokens() {
        return this.getNumberAttribute('message_tokens');
    }
    // priority - computed: false, optional: true, required: false
    _priority;
    get priority() {
        return this.getStringAttribute('priority');
    }
    set priority(value) {
        this._priority = value;
    }
    resetPriority() {
        this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get priorityInput() {
        return this._priority;
    }
    // readable_id - computed: true, optional: false, required: false
    get readableId() {
        return this.getStringAttribute('readable_id');
    }
    // request - computed: true, optional: false, required: false
    get request() {
        return this.getStringAttribute('request');
    }
    // request_type - computed: false, optional: true, required: false
    _requestType;
    get requestType() {
        return this.getStringAttribute('request_type');
    }
    set requestType(value) {
        this._requestType = value;
    }
    resetRequestType() {
        this._requestType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requestTypeInput() {
        return this._requestType;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // summary - computed: false, optional: true, required: false
    _summary;
    get summary() {
        return this.getStringAttribute('summary');
    }
    set summary(value) {
        this._summary = value;
    }
    resetSummary() {
        this._summary = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get summaryInput() {
        return this._summary;
    }
    // tlp - computed: false, optional: true, required: false
    _tlp;
    get tlp() {
        return this.getStringAttribute('tlp');
    }
    set tlp(value) {
        this._tlp = value;
    }
    resetTlp() {
        this._tlp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tlpInput() {
        return this._tlp;
    }
    // tokens - computed: true, optional: false, required: false
    get tokens() {
        return this.getNumberAttribute('tokens');
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
            priority: cdktf.stringToTerraform(this._priority),
            request_type: cdktf.stringToTerraform(this._requestType),
            summary: cdktf.stringToTerraform(this._summary),
            tlp: cdktf.stringToTerraform(this._tlp),
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
            priority: {
                value: cdktf.stringToHclTerraform(this._priority),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            request_type: {
                value: cdktf.stringToHclTerraform(this._requestType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            summary: {
                value: cdktf.stringToHclTerraform(this._summary),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tlp: {
                value: cdktf.stringToHclTerraform(this._tlp),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
