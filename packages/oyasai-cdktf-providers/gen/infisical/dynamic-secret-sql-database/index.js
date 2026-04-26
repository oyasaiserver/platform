// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredToTerraform(struct) {
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
export function dynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredToHclTerraform(struct) {
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
export class DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredOutputReference extends cdktf.ComplexObject {
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
export function dynamicSecretSqlDatabaseConfigurationPasswordRequirementsToTerraform(struct) {
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
export function dynamicSecretSqlDatabaseConfigurationPasswordRequirementsToHclTerraform(struct) {
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
            value: dynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredToHclTerraform(struct.required),
            isBlock: true,
            type: "struct",
            storageClassType: "DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequired",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DynamicSecretSqlDatabaseConfigurationPasswordRequirementsOutputReference extends cdktf.ComplexObject {
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
    _required = new DynamicSecretSqlDatabaseConfigurationPasswordRequirementsRequiredOutputReference(this, "required");
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
export function dynamicSecretSqlDatabaseConfigurationToTerraform(struct) {
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
export function dynamicSecretSqlDatabaseConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DynamicSecretSqlDatabaseConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._passwordRequirements?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.passwordRequirements = this._passwordRequirements?.internalValue;
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
    }
    set internalValue(value) {
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
    }
    // ca - computed: false, optional: true, required: false
    _ca;
    get ca() {
        return this.getStringAttribute('ca');
    }
    set ca(value) {
        this._ca = value;
    }
    resetCa() {
        this._ca = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get caInput() {
        return this._ca;
    }
    // client - computed: false, optional: false, required: true
    _client;
    get client() {
        return this.getStringAttribute('client');
    }
    set client(value) {
        this._client = value;
    }
    // Temporarily expose input value. Use with caution.
    get clientInput() {
        return this._client;
    }
    // creation_statement - computed: false, optional: false, required: true
    _creationStatement;
    get creationStatement() {
        return this.getStringAttribute('creation_statement');
    }
    set creationStatement(value) {
        this._creationStatement = value;
    }
    // Temporarily expose input value. Use with caution.
    get creationStatementInput() {
        return this._creationStatement;
    }
    // database - computed: false, optional: false, required: true
    _database;
    get database() {
        return this.getStringAttribute('database');
    }
    set database(value) {
        this._database = value;
    }
    // Temporarily expose input value. Use with caution.
    get databaseInput() {
        return this._database;
    }
    // gateway_id - computed: false, optional: true, required: false
    _gatewayId;
    get gatewayId() {
        return this.getStringAttribute('gateway_id');
    }
    set gatewayId(value) {
        this._gatewayId = value;
    }
    resetGatewayId() {
        this._gatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayIdInput() {
        return this._gatewayId;
    }
    // host - computed: false, optional: false, required: true
    _host;
    get host() {
        return this.getStringAttribute('host');
    }
    set host(value) {
        this._host = value;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host;
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
    // password_requirements - computed: false, optional: true, required: false
    _passwordRequirements = new DynamicSecretSqlDatabaseConfigurationPasswordRequirementsOutputReference(this, "password_requirements");
    get passwordRequirements() {
        return this._passwordRequirements;
    }
    putPasswordRequirements(value) {
        this._passwordRequirements.internalValue = value;
    }
    resetPasswordRequirements() {
        this._passwordRequirements.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get passwordRequirementsInput() {
        return this._passwordRequirements.internalValue;
    }
    // port - computed: false, optional: false, required: true
    _port;
    get port() {
        return this.getNumberAttribute('port');
    }
    set port(value) {
        this._port = value;
    }
    // Temporarily expose input value. Use with caution.
    get portInput() {
        return this._port;
    }
    // renew_statement - computed: false, optional: true, required: false
    _renewStatement;
    get renewStatement() {
        return this.getStringAttribute('renew_statement');
    }
    set renewStatement(value) {
        this._renewStatement = value;
    }
    resetRenewStatement() {
        this._renewStatement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get renewStatementInput() {
        return this._renewStatement;
    }
    // revocation_statement - computed: false, optional: false, required: true
    _revocationStatement;
    get revocationStatement() {
        return this.getStringAttribute('revocation_statement');
    }
    set revocationStatement(value) {
        this._revocationStatement = value;
    }
    // Temporarily expose input value. Use with caution.
    get revocationStatementInput() {
        return this._revocationStatement;
    }
    // username - computed: false, optional: false, required: true
    _username;
    get username() {
        return this.getStringAttribute('username');
    }
    set username(value) {
        this._username = value;
    }
    // Temporarily expose input value. Use with caution.
    get usernameInput() {
        return this._username;
    }
}
export function dynamicSecretSqlDatabaseMetadataToTerraform(struct) {
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
export function dynamicSecretSqlDatabaseMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DynamicSecretSqlDatabaseMetadataOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    }
    // key - computed: false, optional: false, required: true
    _key;
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    // value - computed: false, optional: false, required: true
    _value;
    get value() {
        return this.getStringAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export class DynamicSecretSqlDatabaseMetadataList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new DynamicSecretSqlDatabaseMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_sql_database infisical_dynamic_secret_sql_database}
*/
export class DynamicSecretSqlDatabase extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_dynamic_secret_sql_database";
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
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_dynamic_secret_sql_database", importId: importFromId, provider });
    }
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
    constructor(scope, id, config) {
        super(scope, id, {
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
        });
        this._configuration.internalValue = config.configuration;
        this._defaultTtl = config.defaultTtl;
        this._environmentSlug = config.environmentSlug;
        this._maxTtl = config.maxTtl;
        this._metadata.internalValue = config.metadata;
        this._name = config.name;
        this._path = config.path;
        this._projectSlug = config.projectSlug;
        this._usernameTemplate = config.usernameTemplate;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // configuration - computed: false, optional: false, required: true
    _configuration = new DynamicSecretSqlDatabaseConfigurationOutputReference(this, "configuration");
    get configuration() {
        return this._configuration;
    }
    putConfiguration(value) {
        this._configuration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get configurationInput() {
        return this._configuration.internalValue;
    }
    // default_ttl - computed: false, optional: false, required: true
    _defaultTtl;
    get defaultTtl() {
        return this.getStringAttribute('default_ttl');
    }
    set defaultTtl(value) {
        this._defaultTtl = value;
    }
    // Temporarily expose input value. Use with caution.
    get defaultTtlInput() {
        return this._defaultTtl;
    }
    // environment_slug - computed: false, optional: false, required: true
    _environmentSlug;
    get environmentSlug() {
        return this.getStringAttribute('environment_slug');
    }
    set environmentSlug(value) {
        this._environmentSlug = value;
    }
    // Temporarily expose input value. Use with caution.
    get environmentSlugInput() {
        return this._environmentSlug;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // max_ttl - computed: false, optional: true, required: false
    _maxTtl;
    get maxTtl() {
        return this.getStringAttribute('max_ttl');
    }
    set maxTtl(value) {
        this._maxTtl = value;
    }
    resetMaxTtl() {
        this._maxTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxTtlInput() {
        return this._maxTtl;
    }
    // metadata - computed: false, optional: true, required: false
    _metadata = new DynamicSecretSqlDatabaseMetadataList(this, "metadata", true);
    get metadata() {
        return this._metadata;
    }
    putMetadata(value) {
        this._metadata.internalValue = value;
    }
    resetMetadata() {
        this._metadata.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metadataInput() {
        return this._metadata.internalValue;
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
    // path - computed: false, optional: false, required: true
    _path;
    get path() {
        return this.getStringAttribute('path');
    }
    set path(value) {
        this._path = value;
    }
    // Temporarily expose input value. Use with caution.
    get pathInput() {
        return this._path;
    }
    // project_slug - computed: false, optional: false, required: true
    _projectSlug;
    get projectSlug() {
        return this.getStringAttribute('project_slug');
    }
    set projectSlug(value) {
        this._projectSlug = value;
    }
    // Temporarily expose input value. Use with caution.
    get projectSlugInput() {
        return this._projectSlug;
    }
    // username_template - computed: false, optional: true, required: false
    _usernameTemplate;
    get usernameTemplate() {
        return this.getStringAttribute('username_template');
    }
    set usernameTemplate(value) {
        this._usernameTemplate = value;
    }
    resetUsernameTemplate() {
        this._usernameTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get usernameTemplateInput() {
        return this._usernameTemplate;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
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
    }
    synthesizeHclAttributes() {
        const attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
