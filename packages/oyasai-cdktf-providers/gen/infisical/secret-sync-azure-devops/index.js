// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_devops
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function secretSyncAzureDevopsDestinationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        devops_project_id: cdktf.stringToTerraform(struct.devopsProjectId),
    };
}
export function secretSyncAzureDevopsDestinationConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        devops_project_id: {
            value: cdktf.stringToHclTerraform(struct.devopsProjectId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class SecretSyncAzureDevopsDestinationConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._devopsProjectId !== undefined) {
            hasAnyValues = true;
            internalValueResult.devopsProjectId = this._devopsProjectId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._devopsProjectId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._devopsProjectId = value.devopsProjectId;
        }
    }
    // devops_project_id - computed: false, optional: false, required: true
    _devopsProjectId;
    get devopsProjectId() {
        return this.getStringAttribute('devops_project_id');
    }
    set devopsProjectId(value) {
        this._devopsProjectId = value;
    }
    // Temporarily expose input value. Use with caution.
    get devopsProjectIdInput() {
        return this._devopsProjectId;
    }
}
export function secretSyncAzureDevopsSyncOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disable_secret_deletion: cdktf.booleanToTerraform(struct.disableSecretDeletion),
        key_schema: cdktf.stringToTerraform(struct.keySchema),
    };
}
export function secretSyncAzureDevopsSyncOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        disable_secret_deletion: {
            value: cdktf.booleanToHclTerraform(struct.disableSecretDeletion),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        key_schema: {
            value: cdktf.stringToHclTerraform(struct.keySchema),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class SecretSyncAzureDevopsSyncOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._disableSecretDeletion !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableSecretDeletion = this._disableSecretDeletion;
        }
        if (this._keySchema !== undefined) {
            hasAnyValues = true;
            internalValueResult.keySchema = this._keySchema;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._disableSecretDeletion = undefined;
            this._keySchema = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._disableSecretDeletion = value.disableSecretDeletion;
            this._keySchema = value.keySchema;
        }
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_devops infisical_secret_sync_azure_devops}
*/
export class SecretSyncAzureDevops extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_secret_sync_azure_devops";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SecretSyncAzureDevops resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretSyncAzureDevops to import
    * @param importFromId The id of the existing SecretSyncAzureDevops that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_devops#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretSyncAzureDevops to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_sync_azure_devops", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_azure_devops infisical_secret_sync_azure_devops} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretSyncAzureDevopsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_secret_sync_azure_devops',
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
    _destinationConfig = new SecretSyncAzureDevopsDestinationConfigOutputReference(this, "destination_config");
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
    _syncOptions = new SecretSyncAzureDevopsSyncOptionsOutputReference(this, "sync_options");
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
            destination_config: secretSyncAzureDevopsDestinationConfigToTerraform(this._destinationConfig.internalValue),
            environment: cdktf.stringToTerraform(this._environment),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
            secret_path: cdktf.stringToTerraform(this._secretPath),
            sync_options: secretSyncAzureDevopsSyncOptionsToTerraform(this._syncOptions.internalValue),
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
                value: secretSyncAzureDevopsDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretSyncAzureDevopsDestinationConfig",
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
                value: secretSyncAzureDevopsSyncOptionsToHclTerraform(this._syncOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretSyncAzureDevopsSyncOptions",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
