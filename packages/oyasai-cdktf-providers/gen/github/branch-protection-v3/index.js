// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function branchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        apps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.apps),
        teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.teams),
        users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.users),
    };
}
export function branchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        apps: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.apps),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        teams: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.teams),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        users: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.users),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference extends cdktf.ComplexObject {
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
        if (this._apps !== undefined) {
            hasAnyValues = true;
            internalValueResult.apps = this._apps;
        }
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
            this._apps = undefined;
            this._teams = undefined;
            this._users = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._apps = value.apps;
            this._teams = value.teams;
            this._users = value.users;
        }
    }
    // apps - computed: false, optional: true, required: false
    _apps;
    get apps() {
        return cdktf.Fn.tolist(this.getListAttribute('apps'));
    }
    set apps(value) {
        this._apps = value;
    }
    resetApps() {
        this._apps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get appsInput() {
        return this._apps;
    }
    // teams - computed: false, optional: true, required: false
    _teams;
    get teams() {
        return cdktf.Fn.tolist(this.getListAttribute('teams'));
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
        return cdktf.Fn.tolist(this.getListAttribute('users'));
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
export function branchProtectionV3RequiredPullRequestReviewsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dismiss_stale_reviews: cdktf.booleanToTerraform(struct.dismissStaleReviews),
        dismissal_apps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.dismissalApps),
        dismissal_teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.dismissalTeams),
        dismissal_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.dismissalUsers),
        include_admins: cdktf.booleanToTerraform(struct.includeAdmins),
        require_code_owner_reviews: cdktf.booleanToTerraform(struct.requireCodeOwnerReviews),
        require_last_push_approval: cdktf.booleanToTerraform(struct.requireLastPushApproval),
        required_approving_review_count: cdktf.numberToTerraform(struct.requiredApprovingReviewCount),
        bypass_pull_request_allowances: branchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesToTerraform(struct.bypassPullRequestAllowances),
    };
}
export function branchProtectionV3RequiredPullRequestReviewsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        dismiss_stale_reviews: {
            value: cdktf.booleanToHclTerraform(struct.dismissStaleReviews),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        dismissal_apps: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.dismissalApps),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        dismissal_teams: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.dismissalTeams),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        dismissal_users: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.dismissalUsers),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        include_admins: {
            value: cdktf.booleanToHclTerraform(struct.includeAdmins),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        require_code_owner_reviews: {
            value: cdktf.booleanToHclTerraform(struct.requireCodeOwnerReviews),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        require_last_push_approval: {
            value: cdktf.booleanToHclTerraform(struct.requireLastPushApproval),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        required_approving_review_count: {
            value: cdktf.numberToHclTerraform(struct.requiredApprovingReviewCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        bypass_pull_request_allowances: {
            value: branchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesToHclTerraform(struct.bypassPullRequestAllowances),
            isBlock: true,
            type: "list",
            storageClassType: "BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class BranchProtectionV3RequiredPullRequestReviewsOutputReference extends cdktf.ComplexObject {
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
        if (this._dismissStaleReviews !== undefined) {
            hasAnyValues = true;
            internalValueResult.dismissStaleReviews = this._dismissStaleReviews;
        }
        if (this._dismissalApps !== undefined) {
            hasAnyValues = true;
            internalValueResult.dismissalApps = this._dismissalApps;
        }
        if (this._dismissalTeams !== undefined) {
            hasAnyValues = true;
            internalValueResult.dismissalTeams = this._dismissalTeams;
        }
        if (this._dismissalUsers !== undefined) {
            hasAnyValues = true;
            internalValueResult.dismissalUsers = this._dismissalUsers;
        }
        if (this._includeAdmins !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeAdmins = this._includeAdmins;
        }
        if (this._requireCodeOwnerReviews !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireCodeOwnerReviews = this._requireCodeOwnerReviews;
        }
        if (this._requireLastPushApproval !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireLastPushApproval = this._requireLastPushApproval;
        }
        if (this._requiredApprovingReviewCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.requiredApprovingReviewCount = this._requiredApprovingReviewCount;
        }
        if (this._bypassPullRequestAllowances?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bypassPullRequestAllowances = this._bypassPullRequestAllowances?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._dismissStaleReviews = undefined;
            this._dismissalApps = undefined;
            this._dismissalTeams = undefined;
            this._dismissalUsers = undefined;
            this._includeAdmins = undefined;
            this._requireCodeOwnerReviews = undefined;
            this._requireLastPushApproval = undefined;
            this._requiredApprovingReviewCount = undefined;
            this._bypassPullRequestAllowances.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._dismissStaleReviews = value.dismissStaleReviews;
            this._dismissalApps = value.dismissalApps;
            this._dismissalTeams = value.dismissalTeams;
            this._dismissalUsers = value.dismissalUsers;
            this._includeAdmins = value.includeAdmins;
            this._requireCodeOwnerReviews = value.requireCodeOwnerReviews;
            this._requireLastPushApproval = value.requireLastPushApproval;
            this._requiredApprovingReviewCount = value.requiredApprovingReviewCount;
            this._bypassPullRequestAllowances.internalValue = value.bypassPullRequestAllowances;
        }
    }
    // dismiss_stale_reviews - computed: false, optional: true, required: false
    _dismissStaleReviews;
    get dismissStaleReviews() {
        return this.getBooleanAttribute('dismiss_stale_reviews');
    }
    set dismissStaleReviews(value) {
        this._dismissStaleReviews = value;
    }
    resetDismissStaleReviews() {
        this._dismissStaleReviews = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dismissStaleReviewsInput() {
        return this._dismissStaleReviews;
    }
    // dismissal_apps - computed: false, optional: true, required: false
    _dismissalApps;
    get dismissalApps() {
        return cdktf.Fn.tolist(this.getListAttribute('dismissal_apps'));
    }
    set dismissalApps(value) {
        this._dismissalApps = value;
    }
    resetDismissalApps() {
        this._dismissalApps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dismissalAppsInput() {
        return this._dismissalApps;
    }
    // dismissal_teams - computed: false, optional: true, required: false
    _dismissalTeams;
    get dismissalTeams() {
        return cdktf.Fn.tolist(this.getListAttribute('dismissal_teams'));
    }
    set dismissalTeams(value) {
        this._dismissalTeams = value;
    }
    resetDismissalTeams() {
        this._dismissalTeams = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dismissalTeamsInput() {
        return this._dismissalTeams;
    }
    // dismissal_users - computed: false, optional: true, required: false
    _dismissalUsers;
    get dismissalUsers() {
        return cdktf.Fn.tolist(this.getListAttribute('dismissal_users'));
    }
    set dismissalUsers(value) {
        this._dismissalUsers = value;
    }
    resetDismissalUsers() {
        this._dismissalUsers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dismissalUsersInput() {
        return this._dismissalUsers;
    }
    // include_admins - computed: false, optional: true, required: false
    _includeAdmins;
    get includeAdmins() {
        return this.getBooleanAttribute('include_admins');
    }
    set includeAdmins(value) {
        this._includeAdmins = value;
    }
    resetIncludeAdmins() {
        this._includeAdmins = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeAdminsInput() {
        return this._includeAdmins;
    }
    // require_code_owner_reviews - computed: false, optional: true, required: false
    _requireCodeOwnerReviews;
    get requireCodeOwnerReviews() {
        return this.getBooleanAttribute('require_code_owner_reviews');
    }
    set requireCodeOwnerReviews(value) {
        this._requireCodeOwnerReviews = value;
    }
    resetRequireCodeOwnerReviews() {
        this._requireCodeOwnerReviews = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireCodeOwnerReviewsInput() {
        return this._requireCodeOwnerReviews;
    }
    // require_last_push_approval - computed: false, optional: true, required: false
    _requireLastPushApproval;
    get requireLastPushApproval() {
        return this.getBooleanAttribute('require_last_push_approval');
    }
    set requireLastPushApproval(value) {
        this._requireLastPushApproval = value;
    }
    resetRequireLastPushApproval() {
        this._requireLastPushApproval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireLastPushApprovalInput() {
        return this._requireLastPushApproval;
    }
    // required_approving_review_count - computed: false, optional: true, required: false
    _requiredApprovingReviewCount;
    get requiredApprovingReviewCount() {
        return this.getNumberAttribute('required_approving_review_count');
    }
    set requiredApprovingReviewCount(value) {
        this._requiredApprovingReviewCount = value;
    }
    resetRequiredApprovingReviewCount() {
        this._requiredApprovingReviewCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requiredApprovingReviewCountInput() {
        return this._requiredApprovingReviewCount;
    }
    // bypass_pull_request_allowances - computed: false, optional: true, required: false
    _bypassPullRequestAllowances = new BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference(this, "bypass_pull_request_allowances");
    get bypassPullRequestAllowances() {
        return this._bypassPullRequestAllowances;
    }
    putBypassPullRequestAllowances(value) {
        this._bypassPullRequestAllowances.internalValue = value;
    }
    resetBypassPullRequestAllowances() {
        this._bypassPullRequestAllowances.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bypassPullRequestAllowancesInput() {
        return this._bypassPullRequestAllowances.internalValue;
    }
}
export function branchProtectionV3RequiredStatusChecksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        checks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.checks),
        contexts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.contexts),
        include_admins: cdktf.booleanToTerraform(struct.includeAdmins),
        strict: cdktf.booleanToTerraform(struct.strict),
    };
}
export function branchProtectionV3RequiredStatusChecksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        checks: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.checks),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        contexts: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.contexts),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        include_admins: {
            value: cdktf.booleanToHclTerraform(struct.includeAdmins),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        strict: {
            value: cdktf.booleanToHclTerraform(struct.strict),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class BranchProtectionV3RequiredStatusChecksOutputReference extends cdktf.ComplexObject {
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
        if (this._checks !== undefined) {
            hasAnyValues = true;
            internalValueResult.checks = this._checks;
        }
        if (this._contexts !== undefined) {
            hasAnyValues = true;
            internalValueResult.contexts = this._contexts;
        }
        if (this._includeAdmins !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeAdmins = this._includeAdmins;
        }
        if (this._strict !== undefined) {
            hasAnyValues = true;
            internalValueResult.strict = this._strict;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._checks = undefined;
            this._contexts = undefined;
            this._includeAdmins = undefined;
            this._strict = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._checks = value.checks;
            this._contexts = value.contexts;
            this._includeAdmins = value.includeAdmins;
            this._strict = value.strict;
        }
    }
    // checks - computed: true, optional: true, required: false
    _checks;
    get checks() {
        return cdktf.Fn.tolist(this.getListAttribute('checks'));
    }
    set checks(value) {
        this._checks = value;
    }
    resetChecks() {
        this._checks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get checksInput() {
        return this._checks;
    }
    // contexts - computed: true, optional: true, required: false
    _contexts;
    get contexts() {
        return cdktf.Fn.tolist(this.getListAttribute('contexts'));
    }
    set contexts(value) {
        this._contexts = value;
    }
    resetContexts() {
        this._contexts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contextsInput() {
        return this._contexts;
    }
    // include_admins - computed: false, optional: true, required: false
    _includeAdmins;
    get includeAdmins() {
        return this.getBooleanAttribute('include_admins');
    }
    set includeAdmins(value) {
        this._includeAdmins = value;
    }
    resetIncludeAdmins() {
        this._includeAdmins = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeAdminsInput() {
        return this._includeAdmins;
    }
    // strict - computed: false, optional: true, required: false
    _strict;
    get strict() {
        return this.getBooleanAttribute('strict');
    }
    set strict(value) {
        this._strict = value;
    }
    resetStrict() {
        this._strict = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get strictInput() {
        return this._strict;
    }
}
export function branchProtectionV3RestrictionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        apps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.apps),
        teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.teams),
        users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.users),
    };
}
export function branchProtectionV3RestrictionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        apps: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.apps),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        teams: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.teams),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        users: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.users),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class BranchProtectionV3RestrictionsOutputReference extends cdktf.ComplexObject {
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
        if (this._apps !== undefined) {
            hasAnyValues = true;
            internalValueResult.apps = this._apps;
        }
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
            this._apps = undefined;
            this._teams = undefined;
            this._users = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._apps = value.apps;
            this._teams = value.teams;
            this._users = value.users;
        }
    }
    // apps - computed: false, optional: true, required: false
    _apps;
    get apps() {
        return cdktf.Fn.tolist(this.getListAttribute('apps'));
    }
    set apps(value) {
        this._apps = value;
    }
    resetApps() {
        this._apps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get appsInput() {
        return this._apps;
    }
    // teams - computed: false, optional: true, required: false
    _teams;
    get teams() {
        return cdktf.Fn.tolist(this.getListAttribute('teams'));
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
        return cdktf.Fn.tolist(this.getListAttribute('users'));
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
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3 github_branch_protection_v3}
*/
export class BranchProtectionV3 extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_branch_protection_v3";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a BranchProtectionV3 resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BranchProtectionV3 to import
    * @param importFromId The id of the existing BranchProtectionV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BranchProtectionV3 to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_branch_protection_v3", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3 github_branch_protection_v3} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BranchProtectionV3Config
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_branch_protection_v3',
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
        this._branch = config.branch;
        this._enforceAdmins = config.enforceAdmins;
        this._id = config.id;
        this._repository = config.repository;
        this._requireConversationResolution = config.requireConversationResolution;
        this._requireSignedCommits = config.requireSignedCommits;
        this._requiredPullRequestReviews.internalValue = config.requiredPullRequestReviews;
        this._requiredStatusChecks.internalValue = config.requiredStatusChecks;
        this._restrictions.internalValue = config.restrictions;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // branch - computed: false, optional: false, required: true
    _branch;
    get branch() {
        return this.getStringAttribute('branch');
    }
    set branch(value) {
        this._branch = value;
    }
    // Temporarily expose input value. Use with caution.
    get branchInput() {
        return this._branch;
    }
    // enforce_admins - computed: false, optional: true, required: false
    _enforceAdmins;
    get enforceAdmins() {
        return this.getBooleanAttribute('enforce_admins');
    }
    set enforceAdmins(value) {
        this._enforceAdmins = value;
    }
    resetEnforceAdmins() {
        this._enforceAdmins = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enforceAdminsInput() {
        return this._enforceAdmins;
    }
    // etag - computed: true, optional: false, required: false
    get etag() {
        return this.getStringAttribute('etag');
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
    // require_conversation_resolution - computed: false, optional: true, required: false
    _requireConversationResolution;
    get requireConversationResolution() {
        return this.getBooleanAttribute('require_conversation_resolution');
    }
    set requireConversationResolution(value) {
        this._requireConversationResolution = value;
    }
    resetRequireConversationResolution() {
        this._requireConversationResolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireConversationResolutionInput() {
        return this._requireConversationResolution;
    }
    // require_signed_commits - computed: false, optional: true, required: false
    _requireSignedCommits;
    get requireSignedCommits() {
        return this.getBooleanAttribute('require_signed_commits');
    }
    set requireSignedCommits(value) {
        this._requireSignedCommits = value;
    }
    resetRequireSignedCommits() {
        this._requireSignedCommits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireSignedCommitsInput() {
        return this._requireSignedCommits;
    }
    // required_pull_request_reviews - computed: false, optional: true, required: false
    _requiredPullRequestReviews = new BranchProtectionV3RequiredPullRequestReviewsOutputReference(this, "required_pull_request_reviews");
    get requiredPullRequestReviews() {
        return this._requiredPullRequestReviews;
    }
    putRequiredPullRequestReviews(value) {
        this._requiredPullRequestReviews.internalValue = value;
    }
    resetRequiredPullRequestReviews() {
        this._requiredPullRequestReviews.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requiredPullRequestReviewsInput() {
        return this._requiredPullRequestReviews.internalValue;
    }
    // required_status_checks - computed: false, optional: true, required: false
    _requiredStatusChecks = new BranchProtectionV3RequiredStatusChecksOutputReference(this, "required_status_checks");
    get requiredStatusChecks() {
        return this._requiredStatusChecks;
    }
    putRequiredStatusChecks(value) {
        this._requiredStatusChecks.internalValue = value;
    }
    resetRequiredStatusChecks() {
        this._requiredStatusChecks.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requiredStatusChecksInput() {
        return this._requiredStatusChecks.internalValue;
    }
    // restrictions - computed: false, optional: true, required: false
    _restrictions = new BranchProtectionV3RestrictionsOutputReference(this, "restrictions");
    get restrictions() {
        return this._restrictions;
    }
    putRestrictions(value) {
        this._restrictions.internalValue = value;
    }
    resetRestrictions() {
        this._restrictions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get restrictionsInput() {
        return this._restrictions.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            branch: cdktf.stringToTerraform(this._branch),
            enforce_admins: cdktf.booleanToTerraform(this._enforceAdmins),
            id: cdktf.stringToTerraform(this._id),
            repository: cdktf.stringToTerraform(this._repository),
            require_conversation_resolution: cdktf.booleanToTerraform(this._requireConversationResolution),
            require_signed_commits: cdktf.booleanToTerraform(this._requireSignedCommits),
            required_pull_request_reviews: branchProtectionV3RequiredPullRequestReviewsToTerraform(this._requiredPullRequestReviews.internalValue),
            required_status_checks: branchProtectionV3RequiredStatusChecksToTerraform(this._requiredStatusChecks.internalValue),
            restrictions: branchProtectionV3RestrictionsToTerraform(this._restrictions.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            branch: {
                value: cdktf.stringToHclTerraform(this._branch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enforce_admins: {
                value: cdktf.booleanToHclTerraform(this._enforceAdmins),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
            require_conversation_resolution: {
                value: cdktf.booleanToHclTerraform(this._requireConversationResolution),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            require_signed_commits: {
                value: cdktf.booleanToHclTerraform(this._requireSignedCommits),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            required_pull_request_reviews: {
                value: branchProtectionV3RequiredPullRequestReviewsToHclTerraform(this._requiredPullRequestReviews.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "BranchProtectionV3RequiredPullRequestReviewsList",
            },
            required_status_checks: {
                value: branchProtectionV3RequiredStatusChecksToHclTerraform(this._requiredStatusChecks.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "BranchProtectionV3RequiredStatusChecksList",
            },
            restrictions: {
                value: branchProtectionV3RestrictionsToHclTerraform(this._restrictions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "BranchProtectionV3RestrictionsList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
