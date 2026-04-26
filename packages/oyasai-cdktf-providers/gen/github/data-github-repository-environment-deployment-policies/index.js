"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_environment_deployment_policies
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
exports.DataGithubRepositoryEnvironmentDeploymentPolicies = exports.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList = exports.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference = void 0;
exports.dataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesToTerraform = dataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesToTerraform;
exports.dataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesToHclTerraform = dataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesToHclTerraform;
var cdktf = require("cdktf");
function dataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.prototype, "pattern", {
        // pattern - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('pattern');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference = DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference;
var DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.prototype.get = function (index) {
        return new DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList;
}(cdktf.ComplexList));
exports.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList = DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_environment_deployment_policies github_repository_environment_deployment_policies}
*/
var DataGithubRepositoryEnvironmentDeploymentPolicies = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryEnvironmentDeploymentPolicies, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_environment_deployment_policies github_repository_environment_deployment_policies} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoryEnvironmentDeploymentPoliciesConfig
    */
    function DataGithubRepositoryEnvironmentDeploymentPolicies(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_repository_environment_deployment_policies',
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
        // policies - computed: true, optional: false, required: false
        _this._policies = new DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList(_this, "policies", false);
        _this._environment = config.environment;
        _this._id = config.id;
        _this._repository = config.repository;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubRepositoryEnvironmentDeploymentPolicies resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepositoryEnvironmentDeploymentPolicies to import
    * @param importFromId The id of the existing DataGithubRepositoryEnvironmentDeploymentPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository_environment_deployment_policies#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepositoryEnvironmentDeploymentPolicies to import is found
    */
    DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_environment_deployment_policies", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubRepositoryEnvironmentDeploymentPolicies.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryEnvironmentDeploymentPolicies.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryEnvironmentDeploymentPolicies.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubRepositoryEnvironmentDeploymentPolicies.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubRepositoryEnvironmentDeploymentPolicies.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryEnvironmentDeploymentPolicies.prototype, "policies", {
        get: function () {
            return this._policies;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryEnvironmentDeploymentPolicies.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryEnvironmentDeploymentPolicies.prototype, "repositoryInput", {
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
    DataGithubRepositoryEnvironmentDeploymentPolicies.prototype.synthesizeAttributes = function () {
        return {
            environment: cdktf.stringToTerraform(this._environment),
            id: cdktf.stringToTerraform(this._id),
            repository: cdktf.stringToTerraform(this._repository),
        };
    };
    DataGithubRepositoryEnvironmentDeploymentPolicies.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            environment: {
                value: cdktf.stringToHclTerraform(this._environment),
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
    DataGithubRepositoryEnvironmentDeploymentPolicies.tfResourceType = "github_repository_environment_deployment_policies";
    return DataGithubRepositoryEnvironmentDeploymentPolicies;
}(cdktf.TerraformDataSource));
exports.DataGithubRepositoryEnvironmentDeploymentPolicies = DataGithubRepositoryEnvironmentDeploymentPolicies;
