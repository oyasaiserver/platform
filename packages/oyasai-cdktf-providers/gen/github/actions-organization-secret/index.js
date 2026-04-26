// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret github_actions_organization_secret}
*/
export class ActionsOrganizationSecret extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_actions_organization_secret";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ActionsOrganizationSecret resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsOrganizationSecret to import
    * @param importFromId The id of the existing ActionsOrganizationSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsOrganizationSecret to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_organization_secret", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret github_actions_organization_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsOrganizationSecretConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_actions_organization_secret',
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
        this._destroyOnDrift = config.destroyOnDrift;
        this._encryptedValue = config.encryptedValue;
        this._id = config.id;
        this._keyId = config.keyId;
        this._plaintextValue = config.plaintextValue;
        this._secretName = config.secretName;
        this._selectedRepositoryIds = config.selectedRepositoryIds;
        this._value = config.value;
        this._valueEncrypted = config.valueEncrypted;
        this._visibility = config.visibility;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // destroy_on_drift - computed: false, optional: true, required: false
    _destroyOnDrift;
    get destroyOnDrift() {
        return this.getBooleanAttribute('destroy_on_drift');
    }
    set destroyOnDrift(value) {
        this._destroyOnDrift = value;
    }
    resetDestroyOnDrift() {
        this._destroyOnDrift = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get destroyOnDriftInput() {
        return this._destroyOnDrift;
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
    // selected_repository_ids - computed: false, optional: true, required: false
    _selectedRepositoryIds;
    get selectedRepositoryIds() {
        return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('selected_repository_ids')));
    }
    set selectedRepositoryIds(value) {
        this._selectedRepositoryIds = value;
    }
    resetSelectedRepositoryIds() {
        this._selectedRepositoryIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get selectedRepositoryIdsInput() {
        return this._selectedRepositoryIds;
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
    // visibility - computed: false, optional: false, required: true
    _visibility;
    get visibility() {
        return this.getStringAttribute('visibility');
    }
    set visibility(value) {
        this._visibility = value;
    }
    // Temporarily expose input value. Use with caution.
    get visibilityInput() {
        return this._visibility;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            destroy_on_drift: cdktf.booleanToTerraform(this._destroyOnDrift),
            encrypted_value: cdktf.stringToTerraform(this._encryptedValue),
            id: cdktf.stringToTerraform(this._id),
            key_id: cdktf.stringToTerraform(this._keyId),
            plaintext_value: cdktf.stringToTerraform(this._plaintextValue),
            secret_name: cdktf.stringToTerraform(this._secretName),
            selected_repository_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._selectedRepositoryIds),
            value: cdktf.stringToTerraform(this._value),
            value_encrypted: cdktf.stringToTerraform(this._valueEncrypted),
            visibility: cdktf.stringToTerraform(this._visibility),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            destroy_on_drift: {
                value: cdktf.booleanToHclTerraform(this._destroyOnDrift),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
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
            secret_name: {
                value: cdktf.stringToHclTerraform(this._secretName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            selected_repository_ids: {
                value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._selectedRepositoryIds),
                isBlock: false,
                type: "set",
                storageClassType: "numberList",
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
            visibility: {
                value: cdktf.stringToHclTerraform(this._visibility),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
