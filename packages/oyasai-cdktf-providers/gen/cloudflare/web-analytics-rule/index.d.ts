import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WebAnalyticsRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_rule#account_id WebAnalyticsRule#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_rule#host WebAnalyticsRule#host}
    */
    readonly host?: string;
    /**
    * Whether the rule includes or excludes traffic from being measured.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_rule#inclusive WebAnalyticsRule#inclusive}
    */
    readonly inclusive?: boolean | cdktf.IResolvable;
    /**
    * Whether the rule is paused or not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_rule#is_paused WebAnalyticsRule#is_paused}
    */
    readonly isPaused?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_rule#paths WebAnalyticsRule#paths}
    */
    readonly paths?: string[];
    /**
    * The Web Analytics ruleset identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_rule#ruleset_id WebAnalyticsRule#ruleset_id}
    */
    readonly rulesetId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_rule cloudflare_web_analytics_rule}
*/
export declare class WebAnalyticsRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_web_analytics_rule";
    /**
    * Generates CDKTF code for importing a WebAnalyticsRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WebAnalyticsRule to import
    * @param importFromId The id of the existing WebAnalyticsRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WebAnalyticsRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_rule cloudflare_web_analytics_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WebAnalyticsRuleConfig
    */
    constructor(scope: Construct, id: string, config: WebAnalyticsRuleConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get created(): any;
    private _host?;
    get host(): string;
    set host(value: string);
    resetHost(): void;
    get hostInput(): string;
    get id(): any;
    private _inclusive?;
    get inclusive(): boolean | cdktf.IResolvable;
    set inclusive(value: boolean | cdktf.IResolvable);
    resetInclusive(): void;
    get inclusiveInput(): any;
    private _isPaused?;
    get isPaused(): boolean | cdktf.IResolvable;
    set isPaused(value: boolean | cdktf.IResolvable);
    resetIsPaused(): void;
    get isPausedInput(): any;
    private _paths?;
    get paths(): string[];
    set paths(value: string[]);
    resetPaths(): void;
    get pathsInput(): string[];
    get priority(): any;
    private _rulesetId?;
    get rulesetId(): string;
    set rulesetId(value: string);
    get rulesetIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
