// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deploy_key
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deploy_key github_repository_deploy_key}
*/
export class RepositoryDeployKey extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_repository_deploy_key";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RepositoryDeployKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryDeployKey to import
    * @param importFromId The id of the existing RepositoryDeployKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deploy_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryDeployKey to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_deploy_key", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deploy_key github_repository_deploy_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryDeployKeyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_repository_deploy_key',
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
        this._key = config.key;
        this._readOnly = config.readOnly;
        this._repository = config.repository;
        this._title = config.title;
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
    // key - computed: false, optional: false, required: true
    _key;
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    // read_only - computed: false, optional: true, required: false
    _readOnly;
    get readOnly() {
        return this.getBooleanAttribute('read_only');
    }
    set readOnly(value) {
        this._readOnly = value;
    }
    resetReadOnly() {
        this._readOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get readOnlyInput() {
        return this._readOnly;
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
    // title - computed: false, optional: false, required: true
    _title;
    get title() {
        return this.getStringAttribute('title');
    }
    set title(value) {
        this._title = value;
    }
    // Temporarily expose input value. Use with caution.
    get titleInput() {
        return this._title;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            key: cdktf.stringToTerraform(this._key),
            read_only: cdktf.booleanToTerraform(this._readOnly),
            repository: cdktf.stringToTerraform(this._repository),
            title: cdktf.stringToTerraform(this._title),
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
            key: {
                value: cdktf.stringToHclTerraform(this._key),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            read_only: {
                value: cdktf.booleanToHclTerraform(this._readOnly),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            title: {
                value: cdktf.stringToHclTerraform(this._title),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
