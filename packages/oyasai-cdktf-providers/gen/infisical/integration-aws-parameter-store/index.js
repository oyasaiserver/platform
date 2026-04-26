// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function integrationAwsParameterStoreOptionsAwsTagsToTerraform(struct) {
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
export function integrationAwsParameterStoreOptionsAwsTagsToHclTerraform(struct) {
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
export class IntegrationAwsParameterStoreOptionsAwsTagsOutputReference extends cdktf.ComplexObject {
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
    // key - computed: true, optional: true, required: false
    _key;
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    // value - computed: true, optional: true, required: false
    _value;
    get value() {
        return this.getStringAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export class IntegrationAwsParameterStoreOptionsAwsTagsList extends cdktf.ComplexList {
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
        return new IntegrationAwsParameterStoreOptionsAwsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function integrationAwsParameterStoreOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aws_tags: cdktf.listMapper(integrationAwsParameterStoreOptionsAwsTagsToTerraform, false)(struct.awsTags),
        should_disable_delete: cdktf.booleanToTerraform(struct.shouldDisableDelete),
    };
}
export function integrationAwsParameterStoreOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        aws_tags: {
            value: cdktf.listMapperHcl(integrationAwsParameterStoreOptionsAwsTagsToHclTerraform, false)(struct.awsTags),
            isBlock: true,
            type: "set",
            storageClassType: "IntegrationAwsParameterStoreOptionsAwsTagsList",
        },
        should_disable_delete: {
            value: cdktf.booleanToHclTerraform(struct.shouldDisableDelete),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class IntegrationAwsParameterStoreOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._awsTags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsTags = this._awsTags?.internalValue;
        }
        if (this._shouldDisableDelete !== undefined) {
            hasAnyValues = true;
            internalValueResult.shouldDisableDelete = this._shouldDisableDelete;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsTags.internalValue = undefined;
            this._shouldDisableDelete = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsTags.internalValue = value.awsTags;
            this._shouldDisableDelete = value.shouldDisableDelete;
        }
    }
    // aws_tags - computed: true, optional: true, required: false
    _awsTags = new IntegrationAwsParameterStoreOptionsAwsTagsList(this, "aws_tags", true);
    get awsTags() {
        return this._awsTags;
    }
    putAwsTags(value) {
        this._awsTags.internalValue = value;
    }
    resetAwsTags() {
        this._awsTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get awsTagsInput() {
        return this._awsTags.internalValue;
    }
    // should_disable_delete - computed: true, optional: true, required: false
    _shouldDisableDelete;
    get shouldDisableDelete() {
        return this.getBooleanAttribute('should_disable_delete');
    }
    set shouldDisableDelete(value) {
        this._shouldDisableDelete = value;
    }
    resetShouldDisableDelete() {
        this._shouldDisableDelete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get shouldDisableDeleteInput() {
        return this._shouldDisableDelete;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store infisical_integration_aws_parameter_store}
*/
export class IntegrationAwsParameterStore extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_integration_aws_parameter_store";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a IntegrationAwsParameterStore resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IntegrationAwsParameterStore to import
    * @param importFromId The id of the existing IntegrationAwsParameterStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IntegrationAwsParameterStore to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_integration_aws_parameter_store", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_aws_parameter_store infisical_integration_aws_parameter_store} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IntegrationAwsParameterStoreConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_integration_aws_parameter_store',
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
        this._accessKeyId = config.accessKeyId;
        this._assumeRoleArn = config.assumeRoleArn;
        this._awsRegion = config.awsRegion;
        this._environment = config.environment;
        this._options.internalValue = config.options;
        this._parameterStorePath = config.parameterStorePath;
        this._projectId = config.projectId;
        this._secretAccessKey = config.secretAccessKey;
        this._secretPath = config.secretPath;
    }
    // ==========
    // ATTRIBUTES
    // ==========
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
    // assume_role_arn - computed: false, optional: true, required: false
    _assumeRoleArn;
    get assumeRoleArn() {
        return this.getStringAttribute('assume_role_arn');
    }
    set assumeRoleArn(value) {
        this._assumeRoleArn = value;
    }
    resetAssumeRoleArn() {
        this._assumeRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get assumeRoleArnInput() {
        return this._assumeRoleArn;
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
    // integration_auth_id - computed: true, optional: false, required: false
    get integrationAuthId() {
        return this.getStringAttribute('integration_auth_id');
    }
    // integration_id - computed: true, optional: false, required: false
    get integrationId() {
        return this.getStringAttribute('integration_id');
    }
    // options - computed: true, optional: true, required: false
    _options = new IntegrationAwsParameterStoreOptionsOutputReference(this, "options");
    get options() {
        return this._options;
    }
    putOptions(value) {
        this._options.internalValue = value;
    }
    resetOptions() {
        this._options.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get optionsInput() {
        return this._options.internalValue;
    }
    // parameter_store_path - computed: false, optional: false, required: true
    _parameterStorePath;
    get parameterStorePath() {
        return this.getStringAttribute('parameter_store_path');
    }
    set parameterStorePath(value) {
        this._parameterStorePath = value;
    }
    // Temporarily expose input value. Use with caution.
    get parameterStorePathInput() {
        return this._parameterStorePath;
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            access_key_id: cdktf.stringToTerraform(this._accessKeyId),
            assume_role_arn: cdktf.stringToTerraform(this._assumeRoleArn),
            aws_region: cdktf.stringToTerraform(this._awsRegion),
            environment: cdktf.stringToTerraform(this._environment),
            options: integrationAwsParameterStoreOptionsToTerraform(this._options.internalValue),
            parameter_store_path: cdktf.stringToTerraform(this._parameterStorePath),
            project_id: cdktf.stringToTerraform(this._projectId),
            secret_access_key: cdktf.stringToTerraform(this._secretAccessKey),
            secret_path: cdktf.stringToTerraform(this._secretPath),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            access_key_id: {
                value: cdktf.stringToHclTerraform(this._accessKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            assume_role_arn: {
                value: cdktf.stringToHclTerraform(this._assumeRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            aws_region: {
                value: cdktf.stringToHclTerraform(this._awsRegion),
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
            options: {
                value: integrationAwsParameterStoreOptionsToHclTerraform(this._options.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "IntegrationAwsParameterStoreOptions",
            },
            parameter_store_path: {
                value: cdktf.stringToHclTerraform(this._parameterStorePath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            project_id: {
                value: cdktf.stringToHclTerraform(this._projectId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secret_access_key: {
                value: cdktf.stringToHclTerraform(this._secretAccessKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secret_path: {
                value: cdktf.stringToHclTerraform(this._secretPath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
