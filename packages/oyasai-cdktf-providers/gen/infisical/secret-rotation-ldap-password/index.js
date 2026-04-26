"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password
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
exports.SecretRotationLdapPassword = exports.SecretRotationLdapPasswordTemporaryParametersOutputReference = exports.SecretRotationLdapPasswordSecretsMappingOutputReference = exports.SecretRotationLdapPasswordRotateAtUtcOutputReference = exports.SecretRotationLdapPasswordParametersOutputReference = exports.SecretRotationLdapPasswordParametersPasswordRequirementsOutputReference = exports.SecretRotationLdapPasswordParametersPasswordRequirementsRequiredOutputReference = void 0;
exports.secretRotationLdapPasswordParametersPasswordRequirementsRequiredToTerraform = secretRotationLdapPasswordParametersPasswordRequirementsRequiredToTerraform;
exports.secretRotationLdapPasswordParametersPasswordRequirementsRequiredToHclTerraform = secretRotationLdapPasswordParametersPasswordRequirementsRequiredToHclTerraform;
exports.secretRotationLdapPasswordParametersPasswordRequirementsToTerraform = secretRotationLdapPasswordParametersPasswordRequirementsToTerraform;
exports.secretRotationLdapPasswordParametersPasswordRequirementsToHclTerraform = secretRotationLdapPasswordParametersPasswordRequirementsToHclTerraform;
exports.secretRotationLdapPasswordParametersToTerraform = secretRotationLdapPasswordParametersToTerraform;
exports.secretRotationLdapPasswordParametersToHclTerraform = secretRotationLdapPasswordParametersToHclTerraform;
exports.secretRotationLdapPasswordRotateAtUtcToTerraform = secretRotationLdapPasswordRotateAtUtcToTerraform;
exports.secretRotationLdapPasswordRotateAtUtcToHclTerraform = secretRotationLdapPasswordRotateAtUtcToHclTerraform;
exports.secretRotationLdapPasswordSecretsMappingToTerraform = secretRotationLdapPasswordSecretsMappingToTerraform;
exports.secretRotationLdapPasswordSecretsMappingToHclTerraform = secretRotationLdapPasswordSecretsMappingToHclTerraform;
exports.secretRotationLdapPasswordTemporaryParametersToTerraform = secretRotationLdapPasswordTemporaryParametersToTerraform;
exports.secretRotationLdapPasswordTemporaryParametersToHclTerraform = secretRotationLdapPasswordTemporaryParametersToHclTerraform;
var cdktf = require("cdktf");
function secretRotationLdapPasswordParametersPasswordRequirementsRequiredToTerraform(struct) {
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
function secretRotationLdapPasswordParametersPasswordRequirementsRequiredToHclTerraform(struct) {
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
var SecretRotationLdapPasswordParametersPasswordRequirementsRequiredOutputReference = /** @class */ (function (_super) {
    __extends(SecretRotationLdapPasswordParametersPasswordRequirementsRequiredOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretRotationLdapPasswordParametersPasswordRequirementsRequiredOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretRotationLdapPasswordParametersPasswordRequirementsRequiredOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(SecretRotationLdapPasswordParametersPasswordRequirementsRequiredOutputReference.prototype, "digits", {
        get: function () {
            return this.getNumberAttribute('digits');
        },
        set: function (value) {
            this._digits = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPasswordParametersPasswordRequirementsRequiredOutputReference.prototype, "digitsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._digits;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPasswordParametersPasswordRequirementsRequiredOutputReference.prototype, "lowercase", {
        get: function () {
            return this.getNumberAttribute('lowercase');
        },
        set: function (value) {
            this._lowercase = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPasswordParametersPasswordRequirementsRequiredOutputReference.prototype, "lowercaseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lowercase;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPasswordParametersPasswordRequirementsRequiredOutputReference.prototype, "symbols", {
        get: function () {
            return this.getNumberAttribute('symbols');
        },
        set: function (value) {
            this._symbols = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPasswordParametersPasswordRequirementsRequiredOutputReference.prototype, "symbolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._symbols;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPasswordParametersPasswordRequirementsRequiredOutputReference.prototype, "uppercase", {
        get: function () {
            return this.getNumberAttribute('uppercase');
        },
        set: function (value) {
            this._uppercase = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPasswordParametersPasswordRequirementsRequiredOutputReference.prototype, "uppercaseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._uppercase;
        },
        enumerable: false,
        configurable: true
    });
    return SecretRotationLdapPasswordParametersPasswordRequirementsRequiredOutputReference;
}(cdktf.ComplexObject));
exports.SecretRotationLdapPasswordParametersPasswordRequirementsRequiredOutputReference = SecretRotationLdapPasswordParametersPasswordRequirementsRequiredOutputReference;
function secretRotationLdapPasswordParametersPasswordRequirementsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed_symbols: cdktf.stringToTerraform(struct.allowedSymbols),
        length: cdktf.numberToTerraform(struct.length),
        required: secretRotationLdapPasswordParametersPasswordRequirementsRequiredToTerraform(struct.required),
    };
}
function secretRotationLdapPasswordParametersPasswordRequirementsToHclTerraform(struct) {
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
            value: secretRotationLdapPasswordParametersPasswordRequirementsRequiredToHclTerraform(struct.required),
            isBlock: true,
            type: "struct",
            storageClassType: "SecretRotationLdapPasswordParametersPasswordRequirementsRequired",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var SecretRotationLdapPasswordParametersPasswordRequirementsOutputReference = /** @class */ (function (_super) {
    __extends(SecretRotationLdapPasswordParametersPasswordRequirementsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretRotationLdapPasswordParametersPasswordRequirementsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // required - computed: false, optional: false, required: true
        _this._required = new SecretRotationLdapPasswordParametersPasswordRequirementsRequiredOutputReference(_this, "required");
        return _this;
    }
    Object.defineProperty(SecretRotationLdapPasswordParametersPasswordRequirementsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(SecretRotationLdapPasswordParametersPasswordRequirementsOutputReference.prototype, "allowedSymbols", {
        get: function () {
            return this.getStringAttribute('allowed_symbols');
        },
        set: function (value) {
            this._allowedSymbols = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationLdapPasswordParametersPasswordRequirementsOutputReference.prototype.resetAllowedSymbols = function () {
        this._allowedSymbols = undefined;
    };
    Object.defineProperty(SecretRotationLdapPasswordParametersPasswordRequirementsOutputReference.prototype, "allowedSymbolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedSymbols;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPasswordParametersPasswordRequirementsOutputReference.prototype, "length", {
        get: function () {
            return this.getNumberAttribute('length');
        },
        set: function (value) {
            this._length = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPasswordParametersPasswordRequirementsOutputReference.prototype, "lengthInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPasswordParametersPasswordRequirementsOutputReference.prototype, "required", {
        get: function () {
            return this._required;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationLdapPasswordParametersPasswordRequirementsOutputReference.prototype.putRequired = function (value) {
        this._required.internalValue = value;
    };
    Object.defineProperty(SecretRotationLdapPasswordParametersPasswordRequirementsOutputReference.prototype, "requiredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._required.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return SecretRotationLdapPasswordParametersPasswordRequirementsOutputReference;
}(cdktf.ComplexObject));
exports.SecretRotationLdapPasswordParametersPasswordRequirementsOutputReference = SecretRotationLdapPasswordParametersPasswordRequirementsOutputReference;
function secretRotationLdapPasswordParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dn: cdktf.stringToTerraform(struct.dn),
        password_requirements: secretRotationLdapPasswordParametersPasswordRequirementsToTerraform(struct.passwordRequirements),
        rotation_method: cdktf.stringToTerraform(struct.rotationMethod),
    };
}
function secretRotationLdapPasswordParametersToHclTerraform(struct) {
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
        password_requirements: {
            value: secretRotationLdapPasswordParametersPasswordRequirementsToHclTerraform(struct.passwordRequirements),
            isBlock: true,
            type: "struct",
            storageClassType: "SecretRotationLdapPasswordParametersPasswordRequirements",
        },
        rotation_method: {
            value: cdktf.stringToHclTerraform(struct.rotationMethod),
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
var SecretRotationLdapPasswordParametersOutputReference = /** @class */ (function (_super) {
    __extends(SecretRotationLdapPasswordParametersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretRotationLdapPasswordParametersOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // password_requirements - computed: false, optional: false, required: true
        _this._passwordRequirements = new SecretRotationLdapPasswordParametersPasswordRequirementsOutputReference(_this, "password_requirements");
        return _this;
    }
    Object.defineProperty(SecretRotationLdapPasswordParametersOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._dn !== undefined) {
                hasAnyValues = true;
                internalValueResult.dn = this._dn;
            }
            if (((_a = this._passwordRequirements) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.passwordRequirements = (_b = this._passwordRequirements) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._rotationMethod !== undefined) {
                hasAnyValues = true;
                internalValueResult.rotationMethod = this._rotationMethod;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._dn = undefined;
                this._passwordRequirements.internalValue = undefined;
                this._rotationMethod = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._dn = value.dn;
                this._passwordRequirements.internalValue = value.passwordRequirements;
                this._rotationMethod = value.rotationMethod;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPasswordParametersOutputReference.prototype, "dn", {
        get: function () {
            return this.getStringAttribute('dn');
        },
        set: function (value) {
            this._dn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPasswordParametersOutputReference.prototype, "dnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPasswordParametersOutputReference.prototype, "passwordRequirements", {
        get: function () {
            return this._passwordRequirements;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationLdapPasswordParametersOutputReference.prototype.putPasswordRequirements = function (value) {
        this._passwordRequirements.internalValue = value;
    };
    Object.defineProperty(SecretRotationLdapPasswordParametersOutputReference.prototype, "passwordRequirementsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._passwordRequirements.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPasswordParametersOutputReference.prototype, "rotationMethod", {
        get: function () {
            return this.getStringAttribute('rotation_method');
        },
        set: function (value) {
            this._rotationMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationLdapPasswordParametersOutputReference.prototype.resetRotationMethod = function () {
        this._rotationMethod = undefined;
    };
    Object.defineProperty(SecretRotationLdapPasswordParametersOutputReference.prototype, "rotationMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rotationMethod;
        },
        enumerable: false,
        configurable: true
    });
    return SecretRotationLdapPasswordParametersOutputReference;
}(cdktf.ComplexObject));
exports.SecretRotationLdapPasswordParametersOutputReference = SecretRotationLdapPasswordParametersOutputReference;
function secretRotationLdapPasswordRotateAtUtcToTerraform(struct) {
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
function secretRotationLdapPasswordRotateAtUtcToHclTerraform(struct) {
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
var SecretRotationLdapPasswordRotateAtUtcOutputReference = /** @class */ (function (_super) {
    __extends(SecretRotationLdapPasswordRotateAtUtcOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretRotationLdapPasswordRotateAtUtcOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretRotationLdapPasswordRotateAtUtcOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(SecretRotationLdapPasswordRotateAtUtcOutputReference.prototype, "hours", {
        get: function () {
            return this.getNumberAttribute('hours');
        },
        set: function (value) {
            this._hours = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationLdapPasswordRotateAtUtcOutputReference.prototype.resetHours = function () {
        this._hours = undefined;
    };
    Object.defineProperty(SecretRotationLdapPasswordRotateAtUtcOutputReference.prototype, "hoursInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hours;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPasswordRotateAtUtcOutputReference.prototype, "minutes", {
        get: function () {
            return this.getNumberAttribute('minutes');
        },
        set: function (value) {
            this._minutes = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationLdapPasswordRotateAtUtcOutputReference.prototype.resetMinutes = function () {
        this._minutes = undefined;
    };
    Object.defineProperty(SecretRotationLdapPasswordRotateAtUtcOutputReference.prototype, "minutesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minutes;
        },
        enumerable: false,
        configurable: true
    });
    return SecretRotationLdapPasswordRotateAtUtcOutputReference;
}(cdktf.ComplexObject));
exports.SecretRotationLdapPasswordRotateAtUtcOutputReference = SecretRotationLdapPasswordRotateAtUtcOutputReference;
function secretRotationLdapPasswordSecretsMappingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dn: cdktf.stringToTerraform(struct.dn),
        password: cdktf.stringToTerraform(struct.password),
    };
}
function secretRotationLdapPasswordSecretsMappingToHclTerraform(struct) {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var SecretRotationLdapPasswordSecretsMappingOutputReference = /** @class */ (function (_super) {
    __extends(SecretRotationLdapPasswordSecretsMappingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretRotationLdapPasswordSecretsMappingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretRotationLdapPasswordSecretsMappingOutputReference.prototype, "internalValue", {
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
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._dn = undefined;
                this._password = undefined;
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
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPasswordSecretsMappingOutputReference.prototype, "dn", {
        get: function () {
            return this.getStringAttribute('dn');
        },
        set: function (value) {
            this._dn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPasswordSecretsMappingOutputReference.prototype, "dnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPasswordSecretsMappingOutputReference.prototype, "password", {
        get: function () {
            return this.getStringAttribute('password');
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPasswordSecretsMappingOutputReference.prototype, "passwordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    return SecretRotationLdapPasswordSecretsMappingOutputReference;
}(cdktf.ComplexObject));
exports.SecretRotationLdapPasswordSecretsMappingOutputReference = SecretRotationLdapPasswordSecretsMappingOutputReference;
function secretRotationLdapPasswordTemporaryParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        password: cdktf.stringToTerraform(struct.password),
    };
}
function secretRotationLdapPasswordTemporaryParametersToHclTerraform(struct) {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var SecretRotationLdapPasswordTemporaryParametersOutputReference = /** @class */ (function (_super) {
    __extends(SecretRotationLdapPasswordTemporaryParametersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SecretRotationLdapPasswordTemporaryParametersOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SecretRotationLdapPasswordTemporaryParametersOutputReference.prototype, "internalValue", {
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
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._password = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._password = value.password;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPasswordTemporaryParametersOutputReference.prototype, "password", {
        get: function () {
            return this.getStringAttribute('password');
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationLdapPasswordTemporaryParametersOutputReference.prototype.resetPassword = function () {
        this._password = undefined;
    };
    Object.defineProperty(SecretRotationLdapPasswordTemporaryParametersOutputReference.prototype, "passwordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    return SecretRotationLdapPasswordTemporaryParametersOutputReference;
}(cdktf.ComplexObject));
exports.SecretRotationLdapPasswordTemporaryParametersOutputReference = SecretRotationLdapPasswordTemporaryParametersOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password infisical_secret_rotation_ldap_password}
*/
var SecretRotationLdapPassword = /** @class */ (function (_super) {
    __extends(SecretRotationLdapPassword, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password infisical_secret_rotation_ldap_password} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretRotationLdapPasswordConfig
    */
    function SecretRotationLdapPassword(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_secret_rotation_ldap_password',
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
        _this._parameters = new SecretRotationLdapPasswordParametersOutputReference(_this, "parameters");
        // rotate_at_utc - computed: true, optional: true, required: false
        _this._rotateAtUtc = new SecretRotationLdapPasswordRotateAtUtcOutputReference(_this, "rotate_at_utc");
        // secrets_mapping - computed: false, optional: false, required: true
        _this._secretsMapping = new SecretRotationLdapPasswordSecretsMappingOutputReference(_this, "secrets_mapping");
        // temporary_parameters - computed: false, optional: true, required: false
        _this._temporaryParameters = new SecretRotationLdapPasswordTemporaryParametersOutputReference(_this, "temporary_parameters");
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
    * Generates CDKTF code for importing a SecretRotationLdapPassword resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretRotationLdapPassword to import
    * @param importFromId The id of the existing SecretRotationLdapPassword that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretRotationLdapPassword to import is found
    */
    SecretRotationLdapPassword.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_rotation_ldap_password", importId: importFromId, provider: provider });
    };
    Object.defineProperty(SecretRotationLdapPassword.prototype, "autoRotationEnabled", {
        get: function () {
            return this.getBooleanAttribute('auto_rotation_enabled');
        },
        set: function (value) {
            this._autoRotationEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationLdapPassword.prototype.resetAutoRotationEnabled = function () {
        this._autoRotationEnabled = undefined;
    };
    Object.defineProperty(SecretRotationLdapPassword.prototype, "autoRotationEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoRotationEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPassword.prototype, "connectionId", {
        get: function () {
            return this.getStringAttribute('connection_id');
        },
        set: function (value) {
            this._connectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPassword.prototype, "connectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPassword.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationLdapPassword.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(SecretRotationLdapPassword.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPassword.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPassword.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPassword.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPassword.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPassword.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPassword.prototype, "parameters", {
        get: function () {
            return this._parameters;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationLdapPassword.prototype.putParameters = function (value) {
        this._parameters.internalValue = value;
    };
    Object.defineProperty(SecretRotationLdapPassword.prototype, "parametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameters.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPassword.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPassword.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPassword.prototype, "rotateAtUtc", {
        get: function () {
            return this._rotateAtUtc;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationLdapPassword.prototype.putRotateAtUtc = function (value) {
        this._rotateAtUtc.internalValue = value;
    };
    SecretRotationLdapPassword.prototype.resetRotateAtUtc = function () {
        this._rotateAtUtc.internalValue = undefined;
    };
    Object.defineProperty(SecretRotationLdapPassword.prototype, "rotateAtUtcInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rotateAtUtc.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPassword.prototype, "rotationInterval", {
        get: function () {
            return this.getNumberAttribute('rotation_interval');
        },
        set: function (value) {
            this._rotationInterval = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationLdapPassword.prototype.resetRotationInterval = function () {
        this._rotationInterval = undefined;
    };
    Object.defineProperty(SecretRotationLdapPassword.prototype, "rotationIntervalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rotationInterval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPassword.prototype, "secretPath", {
        get: function () {
            return this.getStringAttribute('secret_path');
        },
        set: function (value) {
            this._secretPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPassword.prototype, "secretPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPassword.prototype, "secretsMapping", {
        get: function () {
            return this._secretsMapping;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationLdapPassword.prototype.putSecretsMapping = function (value) {
        this._secretsMapping.internalValue = value;
    };
    Object.defineProperty(SecretRotationLdapPassword.prototype, "secretsMappingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretsMapping.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretRotationLdapPassword.prototype, "temporaryParameters", {
        get: function () {
            return this._temporaryParameters;
        },
        enumerable: false,
        configurable: true
    });
    SecretRotationLdapPassword.prototype.putTemporaryParameters = function (value) {
        this._temporaryParameters.internalValue = value;
    };
    SecretRotationLdapPassword.prototype.resetTemporaryParameters = function () {
        this._temporaryParameters.internalValue = undefined;
    };
    Object.defineProperty(SecretRotationLdapPassword.prototype, "temporaryParametersInput", {
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
    SecretRotationLdapPassword.prototype.synthesizeAttributes = function () {
        return {
            auto_rotation_enabled: cdktf.booleanToTerraform(this._autoRotationEnabled),
            connection_id: cdktf.stringToTerraform(this._connectionId),
            description: cdktf.stringToTerraform(this._description),
            environment: cdktf.stringToTerraform(this._environment),
            name: cdktf.stringToTerraform(this._name),
            parameters: secretRotationLdapPasswordParametersToTerraform(this._parameters.internalValue),
            project_id: cdktf.stringToTerraform(this._projectId),
            rotate_at_utc: secretRotationLdapPasswordRotateAtUtcToTerraform(this._rotateAtUtc.internalValue),
            rotation_interval: cdktf.numberToTerraform(this._rotationInterval),
            secret_path: cdktf.stringToTerraform(this._secretPath),
            secrets_mapping: secretRotationLdapPasswordSecretsMappingToTerraform(this._secretsMapping.internalValue),
            temporary_parameters: secretRotationLdapPasswordTemporaryParametersToTerraform(this._temporaryParameters.internalValue),
        };
    };
    SecretRotationLdapPassword.prototype.synthesizeHclAttributes = function () {
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
                value: secretRotationLdapPasswordParametersToHclTerraform(this._parameters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretRotationLdapPasswordParameters",
            },
            project_id: {
                value: cdktf.stringToHclTerraform(this._projectId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rotate_at_utc: {
                value: secretRotationLdapPasswordRotateAtUtcToHclTerraform(this._rotateAtUtc.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretRotationLdapPasswordRotateAtUtc",
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
                value: secretRotationLdapPasswordSecretsMappingToHclTerraform(this._secretsMapping.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretRotationLdapPasswordSecretsMapping",
            },
            temporary_parameters: {
                value: secretRotationLdapPasswordTemporaryParametersToHclTerraform(this._temporaryParameters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretRotationLdapPasswordTemporaryParameters",
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
    SecretRotationLdapPassword.tfResourceType = "infisical_secret_rotation_ldap_password";
    return SecretRotationLdapPassword;
}(cdktf.TerraformResource));
exports.SecretRotationLdapPassword = SecretRotationLdapPassword;
