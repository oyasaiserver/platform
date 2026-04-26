"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_template
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectTemplate = exports.ProjectTemplateRolesList = exports.ProjectTemplateRolesOutputReference = exports.ProjectTemplateRolesPermissionsList = exports.ProjectTemplateRolesPermissionsOutputReference = exports.ProjectTemplateEnvironmentsList = exports.ProjectTemplateEnvironmentsOutputReference = void 0;
exports.projectTemplateEnvironmentsToTerraform = projectTemplateEnvironmentsToTerraform;
exports.projectTemplateEnvironmentsToHclTerraform = projectTemplateEnvironmentsToHclTerraform;
exports.projectTemplateRolesPermissionsToTerraform = projectTemplateRolesPermissionsToTerraform;
exports.projectTemplateRolesPermissionsToHclTerraform = projectTemplateRolesPermissionsToHclTerraform;
exports.projectTemplateRolesToTerraform = projectTemplateRolesToTerraform;
exports.projectTemplateRolesToHclTerraform = projectTemplateRolesToHclTerraform;
var cdktf = require("cdktf");
function projectTemplateEnvironmentsToTerraform(struct) {
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
function projectTemplateEnvironmentsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ProjectTemplateEnvironmentsOutputReference = /** @class */ (function (_super) {
    __extends(ProjectTemplateEnvironmentsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ProjectTemplateEnvironmentsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ProjectTemplateEnvironmentsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
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
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectTemplateEnvironmentsOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectTemplateEnvironmentsOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectTemplateEnvironmentsOutputReference.prototype, "position", {
        get: function () {
            return this.getNumberAttribute('position');
        },
        set: function (value) {
            this._position = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectTemplateEnvironmentsOutputReference.prototype, "positionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectTemplateEnvironmentsOutputReference.prototype, "slug", {
        get: function () {
            return this.getStringAttribute('slug');
        },
        set: function (value) {
            this._slug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectTemplateEnvironmentsOutputReference.prototype, "slugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._slug;
        },
        enumerable: false,
        configurable: true
    });
    return ProjectTemplateEnvironmentsOutputReference;
}(cdktf.ComplexObject));
exports.ProjectTemplateEnvironmentsOutputReference = ProjectTemplateEnvironmentsOutputReference;
var ProjectTemplateEnvironmentsList = /** @class */ (function (_super) {
    __extends(ProjectTemplateEnvironmentsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ProjectTemplateEnvironmentsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ProjectTemplateEnvironmentsList.prototype.get = function (index) {
        return new ProjectTemplateEnvironmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ProjectTemplateEnvironmentsList;
}(cdktf.ComplexList));
exports.ProjectTemplateEnvironmentsList = ProjectTemplateEnvironmentsList;
function projectTemplateRolesPermissionsToTerraform(struct) {
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
function projectTemplateRolesPermissionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ProjectTemplateRolesPermissionsOutputReference = /** @class */ (function (_super) {
    __extends(ProjectTemplateRolesPermissionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ProjectTemplateRolesPermissionsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ProjectTemplateRolesPermissionsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
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
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectTemplateRolesPermissionsOutputReference.prototype, "action", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('action'));
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectTemplateRolesPermissionsOutputReference.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectTemplateRolesPermissionsOutputReference.prototype, "conditions", {
        get: function () {
            return this.getStringAttribute('conditions');
        },
        set: function (value) {
            this._conditions = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectTemplateRolesPermissionsOutputReference.prototype.resetConditions = function () {
        this._conditions = undefined;
    };
    Object.defineProperty(ProjectTemplateRolesPermissionsOutputReference.prototype, "conditionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._conditions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectTemplateRolesPermissionsOutputReference.prototype, "inverted", {
        get: function () {
            return this.getBooleanAttribute('inverted');
        },
        set: function (value) {
            this._inverted = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectTemplateRolesPermissionsOutputReference.prototype.resetInverted = function () {
        this._inverted = undefined;
    };
    Object.defineProperty(ProjectTemplateRolesPermissionsOutputReference.prototype, "invertedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inverted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectTemplateRolesPermissionsOutputReference.prototype, "subject", {
        get: function () {
            return this.getStringAttribute('subject');
        },
        set: function (value) {
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectTemplateRolesPermissionsOutputReference.prototype, "subjectInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subject;
        },
        enumerable: false,
        configurable: true
    });
    return ProjectTemplateRolesPermissionsOutputReference;
}(cdktf.ComplexObject));
exports.ProjectTemplateRolesPermissionsOutputReference = ProjectTemplateRolesPermissionsOutputReference;
var ProjectTemplateRolesPermissionsList = /** @class */ (function (_super) {
    __extends(ProjectTemplateRolesPermissionsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ProjectTemplateRolesPermissionsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ProjectTemplateRolesPermissionsList.prototype.get = function (index) {
        return new ProjectTemplateRolesPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ProjectTemplateRolesPermissionsList;
}(cdktf.ComplexList));
exports.ProjectTemplateRolesPermissionsList = ProjectTemplateRolesPermissionsList;
function projectTemplateRolesToTerraform(struct) {
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
function projectTemplateRolesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ProjectTemplateRolesOutputReference = /** @class */ (function (_super) {
    __extends(ProjectTemplateRolesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ProjectTemplateRolesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // permissions - computed: true, optional: true, required: false
        _this._permissions = new ProjectTemplateRolesPermissionsList(_this, "permissions", false);
        return _this;
    }
    Object.defineProperty(ProjectTemplateRolesOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (((_a = this._permissions) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.permissions = (_b = this._permissions) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._slug !== undefined) {
                hasAnyValues = true;
                internalValueResult.slug = this._slug;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectTemplateRolesOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectTemplateRolesOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectTemplateRolesOutputReference.prototype, "permissions", {
        get: function () {
            return this._permissions;
        },
        enumerable: false,
        configurable: true
    });
    ProjectTemplateRolesOutputReference.prototype.putPermissions = function (value) {
        this._permissions.internalValue = value;
    };
    ProjectTemplateRolesOutputReference.prototype.resetPermissions = function () {
        this._permissions.internalValue = undefined;
    };
    Object.defineProperty(ProjectTemplateRolesOutputReference.prototype, "permissionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permissions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectTemplateRolesOutputReference.prototype, "slug", {
        get: function () {
            return this.getStringAttribute('slug');
        },
        set: function (value) {
            this._slug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectTemplateRolesOutputReference.prototype, "slugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._slug;
        },
        enumerable: false,
        configurable: true
    });
    return ProjectTemplateRolesOutputReference;
}(cdktf.ComplexObject));
exports.ProjectTemplateRolesOutputReference = ProjectTemplateRolesOutputReference;
var ProjectTemplateRolesList = /** @class */ (function (_super) {
    __extends(ProjectTemplateRolesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ProjectTemplateRolesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ProjectTemplateRolesList.prototype.get = function (index) {
        return new ProjectTemplateRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ProjectTemplateRolesList;
}(cdktf.ComplexList));
exports.ProjectTemplateRolesList = ProjectTemplateRolesList;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_template infisical_project_template}
*/
var ProjectTemplate = /** @class */ (function (_super) {
    __extends(ProjectTemplate, _super);
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
    function ProjectTemplate(scope, id, config) {
        var _this = _super.call(this, scope, id, {
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
        }) || this;
        // environments - computed: true, optional: true, required: false
        _this._environments = new ProjectTemplateEnvironmentsList(_this, "environments", false);
        // roles - computed: true, optional: true, required: false
        _this._roles = new ProjectTemplateRolesList(_this, "roles", false);
        _this._description = config.description;
        _this._environments.internalValue = config.environments;
        _this._name = config.name;
        _this._roles.internalValue = config.roles;
        _this._type = config.type;
        return _this;
    }
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
    ProjectTemplate.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_project_template", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ProjectTemplate.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectTemplate.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ProjectTemplate.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectTemplate.prototype, "environments", {
        get: function () {
            return this._environments;
        },
        enumerable: false,
        configurable: true
    });
    ProjectTemplate.prototype.putEnvironments = function (value) {
        this._environments.internalValue = value;
    };
    ProjectTemplate.prototype.resetEnvironments = function () {
        this._environments.internalValue = undefined;
    };
    Object.defineProperty(ProjectTemplate.prototype, "environmentsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environments.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectTemplate.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectTemplate.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectTemplate.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectTemplate.prototype, "roles", {
        get: function () {
            return this._roles;
        },
        enumerable: false,
        configurable: true
    });
    ProjectTemplate.prototype.putRoles = function (value) {
        this._roles.internalValue = value;
    };
    ProjectTemplate.prototype.resetRoles = function () {
        this._roles.internalValue = undefined;
    };
    Object.defineProperty(ProjectTemplate.prototype, "rolesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roles.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectTemplate.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectTemplate.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ProjectTemplate.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            environments: cdktf.listMapper(projectTemplateEnvironmentsToTerraform, false)(this._environments.internalValue),
            name: cdktf.stringToTerraform(this._name),
            roles: cdktf.listMapper(projectTemplateRolesToTerraform, false)(this._roles.internalValue),
            type: cdktf.stringToTerraform(this._type),
        };
    };
    ProjectTemplate.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ProjectTemplate.tfResourceType = "infisical_project_template";
    return ProjectTemplate;
}(cdktf.TerraformResource));
exports.ProjectTemplate = ProjectTemplate;
