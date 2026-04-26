// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/release
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/release github_release}
*/
export class Release extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_release";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Release resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Release to import
    * @param importFromId The id of the existing Release that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/release#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Release to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_release", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/release github_release} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ReleaseConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_release',
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
        this._body = config.body;
        this._discussionCategoryName = config.discussionCategoryName;
        this._draft = config.draft;
        this._generateReleaseNotes = config.generateReleaseNotes;
        this._id = config.id;
        this._name = config.name;
        this._prerelease = config.prerelease;
        this._repository = config.repository;
        this._tagName = config.tagName;
        this._targetCommitish = config.targetCommitish;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // assets_url - computed: true, optional: false, required: false
    get assetsUrl() {
        return this.getStringAttribute('assets_url');
    }
    // body - computed: false, optional: true, required: false
    _body;
    get body() {
        return this.getStringAttribute('body');
    }
    set body(value) {
        this._body = value;
    }
    resetBody() {
        this._body = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body;
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // discussion_category_name - computed: false, optional: true, required: false
    _discussionCategoryName;
    get discussionCategoryName() {
        return this.getStringAttribute('discussion_category_name');
    }
    set discussionCategoryName(value) {
        this._discussionCategoryName = value;
    }
    resetDiscussionCategoryName() {
        this._discussionCategoryName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get discussionCategoryNameInput() {
        return this._discussionCategoryName;
    }
    // draft - computed: false, optional: true, required: false
    _draft;
    get draft() {
        return this.getBooleanAttribute('draft');
    }
    set draft(value) {
        this._draft = value;
    }
    resetDraft() {
        this._draft = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get draftInput() {
        return this._draft;
    }
    // etag - computed: true, optional: false, required: false
    get etag() {
        return this.getStringAttribute('etag');
    }
    // generate_release_notes - computed: false, optional: true, required: false
    _generateReleaseNotes;
    get generateReleaseNotes() {
        return this.getBooleanAttribute('generate_release_notes');
    }
    set generateReleaseNotes(value) {
        this._generateReleaseNotes = value;
    }
    resetGenerateReleaseNotes() {
        this._generateReleaseNotes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get generateReleaseNotesInput() {
        return this._generateReleaseNotes;
    }
    // html_url - computed: true, optional: false, required: false
    get htmlUrl() {
        return this.getStringAttribute('html_url');
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
    // name - computed: false, optional: true, required: false
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // node_id - computed: true, optional: false, required: false
    get nodeId() {
        return this.getStringAttribute('node_id');
    }
    // prerelease - computed: false, optional: true, required: false
    _prerelease;
    get prerelease() {
        return this.getBooleanAttribute('prerelease');
    }
    set prerelease(value) {
        this._prerelease = value;
    }
    resetPrerelease() {
        this._prerelease = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get prereleaseInput() {
        return this._prerelease;
    }
    // published_at - computed: true, optional: false, required: false
    get publishedAt() {
        return this.getStringAttribute('published_at');
    }
    // release_id - computed: true, optional: false, required: false
    get releaseId() {
        return this.getNumberAttribute('release_id');
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
    // tag_name - computed: false, optional: false, required: true
    _tagName;
    get tagName() {
        return this.getStringAttribute('tag_name');
    }
    set tagName(value) {
        this._tagName = value;
    }
    // Temporarily expose input value. Use with caution.
    get tagNameInput() {
        return this._tagName;
    }
    // tarball_url - computed: true, optional: false, required: false
    get tarballUrl() {
        return this.getStringAttribute('tarball_url');
    }
    // target_commitish - computed: false, optional: true, required: false
    _targetCommitish;
    get targetCommitish() {
        return this.getStringAttribute('target_commitish');
    }
    set targetCommitish(value) {
        this._targetCommitish = value;
    }
    resetTargetCommitish() {
        this._targetCommitish = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetCommitishInput() {
        return this._targetCommitish;
    }
    // upload_url - computed: true, optional: false, required: false
    get uploadUrl() {
        return this.getStringAttribute('upload_url');
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
    // zipball_url - computed: true, optional: false, required: false
    get zipballUrl() {
        return this.getStringAttribute('zipball_url');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            body: cdktf.stringToTerraform(this._body),
            discussion_category_name: cdktf.stringToTerraform(this._discussionCategoryName),
            draft: cdktf.booleanToTerraform(this._draft),
            generate_release_notes: cdktf.booleanToTerraform(this._generateReleaseNotes),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            prerelease: cdktf.booleanToTerraform(this._prerelease),
            repository: cdktf.stringToTerraform(this._repository),
            tag_name: cdktf.stringToTerraform(this._tagName),
            target_commitish: cdktf.stringToTerraform(this._targetCommitish),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            body: {
                value: cdktf.stringToHclTerraform(this._body),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            discussion_category_name: {
                value: cdktf.stringToHclTerraform(this._discussionCategoryName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            draft: {
                value: cdktf.booleanToHclTerraform(this._draft),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            generate_release_notes: {
                value: cdktf.booleanToHclTerraform(this._generateReleaseNotes),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
            prerelease: {
                value: cdktf.booleanToHclTerraform(this._prerelease),
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
            tag_name: {
                value: cdktf.stringToHclTerraform(this._tagName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_commitish: {
                value: cdktf.stringToHclTerraform(this._targetCommitish),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
