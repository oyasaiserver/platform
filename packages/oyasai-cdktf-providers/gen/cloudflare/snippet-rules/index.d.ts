import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SnippetRulesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Lists snippet rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet_rules#rules SnippetRules#rules}
    */
    readonly rules: SnippetRulesRules[] | cdktf.IResolvable;
    /**
    * Use this field to specify the unique ID of the zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet_rules#zone_id SnippetRules#zone_id}
    */
    readonly zoneId?: string;
}
export interface SnippetRulesRules {
    /**
    * Provide an informative description of the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet_rules#description SnippetRules#description}
    */
    readonly description?: string;
    /**
    * Indicate whether to execute the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet_rules#enabled SnippetRules#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Define the expression that determines which traffic matches the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet_rules#expression SnippetRules#expression}
    */
    readonly expression: string;
    /**
    * Identify the snippet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet_rules#snippet_name SnippetRules#snippet_name}
    */
    readonly snippetName: string;
}
export declare function snippetRulesRulesToTerraform(struct?: SnippetRulesRules | cdktf.IResolvable): any;
export declare function snippetRulesRulesToHclTerraform(struct?: SnippetRulesRules | cdktf.IResolvable): any;
export declare class SnippetRulesRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SnippetRulesRules | cdktf.IResolvable | undefined;
    set internalValue(value: SnippetRulesRules | cdktf.IResolvable | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _expression?;
    get expression(): string;
    set expression(value: string);
    get expressionInput(): string;
    get id(): any;
    get lastUpdated(): any;
    private _snippetName?;
    get snippetName(): string;
    set snippetName(value: string);
    get snippetNameInput(): string;
}
export declare class SnippetRulesRulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SnippetRulesRules[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SnippetRulesRulesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet_rules cloudflare_snippet_rules}
*/
export declare class SnippetRules extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_snippet_rules";
    /**
    * Generates CDKTF code for importing a SnippetRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SnippetRules to import
    * @param importFromId The id of the existing SnippetRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SnippetRules to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet_rules cloudflare_snippet_rules} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnippetRulesConfig
    */
    constructor(scope: Construct, id: string, config: SnippetRulesConfig);
    private _rules;
    get rules(): SnippetRulesRulesList;
    putRules(value: SnippetRulesRules[] | cdktf.IResolvable): void;
    get rulesInput(): any;
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
