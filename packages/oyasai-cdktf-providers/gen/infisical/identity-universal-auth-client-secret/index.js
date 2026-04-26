// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth_client_secret
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth_client_secret infisical_identity_universal_auth_client_secret}
*/
export class IdentityUniversalAuthClientSecret extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_identity_universal_auth_client_secret";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a IdentityUniversalAuthClientSecret resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentityUniversalAuthClientSecret to import
    * @param importFromId The id of the existing IdentityUniversalAuthClientSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth_client_secret#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentityUniversalAuthClientSecret to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_universal_auth_client_secret", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth_client_secret infisical_identity_universal_auth_client_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentityUniversalAuthClientSecretConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_identity_universal_auth_client_secret',
            terraformGeneratorMetadata: {
                providerName: 'infisical',
                providerVersion: '0.16.18'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._description = config.description;
        this._identityId = config.identityId;
        this._numberOfUsesLimit = config.numberOfUsesLimit;
        this._ttl = config.ttl;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // client_id - computed: true, optional: false, required: false
    get clientId() {
        return this.getStringAttribute('client_id');
    }
    // client_secret - computed: true, optional: false, required: false
    get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
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
    // identity_id - computed: false, optional: false, required: true
    _identityId;
    get identityId() {
        return this.getStringAttribute('identity_id');
    }
    set identityId(value) {
        this._identityId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityIdInput() {
        return this._identityId;
    }
    // is_revoked - computed: true, optional: false, required: false
    get isRevoked() {
        return this.getBooleanAttribute('is_revoked');
    }
    // number_of_uses - computed: true, optional: false, required: false
    get numberOfUses() {
        return this.getNumberAttribute('number_of_uses');
    }
    // number_of_uses_limit - computed: true, optional: true, required: false
    _numberOfUsesLimit;
    get numberOfUsesLimit() {
        return this.getNumberAttribute('number_of_uses_limit');
    }
    set numberOfUsesLimit(value) {
        this._numberOfUsesLimit = value;
    }
    resetNumberOfUsesLimit() {
        this._numberOfUsesLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get numberOfUsesLimitInput() {
        return this._numberOfUsesLimit;
    }
    // ttl - computed: true, optional: true, required: false
    _ttl;
    get ttl() {
        return this.getNumberAttribute('ttl');
    }
    set ttl(value) {
        this._ttl = value;
    }
    resetTtl() {
        this._ttl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ttlInput() {
        return this._ttl;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            description: cdktf.stringToTerraform(this._description),
            identity_id: cdktf.stringToTerraform(this._identityId),
            number_of_uses_limit: cdktf.numberToTerraform(this._numberOfUsesLimit),
            ttl: cdktf.numberToTerraform(this._ttl),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            identity_id: {
                value: cdktf.stringToHclTerraform(this._identityId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            number_of_uses_limit: {
                value: cdktf.numberToHclTerraform(this._numberOfUsesLimit),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            ttl: {
                value: cdktf.numberToHclTerraform(this._ttl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
