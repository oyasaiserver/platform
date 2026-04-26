"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborator
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
exports.RepositoryCollaborator = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborator github_repository_collaborator}
*/
var RepositoryCollaborator = /** @class */ (function (_super) {
    __extends(RepositoryCollaborator, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborator github_repository_collaborator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryCollaboratorConfig
    */
    function RepositoryCollaborator(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_repository_collaborator',
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
        _this._id = config.id;
        _this._permission = config.permission;
        _this._permissionDiffSuppression = config.permissionDiffSuppression;
        _this._repository = config.repository;
        _this._username = config.username;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RepositoryCollaborator resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryCollaborator to import
    * @param importFromId The id of the existing RepositoryCollaborator that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborator#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryCollaborator to import is found
    */
    RepositoryCollaborator.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_collaborator", importId: importFromId, provider: provider });
    };
    Object.defineProperty(RepositoryCollaborator.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryCollaborator.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(RepositoryCollaborator.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCollaborator.prototype, "invitationId", {
        // invitation_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('invitation_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCollaborator.prototype, "permission", {
        get: function () {
            return this.getStringAttribute('permission');
        },
        set: function (value) {
            this._permission = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryCollaborator.prototype.resetPermission = function () {
        this._permission = undefined;
    };
    Object.defineProperty(RepositoryCollaborator.prototype, "permissionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permission;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCollaborator.prototype, "permissionDiffSuppression", {
        get: function () {
            return this.getBooleanAttribute('permission_diff_suppression');
        },
        set: function (value) {
            this._permissionDiffSuppression = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryCollaborator.prototype.resetPermissionDiffSuppression = function () {
        this._permissionDiffSuppression = undefined;
    };
    Object.defineProperty(RepositoryCollaborator.prototype, "permissionDiffSuppressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permissionDiffSuppression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCollaborator.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCollaborator.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCollaborator.prototype, "username", {
        get: function () {
            return this.getStringAttribute('username');
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryCollaborator.prototype, "usernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    RepositoryCollaborator.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            permission: cdktf.stringToTerraform(this._permission),
            permission_diff_suppression: cdktf.booleanToTerraform(this._permissionDiffSuppression),
            repository: cdktf.stringToTerraform(this._repository),
            username: cdktf.stringToTerraform(this._username),
        };
    };
    RepositoryCollaborator.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            permission: {
                value: cdktf.stringToHclTerraform(this._permission),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            permission_diff_suppression: {
                value: cdktf.booleanToHclTerraform(this._permissionDiffSuppression),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            username: {
                value: cdktf.stringToHclTerraform(this._username),
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
    RepositoryCollaborator.tfResourceType = "github_repository_collaborator";
    return RepositoryCollaborator;
}(cdktf.TerraformResource));
exports.RepositoryCollaborator = RepositoryCollaborator;
