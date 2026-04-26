// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_key_configuration
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_key_configuration cloudflare_zero_trust_access_key_configuration}
*/
export class ZeroTrustAccessKeyConfiguration extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_access_key_configuration";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessKeyConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessKeyConfiguration to import
    * @param importFromId The id of the existing ZeroTrustAccessKeyConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_key_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessKeyConfiguration to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_key_configuration", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_key_configuration cloudflare_zero_trust_access_key_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessKeyConfigurationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_access_key_configuration',
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
        this._keyRotationIntervalDays = config.keyRotationIntervalDays;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: false, required: true
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // days_until_next_rotation - computed: true, optional: false, required: false
    get daysUntilNextRotation() {
        return this.getNumberAttribute('days_until_next_rotation');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // key_rotation_interval_days - computed: false, optional: false, required: true
    _keyRotationIntervalDays;
    get keyRotationIntervalDays() {
        return this.getNumberAttribute('key_rotation_interval_days');
    }
    set keyRotationIntervalDays(value) {
        this._keyRotationIntervalDays = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyRotationIntervalDaysInput() {
        return this._keyRotationIntervalDays;
    }
    // last_key_rotation_at - computed: true, optional: false, required: false
    get lastKeyRotationAt() {
        return this.getStringAttribute('last_key_rotation_at');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            key_rotation_interval_days: cdktf.numberToTerraform(this._keyRotationIntervalDays),
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
            key_rotation_interval_days: {
                value: cdktf.numberToHclTerraform(this._keyRotationIntervalDays),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
