"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_security_analysis_settings
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
exports.EnterpriseSecurityAnalysisSettings = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_security_analysis_settings github_enterprise_security_analysis_settings}
*/
var EnterpriseSecurityAnalysisSettings = /** @class */ (function (_super) {
    __extends(EnterpriseSecurityAnalysisSettings, _super);
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
    function EnterpriseSecurityAnalysisSettings(scope, id, config) {
        var _this = _super.call(this, scope, id, {
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
        }) || this;
        _this._advancedSecurityEnabledForNewRepositories = config.advancedSecurityEnabledForNewRepositories;
        _this._enterpriseSlug = config.enterpriseSlug;
        _this._id = config.id;
        _this._secretScanningEnabledForNewRepositories = config.secretScanningEnabledForNewRepositories;
        _this._secretScanningPushProtectionCustomLink = config.secretScanningPushProtectionCustomLink;
        _this._secretScanningPushProtectionEnabledForNewRepositories = config.secretScanningPushProtectionEnabledForNewRepositories;
        _this._secretScanningValidityChecksEnabled = config.secretScanningValidityChecksEnabled;
        return _this;
    }
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
    EnterpriseSecurityAnalysisSettings.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_enterprise_security_analysis_settings", importId: importFromId, provider: provider });
    };
    Object.defineProperty(EnterpriseSecurityAnalysisSettings.prototype, "advancedSecurityEnabledForNewRepositories", {
        get: function () {
            return this.getBooleanAttribute('advanced_security_enabled_for_new_repositories');
        },
        set: function (value) {
            this._advancedSecurityEnabledForNewRepositories = value;
        },
        enumerable: false,
        configurable: true
    });
    EnterpriseSecurityAnalysisSettings.prototype.resetAdvancedSecurityEnabledForNewRepositories = function () {
        this._advancedSecurityEnabledForNewRepositories = undefined;
    };
    Object.defineProperty(EnterpriseSecurityAnalysisSettings.prototype, "advancedSecurityEnabledForNewRepositoriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._advancedSecurityEnabledForNewRepositories;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseSecurityAnalysisSettings.prototype, "enterpriseSlug", {
        get: function () {
            return this.getStringAttribute('enterprise_slug');
        },
        set: function (value) {
            this._enterpriseSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseSecurityAnalysisSettings.prototype, "enterpriseSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enterpriseSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseSecurityAnalysisSettings.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    EnterpriseSecurityAnalysisSettings.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(EnterpriseSecurityAnalysisSettings.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseSecurityAnalysisSettings.prototype, "secretScanningEnabledForNewRepositories", {
        get: function () {
            return this.getBooleanAttribute('secret_scanning_enabled_for_new_repositories');
        },
        set: function (value) {
            this._secretScanningEnabledForNewRepositories = value;
        },
        enumerable: false,
        configurable: true
    });
    EnterpriseSecurityAnalysisSettings.prototype.resetSecretScanningEnabledForNewRepositories = function () {
        this._secretScanningEnabledForNewRepositories = undefined;
    };
    Object.defineProperty(EnterpriseSecurityAnalysisSettings.prototype, "secretScanningEnabledForNewRepositoriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretScanningEnabledForNewRepositories;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseSecurityAnalysisSettings.prototype, "secretScanningPushProtectionCustomLink", {
        get: function () {
            return this.getStringAttribute('secret_scanning_push_protection_custom_link');
        },
        set: function (value) {
            this._secretScanningPushProtectionCustomLink = value;
        },
        enumerable: false,
        configurable: true
    });
    EnterpriseSecurityAnalysisSettings.prototype.resetSecretScanningPushProtectionCustomLink = function () {
        this._secretScanningPushProtectionCustomLink = undefined;
    };
    Object.defineProperty(EnterpriseSecurityAnalysisSettings.prototype, "secretScanningPushProtectionCustomLinkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretScanningPushProtectionCustomLink;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseSecurityAnalysisSettings.prototype, "secretScanningPushProtectionEnabledForNewRepositories", {
        get: function () {
            return this.getBooleanAttribute('secret_scanning_push_protection_enabled_for_new_repositories');
        },
        set: function (value) {
            this._secretScanningPushProtectionEnabledForNewRepositories = value;
        },
        enumerable: false,
        configurable: true
    });
    EnterpriseSecurityAnalysisSettings.prototype.resetSecretScanningPushProtectionEnabledForNewRepositories = function () {
        this._secretScanningPushProtectionEnabledForNewRepositories = undefined;
    };
    Object.defineProperty(EnterpriseSecurityAnalysisSettings.prototype, "secretScanningPushProtectionEnabledForNewRepositoriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretScanningPushProtectionEnabledForNewRepositories;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseSecurityAnalysisSettings.prototype, "secretScanningValidityChecksEnabled", {
        get: function () {
            return this.getBooleanAttribute('secret_scanning_validity_checks_enabled');
        },
        set: function (value) {
            this._secretScanningValidityChecksEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    EnterpriseSecurityAnalysisSettings.prototype.resetSecretScanningValidityChecksEnabled = function () {
        this._secretScanningValidityChecksEnabled = undefined;
    };
    Object.defineProperty(EnterpriseSecurityAnalysisSettings.prototype, "secretScanningValidityChecksEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretScanningValidityChecksEnabled;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EnterpriseSecurityAnalysisSettings.prototype.synthesizeAttributes = function () {
        return {
            advanced_security_enabled_for_new_repositories: cdktf.booleanToTerraform(this._advancedSecurityEnabledForNewRepositories),
            enterprise_slug: cdktf.stringToTerraform(this._enterpriseSlug),
            id: cdktf.stringToTerraform(this._id),
            secret_scanning_enabled_for_new_repositories: cdktf.booleanToTerraform(this._secretScanningEnabledForNewRepositories),
            secret_scanning_push_protection_custom_link: cdktf.stringToTerraform(this._secretScanningPushProtectionCustomLink),
            secret_scanning_push_protection_enabled_for_new_repositories: cdktf.booleanToTerraform(this._secretScanningPushProtectionEnabledForNewRepositories),
            secret_scanning_validity_checks_enabled: cdktf.booleanToTerraform(this._secretScanningValidityChecksEnabled),
        };
    };
    EnterpriseSecurityAnalysisSettings.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EnterpriseSecurityAnalysisSettings.tfResourceType = "github_enterprise_security_analysis_settings";
    return EnterpriseSecurityAnalysisSettings;
}(cdktf.TerraformResource));
exports.EnterpriseSecurityAnalysisSettings = EnterpriseSecurityAnalysisSettings;
