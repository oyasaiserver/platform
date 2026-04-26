// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_template
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function projectTemplateEnvironmentsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        position: cdktf.numberToTerraform(struct.position),
        slug: cdktf.stringToTerraform(struct.slug),
    };
}
export function projectTemplateEnvironmentsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        position: {
            value: cdktf.numberToHclTerraform(struct.position),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        slug: {
            value: cdktf.stringToHclTerraform(struct.slug),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ProjectTemplateEnvironmentsOutputReference extends cdktf.ComplexObject {
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
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._position !== undefined) {
            hasAnyValues = true;
            internalValueResult.position = this._position;
        }
        if (this._slug !== undefined) {
            hasAnyValues = true;
            internalValueResult.slug = this._slug;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._position = undefined;
            this._slug = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._position = value.position;
            this._slug = value.slug;
        }
    }
    // name - computed: true, optional: false, required: true
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
    // position - computed: true, optional: false, required: true
    _position;
    get position() {
        return this.getNumberAttribute('position');
    }
    set position(value) {
        this._position = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionInput() {
        return this._position;
    }
    // slug - computed: true, optional: false, required: true
    _slug;
    get slug() {
        return this.getStringAttribute('slug');
    }
    set slug(value) {
        this._slug = value;
    }
    // Temporarily expose input value. Use with caution.
    get slugInput() {
        return this._slug;
    }
}
export class ProjectTemplateEnvironmentsList extends cdktf.ComplexList {
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
        return new ProjectTemplateEnvironmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function projectTemplateRolesPermissionsToTerraform(struct) {
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
export function projectTemplateRolesPermissionsToHclTerraform(struct) {
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
export class ProjectTemplateRolesPermissionsOutputReference extends cdktf.ComplexObject {
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
    // action - computed: true, optional: false, required: true
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
    // conditions - computed: true, optional: true, required: false
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
    // subject - computed: true, optional: false, required: true
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
export class ProjectTemplateRolesPermissionsList extends cdktf.ComplexList {
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
        return new ProjectTemplateRolesPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function projectTemplateRolesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        permissions: cdktf.listMapper(projectTemplateRolesPermissionsToTerraform, false)(struct.permissions),
        slug: cdktf.stringToTerraform(struct.slug),
    };
}
export function projectTemplateRolesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        permissions: {
            value: cdktf.listMapperHcl(projectTemplateRolesPermissionsToHclTerraform, false)(struct.permissions),
            isBlock: true,
            type: "list",
            storageClassType: "ProjectTemplateRolesPermissionsList",
        },
        slug: {
            value: cdktf.stringToHclTerraform(struct.slug),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ProjectTemplateRolesOutputReference extends cdktf.ComplexObject {
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
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._permissions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.permissions = this._permissions?.internalValue;
        }
        if (this._slug !== undefined) {
            hasAnyValues = true;
            internalValueResult.slug = this._slug;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._permissions.internalValue = undefined;
            this._slug = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._permissions.internalValue = value.permissions;
            this._slug = value.slug;
        }
    }
    // name - computed: true, optional: false, required: true
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
    // permissions - computed: true, optional: true, required: false
    _permissions = new ProjectTemplateRolesPermissionsList(this, "permissions", false);
    get permissions() {
        return this._permissions;
    }
    putPermissions(value) {
        this._permissions.internalValue = value;
    }
    resetPermissions() {
        this._permissions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get permissionsInput() {
        return this._permissions.internalValue;
    }
    // slug - computed: true, optional: false, required: true
    _slug;
    get slug() {
        return this.getStringAttribute('slug');
    }
    set slug(value) {
        this._slug = value;
    }
    // Temporarily expose input value. Use with caution.
    get slugInput() {
        return this._slug;
    }
}
export class ProjectTemplateRolesList extends cdktf.ComplexList {
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
        return new ProjectTemplateRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_template infisical_project_template}
*/
export class ProjectTemplate extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_project_template";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ProjectTemplate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ProjectTemplate to import
    * @param importFromId The id of the existing ProjectTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ProjectTemplate to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_project_template", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_template infisical_project_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProjectTemplateConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_project_template',
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
        this._description = config.description;
        this._environments.internalValue = config.environments;
        this._name = config.name;
        this._roles.internalValue = config.roles;
        this._type = config.type;
    }
    // ==========
    // ATTRIBUTES
    // ==========
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
    // environments - computed: true, optional: true, required: false
    _environments = new ProjectTemplateEnvironmentsList(this, "environments", false);
    get environments() {
        return this._environments;
    }
    putEnvironments(value) {
        this._environments.internalValue = value;
    }
    resetEnvironments() {
        this._environments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get environmentsInput() {
        return this._environments.internalValue;
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
    // roles - computed: true, optional: true, required: false
    _roles = new ProjectTemplateRolesList(this, "roles", false);
    get roles() {
        return this._roles;
    }
    putRoles(value) {
        this._roles.internalValue = value;
    }
    resetRoles() {
        this._roles.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rolesInput() {
        return this._roles.internalValue;
    }
    // type - computed: false, optional: false, required: true
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            description: cdktf.stringToTerraform(this._description),
            environments: cdktf.listMapper(projectTemplateEnvironmentsToTerraform, false)(this._environments.internalValue),
            name: cdktf.stringToTerraform(this._name),
            roles: cdktf.listMapper(projectTemplateRolesToTerraform, false)(this._roles.internalValue),
            type: cdktf.stringToTerraform(this._type),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environments: {
                value: cdktf.listMapperHcl(projectTemplateEnvironmentsToHclTerraform, false)(this._environments.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ProjectTemplateEnvironmentsList",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            roles: {
                value: cdktf.listMapperHcl(projectTemplateRolesToHclTerraform, false)(this._roles.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ProjectTemplateRolesList",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
