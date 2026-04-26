// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_priority
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_priority cloudflare_cloudforce_one_request_priority}
*/
export class CloudforceOneRequestPriority extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_cloudforce_one_request_priority";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CloudforceOneRequestPriority resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudforceOneRequestPriority to import
    * @param importFromId The id of the existing CloudforceOneRequestPriority that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_priority#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudforceOneRequestPriority to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloudforce_one_request_priority", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_priority cloudflare_cloudforce_one_request_priority} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudforceOneRequestPriorityConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_cloudforce_one_request_priority',
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
        this._labels = config.labels;
        this._priority = config.priority;
        this._requirement = config.requirement;
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
    // content - computed: true, optional: false, required: false
    get content() {
        return this.getStringAttribute('content');
    }
    // created - computed: true, optional: false, required: false
    get created() {
        return this.getStringAttribute('created');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // labels - computed: false, optional: false, required: true
    _labels;
    get labels() {
        return this.getListAttribute('labels');
    }
    set labels(value) {
        this._labels = value;
    }
    // Temporarily expose input value. Use with caution.
    get labelsInput() {
        return this._labels;
    }
    // message_tokens - computed: true, optional: false, required: false
    get messageTokens() {
        return this.getNumberAttribute('message_tokens');
    }
    // priority - computed: false, optional: false, required: true
    _priority;
    get priority() {
        return this.getNumberAttribute('priority');
    }
    set priority(value) {
        this._priority = value;
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
    // requirement - computed: false, optional: false, required: true
    _requirement;
    get requirement() {
        return this.getStringAttribute('requirement');
    }
    set requirement(value) {
        this._requirement = value;
    }
    // Temporarily expose input value. Use with caution.
    get requirementInput() {
        return this._requirement;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // summary - computed: true, optional: false, required: false
    get summary() {
        return this.getStringAttribute('summary');
    }
    // tlp - computed: false, optional: false, required: true
    _tlp;
    get tlp() {
        return this.getStringAttribute('tlp');
    }
    set tlp(value) {
        this._tlp = value;
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
            labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
            priority: cdktf.numberToTerraform(this._priority),
            requirement: cdktf.stringToTerraform(this._requirement),
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
            labels: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            priority: {
                value: cdktf.numberToHclTerraform(this._priority),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            requirement: {
                value: cdktf.stringToHclTerraform(this._requirement),
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
