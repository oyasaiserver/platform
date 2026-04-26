// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pull_request
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pull_request github_repository_pull_request}
*/
export class RepositoryPullRequest extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_repository_pull_request";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RepositoryPullRequest resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryPullRequest to import
    * @param importFromId The id of the existing RepositoryPullRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pull_request#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryPullRequest to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_pull_request", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_pull_request github_repository_pull_request} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryPullRequestConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_repository_pull_request',
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
        this._baseRef = config.baseRef;
        this._baseRepository = config.baseRepository;
        this._body = config.body;
        this._headRef = config.headRef;
        this._id = config.id;
        this._maintainerCanModify = config.maintainerCanModify;
        this._owner = config.owner;
        this._title = config.title;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // base_ref - computed: false, optional: false, required: true
    _baseRef;
    get baseRef() {
        return this.getStringAttribute('base_ref');
    }
    set baseRef(value) {
        this._baseRef = value;
    }
    // Temporarily expose input value. Use with caution.
    get baseRefInput() {
        return this._baseRef;
    }
    // base_repository - computed: false, optional: false, required: true
    _baseRepository;
    get baseRepository() {
        return this.getStringAttribute('base_repository');
    }
    set baseRepository(value) {
        this._baseRepository = value;
    }
    // Temporarily expose input value. Use with caution.
    get baseRepositoryInput() {
        return this._baseRepository;
    }
    // base_sha - computed: true, optional: false, required: false
    get baseSha() {
        return this.getStringAttribute('base_sha');
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
    // draft - computed: true, optional: false, required: false
    get draft() {
        return this.getBooleanAttribute('draft');
    }
    // head_ref - computed: false, optional: false, required: true
    _headRef;
    get headRef() {
        return this.getStringAttribute('head_ref');
    }
    set headRef(value) {
        this._headRef = value;
    }
    // Temporarily expose input value. Use with caution.
    get headRefInput() {
        return this._headRef;
    }
    // head_sha - computed: true, optional: false, required: false
    get headSha() {
        return this.getStringAttribute('head_sha');
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
    // labels - computed: true, optional: false, required: false
    get labels() {
        return this.getListAttribute('labels');
    }
    // maintainer_can_modify - computed: false, optional: true, required: false
    _maintainerCanModify;
    get maintainerCanModify() {
        return this.getBooleanAttribute('maintainer_can_modify');
    }
    set maintainerCanModify(value) {
        this._maintainerCanModify = value;
    }
    resetMaintainerCanModify() {
        this._maintainerCanModify = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maintainerCanModifyInput() {
        return this._maintainerCanModify;
    }
    // number - computed: true, optional: false, required: false
    get number() {
        return this.getNumberAttribute('number');
    }
    // opened_at - computed: true, optional: false, required: false
    get openedAt() {
        return this.getNumberAttribute('opened_at');
    }
    // opened_by - computed: true, optional: false, required: false
    get openedBy() {
        return this.getStringAttribute('opened_by');
    }
    // owner - computed: false, optional: true, required: false
    _owner;
    get owner() {
        return this.getStringAttribute('owner');
    }
    set owner(value) {
        this._owner = value;
    }
    resetOwner() {
        this._owner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ownerInput() {
        return this._owner;
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
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
    // updated_at - computed: true, optional: false, required: false
    get updatedAt() {
        return this.getNumberAttribute('updated_at');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            base_ref: cdktf.stringToTerraform(this._baseRef),
            base_repository: cdktf.stringToTerraform(this._baseRepository),
            body: cdktf.stringToTerraform(this._body),
            head_ref: cdktf.stringToTerraform(this._headRef),
            id: cdktf.stringToTerraform(this._id),
            maintainer_can_modify: cdktf.booleanToTerraform(this._maintainerCanModify),
            owner: cdktf.stringToTerraform(this._owner),
            title: cdktf.stringToTerraform(this._title),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            base_ref: {
                value: cdktf.stringToHclTerraform(this._baseRef),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            base_repository: {
                value: cdktf.stringToHclTerraform(this._baseRepository),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            body: {
                value: cdktf.stringToHclTerraform(this._body),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            head_ref: {
                value: cdktf.stringToHclTerraform(this._headRef),
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
            maintainer_can_modify: {
                value: cdktf.booleanToHclTerraform(this._maintainerCanModify),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            owner: {
                value: cdktf.stringToHclTerraform(this._owner),
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
