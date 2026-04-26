"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_ldap
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
exports.AppConnectionLdap = exports.AppConnectionLdapCredentialsOutputReference = void 0;
exports.appConnectionLdapCredentialsToTerraform = appConnectionLdapCredentialsToTerraform;
exports.appConnectionLdapCredentialsToHclTerraform = appConnectionLdapCredentialsToHclTerraform;
var cdktf = require("cdktf");
function appConnectionLdapCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dn: cdktf.stringToTerraform(struct.dn),
        password: cdktf.stringToTerraform(struct.password),
        provider: cdktf.stringToTerraform(struct.provider),
        ssl_certificate: cdktf.stringToTerraform(struct.sslCertificate),
        ssl_reject_unauthorized: cdktf.booleanToTerraform(struct.sslRejectUnauthorized),
        url: cdktf.stringToTerraform(struct.url),
    };
}
function appConnectionLdapCredentialsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        dn: {
            value: cdktf.stringToHclTerraform(struct.dn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        password: {
            value: cdktf.stringToHclTerraform(struct.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        provider: {
            value: cdktf.stringToHclTerraform(struct.provider),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_certificate: {
            value: cdktf.stringToHclTerraform(struct.sslCertificate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_reject_unauthorized: {
            value: cdktf.booleanToHclTerraform(struct.sslRejectUnauthorized),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        url: {
            value: cdktf.stringToHclTerraform(struct.url),
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
var AppConnectionLdapCredentialsOutputReference = /** @class */ (function (_super) {
    __extends(AppConnectionLdapCredentialsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AppConnectionLdapCredentialsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AppConnectionLdapCredentialsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._dn !== undefined) {
                hasAnyValues = true;
                internalValueResult.dn = this._dn;
            }
            if (this._password !== undefined) {
                hasAnyValues = true;
                internalValueResult.password = this._password;
            }
            if (this._provider !== undefined) {
                hasAnyValues = true;
                internalValueResult.provider = this._provider;
            }
            if (this._sslCertificate !== undefined) {
                hasAnyValues = true;
                internalValueResult.sslCertificate = this._sslCertificate;
            }
            if (this._sslRejectUnauthorized !== undefined) {
                hasAnyValues = true;
                internalValueResult.sslRejectUnauthorized = this._sslRejectUnauthorized;
            }
            if (this._url !== undefined) {
                hasAnyValues = true;
                internalValueResult.url = this._url;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._dn = undefined;
                this._password = undefined;
                this._provider = undefined;
                this._sslCertificate = undefined;
                this._sslRejectUnauthorized = undefined;
                this._url = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._dn = value.dn;
                this._password = value.password;
                this._provider = value.provider;
                this._sslCertificate = value.sslCertificate;
                this._sslRejectUnauthorized = value.sslRejectUnauthorized;
                this._url = value.url;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionLdapCredentialsOutputReference.prototype, "dn", {
        get: function () {
            return this.getStringAttribute('dn');
        },
        set: function (value) {
            this._dn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionLdapCredentialsOutputReference.prototype, "dnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionLdapCredentialsOutputReference.prototype, "password", {
        get: function () {
            return this.getStringAttribute('password');
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionLdapCredentialsOutputReference.prototype, "passwordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionLdapCredentialsOutputReference.prototype, "provider", {
        get: function () {
            return this.getStringAttribute('provider');
        },
        set: function (value) {
            this._provider = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionLdapCredentialsOutputReference.prototype, "providerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._provider;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionLdapCredentialsOutputReference.prototype, "sslCertificate", {
        get: function () {
            return this.getStringAttribute('ssl_certificate');
        },
        set: function (value) {
            this._sslCertificate = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionLdapCredentialsOutputReference.prototype.resetSslCertificate = function () {
        this._sslCertificate = undefined;
    };
    Object.defineProperty(AppConnectionLdapCredentialsOutputReference.prototype, "sslCertificateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sslCertificate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionLdapCredentialsOutputReference.prototype, "sslRejectUnauthorized", {
        get: function () {
            return this.getBooleanAttribute('ssl_reject_unauthorized');
        },
        set: function (value) {
            this._sslRejectUnauthorized = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionLdapCredentialsOutputReference.prototype.resetSslRejectUnauthorized = function () {
        this._sslRejectUnauthorized = undefined;
    };
    Object.defineProperty(AppConnectionLdapCredentialsOutputReference.prototype, "sslRejectUnauthorizedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sslRejectUnauthorized;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionLdapCredentialsOutputReference.prototype, "url", {
        get: function () {
            return this.getStringAttribute('url');
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionLdapCredentialsOutputReference.prototype, "urlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    return AppConnectionLdapCredentialsOutputReference;
}(cdktf.ComplexObject));
exports.AppConnectionLdapCredentialsOutputReference = AppConnectionLdapCredentialsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_ldap infisical_app_connection_ldap}
*/
var AppConnectionLdap = /** @class */ (function (_super) {
    __extends(AppConnectionLdap, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_ldap infisical_app_connection_ldap} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionLdapConfig
    */
    function AppConnectionLdap(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_app_connection_ldap',
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
        _this._credentials = new AppConnectionLdapCredentialsOutputReference(_this, "credentials");
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
    * Generates CDKTF code for importing a AppConnectionLdap resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionLdap to import
    * @param importFromId The id of the existing AppConnectionLdap that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_ldap#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionLdap to import is found
    */
    AppConnectionLdap.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_app_connection_ldap", importId: importFromId, provider: provider });
    };
    Object.defineProperty(AppConnectionLdap.prototype, "credentials", {
        get: function () {
            return this._credentials;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionLdap.prototype.putCredentials = function (value) {
        this._credentials.internalValue = value;
    };
    Object.defineProperty(AppConnectionLdap.prototype, "credentialsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._credentials.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionLdap.prototype, "credentialsHash", {
        // credentials_hash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('credentials_hash');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionLdap.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionLdap.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AppConnectionLdap.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionLdap.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionLdap.prototype, "method", {
        get: function () {
            return this.getStringAttribute('method');
        },
        set: function (value) {
            this._method = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionLdap.prototype, "methodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._method;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionLdap.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionLdap.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionLdap.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionLdap.prototype.resetProjectId = function () {
        this._projectId = undefined;
    };
    Object.defineProperty(AppConnectionLdap.prototype, "projectIdInput", {
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
    AppConnectionLdap.prototype.synthesizeAttributes = function () {
        return {
            credentials: appConnectionLdapCredentialsToTerraform(this._credentials.internalValue),
            description: cdktf.stringToTerraform(this._description),
            method: cdktf.stringToTerraform(this._method),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
        };
    };
    AppConnectionLdap.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            credentials: {
                value: appConnectionLdapCredentialsToHclTerraform(this._credentials.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AppConnectionLdapCredentials",
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
    AppConnectionLdap.tfResourceType = "infisical_app_connection_ldap";
    return AppConnectionLdap;
}(cdktf.TerraformResource));
exports.AppConnectionLdap = AppConnectionLdap;
