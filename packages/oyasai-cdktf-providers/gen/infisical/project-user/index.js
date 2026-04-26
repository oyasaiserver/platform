// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_user
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function projectUserRolesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        custom_role_id: cdktf.stringToTerraform(struct.customRoleId),
        is_temporary: cdktf.booleanToTerraform(struct.isTemporary),
        role_slug: cdktf.stringToTerraform(struct.roleSlug),
        temporary_access_end_time: cdktf.stringToTerraform(struct.temporaryAccessEndTime),
        temporary_access_start_time: cdktf.stringToTerraform(struct.temporaryAccessStartTime),
        temporary_mode: cdktf.stringToTerraform(struct.temporaryMode),
        temporary_range: cdktf.stringToTerraform(struct.temporaryRange),
    };
}
export function projectUserRolesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        custom_role_id: {
            value: cdktf.stringToHclTerraform(struct.customRoleId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        is_temporary: {
            value: cdktf.booleanToHclTerraform(struct.isTemporary),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        role_slug: {
            value: cdktf.stringToHclTerraform(struct.roleSlug),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        temporary_access_end_time: {
            value: cdktf.stringToHclTerraform(struct.temporaryAccessEndTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        temporary_access_start_time: {
            value: cdktf.stringToHclTerraform(struct.temporaryAccessStartTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        temporary_mode: {
            value: cdktf.stringToHclTerraform(struct.temporaryMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        temporary_range: {
            value: cdktf.stringToHclTerraform(struct.temporaryRange),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ProjectUserRolesOutputReference extends cdktf.ComplexObject {
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
        if (this._customRoleId !== undefined) {
            hasAnyValues = true;
            internalValueResult.customRoleId = this._customRoleId;
        }
        if (this._isTemporary !== undefined) {
            hasAnyValues = true;
            internalValueResult.isTemporary = this._isTemporary;
        }
        if (this._roleSlug !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleSlug = this._roleSlug;
        }
        if (this._temporaryAccessEndTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.temporaryAccessEndTime = this._temporaryAccessEndTime;
        }
        if (this._temporaryAccessStartTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.temporaryAccessStartTime = this._temporaryAccessStartTime;
        }
        if (this._temporaryMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.temporaryMode = this._temporaryMode;
        }
        if (this._temporaryRange !== undefined) {
            hasAnyValues = true;
            internalValueResult.temporaryRange = this._temporaryRange;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customRoleId = undefined;
            this._isTemporary = undefined;
            this._roleSlug = undefined;
            this._temporaryAccessEndTime = undefined;
            this._temporaryAccessStartTime = undefined;
            this._temporaryMode = undefined;
            this._temporaryRange = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customRoleId = value.customRoleId;
            this._isTemporary = value.isTemporary;
            this._roleSlug = value.roleSlug;
            this._temporaryAccessEndTime = value.temporaryAccessEndTime;
            this._temporaryAccessStartTime = value.temporaryAccessStartTime;
            this._temporaryMode = value.temporaryMode;
            this._temporaryRange = value.temporaryRange;
        }
    }
    // custom_role_id - computed: true, optional: true, required: false
    _customRoleId;
    get customRoleId() {
        return this.getStringAttribute('custom_role_id');
    }
    set customRoleId(value) {
        this._customRoleId = value;
    }
    resetCustomRoleId() {
        this._customRoleId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customRoleIdInput() {
        return this._customRoleId;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
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
    // role_slug - computed: false, optional: false, required: true
    _roleSlug;
    get roleSlug() {
        return this.getStringAttribute('role_slug');
    }
    set roleSlug(value) {
        this._roleSlug = value;
    }
    // Temporarily expose input value. Use with caution.
    get roleSlugInput() {
        return this._roleSlug;
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
}
export class ProjectUserRolesList extends cdktf.ComplexList {
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
        return new ProjectUserRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function projectUserUserToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function projectUserUserToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class ProjectUserUserOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // email - computed: true, optional: false, required: false
    get email() {
        return this.getStringAttribute('email');
    }
    // first_name - computed: true, optional: false, required: false
    get firstName() {
        return this.getStringAttribute('first_name');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // last_name - computed: true, optional: false, required: false
    get lastName() {
        return this.getStringAttribute('last_name');
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_user infisical_project_user}
*/
export class ProjectUser extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_project_user";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ProjectUser resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ProjectUser to import
    * @param importFromId The id of the existing ProjectUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ProjectUser to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_project_user", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_user infisical_project_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProjectUserConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_project_user',
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
        this._projectId = config.projectId;
        this._roles.internalValue = config.roles;
        this._username = config.username;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // membership_id - computed: true, optional: false, required: false
    get membershipId() {
        return this.getStringAttribute('membership_id');
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
    // roles - computed: false, optional: false, required: true
    _roles = new ProjectUserRolesList(this, "roles", false);
    get roles() {
        return this._roles;
    }
    putRoles(value) {
        this._roles.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get rolesInput() {
        return this._roles.internalValue;
    }
    // user - computed: true, optional: false, required: false
    _user = new ProjectUserUserOutputReference(this, "user");
    get user() {
        return this._user;
    }
    // username - computed: false, optional: false, required: true
    _username;
    get username() {
        return this.getStringAttribute('username');
    }
    set username(value) {
        this._username = value;
    }
    // Temporarily expose input value. Use with caution.
    get usernameInput() {
        return this._username;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            project_id: cdktf.stringToTerraform(this._projectId),
            roles: cdktf.listMapper(projectUserRolesToTerraform, false)(this._roles.internalValue),
            username: cdktf.stringToTerraform(this._username),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            project_id: {
                value: cdktf.stringToHclTerraform(this._projectId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            roles: {
                value: cdktf.listMapperHcl(projectUserRolesToHclTerraform, false)(this._roles.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ProjectUserRolesList",
            },
            username: {
                value: cdktf.stringToHclTerraform(this._username),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
