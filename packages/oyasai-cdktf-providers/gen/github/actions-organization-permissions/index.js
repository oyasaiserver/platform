// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_permissions
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function actionsOrganizationPermissionsAllowedActionsConfigToTerraform(struct) {
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
export function actionsOrganizationPermissionsAllowedActionsConfigToHclTerraform(struct) {
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
export class ActionsOrganizationPermissionsAllowedActionsConfigOutputReference extends cdktf.ComplexObject {
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
export function actionsOrganizationPermissionsEnabledRepositoriesConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        repository_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct.repositoryIds),
    };
}
export function actionsOrganizationPermissionsEnabledRepositoriesConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        repository_ids: {
            value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct.repositoryIds),
            isBlock: false,
            type: "set",
            storageClassType: "numberList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._repositoryIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.repositoryIds = this._repositoryIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._repositoryIds = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._repositoryIds = value.repositoryIds;
        }
    }
    // repository_ids - computed: false, optional: false, required: true
    _repositoryIds;
    get repositoryIds() {
        return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('repository_ids')));
    }
    set repositoryIds(value) {
        this._repositoryIds = value;
    }
    // Temporarily expose input value. Use with caution.
    get repositoryIdsInput() {
        return this._repositoryIds;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_permissions github_actions_organization_permissions}
*/
export class ActionsOrganizationPermissions extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_actions_organization_permissions";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ActionsOrganizationPermissions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsOrganizationPermissions to import
    * @param importFromId The id of the existing ActionsOrganizationPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_permissions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsOrganizationPermissions to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_organization_permissions", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_permissions github_actions_organization_permissions} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsOrganizationPermissionsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_actions_organization_permissions',
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
        this._enabledRepositories = config.enabledRepositories;
        this._id = config.id;
        this._shaPinningRequired = config.shaPinningRequired;
        this._allowedActionsConfig.internalValue = config.allowedActionsConfig;
        this._enabledRepositoriesConfig.internalValue = config.enabledRepositoriesConfig;
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
    // enabled_repositories - computed: false, optional: false, required: true
    _enabledRepositories;
    get enabledRepositories() {
        return this.getStringAttribute('enabled_repositories');
    }
    set enabledRepositories(value) {
        this._enabledRepositories = value;
    }
    // Temporarily expose input value. Use with caution.
    get enabledRepositoriesInput() {
        return this._enabledRepositories;
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
    _allowedActionsConfig = new ActionsOrganizationPermissionsAllowedActionsConfigOutputReference(this, "allowed_actions_config");
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
    // enabled_repositories_config - computed: false, optional: true, required: false
    _enabledRepositoriesConfig = new ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference(this, "enabled_repositories_config");
    get enabledRepositoriesConfig() {
        return this._enabledRepositoriesConfig;
    }
    putEnabledRepositoriesConfig(value) {
        this._enabledRepositoriesConfig.internalValue = value;
    }
    resetEnabledRepositoriesConfig() {
        this._enabledRepositoriesConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledRepositoriesConfigInput() {
        return this._enabledRepositoriesConfig.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            allowed_actions: cdktf.stringToTerraform(this._allowedActions),
            enabled_repositories: cdktf.stringToTerraform(this._enabledRepositories),
            id: cdktf.stringToTerraform(this._id),
            sha_pinning_required: cdktf.booleanToTerraform(this._shaPinningRequired),
            allowed_actions_config: actionsOrganizationPermissionsAllowedActionsConfigToTerraform(this._allowedActionsConfig.internalValue),
            enabled_repositories_config: actionsOrganizationPermissionsEnabledRepositoriesConfigToTerraform(this._enabledRepositoriesConfig.internalValue),
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
            enabled_repositories: {
                value: cdktf.stringToHclTerraform(this._enabledRepositories),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
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
                value: actionsOrganizationPermissionsAllowedActionsConfigToHclTerraform(this._allowedActionsConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ActionsOrganizationPermissionsAllowedActionsConfigList",
            },
            enabled_repositories_config: {
                value: actionsOrganizationPermissionsEnabledRepositoriesConfigToHclTerraform(this._enabledRepositoriesConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ActionsOrganizationPermissionsEnabledRepositoriesConfigList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
