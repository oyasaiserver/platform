"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection
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
exports.BranchProtection = exports.BranchProtectionRestrictPushesList = exports.BranchProtectionRestrictPushesOutputReference = exports.BranchProtectionRequiredStatusChecksList = exports.BranchProtectionRequiredStatusChecksOutputReference = exports.BranchProtectionRequiredPullRequestReviewsList = exports.BranchProtectionRequiredPullRequestReviewsOutputReference = void 0;
exports.branchProtectionRequiredPullRequestReviewsToTerraform = branchProtectionRequiredPullRequestReviewsToTerraform;
exports.branchProtectionRequiredPullRequestReviewsToHclTerraform = branchProtectionRequiredPullRequestReviewsToHclTerraform;
exports.branchProtectionRequiredStatusChecksToTerraform = branchProtectionRequiredStatusChecksToTerraform;
exports.branchProtectionRequiredStatusChecksToHclTerraform = branchProtectionRequiredStatusChecksToHclTerraform;
exports.branchProtectionRestrictPushesToTerraform = branchProtectionRestrictPushesToTerraform;
exports.branchProtectionRestrictPushesToHclTerraform = branchProtectionRestrictPushesToHclTerraform;
var cdktf = require("cdktf");
function branchProtectionRequiredPullRequestReviewsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dismiss_stale_reviews: cdktf.booleanToTerraform(struct.dismissStaleReviews),
        dismissal_restrictions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.dismissalRestrictions),
        pull_request_bypassers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.pullRequestBypassers),
        require_code_owner_reviews: cdktf.booleanToTerraform(struct.requireCodeOwnerReviews),
        require_last_push_approval: cdktf.booleanToTerraform(struct.requireLastPushApproval),
        required_approving_review_count: cdktf.numberToTerraform(struct.requiredApprovingReviewCount),
        restrict_dismissals: cdktf.booleanToTerraform(struct.restrictDismissals),
    };
}
function branchProtectionRequiredPullRequestReviewsToHclTerraform(struct) {
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
        dismissal_restrictions: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.dismissalRestrictions),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        pull_request_bypassers: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.pullRequestBypassers),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
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
        restrict_dismissals: {
            value: cdktf.booleanToHclTerraform(struct.restrictDismissals),
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
var BranchProtectionRequiredPullRequestReviewsOutputReference = /** @class */ (function (_super) {
    __extends(BranchProtectionRequiredPullRequestReviewsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function BranchProtectionRequiredPullRequestReviewsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(BranchProtectionRequiredPullRequestReviewsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._dismissStaleReviews !== undefined) {
                hasAnyValues = true;
                internalValueResult.dismissStaleReviews = this._dismissStaleReviews;
            }
            if (this._dismissalRestrictions !== undefined) {
                hasAnyValues = true;
                internalValueResult.dismissalRestrictions = this._dismissalRestrictions;
            }
            if (this._pullRequestBypassers !== undefined) {
                hasAnyValues = true;
                internalValueResult.pullRequestBypassers = this._pullRequestBypassers;
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
            if (this._restrictDismissals !== undefined) {
                hasAnyValues = true;
                internalValueResult.restrictDismissals = this._restrictDismissals;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._dismissStaleReviews = undefined;
                this._dismissalRestrictions = undefined;
                this._pullRequestBypassers = undefined;
                this._requireCodeOwnerReviews = undefined;
                this._requireLastPushApproval = undefined;
                this._requiredApprovingReviewCount = undefined;
                this._restrictDismissals = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._dismissStaleReviews = value.dismissStaleReviews;
                this._dismissalRestrictions = value.dismissalRestrictions;
                this._pullRequestBypassers = value.pullRequestBypassers;
                this._requireCodeOwnerReviews = value.requireCodeOwnerReviews;
                this._requireLastPushApproval = value.requireLastPushApproval;
                this._requiredApprovingReviewCount = value.requiredApprovingReviewCount;
                this._restrictDismissals = value.restrictDismissals;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionRequiredPullRequestReviewsOutputReference.prototype, "dismissStaleReviews", {
        get: function () {
            return this.getBooleanAttribute('dismiss_stale_reviews');
        },
        set: function (value) {
            this._dismissStaleReviews = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionRequiredPullRequestReviewsOutputReference.prototype.resetDismissStaleReviews = function () {
        this._dismissStaleReviews = undefined;
    };
    Object.defineProperty(BranchProtectionRequiredPullRequestReviewsOutputReference.prototype, "dismissStaleReviewsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dismissStaleReviews;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionRequiredPullRequestReviewsOutputReference.prototype, "dismissalRestrictions", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('dismissal_restrictions'));
        },
        set: function (value) {
            this._dismissalRestrictions = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionRequiredPullRequestReviewsOutputReference.prototype.resetDismissalRestrictions = function () {
        this._dismissalRestrictions = undefined;
    };
    Object.defineProperty(BranchProtectionRequiredPullRequestReviewsOutputReference.prototype, "dismissalRestrictionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dismissalRestrictions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionRequiredPullRequestReviewsOutputReference.prototype, "pullRequestBypassers", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('pull_request_bypassers'));
        },
        set: function (value) {
            this._pullRequestBypassers = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionRequiredPullRequestReviewsOutputReference.prototype.resetPullRequestBypassers = function () {
        this._pullRequestBypassers = undefined;
    };
    Object.defineProperty(BranchProtectionRequiredPullRequestReviewsOutputReference.prototype, "pullRequestBypassersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pullRequestBypassers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionRequiredPullRequestReviewsOutputReference.prototype, "requireCodeOwnerReviews", {
        get: function () {
            return this.getBooleanAttribute('require_code_owner_reviews');
        },
        set: function (value) {
            this._requireCodeOwnerReviews = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionRequiredPullRequestReviewsOutputReference.prototype.resetRequireCodeOwnerReviews = function () {
        this._requireCodeOwnerReviews = undefined;
    };
    Object.defineProperty(BranchProtectionRequiredPullRequestReviewsOutputReference.prototype, "requireCodeOwnerReviewsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireCodeOwnerReviews;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionRequiredPullRequestReviewsOutputReference.prototype, "requireLastPushApproval", {
        get: function () {
            return this.getBooleanAttribute('require_last_push_approval');
        },
        set: function (value) {
            this._requireLastPushApproval = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionRequiredPullRequestReviewsOutputReference.prototype.resetRequireLastPushApproval = function () {
        this._requireLastPushApproval = undefined;
    };
    Object.defineProperty(BranchProtectionRequiredPullRequestReviewsOutputReference.prototype, "requireLastPushApprovalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireLastPushApproval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionRequiredPullRequestReviewsOutputReference.prototype, "requiredApprovingReviewCount", {
        get: function () {
            return this.getNumberAttribute('required_approving_review_count');
        },
        set: function (value) {
            this._requiredApprovingReviewCount = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionRequiredPullRequestReviewsOutputReference.prototype.resetRequiredApprovingReviewCount = function () {
        this._requiredApprovingReviewCount = undefined;
    };
    Object.defineProperty(BranchProtectionRequiredPullRequestReviewsOutputReference.prototype, "requiredApprovingReviewCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredApprovingReviewCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionRequiredPullRequestReviewsOutputReference.prototype, "restrictDismissals", {
        get: function () {
            return this.getBooleanAttribute('restrict_dismissals');
        },
        set: function (value) {
            this._restrictDismissals = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionRequiredPullRequestReviewsOutputReference.prototype.resetRestrictDismissals = function () {
        this._restrictDismissals = undefined;
    };
    Object.defineProperty(BranchProtectionRequiredPullRequestReviewsOutputReference.prototype, "restrictDismissalsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restrictDismissals;
        },
        enumerable: false,
        configurable: true
    });
    return BranchProtectionRequiredPullRequestReviewsOutputReference;
}(cdktf.ComplexObject));
exports.BranchProtectionRequiredPullRequestReviewsOutputReference = BranchProtectionRequiredPullRequestReviewsOutputReference;
var BranchProtectionRequiredPullRequestReviewsList = /** @class */ (function (_super) {
    __extends(BranchProtectionRequiredPullRequestReviewsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function BranchProtectionRequiredPullRequestReviewsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    BranchProtectionRequiredPullRequestReviewsList.prototype.get = function (index) {
        return new BranchProtectionRequiredPullRequestReviewsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return BranchProtectionRequiredPullRequestReviewsList;
}(cdktf.ComplexList));
exports.BranchProtectionRequiredPullRequestReviewsList = BranchProtectionRequiredPullRequestReviewsList;
function branchProtectionRequiredStatusChecksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        contexts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.contexts),
        strict: cdktf.booleanToTerraform(struct.strict),
    };
}
function branchProtectionRequiredStatusChecksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        contexts: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.contexts),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
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
var BranchProtectionRequiredStatusChecksOutputReference = /** @class */ (function (_super) {
    __extends(BranchProtectionRequiredStatusChecksOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function BranchProtectionRequiredStatusChecksOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(BranchProtectionRequiredStatusChecksOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._contexts !== undefined) {
                hasAnyValues = true;
                internalValueResult.contexts = this._contexts;
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
                this.resolvableValue = undefined;
                this._contexts = undefined;
                this._strict = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._contexts = value.contexts;
                this._strict = value.strict;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionRequiredStatusChecksOutputReference.prototype, "contexts", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('contexts'));
        },
        set: function (value) {
            this._contexts = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionRequiredStatusChecksOutputReference.prototype.resetContexts = function () {
        this._contexts = undefined;
    };
    Object.defineProperty(BranchProtectionRequiredStatusChecksOutputReference.prototype, "contextsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contexts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionRequiredStatusChecksOutputReference.prototype, "strict", {
        get: function () {
            return this.getBooleanAttribute('strict');
        },
        set: function (value) {
            this._strict = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionRequiredStatusChecksOutputReference.prototype.resetStrict = function () {
        this._strict = undefined;
    };
    Object.defineProperty(BranchProtectionRequiredStatusChecksOutputReference.prototype, "strictInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._strict;
        },
        enumerable: false,
        configurable: true
    });
    return BranchProtectionRequiredStatusChecksOutputReference;
}(cdktf.ComplexObject));
exports.BranchProtectionRequiredStatusChecksOutputReference = BranchProtectionRequiredStatusChecksOutputReference;
var BranchProtectionRequiredStatusChecksList = /** @class */ (function (_super) {
    __extends(BranchProtectionRequiredStatusChecksList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function BranchProtectionRequiredStatusChecksList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    BranchProtectionRequiredStatusChecksList.prototype.get = function (index) {
        return new BranchProtectionRequiredStatusChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return BranchProtectionRequiredStatusChecksList;
}(cdktf.ComplexList));
exports.BranchProtectionRequiredStatusChecksList = BranchProtectionRequiredStatusChecksList;
function branchProtectionRestrictPushesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        blocks_creations: cdktf.booleanToTerraform(struct.blocksCreations),
        push_allowances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.pushAllowances),
    };
}
function branchProtectionRestrictPushesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        blocks_creations: {
            value: cdktf.booleanToHclTerraform(struct.blocksCreations),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        push_allowances: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.pushAllowances),
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
var BranchProtectionRestrictPushesOutputReference = /** @class */ (function (_super) {
    __extends(BranchProtectionRestrictPushesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function BranchProtectionRestrictPushesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(BranchProtectionRestrictPushesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._blocksCreations !== undefined) {
                hasAnyValues = true;
                internalValueResult.blocksCreations = this._blocksCreations;
            }
            if (this._pushAllowances !== undefined) {
                hasAnyValues = true;
                internalValueResult.pushAllowances = this._pushAllowances;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._blocksCreations = undefined;
                this._pushAllowances = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._blocksCreations = value.blocksCreations;
                this._pushAllowances = value.pushAllowances;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionRestrictPushesOutputReference.prototype, "blocksCreations", {
        get: function () {
            return this.getBooleanAttribute('blocks_creations');
        },
        set: function (value) {
            this._blocksCreations = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionRestrictPushesOutputReference.prototype.resetBlocksCreations = function () {
        this._blocksCreations = undefined;
    };
    Object.defineProperty(BranchProtectionRestrictPushesOutputReference.prototype, "blocksCreationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._blocksCreations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtectionRestrictPushesOutputReference.prototype, "pushAllowances", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('push_allowances'));
        },
        set: function (value) {
            this._pushAllowances = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtectionRestrictPushesOutputReference.prototype.resetPushAllowances = function () {
        this._pushAllowances = undefined;
    };
    Object.defineProperty(BranchProtectionRestrictPushesOutputReference.prototype, "pushAllowancesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pushAllowances;
        },
        enumerable: false,
        configurable: true
    });
    return BranchProtectionRestrictPushesOutputReference;
}(cdktf.ComplexObject));
exports.BranchProtectionRestrictPushesOutputReference = BranchProtectionRestrictPushesOutputReference;
var BranchProtectionRestrictPushesList = /** @class */ (function (_super) {
    __extends(BranchProtectionRestrictPushesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function BranchProtectionRestrictPushesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    BranchProtectionRestrictPushesList.prototype.get = function (index) {
        return new BranchProtectionRestrictPushesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return BranchProtectionRestrictPushesList;
}(cdktf.ComplexList));
exports.BranchProtectionRestrictPushesList = BranchProtectionRestrictPushesList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection github_branch_protection}
*/
var BranchProtection = /** @class */ (function (_super) {
    __extends(BranchProtection, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection github_branch_protection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BranchProtectionConfig
    */
    function BranchProtection(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_branch_protection',
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
        _this._requiredPullRequestReviews = new BranchProtectionRequiredPullRequestReviewsList(_this, "required_pull_request_reviews", false);
        // required_status_checks - computed: false, optional: true, required: false
        _this._requiredStatusChecks = new BranchProtectionRequiredStatusChecksList(_this, "required_status_checks", false);
        // restrict_pushes - computed: false, optional: true, required: false
        _this._restrictPushes = new BranchProtectionRestrictPushesList(_this, "restrict_pushes", false);
        _this._allowsDeletions = config.allowsDeletions;
        _this._allowsForcePushes = config.allowsForcePushes;
        _this._enforceAdmins = config.enforceAdmins;
        _this._forcePushBypassers = config.forcePushBypassers;
        _this._id = config.id;
        _this._lockBranch = config.lockBranch;
        _this._pattern = config.pattern;
        _this._repositoryId = config.repositoryId;
        _this._requireConversationResolution = config.requireConversationResolution;
        _this._requireSignedCommits = config.requireSignedCommits;
        _this._requiredLinearHistory = config.requiredLinearHistory;
        _this._requiredPullRequestReviews.internalValue = config.requiredPullRequestReviews;
        _this._requiredStatusChecks.internalValue = config.requiredStatusChecks;
        _this._restrictPushes.internalValue = config.restrictPushes;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a BranchProtection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BranchProtection to import
    * @param importFromId The id of the existing BranchProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BranchProtection to import is found
    */
    BranchProtection.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_branch_protection", importId: importFromId, provider: provider });
    };
    Object.defineProperty(BranchProtection.prototype, "allowsDeletions", {
        get: function () {
            return this.getBooleanAttribute('allows_deletions');
        },
        set: function (value) {
            this._allowsDeletions = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtection.prototype.resetAllowsDeletions = function () {
        this._allowsDeletions = undefined;
    };
    Object.defineProperty(BranchProtection.prototype, "allowsDeletionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowsDeletions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtection.prototype, "allowsForcePushes", {
        get: function () {
            return this.getBooleanAttribute('allows_force_pushes');
        },
        set: function (value) {
            this._allowsForcePushes = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtection.prototype.resetAllowsForcePushes = function () {
        this._allowsForcePushes = undefined;
    };
    Object.defineProperty(BranchProtection.prototype, "allowsForcePushesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowsForcePushes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtection.prototype, "enforceAdmins", {
        get: function () {
            return this.getBooleanAttribute('enforce_admins');
        },
        set: function (value) {
            this._enforceAdmins = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtection.prototype.resetEnforceAdmins = function () {
        this._enforceAdmins = undefined;
    };
    Object.defineProperty(BranchProtection.prototype, "enforceAdminsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enforceAdmins;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtection.prototype, "forcePushBypassers", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('force_push_bypassers'));
        },
        set: function (value) {
            this._forcePushBypassers = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtection.prototype.resetForcePushBypassers = function () {
        this._forcePushBypassers = undefined;
    };
    Object.defineProperty(BranchProtection.prototype, "forcePushBypassersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forcePushBypassers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtection.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtection.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(BranchProtection.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtection.prototype, "lockBranch", {
        get: function () {
            return this.getBooleanAttribute('lock_branch');
        },
        set: function (value) {
            this._lockBranch = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtection.prototype.resetLockBranch = function () {
        this._lockBranch = undefined;
    };
    Object.defineProperty(BranchProtection.prototype, "lockBranchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lockBranch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtection.prototype, "pattern", {
        get: function () {
            return this.getStringAttribute('pattern');
        },
        set: function (value) {
            this._pattern = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtection.prototype, "patternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtection.prototype, "repositoryId", {
        get: function () {
            return this.getStringAttribute('repository_id');
        },
        set: function (value) {
            this._repositoryId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtection.prototype, "repositoryIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repositoryId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtection.prototype, "requireConversationResolution", {
        get: function () {
            return this.getBooleanAttribute('require_conversation_resolution');
        },
        set: function (value) {
            this._requireConversationResolution = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtection.prototype.resetRequireConversationResolution = function () {
        this._requireConversationResolution = undefined;
    };
    Object.defineProperty(BranchProtection.prototype, "requireConversationResolutionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireConversationResolution;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtection.prototype, "requireSignedCommits", {
        get: function () {
            return this.getBooleanAttribute('require_signed_commits');
        },
        set: function (value) {
            this._requireSignedCommits = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtection.prototype.resetRequireSignedCommits = function () {
        this._requireSignedCommits = undefined;
    };
    Object.defineProperty(BranchProtection.prototype, "requireSignedCommitsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireSignedCommits;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtection.prototype, "requiredLinearHistory", {
        get: function () {
            return this.getBooleanAttribute('required_linear_history');
        },
        set: function (value) {
            this._requiredLinearHistory = value;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtection.prototype.resetRequiredLinearHistory = function () {
        this._requiredLinearHistory = undefined;
    };
    Object.defineProperty(BranchProtection.prototype, "requiredLinearHistoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredLinearHistory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtection.prototype, "requiredPullRequestReviews", {
        get: function () {
            return this._requiredPullRequestReviews;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtection.prototype.putRequiredPullRequestReviews = function (value) {
        this._requiredPullRequestReviews.internalValue = value;
    };
    BranchProtection.prototype.resetRequiredPullRequestReviews = function () {
        this._requiredPullRequestReviews.internalValue = undefined;
    };
    Object.defineProperty(BranchProtection.prototype, "requiredPullRequestReviewsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredPullRequestReviews.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtection.prototype, "requiredStatusChecks", {
        get: function () {
            return this._requiredStatusChecks;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtection.prototype.putRequiredStatusChecks = function (value) {
        this._requiredStatusChecks.internalValue = value;
    };
    BranchProtection.prototype.resetRequiredStatusChecks = function () {
        this._requiredStatusChecks.internalValue = undefined;
    };
    Object.defineProperty(BranchProtection.prototype, "requiredStatusChecksInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredStatusChecks.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BranchProtection.prototype, "restrictPushes", {
        get: function () {
            return this._restrictPushes;
        },
        enumerable: false,
        configurable: true
    });
    BranchProtection.prototype.putRestrictPushes = function (value) {
        this._restrictPushes.internalValue = value;
    };
    BranchProtection.prototype.resetRestrictPushes = function () {
        this._restrictPushes.internalValue = undefined;
    };
    Object.defineProperty(BranchProtection.prototype, "restrictPushesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restrictPushes.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    BranchProtection.prototype.synthesizeAttributes = function () {
        return {
            allows_deletions: cdktf.booleanToTerraform(this._allowsDeletions),
            allows_force_pushes: cdktf.booleanToTerraform(this._allowsForcePushes),
            enforce_admins: cdktf.booleanToTerraform(this._enforceAdmins),
            force_push_bypassers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._forcePushBypassers),
            id: cdktf.stringToTerraform(this._id),
            lock_branch: cdktf.booleanToTerraform(this._lockBranch),
            pattern: cdktf.stringToTerraform(this._pattern),
            repository_id: cdktf.stringToTerraform(this._repositoryId),
            require_conversation_resolution: cdktf.booleanToTerraform(this._requireConversationResolution),
            require_signed_commits: cdktf.booleanToTerraform(this._requireSignedCommits),
            required_linear_history: cdktf.booleanToTerraform(this._requiredLinearHistory),
            required_pull_request_reviews: cdktf.listMapper(branchProtectionRequiredPullRequestReviewsToTerraform, true)(this._requiredPullRequestReviews.internalValue),
            required_status_checks: cdktf.listMapper(branchProtectionRequiredStatusChecksToTerraform, true)(this._requiredStatusChecks.internalValue),
            restrict_pushes: cdktf.listMapper(branchProtectionRestrictPushesToTerraform, true)(this._restrictPushes.internalValue),
        };
    };
    BranchProtection.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            allows_deletions: {
                value: cdktf.booleanToHclTerraform(this._allowsDeletions),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allows_force_pushes: {
                value: cdktf.booleanToHclTerraform(this._allowsForcePushes),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            enforce_admins: {
                value: cdktf.booleanToHclTerraform(this._enforceAdmins),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            force_push_bypassers: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._forcePushBypassers),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            lock_branch: {
                value: cdktf.booleanToHclTerraform(this._lockBranch),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            pattern: {
                value: cdktf.stringToHclTerraform(this._pattern),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            repository_id: {
                value: cdktf.stringToHclTerraform(this._repositoryId),
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
            required_linear_history: {
                value: cdktf.booleanToHclTerraform(this._requiredLinearHistory),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            required_pull_request_reviews: {
                value: cdktf.listMapperHcl(branchProtectionRequiredPullRequestReviewsToHclTerraform, true)(this._requiredPullRequestReviews.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "BranchProtectionRequiredPullRequestReviewsList",
            },
            required_status_checks: {
                value: cdktf.listMapperHcl(branchProtectionRequiredStatusChecksToHclTerraform, true)(this._requiredStatusChecks.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "BranchProtectionRequiredStatusChecksList",
            },
            restrict_pushes: {
                value: cdktf.listMapperHcl(branchProtectionRestrictPushesToHclTerraform, true)(this._restrictPushes.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "BranchProtectionRestrictPushesList",
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
    BranchProtection.tfResourceType = "github_branch_protection";
    return BranchProtection;
}(cdktf.TerraformResource));
exports.BranchProtection = BranchProtection;
