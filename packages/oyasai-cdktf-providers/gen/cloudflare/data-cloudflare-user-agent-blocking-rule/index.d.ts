import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareUserAgentBlockingRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_agent_blocking_rule#filter DataCloudflareUserAgentBlockingRule#filter}
    */
    readonly filter?: DataCloudflareUserAgentBlockingRuleFilter;
    /**
    * The unique identifier of the User Agent Blocking rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_agent_blocking_rule#ua_rule_id DataCloudflareUserAgentBlockingRule#ua_rule_id}
    */
    readonly uaRuleId?: string;
    /**
    * Defines an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_agent_blocking_rule#zone_id DataCloudflareUserAgentBlockingRule#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareUserAgentBlockingRuleConfiguration {
}
export declare function dataCloudflareUserAgentBlockingRuleConfigurationToTerraform(struct?: DataCloudflareUserAgentBlockingRuleConfiguration): any;
export declare function dataCloudflareUserAgentBlockingRuleConfigurationToHclTerraform(struct?: DataCloudflareUserAgentBlockingRuleConfiguration): any;
export declare class DataCloudflareUserAgentBlockingRuleConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareUserAgentBlockingRuleConfiguration | undefined;
    set internalValue(value: DataCloudflareUserAgentBlockingRuleConfiguration | undefined);
    get target(): any;
    get value(): any;
}
export interface DataCloudflareUserAgentBlockingRuleFilter {
    /**
    * A string to search for in the description of existing rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_agent_blocking_rule#description DataCloudflareUserAgentBlockingRule#description}
    */
    readonly description?: string;
    /**
    * When true, indicates that the rule is currently paused.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_agent_blocking_rule#paused DataCloudflareUserAgentBlockingRule#paused}
    */
    readonly paused?: boolean | cdktf.IResolvable;
    /**
    * A string to search for in the user agent values of existing rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_agent_blocking_rule#user_agent DataCloudflareUserAgentBlockingRule#user_agent}
    */
    readonly userAgent?: string;
}
export declare function dataCloudflareUserAgentBlockingRuleFilterToTerraform(struct?: DataCloudflareUserAgentBlockingRuleFilter | cdktf.IResolvable): any;
export declare function dataCloudflareUserAgentBlockingRuleFilterToHclTerraform(struct?: DataCloudflareUserAgentBlockingRuleFilter | cdktf.IResolvable): any;
export declare class DataCloudflareUserAgentBlockingRuleFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareUserAgentBlockingRuleFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareUserAgentBlockingRuleFilter | cdktf.IResolvable | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _paused?;
    get paused(): boolean | cdktf.IResolvable;
    set paused(value: boolean | cdktf.IResolvable);
    resetPaused(): void;
    get pausedInput(): any;
    private _userAgent?;
    get userAgent(): string;
    set userAgent(value: string);
    resetUserAgent(): void;
    get userAgentInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_agent_blocking_rule cloudflare_user_agent_blocking_rule}
*/
export declare class DataCloudflareUserAgentBlockingRule extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_user_agent_blocking_rule";
    /**
    * Generates CDKTF code for importing a DataCloudflareUserAgentBlockingRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareUserAgentBlockingRule to import
    * @param importFromId The id of the existing DataCloudflareUserAgentBlockingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_agent_blocking_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareUserAgentBlockingRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user_agent_blocking_rule cloudflare_user_agent_blocking_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareUserAgentBlockingRuleConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareUserAgentBlockingRuleConfig);
    private _configuration;
    get configuration(): DataCloudflareUserAgentBlockingRuleConfigurationOutputReference;
    get description(): any;
    private _filter;
    get filter(): DataCloudflareUserAgentBlockingRuleFilterOutputReference;
    putFilter(value: DataCloudflareUserAgentBlockingRuleFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get mode(): any;
    get paused(): any;
    private _uaRuleId?;
    get uaRuleId(): string;
    set uaRuleId(value: string);
    resetUaRuleId(): void;
    get uaRuleIdInput(): string;
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
