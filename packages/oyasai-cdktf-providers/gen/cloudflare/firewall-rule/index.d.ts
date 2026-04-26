import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FirewallRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * The action to perform when the threshold of matched traffic within the configured period is exceeded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/firewall_rule#action FirewallRule#action}
    */
    readonly action: FirewallRuleAction;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/firewall_rule#filter FirewallRule#filter}
    */
    readonly filter: FirewallRuleFilter;
    /**
    * Defines an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/firewall_rule#zone_id FirewallRule#zone_id}
    */
    readonly zoneId?: string;
}
export interface FirewallRuleActionResponse {
    /**
    * The response body to return. The value must conform to the configured content type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/firewall_rule#body FirewallRule#body}
    */
    readonly body?: string;
    /**
    * The content type of the body. Must be one of the following: `text/plain`, `text/xml`, or `application/json`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/firewall_rule#content_type FirewallRule#content_type}
    */
    readonly contentType?: string;
}
export declare function firewallRuleActionResponseToTerraform(struct?: FirewallRuleActionResponse | cdktf.IResolvable): any;
export declare function firewallRuleActionResponseToHclTerraform(struct?: FirewallRuleActionResponse | cdktf.IResolvable): any;
export declare class FirewallRuleActionResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FirewallRuleActionResponse | cdktf.IResolvable | undefined;
    set internalValue(value: FirewallRuleActionResponse | cdktf.IResolvable | undefined);
    private _body?;
    get body(): string;
    set body(value: string);
    resetBody(): void;
    get bodyInput(): string;
    private _contentType?;
    get contentType(): string;
    set contentType(value: string);
    resetContentType(): void;
    get contentTypeInput(): string;
}
export interface FirewallRuleAction {
    /**
    * The action to perform.
    * Available values: "simulate", "ban", "challenge", "js_challenge", "managed_challenge".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/firewall_rule#mode FirewallRule#mode}
    */
    readonly mode?: string;
    /**
    * A custom content type and reponse to return when the threshold is exceeded. The custom response configured in this object will override the custom error for the zone. This object is optional.
    * Notes: If you omit this object, Cloudflare will use the default HTML error page. If "mode" is "challenge", "managed_challenge", or "js_challenge", Cloudflare will use the zone challenge pages and you should not provide the "response" object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/firewall_rule#response FirewallRule#response}
    */
    readonly response?: FirewallRuleActionResponse;
    /**
    * The time in seconds during which Cloudflare will perform the mitigation action. Must be an integer value greater than or equal to the period.
    * Notes: If "mode" is "challenge", "managed_challenge", or "js_challenge", Cloudflare will use the zone's Challenge Passage time and you should not provide this value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/firewall_rule#timeout FirewallRule#timeout}
    */
    readonly timeout?: number;
}
export declare function firewallRuleActionToTerraform(struct?: FirewallRuleAction | cdktf.IResolvable): any;
export declare function firewallRuleActionToHclTerraform(struct?: FirewallRuleAction | cdktf.IResolvable): any;
export declare class FirewallRuleActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FirewallRuleAction | cdktf.IResolvable | undefined;
    set internalValue(value: FirewallRuleAction | cdktf.IResolvable | undefined);
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string;
    private _response;
    get response(): FirewallRuleActionResponseOutputReference;
    putResponse(value: FirewallRuleActionResponse): void;
    resetResponse(): void;
    get responseInput(): any;
    private _timeout?;
    get timeout(): number;
    set timeout(value: number);
    resetTimeout(): void;
    get timeoutInput(): number;
}
export interface FirewallRuleFilter {
    /**
    * An informative summary of the filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/firewall_rule#description FirewallRule#description}
    */
    readonly description?: string;
    /**
    * The filter expression. For more information, refer to [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/firewall_rule#expression FirewallRule#expression}
    */
    readonly expression?: string;
    /**
    * When true, indicates that the filter is currently paused.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/firewall_rule#paused FirewallRule#paused}
    */
    readonly paused?: boolean | cdktf.IResolvable;
    /**
    * A short reference tag. Allows you to select related filters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/firewall_rule#ref FirewallRule#ref}
    */
    readonly ref?: string;
}
export declare function firewallRuleFilterToTerraform(struct?: FirewallRuleFilter | cdktf.IResolvable): any;
export declare function firewallRuleFilterToHclTerraform(struct?: FirewallRuleFilter | cdktf.IResolvable): any;
export declare class FirewallRuleFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FirewallRuleFilter | cdktf.IResolvable | undefined;
    set internalValue(value: FirewallRuleFilter | cdktf.IResolvable | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _expression?;
    get expression(): string;
    set expression(value: string);
    resetExpression(): void;
    get expressionInput(): string;
    get id(): any;
    private _paused?;
    get paused(): boolean | cdktf.IResolvable;
    set paused(value: boolean | cdktf.IResolvable);
    resetPaused(): void;
    get pausedInput(): any;
    private _ref?;
    get ref(): string;
    set ref(value: string);
    resetRef(): void;
    get refInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/firewall_rule cloudflare_firewall_rule}
*/
export declare class FirewallRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_firewall_rule";
    /**
    * Generates CDKTF code for importing a FirewallRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the FirewallRule to import
    * @param importFromId The id of the existing FirewallRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/firewall_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the FirewallRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/firewall_rule cloudflare_firewall_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FirewallRuleConfig
    */
    constructor(scope: Construct, id: string, config: FirewallRuleConfig);
    private _action;
    get action(): FirewallRuleActionOutputReference;
    putAction(value: FirewallRuleAction): void;
    get actionInput(): any;
    get description(): any;
    private _filter;
    get filter(): FirewallRuleFilterOutputReference;
    putFilter(value: FirewallRuleFilter): void;
    get filterInput(): any;
    get id(): any;
    get paused(): any;
    get priority(): any;
    get products(): any;
    get ref(): any;
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
