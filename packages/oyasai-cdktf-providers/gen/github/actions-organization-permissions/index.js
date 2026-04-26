"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_permissions
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
exports.ActionsOrganizationPermissions = exports.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference = exports.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference = void 0;
exports.actionsOrganizationPermissionsAllowedActionsConfigToTerraform = actionsOrganizationPermissionsAllowedActionsConfigToTerraform;
exports.actionsOrganizationPermissionsAllowedActionsConfigToHclTerraform = actionsOrganizationPermissionsAllowedActionsConfigToHclTerraform;
exports.actionsOrganizationPermissionsEnabledRepositoriesConfigToTerraform = actionsOrganizationPermissionsEnabledRepositoriesConfigToTerraform;
exports.actionsOrganizationPermissionsEnabledRepositoriesConfigToHclTerraform = actionsOrganizationPermissionsEnabledRepositoriesConfigToHclTerraform;
var cdktf = require("cdktf");
function actionsOrganizationPermissionsAllowedActionsConfigToTerraform(struct) {
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
function actionsOrganizationPermissionsAllowedActionsConfigToHclTerraform(struct) {
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
var ActionsOrganizationPermissionsAllowedActionsConfigOutputReference = /** @class */ (function (_super) {
    __extends(ActionsOrganizationPermissionsAllowedActionsConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ActionsOrganizationPermissionsAllowedActionsConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.prototype, "githubOwnedAllowed", {
        get: function () {
            return this.getBooleanAttribute('github_owned_allowed');
        },
        set: function (value) {
            this._githubOwnedAllowed = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.prototype, "githubOwnedAllowedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._githubOwnedAllowed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.prototype, "patternsAllowed", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('patterns_allowed'));
        },
        set: function (value) {
            this._patternsAllowed = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.prototype.resetPatternsAllowed = function () {
        this._patternsAllowed = undefined;
    };
    Object.defineProperty(ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.prototype, "patternsAllowedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._patternsAllowed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.prototype, "verifiedAllowed", {
        get: function () {
            return this.getBooleanAttribute('verified_allowed');
        },
        set: function (value) {
            this._verifiedAllowed = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.prototype.resetVerifiedAllowed = function () {
        this._verifiedAllowed = undefined;
    };
    Object.defineProperty(ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.prototype, "verifiedAllowedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._verifiedAllowed;
        },
        enumerable: false,
        configurable: true
    });
    return ActionsOrganizationPermissionsAllowedActionsConfigOutputReference;
}(cdktf.ComplexObject));
exports.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference = ActionsOrganizationPermissionsAllowedActionsConfigOutputReference;
function actionsOrganizationPermissionsEnabledRepositoriesConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        repository_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct.repositoryIds),
    };
}
function actionsOrganizationPermissionsEnabledRepositoriesConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        repository_ids: {
            value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct.repositoryIds),
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
var ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference = /** @class */ (function (_super) {
    __extends(ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._repositoryIds !== undefined) {
                hasAnyValues = true;
                internalValueResult.repositoryIds = this._repositoryIds;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._repositoryIds = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._repositoryIds = value.repositoryIds;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.prototype, "repositoryIds", {
        get: function () {
            return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('repository_ids')));
        },
        set: function (value) {
            this._repositoryIds = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.prototype, "repositoryIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repositoryIds;
        },
        enumerable: false,
        configurable: true
    });
    return ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference;
}(cdktf.ComplexObject));
exports.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference = ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_permissions github_actions_organization_permissions}
*/
var ActionsOrganizationPermissions = /** @class */ (function (_super) {
    __extends(ActionsOrganizationPermissions, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_permissions github_actions_organization_permissions} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsOrganizationPermissionsConfig
    */
    function ActionsOrganizationPermissions(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_actions_organization_permissions',
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
        _this._allowedActionsConfig = new ActionsOrganizationPermissionsAllowedActionsConfigOutputReference(_this, "allowed_actions_config");
        // enabled_repositories_config - computed: false, optional: true, required: false
        _this._enabledRepositoriesConfig = new ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference(_this, "enabled_repositories_config");
        _this._allowedActions = config.allowedActions;
        _this._enabledRepositories = config.enabledRepositories;
        _this._id = config.id;
        _this._shaPinningRequired = config.shaPinningRequired;
        _this._allowedActionsConfig.internalValue = config.allowedActionsConfig;
        _this._enabledRepositoriesConfig.internalValue = config.enabledRepositoriesConfig;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ActionsOrganizationPermissions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsOrganizationPermissions to import
    * @param importFromId The id of the existing ActionsOrganizationPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_permissions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsOrganizationPermissions to import is found
    */
    ActionsOrganizationPermissions.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_organization_permissions", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ActionsOrganizationPermissions.prototype, "allowedActions", {
        get: function () {
            return this.getStringAttribute('allowed_actions');
        },
        set: function (value) {
            this._allowedActions = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsOrganizationPermissions.prototype.resetAllowedActions = function () {
        this._allowedActions = undefined;
    };
    Object.defineProperty(ActionsOrganizationPermissions.prototype, "allowedActionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedActions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsOrganizationPermissions.prototype, "enabledRepositories", {
        get: function () {
            return this.getStringAttribute('enabled_repositories');
        },
        set: function (value) {
            this._enabledRepositories = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsOrganizationPermissions.prototype, "enabledRepositoriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabledRepositories;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsOrganizationPermissions.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsOrganizationPermissions.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(ActionsOrganizationPermissions.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsOrganizationPermissions.prototype, "shaPinningRequired", {
        get: function () {
            return this.getBooleanAttribute('sha_pinning_required');
        },
        set: function (value) {
            this._shaPinningRequired = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsOrganizationPermissions.prototype.resetShaPinningRequired = function () {
        this._shaPinningRequired = undefined;
    };
    Object.defineProperty(ActionsOrganizationPermissions.prototype, "shaPinningRequiredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._shaPinningRequired;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsOrganizationPermissions.prototype, "allowedActionsConfig", {
        get: function () {
            return this._allowedActionsConfig;
        },
        enumerable: false,
        configurable: true
    });
    ActionsOrganizationPermissions.prototype.putAllowedActionsConfig = function (value) {
        this._allowedActionsConfig.internalValue = value;
    };
    ActionsOrganizationPermissions.prototype.resetAllowedActionsConfig = function () {
        this._allowedActionsConfig.internalValue = undefined;
    };
    Object.defineProperty(ActionsOrganizationPermissions.prototype, "allowedActionsConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedActionsConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsOrganizationPermissions.prototype, "enabledRepositoriesConfig", {
        get: function () {
            return this._enabledRepositoriesConfig;
        },
        enumerable: false,
        configurable: true
    });
    ActionsOrganizationPermissions.prototype.putEnabledRepositoriesConfig = function (value) {
        this._enabledRepositoriesConfig.internalValue = value;
    };
    ActionsOrganizationPermissions.prototype.resetEnabledRepositoriesConfig = function () {
        this._enabledRepositoriesConfig.internalValue = undefined;
    };
    Object.defineProperty(ActionsOrganizationPermissions.prototype, "enabledRepositoriesConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabledRepositoriesConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ActionsOrganizationPermissions.prototype.synthesizeAttributes = function () {
        return {
            allowed_actions: cdktf.stringToTerraform(this._allowedActions),
            enabled_repositories: cdktf.stringToTerraform(this._enabledRepositories),
            id: cdktf.stringToTerraform(this._id),
            sha_pinning_required: cdktf.booleanToTerraform(this._shaPinningRequired),
            allowed_actions_config: actionsOrganizationPermissionsAllowedActionsConfigToTerraform(this._allowedActionsConfig.internalValue),
            enabled_repositories_config: actionsOrganizationPermissionsEnabledRepositoriesConfigToTerraform(this._enabledRepositoriesConfig.internalValue),
        };
    };
    ActionsOrganizationPermissions.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            allowed_actions: {
                value: cdktf.stringToHclTerraform(this._allowedActions),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enabled_repositories: {
                value: cdktf.stringToHclTerraform(this._enabledRepositories),
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
            sha_pinning_required: {
                value: cdktf.booleanToHclTerraform(this._shaPinningRequired),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allowed_actions_config: {
                value: actionsOrganizationPermissionsAllowedActionsConfigToHclTerraform(this._allowedActionsConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ActionsOrganizationPermissionsAllowedActionsConfigList",
            },
            enabled_repositories_config: {
                value: actionsOrganizationPermissionsEnabledRepositoriesConfigToHclTerraform(this._enabledRepositoriesConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ActionsOrganizationPermissionsEnabledRepositoriesConfigList",
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
    ActionsOrganizationPermissions.tfResourceType = "github_actions_organization_permissions";
    return ActionsOrganizationPermissions;
}(cdktf.TerraformResource));
exports.ActionsOrganizationPermissions = ActionsOrganizationPermissions;
