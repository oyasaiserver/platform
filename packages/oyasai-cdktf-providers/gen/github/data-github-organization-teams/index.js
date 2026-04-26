// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_teams
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataGithubOrganizationTeamsTeamsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataGithubOrganizationTeamsTeamsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataGithubOrganizationTeamsTeamsOutputReference extends cdktf.ComplexObject {
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
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getNumberAttribute('id');
    }
    // members - computed: true, optional: false, required: false
    get members() {
        return this.getListAttribute('members');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // node_id - computed: true, optional: false, required: false
    get nodeId() {
        return this.getStringAttribute('node_id');
    }
    // parent - computed: true, optional: false, required: false
    _parent = new cdktf.StringMap(this, "parent");
    get parent() {
        return this._parent;
    }
    // parent_team_id - computed: true, optional: false, required: false
    get parentTeamId() {
        return this.getStringAttribute('parent_team_id');
    }
    // parent_team_slug - computed: true, optional: false, required: false
    get parentTeamSlug() {
        return this.getStringAttribute('parent_team_slug');
    }
    // privacy - computed: true, optional: false, required: false
    get privacy() {
        return this.getStringAttribute('privacy');
    }
    // repositories - computed: true, optional: false, required: false
    get repositories() {
        return this.getListAttribute('repositories');
    }
    // slug - computed: true, optional: false, required: false
    get slug() {
        return this.getStringAttribute('slug');
    }
}
export class DataGithubOrganizationTeamsTeamsList extends cdktf.ComplexList {
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
        return new DataGithubOrganizationTeamsTeamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_teams github_organization_teams}
*/
export class DataGithubOrganizationTeams extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_organization_teams";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubOrganizationTeams resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubOrganizationTeams to import
    * @param importFromId The id of the existing DataGithubOrganizationTeams that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_teams#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubOrganizationTeams to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_teams", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_teams github_organization_teams} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubOrganizationTeamsConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'github_organization_teams',
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
        this._resultsPerPage = config.resultsPerPage;
        this._rootTeamsOnly = config.rootTeamsOnly;
        this._summaryOnly = config.summaryOnly;
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
    // root_teams_only - computed: false, optional: true, required: false
    _rootTeamsOnly;
    get rootTeamsOnly() {
        return this.getBooleanAttribute('root_teams_only');
    }
    set rootTeamsOnly(value) {
        this._rootTeamsOnly = value;
    }
    resetRootTeamsOnly() {
        this._rootTeamsOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rootTeamsOnlyInput() {
        return this._rootTeamsOnly;
    }
    // summary_only - computed: false, optional: true, required: false
    _summaryOnly;
    get summaryOnly() {
        return this.getBooleanAttribute('summary_only');
    }
    set summaryOnly(value) {
        this._summaryOnly = value;
    }
    resetSummaryOnly() {
        this._summaryOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get summaryOnlyInput() {
        return this._summaryOnly;
    }
    // teams - computed: true, optional: false, required: false
    _teams = new DataGithubOrganizationTeamsTeamsList(this, "teams", false);
    get teams() {
        return this._teams;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            results_per_page: cdktf.numberToTerraform(this._resultsPerPage),
            root_teams_only: cdktf.booleanToTerraform(this._rootTeamsOnly),
            summary_only: cdktf.booleanToTerraform(this._summaryOnly),
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
            results_per_page: {
                value: cdktf.numberToHclTerraform(this._resultsPerPage),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            root_teams_only: {
                value: cdktf.booleanToHclTerraform(this._rootTeamsOnly),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            summary_only: {
                value: cdktf.booleanToHclTerraform(this._summaryOnly),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
