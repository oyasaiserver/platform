// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_priority
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_priority cloudflare_cloudforce_one_request_priority}
*/
export class DataCloudflareCloudforceOneRequestPriority extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_cloudforce_one_request_priority";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareCloudforceOneRequestPriority resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCloudforceOneRequestPriority to import
    * @param importFromId The id of the existing DataCloudflareCloudforceOneRequestPriority that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_priority#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCloudforceOneRequestPriority to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloudforce_one_request_priority", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_priority cloudflare_cloudforce_one_request_priority} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCloudforceOneRequestPriorityConfig
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
        this._priorityId = config.priorityId;
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
    // message_tokens - computed: true, optional: false, required: false
    get messageTokens() {
        return this.getNumberAttribute('message_tokens');
    }
    // priority - computed: true, optional: false, required: false
    get priority() {
        return this.getStringAttribute('priority');
    }
    // priority_id - computed: false, optional: false, required: true
    _priorityId;
    get priorityId() {
        return this.getStringAttribute('priority_id');
    }
    set priorityId(value) {
        this._priorityId = value;
    }
    // Temporarily expose input value. Use with caution.
    get priorityIdInput() {
        return this._priorityId;
    }
    // readable_id - computed: true, optional: false, required: false
    get readableId() {
        return this.getStringAttribute('readable_id');
    }
    // request - computed: true, optional: false, required: false
    get request() {
        return this.getStringAttribute('request');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // summary - computed: true, optional: false, required: false
    get summary() {
        return this.getStringAttribute('summary');
    }
    // tlp - computed: true, optional: false, required: false
    get tlp() {
        return this.getStringAttribute('tlp');
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
            priority_id: cdktf.stringToTerraform(this._priorityId),
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
            priority_id: {
                value: cdktf.stringToHclTerraform(this._priorityId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
