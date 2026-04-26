"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_key_vault
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
exports.SecretSyncAzureKeyVault = exports.SecretSyncAzureKeyVaultSyncOptionsOutputReference = exports.SecretSyncAzureKeyVaultDestinationConfigOutputReference = void 0;
exports.secretSyncAzureKeyVaultDestinationConfigToTerraform = secretSyncAzureKeyVaultDestinationConfigToTerraform;
exports.secretSyncAzureKeyVaultDestinationConfigToHclTerraform = secretSyncAzureKeyVaultDestinationConfigToHclTerraform;
exports.secretSyncAzureKeyVaultSyncOptionsToTerraform = secretSyncAzureKeyVaultSyncOptionsToTerraform;
exports.secretSyncAzureKeyVaultSyncOptionsToHclTerraform = secretSyncAzureKeyVaultSyncOptionsToHclTerraform;
var cdktf = require("cdktf");
function secretSyncAzureKeyVaultDestinationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        vault_base_url: cdktf.stringToTerraform(struct.vaultBaseUrl),
    };
}
function secretSyncAzureKeyVaultDestinationConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        vault_base_url: {
            value: cdktf.stringToHclTerraform(struct.vaultBaseUrl),
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
var SecretSyncAzureKeyVaultDestinationConfigOutputReference = /** @class */ (function (_super) {
    __extends(SecretSyncAzureKeyVaultDestinationConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretSyncAzureKeyVaultDestinationConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretSyncAzureKeyVaultDestinationConfigOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._vaultBaseUrl !== undefined) {
                hasAnyValues = true;
                internalValueResult.vaultBaseUrl = this._vaultBaseUrl;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._vaultBaseUrl = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._vaultBaseUrl = value.vaultBaseUrl;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAzureKeyVaultDestinationConfigOutputReference.prototype, "vaultBaseUrl", {
        get: function () {
            return this.getStringAttribute('vault_base_url');
        },
        set: function (value) {
            this._vaultBaseUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAzureKeyVaultDestinationConfigOutputReference.prototype, "vaultBaseUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vaultBaseUrl;
        },
        enumerable: false,
        configurable: true
    });
    return SecretSyncAzureKeyVaultDestinationConfigOutputReference;
}(cdktf.ComplexObject));
exports.SecretSyncAzureKeyVaultDestinationConfigOutputReference = SecretSyncAzureKeyVaultDestinationConfigOutputReference;
function secretSyncAzureKeyVaultSyncOptionsToTerraform(struct) {
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
function secretSyncAzureKeyVaultSyncOptionsToHclTerraform(struct) {
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
var SecretSyncAzureKeyVaultSyncOptionsOutputReference = /** @class */ (function (_super) {
    __extends(SecretSyncAzureKeyVaultSyncOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretSyncAzureKeyVaultSyncOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretSyncAzureKeyVaultSyncOptionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(SecretSyncAzureKeyVaultSyncOptionsOutputReference.prototype, "disableSecretDeletion", {
        get: function () {
            return this.getBooleanAttribute('disable_secret_deletion');
        },
        set: function (value) {
            this._disableSecretDeletion = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncAzureKeyVaultSyncOptionsOutputReference.prototype.resetDisableSecretDeletion = function () {
        this._disableSecretDeletion = undefined;
    };
    Object.defineProperty(SecretSyncAzureKeyVaultSyncOptionsOutputReference.prototype, "disableSecretDeletionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableSecretDeletion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAzureKeyVaultSyncOptionsOutputReference.prototype, "initialSyncBehavior", {
        get: function () {
            return this.getStringAttribute('initial_sync_behavior');
        },
        set: function (value) {
            this._initialSyncBehavior = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAzureKeyVaultSyncOptionsOutputReference.prototype, "initialSyncBehaviorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._initialSyncBehavior;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAzureKeyVaultSyncOptionsOutputReference.prototype, "keySchema", {
        get: function () {
            return this.getStringAttribute('key_schema');
        },
        set: function (value) {
            this._keySchema = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncAzureKeyVaultSyncOptionsOutputReference.prototype.resetKeySchema = function () {
        this._keySchema = undefined;
    };
    Object.defineProperty(SecretSyncAzureKeyVaultSyncOptionsOutputReference.prototype, "keySchemaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keySchema;
        },
        enumerable: false,
        configurable: true
    });
    return SecretSyncAzureKeyVaultSyncOptionsOutputReference;
}(cdktf.ComplexObject));
exports.SecretSyncAzureKeyVaultSyncOptionsOutputReference = SecretSyncAzureKeyVaultSyncOptionsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_key_vault infisical_secret_sync_azure_key_vault}
*/
var SecretSyncAzureKeyVault = /** @class */ (function (_super) {
    __extends(SecretSyncAzureKeyVault, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_key_vault infisical_secret_sync_azure_key_vault} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretSyncAzureKeyVaultConfig
    */
    function SecretSyncAzureKeyVault(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_secret_sync_azure_key_vault',
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
        _this._destinationConfig = new SecretSyncAzureKeyVaultDestinationConfigOutputReference(_this, "destination_config");
        // sync_options - computed: false, optional: false, required: true
        _this._syncOptions = new SecretSyncAzureKeyVaultSyncOptionsOutputReference(_this, "sync_options");
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
    * Generates CDKTF code for importing a SecretSyncAzureKeyVault resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretSyncAzureKeyVault to import
    * @param importFromId The id of the existing SecretSyncAzureKeyVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_key_vault#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretSyncAzureKeyVault to import is found
    */
    SecretSyncAzureKeyVault.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_sync_azure_key_vault", importId: importFromId, provider: provider });
    };
    Object.defineProperty(SecretSyncAzureKeyVault.prototype, "autoSyncEnabled", {
        get: function () {
            return this.getBooleanAttribute('auto_sync_enabled');
        },
        set: function (value) {
            this._autoSyncEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncAzureKeyVault.prototype.resetAutoSyncEnabled = function () {
        this._autoSyncEnabled = undefined;
    };
    Object.defineProperty(SecretSyncAzureKeyVault.prototype, "autoSyncEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoSyncEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAzureKeyVault.prototype, "connectionId", {
        get: function () {
            return this.getStringAttribute('connection_id');
        },
        set: function (value) {
            this._connectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAzureKeyVault.prototype, "connectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAzureKeyVault.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncAzureKeyVault.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(SecretSyncAzureKeyVault.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAzureKeyVault.prototype, "destinationConfig", {
        get: function () {
            return this._destinationConfig;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncAzureKeyVault.prototype.putDestinationConfig = function (value) {
        this._destinationConfig.internalValue = value;
    };
    Object.defineProperty(SecretSyncAzureKeyVault.prototype, "destinationConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAzureKeyVault.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAzureKeyVault.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAzureKeyVault.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAzureKeyVault.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAzureKeyVault.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAzureKeyVault.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAzureKeyVault.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAzureKeyVault.prototype, "secretPath", {
        get: function () {
            return this.getStringAttribute('secret_path');
        },
        set: function (value) {
            this._secretPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAzureKeyVault.prototype, "secretPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncAzureKeyVault.prototype, "syncOptions", {
        get: function () {
            return this._syncOptions;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncAzureKeyVault.prototype.putSyncOptions = function (value) {
        this._syncOptions.internalValue = value;
    };
    Object.defineProperty(SecretSyncAzureKeyVault.prototype, "syncOptionsInput", {
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
    SecretSyncAzureKeyVault.prototype.synthesizeAttributes = function () {
        return {
            auto_sync_enabled: cdktf.booleanToTerraform(this._autoSyncEnabled),
            connection_id: cdktf.stringToTerraform(this._connectionId),
            description: cdktf.stringToTerraform(this._description),
            destination_config: secretSyncAzureKeyVaultDestinationConfigToTerraform(this._destinationConfig.internalValue),
            environment: cdktf.stringToTerraform(this._environment),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
            secret_path: cdktf.stringToTerraform(this._secretPath),
            sync_options: secretSyncAzureKeyVaultSyncOptionsToTerraform(this._syncOptions.internalValue),
        };
    };
    SecretSyncAzureKeyVault.prototype.synthesizeHclAttributes = function () {
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
                value: secretSyncAzureKeyVaultDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretSyncAzureKeyVaultDestinationConfig",
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
                value: secretSyncAzureKeyVaultSyncOptionsToHclTerraform(this._syncOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretSyncAzureKeyVaultSyncOptions",
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
    SecretSyncAzureKeyVault.tfResourceType = "infisical_secret_sync_azure_key_vault";
    return SecretSyncAzureKeyVault;
}(cdktf.TerraformResource));
exports.SecretSyncAzureKeyVault = SecretSyncAzureKeyVault;
