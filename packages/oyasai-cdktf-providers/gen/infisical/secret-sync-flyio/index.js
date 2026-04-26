"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_flyio
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
exports.SecretSyncFlyio = exports.SecretSyncFlyioSyncOptionsOutputReference = exports.SecretSyncFlyioDestinationConfigOutputReference = void 0;
exports.secretSyncFlyioDestinationConfigToTerraform = secretSyncFlyioDestinationConfigToTerraform;
exports.secretSyncFlyioDestinationConfigToHclTerraform = secretSyncFlyioDestinationConfigToHclTerraform;
exports.secretSyncFlyioSyncOptionsToTerraform = secretSyncFlyioSyncOptionsToTerraform;
exports.secretSyncFlyioSyncOptionsToHclTerraform = secretSyncFlyioSyncOptionsToHclTerraform;
var cdktf = require("cdktf");
function secretSyncFlyioDestinationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        app_id: cdktf.stringToTerraform(struct.appId),
    };
}
function secretSyncFlyioDestinationConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        app_id: {
            value: cdktf.stringToHclTerraform(struct.appId),
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
var SecretSyncFlyioDestinationConfigOutputReference = /** @class */ (function (_super) {
    __extends(SecretSyncFlyioDestinationConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretSyncFlyioDestinationConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretSyncFlyioDestinationConfigOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._appId !== undefined) {
                hasAnyValues = true;
                internalValueResult.appId = this._appId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._appId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._appId = value.appId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncFlyioDestinationConfigOutputReference.prototype, "appId", {
        get: function () {
            return this.getStringAttribute('app_id');
        },
        set: function (value) {
            this._appId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncFlyioDestinationConfigOutputReference.prototype, "appIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appId;
        },
        enumerable: false,
        configurable: true
    });
    return SecretSyncFlyioDestinationConfigOutputReference;
}(cdktf.ComplexObject));
exports.SecretSyncFlyioDestinationConfigOutputReference = SecretSyncFlyioDestinationConfigOutputReference;
function secretSyncFlyioSyncOptionsToTerraform(struct) {
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
function secretSyncFlyioSyncOptionsToHclTerraform(struct) {
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
var SecretSyncFlyioSyncOptionsOutputReference = /** @class */ (function (_super) {
    __extends(SecretSyncFlyioSyncOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretSyncFlyioSyncOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretSyncFlyioSyncOptionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(SecretSyncFlyioSyncOptionsOutputReference.prototype, "disableSecretDeletion", {
        get: function () {
            return this.getBooleanAttribute('disable_secret_deletion');
        },
        set: function (value) {
            this._disableSecretDeletion = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncFlyioSyncOptionsOutputReference.prototype.resetDisableSecretDeletion = function () {
        this._disableSecretDeletion = undefined;
    };
    Object.defineProperty(SecretSyncFlyioSyncOptionsOutputReference.prototype, "disableSecretDeletionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableSecretDeletion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncFlyioSyncOptionsOutputReference.prototype, "initialSyncBehavior", {
        get: function () {
            return this.getStringAttribute('initial_sync_behavior');
        },
        set: function (value) {
            this._initialSyncBehavior = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncFlyioSyncOptionsOutputReference.prototype, "initialSyncBehaviorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._initialSyncBehavior;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncFlyioSyncOptionsOutputReference.prototype, "keySchema", {
        get: function () {
            return this.getStringAttribute('key_schema');
        },
        set: function (value) {
            this._keySchema = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncFlyioSyncOptionsOutputReference.prototype.resetKeySchema = function () {
        this._keySchema = undefined;
    };
    Object.defineProperty(SecretSyncFlyioSyncOptionsOutputReference.prototype, "keySchemaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keySchema;
        },
        enumerable: false,
        configurable: true
    });
    return SecretSyncFlyioSyncOptionsOutputReference;
}(cdktf.ComplexObject));
exports.SecretSyncFlyioSyncOptionsOutputReference = SecretSyncFlyioSyncOptionsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_flyio infisical_secret_sync_flyio}
*/
var SecretSyncFlyio = /** @class */ (function (_super) {
    __extends(SecretSyncFlyio, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_flyio infisical_secret_sync_flyio} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretSyncFlyioConfig
    */
    function SecretSyncFlyio(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_secret_sync_flyio',
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
        _this._destinationConfig = new SecretSyncFlyioDestinationConfigOutputReference(_this, "destination_config");
        // sync_options - computed: false, optional: false, required: true
        _this._syncOptions = new SecretSyncFlyioSyncOptionsOutputReference(_this, "sync_options");
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
    * Generates CDKTF code for importing a SecretSyncFlyio resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretSyncFlyio to import
    * @param importFromId The id of the existing SecretSyncFlyio that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_flyio#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretSyncFlyio to import is found
    */
    SecretSyncFlyio.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_sync_flyio", importId: importFromId, provider: provider });
    };
    Object.defineProperty(SecretSyncFlyio.prototype, "autoSyncEnabled", {
        get: function () {
            return this.getBooleanAttribute('auto_sync_enabled');
        },
        set: function (value) {
            this._autoSyncEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncFlyio.prototype.resetAutoSyncEnabled = function () {
        this._autoSyncEnabled = undefined;
    };
    Object.defineProperty(SecretSyncFlyio.prototype, "autoSyncEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoSyncEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncFlyio.prototype, "connectionId", {
        get: function () {
            return this.getStringAttribute('connection_id');
        },
        set: function (value) {
            this._connectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncFlyio.prototype, "connectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncFlyio.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncFlyio.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(SecretSyncFlyio.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncFlyio.prototype, "destinationConfig", {
        get: function () {
            return this._destinationConfig;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncFlyio.prototype.putDestinationConfig = function (value) {
        this._destinationConfig.internalValue = value;
    };
    Object.defineProperty(SecretSyncFlyio.prototype, "destinationConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncFlyio.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncFlyio.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncFlyio.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncFlyio.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncFlyio.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncFlyio.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncFlyio.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncFlyio.prototype, "secretPath", {
        get: function () {
            return this.getStringAttribute('secret_path');
        },
        set: function (value) {
            this._secretPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncFlyio.prototype, "secretPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretSyncFlyio.prototype, "syncOptions", {
        get: function () {
            return this._syncOptions;
        },
        enumerable: false,
        configurable: true
    });
    SecretSyncFlyio.prototype.putSyncOptions = function (value) {
        this._syncOptions.internalValue = value;
    };
    Object.defineProperty(SecretSyncFlyio.prototype, "syncOptionsInput", {
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
    SecretSyncFlyio.prototype.synthesizeAttributes = function () {
        return {
            auto_sync_enabled: cdktf.booleanToTerraform(this._autoSyncEnabled),
            connection_id: cdktf.stringToTerraform(this._connectionId),
            description: cdktf.stringToTerraform(this._description),
            destination_config: secretSyncFlyioDestinationConfigToTerraform(this._destinationConfig.internalValue),
            environment: cdktf.stringToTerraform(this._environment),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
            secret_path: cdktf.stringToTerraform(this._secretPath),
            sync_options: secretSyncFlyioSyncOptionsToTerraform(this._syncOptions.internalValue),
        };
    };
    SecretSyncFlyio.prototype.synthesizeHclAttributes = function () {
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
                value: secretSyncFlyioDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretSyncFlyioDestinationConfig",
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
                value: secretSyncFlyioSyncOptionsToHclTerraform(this._syncOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretSyncFlyioSyncOptions",
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
    SecretSyncFlyio.tfResourceType = "infisical_secret_sync_flyio";
    return SecretSyncFlyio;
}(cdktf.TerraformResource));
exports.SecretSyncFlyio = SecretSyncFlyio;
