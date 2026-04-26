import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EmailRoutingCatchAllConfig extends cdktf.TerraformMetaArguments {
    /**
    * List actions for the catch-all routing rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_catch_all#actions EmailRoutingCatchAll#actions}
    */
    readonly actions: EmailRoutingCatchAllActions[] | cdktf.IResolvable;
    /**
    * Routing rule status.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_catch_all#enabled EmailRoutingCatchAll#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * List of matchers for the catch-all routing rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_catch_all#matchers EmailRoutingCatchAll#matchers}
    */
    readonly matchers: EmailRoutingCatchAllMatchers[] | cdktf.IResolvable;
    /**
    * Routing rule name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_catch_all#name EmailRoutingCatchAll#name}
    */
    readonly name?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_catch_all#zone_id EmailRoutingCatchAll#zone_id}
    */
    readonly zoneId: string;
}
export interface EmailRoutingCatchAllActions {
    /**
    * Type of action for catch-all rule.
    * Available values: "drop", "forward", "worker".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_catch_all#type EmailRoutingCatchAll#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_catch_all#value EmailRoutingCatchAll#value}
    */
    readonly value?: string[];
}
export declare function emailRoutingCatchAllActionsToTerraform(struct?: EmailRoutingCatchAllActions | cdktf.IResolvable): any;
export declare function emailRoutingCatchAllActionsToHclTerraform(struct?: EmailRoutingCatchAllActions | cdktf.IResolvable): any;
export declare class EmailRoutingCatchAllActionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmailRoutingCatchAllActions | cdktf.IResolvable | undefined;
    set internalValue(value: EmailRoutingCatchAllActions | cdktf.IResolvable | undefined);
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
export declare class EmailRoutingCatchAllActionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmailRoutingCatchAllActions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmailRoutingCatchAllActionsOutputReference;
}
export interface EmailRoutingCatchAllMatchers {
    /**
    * Type of matcher. Default is 'all'.
    * Available values: "all".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_catch_all#type EmailRoutingCatchAll#type}
    */
    readonly type: string;
}
export declare function emailRoutingCatchAllMatchersToTerraform(struct?: EmailRoutingCatchAllMatchers | cdktf.IResolvable): any;
export declare function emailRoutingCatchAllMatchersToHclTerraform(struct?: EmailRoutingCatchAllMatchers | cdktf.IResolvable): any;
export declare class EmailRoutingCatchAllMatchersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmailRoutingCatchAllMatchers | cdktf.IResolvable | undefined;
    set internalValue(value: EmailRoutingCatchAllMatchers | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export declare class EmailRoutingCatchAllMatchersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmailRoutingCatchAllMatchers[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmailRoutingCatchAllMatchersOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_catch_all cloudflare_email_routing_catch_all}
*/
export declare class EmailRoutingCatchAll extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_email_routing_catch_all";
    /**
    * Generates CDKTF code for importing a EmailRoutingCatchAll resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmailRoutingCatchAll to import
    * @param importFromId The id of the existing EmailRoutingCatchAll that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_catch_all#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmailRoutingCatchAll to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_catch_all cloudflare_email_routing_catch_all} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmailRoutingCatchAllConfig
    */
    constructor(scope: Construct, id: string, config: EmailRoutingCatchAllConfig);
    private _actions;
    get actions(): EmailRoutingCatchAllActionsList;
    putActions(value: EmailRoutingCatchAllActions[] | cdktf.IResolvable): void;
    get actionsInput(): any;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    get id(): any;
    private _matchers;
    get matchers(): EmailRoutingCatchAllMatchersList;
    putMatchers(value: EmailRoutingCatchAllMatchers[] | cdktf.IResolvable): void;
    get matchersInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    get tag(): any;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
