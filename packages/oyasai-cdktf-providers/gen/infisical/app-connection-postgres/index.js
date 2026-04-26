"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_postgres
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
exports.AppConnectionPostgres = exports.AppConnectionPostgresCredentialsOutputReference = void 0;
exports.appConnectionPostgresCredentialsToTerraform = appConnectionPostgresCredentialsToTerraform;
exports.appConnectionPostgresCredentialsToHclTerraform = appConnectionPostgresCredentialsToHclTerraform;
var cdktf = require("cdktf");
function appConnectionPostgresCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        password: cdktf.stringToTerraform(struct.password),
        port: cdktf.numberToTerraform(struct.port),
        ssl_certificate: cdktf.stringToTerraform(struct.sslCertificate),
        ssl_enabled: cdktf.booleanToTerraform(struct.sslEnabled),
        ssl_reject_unauthorized: cdktf.booleanToTerraform(struct.sslRejectUnauthorized),
        username: cdktf.stringToTerraform(struct.username),
    };
}
function appConnectionPostgresCredentialsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        database: {
            value: cdktf.stringToHclTerraform(struct.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktf.stringToHclTerraform(struct.host),
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
        port: {
            value: cdktf.numberToHclTerraform(struct.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ssl_certificate: {
            value: cdktf.stringToHclTerraform(struct.sslCertificate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_enabled: {
            value: cdktf.booleanToHclTerraform(struct.sslEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        ssl_reject_unauthorized: {
            value: cdktf.booleanToHclTerraform(struct.sslRejectUnauthorized),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        username: {
            value: cdktf.stringToHclTerraform(struct.username),
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
var AppConnectionPostgresCredentialsOutputReference = /** @class */ (function (_super) {
    __extends(AppConnectionPostgresCredentialsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AppConnectionPostgresCredentialsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AppConnectionPostgresCredentialsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._database !== undefined) {
                hasAnyValues = true;
                internalValueResult.database = this._database;
            }
            if (this._host !== undefined) {
                hasAnyValues = true;
                internalValueResult.host = this._host;
            }
            if (this._password !== undefined) {
                hasAnyValues = true;
                internalValueResult.password = this._password;
            }
            if (this._port !== undefined) {
                hasAnyValues = true;
                internalValueResult.port = this._port;
            }
            if (this._sslCertificate !== undefined) {
                hasAnyValues = true;
                internalValueResult.sslCertificate = this._sslCertificate;
            }
            if (this._sslEnabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.sslEnabled = this._sslEnabled;
            }
            if (this._sslRejectUnauthorized !== undefined) {
                hasAnyValues = true;
                internalValueResult.sslRejectUnauthorized = this._sslRejectUnauthorized;
            }
            if (this._username !== undefined) {
                hasAnyValues = true;
                internalValueResult.username = this._username;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._database = undefined;
                this._host = undefined;
                this._password = undefined;
                this._port = undefined;
                this._sslCertificate = undefined;
                this._sslEnabled = undefined;
                this._sslRejectUnauthorized = undefined;
                this._username = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._database = value.database;
                this._host = value.host;
                this._password = value.password;
                this._port = value.port;
                this._sslCertificate = value.sslCertificate;
                this._sslEnabled = value.sslEnabled;
                this._sslRejectUnauthorized = value.sslRejectUnauthorized;
                this._username = value.username;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionPostgresCredentialsOutputReference.prototype, "database", {
        get: function () {
            return this.getStringAttribute('database');
        },
        set: function (value) {
            this._database = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionPostgresCredentialsOutputReference.prototype, "databaseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._database;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionPostgresCredentialsOutputReference.prototype, "host", {
        get: function () {
            return this.getStringAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionPostgresCredentialsOutputReference.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionPostgresCredentialsOutputReference.prototype, "password", {
        get: function () {
            return this.getStringAttribute('password');
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionPostgresCredentialsOutputReference.prototype, "passwordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionPostgresCredentialsOutputReference.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionPostgresCredentialsOutputReference.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(AppConnectionPostgresCredentialsOutputReference.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionPostgresCredentialsOutputReference.prototype, "sslCertificate", {
        get: function () {
            return this.getStringAttribute('ssl_certificate');
        },
        set: function (value) {
            this._sslCertificate = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionPostgresCredentialsOutputReference.prototype.resetSslCertificate = function () {
        this._sslCertificate = undefined;
    };
    Object.defineProperty(AppConnectionPostgresCredentialsOutputReference.prototype, "sslCertificateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sslCertificate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionPostgresCredentialsOutputReference.prototype, "sslEnabled", {
        get: function () {
            return this.getBooleanAttribute('ssl_enabled');
        },
        set: function (value) {
            this._sslEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionPostgresCredentialsOutputReference.prototype.resetSslEnabled = function () {
        this._sslEnabled = undefined;
    };
    Object.defineProperty(AppConnectionPostgresCredentialsOutputReference.prototype, "sslEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sslEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionPostgresCredentialsOutputReference.prototype, "sslRejectUnauthorized", {
        get: function () {
            return this.getBooleanAttribute('ssl_reject_unauthorized');
        },
        set: function (value) {
            this._sslRejectUnauthorized = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionPostgresCredentialsOutputReference.prototype.resetSslRejectUnauthorized = function () {
        this._sslRejectUnauthorized = undefined;
    };
    Object.defineProperty(AppConnectionPostgresCredentialsOutputReference.prototype, "sslRejectUnauthorizedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sslRejectUnauthorized;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionPostgresCredentialsOutputReference.prototype, "username", {
        get: function () {
            return this.getStringAttribute('username');
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionPostgresCredentialsOutputReference.prototype, "usernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    return AppConnectionPostgresCredentialsOutputReference;
}(cdktf.ComplexObject));
exports.AppConnectionPostgresCredentialsOutputReference = AppConnectionPostgresCredentialsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_postgres infisical_app_connection_postgres}
*/
var AppConnectionPostgres = /** @class */ (function (_super) {
    __extends(AppConnectionPostgres, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_postgres infisical_app_connection_postgres} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionPostgresConfig
    */
    function AppConnectionPostgres(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_app_connection_postgres',
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
        _this._credentials = new AppConnectionPostgresCredentialsOutputReference(_this, "credentials");
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
    * Generates CDKTF code for importing a AppConnectionPostgres resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionPostgres to import
    * @param importFromId The id of the existing AppConnectionPostgres that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_postgres#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionPostgres to import is found
    */
    AppConnectionPostgres.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_app_connection_postgres", importId: importFromId, provider: provider });
    };
    Object.defineProperty(AppConnectionPostgres.prototype, "credentials", {
        get: function () {
            return this._credentials;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionPostgres.prototype.putCredentials = function (value) {
        this._credentials.internalValue = value;
    };
    Object.defineProperty(AppConnectionPostgres.prototype, "credentialsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._credentials.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionPostgres.prototype, "credentialsHash", {
        // credentials_hash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('credentials_hash');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionPostgres.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionPostgres.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AppConnectionPostgres.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionPostgres.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionPostgres.prototype, "method", {
        get: function () {
            return this.getStringAttribute('method');
        },
        set: function (value) {
            this._method = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionPostgres.prototype, "methodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._method;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionPostgres.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionPostgres.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionPostgres.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionPostgres.prototype.resetProjectId = function () {
        this._projectId = undefined;
    };
    Object.defineProperty(AppConnectionPostgres.prototype, "projectIdInput", {
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
    AppConnectionPostgres.prototype.synthesizeAttributes = function () {
        return {
            credentials: appConnectionPostgresCredentialsToTerraform(this._credentials.internalValue),
            description: cdktf.stringToTerraform(this._description),
            method: cdktf.stringToTerraform(this._method),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
        };
    };
    AppConnectionPostgres.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            credentials: {
                value: appConnectionPostgresCredentialsToHclTerraform(this._credentials.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AppConnectionPostgresCredentials",
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
    AppConnectionPostgres.tfResourceType = "infisical_app_connection_postgres";
    return AppConnectionPostgres;
}(cdktf.TerraformResource));
exports.AppConnectionPostgres = AppConnectionPostgres;
