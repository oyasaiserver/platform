// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/byo_ip_prefix
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/byo_ip_prefix cloudflare_byo_ip_prefix}
*/
export class ByoIpPrefix extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_byo_ip_prefix";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ByoIpPrefix resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ByoIpPrefix to import
    * @param importFromId The id of the existing ByoIpPrefix that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/byo_ip_prefix#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ByoIpPrefix to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_byo_ip_prefix", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/byo_ip_prefix cloudflare_byo_ip_prefix} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ByoIpPrefixConfig
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
        this._asn = config.asn;
        this._cidr = config.cidr;
        this._delegateLoaCreation = config.delegateLoaCreation;
        this._description = config.description;
        this._loaDocumentId = config.loaDocumentId;
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
    // asn - computed: false, optional: false, required: true
    _asn;
    get asn() {
        return this.getNumberAttribute('asn');
    }
    set asn(value) {
        this._asn = value;
    }
    // Temporarily expose input value. Use with caution.
    get asnInput() {
        return this._asn;
    }
    // cidr - computed: false, optional: false, required: true
    _cidr;
    get cidr() {
        return this.getStringAttribute('cidr');
    }
    set cidr(value) {
        this._cidr = value;
    }
    // Temporarily expose input value. Use with caution.
    get cidrInput() {
        return this._cidr;
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // delegate_loa_creation - computed: true, optional: true, required: false
    _delegateLoaCreation;
    get delegateLoaCreation() {
        return this.getBooleanAttribute('delegate_loa_creation');
    }
    set delegateLoaCreation(value) {
        this._delegateLoaCreation = value;
    }
    resetDelegateLoaCreation() {
        this._delegateLoaCreation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get delegateLoaCreationInput() {
        return this._delegateLoaCreation;
    }
    // description - computed: false, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // irr_validation_state - computed: true, optional: false, required: false
    get irrValidationState() {
        return this.getStringAttribute('irr_validation_state');
    }
    // loa_document_id - computed: false, optional: true, required: false
    _loaDocumentId;
    get loaDocumentId() {
        return this.getStringAttribute('loa_document_id');
    }
    set loaDocumentId(value) {
        this._loaDocumentId = value;
    }
    resetLoaDocumentId() {
        this._loaDocumentId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loaDocumentIdInput() {
        return this._loaDocumentId;
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
            asn: cdktf.numberToTerraform(this._asn),
            cidr: cdktf.stringToTerraform(this._cidr),
            delegate_loa_creation: cdktf.booleanToTerraform(this._delegateLoaCreation),
            description: cdktf.stringToTerraform(this._description),
            loa_document_id: cdktf.stringToTerraform(this._loaDocumentId),
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
            asn: {
                value: cdktf.numberToHclTerraform(this._asn),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            cidr: {
                value: cdktf.stringToHclTerraform(this._cidr),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            delegate_loa_creation: {
                value: cdktf.booleanToHclTerraform(this._delegateLoaCreation),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            loa_document_id: {
                value: cdktf.stringToHclTerraform(this._loaDocumentId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
