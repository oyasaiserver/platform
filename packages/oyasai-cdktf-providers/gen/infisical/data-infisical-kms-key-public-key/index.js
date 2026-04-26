// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/kms_key_public_key
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/kms_key_public_key infisical_kms_key_public_key}
*/
export class DataInfisicalKmsKeyPublicKey extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_kms_key_public_key";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataInfisicalKmsKeyPublicKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataInfisicalKmsKeyPublicKey to import
    * @param importFromId The id of the existing DataInfisicalKmsKeyPublicKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/kms_key_public_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataInfisicalKmsKeyPublicKey to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_kms_key_public_key", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/kms_key_public_key infisical_kms_key_public_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataInfisicalKmsKeyPublicKeyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_kms_key_public_key',
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
        this._keyId = config.keyId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // encryption_algorithm - computed: true, optional: false, required: false
    get encryptionAlgorithm() {
        return this.getStringAttribute('encryption_algorithm');
    }
    // key_id - computed: false, optional: false, required: true
    _keyId;
    get keyId() {
        return this.getStringAttribute('key_id');
    }
    set keyId(value) {
        this._keyId = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyIdInput() {
        return this._keyId;
    }
    // key_usage - computed: true, optional: false, required: false
    get keyUsage() {
        return this.getStringAttribute('key_usage');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // public_key - computed: true, optional: false, required: false
    get publicKey() {
        return this.getStringAttribute('public_key');
    }
    // signing_algorithms - computed: true, optional: false, required: false
    get signingAlgorithms() {
        return this.getListAttribute('signing_algorithms');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            key_id: cdktf.stringToTerraform(this._keyId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            key_id: {
                value: cdktf.stringToHclTerraform(this._keyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
