import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RepositoryRulesetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Possible values for Enforcement are `disabled`, `active`, `evaluate`. Note: `evaluate` is currently only supported for owners of type `organization`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#enforcement RepositoryRuleset#enforcement}
    */
    readonly enforcement: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#id RepositoryRuleset#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The name of the ruleset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#name RepositoryRuleset#name}
    */
    readonly name: string;
    /**
    * Name of the repository to apply ruleset to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#repository RepositoryRuleset#repository}
    */
    readonly repository: string;
    /**
    * Possible values are branch, push and tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#target RepositoryRuleset#target}
    */
    readonly target: string;
    /**
    * bypass_actors block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#bypass_actors RepositoryRuleset#bypass_actors}
    */
    readonly bypassActors?: RepositoryRulesetBypassActors[] | cdktf.IResolvable;
    /**
    * conditions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#conditions RepositoryRuleset#conditions}
    */
    readonly conditions?: RepositoryRulesetConditions;
    /**
    * rules block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#rules RepositoryRuleset#rules}
    */
    readonly rules: RepositoryRulesetRules;
}
export interface RepositoryRulesetBypassActors {
    /**
    * The ID of the actor that can bypass a ruleset. When `actor_type` is `OrganizationAdmin`, this should be set to `1`. Some resources such as DeployKey do not have an ID and this should be omitted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#actor_id RepositoryRuleset#actor_id}
    */
    readonly actorId?: number;
    /**
    * The type of actor that can bypass a ruleset. See https://docs.github.com/en/rest/repos/rules for more information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#actor_type RepositoryRuleset#actor_type}
    */
    readonly actorType: string;
    /**
    * When the specified actor can bypass the ruleset. pull_request means that an actor can only bypass rules on pull requests. Can be one of: `always`, `pull_request`, `exempt`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#bypass_mode RepositoryRuleset#bypass_mode}
    */
    readonly bypassMode: string;
}
export declare function repositoryRulesetBypassActorsToTerraform(struct?: RepositoryRulesetBypassActors | cdktf.IResolvable): any;
export declare function repositoryRulesetBypassActorsToHclTerraform(struct?: RepositoryRulesetBypassActors | cdktf.IResolvable): any;
export declare class RepositoryRulesetBypassActorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RepositoryRulesetBypassActors | cdktf.IResolvable | undefined;
    set internalValue(value: RepositoryRulesetBypassActors | cdktf.IResolvable | undefined);
    private _actorId?;
    get actorId(): number;
    set actorId(value: number);
    resetActorId(): void;
    get actorIdInput(): number;
    private _actorType?;
    get actorType(): string;
    set actorType(value: string);
    get actorTypeInput(): string;
    private _bypassMode?;
    get bypassMode(): string;
    set bypassMode(value: string);
    get bypassModeInput(): string;
}
export declare class RepositoryRulesetBypassActorsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RepositoryRulesetBypassActors[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RepositoryRulesetBypassActorsOutputReference;
}
export interface RepositoryRulesetConditionsRefName {
    /**
    * Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#exclude RepositoryRuleset#exclude}
    */
    readonly exclude: string[];
    /**
    * Array of ref names or patterns to include. One of these patterns must match for the condition to pass. Also accepts `~DEFAULT_BRANCH` to include the default branch or `~ALL` to include all branches.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#include RepositoryRuleset#include}
    */
    readonly include: string[];
}
export declare function repositoryRulesetConditionsRefNameToTerraform(struct?: RepositoryRulesetConditionsRefNameOutputReference | RepositoryRulesetConditionsRefName): any;
export declare function repositoryRulesetConditionsRefNameToHclTerraform(struct?: RepositoryRulesetConditionsRefNameOutputReference | RepositoryRulesetConditionsRefName): any;
export declare class RepositoryRulesetConditionsRefNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryRulesetConditionsRefName | undefined;
    set internalValue(value: RepositoryRulesetConditionsRefName | undefined);
    private _exclude?;
    get exclude(): string[];
    set exclude(value: string[]);
    get excludeInput(): string[];
    private _include?;
    get include(): string[];
    set include(value: string[]);
    get includeInput(): string[];
}
export interface RepositoryRulesetConditions {
    /**
    * ref_name block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#ref_name RepositoryRuleset#ref_name}
    */
    readonly refName: RepositoryRulesetConditionsRefName;
}
export declare function repositoryRulesetConditionsToTerraform(struct?: RepositoryRulesetConditionsOutputReference | RepositoryRulesetConditions): any;
export declare function repositoryRulesetConditionsToHclTerraform(struct?: RepositoryRulesetConditionsOutputReference | RepositoryRulesetConditions): any;
export declare class RepositoryRulesetConditionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryRulesetConditions | undefined;
    set internalValue(value: RepositoryRulesetConditions | undefined);
    private _refName;
    get refName(): RepositoryRulesetConditionsRefNameOutputReference;
    putRefName(value: RepositoryRulesetConditionsRefName): void;
    get refNameInput(): RepositoryRulesetConditionsRefName;
}
export interface RepositoryRulesetRulesBranchNamePattern {
    /**
    * How this rule will appear to users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#name RepositoryRuleset#name}
    */
    readonly name?: string;
    /**
    * If true, the rule will fail if the pattern matches.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#negate RepositoryRuleset#negate}
    */
    readonly negate?: boolean | cdktf.IResolvable;
    /**
    * The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#operator RepositoryRuleset#operator}
    */
    readonly operator: string;
    /**
    * The pattern to match with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#pattern RepositoryRuleset#pattern}
    */
    readonly pattern: string;
}
export declare function repositoryRulesetRulesBranchNamePatternToTerraform(struct?: RepositoryRulesetRulesBranchNamePatternOutputReference | RepositoryRulesetRulesBranchNamePattern): any;
export declare function repositoryRulesetRulesBranchNamePatternToHclTerraform(struct?: RepositoryRulesetRulesBranchNamePatternOutputReference | RepositoryRulesetRulesBranchNamePattern): any;
export declare class RepositoryRulesetRulesBranchNamePatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryRulesetRulesBranchNamePattern | undefined;
    set internalValue(value: RepositoryRulesetRulesBranchNamePattern | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _negate?;
    get negate(): boolean | cdktf.IResolvable;
    set negate(value: boolean | cdktf.IResolvable);
    resetNegate(): void;
    get negateInput(): any;
    private _operator?;
    get operator(): string;
    set operator(value: string);
    get operatorInput(): string;
    private _pattern?;
    get pattern(): string;
    set pattern(value: string);
    get patternInput(): string;
}
export interface RepositoryRulesetRulesCommitAuthorEmailPattern {
    /**
    * How this rule will appear to users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#name RepositoryRuleset#name}
    */
    readonly name?: string;
    /**
    * If true, the rule will fail if the pattern matches.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#negate RepositoryRuleset#negate}
    */
    readonly negate?: boolean | cdktf.IResolvable;
    /**
    * The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#operator RepositoryRuleset#operator}
    */
    readonly operator: string;
    /**
    * The pattern to match with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#pattern RepositoryRuleset#pattern}
    */
    readonly pattern: string;
}
export declare function repositoryRulesetRulesCommitAuthorEmailPatternToTerraform(struct?: RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference | RepositoryRulesetRulesCommitAuthorEmailPattern): any;
export declare function repositoryRulesetRulesCommitAuthorEmailPatternToHclTerraform(struct?: RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference | RepositoryRulesetRulesCommitAuthorEmailPattern): any;
export declare class RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryRulesetRulesCommitAuthorEmailPattern | undefined;
    set internalValue(value: RepositoryRulesetRulesCommitAuthorEmailPattern | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _negate?;
    get negate(): boolean | cdktf.IResolvable;
    set negate(value: boolean | cdktf.IResolvable);
    resetNegate(): void;
    get negateInput(): any;
    private _operator?;
    get operator(): string;
    set operator(value: string);
    get operatorInput(): string;
    private _pattern?;
    get pattern(): string;
    set pattern(value: string);
    get patternInput(): string;
}
export interface RepositoryRulesetRulesCommitMessagePattern {
    /**
    * How this rule will appear to users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#name RepositoryRuleset#name}
    */
    readonly name?: string;
    /**
    * If true, the rule will fail if the pattern matches.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#negate RepositoryRuleset#negate}
    */
    readonly negate?: boolean | cdktf.IResolvable;
    /**
    * The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#operator RepositoryRuleset#operator}
    */
    readonly operator: string;
    /**
    * The pattern to match with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#pattern RepositoryRuleset#pattern}
    */
    readonly pattern: string;
}
export declare function repositoryRulesetRulesCommitMessagePatternToTerraform(struct?: RepositoryRulesetRulesCommitMessagePatternOutputReference | RepositoryRulesetRulesCommitMessagePattern): any;
export declare function repositoryRulesetRulesCommitMessagePatternToHclTerraform(struct?: RepositoryRulesetRulesCommitMessagePatternOutputReference | RepositoryRulesetRulesCommitMessagePattern): any;
export declare class RepositoryRulesetRulesCommitMessagePatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryRulesetRulesCommitMessagePattern | undefined;
    set internalValue(value: RepositoryRulesetRulesCommitMessagePattern | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _negate?;
    get negate(): boolean | cdktf.IResolvable;
    set negate(value: boolean | cdktf.IResolvable);
    resetNegate(): void;
    get negateInput(): any;
    private _operator?;
    get operator(): string;
    set operator(value: string);
    get operatorInput(): string;
    private _pattern?;
    get pattern(): string;
    set pattern(value: string);
    get patternInput(): string;
}
export interface RepositoryRulesetRulesCommitterEmailPattern {
    /**
    * How this rule will appear to users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#name RepositoryRuleset#name}
    */
    readonly name?: string;
    /**
    * If true, the rule will fail if the pattern matches.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#negate RepositoryRuleset#negate}
    */
    readonly negate?: boolean | cdktf.IResolvable;
    /**
    * The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#operator RepositoryRuleset#operator}
    */
    readonly operator: string;
    /**
    * The pattern to match with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#pattern RepositoryRuleset#pattern}
    */
    readonly pattern: string;
}
export declare function repositoryRulesetRulesCommitterEmailPatternToTerraform(struct?: RepositoryRulesetRulesCommitterEmailPatternOutputReference | RepositoryRulesetRulesCommitterEmailPattern): any;
export declare function repositoryRulesetRulesCommitterEmailPatternToHclTerraform(struct?: RepositoryRulesetRulesCommitterEmailPatternOutputReference | RepositoryRulesetRulesCommitterEmailPattern): any;
export declare class RepositoryRulesetRulesCommitterEmailPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryRulesetRulesCommitterEmailPattern | undefined;
    set internalValue(value: RepositoryRulesetRulesCommitterEmailPattern | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _negate?;
    get negate(): boolean | cdktf.IResolvable;
    set negate(value: boolean | cdktf.IResolvable);
    resetNegate(): void;
    get negateInput(): any;
    private _operator?;
    get operator(): string;
    set operator(value: string);
    get operatorInput(): string;
    private _pattern?;
    get pattern(): string;
    set pattern(value: string);
    get patternInput(): string;
}
export interface RepositoryRulesetRulesCopilotCodeReview {
    /**
    * Copilot automatically reviews draft pull requests before they are marked as ready for review. Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#review_draft_pull_requests RepositoryRuleset#review_draft_pull_requests}
    */
    readonly reviewDraftPullRequests?: boolean | cdktf.IResolvable;
    /**
    * Copilot automatically reviews each new push to the pull request. Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#review_on_push RepositoryRuleset#review_on_push}
    */
    readonly reviewOnPush?: boolean | cdktf.IResolvable;
}
export declare function repositoryRulesetRulesCopilotCodeReviewToTerraform(struct?: RepositoryRulesetRulesCopilotCodeReviewOutputReference | RepositoryRulesetRulesCopilotCodeReview): any;
export declare function repositoryRulesetRulesCopilotCodeReviewToHclTerraform(struct?: RepositoryRulesetRulesCopilotCodeReviewOutputReference | RepositoryRulesetRulesCopilotCodeReview): any;
export declare class RepositoryRulesetRulesCopilotCodeReviewOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryRulesetRulesCopilotCodeReview | undefined;
    set internalValue(value: RepositoryRulesetRulesCopilotCodeReview | undefined);
    private _reviewDraftPullRequests?;
    get reviewDraftPullRequests(): boolean | cdktf.IResolvable;
    set reviewDraftPullRequests(value: boolean | cdktf.IResolvable);
    resetReviewDraftPullRequests(): void;
    get reviewDraftPullRequestsInput(): any;
    private _reviewOnPush?;
    get reviewOnPush(): boolean | cdktf.IResolvable;
    set reviewOnPush(value: boolean | cdktf.IResolvable);
    resetReviewOnPush(): void;
    get reviewOnPushInput(): any;
}
export interface RepositoryRulesetRulesFileExtensionRestriction {
    /**
    * A list of file extensions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#restricted_file_extensions RepositoryRuleset#restricted_file_extensions}
    */
    readonly restrictedFileExtensions: string[];
}
export declare function repositoryRulesetRulesFileExtensionRestrictionToTerraform(struct?: RepositoryRulesetRulesFileExtensionRestrictionOutputReference | RepositoryRulesetRulesFileExtensionRestriction): any;
export declare function repositoryRulesetRulesFileExtensionRestrictionToHclTerraform(struct?: RepositoryRulesetRulesFileExtensionRestrictionOutputReference | RepositoryRulesetRulesFileExtensionRestriction): any;
export declare class RepositoryRulesetRulesFileExtensionRestrictionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryRulesetRulesFileExtensionRestriction | undefined;
    set internalValue(value: RepositoryRulesetRulesFileExtensionRestriction | undefined);
    private _restrictedFileExtensions?;
    get restrictedFileExtensions(): string[];
    set restrictedFileExtensions(value: string[]);
    get restrictedFileExtensionsInput(): string[];
}
export interface RepositoryRulesetRulesFilePathRestriction {
    /**
    * The file paths that are restricted from being pushed to the commit graph.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#restricted_file_paths RepositoryRuleset#restricted_file_paths}
    */
    readonly restrictedFilePaths: string[];
}
export declare function repositoryRulesetRulesFilePathRestrictionToTerraform(struct?: RepositoryRulesetRulesFilePathRestrictionOutputReference | RepositoryRulesetRulesFilePathRestriction): any;
export declare function repositoryRulesetRulesFilePathRestrictionToHclTerraform(struct?: RepositoryRulesetRulesFilePathRestrictionOutputReference | RepositoryRulesetRulesFilePathRestriction): any;
export declare class RepositoryRulesetRulesFilePathRestrictionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryRulesetRulesFilePathRestriction | undefined;
    set internalValue(value: RepositoryRulesetRulesFilePathRestriction | undefined);
    private _restrictedFilePaths?;
    get restrictedFilePaths(): string[];
    set restrictedFilePaths(value: string[]);
    get restrictedFilePathsInput(): string[];
}
export interface RepositoryRulesetRulesMaxFilePathLength {
    /**
    * The maximum allowed length of a file path.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#max_file_path_length RepositoryRuleset#max_file_path_length}
    */
    readonly maxFilePathLength: number;
}
export declare function repositoryRulesetRulesMaxFilePathLengthToTerraform(struct?: RepositoryRulesetRulesMaxFilePathLengthOutputReference | RepositoryRulesetRulesMaxFilePathLength): any;
export declare function repositoryRulesetRulesMaxFilePathLengthToHclTerraform(struct?: RepositoryRulesetRulesMaxFilePathLengthOutputReference | RepositoryRulesetRulesMaxFilePathLength): any;
export declare class RepositoryRulesetRulesMaxFilePathLengthOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryRulesetRulesMaxFilePathLength | undefined;
    set internalValue(value: RepositoryRulesetRulesMaxFilePathLength | undefined);
    private _maxFilePathLength?;
    get maxFilePathLength(): number;
    set maxFilePathLength(value: number);
    get maxFilePathLengthInput(): number;
}
export interface RepositoryRulesetRulesMaxFileSize {
    /**
    * The maximum allowed size of a file in megabytes (MB). Valid range is 1-100 MB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#max_file_size RepositoryRuleset#max_file_size}
    */
    readonly maxFileSize: number;
}
export declare function repositoryRulesetRulesMaxFileSizeToTerraform(struct?: RepositoryRulesetRulesMaxFileSizeOutputReference | RepositoryRulesetRulesMaxFileSize): any;
export declare function repositoryRulesetRulesMaxFileSizeToHclTerraform(struct?: RepositoryRulesetRulesMaxFileSizeOutputReference | RepositoryRulesetRulesMaxFileSize): any;
export declare class RepositoryRulesetRulesMaxFileSizeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryRulesetRulesMaxFileSize | undefined;
    set internalValue(value: RepositoryRulesetRulesMaxFileSize | undefined);
    private _maxFileSize?;
    get maxFileSize(): number;
    set maxFileSize(value: number);
    get maxFileSizeInput(): number;
}
export interface RepositoryRulesetRulesMergeQueue {
    /**
    * Maximum time for a required status check to report a conclusion. After this much time has elapsed, checks that have not reported a conclusion will be assumed to have failed. Defaults to `60`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#check_response_timeout_minutes RepositoryRuleset#check_response_timeout_minutes}
    */
    readonly checkResponseTimeoutMinutes?: number;
    /**
    * When set to ALLGREEN, the merge commit created by merge queue for each PR in the group must pass all required checks to merge. When set to HEADGREEN, only the commit at the head of the merge group, i.e. the commit containing changes from all of the PRs in the group, must pass its required checks to merge. Can be one of: ALLGREEN, HEADGREEN. Defaults to `ALLGREEN`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#grouping_strategy RepositoryRuleset#grouping_strategy}
    */
    readonly groupingStrategy?: string;
    /**
    * Limit the number of queued pull requests requesting checks and workflow runs at the same time. Defaults to `5`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#max_entries_to_build RepositoryRuleset#max_entries_to_build}
    */
    readonly maxEntriesToBuild?: number;
    /**
    * The maximum number of PRs that will be merged together in a group. Defaults to `5`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#max_entries_to_merge RepositoryRuleset#max_entries_to_merge}
    */
    readonly maxEntriesToMerge?: number;
    /**
    * Method to use when merging changes from queued pull requests. Can be one of: MERGE, SQUASH, REBASE. Defaults to `MERGE`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#merge_method RepositoryRuleset#merge_method}
    */
    readonly mergeMethod?: string;
    /**
    * The minimum number of PRs that will be merged together in a group. Defaults to `1`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#min_entries_to_merge RepositoryRuleset#min_entries_to_merge}
    */
    readonly minEntriesToMerge?: number;
    /**
    * The time merge queue should wait after the first PR is added to the queue for the minimum group size to be met. After this time has elapsed, the minimum group size will be ignored and a smaller group will be merged. Defaults to `5`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#min_entries_to_merge_wait_minutes RepositoryRuleset#min_entries_to_merge_wait_minutes}
    */
    readonly minEntriesToMergeWaitMinutes?: number;
}
export declare function repositoryRulesetRulesMergeQueueToTerraform(struct?: RepositoryRulesetRulesMergeQueueOutputReference | RepositoryRulesetRulesMergeQueue): any;
export declare function repositoryRulesetRulesMergeQueueToHclTerraform(struct?: RepositoryRulesetRulesMergeQueueOutputReference | RepositoryRulesetRulesMergeQueue): any;
export declare class RepositoryRulesetRulesMergeQueueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryRulesetRulesMergeQueue | undefined;
    set internalValue(value: RepositoryRulesetRulesMergeQueue | undefined);
    private _checkResponseTimeoutMinutes?;
    get checkResponseTimeoutMinutes(): number;
    set checkResponseTimeoutMinutes(value: number);
    resetCheckResponseTimeoutMinutes(): void;
    get checkResponseTimeoutMinutesInput(): number;
    private _groupingStrategy?;
    get groupingStrategy(): string;
    set groupingStrategy(value: string);
    resetGroupingStrategy(): void;
    get groupingStrategyInput(): string;
    private _maxEntriesToBuild?;
    get maxEntriesToBuild(): number;
    set maxEntriesToBuild(value: number);
    resetMaxEntriesToBuild(): void;
    get maxEntriesToBuildInput(): number;
    private _maxEntriesToMerge?;
    get maxEntriesToMerge(): number;
    set maxEntriesToMerge(value: number);
    resetMaxEntriesToMerge(): void;
    get maxEntriesToMergeInput(): number;
    private _mergeMethod?;
    get mergeMethod(): string;
    set mergeMethod(value: string);
    resetMergeMethod(): void;
    get mergeMethodInput(): string;
    private _minEntriesToMerge?;
    get minEntriesToMerge(): number;
    set minEntriesToMerge(value: number);
    resetMinEntriesToMerge(): void;
    get minEntriesToMergeInput(): number;
    private _minEntriesToMergeWaitMinutes?;
    get minEntriesToMergeWaitMinutes(): number;
    set minEntriesToMergeWaitMinutes(value: number);
    resetMinEntriesToMergeWaitMinutes(): void;
    get minEntriesToMergeWaitMinutesInput(): number;
}
export interface RepositoryRulesetRulesPullRequestRequiredReviewersReviewer {
    /**
    * The ID of the reviewer that must review.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#id RepositoryRuleset#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: number;
    /**
    * The type of reviewer. Currently only `Team` is supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#type RepositoryRuleset#type}
    */
    readonly type: string;
}
export declare function repositoryRulesetRulesPullRequestRequiredReviewersReviewerToTerraform(struct?: RepositoryRulesetRulesPullRequestRequiredReviewersReviewerOutputReference | RepositoryRulesetRulesPullRequestRequiredReviewersReviewer): any;
export declare function repositoryRulesetRulesPullRequestRequiredReviewersReviewerToHclTerraform(struct?: RepositoryRulesetRulesPullRequestRequiredReviewersReviewerOutputReference | RepositoryRulesetRulesPullRequestRequiredReviewersReviewer): any;
export declare class RepositoryRulesetRulesPullRequestRequiredReviewersReviewerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryRulesetRulesPullRequestRequiredReviewersReviewer | undefined;
    set internalValue(value: RepositoryRulesetRulesPullRequestRequiredReviewersReviewer | undefined);
    private _id?;
    get id(): number;
    set id(value: number);
    get idInput(): number;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export interface RepositoryRulesetRulesPullRequestRequiredReviewers {
    /**
    * File patterns (fnmatch syntax) that this reviewer must approve.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#file_patterns RepositoryRuleset#file_patterns}
    */
    readonly filePatterns: string[];
    /**
    * Minimum number of approvals required from this reviewer. Set to 0 to make approval optional.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#minimum_approvals RepositoryRuleset#minimum_approvals}
    */
    readonly minimumApprovals: number;
    /**
    * reviewer block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#reviewer RepositoryRuleset#reviewer}
    */
    readonly reviewer: RepositoryRulesetRulesPullRequestRequiredReviewersReviewer;
}
export declare function repositoryRulesetRulesPullRequestRequiredReviewersToTerraform(struct?: RepositoryRulesetRulesPullRequestRequiredReviewers | cdktf.IResolvable): any;
export declare function repositoryRulesetRulesPullRequestRequiredReviewersToHclTerraform(struct?: RepositoryRulesetRulesPullRequestRequiredReviewers | cdktf.IResolvable): any;
export declare class RepositoryRulesetRulesPullRequestRequiredReviewersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RepositoryRulesetRulesPullRequestRequiredReviewers | cdktf.IResolvable | undefined;
    set internalValue(value: RepositoryRulesetRulesPullRequestRequiredReviewers | cdktf.IResolvable | undefined);
    private _filePatterns?;
    get filePatterns(): string[];
    set filePatterns(value: string[]);
    get filePatternsInput(): string[];
    private _minimumApprovals?;
    get minimumApprovals(): number;
    set minimumApprovals(value: number);
    get minimumApprovalsInput(): number;
    private _reviewer;
    get reviewer(): RepositoryRulesetRulesPullRequestRequiredReviewersReviewerOutputReference;
    putReviewer(value: RepositoryRulesetRulesPullRequestRequiredReviewersReviewer): void;
    get reviewerInput(): RepositoryRulesetRulesPullRequestRequiredReviewersReviewer;
}
export declare class RepositoryRulesetRulesPullRequestRequiredReviewersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RepositoryRulesetRulesPullRequestRequiredReviewers[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RepositoryRulesetRulesPullRequestRequiredReviewersOutputReference;
}
export interface RepositoryRulesetRulesPullRequest {
    /**
    * Array of allowed merge methods. Allowed values include `merge`, `squash`, and `rebase`. At least one option must be enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#allowed_merge_methods RepositoryRuleset#allowed_merge_methods}
    */
    readonly allowedMergeMethods?: string[];
    /**
    * New, reviewable commits pushed will dismiss previous pull request review approvals. Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#dismiss_stale_reviews_on_push RepositoryRuleset#dismiss_stale_reviews_on_push}
    */
    readonly dismissStaleReviewsOnPush?: boolean | cdktf.IResolvable;
    /**
    * Require an approving review in pull requests that modify files that have a designated code owner. Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#require_code_owner_review RepositoryRuleset#require_code_owner_review}
    */
    readonly requireCodeOwnerReview?: boolean | cdktf.IResolvable;
    /**
    * Whether the most recent reviewable push must be approved by someone other than the person who pushed it. Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#require_last_push_approval RepositoryRuleset#require_last_push_approval}
    */
    readonly requireLastPushApproval?: boolean | cdktf.IResolvable;
    /**
    * The number of approving reviews that are required before a pull request can be merged. Defaults to `0`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#required_approving_review_count RepositoryRuleset#required_approving_review_count}
    */
    readonly requiredApprovingReviewCount?: number;
    /**
    * All conversations on code must be resolved before a pull request can be merged. Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#required_review_thread_resolution RepositoryRuleset#required_review_thread_resolution}
    */
    readonly requiredReviewThreadResolution?: boolean | cdktf.IResolvable;
    /**
    * required_reviewers block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#required_reviewers RepositoryRuleset#required_reviewers}
    */
    readonly requiredReviewers?: RepositoryRulesetRulesPullRequestRequiredReviewers[] | cdktf.IResolvable;
}
export declare function repositoryRulesetRulesPullRequestToTerraform(struct?: RepositoryRulesetRulesPullRequestOutputReference | RepositoryRulesetRulesPullRequest): any;
export declare function repositoryRulesetRulesPullRequestToHclTerraform(struct?: RepositoryRulesetRulesPullRequestOutputReference | RepositoryRulesetRulesPullRequest): any;
export declare class RepositoryRulesetRulesPullRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryRulesetRulesPullRequest | undefined;
    set internalValue(value: RepositoryRulesetRulesPullRequest | undefined);
    private _allowedMergeMethods?;
    get allowedMergeMethods(): string[];
    set allowedMergeMethods(value: string[]);
    resetAllowedMergeMethods(): void;
    get allowedMergeMethodsInput(): string[];
    private _dismissStaleReviewsOnPush?;
    get dismissStaleReviewsOnPush(): boolean | cdktf.IResolvable;
    set dismissStaleReviewsOnPush(value: boolean | cdktf.IResolvable);
    resetDismissStaleReviewsOnPush(): void;
    get dismissStaleReviewsOnPushInput(): any;
    private _requireCodeOwnerReview?;
    get requireCodeOwnerReview(): boolean | cdktf.IResolvable;
    set requireCodeOwnerReview(value: boolean | cdktf.IResolvable);
    resetRequireCodeOwnerReview(): void;
    get requireCodeOwnerReviewInput(): any;
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
    private _requiredReviewThreadResolution?;
    get requiredReviewThreadResolution(): boolean | cdktf.IResolvable;
    set requiredReviewThreadResolution(value: boolean | cdktf.IResolvable);
    resetRequiredReviewThreadResolution(): void;
    get requiredReviewThreadResolutionInput(): any;
    private _requiredReviewers;
    get requiredReviewers(): RepositoryRulesetRulesPullRequestRequiredReviewersList;
    putRequiredReviewers(value: RepositoryRulesetRulesPullRequestRequiredReviewers[] | cdktf.IResolvable): void;
    resetRequiredReviewers(): void;
    get requiredReviewersInput(): any;
}
export interface RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningTool {
    /**
    * The severity level at which code scanning results that raise alerts block a reference update. Can be one of: `none`, `errors`, `errors_and_warnings`, `all`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#alerts_threshold RepositoryRuleset#alerts_threshold}
    */
    readonly alertsThreshold: string;
    /**
    * The severity level at which code scanning results that raise security alerts block a reference update. Can be one of: `none`, `critical`, `high_or_higher`, `medium_or_higher`, `all`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#security_alerts_threshold RepositoryRuleset#security_alerts_threshold}
    */
    readonly securityAlertsThreshold: string;
    /**
    * The name of a code scanning tool
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#tool RepositoryRuleset#tool}
    */
    readonly tool: string;
}
export declare function repositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToTerraform(struct?: RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningTool | cdktf.IResolvable): any;
export declare function repositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToHclTerraform(struct?: RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningTool | cdktf.IResolvable): any;
export declare class RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningTool | cdktf.IResolvable | undefined;
    set internalValue(value: RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningTool | cdktf.IResolvable | undefined);
    private _alertsThreshold?;
    get alertsThreshold(): string;
    set alertsThreshold(value: string);
    get alertsThresholdInput(): string;
    private _securityAlertsThreshold?;
    get securityAlertsThreshold(): string;
    set securityAlertsThreshold(value: string);
    get securityAlertsThresholdInput(): string;
    private _tool?;
    get tool(): string;
    set tool(value: string);
    get toolInput(): string;
}
export declare class RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningTool[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference;
}
export interface RepositoryRulesetRulesRequiredCodeScanning {
    /**
    * required_code_scanning_tool block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#required_code_scanning_tool RepositoryRuleset#required_code_scanning_tool}
    */
    readonly requiredCodeScanningTool: RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningTool[] | cdktf.IResolvable;
}
export declare function repositoryRulesetRulesRequiredCodeScanningToTerraform(struct?: RepositoryRulesetRulesRequiredCodeScanningOutputReference | RepositoryRulesetRulesRequiredCodeScanning): any;
export declare function repositoryRulesetRulesRequiredCodeScanningToHclTerraform(struct?: RepositoryRulesetRulesRequiredCodeScanningOutputReference | RepositoryRulesetRulesRequiredCodeScanning): any;
export declare class RepositoryRulesetRulesRequiredCodeScanningOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryRulesetRulesRequiredCodeScanning | undefined;
    set internalValue(value: RepositoryRulesetRulesRequiredCodeScanning | undefined);
    private _requiredCodeScanningTool;
    get requiredCodeScanningTool(): RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList;
    putRequiredCodeScanningTool(value: RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningTool[] | cdktf.IResolvable): void;
    get requiredCodeScanningToolInput(): any;
}
export interface RepositoryRulesetRulesRequiredDeployments {
    /**
    * The environments that must be successfully deployed to before branches can be merged.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#required_deployment_environments RepositoryRuleset#required_deployment_environments}
    */
    readonly requiredDeploymentEnvironments: string[];
}
export declare function repositoryRulesetRulesRequiredDeploymentsToTerraform(struct?: RepositoryRulesetRulesRequiredDeploymentsOutputReference | RepositoryRulesetRulesRequiredDeployments): any;
export declare function repositoryRulesetRulesRequiredDeploymentsToHclTerraform(struct?: RepositoryRulesetRulesRequiredDeploymentsOutputReference | RepositoryRulesetRulesRequiredDeployments): any;
export declare class RepositoryRulesetRulesRequiredDeploymentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryRulesetRulesRequiredDeployments | undefined;
    set internalValue(value: RepositoryRulesetRulesRequiredDeployments | undefined);
    private _requiredDeploymentEnvironments?;
    get requiredDeploymentEnvironments(): string[];
    set requiredDeploymentEnvironments(value: string[]);
    get requiredDeploymentEnvironmentsInput(): string[];
}
export interface RepositoryRulesetRulesRequiredStatusChecksRequiredCheck {
    /**
    * The status check context name that must be present on the commit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#context RepositoryRuleset#context}
    */
    readonly context: string;
    /**
    * The optional integration ID that this status check must originate from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#integration_id RepositoryRuleset#integration_id}
    */
    readonly integrationId?: number;
}
export declare function repositoryRulesetRulesRequiredStatusChecksRequiredCheckToTerraform(struct?: RepositoryRulesetRulesRequiredStatusChecksRequiredCheck | cdktf.IResolvable): any;
export declare function repositoryRulesetRulesRequiredStatusChecksRequiredCheckToHclTerraform(struct?: RepositoryRulesetRulesRequiredStatusChecksRequiredCheck | cdktf.IResolvable): any;
export declare class RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RepositoryRulesetRulesRequiredStatusChecksRequiredCheck | cdktf.IResolvable | undefined;
    set internalValue(value: RepositoryRulesetRulesRequiredStatusChecksRequiredCheck | cdktf.IResolvable | undefined);
    private _context?;
    get context(): string;
    set context(value: string);
    get contextInput(): string;
    private _integrationId?;
    get integrationId(): number;
    set integrationId(value: number);
    resetIntegrationId(): void;
    get integrationIdInput(): number;
}
export declare class RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RepositoryRulesetRulesRequiredStatusChecksRequiredCheck[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference;
}
export interface RepositoryRulesetRulesRequiredStatusChecks {
    /**
    * Allow repositories and branches to be created if a check would otherwise prohibit it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#do_not_enforce_on_create RepositoryRuleset#do_not_enforce_on_create}
    */
    readonly doNotEnforceOnCreate?: boolean | cdktf.IResolvable;
    /**
    * Whether pull requests targeting a matching branch must be tested with the latest code. This setting will not take effect unless at least one status check is enabled. Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#strict_required_status_checks_policy RepositoryRuleset#strict_required_status_checks_policy}
    */
    readonly strictRequiredStatusChecksPolicy?: boolean | cdktf.IResolvable;
    /**
    * required_check block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#required_check RepositoryRuleset#required_check}
    */
    readonly requiredCheck: RepositoryRulesetRulesRequiredStatusChecksRequiredCheck[] | cdktf.IResolvable;
}
export declare function repositoryRulesetRulesRequiredStatusChecksToTerraform(struct?: RepositoryRulesetRulesRequiredStatusChecksOutputReference | RepositoryRulesetRulesRequiredStatusChecks): any;
export declare function repositoryRulesetRulesRequiredStatusChecksToHclTerraform(struct?: RepositoryRulesetRulesRequiredStatusChecksOutputReference | RepositoryRulesetRulesRequiredStatusChecks): any;
export declare class RepositoryRulesetRulesRequiredStatusChecksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryRulesetRulesRequiredStatusChecks | undefined;
    set internalValue(value: RepositoryRulesetRulesRequiredStatusChecks | undefined);
    private _doNotEnforceOnCreate?;
    get doNotEnforceOnCreate(): boolean | cdktf.IResolvable;
    set doNotEnforceOnCreate(value: boolean | cdktf.IResolvable);
    resetDoNotEnforceOnCreate(): void;
    get doNotEnforceOnCreateInput(): any;
    private _strictRequiredStatusChecksPolicy?;
    get strictRequiredStatusChecksPolicy(): boolean | cdktf.IResolvable;
    set strictRequiredStatusChecksPolicy(value: boolean | cdktf.IResolvable);
    resetStrictRequiredStatusChecksPolicy(): void;
    get strictRequiredStatusChecksPolicyInput(): any;
    private _requiredCheck;
    get requiredCheck(): RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList;
    putRequiredCheck(value: RepositoryRulesetRulesRequiredStatusChecksRequiredCheck[] | cdktf.IResolvable): void;
    get requiredCheckInput(): any;
}
export interface RepositoryRulesetRulesTagNamePattern {
    /**
    * How this rule will appear to users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#name RepositoryRuleset#name}
    */
    readonly name?: string;
    /**
    * If true, the rule will fail if the pattern matches.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#negate RepositoryRuleset#negate}
    */
    readonly negate?: boolean | cdktf.IResolvable;
    /**
    * The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#operator RepositoryRuleset#operator}
    */
    readonly operator: string;
    /**
    * The pattern to match with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#pattern RepositoryRuleset#pattern}
    */
    readonly pattern: string;
}
export declare function repositoryRulesetRulesTagNamePatternToTerraform(struct?: RepositoryRulesetRulesTagNamePatternOutputReference | RepositoryRulesetRulesTagNamePattern): any;
export declare function repositoryRulesetRulesTagNamePatternToHclTerraform(struct?: RepositoryRulesetRulesTagNamePatternOutputReference | RepositoryRulesetRulesTagNamePattern): any;
export declare class RepositoryRulesetRulesTagNamePatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryRulesetRulesTagNamePattern | undefined;
    set internalValue(value: RepositoryRulesetRulesTagNamePattern | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _negate?;
    get negate(): boolean | cdktf.IResolvable;
    set negate(value: boolean | cdktf.IResolvable);
    resetNegate(): void;
    get negateInput(): any;
    private _operator?;
    get operator(): string;
    set operator(value: string);
    get operatorInput(): string;
    private _pattern?;
    get pattern(): string;
    set pattern(value: string);
    get patternInput(): string;
}
export interface RepositoryRulesetRules {
    /**
    * Only allow users with bypass permission to create matching refs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#creation RepositoryRuleset#creation}
    */
    readonly creation?: boolean | cdktf.IResolvable;
    /**
    * Only allow users with bypass permissions to delete matching refs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#deletion RepositoryRuleset#deletion}
    */
    readonly deletion?: boolean | cdktf.IResolvable;
    /**
    * Prevent users with push access from force pushing to branches.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#non_fast_forward RepositoryRuleset#non_fast_forward}
    */
    readonly nonFastForward?: boolean | cdktf.IResolvable;
    /**
    * Prevent merge commits from being pushed to matching branches.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#required_linear_history RepositoryRuleset#required_linear_history}
    */
    readonly requiredLinearHistory?: boolean | cdktf.IResolvable;
    /**
    * Commits pushed to matching branches must have verified signatures.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#required_signatures RepositoryRuleset#required_signatures}
    */
    readonly requiredSignatures?: boolean | cdktf.IResolvable;
    /**
    * Only allow users with bypass permission to update matching refs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#update RepositoryRuleset#update}
    */
    readonly update?: boolean | cdktf.IResolvable;
    /**
    * Branch can pull changes from its upstream repository. This is only applicable to forked repositories. Requires `update` to be set to `true`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#update_allows_fetch_and_merge RepositoryRuleset#update_allows_fetch_and_merge}
    */
    readonly updateAllowsFetchAndMerge?: boolean | cdktf.IResolvable;
    /**
    * branch_name_pattern block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#branch_name_pattern RepositoryRuleset#branch_name_pattern}
    */
    readonly branchNamePattern?: RepositoryRulesetRulesBranchNamePattern;
    /**
    * commit_author_email_pattern block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#commit_author_email_pattern RepositoryRuleset#commit_author_email_pattern}
    */
    readonly commitAuthorEmailPattern?: RepositoryRulesetRulesCommitAuthorEmailPattern;
    /**
    * commit_message_pattern block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#commit_message_pattern RepositoryRuleset#commit_message_pattern}
    */
    readonly commitMessagePattern?: RepositoryRulesetRulesCommitMessagePattern;
    /**
    * committer_email_pattern block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#committer_email_pattern RepositoryRuleset#committer_email_pattern}
    */
    readonly committerEmailPattern?: RepositoryRulesetRulesCommitterEmailPattern;
    /**
    * copilot_code_review block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#copilot_code_review RepositoryRuleset#copilot_code_review}
    */
    readonly copilotCodeReview?: RepositoryRulesetRulesCopilotCodeReview;
    /**
    * file_extension_restriction block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#file_extension_restriction RepositoryRuleset#file_extension_restriction}
    */
    readonly fileExtensionRestriction?: RepositoryRulesetRulesFileExtensionRestriction;
    /**
    * file_path_restriction block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#file_path_restriction RepositoryRuleset#file_path_restriction}
    */
    readonly filePathRestriction?: RepositoryRulesetRulesFilePathRestriction;
    /**
    * max_file_path_length block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#max_file_path_length RepositoryRuleset#max_file_path_length}
    */
    readonly maxFilePathLength?: RepositoryRulesetRulesMaxFilePathLength;
    /**
    * max_file_size block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#max_file_size RepositoryRuleset#max_file_size}
    */
    readonly maxFileSize?: RepositoryRulesetRulesMaxFileSize;
    /**
    * merge_queue block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#merge_queue RepositoryRuleset#merge_queue}
    */
    readonly mergeQueue?: RepositoryRulesetRulesMergeQueue;
    /**
    * pull_request block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#pull_request RepositoryRuleset#pull_request}
    */
    readonly pullRequest?: RepositoryRulesetRulesPullRequest;
    /**
    * required_code_scanning block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#required_code_scanning RepositoryRuleset#required_code_scanning}
    */
    readonly requiredCodeScanning?: RepositoryRulesetRulesRequiredCodeScanning;
    /**
    * required_deployments block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#required_deployments RepositoryRuleset#required_deployments}
    */
    readonly requiredDeployments?: RepositoryRulesetRulesRequiredDeployments;
    /**
    * required_status_checks block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#required_status_checks RepositoryRuleset#required_status_checks}
    */
    readonly requiredStatusChecks?: RepositoryRulesetRulesRequiredStatusChecks;
    /**
    * tag_name_pattern block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#tag_name_pattern RepositoryRuleset#tag_name_pattern}
    */
    readonly tagNamePattern?: RepositoryRulesetRulesTagNamePattern;
}
export declare function repositoryRulesetRulesToTerraform(struct?: RepositoryRulesetRulesOutputReference | RepositoryRulesetRules): any;
export declare function repositoryRulesetRulesToHclTerraform(struct?: RepositoryRulesetRulesOutputReference | RepositoryRulesetRules): any;
export declare class RepositoryRulesetRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryRulesetRules | undefined;
    set internalValue(value: RepositoryRulesetRules | undefined);
    private _creation?;
    get creation(): boolean | cdktf.IResolvable;
    set creation(value: boolean | cdktf.IResolvable);
    resetCreation(): void;
    get creationInput(): any;
    private _deletion?;
    get deletion(): boolean | cdktf.IResolvable;
    set deletion(value: boolean | cdktf.IResolvable);
    resetDeletion(): void;
    get deletionInput(): any;
    private _nonFastForward?;
    get nonFastForward(): boolean | cdktf.IResolvable;
    set nonFastForward(value: boolean | cdktf.IResolvable);
    resetNonFastForward(): void;
    get nonFastForwardInput(): any;
    private _requiredLinearHistory?;
    get requiredLinearHistory(): boolean | cdktf.IResolvable;
    set requiredLinearHistory(value: boolean | cdktf.IResolvable);
    resetRequiredLinearHistory(): void;
    get requiredLinearHistoryInput(): any;
    private _requiredSignatures?;
    get requiredSignatures(): boolean | cdktf.IResolvable;
    set requiredSignatures(value: boolean | cdktf.IResolvable);
    resetRequiredSignatures(): void;
    get requiredSignaturesInput(): any;
    private _update?;
    get update(): boolean | cdktf.IResolvable;
    set update(value: boolean | cdktf.IResolvable);
    resetUpdate(): void;
    get updateInput(): any;
    private _updateAllowsFetchAndMerge?;
    get updateAllowsFetchAndMerge(): boolean | cdktf.IResolvable;
    set updateAllowsFetchAndMerge(value: boolean | cdktf.IResolvable);
    resetUpdateAllowsFetchAndMerge(): void;
    get updateAllowsFetchAndMergeInput(): any;
    private _branchNamePattern;
    get branchNamePattern(): RepositoryRulesetRulesBranchNamePatternOutputReference;
    putBranchNamePattern(value: RepositoryRulesetRulesBranchNamePattern): void;
    resetBranchNamePattern(): void;
    get branchNamePatternInput(): RepositoryRulesetRulesBranchNamePattern;
    private _commitAuthorEmailPattern;
    get commitAuthorEmailPattern(): RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference;
    putCommitAuthorEmailPattern(value: RepositoryRulesetRulesCommitAuthorEmailPattern): void;
    resetCommitAuthorEmailPattern(): void;
    get commitAuthorEmailPatternInput(): RepositoryRulesetRulesCommitAuthorEmailPattern;
    private _commitMessagePattern;
    get commitMessagePattern(): RepositoryRulesetRulesCommitMessagePatternOutputReference;
    putCommitMessagePattern(value: RepositoryRulesetRulesCommitMessagePattern): void;
    resetCommitMessagePattern(): void;
    get commitMessagePatternInput(): RepositoryRulesetRulesCommitMessagePattern;
    private _committerEmailPattern;
    get committerEmailPattern(): RepositoryRulesetRulesCommitterEmailPatternOutputReference;
    putCommitterEmailPattern(value: RepositoryRulesetRulesCommitterEmailPattern): void;
    resetCommitterEmailPattern(): void;
    get committerEmailPatternInput(): RepositoryRulesetRulesCommitterEmailPattern;
    private _copilotCodeReview;
    get copilotCodeReview(): RepositoryRulesetRulesCopilotCodeReviewOutputReference;
    putCopilotCodeReview(value: RepositoryRulesetRulesCopilotCodeReview): void;
    resetCopilotCodeReview(): void;
    get copilotCodeReviewInput(): RepositoryRulesetRulesCopilotCodeReview;
    private _fileExtensionRestriction;
    get fileExtensionRestriction(): RepositoryRulesetRulesFileExtensionRestrictionOutputReference;
    putFileExtensionRestriction(value: RepositoryRulesetRulesFileExtensionRestriction): void;
    resetFileExtensionRestriction(): void;
    get fileExtensionRestrictionInput(): RepositoryRulesetRulesFileExtensionRestriction;
    private _filePathRestriction;
    get filePathRestriction(): RepositoryRulesetRulesFilePathRestrictionOutputReference;
    putFilePathRestriction(value: RepositoryRulesetRulesFilePathRestriction): void;
    resetFilePathRestriction(): void;
    get filePathRestrictionInput(): RepositoryRulesetRulesFilePathRestriction;
    private _maxFilePathLength;
    get maxFilePathLength(): RepositoryRulesetRulesMaxFilePathLengthOutputReference;
    putMaxFilePathLength(value: RepositoryRulesetRulesMaxFilePathLength): void;
    resetMaxFilePathLength(): void;
    get maxFilePathLengthInput(): RepositoryRulesetRulesMaxFilePathLength;
    private _maxFileSize;
    get maxFileSize(): RepositoryRulesetRulesMaxFileSizeOutputReference;
    putMaxFileSize(value: RepositoryRulesetRulesMaxFileSize): void;
    resetMaxFileSize(): void;
    get maxFileSizeInput(): RepositoryRulesetRulesMaxFileSize;
    private _mergeQueue;
    get mergeQueue(): RepositoryRulesetRulesMergeQueueOutputReference;
    putMergeQueue(value: RepositoryRulesetRulesMergeQueue): void;
    resetMergeQueue(): void;
    get mergeQueueInput(): RepositoryRulesetRulesMergeQueue;
    private _pullRequest;
    get pullRequest(): RepositoryRulesetRulesPullRequestOutputReference;
    putPullRequest(value: RepositoryRulesetRulesPullRequest): void;
    resetPullRequest(): void;
    get pullRequestInput(): RepositoryRulesetRulesPullRequest;
    private _requiredCodeScanning;
    get requiredCodeScanning(): RepositoryRulesetRulesRequiredCodeScanningOutputReference;
    putRequiredCodeScanning(value: RepositoryRulesetRulesRequiredCodeScanning): void;
    resetRequiredCodeScanning(): void;
    get requiredCodeScanningInput(): RepositoryRulesetRulesRequiredCodeScanning;
    private _requiredDeployments;
    get requiredDeployments(): RepositoryRulesetRulesRequiredDeploymentsOutputReference;
    putRequiredDeployments(value: RepositoryRulesetRulesRequiredDeployments): void;
    resetRequiredDeployments(): void;
    get requiredDeploymentsInput(): RepositoryRulesetRulesRequiredDeployments;
    private _requiredStatusChecks;
    get requiredStatusChecks(): RepositoryRulesetRulesRequiredStatusChecksOutputReference;
    putRequiredStatusChecks(value: RepositoryRulesetRulesRequiredStatusChecks): void;
    resetRequiredStatusChecks(): void;
    get requiredStatusChecksInput(): RepositoryRulesetRulesRequiredStatusChecks;
    private _tagNamePattern;
    get tagNamePattern(): RepositoryRulesetRulesTagNamePatternOutputReference;
    putTagNamePattern(value: RepositoryRulesetRulesTagNamePattern): void;
    resetTagNamePattern(): void;
    get tagNamePatternInput(): RepositoryRulesetRulesTagNamePattern;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset github_repository_ruleset}
*/
export declare class RepositoryRuleset extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_repository_ruleset";
    /**
    * Generates CDKTF code for importing a RepositoryRuleset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryRuleset to import
    * @param importFromId The id of the existing RepositoryRuleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryRuleset to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset github_repository_ruleset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryRulesetConfig
    */
    constructor(scope: Construct, id: string, config: RepositoryRulesetConfig);
    private _enforcement?;
    get enforcement(): string;
    set enforcement(value: string);
    get enforcementInput(): string;
    get etag(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get nodeId(): any;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    get rulesetId(): any;
    private _target?;
    get target(): string;
    set target(value: string);
    get targetInput(): string;
    private _bypassActors;
    get bypassActors(): RepositoryRulesetBypassActorsList;
    putBypassActors(value: RepositoryRulesetBypassActors[] | cdktf.IResolvable): void;
    resetBypassActors(): void;
    get bypassActorsInput(): any;
    private _conditions;
    get conditions(): RepositoryRulesetConditionsOutputReference;
    putConditions(value: RepositoryRulesetConditions): void;
    resetConditions(): void;
    get conditionsInput(): RepositoryRulesetConditions;
    private _rules;
    get rules(): RepositoryRulesetRulesOutputReference;
    putRules(value: RepositoryRulesetRules): void;
    get rulesInput(): RepositoryRulesetRules;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
