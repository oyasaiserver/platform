import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WebAnalyticsSiteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_site#account_id WebAnalyticsSite#account_id}
    */
    readonly accountId?: string;
    /**
    * If enabled, the JavaScript snippet is automatically injected for orange-clouded sites.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_site#auto_install WebAnalyticsSite#auto_install}
    */
    readonly autoInstall?: boolean | cdktf.IResolvable;
    /**
    * Enables or disables RUM. This option can be used only when auto_install is set to true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_site#enabled WebAnalyticsSite#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * The hostname to use for gray-clouded sites.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_site#host WebAnalyticsSite#host}
    */
    readonly host?: string;
    /**
    * If enabled, the JavaScript snippet will not be injected for visitors from the EU.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_site#lite WebAnalyticsSite#lite}
    */
    readonly lite?: boolean | cdktf.IResolvable;
    /**
    * The zone identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_site#zone_tag WebAnalyticsSite#zone_tag}
    */
    readonly zoneTag?: string;
}
export interface WebAnalyticsSiteRules {
}
export declare function webAnalyticsSiteRulesToTerraform(struct?: WebAnalyticsSiteRules): any;
export declare function webAnalyticsSiteRulesToHclTerraform(struct?: WebAnalyticsSiteRules): any;
export declare class WebAnalyticsSiteRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WebAnalyticsSiteRules | undefined;
    set internalValue(value: WebAnalyticsSiteRules | undefined);
    get created(): any;
    get host(): any;
    get id(): any;
    get inclusive(): any;
    get isPaused(): any;
    get paths(): any;
    get priority(): any;
}
export declare class WebAnalyticsSiteRulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WebAnalyticsSiteRulesOutputReference;
}
export interface WebAnalyticsSiteRuleset {
}
export declare function webAnalyticsSiteRulesetToTerraform(struct?: WebAnalyticsSiteRuleset): any;
export declare function webAnalyticsSiteRulesetToHclTerraform(struct?: WebAnalyticsSiteRuleset): any;
export declare class WebAnalyticsSiteRulesetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WebAnalyticsSiteRuleset | undefined;
    set internalValue(value: WebAnalyticsSiteRuleset | undefined);
    get enabled(): any;
    get id(): any;
    get zoneName(): any;
    get zoneTag(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_site cloudflare_web_analytics_site}
*/
export declare class WebAnalyticsSite extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_web_analytics_site";
    /**
    * Generates CDKTF code for importing a WebAnalyticsSite resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WebAnalyticsSite to import
    * @param importFromId The id of the existing WebAnalyticsSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_site#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WebAnalyticsSite to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_site cloudflare_web_analytics_site} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WebAnalyticsSiteConfig = {}
    */
    constructor(scope: Construct, id: string, config?: WebAnalyticsSiteConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _autoInstall?;
    get autoInstall(): boolean | cdktf.IResolvable;
    set autoInstall(value: boolean | cdktf.IResolvable);
    resetAutoInstall(): void;
    get autoInstallInput(): any;
    get created(): any;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _host?;
    get host(): string;
    set host(value: string);
    resetHost(): void;
    get hostInput(): string;
    get id(): any;
    private _lite?;
    get lite(): boolean | cdktf.IResolvable;
    set lite(value: boolean | cdktf.IResolvable);
    resetLite(): void;
    get liteInput(): any;
    private _rules;
    get rules(): WebAnalyticsSiteRulesList;
    private _ruleset;
    get ruleset(): WebAnalyticsSiteRulesetOutputReference;
    get siteTag(): any;
    get siteToken(): any;
    get snippet(): any;
    private _zoneTag?;
    get zoneTag(): string;
    set zoneTag(value: string);
    resetZoneTag(): void;
    get zoneTagInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
