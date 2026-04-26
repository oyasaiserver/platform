"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_app_configuration
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
exports.AppConnectionAzureAppConfiguration = exports.AppConnectionAzureAppConfigurationCredentialsOutputReference = void 0;
exports.appConnectionAzureAppConfigurationCredentialsToTerraform = appConnectionAzureAppConfigurationCredentialsToTerraform;
exports.appConnectionAzureAppConfigurationCredentialsToHclTerraform = appConnectionAzureAppConfigurationCredentialsToHclTerraform;
var cdktf = require("cdktf");
function appConnectionAzureAppConfigurationCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        client_id: cdktf.stringToTerraform(struct.clientId),
        client_secret: cdktf.stringToTerraform(struct.clientSecret),
        tenant_id: cdktf.stringToTerraform(struct.tenantId),
    };
}
function appConnectionAzureAppConfigurationCredentialsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        client_id: {
            value: cdktf.stringToHclTerraform(struct.clientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_secret: {
            value: cdktf.stringToHclTerraform(struct.clientSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tenant_id: {
            value: cdktf.stringToHclTerraform(struct.tenantId),
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
var AppConnectionAzureAppConfigurationCredentialsOutputReference = /** @class */ (function (_super) {
    __extends(AppConnectionAzureAppConfigurationCredentialsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AppConnectionAzureAppConfigurationCredentialsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AppConnectionAzureAppConfigurationCredentialsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._clientId !== undefined) {
                hasAnyValues = true;
                internalValueResult.clientId = this._clientId;
            }
            if (this._clientSecret !== undefined) {
                hasAnyValues = true;
                internalValueResult.clientSecret = this._clientSecret;
            }
            if (this._tenantId !== undefined) {
                hasAnyValues = true;
                internalValueResult.tenantId = this._tenantId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._clientId = undefined;
                this._clientSecret = undefined;
                this._tenantId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._clientId = value.clientId;
                this._clientSecret = value.clientSecret;
                this._tenantId = value.tenantId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureAppConfigurationCredentialsOutputReference.prototype, "clientId", {
        get: function () {
            return this.getStringAttribute('client_id');
        },
        set: function (value) {
            this._clientId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureAppConfigurationCredentialsOutputReference.prototype, "clientIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureAppConfigurationCredentialsOutputReference.prototype, "clientSecret", {
        get: function () {
            return this.getStringAttribute('client_secret');
        },
        set: function (value) {
            this._clientSecret = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureAppConfigurationCredentialsOutputReference.prototype, "clientSecretInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientSecret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureAppConfigurationCredentialsOutputReference.prototype, "tenantId", {
        get: function () {
            return this.getStringAttribute('tenant_id');
        },
        set: function (value) {
            this._tenantId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureAppConfigurationCredentialsOutputReference.prototype, "tenantIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tenantId;
        },
        enumerable: false,
        configurable: true
    });
    return AppConnectionAzureAppConfigurationCredentialsOutputReference;
}(cdktf.ComplexObject));
exports.AppConnectionAzureAppConfigurationCredentialsOutputReference = AppConnectionAzureAppConfigurationCredentialsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_app_configuration infisical_app_connection_azure_app_configuration}
*/
var AppConnectionAzureAppConfiguration = /** @class */ (function (_super) {
    __extends(AppConnectionAzureAppConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_app_configuration infisical_app_connection_azure_app_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionAzureAppConfigurationConfig
    */
    function AppConnectionAzureAppConfiguration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_app_connection_azure_app_configuration',
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
        // ==========
        // ATTRIBUTES
        // ==========
        // credentials - computed: false, optional: false, required: true
        _this._credentials = new AppConnectionAzureAppConfigurationCredentialsOutputReference(_this, "credentials");
        _this._credentials.internalValue = config.credentials;
        _this._description = config.description;
        _this._method = config.method;
        _this._name = config.name;
        _this._projectId = config.projectId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AppConnectionAzureAppConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionAzureAppConfiguration to import
    * @param importFromId The id of the existing AppConnectionAzureAppConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_app_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionAzureAppConfiguration to import is found
    */
    AppConnectionAzureAppConfiguration.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_app_connection_azure_app_configuration", importId: importFromId, provider: provider });
    };
    Object.defineProperty(AppConnectionAzureAppConfiguration.prototype, "credentials", {
        get: function () {
            return this._credentials;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionAzureAppConfiguration.prototype.putCredentials = function (value) {
        this._credentials.internalValue = value;
    };
    Object.defineProperty(AppConnectionAzureAppConfiguration.prototype, "credentialsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._credentials.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureAppConfiguration.prototype, "credentialsHash", {
        // credentials_hash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('credentials_hash');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureAppConfiguration.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionAzureAppConfiguration.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AppConnectionAzureAppConfiguration.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureAppConfiguration.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureAppConfiguration.prototype, "method", {
        get: function () {
            return this.getStringAttribute('method');
        },
        set: function (value) {
            this._method = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureAppConfiguration.prototype, "methodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._method;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureAppConfiguration.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureAppConfiguration.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureAppConfiguration.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionAzureAppConfiguration.prototype.resetProjectId = function () {
        this._projectId = undefined;
    };
    Object.defineProperty(AppConnectionAzureAppConfiguration.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AppConnectionAzureAppConfiguration.prototype.synthesizeAttributes = function () {
        return {
            credentials: appConnectionAzureAppConfigurationCredentialsToTerraform(this._credentials.internalValue),
            description: cdktf.stringToTerraform(this._description),
            method: cdktf.stringToTerraform(this._method),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
        };
    };
    AppConnectionAzureAppConfiguration.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            credentials: {
                value: appConnectionAzureAppConfigurationCredentialsToHclTerraform(this._credentials.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AppConnectionAzureAppConfigurationCredentials",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            method: {
                value: cdktf.stringToHclTerraform(this._method),
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
    AppConnectionAzureAppConfiguration.tfResourceType = "infisical_app_connection_azure_app_configuration";
    return AppConnectionAzureAppConfiguration;
}(cdktf.TerraformResource));
exports.AppConnectionAzureAppConfiguration = AppConnectionAzureAppConfiguration;
