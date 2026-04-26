import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BranchProtectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Setting this to 'true' to allow the branch to be deleted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#allows_deletions BranchProtection#allows_deletions}
    */
    readonly allowsDeletions?: boolean | cdktf.IResolvable;
    /**
    * Setting this to 'true' to allow force pushes on the branch.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#allows_force_pushes BranchProtection#allows_force_pushes}
    */
    readonly allowsForcePushes?: boolean | cdktf.IResolvable;
    /**
    * Setting this to 'true' enforces status checks for repository administrators.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#enforce_admins BranchProtection#enforce_admins}
    */
    readonly enforceAdmins?: boolean | cdktf.IResolvable;
    /**
    * The list of actor Names/IDs that are allowed to bypass force push restrictions. Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#force_push_bypassers BranchProtection#force_push_bypassers}
    */
    readonly forcePushBypassers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#id BranchProtection#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Setting this to 'true' will make the branch read-only and preventing any pushes to it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#lock_branch BranchProtection#lock_branch}
    */
    readonly lockBranch?: boolean | cdktf.IResolvable;
    /**
    * Identifies the protection rule pattern.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#pattern BranchProtection#pattern}
    */
    readonly pattern: string;
    /**
    * The name or node ID of the repository associated with this branch protection rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#repository_id BranchProtection#repository_id}
    */
    readonly repositoryId: string;
    /**
    * Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#require_conversation_resolution BranchProtection#require_conversation_resolution}
    */
    readonly requireConversationResolution?: boolean | cdktf.IResolvable;
    /**
    * Setting this to 'true' requires all commits to be signed with GPG.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#require_signed_commits BranchProtection#require_signed_commits}
    */
    readonly requireSignedCommits?: boolean | cdktf.IResolvable;
    /**
    * Setting this to 'true' enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#required_linear_history BranchProtection#required_linear_history}
    */
    readonly requiredLinearHistory?: boolean | cdktf.IResolvable;
    /**
    * required_pull_request_reviews block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#required_pull_request_reviews BranchProtection#required_pull_request_reviews}
    */
    readonly requiredPullRequestReviews?: BranchProtectionRequiredPullRequestReviews[] | cdktf.IResolvable;
    /**
    * required_status_checks block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#required_status_checks BranchProtection#required_status_checks}
    */
    readonly requiredStatusChecks?: BranchProtectionRequiredStatusChecks[] | cdktf.IResolvable;
    /**
    * restrict_pushes block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#restrict_pushes BranchProtection#restrict_pushes}
    */
    readonly restrictPushes?: BranchProtectionRestrictPushes[] | cdktf.IResolvable;
}
export interface BranchProtectionRequiredPullRequestReviews {
    /**
    * Dismiss approved reviews automatically when a new commit is pushed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#dismiss_stale_reviews BranchProtection#dismiss_stale_reviews}
    */
    readonly dismissStaleReviews?: boolean | cdktf.IResolvable;
    /**
    * The list of actor Names/IDs with dismissal access. If not empty, 'restrict_dismissals' is ignored. Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#dismissal_restrictions BranchProtection#dismissal_restrictions}
    */
    readonly dismissalRestrictions?: string[];
    /**
    * The list of actor Names/IDs that are allowed to bypass pull request requirements. Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#pull_request_bypassers BranchProtection#pull_request_bypassers}
    */
    readonly pullRequestBypassers?: string[];
    /**
    * Require an approved review in pull requests including files with a designated code owner.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#require_code_owner_reviews BranchProtection#require_code_owner_reviews}
    */
    readonly requireCodeOwnerReviews?: boolean | cdktf.IResolvable;
    /**
    * Require that The most recent push must be approved by someone other than the last pusher.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#require_last_push_approval BranchProtection#require_last_push_approval}
    */
    readonly requireLastPushApproval?: boolean | cdktf.IResolvable;
    /**
    * Require 'x' number of approvals to satisfy branch protection requirements. If this is specified it must be a number between 0-6.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#required_approving_review_count BranchProtection#required_approving_review_count}
    */
    readonly requiredApprovingReviewCount?: number;
    /**
    * Restrict pull request review dismissals.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#restrict_dismissals BranchProtection#restrict_dismissals}
    */
    readonly restrictDismissals?: boolean | cdktf.IResolvable;
}
export declare function branchProtectionRequiredPullRequestReviewsToTerraform(struct?: BranchProtectionRequiredPullRequestReviews | cdktf.IResolvable): any;
export declare function branchProtectionRequiredPullRequestReviewsToHclTerraform(struct?: BranchProtectionRequiredPullRequestReviews | cdktf.IResolvable): any;
export declare class BranchProtectionRequiredPullRequestReviewsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BranchProtectionRequiredPullRequestReviews | cdktf.IResolvable | undefined;
    set internalValue(value: BranchProtectionRequiredPullRequestReviews | cdktf.IResolvable | undefined);
    private _dismissStaleReviews?;
    get dismissStaleReviews(): boolean | cdktf.IResolvable;
    set dismissStaleReviews(value: boolean | cdktf.IResolvable);
    resetDismissStaleReviews(): void;
    get dismissStaleReviewsInput(): any;
    private _dismissalRestrictions?;
    get dismissalRestrictions(): string[];
    set dismissalRestrictions(value: string[]);
    resetDismissalRestrictions(): void;
    get dismissalRestrictionsInput(): string[];
    private _pullRequestBypassers?;
    get pullRequestBypassers(): string[];
    set pullRequestBypassers(value: string[]);
    resetPullRequestBypassers(): void;
    get pullRequestBypassersInput(): string[];
    private _requireCodeOwnerReviews?;
    get requireCodeOwnerReviews(): boolean | cdktf.IResolvable;
    set requireCodeOwnerReviews(value: boolean | cdktf.IResolvable);
    resetRequireCodeOwnerReviews(): void;
    get requireCodeOwnerReviewsInput(): any;
    private _requireLastPushApproval?;
    get requireLastPushApproval(): boolean | cdktf.IResolvable;
    set requireLastPushApproval(value: boolean | cdktf.IResolvable);
    resetRequireLastPushApproval(): void;
    get requireLastPushApprovalInput(): any;
    private _requiredApprovingReviewCount?;
    get requiredApprovingReviewCount(): number;
    set requiredApprovingReviewCount(value: number);
    resetRequiredApprovingReviewCount(): void;
    get requiredApprovingReviewCountInput(): number;
    private _restrictDismissals?;
    get restrictDismissals(): boolean | cdktf.IResolvable;
    set restrictDismissals(value: boolean | cdktf.IResolvable);
    resetRestrictDismissals(): void;
    get restrictDismissalsInput(): any;
}
export declare class BranchProtectionRequiredPullRequestReviewsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BranchProtectionRequiredPullRequestReviews[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BranchProtectionRequiredPullRequestReviewsOutputReference;
}
export interface BranchProtectionRequiredStatusChecks {
    /**
    * The list of status checks to require in order to merge into this branch. No status checks are required by default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#contexts BranchProtection#contexts}
    */
    readonly contexts?: string[];
    /**
    * Require branches to be up to date before merging.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#strict BranchProtection#strict}
    */
    readonly strict?: boolean | cdktf.IResolvable;
}
export declare function branchProtectionRequiredStatusChecksToTerraform(struct?: BranchProtectionRequiredStatusChecks | cdktf.IResolvable): any;
export declare function branchProtectionRequiredStatusChecksToHclTerraform(struct?: BranchProtectionRequiredStatusChecks | cdktf.IResolvable): any;
export declare class BranchProtectionRequiredStatusChecksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BranchProtectionRequiredStatusChecks | cdktf.IResolvable | undefined;
    set internalValue(value: BranchProtectionRequiredStatusChecks | cdktf.IResolvable | undefined);
    private _contexts?;
    get contexts(): string[];
    set contexts(value: string[]);
    resetContexts(): void;
    get contextsInput(): string[];
    private _strict?;
    get strict(): boolean | cdktf.IResolvable;
    set strict(value: boolean | cdktf.IResolvable);
    resetStrict(): void;
    get strictInput(): any;
}
export declare class BranchProtectionRequiredStatusChecksList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BranchProtectionRequiredStatusChecks[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BranchProtectionRequiredStatusChecksOutputReference;
}
export interface BranchProtectionRestrictPushes {
    /**
    * Restrict pushes that create matching branches.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#blocks_creations BranchProtection#blocks_creations}
    */
    readonly blocksCreations?: boolean | cdktf.IResolvable;
    /**
    * The list of actor Names/IDs that may push to the branch. Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#push_allowances BranchProtection#push_allowances}
    */
    readonly pushAllowances?: string[];
}
export declare function branchProtectionRestrictPushesToTerraform(struct?: BranchProtectionRestrictPushes | cdktf.IResolvable): any;
export declare function branchProtectionRestrictPushesToHclTerraform(struct?: BranchProtectionRestrictPushes | cdktf.IResolvable): any;
export declare class BranchProtectionRestrictPushesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BranchProtectionRestrictPushes | cdktf.IResolvable | undefined;
    set internalValue(value: BranchProtectionRestrictPushes | cdktf.IResolvable | undefined);
    private _blocksCreations?;
    get blocksCreations(): boolean | cdktf.IResolvable;
    set blocksCreations(value: boolean | cdktf.IResolvable);
    resetBlocksCreations(): void;
    get blocksCreationsInput(): any;
    private _pushAllowances?;
    get pushAllowances(): string[];
    set pushAllowances(value: string[]);
    resetPushAllowances(): void;
    get pushAllowancesInput(): string[];
}
export declare class BranchProtectionRestrictPushesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BranchProtectionRestrictPushes[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BranchProtectionRestrictPushesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection github_branch_protection}
*/
export declare class BranchProtection extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_branch_protection";
    /**
    * Generates CDKTF code for importing a BranchProtection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BranchProtection to import
    * @param importFromId The id of the existing BranchProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BranchProtection to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection github_branch_protection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BranchProtectionConfig
    */
    constructor(scope: Construct, id: string, config: BranchProtectionConfig);
    private _allowsDeletions?;
    get allowsDeletions(): boolean | cdktf.IResolvable;
    set allowsDeletions(value: boolean | cdktf.IResolvable);
    resetAllowsDeletions(): void;
    get allowsDeletionsInput(): any;
    private _allowsForcePushes?;
    get allowsForcePushes(): boolean | cdktf.IResolvable;
    set allowsForcePushes(value: boolean | cdktf.IResolvable);
    resetAllowsForcePushes(): void;
    get allowsForcePushesInput(): any;
    private _enforceAdmins?;
    get enforceAdmins(): boolean | cdktf.IResolvable;
    set enforceAdmins(value: boolean | cdktf.IResolvable);
    resetEnforceAdmins(): void;
    get enforceAdminsInput(): any;
    private _forcePushBypassers?;
    get forcePushBypassers(): string[];
    set forcePushBypassers(value: string[]);
    resetForcePushBypassers(): void;
    get forcePushBypassersInput(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _lockBranch?;
    get lockBranch(): boolean | cdktf.IResolvable;
    set lockBranch(value: boolean | cdktf.IResolvable);
    resetLockBranch(): void;
    get lockBranchInput(): any;
    private _pattern?;
    get pattern(): string;
    set pattern(value: string);
    get patternInput(): string;
    private _repositoryId?;
    get repositoryId(): string;
    set repositoryId(value: string);
    get repositoryIdInput(): string;
    private _requireConversationResolution?;
    get requireConversationResolution(): boolean | cdktf.IResolvable;
    set requireConversationResolution(value: boolean | cdktf.IResolvable);
    resetRequireConversationResolution(): void;
    get requireConversationResolutionInput(): any;
    private _requireSignedCommits?;
    get requireSignedCommits(): boolean | cdktf.IResolvable;
    set requireSignedCommits(value: boolean | cdktf.IResolvable);
    resetRequireSignedCommits(): void;
    get requireSignedCommitsInput(): any;
    private _requiredLinearHistory?;
    get requiredLinearHistory(): boolean | cdktf.IResolvable;
    set requiredLinearHistory(value: boolean | cdktf.IResolvable);
    resetRequiredLinearHistory(): void;
    get requiredLinearHistoryInput(): any;
    private _requiredPullRequestReviews;
    get requiredPullRequestReviews(): BranchProtectionRequiredPullRequestReviewsList;
    putRequiredPullRequestReviews(value: BranchProtectionRequiredPullRequestReviews[] | cdktf.IResolvable): void;
    resetRequiredPullRequestReviews(): void;
    get requiredPullRequestReviewsInput(): any;
    private _requiredStatusChecks;
    get requiredStatusChecks(): BranchProtectionRequiredStatusChecksList;
    putRequiredStatusChecks(value: BranchProtectionRequiredStatusChecks[] | cdktf.IResolvable): void;
    resetRequiredStatusChecks(): void;
    get requiredStatusChecksInput(): any;
    private _restrictPushes;
    get restrictPushes(): BranchProtectionRestrictPushesList;
    putRestrictPushes(value: BranchProtectionRestrictPushes[] | cdktf.IResolvable): void;
    resetRestrictPushes(): void;
    get restrictPushesInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
