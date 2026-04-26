// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_scoring_integration
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_scoring_integration cloudflare_zero_trust_risk_scoring_integration}
*/
export class ZeroTrustRiskScoringIntegration extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_risk_scoring_integration";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustRiskScoringIntegration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustRiskScoringIntegration to import
    * @param importFromId The id of the existing ZeroTrustRiskScoringIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_scoring_integration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustRiskScoringIntegration to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_risk_scoring_integration", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_scoring_integration cloudflare_zero_trust_risk_scoring_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustRiskScoringIntegrationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_risk_scoring_integration',
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
        this._active = config.active;
        this._integrationType = config.integrationType;
        this._referenceId = config.referenceId;
        this._tenantUrl = config.tenantUrl;
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
    // account_tag - computed: true, optional: false, required: false
    get accountTag() {
        return this.getStringAttribute('account_tag');
    }
    // active - computed: false, optional: true, required: false
    _active;
    get active() {
        return this.getBooleanAttribute('active');
    }
    set active(value) {
        this._active = value;
    }
    resetActive() {
        this._active = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get activeInput() {
        return this._active;
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // integration_type - computed: false, optional: false, required: true
    _integrationType;
    get integrationType() {
        return this.getStringAttribute('integration_type');
    }
    set integrationType(value) {
        this._integrationType = value;
    }
    // Temporarily expose input value. Use with caution.
    get integrationTypeInput() {
        return this._integrationType;
    }
    // reference_id - computed: false, optional: true, required: false
    _referenceId;
    get referenceId() {
        return this.getStringAttribute('reference_id');
    }
    set referenceId(value) {
        this._referenceId = value;
    }
    resetReferenceId() {
        this._referenceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get referenceIdInput() {
        return this._referenceId;
    }
    // tenant_url - computed: false, optional: false, required: true
    _tenantUrl;
    get tenantUrl() {
        return this.getStringAttribute('tenant_url');
    }
    set tenantUrl(value) {
        this._tenantUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    get tenantUrlInput() {
        return this._tenantUrl;
    }
    // well_known_url - computed: true, optional: false, required: false
    get wellKnownUrl() {
        return this.getStringAttribute('well_known_url');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            active: cdktf.booleanToTerraform(this._active),
            integration_type: cdktf.stringToTerraform(this._integrationType),
            reference_id: cdktf.stringToTerraform(this._referenceId),
            tenant_url: cdktf.stringToTerraform(this._tenantUrl),
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
            active: {
                value: cdktf.booleanToHclTerraform(this._active),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            integration_type: {
                value: cdktf.stringToHclTerraform(this._integrationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            reference_id: {
                value: cdktf.stringToHclTerraform(this._referenceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tenant_url: {
                value: cdktf.stringToHclTerraform(this._tenantUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
