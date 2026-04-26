"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationSettings = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_settings github_organization_settings}
*/
var OrganizationSettings = /** @class */ (function (_super) {
    __extends(OrganizationSettings, _super);
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
    function OrganizationSettings(scope, id, config) {
        var _this = _super.call(this, scope, id, {
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
        }) || this;
        _this._advancedSecurityEnabledForNewRepositories = config.advancedSecurityEnabledForNewRepositories;
        _this._billingEmail = config.billingEmail;
        _this._blog = config.blog;
        _this._company = config.company;
        _this._defaultRepositoryPermission = config.defaultRepositoryPermission;
        _this._dependabotAlertsEnabledForNewRepositories = config.dependabotAlertsEnabledForNewRepositories;
        _this._dependabotSecurityUpdatesEnabledForNewRepositories = config.dependabotSecurityUpdatesEnabledForNewRepositories;
        _this._dependencyGraphEnabledForNewRepositories = config.dependencyGraphEnabledForNewRepositories;
        _this._description = config.description;
        _this._email = config.email;
        _this._hasOrganizationProjects = config.hasOrganizationProjects;
        _this._hasRepositoryProjects = config.hasRepositoryProjects;
        _this._id = config.id;
        _this._location = config.location;
        _this._membersCanCreateInternalRepositories = config.membersCanCreateInternalRepositories;
        _this._membersCanCreatePages = config.membersCanCreatePages;
        _this._membersCanCreatePrivatePages = config.membersCanCreatePrivatePages;
        _this._membersCanCreatePrivateRepositories = config.membersCanCreatePrivateRepositories;
        _this._membersCanCreatePublicPages = config.membersCanCreatePublicPages;
        _this._membersCanCreatePublicRepositories = config.membersCanCreatePublicRepositories;
        _this._membersCanCreateRepositories = config.membersCanCreateRepositories;
        _this._membersCanForkPrivateRepositories = config.membersCanForkPrivateRepositories;
        _this._name = config.name;
        _this._secretScanningEnabledForNewRepositories = config.secretScanningEnabledForNewRepositories;
        _this._secretScanningPushProtectionEnabledForNewRepositories = config.secretScanningPushProtectionEnabledForNewRepositories;
        _this._twitterUsername = config.twitterUsername;
        _this._webCommitSignoffRequired = config.webCommitSignoffRequired;
        return _this;
    }
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
    OrganizationSettings.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_settings", importId: importFromId, provider: provider });
    };
    Object.defineProperty(OrganizationSettings.prototype, "advancedSecurityEnabledForNewRepositories", {
        get: function () {
            return this.getBooleanAttribute('advanced_security_enabled_for_new_repositories');
        },
        set: function (value) {
            this._advancedSecurityEnabledForNewRepositories = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetAdvancedSecurityEnabledForNewRepositories = function () {
        this._advancedSecurityEnabledForNewRepositories = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "advancedSecurityEnabledForNewRepositoriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._advancedSecurityEnabledForNewRepositories;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "billingEmail", {
        get: function () {
            return this.getStringAttribute('billing_email');
        },
        set: function (value) {
            this._billingEmail = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "billingEmailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._billingEmail;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "blog", {
        get: function () {
            return this.getStringAttribute('blog');
        },
        set: function (value) {
            this._blog = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetBlog = function () {
        this._blog = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "blogInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._blog;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "company", {
        get: function () {
            return this.getStringAttribute('company');
        },
        set: function (value) {
            this._company = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetCompany = function () {
        this._company = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "companyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._company;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "defaultRepositoryPermission", {
        get: function () {
            return this.getStringAttribute('default_repository_permission');
        },
        set: function (value) {
            this._defaultRepositoryPermission = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetDefaultRepositoryPermission = function () {
        this._defaultRepositoryPermission = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "defaultRepositoryPermissionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultRepositoryPermission;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "dependabotAlertsEnabledForNewRepositories", {
        get: function () {
            return this.getBooleanAttribute('dependabot_alerts_enabled_for_new_repositories');
        },
        set: function (value) {
            this._dependabotAlertsEnabledForNewRepositories = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetDependabotAlertsEnabledForNewRepositories = function () {
        this._dependabotAlertsEnabledForNewRepositories = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "dependabotAlertsEnabledForNewRepositoriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dependabotAlertsEnabledForNewRepositories;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "dependabotSecurityUpdatesEnabledForNewRepositories", {
        get: function () {
            return this.getBooleanAttribute('dependabot_security_updates_enabled_for_new_repositories');
        },
        set: function (value) {
            this._dependabotSecurityUpdatesEnabledForNewRepositories = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetDependabotSecurityUpdatesEnabledForNewRepositories = function () {
        this._dependabotSecurityUpdatesEnabledForNewRepositories = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "dependabotSecurityUpdatesEnabledForNewRepositoriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dependabotSecurityUpdatesEnabledForNewRepositories;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "dependencyGraphEnabledForNewRepositories", {
        get: function () {
            return this.getBooleanAttribute('dependency_graph_enabled_for_new_repositories');
        },
        set: function (value) {
            this._dependencyGraphEnabledForNewRepositories = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetDependencyGraphEnabledForNewRepositories = function () {
        this._dependencyGraphEnabledForNewRepositories = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "dependencyGraphEnabledForNewRepositoriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dependencyGraphEnabledForNewRepositories;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "email", {
        get: function () {
            return this.getStringAttribute('email');
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetEmail = function () {
        this._email = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "hasOrganizationProjects", {
        get: function () {
            return this.getBooleanAttribute('has_organization_projects');
        },
        set: function (value) {
            this._hasOrganizationProjects = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetHasOrganizationProjects = function () {
        this._hasOrganizationProjects = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "hasOrganizationProjectsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hasOrganizationProjects;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "hasRepositoryProjects", {
        get: function () {
            return this.getBooleanAttribute('has_repository_projects');
        },
        set: function (value) {
            this._hasRepositoryProjects = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetHasRepositoryProjects = function () {
        this._hasRepositoryProjects = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "hasRepositoryProjectsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hasRepositoryProjects;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "location", {
        get: function () {
            return this.getStringAttribute('location');
        },
        set: function (value) {
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetLocation = function () {
        this._location = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "locationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._location;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "membersCanCreateInternalRepositories", {
        get: function () {
            return this.getBooleanAttribute('members_can_create_internal_repositories');
        },
        set: function (value) {
            this._membersCanCreateInternalRepositories = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetMembersCanCreateInternalRepositories = function () {
        this._membersCanCreateInternalRepositories = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "membersCanCreateInternalRepositoriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._membersCanCreateInternalRepositories;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "membersCanCreatePages", {
        get: function () {
            return this.getBooleanAttribute('members_can_create_pages');
        },
        set: function (value) {
            this._membersCanCreatePages = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetMembersCanCreatePages = function () {
        this._membersCanCreatePages = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "membersCanCreatePagesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._membersCanCreatePages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "membersCanCreatePrivatePages", {
        get: function () {
            return this.getBooleanAttribute('members_can_create_private_pages');
        },
        set: function (value) {
            this._membersCanCreatePrivatePages = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetMembersCanCreatePrivatePages = function () {
        this._membersCanCreatePrivatePages = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "membersCanCreatePrivatePagesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._membersCanCreatePrivatePages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "membersCanCreatePrivateRepositories", {
        get: function () {
            return this.getBooleanAttribute('members_can_create_private_repositories');
        },
        set: function (value) {
            this._membersCanCreatePrivateRepositories = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetMembersCanCreatePrivateRepositories = function () {
        this._membersCanCreatePrivateRepositories = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "membersCanCreatePrivateRepositoriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._membersCanCreatePrivateRepositories;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "membersCanCreatePublicPages", {
        get: function () {
            return this.getBooleanAttribute('members_can_create_public_pages');
        },
        set: function (value) {
            this._membersCanCreatePublicPages = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetMembersCanCreatePublicPages = function () {
        this._membersCanCreatePublicPages = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "membersCanCreatePublicPagesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._membersCanCreatePublicPages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "membersCanCreatePublicRepositories", {
        get: function () {
            return this.getBooleanAttribute('members_can_create_public_repositories');
        },
        set: function (value) {
            this._membersCanCreatePublicRepositories = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetMembersCanCreatePublicRepositories = function () {
        this._membersCanCreatePublicRepositories = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "membersCanCreatePublicRepositoriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._membersCanCreatePublicRepositories;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "membersCanCreateRepositories", {
        get: function () {
            return this.getBooleanAttribute('members_can_create_repositories');
        },
        set: function (value) {
            this._membersCanCreateRepositories = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetMembersCanCreateRepositories = function () {
        this._membersCanCreateRepositories = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "membersCanCreateRepositoriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._membersCanCreateRepositories;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "membersCanForkPrivateRepositories", {
        get: function () {
            return this.getBooleanAttribute('members_can_fork_private_repositories');
        },
        set: function (value) {
            this._membersCanForkPrivateRepositories = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetMembersCanForkPrivateRepositories = function () {
        this._membersCanForkPrivateRepositories = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "membersCanForkPrivateRepositoriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._membersCanForkPrivateRepositories;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "secretScanningEnabledForNewRepositories", {
        get: function () {
            return this.getBooleanAttribute('secret_scanning_enabled_for_new_repositories');
        },
        set: function (value) {
            this._secretScanningEnabledForNewRepositories = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetSecretScanningEnabledForNewRepositories = function () {
        this._secretScanningEnabledForNewRepositories = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "secretScanningEnabledForNewRepositoriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretScanningEnabledForNewRepositories;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "secretScanningPushProtectionEnabledForNewRepositories", {
        get: function () {
            return this.getBooleanAttribute('secret_scanning_push_protection_enabled_for_new_repositories');
        },
        set: function (value) {
            this._secretScanningPushProtectionEnabledForNewRepositories = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetSecretScanningPushProtectionEnabledForNewRepositories = function () {
        this._secretScanningPushProtectionEnabledForNewRepositories = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "secretScanningPushProtectionEnabledForNewRepositoriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretScanningPushProtectionEnabledForNewRepositories;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "twitterUsername", {
        get: function () {
            return this.getStringAttribute('twitter_username');
        },
        set: function (value) {
            this._twitterUsername = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetTwitterUsername = function () {
        this._twitterUsername = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "twitterUsernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._twitterUsername;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationSettings.prototype, "webCommitSignoffRequired", {
        get: function () {
            return this.getBooleanAttribute('web_commit_signoff_required');
        },
        set: function (value) {
            this._webCommitSignoffRequired = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationSettings.prototype.resetWebCommitSignoffRequired = function () {
        this._webCommitSignoffRequired = undefined;
    };
    Object.defineProperty(OrganizationSettings.prototype, "webCommitSignoffRequiredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._webCommitSignoffRequired;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    OrganizationSettings.prototype.synthesizeAttributes = function () {
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
    };
    OrganizationSettings.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    OrganizationSettings.tfResourceType = "github_organization_settings";
    return OrganizationSettings;
}(cdktf.TerraformResource));
exports.OrganizationSettings = OrganizationSettings;
