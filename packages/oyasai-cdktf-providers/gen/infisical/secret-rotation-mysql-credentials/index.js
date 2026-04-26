"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mysql_credentials
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
exports.SecretRotationMysqlCredentials = exports.SecretRotationMysqlCredentialsTemporaryParametersOutputReference = exports.SecretRotationMysqlCredentialsSecretsMappingOutputReference = exports.SecretRotationMysqlCredentialsRotateAtUtcOutputReference = exports.SecretRotationMysqlCredentialsParametersOutputReference = void 0;
exports.secretRotationMysqlCredentialsParametersToTerraform = secretRotationMysqlCredentialsParametersToTerraform;
exports.secretRotationMysqlCredentialsParametersToHclTerraform = secretRotationMysqlCredentialsParametersToHclTerraform;
exports.secretRotationMysqlCredentialsRotateAtUtcToTerraform = secretRotationMysqlCredentialsRotateAtUtcToTerraform;
exports.secretRotationMysqlCredentialsRotateAtUtcToHclTerraform = secretRotationMysqlCredentialsRotateAtUtcToHclTerraform;
exports.secretRotationMysqlCredentialsSecretsMappingToTerraform = secretRotationMysqlCredentialsSecretsMappingToTerraform;
exports.secretRotationMysqlCredentialsSecretsMappingToHclTerraform = secretRotationMysqlCredentialsSecretsMappingToHclTerraform;
exports.secretRotationMysqlCredentialsTemporaryParametersToTerraform = secretRotationMysqlCredentialsTemporaryParametersToTerraform;
exports.secretRotationMysqlCredentialsTemporaryParametersToHclTerraform = secretRotationMysqlCredentialsTemporaryParametersToHclTerraform;
var cdktf = require("cdktf");
function secretRotationMysqlCredentialsParametersToTerraform(struct) {
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
function secretRotationMysqlCredentialsParametersToHclTerraform(struct) {
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
var SecretRotationMysqlCredentialsParametersOutputReference = /** @class */ (function (_super) {
    __extends(SecretRotationMysqlCredentialsParametersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretRotationMysqlCredentialsParametersOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretRotationMysqlCredentialsParametersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(SecretRotationMysqlCredentialsParametersOutputReference.prototype, "username1", {
        get: function () {
            return this.getStringAttribute('username1');
        },
        set: function (value) {
            this._username1 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationMysqlCredentialsParametersOutputReference.prototype, "username1Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationMysqlCredentialsParametersOutputReference.prototype, "username2", {
        get: function () {
            return this.getStringAttribute('username2');
        },
        set: function (value) {
            this._username2 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationMysqlCredentialsParametersOutputReference.prototype, "username2Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username2;
        },
        enumerable: false,
        configurable: true
    });
    return SecretRotationMysqlCredentialsParametersOutputReference;
}(cdktf.ComplexObject));
exports.SecretRotationMysqlCredentialsParametersOutputReference = SecretRotationMysqlCredentialsParametersOutputReference;
function secretRotationMysqlCredentialsRotateAtUtcToTerraform(struct) {
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
function secretRotationMysqlCredentialsRotateAtUtcToHclTerraform(struct) {
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
var SecretRotationMysqlCredentialsRotateAtUtcOutputReference = /** @class */ (function (_super) {
    __extends(SecretRotationMysqlCredentialsRotateAtUtcOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretRotationMysqlCredentialsRotateAtUtcOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretRotationMysqlCredentialsRotateAtUtcOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(SecretRotationMysqlCredentialsRotateAtUtcOutputReference.prototype, "hours", {
        get: function () {
            return this.getNumberAttribute('hours');
        },
        set: function (value) {
            this._hours = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationMysqlCredentialsRotateAtUtcOutputReference.prototype.resetHours = function () {
        this._hours = undefined;
    };
    Object.defineProperty(SecretRotationMysqlCredentialsRotateAtUtcOutputReference.prototype, "hoursInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hours;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationMysqlCredentialsRotateAtUtcOutputReference.prototype, "minutes", {
        get: function () {
            return this.getNumberAttribute('minutes');
        },
        set: function (value) {
            this._minutes = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationMysqlCredentialsRotateAtUtcOutputReference.prototype.resetMinutes = function () {
        this._minutes = undefined;
    };
    Object.defineProperty(SecretRotationMysqlCredentialsRotateAtUtcOutputReference.prototype, "minutesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minutes;
        },
        enumerable: false,
        configurable: true
    });
    return SecretRotationMysqlCredentialsRotateAtUtcOutputReference;
}(cdktf.ComplexObject));
exports.SecretRotationMysqlCredentialsRotateAtUtcOutputReference = SecretRotationMysqlCredentialsRotateAtUtcOutputReference;
function secretRotationMysqlCredentialsSecretsMappingToTerraform(struct) {
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
function secretRotationMysqlCredentialsSecretsMappingToHclTerraform(struct) {
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
var SecretRotationMysqlCredentialsSecretsMappingOutputReference = /** @class */ (function (_super) {
    __extends(SecretRotationMysqlCredentialsSecretsMappingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretRotationMysqlCredentialsSecretsMappingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretRotationMysqlCredentialsSecretsMappingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(SecretRotationMysqlCredentialsSecretsMappingOutputReference.prototype, "password", {
        get: function () {
            return this.getStringAttribute('password');
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationMysqlCredentialsSecretsMappingOutputReference.prototype, "passwordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationMysqlCredentialsSecretsMappingOutputReference.prototype, "username", {
        get: function () {
            return this.getStringAttribute('username');
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationMysqlCredentialsSecretsMappingOutputReference.prototype, "usernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    return SecretRotationMysqlCredentialsSecretsMappingOutputReference;
}(cdktf.ComplexObject));
exports.SecretRotationMysqlCredentialsSecretsMappingOutputReference = SecretRotationMysqlCredentialsSecretsMappingOutputReference;
function secretRotationMysqlCredentialsTemporaryParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function secretRotationMysqlCredentialsTemporaryParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var SecretRotationMysqlCredentialsTemporaryParametersOutputReference = /** @class */ (function (_super) {
    __extends(SecretRotationMysqlCredentialsTemporaryParametersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretRotationMysqlCredentialsTemporaryParametersOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretRotationMysqlCredentialsTemporaryParametersOutputReference.prototype, "internalValue", {
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
    return SecretRotationMysqlCredentialsTemporaryParametersOutputReference;
}(cdktf.ComplexObject));
exports.SecretRotationMysqlCredentialsTemporaryParametersOutputReference = SecretRotationMysqlCredentialsTemporaryParametersOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mysql_credentials infisical_secret_rotation_mysql_credentials}
*/
var SecretRotationMysqlCredentials = /** @class */ (function (_super) {
    __extends(SecretRotationMysqlCredentials, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mysql_credentials infisical_secret_rotation_mysql_credentials} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretRotationMysqlCredentialsConfig
    */
    function SecretRotationMysqlCredentials(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_secret_rotation_mysql_credentials',
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
        _this._parameters = new SecretRotationMysqlCredentialsParametersOutputReference(_this, "parameters");
        // rotate_at_utc - computed: true, optional: true, required: false
        _this._rotateAtUtc = new SecretRotationMysqlCredentialsRotateAtUtcOutputReference(_this, "rotate_at_utc");
        // secrets_mapping - computed: false, optional: false, required: true
        _this._secretsMapping = new SecretRotationMysqlCredentialsSecretsMappingOutputReference(_this, "secrets_mapping");
        // temporary_parameters - computed: false, optional: true, required: false
        _this._temporaryParameters = new SecretRotationMysqlCredentialsTemporaryParametersOutputReference(_this, "temporary_parameters");
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
    * Generates CDKTF code for importing a SecretRotationMysqlCredentials resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretRotationMysqlCredentials to import
    * @param importFromId The id of the existing SecretRotationMysqlCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_mysql_credentials#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretRotationMysqlCredentials to import is found
    */
    SecretRotationMysqlCredentials.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_rotation_mysql_credentials", importId: importFromId, provider: provider });
    };
    Object.defineProperty(SecretRotationMysqlCredentials.prototype, "autoRotationEnabled", {
        get: function () {
            return this.getBooleanAttribute('auto_rotation_enabled');
        },
        set: function (value) {
            this._autoRotationEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationMysqlCredentials.prototype.resetAutoRotationEnabled = function () {
        this._autoRotationEnabled = undefined;
    };
    Object.defineProperty(SecretRotationMysqlCredentials.prototype, "autoRotationEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoRotationEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationMysqlCredentials.prototype, "connectionId", {
        get: function () {
            return this.getStringAttribute('connection_id');
        },
        set: function (value) {
            this._connectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationMysqlCredentials.prototype, "connectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationMysqlCredentials.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationMysqlCredentials.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(SecretRotationMysqlCredentials.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationMysqlCredentials.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationMysqlCredentials.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationMysqlCredentials.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationMysqlCredentials.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationMysqlCredentials.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationMysqlCredentials.prototype, "parameters", {
        get: function () {
            return this._parameters;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationMysqlCredentials.prototype.putParameters = function (value) {
        this._parameters.internalValue = value;
    };
    Object.defineProperty(SecretRotationMysqlCredentials.prototype, "parametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameters.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationMysqlCredentials.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationMysqlCredentials.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationMysqlCredentials.prototype, "rotateAtUtc", {
        get: function () {
            return this._rotateAtUtc;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationMysqlCredentials.prototype.putRotateAtUtc = function (value) {
        this._rotateAtUtc.internalValue = value;
    };
    SecretRotationMysqlCredentials.prototype.resetRotateAtUtc = function () {
        this._rotateAtUtc.internalValue = undefined;
    };
    Object.defineProperty(SecretRotationMysqlCredentials.prototype, "rotateAtUtcInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rotateAtUtc.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationMysqlCredentials.prototype, "rotationInterval", {
        get: function () {
            return this.getNumberAttribute('rotation_interval');
        },
        set: function (value) {
            this._rotationInterval = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationMysqlCredentials.prototype.resetRotationInterval = function () {
        this._rotationInterval = undefined;
    };
    Object.defineProperty(SecretRotationMysqlCredentials.prototype, "rotationIntervalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rotationInterval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationMysqlCredentials.prototype, "secretPath", {
        get: function () {
            return this.getStringAttribute('secret_path');
        },
        set: function (value) {
            this._secretPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationMysqlCredentials.prototype, "secretPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationMysqlCredentials.prototype, "secretsMapping", {
        get: function () {
            return this._secretsMapping;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationMysqlCredentials.prototype.putSecretsMapping = function (value) {
        this._secretsMapping.internalValue = value;
    };
    Object.defineProperty(SecretRotationMysqlCredentials.prototype, "secretsMappingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretsMapping.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationMysqlCredentials.prototype, "temporaryParameters", {
        get: function () {
            return this._temporaryParameters;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationMysqlCredentials.prototype.putTemporaryParameters = function (value) {
        this._temporaryParameters.internalValue = value;
    };
    SecretRotationMysqlCredentials.prototype.resetTemporaryParameters = function () {
        this._temporaryParameters.internalValue = undefined;
    };
    Object.defineProperty(SecretRotationMysqlCredentials.prototype, "temporaryParametersInput", {
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
    SecretRotationMysqlCredentials.prototype.synthesizeAttributes = function () {
        return {
            auto_rotation_enabled: cdktf.booleanToTerraform(this._autoRotationEnabled),
            connection_id: cdktf.stringToTerraform(this._connectionId),
            description: cdktf.stringToTerraform(this._description),
            environment: cdktf.stringToTerraform(this._environment),
            name: cdktf.stringToTerraform(this._name),
            parameters: secretRotationMysqlCredentialsParametersToTerraform(this._parameters.internalValue),
            project_id: cdktf.stringToTerraform(this._projectId),
            rotate_at_utc: secretRotationMysqlCredentialsRotateAtUtcToTerraform(this._rotateAtUtc.internalValue),
            rotation_interval: cdktf.numberToTerraform(this._rotationInterval),
            secret_path: cdktf.stringToTerraform(this._secretPath),
            secrets_mapping: secretRotationMysqlCredentialsSecretsMappingToTerraform(this._secretsMapping.internalValue),
            temporary_parameters: secretRotationMysqlCredentialsTemporaryParametersToTerraform(this._temporaryParameters.internalValue),
        };
    };
    SecretRotationMysqlCredentials.prototype.synthesizeHclAttributes = function () {
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
                value: secretRotationMysqlCredentialsParametersToHclTerraform(this._parameters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretRotationMysqlCredentialsParameters",
            },
            project_id: {
                value: cdktf.stringToHclTerraform(this._projectId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rotate_at_utc: {
                value: secretRotationMysqlCredentialsRotateAtUtcToHclTerraform(this._rotateAtUtc.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretRotationMysqlCredentialsRotateAtUtc",
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
                value: secretRotationMysqlCredentialsSecretsMappingToHclTerraform(this._secretsMapping.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretRotationMysqlCredentialsSecretsMapping",
            },
            temporary_parameters: {
                value: secretRotationMysqlCredentialsTemporaryParametersToHclTerraform(this._temporaryParameters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretRotationMysqlCredentialsTemporaryParameters",
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
    SecretRotationMysqlCredentials.tfResourceType = "infisical_secret_rotation_mysql_credentials";
    return SecretRotationMysqlCredentials;
}(cdktf.TerraformResource));
exports.SecretRotationMysqlCredentials = SecretRotationMysqlCredentials;
