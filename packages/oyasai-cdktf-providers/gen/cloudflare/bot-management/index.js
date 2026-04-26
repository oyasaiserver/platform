// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function botManagementStaleZoneConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function botManagementStaleZoneConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class BotManagementStaleZoneConfigurationOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // fight_mode - computed: true, optional: false, required: false
    get fightMode() {
        return this.getBooleanAttribute('fight_mode');
    }
    // optimize_wordpress - computed: true, optional: false, required: false
    get optimizeWordpress() {
        return this.getBooleanAttribute('optimize_wordpress');
    }
    // sbfm_definitely_automated - computed: true, optional: false, required: false
    get sbfmDefinitelyAutomated() {
        return this.getStringAttribute('sbfm_definitely_automated');
    }
    // sbfm_likely_automated - computed: true, optional: false, required: false
    get sbfmLikelyAutomated() {
        return this.getStringAttribute('sbfm_likely_automated');
    }
    // sbfm_static_resource_protection - computed: true, optional: false, required: false
    get sbfmStaticResourceProtection() {
        return this.getStringAttribute('sbfm_static_resource_protection');
    }
    // sbfm_verified_bots - computed: true, optional: false, required: false
    get sbfmVerifiedBots() {
        return this.getStringAttribute('sbfm_verified_bots');
    }
    // suppress_session_score - computed: true, optional: false, required: false
    get suppressSessionScore() {
        return this.getBooleanAttribute('suppress_session_score');
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management cloudflare_bot_management}
*/
export class BotManagement extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_bot_management";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a BotManagement resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BotManagement to import
    * @param importFromId The id of the existing BotManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BotManagement to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_bot_management", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/bot_management cloudflare_bot_management} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BotManagementConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_bot_management',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._aiBotsProtection = config.aiBotsProtection;
        this._autoUpdateModel = config.autoUpdateModel;
        this._bmCookieEnabled = config.bmCookieEnabled;
        this._cfRobotsVariant = config.cfRobotsVariant;
        this._contentBotsProtection = config.contentBotsProtection;
        this._crawlerProtection = config.crawlerProtection;
        this._enableJs = config.enableJs;
        this._fightMode = config.fightMode;
        this._isRobotsTxtManaged = config.isRobotsTxtManaged;
        this._optimizeWordpress = config.optimizeWordpress;
        this._sbfmDefinitelyAutomated = config.sbfmDefinitelyAutomated;
        this._sbfmLikelyAutomated = config.sbfmLikelyAutomated;
        this._sbfmStaticResourceProtection = config.sbfmStaticResourceProtection;
        this._sbfmVerifiedBots = config.sbfmVerifiedBots;
        this._suppressSessionScore = config.suppressSessionScore;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // ai_bots_protection - computed: true, optional: true, required: false
    _aiBotsProtection;
    get aiBotsProtection() {
        return this.getStringAttribute('ai_bots_protection');
    }
    set aiBotsProtection(value) {
        this._aiBotsProtection = value;
    }
    resetAiBotsProtection() {
        this._aiBotsProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aiBotsProtectionInput() {
        return this._aiBotsProtection;
    }
    // auto_update_model - computed: true, optional: true, required: false
    _autoUpdateModel;
    get autoUpdateModel() {
        return this.getBooleanAttribute('auto_update_model');
    }
    set autoUpdateModel(value) {
        this._autoUpdateModel = value;
    }
    resetAutoUpdateModel() {
        this._autoUpdateModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoUpdateModelInput() {
        return this._autoUpdateModel;
    }
    // bm_cookie_enabled - computed: true, optional: true, required: false
    _bmCookieEnabled;
    get bmCookieEnabled() {
        return this.getBooleanAttribute('bm_cookie_enabled');
    }
    set bmCookieEnabled(value) {
        this._bmCookieEnabled = value;
    }
    resetBmCookieEnabled() {
        this._bmCookieEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bmCookieEnabledInput() {
        return this._bmCookieEnabled;
    }
    // cf_robots_variant - computed: true, optional: true, required: false
    _cfRobotsVariant;
    get cfRobotsVariant() {
        return this.getStringAttribute('cf_robots_variant');
    }
    set cfRobotsVariant(value) {
        this._cfRobotsVariant = value;
    }
    resetCfRobotsVariant() {
        this._cfRobotsVariant = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cfRobotsVariantInput() {
        return this._cfRobotsVariant;
    }
    // content_bots_protection - computed: true, optional: true, required: false
    _contentBotsProtection;
    get contentBotsProtection() {
        return this.getStringAttribute('content_bots_protection');
    }
    set contentBotsProtection(value) {
        this._contentBotsProtection = value;
    }
    resetContentBotsProtection() {
        this._contentBotsProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentBotsProtectionInput() {
        return this._contentBotsProtection;
    }
    // crawler_protection - computed: true, optional: true, required: false
    _crawlerProtection;
    get crawlerProtection() {
        return this.getStringAttribute('crawler_protection');
    }
    set crawlerProtection(value) {
        this._crawlerProtection = value;
    }
    resetCrawlerProtection() {
        this._crawlerProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get crawlerProtectionInput() {
        return this._crawlerProtection;
    }
    // enable_js - computed: true, optional: true, required: false
    _enableJs;
    get enableJs() {
        return this.getBooleanAttribute('enable_js');
    }
    set enableJs(value) {
        this._enableJs = value;
    }
    resetEnableJs() {
        this._enableJs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableJsInput() {
        return this._enableJs;
    }
    // fight_mode - computed: true, optional: true, required: false
    _fightMode;
    get fightMode() {
        return this.getBooleanAttribute('fight_mode');
    }
    set fightMode(value) {
        this._fightMode = value;
    }
    resetFightMode() {
        this._fightMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fightModeInput() {
        return this._fightMode;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // is_robots_txt_managed - computed: true, optional: true, required: false
    _isRobotsTxtManaged;
    get isRobotsTxtManaged() {
        return this.getBooleanAttribute('is_robots_txt_managed');
    }
    set isRobotsTxtManaged(value) {
        this._isRobotsTxtManaged = value;
    }
    resetIsRobotsTxtManaged() {
        this._isRobotsTxtManaged = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get isRobotsTxtManagedInput() {
        return this._isRobotsTxtManaged;
    }
    // optimize_wordpress - computed: true, optional: true, required: false
    _optimizeWordpress;
    get optimizeWordpress() {
        return this.getBooleanAttribute('optimize_wordpress');
    }
    set optimizeWordpress(value) {
        this._optimizeWordpress = value;
    }
    resetOptimizeWordpress() {
        this._optimizeWordpress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get optimizeWordpressInput() {
        return this._optimizeWordpress;
    }
    // sbfm_definitely_automated - computed: true, optional: true, required: false
    _sbfmDefinitelyAutomated;
    get sbfmDefinitelyAutomated() {
        return this.getStringAttribute('sbfm_definitely_automated');
    }
    set sbfmDefinitelyAutomated(value) {
        this._sbfmDefinitelyAutomated = value;
    }
    resetSbfmDefinitelyAutomated() {
        this._sbfmDefinitelyAutomated = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sbfmDefinitelyAutomatedInput() {
        return this._sbfmDefinitelyAutomated;
    }
    // sbfm_likely_automated - computed: true, optional: true, required: false
    _sbfmLikelyAutomated;
    get sbfmLikelyAutomated() {
        return this.getStringAttribute('sbfm_likely_automated');
    }
    set sbfmLikelyAutomated(value) {
        this._sbfmLikelyAutomated = value;
    }
    resetSbfmLikelyAutomated() {
        this._sbfmLikelyAutomated = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sbfmLikelyAutomatedInput() {
        return this._sbfmLikelyAutomated;
    }
    // sbfm_static_resource_protection - computed: true, optional: true, required: false
    _sbfmStaticResourceProtection;
    get sbfmStaticResourceProtection() {
        return this.getBooleanAttribute('sbfm_static_resource_protection');
    }
    set sbfmStaticResourceProtection(value) {
        this._sbfmStaticResourceProtection = value;
    }
    resetSbfmStaticResourceProtection() {
        this._sbfmStaticResourceProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sbfmStaticResourceProtectionInput() {
        return this._sbfmStaticResourceProtection;
    }
    // sbfm_verified_bots - computed: true, optional: true, required: false
    _sbfmVerifiedBots;
    get sbfmVerifiedBots() {
        return this.getStringAttribute('sbfm_verified_bots');
    }
    set sbfmVerifiedBots(value) {
        this._sbfmVerifiedBots = value;
    }
    resetSbfmVerifiedBots() {
        this._sbfmVerifiedBots = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sbfmVerifiedBotsInput() {
        return this._sbfmVerifiedBots;
    }
    // stale_zone_configuration - computed: true, optional: false, required: false
    _staleZoneConfiguration = new BotManagementStaleZoneConfigurationOutputReference(this, "stale_zone_configuration");
    get staleZoneConfiguration() {
        return this._staleZoneConfiguration;
    }
    // suppress_session_score - computed: true, optional: true, required: false
    _suppressSessionScore;
    get suppressSessionScore() {
        return this.getBooleanAttribute('suppress_session_score');
    }
    set suppressSessionScore(value) {
        this._suppressSessionScore = value;
    }
    resetSuppressSessionScore() {
        this._suppressSessionScore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get suppressSessionScoreInput() {
        return this._suppressSessionScore;
    }
    // using_latest_model - computed: true, optional: false, required: false
    get usingLatestModel() {
        return this.getBooleanAttribute('using_latest_model');
    }
    // zone_id - computed: false, optional: false, required: true
    _zoneId;
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    set zoneId(value) {
        this._zoneId = value;
    }
    // Temporarily expose input value. Use with caution.
    get zoneIdInput() {
        return this._zoneId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            ai_bots_protection: cdktf.stringToTerraform(this._aiBotsProtection),
            auto_update_model: cdktf.booleanToTerraform(this._autoUpdateModel),
            bm_cookie_enabled: cdktf.booleanToTerraform(this._bmCookieEnabled),
            cf_robots_variant: cdktf.stringToTerraform(this._cfRobotsVariant),
            content_bots_protection: cdktf.stringToTerraform(this._contentBotsProtection),
            crawler_protection: cdktf.stringToTerraform(this._crawlerProtection),
            enable_js: cdktf.booleanToTerraform(this._enableJs),
            fight_mode: cdktf.booleanToTerraform(this._fightMode),
            is_robots_txt_managed: cdktf.booleanToTerraform(this._isRobotsTxtManaged),
            optimize_wordpress: cdktf.booleanToTerraform(this._optimizeWordpress),
            sbfm_definitely_automated: cdktf.stringToTerraform(this._sbfmDefinitelyAutomated),
            sbfm_likely_automated: cdktf.stringToTerraform(this._sbfmLikelyAutomated),
            sbfm_static_resource_protection: cdktf.booleanToTerraform(this._sbfmStaticResourceProtection),
            sbfm_verified_bots: cdktf.stringToTerraform(this._sbfmVerifiedBots),
            suppress_session_score: cdktf.booleanToTerraform(this._suppressSessionScore),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            ai_bots_protection: {
                value: cdktf.stringToHclTerraform(this._aiBotsProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auto_update_model: {
                value: cdktf.booleanToHclTerraform(this._autoUpdateModel),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            bm_cookie_enabled: {
                value: cdktf.booleanToHclTerraform(this._bmCookieEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            cf_robots_variant: {
                value: cdktf.stringToHclTerraform(this._cfRobotsVariant),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content_bots_protection: {
                value: cdktf.stringToHclTerraform(this._contentBotsProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            crawler_protection: {
                value: cdktf.stringToHclTerraform(this._crawlerProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enable_js: {
                value: cdktf.booleanToHclTerraform(this._enableJs),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            fight_mode: {
                value: cdktf.booleanToHclTerraform(this._fightMode),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            is_robots_txt_managed: {
                value: cdktf.booleanToHclTerraform(this._isRobotsTxtManaged),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            optimize_wordpress: {
                value: cdktf.booleanToHclTerraform(this._optimizeWordpress),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            sbfm_definitely_automated: {
                value: cdktf.stringToHclTerraform(this._sbfmDefinitelyAutomated),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sbfm_likely_automated: {
                value: cdktf.stringToHclTerraform(this._sbfmLikelyAutomated),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sbfm_static_resource_protection: {
                value: cdktf.booleanToHclTerraform(this._sbfmStaticResourceProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            sbfm_verified_bots: {
                value: cdktf.stringToHclTerraform(this._sbfmVerifiedBots),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            suppress_session_score: {
                value: cdktf.booleanToHclTerraform(this._suppressSessionScore),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
