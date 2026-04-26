"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gitlab
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
exports.AppConnectionGitlab = exports.AppConnectionGitlabCredentialsOutputReference = void 0;
exports.appConnectionGitlabCredentialsToTerraform = appConnectionGitlabCredentialsToTerraform;
exports.appConnectionGitlabCredentialsToHclTerraform = appConnectionGitlabCredentialsToHclTerraform;
var cdktf = require("cdktf");
function appConnectionGitlabCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_token: cdktf.stringToTerraform(struct.accessToken),
        access_token_type: cdktf.stringToTerraform(struct.accessTokenType),
        instance_url: cdktf.stringToTerraform(struct.instanceUrl),
    };
}
function appConnectionGitlabCredentialsToHclTerraform(struct) {
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
        access_token_type: {
            value: cdktf.stringToHclTerraform(struct.accessTokenType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_url: {
            value: cdktf.stringToHclTerraform(struct.instanceUrl),
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
var AppConnectionGitlabCredentialsOutputReference = /** @class */ (function (_super) {
    __extends(AppConnectionGitlabCredentialsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AppConnectionGitlabCredentialsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AppConnectionGitlabCredentialsOutputReference.prototype, "internalValue", {
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
            if (this._accessTokenType !== undefined) {
                hasAnyValues = true;
                internalValueResult.accessTokenType = this._accessTokenType;
            }
            if (this._instanceUrl !== undefined) {
                hasAnyValues = true;
                internalValueResult.instanceUrl = this._instanceUrl;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._accessToken = undefined;
                this._accessTokenType = undefined;
                this._instanceUrl = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._accessToken = value.accessToken;
                this._accessTokenType = value.accessTokenType;
                this._instanceUrl = value.instanceUrl;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionGitlabCredentialsOutputReference.prototype, "accessToken", {
        get: function () {
            return this.getStringAttribute('access_token');
        },
        set: function (value) {
            this._accessToken = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionGitlabCredentialsOutputReference.prototype, "accessTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionGitlabCredentialsOutputReference.prototype, "accessTokenType", {
        get: function () {
            return this.getStringAttribute('access_token_type');
        },
        set: function (value) {
            this._accessTokenType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionGitlabCredentialsOutputReference.prototype, "accessTokenTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionGitlabCredentialsOutputReference.prototype, "instanceUrl", {
        get: function () {
            return this.getStringAttribute('instance_url');
        },
        set: function (value) {
            this._instanceUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionGitlabCredentialsOutputReference.prototype.resetInstanceUrl = function () {
        this._instanceUrl = undefined;
    };
    Object.defineProperty(AppConnectionGitlabCredentialsOutputReference.prototype, "instanceUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceUrl;
        },
        enumerable: false,
        configurable: true
    });
    return AppConnectionGitlabCredentialsOutputReference;
}(cdktf.ComplexObject));
exports.AppConnectionGitlabCredentialsOutputReference = AppConnectionGitlabCredentialsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gitlab infisical_app_connection_gitlab}
*/
var AppConnectionGitlab = /** @class */ (function (_super) {
    __extends(AppConnectionGitlab, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gitlab infisical_app_connection_gitlab} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionGitlabConfig
    */
    function AppConnectionGitlab(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_app_connection_gitlab',
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
        _this._credentials = new AppConnectionGitlabCredentialsOutputReference(_this, "credentials");
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
    * Generates CDKTF code for importing a AppConnectionGitlab resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionGitlab to import
    * @param importFromId The id of the existing AppConnectionGitlab that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gitlab#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionGitlab to import is found
    */
    AppConnectionGitlab.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_app_connection_gitlab", importId: importFromId, provider: provider });
    };
    Object.defineProperty(AppConnectionGitlab.prototype, "credentials", {
        get: function () {
            return this._credentials;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionGitlab.prototype.putCredentials = function (value) {
        this._credentials.internalValue = value;
    };
    Object.defineProperty(AppConnectionGitlab.prototype, "credentialsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._credentials.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionGitlab.prototype, "credentialsHash", {
        // credentials_hash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('credentials_hash');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionGitlab.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionGitlab.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AppConnectionGitlab.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionGitlab.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionGitlab.prototype, "method", {
        get: function () {
            return this.getStringAttribute('method');
        },
        set: function (value) {
            this._method = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionGitlab.prototype, "methodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._method;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionGitlab.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionGitlab.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionGitlab.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionGitlab.prototype.resetProjectId = function () {
        this._projectId = undefined;
    };
    Object.defineProperty(AppConnectionGitlab.prototype, "projectIdInput", {
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
    AppConnectionGitlab.prototype.synthesizeAttributes = function () {
        return {
            credentials: appConnectionGitlabCredentialsToTerraform(this._credentials.internalValue),
            description: cdktf.stringToTerraform(this._description),
            method: cdktf.stringToTerraform(this._method),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
        };
    };
    AppConnectionGitlab.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            credentials: {
                value: appConnectionGitlabCredentialsToHclTerraform(this._credentials.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AppConnectionGitlabCredentials",
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
    AppConnectionGitlab.tfResourceType = "infisical_app_connection_gitlab";
    return AppConnectionGitlab;
}(cdktf.TerraformResource));
exports.AppConnectionGitlab = AppConnectionGitlab;
