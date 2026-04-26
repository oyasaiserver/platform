// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_gpg_key
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_gpg_key github_user_gpg_key}
*/
export class UserGpgKey extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_user_gpg_key";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a UserGpgKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the UserGpgKey to import
    * @param importFromId The id of the existing UserGpgKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_gpg_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the UserGpgKey to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_user_gpg_key", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_gpg_key github_user_gpg_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options UserGpgKeyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_user_gpg_key',
            terraformGeneratorMetadata: {
                providerName: 'github',
                providerVersion: '6.12.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._armoredPublicKey = config.armoredPublicKey;
        this._id = config.id;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // armored_public_key - computed: false, optional: false, required: true
    _armoredPublicKey;
    get armoredPublicKey() {
        return this.getStringAttribute('armored_public_key');
    }
    set armoredPublicKey(value) {
        this._armoredPublicKey = value;
    }
    // Temporarily expose input value. Use with caution.
    get armoredPublicKeyInput() {
        return this._armoredPublicKey;
    }
    // etag - computed: true, optional: false, required: false
    get etag() {
        return this.getStringAttribute('etag');
    }
    // id - computed: true, optional: true, required: false
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // key_id - computed: true, optional: false, required: false
    get keyId() {
        return this.getStringAttribute('key_id');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            armored_public_key: cdktf.stringToTerraform(this._armoredPublicKey),
            id: cdktf.stringToTerraform(this._id),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            armored_public_key: {
                value: cdktf.stringToHclTerraform(this._armoredPublicKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
