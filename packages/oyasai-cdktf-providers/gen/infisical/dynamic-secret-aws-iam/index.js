// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dynamicSecretAwsIamConfigurationAccessKeyConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_key: cdktf.stringToTerraform(struct.accessKey),
        secret_access_key: cdktf.stringToTerraform(struct.secretAccessKey),
    };
}
export function dynamicSecretAwsIamConfigurationAccessKeyConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        access_key: {
            value: cdktf.stringToHclTerraform(struct.accessKey),
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
export class DynamicSecretAwsIamConfigurationAccessKeyConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._accessKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessKey = this._accessKey;
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
            this._accessKey = undefined;
            this._secretAccessKey = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessKey = value.accessKey;
            this._secretAccessKey = value.secretAccessKey;
        }
    }
    // access_key - computed: false, optional: false, required: true
    _accessKey;
    get accessKey() {
        return this.getStringAttribute('access_key');
    }
    set accessKey(value) {
        this._accessKey = value;
    }
    // Temporarily expose input value. Use with caution.
    get accessKeyInput() {
        return this._accessKey;
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
export function dynamicSecretAwsIamConfigurationAssumeRoleConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
export function dynamicSecretAwsIamConfigurationAssumeRoleConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        role_arn: {
            value: cdktf.stringToHclTerraform(struct.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DynamicSecretAwsIamConfigurationAssumeRoleConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._roleArn = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._roleArn = value.roleArn;
        }
    }
    // role_arn - computed: false, optional: false, required: true
    _roleArn;
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    set roleArn(value) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get roleArnInput() {
        return this._roleArn;
    }
}
export function dynamicSecretAwsIamConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_key_config: dynamicSecretAwsIamConfigurationAccessKeyConfigToTerraform(struct.accessKeyConfig),
        assume_role_config: dynamicSecretAwsIamConfigurationAssumeRoleConfigToTerraform(struct.assumeRoleConfig),
        aws_path: cdktf.stringToTerraform(struct.awsPath),
        method: cdktf.stringToTerraform(struct.method),
        permission_boundary_policy_arn: cdktf.stringToTerraform(struct.permissionBoundaryPolicyArn),
        policy_arns: cdktf.stringToTerraform(struct.policyArns),
        policy_document: cdktf.stringToTerraform(struct.policyDocument),
        region: cdktf.stringToTerraform(struct.region),
        user_groups: cdktf.stringToTerraform(struct.userGroups),
    };
}
export function dynamicSecretAwsIamConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        access_key_config: {
            value: dynamicSecretAwsIamConfigurationAccessKeyConfigToHclTerraform(struct.accessKeyConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DynamicSecretAwsIamConfigurationAccessKeyConfig",
        },
        assume_role_config: {
            value: dynamicSecretAwsIamConfigurationAssumeRoleConfigToHclTerraform(struct.assumeRoleConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DynamicSecretAwsIamConfigurationAssumeRoleConfig",
        },
        aws_path: {
            value: cdktf.stringToHclTerraform(struct.awsPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        method: {
            value: cdktf.stringToHclTerraform(struct.method),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        permission_boundary_policy_arn: {
            value: cdktf.stringToHclTerraform(struct.permissionBoundaryPolicyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        policy_arns: {
            value: cdktf.stringToHclTerraform(struct.policyArns),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        policy_document: {
            value: cdktf.stringToHclTerraform(struct.policyDocument),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        region: {
            value: cdktf.stringToHclTerraform(struct.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_groups: {
            value: cdktf.stringToHclTerraform(struct.userGroups),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DynamicSecretAwsIamConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._accessKeyConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessKeyConfig = this._accessKeyConfig?.internalValue;
        }
        if (this._assumeRoleConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.assumeRoleConfig = this._assumeRoleConfig?.internalValue;
        }
        if (this._awsPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsPath = this._awsPath;
        }
        if (this._method !== undefined) {
            hasAnyValues = true;
            internalValueResult.method = this._method;
        }
        if (this._permissionBoundaryPolicyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.permissionBoundaryPolicyArn = this._permissionBoundaryPolicyArn;
        }
        if (this._policyArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyArns = this._policyArns;
        }
        if (this._policyDocument !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyDocument = this._policyDocument;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._userGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.userGroups = this._userGroups;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessKeyConfig.internalValue = undefined;
            this._assumeRoleConfig.internalValue = undefined;
            this._awsPath = undefined;
            this._method = undefined;
            this._permissionBoundaryPolicyArn = undefined;
            this._policyArns = undefined;
            this._policyDocument = undefined;
            this._region = undefined;
            this._userGroups = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessKeyConfig.internalValue = value.accessKeyConfig;
            this._assumeRoleConfig.internalValue = value.assumeRoleConfig;
            this._awsPath = value.awsPath;
            this._method = value.method;
            this._permissionBoundaryPolicyArn = value.permissionBoundaryPolicyArn;
            this._policyArns = value.policyArns;
            this._policyDocument = value.policyDocument;
            this._region = value.region;
            this._userGroups = value.userGroups;
        }
    }
    // access_key_config - computed: false, optional: true, required: false
    _accessKeyConfig = new DynamicSecretAwsIamConfigurationAccessKeyConfigOutputReference(this, "access_key_config");
    get accessKeyConfig() {
        return this._accessKeyConfig;
    }
    putAccessKeyConfig(value) {
        this._accessKeyConfig.internalValue = value;
    }
    resetAccessKeyConfig() {
        this._accessKeyConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessKeyConfigInput() {
        return this._accessKeyConfig.internalValue;
    }
    // assume_role_config - computed: false, optional: true, required: false
    _assumeRoleConfig = new DynamicSecretAwsIamConfigurationAssumeRoleConfigOutputReference(this, "assume_role_config");
    get assumeRoleConfig() {
        return this._assumeRoleConfig;
    }
    putAssumeRoleConfig(value) {
        this._assumeRoleConfig.internalValue = value;
    }
    resetAssumeRoleConfig() {
        this._assumeRoleConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get assumeRoleConfigInput() {
        return this._assumeRoleConfig.internalValue;
    }
    // aws_path - computed: false, optional: true, required: false
    _awsPath;
    get awsPath() {
        return this.getStringAttribute('aws_path');
    }
    set awsPath(value) {
        this._awsPath = value;
    }
    resetAwsPath() {
        this._awsPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get awsPathInput() {
        return this._awsPath;
    }
    // method - computed: false, optional: false, required: true
    _method;
    get method() {
        return this.getStringAttribute('method');
    }
    set method(value) {
        this._method = value;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method;
    }
    // permission_boundary_policy_arn - computed: false, optional: true, required: false
    _permissionBoundaryPolicyArn;
    get permissionBoundaryPolicyArn() {
        return this.getStringAttribute('permission_boundary_policy_arn');
    }
    set permissionBoundaryPolicyArn(value) {
        this._permissionBoundaryPolicyArn = value;
    }
    resetPermissionBoundaryPolicyArn() {
        this._permissionBoundaryPolicyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get permissionBoundaryPolicyArnInput() {
        return this._permissionBoundaryPolicyArn;
    }
    // policy_arns - computed: false, optional: true, required: false
    _policyArns;
    get policyArns() {
        return this.getStringAttribute('policy_arns');
    }
    set policyArns(value) {
        this._policyArns = value;
    }
    resetPolicyArns() {
        this._policyArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get policyArnsInput() {
        return this._policyArns;
    }
    // policy_document - computed: false, optional: true, required: false
    _policyDocument;
    get policyDocument() {
        return this.getStringAttribute('policy_document');
    }
    set policyDocument(value) {
        this._policyDocument = value;
    }
    resetPolicyDocument() {
        this._policyDocument = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get policyDocumentInput() {
        return this._policyDocument;
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
    // user_groups - computed: false, optional: true, required: false
    _userGroups;
    get userGroups() {
        return this.getStringAttribute('user_groups');
    }
    set userGroups(value) {
        this._userGroups = value;
    }
    resetUserGroups() {
        this._userGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userGroupsInput() {
        return this._userGroups;
    }
}
export function dynamicSecretAwsIamMetadataToTerraform(struct) {
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
export function dynamicSecretAwsIamMetadataToHclTerraform(struct) {
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
export class DynamicSecretAwsIamMetadataOutputReference extends cdktf.ComplexObject {
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
export class DynamicSecretAwsIamMetadataList extends cdktf.ComplexList {
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
        return new DynamicSecretAwsIamMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam infisical_dynamic_secret_aws_iam}
*/
export class DynamicSecretAwsIam extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_dynamic_secret_aws_iam";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DynamicSecretAwsIam resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DynamicSecretAwsIam to import
    * @param importFromId The id of the existing DynamicSecretAwsIam that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DynamicSecretAwsIam to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_dynamic_secret_aws_iam", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_aws_iam infisical_dynamic_secret_aws_iam} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamicSecretAwsIamConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_dynamic_secret_aws_iam',
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
    _configuration = new DynamicSecretAwsIamConfigurationOutputReference(this, "configuration");
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
    _metadata = new DynamicSecretAwsIamMetadataList(this, "metadata", true);
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
            configuration: dynamicSecretAwsIamConfigurationToTerraform(this._configuration.internalValue),
            default_ttl: cdktf.stringToTerraform(this._defaultTtl),
            environment_slug: cdktf.stringToTerraform(this._environmentSlug),
            max_ttl: cdktf.stringToTerraform(this._maxTtl),
            metadata: cdktf.listMapper(dynamicSecretAwsIamMetadataToTerraform, false)(this._metadata.internalValue),
            name: cdktf.stringToTerraform(this._name),
            path: cdktf.stringToTerraform(this._path),
            project_slug: cdktf.stringToTerraform(this._projectSlug),
            username_template: cdktf.stringToTerraform(this._usernameTemplate),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            configuration: {
                value: dynamicSecretAwsIamConfigurationToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DynamicSecretAwsIamConfiguration",
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
                value: cdktf.listMapperHcl(dynamicSecretAwsIamMetadataToHclTerraform, false)(this._metadata.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "DynamicSecretAwsIamMetadataList",
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
