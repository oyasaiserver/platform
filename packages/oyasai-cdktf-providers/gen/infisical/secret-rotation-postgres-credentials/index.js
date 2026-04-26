"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_postgres_credentials
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
exports.SecretRotationPostgresCredentials = exports.SecretRotationPostgresCredentialsTemporaryParametersOutputReference = exports.SecretRotationPostgresCredentialsSecretsMappingOutputReference = exports.SecretRotationPostgresCredentialsRotateAtUtcOutputReference = exports.SecretRotationPostgresCredentialsParametersOutputReference = void 0;
exports.secretRotationPostgresCredentialsParametersToTerraform = secretRotationPostgresCredentialsParametersToTerraform;
exports.secretRotationPostgresCredentialsParametersToHclTerraform = secretRotationPostgresCredentialsParametersToHclTerraform;
exports.secretRotationPostgresCredentialsRotateAtUtcToTerraform = secretRotationPostgresCredentialsRotateAtUtcToTerraform;
exports.secretRotationPostgresCredentialsRotateAtUtcToHclTerraform = secretRotationPostgresCredentialsRotateAtUtcToHclTerraform;
exports.secretRotationPostgresCredentialsSecretsMappingToTerraform = secretRotationPostgresCredentialsSecretsMappingToTerraform;
exports.secretRotationPostgresCredentialsSecretsMappingToHclTerraform = secretRotationPostgresCredentialsSecretsMappingToHclTerraform;
exports.secretRotationPostgresCredentialsTemporaryParametersToTerraform = secretRotationPostgresCredentialsTemporaryParametersToTerraform;
exports.secretRotationPostgresCredentialsTemporaryParametersToHclTerraform = secretRotationPostgresCredentialsTemporaryParametersToHclTerraform;
var cdktf = require("cdktf");
function secretRotationPostgresCredentialsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        username1: cdktf.stringToTerraform(struct.username1),
        username2: cdktf.stringToTerraform(struct.username2),
    };
}
function secretRotationPostgresCredentialsParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        username1: {
            value: cdktf.stringToHclTerraform(struct.username1),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        username2: {
            value: cdktf.stringToHclTerraform(struct.username2),
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
var SecretRotationPostgresCredentialsParametersOutputReference = /** @class */ (function (_super) {
    __extends(SecretRotationPostgresCredentialsParametersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretRotationPostgresCredentialsParametersOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretRotationPostgresCredentialsParametersOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._username1 !== undefined) {
                hasAnyValues = true;
                internalValueResult.username1 = this._username1;
            }
            if (this._username2 !== undefined) {
                hasAnyValues = true;
                internalValueResult.username2 = this._username2;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._username1 = undefined;
                this._username2 = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._username1 = value.username1;
                this._username2 = value.username2;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentialsParametersOutputReference.prototype, "username1", {
        get: function () {
            return this.getStringAttribute('username1');
        },
        set: function (value) {
            this._username1 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentialsParametersOutputReference.prototype, "username1Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentialsParametersOutputReference.prototype, "username2", {
        get: function () {
            return this.getStringAttribute('username2');
        },
        set: function (value) {
            this._username2 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentialsParametersOutputReference.prototype, "username2Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username2;
        },
        enumerable: false,
        configurable: true
    });
    return SecretRotationPostgresCredentialsParametersOutputReference;
}(cdktf.ComplexObject));
exports.SecretRotationPostgresCredentialsParametersOutputReference = SecretRotationPostgresCredentialsParametersOutputReference;
function secretRotationPostgresCredentialsRotateAtUtcToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        hours: cdktf.numberToTerraform(struct.hours),
        minutes: cdktf.numberToTerraform(struct.minutes),
    };
}
function secretRotationPostgresCredentialsRotateAtUtcToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        hours: {
            value: cdktf.numberToHclTerraform(struct.hours),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        minutes: {
            value: cdktf.numberToHclTerraform(struct.minutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var SecretRotationPostgresCredentialsRotateAtUtcOutputReference = /** @class */ (function (_super) {
    __extends(SecretRotationPostgresCredentialsRotateAtUtcOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretRotationPostgresCredentialsRotateAtUtcOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretRotationPostgresCredentialsRotateAtUtcOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._hours !== undefined) {
                hasAnyValues = true;
                internalValueResult.hours = this._hours;
            }
            if (this._minutes !== undefined) {
                hasAnyValues = true;
                internalValueResult.minutes = this._minutes;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._hours = undefined;
                this._minutes = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._hours = value.hours;
                this._minutes = value.minutes;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentialsRotateAtUtcOutputReference.prototype, "hours", {
        get: function () {
            return this.getNumberAttribute('hours');
        },
        set: function (value) {
            this._hours = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationPostgresCredentialsRotateAtUtcOutputReference.prototype.resetHours = function () {
        this._hours = undefined;
    };
    Object.defineProperty(SecretRotationPostgresCredentialsRotateAtUtcOutputReference.prototype, "hoursInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hours;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentialsRotateAtUtcOutputReference.prototype, "minutes", {
        get: function () {
            return this.getNumberAttribute('minutes');
        },
        set: function (value) {
            this._minutes = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationPostgresCredentialsRotateAtUtcOutputReference.prototype.resetMinutes = function () {
        this._minutes = undefined;
    };
    Object.defineProperty(SecretRotationPostgresCredentialsRotateAtUtcOutputReference.prototype, "minutesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minutes;
        },
        enumerable: false,
        configurable: true
    });
    return SecretRotationPostgresCredentialsRotateAtUtcOutputReference;
}(cdktf.ComplexObject));
exports.SecretRotationPostgresCredentialsRotateAtUtcOutputReference = SecretRotationPostgresCredentialsRotateAtUtcOutputReference;
function secretRotationPostgresCredentialsSecretsMappingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        password: cdktf.stringToTerraform(struct.password),
        username: cdktf.stringToTerraform(struct.username),
    };
}
function secretRotationPostgresCredentialsSecretsMappingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        password: {
            value: cdktf.stringToHclTerraform(struct.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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
var SecretRotationPostgresCredentialsSecretsMappingOutputReference = /** @class */ (function (_super) {
    __extends(SecretRotationPostgresCredentialsSecretsMappingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretRotationPostgresCredentialsSecretsMappingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretRotationPostgresCredentialsSecretsMappingOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._password !== undefined) {
                hasAnyValues = true;
                internalValueResult.password = this._password;
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
                this._password = undefined;
                this._username = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._password = value.password;
                this._username = value.username;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentialsSecretsMappingOutputReference.prototype, "password", {
        get: function () {
            return this.getStringAttribute('password');
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentialsSecretsMappingOutputReference.prototype, "passwordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentialsSecretsMappingOutputReference.prototype, "username", {
        get: function () {
            return this.getStringAttribute('username');
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentialsSecretsMappingOutputReference.prototype, "usernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    return SecretRotationPostgresCredentialsSecretsMappingOutputReference;
}(cdktf.ComplexObject));
exports.SecretRotationPostgresCredentialsSecretsMappingOutputReference = SecretRotationPostgresCredentialsSecretsMappingOutputReference;
function secretRotationPostgresCredentialsTemporaryParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function secretRotationPostgresCredentialsTemporaryParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var SecretRotationPostgresCredentialsTemporaryParametersOutputReference = /** @class */ (function (_super) {
    __extends(SecretRotationPostgresCredentialsTemporaryParametersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretRotationPostgresCredentialsTemporaryParametersOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretRotationPostgresCredentialsTemporaryParametersOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
            }
        },
        enumerable: false,
        configurable: true
    });
    return SecretRotationPostgresCredentialsTemporaryParametersOutputReference;
}(cdktf.ComplexObject));
exports.SecretRotationPostgresCredentialsTemporaryParametersOutputReference = SecretRotationPostgresCredentialsTemporaryParametersOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_postgres_credentials infisical_secret_rotation_postgres_credentials}
*/
var SecretRotationPostgresCredentials = /** @class */ (function (_super) {
    __extends(SecretRotationPostgresCredentials, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_postgres_credentials infisical_secret_rotation_postgres_credentials} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretRotationPostgresCredentialsConfig
    */
    function SecretRotationPostgresCredentials(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_secret_rotation_postgres_credentials',
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
        // parameters - computed: false, optional: false, required: true
        _this._parameters = new SecretRotationPostgresCredentialsParametersOutputReference(_this, "parameters");
        // rotate_at_utc - computed: true, optional: true, required: false
        _this._rotateAtUtc = new SecretRotationPostgresCredentialsRotateAtUtcOutputReference(_this, "rotate_at_utc");
        // secrets_mapping - computed: false, optional: false, required: true
        _this._secretsMapping = new SecretRotationPostgresCredentialsSecretsMappingOutputReference(_this, "secrets_mapping");
        // temporary_parameters - computed: false, optional: true, required: false
        _this._temporaryParameters = new SecretRotationPostgresCredentialsTemporaryParametersOutputReference(_this, "temporary_parameters");
        _this._autoRotationEnabled = config.autoRotationEnabled;
        _this._connectionId = config.connectionId;
        _this._description = config.description;
        _this._environment = config.environment;
        _this._name = config.name;
        _this._parameters.internalValue = config.parameters;
        _this._projectId = config.projectId;
        _this._rotateAtUtc.internalValue = config.rotateAtUtc;
        _this._rotationInterval = config.rotationInterval;
        _this._secretPath = config.secretPath;
        _this._secretsMapping.internalValue = config.secretsMapping;
        _this._temporaryParameters.internalValue = config.temporaryParameters;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SecretRotationPostgresCredentials resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretRotationPostgresCredentials to import
    * @param importFromId The id of the existing SecretRotationPostgresCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_postgres_credentials#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretRotationPostgresCredentials to import is found
    */
    SecretRotationPostgresCredentials.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_rotation_postgres_credentials", importId: importFromId, provider: provider });
    };
    Object.defineProperty(SecretRotationPostgresCredentials.prototype, "autoRotationEnabled", {
        get: function () {
            return this.getBooleanAttribute('auto_rotation_enabled');
        },
        set: function (value) {
            this._autoRotationEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationPostgresCredentials.prototype.resetAutoRotationEnabled = function () {
        this._autoRotationEnabled = undefined;
    };
    Object.defineProperty(SecretRotationPostgresCredentials.prototype, "autoRotationEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoRotationEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentials.prototype, "connectionId", {
        get: function () {
            return this.getStringAttribute('connection_id');
        },
        set: function (value) {
            this._connectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentials.prototype, "connectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentials.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationPostgresCredentials.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(SecretRotationPostgresCredentials.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentials.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentials.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentials.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentials.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentials.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentials.prototype, "parameters", {
        get: function () {
            return this._parameters;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationPostgresCredentials.prototype.putParameters = function (value) {
        this._parameters.internalValue = value;
    };
    Object.defineProperty(SecretRotationPostgresCredentials.prototype, "parametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameters.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentials.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentials.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentials.prototype, "rotateAtUtc", {
        get: function () {
            return this._rotateAtUtc;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationPostgresCredentials.prototype.putRotateAtUtc = function (value) {
        this._rotateAtUtc.internalValue = value;
    };
    SecretRotationPostgresCredentials.prototype.resetRotateAtUtc = function () {
        this._rotateAtUtc.internalValue = undefined;
    };
    Object.defineProperty(SecretRotationPostgresCredentials.prototype, "rotateAtUtcInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rotateAtUtc.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentials.prototype, "rotationInterval", {
        get: function () {
            return this.getNumberAttribute('rotation_interval');
        },
        set: function (value) {
            this._rotationInterval = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationPostgresCredentials.prototype.resetRotationInterval = function () {
        this._rotationInterval = undefined;
    };
    Object.defineProperty(SecretRotationPostgresCredentials.prototype, "rotationIntervalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rotationInterval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentials.prototype, "secretPath", {
        get: function () {
            return this.getStringAttribute('secret_path');
        },
        set: function (value) {
            this._secretPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentials.prototype, "secretPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentials.prototype, "secretsMapping", {
        get: function () {
            return this._secretsMapping;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationPostgresCredentials.prototype.putSecretsMapping = function (value) {
        this._secretsMapping.internalValue = value;
    };
    Object.defineProperty(SecretRotationPostgresCredentials.prototype, "secretsMappingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretsMapping.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationPostgresCredentials.prototype, "temporaryParameters", {
        get: function () {
            return this._temporaryParameters;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationPostgresCredentials.prototype.putTemporaryParameters = function (value) {
        this._temporaryParameters.internalValue = value;
    };
    SecretRotationPostgresCredentials.prototype.resetTemporaryParameters = function () {
        this._temporaryParameters.internalValue = undefined;
    };
    Object.defineProperty(SecretRotationPostgresCredentials.prototype, "temporaryParametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._temporaryParameters.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SecretRotationPostgresCredentials.prototype.synthesizeAttributes = function () {
        return {
            auto_rotation_enabled: cdktf.booleanToTerraform(this._autoRotationEnabled),
            connection_id: cdktf.stringToTerraform(this._connectionId),
            description: cdktf.stringToTerraform(this._description),
            environment: cdktf.stringToTerraform(this._environment),
            name: cdktf.stringToTerraform(this._name),
            parameters: secretRotationPostgresCredentialsParametersToTerraform(this._parameters.internalValue),
            project_id: cdktf.stringToTerraform(this._projectId),
            rotate_at_utc: secretRotationPostgresCredentialsRotateAtUtcToTerraform(this._rotateAtUtc.internalValue),
            rotation_interval: cdktf.numberToTerraform(this._rotationInterval),
            secret_path: cdktf.stringToTerraform(this._secretPath),
            secrets_mapping: secretRotationPostgresCredentialsSecretsMappingToTerraform(this._secretsMapping.internalValue),
            temporary_parameters: secretRotationPostgresCredentialsTemporaryParametersToTerraform(this._temporaryParameters.internalValue),
        };
    };
    SecretRotationPostgresCredentials.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            auto_rotation_enabled: {
                value: cdktf.booleanToHclTerraform(this._autoRotationEnabled),
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
            parameters: {
                value: secretRotationPostgresCredentialsParametersToHclTerraform(this._parameters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretRotationPostgresCredentialsParameters",
            },
            project_id: {
                value: cdktf.stringToHclTerraform(this._projectId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rotate_at_utc: {
                value: secretRotationPostgresCredentialsRotateAtUtcToHclTerraform(this._rotateAtUtc.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretRotationPostgresCredentialsRotateAtUtc",
            },
            rotation_interval: {
                value: cdktf.numberToHclTerraform(this._rotationInterval),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            secret_path: {
                value: cdktf.stringToHclTerraform(this._secretPath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secrets_mapping: {
                value: secretRotationPostgresCredentialsSecretsMappingToHclTerraform(this._secretsMapping.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretRotationPostgresCredentialsSecretsMapping",
            },
            temporary_parameters: {
                value: secretRotationPostgresCredentialsTemporaryParametersToHclTerraform(this._temporaryParameters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretRotationPostgresCredentialsTemporaryParameters",
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
    SecretRotationPostgresCredentials.tfResourceType = "infisical_secret_rotation_postgres_credentials";
    return SecretRotationPostgresCredentials;
}(cdktf.TerraformResource));
exports.SecretRotationPostgresCredentials = SecretRotationPostgresCredentials;
