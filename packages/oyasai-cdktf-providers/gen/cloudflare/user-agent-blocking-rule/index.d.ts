import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface UserAgentBlockingRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_agent_blocking_rule#configuration UserAgentBlockingRule#configuration}
    */
    readonly configuration: UserAgentBlockingRuleConfiguration;
    /**
    * An informative summary of the rule. This value is sanitized and any tags will be removed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_agent_blocking_rule#description UserAgentBlockingRule#description}
    */
    readonly description?: string;
    /**
    * The action to apply to a matched request.
    * Available values: "block", "challenge", "whitelist", "js_challenge", "managed_challenge".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_agent_blocking_rule#mode UserAgentBlockingRule#mode}
    */
    readonly mode: string;
    /**
    * When true, indicates that the rule is currently paused.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_agent_blocking_rule#paused UserAgentBlockingRule#paused}
    */
    readonly paused?: boolean | cdktf.IResolvable;
    /**
    * Defines an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_agent_blocking_rule#zone_id UserAgentBlockingRule#zone_id}
    */
    readonly zoneId?: string;
}
export interface UserAgentBlockingRuleConfiguration {
    /**
    * The configuration target. You must set the target to `ua` when specifying a user agent in the rule.
    * Available values: "ua".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_agent_blocking_rule#target UserAgentBlockingRule#target}
    */
    readonly target?: string;
    /**
    * the user agent to exactly match
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_agent_blocking_rule#value UserAgentBlockingRule#value}
    */
    readonly value?: string;
}
export declare function userAgentBlockingRuleConfigurationToTerraform(struct?: UserAgentBlockingRuleConfiguration | cdktf.IResolvable): any;
export declare function userAgentBlockingRuleConfigurationToHclTerraform(struct?: UserAgentBlockingRuleConfiguration | cdktf.IResolvable): any;
export declare class UserAgentBlockingRuleConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): UserAgentBlockingRuleConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: UserAgentBlockingRuleConfiguration | cdktf.IResolvable | undefined);
    private _target?;
    get target(): string;
    set target(value: string);
    resetTarget(): void;
    get targetInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_agent_blocking_rule cloudflare_user_agent_blocking_rule}
*/
export declare class UserAgentBlockingRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_user_agent_blocking_rule";
    /**
    * Generates CDKTF code for importing a UserAgentBlockingRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the UserAgentBlockingRule to import
    * @param importFromId The id of the existing UserAgentBlockingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_agent_blocking_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the UserAgentBlockingRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user_agent_blocking_rule cloudflare_user_agent_blocking_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options UserAgentBlockingRuleConfig
    */
    constructor(scope: Construct, id: string, config: UserAgentBlockingRuleConfig);
    private _configuration;
    get configuration(): UserAgentBlockingRuleConfigurationOutputReference;
    putConfiguration(value: UserAgentBlockingRuleConfiguration): void;
    get configurationInput(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): any;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    get modeInput(): string;
    private _paused?;
    get paused(): boolean | cdktf.IResolvable;
    set paused(value: boolean | cdktf.IResolvable);
    resetPaused(): void;
    get pausedInput(): any;
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
