// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings github_organization_settings}
*/
export class OrganizationSettings extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_organization_settings";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a OrganizationSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationSettings to import
    * @param importFromId The id of the existing OrganizationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationSettings to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_settings", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings github_organization_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationSettingsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_organization_settings',
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
        this._advancedSecurityEnabledForNewRepositories = config.advancedSecurityEnabledForNewRepositories;
        this._billingEmail = config.billingEmail;
        this._blog = config.blog;
        this._company = config.company;
        this._defaultRepositoryPermission = config.defaultRepositoryPermission;
        this._dependabotAlertsEnabledForNewRepositories = config.dependabotAlertsEnabledForNewRepositories;
        this._dependabotSecurityUpdatesEnabledForNewRepositories = config.dependabotSecurityUpdatesEnabledForNewRepositories;
        this._dependencyGraphEnabledForNewRepositories = config.dependencyGraphEnabledForNewRepositories;
        this._description = config.description;
        this._email = config.email;
        this._hasOrganizationProjects = config.hasOrganizationProjects;
        this._hasRepositoryProjects = config.hasRepositoryProjects;
        this._id = config.id;
        this._location = config.location;
        this._membersCanCreateInternalRepositories = config.membersCanCreateInternalRepositories;
        this._membersCanCreatePages = config.membersCanCreatePages;
        this._membersCanCreatePrivatePages = config.membersCanCreatePrivatePages;
        this._membersCanCreatePrivateRepositories = config.membersCanCreatePrivateRepositories;
        this._membersCanCreatePublicPages = config.membersCanCreatePublicPages;
        this._membersCanCreatePublicRepositories = config.membersCanCreatePublicRepositories;
        this._membersCanCreateRepositories = config.membersCanCreateRepositories;
        this._membersCanForkPrivateRepositories = config.membersCanForkPrivateRepositories;
        this._name = config.name;
        this._secretScanningEnabledForNewRepositories = config.secretScanningEnabledForNewRepositories;
        this._secretScanningPushProtectionEnabledForNewRepositories = config.secretScanningPushProtectionEnabledForNewRepositories;
        this._twitterUsername = config.twitterUsername;
        this._webCommitSignoffRequired = config.webCommitSignoffRequired;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // advanced_security_enabled_for_new_repositories - computed: false, optional: true, required: false
    _advancedSecurityEnabledForNewRepositories;
    get advancedSecurityEnabledForNewRepositories() {
        return this.getBooleanAttribute('advanced_security_enabled_for_new_repositories');
    }
    set advancedSecurityEnabledForNewRepositories(value) {
        this._advancedSecurityEnabledForNewRepositories = value;
    }
    resetAdvancedSecurityEnabledForNewRepositories() {
        this._advancedSecurityEnabledForNewRepositories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get advancedSecurityEnabledForNewRepositoriesInput() {
        return this._advancedSecurityEnabledForNewRepositories;
    }
    // billing_email - computed: false, optional: false, required: true
    _billingEmail;
    get billingEmail() {
        return this.getStringAttribute('billing_email');
    }
    set billingEmail(value) {
        this._billingEmail = value;
    }
    // Temporarily expose input value. Use with caution.
    get billingEmailInput() {
        return this._billingEmail;
    }
    // blog - computed: false, optional: true, required: false
    _blog;
    get blog() {
        return this.getStringAttribute('blog');
    }
    set blog(value) {
        this._blog = value;
    }
    resetBlog() {
        this._blog = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get blogInput() {
        return this._blog;
    }
    // company - computed: false, optional: true, required: false
    _company;
    get company() {
        return this.getStringAttribute('company');
    }
    set company(value) {
        this._company = value;
    }
    resetCompany() {
        this._company = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get companyInput() {
        return this._company;
    }
    // default_repository_permission - computed: false, optional: true, required: false
    _defaultRepositoryPermission;
    get defaultRepositoryPermission() {
        return this.getStringAttribute('default_repository_permission');
    }
    set defaultRepositoryPermission(value) {
        this._defaultRepositoryPermission = value;
    }
    resetDefaultRepositoryPermission() {
        this._defaultRepositoryPermission = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultRepositoryPermissionInput() {
        return this._defaultRepositoryPermission;
    }
    // dependabot_alerts_enabled_for_new_repositories - computed: false, optional: true, required: false
    _dependabotAlertsEnabledForNewRepositories;
    get dependabotAlertsEnabledForNewRepositories() {
        return this.getBooleanAttribute('dependabot_alerts_enabled_for_new_repositories');
    }
    set dependabotAlertsEnabledForNewRepositories(value) {
        this._dependabotAlertsEnabledForNewRepositories = value;
    }
    resetDependabotAlertsEnabledForNewRepositories() {
        this._dependabotAlertsEnabledForNewRepositories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dependabotAlertsEnabledForNewRepositoriesInput() {
        return this._dependabotAlertsEnabledForNewRepositories;
    }
    // dependabot_security_updates_enabled_for_new_repositories - computed: false, optional: true, required: false
    _dependabotSecurityUpdatesEnabledForNewRepositories;
    get dependabotSecurityUpdatesEnabledForNewRepositories() {
        return this.getBooleanAttribute('dependabot_security_updates_enabled_for_new_repositories');
    }
    set dependabotSecurityUpdatesEnabledForNewRepositories(value) {
        this._dependabotSecurityUpdatesEnabledForNewRepositories = value;
    }
    resetDependabotSecurityUpdatesEnabledForNewRepositories() {
        this._dependabotSecurityUpdatesEnabledForNewRepositories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dependabotSecurityUpdatesEnabledForNewRepositoriesInput() {
        return this._dependabotSecurityUpdatesEnabledForNewRepositories;
    }
    // dependency_graph_enabled_for_new_repositories - computed: false, optional: true, required: false
    _dependencyGraphEnabledForNewRepositories;
    get dependencyGraphEnabledForNewRepositories() {
        return this.getBooleanAttribute('dependency_graph_enabled_for_new_repositories');
    }
    set dependencyGraphEnabledForNewRepositories(value) {
        this._dependencyGraphEnabledForNewRepositories = value;
    }
    resetDependencyGraphEnabledForNewRepositories() {
        this._dependencyGraphEnabledForNewRepositories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dependencyGraphEnabledForNewRepositoriesInput() {
        return this._dependencyGraphEnabledForNewRepositories;
    }
    // description - computed: false, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // email - computed: false, optional: true, required: false
    _email;
    get email() {
        return this.getStringAttribute('email');
    }
    set email(value) {
        this._email = value;
    }
    resetEmail() {
        this._email = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailInput() {
        return this._email;
    }
    // has_organization_projects - computed: false, optional: true, required: false
    _hasOrganizationProjects;
    get hasOrganizationProjects() {
        return this.getBooleanAttribute('has_organization_projects');
    }
    set hasOrganizationProjects(value) {
        this._hasOrganizationProjects = value;
    }
    resetHasOrganizationProjects() {
        this._hasOrganizationProjects = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hasOrganizationProjectsInput() {
        return this._hasOrganizationProjects;
    }
    // has_repository_projects - computed: false, optional: true, required: false
    _hasRepositoryProjects;
    get hasRepositoryProjects() {
        return this.getBooleanAttribute('has_repository_projects');
    }
    set hasRepositoryProjects(value) {
        this._hasRepositoryProjects = value;
    }
    resetHasRepositoryProjects() {
        this._hasRepositoryProjects = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hasRepositoryProjectsInput() {
        return this._hasRepositoryProjects;
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
    // location - computed: false, optional: true, required: false
    _location;
    get location() {
        return this.getStringAttribute('location');
    }
    set location(value) {
        this._location = value;
    }
    resetLocation() {
        this._location = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get locationInput() {
        return this._location;
    }
    // members_can_create_internal_repositories - computed: false, optional: true, required: false
    _membersCanCreateInternalRepositories;
    get membersCanCreateInternalRepositories() {
        return this.getBooleanAttribute('members_can_create_internal_repositories');
    }
    set membersCanCreateInternalRepositories(value) {
        this._membersCanCreateInternalRepositories = value;
    }
    resetMembersCanCreateInternalRepositories() {
        this._membersCanCreateInternalRepositories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get membersCanCreateInternalRepositoriesInput() {
        return this._membersCanCreateInternalRepositories;
    }
    // members_can_create_pages - computed: false, optional: true, required: false
    _membersCanCreatePages;
    get membersCanCreatePages() {
        return this.getBooleanAttribute('members_can_create_pages');
    }
    set membersCanCreatePages(value) {
        this._membersCanCreatePages = value;
    }
    resetMembersCanCreatePages() {
        this._membersCanCreatePages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get membersCanCreatePagesInput() {
        return this._membersCanCreatePages;
    }
    // members_can_create_private_pages - computed: false, optional: true, required: false
    _membersCanCreatePrivatePages;
    get membersCanCreatePrivatePages() {
        return this.getBooleanAttribute('members_can_create_private_pages');
    }
    set membersCanCreatePrivatePages(value) {
        this._membersCanCreatePrivatePages = value;
    }
    resetMembersCanCreatePrivatePages() {
        this._membersCanCreatePrivatePages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get membersCanCreatePrivatePagesInput() {
        return this._membersCanCreatePrivatePages;
    }
    // members_can_create_private_repositories - computed: false, optional: true, required: false
    _membersCanCreatePrivateRepositories;
    get membersCanCreatePrivateRepositories() {
        return this.getBooleanAttribute('members_can_create_private_repositories');
    }
    set membersCanCreatePrivateRepositories(value) {
        this._membersCanCreatePrivateRepositories = value;
    }
    resetMembersCanCreatePrivateRepositories() {
        this._membersCanCreatePrivateRepositories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get membersCanCreatePrivateRepositoriesInput() {
        return this._membersCanCreatePrivateRepositories;
    }
    // members_can_create_public_pages - computed: false, optional: true, required: false
    _membersCanCreatePublicPages;
    get membersCanCreatePublicPages() {
        return this.getBooleanAttribute('members_can_create_public_pages');
    }
    set membersCanCreatePublicPages(value) {
        this._membersCanCreatePublicPages = value;
    }
    resetMembersCanCreatePublicPages() {
        this._membersCanCreatePublicPages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get membersCanCreatePublicPagesInput() {
        return this._membersCanCreatePublicPages;
    }
    // members_can_create_public_repositories - computed: false, optional: true, required: false
    _membersCanCreatePublicRepositories;
    get membersCanCreatePublicRepositories() {
        return this.getBooleanAttribute('members_can_create_public_repositories');
    }
    set membersCanCreatePublicRepositories(value) {
        this._membersCanCreatePublicRepositories = value;
    }
    resetMembersCanCreatePublicRepositories() {
        this._membersCanCreatePublicRepositories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get membersCanCreatePublicRepositoriesInput() {
        return this._membersCanCreatePublicRepositories;
    }
    // members_can_create_repositories - computed: false, optional: true, required: false
    _membersCanCreateRepositories;
    get membersCanCreateRepositories() {
        return this.getBooleanAttribute('members_can_create_repositories');
    }
    set membersCanCreateRepositories(value) {
        this._membersCanCreateRepositories = value;
    }
    resetMembersCanCreateRepositories() {
        this._membersCanCreateRepositories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get membersCanCreateRepositoriesInput() {
        return this._membersCanCreateRepositories;
    }
    // members_can_fork_private_repositories - computed: false, optional: true, required: false
    _membersCanForkPrivateRepositories;
    get membersCanForkPrivateRepositories() {
        return this.getBooleanAttribute('members_can_fork_private_repositories');
    }
    set membersCanForkPrivateRepositories(value) {
        this._membersCanForkPrivateRepositories = value;
    }
    resetMembersCanForkPrivateRepositories() {
        this._membersCanForkPrivateRepositories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get membersCanForkPrivateRepositoriesInput() {
        return this._membersCanForkPrivateRepositories;
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
    // secret_scanning_enabled_for_new_repositories - computed: false, optional: true, required: false
    _secretScanningEnabledForNewRepositories;
    get secretScanningEnabledForNewRepositories() {
        return this.getBooleanAttribute('secret_scanning_enabled_for_new_repositories');
    }
    set secretScanningEnabledForNewRepositories(value) {
        this._secretScanningEnabledForNewRepositories = value;
    }
    resetSecretScanningEnabledForNewRepositories() {
        this._secretScanningEnabledForNewRepositories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secretScanningEnabledForNewRepositoriesInput() {
        return this._secretScanningEnabledForNewRepositories;
    }
    // secret_scanning_push_protection_enabled_for_new_repositories - computed: false, optional: true, required: false
    _secretScanningPushProtectionEnabledForNewRepositories;
    get secretScanningPushProtectionEnabledForNewRepositories() {
        return this.getBooleanAttribute('secret_scanning_push_protection_enabled_for_new_repositories');
    }
    set secretScanningPushProtectionEnabledForNewRepositories(value) {
        this._secretScanningPushProtectionEnabledForNewRepositories = value;
    }
    resetSecretScanningPushProtectionEnabledForNewRepositories() {
        this._secretScanningPushProtectionEnabledForNewRepositories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secretScanningPushProtectionEnabledForNewRepositoriesInput() {
        return this._secretScanningPushProtectionEnabledForNewRepositories;
    }
    // twitter_username - computed: false, optional: true, required: false
    _twitterUsername;
    get twitterUsername() {
        return this.getStringAttribute('twitter_username');
    }
    set twitterUsername(value) {
        this._twitterUsername = value;
    }
    resetTwitterUsername() {
        this._twitterUsername = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get twitterUsernameInput() {
        return this._twitterUsername;
    }
    // web_commit_signoff_required - computed: false, optional: true, required: false
    _webCommitSignoffRequired;
    get webCommitSignoffRequired() {
        return this.getBooleanAttribute('web_commit_signoff_required');
    }
    set webCommitSignoffRequired(value) {
        this._webCommitSignoffRequired = value;
    }
    resetWebCommitSignoffRequired() {
        this._webCommitSignoffRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get webCommitSignoffRequiredInput() {
        return this._webCommitSignoffRequired;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            advanced_security_enabled_for_new_repositories: cdktf.booleanToTerraform(this._advancedSecurityEnabledForNewRepositories),
            billing_email: cdktf.stringToTerraform(this._billingEmail),
            blog: cdktf.stringToTerraform(this._blog),
            company: cdktf.stringToTerraform(this._company),
            default_repository_permission: cdktf.stringToTerraform(this._defaultRepositoryPermission),
            dependabot_alerts_enabled_for_new_repositories: cdktf.booleanToTerraform(this._dependabotAlertsEnabledForNewRepositories),
            dependabot_security_updates_enabled_for_new_repositories: cdktf.booleanToTerraform(this._dependabotSecurityUpdatesEnabledForNewRepositories),
            dependency_graph_enabled_for_new_repositories: cdktf.booleanToTerraform(this._dependencyGraphEnabledForNewRepositories),
            description: cdktf.stringToTerraform(this._description),
            email: cdktf.stringToTerraform(this._email),
            has_organization_projects: cdktf.booleanToTerraform(this._hasOrganizationProjects),
            has_repository_projects: cdktf.booleanToTerraform(this._hasRepositoryProjects),
            id: cdktf.stringToTerraform(this._id),
            location: cdktf.stringToTerraform(this._location),
            members_can_create_internal_repositories: cdktf.booleanToTerraform(this._membersCanCreateInternalRepositories),
            members_can_create_pages: cdktf.booleanToTerraform(this._membersCanCreatePages),
            members_can_create_private_pages: cdktf.booleanToTerraform(this._membersCanCreatePrivatePages),
            members_can_create_private_repositories: cdktf.booleanToTerraform(this._membersCanCreatePrivateRepositories),
            members_can_create_public_pages: cdktf.booleanToTerraform(this._membersCanCreatePublicPages),
            members_can_create_public_repositories: cdktf.booleanToTerraform(this._membersCanCreatePublicRepositories),
            members_can_create_repositories: cdktf.booleanToTerraform(this._membersCanCreateRepositories),
            members_can_fork_private_repositories: cdktf.booleanToTerraform(this._membersCanForkPrivateRepositories),
            name: cdktf.stringToTerraform(this._name),
            secret_scanning_enabled_for_new_repositories: cdktf.booleanToTerraform(this._secretScanningEnabledForNewRepositories),
            secret_scanning_push_protection_enabled_for_new_repositories: cdktf.booleanToTerraform(this._secretScanningPushProtectionEnabledForNewRepositories),
            twitter_username: cdktf.stringToTerraform(this._twitterUsername),
            web_commit_signoff_required: cdktf.booleanToTerraform(this._webCommitSignoffRequired),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            advanced_security_enabled_for_new_repositories: {
                value: cdktf.booleanToHclTerraform(this._advancedSecurityEnabledForNewRepositories),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            billing_email: {
                value: cdktf.stringToHclTerraform(this._billingEmail),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            blog: {
                value: cdktf.stringToHclTerraform(this._blog),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            company: {
                value: cdktf.stringToHclTerraform(this._company),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_repository_permission: {
                value: cdktf.stringToHclTerraform(this._defaultRepositoryPermission),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dependabot_alerts_enabled_for_new_repositories: {
                value: cdktf.booleanToHclTerraform(this._dependabotAlertsEnabledForNewRepositories),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            dependabot_security_updates_enabled_for_new_repositories: {
                value: cdktf.booleanToHclTerraform(this._dependabotSecurityUpdatesEnabledForNewRepositories),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            dependency_graph_enabled_for_new_repositories: {
                value: cdktf.booleanToHclTerraform(this._dependencyGraphEnabledForNewRepositories),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            email: {
                value: cdktf.stringToHclTerraform(this._email),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            has_organization_projects: {
                value: cdktf.booleanToHclTerraform(this._hasOrganizationProjects),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            has_repository_projects: {
                value: cdktf.booleanToHclTerraform(this._hasRepositoryProjects),
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
            location: {
                value: cdktf.stringToHclTerraform(this._location),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            members_can_create_internal_repositories: {
                value: cdktf.booleanToHclTerraform(this._membersCanCreateInternalRepositories),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            members_can_create_pages: {
                value: cdktf.booleanToHclTerraform(this._membersCanCreatePages),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            members_can_create_private_pages: {
                value: cdktf.booleanToHclTerraform(this._membersCanCreatePrivatePages),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            members_can_create_private_repositories: {
                value: cdktf.booleanToHclTerraform(this._membersCanCreatePrivateRepositories),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            members_can_create_public_pages: {
                value: cdktf.booleanToHclTerraform(this._membersCanCreatePublicPages),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            members_can_create_public_repositories: {
                value: cdktf.booleanToHclTerraform(this._membersCanCreatePublicRepositories),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            members_can_create_repositories: {
                value: cdktf.booleanToHclTerraform(this._membersCanCreateRepositories),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            members_can_fork_private_repositories: {
                value: cdktf.booleanToHclTerraform(this._membersCanForkPrivateRepositories),
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
            secret_scanning_enabled_for_new_repositories: {
                value: cdktf.booleanToHclTerraform(this._secretScanningEnabledForNewRepositories),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            secret_scanning_push_protection_enabled_for_new_repositories: {
                value: cdktf.booleanToHclTerraform(this._secretScanningPushProtectionEnabledForNewRepositories),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            twitter_username: {
                value: cdktf.stringToHclTerraform(this._twitterUsername),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            web_commit_signoff_required: {
                value: cdktf.booleanToHclTerraform(this._webCommitSignoffRequired),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
