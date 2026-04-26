// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_autolink_reference
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_autolink_reference github_repository_autolink_reference}
*/
export class RepositoryAutolinkReference extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_repository_autolink_reference";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RepositoryAutolinkReference resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryAutolinkReference to import
    * @param importFromId The id of the existing RepositoryAutolinkReference that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_autolink_reference#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryAutolinkReference to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_autolink_reference", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_autolink_reference github_repository_autolink_reference} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryAutolinkReferenceConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_repository_autolink_reference',
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
        this._id = config.id;
        this._isAlphanumeric = config.isAlphanumeric;
        this._keyPrefix = config.keyPrefix;
        this._repository = config.repository;
        this._targetUrlTemplate = config.targetUrlTemplate;
    }
    // ==========
    // ATTRIBUTES
    // ==========
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
    // is_alphanumeric - computed: false, optional: true, required: false
    _isAlphanumeric;
    get isAlphanumeric() {
        return this.getBooleanAttribute('is_alphanumeric');
    }
    set isAlphanumeric(value) {
        this._isAlphanumeric = value;
    }
    resetIsAlphanumeric() {
        this._isAlphanumeric = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get isAlphanumericInput() {
        return this._isAlphanumeric;
    }
    // key_prefix - computed: false, optional: false, required: true
    _keyPrefix;
    get keyPrefix() {
        return this.getStringAttribute('key_prefix');
    }
    set keyPrefix(value) {
        this._keyPrefix = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyPrefixInput() {
        return this._keyPrefix;
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
    // target_url_template - computed: false, optional: false, required: true
    _targetUrlTemplate;
    get targetUrlTemplate() {
        return this.getStringAttribute('target_url_template');
    }
    set targetUrlTemplate(value) {
        this._targetUrlTemplate = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetUrlTemplateInput() {
        return this._targetUrlTemplate;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            is_alphanumeric: cdktf.booleanToTerraform(this._isAlphanumeric),
            key_prefix: cdktf.stringToTerraform(this._keyPrefix),
            repository: cdktf.stringToTerraform(this._repository),
            target_url_template: cdktf.stringToTerraform(this._targetUrlTemplate),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            is_alphanumeric: {
                value: cdktf.booleanToHclTerraform(this._isAlphanumeric),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            key_prefix: {
                value: cdktf.stringToHclTerraform(this._keyPrefix),
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
            target_url_template: {
                value: cdktf.stringToHclTerraform(this._targetUrlTemplate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
