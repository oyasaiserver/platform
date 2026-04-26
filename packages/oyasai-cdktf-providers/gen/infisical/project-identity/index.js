"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity
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
exports.ProjectIdentity = exports.ProjectIdentityRolesList = exports.ProjectIdentityRolesOutputReference = exports.ProjectIdentityIdentityOutputReference = void 0;
exports.projectIdentityIdentityToTerraform = projectIdentityIdentityToTerraform;
exports.projectIdentityIdentityToHclTerraform = projectIdentityIdentityToHclTerraform;
exports.projectIdentityRolesToTerraform = projectIdentityRolesToTerraform;
exports.projectIdentityRolesToHclTerraform = projectIdentityRolesToHclTerraform;
var cdktf = require("cdktf");
function projectIdentityIdentityToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function projectIdentityIdentityToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ProjectIdentityIdentityOutputReference = /** @class */ (function (_super) {
    __extends(ProjectIdentityIdentityOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ProjectIdentityIdentityOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ProjectIdentityIdentityOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentityIdentityOutputReference.prototype, "authMethods", {
        // auth_methods - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('auth_methods');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentityIdentityOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentityIdentityOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return ProjectIdentityIdentityOutputReference;
}(cdktf.ComplexObject));
exports.ProjectIdentityIdentityOutputReference = ProjectIdentityIdentityOutputReference;
function projectIdentityRolesToTerraform(struct) {
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
function projectIdentityRolesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ProjectIdentityRolesOutputReference = /** @class */ (function (_super) {
    __extends(ProjectIdentityRolesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ProjectIdentityRolesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ProjectIdentityRolesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
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
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentityRolesOutputReference.prototype, "customRoleId", {
        get: function () {
            return this.getStringAttribute('custom_role_id');
        },
        set: function (value) {
            this._customRoleId = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectIdentityRolesOutputReference.prototype.resetCustomRoleId = function () {
        this._customRoleId = undefined;
    };
    Object.defineProperty(ProjectIdentityRolesOutputReference.prototype, "customRoleIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customRoleId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentityRolesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentityRolesOutputReference.prototype, "isTemporary", {
        get: function () {
            return this.getBooleanAttribute('is_temporary');
        },
        set: function (value) {
            this._isTemporary = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectIdentityRolesOutputReference.prototype.resetIsTemporary = function () {
        this._isTemporary = undefined;
    };
    Object.defineProperty(ProjectIdentityRolesOutputReference.prototype, "isTemporaryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isTemporary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentityRolesOutputReference.prototype, "roleSlug", {
        get: function () {
            return this.getStringAttribute('role_slug');
        },
        set: function (value) {
            this._roleSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentityRolesOutputReference.prototype, "roleSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentityRolesOutputReference.prototype, "temporaryAccessEndTime", {
        get: function () {
            return this.getStringAttribute('temporary_access_end_time');
        },
        set: function (value) {
            this._temporaryAccessEndTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectIdentityRolesOutputReference.prototype.resetTemporaryAccessEndTime = function () {
        this._temporaryAccessEndTime = undefined;
    };
    Object.defineProperty(ProjectIdentityRolesOutputReference.prototype, "temporaryAccessEndTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._temporaryAccessEndTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentityRolesOutputReference.prototype, "temporaryAccessStartTime", {
        get: function () {
            return this.getStringAttribute('temporary_access_start_time');
        },
        set: function (value) {
            this._temporaryAccessStartTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectIdentityRolesOutputReference.prototype.resetTemporaryAccessStartTime = function () {
        this._temporaryAccessStartTime = undefined;
    };
    Object.defineProperty(ProjectIdentityRolesOutputReference.prototype, "temporaryAccessStartTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._temporaryAccessStartTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentityRolesOutputReference.prototype, "temporaryMode", {
        get: function () {
            return this.getStringAttribute('temporary_mode');
        },
        set: function (value) {
            this._temporaryMode = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectIdentityRolesOutputReference.prototype.resetTemporaryMode = function () {
        this._temporaryMode = undefined;
    };
    Object.defineProperty(ProjectIdentityRolesOutputReference.prototype, "temporaryModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._temporaryMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentityRolesOutputReference.prototype, "temporaryRange", {
        get: function () {
            return this.getStringAttribute('temporary_range');
        },
        set: function (value) {
            this._temporaryRange = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectIdentityRolesOutputReference.prototype.resetTemporaryRange = function () {
        this._temporaryRange = undefined;
    };
    Object.defineProperty(ProjectIdentityRolesOutputReference.prototype, "temporaryRangeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._temporaryRange;
        },
        enumerable: false,
        configurable: true
    });
    return ProjectIdentityRolesOutputReference;
}(cdktf.ComplexObject));
exports.ProjectIdentityRolesOutputReference = ProjectIdentityRolesOutputReference;
var ProjectIdentityRolesList = /** @class */ (function (_super) {
    __extends(ProjectIdentityRolesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ProjectIdentityRolesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ProjectIdentityRolesList.prototype.get = function (index) {
        return new ProjectIdentityRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ProjectIdentityRolesList;
}(cdktf.ComplexList));
exports.ProjectIdentityRolesList = ProjectIdentityRolesList;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity infisical_project_identity}
*/
var ProjectIdentity = /** @class */ (function (_super) {
    __extends(ProjectIdentity, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity infisical_project_identity} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProjectIdentityConfig
    */
    function ProjectIdentity(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_project_identity',
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
        // ==========
        // ATTRIBUTES
        // ==========
        // identity - computed: true, optional: false, required: false
        _this._identity = new ProjectIdentityIdentityOutputReference(_this, "identity");
        // roles - computed: false, optional: false, required: true
        _this._roles = new ProjectIdentityRolesList(_this, "roles", false);
        _this._identityId = config.identityId;
        _this._projectId = config.projectId;
        _this._roles.internalValue = config.roles;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ProjectIdentity resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ProjectIdentity to import
    * @param importFromId The id of the existing ProjectIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ProjectIdentity to import is found
    */
    ProjectIdentity.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_project_identity", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ProjectIdentity.prototype, "identity", {
        get: function () {
            return this._identity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentity.prototype, "identityId", {
        get: function () {
            return this.getStringAttribute('identity_id');
        },
        set: function (value) {
            this._identityId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentity.prototype, "identityIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentity.prototype, "membershipId", {
        // membership_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('membership_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentity.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentity.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentity.prototype, "roles", {
        get: function () {
            return this._roles;
        },
        enumerable: false,
        configurable: true
    });
    ProjectIdentity.prototype.putRoles = function (value) {
        this._roles.internalValue = value;
    };
    Object.defineProperty(ProjectIdentity.prototype, "rolesInput", {
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
    ProjectIdentity.prototype.synthesizeAttributes = function () {
        return {
            identity_id: cdktf.stringToTerraform(this._identityId),
            project_id: cdktf.stringToTerraform(this._projectId),
            roles: cdktf.listMapper(projectIdentityRolesToTerraform, false)(this._roles.internalValue),
        };
    };
    ProjectIdentity.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            identity_id: {
                value: cdktf.stringToHclTerraform(this._identityId),
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
                value: cdktf.listMapperHcl(projectIdentityRolesToHclTerraform, false)(this._roles.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ProjectIdentityRolesList",
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
    ProjectIdentity.tfResourceType = "infisical_project_identity";
    return ProjectIdentity;
}(cdktf.TerraformResource));
exports.ProjectIdentity = ProjectIdentity;
