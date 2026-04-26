"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_access_level
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
exports.ActionsRepositoryAccessLevel = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_access_level github_actions_repository_access_level}
*/
var ActionsRepositoryAccessLevel = /** @class */ (function (_super) {
    __extends(ActionsRepositoryAccessLevel, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_access_level github_actions_repository_access_level} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsRepositoryAccessLevelConfig
    */
    function ActionsRepositoryAccessLevel(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_actions_repository_access_level',
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
        _this._accessLevel = config.accessLevel;
        _this._id = config.id;
        _this._repository = config.repository;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ActionsRepositoryAccessLevel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsRepositoryAccessLevel to import
    * @param importFromId The id of the existing ActionsRepositoryAccessLevel that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_repository_access_level#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsRepositoryAccessLevel to import is found
    */
    ActionsRepositoryAccessLevel.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_repository_access_level", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ActionsRepositoryAccessLevel.prototype, "accessLevel", {
        get: function () {
            return this.getStringAttribute('access_level');
        },
        set: function (value) {
            this._accessLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRepositoryAccessLevel.prototype, "accessLevelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessLevel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRepositoryAccessLevel.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsRepositoryAccessLevel.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(ActionsRepositoryAccessLevel.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRepositoryAccessLevel.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRepositoryAccessLevel.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ActionsRepositoryAccessLevel.prototype.synthesizeAttributes = function () {
        return {
            access_level: cdktf.stringToTerraform(this._accessLevel),
            id: cdktf.stringToTerraform(this._id),
            repository: cdktf.stringToTerraform(this._repository),
        };
    };
    ActionsRepositoryAccessLevel.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            access_level: {
                value: cdktf.stringToHclTerraform(this._accessLevel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
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
    ActionsRepositoryAccessLevel.tfResourceType = "github_actions_repository_access_level";
    return ActionsRepositoryAccessLevel;
}(cdktf.TerraformResource));
exports.ActionsRepositoryAccessLevel = ActionsRepositoryAccessLevel;
