// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_token
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_token cloudflare_ai_search_token}
*/
export class AiSearchToken extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_ai_search_token";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AiSearchToken resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AiSearchToken to import
    * @param importFromId The id of the existing AiSearchToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_token#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AiSearchToken to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_search_token", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_token cloudflare_ai_search_token} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AiSearchTokenConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_ai_search_token',
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
        this._cfApiId = config.cfApiId;
        this._cfApiKey = config.cfApiKey;
        this._legacy = config.legacy;
        this._name = config.name;
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
    // cf_api_id - computed: false, optional: false, required: true
    _cfApiId;
    get cfApiId() {
        return this.getStringAttribute('cf_api_id');
    }
    set cfApiId(value) {
        this._cfApiId = value;
    }
    // Temporarily expose input value. Use with caution.
    get cfApiIdInput() {
        return this._cfApiId;
    }
    // cf_api_key - computed: false, optional: false, required: true
    _cfApiKey;
    get cfApiKey() {
        return this.getStringAttribute('cf_api_key');
    }
    set cfApiKey(value) {
        this._cfApiKey = value;
    }
    // Temporarily expose input value. Use with caution.
    get cfApiKeyInput() {
        return this._cfApiKey;
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // created_by - computed: true, optional: false, required: false
    get createdBy() {
        return this.getStringAttribute('created_by');
    }
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // legacy - computed: true, optional: true, required: false
    _legacy;
    get legacy() {
        return this.getBooleanAttribute('legacy');
    }
    set legacy(value) {
        this._legacy = value;
    }
    resetLegacy() {
        this._legacy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get legacyInput() {
        return this._legacy;
    }
    // modified_at - computed: true, optional: false, required: false
    get modifiedAt() {
        return this.getStringAttribute('modified_at');
    }
    // modified_by - computed: true, optional: false, required: false
    get modifiedBy() {
        return this.getStringAttribute('modified_by');
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            cf_api_id: cdktf.stringToTerraform(this._cfApiId),
            cf_api_key: cdktf.stringToTerraform(this._cfApiKey),
            legacy: cdktf.booleanToTerraform(this._legacy),
            name: cdktf.stringToTerraform(this._name),
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
            cf_api_id: {
                value: cdktf.stringToHclTerraform(this._cfApiId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cf_api_key: {
                value: cdktf.stringToHclTerraform(this._cfApiKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            legacy: {
                value: cdktf.booleanToHclTerraform(this._legacy),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
