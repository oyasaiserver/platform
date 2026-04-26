"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization
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
exports.DataGithubOrganization = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization github_organization}
*/
var DataGithubOrganization = /** @class */ (function (_super) {
    __extends(DataGithubOrganization, _super);
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
    function DataGithubOrganization(scope, id, config) {
        var _this = _super.call(this, scope, id, {
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
        }) || this;
        // users - computed: true, optional: false, required: false
        _this._users = new cdktf.StringMapList(_this, "users", false);
        _this._id = config.id;
        _this._ignoreArchivedRepos = config.ignoreArchivedRepos;
        _this._name = config.name;
        _this._summaryOnly = config.summaryOnly;
        return _this;
    }
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
    DataGithubOrganization.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubOrganization.prototype, "advancedSecurityEnabledForNewRepositories", {
        // ==========
        // ATTRIBUTES
        // ==========
        // advanced_security_enabled_for_new_repositories - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('advanced_security_enabled_for_new_repositories');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "defaultRepositoryPermission", {
        // default_repository_permission - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('default_repository_permission');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "dependabotAlertsEnabledForNewRepositories", {
        // dependabot_alerts_enabled_for_new_repositories - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('dependabot_alerts_enabled_for_new_repositories');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "dependabotSecurityUpdatesEnabledForNewRepositories", {
        // dependabot_security_updates_enabled_for_new_repositories - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('dependabot_security_updates_enabled_for_new_repositories');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "dependencyGraphEnabledForNewRepositories", {
        // dependency_graph_enabled_for_new_repositories - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('dependency_graph_enabled_for_new_repositories');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubOrganization.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubOrganization.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "ignoreArchivedRepos", {
        get: function () {
            return this.getBooleanAttribute('ignore_archived_repos');
        },
        set: function (value) {
            this._ignoreArchivedRepos = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubOrganization.prototype.resetIgnoreArchivedRepos = function () {
        this._ignoreArchivedRepos = undefined;
    };
    Object.defineProperty(DataGithubOrganization.prototype, "ignoreArchivedReposInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ignoreArchivedRepos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "login", {
        // login - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('login');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "members", {
        // members - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('members');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "membersAllowedRepositoryCreationType", {
        // members_allowed_repository_creation_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('members_allowed_repository_creation_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "membersCanCreateInternalRepositories", {
        // members_can_create_internal_repositories - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('members_can_create_internal_repositories');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "membersCanCreatePages", {
        // members_can_create_pages - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('members_can_create_pages');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "membersCanCreatePrivatePages", {
        // members_can_create_private_pages - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('members_can_create_private_pages');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "membersCanCreatePrivateRepositories", {
        // members_can_create_private_repositories - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('members_can_create_private_repositories');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "membersCanCreatePublicPages", {
        // members_can_create_public_pages - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('members_can_create_public_pages');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "membersCanCreatePublicRepositories", {
        // members_can_create_public_repositories - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('members_can_create_public_repositories');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "membersCanCreateRepositories", {
        // members_can_create_repositories - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('members_can_create_repositories');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "membersCanForkPrivateRepositories", {
        // members_can_fork_private_repositories - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('members_can_fork_private_repositories');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "nodeId", {
        // node_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('node_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "orgname", {
        // orgname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('orgname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "plan", {
        // plan - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('plan');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "repositories", {
        // repositories - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('repositories');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "secretScanningEnabledForNewRepositories", {
        // secret_scanning_enabled_for_new_repositories - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('secret_scanning_enabled_for_new_repositories');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "secretScanningPushProtectionEnabledForNewRepositories", {
        // secret_scanning_push_protection_enabled_for_new_repositories - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('secret_scanning_push_protection_enabled_for_new_repositories');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "summaryOnly", {
        get: function () {
            return this.getBooleanAttribute('summary_only');
        },
        set: function (value) {
            this._summaryOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubOrganization.prototype.resetSummaryOnly = function () {
        this._summaryOnly = undefined;
    };
    Object.defineProperty(DataGithubOrganization.prototype, "summaryOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._summaryOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "twoFactorRequirementEnabled", {
        // two_factor_requirement_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('two_factor_requirement_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "users", {
        get: function () {
            return this._users;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubOrganization.prototype, "webCommitSignoffRequired", {
        // web_commit_signoff_required - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('web_commit_signoff_required');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubOrganization.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            ignore_archived_repos: cdktf.booleanToTerraform(this._ignoreArchivedRepos),
            name: cdktf.stringToTerraform(this._name),
            summary_only: cdktf.booleanToTerraform(this._summaryOnly),
        };
    };
    DataGithubOrganization.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataGithubOrganization.tfResourceType = "github_organization";
    return DataGithubOrganization;
}(cdktf.TerraformDataSource));
exports.DataGithubOrganization = DataGithubOrganization;
