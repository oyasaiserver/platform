"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborators
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
exports.RepositoryCollaborators = exports.RepositoryCollaboratorsUserList = exports.RepositoryCollaboratorsUserOutputReference = exports.RepositoryCollaboratorsTeamList = exports.RepositoryCollaboratorsTeamOutputReference = exports.RepositoryCollaboratorsIgnoreTeamList = exports.RepositoryCollaboratorsIgnoreTeamOutputReference = void 0;
exports.repositoryCollaboratorsIgnoreTeamToTerraform = repositoryCollaboratorsIgnoreTeamToTerraform;
exports.repositoryCollaboratorsIgnoreTeamToHclTerraform = repositoryCollaboratorsIgnoreTeamToHclTerraform;
exports.repositoryCollaboratorsTeamToTerraform = repositoryCollaboratorsTeamToTerraform;
exports.repositoryCollaboratorsTeamToHclTerraform = repositoryCollaboratorsTeamToHclTerraform;
exports.repositoryCollaboratorsUserToTerraform = repositoryCollaboratorsUserToTerraform;
exports.repositoryCollaboratorsUserToHclTerraform = repositoryCollaboratorsUserToHclTerraform;
var cdktf = require("cdktf");
function repositoryCollaboratorsIgnoreTeamToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        team_id: cdktf.stringToTerraform(struct.teamId),
    };
}
function repositoryCollaboratorsIgnoreTeamToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        team_id: {
            value: cdktf.stringToHclTerraform(struct.teamId),
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
var RepositoryCollaboratorsIgnoreTeamOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryCollaboratorsIgnoreTeamOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RepositoryCollaboratorsIgnoreTeamOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryCollaboratorsIgnoreTeamOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._teamId !== undefined) {
                hasAnyValues = true;
                internalValueResult.teamId = this._teamId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._teamId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._teamId = value.teamId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCollaboratorsIgnoreTeamOutputReference.prototype, "teamId", {
        get: function () {
            return this.getStringAttribute('team_id');
        },
        set: function (value) {
            this._teamId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCollaboratorsIgnoreTeamOutputReference.prototype, "teamIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._teamId;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryCollaboratorsIgnoreTeamOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryCollaboratorsIgnoreTeamOutputReference = RepositoryCollaboratorsIgnoreTeamOutputReference;
var RepositoryCollaboratorsIgnoreTeamList = /** @class */ (function (_super) {
    __extends(RepositoryCollaboratorsIgnoreTeamList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RepositoryCollaboratorsIgnoreTeamList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    RepositoryCollaboratorsIgnoreTeamList.prototype.get = function (index) {
        return new RepositoryCollaboratorsIgnoreTeamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return RepositoryCollaboratorsIgnoreTeamList;
}(cdktf.ComplexList));
exports.RepositoryCollaboratorsIgnoreTeamList = RepositoryCollaboratorsIgnoreTeamList;
function repositoryCollaboratorsTeamToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        permission: cdktf.stringToTerraform(struct.permission),
        team_id: cdktf.stringToTerraform(struct.teamId),
    };
}
function repositoryCollaboratorsTeamToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        permission: {
            value: cdktf.stringToHclTerraform(struct.permission),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        team_id: {
            value: cdktf.stringToHclTerraform(struct.teamId),
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
var RepositoryCollaboratorsTeamOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryCollaboratorsTeamOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RepositoryCollaboratorsTeamOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryCollaboratorsTeamOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._permission !== undefined) {
                hasAnyValues = true;
                internalValueResult.permission = this._permission;
            }
            if (this._teamId !== undefined) {
                hasAnyValues = true;
                internalValueResult.teamId = this._teamId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._permission = undefined;
                this._teamId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._permission = value.permission;
                this._teamId = value.teamId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCollaboratorsTeamOutputReference.prototype, "permission", {
        get: function () {
            return this.getStringAttribute('permission');
        },
        set: function (value) {
            this._permission = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryCollaboratorsTeamOutputReference.prototype.resetPermission = function () {
        this._permission = undefined;
    };
    Object.defineProperty(RepositoryCollaboratorsTeamOutputReference.prototype, "permissionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permission;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCollaboratorsTeamOutputReference.prototype, "teamId", {
        get: function () {
            return this.getStringAttribute('team_id');
        },
        set: function (value) {
            this._teamId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCollaboratorsTeamOutputReference.prototype, "teamIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._teamId;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryCollaboratorsTeamOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryCollaboratorsTeamOutputReference = RepositoryCollaboratorsTeamOutputReference;
var RepositoryCollaboratorsTeamList = /** @class */ (function (_super) {
    __extends(RepositoryCollaboratorsTeamList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RepositoryCollaboratorsTeamList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    RepositoryCollaboratorsTeamList.prototype.get = function (index) {
        return new RepositoryCollaboratorsTeamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return RepositoryCollaboratorsTeamList;
}(cdktf.ComplexList));
exports.RepositoryCollaboratorsTeamList = RepositoryCollaboratorsTeamList;
function repositoryCollaboratorsUserToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        permission: cdktf.stringToTerraform(struct.permission),
        username: cdktf.stringToTerraform(struct.username),
    };
}
function repositoryCollaboratorsUserToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        permission: {
            value: cdktf.stringToHclTerraform(struct.permission),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        username: {
            value: cdktf.stringToHclTerraform(struct.username),
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
var RepositoryCollaboratorsUserOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryCollaboratorsUserOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RepositoryCollaboratorsUserOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryCollaboratorsUserOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._permission !== undefined) {
                hasAnyValues = true;
                internalValueResult.permission = this._permission;
            }
            if (this._username !== undefined) {
                hasAnyValues = true;
                internalValueResult.username = this._username;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._permission = undefined;
                this._username = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._permission = value.permission;
                this._username = value.username;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCollaboratorsUserOutputReference.prototype, "permission", {
        get: function () {
            return this.getStringAttribute('permission');
        },
        set: function (value) {
            this._permission = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryCollaboratorsUserOutputReference.prototype.resetPermission = function () {
        this._permission = undefined;
    };
    Object.defineProperty(RepositoryCollaboratorsUserOutputReference.prototype, "permissionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permission;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCollaboratorsUserOutputReference.prototype, "username", {
        get: function () {
            return this.getStringAttribute('username');
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCollaboratorsUserOutputReference.prototype, "usernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryCollaboratorsUserOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryCollaboratorsUserOutputReference = RepositoryCollaboratorsUserOutputReference;
var RepositoryCollaboratorsUserList = /** @class */ (function (_super) {
    __extends(RepositoryCollaboratorsUserList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RepositoryCollaboratorsUserList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    RepositoryCollaboratorsUserList.prototype.get = function (index) {
        return new RepositoryCollaboratorsUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return RepositoryCollaboratorsUserList;
}(cdktf.ComplexList));
exports.RepositoryCollaboratorsUserList = RepositoryCollaboratorsUserList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborators github_repository_collaborators}
*/
var RepositoryCollaborators = /** @class */ (function (_super) {
    __extends(RepositoryCollaborators, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborators github_repository_collaborators} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryCollaboratorsConfig
    */
    function RepositoryCollaborators(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_repository_collaborators',
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
        }) || this;
        // invitation_ids - computed: true, optional: false, required: false
        _this._invitationIds = new cdktf.StringMap(_this, "invitation_ids");
        // ignore_team - computed: false, optional: true, required: false
        _this._ignoreTeam = new RepositoryCollaboratorsIgnoreTeamList(_this, "ignore_team", true);
        // team - computed: false, optional: true, required: false
        _this._team = new RepositoryCollaboratorsTeamList(_this, "team", true);
        // user - computed: false, optional: true, required: false
        _this._user = new RepositoryCollaboratorsUserList(_this, "user", true);
        _this._id = config.id;
        _this._repository = config.repository;
        _this._ignoreTeam.internalValue = config.ignoreTeam;
        _this._team.internalValue = config.team;
        _this._user.internalValue = config.user;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RepositoryCollaborators resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryCollaborators to import
    * @param importFromId The id of the existing RepositoryCollaborators that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborators#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryCollaborators to import is found
    */
    RepositoryCollaborators.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_collaborators", importId: importFromId, provider: provider });
    };
    Object.defineProperty(RepositoryCollaborators.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryCollaborators.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(RepositoryCollaborators.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCollaborators.prototype, "invitationIds", {
        get: function () {
            return this._invitationIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCollaborators.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCollaborators.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCollaborators.prototype, "repositoryId", {
        // repository_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('repository_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCollaborators.prototype, "ignoreTeam", {
        get: function () {
            return this._ignoreTeam;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryCollaborators.prototype.putIgnoreTeam = function (value) {
        this._ignoreTeam.internalValue = value;
    };
    RepositoryCollaborators.prototype.resetIgnoreTeam = function () {
        this._ignoreTeam.internalValue = undefined;
    };
    Object.defineProperty(RepositoryCollaborators.prototype, "ignoreTeamInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ignoreTeam.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCollaborators.prototype, "team", {
        get: function () {
            return this._team;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryCollaborators.prototype.putTeam = function (value) {
        this._team.internalValue = value;
    };
    RepositoryCollaborators.prototype.resetTeam = function () {
        this._team.internalValue = undefined;
    };
    Object.defineProperty(RepositoryCollaborators.prototype, "teamInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._team.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCollaborators.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryCollaborators.prototype.putUser = function (value) {
        this._user.internalValue = value;
    };
    RepositoryCollaborators.prototype.resetUser = function () {
        this._user.internalValue = undefined;
    };
    Object.defineProperty(RepositoryCollaborators.prototype, "userInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._user.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    RepositoryCollaborators.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            repository: cdktf.stringToTerraform(this._repository),
            ignore_team: cdktf.listMapper(repositoryCollaboratorsIgnoreTeamToTerraform, true)(this._ignoreTeam.internalValue),
            team: cdktf.listMapper(repositoryCollaboratorsTeamToTerraform, true)(this._team.internalValue),
            user: cdktf.listMapper(repositoryCollaboratorsUserToTerraform, true)(this._user.internalValue),
        };
    };
    RepositoryCollaborators.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ignore_team: {
                value: cdktf.listMapperHcl(repositoryCollaboratorsIgnoreTeamToHclTerraform, true)(this._ignoreTeam.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "RepositoryCollaboratorsIgnoreTeamList",
            },
            team: {
                value: cdktf.listMapperHcl(repositoryCollaboratorsTeamToHclTerraform, true)(this._team.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "RepositoryCollaboratorsTeamList",
            },
            user: {
                value: cdktf.listMapperHcl(repositoryCollaboratorsUserToHclTerraform, true)(this._user.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "RepositoryCollaboratorsUserList",
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
    RepositoryCollaborators.tfResourceType = "github_repository_collaborators";
    return RepositoryCollaborators;
}(cdktf.TerraformResource));
exports.RepositoryCollaborators = RepositoryCollaborators;
