import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BranchProtectionV3Config extends cdktf.TerraformMetaArguments {
    /**
    * The Git branch to protect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#branch BranchProtectionV3#branch}
    */
    readonly branch: string;
    /**
    * Setting this to 'true' enforces status checks for repository administrators.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#enforce_admins BranchProtectionV3#enforce_admins}
    */
    readonly enforceAdmins?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#id BranchProtectionV3#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The GitHub repository name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#repository BranchProtectionV3#repository}
    */
    readonly repository: string;
    /**
    * Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#require_conversation_resolution BranchProtectionV3#require_conversation_resolution}
    */
    readonly requireConversationResolution?: boolean | cdktf.IResolvable;
    /**
    * Setting this to 'true' requires all commits to be signed with GPG.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#require_signed_commits BranchProtectionV3#require_signed_commits}
    */
    readonly requireSignedCommits?: boolean | cdktf.IResolvable;
    /**
    * required_pull_request_reviews block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#required_pull_request_reviews BranchProtectionV3#required_pull_request_reviews}
    */
    readonly requiredPullRequestReviews?: BranchProtectionV3RequiredPullRequestReviews;
    /**
    * required_status_checks block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#required_status_checks BranchProtectionV3#required_status_checks}
    */
    readonly requiredStatusChecks?: BranchProtectionV3RequiredStatusChecks;
    /**
    * restrictions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#restrictions BranchProtectionV3#restrictions}
    */
    readonly restrictions?: BranchProtectionV3Restrictions;
}
export interface BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#apps BranchProtectionV3#apps}
    */
    readonly apps?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#teams BranchProtectionV3#teams}
    */
    readonly teams?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#users BranchProtectionV3#users}
    */
    readonly users?: string[];
}
export declare function branchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesToTerraform(struct?: BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference | BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances): any;
export declare function branchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesToHclTerraform(struct?: BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference | BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances): any;
export declare class BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances | undefined;
    set internalValue(value: BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances | undefined);
    private _apps?;
    get apps(): string[];
    set apps(value: string[]);
    resetApps(): void;
    get appsInput(): string[];
    private _teams?;
    get teams(): string[];
    set teams(value: string[]);
    resetTeams(): void;
    get teamsInput(): string[];
    private _users?;
    get users(): string[];
    set users(value: string[]);
    resetUsers(): void;
    get usersInput(): string[];
}
export interface BranchProtectionV3RequiredPullRequestReviews {
    /**
    * Dismiss approved reviews automatically when a new commit is pushed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#dismiss_stale_reviews BranchProtectionV3#dismiss_stale_reviews}
    */
    readonly dismissStaleReviews?: boolean | cdktf.IResolvable;
    /**
    * The list of apps slugs with dismissal access. Always use slug of the app, not its name. Each app already has to have access to the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#dismissal_apps BranchProtectionV3#dismissal_apps}
    */
    readonly dismissalApps?: string[];
    /**
    * The list of team slugs with dismissal access. Always use slug of the team, not its name. Each team already has to have access to the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#dismissal_teams BranchProtectionV3#dismissal_teams}
    */
    readonly dismissalTeams?: string[];
    /**
    * The list of user logins with dismissal access.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#dismissal_users BranchProtectionV3#dismissal_users}
    */
    readonly dismissalUsers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#include_admins BranchProtectionV3#include_admins}
    */
    readonly includeAdmins?: boolean | cdktf.IResolvable;
    /**
    * Require an approved review in pull requests including files with a designated code owner.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#require_code_owner_reviews BranchProtectionV3#require_code_owner_reviews}
    */
    readonly requireCodeOwnerReviews?: boolean | cdktf.IResolvable;
    /**
    * Require that the most recent push must be approved by someone other than the last pusher.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#require_last_push_approval BranchProtectionV3#require_last_push_approval}
    */
    readonly requireLastPushApproval?: boolean | cdktf.IResolvable;
    /**
    * Require 'x' number of approvals to satisfy branch protection requirements. If this is specified it must be a number between 0-6.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#required_approving_review_count BranchProtectionV3#required_approving_review_count}
    */
    readonly requiredApprovingReviewCount?: number;
    /**
    * bypass_pull_request_allowances block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#bypass_pull_request_allowances BranchProtectionV3#bypass_pull_request_allowances}
    */
    readonly bypassPullRequestAllowances?: BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances;
}
export declare function branchProtectionV3RequiredPullRequestReviewsToTerraform(struct?: BranchProtectionV3RequiredPullRequestReviewsOutputReference | BranchProtectionV3RequiredPullRequestReviews): any;
export declare function branchProtectionV3RequiredPullRequestReviewsToHclTerraform(struct?: BranchProtectionV3RequiredPullRequestReviewsOutputReference | BranchProtectionV3RequiredPullRequestReviews): any;
export declare class BranchProtectionV3RequiredPullRequestReviewsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BranchProtectionV3RequiredPullRequestReviews | undefined;
    set internalValue(value: BranchProtectionV3RequiredPullRequestReviews | undefined);
    private _dismissStaleReviews?;
    get dismissStaleReviews(): boolean | cdktf.IResolvable;
    set dismissStaleReviews(value: boolean | cdktf.IResolvable);
    resetDismissStaleReviews(): void;
    get dismissStaleReviewsInput(): any;
    private _dismissalApps?;
    get dismissalApps(): string[];
    set dismissalApps(value: string[]);
    resetDismissalApps(): void;
    get dismissalAppsInput(): string[];
    private _dismissalTeams?;
    get dismissalTeams(): string[];
    set dismissalTeams(value: string[]);
    resetDismissalTeams(): void;
    get dismissalTeamsInput(): string[];
    private _dismissalUsers?;
    get dismissalUsers(): string[];
    set dismissalUsers(value: string[]);
    resetDismissalUsers(): void;
    get dismissalUsersInput(): string[];
    private _includeAdmins?;
    get includeAdmins(): boolean | cdktf.IResolvable;
    set includeAdmins(value: boolean | cdktf.IResolvable);
    resetIncludeAdmins(): void;
    get includeAdminsInput(): any;
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
    private _bypassPullRequestAllowances;
    get bypassPullRequestAllowances(): BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference;
    putBypassPullRequestAllowances(value: BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances): void;
    resetBypassPullRequestAllowances(): void;
    get bypassPullRequestAllowancesInput(): BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances;
}
export interface BranchProtectionV3RequiredStatusChecks {
    /**
    * The list of status checks to require in order to merge into this branch. No status checks are required by default. Checks should be strings containing the 'context' and 'app_id' like so 'context:app_id'
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#checks BranchProtectionV3#checks}
    */
    readonly checks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#contexts BranchProtectionV3#contexts}
    */
    readonly contexts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#include_admins BranchProtectionV3#include_admins}
    */
    readonly includeAdmins?: boolean | cdktf.IResolvable;
    /**
    * Require branches to be up to date before merging.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#strict BranchProtectionV3#strict}
    */
    readonly strict?: boolean | cdktf.IResolvable;
}
export declare function branchProtectionV3RequiredStatusChecksToTerraform(struct?: BranchProtectionV3RequiredStatusChecksOutputReference | BranchProtectionV3RequiredStatusChecks): any;
export declare function branchProtectionV3RequiredStatusChecksToHclTerraform(struct?: BranchProtectionV3RequiredStatusChecksOutputReference | BranchProtectionV3RequiredStatusChecks): any;
export declare class BranchProtectionV3RequiredStatusChecksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BranchProtectionV3RequiredStatusChecks | undefined;
    set internalValue(value: BranchProtectionV3RequiredStatusChecks | undefined);
    private _checks?;
    get checks(): string[];
    set checks(value: string[]);
    resetChecks(): void;
    get checksInput(): string[];
    private _contexts?;
    get contexts(): string[];
    set contexts(value: string[]);
    resetContexts(): void;
    get contextsInput(): string[];
    private _includeAdmins?;
    get includeAdmins(): boolean | cdktf.IResolvable;
    set includeAdmins(value: boolean | cdktf.IResolvable);
    resetIncludeAdmins(): void;
    get includeAdminsInput(): any;
    private _strict?;
    get strict(): boolean | cdktf.IResolvable;
    set strict(value: boolean | cdktf.IResolvable);
    resetStrict(): void;
    get strictInput(): any;
}
export interface BranchProtectionV3Restrictions {
    /**
    * The list of app slugs with push access.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#apps BranchProtectionV3#apps}
    */
    readonly apps?: string[];
    /**
    * The list of team slugs with push access. Always use slug of the team, not its name. Each team already has to have access to the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#teams BranchProtectionV3#teams}
    */
    readonly teams?: string[];
    /**
    * The list of user logins with push access.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#users BranchProtectionV3#users}
    */
    readonly users?: string[];
}
export declare function branchProtectionV3RestrictionsToTerraform(struct?: BranchProtectionV3RestrictionsOutputReference | BranchProtectionV3Restrictions): any;
export declare function branchProtectionV3RestrictionsToHclTerraform(struct?: BranchProtectionV3RestrictionsOutputReference | BranchProtectionV3Restrictions): any;
export declare class BranchProtectionV3RestrictionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BranchProtectionV3Restrictions | undefined;
    set internalValue(value: BranchProtectionV3Restrictions | undefined);
    private _apps?;
    get apps(): string[];
    set apps(value: string[]);
    resetApps(): void;
    get appsInput(): string[];
    private _teams?;
    get teams(): string[];
    set teams(value: string[]);
    resetTeams(): void;
    get teamsInput(): string[];
    private _users?;
    get users(): string[];
    set users(value: string[]);
    resetUsers(): void;
    get usersInput(): string[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3 github_branch_protection_v3}
*/
export declare class BranchProtectionV3 extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_branch_protection_v3";
    /**
    * Generates CDKTF code for importing a BranchProtectionV3 resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BranchProtectionV3 to import
    * @param importFromId The id of the existing BranchProtectionV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BranchProtectionV3 to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/branch_protection_v3 github_branch_protection_v3} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BranchProtectionV3Config
    */
    constructor(scope: Construct, id: string, config: BranchProtectionV3Config);
    private _branch?;
    get branch(): string;
    set branch(value: string);
    get branchInput(): string;
    private _enforceAdmins?;
    get enforceAdmins(): boolean | cdktf.IResolvable;
    set enforceAdmins(value: boolean | cdktf.IResolvable);
    resetEnforceAdmins(): void;
    get enforceAdminsInput(): any;
    get etag(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
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
    private _requiredPullRequestReviews;
    get requiredPullRequestReviews(): BranchProtectionV3RequiredPullRequestReviewsOutputReference;
    putRequiredPullRequestReviews(value: BranchProtectionV3RequiredPullRequestReviews): void;
    resetRequiredPullRequestReviews(): void;
    get requiredPullRequestReviewsInput(): BranchProtectionV3RequiredPullRequestReviews;
    private _requiredStatusChecks;
    get requiredStatusChecks(): BranchProtectionV3RequiredStatusChecksOutputReference;
    putRequiredStatusChecks(value: BranchProtectionV3RequiredStatusChecks): void;
    resetRequiredStatusChecks(): void;
    get requiredStatusChecksInput(): BranchProtectionV3RequiredStatusChecks;
    private _restrictions;
    get restrictions(): BranchProtectionV3RestrictionsOutputReference;
    putRestrictions(value: BranchProtectionV3Restrictions): void;
    resetRestrictions(): void;
    get restrictionsInput(): BranchProtectionV3Restrictions;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
