// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_group
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function projectGroupRolesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        is_temporary: cdktf.booleanToTerraform(struct.isTemporary),
        role_slug: cdktf.stringToTerraform(struct.roleSlug),
        temporary_access_start_time: cdktf.stringToTerraform(struct.temporaryAccessStartTime),
        temporary_range: cdktf.stringToTerraform(struct.temporaryRange),
    };
}
export function projectGroupRolesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
        temporary_access_start_time: {
            value: cdktf.stringToHclTerraform(struct.temporaryAccessStartTime),
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
export class ProjectGroupRolesOutputReference extends cdktf.ComplexObject {
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
        if (this._isTemporary !== undefined) {
            hasAnyValues = true;
            internalValueResult.isTemporary = this._isTemporary;
        }
        if (this._roleSlug !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleSlug = this._roleSlug;
        }
        if (this._temporaryAccessStartTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.temporaryAccessStartTime = this._temporaryAccessStartTime;
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
            this._isTemporary = undefined;
            this._roleSlug = undefined;
            this._temporaryAccessStartTime = undefined;
            this._temporaryRange = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isTemporary = value.isTemporary;
            this._roleSlug = value.roleSlug;
            this._temporaryAccessStartTime = value.temporaryAccessStartTime;
            this._temporaryRange = value.temporaryRange;
        }
    }
    // is_temporary - computed: false, optional: true, required: false
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
    // temporary_access_start_time - computed: false, optional: true, required: false
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
    // temporary_range - computed: false, optional: true, required: false
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
export class ProjectGroupRolesList extends cdktf.ComplexList {
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
        return new ProjectGroupRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_group infisical_project_group}
*/
export class ProjectGroup extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_project_group";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ProjectGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ProjectGroup to import
    * @param importFromId The id of the existing ProjectGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ProjectGroup to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_project_group", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_group infisical_project_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProjectGroupConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_project_group',
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
        this._groupId = config.groupId;
        this._groupName = config.groupName;
        this._projectId = config.projectId;
        this._roles.internalValue = config.roles;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // group_id - computed: true, optional: true, required: false
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
    _roles = new ProjectGroupRolesList(this, "roles", true);
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            group_id: cdktf.stringToTerraform(this._groupId),
            group_name: cdktf.stringToTerraform(this._groupName),
            project_id: cdktf.stringToTerraform(this._projectId),
            roles: cdktf.listMapper(projectGroupRolesToTerraform, false)(this._roles.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            group_id: {
                value: cdktf.stringToHclTerraform(this._groupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            group_name: {
                value: cdktf.stringToHclTerraform(this._groupName),
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
            roles: {
                value: cdktf.listMapperHcl(projectGroupRolesToHclTerraform, false)(this._roles.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ProjectGroupRolesList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
