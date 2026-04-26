"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_permissions
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
exports.EnterpriseActionsPermissions = exports.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference = exports.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference = void 0;
exports.enterpriseActionsPermissionsAllowedActionsConfigToTerraform = enterpriseActionsPermissionsAllowedActionsConfigToTerraform;
exports.enterpriseActionsPermissionsAllowedActionsConfigToHclTerraform = enterpriseActionsPermissionsAllowedActionsConfigToHclTerraform;
exports.enterpriseActionsPermissionsEnabledOrganizationsConfigToTerraform = enterpriseActionsPermissionsEnabledOrganizationsConfigToTerraform;
exports.enterpriseActionsPermissionsEnabledOrganizationsConfigToHclTerraform = enterpriseActionsPermissionsEnabledOrganizationsConfigToHclTerraform;
var cdktf = require("cdktf");
function enterpriseActionsPermissionsAllowedActionsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        github_owned_allowed: cdktf.booleanToTerraform(struct.githubOwnedAllowed),
        patterns_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.patternsAllowed),
        verified_allowed: cdktf.booleanToTerraform(struct.verifiedAllowed),
    };
}
function enterpriseActionsPermissionsAllowedActionsConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        github_owned_allowed: {
            value: cdktf.booleanToHclTerraform(struct.githubOwnedAllowed),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        patterns_allowed: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.patternsAllowed),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        verified_allowed: {
            value: cdktf.booleanToHclTerraform(struct.verifiedAllowed),
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
}
var EnterpriseActionsPermissionsAllowedActionsConfigOutputReference = /** @class */ (function (_super) {
    __extends(EnterpriseActionsPermissionsAllowedActionsConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function EnterpriseActionsPermissionsAllowedActionsConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._githubOwnedAllowed !== undefined) {
                hasAnyValues = true;
                internalValueResult.githubOwnedAllowed = this._githubOwnedAllowed;
            }
            if (this._patternsAllowed !== undefined) {
                hasAnyValues = true;
                internalValueResult.patternsAllowed = this._patternsAllowed;
            }
            if (this._verifiedAllowed !== undefined) {
                hasAnyValues = true;
                internalValueResult.verifiedAllowed = this._verifiedAllowed;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._githubOwnedAllowed = undefined;
                this._patternsAllowed = undefined;
                this._verifiedAllowed = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._githubOwnedAllowed = value.githubOwnedAllowed;
                this._patternsAllowed = value.patternsAllowed;
                this._verifiedAllowed = value.verifiedAllowed;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.prototype, "githubOwnedAllowed", {
        get: function () {
            return this.getBooleanAttribute('github_owned_allowed');
        },
        set: function (value) {
            this._githubOwnedAllowed = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.prototype, "githubOwnedAllowedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._githubOwnedAllowed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.prototype, "patternsAllowed", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('patterns_allowed'));
        },
        set: function (value) {
            this._patternsAllowed = value;
        },
        enumerable: false,
        configurable: true
    });
    EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.prototype.resetPatternsAllowed = function () {
        this._patternsAllowed = undefined;
    };
    Object.defineProperty(EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.prototype, "patternsAllowedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._patternsAllowed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.prototype, "verifiedAllowed", {
        get: function () {
            return this.getBooleanAttribute('verified_allowed');
        },
        set: function (value) {
            this._verifiedAllowed = value;
        },
        enumerable: false,
        configurable: true
    });
    EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.prototype.resetVerifiedAllowed = function () {
        this._verifiedAllowed = undefined;
    };
    Object.defineProperty(EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.prototype, "verifiedAllowedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._verifiedAllowed;
        },
        enumerable: false,
        configurable: true
    });
    return EnterpriseActionsPermissionsAllowedActionsConfigOutputReference;
}(cdktf.ComplexObject));
exports.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference = EnterpriseActionsPermissionsAllowedActionsConfigOutputReference;
function enterpriseActionsPermissionsEnabledOrganizationsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        organization_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct.organizationIds),
    };
}
function enterpriseActionsPermissionsEnabledOrganizationsConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        organization_ids: {
            value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct.organizationIds),
            isBlock: false,
            type: "set",
            storageClassType: "numberList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference = /** @class */ (function (_super) {
    __extends(EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._organizationIds !== undefined) {
                hasAnyValues = true;
                internalValueResult.organizationIds = this._organizationIds;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._organizationIds = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._organizationIds = value.organizationIds;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.prototype, "organizationIds", {
        get: function () {
            return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('organization_ids')));
        },
        set: function (value) {
            this._organizationIds = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.prototype, "organizationIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._organizationIds;
        },
        enumerable: false,
        configurable: true
    });
    return EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference;
}(cdktf.ComplexObject));
exports.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference = EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_permissions github_enterprise_actions_permissions}
*/
var EnterpriseActionsPermissions = /** @class */ (function (_super) {
    __extends(EnterpriseActionsPermissions, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_permissions github_enterprise_actions_permissions} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EnterpriseActionsPermissionsConfig
    */
    function EnterpriseActionsPermissions(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_enterprise_actions_permissions',
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
        // allowed_actions_config - computed: false, optional: true, required: false
        _this._allowedActionsConfig = new EnterpriseActionsPermissionsAllowedActionsConfigOutputReference(_this, "allowed_actions_config");
        // enabled_organizations_config - computed: false, optional: true, required: false
        _this._enabledOrganizationsConfig = new EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference(_this, "enabled_organizations_config");
        _this._allowedActions = config.allowedActions;
        _this._enabledOrganizations = config.enabledOrganizations;
        _this._enterpriseSlug = config.enterpriseSlug;
        _this._id = config.id;
        _this._allowedActionsConfig.internalValue = config.allowedActionsConfig;
        _this._enabledOrganizationsConfig.internalValue = config.enabledOrganizationsConfig;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a EnterpriseActionsPermissions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EnterpriseActionsPermissions to import
    * @param importFromId The id of the existing EnterpriseActionsPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_actions_permissions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EnterpriseActionsPermissions to import is found
    */
    EnterpriseActionsPermissions.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_enterprise_actions_permissions", importId: importFromId, provider: provider });
    };
    Object.defineProperty(EnterpriseActionsPermissions.prototype, "allowedActions", {
        get: function () {
            return this.getStringAttribute('allowed_actions');
        },
        set: function (value) {
            this._allowedActions = value;
        },
        enumerable: false,
        configurable: true
    });
    EnterpriseActionsPermissions.prototype.resetAllowedActions = function () {
        this._allowedActions = undefined;
    };
    Object.defineProperty(EnterpriseActionsPermissions.prototype, "allowedActionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedActions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseActionsPermissions.prototype, "enabledOrganizations", {
        get: function () {
            return this.getStringAttribute('enabled_organizations');
        },
        set: function (value) {
            this._enabledOrganizations = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseActionsPermissions.prototype, "enabledOrganizationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabledOrganizations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseActionsPermissions.prototype, "enterpriseSlug", {
        get: function () {
            return this.getStringAttribute('enterprise_slug');
        },
        set: function (value) {
            this._enterpriseSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseActionsPermissions.prototype, "enterpriseSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enterpriseSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseActionsPermissions.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    EnterpriseActionsPermissions.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(EnterpriseActionsPermissions.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseActionsPermissions.prototype, "allowedActionsConfig", {
        get: function () {
            return this._allowedActionsConfig;
        },
        enumerable: false,
        configurable: true
    });
    EnterpriseActionsPermissions.prototype.putAllowedActionsConfig = function (value) {
        this._allowedActionsConfig.internalValue = value;
    };
    EnterpriseActionsPermissions.prototype.resetAllowedActionsConfig = function () {
        this._allowedActionsConfig.internalValue = undefined;
    };
    Object.defineProperty(EnterpriseActionsPermissions.prototype, "allowedActionsConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedActionsConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EnterpriseActionsPermissions.prototype, "enabledOrganizationsConfig", {
        get: function () {
            return this._enabledOrganizationsConfig;
        },
        enumerable: false,
        configurable: true
    });
    EnterpriseActionsPermissions.prototype.putEnabledOrganizationsConfig = function (value) {
        this._enabledOrganizationsConfig.internalValue = value;
    };
    EnterpriseActionsPermissions.prototype.resetEnabledOrganizationsConfig = function () {
        this._enabledOrganizationsConfig.internalValue = undefined;
    };
    Object.defineProperty(EnterpriseActionsPermissions.prototype, "enabledOrganizationsConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabledOrganizationsConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EnterpriseActionsPermissions.prototype.synthesizeAttributes = function () {
        return {
            allowed_actions: cdktf.stringToTerraform(this._allowedActions),
            enabled_organizations: cdktf.stringToTerraform(this._enabledOrganizations),
            enterprise_slug: cdktf.stringToTerraform(this._enterpriseSlug),
            id: cdktf.stringToTerraform(this._id),
            allowed_actions_config: enterpriseActionsPermissionsAllowedActionsConfigToTerraform(this._allowedActionsConfig.internalValue),
            enabled_organizations_config: enterpriseActionsPermissionsEnabledOrganizationsConfigToTerraform(this._enabledOrganizationsConfig.internalValue),
        };
    };
    EnterpriseActionsPermissions.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            allowed_actions: {
                value: cdktf.stringToHclTerraform(this._allowedActions),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enabled_organizations: {
                value: cdktf.stringToHclTerraform(this._enabledOrganizations),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
            allowed_actions_config: {
                value: enterpriseActionsPermissionsAllowedActionsConfigToHclTerraform(this._allowedActionsConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "EnterpriseActionsPermissionsAllowedActionsConfigList",
            },
            enabled_organizations_config: {
                value: enterpriseActionsPermissionsEnabledOrganizationsConfigToHclTerraform(this._enabledOrganizationsConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "EnterpriseActionsPermissionsEnabledOrganizationsConfigList",
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
    EnterpriseActionsPermissions.tfResourceType = "github_enterprise_actions_permissions";
    return EnterpriseActionsPermissions;
}(cdktf.TerraformResource));
exports.EnterpriseActionsPermissions = EnterpriseActionsPermissions;
