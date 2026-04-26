"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_repository
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
exports.TeamRepository = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_repository github_team_repository}
*/
var TeamRepository = /** @class */ (function (_super) {
    __extends(TeamRepository, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_repository github_team_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TeamRepositoryConfig
    */
    function TeamRepository(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_team_repository',
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
        _this._repository = config.repository;
        _this._teamId = config.teamId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a TeamRepository resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TeamRepository to import
    * @param importFromId The id of the existing TeamRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TeamRepository to import is found
    */
    TeamRepository.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_team_repository", importId: importFromId, provider: provider });
    };
    Object.defineProperty(TeamRepository.prototype, "etag", {
        // ==========
        // ATTRIBUTES
        // ==========
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamRepository.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    TeamRepository.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(TeamRepository.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamRepository.prototype, "permission", {
        get: function () {
            return this.getStringAttribute('permission');
        },
        set: function (value) {
            this._permission = value;
        },
        enumerable: false,
        configurable: true
    });
    TeamRepository.prototype.resetPermission = function () {
        this._permission = undefined;
    };
    Object.defineProperty(TeamRepository.prototype, "permissionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permission;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamRepository.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamRepository.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamRepository.prototype, "teamId", {
        get: function () {
            return this.getStringAttribute('team_id');
        },
        set: function (value) {
            this._teamId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamRepository.prototype, "teamIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._teamId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    TeamRepository.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            permission: cdktf.stringToTerraform(this._permission),
            repository: cdktf.stringToTerraform(this._repository),
            team_id: cdktf.stringToTerraform(this._teamId),
        };
    };
    TeamRepository.prototype.synthesizeHclAttributes = function () {
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
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            team_id: {
                value: cdktf.stringToHclTerraform(this._teamId),
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
    TeamRepository.tfResourceType = "github_team_repository";
    return TeamRepository;
}(cdktf.TerraformResource));
exports.TeamRepository = TeamRepository;
