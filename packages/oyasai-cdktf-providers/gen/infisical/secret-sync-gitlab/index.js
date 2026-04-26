"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab
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
exports.SecretSyncGitlab = exports.SecretSyncGitlabSyncOptionsOutputReference = exports.SecretSyncGitlabDestinationConfigOutputReference = void 0;
exports.secretSyncGitlabDestinationConfigToTerraform = secretSyncGitlabDestinationConfigToTerraform;
exports.secretSyncGitlabDestinationConfigToHclTerraform = secretSyncGitlabDestinationConfigToHclTerraform;
exports.secretSyncGitlabSyncOptionsToTerraform = secretSyncGitlabSyncOptionsToTerraform;
exports.secretSyncGitlabSyncOptionsToHclTerraform = secretSyncGitlabSyncOptionsToHclTerraform;
var cdktf = require("cdktf");
function secretSyncGitlabDestinationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        group_id: cdktf.stringToTerraform(struct.groupId),
        group_name: cdktf.stringToTerraform(struct.groupName),
        project_id: cdktf.stringToTerraform(struct.projectId),
        project_name: cdktf.stringToTerraform(struct.projectName),
        scope: cdktf.stringToTerraform(struct.scope),
        should_hide_secrets: cdktf.booleanToTerraform(struct.shouldHideSecrets),
        should_mask_secrets: cdktf.booleanToTerraform(struct.shouldMaskSecrets),
        should_protect_secrets: cdktf.booleanToTerraform(struct.shouldProtectSecrets),
        target_environment: cdktf.stringToTerraform(struct.targetEnvironment),
    };
}
function secretSyncGitlabDestinationConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        group_id: {
            value: cdktf.stringToHclTerraform(struct.groupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        group_name: {
            value: cdktf.stringToHclTerraform(struct.groupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        project_id: {
            value: cdktf.stringToHclTerraform(struct.projectId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        project_name: {
            value: cdktf.stringToHclTerraform(struct.projectName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scope: {
            value: cdktf.stringToHclTerraform(struct.scope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        should_hide_secrets: {
            value: cdktf.booleanToHclTerraform(struct.shouldHideSecrets),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        should_mask_secrets: {
            value: cdktf.booleanToHclTerraform(struct.shouldMaskSecrets),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        should_protect_secrets: {
            value: cdktf.booleanToHclTerraform(struct.shouldProtectSecrets),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        target_environment: {
            value: cdktf.stringToHclTerraform(struct.targetEnvironment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var SecretSyncGitlabDestinationConfigOutputReference = /** @class */ (function (_super) {
    __extends(SecretSyncGitlabDestinationConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretSyncGitlabDestinationConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretSyncGitlabDestinationConfigOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._groupId !== undefined) {
                hasAnyValues = true;
                internalValueResult.groupId = this._groupId;
            }
            if (this._groupName !== undefined) {
                hasAnyValues = true;
                internalValueResult.groupName = this._groupName;
            }
            if (this._projectId !== undefined) {
                hasAnyValues = true;
                internalValueResult.projectId = this._projectId;
            }
            if (this._projectName !== undefined) {
                hasAnyValues = true;
                internalValueResult.projectName = this._projectName;
            }
            if (this._scope !== undefined) {
                hasAnyValues = true;
                internalValueResult.scope = this._scope;
            }
            if (this._shouldHideSecrets !== undefined) {
                hasAnyValues = true;
                internalValueResult.shouldHideSecrets = this._shouldHideSecrets;
            }
            if (this._shouldMaskSecrets !== undefined) {
                hasAnyValues = true;
                internalValueResult.shouldMaskSecrets = this._shouldMaskSecrets;
            }
            if (this._shouldProtectSecrets !== undefined) {
                hasAnyValues = true;
                internalValueResult.shouldProtectSecrets = this._shouldProtectSecrets;
            }
            if (this._targetEnvironment !== undefined) {
                hasAnyValues = true;
                internalValueResult.targetEnvironment = this._targetEnvironment;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._groupId = undefined;
                this._groupName = undefined;
                this._projectId = undefined;
                this._projectName = undefined;
                this._scope = undefined;
                this._shouldHideSecrets = undefined;
                this._shouldMaskSecrets = undefined;
                this._shouldProtectSecrets = undefined;
                this._targetEnvironment = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._groupId = value.groupId;
                this._groupName = value.groupName;
                this._projectId = value.projectId;
                this._projectName = value.projectName;
                this._scope = value.scope;
                this._shouldHideSecrets = value.shouldHideSecrets;
                this._shouldMaskSecrets = value.shouldMaskSecrets;
                this._shouldProtectSecrets = value.shouldProtectSecrets;
                this._targetEnvironment = value.targetEnvironment;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlabDestinationConfigOutputReference.prototype, "groupId", {
        get: function () {
            return this.getStringAttribute('group_id');
        },
        set: function (value) {
            this._groupId = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncGitlabDestinationConfigOutputReference.prototype.resetGroupId = function () {
        this._groupId = undefined;
    };
    Object.defineProperty(SecretSyncGitlabDestinationConfigOutputReference.prototype, "groupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._groupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlabDestinationConfigOutputReference.prototype, "groupName", {
        get: function () {
            return this.getStringAttribute('group_name');
        },
        set: function (value) {
            this._groupName = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncGitlabDestinationConfigOutputReference.prototype.resetGroupName = function () {
        this._groupName = undefined;
    };
    Object.defineProperty(SecretSyncGitlabDestinationConfigOutputReference.prototype, "groupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._groupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlabDestinationConfigOutputReference.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncGitlabDestinationConfigOutputReference.prototype.resetProjectId = function () {
        this._projectId = undefined;
    };
    Object.defineProperty(SecretSyncGitlabDestinationConfigOutputReference.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlabDestinationConfigOutputReference.prototype, "projectName", {
        get: function () {
            return this.getStringAttribute('project_name');
        },
        set: function (value) {
            this._projectName = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncGitlabDestinationConfigOutputReference.prototype.resetProjectName = function () {
        this._projectName = undefined;
    };
    Object.defineProperty(SecretSyncGitlabDestinationConfigOutputReference.prototype, "projectNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlabDestinationConfigOutputReference.prototype, "scope", {
        get: function () {
            return this.getStringAttribute('scope');
        },
        set: function (value) {
            this._scope = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlabDestinationConfigOutputReference.prototype, "scopeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scope;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlabDestinationConfigOutputReference.prototype, "shouldHideSecrets", {
        get: function () {
            return this.getBooleanAttribute('should_hide_secrets');
        },
        set: function (value) {
            this._shouldHideSecrets = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncGitlabDestinationConfigOutputReference.prototype.resetShouldHideSecrets = function () {
        this._shouldHideSecrets = undefined;
    };
    Object.defineProperty(SecretSyncGitlabDestinationConfigOutputReference.prototype, "shouldHideSecretsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._shouldHideSecrets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlabDestinationConfigOutputReference.prototype, "shouldMaskSecrets", {
        get: function () {
            return this.getBooleanAttribute('should_mask_secrets');
        },
        set: function (value) {
            this._shouldMaskSecrets = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncGitlabDestinationConfigOutputReference.prototype.resetShouldMaskSecrets = function () {
        this._shouldMaskSecrets = undefined;
    };
    Object.defineProperty(SecretSyncGitlabDestinationConfigOutputReference.prototype, "shouldMaskSecretsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._shouldMaskSecrets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlabDestinationConfigOutputReference.prototype, "shouldProtectSecrets", {
        get: function () {
            return this.getBooleanAttribute('should_protect_secrets');
        },
        set: function (value) {
            this._shouldProtectSecrets = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncGitlabDestinationConfigOutputReference.prototype.resetShouldProtectSecrets = function () {
        this._shouldProtectSecrets = undefined;
    };
    Object.defineProperty(SecretSyncGitlabDestinationConfigOutputReference.prototype, "shouldProtectSecretsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._shouldProtectSecrets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlabDestinationConfigOutputReference.prototype, "targetEnvironment", {
        get: function () {
            return this.getStringAttribute('target_environment');
        },
        set: function (value) {
            this._targetEnvironment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlabDestinationConfigOutputReference.prototype, "targetEnvironmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetEnvironment;
        },
        enumerable: false,
        configurable: true
    });
    return SecretSyncGitlabDestinationConfigOutputReference;
}(cdktf.ComplexObject));
exports.SecretSyncGitlabDestinationConfigOutputReference = SecretSyncGitlabDestinationConfigOutputReference;
function secretSyncGitlabSyncOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disable_secret_deletion: cdktf.booleanToTerraform(struct.disableSecretDeletion),
        initial_sync_behavior: cdktf.stringToTerraform(struct.initialSyncBehavior),
        key_schema: cdktf.stringToTerraform(struct.keySchema),
    };
}
function secretSyncGitlabSyncOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        disable_secret_deletion: {
            value: cdktf.booleanToHclTerraform(struct.disableSecretDeletion),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        initial_sync_behavior: {
            value: cdktf.stringToHclTerraform(struct.initialSyncBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_schema: {
            value: cdktf.stringToHclTerraform(struct.keySchema),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var SecretSyncGitlabSyncOptionsOutputReference = /** @class */ (function (_super) {
    __extends(SecretSyncGitlabSyncOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretSyncGitlabSyncOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretSyncGitlabSyncOptionsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._disableSecretDeletion !== undefined) {
                hasAnyValues = true;
                internalValueResult.disableSecretDeletion = this._disableSecretDeletion;
            }
            if (this._initialSyncBehavior !== undefined) {
                hasAnyValues = true;
                internalValueResult.initialSyncBehavior = this._initialSyncBehavior;
            }
            if (this._keySchema !== undefined) {
                hasAnyValues = true;
                internalValueResult.keySchema = this._keySchema;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._disableSecretDeletion = undefined;
                this._initialSyncBehavior = undefined;
                this._keySchema = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._disableSecretDeletion = value.disableSecretDeletion;
                this._initialSyncBehavior = value.initialSyncBehavior;
                this._keySchema = value.keySchema;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlabSyncOptionsOutputReference.prototype, "disableSecretDeletion", {
        get: function () {
            return this.getBooleanAttribute('disable_secret_deletion');
        },
        set: function (value) {
            this._disableSecretDeletion = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncGitlabSyncOptionsOutputReference.prototype.resetDisableSecretDeletion = function () {
        this._disableSecretDeletion = undefined;
    };
    Object.defineProperty(SecretSyncGitlabSyncOptionsOutputReference.prototype, "disableSecretDeletionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableSecretDeletion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlabSyncOptionsOutputReference.prototype, "initialSyncBehavior", {
        get: function () {
            return this.getStringAttribute('initial_sync_behavior');
        },
        set: function (value) {
            this._initialSyncBehavior = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlabSyncOptionsOutputReference.prototype, "initialSyncBehaviorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._initialSyncBehavior;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlabSyncOptionsOutputReference.prototype, "keySchema", {
        get: function () {
            return this.getStringAttribute('key_schema');
        },
        set: function (value) {
            this._keySchema = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncGitlabSyncOptionsOutputReference.prototype.resetKeySchema = function () {
        this._keySchema = undefined;
    };
    Object.defineProperty(SecretSyncGitlabSyncOptionsOutputReference.prototype, "keySchemaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keySchema;
        },
        enumerable: false,
        configurable: true
    });
    return SecretSyncGitlabSyncOptionsOutputReference;
}(cdktf.ComplexObject));
exports.SecretSyncGitlabSyncOptionsOutputReference = SecretSyncGitlabSyncOptionsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab infisical_secret_sync_gitlab}
*/
var SecretSyncGitlab = /** @class */ (function (_super) {
    __extends(SecretSyncGitlab, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab infisical_secret_sync_gitlab} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretSyncGitlabConfig
    */
    function SecretSyncGitlab(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_secret_sync_gitlab',
            terraformGeneratorMetadata: {
                providerName: 'infisical',
                providerVersion: '0.16.18'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        // destination_config - computed: false, optional: false, required: true
        _this._destinationConfig = new SecretSyncGitlabDestinationConfigOutputReference(_this, "destination_config");
        // sync_options - computed: false, optional: false, required: true
        _this._syncOptions = new SecretSyncGitlabSyncOptionsOutputReference(_this, "sync_options");
        _this._autoSyncEnabled = config.autoSyncEnabled;
        _this._connectionId = config.connectionId;
        _this._description = config.description;
        _this._destinationConfig.internalValue = config.destinationConfig;
        _this._environment = config.environment;
        _this._name = config.name;
        _this._projectId = config.projectId;
        _this._secretPath = config.secretPath;
        _this._syncOptions.internalValue = config.syncOptions;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SecretSyncGitlab resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretSyncGitlab to import
    * @param importFromId The id of the existing SecretSyncGitlab that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretSyncGitlab to import is found
    */
    SecretSyncGitlab.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_sync_gitlab", importId: importFromId, provider: provider });
    };
    Object.defineProperty(SecretSyncGitlab.prototype, "autoSyncEnabled", {
        get: function () {
            return this.getBooleanAttribute('auto_sync_enabled');
        },
        set: function (value) {
            this._autoSyncEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncGitlab.prototype.resetAutoSyncEnabled = function () {
        this._autoSyncEnabled = undefined;
    };
    Object.defineProperty(SecretSyncGitlab.prototype, "autoSyncEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoSyncEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlab.prototype, "connectionId", {
        get: function () {
            return this.getStringAttribute('connection_id');
        },
        set: function (value) {
            this._connectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlab.prototype, "connectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlab.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncGitlab.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(SecretSyncGitlab.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlab.prototype, "destinationConfig", {
        get: function () {
            return this._destinationConfig;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncGitlab.prototype.putDestinationConfig = function (value) {
        this._destinationConfig.internalValue = value;
    };
    Object.defineProperty(SecretSyncGitlab.prototype, "destinationConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlab.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlab.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlab.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlab.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlab.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlab.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlab.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlab.prototype, "secretPath", {
        get: function () {
            return this.getStringAttribute('secret_path');
        },
        set: function (value) {
            this._secretPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlab.prototype, "secretPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncGitlab.prototype, "syncOptions", {
        get: function () {
            return this._syncOptions;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncGitlab.prototype.putSyncOptions = function (value) {
        this._syncOptions.internalValue = value;
    };
    Object.defineProperty(SecretSyncGitlab.prototype, "syncOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._syncOptions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SecretSyncGitlab.prototype.synthesizeAttributes = function () {
        return {
            auto_sync_enabled: cdktf.booleanToTerraform(this._autoSyncEnabled),
            connection_id: cdktf.stringToTerraform(this._connectionId),
            description: cdktf.stringToTerraform(this._description),
            destination_config: secretSyncGitlabDestinationConfigToTerraform(this._destinationConfig.internalValue),
            environment: cdktf.stringToTerraform(this._environment),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
            secret_path: cdktf.stringToTerraform(this._secretPath),
            sync_options: secretSyncGitlabSyncOptionsToTerraform(this._syncOptions.internalValue),
        };
    };
    SecretSyncGitlab.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            auto_sync_enabled: {
                value: cdktf.booleanToHclTerraform(this._autoSyncEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            connection_id: {
                value: cdktf.stringToHclTerraform(this._connectionId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_config: {
                value: secretSyncGitlabDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretSyncGitlabDestinationConfig",
            },
            environment: {
                value: cdktf.stringToHclTerraform(this._environment),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            project_id: {
                value: cdktf.stringToHclTerraform(this._projectId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secret_path: {
                value: cdktf.stringToHclTerraform(this._secretPath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sync_options: {
                value: secretSyncGitlabSyncOptionsToHclTerraform(this._syncOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretSyncGitlabSyncOptions",
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
    SecretSyncGitlab.tfResourceType = "infisical_secret_sync_gitlab";
    return SecretSyncGitlab;
}(cdktf.TerraformResource));
exports.SecretSyncGitlab = SecretSyncGitlab;
