"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database
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
exports.DynamicSecretSqlDatabase = exports.DynamicSecretSqlDatabaseMetadataList = exports.DynamicSecretSqlDatabaseMetadataOutputReference = exports.DynamicSecretSqlDatabaseConfigurationOutputReference = exports.DynamicSecretSqlDatabaseConfigurationPasswordRequirementsOutputReference = exports.DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredOutputReference = void 0;
exports.dynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredToTerraform = dynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredToTerraform;
exports.dynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredToHclTerraform = dynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredToHclTerraform;
exports.dynamicSecretSqlDatabaseConfigurationPasswordRequirementsToTerraform = dynamicSecretSqlDatabaseConfigurationPasswordRequirementsToTerraform;
exports.dynamicSecretSqlDatabaseConfigurationPasswordRequirementsToHclTerraform = dynamicSecretSqlDatabaseConfigurationPasswordRequirementsToHclTerraform;
exports.dynamicSecretSqlDatabaseConfigurationToTerraform = dynamicSecretSqlDatabaseConfigurationToTerraform;
exports.dynamicSecretSqlDatabaseConfigurationToHclTerraform = dynamicSecretSqlDatabaseConfigurationToHclTerraform;
exports.dynamicSecretSqlDatabaseMetadataToTerraform = dynamicSecretSqlDatabaseMetadataToTerraform;
exports.dynamicSecretSqlDatabaseMetadataToHclTerraform = dynamicSecretSqlDatabaseMetadataToHclTerraform;
var cdktf = require("cdktf");
function dynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        digits: cdktf.numberToTerraform(struct.digits),
        lowercase: cdktf.numberToTerraform(struct.lowercase),
        symbols: cdktf.numberToTerraform(struct.symbols),
        uppercase: cdktf.numberToTerraform(struct.uppercase),
    };
}
function dynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        digits: {
            value: cdktf.numberToHclTerraform(struct.digits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        lowercase: {
            value: cdktf.numberToHclTerraform(struct.lowercase),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        symbols: {
            value: cdktf.numberToHclTerraform(struct.symbols),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        uppercase: {
            value: cdktf.numberToHclTerraform(struct.uppercase),
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
var DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredOutputReference = /** @class */ (function (_super) {
    __extends(DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._digits !== undefined) {
                hasAnyValues = true;
                internalValueResult.digits = this._digits;
            }
            if (this._lowercase !== undefined) {
                hasAnyValues = true;
                internalValueResult.lowercase = this._lowercase;
            }
            if (this._symbols !== undefined) {
                hasAnyValues = true;
                internalValueResult.symbols = this._symbols;
            }
            if (this._uppercase !== undefined) {
                hasAnyValues = true;
                internalValueResult.uppercase = this._uppercase;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._digits = undefined;
                this._lowercase = undefined;
                this._symbols = undefined;
                this._uppercase = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._digits = value.digits;
                this._lowercase = value.lowercase;
                this._symbols = value.symbols;
                this._uppercase = value.uppercase;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredOutputReference.prototype, "digits", {
        get: function () {
            return this.getNumberAttribute('digits');
        },
        set: function (value) {
            this._digits = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredOutputReference.prototype, "digitsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._digits;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredOutputReference.prototype, "lowercase", {
        get: function () {
            return this.getNumberAttribute('lowercase');
        },
        set: function (value) {
            this._lowercase = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredOutputReference.prototype, "lowercaseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lowercase;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredOutputReference.prototype, "symbols", {
        get: function () {
            return this.getNumberAttribute('symbols');
        },
        set: function (value) {
            this._symbols = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredOutputReference.prototype, "symbolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._symbols;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredOutputReference.prototype, "uppercase", {
        get: function () {
            return this.getNumberAttribute('uppercase');
        },
        set: function (value) {
            this._uppercase = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredOutputReference.prototype, "uppercaseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._uppercase;
        },
        enumerable: false,
        configurable: true
    });
    return DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredOutputReference;
}(cdktf.ComplexObject));
exports.DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredOutputReference = DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredOutputReference;
function dynamicSecretSqlDatabaseConfigurationPasswordRequirementsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed_symbols: cdktf.stringToTerraform(struct.allowedSymbols),
        length: cdktf.numberToTerraform(struct.length),
        required: dynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredToTerraform(struct.required),
    };
}
function dynamicSecretSqlDatabaseConfigurationPasswordRequirementsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        allowed_symbols: {
            value: cdktf.stringToHclTerraform(struct.allowedSymbols),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        length: {
            value: cdktf.numberToHclTerraform(struct.length),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        required: {
            value: dynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredToHclTerraform(struct.required),
            isBlock: true,
            type: "struct",
            storageClassType: "DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequired",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var DynamicSecretSqlDatabaseConfigurationPasswordRequirementsOutputReference = /** @class */ (function (_super) {
    __extends(DynamicSecretSqlDatabaseConfigurationPasswordRequirementsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DynamicSecretSqlDatabaseConfigurationPasswordRequirementsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // required - computed: false, optional: false, required: true
        _this._required = new DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredOutputReference(_this, "required");
        return _this;
    }
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationPasswordRequirementsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._allowedSymbols !== undefined) {
                hasAnyValues = true;
                internalValueResult.allowedSymbols = this._allowedSymbols;
            }
            if (this._length !== undefined) {
                hasAnyValues = true;
                internalValueResult.length = this._length;
            }
            if (((_a = this._required) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.required = (_b = this._required) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._allowedSymbols = undefined;
                this._length = undefined;
                this._required.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._allowedSymbols = value.allowedSymbols;
                this._length = value.length;
                this._required.internalValue = value.required;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationPasswordRequirementsOutputReference.prototype, "allowedSymbols", {
        get: function () {
            return this.getStringAttribute('allowed_symbols');
        },
        set: function (value) {
            this._allowedSymbols = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretSqlDatabaseConfigurationPasswordRequirementsOutputReference.prototype.resetAllowedSymbols = function () {
        this._allowedSymbols = undefined;
    };
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationPasswordRequirementsOutputReference.prototype, "allowedSymbolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedSymbols;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationPasswordRequirementsOutputReference.prototype, "length", {
        get: function () {
            return this.getNumberAttribute('length');
        },
        set: function (value) {
            this._length = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationPasswordRequirementsOutputReference.prototype, "lengthInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationPasswordRequirementsOutputReference.prototype, "required", {
        get: function () {
            return this._required;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretSqlDatabaseConfigurationPasswordRequirementsOutputReference.prototype.putRequired = function (value) {
        this._required.internalValue = value;
    };
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationPasswordRequirementsOutputReference.prototype, "requiredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._required.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return DynamicSecretSqlDatabaseConfigurationPasswordRequirementsOutputReference;
}(cdktf.ComplexObject));
exports.DynamicSecretSqlDatabaseConfigurationPasswordRequirementsOutputReference = DynamicSecretSqlDatabaseConfigurationPasswordRequirementsOutputReference;
function dynamicSecretSqlDatabaseConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ca: cdktf.stringToTerraform(struct.ca),
        client: cdktf.stringToTerraform(struct.client),
        creation_statement: cdktf.stringToTerraform(struct.creationStatement),
        database: cdktf.stringToTerraform(struct.database),
        gateway_id: cdktf.stringToTerraform(struct.gatewayId),
        host: cdktf.stringToTerraform(struct.host),
        password: cdktf.stringToTerraform(struct.password),
        password_requirements: dynamicSecretSqlDatabaseConfigurationPasswordRequirementsToTerraform(struct.passwordRequirements),
        port: cdktf.numberToTerraform(struct.port),
        renew_statement: cdktf.stringToTerraform(struct.renewStatement),
        revocation_statement: cdktf.stringToTerraform(struct.revocationStatement),
        username: cdktf.stringToTerraform(struct.username),
    };
}
function dynamicSecretSqlDatabaseConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ca: {
            value: cdktf.stringToHclTerraform(struct.ca),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client: {
            value: cdktf.stringToHclTerraform(struct.client),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        creation_statement: {
            value: cdktf.stringToHclTerraform(struct.creationStatement),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database: {
            value: cdktf.stringToHclTerraform(struct.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        gateway_id: {
            value: cdktf.stringToHclTerraform(struct.gatewayId),
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
        password_requirements: {
            value: dynamicSecretSqlDatabaseConfigurationPasswordRequirementsToHclTerraform(struct.passwordRequirements),
            isBlock: true,
            type: "struct",
            storageClassType: "DynamicSecretSqlDatabaseConfigurationPasswordRequirements",
        },
        port: {
            value: cdktf.numberToHclTerraform(struct.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        renew_statement: {
            value: cdktf.stringToHclTerraform(struct.renewStatement),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        revocation_statement: {
            value: cdktf.stringToHclTerraform(struct.revocationStatement),
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
var DynamicSecretSqlDatabaseConfigurationOutputReference = /** @class */ (function (_super) {
    __extends(DynamicSecretSqlDatabaseConfigurationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DynamicSecretSqlDatabaseConfigurationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // password_requirements - computed: false, optional: true, required: false
        _this._passwordRequirements = new DynamicSecretSqlDatabaseConfigurationPasswordRequirementsOutputReference(_this, "password_requirements");
        return _this;
    }
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._ca !== undefined) {
                hasAnyValues = true;
                internalValueResult.ca = this._ca;
            }
            if (this._client !== undefined) {
                hasAnyValues = true;
                internalValueResult.client = this._client;
            }
            if (this._creationStatement !== undefined) {
                hasAnyValues = true;
                internalValueResult.creationStatement = this._creationStatement;
            }
            if (this._database !== undefined) {
                hasAnyValues = true;
                internalValueResult.database = this._database;
            }
            if (this._gatewayId !== undefined) {
                hasAnyValues = true;
                internalValueResult.gatewayId = this._gatewayId;
            }
            if (this._host !== undefined) {
                hasAnyValues = true;
                internalValueResult.host = this._host;
            }
            if (this._password !== undefined) {
                hasAnyValues = true;
                internalValueResult.password = this._password;
            }
            if (((_a = this._passwordRequirements) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.passwordRequirements = (_b = this._passwordRequirements) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._port !== undefined) {
                hasAnyValues = true;
                internalValueResult.port = this._port;
            }
            if (this._renewStatement !== undefined) {
                hasAnyValues = true;
                internalValueResult.renewStatement = this._renewStatement;
            }
            if (this._revocationStatement !== undefined) {
                hasAnyValues = true;
                internalValueResult.revocationStatement = this._revocationStatement;
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
                this._ca = undefined;
                this._client = undefined;
                this._creationStatement = undefined;
                this._database = undefined;
                this._gatewayId = undefined;
                this._host = undefined;
                this._password = undefined;
                this._passwordRequirements.internalValue = undefined;
                this._port = undefined;
                this._renewStatement = undefined;
                this._revocationStatement = undefined;
                this._username = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._ca = value.ca;
                this._client = value.client;
                this._creationStatement = value.creationStatement;
                this._database = value.database;
                this._gatewayId = value.gatewayId;
                this._host = value.host;
                this._password = value.password;
                this._passwordRequirements.internalValue = value.passwordRequirements;
                this._port = value.port;
                this._renewStatement = value.renewStatement;
                this._revocationStatement = value.revocationStatement;
                this._username = value.username;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationOutputReference.prototype, "ca", {
        get: function () {
            return this.getStringAttribute('ca');
        },
        set: function (value) {
            this._ca = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretSqlDatabaseConfigurationOutputReference.prototype.resetCa = function () {
        this._ca = undefined;
    };
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationOutputReference.prototype, "caInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationOutputReference.prototype, "client", {
        get: function () {
            return this.getStringAttribute('client');
        },
        set: function (value) {
            this._client = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationOutputReference.prototype, "clientInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._client;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationOutputReference.prototype, "creationStatement", {
        get: function () {
            return this.getStringAttribute('creation_statement');
        },
        set: function (value) {
            this._creationStatement = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationOutputReference.prototype, "creationStatementInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._creationStatement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationOutputReference.prototype, "database", {
        get: function () {
            return this.getStringAttribute('database');
        },
        set: function (value) {
            this._database = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationOutputReference.prototype, "databaseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._database;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationOutputReference.prototype, "gatewayId", {
        get: function () {
            return this.getStringAttribute('gateway_id');
        },
        set: function (value) {
            this._gatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretSqlDatabaseConfigurationOutputReference.prototype.resetGatewayId = function () {
        this._gatewayId = undefined;
    };
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationOutputReference.prototype, "gatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationOutputReference.prototype, "host", {
        get: function () {
            return this.getStringAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationOutputReference.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationOutputReference.prototype, "password", {
        get: function () {
            return this.getStringAttribute('password');
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationOutputReference.prototype, "passwordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationOutputReference.prototype, "passwordRequirements", {
        get: function () {
            return this._passwordRequirements;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretSqlDatabaseConfigurationOutputReference.prototype.putPasswordRequirements = function (value) {
        this._passwordRequirements.internalValue = value;
    };
    DynamicSecretSqlDatabaseConfigurationOutputReference.prototype.resetPasswordRequirements = function () {
        this._passwordRequirements.internalValue = undefined;
    };
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationOutputReference.prototype, "passwordRequirementsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._passwordRequirements.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationOutputReference.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationOutputReference.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationOutputReference.prototype, "renewStatement", {
        get: function () {
            return this.getStringAttribute('renew_statement');
        },
        set: function (value) {
            this._renewStatement = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretSqlDatabaseConfigurationOutputReference.prototype.resetRenewStatement = function () {
        this._renewStatement = undefined;
    };
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationOutputReference.prototype, "renewStatementInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._renewStatement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationOutputReference.prototype, "revocationStatement", {
        get: function () {
            return this.getStringAttribute('revocation_statement');
        },
        set: function (value) {
            this._revocationStatement = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationOutputReference.prototype, "revocationStatementInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._revocationStatement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationOutputReference.prototype, "username", {
        get: function () {
            return this.getStringAttribute('username');
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseConfigurationOutputReference.prototype, "usernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    return DynamicSecretSqlDatabaseConfigurationOutputReference;
}(cdktf.ComplexObject));
exports.DynamicSecretSqlDatabaseConfigurationOutputReference = DynamicSecretSqlDatabaseConfigurationOutputReference;
function dynamicSecretSqlDatabaseMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function dynamicSecretSqlDatabaseMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        key: {
            value: cdktf.stringToHclTerraform(struct.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
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
var DynamicSecretSqlDatabaseMetadataOutputReference = /** @class */ (function (_super) {
    __extends(DynamicSecretSqlDatabaseMetadataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DynamicSecretSqlDatabaseMetadataOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DynamicSecretSqlDatabaseMetadataOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._key !== undefined) {
                hasAnyValues = true;
                internalValueResult.key = this._key;
            }
            if (this._value !== undefined) {
                hasAnyValues = true;
                internalValueResult.value = this._value;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._key = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._key = value.key;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseMetadataOutputReference.prototype, "key", {
        get: function () {
            return this.getStringAttribute('key');
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseMetadataOutputReference.prototype, "keyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseMetadataOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabaseMetadataOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return DynamicSecretSqlDatabaseMetadataOutputReference;
}(cdktf.ComplexObject));
exports.DynamicSecretSqlDatabaseMetadataOutputReference = DynamicSecretSqlDatabaseMetadataOutputReference;
var DynamicSecretSqlDatabaseMetadataList = /** @class */ (function (_super) {
    __extends(DynamicSecretSqlDatabaseMetadataList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DynamicSecretSqlDatabaseMetadataList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DynamicSecretSqlDatabaseMetadataList.prototype.get = function (index) {
        return new DynamicSecretSqlDatabaseMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DynamicSecretSqlDatabaseMetadataList;
}(cdktf.ComplexList));
exports.DynamicSecretSqlDatabaseMetadataList = DynamicSecretSqlDatabaseMetadataList;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database infisical_dynamic_secret_sql_database}
*/
var DynamicSecretSqlDatabase = /** @class */ (function (_super) {
    __extends(DynamicSecretSqlDatabase, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database infisical_dynamic_secret_sql_database} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamicSecretSqlDatabaseConfig
    */
    function DynamicSecretSqlDatabase(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_dynamic_secret_sql_database',
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
        // configuration - computed: false, optional: false, required: true
        _this._configuration = new DynamicSecretSqlDatabaseConfigurationOutputReference(_this, "configuration");
        // metadata - computed: false, optional: true, required: false
        _this._metadata = new DynamicSecretSqlDatabaseMetadataList(_this, "metadata", true);
        _this._configuration.internalValue = config.configuration;
        _this._defaultTtl = config.defaultTtl;
        _this._environmentSlug = config.environmentSlug;
        _this._maxTtl = config.maxTtl;
        _this._metadata.internalValue = config.metadata;
        _this._name = config.name;
        _this._path = config.path;
        _this._projectSlug = config.projectSlug;
        _this._usernameTemplate = config.usernameTemplate;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DynamicSecretSqlDatabase resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DynamicSecretSqlDatabase to import
    * @param importFromId The id of the existing DynamicSecretSqlDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DynamicSecretSqlDatabase to import is found
    */
    DynamicSecretSqlDatabase.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_dynamic_secret_sql_database", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DynamicSecretSqlDatabase.prototype, "configuration", {
        get: function () {
            return this._configuration;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretSqlDatabase.prototype.putConfiguration = function (value) {
        this._configuration.internalValue = value;
    };
    Object.defineProperty(DynamicSecretSqlDatabase.prototype, "configurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configuration.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabase.prototype, "defaultTtl", {
        get: function () {
            return this.getStringAttribute('default_ttl');
        },
        set: function (value) {
            this._defaultTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabase.prototype, "defaultTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabase.prototype, "environmentSlug", {
        get: function () {
            return this.getStringAttribute('environment_slug');
        },
        set: function (value) {
            this._environmentSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabase.prototype, "environmentSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environmentSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabase.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabase.prototype, "maxTtl", {
        get: function () {
            return this.getStringAttribute('max_ttl');
        },
        set: function (value) {
            this._maxTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretSqlDatabase.prototype.resetMaxTtl = function () {
        this._maxTtl = undefined;
    };
    Object.defineProperty(DynamicSecretSqlDatabase.prototype, "maxTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabase.prototype, "metadata", {
        get: function () {
            return this._metadata;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretSqlDatabase.prototype.putMetadata = function (value) {
        this._metadata.internalValue = value;
    };
    DynamicSecretSqlDatabase.prototype.resetMetadata = function () {
        this._metadata.internalValue = undefined;
    };
    Object.defineProperty(DynamicSecretSqlDatabase.prototype, "metadataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metadata.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabase.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabase.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabase.prototype, "path", {
        get: function () {
            return this.getStringAttribute('path');
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabase.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabase.prototype, "projectSlug", {
        get: function () {
            return this.getStringAttribute('project_slug');
        },
        set: function (value) {
            this._projectSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabase.prototype, "projectSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretSqlDatabase.prototype, "usernameTemplate", {
        get: function () {
            return this.getStringAttribute('username_template');
        },
        set: function (value) {
            this._usernameTemplate = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretSqlDatabase.prototype.resetUsernameTemplate = function () {
        this._usernameTemplate = undefined;
    };
    Object.defineProperty(DynamicSecretSqlDatabase.prototype, "usernameTemplateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._usernameTemplate;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DynamicSecretSqlDatabase.prototype.synthesizeAttributes = function () {
        return {
            configuration: dynamicSecretSqlDatabaseConfigurationToTerraform(this._configuration.internalValue),
            default_ttl: cdktf.stringToTerraform(this._defaultTtl),
            environment_slug: cdktf.stringToTerraform(this._environmentSlug),
            max_ttl: cdktf.stringToTerraform(this._maxTtl),
            metadata: cdktf.listMapper(dynamicSecretSqlDatabaseMetadataToTerraform, false)(this._metadata.internalValue),
            name: cdktf.stringToTerraform(this._name),
            path: cdktf.stringToTerraform(this._path),
            project_slug: cdktf.stringToTerraform(this._projectSlug),
            username_template: cdktf.stringToTerraform(this._usernameTemplate),
        };
    };
    DynamicSecretSqlDatabase.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            configuration: {
                value: dynamicSecretSqlDatabaseConfigurationToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DynamicSecretSqlDatabaseConfiguration",
            },
            default_ttl: {
                value: cdktf.stringToHclTerraform(this._defaultTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment_slug: {
                value: cdktf.stringToHclTerraform(this._environmentSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_ttl: {
                value: cdktf.stringToHclTerraform(this._maxTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metadata: {
                value: cdktf.listMapperHcl(dynamicSecretSqlDatabaseMetadataToHclTerraform, false)(this._metadata.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "DynamicSecretSqlDatabaseMetadataList",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            path: {
                value: cdktf.stringToHclTerraform(this._path),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            project_slug: {
                value: cdktf.stringToHclTerraform(this._projectSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            username_template: {
                value: cdktf.stringToHclTerraform(this._usernameTemplate),
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
    DynamicSecretSqlDatabase.tfResourceType = "infisical_dynamic_secret_sql_database";
    return DynamicSecretSqlDatabase;
}(cdktf.TerraformResource));
exports.DynamicSecretSqlDatabase = DynamicSecretSqlDatabase;
