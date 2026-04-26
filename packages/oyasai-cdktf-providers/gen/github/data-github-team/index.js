// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/team
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataGithubTeamRepositoriesDetailedToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataGithubTeamRepositoriesDetailedToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataGithubTeamRepositoriesDetailedOutputReference extends cdktf.ComplexObject {
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
    // repo_id - computed: true, optional: false, required: false
    get repoId() {
        return this.getNumberAttribute('repo_id');
    }
    // repo_name - computed: true, optional: false, required: false
    get repoName() {
        return this.getStringAttribute('repo_name');
    }
    // role_name - computed: true, optional: false, required: false
    get roleName() {
        return this.getStringAttribute('role_name');
    }
}
export class DataGithubTeamRepositoriesDetailedList extends cdktf.ComplexList {
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
        return new DataGithubTeamRepositoriesDetailedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/team github_team}
*/
export class DataGithubTeam extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_team";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubTeam resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubTeam to import
    * @param importFromId The id of the existing DataGithubTeam that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/team#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubTeam to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_team", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/team github_team} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubTeamConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_team',
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
        this._membershipType = config.membershipType;
        this._resultsPerPage = config.resultsPerPage;
        this._slug = config.slug;
        this._summaryOnly = config.summaryOnly;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
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
    // members - computed: true, optional: false, required: false
    get members() {
        return this.getListAttribute('members');
    }
    // membership_type - computed: false, optional: true, required: false
    _membershipType;
    get membershipType() {
        return this.getStringAttribute('membership_type');
    }
    set membershipType(value) {
        this._membershipType = value;
    }
    resetMembershipType() {
        this._membershipType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get membershipTypeInput() {
        return this._membershipType;
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // node_id - computed: true, optional: false, required: false
    get nodeId() {
        return this.getStringAttribute('node_id');
    }
    // notification_setting - computed: true, optional: false, required: false
    get notificationSetting() {
        return this.getStringAttribute('notification_setting');
    }
    // permission - computed: true, optional: false, required: false
    get permission() {
        return this.getStringAttribute('permission');
    }
    // privacy - computed: true, optional: false, required: false
    get privacy() {
        return this.getStringAttribute('privacy');
    }
    // repositories - computed: true, optional: false, required: false
    get repositories() {
        return this.getListAttribute('repositories');
    }
    // repositories_detailed - computed: true, optional: false, required: false
    _repositoriesDetailed = new DataGithubTeamRepositoriesDetailedList(this, "repositories_detailed", false);
    get repositoriesDetailed() {
        return this._repositoriesDetailed;
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
    // slug - computed: false, optional: false, required: true
    _slug;
    get slug() {
        return this.getStringAttribute('slug');
    }
    set slug(value) {
        this._slug = value;
    }
    // Temporarily expose input value. Use with caution.
    get slugInput() {
        return this._slug;
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            membership_type: cdktf.stringToTerraform(this._membershipType),
            results_per_page: cdktf.numberToTerraform(this._resultsPerPage),
            slug: cdktf.stringToTerraform(this._slug),
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
            membership_type: {
                value: cdktf.stringToHclTerraform(this._membershipType),
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
            slug: {
                value: cdktf.stringToHclTerraform(this._slug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
