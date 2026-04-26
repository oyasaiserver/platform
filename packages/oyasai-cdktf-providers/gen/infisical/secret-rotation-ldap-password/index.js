// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function secretRotationLdapPasswordParametersPasswordRequirementsRequiredToTerraform(struct) {
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
export function secretRotationLdapPasswordParametersPasswordRequirementsRequiredToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class SecretRotationLdapPasswordParametersPasswordRequirementsRequiredOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
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
    }
    set internalValue(value) {
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
    }
    // digits - computed: false, optional: false, required: true
    _digits;
    get digits() {
        return this.getNumberAttribute('digits');
    }
    set digits(value) {
        this._digits = value;
    }
    // Temporarily expose input value. Use with caution.
    get digitsInput() {
        return this._digits;
    }
    // lowercase - computed: false, optional: false, required: true
    _lowercase;
    get lowercase() {
        return this.getNumberAttribute('lowercase');
    }
    set lowercase(value) {
        this._lowercase = value;
    }
    // Temporarily expose input value. Use with caution.
    get lowercaseInput() {
        return this._lowercase;
    }
    // symbols - computed: false, optional: false, required: true
    _symbols;
    get symbols() {
        return this.getNumberAttribute('symbols');
    }
    set symbols(value) {
        this._symbols = value;
    }
    // Temporarily expose input value. Use with caution.
    get symbolsInput() {
        return this._symbols;
    }
    // uppercase - computed: false, optional: false, required: true
    _uppercase;
    get uppercase() {
        return this.getNumberAttribute('uppercase');
    }
    set uppercase(value) {
        this._uppercase = value;
    }
    // Temporarily expose input value. Use with caution.
    get uppercaseInput() {
        return this._uppercase;
    }
}
export function secretRotationLdapPasswordParametersPasswordRequirementsToTerraform(struct) {
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
export function secretRotationLdapPasswordParametersPasswordRequirementsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class SecretRotationLdapPasswordParametersPasswordRequirementsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allowedSymbols !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedSymbols = this._allowedSymbols;
        }
        if (this._length !== undefined) {
            hasAnyValues = true;
            internalValueResult.length = this._length;
        }
        if (this._required?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    }
    // allowed_symbols - computed: false, optional: true, required: false
    _allowedSymbols;
    get allowedSymbols() {
        return this.getStringAttribute('allowed_symbols');
    }
    set allowedSymbols(value) {
        this._allowedSymbols = value;
    }
    resetAllowedSymbols() {
        this._allowedSymbols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedSymbolsInput() {
        return this._allowedSymbols;
    }
    // length - computed: false, optional: false, required: true
    _length;
    get length() {
        return this.getNumberAttribute('length');
    }
    set length(value) {
        this._length = value;
    }
    // Temporarily expose input value. Use with caution.
    get lengthInput() {
        return this._length;
    }
    // required - computed: false, optional: false, required: true
    _required = new SecretRotationLdapPasswordParametersPasswordRequirementsRequiredOutputReference(this, "required");
    get required() {
        return this._required;
    }
    putRequired(value) {
        this._required.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get requiredInput() {
        return this._required.internalValue;
    }
}
export function secretRotationLdapPasswordParametersToTerraform(struct) {
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
export function secretRotationLdapPasswordParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class SecretRotationLdapPasswordParametersOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._dn !== undefined) {
            hasAnyValues = true;
            internalValueResult.dn = this._dn;
        }
        if (this._passwordRequirements?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.passwordRequirements = this._passwordRequirements?.internalValue;
        }
        if (this._rotationMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.rotationMethod = this._rotationMethod;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    }
    // dn - computed: false, optional: false, required: true
    _dn;
    get dn() {
        return this.getStringAttribute('dn');
    }
    set dn(value) {
        this._dn = value;
    }
    // Temporarily expose input value. Use with caution.
    get dnInput() {
        return this._dn;
    }
    // password_requirements - computed: false, optional: false, required: true
    _passwordRequirements = new SecretRotationLdapPasswordParametersPasswordRequirementsOutputReference(this, "password_requirements");
    get passwordRequirements() {
        return this._passwordRequirements;
    }
    putPasswordRequirements(value) {
        this._passwordRequirements.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get passwordRequirementsInput() {
        return this._passwordRequirements.internalValue;
    }
    // rotation_method - computed: false, optional: true, required: false
    _rotationMethod;
    get rotationMethod() {
        return this.getStringAttribute('rotation_method');
    }
    set rotationMethod(value) {
        this._rotationMethod = value;
    }
    resetRotationMethod() {
        this._rotationMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rotationMethodInput() {
        return this._rotationMethod;
    }
}
export function secretRotationLdapPasswordRotateAtUtcToTerraform(struct) {
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
export function secretRotationLdapPasswordRotateAtUtcToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class SecretRotationLdapPasswordRotateAtUtcOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._hours !== undefined) {
            hasAnyValues = true;
            internalValueResult.hours = this._hours;
        }
        if (this._minutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.minutes = this._minutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    }
    // hours - computed: true, optional: true, required: false
    _hours;
    get hours() {
        return this.getNumberAttribute('hours');
    }
    set hours(value) {
        this._hours = value;
    }
    resetHours() {
        this._hours = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hoursInput() {
        return this._hours;
    }
    // minutes - computed: true, optional: true, required: false
    _minutes;
    get minutes() {
        return this.getNumberAttribute('minutes');
    }
    set minutes(value) {
        this._minutes = value;
    }
    resetMinutes() {
        this._minutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minutesInput() {
        return this._minutes;
    }
}
export function secretRotationLdapPasswordSecretsMappingToTerraform(struct) {
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
export function secretRotationLdapPasswordSecretsMappingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class SecretRotationLdapPasswordSecretsMappingOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._dn !== undefined) {
            hasAnyValues = true;
            internalValueResult.dn = this._dn;
        }
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    }
    // dn - computed: false, optional: false, required: true
    _dn;
    get dn() {
        return this.getStringAttribute('dn');
    }
    set dn(value) {
        this._dn = value;
    }
    // Temporarily expose input value. Use with caution.
    get dnInput() {
        return this._dn;
    }
    // password - computed: false, optional: false, required: true
    _password;
    get password() {
        return this.getStringAttribute('password');
    }
    set password(value) {
        this._password = value;
    }
    // Temporarily expose input value. Use with caution.
    get passwordInput() {
        return this._password;
    }
}
export function secretRotationLdapPasswordTemporaryParametersToTerraform(struct) {
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
export function secretRotationLdapPasswordTemporaryParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        password: {
            value: cdktf.stringToHclTerraform(struct.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class SecretRotationLdapPasswordTemporaryParametersOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    }
    // password - computed: false, optional: true, required: false
    _password;
    get password() {
        return this.getStringAttribute('password');
    }
    set password(value) {
        this._password = value;
    }
    resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get passwordInput() {
        return this._password;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_ldap_password infisical_secret_rotation_ldap_password}
*/
export class SecretRotationLdapPassword extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_secret_rotation_ldap_password";
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
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_rotation_ldap_password", importId: importFromId, provider });
    }
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
    constructor(scope, id, config) {
        super(scope, id, {
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
        });
        this._autoRotationEnabled = config.autoRotationEnabled;
        this._connectionId = config.connectionId;
        this._description = config.description;
        this._environment = config.environment;
        this._name = config.name;
        this._parameters.internalValue = config.parameters;
        this._projectId = config.projectId;
        this._rotateAtUtc.internalValue = config.rotateAtUtc;
        this._rotationInterval = config.rotationInterval;
        this._secretPath = config.secretPath;
        this._secretsMapping.internalValue = config.secretsMapping;
        this._temporaryParameters.internalValue = config.temporaryParameters;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // auto_rotation_enabled - computed: true, optional: true, required: false
    _autoRotationEnabled;
    get autoRotationEnabled() {
        return this.getBooleanAttribute('auto_rotation_enabled');
    }
    set autoRotationEnabled(value) {
        this._autoRotationEnabled = value;
    }
    resetAutoRotationEnabled() {
        this._autoRotationEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoRotationEnabledInput() {
        return this._autoRotationEnabled;
    }
    // connection_id - computed: false, optional: false, required: true
    _connectionId;
    get connectionId() {
        return this.getStringAttribute('connection_id');
    }
    set connectionId(value) {
        this._connectionId = value;
    }
    // Temporarily expose input value. Use with caution.
    get connectionIdInput() {
        return this._connectionId;
    }
    // description - computed: false, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // environment - computed: false, optional: false, required: true
    _environment;
    get environment() {
        return this.getStringAttribute('environment');
    }
    set environment(value) {
        this._environment = value;
    }
    // Temporarily expose input value. Use with caution.
    get environmentInput() {
        return this._environment;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // parameters - computed: false, optional: false, required: true
    _parameters = new SecretRotationLdapPasswordParametersOutputReference(this, "parameters");
    get parameters() {
        return this._parameters;
    }
    putParameters(value) {
        this._parameters.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get parametersInput() {
        return this._parameters.internalValue;
    }
    // project_id - computed: false, optional: false, required: true
    _projectId;
    get projectId() {
        return this.getStringAttribute('project_id');
    }
    set projectId(value) {
        this._projectId = value;
    }
    // Temporarily expose input value. Use with caution.
    get projectIdInput() {
        return this._projectId;
    }
    // rotate_at_utc - computed: true, optional: true, required: false
    _rotateAtUtc = new SecretRotationLdapPasswordRotateAtUtcOutputReference(this, "rotate_at_utc");
    get rotateAtUtc() {
        return this._rotateAtUtc;
    }
    putRotateAtUtc(value) {
        this._rotateAtUtc.internalValue = value;
    }
    resetRotateAtUtc() {
        this._rotateAtUtc.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rotateAtUtcInput() {
        return this._rotateAtUtc.internalValue;
    }
    // rotation_interval - computed: true, optional: true, required: false
    _rotationInterval;
    get rotationInterval() {
        return this.getNumberAttribute('rotation_interval');
    }
    set rotationInterval(value) {
        this._rotationInterval = value;
    }
    resetRotationInterval() {
        this._rotationInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rotationIntervalInput() {
        return this._rotationInterval;
    }
    // secret_path - computed: false, optional: false, required: true
    _secretPath;
    get secretPath() {
        return this.getStringAttribute('secret_path');
    }
    set secretPath(value) {
        this._secretPath = value;
    }
    // Temporarily expose input value. Use with caution.
    get secretPathInput() {
        return this._secretPath;
    }
    // secrets_mapping - computed: false, optional: false, required: true
    _secretsMapping = new SecretRotationLdapPasswordSecretsMappingOutputReference(this, "secrets_mapping");
    get secretsMapping() {
        return this._secretsMapping;
    }
    putSecretsMapping(value) {
        this._secretsMapping.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get secretsMappingInput() {
        return this._secretsMapping.internalValue;
    }
    // temporary_parameters - computed: false, optional: true, required: false
    _temporaryParameters = new SecretRotationLdapPasswordTemporaryParametersOutputReference(this, "temporary_parameters");
    get temporaryParameters() {
        return this._temporaryParameters;
    }
    putTemporaryParameters(value) {
        this._temporaryParameters.internalValue = value;
    }
    resetTemporaryParameters() {
        this._temporaryParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get temporaryParametersInput() {
        return this._temporaryParameters.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
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
    }
    synthesizeHclAttributes() {
        const attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
