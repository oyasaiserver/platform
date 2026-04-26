// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/registrar_domain
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/registrar_domain cloudflare_registrar_domain}
*/
export class RegistrarDomain extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_registrar_domain";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RegistrarDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RegistrarDomain to import
    * @param importFromId The id of the existing RegistrarDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/registrar_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RegistrarDomain to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_registrar_domain", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/registrar_domain cloudflare_registrar_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RegistrarDomainConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_registrar_domain',
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
        this._autoRenew = config.autoRenew;
        this._domainName = config.domainName;
        this._locked = config.locked;
        this._privacy = config.privacy;
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
    // auto_renew - computed: false, optional: true, required: false
    _autoRenew;
    get autoRenew() {
        return this.getBooleanAttribute('auto_renew');
    }
    set autoRenew(value) {
        this._autoRenew = value;
    }
    resetAutoRenew() {
        this._autoRenew = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoRenewInput() {
        return this._autoRenew;
    }
    // domain_name - computed: false, optional: false, required: true
    _domainName;
    get domainName() {
        return this.getStringAttribute('domain_name');
    }
    set domainName(value) {
        this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    get domainNameInput() {
        return this._domainName;
    }
    // locked - computed: false, optional: true, required: false
    _locked;
    get locked() {
        return this.getBooleanAttribute('locked');
    }
    set locked(value) {
        this._locked = value;
    }
    resetLocked() {
        this._locked = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lockedInput() {
        return this._locked;
    }
    // privacy - computed: false, optional: true, required: false
    _privacy;
    get privacy() {
        return this.getBooleanAttribute('privacy');
    }
    set privacy(value) {
        this._privacy = value;
    }
    resetPrivacy() {
        this._privacy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get privacyInput() {
        return this._privacy;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            auto_renew: cdktf.booleanToTerraform(this._autoRenew),
            domain_name: cdktf.stringToTerraform(this._domainName),
            locked: cdktf.booleanToTerraform(this._locked),
            privacy: cdktf.booleanToTerraform(this._privacy),
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
            auto_renew: {
                value: cdktf.booleanToHclTerraform(this._autoRenew),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            domain_name: {
                value: cdktf.stringToHclTerraform(this._domainName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            locked: {
                value: cdktf.booleanToHclTerraform(this._locked),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            privacy: {
                value: cdktf.booleanToHclTerraform(this._privacy),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
