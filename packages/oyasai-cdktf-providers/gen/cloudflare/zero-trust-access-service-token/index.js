// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_service_token
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_service_token cloudflare_zero_trust_access_service_token}
*/
export class ZeroTrustAccessServiceToken extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_access_service_token";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessServiceToken resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessServiceToken to import
    * @param importFromId The id of the existing ZeroTrustAccessServiceToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_service_token#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessServiceToken to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_service_token", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_service_token cloudflare_zero_trust_access_service_token} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessServiceTokenConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_access_service_token',
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
        this._clientSecretVersion = config.clientSecretVersion;
        this._duration = config.duration;
        this._name = config.name;
        this._previousClientSecretExpiresAt = config.previousClientSecretExpiresAt;
        this._zoneId = config.zoneId;
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
    // client_id - computed: true, optional: false, required: false
    get clientId() {
        return this.getStringAttribute('client_id');
    }
    // client_secret - computed: true, optional: false, required: false
    get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    // client_secret_version - computed: true, optional: true, required: false
    _clientSecretVersion;
    get clientSecretVersion() {
        return this.getNumberAttribute('client_secret_version');
    }
    set clientSecretVersion(value) {
        this._clientSecretVersion = value;
    }
    resetClientSecretVersion() {
        this._clientSecretVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clientSecretVersionInput() {
        return this._clientSecretVersion;
    }
    // duration - computed: true, optional: true, required: false
    _duration;
    get duration() {
        return this.getStringAttribute('duration');
    }
    set duration(value) {
        this._duration = value;
    }
    resetDuration() {
        this._duration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get durationInput() {
        return this._duration;
    }
    // expires_at - computed: true, optional: false, required: false
    get expiresAt() {
        return this.getStringAttribute('expires_at');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
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
    // previous_client_secret_expires_at - computed: false, optional: true, required: false
    _previousClientSecretExpiresAt;
    get previousClientSecretExpiresAt() {
        return this.getStringAttribute('previous_client_secret_expires_at');
    }
    set previousClientSecretExpiresAt(value) {
        this._previousClientSecretExpiresAt = value;
    }
    resetPreviousClientSecretExpiresAt() {
        this._previousClientSecretExpiresAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get previousClientSecretExpiresAtInput() {
        return this._previousClientSecretExpiresAt;
    }
    // zone_id - computed: false, optional: true, required: false
    _zoneId;
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    set zoneId(value) {
        this._zoneId = value;
    }
    resetZoneId() {
        this._zoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zoneIdInput() {
        return this._zoneId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            client_secret_version: cdktf.numberToTerraform(this._clientSecretVersion),
            duration: cdktf.stringToTerraform(this._duration),
            name: cdktf.stringToTerraform(this._name),
            previous_client_secret_expires_at: cdktf.stringToTerraform(this._previousClientSecretExpiresAt),
            zone_id: cdktf.stringToTerraform(this._zoneId),
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
            client_secret_version: {
                value: cdktf.numberToHclTerraform(this._clientSecretVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            duration: {
                value: cdktf.stringToHclTerraform(this._duration),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            previous_client_secret_expires_at: {
                value: cdktf.stringToHclTerraform(this._previousClientSecretExpiresAt),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
