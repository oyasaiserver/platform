"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege
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
exports.ProjectIdentitySpecificPrivilege = exports.ProjectIdentitySpecificPrivilegePermissionsV2List = exports.ProjectIdentitySpecificPrivilegePermissionsV2OutputReference = exports.ProjectIdentitySpecificPrivilegePermissionOutputReference = exports.ProjectIdentitySpecificPrivilegePermissionConditionsOutputReference = void 0;
exports.projectIdentitySpecificPrivilegePermissionConditionsToTerraform = projectIdentitySpecificPrivilegePermissionConditionsToTerraform;
exports.projectIdentitySpecificPrivilegePermissionConditionsToHclTerraform = projectIdentitySpecificPrivilegePermissionConditionsToHclTerraform;
exports.projectIdentitySpecificPrivilegePermissionToTerraform = projectIdentitySpecificPrivilegePermissionToTerraform;
exports.projectIdentitySpecificPrivilegePermissionToHclTerraform = projectIdentitySpecificPrivilegePermissionToHclTerraform;
exports.projectIdentitySpecificPrivilegePermissionsV2ToTerraform = projectIdentitySpecificPrivilegePermissionsV2ToTerraform;
exports.projectIdentitySpecificPrivilegePermissionsV2ToHclTerraform = projectIdentitySpecificPrivilegePermissionsV2ToHclTerraform;
var cdktf = require("cdktf");
function projectIdentitySpecificPrivilegePermissionConditionsToTerraform(struct) {
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
function projectIdentitySpecificPrivilegePermissionConditionsToHclTerraform(struct) {
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
var ProjectIdentitySpecificPrivilegePermissionConditionsOutputReference = /** @class */ (function (_super) {
    __extends(ProjectIdentitySpecificPrivilegePermissionConditionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ProjectIdentitySpecificPrivilegePermissionConditionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ProjectIdentitySpecificPrivilegePermissionConditionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ProjectIdentitySpecificPrivilegePermissionConditionsOutputReference.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentitySpecificPrivilegePermissionConditionsOutputReference.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentitySpecificPrivilegePermissionConditionsOutputReference.prototype, "secretPath", {
        get: function () {
            return this.getStringAttribute('secret_path');
        },
        set: function (value) {
            this._secretPath = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectIdentitySpecificPrivilegePermissionConditionsOutputReference.prototype.resetSecretPath = function () {
        this._secretPath = undefined;
    };
    Object.defineProperty(ProjectIdentitySpecificPrivilegePermissionConditionsOutputReference.prototype, "secretPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretPath;
        },
        enumerable: false,
        configurable: true
    });
    return ProjectIdentitySpecificPrivilegePermissionConditionsOutputReference;
}(cdktf.ComplexObject));
exports.ProjectIdentitySpecificPrivilegePermissionConditionsOutputReference = ProjectIdentitySpecificPrivilegePermissionConditionsOutputReference;
function projectIdentitySpecificPrivilegePermissionToTerraform(struct) {
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
function projectIdentitySpecificPrivilegePermissionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ProjectIdentitySpecificPrivilegePermissionOutputReference = /** @class */ (function (_super) {
    __extends(ProjectIdentitySpecificPrivilegePermissionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ProjectIdentitySpecificPrivilegePermissionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // conditions - computed: false, optional: false, required: true
        _this._conditions = new ProjectIdentitySpecificPrivilegePermissionConditionsOutputReference(_this, "conditions");
        return _this;
    }
    Object.defineProperty(ProjectIdentitySpecificPrivilegePermissionOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._actions !== undefined) {
                hasAnyValues = true;
                internalValueResult.actions = this._actions;
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentitySpecificPrivilegePermissionOutputReference.prototype, "actions", {
        get: function () {
            return this.getListAttribute('actions');
        },
        set: function (value) {
            this._actions = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentitySpecificPrivilegePermissionOutputReference.prototype, "actionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._actions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentitySpecificPrivilegePermissionOutputReference.prototype, "conditions", {
        get: function () {
            return this._conditions;
        },
        enumerable: false,
        configurable: true
    });
    ProjectIdentitySpecificPrivilegePermissionOutputReference.prototype.putConditions = function (value) {
        this._conditions.internalValue = value;
    };
    Object.defineProperty(ProjectIdentitySpecificPrivilegePermissionOutputReference.prototype, "conditionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._conditions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentitySpecificPrivilegePermissionOutputReference.prototype, "subject", {
        get: function () {
            return this.getStringAttribute('subject');
        },
        set: function (value) {
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentitySpecificPrivilegePermissionOutputReference.prototype, "subjectInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subject;
        },
        enumerable: false,
        configurable: true
    });
    return ProjectIdentitySpecificPrivilegePermissionOutputReference;
}(cdktf.ComplexObject));
exports.ProjectIdentitySpecificPrivilegePermissionOutputReference = ProjectIdentitySpecificPrivilegePermissionOutputReference;
function projectIdentitySpecificPrivilegePermissionsV2ToTerraform(struct) {
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
function projectIdentitySpecificPrivilegePermissionsV2ToHclTerraform(struct) {
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
var ProjectIdentitySpecificPrivilegePermissionsV2OutputReference = /** @class */ (function (_super) {
    __extends(ProjectIdentitySpecificPrivilegePermissionsV2OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ProjectIdentitySpecificPrivilegePermissionsV2OutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ProjectIdentitySpecificPrivilegePermissionsV2OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ProjectIdentitySpecificPrivilegePermissionsV2OutputReference.prototype, "action", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('action'));
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentitySpecificPrivilegePermissionsV2OutputReference.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentitySpecificPrivilegePermissionsV2OutputReference.prototype, "conditions", {
        get: function () {
            return this.getStringAttribute('conditions');
        },
        set: function (value) {
            this._conditions = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectIdentitySpecificPrivilegePermissionsV2OutputReference.prototype.resetConditions = function () {
        this._conditions = undefined;
    };
    Object.defineProperty(ProjectIdentitySpecificPrivilegePermissionsV2OutputReference.prototype, "conditionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._conditions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentitySpecificPrivilegePermissionsV2OutputReference.prototype, "inverted", {
        get: function () {
            return this.getBooleanAttribute('inverted');
        },
        set: function (value) {
            this._inverted = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectIdentitySpecificPrivilegePermissionsV2OutputReference.prototype.resetInverted = function () {
        this._inverted = undefined;
    };
    Object.defineProperty(ProjectIdentitySpecificPrivilegePermissionsV2OutputReference.prototype, "invertedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inverted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentitySpecificPrivilegePermissionsV2OutputReference.prototype, "subject", {
        get: function () {
            return this.getStringAttribute('subject');
        },
        set: function (value) {
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentitySpecificPrivilegePermissionsV2OutputReference.prototype, "subjectInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subject;
        },
        enumerable: false,
        configurable: true
    });
    return ProjectIdentitySpecificPrivilegePermissionsV2OutputReference;
}(cdktf.ComplexObject));
exports.ProjectIdentitySpecificPrivilegePermissionsV2OutputReference = ProjectIdentitySpecificPrivilegePermissionsV2OutputReference;
var ProjectIdentitySpecificPrivilegePermissionsV2List = /** @class */ (function (_super) {
    __extends(ProjectIdentitySpecificPrivilegePermissionsV2List, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ProjectIdentitySpecificPrivilegePermissionsV2List(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ProjectIdentitySpecificPrivilegePermissionsV2List.prototype.get = function (index) {
        return new ProjectIdentitySpecificPrivilegePermissionsV2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ProjectIdentitySpecificPrivilegePermissionsV2List;
}(cdktf.ComplexList));
exports.ProjectIdentitySpecificPrivilegePermissionsV2List = ProjectIdentitySpecificPrivilegePermissionsV2List;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_identity_specific_privilege infisical_project_identity_specific_privilege}
*/
var ProjectIdentitySpecificPrivilege = /** @class */ (function (_super) {
    __extends(ProjectIdentitySpecificPrivilege, _super);
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
    function ProjectIdentitySpecificPrivilege(scope, id, config) {
        var _this = _super.call(this, scope, id, {
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
        }) || this;
        // permission - computed: false, optional: true, required: false
        _this._permission = new ProjectIdentitySpecificPrivilegePermissionOutputReference(_this, "permission");
        // permissions_v2 - computed: false, optional: true, required: false
        _this._permissionsV2 = new ProjectIdentitySpecificPrivilegePermissionsV2List(_this, "permissions_v2", false);
        _this._identityId = config.identityId;
        _this._isTemporary = config.isTemporary;
        _this._permission.internalValue = config.permission;
        _this._permissionsV2.internalValue = config.permissionsV2;
        _this._projectSlug = config.projectSlug;
        _this._slug = config.slug;
        _this._temporaryAccessEndTime = config.temporaryAccessEndTime;
        _this._temporaryAccessStartTime = config.temporaryAccessStartTime;
        _this._temporaryMode = config.temporaryMode;
        _this._temporaryRange = config.temporaryRange;
        return _this;
    }
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
    ProjectIdentitySpecificPrivilege.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_project_identity_specific_privilege", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ProjectIdentitySpecificPrivilege.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentitySpecificPrivilege.prototype, "identityId", {
        get: function () {
            return this.getStringAttribute('identity_id');
        },
        set: function (value) {
            this._identityId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentitySpecificPrivilege.prototype, "identityIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentitySpecificPrivilege.prototype, "isTemporary", {
        get: function () {
            return this.getBooleanAttribute('is_temporary');
        },
        set: function (value) {
            this._isTemporary = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectIdentitySpecificPrivilege.prototype.resetIsTemporary = function () {
        this._isTemporary = undefined;
    };
    Object.defineProperty(ProjectIdentitySpecificPrivilege.prototype, "isTemporaryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isTemporary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentitySpecificPrivilege.prototype, "permission", {
        get: function () {
            return this._permission;
        },
        enumerable: false,
        configurable: true
    });
    ProjectIdentitySpecificPrivilege.prototype.putPermission = function (value) {
        this._permission.internalValue = value;
    };
    ProjectIdentitySpecificPrivilege.prototype.resetPermission = function () {
        this._permission.internalValue = undefined;
    };
    Object.defineProperty(ProjectIdentitySpecificPrivilege.prototype, "permissionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permission.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentitySpecificPrivilege.prototype, "permissionsV2", {
        get: function () {
            return this._permissionsV2;
        },
        enumerable: false,
        configurable: true
    });
    ProjectIdentitySpecificPrivilege.prototype.putPermissionsV2 = function (value) {
        this._permissionsV2.internalValue = value;
    };
    ProjectIdentitySpecificPrivilege.prototype.resetPermissionsV2 = function () {
        this._permissionsV2.internalValue = undefined;
    };
    Object.defineProperty(ProjectIdentitySpecificPrivilege.prototype, "permissionsV2Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permissionsV2.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentitySpecificPrivilege.prototype, "projectSlug", {
        get: function () {
            return this.getStringAttribute('project_slug');
        },
        set: function (value) {
            this._projectSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentitySpecificPrivilege.prototype, "projectSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentitySpecificPrivilege.prototype, "slug", {
        get: function () {
            return this.getStringAttribute('slug');
        },
        set: function (value) {
            this._slug = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectIdentitySpecificPrivilege.prototype.resetSlug = function () {
        this._slug = undefined;
    };
    Object.defineProperty(ProjectIdentitySpecificPrivilege.prototype, "slugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._slug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentitySpecificPrivilege.prototype, "temporaryAccessEndTime", {
        get: function () {
            return this.getStringAttribute('temporary_access_end_time');
        },
        set: function (value) {
            this._temporaryAccessEndTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectIdentitySpecificPrivilege.prototype.resetTemporaryAccessEndTime = function () {
        this._temporaryAccessEndTime = undefined;
    };
    Object.defineProperty(ProjectIdentitySpecificPrivilege.prototype, "temporaryAccessEndTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._temporaryAccessEndTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentitySpecificPrivilege.prototype, "temporaryAccessStartTime", {
        get: function () {
            return this.getStringAttribute('temporary_access_start_time');
        },
        set: function (value) {
            this._temporaryAccessStartTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectIdentitySpecificPrivilege.prototype.resetTemporaryAccessStartTime = function () {
        this._temporaryAccessStartTime = undefined;
    };
    Object.defineProperty(ProjectIdentitySpecificPrivilege.prototype, "temporaryAccessStartTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._temporaryAccessStartTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentitySpecificPrivilege.prototype, "temporaryMode", {
        get: function () {
            return this.getStringAttribute('temporary_mode');
        },
        set: function (value) {
            this._temporaryMode = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectIdentitySpecificPrivilege.prototype.resetTemporaryMode = function () {
        this._temporaryMode = undefined;
    };
    Object.defineProperty(ProjectIdentitySpecificPrivilege.prototype, "temporaryModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._temporaryMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProjectIdentitySpecificPrivilege.prototype, "temporaryRange", {
        get: function () {
            return this.getStringAttribute('temporary_range');
        },
        set: function (value) {
            this._temporaryRange = value;
        },
        enumerable: false,
        configurable: true
    });
    ProjectIdentitySpecificPrivilege.prototype.resetTemporaryRange = function () {
        this._temporaryRange = undefined;
    };
    Object.defineProperty(ProjectIdentitySpecificPrivilege.prototype, "temporaryRangeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._temporaryRange;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ProjectIdentitySpecificPrivilege.prototype.synthesizeAttributes = function () {
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
    };
    ProjectIdentitySpecificPrivilege.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ProjectIdentitySpecificPrivilege.tfResourceType = "infisical_project_identity_specific_privilege";
    return ProjectIdentitySpecificPrivilege;
}(cdktf.TerraformResource));
exports.ProjectIdentitySpecificPrivilege = ProjectIdentitySpecificPrivilege;
