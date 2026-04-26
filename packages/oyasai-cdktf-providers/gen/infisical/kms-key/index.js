// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/kms_key
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/kms_key infisical_kms_key}
*/
export class KmsKey extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_kms_key";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a KmsKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the KmsKey to import
    * @param importFromId The id of the existing KmsKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/kms_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the KmsKey to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_kms_key", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/kms_key infisical_kms_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsKeyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_kms_key',
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
        this._encryptionAlgorithm = config.encryptionAlgorithm;
        this._isDisabled = config.isDisabled;
        this._keyUsage = config.keyUsage;
        this._name = config.name;
        this._projectId = config.projectId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // description - computed: true, optional: true, required: false
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
    // encryption_algorithm - computed: true, optional: true, required: false
    _encryptionAlgorithm;
    get encryptionAlgorithm() {
        return this.getStringAttribute('encryption_algorithm');
    }
    set encryptionAlgorithm(value) {
        this._encryptionAlgorithm = value;
    }
    resetEncryptionAlgorithm() {
        this._encryptionAlgorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get encryptionAlgorithmInput() {
        return this._encryptionAlgorithm;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // is_disabled - computed: true, optional: true, required: false
    _isDisabled;
    get isDisabled() {
        return this.getBooleanAttribute('is_disabled');
    }
    set isDisabled(value) {
        this._isDisabled = value;
    }
    resetIsDisabled() {
        this._isDisabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get isDisabledInput() {
        return this._isDisabled;
    }
    // key_usage - computed: true, optional: true, required: false
    _keyUsage;
    get keyUsage() {
        return this.getStringAttribute('key_usage');
    }
    set keyUsage(value) {
        this._keyUsage = value;
    }
    resetKeyUsage() {
        this._keyUsage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keyUsageInput() {
        return this._keyUsage;
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
    // org_id - computed: true, optional: false, required: false
    get orgId() {
        return this.getStringAttribute('org_id');
    }
    // project_id - computed: false, optional: false, required: true
    _projectId;
    get projectId() {
        return this.getStringAttribute('project_id');
    }
    set projectId(value) {
        this._projectId = value;
    }
    // Temporarily expose input value. Use with caution.
    get projectIdInput() {
        return this._projectId;
    }
    // updated_at - computed: true, optional: false, required: false
    get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
    // version - computed: true, optional: false, required: false
    get version() {
        return this.getNumberAttribute('version');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            description: cdktf.stringToTerraform(this._description),
            encryption_algorithm: cdktf.stringToTerraform(this._encryptionAlgorithm),
            is_disabled: cdktf.booleanToTerraform(this._isDisabled),
            key_usage: cdktf.stringToTerraform(this._keyUsage),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
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
            encryption_algorithm: {
                value: cdktf.stringToHclTerraform(this._encryptionAlgorithm),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            is_disabled: {
                value: cdktf.booleanToHclTerraform(this._isDisabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            key_usage: {
                value: cdktf.stringToHclTerraform(this._keyUsage),
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
            project_id: {
                value: cdktf.stringToHclTerraform(this._projectId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
