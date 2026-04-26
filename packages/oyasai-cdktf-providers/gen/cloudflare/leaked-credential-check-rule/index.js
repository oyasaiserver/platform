// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/leaked_credential_check_rule
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/leaked_credential_check_rule cloudflare_leaked_credential_check_rule}
*/
export class LeakedCredentialCheckRule extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_leaked_credential_check_rule";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a LeakedCredentialCheckRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LeakedCredentialCheckRule to import
    * @param importFromId The id of the existing LeakedCredentialCheckRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/leaked_credential_check_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LeakedCredentialCheckRule to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_leaked_credential_check_rule", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/leaked_credential_check_rule cloudflare_leaked_credential_check_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LeakedCredentialCheckRuleConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_leaked_credential_check_rule',
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
        this._password = config.password;
        this._username = config.username;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // password - computed: false, optional: true, required: false
    _password;
    get password() {
        return this.getStringAttribute('password');
    }
    set password(value) {
        this._password = value;
    }
    resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get passwordInput() {
        return this._password;
    }
    // username - computed: false, optional: true, required: false
    _username;
    get username() {
        return this.getStringAttribute('username');
    }
    set username(value) {
        this._username = value;
    }
    resetUsername() {
        this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get usernameInput() {
        return this._username;
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
            password: cdktf.stringToTerraform(this._password),
            username: cdktf.stringToTerraform(this._username),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            password: {
                value: cdktf.stringToHclTerraform(this._password),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            username: {
                value: cdktf.stringToHclTerraform(this._username),
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
