// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_request
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_request github_repository_pull_request}
*/
export class DataGithubRepositoryPullRequest extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_repository_pull_request";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubRepositoryPullRequest resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepositoryPullRequest to import
    * @param importFromId The id of the existing DataGithubRepositoryPullRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_request#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepositoryPullRequest to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_pull_request", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_request github_repository_pull_request} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoryPullRequestConfig
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
        this._baseRepository = config.baseRepository;
        this._id = config.id;
        this._number = config.number;
        this._owner = config.owner;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // base_ref - computed: true, optional: false, required: false
    get baseRef() {
        return this.getStringAttribute('base_ref');
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
    // body - computed: true, optional: false, required: false
    get body() {
        return this.getStringAttribute('body');
    }
    // draft - computed: true, optional: false, required: false
    get draft() {
        return this.getBooleanAttribute('draft');
    }
    // head_owner - computed: true, optional: false, required: false
    get headOwner() {
        return this.getStringAttribute('head_owner');
    }
    // head_ref - computed: true, optional: false, required: false
    get headRef() {
        return this.getStringAttribute('head_ref');
    }
    // head_repository - computed: true, optional: false, required: false
    get headRepository() {
        return this.getStringAttribute('head_repository');
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
    // maintainer_can_modify - computed: true, optional: false, required: false
    get maintainerCanModify() {
        return this.getBooleanAttribute('maintainer_can_modify');
    }
    // number - computed: false, optional: false, required: true
    _number;
    get number() {
        return this.getNumberAttribute('number');
    }
    set number(value) {
        this._number = value;
    }
    // Temporarily expose input value. Use with caution.
    get numberInput() {
        return this._number;
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
    // title - computed: true, optional: false, required: false
    get title() {
        return this.getStringAttribute('title');
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
            base_repository: cdktf.stringToTerraform(this._baseRepository),
            id: cdktf.stringToTerraform(this._id),
            number: cdktf.numberToTerraform(this._number),
            owner: cdktf.stringToTerraform(this._owner),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            base_repository: {
                value: cdktf.stringToHclTerraform(this._baseRepository),
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
            number: {
                value: cdktf.numberToHclTerraform(this._number),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            owner: {
                value: cdktf.stringToHclTerraform(this._owner),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
