// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/app_installation_repository
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/app_installation_repository github_app_installation_repository}
*/
export class AppInstallationRepository extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_app_installation_repository";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AppInstallationRepository resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppInstallationRepository to import
    * @param importFromId The id of the existing AppInstallationRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/app_installation_repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppInstallationRepository to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_app_installation_repository", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/app_installation_repository github_app_installation_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppInstallationRepositoryConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_app_installation_repository',
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
        this._installationId = config.installationId;
        this._repository = config.repository;
    }
    // ==========
    // ATTRIBUTES
    // ==========
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
    // installation_id - computed: false, optional: false, required: true
    _installationId;
    get installationId() {
        return this.getStringAttribute('installation_id');
    }
    set installationId(value) {
        this._installationId = value;
    }
    // Temporarily expose input value. Use with caution.
    get installationIdInput() {
        return this._installationId;
    }
    // repo_id - computed: true, optional: false, required: false
    get repoId() {
        return this.getNumberAttribute('repo_id');
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            installation_id: cdktf.stringToTerraform(this._installationId),
            repository: cdktf.stringToTerraform(this._repository),
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
            installation_id: {
                value: cdktf.stringToHclTerraform(this._installationId),
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
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
