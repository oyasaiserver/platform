"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_gcp_secret_manager
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
exports.IntegrationGcpSecretManager = exports.IntegrationGcpSecretManagerOptionsOutputReference = void 0;
exports.integrationGcpSecretManagerOptionsToTerraform = integrationGcpSecretManagerOptionsToTerraform;
exports.integrationGcpSecretManagerOptionsToHclTerraform = integrationGcpSecretManagerOptionsToHclTerraform;
var cdktf = require("cdktf");
function integrationGcpSecretManagerOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        secret_prefix: cdktf.stringToTerraform(struct.secretPrefix),
        secret_suffix: cdktf.stringToTerraform(struct.secretSuffix),
    };
}
function integrationGcpSecretManagerOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        secret_prefix: {
            value: cdktf.stringToHclTerraform(struct.secretPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_suffix: {
            value: cdktf.stringToHclTerraform(struct.secretSuffix),
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
var IntegrationGcpSecretManagerOptionsOutputReference = /** @class */ (function (_super) {
    __extends(IntegrationGcpSecretManagerOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function IntegrationGcpSecretManagerOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(IntegrationGcpSecretManagerOptionsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._secretPrefix !== undefined) {
                hasAnyValues = true;
                internalValueResult.secretPrefix = this._secretPrefix;
            }
            if (this._secretSuffix !== undefined) {
                hasAnyValues = true;
                internalValueResult.secretSuffix = this._secretSuffix;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._secretPrefix = undefined;
                this._secretSuffix = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._secretPrefix = value.secretPrefix;
                this._secretSuffix = value.secretSuffix;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationGcpSecretManagerOptionsOutputReference.prototype, "secretPrefix", {
        get: function () {
            return this.getStringAttribute('secret_prefix');
        },
        set: function (value) {
            this._secretPrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    IntegrationGcpSecretManagerOptionsOutputReference.prototype.resetSecretPrefix = function () {
        this._secretPrefix = undefined;
    };
    Object.defineProperty(IntegrationGcpSecretManagerOptionsOutputReference.prototype, "secretPrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretPrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationGcpSecretManagerOptionsOutputReference.prototype, "secretSuffix", {
        get: function () {
            return this.getStringAttribute('secret_suffix');
        },
        set: function (value) {
            this._secretSuffix = value;
        },
        enumerable: false,
        configurable: true
    });
    IntegrationGcpSecretManagerOptionsOutputReference.prototype.resetSecretSuffix = function () {
        this._secretSuffix = undefined;
    };
    Object.defineProperty(IntegrationGcpSecretManagerOptionsOutputReference.prototype, "secretSuffixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretSuffix;
        },
        enumerable: false,
        configurable: true
    });
    return IntegrationGcpSecretManagerOptionsOutputReference;
}(cdktf.ComplexObject));
exports.IntegrationGcpSecretManagerOptionsOutputReference = IntegrationGcpSecretManagerOptionsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_gcp_secret_manager infisical_integration_gcp_secret_manager}
*/
var IntegrationGcpSecretManager = /** @class */ (function (_super) {
    __extends(IntegrationGcpSecretManager, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_gcp_secret_manager infisical_integration_gcp_secret_manager} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IntegrationGcpSecretManagerConfig
    */
    function IntegrationGcpSecretManager(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_integration_gcp_secret_manager',
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
        // options - computed: true, optional: true, required: false
        _this._options = new IntegrationGcpSecretManagerOptionsOutputReference(_this, "options");
        _this._environment = config.environment;
        _this._gcpProjectId = config.gcpProjectId;
        _this._options.internalValue = config.options;
        _this._projectId = config.projectId;
        _this._secretPath = config.secretPath;
        _this._serviceAccountJson = config.serviceAccountJson;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a IntegrationGcpSecretManager resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IntegrationGcpSecretManager to import
    * @param importFromId The id of the existing IntegrationGcpSecretManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_gcp_secret_manager#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IntegrationGcpSecretManager to import is found
    */
    IntegrationGcpSecretManager.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_integration_gcp_secret_manager", importId: importFromId, provider: provider });
    };
    Object.defineProperty(IntegrationGcpSecretManager.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationGcpSecretManager.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationGcpSecretManager.prototype, "gcpProjectId", {
        get: function () {
            return this.getStringAttribute('gcp_project_id');
        },
        set: function (value) {
            this._gcpProjectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationGcpSecretManager.prototype, "gcpProjectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gcpProjectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationGcpSecretManager.prototype, "integrationAuthId", {
        // integration_auth_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('integration_auth_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationGcpSecretManager.prototype, "integrationId", {
        // integration_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('integration_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationGcpSecretManager.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    IntegrationGcpSecretManager.prototype.putOptions = function (value) {
        this._options.internalValue = value;
    };
    IntegrationGcpSecretManager.prototype.resetOptions = function () {
        this._options.internalValue = undefined;
    };
    Object.defineProperty(IntegrationGcpSecretManager.prototype, "optionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._options.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationGcpSecretManager.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationGcpSecretManager.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationGcpSecretManager.prototype, "secretPath", {
        get: function () {
            return this.getStringAttribute('secret_path');
        },
        set: function (value) {
            this._secretPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationGcpSecretManager.prototype, "secretPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationGcpSecretManager.prototype, "serviceAccountJson", {
        get: function () {
            return this.getStringAttribute('service_account_json');
        },
        set: function (value) {
            this._serviceAccountJson = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegrationGcpSecretManager.prototype, "serviceAccountJsonInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceAccountJson;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IntegrationGcpSecretManager.prototype.synthesizeAttributes = function () {
        return {
            environment: cdktf.stringToTerraform(this._environment),
            gcp_project_id: cdktf.stringToTerraform(this._gcpProjectId),
            options: integrationGcpSecretManagerOptionsToTerraform(this._options.internalValue),
            project_id: cdktf.stringToTerraform(this._projectId),
            secret_path: cdktf.stringToTerraform(this._secretPath),
            service_account_json: cdktf.stringToTerraform(this._serviceAccountJson),
        };
    };
    IntegrationGcpSecretManager.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            environment: {
                value: cdktf.stringToHclTerraform(this._environment),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            gcp_project_id: {
                value: cdktf.stringToHclTerraform(this._gcpProjectId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            options: {
                value: integrationGcpSecretManagerOptionsToHclTerraform(this._options.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "IntegrationGcpSecretManagerOptions",
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
            service_account_json: {
                value: cdktf.stringToHclTerraform(this._serviceAccountJson),
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
    };
    // =================
    // STATIC PROPERTIES
    // =================
    IntegrationGcpSecretManager.tfResourceType = "infisical_integration_gcp_secret_manager";
    return IntegrationGcpSecretManager;
}(cdktf.TerraformResource));
exports.IntegrationGcpSecretManager = IntegrationGcpSecretManager;
