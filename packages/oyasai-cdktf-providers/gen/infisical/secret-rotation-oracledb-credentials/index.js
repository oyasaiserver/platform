"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_oracledb_credentials
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
exports.SecretRotationOracledbCredentials = exports.SecretRotationOracledbCredentialsTemporaryParametersOutputReference = exports.SecretRotationOracledbCredentialsSecretsMappingOutputReference = exports.SecretRotationOracledbCredentialsRotateAtUtcOutputReference = exports.SecretRotationOracledbCredentialsParametersOutputReference = void 0;
exports.secretRotationOracledbCredentialsParametersToTerraform = secretRotationOracledbCredentialsParametersToTerraform;
exports.secretRotationOracledbCredentialsParametersToHclTerraform = secretRotationOracledbCredentialsParametersToHclTerraform;
exports.secretRotationOracledbCredentialsRotateAtUtcToTerraform = secretRotationOracledbCredentialsRotateAtUtcToTerraform;
exports.secretRotationOracledbCredentialsRotateAtUtcToHclTerraform = secretRotationOracledbCredentialsRotateAtUtcToHclTerraform;
exports.secretRotationOracledbCredentialsSecretsMappingToTerraform = secretRotationOracledbCredentialsSecretsMappingToTerraform;
exports.secretRotationOracledbCredentialsSecretsMappingToHclTerraform = secretRotationOracledbCredentialsSecretsMappingToHclTerraform;
exports.secretRotationOracledbCredentialsTemporaryParametersToTerraform = secretRotationOracledbCredentialsTemporaryParametersToTerraform;
exports.secretRotationOracledbCredentialsTemporaryParametersToHclTerraform = secretRotationOracledbCredentialsTemporaryParametersToHclTerraform;
var cdktf = require("cdktf");
function secretRotationOracledbCredentialsParametersToTerraform(struct) {
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
function secretRotationOracledbCredentialsParametersToHclTerraform(struct) {
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
var SecretRotationOracledbCredentialsParametersOutputReference = /** @class */ (function (_super) {
    __extends(SecretRotationOracledbCredentialsParametersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretRotationOracledbCredentialsParametersOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretRotationOracledbCredentialsParametersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(SecretRotationOracledbCredentialsParametersOutputReference.prototype, "username1", {
        get: function () {
            return this.getStringAttribute('username1');
        },
        set: function (value) {
            this._username1 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationOracledbCredentialsParametersOutputReference.prototype, "username1Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationOracledbCredentialsParametersOutputReference.prototype, "username2", {
        get: function () {
            return this.getStringAttribute('username2');
        },
        set: function (value) {
            this._username2 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationOracledbCredentialsParametersOutputReference.prototype, "username2Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username2;
        },
        enumerable: false,
        configurable: true
    });
    return SecretRotationOracledbCredentialsParametersOutputReference;
}(cdktf.ComplexObject));
exports.SecretRotationOracledbCredentialsParametersOutputReference = SecretRotationOracledbCredentialsParametersOutputReference;
function secretRotationOracledbCredentialsRotateAtUtcToTerraform(struct) {
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
function secretRotationOracledbCredentialsRotateAtUtcToHclTerraform(struct) {
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
var SecretRotationOracledbCredentialsRotateAtUtcOutputReference = /** @class */ (function (_super) {
    __extends(SecretRotationOracledbCredentialsRotateAtUtcOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretRotationOracledbCredentialsRotateAtUtcOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretRotationOracledbCredentialsRotateAtUtcOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(SecretRotationOracledbCredentialsRotateAtUtcOutputReference.prototype, "hours", {
        get: function () {
            return this.getNumberAttribute('hours');
        },
        set: function (value) {
            this._hours = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationOracledbCredentialsRotateAtUtcOutputReference.prototype.resetHours = function () {
        this._hours = undefined;
    };
    Object.defineProperty(SecretRotationOracledbCredentialsRotateAtUtcOutputReference.prototype, "hoursInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hours;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationOracledbCredentialsRotateAtUtcOutputReference.prototype, "minutes", {
        get: function () {
            return this.getNumberAttribute('minutes');
        },
        set: function (value) {
            this._minutes = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationOracledbCredentialsRotateAtUtcOutputReference.prototype.resetMinutes = function () {
        this._minutes = undefined;
    };
    Object.defineProperty(SecretRotationOracledbCredentialsRotateAtUtcOutputReference.prototype, "minutesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minutes;
        },
        enumerable: false,
        configurable: true
    });
    return SecretRotationOracledbCredentialsRotateAtUtcOutputReference;
}(cdktf.ComplexObject));
exports.SecretRotationOracledbCredentialsRotateAtUtcOutputReference = SecretRotationOracledbCredentialsRotateAtUtcOutputReference;
function secretRotationOracledbCredentialsSecretsMappingToTerraform(struct) {
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
function secretRotationOracledbCredentialsSecretsMappingToHclTerraform(struct) {
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
var SecretRotationOracledbCredentialsSecretsMappingOutputReference = /** @class */ (function (_super) {
    __extends(SecretRotationOracledbCredentialsSecretsMappingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretRotationOracledbCredentialsSecretsMappingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretRotationOracledbCredentialsSecretsMappingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(SecretRotationOracledbCredentialsSecretsMappingOutputReference.prototype, "password", {
        get: function () {
            return this.getStringAttribute('password');
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationOracledbCredentialsSecretsMappingOutputReference.prototype, "passwordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationOracledbCredentialsSecretsMappingOutputReference.prototype, "username", {
        get: function () {
            return this.getStringAttribute('username');
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationOracledbCredentialsSecretsMappingOutputReference.prototype, "usernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    return SecretRotationOracledbCredentialsSecretsMappingOutputReference;
}(cdktf.ComplexObject));
exports.SecretRotationOracledbCredentialsSecretsMappingOutputReference = SecretRotationOracledbCredentialsSecretsMappingOutputReference;
function secretRotationOracledbCredentialsTemporaryParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function secretRotationOracledbCredentialsTemporaryParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var SecretRotationOracledbCredentialsTemporaryParametersOutputReference = /** @class */ (function (_super) {
    __extends(SecretRotationOracledbCredentialsTemporaryParametersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretRotationOracledbCredentialsTemporaryParametersOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretRotationOracledbCredentialsTemporaryParametersOutputReference.prototype, "internalValue", {
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
    return SecretRotationOracledbCredentialsTemporaryParametersOutputReference;
}(cdktf.ComplexObject));
exports.SecretRotationOracledbCredentialsTemporaryParametersOutputReference = SecretRotationOracledbCredentialsTemporaryParametersOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_oracledb_credentials infisical_secret_rotation_oracledb_credentials}
*/
var SecretRotationOracledbCredentials = /** @class */ (function (_super) {
    __extends(SecretRotationOracledbCredentials, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_oracledb_credentials infisical_secret_rotation_oracledb_credentials} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretRotationOracledbCredentialsConfig
    */
    function SecretRotationOracledbCredentials(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_secret_rotation_oracledb_credentials',
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
        _this._parameters = new SecretRotationOracledbCredentialsParametersOutputReference(_this, "parameters");
        // rotate_at_utc - computed: true, optional: true, required: false
        _this._rotateAtUtc = new SecretRotationOracledbCredentialsRotateAtUtcOutputReference(_this, "rotate_at_utc");
        // secrets_mapping - computed: false, optional: false, required: true
        _this._secretsMapping = new SecretRotationOracledbCredentialsSecretsMappingOutputReference(_this, "secrets_mapping");
        // temporary_parameters - computed: false, optional: true, required: false
        _this._temporaryParameters = new SecretRotationOracledbCredentialsTemporaryParametersOutputReference(_this, "temporary_parameters");
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
    * Generates CDKTF code for importing a SecretRotationOracledbCredentials resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretRotationOracledbCredentials to import
    * @param importFromId The id of the existing SecretRotationOracledbCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_oracledb_credentials#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretRotationOracledbCredentials to import is found
    */
    SecretRotationOracledbCredentials.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_rotation_oracledb_credentials", importId: importFromId, provider: provider });
    };
    Object.defineProperty(SecretRotationOracledbCredentials.prototype, "autoRotationEnabled", {
        get: function () {
            return this.getBooleanAttribute('auto_rotation_enabled');
        },
        set: function (value) {
            this._autoRotationEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationOracledbCredentials.prototype.resetAutoRotationEnabled = function () {
        this._autoRotationEnabled = undefined;
    };
    Object.defineProperty(SecretRotationOracledbCredentials.prototype, "autoRotationEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoRotationEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationOracledbCredentials.prototype, "connectionId", {
        get: function () {
            return this.getStringAttribute('connection_id');
        },
        set: function (value) {
            this._connectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationOracledbCredentials.prototype, "connectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationOracledbCredentials.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationOracledbCredentials.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(SecretRotationOracledbCredentials.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationOracledbCredentials.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationOracledbCredentials.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationOracledbCredentials.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationOracledbCredentials.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationOracledbCredentials.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationOracledbCredentials.prototype, "parameters", {
        get: function () {
            return this._parameters;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationOracledbCredentials.prototype.putParameters = function (value) {
        this._parameters.internalValue = value;
    };
    Object.defineProperty(SecretRotationOracledbCredentials.prototype, "parametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameters.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationOracledbCredentials.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationOracledbCredentials.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationOracledbCredentials.prototype, "rotateAtUtc", {
        get: function () {
            return this._rotateAtUtc;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationOracledbCredentials.prototype.putRotateAtUtc = function (value) {
        this._rotateAtUtc.internalValue = value;
    };
    SecretRotationOracledbCredentials.prototype.resetRotateAtUtc = function () {
        this._rotateAtUtc.internalValue = undefined;
    };
    Object.defineProperty(SecretRotationOracledbCredentials.prototype, "rotateAtUtcInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rotateAtUtc.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationOracledbCredentials.prototype, "rotationInterval", {
        get: function () {
            return this.getNumberAttribute('rotation_interval');
        },
        set: function (value) {
            this._rotationInterval = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationOracledbCredentials.prototype.resetRotationInterval = function () {
        this._rotationInterval = undefined;
    };
    Object.defineProperty(SecretRotationOracledbCredentials.prototype, "rotationIntervalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rotationInterval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationOracledbCredentials.prototype, "secretPath", {
        get: function () {
            return this.getStringAttribute('secret_path');
        },
        set: function (value) {
            this._secretPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationOracledbCredentials.prototype, "secretPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationOracledbCredentials.prototype, "secretsMapping", {
        get: function () {
            return this._secretsMapping;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationOracledbCredentials.prototype.putSecretsMapping = function (value) {
        this._secretsMapping.internalValue = value;
    };
    Object.defineProperty(SecretRotationOracledbCredentials.prototype, "secretsMappingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretsMapping.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationOracledbCredentials.prototype, "temporaryParameters", {
        get: function () {
            return this._temporaryParameters;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationOracledbCredentials.prototype.putTemporaryParameters = function (value) {
        this._temporaryParameters.internalValue = value;
    };
    SecretRotationOracledbCredentials.prototype.resetTemporaryParameters = function () {
        this._temporaryParameters.internalValue = undefined;
    };
    Object.defineProperty(SecretRotationOracledbCredentials.prototype, "temporaryParametersInput", {
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
    SecretRotationOracledbCredentials.prototype.synthesizeAttributes = function () {
        return {
            auto_rotation_enabled: cdktf.booleanToTerraform(this._autoRotationEnabled),
            connection_id: cdktf.stringToTerraform(this._connectionId),
            description: cdktf.stringToTerraform(this._description),
            environment: cdktf.stringToTerraform(this._environment),
            name: cdktf.stringToTerraform(this._name),
            parameters: secretRotationOracledbCredentialsParametersToTerraform(this._parameters.internalValue),
            project_id: cdktf.stringToTerraform(this._projectId),
            rotate_at_utc: secretRotationOracledbCredentialsRotateAtUtcToTerraform(this._rotateAtUtc.internalValue),
            rotation_interval: cdktf.numberToTerraform(this._rotationInterval),
            secret_path: cdktf.stringToTerraform(this._secretPath),
            secrets_mapping: secretRotationOracledbCredentialsSecretsMappingToTerraform(this._secretsMapping.internalValue),
            temporary_parameters: secretRotationOracledbCredentialsTemporaryParametersToTerraform(this._temporaryParameters.internalValue),
        };
    };
    SecretRotationOracledbCredentials.prototype.synthesizeHclAttributes = function () {
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
                value: secretRotationOracledbCredentialsParametersToHclTerraform(this._parameters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretRotationOracledbCredentialsParameters",
            },
            project_id: {
                value: cdktf.stringToHclTerraform(this._projectId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rotate_at_utc: {
                value: secretRotationOracledbCredentialsRotateAtUtcToHclTerraform(this._rotateAtUtc.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretRotationOracledbCredentialsRotateAtUtc",
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
                value: secretRotationOracledbCredentialsSecretsMappingToHclTerraform(this._secretsMapping.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretRotationOracledbCredentialsSecretsMapping",
            },
            temporary_parameters: {
                value: secretRotationOracledbCredentialsTemporaryParametersToHclTerraform(this._temporaryParameters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretRotationOracledbCredentialsTemporaryParameters",
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
    SecretRotationOracledbCredentials.tfResourceType = "infisical_secret_rotation_oracledb_credentials";
    return SecretRotationOracledbCredentials;
}(cdktf.TerraformResource));
exports.SecretRotationOracledbCredentials = SecretRotationOracledbCredentials;
