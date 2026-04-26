"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_deployment_branch_policies
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
exports.DataGithubRepositoryDeploymentBranchPolicies = exports.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList = exports.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference = void 0;
exports.dataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesToTerraform = dataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesToTerraform;
exports.dataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesToHclTerraform = dataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesToHclTerraform;
var cdktf = require("cdktf");
function dataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference = DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference;
var DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.prototype.get = function (index) {
        return new DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList;
}(cdktf.ComplexList));
exports.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList = DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_deployment_branch_policies github_repository_deployment_branch_policies}
*/
var DataGithubRepositoryDeploymentBranchPolicies = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryDeploymentBranchPolicies, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_deployment_branch_policies github_repository_deployment_branch_policies} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoryDeploymentBranchPoliciesConfig
    */
    function DataGithubRepositoryDeploymentBranchPolicies(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_repository_deployment_branch_policies',
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
        // ==========
        // ATTRIBUTES
        // ==========
        // deployment_branch_policies - computed: true, optional: false, required: false
        _this._deploymentBranchPolicies = new DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList(_this, "deployment_branch_policies", false);
        _this._environmentName = config.environmentName;
        _this._id = config.id;
        _this._repository = config.repository;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubRepositoryDeploymentBranchPolicies resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepositoryDeploymentBranchPolicies to import
    * @param importFromId The id of the existing DataGithubRepositoryDeploymentBranchPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_deployment_branch_policies#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepositoryDeploymentBranchPolicies to import is found
    */
    DataGithubRepositoryDeploymentBranchPolicies.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_deployment_branch_policies", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubRepositoryDeploymentBranchPolicies.prototype, "deploymentBranchPolicies", {
        get: function () {
            return this._deploymentBranchPolicies;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryDeploymentBranchPolicies.prototype, "environmentName", {
        get: function () {
            return this.getStringAttribute('environment_name');
        },
        set: function (value) {
            this._environmentName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryDeploymentBranchPolicies.prototype, "environmentNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environmentName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryDeploymentBranchPolicies.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubRepositoryDeploymentBranchPolicies.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubRepositoryDeploymentBranchPolicies.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryDeploymentBranchPolicies.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryDeploymentBranchPolicies.prototype, "repositoryInput", {
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
    DataGithubRepositoryDeploymentBranchPolicies.prototype.synthesizeAttributes = function () {
        return {
            environment_name: cdktf.stringToTerraform(this._environmentName),
            id: cdktf.stringToTerraform(this._id),
            repository: cdktf.stringToTerraform(this._repository),
        };
    };
    DataGithubRepositoryDeploymentBranchPolicies.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            environment_name: {
                value: cdktf.stringToHclTerraform(this._environmentName),
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
    DataGithubRepositoryDeploymentBranchPolicies.tfResourceType = "github_repository_deployment_branch_policies";
    return DataGithubRepositoryDeploymentBranchPolicies;
}(cdktf.TerraformDataSource));
exports.DataGithubRepositoryDeploymentBranchPolicies = DataGithubRepositoryDeploymentBranchPolicies;
