"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_devops
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
exports.AppConnectionAzureDevops = exports.AppConnectionAzureDevopsCredentialsOutputReference = void 0;
exports.appConnectionAzureDevopsCredentialsToTerraform = appConnectionAzureDevopsCredentialsToTerraform;
exports.appConnectionAzureDevopsCredentialsToHclTerraform = appConnectionAzureDevopsCredentialsToHclTerraform;
var cdktf = require("cdktf");
function appConnectionAzureDevopsCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_token: cdktf.stringToTerraform(struct.accessToken),
        client_id: cdktf.stringToTerraform(struct.clientId),
        client_secret: cdktf.stringToTerraform(struct.clientSecret),
        organization_name: cdktf.stringToTerraform(struct.organizationName),
        tenant_id: cdktf.stringToTerraform(struct.tenantId),
    };
}
function appConnectionAzureDevopsCredentialsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        access_token: {
            value: cdktf.stringToHclTerraform(struct.accessToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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
        organization_name: {
            value: cdktf.stringToHclTerraform(struct.organizationName),
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
var AppConnectionAzureDevopsCredentialsOutputReference = /** @class */ (function (_super) {
    __extends(AppConnectionAzureDevopsCredentialsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AppConnectionAzureDevopsCredentialsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AppConnectionAzureDevopsCredentialsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._accessToken !== undefined) {
                hasAnyValues = true;
                internalValueResult.accessToken = this._accessToken;
            }
            if (this._clientId !== undefined) {
                hasAnyValues = true;
                internalValueResult.clientId = this._clientId;
            }
            if (this._clientSecret !== undefined) {
                hasAnyValues = true;
                internalValueResult.clientSecret = this._clientSecret;
            }
            if (this._organizationName !== undefined) {
                hasAnyValues = true;
                internalValueResult.organizationName = this._organizationName;
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
                this._accessToken = undefined;
                this._clientId = undefined;
                this._clientSecret = undefined;
                this._organizationName = undefined;
                this._tenantId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._accessToken = value.accessToken;
                this._clientId = value.clientId;
                this._clientSecret = value.clientSecret;
                this._organizationName = value.organizationName;
                this._tenantId = value.tenantId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureDevopsCredentialsOutputReference.prototype, "accessToken", {
        get: function () {
            return this.getStringAttribute('access_token');
        },
        set: function (value) {
            this._accessToken = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionAzureDevopsCredentialsOutputReference.prototype.resetAccessToken = function () {
        this._accessToken = undefined;
    };
    Object.defineProperty(AppConnectionAzureDevopsCredentialsOutputReference.prototype, "accessTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureDevopsCredentialsOutputReference.prototype, "clientId", {
        get: function () {
            return this.getStringAttribute('client_id');
        },
        set: function (value) {
            this._clientId = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionAzureDevopsCredentialsOutputReference.prototype.resetClientId = function () {
        this._clientId = undefined;
    };
    Object.defineProperty(AppConnectionAzureDevopsCredentialsOutputReference.prototype, "clientIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureDevopsCredentialsOutputReference.prototype, "clientSecret", {
        get: function () {
            return this.getStringAttribute('client_secret');
        },
        set: function (value) {
            this._clientSecret = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionAzureDevopsCredentialsOutputReference.prototype.resetClientSecret = function () {
        this._clientSecret = undefined;
    };
    Object.defineProperty(AppConnectionAzureDevopsCredentialsOutputReference.prototype, "clientSecretInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientSecret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureDevopsCredentialsOutputReference.prototype, "organizationName", {
        get: function () {
            return this.getStringAttribute('organization_name');
        },
        set: function (value) {
            this._organizationName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureDevopsCredentialsOutputReference.prototype, "organizationNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._organizationName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureDevopsCredentialsOutputReference.prototype, "tenantId", {
        get: function () {
            return this.getStringAttribute('tenant_id');
        },
        set: function (value) {
            this._tenantId = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionAzureDevopsCredentialsOutputReference.prototype.resetTenantId = function () {
        this._tenantId = undefined;
    };
    Object.defineProperty(AppConnectionAzureDevopsCredentialsOutputReference.prototype, "tenantIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tenantId;
        },
        enumerable: false,
        configurable: true
    });
    return AppConnectionAzureDevopsCredentialsOutputReference;
}(cdktf.ComplexObject));
exports.AppConnectionAzureDevopsCredentialsOutputReference = AppConnectionAzureDevopsCredentialsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_devops infisical_app_connection_azure_devops}
*/
var AppConnectionAzureDevops = /** @class */ (function (_super) {
    __extends(AppConnectionAzureDevops, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_devops infisical_app_connection_azure_devops} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionAzureDevopsConfig
    */
    function AppConnectionAzureDevops(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_app_connection_azure_devops',
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
        _this._credentials = new AppConnectionAzureDevopsCredentialsOutputReference(_this, "credentials");
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
    * Generates CDKTF code for importing a AppConnectionAzureDevops resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionAzureDevops to import
    * @param importFromId The id of the existing AppConnectionAzureDevops that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_azure_devops#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionAzureDevops to import is found
    */
    AppConnectionAzureDevops.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_app_connection_azure_devops", importId: importFromId, provider: provider });
    };
    Object.defineProperty(AppConnectionAzureDevops.prototype, "credentials", {
        get: function () {
            return this._credentials;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionAzureDevops.prototype.putCredentials = function (value) {
        this._credentials.internalValue = value;
    };
    Object.defineProperty(AppConnectionAzureDevops.prototype, "credentialsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._credentials.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureDevops.prototype, "credentialsHash", {
        // credentials_hash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('credentials_hash');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureDevops.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionAzureDevops.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AppConnectionAzureDevops.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureDevops.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureDevops.prototype, "method", {
        get: function () {
            return this.getStringAttribute('method');
        },
        set: function (value) {
            this._method = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureDevops.prototype, "methodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._method;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureDevops.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureDevops.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAzureDevops.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionAzureDevops.prototype.resetProjectId = function () {
        this._projectId = undefined;
    };
    Object.defineProperty(AppConnectionAzureDevops.prototype, "projectIdInput", {
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
    AppConnectionAzureDevops.prototype.synthesizeAttributes = function () {
        return {
            credentials: appConnectionAzureDevopsCredentialsToTerraform(this._credentials.internalValue),
            description: cdktf.stringToTerraform(this._description),
            method: cdktf.stringToTerraform(this._method),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
        };
    };
    AppConnectionAzureDevops.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            credentials: {
                value: appConnectionAzureDevopsCredentialsToHclTerraform(this._credentials.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AppConnectionAzureDevopsCredentials",
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
    AppConnectionAzureDevops.tfResourceType = "infisical_app_connection_azure_devops";
    return AppConnectionAzureDevops;
}(cdktf.TerraformResource));
exports.AppConnectionAzureDevops = AppConnectionAzureDevops;
