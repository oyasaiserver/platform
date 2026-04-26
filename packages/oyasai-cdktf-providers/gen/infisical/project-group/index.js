"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_group
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
exports.ProjectGroup = exports.ProjectGroupRolesList = exports.ProjectGroupRolesOutputReference = void 0;
exports.projectGroupRolesToTerraform = projectGroupRolesToTerraform;
exports.projectGroupRolesToHclTerraform = projectGroupRolesToHclTerraform;
var cdktf = require("cdktf");
function projectGroupRolesToTerraform(struct) {
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
function projectGroupRolesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ProjectGroupRolesOutputReference = /** @class */ (function (_super) {
    __extends(ProjectGroupRolesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ProjectGroupRolesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ProjectGroupRolesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
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
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectGroupRolesOutputReference.prototype, "isTemporary", {
        get: function () {
            return this.getBooleanAttribute('is_temporary');
        },
        set: function (value) {
            this._isTemporary = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectGroupRolesOutputReference.prototype.resetIsTemporary = function () {
        this._isTemporary = undefined;
    };
    Object.defineProperty(ProjectGroupRolesOutputReference.prototype, "isTemporaryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isTemporary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectGroupRolesOutputReference.prototype, "roleSlug", {
        get: function () {
            return this.getStringAttribute('role_slug');
        },
        set: function (value) {
            this._roleSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectGroupRolesOutputReference.prototype, "roleSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectGroupRolesOutputReference.prototype, "temporaryAccessStartTime", {
        get: function () {
            return this.getStringAttribute('temporary_access_start_time');
        },
        set: function (value) {
            this._temporaryAccessStartTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectGroupRolesOutputReference.prototype.resetTemporaryAccessStartTime = function () {
        this._temporaryAccessStartTime = undefined;
    };
    Object.defineProperty(ProjectGroupRolesOutputReference.prototype, "temporaryAccessStartTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._temporaryAccessStartTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectGroupRolesOutputReference.prototype, "temporaryRange", {
        get: function () {
            return this.getStringAttribute('temporary_range');
        },
        set: function (value) {
            this._temporaryRange = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectGroupRolesOutputReference.prototype.resetTemporaryRange = function () {
        this._temporaryRange = undefined;
    };
    Object.defineProperty(ProjectGroupRolesOutputReference.prototype, "temporaryRangeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._temporaryRange;
        },
        enumerable: false,
        configurable: true
    });
    return ProjectGroupRolesOutputReference;
}(cdktf.ComplexObject));
exports.ProjectGroupRolesOutputReference = ProjectGroupRolesOutputReference;
var ProjectGroupRolesList = /** @class */ (function (_super) {
    __extends(ProjectGroupRolesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ProjectGroupRolesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ProjectGroupRolesList.prototype.get = function (index) {
        return new ProjectGroupRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ProjectGroupRolesList;
}(cdktf.ComplexList));
exports.ProjectGroupRolesList = ProjectGroupRolesList;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_group infisical_project_group}
*/
var ProjectGroup = /** @class */ (function (_super) {
    __extends(ProjectGroup, _super);
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
    function ProjectGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
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
        }) || this;
        // roles - computed: false, optional: false, required: true
        _this._roles = new ProjectGroupRolesList(_this, "roles", true);
        _this._groupId = config.groupId;
        _this._groupName = config.groupName;
        _this._projectId = config.projectId;
        _this._roles.internalValue = config.roles;
        return _this;
    }
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
    ProjectGroup.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_project_group", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ProjectGroup.prototype, "groupId", {
        get: function () {
            return this.getStringAttribute('group_id');
        },
        set: function (value) {
            this._groupId = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectGroup.prototype.resetGroupId = function () {
        this._groupId = undefined;
    };
    Object.defineProperty(ProjectGroup.prototype, "groupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._groupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectGroup.prototype, "groupName", {
        get: function () {
            return this.getStringAttribute('group_name');
        },
        set: function (value) {
            this._groupName = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectGroup.prototype.resetGroupName = function () {
        this._groupName = undefined;
    };
    Object.defineProperty(ProjectGroup.prototype, "groupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._groupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectGroup.prototype, "membershipId", {
        // membership_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('membership_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectGroup.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectGroup.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectGroup.prototype, "roles", {
        get: function () {
            return this._roles;
        },
        enumerable: false,
        configurable: true
    });
    ProjectGroup.prototype.putRoles = function (value) {
        this._roles.internalValue = value;
    };
    Object.defineProperty(ProjectGroup.prototype, "rolesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roles.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ProjectGroup.prototype.synthesizeAttributes = function () {
        return {
            group_id: cdktf.stringToTerraform(this._groupId),
            group_name: cdktf.stringToTerraform(this._groupName),
            project_id: cdktf.stringToTerraform(this._projectId),
            roles: cdktf.listMapper(projectGroupRolesToTerraform, false)(this._roles.internalValue),
        };
    };
    ProjectGroup.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ProjectGroup.tfResourceType = "infisical_project_group";
    return ProjectGroup;
}(cdktf.TerraformResource));
exports.ProjectGroup = ProjectGroup;
