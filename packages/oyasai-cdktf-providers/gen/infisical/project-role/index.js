"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_role
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
exports.ProjectRole = exports.ProjectRolePermissionsV2List = exports.ProjectRolePermissionsV2OutputReference = exports.ProjectRolePermissionsList = exports.ProjectRolePermissionsOutputReference = exports.ProjectRolePermissionsConditionsOutputReference = void 0;
exports.projectRolePermissionsConditionsToTerraform = projectRolePermissionsConditionsToTerraform;
exports.projectRolePermissionsConditionsToHclTerraform = projectRolePermissionsConditionsToHclTerraform;
exports.projectRolePermissionsToTerraform = projectRolePermissionsToTerraform;
exports.projectRolePermissionsToHclTerraform = projectRolePermissionsToHclTerraform;
exports.projectRolePermissionsV2ToTerraform = projectRolePermissionsV2ToTerraform;
exports.projectRolePermissionsV2ToHclTerraform = projectRolePermissionsV2ToHclTerraform;
var cdktf = require("cdktf");
function projectRolePermissionsConditionsToTerraform(struct) {
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
function projectRolePermissionsConditionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ProjectRolePermissionsConditionsOutputReference = /** @class */ (function (_super) {
    __extends(ProjectRolePermissionsConditionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ProjectRolePermissionsConditionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ProjectRolePermissionsConditionsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._environment !== undefined) {
                hasAnyValues = true;
                internalValueResult.environment = this._environment;
            }
            if (this._secretPath !== undefined) {
                hasAnyValues = true;
                internalValueResult.secretPath = this._secretPath;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectRolePermissionsConditionsOutputReference.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectRolePermissionsConditionsOutputReference.prototype.resetEnvironment = function () {
        this._environment = undefined;
    };
    Object.defineProperty(ProjectRolePermissionsConditionsOutputReference.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectRolePermissionsConditionsOutputReference.prototype, "secretPath", {
        get: function () {
            return this.getStringAttribute('secret_path');
        },
        set: function (value) {
            this._secretPath = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectRolePermissionsConditionsOutputReference.prototype.resetSecretPath = function () {
        this._secretPath = undefined;
    };
    Object.defineProperty(ProjectRolePermissionsConditionsOutputReference.prototype, "secretPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretPath;
        },
        enumerable: false,
        configurable: true
    });
    return ProjectRolePermissionsConditionsOutputReference;
}(cdktf.ComplexObject));
exports.ProjectRolePermissionsConditionsOutputReference = ProjectRolePermissionsConditionsOutputReference;
function projectRolePermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        conditions: projectRolePermissionsConditionsToTerraform(struct.conditions),
        subject: cdktf.stringToTerraform(struct.subject),
    };
}
function projectRolePermissionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        action: {
            value: cdktf.stringToHclTerraform(struct.action),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        conditions: {
            value: projectRolePermissionsConditionsToHclTerraform(struct.conditions),
            isBlock: true,
            type: "struct",
            storageClassType: "ProjectRolePermissionsConditions",
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
var ProjectRolePermissionsOutputReference = /** @class */ (function (_super) {
    __extends(ProjectRolePermissionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ProjectRolePermissionsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // conditions - computed: false, optional: true, required: false
        _this._conditions = new ProjectRolePermissionsConditionsOutputReference(_this, "conditions");
        return _this;
    }
    Object.defineProperty(ProjectRolePermissionsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._action !== undefined) {
                hasAnyValues = true;
                internalValueResult.action = this._action;
            }
            if (((_a = this._conditions) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.conditions = (_b = this._conditions) === null || _b === void 0 ? void 0 : _b.internalValue;
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
                this._action = value.action;
                this._conditions.internalValue = value.conditions;
                this._subject = value.subject;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectRolePermissionsOutputReference.prototype, "action", {
        get: function () {
            return this.getStringAttribute('action');
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectRolePermissionsOutputReference.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectRolePermissionsOutputReference.prototype, "conditions", {
        get: function () {
            return this._conditions;
        },
        enumerable: false,
        configurable: true
    });
    ProjectRolePermissionsOutputReference.prototype.putConditions = function (value) {
        this._conditions.internalValue = value;
    };
    ProjectRolePermissionsOutputReference.prototype.resetConditions = function () {
        this._conditions.internalValue = undefined;
    };
    Object.defineProperty(ProjectRolePermissionsOutputReference.prototype, "conditionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._conditions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectRolePermissionsOutputReference.prototype, "subject", {
        get: function () {
            return this.getStringAttribute('subject');
        },
        set: function (value) {
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectRolePermissionsOutputReference.prototype, "subjectInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subject;
        },
        enumerable: false,
        configurable: true
    });
    return ProjectRolePermissionsOutputReference;
}(cdktf.ComplexObject));
exports.ProjectRolePermissionsOutputReference = ProjectRolePermissionsOutputReference;
var ProjectRolePermissionsList = /** @class */ (function (_super) {
    __extends(ProjectRolePermissionsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ProjectRolePermissionsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ProjectRolePermissionsList.prototype.get = function (index) {
        return new ProjectRolePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ProjectRolePermissionsList;
}(cdktf.ComplexList));
exports.ProjectRolePermissionsList = ProjectRolePermissionsList;
function projectRolePermissionsV2ToTerraform(struct) {
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
function projectRolePermissionsV2ToHclTerraform(struct) {
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
var ProjectRolePermissionsV2OutputReference = /** @class */ (function (_super) {
    __extends(ProjectRolePermissionsV2OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ProjectRolePermissionsV2OutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ProjectRolePermissionsV2OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ProjectRolePermissionsV2OutputReference.prototype, "action", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('action'));
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectRolePermissionsV2OutputReference.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectRolePermissionsV2OutputReference.prototype, "conditions", {
        get: function () {
            return this.getStringAttribute('conditions');
        },
        set: function (value) {
            this._conditions = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectRolePermissionsV2OutputReference.prototype.resetConditions = function () {
        this._conditions = undefined;
    };
    Object.defineProperty(ProjectRolePermissionsV2OutputReference.prototype, "conditionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._conditions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectRolePermissionsV2OutputReference.prototype, "inverted", {
        get: function () {
            return this.getBooleanAttribute('inverted');
        },
        set: function (value) {
            this._inverted = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectRolePermissionsV2OutputReference.prototype.resetInverted = function () {
        this._inverted = undefined;
    };
    Object.defineProperty(ProjectRolePermissionsV2OutputReference.prototype, "invertedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inverted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectRolePermissionsV2OutputReference.prototype, "subject", {
        get: function () {
            return this.getStringAttribute('subject');
        },
        set: function (value) {
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectRolePermissionsV2OutputReference.prototype, "subjectInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subject;
        },
        enumerable: false,
        configurable: true
    });
    return ProjectRolePermissionsV2OutputReference;
}(cdktf.ComplexObject));
exports.ProjectRolePermissionsV2OutputReference = ProjectRolePermissionsV2OutputReference;
var ProjectRolePermissionsV2List = /** @class */ (function (_super) {
    __extends(ProjectRolePermissionsV2List, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ProjectRolePermissionsV2List(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ProjectRolePermissionsV2List.prototype.get = function (index) {
        return new ProjectRolePermissionsV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ProjectRolePermissionsV2List;
}(cdktf.ComplexList));
exports.ProjectRolePermissionsV2List = ProjectRolePermissionsV2List;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_role infisical_project_role}
*/
var ProjectRole = /** @class */ (function (_super) {
    __extends(ProjectRole, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_role infisical_project_role} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProjectRoleConfig
    */
    function ProjectRole(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_project_role',
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
        // permissions - computed: false, optional: true, required: false
        _this._permissions = new ProjectRolePermissionsList(_this, "permissions", false);
        // permissions_v2 - computed: false, optional: true, required: false
        _this._permissionsV2 = new ProjectRolePermissionsV2List(_this, "permissions_v2", false);
        _this._description = config.description;
        _this._name = config.name;
        _this._permissions.internalValue = config.permissions;
        _this._permissionsV2.internalValue = config.permissionsV2;
        _this._projectId = config.projectId;
        _this._projectSlug = config.projectSlug;
        _this._slug = config.slug;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ProjectRole resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ProjectRole to import
    * @param importFromId The id of the existing ProjectRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_role#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ProjectRole to import is found
    */
    ProjectRole.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_project_role", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ProjectRole.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectRole.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ProjectRole.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectRole.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectRole.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectRole.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectRole.prototype, "permissions", {
        get: function () {
            return this._permissions;
        },
        enumerable: false,
        configurable: true
    });
    ProjectRole.prototype.putPermissions = function (value) {
        this._permissions.internalValue = value;
    };
    ProjectRole.prototype.resetPermissions = function () {
        this._permissions.internalValue = undefined;
    };
    Object.defineProperty(ProjectRole.prototype, "permissionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permissions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectRole.prototype, "permissionsV2", {
        get: function () {
            return this._permissionsV2;
        },
        enumerable: false,
        configurable: true
    });
    ProjectRole.prototype.putPermissionsV2 = function (value) {
        this._permissionsV2.internalValue = value;
    };
    ProjectRole.prototype.resetPermissionsV2 = function () {
        this._permissionsV2.internalValue = undefined;
    };
    Object.defineProperty(ProjectRole.prototype, "permissionsV2Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permissionsV2.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectRole.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectRole.prototype.resetProjectId = function () {
        this._projectId = undefined;
    };
    Object.defineProperty(ProjectRole.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectRole.prototype, "projectSlug", {
        get: function () {
            return this.getStringAttribute('project_slug');
        },
        set: function (value) {
            this._projectSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectRole.prototype.resetProjectSlug = function () {
        this._projectSlug = undefined;
    };
    Object.defineProperty(ProjectRole.prototype, "projectSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectRole.prototype, "slug", {
        get: function () {
            return this.getStringAttribute('slug');
        },
        set: function (value) {
            this._slug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectRole.prototype, "slugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._slug;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ProjectRole.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            permissions: cdktf.listMapper(projectRolePermissionsToTerraform, false)(this._permissions.internalValue),
            permissions_v2: cdktf.listMapper(projectRolePermissionsV2ToTerraform, false)(this._permissionsV2.internalValue),
            project_id: cdktf.stringToTerraform(this._projectId),
            project_slug: cdktf.stringToTerraform(this._projectSlug),
            slug: cdktf.stringToTerraform(this._slug),
        };
    };
    ProjectRole.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            description: {
                value: cdktf.stringToHclTerraform(this._description),
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
            permissions: {
                value: cdktf.listMapperHcl(projectRolePermissionsToHclTerraform, false)(this._permissions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ProjectRolePermissionsList",
            },
            permissions_v2: {
                value: cdktf.listMapperHcl(projectRolePermissionsV2ToHclTerraform, false)(this._permissionsV2.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ProjectRolePermissionsV2List",
            },
            project_id: {
                value: cdktf.stringToHclTerraform(this._projectId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
    ProjectRole.tfResourceType = "infisical_project_role";
    return ProjectRole;
}(cdktf.TerraformResource));
exports.ProjectRole = ProjectRole;
