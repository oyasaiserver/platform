// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/external_kms_aws
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function externalKmsAwsConfigurationCredentialToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_key_id: cdktf.stringToTerraform(struct.accessKeyId),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        role_external_id: cdktf.stringToTerraform(struct.roleExternalId),
        secret_access_key: cdktf.stringToTerraform(struct.secretAccessKey),
    };
}
export function externalKmsAwsConfigurationCredentialToHclTerraform(struct) {
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
        role_arn: {
            value: cdktf.stringToHclTerraform(struct.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_external_id: {
            value: cdktf.stringToHclTerraform(struct.roleExternalId),
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
export class ExternalKmsAwsConfigurationCredentialOutputReference extends cdktf.ComplexObject {
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
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._roleExternalId !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleExternalId = this._roleExternalId;
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
            this._roleArn = undefined;
            this._roleExternalId = undefined;
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
            this._roleArn = value.roleArn;
            this._roleExternalId = value.roleExternalId;
            this._secretAccessKey = value.secretAccessKey;
        }
    }
    // access_key_id - computed: false, optional: true, required: false
    _accessKeyId;
    get accessKeyId() {
        return this.getStringAttribute('access_key_id');
    }
    set accessKeyId(value) {
        this._accessKeyId = value;
    }
    resetAccessKeyId() {
        this._accessKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessKeyIdInput() {
        return this._accessKeyId;
    }
    // role_arn - computed: false, optional: true, required: false
    _roleArn;
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    set roleArn(value) {
        this._roleArn = value;
    }
    resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get roleArnInput() {
        return this._roleArn;
    }
    // role_external_id - computed: false, optional: true, required: false
    _roleExternalId;
    get roleExternalId() {
        return this.getStringAttribute('role_external_id');
    }
    set roleExternalId(value) {
        this._roleExternalId = value;
    }
    resetRoleExternalId() {
        this._roleExternalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get roleExternalIdInput() {
        return this._roleExternalId;
    }
    // secret_access_key - computed: false, optional: true, required: false
    _secretAccessKey;
    get secretAccessKey() {
        return this.getStringAttribute('secret_access_key');
    }
    set secretAccessKey(value) {
        this._secretAccessKey = value;
    }
    resetSecretAccessKey() {
        this._secretAccessKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secretAccessKeyInput() {
        return this._secretAccessKey;
    }
}
export function externalKmsAwsConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aws_kms_key_id: cdktf.stringToTerraform(struct.awsKmsKeyId),
        aws_region: cdktf.stringToTerraform(struct.awsRegion),
        credential: externalKmsAwsConfigurationCredentialToTerraform(struct.credential),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function externalKmsAwsConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        aws_kms_key_id: {
            value: cdktf.stringToHclTerraform(struct.awsKmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        aws_region: {
            value: cdktf.stringToHclTerraform(struct.awsRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        credential: {
            value: externalKmsAwsConfigurationCredentialToHclTerraform(struct.credential),
            isBlock: true,
            type: "struct",
            storageClassType: "ExternalKmsAwsConfigurationCredential",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ExternalKmsAwsConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._awsKmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsKmsKeyId = this._awsKmsKeyId;
        }
        if (this._awsRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsRegion = this._awsRegion;
        }
        if (this._credential?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.credential = this._credential?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsKmsKeyId = undefined;
            this._awsRegion = undefined;
            this._credential.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsKmsKeyId = value.awsKmsKeyId;
            this._awsRegion = value.awsRegion;
            this._credential.internalValue = value.credential;
            this._type = value.type;
        }
    }
    // aws_kms_key_id - computed: false, optional: false, required: true
    _awsKmsKeyId;
    get awsKmsKeyId() {
        return this.getStringAttribute('aws_kms_key_id');
    }
    set awsKmsKeyId(value) {
        this._awsKmsKeyId = value;
    }
    // Temporarily expose input value. Use with caution.
    get awsKmsKeyIdInput() {
        return this._awsKmsKeyId;
    }
    // aws_region - computed: false, optional: false, required: true
    _awsRegion;
    get awsRegion() {
        return this.getStringAttribute('aws_region');
    }
    set awsRegion(value) {
        this._awsRegion = value;
    }
    // Temporarily expose input value. Use with caution.
    get awsRegionInput() {
        return this._awsRegion;
    }
    // credential - computed: false, optional: false, required: true
    _credential = new ExternalKmsAwsConfigurationCredentialOutputReference(this, "credential");
    get credential() {
        return this._credential;
    }
    putCredential(value) {
        this._credential.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get credentialInput() {
        return this._credential.internalValue;
    }
    // type - computed: false, optional: false, required: true
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/external_kms_aws infisical_external_kms_aws}
*/
export class ExternalKmsAws extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_external_kms_aws";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ExternalKmsAws resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ExternalKmsAws to import
    * @param importFromId The id of the existing ExternalKmsAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/external_kms_aws#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ExternalKmsAws to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_external_kms_aws", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/external_kms_aws infisical_external_kms_aws} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ExternalKmsAwsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_external_kms_aws',
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
        this._description = config.description;
        this._name = config.name;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // configuration - computed: false, optional: false, required: true
    _configuration = new ExternalKmsAwsConfigurationOutputReference(this, "configuration");
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
    // credentials_hash - computed: true, optional: false, required: false
    get credentialsHash() {
        return this.getStringAttribute('credentials_hash');
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            configuration: externalKmsAwsConfigurationToTerraform(this._configuration.internalValue),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            configuration: {
                value: externalKmsAwsConfigurationToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ExternalKmsAwsConfiguration",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
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
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
