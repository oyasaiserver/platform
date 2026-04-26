// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deployment_branch_policy
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deployment_branch_policy github_repository_deployment_branch_policy}
*/
export class RepositoryDeploymentBranchPolicy extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_repository_deployment_branch_policy";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RepositoryDeploymentBranchPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryDeploymentBranchPolicy to import
    * @param importFromId The id of the existing RepositoryDeploymentBranchPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deployment_branch_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryDeploymentBranchPolicy to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_deployment_branch_policy", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deployment_branch_policy github_repository_deployment_branch_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryDeploymentBranchPolicyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_repository_deployment_branch_policy',
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
        this._environmentName = config.environmentName;
        this._etag = config.etag;
        this._id = config.id;
        this._name = config.name;
        this._repository = config.repository;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // environment_name - computed: false, optional: false, required: true
    _environmentName;
    get environmentName() {
        return this.getStringAttribute('environment_name');
    }
    set environmentName(value) {
        this._environmentName = value;
    }
    // Temporarily expose input value. Use with caution.
    get environmentNameInput() {
        return this._environmentName;
    }
    // etag - computed: true, optional: true, required: false
    _etag;
    get etag() {
        return this.getStringAttribute('etag');
    }
    set etag(value) {
        this._etag = value;
    }
    resetEtag() {
        this._etag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get etagInput() {
        return this._etag;
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
            environment_name: cdktf.stringToTerraform(this._environmentName),
            etag: cdktf.stringToTerraform(this._etag),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            repository: cdktf.stringToTerraform(this._repository),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            environment_name: {
                value: cdktf.stringToHclTerraform(this._environmentName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            etag: {
                value: cdktf.stringToHclTerraform(this._etag),
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
            name: {
                value: cdktf.stringToHclTerraform(this._name),
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
