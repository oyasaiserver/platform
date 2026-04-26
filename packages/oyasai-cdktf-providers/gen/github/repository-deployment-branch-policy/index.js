"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deployment_branch_policy
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
exports.RepositoryDeploymentBranchPolicy = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deployment_branch_policy github_repository_deployment_branch_policy}
*/
var RepositoryDeploymentBranchPolicy = /** @class */ (function (_super) {
    __extends(RepositoryDeploymentBranchPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deployment_branch_policy github_repository_deployment_branch_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryDeploymentBranchPolicyConfig
    */
    function RepositoryDeploymentBranchPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_repository_deployment_branch_policy',
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
        _this._environmentName = config.environmentName;
        _this._etag = config.etag;
        _this._id = config.id;
        _this._name = config.name;
        _this._repository = config.repository;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RepositoryDeploymentBranchPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryDeploymentBranchPolicy to import
    * @param importFromId The id of the existing RepositoryDeploymentBranchPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_deployment_branch_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryDeploymentBranchPolicy to import is found
    */
    RepositoryDeploymentBranchPolicy.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_deployment_branch_policy", importId: importFromId, provider: provider });
    };
    Object.defineProperty(RepositoryDeploymentBranchPolicy.prototype, "environmentName", {
        get: function () {
            return this.getStringAttribute('environment_name');
        },
        set: function (value) {
            this._environmentName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryDeploymentBranchPolicy.prototype, "environmentNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environmentName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryDeploymentBranchPolicy.prototype, "etag", {
        get: function () {
            return this.getStringAttribute('etag');
        },
        set: function (value) {
            this._etag = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryDeploymentBranchPolicy.prototype.resetEtag = function () {
        this._etag = undefined;
    };
    Object.defineProperty(RepositoryDeploymentBranchPolicy.prototype, "etagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._etag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryDeploymentBranchPolicy.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryDeploymentBranchPolicy.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(RepositoryDeploymentBranchPolicy.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryDeploymentBranchPolicy.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryDeploymentBranchPolicy.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryDeploymentBranchPolicy.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryDeploymentBranchPolicy.prototype, "repositoryInput", {
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
    RepositoryDeploymentBranchPolicy.prototype.synthesizeAttributes = function () {
        return {
            environment_name: cdktf.stringToTerraform(this._environmentName),
            etag: cdktf.stringToTerraform(this._etag),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            repository: cdktf.stringToTerraform(this._repository),
        };
    };
    RepositoryDeploymentBranchPolicy.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            environment_name: {
                value: cdktf.stringToHclTerraform(this._environmentName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            etag: {
                value: cdktf.stringToHclTerraform(this._etag),
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
            name: {
                value: cdktf.stringToHclTerraform(this._name),
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
    RepositoryDeploymentBranchPolicy.tfResourceType = "github_repository_deployment_branch_policy";
    return RepositoryDeploymentBranchPolicy;
}(cdktf.TerraformResource));
exports.RepositoryDeploymentBranchPolicy = RepositoryDeploymentBranchPolicy;
