"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_flyio
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
exports.AppConnectionFlyio = exports.AppConnectionFlyioCredentialsOutputReference = void 0;
exports.appConnectionFlyioCredentialsToTerraform = appConnectionFlyioCredentialsToTerraform;
exports.appConnectionFlyioCredentialsToHclTerraform = appConnectionFlyioCredentialsToHclTerraform;
var cdktf = require("cdktf");
function appConnectionFlyioCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_token: cdktf.stringToTerraform(struct.accessToken),
    };
}
function appConnectionFlyioCredentialsToHclTerraform(struct) {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var AppConnectionFlyioCredentialsOutputReference = /** @class */ (function (_super) {
    __extends(AppConnectionFlyioCredentialsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AppConnectionFlyioCredentialsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AppConnectionFlyioCredentialsOutputReference.prototype, "internalValue", {
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
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._accessToken = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._accessToken = value.accessToken;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionFlyioCredentialsOutputReference.prototype, "accessToken", {
        get: function () {
            return this.getStringAttribute('access_token');
        },
        set: function (value) {
            this._accessToken = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionFlyioCredentialsOutputReference.prototype, "accessTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessToken;
        },
        enumerable: false,
        configurable: true
    });
    return AppConnectionFlyioCredentialsOutputReference;
}(cdktf.ComplexObject));
exports.AppConnectionFlyioCredentialsOutputReference = AppConnectionFlyioCredentialsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_flyio infisical_app_connection_flyio}
*/
var AppConnectionFlyio = /** @class */ (function (_super) {
    __extends(AppConnectionFlyio, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_flyio infisical_app_connection_flyio} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionFlyioConfig
    */
    function AppConnectionFlyio(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_app_connection_flyio',
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
        _this._credentials = new AppConnectionFlyioCredentialsOutputReference(_this, "credentials");
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
    * Generates CDKTF code for importing a AppConnectionFlyio resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionFlyio to import
    * @param importFromId The id of the existing AppConnectionFlyio that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_flyio#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionFlyio to import is found
    */
    AppConnectionFlyio.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_app_connection_flyio", importId: importFromId, provider: provider });
    };
    Object.defineProperty(AppConnectionFlyio.prototype, "credentials", {
        get: function () {
            return this._credentials;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionFlyio.prototype.putCredentials = function (value) {
        this._credentials.internalValue = value;
    };
    Object.defineProperty(AppConnectionFlyio.prototype, "credentialsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._credentials.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionFlyio.prototype, "credentialsHash", {
        // credentials_hash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('credentials_hash');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionFlyio.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionFlyio.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AppConnectionFlyio.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionFlyio.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionFlyio.prototype, "method", {
        get: function () {
            return this.getStringAttribute('method');
        },
        set: function (value) {
            this._method = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionFlyio.prototype, "methodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._method;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionFlyio.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionFlyio.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionFlyio.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionFlyio.prototype.resetProjectId = function () {
        this._projectId = undefined;
    };
    Object.defineProperty(AppConnectionFlyio.prototype, "projectIdInput", {
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
    AppConnectionFlyio.prototype.synthesizeAttributes = function () {
        return {
            credentials: appConnectionFlyioCredentialsToTerraform(this._credentials.internalValue),
            description: cdktf.stringToTerraform(this._description),
            method: cdktf.stringToTerraform(this._method),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
        };
    };
    AppConnectionFlyio.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            credentials: {
                value: appConnectionFlyioCredentialsToHclTerraform(this._credentials.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AppConnectionFlyioCredentials",
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
    AppConnectionFlyio.tfResourceType = "infisical_app_connection_flyio";
    return AppConnectionFlyio;
}(cdktf.TerraformResource));
exports.AppConnectionFlyio = AppConnectionFlyio;
