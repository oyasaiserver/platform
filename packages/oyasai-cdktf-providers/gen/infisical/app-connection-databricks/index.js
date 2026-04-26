"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_databricks
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
exports.AppConnectionDatabricks = exports.AppConnectionDatabricksCredentialsOutputReference = void 0;
exports.appConnectionDatabricksCredentialsToTerraform = appConnectionDatabricksCredentialsToTerraform;
exports.appConnectionDatabricksCredentialsToHclTerraform = appConnectionDatabricksCredentialsToHclTerraform;
var cdktf = require("cdktf");
function appConnectionDatabricksCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        client_id: cdktf.stringToTerraform(struct.clientId),
        client_secret: cdktf.stringToTerraform(struct.clientSecret),
        workspace_url: cdktf.stringToTerraform(struct.workspaceUrl),
    };
}
function appConnectionDatabricksCredentialsToHclTerraform(struct) {
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
        workspace_url: {
            value: cdktf.stringToHclTerraform(struct.workspaceUrl),
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
var AppConnectionDatabricksCredentialsOutputReference = /** @class */ (function (_super) {
    __extends(AppConnectionDatabricksCredentialsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AppConnectionDatabricksCredentialsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AppConnectionDatabricksCredentialsOutputReference.prototype, "internalValue", {
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
            if (this._workspaceUrl !== undefined) {
                hasAnyValues = true;
                internalValueResult.workspaceUrl = this._workspaceUrl;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._clientId = undefined;
                this._clientSecret = undefined;
                this._workspaceUrl = undefined;
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
                this._workspaceUrl = value.workspaceUrl;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionDatabricksCredentialsOutputReference.prototype, "clientId", {
        get: function () {
            return this.getStringAttribute('client_id');
        },
        set: function (value) {
            this._clientId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionDatabricksCredentialsOutputReference.prototype, "clientIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionDatabricksCredentialsOutputReference.prototype, "clientSecret", {
        get: function () {
            return this.getStringAttribute('client_secret');
        },
        set: function (value) {
            this._clientSecret = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionDatabricksCredentialsOutputReference.prototype, "clientSecretInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientSecret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionDatabricksCredentialsOutputReference.prototype, "workspaceUrl", {
        get: function () {
            return this.getStringAttribute('workspace_url');
        },
        set: function (value) {
            this._workspaceUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionDatabricksCredentialsOutputReference.prototype, "workspaceUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workspaceUrl;
        },
        enumerable: false,
        configurable: true
    });
    return AppConnectionDatabricksCredentialsOutputReference;
}(cdktf.ComplexObject));
exports.AppConnectionDatabricksCredentialsOutputReference = AppConnectionDatabricksCredentialsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_databricks infisical_app_connection_databricks}
*/
var AppConnectionDatabricks = /** @class */ (function (_super) {
    __extends(AppConnectionDatabricks, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_databricks infisical_app_connection_databricks} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionDatabricksConfig
    */
    function AppConnectionDatabricks(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_app_connection_databricks',
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
        _this._credentials = new AppConnectionDatabricksCredentialsOutputReference(_this, "credentials");
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
    * Generates CDKTF code for importing a AppConnectionDatabricks resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionDatabricks to import
    * @param importFromId The id of the existing AppConnectionDatabricks that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_databricks#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionDatabricks to import is found
    */
    AppConnectionDatabricks.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_app_connection_databricks", importId: importFromId, provider: provider });
    };
    Object.defineProperty(AppConnectionDatabricks.prototype, "credentials", {
        get: function () {
            return this._credentials;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionDatabricks.prototype.putCredentials = function (value) {
        this._credentials.internalValue = value;
    };
    Object.defineProperty(AppConnectionDatabricks.prototype, "credentialsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._credentials.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionDatabricks.prototype, "credentialsHash", {
        // credentials_hash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('credentials_hash');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionDatabricks.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionDatabricks.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AppConnectionDatabricks.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionDatabricks.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionDatabricks.prototype, "method", {
        get: function () {
            return this.getStringAttribute('method');
        },
        set: function (value) {
            this._method = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionDatabricks.prototype, "methodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._method;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionDatabricks.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionDatabricks.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionDatabricks.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionDatabricks.prototype.resetProjectId = function () {
        this._projectId = undefined;
    };
    Object.defineProperty(AppConnectionDatabricks.prototype, "projectIdInput", {
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
    AppConnectionDatabricks.prototype.synthesizeAttributes = function () {
        return {
            credentials: appConnectionDatabricksCredentialsToTerraform(this._credentials.internalValue),
            description: cdktf.stringToTerraform(this._description),
            method: cdktf.stringToTerraform(this._method),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
        };
    };
    AppConnectionDatabricks.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            credentials: {
                value: appConnectionDatabricksCredentialsToHclTerraform(this._credentials.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AppConnectionDatabricksCredentials",
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
    AppConnectionDatabricks.tfResourceType = "infisical_app_connection_databricks";
    return AppConnectionDatabricks;
}(cdktf.TerraformResource));
exports.AppConnectionDatabricks = AppConnectionDatabricks;
