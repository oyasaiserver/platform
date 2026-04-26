// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repositories
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repositories github_repositories}
*/
export class DataGithubRepositories extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_repositories";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubRepositories resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepositories to import
    * @param importFromId The id of the existing DataGithubRepositories that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repositories#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepositories to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repositories", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repositories github_repositories} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoriesConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_repositories',
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
        this._includeRepoId = config.includeRepoId;
        this._query = config.query;
        this._resultsPerPage = config.resultsPerPage;
        this._sort = config.sort;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // full_names - computed: true, optional: false, required: false
    get fullNames() {
        return this.getListAttribute('full_names');
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
    // include_repo_id - computed: false, optional: true, required: false
    _includeRepoId;
    get includeRepoId() {
        return this.getBooleanAttribute('include_repo_id');
    }
    set includeRepoId(value) {
        this._includeRepoId = value;
    }
    resetIncludeRepoId() {
        this._includeRepoId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeRepoIdInput() {
        return this._includeRepoId;
    }
    // names - computed: true, optional: false, required: false
    get names() {
        return this.getListAttribute('names');
    }
    // query - computed: false, optional: false, required: true
    _query;
    get query() {
        return this.getStringAttribute('query');
    }
    set query(value) {
        this._query = value;
    }
    // Temporarily expose input value. Use with caution.
    get queryInput() {
        return this._query;
    }
    // repo_ids - computed: true, optional: false, required: false
    get repoIds() {
        return this.getNumberListAttribute('repo_ids');
    }
    // results_per_page - computed: false, optional: true, required: false
    _resultsPerPage;
    get resultsPerPage() {
        return this.getNumberAttribute('results_per_page');
    }
    set resultsPerPage(value) {
        this._resultsPerPage = value;
    }
    resetResultsPerPage() {
        this._resultsPerPage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resultsPerPageInput() {
        return this._resultsPerPage;
    }
    // sort - computed: false, optional: true, required: false
    _sort;
    get sort() {
        return this.getStringAttribute('sort');
    }
    set sort(value) {
        this._sort = value;
    }
    resetSort() {
        this._sort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sortInput() {
        return this._sort;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            include_repo_id: cdktf.booleanToTerraform(this._includeRepoId),
            query: cdktf.stringToTerraform(this._query),
            results_per_page: cdktf.numberToTerraform(this._resultsPerPage),
            sort: cdktf.stringToTerraform(this._sort),
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
            include_repo_id: {
                value: cdktf.booleanToHclTerraform(this._includeRepoId),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            query: {
                value: cdktf.stringToHclTerraform(this._query),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            results_per_page: {
                value: cdktf.numberToHclTerraform(this._resultsPerPage),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            sort: {
                value: cdktf.stringToHclTerraform(this._sort),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
