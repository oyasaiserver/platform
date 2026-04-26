"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3
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
exports.BranchProtectionV3 = exports.BranchProtectionV3RestrictionsOutputReference = exports.BranchProtectionV3RequiredStatusChecksOutputReference = exports.BranchProtectionV3RequiredPullRequestReviewsOutputReference = exports.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference = void 0;
exports.branchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesToTerraform = branchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesToTerraform;
exports.branchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesToHclTerraform = branchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesToHclTerraform;
exports.branchProtectionV3RequiredPullRequestReviewsToTerraform = branchProtectionV3RequiredPullRequestReviewsToTerraform;
exports.branchProtectionV3RequiredPullRequestReviewsToHclTerraform = branchProtectionV3RequiredPullRequestReviewsToHclTerraform;
exports.branchProtectionV3RequiredStatusChecksToTerraform = branchProtectionV3RequiredStatusChecksToTerraform;
exports.branchProtectionV3RequiredStatusChecksToHclTerraform = branchProtectionV3RequiredStatusChecksToHclTerraform;
exports.branchProtectionV3RestrictionsToTerraform = branchProtectionV3RestrictionsToTerraform;
exports.branchProtectionV3RestrictionsToHclTerraform = branchProtectionV3RestrictionsToHclTerraform;
var cdktf = require("cdktf");
function branchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesToTerraform(struct) {
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
function branchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference = /** @class */ (function (_super) {
    __extends(BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
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
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.prototype, "apps", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('apps'));
        },
        set: function (value) {
            this._apps = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.prototype.resetApps = function () {
        this._apps = undefined;
    };
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.prototype, "appsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.prototype, "teams", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('teams'));
        },
        set: function (value) {
            this._teams = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.prototype.resetTeams = function () {
        this._teams = undefined;
    };
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.prototype, "teamsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._teams;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.prototype, "users", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('users'));
        },
        set: function (value) {
            this._users = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.prototype.resetUsers = function () {
        this._users = undefined;
    };
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.prototype, "usersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._users;
        },
        enumerable: false,
        configurable: true
    });
    return BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference;
}(cdktf.ComplexObject));
exports.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference = BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference;
function branchProtectionV3RequiredPullRequestReviewsToTerraform(struct) {
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
function branchProtectionV3RequiredPullRequestReviewsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var BranchProtectionV3RequiredPullRequestReviewsOutputReference = /** @class */ (function (_super) {
    __extends(BranchProtectionV3RequiredPullRequestReviewsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function BranchProtectionV3RequiredPullRequestReviewsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // bypass_pull_request_allowances - computed: false, optional: true, required: false
        _this._bypassPullRequestAllowances = new BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference(_this, "bypass_pull_request_allowances");
        return _this;
    }
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
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
            if (((_a = this._bypassPullRequestAllowances) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.bypassPullRequestAllowances = (_b = this._bypassPullRequestAllowances) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype, "dismissStaleReviews", {
        get: function () {
            return this.getBooleanAttribute('dismiss_stale_reviews');
        },
        set: function (value) {
            this._dismissStaleReviews = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype.resetDismissStaleReviews = function () {
        this._dismissStaleReviews = undefined;
    };
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype, "dismissStaleReviewsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dismissStaleReviews;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype, "dismissalApps", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('dismissal_apps'));
        },
        set: function (value) {
            this._dismissalApps = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype.resetDismissalApps = function () {
        this._dismissalApps = undefined;
    };
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype, "dismissalAppsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dismissalApps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype, "dismissalTeams", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('dismissal_teams'));
        },
        set: function (value) {
            this._dismissalTeams = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype.resetDismissalTeams = function () {
        this._dismissalTeams = undefined;
    };
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype, "dismissalTeamsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dismissalTeams;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype, "dismissalUsers", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('dismissal_users'));
        },
        set: function (value) {
            this._dismissalUsers = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype.resetDismissalUsers = function () {
        this._dismissalUsers = undefined;
    };
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype, "dismissalUsersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dismissalUsers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype, "includeAdmins", {
        get: function () {
            return this.getBooleanAttribute('include_admins');
        },
        set: function (value) {
            this._includeAdmins = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype.resetIncludeAdmins = function () {
        this._includeAdmins = undefined;
    };
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype, "includeAdminsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includeAdmins;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype, "requireCodeOwnerReviews", {
        get: function () {
            return this.getBooleanAttribute('require_code_owner_reviews');
        },
        set: function (value) {
            this._requireCodeOwnerReviews = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype.resetRequireCodeOwnerReviews = function () {
        this._requireCodeOwnerReviews = undefined;
    };
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype, "requireCodeOwnerReviewsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireCodeOwnerReviews;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype, "requireLastPushApproval", {
        get: function () {
            return this.getBooleanAttribute('require_last_push_approval');
        },
        set: function (value) {
            this._requireLastPushApproval = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype.resetRequireLastPushApproval = function () {
        this._requireLastPushApproval = undefined;
    };
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype, "requireLastPushApprovalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireLastPushApproval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype, "requiredApprovingReviewCount", {
        get: function () {
            return this.getNumberAttribute('required_approving_review_count');
        },
        set: function (value) {
            this._requiredApprovingReviewCount = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype.resetRequiredApprovingReviewCount = function () {
        this._requiredApprovingReviewCount = undefined;
    };
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype, "requiredApprovingReviewCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredApprovingReviewCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype, "bypassPullRequestAllowances", {
        get: function () {
            return this._bypassPullRequestAllowances;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype.putBypassPullRequestAllowances = function (value) {
        this._bypassPullRequestAllowances.internalValue = value;
    };
    BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype.resetBypassPullRequestAllowances = function () {
        this._bypassPullRequestAllowances.internalValue = undefined;
    };
    Object.defineProperty(BranchProtectionV3RequiredPullRequestReviewsOutputReference.prototype, "bypassPullRequestAllowancesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bypassPullRequestAllowances.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return BranchProtectionV3RequiredPullRequestReviewsOutputReference;
}(cdktf.ComplexObject));
exports.BranchProtectionV3RequiredPullRequestReviewsOutputReference = BranchProtectionV3RequiredPullRequestReviewsOutputReference;
function branchProtectionV3RequiredStatusChecksToTerraform(struct) {
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
function branchProtectionV3RequiredStatusChecksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var BranchProtectionV3RequiredStatusChecksOutputReference = /** @class */ (function (_super) {
    __extends(BranchProtectionV3RequiredStatusChecksOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function BranchProtectionV3RequiredStatusChecksOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(BranchProtectionV3RequiredStatusChecksOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
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
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3RequiredStatusChecksOutputReference.prototype, "checks", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('checks'));
        },
        set: function (value) {
            this._checks = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3RequiredStatusChecksOutputReference.prototype.resetChecks = function () {
        this._checks = undefined;
    };
    Object.defineProperty(BranchProtectionV3RequiredStatusChecksOutputReference.prototype, "checksInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._checks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3RequiredStatusChecksOutputReference.prototype, "contexts", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('contexts'));
        },
        set: function (value) {
            this._contexts = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3RequiredStatusChecksOutputReference.prototype.resetContexts = function () {
        this._contexts = undefined;
    };
    Object.defineProperty(BranchProtectionV3RequiredStatusChecksOutputReference.prototype, "contextsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contexts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3RequiredStatusChecksOutputReference.prototype, "includeAdmins", {
        get: function () {
            return this.getBooleanAttribute('include_admins');
        },
        set: function (value) {
            this._includeAdmins = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3RequiredStatusChecksOutputReference.prototype.resetIncludeAdmins = function () {
        this._includeAdmins = undefined;
    };
    Object.defineProperty(BranchProtectionV3RequiredStatusChecksOutputReference.prototype, "includeAdminsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includeAdmins;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3RequiredStatusChecksOutputReference.prototype, "strict", {
        get: function () {
            return this.getBooleanAttribute('strict');
        },
        set: function (value) {
            this._strict = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3RequiredStatusChecksOutputReference.prototype.resetStrict = function () {
        this._strict = undefined;
    };
    Object.defineProperty(BranchProtectionV3RequiredStatusChecksOutputReference.prototype, "strictInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._strict;
        },
        enumerable: false,
        configurable: true
    });
    return BranchProtectionV3RequiredStatusChecksOutputReference;
}(cdktf.ComplexObject));
exports.BranchProtectionV3RequiredStatusChecksOutputReference = BranchProtectionV3RequiredStatusChecksOutputReference;
function branchProtectionV3RestrictionsToTerraform(struct) {
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
function branchProtectionV3RestrictionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var BranchProtectionV3RestrictionsOutputReference = /** @class */ (function (_super) {
    __extends(BranchProtectionV3RestrictionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function BranchProtectionV3RestrictionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(BranchProtectionV3RestrictionsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
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
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3RestrictionsOutputReference.prototype, "apps", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('apps'));
        },
        set: function (value) {
            this._apps = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3RestrictionsOutputReference.prototype.resetApps = function () {
        this._apps = undefined;
    };
    Object.defineProperty(BranchProtectionV3RestrictionsOutputReference.prototype, "appsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3RestrictionsOutputReference.prototype, "teams", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('teams'));
        },
        set: function (value) {
            this._teams = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3RestrictionsOutputReference.prototype.resetTeams = function () {
        this._teams = undefined;
    };
    Object.defineProperty(BranchProtectionV3RestrictionsOutputReference.prototype, "teamsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._teams;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3RestrictionsOutputReference.prototype, "users", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('users'));
        },
        set: function (value) {
            this._users = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3RestrictionsOutputReference.prototype.resetUsers = function () {
        this._users = undefined;
    };
    Object.defineProperty(BranchProtectionV3RestrictionsOutputReference.prototype, "usersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._users;
        },
        enumerable: false,
        configurable: true
    });
    return BranchProtectionV3RestrictionsOutputReference;
}(cdktf.ComplexObject));
exports.BranchProtectionV3RestrictionsOutputReference = BranchProtectionV3RestrictionsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3 github_branch_protection_v3}
*/
var BranchProtectionV3 = /** @class */ (function (_super) {
    __extends(BranchProtectionV3, _super);
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
    function BranchProtectionV3(scope, id, config) {
        var _this = _super.call(this, scope, id, {
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
        }) || this;
        // required_pull_request_reviews - computed: false, optional: true, required: false
        _this._requiredPullRequestReviews = new BranchProtectionV3RequiredPullRequestReviewsOutputReference(_this, "required_pull_request_reviews");
        // required_status_checks - computed: false, optional: true, required: false
        _this._requiredStatusChecks = new BranchProtectionV3RequiredStatusChecksOutputReference(_this, "required_status_checks");
        // restrictions - computed: false, optional: true, required: false
        _this._restrictions = new BranchProtectionV3RestrictionsOutputReference(_this, "restrictions");
        _this._branch = config.branch;
        _this._enforceAdmins = config.enforceAdmins;
        _this._id = config.id;
        _this._repository = config.repository;
        _this._requireConversationResolution = config.requireConversationResolution;
        _this._requireSignedCommits = config.requireSignedCommits;
        _this._requiredPullRequestReviews.internalValue = config.requiredPullRequestReviews;
        _this._requiredStatusChecks.internalValue = config.requiredStatusChecks;
        _this._restrictions.internalValue = config.restrictions;
        return _this;
    }
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
    BranchProtectionV3.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_branch_protection_v3", importId: importFromId, provider: provider });
    };
    Object.defineProperty(BranchProtectionV3.prototype, "branch", {
        get: function () {
            return this.getStringAttribute('branch');
        },
        set: function (value) {
            this._branch = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3.prototype, "branchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._branch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3.prototype, "enforceAdmins", {
        get: function () {
            return this.getBooleanAttribute('enforce_admins');
        },
        set: function (value) {
            this._enforceAdmins = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3.prototype.resetEnforceAdmins = function () {
        this._enforceAdmins = undefined;
    };
    Object.defineProperty(BranchProtectionV3.prototype, "enforceAdminsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enforceAdmins;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(BranchProtectionV3.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3.prototype, "requireConversationResolution", {
        get: function () {
            return this.getBooleanAttribute('require_conversation_resolution');
        },
        set: function (value) {
            this._requireConversationResolution = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3.prototype.resetRequireConversationResolution = function () {
        this._requireConversationResolution = undefined;
    };
    Object.defineProperty(BranchProtectionV3.prototype, "requireConversationResolutionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireConversationResolution;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3.prototype, "requireSignedCommits", {
        get: function () {
            return this.getBooleanAttribute('require_signed_commits');
        },
        set: function (value) {
            this._requireSignedCommits = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3.prototype.resetRequireSignedCommits = function () {
        this._requireSignedCommits = undefined;
    };
    Object.defineProperty(BranchProtectionV3.prototype, "requireSignedCommitsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireSignedCommits;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3.prototype, "requiredPullRequestReviews", {
        get: function () {
            return this._requiredPullRequestReviews;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3.prototype.putRequiredPullRequestReviews = function (value) {
        this._requiredPullRequestReviews.internalValue = value;
    };
    BranchProtectionV3.prototype.resetRequiredPullRequestReviews = function () {
        this._requiredPullRequestReviews.internalValue = undefined;
    };
    Object.defineProperty(BranchProtectionV3.prototype, "requiredPullRequestReviewsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredPullRequestReviews.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3.prototype, "requiredStatusChecks", {
        get: function () {
            return this._requiredStatusChecks;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3.prototype.putRequiredStatusChecks = function (value) {
        this._requiredStatusChecks.internalValue = value;
    };
    BranchProtectionV3.prototype.resetRequiredStatusChecks = function () {
        this._requiredStatusChecks.internalValue = undefined;
    };
    Object.defineProperty(BranchProtectionV3.prototype, "requiredStatusChecksInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredStatusChecks.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionV3.prototype, "restrictions", {
        get: function () {
            return this._restrictions;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionV3.prototype.putRestrictions = function (value) {
        this._restrictions.internalValue = value;
    };
    BranchProtectionV3.prototype.resetRestrictions = function () {
        this._restrictions.internalValue = undefined;
    };
    Object.defineProperty(BranchProtectionV3.prototype, "restrictionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restrictions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    BranchProtectionV3.prototype.synthesizeAttributes = function () {
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
    };
    BranchProtectionV3.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    BranchProtectionV3.tfResourceType = "github_branch_protection_v3";
    return BranchProtectionV3;
}(cdktf.TerraformResource));
exports.BranchProtectionV3 = BranchProtectionV3;
