"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_permissions
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
exports.ActionsRepositoryPermissions = exports.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference = void 0;
exports.actionsRepositoryPermissionsAllowedActionsConfigToTerraform = actionsRepositoryPermissionsAllowedActionsConfigToTerraform;
exports.actionsRepositoryPermissionsAllowedActionsConfigToHclTerraform = actionsRepositoryPermissionsAllowedActionsConfigToHclTerraform;
var cdktf = require("cdktf");
function actionsRepositoryPermissionsAllowedActionsConfigToTerraform(struct) {
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
function actionsRepositoryPermissionsAllowedActionsConfigToHclTerraform(struct) {
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
var ActionsRepositoryPermissionsAllowedActionsConfigOutputReference = /** @class */ (function (_super) {
    __extends(ActionsRepositoryPermissionsAllowedActionsConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ActionsRepositoryPermissionsAllowedActionsConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.prototype, "githubOwnedAllowed", {
        get: function () {
            return this.getBooleanAttribute('github_owned_allowed');
        },
        set: function (value) {
            this._githubOwnedAllowed = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.prototype, "githubOwnedAllowedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._githubOwnedAllowed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.prototype, "patternsAllowed", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('patterns_allowed'));
        },
        set: function (value) {
            this._patternsAllowed = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.prototype.resetPatternsAllowed = function () {
        this._patternsAllowed = undefined;
    };
    Object.defineProperty(ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.prototype, "patternsAllowedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._patternsAllowed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.prototype, "verifiedAllowed", {
        get: function () {
            return this.getBooleanAttribute('verified_allowed');
        },
        set: function (value) {
            this._verifiedAllowed = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.prototype.resetVerifiedAllowed = function () {
        this._verifiedAllowed = undefined;
    };
    Object.defineProperty(ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.prototype, "verifiedAllowedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._verifiedAllowed;
        },
        enumerable: false,
        configurable: true
    });
    return ActionsRepositoryPermissionsAllowedActionsConfigOutputReference;
}(cdktf.ComplexObject));
exports.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference = ActionsRepositoryPermissionsAllowedActionsConfigOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_permissions github_actions_repository_permissions}
*/
var ActionsRepositoryPermissions = /** @class */ (function (_super) {
    __extends(ActionsRepositoryPermissions, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_permissions github_actions_repository_permissions} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsRepositoryPermissionsConfig
    */
    function ActionsRepositoryPermissions(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_actions_repository_permissions',
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
        _this._allowedActionsConfig = new ActionsRepositoryPermissionsAllowedActionsConfigOutputReference(_this, "allowed_actions_config");
        _this._allowedActions = config.allowedActions;
        _this._enabled = config.enabled;
        _this._id = config.id;
        _this._repository = config.repository;
        _this._shaPinningRequired = config.shaPinningRequired;
        _this._allowedActionsConfig.internalValue = config.allowedActionsConfig;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ActionsRepositoryPermissions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsRepositoryPermissions to import
    * @param importFromId The id of the existing ActionsRepositoryPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_permissions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsRepositoryPermissions to import is found
    */
    ActionsRepositoryPermissions.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_repository_permissions", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ActionsRepositoryPermissions.prototype, "allowedActions", {
        get: function () {
            return this.getStringAttribute('allowed_actions');
        },
        set: function (value) {
            this._allowedActions = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsRepositoryPermissions.prototype.resetAllowedActions = function () {
        this._allowedActions = undefined;
    };
    Object.defineProperty(ActionsRepositoryPermissions.prototype, "allowedActionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedActions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRepositoryPermissions.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsRepositoryPermissions.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ActionsRepositoryPermissions.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRepositoryPermissions.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsRepositoryPermissions.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(ActionsRepositoryPermissions.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRepositoryPermissions.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRepositoryPermissions.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRepositoryPermissions.prototype, "shaPinningRequired", {
        get: function () {
            return this.getBooleanAttribute('sha_pinning_required');
        },
        set: function (value) {
            this._shaPinningRequired = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsRepositoryPermissions.prototype.resetShaPinningRequired = function () {
        this._shaPinningRequired = undefined;
    };
    Object.defineProperty(ActionsRepositoryPermissions.prototype, "shaPinningRequiredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._shaPinningRequired;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRepositoryPermissions.prototype, "allowedActionsConfig", {
        get: function () {
            return this._allowedActionsConfig;
        },
        enumerable: false,
        configurable: true
    });
    ActionsRepositoryPermissions.prototype.putAllowedActionsConfig = function (value) {
        this._allowedActionsConfig.internalValue = value;
    };
    ActionsRepositoryPermissions.prototype.resetAllowedActionsConfig = function () {
        this._allowedActionsConfig.internalValue = undefined;
    };
    Object.defineProperty(ActionsRepositoryPermissions.prototype, "allowedActionsConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedActionsConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ActionsRepositoryPermissions.prototype.synthesizeAttributes = function () {
        return {
            allowed_actions: cdktf.stringToTerraform(this._allowedActions),
            enabled: cdktf.booleanToTerraform(this._enabled),
            id: cdktf.stringToTerraform(this._id),
            repository: cdktf.stringToTerraform(this._repository),
            sha_pinning_required: cdktf.booleanToTerraform(this._shaPinningRequired),
            allowed_actions_config: actionsRepositoryPermissionsAllowedActionsConfigToTerraform(this._allowedActionsConfig.internalValue),
        };
    };
    ActionsRepositoryPermissions.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            allowed_actions: {
                value: cdktf.stringToHclTerraform(this._allowedActions),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
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
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
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
                value: actionsRepositoryPermissionsAllowedActionsConfigToHclTerraform(this._allowedActionsConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ActionsRepositoryPermissionsAllowedActionsConfigList",
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
    ActionsRepositoryPermissions.tfResourceType = "github_actions_repository_permissions";
    return ActionsRepositoryPermissions;
}(cdktf.TerraformResource));
exports.ActionsRepositoryPermissions = ActionsRepositoryPermissions;
