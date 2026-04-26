// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization github_organization}
*/
export class DataGithubOrganization extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_organization";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubOrganization resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubOrganization to import
    * @param importFromId The id of the existing DataGithubOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubOrganization to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization github_organization} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubOrganizationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_organization',
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
        this._ignoreArchivedRepos = config.ignoreArchivedRepos;
        this._name = config.name;
        this._summaryOnly = config.summaryOnly;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // advanced_security_enabled_for_new_repositories - computed: true, optional: false, required: false
    get advancedSecurityEnabledForNewRepositories() {
        return this.getBooleanAttribute('advanced_security_enabled_for_new_repositories');
    }
    // default_repository_permission - computed: true, optional: false, required: false
    get defaultRepositoryPermission() {
        return this.getStringAttribute('default_repository_permission');
    }
    // dependabot_alerts_enabled_for_new_repositories - computed: true, optional: false, required: false
    get dependabotAlertsEnabledForNewRepositories() {
        return this.getBooleanAttribute('dependabot_alerts_enabled_for_new_repositories');
    }
    // dependabot_security_updates_enabled_for_new_repositories - computed: true, optional: false, required: false
    get dependabotSecurityUpdatesEnabledForNewRepositories() {
        return this.getBooleanAttribute('dependabot_security_updates_enabled_for_new_repositories');
    }
    // dependency_graph_enabled_for_new_repositories - computed: true, optional: false, required: false
    get dependencyGraphEnabledForNewRepositories() {
        return this.getBooleanAttribute('dependency_graph_enabled_for_new_repositories');
    }
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
    // ignore_archived_repos - computed: false, optional: true, required: false
    _ignoreArchivedRepos;
    get ignoreArchivedRepos() {
        return this.getBooleanAttribute('ignore_archived_repos');
    }
    set ignoreArchivedRepos(value) {
        this._ignoreArchivedRepos = value;
    }
    resetIgnoreArchivedRepos() {
        this._ignoreArchivedRepos = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ignoreArchivedReposInput() {
        return this._ignoreArchivedRepos;
    }
    // login - computed: true, optional: false, required: false
    get login() {
        return this.getStringAttribute('login');
    }
    // members - computed: true, optional: false, required: false
    get members() {
        return this.getListAttribute('members');
    }
    // members_allowed_repository_creation_type - computed: true, optional: false, required: false
    get membersAllowedRepositoryCreationType() {
        return this.getStringAttribute('members_allowed_repository_creation_type');
    }
    // members_can_create_internal_repositories - computed: true, optional: false, required: false
    get membersCanCreateInternalRepositories() {
        return this.getBooleanAttribute('members_can_create_internal_repositories');
    }
    // members_can_create_pages - computed: true, optional: false, required: false
    get membersCanCreatePages() {
        return this.getBooleanAttribute('members_can_create_pages');
    }
    // members_can_create_private_pages - computed: true, optional: false, required: false
    get membersCanCreatePrivatePages() {
        return this.getBooleanAttribute('members_can_create_private_pages');
    }
    // members_can_create_private_repositories - computed: true, optional: false, required: false
    get membersCanCreatePrivateRepositories() {
        return this.getBooleanAttribute('members_can_create_private_repositories');
    }
    // members_can_create_public_pages - computed: true, optional: false, required: false
    get membersCanCreatePublicPages() {
        return this.getBooleanAttribute('members_can_create_public_pages');
    }
    // members_can_create_public_repositories - computed: true, optional: false, required: false
    get membersCanCreatePublicRepositories() {
        return this.getBooleanAttribute('members_can_create_public_repositories');
    }
    // members_can_create_repositories - computed: true, optional: false, required: false
    get membersCanCreateRepositories() {
        return this.getBooleanAttribute('members_can_create_repositories');
    }
    // members_can_fork_private_repositories - computed: true, optional: false, required: false
    get membersCanForkPrivateRepositories() {
        return this.getBooleanAttribute('members_can_fork_private_repositories');
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // node_id - computed: true, optional: false, required: false
    get nodeId() {
        return this.getStringAttribute('node_id');
    }
    // orgname - computed: true, optional: false, required: false
    get orgname() {
        return this.getStringAttribute('orgname');
    }
    // plan - computed: true, optional: false, required: false
    get plan() {
        return this.getStringAttribute('plan');
    }
    // repositories - computed: true, optional: false, required: false
    get repositories() {
        return this.getListAttribute('repositories');
    }
    // secret_scanning_enabled_for_new_repositories - computed: true, optional: false, required: false
    get secretScanningEnabledForNewRepositories() {
        return this.getBooleanAttribute('secret_scanning_enabled_for_new_repositories');
    }
    // secret_scanning_push_protection_enabled_for_new_repositories - computed: true, optional: false, required: false
    get secretScanningPushProtectionEnabledForNewRepositories() {
        return this.getBooleanAttribute('secret_scanning_push_protection_enabled_for_new_repositories');
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
    // two_factor_requirement_enabled - computed: true, optional: false, required: false
    get twoFactorRequirementEnabled() {
        return this.getBooleanAttribute('two_factor_requirement_enabled');
    }
    // users - computed: true, optional: false, required: false
    _users = new cdktf.StringMapList(this, "users", false);
    get users() {
        return this._users;
    }
    // web_commit_signoff_required - computed: true, optional: false, required: false
    get webCommitSignoffRequired() {
        return this.getBooleanAttribute('web_commit_signoff_required');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            ignore_archived_repos: cdktf.booleanToTerraform(this._ignoreArchivedRepos),
            name: cdktf.stringToTerraform(this._name),
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
            ignore_archived_repos: {
                value: cdktf.booleanToHclTerraform(this._ignoreArchivedRepos),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
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
