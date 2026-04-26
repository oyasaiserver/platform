// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_file
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_file github_repository_file}
*/
export class RepositoryFile extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_repository_file";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RepositoryFile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryFile to import
    * @param importFromId The id of the existing RepositoryFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_file#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryFile to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_file", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_file github_repository_file} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryFileConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_repository_file',
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
        this._autocreateBranch = config.autocreateBranch;
        this._autocreateBranchSourceBranch = config.autocreateBranchSourceBranch;
        this._autocreateBranchSourceSha = config.autocreateBranchSourceSha;
        this._branch = config.branch;
        this._commitAuthor = config.commitAuthor;
        this._commitEmail = config.commitEmail;
        this._commitMessage = config.commitMessage;
        this._content = config.content;
        this._file = config.file;
        this._id = config.id;
        this._overwriteOnCreate = config.overwriteOnCreate;
        this._repository = config.repository;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // autocreate_branch - computed: false, optional: true, required: false
    _autocreateBranch;
    get autocreateBranch() {
        return this.getBooleanAttribute('autocreate_branch');
    }
    set autocreateBranch(value) {
        this._autocreateBranch = value;
    }
    resetAutocreateBranch() {
        this._autocreateBranch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autocreateBranchInput() {
        return this._autocreateBranch;
    }
    // autocreate_branch_source_branch - computed: false, optional: true, required: false
    _autocreateBranchSourceBranch;
    get autocreateBranchSourceBranch() {
        return this.getStringAttribute('autocreate_branch_source_branch');
    }
    set autocreateBranchSourceBranch(value) {
        this._autocreateBranchSourceBranch = value;
    }
    resetAutocreateBranchSourceBranch() {
        this._autocreateBranchSourceBranch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autocreateBranchSourceBranchInput() {
        return this._autocreateBranchSourceBranch;
    }
    // autocreate_branch_source_sha - computed: true, optional: true, required: false
    _autocreateBranchSourceSha;
    get autocreateBranchSourceSha() {
        return this.getStringAttribute('autocreate_branch_source_sha');
    }
    set autocreateBranchSourceSha(value) {
        this._autocreateBranchSourceSha = value;
    }
    resetAutocreateBranchSourceSha() {
        this._autocreateBranchSourceSha = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autocreateBranchSourceShaInput() {
        return this._autocreateBranchSourceSha;
    }
    // branch - computed: true, optional: true, required: false
    _branch;
    get branch() {
        return this.getStringAttribute('branch');
    }
    set branch(value) {
        this._branch = value;
    }
    resetBranch() {
        this._branch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get branchInput() {
        return this._branch;
    }
    // commit_author - computed: false, optional: true, required: false
    _commitAuthor;
    get commitAuthor() {
        return this.getStringAttribute('commit_author');
    }
    set commitAuthor(value) {
        this._commitAuthor = value;
    }
    resetCommitAuthor() {
        this._commitAuthor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commitAuthorInput() {
        return this._commitAuthor;
    }
    // commit_email - computed: false, optional: true, required: false
    _commitEmail;
    get commitEmail() {
        return this.getStringAttribute('commit_email');
    }
    set commitEmail(value) {
        this._commitEmail = value;
    }
    resetCommitEmail() {
        this._commitEmail = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commitEmailInput() {
        return this._commitEmail;
    }
    // commit_message - computed: true, optional: true, required: false
    _commitMessage;
    get commitMessage() {
        return this.getStringAttribute('commit_message');
    }
    set commitMessage(value) {
        this._commitMessage = value;
    }
    resetCommitMessage() {
        this._commitMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commitMessageInput() {
        return this._commitMessage;
    }
    // commit_sha - computed: true, optional: false, required: false
    get commitSha() {
        return this.getStringAttribute('commit_sha');
    }
    // content - computed: false, optional: false, required: true
    _content;
    get content() {
        return this.getStringAttribute('content');
    }
    set content(value) {
        this._content = value;
    }
    // Temporarily expose input value. Use with caution.
    get contentInput() {
        return this._content;
    }
    // file - computed: false, optional: false, required: true
    _file;
    get file() {
        return this.getStringAttribute('file');
    }
    set file(value) {
        this._file = value;
    }
    // Temporarily expose input value. Use with caution.
    get fileInput() {
        return this._file;
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
    // overwrite_on_create - computed: false, optional: true, required: false
    _overwriteOnCreate;
    get overwriteOnCreate() {
        return this.getBooleanAttribute('overwrite_on_create');
    }
    set overwriteOnCreate(value) {
        this._overwriteOnCreate = value;
    }
    resetOverwriteOnCreate() {
        this._overwriteOnCreate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get overwriteOnCreateInput() {
        return this._overwriteOnCreate;
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
    // repository_id - computed: true, optional: false, required: false
    get repositoryId() {
        return this.getNumberAttribute('repository_id');
    }
    // sha - computed: true, optional: false, required: false
    get sha() {
        return this.getStringAttribute('sha');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            autocreate_branch: cdktf.booleanToTerraform(this._autocreateBranch),
            autocreate_branch_source_branch: cdktf.stringToTerraform(this._autocreateBranchSourceBranch),
            autocreate_branch_source_sha: cdktf.stringToTerraform(this._autocreateBranchSourceSha),
            branch: cdktf.stringToTerraform(this._branch),
            commit_author: cdktf.stringToTerraform(this._commitAuthor),
            commit_email: cdktf.stringToTerraform(this._commitEmail),
            commit_message: cdktf.stringToTerraform(this._commitMessage),
            content: cdktf.stringToTerraform(this._content),
            file: cdktf.stringToTerraform(this._file),
            id: cdktf.stringToTerraform(this._id),
            overwrite_on_create: cdktf.booleanToTerraform(this._overwriteOnCreate),
            repository: cdktf.stringToTerraform(this._repository),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            autocreate_branch: {
                value: cdktf.booleanToHclTerraform(this._autocreateBranch),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            autocreate_branch_source_branch: {
                value: cdktf.stringToHclTerraform(this._autocreateBranchSourceBranch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            autocreate_branch_source_sha: {
                value: cdktf.stringToHclTerraform(this._autocreateBranchSourceSha),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            branch: {
                value: cdktf.stringToHclTerraform(this._branch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            commit_author: {
                value: cdktf.stringToHclTerraform(this._commitAuthor),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            commit_email: {
                value: cdktf.stringToHclTerraform(this._commitEmail),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            commit_message: {
                value: cdktf.stringToHclTerraform(this._commitMessage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content: {
                value: cdktf.stringToHclTerraform(this._content),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            file: {
                value: cdktf.stringToHclTerraform(this._file),
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
            overwrite_on_create: {
                value: cdktf.booleanToHclTerraform(this._overwriteOnCreate),
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
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
