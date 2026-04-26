// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_secret
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_secret github_dependabot_secret}
*/
export class DependabotSecret extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_dependabot_secret";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DependabotSecret resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DependabotSecret to import
    * @param importFromId The id of the existing DependabotSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_secret#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DependabotSecret to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_dependabot_secret", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_secret github_dependabot_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DependabotSecretConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_dependabot_secret',
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
        this._encryptedValue = config.encryptedValue;
        this._id = config.id;
        this._keyId = config.keyId;
        this._plaintextValue = config.plaintextValue;
        this._repository = config.repository;
        this._secretName = config.secretName;
        this._value = config.value;
        this._valueEncrypted = config.valueEncrypted;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // encrypted_value - computed: false, optional: true, required: false
    _encryptedValue;
    get encryptedValue() {
        return this.getStringAttribute('encrypted_value');
    }
    set encryptedValue(value) {
        this._encryptedValue = value;
    }
    resetEncryptedValue() {
        this._encryptedValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get encryptedValueInput() {
        return this._encryptedValue;
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
    // key_id - computed: true, optional: true, required: false
    _keyId;
    get keyId() {
        return this.getStringAttribute('key_id');
    }
    set keyId(value) {
        this._keyId = value;
    }
    resetKeyId() {
        this._keyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keyIdInput() {
        return this._keyId;
    }
    // plaintext_value - computed: false, optional: true, required: false
    _plaintextValue;
    get plaintextValue() {
        return this.getStringAttribute('plaintext_value');
    }
    set plaintextValue(value) {
        this._plaintextValue = value;
    }
    resetPlaintextValue() {
        this._plaintextValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get plaintextValueInput() {
        return this._plaintextValue;
    }
    // remote_updated_at - computed: true, optional: false, required: false
    get remoteUpdatedAt() {
        return this.getStringAttribute('remote_updated_at');
    }
    // repository - computed: false, optional: false, required: true
    _repository;
    get repository() {
        return this.getStringAttribute('repository');
    }
    set repository(value) {
        this._repository = value;
    }
    // Temporarily expose input value. Use with caution.
    get repositoryInput() {
        return this._repository;
    }
    // repository_id - computed: true, optional: false, required: false
    get repositoryId() {
        return this.getNumberAttribute('repository_id');
    }
    // secret_name - computed: false, optional: false, required: true
    _secretName;
    get secretName() {
        return this.getStringAttribute('secret_name');
    }
    set secretName(value) {
        this._secretName = value;
    }
    // Temporarily expose input value. Use with caution.
    get secretNameInput() {
        return this._secretName;
    }
    // updated_at - computed: true, optional: false, required: false
    get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
    // value - computed: false, optional: true, required: false
    _value;
    get value() {
        return this.getStringAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
    // value_encrypted - computed: false, optional: true, required: false
    _valueEncrypted;
    get valueEncrypted() {
        return this.getStringAttribute('value_encrypted');
    }
    set valueEncrypted(value) {
        this._valueEncrypted = value;
    }
    resetValueEncrypted() {
        this._valueEncrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get valueEncryptedInput() {
        return this._valueEncrypted;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            encrypted_value: cdktf.stringToTerraform(this._encryptedValue),
            id: cdktf.stringToTerraform(this._id),
            key_id: cdktf.stringToTerraform(this._keyId),
            plaintext_value: cdktf.stringToTerraform(this._plaintextValue),
            repository: cdktf.stringToTerraform(this._repository),
            secret_name: cdktf.stringToTerraform(this._secretName),
            value: cdktf.stringToTerraform(this._value),
            value_encrypted: cdktf.stringToTerraform(this._valueEncrypted),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            encrypted_value: {
                value: cdktf.stringToHclTerraform(this._encryptedValue),
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
            key_id: {
                value: cdktf.stringToHclTerraform(this._keyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            plaintext_value: {
                value: cdktf.stringToHclTerraform(this._plaintextValue),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secret_name: {
                value: cdktf.stringToHclTerraform(this._secretName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            value: {
                value: cdktf.stringToHclTerraform(this._value),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            value_encrypted: {
                value: cdktf.stringToHclTerraform(this._valueEncrypted),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
