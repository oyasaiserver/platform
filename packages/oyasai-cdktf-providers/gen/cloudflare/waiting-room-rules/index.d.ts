import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WaitingRoomRulesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_rules#rules WaitingRoomRules#rules}
    */
    readonly rules: WaitingRoomRulesRules[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_rules#waiting_room_id WaitingRoomRules#waiting_room_id}
    */
    readonly waitingRoomId: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_rules#zone_id WaitingRoomRules#zone_id}
    */
    readonly zoneId?: string;
}
export interface WaitingRoomRulesRules {
    /**
    * The action to take when the expression matches.
    * Available values: "bypass_waiting_room".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_rules#action WaitingRoomRules#action}
    */
    readonly action: string;
    /**
    * The description of the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_rules#description WaitingRoomRules#description}
    */
    readonly description?: string;
    /**
    * When set to true, the rule is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_rules#enabled WaitingRoomRules#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Criteria defining when there is a match for the current rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_rules#expression WaitingRoomRules#expression}
    */
    readonly expression: string;
}
export declare function waitingRoomRulesRulesToTerraform(struct?: WaitingRoomRulesRules | cdktf.IResolvable): any;
export declare function waitingRoomRulesRulesToHclTerraform(struct?: WaitingRoomRulesRules | cdktf.IResolvable): any;
export declare class WaitingRoomRulesRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WaitingRoomRulesRules | cdktf.IResolvable | undefined;
    set internalValue(value: WaitingRoomRulesRules | cdktf.IResolvable | undefined);
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string;
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
}
export declare class WaitingRoomRulesRulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WaitingRoomRulesRules[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WaitingRoomRulesRulesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_rules cloudflare_waiting_room_rules}
*/
export declare class WaitingRoomRules extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_waiting_room_rules";
    /**
    * Generates CDKTF code for importing a WaitingRoomRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WaitingRoomRules to import
    * @param importFromId The id of the existing WaitingRoomRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WaitingRoomRules to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_rules cloudflare_waiting_room_rules} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WaitingRoomRulesConfig
    */
    constructor(scope: Construct, id: string, config: WaitingRoomRulesConfig);
    get id(): any;
    private _rules;
    get rules(): WaitingRoomRulesRulesList;
    putRules(value: WaitingRoomRulesRules[] | cdktf.IResolvable): void;
    get rulesInput(): any;
    private _waitingRoomId?;
    get waitingRoomId(): string;
    set waitingRoomId(value: string);
    get waitingRoomIdInput(): string;
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
