import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BotManagementConfig extends cdktf.TerraformMetaArguments {
    /**
    * Enable rule to block AI Scrapers and Crawlers. Please note the value `only_on_ad_pages` is currently not available for Enterprise customers.
    * Available values: "block", "disabled", "only_on_ad_pages".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management#ai_bots_protection BotManagement#ai_bots_protection}
    */
    readonly aiBotsProtection?: string;
    /**
    * Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management#auto_update_model BotManagement#auto_update_model}
    */
    readonly autoUpdateModel?: boolean | cdktf.IResolvable;
    /**
    * Indicates that the bot management cookie can be placed on end user devices accessing the site. Defaults to true
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management#bm_cookie_enabled BotManagement#bm_cookie_enabled}
    */
    readonly bmCookieEnabled?: boolean | cdktf.IResolvable;
    /**
    * Specifies the Robots Access Control License variant to use.
    * Available values: "off", "policy_only".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management#cf_robots_variant BotManagement#cf_robots_variant}
    */
    readonly cfRobotsVariant?: string;
    /**
    * Enable rule to block content bots. When enabled, blocks automated traffic with low bot scores, excluding safe verified bot categories. Exceptions should be managed via skip rules.
    * Available values: "block", "disabled".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management#content_bots_protection BotManagement#content_bots_protection}
    */
    readonly contentBotsProtection?: string;
    /**
    * Enable rule to punish AI Scrapers and Crawlers via a link maze.
    * Available values: "enabled", "disabled".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management#crawler_protection BotManagement#crawler_protection}
    */
    readonly crawlerProtection?: string;
    /**
    * Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management#enable_js BotManagement#enable_js}
    */
    readonly enableJs?: boolean | cdktf.IResolvable;
    /**
    * Whether to enable Bot Fight Mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management#fight_mode BotManagement#fight_mode}
    */
    readonly fightMode?: boolean | cdktf.IResolvable;
    /**
    * Enable cloudflare managed robots.txt. If an existing robots.txt is detected, then managed robots.txt will be prepended to the existing robots.txt.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management#is_robots_txt_managed BotManagement#is_robots_txt_managed}
    */
    readonly isRobotsTxtManaged?: boolean | cdktf.IResolvable;
    /**
    * Whether to optimize Super Bot Fight Mode protections for Wordpress.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management#optimize_wordpress BotManagement#optimize_wordpress}
    */
    readonly optimizeWordpress?: boolean | cdktf.IResolvable;
    /**
    * Super Bot Fight Mode (SBFM) action to take on definitely automated requests.
    * Available values: "allow", "block", "managed_challenge".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management#sbfm_definitely_automated BotManagement#sbfm_definitely_automated}
    */
    readonly sbfmDefinitelyAutomated?: string;
    /**
    * Super Bot Fight Mode (SBFM) action to take on likely automated requests.
    * Available values: "allow", "block", "managed_challenge".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management#sbfm_likely_automated BotManagement#sbfm_likely_automated}
    */
    readonly sbfmLikelyAutomated?: string;
    /**
    * Super Bot Fight Mode (SBFM) to enable static resource protection.
    * Enable if static resources on your application need bot protection.
    * Note: Static resource protection can also result in legitimate traffic being blocked.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management#sbfm_static_resource_protection BotManagement#sbfm_static_resource_protection}
    */
    readonly sbfmStaticResourceProtection?: boolean | cdktf.IResolvable;
    /**
    * Super Bot Fight Mode (SBFM) action to take on verified bots requests.
    * Available values: "allow", "block".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management#sbfm_verified_bots BotManagement#sbfm_verified_bots}
    */
    readonly sbfmVerifiedBots?: string;
    /**
    * Whether to disable tracking the highest bot score for a session in the Bot Management cookie.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management#suppress_session_score BotManagement#suppress_session_score}
    */
    readonly suppressSessionScore?: boolean | cdktf.IResolvable;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management#zone_id BotManagement#zone_id}
    */
    readonly zoneId: string;
}
export interface BotManagementStaleZoneConfiguration {
}
export declare function botManagementStaleZoneConfigurationToTerraform(struct?: BotManagementStaleZoneConfiguration): any;
export declare function botManagementStaleZoneConfigurationToHclTerraform(struct?: BotManagementStaleZoneConfiguration): any;
export declare class BotManagementStaleZoneConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BotManagementStaleZoneConfiguration | undefined;
    set internalValue(value: BotManagementStaleZoneConfiguration | undefined);
    get fightMode(): any;
    get optimizeWordpress(): any;
    get sbfmDefinitelyAutomated(): any;
    get sbfmLikelyAutomated(): any;
    get sbfmStaticResourceProtection(): any;
    get sbfmVerifiedBots(): any;
    get suppressSessionScore(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management cloudflare_bot_management}
*/
export declare class BotManagement extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_bot_management";
    /**
    * Generates CDKTF code for importing a BotManagement resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BotManagement to import
    * @param importFromId The id of the existing BotManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BotManagement to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management cloudflare_bot_management} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BotManagementConfig
    */
    constructor(scope: Construct, id: string, config: BotManagementConfig);
    private _aiBotsProtection?;
    get aiBotsProtection(): string;
    set aiBotsProtection(value: string);
    resetAiBotsProtection(): void;
    get aiBotsProtectionInput(): string;
    private _autoUpdateModel?;
    get autoUpdateModel(): boolean | cdktf.IResolvable;
    set autoUpdateModel(value: boolean | cdktf.IResolvable);
    resetAutoUpdateModel(): void;
    get autoUpdateModelInput(): any;
    private _bmCookieEnabled?;
    get bmCookieEnabled(): boolean | cdktf.IResolvable;
    set bmCookieEnabled(value: boolean | cdktf.IResolvable);
    resetBmCookieEnabled(): void;
    get bmCookieEnabledInput(): any;
    private _cfRobotsVariant?;
    get cfRobotsVariant(): string;
    set cfRobotsVariant(value: string);
    resetCfRobotsVariant(): void;
    get cfRobotsVariantInput(): string;
    private _contentBotsProtection?;
    get contentBotsProtection(): string;
    set contentBotsProtection(value: string);
    resetContentBotsProtection(): void;
    get contentBotsProtectionInput(): string;
    private _crawlerProtection?;
    get crawlerProtection(): string;
    set crawlerProtection(value: string);
    resetCrawlerProtection(): void;
    get crawlerProtectionInput(): string;
    private _enableJs?;
    get enableJs(): boolean | cdktf.IResolvable;
    set enableJs(value: boolean | cdktf.IResolvable);
    resetEnableJs(): void;
    get enableJsInput(): any;
    private _fightMode?;
    get fightMode(): boolean | cdktf.IResolvable;
    set fightMode(value: boolean | cdktf.IResolvable);
    resetFightMode(): void;
    get fightModeInput(): any;
    get id(): any;
    private _isRobotsTxtManaged?;
    get isRobotsTxtManaged(): boolean | cdktf.IResolvable;
    set isRobotsTxtManaged(value: boolean | cdktf.IResolvable);
    resetIsRobotsTxtManaged(): void;
    get isRobotsTxtManagedInput(): any;
    private _optimizeWordpress?;
    get optimizeWordpress(): boolean | cdktf.IResolvable;
    set optimizeWordpress(value: boolean | cdktf.IResolvable);
    resetOptimizeWordpress(): void;
    get optimizeWordpressInput(): any;
    private _sbfmDefinitelyAutomated?;
    get sbfmDefinitelyAutomated(): string;
    set sbfmDefinitelyAutomated(value: string);
    resetSbfmDefinitelyAutomated(): void;
    get sbfmDefinitelyAutomatedInput(): string;
    private _sbfmLikelyAutomated?;
    get sbfmLikelyAutomated(): string;
    set sbfmLikelyAutomated(value: string);
    resetSbfmLikelyAutomated(): void;
    get sbfmLikelyAutomatedInput(): string;
    private _sbfmStaticResourceProtection?;
    get sbfmStaticResourceProtection(): boolean | cdktf.IResolvable;
    set sbfmStaticResourceProtection(value: boolean | cdktf.IResolvable);
    resetSbfmStaticResourceProtection(): void;
    get sbfmStaticResourceProtectionInput(): any;
    private _sbfmVerifiedBots?;
    get sbfmVerifiedBots(): string;
    set sbfmVerifiedBots(value: string);
    resetSbfmVerifiedBots(): void;
    get sbfmVerifiedBotsInput(): string;
    private _staleZoneConfiguration;
    get staleZoneConfiguration(): BotManagementStaleZoneConfigurationOutputReference;
    private _suppressSessionScore?;
    get suppressSessionScore(): boolean | cdktf.IResolvable;
    set suppressSessionScore(value: boolean | cdktf.IResolvable);
    resetSuppressSessionScore(): void;
    get suppressSessionScoreInput(): any;
    get usingLatestModel(): any;
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
