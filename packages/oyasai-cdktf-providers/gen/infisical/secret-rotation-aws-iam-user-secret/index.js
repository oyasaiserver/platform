// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_aws_iam_user_secret
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function secretRotationAwsIamUserSecretParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        region: cdktf.stringToTerraform(struct.region),
        user_name: cdktf.stringToTerraform(struct.userName),
    };
}
export function secretRotationAwsIamUserSecretParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        region: {
            value: cdktf.stringToHclTerraform(struct.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_name: {
            value: cdktf.stringToHclTerraform(struct.userName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class SecretRotationAwsIamUserSecretParametersOutputReference extends cdktf.ComplexObject {
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
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._userName !== undefined) {
            hasAnyValues = true;
            internalValueResult.userName = this._userName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._region = undefined;
            this._userName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._region = value.region;
            this._userName = value.userName;
        }
    }
    // region - computed: false, optional: false, required: true
    _region;
    get region() {
        return this.getStringAttribute('region');
    }
    set region(value) {
        this._region = value;
    }
    // Temporarily expose input value. Use with caution.
    get regionInput() {
        return this._region;
    }
    // user_name - computed: false, optional: false, required: true
    _userName;
    get userName() {
        return this.getStringAttribute('user_name');
    }
    set userName(value) {
        this._userName = value;
    }
    // Temporarily expose input value. Use with caution.
    get userNameInput() {
        return this._userName;
    }
}
export function secretRotationAwsIamUserSecretRotateAtUtcToTerraform(struct) {
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
export function secretRotationAwsIamUserSecretRotateAtUtcToHclTerraform(struct) {
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
export class SecretRotationAwsIamUserSecretRotateAtUtcOutputReference extends cdktf.ComplexObject {
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
export function secretRotationAwsIamUserSecretSecretsMappingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_key_id: cdktf.stringToTerraform(struct.accessKeyId),
        secret_access_key: cdktf.stringToTerraform(struct.secretAccessKey),
    };
}
export function secretRotationAwsIamUserSecretSecretsMappingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        access_key_id: {
            value: cdktf.stringToHclTerraform(struct.accessKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_access_key: {
            value: cdktf.stringToHclTerraform(struct.secretAccessKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class SecretRotationAwsIamUserSecretSecretsMappingOutputReference extends cdktf.ComplexObject {
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
        if (this._accessKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessKeyId = this._accessKeyId;
        }
        if (this._secretAccessKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretAccessKey = this._secretAccessKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessKeyId = undefined;
            this._secretAccessKey = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessKeyId = value.accessKeyId;
            this._secretAccessKey = value.secretAccessKey;
        }
    }
    // access_key_id - computed: false, optional: false, required: true
    _accessKeyId;
    get accessKeyId() {
        return this.getStringAttribute('access_key_id');
    }
    set accessKeyId(value) {
        this._accessKeyId = value;
    }
    // Temporarily expose input value. Use with caution.
    get accessKeyIdInput() {
        return this._accessKeyId;
    }
    // secret_access_key - computed: false, optional: false, required: true
    _secretAccessKey;
    get secretAccessKey() {
        return this.getStringAttribute('secret_access_key');
    }
    set secretAccessKey(value) {
        this._secretAccessKey = value;
    }
    // Temporarily expose input value. Use with caution.
    get secretAccessKeyInput() {
        return this._secretAccessKey;
    }
}
export function secretRotationAwsIamUserSecretTemporaryParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function secretRotationAwsIamUserSecretTemporaryParametersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class SecretRotationAwsIamUserSecretTemporaryParametersOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_aws_iam_user_secret infisical_secret_rotation_aws_iam_user_secret}
*/
export class SecretRotationAwsIamUserSecret extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_secret_rotation_aws_iam_user_secret";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SecretRotationAwsIamUserSecret resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretRotationAwsIamUserSecret to import
    * @param importFromId The id of the existing SecretRotationAwsIamUserSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_aws_iam_user_secret#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretRotationAwsIamUserSecret to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_rotation_aws_iam_user_secret", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_rotation_aws_iam_user_secret infisical_secret_rotation_aws_iam_user_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretRotationAwsIamUserSecretConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_secret_rotation_aws_iam_user_secret',
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
    _parameters = new SecretRotationAwsIamUserSecretParametersOutputReference(this, "parameters");
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
    _rotateAtUtc = new SecretRotationAwsIamUserSecretRotateAtUtcOutputReference(this, "rotate_at_utc");
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
    _secretsMapping = new SecretRotationAwsIamUserSecretSecretsMappingOutputReference(this, "secrets_mapping");
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
    _temporaryParameters = new SecretRotationAwsIamUserSecretTemporaryParametersOutputReference(this, "temporary_parameters");
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
            parameters: secretRotationAwsIamUserSecretParametersToTerraform(this._parameters.internalValue),
            project_id: cdktf.stringToTerraform(this._projectId),
            rotate_at_utc: secretRotationAwsIamUserSecretRotateAtUtcToTerraform(this._rotateAtUtc.internalValue),
            rotation_interval: cdktf.numberToTerraform(this._rotationInterval),
            secret_path: cdktf.stringToTerraform(this._secretPath),
            secrets_mapping: secretRotationAwsIamUserSecretSecretsMappingToTerraform(this._secretsMapping.internalValue),
            temporary_parameters: secretRotationAwsIamUserSecretTemporaryParametersToTerraform(this._temporaryParameters.internalValue),
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
                value: secretRotationAwsIamUserSecretParametersToHclTerraform(this._parameters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretRotationAwsIamUserSecretParameters",
            },
            project_id: {
                value: cdktf.stringToHclTerraform(this._projectId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rotate_at_utc: {
                value: secretRotationAwsIamUserSecretRotateAtUtcToHclTerraform(this._rotateAtUtc.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretRotationAwsIamUserSecretRotateAtUtc",
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
                value: secretRotationAwsIamUserSecretSecretsMappingToHclTerraform(this._secretsMapping.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretRotationAwsIamUserSecretSecretsMapping",
            },
            temporary_parameters: {
                value: secretRotationAwsIamUserSecretTemporaryParametersToHclTerraform(this._temporaryParameters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretRotationAwsIamUserSecretTemporaryParameters",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
