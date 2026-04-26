// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_azure_client_secret
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function secretRotationAzureClientSecretParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        client_id: cdktf.stringToTerraform(struct.clientId),
        object_id: cdktf.stringToTerraform(struct.objectId),
    };
}
export function secretRotationAzureClientSecretParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        client_id: {
            value: cdktf.stringToHclTerraform(struct.clientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        object_id: {
            value: cdktf.stringToHclTerraform(struct.objectId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class SecretRotationAzureClientSecretParametersOutputReference extends cdktf.ComplexObject {
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
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._objectId !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectId = this._objectId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientId = undefined;
            this._objectId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientId = value.clientId;
            this._objectId = value.objectId;
        }
    }
    // client_id - computed: false, optional: false, required: true
    _clientId;
    get clientId() {
        return this.getStringAttribute('client_id');
    }
    set clientId(value) {
        this._clientId = value;
    }
    // Temporarily expose input value. Use with caution.
    get clientIdInput() {
        return this._clientId;
    }
    // object_id - computed: false, optional: false, required: true
    _objectId;
    get objectId() {
        return this.getStringAttribute('object_id');
    }
    set objectId(value) {
        this._objectId = value;
    }
    // Temporarily expose input value. Use with caution.
    get objectIdInput() {
        return this._objectId;
    }
}
export function secretRotationAzureClientSecretRotateAtUtcToTerraform(struct) {
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
export function secretRotationAzureClientSecretRotateAtUtcToHclTerraform(struct) {
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
export class SecretRotationAzureClientSecretRotateAtUtcOutputReference extends cdktf.ComplexObject {
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
export function secretRotationAzureClientSecretSecretsMappingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        client_id: cdktf.stringToTerraform(struct.clientId),
        client_secret: cdktf.stringToTerraform(struct.clientSecret),
    };
}
export function secretRotationAzureClientSecretSecretsMappingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        client_id: {
            value: cdktf.stringToHclTerraform(struct.clientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_secret: {
            value: cdktf.stringToHclTerraform(struct.clientSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class SecretRotationAzureClientSecretSecretsMappingOutputReference extends cdktf.ComplexObject {
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
        if (this._clientId !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._clientSecret !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientId = value.clientId;
            this._clientSecret = value.clientSecret;
        }
    }
    // client_id - computed: false, optional: false, required: true
    _clientId;
    get clientId() {
        return this.getStringAttribute('client_id');
    }
    set clientId(value) {
        this._clientId = value;
    }
    // Temporarily expose input value. Use with caution.
    get clientIdInput() {
        return this._clientId;
    }
    // client_secret - computed: false, optional: false, required: true
    _clientSecret;
    get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    set clientSecret(value) {
        this._clientSecret = value;
    }
    // Temporarily expose input value. Use with caution.
    get clientSecretInput() {
        return this._clientSecret;
    }
}
export function secretRotationAzureClientSecretTemporaryParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function secretRotationAzureClientSecretTemporaryParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class SecretRotationAzureClientSecretTemporaryParametersOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_azure_client_secret infisical_secret_rotation_azure_client_secret}
*/
export class SecretRotationAzureClientSecret extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_secret_rotation_azure_client_secret";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SecretRotationAzureClientSecret resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretRotationAzureClientSecret to import
    * @param importFromId The id of the existing SecretRotationAzureClientSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_azure_client_secret#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretRotationAzureClientSecret to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_rotation_azure_client_secret", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_azure_client_secret infisical_secret_rotation_azure_client_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretRotationAzureClientSecretConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_secret_rotation_azure_client_secret',
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
    _parameters = new SecretRotationAzureClientSecretParametersOutputReference(this, "parameters");
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
    _rotateAtUtc = new SecretRotationAzureClientSecretRotateAtUtcOutputReference(this, "rotate_at_utc");
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
    _secretsMapping = new SecretRotationAzureClientSecretSecretsMappingOutputReference(this, "secrets_mapping");
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
    _temporaryParameters = new SecretRotationAzureClientSecretTemporaryParametersOutputReference(this, "temporary_parameters");
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
            parameters: secretRotationAzureClientSecretParametersToTerraform(this._parameters.internalValue),
            project_id: cdktf.stringToTerraform(this._projectId),
            rotate_at_utc: secretRotationAzureClientSecretRotateAtUtcToTerraform(this._rotateAtUtc.internalValue),
            rotation_interval: cdktf.numberToTerraform(this._rotationInterval),
            secret_path: cdktf.stringToTerraform(this._secretPath),
            secrets_mapping: secretRotationAzureClientSecretSecretsMappingToTerraform(this._secretsMapping.internalValue),
            temporary_parameters: secretRotationAzureClientSecretTemporaryParametersToTerraform(this._temporaryParameters.internalValue),
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
                value: secretRotationAzureClientSecretParametersToHclTerraform(this._parameters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretRotationAzureClientSecretParameters",
            },
            project_id: {
                value: cdktf.stringToHclTerraform(this._projectId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rotate_at_utc: {
                value: secretRotationAzureClientSecretRotateAtUtcToHclTerraform(this._rotateAtUtc.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretRotationAzureClientSecretRotateAtUtc",
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
                value: secretRotationAzureClientSecretSecretsMappingToHclTerraform(this._secretsMapping.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretRotationAzureClientSecretSecretsMapping",
            },
            temporary_parameters: {
                value: secretRotationAzureClientSecretTemporaryParametersToHclTerraform(this._temporaryParameters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretRotationAzureClientSecretTemporaryParameters",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
