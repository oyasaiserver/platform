// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/codespaces_organization_secret
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/codespaces_organization_secret github_codespaces_organization_secret}
*/
export class CodespacesOrganizationSecret extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_codespaces_organization_secret";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CodespacesOrganizationSecret resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodespacesOrganizationSecret to import
    * @param importFromId The id of the existing CodespacesOrganizationSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/codespaces_organization_secret#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodespacesOrganizationSecret to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_codespaces_organization_secret", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/codespaces_organization_secret github_codespaces_organization_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodespacesOrganizationSecretConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_codespaces_organization_secret',
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
        this._plaintextValue = config.plaintextValue;
        this._secretName = config.secretName;
        this._selectedRepositoryIds = config.selectedRepositoryIds;
        this._visibility = config.visibility;
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
            encrypted_value: cdktf.stringToTerraform(this._encryptedValue),
            id: cdktf.stringToTerraform(this._id),
            plaintext_value: cdktf.stringToTerraform(this._plaintextValue),
            secret_name: cdktf.stringToTerraform(this._secretName),
            selected_repository_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._selectedRepositoryIds),
            visibility: cdktf.stringToTerraform(this._visibility),
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
