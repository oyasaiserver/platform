// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function secretSyncGitlabDestinationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        group_id: cdktf.stringToTerraform(struct.groupId),
        group_name: cdktf.stringToTerraform(struct.groupName),
        project_id: cdktf.stringToTerraform(struct.projectId),
        project_name: cdktf.stringToTerraform(struct.projectName),
        scope: cdktf.stringToTerraform(struct.scope),
        should_hide_secrets: cdktf.booleanToTerraform(struct.shouldHideSecrets),
        should_mask_secrets: cdktf.booleanToTerraform(struct.shouldMaskSecrets),
        should_protect_secrets: cdktf.booleanToTerraform(struct.shouldProtectSecrets),
        target_environment: cdktf.stringToTerraform(struct.targetEnvironment),
    };
}
export function secretSyncGitlabDestinationConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        group_id: {
            value: cdktf.stringToHclTerraform(struct.groupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        group_name: {
            value: cdktf.stringToHclTerraform(struct.groupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        project_id: {
            value: cdktf.stringToHclTerraform(struct.projectId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        project_name: {
            value: cdktf.stringToHclTerraform(struct.projectName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scope: {
            value: cdktf.stringToHclTerraform(struct.scope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        should_hide_secrets: {
            value: cdktf.booleanToHclTerraform(struct.shouldHideSecrets),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        should_mask_secrets: {
            value: cdktf.booleanToHclTerraform(struct.shouldMaskSecrets),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        should_protect_secrets: {
            value: cdktf.booleanToHclTerraform(struct.shouldProtectSecrets),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        target_environment: {
            value: cdktf.stringToHclTerraform(struct.targetEnvironment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class SecretSyncGitlabDestinationConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._groupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupId = this._groupId;
        }
        if (this._groupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupName = this._groupName;
        }
        if (this._projectId !== undefined) {
            hasAnyValues = true;
            internalValueResult.projectId = this._projectId;
        }
        if (this._projectName !== undefined) {
            hasAnyValues = true;
            internalValueResult.projectName = this._projectName;
        }
        if (this._scope !== undefined) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        if (this._shouldHideSecrets !== undefined) {
            hasAnyValues = true;
            internalValueResult.shouldHideSecrets = this._shouldHideSecrets;
        }
        if (this._shouldMaskSecrets !== undefined) {
            hasAnyValues = true;
            internalValueResult.shouldMaskSecrets = this._shouldMaskSecrets;
        }
        if (this._shouldProtectSecrets !== undefined) {
            hasAnyValues = true;
            internalValueResult.shouldProtectSecrets = this._shouldProtectSecrets;
        }
        if (this._targetEnvironment !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetEnvironment = this._targetEnvironment;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._groupId = undefined;
            this._groupName = undefined;
            this._projectId = undefined;
            this._projectName = undefined;
            this._scope = undefined;
            this._shouldHideSecrets = undefined;
            this._shouldMaskSecrets = undefined;
            this._shouldProtectSecrets = undefined;
            this._targetEnvironment = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._groupId = value.groupId;
            this._groupName = value.groupName;
            this._projectId = value.projectId;
            this._projectName = value.projectName;
            this._scope = value.scope;
            this._shouldHideSecrets = value.shouldHideSecrets;
            this._shouldMaskSecrets = value.shouldMaskSecrets;
            this._shouldProtectSecrets = value.shouldProtectSecrets;
            this._targetEnvironment = value.targetEnvironment;
        }
    }
    // group_id - computed: false, optional: true, required: false
    _groupId;
    get groupId() {
        return this.getStringAttribute('group_id');
    }
    set groupId(value) {
        this._groupId = value;
    }
    resetGroupId() {
        this._groupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get groupIdInput() {
        return this._groupId;
    }
    // group_name - computed: false, optional: true, required: false
    _groupName;
    get groupName() {
        return this.getStringAttribute('group_name');
    }
    set groupName(value) {
        this._groupName = value;
    }
    resetGroupName() {
        this._groupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get groupNameInput() {
        return this._groupName;
    }
    // project_id - computed: false, optional: true, required: false
    _projectId;
    get projectId() {
        return this.getStringAttribute('project_id');
    }
    set projectId(value) {
        this._projectId = value;
    }
    resetProjectId() {
        this._projectId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get projectIdInput() {
        return this._projectId;
    }
    // project_name - computed: false, optional: true, required: false
    _projectName;
    get projectName() {
        return this.getStringAttribute('project_name');
    }
    set projectName(value) {
        this._projectName = value;
    }
    resetProjectName() {
        this._projectName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get projectNameInput() {
        return this._projectName;
    }
    // scope - computed: false, optional: false, required: true
    _scope;
    get scope() {
        return this.getStringAttribute('scope');
    }
    set scope(value) {
        this._scope = value;
    }
    // Temporarily expose input value. Use with caution.
    get scopeInput() {
        return this._scope;
    }
    // should_hide_secrets - computed: true, optional: true, required: false
    _shouldHideSecrets;
    get shouldHideSecrets() {
        return this.getBooleanAttribute('should_hide_secrets');
    }
    set shouldHideSecrets(value) {
        this._shouldHideSecrets = value;
    }
    resetShouldHideSecrets() {
        this._shouldHideSecrets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get shouldHideSecretsInput() {
        return this._shouldHideSecrets;
    }
    // should_mask_secrets - computed: true, optional: true, required: false
    _shouldMaskSecrets;
    get shouldMaskSecrets() {
        return this.getBooleanAttribute('should_mask_secrets');
    }
    set shouldMaskSecrets(value) {
        this._shouldMaskSecrets = value;
    }
    resetShouldMaskSecrets() {
        this._shouldMaskSecrets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get shouldMaskSecretsInput() {
        return this._shouldMaskSecrets;
    }
    // should_protect_secrets - computed: true, optional: true, required: false
    _shouldProtectSecrets;
    get shouldProtectSecrets() {
        return this.getBooleanAttribute('should_protect_secrets');
    }
    set shouldProtectSecrets(value) {
        this._shouldProtectSecrets = value;
    }
    resetShouldProtectSecrets() {
        this._shouldProtectSecrets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get shouldProtectSecretsInput() {
        return this._shouldProtectSecrets;
    }
    // target_environment - computed: false, optional: false, required: true
    _targetEnvironment;
    get targetEnvironment() {
        return this.getStringAttribute('target_environment');
    }
    set targetEnvironment(value) {
        this._targetEnvironment = value;
    }
    // Temporarily expose input value. Use with caution.
    get targetEnvironmentInput() {
        return this._targetEnvironment;
    }
}
export function secretSyncGitlabSyncOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        disable_secret_deletion: cdktf.booleanToTerraform(struct.disableSecretDeletion),
        initial_sync_behavior: cdktf.stringToTerraform(struct.initialSyncBehavior),
        key_schema: cdktf.stringToTerraform(struct.keySchema),
    };
}
export function secretSyncGitlabSyncOptionsToHclTerraform(struct) {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class SecretSyncGitlabSyncOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._initialSyncBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.initialSyncBehavior = this._initialSyncBehavior;
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
            this._initialSyncBehavior = undefined;
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
            this._initialSyncBehavior = value.initialSyncBehavior;
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab infisical_secret_sync_gitlab}
*/
export class SecretSyncGitlab extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_secret_sync_gitlab";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SecretSyncGitlab resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretSyncGitlab to import
    * @param importFromId The id of the existing SecretSyncGitlab that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretSyncGitlab to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_sync_gitlab", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_sync_gitlab infisical_secret_sync_gitlab} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretSyncGitlabConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_secret_sync_gitlab',
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
    _destinationConfig = new SecretSyncGitlabDestinationConfigOutputReference(this, "destination_config");
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
    _syncOptions = new SecretSyncGitlabSyncOptionsOutputReference(this, "sync_options");
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
            destination_config: secretSyncGitlabDestinationConfigToTerraform(this._destinationConfig.internalValue),
            environment: cdktf.stringToTerraform(this._environment),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
            secret_path: cdktf.stringToTerraform(this._secretPath),
            sync_options: secretSyncGitlabSyncOptionsToTerraform(this._syncOptions.internalValue),
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
                value: secretSyncGitlabDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretSyncGitlabDestinationConfig",
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
                value: secretSyncGitlabSyncOptionsToHclTerraform(this._syncOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SecretSyncGitlabSyncOptions",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
