// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment_deployment_policy
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment_deployment_policy github_repository_environment_deployment_policy}
*/
export class RepositoryEnvironmentDeploymentPolicy extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_repository_environment_deployment_policy";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RepositoryEnvironmentDeploymentPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryEnvironmentDeploymentPolicy to import
    * @param importFromId The id of the existing RepositoryEnvironmentDeploymentPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment_deployment_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryEnvironmentDeploymentPolicy to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_environment_deployment_policy", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment_deployment_policy github_repository_environment_deployment_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryEnvironmentDeploymentPolicyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_repository_environment_deployment_policy',
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
        this._branchPattern = config.branchPattern;
        this._environment = config.environment;
        this._id = config.id;
        this._repository = config.repository;
        this._tagPattern = config.tagPattern;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // branch_pattern - computed: false, optional: true, required: false
    _branchPattern;
    get branchPattern() {
        return this.getStringAttribute('branch_pattern');
    }
    set branchPattern(value) {
        this._branchPattern = value;
    }
    resetBranchPattern() {
        this._branchPattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get branchPatternInput() {
        return this._branchPattern;
    }
    // environment - computed: false, optional: false, required: true
    _environment;
    get environment() {
        return this.getStringAttribute('environment');
    }
    set environment(value) {
        this._environment = value;
    }
    // Temporarily expose input value. Use with caution.
    get environmentInput() {
        return this._environment;
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
    // policy_id - computed: true, optional: false, required: false
    get policyId() {
        return this.getNumberAttribute('policy_id');
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
    // tag_pattern - computed: false, optional: true, required: false
    _tagPattern;
    get tagPattern() {
        return this.getStringAttribute('tag_pattern');
    }
    set tagPattern(value) {
        this._tagPattern = value;
    }
    resetTagPattern() {
        this._tagPattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagPatternInput() {
        return this._tagPattern;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            branch_pattern: cdktf.stringToTerraform(this._branchPattern),
            environment: cdktf.stringToTerraform(this._environment),
            id: cdktf.stringToTerraform(this._id),
            repository: cdktf.stringToTerraform(this._repository),
            tag_pattern: cdktf.stringToTerraform(this._tagPattern),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            branch_pattern: {
                value: cdktf.stringToHclTerraform(this._branchPattern),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment: {
                value: cdktf.stringToHclTerraform(this._environment),
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
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tag_pattern: {
                value: cdktf.stringToHclTerraform(this._tagPattern),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
