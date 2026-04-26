"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable_repositories
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
exports.ActionsOrganizationVariableRepositories = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable_repositories github_actions_organization_variable_repositories}
*/
var ActionsOrganizationVariableRepositories = /** @class */ (function (_super) {
    __extends(ActionsOrganizationVariableRepositories, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable_repositories github_actions_organization_variable_repositories} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsOrganizationVariableRepositoriesConfig
    */
    function ActionsOrganizationVariableRepositories(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_actions_organization_variable_repositories',
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
        _this._selectedRepositoryIds = config.selectedRepositoryIds;
        _this._variableName = config.variableName;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ActionsOrganizationVariableRepositories resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsOrganizationVariableRepositories to import
    * @param importFromId The id of the existing ActionsOrganizationVariableRepositories that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable_repositories#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsOrganizationVariableRepositories to import is found
    */
    ActionsOrganizationVariableRepositories.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_organization_variable_repositories", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ActionsOrganizationVariableRepositories.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsOrganizationVariableRepositories.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(ActionsOrganizationVariableRepositories.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsOrganizationVariableRepositories.prototype, "selectedRepositoryIds", {
        get: function () {
            return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('selected_repository_ids')));
        },
        set: function (value) {
            this._selectedRepositoryIds = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsOrganizationVariableRepositories.prototype, "selectedRepositoryIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._selectedRepositoryIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsOrganizationVariableRepositories.prototype, "variableName", {
        get: function () {
            return this.getStringAttribute('variable_name');
        },
        set: function (value) {
            this._variableName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsOrganizationVariableRepositories.prototype, "variableNameInput", {
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
    ActionsOrganizationVariableRepositories.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            selected_repository_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._selectedRepositoryIds),
            variable_name: cdktf.stringToTerraform(this._variableName),
        };
    };
    ActionsOrganizationVariableRepositories.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            selected_repository_ids: {
                value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._selectedRepositoryIds),
                isBlock: false,
                type: "set",
                storageClassType: "numberList",
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
    ActionsOrganizationVariableRepositories.tfResourceType = "github_actions_organization_variable_repositories";
    return ActionsOrganizationVariableRepositories;
}(cdktf.TerraformResource));
exports.ActionsOrganizationVariableRepositories = ActionsOrganizationVariableRepositories;
