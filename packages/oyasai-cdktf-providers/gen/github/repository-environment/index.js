// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function repositoryEnvironmentDeploymentBranchPolicyToTerraform(struct) {
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
export function repositoryEnvironmentDeploymentBranchPolicyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryEnvironmentDeploymentBranchPolicyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._customBranchPolicies !== undefined) {
            hasAnyValues = true;
            internalValueResult.customBranchPolicies = this._customBranchPolicies;
        }
        if (this._protectedBranches !== undefined) {
            hasAnyValues = true;
            internalValueResult.protectedBranches = this._protectedBranches;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    }
    // custom_branch_policies - computed: false, optional: false, required: true
    _customBranchPolicies;
    get customBranchPolicies() {
        return this.getBooleanAttribute('custom_branch_policies');
    }
    set customBranchPolicies(value) {
        this._customBranchPolicies = value;
    }
    // Temporarily expose input value. Use with caution.
    get customBranchPoliciesInput() {
        return this._customBranchPolicies;
    }
    // protected_branches - computed: false, optional: false, required: true
    _protectedBranches;
    get protectedBranches() {
        return this.getBooleanAttribute('protected_branches');
    }
    set protectedBranches(value) {
        this._protectedBranches = value;
    }
    // Temporarily expose input value. Use with caution.
    get protectedBranchesInput() {
        return this._protectedBranches;
    }
}
export function repositoryEnvironmentReviewersToTerraform(struct) {
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
export function repositoryEnvironmentReviewersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryEnvironmentReviewersOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._teams !== undefined) {
            hasAnyValues = true;
            internalValueResult.teams = this._teams;
        }
        if (this._users !== undefined) {
            hasAnyValues = true;
            internalValueResult.users = this._users;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    }
    // teams - computed: false, optional: true, required: false
    _teams;
    get teams() {
        return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('teams')));
    }
    set teams(value) {
        this._teams = value;
    }
    resetTeams() {
        this._teams = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get teamsInput() {
        return this._teams;
    }
    // users - computed: false, optional: true, required: false
    _users;
    get users() {
        return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('users')));
    }
    set users(value) {
        this._users = value;
    }
    resetUsers() {
        this._users = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get usersInput() {
        return this._users;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_environment github_repository_environment}
*/
export class RepositoryEnvironment extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_repository_environment";
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
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_environment", importId: importFromId, provider });
    }
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
    constructor(scope, id, config) {
        super(scope, id, {
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
        });
        this._canAdminsBypass = config.canAdminsBypass;
        this._environment = config.environment;
        this._id = config.id;
        this._preventSelfReview = config.preventSelfReview;
        this._repository = config.repository;
        this._waitTimer = config.waitTimer;
        this._deploymentBranchPolicy.internalValue = config.deploymentBranchPolicy;
        this._reviewers.internalValue = config.reviewers;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // can_admins_bypass - computed: false, optional: true, required: false
    _canAdminsBypass;
    get canAdminsBypass() {
        return this.getBooleanAttribute('can_admins_bypass');
    }
    set canAdminsBypass(value) {
        this._canAdminsBypass = value;
    }
    resetCanAdminsBypass() {
        this._canAdminsBypass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get canAdminsBypassInput() {
        return this._canAdminsBypass;
    }
    // environment - computed: false, optional: false, required: true
    _environment;
    get environment() {
        return this.getStringAttribute('environment');
    }
    set environment(value) {
        this._environment = value;
    }
    // Temporarily expose input value. Use with caution.
    get environmentInput() {
        return this._environment;
    }
    // id - computed: true, optional: true, required: false
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // prevent_self_review - computed: false, optional: true, required: false
    _preventSelfReview;
    get preventSelfReview() {
        return this.getBooleanAttribute('prevent_self_review');
    }
    set preventSelfReview(value) {
        this._preventSelfReview = value;
    }
    resetPreventSelfReview() {
        this._preventSelfReview = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preventSelfReviewInput() {
        return this._preventSelfReview;
    }
    // repository - computed: false, optional: false, required: true
    _repository;
    get repository() {
        return this.getStringAttribute('repository');
    }
    set repository(value) {
        this._repository = value;
    }
    // Temporarily expose input value. Use with caution.
    get repositoryInput() {
        return this._repository;
    }
    // repository_id - computed: true, optional: false, required: false
    get repositoryId() {
        return this.getNumberAttribute('repository_id');
    }
    // wait_timer - computed: false, optional: true, required: false
    _waitTimer;
    get waitTimer() {
        return this.getNumberAttribute('wait_timer');
    }
    set waitTimer(value) {
        this._waitTimer = value;
    }
    resetWaitTimer() {
        this._waitTimer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get waitTimerInput() {
        return this._waitTimer;
    }
    // deployment_branch_policy - computed: false, optional: true, required: false
    _deploymentBranchPolicy = new RepositoryEnvironmentDeploymentBranchPolicyOutputReference(this, "deployment_branch_policy");
    get deploymentBranchPolicy() {
        return this._deploymentBranchPolicy;
    }
    putDeploymentBranchPolicy(value) {
        this._deploymentBranchPolicy.internalValue = value;
    }
    resetDeploymentBranchPolicy() {
        this._deploymentBranchPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deploymentBranchPolicyInput() {
        return this._deploymentBranchPolicy.internalValue;
    }
    // reviewers - computed: false, optional: true, required: false
    _reviewers = new RepositoryEnvironmentReviewersOutputReference(this, "reviewers");
    get reviewers() {
        return this._reviewers;
    }
    putReviewers(value) {
        this._reviewers.internalValue = value;
    }
    resetReviewers() {
        this._reviewers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get reviewersInput() {
        return this._reviewers.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
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
    }
    synthesizeHclAttributes() {
        const attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
