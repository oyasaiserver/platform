"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_databricks
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
exports.SecretSyncDatabricks = exports.SecretSyncDatabricksSyncOptionsOutputReference = exports.SecretSyncDatabricksDestinationConfigOutputReference = void 0;
exports.secretSyncDatabricksDestinationConfigToTerraform = secretSyncDatabricksDestinationConfigToTerraform;
exports.secretSyncDatabricksDestinationConfigToHclTerraform = secretSyncDatabricksDestinationConfigToHclTerraform;
exports.secretSyncDatabricksSyncOptionsToTerraform = secretSyncDatabricksSyncOptionsToTerraform;
exports.secretSyncDatabricksSyncOptionsToHclTerraform = secretSyncDatabricksSyncOptionsToHclTerraform;
var cdktf = require("cdktf");
function secretSyncDatabricksDestinationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        scope: cdktf.stringToTerraform(struct.scope),
    };
}
function secretSyncDatabricksDestinationConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        scope: {
            value: cdktf.stringToHclTerraform(struct.scope),
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
var SecretSyncDatabricksDestinationConfigOutputReference = /** @class */ (function (_super) {
    __extends(SecretSyncDatabricksDestinationConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretSyncDatabricksDestinationConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretSyncDatabricksDestinationConfigOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._scope !== undefined) {
                hasAnyValues = true;
                internalValueResult.scope = this._scope;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._scope = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._scope = value.scope;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncDatabricksDestinationConfigOutputReference.prototype, "scope", {
        get: function () {
            return this.getStringAttribute('scope');
        },
        set: function (value) {
            this._scope = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncDatabricksDestinationConfigOutputReference.prototype, "scopeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scope;
        },
        enumerable: false,
        configurable: true
    });
    return SecretSyncDatabricksDestinationConfigOutputReference;
}(cdktf.ComplexObject));
exports.SecretSyncDatabricksDestinationConfigOutputReference = SecretSyncDatabricksDestinationConfigOutputReference;
function secretSyncDatabricksSyncOptionsToTerraform(struct) {
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
function secretSyncDatabricksSyncOptionsToHclTerraform(struct) {
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
var SecretSyncDatabricksSyncOptionsOutputReference = /** @class */ (function (_super) {
    __extends(SecretSyncDatabricksSyncOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretSyncDatabricksSyncOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretSyncDatabricksSyncOptionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(SecretSyncDatabricksSyncOptionsOutputReference.prototype, "disableSecretDeletion", {
        get: function () {
            return this.getBooleanAttribute('disable_secret_deletion');
        },
        set: function (value) {
            this._disableSecretDeletion = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncDatabricksSyncOptionsOutputReference.prototype.resetDisableSecretDeletion = function () {
        this._disableSecretDeletion = undefined;
    };
    Object.defineProperty(SecretSyncDatabricksSyncOptionsOutputReference.prototype, "disableSecretDeletionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableSecretDeletion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncDatabricksSyncOptionsOutputReference.prototype, "initialSyncBehavior", {
        get: function () {
            return this.getStringAttribute('initial_sync_behavior');
        },
        set: function (value) {
            this._initialSyncBehavior = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncDatabricksSyncOptionsOutputReference.prototype, "initialSyncBehaviorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._initialSyncBehavior;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncDatabricksSyncOptionsOutputReference.prototype, "keySchema", {
        get: function () {
            return this.getStringAttribute('key_schema');
        },
        set: function (value) {
            this._keySchema = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncDatabricksSyncOptionsOutputReference.prototype.resetKeySchema = function () {
        this._keySchema = undefined;
    };
    Object.defineProperty(SecretSyncDatabricksSyncOptionsOutputReference.prototype, "keySchemaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keySchema;
        },
        enumerable: false,
        configurable: true
    });
    return SecretSyncDatabricksSyncOptionsOutputReference;
}(cdktf.ComplexObject));
exports.SecretSyncDatabricksSyncOptionsOutputReference = SecretSyncDatabricksSyncOptionsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_databricks infisical_secret_sync_databricks}
*/
var SecretSyncDatabricks = /** @class */ (function (_super) {
    __extends(SecretSyncDatabricks, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_databricks infisical_secret_sync_databricks} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretSyncDatabricksConfig
    */
    function SecretSyncDatabricks(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_secret_sync_databricks',
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
        _this._destinationConfig = new SecretSyncDatabricksDestinationConfigOutputReference(_this, "destination_config");
        // sync_options - computed: false, optional: false, required: true
        _this._syncOptions = new SecretSyncDatabricksSyncOptionsOutputReference(_this, "sync_options");
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
    * Generates CDKTF code for importing a SecretSyncDatabricks resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretSyncDatabricks to import
    * @param importFromId The id of the existing SecretSyncDatabricks that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_databricks#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretSyncDatabricks to import is found
    */
    SecretSyncDatabricks.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_sync_databricks", importId: importFromId, provider: provider });
    };
    Object.defineProperty(SecretSyncDatabricks.prototype, "autoSyncEnabled", {
        get: function () {
            return this.getBooleanAttribute('auto_sync_enabled');
        },
        set: function (value) {
            this._autoSyncEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncDatabricks.prototype.resetAutoSyncEnabled = function () {
        this._autoSyncEnabled = undefined;
    };
    Object.defineProperty(SecretSyncDatabricks.prototype, "autoSyncEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoSyncEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncDatabricks.prototype, "connectionId", {
        get: function () {
            return this.getStringAttribute('connection_id');
        },
        set: function (value) {
            this._connectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncDatabricks.prototype, "connectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncDatabricks.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncDatabricks.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(SecretSyncDatabricks.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncDatabricks.prototype, "destinationConfig", {
        get: function () {
            return this._destinationConfig;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncDatabricks.prototype.putDestinationConfig = function (value) {
        this._destinationConfig.internalValue = value;
    };
    Object.defineProperty(SecretSyncDatabricks.prototype, "destinationConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncDatabricks.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncDatabricks.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncDatabricks.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncDatabricks.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncDatabricks.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncDatabricks.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncDatabricks.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncDatabricks.prototype, "secretPath", {
        get: function () {
            return this.getStringAttribute('secret_path');
        },
        set: function (value) {
            this._secretPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncDatabricks.prototype, "secretPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncDatabricks.prototype, "syncOptions", {
        get: function () {
            return this._syncOptions;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncDatabricks.prototype.putSyncOptions = function (value) {
        this._syncOptions.internalValue = value;
    };
    Object.defineProperty(SecretSyncDatabricks.prototype, "syncOptionsInput", {
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
    SecretSyncDatabricks.prototype.synthesizeAttributes = function () {
        return {
            auto_sync_enabled: cdktf.booleanToTerraform(this._autoSyncEnabled),
            connection_id: cdktf.stringToTerraform(this._connectionId),
            description: cdktf.stringToTerraform(this._description),
            destination_config: secretSyncDatabricksDestinationConfigToTerraform(this._destinationConfig.internalValue),
            environment: cdktf.stringToTerraform(this._environment),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
            secret_path: cdktf.stringToTerraform(this._secretPath),
            sync_options: secretSyncDatabricksSyncOptionsToTerraform(this._syncOptions.internalValue),
        };
    };
    SecretSyncDatabricks.prototype.synthesizeHclAttributes = function () {
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
                value: secretSyncDatabricksDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretSyncDatabricksDestinationConfig",
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
                value: secretSyncDatabricksSyncOptionsToHclTerraform(this._syncOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretSyncDatabricksSyncOptions",
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
    SecretSyncDatabricks.tfResourceType = "infisical_secret_sync_databricks";
    return SecretSyncDatabricks;
}(cdktf.TerraformResource));
exports.SecretSyncDatabricks = SecretSyncDatabricks;
