// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_permissions
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function actionsRepositoryPermissionsAllowedActionsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        github_owned_allowed: cdktf.booleanToTerraform(struct.githubOwnedAllowed),
        patterns_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.patternsAllowed),
        verified_allowed: cdktf.booleanToTerraform(struct.verifiedAllowed),
    };
}
export function actionsRepositoryPermissionsAllowedActionsConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        github_owned_allowed: {
            value: cdktf.booleanToHclTerraform(struct.githubOwnedAllowed),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        patterns_allowed: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.patternsAllowed),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        verified_allowed: {
            value: cdktf.booleanToHclTerraform(struct.verifiedAllowed),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ActionsRepositoryPermissionsAllowedActionsConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._githubOwnedAllowed !== undefined) {
            hasAnyValues = true;
            internalValueResult.githubOwnedAllowed = this._githubOwnedAllowed;
        }
        if (this._patternsAllowed !== undefined) {
            hasAnyValues = true;
            internalValueResult.patternsAllowed = this._patternsAllowed;
        }
        if (this._verifiedAllowed !== undefined) {
            hasAnyValues = true;
            internalValueResult.verifiedAllowed = this._verifiedAllowed;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._githubOwnedAllowed = undefined;
            this._patternsAllowed = undefined;
            this._verifiedAllowed = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._githubOwnedAllowed = value.githubOwnedAllowed;
            this._patternsAllowed = value.patternsAllowed;
            this._verifiedAllowed = value.verifiedAllowed;
        }
    }
    // github_owned_allowed - computed: false, optional: false, required: true
    _githubOwnedAllowed;
    get githubOwnedAllowed() {
        return this.getBooleanAttribute('github_owned_allowed');
    }
    set githubOwnedAllowed(value) {
        this._githubOwnedAllowed = value;
    }
    // Temporarily expose input value. Use with caution.
    get githubOwnedAllowedInput() {
        return this._githubOwnedAllowed;
    }
    // patterns_allowed - computed: false, optional: true, required: false
    _patternsAllowed;
    get patternsAllowed() {
        return cdktf.Fn.tolist(this.getListAttribute('patterns_allowed'));
    }
    set patternsAllowed(value) {
        this._patternsAllowed = value;
    }
    resetPatternsAllowed() {
        this._patternsAllowed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get patternsAllowedInput() {
        return this._patternsAllowed;
    }
    // verified_allowed - computed: false, optional: true, required: false
    _verifiedAllowed;
    get verifiedAllowed() {
        return this.getBooleanAttribute('verified_allowed');
    }
    set verifiedAllowed(value) {
        this._verifiedAllowed = value;
    }
    resetVerifiedAllowed() {
        this._verifiedAllowed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get verifiedAllowedInput() {
        return this._verifiedAllowed;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_permissions github_actions_repository_permissions}
*/
export class ActionsRepositoryPermissions extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_actions_repository_permissions";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ActionsRepositoryPermissions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsRepositoryPermissions to import
    * @param importFromId The id of the existing ActionsRepositoryPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_permissions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsRepositoryPermissions to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_repository_permissions", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_permissions github_actions_repository_permissions} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsRepositoryPermissionsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_actions_repository_permissions',
            terraformGeneratorMetadata: {
                providerName: 'github',
                providerVersion: '6.12.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._allowedActions = config.allowedActions;
        this._enabled = config.enabled;
        this._id = config.id;
        this._repository = config.repository;
        this._shaPinningRequired = config.shaPinningRequired;
        this._allowedActionsConfig.internalValue = config.allowedActionsConfig;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // allowed_actions - computed: false, optional: true, required: false
    _allowedActions;
    get allowedActions() {
        return this.getStringAttribute('allowed_actions');
    }
    set allowedActions(value) {
        this._allowedActions = value;
    }
    resetAllowedActions() {
        this._allowedActions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedActionsInput() {
        return this._allowedActions;
    }
    // enabled - computed: false, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // id - computed: true, optional: true, required: false
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // repository - computed: false, optional: false, required: true
    _repository;
    get repository() {
        return this.getStringAttribute('repository');
    }
    set repository(value) {
        this._repository = value;
    }
    // Temporarily expose input value. Use with caution.
    get repositoryInput() {
        return this._repository;
    }
    // sha_pinning_required - computed: true, optional: true, required: false
    _shaPinningRequired;
    get shaPinningRequired() {
        return this.getBooleanAttribute('sha_pinning_required');
    }
    set shaPinningRequired(value) {
        this._shaPinningRequired = value;
    }
    resetShaPinningRequired() {
        this._shaPinningRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get shaPinningRequiredInput() {
        return this._shaPinningRequired;
    }
    // allowed_actions_config - computed: false, optional: true, required: false
    _allowedActionsConfig = new ActionsRepositoryPermissionsAllowedActionsConfigOutputReference(this, "allowed_actions_config");
    get allowedActionsConfig() {
        return this._allowedActionsConfig;
    }
    putAllowedActionsConfig(value) {
        this._allowedActionsConfig.internalValue = value;
    }
    resetAllowedActionsConfig() {
        this._allowedActionsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedActionsConfigInput() {
        return this._allowedActionsConfig.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            allowed_actions: cdktf.stringToTerraform(this._allowedActions),
            enabled: cdktf.booleanToTerraform(this._enabled),
            id: cdktf.stringToTerraform(this._id),
            repository: cdktf.stringToTerraform(this._repository),
            sha_pinning_required: cdktf.booleanToTerraform(this._shaPinningRequired),
            allowed_actions_config: actionsRepositoryPermissionsAllowedActionsConfigToTerraform(this._allowedActionsConfig.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            allowed_actions: {
                value: cdktf.stringToHclTerraform(this._allowedActions),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sha_pinning_required: {
                value: cdktf.booleanToHclTerraform(this._shaPinningRequired),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allowed_actions_config: {
                value: actionsRepositoryPermissionsAllowedActionsConfigToHclTerraform(this._allowedActionsConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ActionsRepositoryPermissionsAllowedActionsConfigList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
