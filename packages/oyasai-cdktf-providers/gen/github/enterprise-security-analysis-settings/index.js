// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_security_analysis_settings
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_security_analysis_settings github_enterprise_security_analysis_settings}
*/
export class EnterpriseSecurityAnalysisSettings extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_enterprise_security_analysis_settings";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a EnterpriseSecurityAnalysisSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EnterpriseSecurityAnalysisSettings to import
    * @param importFromId The id of the existing EnterpriseSecurityAnalysisSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_security_analysis_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EnterpriseSecurityAnalysisSettings to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_enterprise_security_analysis_settings", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_security_analysis_settings github_enterprise_security_analysis_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EnterpriseSecurityAnalysisSettingsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_enterprise_security_analysis_settings',
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
        this._enterpriseSlug = config.enterpriseSlug;
        this._id = config.id;
        this._secretScanningEnabledForNewRepositories = config.secretScanningEnabledForNewRepositories;
        this._secretScanningPushProtectionCustomLink = config.secretScanningPushProtectionCustomLink;
        this._secretScanningPushProtectionEnabledForNewRepositories = config.secretScanningPushProtectionEnabledForNewRepositories;
        this._secretScanningValidityChecksEnabled = config.secretScanningValidityChecksEnabled;
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
    // enterprise_slug - computed: false, optional: false, required: true
    _enterpriseSlug;
    get enterpriseSlug() {
        return this.getStringAttribute('enterprise_slug');
    }
    set enterpriseSlug(value) {
        this._enterpriseSlug = value;
    }
    // Temporarily expose input value. Use with caution.
    get enterpriseSlugInput() {
        return this._enterpriseSlug;
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
    // secret_scanning_push_protection_custom_link - computed: false, optional: true, required: false
    _secretScanningPushProtectionCustomLink;
    get secretScanningPushProtectionCustomLink() {
        return this.getStringAttribute('secret_scanning_push_protection_custom_link');
    }
    set secretScanningPushProtectionCustomLink(value) {
        this._secretScanningPushProtectionCustomLink = value;
    }
    resetSecretScanningPushProtectionCustomLink() {
        this._secretScanningPushProtectionCustomLink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secretScanningPushProtectionCustomLinkInput() {
        return this._secretScanningPushProtectionCustomLink;
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
    // secret_scanning_validity_checks_enabled - computed: false, optional: true, required: false
    _secretScanningValidityChecksEnabled;
    get secretScanningValidityChecksEnabled() {
        return this.getBooleanAttribute('secret_scanning_validity_checks_enabled');
    }
    set secretScanningValidityChecksEnabled(value) {
        this._secretScanningValidityChecksEnabled = value;
    }
    resetSecretScanningValidityChecksEnabled() {
        this._secretScanningValidityChecksEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secretScanningValidityChecksEnabledInput() {
        return this._secretScanningValidityChecksEnabled;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            advanced_security_enabled_for_new_repositories: cdktf.booleanToTerraform(this._advancedSecurityEnabledForNewRepositories),
            enterprise_slug: cdktf.stringToTerraform(this._enterpriseSlug),
            id: cdktf.stringToTerraform(this._id),
            secret_scanning_enabled_for_new_repositories: cdktf.booleanToTerraform(this._secretScanningEnabledForNewRepositories),
            secret_scanning_push_protection_custom_link: cdktf.stringToTerraform(this._secretScanningPushProtectionCustomLink),
            secret_scanning_push_protection_enabled_for_new_repositories: cdktf.booleanToTerraform(this._secretScanningPushProtectionEnabledForNewRepositories),
            secret_scanning_validity_checks_enabled: cdktf.booleanToTerraform(this._secretScanningValidityChecksEnabled),
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
            enterprise_slug: {
                value: cdktf.stringToHclTerraform(this._enterpriseSlug),
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
            secret_scanning_enabled_for_new_repositories: {
                value: cdktf.booleanToHclTerraform(this._secretScanningEnabledForNewRepositories),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            secret_scanning_push_protection_custom_link: {
                value: cdktf.stringToHclTerraform(this._secretScanningPushProtectionCustomLink),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secret_scanning_push_protection_enabled_for_new_repositories: {
                value: cdktf.booleanToHclTerraform(this._secretScanningPushProtectionEnabledForNewRepositories),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            secret_scanning_validity_checks_enabled: {
                value: cdktf.booleanToHclTerraform(this._secretScanningValidityChecksEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
