import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TokenValidationRulesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Action to take on requests that match operations included in `selector` and fail `expression`.
    * Available values: "log", "block".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_rules#action TokenValidationRules#action}
    */
    readonly action: string;
    /**
    * A human-readable description that gives more details than `title`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_rules#description TokenValidationRules#description}
    */
    readonly description: string;
    /**
    * Toggle rule on or off.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_rules#enabled TokenValidationRules#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Rule expression. Requests that fail to match this expression will be subject to `action`.
    *
    * For details on expressions, see the [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_rules#expression TokenValidationRules#expression}
    */
    readonly expression: string;
    /**
    * Update rule order among zone rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_rules#position TokenValidationRules#position}
    */
    readonly position?: TokenValidationRulesPosition;
    /**
    * Select operations covered by this rule.
    *
    * For details on selectors, see the [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_rules#selector TokenValidationRules#selector}
    */
    readonly selector: TokenValidationRulesSelector;
    /**
    * A human-readable name for the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_rules#title TokenValidationRules#title}
    */
    readonly title: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_rules#zone_id TokenValidationRules#zone_id}
    */
    readonly zoneId?: string;
}
export interface TokenValidationRulesPosition {
    /**
    * Move rule to after rule with this ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_rules#after TokenValidationRules#after}
    */
    readonly after?: string;
    /**
    * Move rule to before rule with this ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_rules#before TokenValidationRules#before}
    */
    readonly before?: string;
    /**
    * Move rule to this position
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_rules#index TokenValidationRules#index}
    */
    readonly index?: number;
}
export declare function tokenValidationRulesPositionToTerraform(struct?: TokenValidationRulesPosition | cdktf.IResolvable): any;
export declare function tokenValidationRulesPositionToHclTerraform(struct?: TokenValidationRulesPosition | cdktf.IResolvable): any;
export declare class TokenValidationRulesPositionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TokenValidationRulesPosition | cdktf.IResolvable | undefined;
    set internalValue(value: TokenValidationRulesPosition | cdktf.IResolvable | undefined);
    private _after?;
    get after(): string;
    set after(value: string);
    resetAfter(): void;
    get afterInput(): string;
    private _before?;
    get before(): string;
    set before(value: string);
    resetBefore(): void;
    get beforeInput(): string;
    private _index?;
    get index(): number;
    set index(value: number);
    resetIndex(): void;
    get indexInput(): number;
}
export interface TokenValidationRulesSelectorExclude {
    /**
    * Excluded operation IDs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_rules#operation_ids TokenValidationRules#operation_ids}
    */
    readonly operationIds?: string[];
}
export declare function tokenValidationRulesSelectorExcludeToTerraform(struct?: TokenValidationRulesSelectorExclude | cdktf.IResolvable): any;
export declare function tokenValidationRulesSelectorExcludeToHclTerraform(struct?: TokenValidationRulesSelectorExclude | cdktf.IResolvable): any;
export declare class TokenValidationRulesSelectorExcludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TokenValidationRulesSelectorExclude | cdktf.IResolvable | undefined;
    set internalValue(value: TokenValidationRulesSelectorExclude | cdktf.IResolvable | undefined);
    private _operationIds?;
    get operationIds(): string[];
    set operationIds(value: string[]);
    resetOperationIds(): void;
    get operationIdsInput(): string[];
}
export declare class TokenValidationRulesSelectorExcludeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TokenValidationRulesSelectorExclude[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TokenValidationRulesSelectorExcludeOutputReference;
}
export interface TokenValidationRulesSelectorInclude {
    /**
    * Included hostnames.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_rules#host TokenValidationRules#host}
    */
    readonly host?: string[];
}
export declare function tokenValidationRulesSelectorIncludeToTerraform(struct?: TokenValidationRulesSelectorInclude | cdktf.IResolvable): any;
export declare function tokenValidationRulesSelectorIncludeToHclTerraform(struct?: TokenValidationRulesSelectorInclude | cdktf.IResolvable): any;
export declare class TokenValidationRulesSelectorIncludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TokenValidationRulesSelectorInclude | cdktf.IResolvable | undefined;
    set internalValue(value: TokenValidationRulesSelectorInclude | cdktf.IResolvable | undefined);
    private _host?;
    get host(): string[];
    set host(value: string[]);
    resetHost(): void;
    get hostInput(): string[];
}
export declare class TokenValidationRulesSelectorIncludeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TokenValidationRulesSelectorInclude[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TokenValidationRulesSelectorIncludeOutputReference;
}
export interface TokenValidationRulesSelector {
    /**
    * Ignore operations that were otherwise included by `include`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_rules#exclude TokenValidationRules#exclude}
    */
    readonly exclude?: TokenValidationRulesSelectorExclude[] | cdktf.IResolvable;
    /**
    * Select all matching operations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_rules#include TokenValidationRules#include}
    */
    readonly include?: TokenValidationRulesSelectorInclude[] | cdktf.IResolvable;
}
export declare function tokenValidationRulesSelectorToTerraform(struct?: TokenValidationRulesSelector | cdktf.IResolvable): any;
export declare function tokenValidationRulesSelectorToHclTerraform(struct?: TokenValidationRulesSelector | cdktf.IResolvable): any;
export declare class TokenValidationRulesSelectorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TokenValidationRulesSelector | cdktf.IResolvable | undefined;
    set internalValue(value: TokenValidationRulesSelector | cdktf.IResolvable | undefined);
    private _exclude;
    get exclude(): TokenValidationRulesSelectorExcludeList;
    putExclude(value: TokenValidationRulesSelectorExclude[] | cdktf.IResolvable): void;
    resetExclude(): void;
    get excludeInput(): any;
    private _include;
    get include(): TokenValidationRulesSelectorIncludeList;
    putInclude(value: TokenValidationRulesSelectorInclude[] | cdktf.IResolvable): void;
    resetInclude(): void;
    get includeInput(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_rules cloudflare_token_validation_rules}
*/
export declare class TokenValidationRules extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_token_validation_rules";
    /**
    * Generates CDKTF code for importing a TokenValidationRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TokenValidationRules to import
    * @param importFromId The id of the existing TokenValidationRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TokenValidationRules to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_rules cloudflare_token_validation_rules} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TokenValidationRulesConfig
    */
    constructor(scope: Construct, id: string, config: TokenValidationRulesConfig);
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string;
    get createdAt(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    get descriptionInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
    private _expression?;
    get expression(): string;
    set expression(value: string);
    get expressionInput(): string;
    get id(): any;
    get lastUpdated(): any;
    private _position;
    get position(): TokenValidationRulesPositionOutputReference;
    putPosition(value: TokenValidationRulesPosition): void;
    resetPosition(): void;
    get positionInput(): any;
    private _selector;
    get selector(): TokenValidationRulesSelectorOutputReference;
    putSelector(value: TokenValidationRulesSelector): void;
    get selectorInput(): any;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
