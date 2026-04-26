"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_runner_group
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
exports.ActionsRunnerGroup = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_runner_group github_actions_runner_group}
*/
var ActionsRunnerGroup = /** @class */ (function (_super) {
    __extends(ActionsRunnerGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_runner_group github_actions_runner_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsRunnerGroupConfig
    */
    function ActionsRunnerGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_actions_runner_group',
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
        _this._allowsPublicRepositories = config.allowsPublicRepositories;
        _this._name = config.name;
        _this._restrictedToWorkflows = config.restrictedToWorkflows;
        _this._selectedRepositoryIds = config.selectedRepositoryIds;
        _this._selectedWorkflows = config.selectedWorkflows;
        _this._visibility = config.visibility;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ActionsRunnerGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsRunnerGroup to import
    * @param importFromId The id of the existing ActionsRunnerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_runner_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsRunnerGroup to import is found
    */
    ActionsRunnerGroup.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_runner_group", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ActionsRunnerGroup.prototype, "allowsPublicRepositories", {
        get: function () {
            return this.getBooleanAttribute('allows_public_repositories');
        },
        set: function (value) {
            this._allowsPublicRepositories = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsRunnerGroup.prototype.resetAllowsPublicRepositories = function () {
        this._allowsPublicRepositories = undefined;
    };
    Object.defineProperty(ActionsRunnerGroup.prototype, "allowsPublicRepositoriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowsPublicRepositories;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRunnerGroup.prototype, "default", {
        // default - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('default');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRunnerGroup.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRunnerGroup.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRunnerGroup.prototype, "inherited", {
        // inherited - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('inherited');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRunnerGroup.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRunnerGroup.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRunnerGroup.prototype, "restrictedToWorkflows", {
        get: function () {
            return this.getBooleanAttribute('restricted_to_workflows');
        },
        set: function (value) {
            this._restrictedToWorkflows = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsRunnerGroup.prototype.resetRestrictedToWorkflows = function () {
        this._restrictedToWorkflows = undefined;
    };
    Object.defineProperty(ActionsRunnerGroup.prototype, "restrictedToWorkflowsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restrictedToWorkflows;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRunnerGroup.prototype, "runnersUrl", {
        // runners_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('runners_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRunnerGroup.prototype, "selectedRepositoriesUrl", {
        // selected_repositories_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('selected_repositories_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRunnerGroup.prototype, "selectedRepositoryIds", {
        get: function () {
            return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('selected_repository_ids')));
        },
        set: function (value) {
            this._selectedRepositoryIds = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsRunnerGroup.prototype.resetSelectedRepositoryIds = function () {
        this._selectedRepositoryIds = undefined;
    };
    Object.defineProperty(ActionsRunnerGroup.prototype, "selectedRepositoryIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._selectedRepositoryIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRunnerGroup.prototype, "selectedWorkflows", {
        get: function () {
            return this.getListAttribute('selected_workflows');
        },
        set: function (value) {
            this._selectedWorkflows = value;
        },
        enumerable: false,
        configurable: true
    });
    ActionsRunnerGroup.prototype.resetSelectedWorkflows = function () {
        this._selectedWorkflows = undefined;
    };
    Object.defineProperty(ActionsRunnerGroup.prototype, "selectedWorkflowsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._selectedWorkflows;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRunnerGroup.prototype, "visibility", {
        get: function () {
            return this.getStringAttribute('visibility');
        },
        set: function (value) {
            this._visibility = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionsRunnerGroup.prototype, "visibilityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._visibility;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ActionsRunnerGroup.prototype.synthesizeAttributes = function () {
        return {
            allows_public_repositories: cdktf.booleanToTerraform(this._allowsPublicRepositories),
            name: cdktf.stringToTerraform(this._name),
            restricted_to_workflows: cdktf.booleanToTerraform(this._restrictedToWorkflows),
            selected_repository_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._selectedRepositoryIds),
            selected_workflows: cdktf.listMapper(cdktf.stringToTerraform, false)(this._selectedWorkflows),
            visibility: cdktf.stringToTerraform(this._visibility),
        };
    };
    ActionsRunnerGroup.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            allows_public_repositories: {
                value: cdktf.booleanToHclTerraform(this._allowsPublicRepositories),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            restricted_to_workflows: {
                value: cdktf.booleanToHclTerraform(this._restrictedToWorkflows),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            selected_repository_ids: {
                value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._selectedRepositoryIds),
                isBlock: false,
                type: "set",
                storageClassType: "numberList",
            },
            selected_workflows: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._selectedWorkflows),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            visibility: {
                value: cdktf.stringToHclTerraform(this._visibility),
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
    ActionsRunnerGroup.tfResourceType = "github_actions_runner_group";
    return ActionsRunnerGroup;
}(cdktf.TerraformResource));
exports.ActionsRunnerGroup = ActionsRunnerGroup;
