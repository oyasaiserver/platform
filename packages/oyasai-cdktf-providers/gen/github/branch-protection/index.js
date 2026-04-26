// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function branchProtectionRequiredPullRequestReviewsToTerraform(struct) {
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
export function branchProtectionRequiredPullRequestReviewsToHclTerraform(struct) {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class BranchProtectionRequiredPullRequestReviewsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
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
    }
    set internalValue(value) {
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
    // dismissal_restrictions - computed: false, optional: true, required: false
    _dismissalRestrictions;
    get dismissalRestrictions() {
        return cdktf.Fn.tolist(this.getListAttribute('dismissal_restrictions'));
    }
    set dismissalRestrictions(value) {
        this._dismissalRestrictions = value;
    }
    resetDismissalRestrictions() {
        this._dismissalRestrictions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dismissalRestrictionsInput() {
        return this._dismissalRestrictions;
    }
    // pull_request_bypassers - computed: false, optional: true, required: false
    _pullRequestBypassers;
    get pullRequestBypassers() {
        return cdktf.Fn.tolist(this.getListAttribute('pull_request_bypassers'));
    }
    set pullRequestBypassers(value) {
        this._pullRequestBypassers = value;
    }
    resetPullRequestBypassers() {
        this._pullRequestBypassers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pullRequestBypassersInput() {
        return this._pullRequestBypassers;
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
    // restrict_dismissals - computed: false, optional: true, required: false
    _restrictDismissals;
    get restrictDismissals() {
        return this.getBooleanAttribute('restrict_dismissals');
    }
    set restrictDismissals(value) {
        this._restrictDismissals = value;
    }
    resetRestrictDismissals() {
        this._restrictDismissals = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get restrictDismissalsInput() {
        return this._restrictDismissals;
    }
}
export class BranchProtectionRequiredPullRequestReviewsList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new BranchProtectionRequiredPullRequestReviewsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function branchProtectionRequiredStatusChecksToTerraform(struct) {
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
export function branchProtectionRequiredStatusChecksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class BranchProtectionRequiredStatusChecksOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._contexts !== undefined) {
            hasAnyValues = true;
            internalValueResult.contexts = this._contexts;
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
    }
    // contexts - computed: false, optional: true, required: false
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
export class BranchProtectionRequiredStatusChecksList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new BranchProtectionRequiredStatusChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function branchProtectionRestrictPushesToTerraform(struct) {
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
export function branchProtectionRestrictPushesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class BranchProtectionRestrictPushesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._blocksCreations !== undefined) {
            hasAnyValues = true;
            internalValueResult.blocksCreations = this._blocksCreations;
        }
        if (this._pushAllowances !== undefined) {
            hasAnyValues = true;
            internalValueResult.pushAllowances = this._pushAllowances;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    }
    // blocks_creations - computed: false, optional: true, required: false
    _blocksCreations;
    get blocksCreations() {
        return this.getBooleanAttribute('blocks_creations');
    }
    set blocksCreations(value) {
        this._blocksCreations = value;
    }
    resetBlocksCreations() {
        this._blocksCreations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get blocksCreationsInput() {
        return this._blocksCreations;
    }
    // push_allowances - computed: false, optional: true, required: false
    _pushAllowances;
    get pushAllowances() {
        return cdktf.Fn.tolist(this.getListAttribute('push_allowances'));
    }
    set pushAllowances(value) {
        this._pushAllowances = value;
    }
    resetPushAllowances() {
        this._pushAllowances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pushAllowancesInput() {
        return this._pushAllowances;
    }
}
export class BranchProtectionRestrictPushesList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new BranchProtectionRestrictPushesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection github_branch_protection}
*/
export class BranchProtection extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_branch_protection";
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
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_branch_protection", importId: importFromId, provider });
    }
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
    constructor(scope, id, config) {
        super(scope, id, {
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
        });
        this._allowsDeletions = config.allowsDeletions;
        this._allowsForcePushes = config.allowsForcePushes;
        this._enforceAdmins = config.enforceAdmins;
        this._forcePushBypassers = config.forcePushBypassers;
        this._id = config.id;
        this._lockBranch = config.lockBranch;
        this._pattern = config.pattern;
        this._repositoryId = config.repositoryId;
        this._requireConversationResolution = config.requireConversationResolution;
        this._requireSignedCommits = config.requireSignedCommits;
        this._requiredLinearHistory = config.requiredLinearHistory;
        this._requiredPullRequestReviews.internalValue = config.requiredPullRequestReviews;
        this._requiredStatusChecks.internalValue = config.requiredStatusChecks;
        this._restrictPushes.internalValue = config.restrictPushes;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // allows_deletions - computed: false, optional: true, required: false
    _allowsDeletions;
    get allowsDeletions() {
        return this.getBooleanAttribute('allows_deletions');
    }
    set allowsDeletions(value) {
        this._allowsDeletions = value;
    }
    resetAllowsDeletions() {
        this._allowsDeletions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowsDeletionsInput() {
        return this._allowsDeletions;
    }
    // allows_force_pushes - computed: false, optional: true, required: false
    _allowsForcePushes;
    get allowsForcePushes() {
        return this.getBooleanAttribute('allows_force_pushes');
    }
    set allowsForcePushes(value) {
        this._allowsForcePushes = value;
    }
    resetAllowsForcePushes() {
        this._allowsForcePushes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowsForcePushesInput() {
        return this._allowsForcePushes;
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
    // force_push_bypassers - computed: false, optional: true, required: false
    _forcePushBypassers;
    get forcePushBypassers() {
        return cdktf.Fn.tolist(this.getListAttribute('force_push_bypassers'));
    }
    set forcePushBypassers(value) {
        this._forcePushBypassers = value;
    }
    resetForcePushBypassers() {
        this._forcePushBypassers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forcePushBypassersInput() {
        return this._forcePushBypassers;
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
    // lock_branch - computed: false, optional: true, required: false
    _lockBranch;
    get lockBranch() {
        return this.getBooleanAttribute('lock_branch');
    }
    set lockBranch(value) {
        this._lockBranch = value;
    }
    resetLockBranch() {
        this._lockBranch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lockBranchInput() {
        return this._lockBranch;
    }
    // pattern - computed: false, optional: false, required: true
    _pattern;
    get pattern() {
        return this.getStringAttribute('pattern');
    }
    set pattern(value) {
        this._pattern = value;
    }
    // Temporarily expose input value. Use with caution.
    get patternInput() {
        return this._pattern;
    }
    // repository_id - computed: false, optional: false, required: true
    _repositoryId;
    get repositoryId() {
        return this.getStringAttribute('repository_id');
    }
    set repositoryId(value) {
        this._repositoryId = value;
    }
    // Temporarily expose input value. Use with caution.
    get repositoryIdInput() {
        return this._repositoryId;
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
    // required_linear_history - computed: false, optional: true, required: false
    _requiredLinearHistory;
    get requiredLinearHistory() {
        return this.getBooleanAttribute('required_linear_history');
    }
    set requiredLinearHistory(value) {
        this._requiredLinearHistory = value;
    }
    resetRequiredLinearHistory() {
        this._requiredLinearHistory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requiredLinearHistoryInput() {
        return this._requiredLinearHistory;
    }
    // required_pull_request_reviews - computed: false, optional: true, required: false
    _requiredPullRequestReviews = new BranchProtectionRequiredPullRequestReviewsList(this, "required_pull_request_reviews", false);
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
    _requiredStatusChecks = new BranchProtectionRequiredStatusChecksList(this, "required_status_checks", false);
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
    // restrict_pushes - computed: false, optional: true, required: false
    _restrictPushes = new BranchProtectionRestrictPushesList(this, "restrict_pushes", false);
    get restrictPushes() {
        return this._restrictPushes;
    }
    putRestrictPushes(value) {
        this._restrictPushes.internalValue = value;
    }
    resetRestrictPushes() {
        this._restrictPushes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get restrictPushesInput() {
        return this._restrictPushes.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
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
    }
    synthesizeHclAttributes() {
        const attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
