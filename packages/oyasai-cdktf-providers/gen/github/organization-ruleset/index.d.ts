import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OrganizationRulesetConfig extends cdktf.TerraformMetaArguments {
    /**
    * The enforcement level of the ruleset. `evaluate` allows admins to test rules before enforcing them. Possible values are `disabled`, `active`, and `evaluate`. Note: `evaluate` is only available for Enterprise plans.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#enforcement OrganizationRuleset#enforcement}
    */
    readonly enforcement: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#id OrganizationRuleset#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The name of the ruleset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}
    */
    readonly name: string;
    /**
    * The target of the ruleset. Possible values are branch, tag and push.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#target OrganizationRuleset#target}
    */
    readonly target: string;
    /**
    * bypass_actors block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#bypass_actors OrganizationRuleset#bypass_actors}
    */
    readonly bypassActors?: OrganizationRulesetBypassActors[] | cdktf.IResolvable;
    /**
    * conditions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#conditions OrganizationRuleset#conditions}
    */
    readonly conditions?: OrganizationRulesetConditions;
    /**
    * rules block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#rules OrganizationRuleset#rules}
    */
    readonly rules: OrganizationRulesetRules;
}
export interface OrganizationRulesetBypassActors {
    /**
    * The ID of the actor that can bypass a ruleset. When `actor_type` is `OrganizationAdmin`, this should be set to `1`. Some resources such as DeployKey do not have an ID and this should be omitted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#actor_id OrganizationRuleset#actor_id}
    */
    readonly actorId?: number;
    /**
    * The type of actor that can bypass a ruleset. Can be one of: `Integration`, `OrganizationAdmin`, `RepositoryRole`, `Team`, or `DeployKey`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#actor_type OrganizationRuleset#actor_type}
    */
    readonly actorType: string;
    /**
    * When the specified actor can bypass the ruleset. pull_request means that an actor can only bypass rules on pull requests. Can be one of: `always`, `pull_request`, `exempt`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#bypass_mode OrganizationRuleset#bypass_mode}
    */
    readonly bypassMode: string;
}
export declare function organizationRulesetBypassActorsToTerraform(struct?: OrganizationRulesetBypassActors | cdktf.IResolvable): any;
export declare function organizationRulesetBypassActorsToHclTerraform(struct?: OrganizationRulesetBypassActors | cdktf.IResolvable): any;
export declare class OrganizationRulesetBypassActorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OrganizationRulesetBypassActors | cdktf.IResolvable | undefined;
    set internalValue(value: OrganizationRulesetBypassActors | cdktf.IResolvable | undefined);
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
export declare class OrganizationRulesetBypassActorsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OrganizationRulesetBypassActors[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OrganizationRulesetBypassActorsOutputReference;
}
export interface OrganizationRulesetConditionsRefName {
    /**
    * Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#exclude OrganizationRuleset#exclude}
    */
    readonly exclude: string[];
    /**
    * Array of ref names or patterns to include. One of these patterns must match for the condition to pass. Also accepts `~DEFAULT_BRANCH` to include the default branch or `~ALL` to include all branches.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#include OrganizationRuleset#include}
    */
    readonly include: string[];
}
export declare function organizationRulesetConditionsRefNameToTerraform(struct?: OrganizationRulesetConditionsRefNameOutputReference | OrganizationRulesetConditionsRefName): any;
export declare function organizationRulesetConditionsRefNameToHclTerraform(struct?: OrganizationRulesetConditionsRefNameOutputReference | OrganizationRulesetConditionsRefName): any;
export declare class OrganizationRulesetConditionsRefNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationRulesetConditionsRefName | undefined;
    set internalValue(value: OrganizationRulesetConditionsRefName | undefined);
    private _exclude?;
    get exclude(): string[];
    set exclude(value: string[]);
    get excludeInput(): string[];
    private _include?;
    get include(): string[];
    set include(value: string[]);
    get includeInput(): string[];
}
export interface OrganizationRulesetConditionsRepositoryName {
    /**
    * Array of repository names or patterns to exclude. The condition will not pass if any of these patterns match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#exclude OrganizationRuleset#exclude}
    */
    readonly exclude: string[];
    /**
    * Array of repository names or patterns to include. One of these patterns must match for the condition to pass. Also accepts `~ALL` to include all repositories.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#include OrganizationRuleset#include}
    */
    readonly include: string[];
    /**
    * Whether renaming of target repositories is prevented.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#protected OrganizationRuleset#protected}
    */
    readonly protected?: boolean | cdktf.IResolvable;
}
export declare function organizationRulesetConditionsRepositoryNameToTerraform(struct?: OrganizationRulesetConditionsRepositoryNameOutputReference | OrganizationRulesetConditionsRepositoryName): any;
export declare function organizationRulesetConditionsRepositoryNameToHclTerraform(struct?: OrganizationRulesetConditionsRepositoryNameOutputReference | OrganizationRulesetConditionsRepositoryName): any;
export declare class OrganizationRulesetConditionsRepositoryNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationRulesetConditionsRepositoryName | undefined;
    set internalValue(value: OrganizationRulesetConditionsRepositoryName | undefined);
    private _exclude?;
    get exclude(): string[];
    set exclude(value: string[]);
    get excludeInput(): string[];
    private _include?;
    get include(): string[];
    set include(value: string[]);
    get includeInput(): string[];
    private _protected?;
    get protected(): boolean | cdktf.IResolvable;
    set protected(value: boolean | cdktf.IResolvable);
    resetProtected(): void;
    get protectedInput(): any;
}
export interface OrganizationRulesetConditionsRepositoryPropertyExclude {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#property_values OrganizationRuleset#property_values}
    */
    readonly propertyValues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#source OrganizationRuleset#source}
    */
    readonly source?: string;
}
export declare function organizationRulesetConditionsRepositoryPropertyExcludeToTerraform(struct?: OrganizationRulesetConditionsRepositoryPropertyExclude | cdktf.IResolvable): any;
export declare function organizationRulesetConditionsRepositoryPropertyExcludeToHclTerraform(struct?: OrganizationRulesetConditionsRepositoryPropertyExclude | cdktf.IResolvable): any;
export declare class OrganizationRulesetConditionsRepositoryPropertyExcludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OrganizationRulesetConditionsRepositoryPropertyExclude | cdktf.IResolvable | undefined;
    set internalValue(value: OrganizationRulesetConditionsRepositoryPropertyExclude | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _propertyValues?;
    get propertyValues(): string[];
    set propertyValues(value: string[]);
    resetPropertyValues(): void;
    get propertyValuesInput(): string[];
    private _source?;
    get source(): string;
    set source(value: string);
    resetSource(): void;
    get sourceInput(): string;
}
export declare class OrganizationRulesetConditionsRepositoryPropertyExcludeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OrganizationRulesetConditionsRepositoryPropertyExclude[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OrganizationRulesetConditionsRepositoryPropertyExcludeOutputReference;
}
export interface OrganizationRulesetConditionsRepositoryPropertyInclude {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#property_values OrganizationRuleset#property_values}
    */
    readonly propertyValues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#source OrganizationRuleset#source}
    */
    readonly source?: string;
}
export declare function organizationRulesetConditionsRepositoryPropertyIncludeToTerraform(struct?: OrganizationRulesetConditionsRepositoryPropertyInclude | cdktf.IResolvable): any;
export declare function organizationRulesetConditionsRepositoryPropertyIncludeToHclTerraform(struct?: OrganizationRulesetConditionsRepositoryPropertyInclude | cdktf.IResolvable): any;
export declare class OrganizationRulesetConditionsRepositoryPropertyIncludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OrganizationRulesetConditionsRepositoryPropertyInclude | cdktf.IResolvable | undefined;
    set internalValue(value: OrganizationRulesetConditionsRepositoryPropertyInclude | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _propertyValues?;
    get propertyValues(): string[];
    set propertyValues(value: string[]);
    resetPropertyValues(): void;
    get propertyValuesInput(): string[];
    private _source?;
    get source(): string;
    set source(value: string);
    resetSource(): void;
    get sourceInput(): string;
}
export declare class OrganizationRulesetConditionsRepositoryPropertyIncludeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OrganizationRulesetConditionsRepositoryPropertyInclude[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OrganizationRulesetConditionsRepositoryPropertyIncludeOutputReference;
}
export interface OrganizationRulesetConditionsRepositoryProperty {
    /**
    * The repository properties and values to exclude. The ruleset will not apply if any of these properties match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#exclude OrganizationRuleset#exclude}
    */
    readonly exclude?: OrganizationRulesetConditionsRepositoryPropertyExclude[] | cdktf.IResolvable;
    /**
    * The repository properties and values to include. All of these properties must match for the condition to pass.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#include OrganizationRuleset#include}
    */
    readonly include?: OrganizationRulesetConditionsRepositoryPropertyInclude[] | cdktf.IResolvable;
}
export declare function organizationRulesetConditionsRepositoryPropertyToTerraform(struct?: OrganizationRulesetConditionsRepositoryPropertyOutputReference | OrganizationRulesetConditionsRepositoryProperty): any;
export declare function organizationRulesetConditionsRepositoryPropertyToHclTerraform(struct?: OrganizationRulesetConditionsRepositoryPropertyOutputReference | OrganizationRulesetConditionsRepositoryProperty): any;
export declare class OrganizationRulesetConditionsRepositoryPropertyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationRulesetConditionsRepositoryProperty | undefined;
    set internalValue(value: OrganizationRulesetConditionsRepositoryProperty | undefined);
    private _exclude;
    get exclude(): OrganizationRulesetConditionsRepositoryPropertyExcludeList;
    putExclude(value: OrganizationRulesetConditionsRepositoryPropertyExclude[] | cdktf.IResolvable): void;
    resetExclude(): void;
    get excludeInput(): any;
    private _include;
    get include(): OrganizationRulesetConditionsRepositoryPropertyIncludeList;
    putInclude(value: OrganizationRulesetConditionsRepositoryPropertyInclude[] | cdktf.IResolvable): void;
    resetInclude(): void;
    get includeInput(): any;
}
export interface OrganizationRulesetConditions {
    /**
    * The repository IDs that the ruleset applies to. One of these IDs must match for the ruleset to apply.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#repository_id OrganizationRuleset#repository_id}
    */
    readonly repositoryId?: number[];
    /**
    * ref_name block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#ref_name OrganizationRuleset#ref_name}
    */
    readonly refName?: OrganizationRulesetConditionsRefName;
    /**
    * repository_name block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#repository_name OrganizationRuleset#repository_name}
    */
    readonly repositoryName?: OrganizationRulesetConditionsRepositoryName;
    /**
    * repository_property block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#repository_property OrganizationRuleset#repository_property}
    */
    readonly repositoryProperty?: OrganizationRulesetConditionsRepositoryProperty;
}
export declare function organizationRulesetConditionsToTerraform(struct?: OrganizationRulesetConditionsOutputReference | OrganizationRulesetConditions): any;
export declare function organizationRulesetConditionsToHclTerraform(struct?: OrganizationRulesetConditionsOutputReference | OrganizationRulesetConditions): any;
export declare class OrganizationRulesetConditionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationRulesetConditions | undefined;
    set internalValue(value: OrganizationRulesetConditions | undefined);
    private _repositoryId?;
    get repositoryId(): number[];
    set repositoryId(value: number[]);
    resetRepositoryId(): void;
    get repositoryIdInput(): number[];
    private _refName;
    get refName(): OrganizationRulesetConditionsRefNameOutputReference;
    putRefName(value: OrganizationRulesetConditionsRefName): void;
    resetRefName(): void;
    get refNameInput(): OrganizationRulesetConditionsRefName;
    private _repositoryName;
    get repositoryName(): OrganizationRulesetConditionsRepositoryNameOutputReference;
    putRepositoryName(value: OrganizationRulesetConditionsRepositoryName): void;
    resetRepositoryName(): void;
    get repositoryNameInput(): OrganizationRulesetConditionsRepositoryName;
    private _repositoryProperty;
    get repositoryProperty(): OrganizationRulesetConditionsRepositoryPropertyOutputReference;
    putRepositoryProperty(value: OrganizationRulesetConditionsRepositoryProperty): void;
    resetRepositoryProperty(): void;
    get repositoryPropertyInput(): OrganizationRulesetConditionsRepositoryProperty;
}
export interface OrganizationRulesetRulesBranchNamePattern {
    /**
    * How this rule will appear to users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}
    */
    readonly name?: string;
    /**
    * If true, the rule will fail if the pattern matches.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}
    */
    readonly negate?: boolean | cdktf.IResolvable;
    /**
    * The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}
    */
    readonly operator: string;
    /**
    * The pattern to match with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}
    */
    readonly pattern: string;
}
export declare function organizationRulesetRulesBranchNamePatternToTerraform(struct?: OrganizationRulesetRulesBranchNamePatternOutputReference | OrganizationRulesetRulesBranchNamePattern): any;
export declare function organizationRulesetRulesBranchNamePatternToHclTerraform(struct?: OrganizationRulesetRulesBranchNamePatternOutputReference | OrganizationRulesetRulesBranchNamePattern): any;
export declare class OrganizationRulesetRulesBranchNamePatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationRulesetRulesBranchNamePattern | undefined;
    set internalValue(value: OrganizationRulesetRulesBranchNamePattern | undefined);
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
export interface OrganizationRulesetRulesCommitAuthorEmailPattern {
    /**
    * How this rule will appear to users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}
    */
    readonly name?: string;
    /**
    * If true, the rule will fail if the pattern matches.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}
    */
    readonly negate?: boolean | cdktf.IResolvable;
    /**
    * The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}
    */
    readonly operator: string;
    /**
    * The pattern to match with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}
    */
    readonly pattern: string;
}
export declare function organizationRulesetRulesCommitAuthorEmailPatternToTerraform(struct?: OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference | OrganizationRulesetRulesCommitAuthorEmailPattern): any;
export declare function organizationRulesetRulesCommitAuthorEmailPatternToHclTerraform(struct?: OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference | OrganizationRulesetRulesCommitAuthorEmailPattern): any;
export declare class OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationRulesetRulesCommitAuthorEmailPattern | undefined;
    set internalValue(value: OrganizationRulesetRulesCommitAuthorEmailPattern | undefined);
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
export interface OrganizationRulesetRulesCommitMessagePattern {
    /**
    * How this rule will appear to users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}
    */
    readonly name?: string;
    /**
    * If true, the rule will fail if the pattern matches.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}
    */
    readonly negate?: boolean | cdktf.IResolvable;
    /**
    * The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}
    */
    readonly operator: string;
    /**
    * The pattern to match with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}
    */
    readonly pattern: string;
}
export declare function organizationRulesetRulesCommitMessagePatternToTerraform(struct?: OrganizationRulesetRulesCommitMessagePatternOutputReference | OrganizationRulesetRulesCommitMessagePattern): any;
export declare function organizationRulesetRulesCommitMessagePatternToHclTerraform(struct?: OrganizationRulesetRulesCommitMessagePatternOutputReference | OrganizationRulesetRulesCommitMessagePattern): any;
export declare class OrganizationRulesetRulesCommitMessagePatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationRulesetRulesCommitMessagePattern | undefined;
    set internalValue(value: OrganizationRulesetRulesCommitMessagePattern | undefined);
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
export interface OrganizationRulesetRulesCommitterEmailPattern {
    /**
    * How this rule will appear to users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}
    */
    readonly name?: string;
    /**
    * If true, the rule will fail if the pattern matches.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}
    */
    readonly negate?: boolean | cdktf.IResolvable;
    /**
    * The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}
    */
    readonly operator: string;
    /**
    * The pattern to match with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}
    */
    readonly pattern: string;
}
export declare function organizationRulesetRulesCommitterEmailPatternToTerraform(struct?: OrganizationRulesetRulesCommitterEmailPatternOutputReference | OrganizationRulesetRulesCommitterEmailPattern): any;
export declare function organizationRulesetRulesCommitterEmailPatternToHclTerraform(struct?: OrganizationRulesetRulesCommitterEmailPatternOutputReference | OrganizationRulesetRulesCommitterEmailPattern): any;
export declare class OrganizationRulesetRulesCommitterEmailPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationRulesetRulesCommitterEmailPattern | undefined;
    set internalValue(value: OrganizationRulesetRulesCommitterEmailPattern | undefined);
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
export interface OrganizationRulesetRulesCopilotCodeReview {
    /**
    * Copilot automatically reviews draft pull requests before they are marked as ready for review. Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#review_draft_pull_requests OrganizationRuleset#review_draft_pull_requests}
    */
    readonly reviewDraftPullRequests?: boolean | cdktf.IResolvable;
    /**
    * Copilot automatically reviews each new push to the pull request. Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#review_on_push OrganizationRuleset#review_on_push}
    */
    readonly reviewOnPush?: boolean | cdktf.IResolvable;
}
export declare function organizationRulesetRulesCopilotCodeReviewToTerraform(struct?: OrganizationRulesetRulesCopilotCodeReviewOutputReference | OrganizationRulesetRulesCopilotCodeReview): any;
export declare function organizationRulesetRulesCopilotCodeReviewToHclTerraform(struct?: OrganizationRulesetRulesCopilotCodeReviewOutputReference | OrganizationRulesetRulesCopilotCodeReview): any;
export declare class OrganizationRulesetRulesCopilotCodeReviewOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationRulesetRulesCopilotCodeReview | undefined;
    set internalValue(value: OrganizationRulesetRulesCopilotCodeReview | undefined);
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
export interface OrganizationRulesetRulesFileExtensionRestriction {
    /**
    * The file extensions that are restricted from being pushed to the commit graph.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#restricted_file_extensions OrganizationRuleset#restricted_file_extensions}
    */
    readonly restrictedFileExtensions: string[];
}
export declare function organizationRulesetRulesFileExtensionRestrictionToTerraform(struct?: OrganizationRulesetRulesFileExtensionRestrictionOutputReference | OrganizationRulesetRulesFileExtensionRestriction): any;
export declare function organizationRulesetRulesFileExtensionRestrictionToHclTerraform(struct?: OrganizationRulesetRulesFileExtensionRestrictionOutputReference | OrganizationRulesetRulesFileExtensionRestriction): any;
export declare class OrganizationRulesetRulesFileExtensionRestrictionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationRulesetRulesFileExtensionRestriction | undefined;
    set internalValue(value: OrganizationRulesetRulesFileExtensionRestriction | undefined);
    private _restrictedFileExtensions?;
    get restrictedFileExtensions(): string[];
    set restrictedFileExtensions(value: string[]);
    get restrictedFileExtensionsInput(): string[];
}
export interface OrganizationRulesetRulesFilePathRestriction {
    /**
    * The file paths that are restricted from being pushed to the commit graph.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#restricted_file_paths OrganizationRuleset#restricted_file_paths}
    */
    readonly restrictedFilePaths: string[];
}
export declare function organizationRulesetRulesFilePathRestrictionToTerraform(struct?: OrganizationRulesetRulesFilePathRestrictionOutputReference | OrganizationRulesetRulesFilePathRestriction): any;
export declare function organizationRulesetRulesFilePathRestrictionToHclTerraform(struct?: OrganizationRulesetRulesFilePathRestrictionOutputReference | OrganizationRulesetRulesFilePathRestriction): any;
export declare class OrganizationRulesetRulesFilePathRestrictionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationRulesetRulesFilePathRestriction | undefined;
    set internalValue(value: OrganizationRulesetRulesFilePathRestriction | undefined);
    private _restrictedFilePaths?;
    get restrictedFilePaths(): string[];
    set restrictedFilePaths(value: string[]);
    get restrictedFilePathsInput(): string[];
}
export interface OrganizationRulesetRulesMaxFilePathLength {
    /**
    * The maximum allowed length of a file path.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#max_file_path_length OrganizationRuleset#max_file_path_length}
    */
    readonly maxFilePathLength: number;
}
export declare function organizationRulesetRulesMaxFilePathLengthToTerraform(struct?: OrganizationRulesetRulesMaxFilePathLengthOutputReference | OrganizationRulesetRulesMaxFilePathLength): any;
export declare function organizationRulesetRulesMaxFilePathLengthToHclTerraform(struct?: OrganizationRulesetRulesMaxFilePathLengthOutputReference | OrganizationRulesetRulesMaxFilePathLength): any;
export declare class OrganizationRulesetRulesMaxFilePathLengthOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationRulesetRulesMaxFilePathLength | undefined;
    set internalValue(value: OrganizationRulesetRulesMaxFilePathLength | undefined);
    private _maxFilePathLength?;
    get maxFilePathLength(): number;
    set maxFilePathLength(value: number);
    get maxFilePathLengthInput(): number;
}
export interface OrganizationRulesetRulesMaxFileSize {
    /**
    * The maximum allowed size of a file in megabytes (MB). Valid range is 1-100 MB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#max_file_size OrganizationRuleset#max_file_size}
    */
    readonly maxFileSize: number;
}
export declare function organizationRulesetRulesMaxFileSizeToTerraform(struct?: OrganizationRulesetRulesMaxFileSizeOutputReference | OrganizationRulesetRulesMaxFileSize): any;
export declare function organizationRulesetRulesMaxFileSizeToHclTerraform(struct?: OrganizationRulesetRulesMaxFileSizeOutputReference | OrganizationRulesetRulesMaxFileSize): any;
export declare class OrganizationRulesetRulesMaxFileSizeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationRulesetRulesMaxFileSize | undefined;
    set internalValue(value: OrganizationRulesetRulesMaxFileSize | undefined);
    private _maxFileSize?;
    get maxFileSize(): number;
    set maxFileSize(value: number);
    get maxFileSizeInput(): number;
}
export interface OrganizationRulesetRulesPullRequestRequiredReviewersReviewer {
    /**
    * The ID of the reviewer that must review.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#id OrganizationRuleset#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: number;
    /**
    * The type of reviewer. Currently only `Team` is supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#type OrganizationRuleset#type}
    */
    readonly type: string;
}
export declare function organizationRulesetRulesPullRequestRequiredReviewersReviewerToTerraform(struct?: OrganizationRulesetRulesPullRequestRequiredReviewersReviewerOutputReference | OrganizationRulesetRulesPullRequestRequiredReviewersReviewer): any;
export declare function organizationRulesetRulesPullRequestRequiredReviewersReviewerToHclTerraform(struct?: OrganizationRulesetRulesPullRequestRequiredReviewersReviewerOutputReference | OrganizationRulesetRulesPullRequestRequiredReviewersReviewer): any;
export declare class OrganizationRulesetRulesPullRequestRequiredReviewersReviewerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationRulesetRulesPullRequestRequiredReviewersReviewer | undefined;
    set internalValue(value: OrganizationRulesetRulesPullRequestRequiredReviewersReviewer | undefined);
    private _id?;
    get id(): number;
    set id(value: number);
    get idInput(): number;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export interface OrganizationRulesetRulesPullRequestRequiredReviewers {
    /**
    * File patterns (fnmatch syntax) that this reviewer must approve.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#file_patterns OrganizationRuleset#file_patterns}
    */
    readonly filePatterns: string[];
    /**
    * Minimum number of approvals required from this reviewer. Set to 0 to make approval optional.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#minimum_approvals OrganizationRuleset#minimum_approvals}
    */
    readonly minimumApprovals: number;
    /**
    * reviewer block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#reviewer OrganizationRuleset#reviewer}
    */
    readonly reviewer: OrganizationRulesetRulesPullRequestRequiredReviewersReviewer;
}
export declare function organizationRulesetRulesPullRequestRequiredReviewersToTerraform(struct?: OrganizationRulesetRulesPullRequestRequiredReviewers | cdktf.IResolvable): any;
export declare function organizationRulesetRulesPullRequestRequiredReviewersToHclTerraform(struct?: OrganizationRulesetRulesPullRequestRequiredReviewers | cdktf.IResolvable): any;
export declare class OrganizationRulesetRulesPullRequestRequiredReviewersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OrganizationRulesetRulesPullRequestRequiredReviewers | cdktf.IResolvable | undefined;
    set internalValue(value: OrganizationRulesetRulesPullRequestRequiredReviewers | cdktf.IResolvable | undefined);
    private _filePatterns?;
    get filePatterns(): string[];
    set filePatterns(value: string[]);
    get filePatternsInput(): string[];
    private _minimumApprovals?;
    get minimumApprovals(): number;
    set minimumApprovals(value: number);
    get minimumApprovalsInput(): number;
    private _reviewer;
    get reviewer(): OrganizationRulesetRulesPullRequestRequiredReviewersReviewerOutputReference;
    putReviewer(value: OrganizationRulesetRulesPullRequestRequiredReviewersReviewer): void;
    get reviewerInput(): OrganizationRulesetRulesPullRequestRequiredReviewersReviewer;
}
export declare class OrganizationRulesetRulesPullRequestRequiredReviewersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OrganizationRulesetRulesPullRequestRequiredReviewers[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OrganizationRulesetRulesPullRequestRequiredReviewersOutputReference;
}
export interface OrganizationRulesetRulesPullRequest {
    /**
    * Array of allowed merge methods. Allowed values include `merge`, `squash`, and `rebase`. At least one option must be enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#allowed_merge_methods OrganizationRuleset#allowed_merge_methods}
    */
    readonly allowedMergeMethods?: string[];
    /**
    * New, reviewable commits pushed will dismiss previous pull request review approvals. Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#dismiss_stale_reviews_on_push OrganizationRuleset#dismiss_stale_reviews_on_push}
    */
    readonly dismissStaleReviewsOnPush?: boolean | cdktf.IResolvable;
    /**
    * Require an approving review in pull requests that modify files that have a designated code owner. Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#require_code_owner_review OrganizationRuleset#require_code_owner_review}
    */
    readonly requireCodeOwnerReview?: boolean | cdktf.IResolvable;
    /**
    * Whether the most recent reviewable push must be approved by someone other than the person who pushed it. Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#require_last_push_approval OrganizationRuleset#require_last_push_approval}
    */
    readonly requireLastPushApproval?: boolean | cdktf.IResolvable;
    /**
    * The number of approving reviews that are required before a pull request can be merged. Defaults to `0`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#required_approving_review_count OrganizationRuleset#required_approving_review_count}
    */
    readonly requiredApprovingReviewCount?: number;
    /**
    * All conversations on code must be resolved before a pull request can be merged. Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#required_review_thread_resolution OrganizationRuleset#required_review_thread_resolution}
    */
    readonly requiredReviewThreadResolution?: boolean | cdktf.IResolvable;
    /**
    * required_reviewers block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#required_reviewers OrganizationRuleset#required_reviewers}
    */
    readonly requiredReviewers?: OrganizationRulesetRulesPullRequestRequiredReviewers[] | cdktf.IResolvable;
}
export declare function organizationRulesetRulesPullRequestToTerraform(struct?: OrganizationRulesetRulesPullRequestOutputReference | OrganizationRulesetRulesPullRequest): any;
export declare function organizationRulesetRulesPullRequestToHclTerraform(struct?: OrganizationRulesetRulesPullRequestOutputReference | OrganizationRulesetRulesPullRequest): any;
export declare class OrganizationRulesetRulesPullRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationRulesetRulesPullRequest | undefined;
    set internalValue(value: OrganizationRulesetRulesPullRequest | undefined);
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
    get requiredReviewers(): OrganizationRulesetRulesPullRequestRequiredReviewersList;
    putRequiredReviewers(value: OrganizationRulesetRulesPullRequestRequiredReviewers[] | cdktf.IResolvable): void;
    resetRequiredReviewers(): void;
    get requiredReviewersInput(): any;
}
export interface OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool {
    /**
    * The severity level at which code scanning results that raise alerts block a reference update. Can be one of: `none`, `errors`, `errors_and_warnings`, `all`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#alerts_threshold OrganizationRuleset#alerts_threshold}
    */
    readonly alertsThreshold: string;
    /**
    * The severity level at which code scanning results that raise security alerts block a reference update. Can be one of: `none`, `critical`, `high_or_higher`, `medium_or_higher`, `all`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#security_alerts_threshold OrganizationRuleset#security_alerts_threshold}
    */
    readonly securityAlertsThreshold: string;
    /**
    * The name of a code scanning tool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#tool OrganizationRuleset#tool}
    */
    readonly tool: string;
}
export declare function organizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToTerraform(struct?: OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool | cdktf.IResolvable): any;
export declare function organizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToHclTerraform(struct?: OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool | cdktf.IResolvable): any;
export declare class OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool | cdktf.IResolvable | undefined;
    set internalValue(value: OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool | cdktf.IResolvable | undefined);
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
export declare class OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference;
}
export interface OrganizationRulesetRulesRequiredCodeScanning {
    /**
    * required_code_scanning_tool block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#required_code_scanning_tool OrganizationRuleset#required_code_scanning_tool}
    */
    readonly requiredCodeScanningTool: OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool[] | cdktf.IResolvable;
}
export declare function organizationRulesetRulesRequiredCodeScanningToTerraform(struct?: OrganizationRulesetRulesRequiredCodeScanningOutputReference | OrganizationRulesetRulesRequiredCodeScanning): any;
export declare function organizationRulesetRulesRequiredCodeScanningToHclTerraform(struct?: OrganizationRulesetRulesRequiredCodeScanningOutputReference | OrganizationRulesetRulesRequiredCodeScanning): any;
export declare class OrganizationRulesetRulesRequiredCodeScanningOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationRulesetRulesRequiredCodeScanning | undefined;
    set internalValue(value: OrganizationRulesetRulesRequiredCodeScanning | undefined);
    private _requiredCodeScanningTool;
    get requiredCodeScanningTool(): OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList;
    putRequiredCodeScanningTool(value: OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool[] | cdktf.IResolvable): void;
    get requiredCodeScanningToolInput(): any;
}
export interface OrganizationRulesetRulesRequiredStatusChecksRequiredCheck {
    /**
    * The status check context name that must be present on the commit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#context OrganizationRuleset#context}
    */
    readonly context: string;
    /**
    * The optional integration ID that this status check must originate from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#integration_id OrganizationRuleset#integration_id}
    */
    readonly integrationId?: number;
}
export declare function organizationRulesetRulesRequiredStatusChecksRequiredCheckToTerraform(struct?: OrganizationRulesetRulesRequiredStatusChecksRequiredCheck | cdktf.IResolvable): any;
export declare function organizationRulesetRulesRequiredStatusChecksRequiredCheckToHclTerraform(struct?: OrganizationRulesetRulesRequiredStatusChecksRequiredCheck | cdktf.IResolvable): any;
export declare class OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OrganizationRulesetRulesRequiredStatusChecksRequiredCheck | cdktf.IResolvable | undefined;
    set internalValue(value: OrganizationRulesetRulesRequiredStatusChecksRequiredCheck | cdktf.IResolvable | undefined);
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
export declare class OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OrganizationRulesetRulesRequiredStatusChecksRequiredCheck[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference;
}
export interface OrganizationRulesetRulesRequiredStatusChecks {
    /**
    * Allow repositories and branches to be created if a check would otherwise prohibit it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#do_not_enforce_on_create OrganizationRuleset#do_not_enforce_on_create}
    */
    readonly doNotEnforceOnCreate?: boolean | cdktf.IResolvable;
    /**
    * Whether pull requests targeting a matching branch must be tested with the latest code. This setting will not take effect unless at least one status check is enabled. Defaults to `false`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#strict_required_status_checks_policy OrganizationRuleset#strict_required_status_checks_policy}
    */
    readonly strictRequiredStatusChecksPolicy?: boolean | cdktf.IResolvable;
    /**
    * required_check block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#required_check OrganizationRuleset#required_check}
    */
    readonly requiredCheck: OrganizationRulesetRulesRequiredStatusChecksRequiredCheck[] | cdktf.IResolvable;
}
export declare function organizationRulesetRulesRequiredStatusChecksToTerraform(struct?: OrganizationRulesetRulesRequiredStatusChecksOutputReference | OrganizationRulesetRulesRequiredStatusChecks): any;
export declare function organizationRulesetRulesRequiredStatusChecksToHclTerraform(struct?: OrganizationRulesetRulesRequiredStatusChecksOutputReference | OrganizationRulesetRulesRequiredStatusChecks): any;
export declare class OrganizationRulesetRulesRequiredStatusChecksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationRulesetRulesRequiredStatusChecks | undefined;
    set internalValue(value: OrganizationRulesetRulesRequiredStatusChecks | undefined);
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
    get requiredCheck(): OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList;
    putRequiredCheck(value: OrganizationRulesetRulesRequiredStatusChecksRequiredCheck[] | cdktf.IResolvable): void;
    get requiredCheckInput(): any;
}
export interface OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow {
    /**
    * The path to the workflow YAML definition file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#path OrganizationRuleset#path}
    */
    readonly path: string;
    /**
    * The ref (branch or tag) of the workflow file to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#ref OrganizationRuleset#ref}
    */
    readonly ref?: string;
    /**
    * The repository in which the workflow is defined.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#repository_id OrganizationRuleset#repository_id}
    */
    readonly repositoryId: number;
}
export declare function organizationRulesetRulesRequiredWorkflowsRequiredWorkflowToTerraform(struct?: OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow | cdktf.IResolvable): any;
export declare function organizationRulesetRulesRequiredWorkflowsRequiredWorkflowToHclTerraform(struct?: OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow | cdktf.IResolvable): any;
export declare class OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow | cdktf.IResolvable | undefined;
    set internalValue(value: OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow | cdktf.IResolvable | undefined);
    private _path?;
    get path(): string;
    set path(value: string);
    get pathInput(): string;
    private _ref?;
    get ref(): string;
    set ref(value: string);
    resetRef(): void;
    get refInput(): string;
    private _repositoryId?;
    get repositoryId(): number;
    set repositoryId(value: number);
    get repositoryIdInput(): number;
}
export declare class OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference;
}
export interface OrganizationRulesetRulesRequiredWorkflows {
    /**
    * Allow repositories and branches to be created if a check would otherwise prohibit it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#do_not_enforce_on_create OrganizationRuleset#do_not_enforce_on_create}
    */
    readonly doNotEnforceOnCreate?: boolean | cdktf.IResolvable;
    /**
    * required_workflow block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#required_workflow OrganizationRuleset#required_workflow}
    */
    readonly requiredWorkflow: OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow[] | cdktf.IResolvable;
}
export declare function organizationRulesetRulesRequiredWorkflowsToTerraform(struct?: OrganizationRulesetRulesRequiredWorkflowsOutputReference | OrganizationRulesetRulesRequiredWorkflows): any;
export declare function organizationRulesetRulesRequiredWorkflowsToHclTerraform(struct?: OrganizationRulesetRulesRequiredWorkflowsOutputReference | OrganizationRulesetRulesRequiredWorkflows): any;
export declare class OrganizationRulesetRulesRequiredWorkflowsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationRulesetRulesRequiredWorkflows | undefined;
    set internalValue(value: OrganizationRulesetRulesRequiredWorkflows | undefined);
    private _doNotEnforceOnCreate?;
    get doNotEnforceOnCreate(): boolean | cdktf.IResolvable;
    set doNotEnforceOnCreate(value: boolean | cdktf.IResolvable);
    resetDoNotEnforceOnCreate(): void;
    get doNotEnforceOnCreateInput(): any;
    private _requiredWorkflow;
    get requiredWorkflow(): OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList;
    putRequiredWorkflow(value: OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow[] | cdktf.IResolvable): void;
    get requiredWorkflowInput(): any;
}
export interface OrganizationRulesetRulesTagNamePattern {
    /**
    * How this rule will appear to users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}
    */
    readonly name?: string;
    /**
    * If true, the rule will fail if the pattern matches.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}
    */
    readonly negate?: boolean | cdktf.IResolvable;
    /**
    * The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}
    */
    readonly operator: string;
    /**
    * The pattern to match with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}
    */
    readonly pattern: string;
}
export declare function organizationRulesetRulesTagNamePatternToTerraform(struct?: OrganizationRulesetRulesTagNamePatternOutputReference | OrganizationRulesetRulesTagNamePattern): any;
export declare function organizationRulesetRulesTagNamePatternToHclTerraform(struct?: OrganizationRulesetRulesTagNamePatternOutputReference | OrganizationRulesetRulesTagNamePattern): any;
export declare class OrganizationRulesetRulesTagNamePatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationRulesetRulesTagNamePattern | undefined;
    set internalValue(value: OrganizationRulesetRulesTagNamePattern | undefined);
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
export interface OrganizationRulesetRules {
    /**
    * Only allow users with bypass permission to create matching refs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#creation OrganizationRuleset#creation}
    */
    readonly creation?: boolean | cdktf.IResolvable;
    /**
    * Only allow users with bypass permissions to delete matching refs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#deletion OrganizationRuleset#deletion}
    */
    readonly deletion?: boolean | cdktf.IResolvable;
    /**
    * Prevent users with push access from force pushing to refs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#non_fast_forward OrganizationRuleset#non_fast_forward}
    */
    readonly nonFastForward?: boolean | cdktf.IResolvable;
    /**
    * Prevent merge commits from being pushed to matching branches.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#required_linear_history OrganizationRuleset#required_linear_history}
    */
    readonly requiredLinearHistory?: boolean | cdktf.IResolvable;
    /**
    * Commits pushed to matching branches must have verified signatures.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#required_signatures OrganizationRuleset#required_signatures}
    */
    readonly requiredSignatures?: boolean | cdktf.IResolvable;
    /**
    * Only allow users with bypass permission to update matching refs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#update OrganizationRuleset#update}
    */
    readonly update?: boolean | cdktf.IResolvable;
    /**
    * branch_name_pattern block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#branch_name_pattern OrganizationRuleset#branch_name_pattern}
    */
    readonly branchNamePattern?: OrganizationRulesetRulesBranchNamePattern;
    /**
    * commit_author_email_pattern block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#commit_author_email_pattern OrganizationRuleset#commit_author_email_pattern}
    */
    readonly commitAuthorEmailPattern?: OrganizationRulesetRulesCommitAuthorEmailPattern;
    /**
    * commit_message_pattern block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#commit_message_pattern OrganizationRuleset#commit_message_pattern}
    */
    readonly commitMessagePattern?: OrganizationRulesetRulesCommitMessagePattern;
    /**
    * committer_email_pattern block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#committer_email_pattern OrganizationRuleset#committer_email_pattern}
    */
    readonly committerEmailPattern?: OrganizationRulesetRulesCommitterEmailPattern;
    /**
    * copilot_code_review block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#copilot_code_review OrganizationRuleset#copilot_code_review}
    */
    readonly copilotCodeReview?: OrganizationRulesetRulesCopilotCodeReview;
    /**
    * file_extension_restriction block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#file_extension_restriction OrganizationRuleset#file_extension_restriction}
    */
    readonly fileExtensionRestriction?: OrganizationRulesetRulesFileExtensionRestriction;
    /**
    * file_path_restriction block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#file_path_restriction OrganizationRuleset#file_path_restriction}
    */
    readonly filePathRestriction?: OrganizationRulesetRulesFilePathRestriction;
    /**
    * max_file_path_length block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#max_file_path_length OrganizationRuleset#max_file_path_length}
    */
    readonly maxFilePathLength?: OrganizationRulesetRulesMaxFilePathLength;
    /**
    * max_file_size block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#max_file_size OrganizationRuleset#max_file_size}
    */
    readonly maxFileSize?: OrganizationRulesetRulesMaxFileSize;
    /**
    * pull_request block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#pull_request OrganizationRuleset#pull_request}
    */
    readonly pullRequest?: OrganizationRulesetRulesPullRequest;
    /**
    * required_code_scanning block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#required_code_scanning OrganizationRuleset#required_code_scanning}
    */
    readonly requiredCodeScanning?: OrganizationRulesetRulesRequiredCodeScanning;
    /**
    * required_status_checks block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#required_status_checks OrganizationRuleset#required_status_checks}
    */
    readonly requiredStatusChecks?: OrganizationRulesetRulesRequiredStatusChecks;
    /**
    * required_workflows block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#required_workflows OrganizationRuleset#required_workflows}
    */
    readonly requiredWorkflows?: OrganizationRulesetRulesRequiredWorkflows;
    /**
    * tag_name_pattern block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#tag_name_pattern OrganizationRuleset#tag_name_pattern}
    */
    readonly tagNamePattern?: OrganizationRulesetRulesTagNamePattern;
}
export declare function organizationRulesetRulesToTerraform(struct?: OrganizationRulesetRulesOutputReference | OrganizationRulesetRules): any;
export declare function organizationRulesetRulesToHclTerraform(struct?: OrganizationRulesetRulesOutputReference | OrganizationRulesetRules): any;
export declare class OrganizationRulesetRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationRulesetRules | undefined;
    set internalValue(value: OrganizationRulesetRules | undefined);
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
    private _branchNamePattern;
    get branchNamePattern(): OrganizationRulesetRulesBranchNamePatternOutputReference;
    putBranchNamePattern(value: OrganizationRulesetRulesBranchNamePattern): void;
    resetBranchNamePattern(): void;
    get branchNamePatternInput(): OrganizationRulesetRulesBranchNamePattern;
    private _commitAuthorEmailPattern;
    get commitAuthorEmailPattern(): OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference;
    putCommitAuthorEmailPattern(value: OrganizationRulesetRulesCommitAuthorEmailPattern): void;
    resetCommitAuthorEmailPattern(): void;
    get commitAuthorEmailPatternInput(): OrganizationRulesetRulesCommitAuthorEmailPattern;
    private _commitMessagePattern;
    get commitMessagePattern(): OrganizationRulesetRulesCommitMessagePatternOutputReference;
    putCommitMessagePattern(value: OrganizationRulesetRulesCommitMessagePattern): void;
    resetCommitMessagePattern(): void;
    get commitMessagePatternInput(): OrganizationRulesetRulesCommitMessagePattern;
    private _committerEmailPattern;
    get committerEmailPattern(): OrganizationRulesetRulesCommitterEmailPatternOutputReference;
    putCommitterEmailPattern(value: OrganizationRulesetRulesCommitterEmailPattern): void;
    resetCommitterEmailPattern(): void;
    get committerEmailPatternInput(): OrganizationRulesetRulesCommitterEmailPattern;
    private _copilotCodeReview;
    get copilotCodeReview(): OrganizationRulesetRulesCopilotCodeReviewOutputReference;
    putCopilotCodeReview(value: OrganizationRulesetRulesCopilotCodeReview): void;
    resetCopilotCodeReview(): void;
    get copilotCodeReviewInput(): OrganizationRulesetRulesCopilotCodeReview;
    private _fileExtensionRestriction;
    get fileExtensionRestriction(): OrganizationRulesetRulesFileExtensionRestrictionOutputReference;
    putFileExtensionRestriction(value: OrganizationRulesetRulesFileExtensionRestriction): void;
    resetFileExtensionRestriction(): void;
    get fileExtensionRestrictionInput(): OrganizationRulesetRulesFileExtensionRestriction;
    private _filePathRestriction;
    get filePathRestriction(): OrganizationRulesetRulesFilePathRestrictionOutputReference;
    putFilePathRestriction(value: OrganizationRulesetRulesFilePathRestriction): void;
    resetFilePathRestriction(): void;
    get filePathRestrictionInput(): OrganizationRulesetRulesFilePathRestriction;
    private _maxFilePathLength;
    get maxFilePathLength(): OrganizationRulesetRulesMaxFilePathLengthOutputReference;
    putMaxFilePathLength(value: OrganizationRulesetRulesMaxFilePathLength): void;
    resetMaxFilePathLength(): void;
    get maxFilePathLengthInput(): OrganizationRulesetRulesMaxFilePathLength;
    private _maxFileSize;
    get maxFileSize(): OrganizationRulesetRulesMaxFileSizeOutputReference;
    putMaxFileSize(value: OrganizationRulesetRulesMaxFileSize): void;
    resetMaxFileSize(): void;
    get maxFileSizeInput(): OrganizationRulesetRulesMaxFileSize;
    private _pullRequest;
    get pullRequest(): OrganizationRulesetRulesPullRequestOutputReference;
    putPullRequest(value: OrganizationRulesetRulesPullRequest): void;
    resetPullRequest(): void;
    get pullRequestInput(): OrganizationRulesetRulesPullRequest;
    private _requiredCodeScanning;
    get requiredCodeScanning(): OrganizationRulesetRulesRequiredCodeScanningOutputReference;
    putRequiredCodeScanning(value: OrganizationRulesetRulesRequiredCodeScanning): void;
    resetRequiredCodeScanning(): void;
    get requiredCodeScanningInput(): OrganizationRulesetRulesRequiredCodeScanning;
    private _requiredStatusChecks;
    get requiredStatusChecks(): OrganizationRulesetRulesRequiredStatusChecksOutputReference;
    putRequiredStatusChecks(value: OrganizationRulesetRulesRequiredStatusChecks): void;
    resetRequiredStatusChecks(): void;
    get requiredStatusChecksInput(): OrganizationRulesetRulesRequiredStatusChecks;
    private _requiredWorkflows;
    get requiredWorkflows(): OrganizationRulesetRulesRequiredWorkflowsOutputReference;
    putRequiredWorkflows(value: OrganizationRulesetRulesRequiredWorkflows): void;
    resetRequiredWorkflows(): void;
    get requiredWorkflowsInput(): OrganizationRulesetRulesRequiredWorkflows;
    private _tagNamePattern;
    get tagNamePattern(): OrganizationRulesetRulesTagNamePatternOutputReference;
    putTagNamePattern(value: OrganizationRulesetRulesTagNamePattern): void;
    resetTagNamePattern(): void;
    get tagNamePatternInput(): OrganizationRulesetRulesTagNamePattern;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset github_organization_ruleset}
*/
export declare class OrganizationRuleset extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_organization_ruleset";
    /**
    * Generates CDKTF code for importing a OrganizationRuleset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationRuleset to import
    * @param importFromId The id of the existing OrganizationRuleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationRuleset to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset github_organization_ruleset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationRulesetConfig
    */
    constructor(scope: Construct, id: string, config: OrganizationRulesetConfig);
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
    get rulesetId(): any;
    private _target?;
    get target(): string;
    set target(value: string);
    get targetInput(): string;
    private _bypassActors;
    get bypassActors(): OrganizationRulesetBypassActorsList;
    putBypassActors(value: OrganizationRulesetBypassActors[] | cdktf.IResolvable): void;
    resetBypassActors(): void;
    get bypassActorsInput(): any;
    private _conditions;
    get conditions(): OrganizationRulesetConditionsOutputReference;
    putConditions(value: OrganizationRulesetConditions): void;
    resetConditions(): void;
    get conditionsInput(): OrganizationRulesetConditions;
    private _rules;
    get rules(): OrganizationRulesetRulesOutputReference;
    putRules(value: OrganizationRulesetRules): void;
    get rulesInput(): OrganizationRulesetRules;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
