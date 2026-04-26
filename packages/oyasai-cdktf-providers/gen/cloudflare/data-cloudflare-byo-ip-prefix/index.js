// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/byo_ip_prefix
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/byo_ip_prefix cloudflare_byo_ip_prefix}
*/
export class DataCloudflareByoIpPrefix extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_byo_ip_prefix";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareByoIpPrefix resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareByoIpPrefix to import
    * @param importFromId The id of the existing DataCloudflareByoIpPrefix that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/byo_ip_prefix#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareByoIpPrefix to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_byo_ip_prefix", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/byo_ip_prefix cloudflare_byo_ip_prefix} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareByoIpPrefixConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_byo_ip_prefix',
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
        this._prefixId = config.prefixId;
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
    // advertised - computed: true, optional: false, required: false
    get advertised() {
        return this.getBooleanAttribute('advertised');
    }
    // advertised_modified_at - computed: true, optional: false, required: false
    get advertisedModifiedAt() {
        return this.getStringAttribute('advertised_modified_at');
    }
    // approved - computed: true, optional: false, required: false
    get approved() {
        return this.getStringAttribute('approved');
    }
    // asn - computed: true, optional: false, required: false
    get asn() {
        return this.getNumberAttribute('asn');
    }
    // cidr - computed: true, optional: false, required: false
    get cidr() {
        return this.getStringAttribute('cidr');
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // delegate_loa_creation - computed: true, optional: false, required: false
    get delegateLoaCreation() {
        return this.getBooleanAttribute('delegate_loa_creation');
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // irr_validation_state - computed: true, optional: false, required: false
    get irrValidationState() {
        return this.getStringAttribute('irr_validation_state');
    }
    // loa_document_id - computed: true, optional: false, required: false
    get loaDocumentId() {
        return this.getStringAttribute('loa_document_id');
    }
    // modified_at - computed: true, optional: false, required: false
    get modifiedAt() {
        return this.getStringAttribute('modified_at');
    }
    // on_demand_enabled - computed: true, optional: false, required: false
    get onDemandEnabled() {
        return this.getBooleanAttribute('on_demand_enabled');
    }
    // on_demand_locked - computed: true, optional: false, required: false
    get onDemandLocked() {
        return this.getBooleanAttribute('on_demand_locked');
    }
    // ownership_validation_state - computed: true, optional: false, required: false
    get ownershipValidationState() {
        return this.getStringAttribute('ownership_validation_state');
    }
    // ownership_validation_token - computed: true, optional: false, required: false
    get ownershipValidationToken() {
        return this.getStringAttribute('ownership_validation_token');
    }
    // prefix_id - computed: false, optional: false, required: true
    _prefixId;
    get prefixId() {
        return this.getStringAttribute('prefix_id');
    }
    set prefixId(value) {
        this._prefixId = value;
    }
    // Temporarily expose input value. Use with caution.
    get prefixIdInput() {
        return this._prefixId;
    }
    // rpki_validation_state - computed: true, optional: false, required: false
    get rpkiValidationState() {
        return this.getStringAttribute('rpki_validation_state');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            prefix_id: cdktf.stringToTerraform(this._prefixId),
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
            prefix_id: {
                value: cdktf.stringToHclTerraform(this._prefixId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
