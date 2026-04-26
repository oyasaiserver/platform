// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch github_branch}
*/
export class Branch extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_branch";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Branch resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Branch to import
    * @param importFromId The id of the existing Branch that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Branch to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_branch", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch github_branch} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BranchConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_branch',
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
        this._branch = config.branch;
        this._etag = config.etag;
        this._id = config.id;
        this._repository = config.repository;
        this._sourceBranch = config.sourceBranch;
        this._sourceSha = config.sourceSha;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // branch - computed: false, optional: false, required: true
    _branch;
    get branch() {
        return this.getStringAttribute('branch');
    }
    set branch(value) {
        this._branch = value;
    }
    // Temporarily expose input value. Use with caution.
    get branchInput() {
        return this._branch;
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
    // ref - computed: true, optional: false, required: false
    get ref() {
        return this.getStringAttribute('ref');
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
    // sha - computed: true, optional: false, required: false
    get sha() {
        return this.getStringAttribute('sha');
    }
    // source_branch - computed: false, optional: true, required: false
    _sourceBranch;
    get sourceBranch() {
        return this.getStringAttribute('source_branch');
    }
    set sourceBranch(value) {
        this._sourceBranch = value;
    }
    resetSourceBranch() {
        this._sourceBranch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceBranchInput() {
        return this._sourceBranch;
    }
    // source_sha - computed: true, optional: true, required: false
    _sourceSha;
    get sourceSha() {
        return this.getStringAttribute('source_sha');
    }
    set sourceSha(value) {
        this._sourceSha = value;
    }
    resetSourceSha() {
        this._sourceSha = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceShaInput() {
        return this._sourceSha;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            branch: cdktf.stringToTerraform(this._branch),
            etag: cdktf.stringToTerraform(this._etag),
            id: cdktf.stringToTerraform(this._id),
            repository: cdktf.stringToTerraform(this._repository),
            source_branch: cdktf.stringToTerraform(this._sourceBranch),
            source_sha: cdktf.stringToTerraform(this._sourceSha),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            branch: {
                value: cdktf.stringToHclTerraform(this._branch),
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
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_branch: {
                value: cdktf.stringToHclTerraform(this._sourceBranch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_sha: {
                value: cdktf.stringToHclTerraform(this._sourceSha),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
