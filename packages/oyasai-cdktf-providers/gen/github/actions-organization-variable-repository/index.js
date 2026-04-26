"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable_repository
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
exports.ActionsOrganizationVariableRepository = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable_repository github_actions_organization_variable_repository}
*/
var ActionsOrganizationVariableRepository = /** @class */ (function (_super) {
    __extends(ActionsOrganizationVariableRepository, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable_repository github_actions_organization_variable_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsOrganizationVariableRepositoryConfig
    */
    function ActionsOrganizationVariableRepository(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_actions_organization_variable_repository',
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
        _this._repositoryId = config.repositoryId;
        _this._variableName = config.variableName;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ActionsOrganizationVariableRepository resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsOrganizationVariableRepository to import
    * @param importFromId The id of the existing ActionsOrganizationVariableRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable_repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsOrganizationVariableRepository to import is found
    */
    ActionsOrganizationVariableRepository.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_organization_variable_repository", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ActionsOrganizationVariableRepository.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsOrganizationVariableRepository.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(ActionsOrganizationVariableRepository.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsOrganizationVariableRepository.prototype, "repositoryId", {
        get: function () {
            return this.getNumberAttribute('repository_id');
        },
        set: function (value) {
            this._repositoryId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsOrganizationVariableRepository.prototype, "repositoryIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repositoryId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsOrganizationVariableRepository.prototype, "variableName", {
        get: function () {
            return this.getStringAttribute('variable_name');
        },
        set: function (value) {
            this._variableName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsOrganizationVariableRepository.prototype, "variableNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._variableName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ActionsOrganizationVariableRepository.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            repository_id: cdktf.numberToTerraform(this._repositoryId),
            variable_name: cdktf.stringToTerraform(this._variableName),
        };
    };
    ActionsOrganizationVariableRepository.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            repository_id: {
                value: cdktf.numberToHclTerraform(this._repositoryId),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            variable_name: {
                value: cdktf.stringToHclTerraform(this._variableName),
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
    ActionsOrganizationVariableRepository.tfResourceType = "github_actions_organization_variable_repository";
    return ActionsOrganizationVariableRepository;
}(cdktf.TerraformResource));
exports.ActionsOrganizationVariableRepository = ActionsOrganizationVariableRepository;
