"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment
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
exports.RepositoryEnvironment = exports.RepositoryEnvironmentReviewersOutputReference = exports.RepositoryEnvironmentDeploymentBranchPolicyOutputReference = void 0;
exports.repositoryEnvironmentDeploymentBranchPolicyToTerraform = repositoryEnvironmentDeploymentBranchPolicyToTerraform;
exports.repositoryEnvironmentDeploymentBranchPolicyToHclTerraform = repositoryEnvironmentDeploymentBranchPolicyToHclTerraform;
exports.repositoryEnvironmentReviewersToTerraform = repositoryEnvironmentReviewersToTerraform;
exports.repositoryEnvironmentReviewersToHclTerraform = repositoryEnvironmentReviewersToHclTerraform;
var cdktf = require("cdktf");
function repositoryEnvironmentDeploymentBranchPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        custom_branch_policies: cdktf.booleanToTerraform(struct.customBranchPolicies),
        protected_branches: cdktf.booleanToTerraform(struct.protectedBranches),
    };
}
function repositoryEnvironmentDeploymentBranchPolicyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        custom_branch_policies: {
            value: cdktf.booleanToHclTerraform(struct.customBranchPolicies),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        protected_branches: {
            value: cdktf.booleanToHclTerraform(struct.protectedBranches),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var RepositoryEnvironmentDeploymentBranchPolicyOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryEnvironmentDeploymentBranchPolicyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryEnvironmentDeploymentBranchPolicyOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryEnvironmentDeploymentBranchPolicyOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._customBranchPolicies !== undefined) {
                hasAnyValues = true;
                internalValueResult.customBranchPolicies = this._customBranchPolicies;
            }
            if (this._protectedBranches !== undefined) {
                hasAnyValues = true;
                internalValueResult.protectedBranches = this._protectedBranches;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._customBranchPolicies = undefined;
                this._protectedBranches = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._customBranchPolicies = value.customBranchPolicies;
                this._protectedBranches = value.protectedBranches;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryEnvironmentDeploymentBranchPolicyOutputReference.prototype, "customBranchPolicies", {
        get: function () {
            return this.getBooleanAttribute('custom_branch_policies');
        },
        set: function (value) {
            this._customBranchPolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryEnvironmentDeploymentBranchPolicyOutputReference.prototype, "customBranchPoliciesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customBranchPolicies;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryEnvironmentDeploymentBranchPolicyOutputReference.prototype, "protectedBranches", {
        get: function () {
            return this.getBooleanAttribute('protected_branches');
        },
        set: function (value) {
            this._protectedBranches = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryEnvironmentDeploymentBranchPolicyOutputReference.prototype, "protectedBranchesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._protectedBranches;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryEnvironmentDeploymentBranchPolicyOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryEnvironmentDeploymentBranchPolicyOutputReference = RepositoryEnvironmentDeploymentBranchPolicyOutputReference;
function repositoryEnvironmentReviewersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        teams: cdktf.listMapper(cdktf.numberToTerraform, false)(struct.teams),
        users: cdktf.listMapper(cdktf.numberToTerraform, false)(struct.users),
    };
}
function repositoryEnvironmentReviewersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        teams: {
            value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct.teams),
            isBlock: false,
            type: "set",
            storageClassType: "numberList",
        },
        users: {
            value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct.users),
            isBlock: false,
            type: "set",
            storageClassType: "numberList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var RepositoryEnvironmentReviewersOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryEnvironmentReviewersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryEnvironmentReviewersOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryEnvironmentReviewersOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._teams !== undefined) {
                hasAnyValues = true;
                internalValueResult.teams = this._teams;
            }
            if (this._users !== undefined) {
                hasAnyValues = true;
                internalValueResult.users = this._users;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._teams = undefined;
                this._users = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._teams = value.teams;
                this._users = value.users;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryEnvironmentReviewersOutputReference.prototype, "teams", {
        get: function () {
            return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('teams')));
        },
        set: function (value) {
            this._teams = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryEnvironmentReviewersOutputReference.prototype.resetTeams = function () {
        this._teams = undefined;
    };
    Object.defineProperty(RepositoryEnvironmentReviewersOutputReference.prototype, "teamsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._teams;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryEnvironmentReviewersOutputReference.prototype, "users", {
        get: function () {
            return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('users')));
        },
        set: function (value) {
            this._users = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryEnvironmentReviewersOutputReference.prototype.resetUsers = function () {
        this._users = undefined;
    };
    Object.defineProperty(RepositoryEnvironmentReviewersOutputReference.prototype, "usersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._users;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryEnvironmentReviewersOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryEnvironmentReviewersOutputReference = RepositoryEnvironmentReviewersOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment github_repository_environment}
*/
var RepositoryEnvironment = /** @class */ (function (_super) {
    __extends(RepositoryEnvironment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment github_repository_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryEnvironmentConfig
    */
    function RepositoryEnvironment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_repository_environment',
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
        // deployment_branch_policy - computed: false, optional: true, required: false
        _this._deploymentBranchPolicy = new RepositoryEnvironmentDeploymentBranchPolicyOutputReference(_this, "deployment_branch_policy");
        // reviewers - computed: false, optional: true, required: false
        _this._reviewers = new RepositoryEnvironmentReviewersOutputReference(_this, "reviewers");
        _this._canAdminsBypass = config.canAdminsBypass;
        _this._environment = config.environment;
        _this._id = config.id;
        _this._preventSelfReview = config.preventSelfReview;
        _this._repository = config.repository;
        _this._waitTimer = config.waitTimer;
        _this._deploymentBranchPolicy.internalValue = config.deploymentBranchPolicy;
        _this._reviewers.internalValue = config.reviewers;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RepositoryEnvironment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryEnvironment to import
    * @param importFromId The id of the existing RepositoryEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryEnvironment to import is found
    */
    RepositoryEnvironment.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_environment", importId: importFromId, provider: provider });
    };
    Object.defineProperty(RepositoryEnvironment.prototype, "canAdminsBypass", {
        get: function () {
            return this.getBooleanAttribute('can_admins_bypass');
        },
        set: function (value) {
            this._canAdminsBypass = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryEnvironment.prototype.resetCanAdminsBypass = function () {
        this._canAdminsBypass = undefined;
    };
    Object.defineProperty(RepositoryEnvironment.prototype, "canAdminsBypassInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._canAdminsBypass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryEnvironment.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryEnvironment.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryEnvironment.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryEnvironment.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(RepositoryEnvironment.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryEnvironment.prototype, "preventSelfReview", {
        get: function () {
            return this.getBooleanAttribute('prevent_self_review');
        },
        set: function (value) {
            this._preventSelfReview = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryEnvironment.prototype.resetPreventSelfReview = function () {
        this._preventSelfReview = undefined;
    };
    Object.defineProperty(RepositoryEnvironment.prototype, "preventSelfReviewInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preventSelfReview;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryEnvironment.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryEnvironment.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryEnvironment.prototype, "repositoryId", {
        // repository_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('repository_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryEnvironment.prototype, "waitTimer", {
        get: function () {
            return this.getNumberAttribute('wait_timer');
        },
        set: function (value) {
            this._waitTimer = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryEnvironment.prototype.resetWaitTimer = function () {
        this._waitTimer = undefined;
    };
    Object.defineProperty(RepositoryEnvironment.prototype, "waitTimerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._waitTimer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryEnvironment.prototype, "deploymentBranchPolicy", {
        get: function () {
            return this._deploymentBranchPolicy;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryEnvironment.prototype.putDeploymentBranchPolicy = function (value) {
        this._deploymentBranchPolicy.internalValue = value;
    };
    RepositoryEnvironment.prototype.resetDeploymentBranchPolicy = function () {
        this._deploymentBranchPolicy.internalValue = undefined;
    };
    Object.defineProperty(RepositoryEnvironment.prototype, "deploymentBranchPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deploymentBranchPolicy.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryEnvironment.prototype, "reviewers", {
        get: function () {
            return this._reviewers;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryEnvironment.prototype.putReviewers = function (value) {
        this._reviewers.internalValue = value;
    };
    RepositoryEnvironment.prototype.resetReviewers = function () {
        this._reviewers.internalValue = undefined;
    };
    Object.defineProperty(RepositoryEnvironment.prototype, "reviewersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._reviewers.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    RepositoryEnvironment.prototype.synthesizeAttributes = function () {
        return {
            can_admins_bypass: cdktf.booleanToTerraform(this._canAdminsBypass),
            environment: cdktf.stringToTerraform(this._environment),
            id: cdktf.stringToTerraform(this._id),
            prevent_self_review: cdktf.booleanToTerraform(this._preventSelfReview),
            repository: cdktf.stringToTerraform(this._repository),
            wait_timer: cdktf.numberToTerraform(this._waitTimer),
            deployment_branch_policy: repositoryEnvironmentDeploymentBranchPolicyToTerraform(this._deploymentBranchPolicy.internalValue),
            reviewers: repositoryEnvironmentReviewersToTerraform(this._reviewers.internalValue),
        };
    };
    RepositoryEnvironment.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            can_admins_bypass: {
                value: cdktf.booleanToHclTerraform(this._canAdminsBypass),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
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
            prevent_self_review: {
                value: cdktf.booleanToHclTerraform(this._preventSelfReview),
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
            wait_timer: {
                value: cdktf.numberToHclTerraform(this._waitTimer),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            deployment_branch_policy: {
                value: repositoryEnvironmentDeploymentBranchPolicyToHclTerraform(this._deploymentBranchPolicy.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "RepositoryEnvironmentDeploymentBranchPolicyList",
            },
            reviewers: {
                value: repositoryEnvironmentReviewersToHclTerraform(this._reviewers.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "RepositoryEnvironmentReviewersList",
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
    RepositoryEnvironment.tfResourceType = "github_repository_environment";
    return RepositoryEnvironment;
}(cdktf.TerraformResource));
exports.RepositoryEnvironment = RepositoryEnvironment;
