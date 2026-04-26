import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EmailRoutingRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * List actions patterns.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_rule#actions EmailRoutingRule#actions}
    */
    readonly actions: EmailRoutingRuleActions[] | cdktf.IResolvable;
    /**
    * Routing rule status.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_rule#enabled EmailRoutingRule#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Matching patterns to forward to your actions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_rule#matchers EmailRoutingRule#matchers}
    */
    readonly matchers: EmailRoutingRuleMatchers[] | cdktf.IResolvable;
    /**
    * Routing rule name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_rule#name EmailRoutingRule#name}
    */
    readonly name?: string;
    /**
    * Priority of the routing rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_rule#priority EmailRoutingRule#priority}
    */
    readonly priority?: number;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_rule#zone_id EmailRoutingRule#zone_id}
    */
    readonly zoneId?: string;
}
export interface EmailRoutingRuleActions {
    /**
    * Type of supported action.
    * Available values: "drop", "forward", "worker".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_rule#type EmailRoutingRule#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_rule#value EmailRoutingRule#value}
    */
    readonly value?: string[];
}
export declare function emailRoutingRuleActionsToTerraform(struct?: EmailRoutingRuleActions | cdktf.IResolvable): any;
export declare function emailRoutingRuleActionsToHclTerraform(struct?: EmailRoutingRuleActions | cdktf.IResolvable): any;
export declare class EmailRoutingRuleActionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmailRoutingRuleActions | cdktf.IResolvable | undefined;
    set internalValue(value: EmailRoutingRuleActions | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _value?;
    get value(): string[];
    set value(value: string[]);
    resetValue(): void;
    get valueInput(): string[];
}
export declare class EmailRoutingRuleActionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmailRoutingRuleActions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmailRoutingRuleActionsOutputReference;
}
export interface EmailRoutingRuleMatchers {
    /**
    * Field for type matcher.
    * Available values: "to".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_rule#field EmailRoutingRule#field}
    */
    readonly field?: string;
    /**
    * Type of matcher.
    * Available values: "all", "literal".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_rule#type EmailRoutingRule#type}
    */
    readonly type: string;
    /**
    * Value for matcher.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_rule#value EmailRoutingRule#value}
    */
    readonly value?: string;
}
export declare function emailRoutingRuleMatchersToTerraform(struct?: EmailRoutingRuleMatchers | cdktf.IResolvable): any;
export declare function emailRoutingRuleMatchersToHclTerraform(struct?: EmailRoutingRuleMatchers | cdktf.IResolvable): any;
export declare class EmailRoutingRuleMatchersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmailRoutingRuleMatchers | cdktf.IResolvable | undefined;
    set internalValue(value: EmailRoutingRuleMatchers | cdktf.IResolvable | undefined);
    private _field?;
    get field(): string;
    set field(value: string);
    resetField(): void;
    get fieldInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string;
}
export declare class EmailRoutingRuleMatchersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmailRoutingRuleMatchers[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmailRoutingRuleMatchersOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_rule cloudflare_email_routing_rule}
*/
export declare class EmailRoutingRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_email_routing_rule";
    /**
    * Generates CDKTF code for importing a EmailRoutingRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmailRoutingRule to import
    * @param importFromId The id of the existing EmailRoutingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmailRoutingRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_rule cloudflare_email_routing_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmailRoutingRuleConfig
    */
    constructor(scope: Construct, id: string, config: EmailRoutingRuleConfig);
    private _actions;
    get actions(): EmailRoutingRuleActionsList;
    putActions(value: EmailRoutingRuleActions[] | cdktf.IResolvable): void;
    get actionsInput(): any;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    get id(): any;
    private _matchers;
    get matchers(): EmailRoutingRuleMatchersList;
    putMatchers(value: EmailRoutingRuleMatchers[] | cdktf.IResolvable): void;
    get matchersInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number;
    get tag(): any;
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
