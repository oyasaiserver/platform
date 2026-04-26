// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function secretSyncAwsSecretsManagerDestinationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aws_region: cdktf.stringToTerraform(struct.awsRegion),
        aws_secrets_manager_secret_name: cdktf.stringToTerraform(struct.awsSecretsManagerSecretName),
        mapping_behavior: cdktf.stringToTerraform(struct.mappingBehavior),
    };
}
export function secretSyncAwsSecretsManagerDestinationConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        aws_region: {
            value: cdktf.stringToHclTerraform(struct.awsRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        aws_secrets_manager_secret_name: {
            value: cdktf.stringToHclTerraform(struct.awsSecretsManagerSecretName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mapping_behavior: {
            value: cdktf.stringToHclTerraform(struct.mappingBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class SecretSyncAwsSecretsManagerDestinationConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._awsRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsRegion = this._awsRegion;
        }
        if (this._awsSecretsManagerSecretName !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsSecretsManagerSecretName = this._awsSecretsManagerSecretName;
        }
        if (this._mappingBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.mappingBehavior = this._mappingBehavior;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsRegion = undefined;
            this._awsSecretsManagerSecretName = undefined;
            this._mappingBehavior = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsRegion = value.awsRegion;
            this._awsSecretsManagerSecretName = value.awsSecretsManagerSecretName;
            this._mappingBehavior = value.mappingBehavior;
        }
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
    // aws_secrets_manager_secret_name - computed: false, optional: true, required: false
    _awsSecretsManagerSecretName;
    get awsSecretsManagerSecretName() {
        return this.getStringAttribute('aws_secrets_manager_secret_name');
    }
    set awsSecretsManagerSecretName(value) {
        this._awsSecretsManagerSecretName = value;
    }
    resetAwsSecretsManagerSecretName() {
        this._awsSecretsManagerSecretName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get awsSecretsManagerSecretNameInput() {
        return this._awsSecretsManagerSecretName;
    }
    // mapping_behavior - computed: true, optional: true, required: false
    _mappingBehavior;
    get mappingBehavior() {
        return this.getStringAttribute('mapping_behavior');
    }
    set mappingBehavior(value) {
        this._mappingBehavior = value;
    }
    resetMappingBehavior() {
        this._mappingBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mappingBehaviorInput() {
        return this._mappingBehavior;
    }
}
export function secretSyncAwsSecretsManagerSyncOptionsTagsToTerraform(struct) {
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
export function secretSyncAwsSecretsManagerSyncOptionsTagsToHclTerraform(struct) {
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
export class SecretSyncAwsSecretsManagerSyncOptionsTagsOutputReference extends cdktf.ComplexObject {
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
export class SecretSyncAwsSecretsManagerSyncOptionsTagsList extends cdktf.ComplexList {
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
        return new SecretSyncAwsSecretsManagerSyncOptionsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function secretSyncAwsSecretsManagerSyncOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aws_kms_key_id: cdktf.stringToTerraform(struct.awsKmsKeyId),
        disable_secret_deletion: cdktf.booleanToTerraform(struct.disableSecretDeletion),
        initial_sync_behavior: cdktf.stringToTerraform(struct.initialSyncBehavior),
        key_schema: cdktf.stringToTerraform(struct.keySchema),
        sync_secret_metadata_as_tags: cdktf.booleanToTerraform(struct.syncSecretMetadataAsTags),
        tags: cdktf.listMapper(secretSyncAwsSecretsManagerSyncOptionsTagsToTerraform, false)(struct.tags),
    };
}
export function secretSyncAwsSecretsManagerSyncOptionsToHclTerraform(struct) {
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
        disable_secret_deletion: {
            value: cdktf.booleanToHclTerraform(struct.disableSecretDeletion),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        initial_sync_behavior: {
            value: cdktf.stringToHclTerraform(struct.initialSyncBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_schema: {
            value: cdktf.stringToHclTerraform(struct.keySchema),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sync_secret_metadata_as_tags: {
            value: cdktf.booleanToHclTerraform(struct.syncSecretMetadataAsTags),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        tags: {
            value: cdktf.listMapperHcl(secretSyncAwsSecretsManagerSyncOptionsTagsToHclTerraform, false)(struct.tags),
            isBlock: true,
            type: "set",
            storageClassType: "SecretSyncAwsSecretsManagerSyncOptionsTagsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class SecretSyncAwsSecretsManagerSyncOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._disableSecretDeletion !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableSecretDeletion = this._disableSecretDeletion;
        }
        if (this._initialSyncBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.initialSyncBehavior = this._initialSyncBehavior;
        }
        if (this._keySchema !== undefined) {
            hasAnyValues = true;
            internalValueResult.keySchema = this._keySchema;
        }
        if (this._syncSecretMetadataAsTags !== undefined) {
            hasAnyValues = true;
            internalValueResult.syncSecretMetadataAsTags = this._syncSecretMetadataAsTags;
        }
        if (this._tags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsKmsKeyId = undefined;
            this._disableSecretDeletion = undefined;
            this._initialSyncBehavior = undefined;
            this._keySchema = undefined;
            this._syncSecretMetadataAsTags = undefined;
            this._tags.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsKmsKeyId = value.awsKmsKeyId;
            this._disableSecretDeletion = value.disableSecretDeletion;
            this._initialSyncBehavior = value.initialSyncBehavior;
            this._keySchema = value.keySchema;
            this._syncSecretMetadataAsTags = value.syncSecretMetadataAsTags;
            this._tags.internalValue = value.tags;
        }
    }
    // aws_kms_key_id - computed: false, optional: true, required: false
    _awsKmsKeyId;
    get awsKmsKeyId() {
        return this.getStringAttribute('aws_kms_key_id');
    }
    set awsKmsKeyId(value) {
        this._awsKmsKeyId = value;
    }
    resetAwsKmsKeyId() {
        this._awsKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get awsKmsKeyIdInput() {
        return this._awsKmsKeyId;
    }
    // disable_secret_deletion - computed: true, optional: true, required: false
    _disableSecretDeletion;
    get disableSecretDeletion() {
        return this.getBooleanAttribute('disable_secret_deletion');
    }
    set disableSecretDeletion(value) {
        this._disableSecretDeletion = value;
    }
    resetDisableSecretDeletion() {
        this._disableSecretDeletion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disableSecretDeletionInput() {
        return this._disableSecretDeletion;
    }
    // initial_sync_behavior - computed: false, optional: false, required: true
    _initialSyncBehavior;
    get initialSyncBehavior() {
        return this.getStringAttribute('initial_sync_behavior');
    }
    set initialSyncBehavior(value) {
        this._initialSyncBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get initialSyncBehaviorInput() {
        return this._initialSyncBehavior;
    }
    // key_schema - computed: false, optional: true, required: false
    _keySchema;
    get keySchema() {
        return this.getStringAttribute('key_schema');
    }
    set keySchema(value) {
        this._keySchema = value;
    }
    resetKeySchema() {
        this._keySchema = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keySchemaInput() {
        return this._keySchema;
    }
    // sync_secret_metadata_as_tags - computed: true, optional: true, required: false
    _syncSecretMetadataAsTags;
    get syncSecretMetadataAsTags() {
        return this.getBooleanAttribute('sync_secret_metadata_as_tags');
    }
    set syncSecretMetadataAsTags(value) {
        this._syncSecretMetadataAsTags = value;
    }
    resetSyncSecretMetadataAsTags() {
        this._syncSecretMetadataAsTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get syncSecretMetadataAsTagsInput() {
        return this._syncSecretMetadataAsTags;
    }
    // tags - computed: false, optional: true, required: false
    _tags = new SecretSyncAwsSecretsManagerSyncOptionsTagsList(this, "tags", true);
    get tags() {
        return this._tags;
    }
    putTags(value) {
        this._tags.internalValue = value;
    }
    resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags.internalValue;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager infisical_secret_sync_aws_secrets_manager}
*/
export class SecretSyncAwsSecretsManager extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_secret_sync_aws_secrets_manager";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SecretSyncAwsSecretsManager resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretSyncAwsSecretsManager to import
    * @param importFromId The id of the existing SecretSyncAwsSecretsManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretSyncAwsSecretsManager to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_sync_aws_secrets_manager", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_aws_secrets_manager infisical_secret_sync_aws_secrets_manager} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretSyncAwsSecretsManagerConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_secret_sync_aws_secrets_manager',
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
        this._autoSyncEnabled = config.autoSyncEnabled;
        this._connectionId = config.connectionId;
        this._description = config.description;
        this._destinationConfig.internalValue = config.destinationConfig;
        this._environment = config.environment;
        this._name = config.name;
        this._projectId = config.projectId;
        this._secretPath = config.secretPath;
        this._syncOptions.internalValue = config.syncOptions;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // auto_sync_enabled - computed: true, optional: true, required: false
    _autoSyncEnabled;
    get autoSyncEnabled() {
        return this.getBooleanAttribute('auto_sync_enabled');
    }
    set autoSyncEnabled(value) {
        this._autoSyncEnabled = value;
    }
    resetAutoSyncEnabled() {
        this._autoSyncEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoSyncEnabledInput() {
        return this._autoSyncEnabled;
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
    // destination_config - computed: false, optional: false, required: true
    _destinationConfig = new SecretSyncAwsSecretsManagerDestinationConfigOutputReference(this, "destination_config");
    get destinationConfig() {
        return this._destinationConfig;
    }
    putDestinationConfig(value) {
        this._destinationConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get destinationConfigInput() {
        return this._destinationConfig.internalValue;
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
    // sync_options - computed: false, optional: false, required: true
    _syncOptions = new SecretSyncAwsSecretsManagerSyncOptionsOutputReference(this, "sync_options");
    get syncOptions() {
        return this._syncOptions;
    }
    putSyncOptions(value) {
        this._syncOptions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get syncOptionsInput() {
        return this._syncOptions.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            auto_sync_enabled: cdktf.booleanToTerraform(this._autoSyncEnabled),
            connection_id: cdktf.stringToTerraform(this._connectionId),
            description: cdktf.stringToTerraform(this._description),
            destination_config: secretSyncAwsSecretsManagerDestinationConfigToTerraform(this._destinationConfig.internalValue),
            environment: cdktf.stringToTerraform(this._environment),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
            secret_path: cdktf.stringToTerraform(this._secretPath),
            sync_options: secretSyncAwsSecretsManagerSyncOptionsToTerraform(this._syncOptions.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            auto_sync_enabled: {
                value: cdktf.booleanToHclTerraform(this._autoSyncEnabled),
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
            destination_config: {
                value: secretSyncAwsSecretsManagerDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretSyncAwsSecretsManagerDestinationConfig",
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
            project_id: {
                value: cdktf.stringToHclTerraform(this._projectId),
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
            sync_options: {
                value: secretSyncAwsSecretsManagerSyncOptionsToHclTerraform(this._syncOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretSyncAwsSecretsManagerSyncOptions",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
