// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function projectIdentitySpecificPrivilegePermissionConditionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        environment: cdktf.stringToTerraform(struct.environment),
        secret_path: cdktf.stringToTerraform(struct.secretPath),
    };
}
export function projectIdentitySpecificPrivilegePermissionConditionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        environment: {
            value: cdktf.stringToHclTerraform(struct.environment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_path: {
            value: cdktf.stringToHclTerraform(struct.secretPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ProjectIdentitySpecificPrivilegePermissionConditionsOutputReference extends cdktf.ComplexObject {
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
        if (this._environment !== undefined) {
            hasAnyValues = true;
            internalValueResult.environment = this._environment;
        }
        if (this._secretPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretPath = this._secretPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._environment = undefined;
            this._secretPath = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._environment = value.environment;
            this._secretPath = value.secretPath;
        }
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
    // secret_path - computed: false, optional: true, required: false
    _secretPath;
    get secretPath() {
        return this.getStringAttribute('secret_path');
    }
    set secretPath(value) {
        this._secretPath = value;
    }
    resetSecretPath() {
        this._secretPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secretPathInput() {
        return this._secretPath;
    }
}
export function projectIdentitySpecificPrivilegePermissionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.actions),
        conditions: projectIdentitySpecificPrivilegePermissionConditionsToTerraform(struct.conditions),
        subject: cdktf.stringToTerraform(struct.subject),
    };
}
export function projectIdentitySpecificPrivilegePermissionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        actions: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.actions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        conditions: {
            value: projectIdentitySpecificPrivilegePermissionConditionsToHclTerraform(struct.conditions),
            isBlock: true,
            type: "struct",
            storageClassType: "ProjectIdentitySpecificPrivilegePermissionConditions",
        },
        subject: {
            value: cdktf.stringToHclTerraform(struct.subject),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ProjectIdentitySpecificPrivilegePermissionOutputReference extends cdktf.ComplexObject {
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
        if (this._actions !== undefined) {
            hasAnyValues = true;
            internalValueResult.actions = this._actions;
        }
        if (this._conditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.conditions = this._conditions?.internalValue;
        }
        if (this._subject !== undefined) {
            hasAnyValues = true;
            internalValueResult.subject = this._subject;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actions = undefined;
            this._conditions.internalValue = undefined;
            this._subject = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actions = value.actions;
            this._conditions.internalValue = value.conditions;
            this._subject = value.subject;
        }
    }
    // actions - computed: false, optional: false, required: true
    _actions;
    get actions() {
        return this.getListAttribute('actions');
    }
    set actions(value) {
        this._actions = value;
    }
    // Temporarily expose input value. Use with caution.
    get actionsInput() {
        return this._actions;
    }
    // conditions - computed: false, optional: false, required: true
    _conditions = new ProjectIdentitySpecificPrivilegePermissionConditionsOutputReference(this, "conditions");
    get conditions() {
        return this._conditions;
    }
    putConditions(value) {
        this._conditions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get conditionsInput() {
        return this._conditions.internalValue;
    }
    // subject - computed: false, optional: false, required: true
    _subject;
    get subject() {
        return this.getStringAttribute('subject');
    }
    set subject(value) {
        this._subject = value;
    }
    // Temporarily expose input value. Use with caution.
    get subjectInput() {
        return this._subject;
    }
}
export function projectIdentitySpecificPrivilegePermissionsV2ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.action),
        conditions: cdktf.stringToTerraform(struct.conditions),
        inverted: cdktf.booleanToTerraform(struct.inverted),
        subject: cdktf.stringToTerraform(struct.subject),
    };
}
export function projectIdentitySpecificPrivilegePermissionsV2ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        action: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.action),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        conditions: {
            value: cdktf.stringToHclTerraform(struct.conditions),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        inverted: {
            value: cdktf.booleanToHclTerraform(struct.inverted),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        subject: {
            value: cdktf.stringToHclTerraform(struct.subject),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ProjectIdentitySpecificPrivilegePermissionsV2OutputReference extends cdktf.ComplexObject {
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
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._conditions !== undefined) {
            hasAnyValues = true;
            internalValueResult.conditions = this._conditions;
        }
        if (this._inverted !== undefined) {
            hasAnyValues = true;
            internalValueResult.inverted = this._inverted;
        }
        if (this._subject !== undefined) {
            hasAnyValues = true;
            internalValueResult.subject = this._subject;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._conditions = undefined;
            this._inverted = undefined;
            this._subject = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
            this._conditions = value.conditions;
            this._inverted = value.inverted;
            this._subject = value.subject;
        }
    }
    // action - computed: false, optional: false, required: true
    _action;
    get action() {
        return cdktf.Fn.tolist(this.getListAttribute('action'));
    }
    set action(value) {
        this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    get actionInput() {
        return this._action;
    }
    // conditions - computed: false, optional: true, required: false
    _conditions;
    get conditions() {
        return this.getStringAttribute('conditions');
    }
    set conditions(value) {
        this._conditions = value;
    }
    resetConditions() {
        this._conditions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get conditionsInput() {
        return this._conditions;
    }
    // inverted - computed: true, optional: true, required: false
    _inverted;
    get inverted() {
        return this.getBooleanAttribute('inverted');
    }
    set inverted(value) {
        this._inverted = value;
    }
    resetInverted() {
        this._inverted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get invertedInput() {
        return this._inverted;
    }
    // subject - computed: false, optional: false, required: true
    _subject;
    get subject() {
        return this.getStringAttribute('subject');
    }
    set subject(value) {
        this._subject = value;
    }
    // Temporarily expose input value. Use with caution.
    get subjectInput() {
        return this._subject;
    }
}
export class ProjectIdentitySpecificPrivilegePermissionsV2List extends cdktf.ComplexList {
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
        return new ProjectIdentitySpecificPrivilegePermissionsV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege infisical_project_identity_specific_privilege}
*/
export class ProjectIdentitySpecificPrivilege extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_project_identity_specific_privilege";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ProjectIdentitySpecificPrivilege resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ProjectIdentitySpecificPrivilege to import
    * @param importFromId The id of the existing ProjectIdentitySpecificPrivilege that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ProjectIdentitySpecificPrivilege to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_project_identity_specific_privilege", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege infisical_project_identity_specific_privilege} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProjectIdentitySpecificPrivilegeConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_project_identity_specific_privilege',
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
        this._identityId = config.identityId;
        this._isTemporary = config.isTemporary;
        this._permission.internalValue = config.permission;
        this._permissionsV2.internalValue = config.permissionsV2;
        this._projectSlug = config.projectSlug;
        this._slug = config.slug;
        this._temporaryAccessEndTime = config.temporaryAccessEndTime;
        this._temporaryAccessStartTime = config.temporaryAccessStartTime;
        this._temporaryMode = config.temporaryMode;
        this._temporaryRange = config.temporaryRange;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // identity_id - computed: false, optional: false, required: true
    _identityId;
    get identityId() {
        return this.getStringAttribute('identity_id');
    }
    set identityId(value) {
        this._identityId = value;
    }
    // Temporarily expose input value. Use with caution.
    get identityIdInput() {
        return this._identityId;
    }
    // is_temporary - computed: true, optional: true, required: false
    _isTemporary;
    get isTemporary() {
        return this.getBooleanAttribute('is_temporary');
    }
    set isTemporary(value) {
        this._isTemporary = value;
    }
    resetIsTemporary() {
        this._isTemporary = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get isTemporaryInput() {
        return this._isTemporary;
    }
    // permission - computed: false, optional: true, required: false
    _permission = new ProjectIdentitySpecificPrivilegePermissionOutputReference(this, "permission");
    get permission() {
        return this._permission;
    }
    putPermission(value) {
        this._permission.internalValue = value;
    }
    resetPermission() {
        this._permission.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get permissionInput() {
        return this._permission.internalValue;
    }
    // permissions_v2 - computed: false, optional: true, required: false
    _permissionsV2 = new ProjectIdentitySpecificPrivilegePermissionsV2List(this, "permissions_v2", false);
    get permissionsV2() {
        return this._permissionsV2;
    }
    putPermissionsV2(value) {
        this._permissionsV2.internalValue = value;
    }
    resetPermissionsV2() {
        this._permissionsV2.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get permissionsV2Input() {
        return this._permissionsV2.internalValue;
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
    // slug - computed: true, optional: true, required: false
    _slug;
    get slug() {
        return this.getStringAttribute('slug');
    }
    set slug(value) {
        this._slug = value;
    }
    resetSlug() {
        this._slug = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get slugInput() {
        return this._slug;
    }
    // temporary_access_end_time - computed: true, optional: true, required: false
    _temporaryAccessEndTime;
    get temporaryAccessEndTime() {
        return this.getStringAttribute('temporary_access_end_time');
    }
    set temporaryAccessEndTime(value) {
        this._temporaryAccessEndTime = value;
    }
    resetTemporaryAccessEndTime() {
        this._temporaryAccessEndTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get temporaryAccessEndTimeInput() {
        return this._temporaryAccessEndTime;
    }
    // temporary_access_start_time - computed: true, optional: true, required: false
    _temporaryAccessStartTime;
    get temporaryAccessStartTime() {
        return this.getStringAttribute('temporary_access_start_time');
    }
    set temporaryAccessStartTime(value) {
        this._temporaryAccessStartTime = value;
    }
    resetTemporaryAccessStartTime() {
        this._temporaryAccessStartTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get temporaryAccessStartTimeInput() {
        return this._temporaryAccessStartTime;
    }
    // temporary_mode - computed: true, optional: true, required: false
    _temporaryMode;
    get temporaryMode() {
        return this.getStringAttribute('temporary_mode');
    }
    set temporaryMode(value) {
        this._temporaryMode = value;
    }
    resetTemporaryMode() {
        this._temporaryMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get temporaryModeInput() {
        return this._temporaryMode;
    }
    // temporary_range - computed: true, optional: true, required: false
    _temporaryRange;
    get temporaryRange() {
        return this.getStringAttribute('temporary_range');
    }
    set temporaryRange(value) {
        this._temporaryRange = value;
    }
    resetTemporaryRange() {
        this._temporaryRange = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get temporaryRangeInput() {
        return this._temporaryRange;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            identity_id: cdktf.stringToTerraform(this._identityId),
            is_temporary: cdktf.booleanToTerraform(this._isTemporary),
            permission: projectIdentitySpecificPrivilegePermissionToTerraform(this._permission.internalValue),
            permissions_v2: cdktf.listMapper(projectIdentitySpecificPrivilegePermissionsV2ToTerraform, false)(this._permissionsV2.internalValue),
            project_slug: cdktf.stringToTerraform(this._projectSlug),
            slug: cdktf.stringToTerraform(this._slug),
            temporary_access_end_time: cdktf.stringToTerraform(this._temporaryAccessEndTime),
            temporary_access_start_time: cdktf.stringToTerraform(this._temporaryAccessStartTime),
            temporary_mode: cdktf.stringToTerraform(this._temporaryMode),
            temporary_range: cdktf.stringToTerraform(this._temporaryRange),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            identity_id: {
                value: cdktf.stringToHclTerraform(this._identityId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            is_temporary: {
                value: cdktf.booleanToHclTerraform(this._isTemporary),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            permission: {
                value: projectIdentitySpecificPrivilegePermissionToHclTerraform(this._permission.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ProjectIdentitySpecificPrivilegePermission",
            },
            permissions_v2: {
                value: cdktf.listMapperHcl(projectIdentitySpecificPrivilegePermissionsV2ToHclTerraform, false)(this._permissionsV2.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ProjectIdentitySpecificPrivilegePermissionsV2List",
            },
            project_slug: {
                value: cdktf.stringToHclTerraform(this._projectSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            slug: {
                value: cdktf.stringToHclTerraform(this._slug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            temporary_access_end_time: {
                value: cdktf.stringToHclTerraform(this._temporaryAccessEndTime),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            temporary_access_start_time: {
                value: cdktf.stringToHclTerraform(this._temporaryAccessStartTime),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            temporary_mode: {
                value: cdktf.stringToHclTerraform(this._temporaryMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            temporary_range: {
                value: cdktf.stringToHclTerraform(this._temporaryRange),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
