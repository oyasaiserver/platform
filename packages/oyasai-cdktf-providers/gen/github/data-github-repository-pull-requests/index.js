// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_requests
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataGithubRepositoryPullRequestsResultsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataGithubRepositoryPullRequestsResultsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataGithubRepositoryPullRequestsResultsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // base_ref - computed: true, optional: false, required: false
    get baseRef() {
        return this.getStringAttribute('base_ref');
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
    // labels - computed: true, optional: false, required: false
    get labels() {
        return this.getListAttribute('labels');
    }
    // maintainer_can_modify - computed: true, optional: false, required: false
    get maintainerCanModify() {
        return this.getBooleanAttribute('maintainer_can_modify');
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
}
export class DataGithubRepositoryPullRequestsResultsList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new DataGithubRepositoryPullRequestsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_requests github_repository_pull_requests}
*/
export class DataGithubRepositoryPullRequests extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_repository_pull_requests";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubRepositoryPullRequests resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepositoryPullRequests to import
    * @param importFromId The id of the existing DataGithubRepositoryPullRequests that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_requests#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepositoryPullRequests to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_pull_requests", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_pull_requests github_repository_pull_requests} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoryPullRequestsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_repository_pull_requests',
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
        this._headRef = config.headRef;
        this._id = config.id;
        this._owner = config.owner;
        this._sortBy = config.sortBy;
        this._sortDirection = config.sortDirection;
        this._state = config.state;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // base_ref - computed: false, optional: true, required: false
    _baseRef;
    get baseRef() {
        return this.getStringAttribute('base_ref');
    }
    set baseRef(value) {
        this._baseRef = value;
    }
    resetBaseRef() {
        this._baseRef = undefined;
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
    // head_ref - computed: false, optional: true, required: false
    _headRef;
    get headRef() {
        return this.getStringAttribute('head_ref');
    }
    set headRef(value) {
        this._headRef = value;
    }
    resetHeadRef() {
        this._headRef = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get headRefInput() {
        return this._headRef;
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
    // results - computed: true, optional: false, required: false
    _results = new DataGithubRepositoryPullRequestsResultsList(this, "results", false);
    get results() {
        return this._results;
    }
    // sort_by - computed: false, optional: true, required: false
    _sortBy;
    get sortBy() {
        return this.getStringAttribute('sort_by');
    }
    set sortBy(value) {
        this._sortBy = value;
    }
    resetSortBy() {
        this._sortBy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sortByInput() {
        return this._sortBy;
    }
    // sort_direction - computed: false, optional: true, required: false
    _sortDirection;
    get sortDirection() {
        return this.getStringAttribute('sort_direction');
    }
    set sortDirection(value) {
        this._sortDirection = value;
    }
    resetSortDirection() {
        this._sortDirection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sortDirectionInput() {
        return this._sortDirection;
    }
    // state - computed: false, optional: true, required: false
    _state;
    get state() {
        return this.getStringAttribute('state');
    }
    set state(value) {
        this._state = value;
    }
    resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stateInput() {
        return this._state;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            base_ref: cdktf.stringToTerraform(this._baseRef),
            base_repository: cdktf.stringToTerraform(this._baseRepository),
            head_ref: cdktf.stringToTerraform(this._headRef),
            id: cdktf.stringToTerraform(this._id),
            owner: cdktf.stringToTerraform(this._owner),
            sort_by: cdktf.stringToTerraform(this._sortBy),
            sort_direction: cdktf.stringToTerraform(this._sortDirection),
            state: cdktf.stringToTerraform(this._state),
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
            owner: {
                value: cdktf.stringToHclTerraform(this._owner),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sort_by: {
                value: cdktf.stringToHclTerraform(this._sortBy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sort_direction: {
                value: cdktf.stringToHclTerraform(this._sortDirection),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            state: {
                value: cdktf.stringToHclTerraform(this._state),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
