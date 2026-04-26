// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/bot_management
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareBotManagementStaleZoneConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareBotManagementStaleZoneConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareBotManagementStaleZoneConfigurationOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/bot_management cloudflare_bot_management}
*/
export class DataCloudflareBotManagement extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_bot_management";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareBotManagement resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareBotManagement to import
    * @param importFromId The id of the existing DataCloudflareBotManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/bot_management#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareBotManagement to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_bot_management", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/bot_management cloudflare_bot_management} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareBotManagementConfig = {}
    */
    constructor(scope, id, config = {}) {
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
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // ai_bots_protection - computed: true, optional: false, required: false
    get aiBotsProtection() {
        return this.getStringAttribute('ai_bots_protection');
    }
    // auto_update_model - computed: true, optional: false, required: false
    get autoUpdateModel() {
        return this.getBooleanAttribute('auto_update_model');
    }
    // bm_cookie_enabled - computed: true, optional: false, required: false
    get bmCookieEnabled() {
        return this.getBooleanAttribute('bm_cookie_enabled');
    }
    // cf_robots_variant - computed: true, optional: false, required: false
    get cfRobotsVariant() {
        return this.getStringAttribute('cf_robots_variant');
    }
    // content_bots_protection - computed: true, optional: false, required: false
    get contentBotsProtection() {
        return this.getStringAttribute('content_bots_protection');
    }
    // crawler_protection - computed: true, optional: false, required: false
    get crawlerProtection() {
        return this.getStringAttribute('crawler_protection');
    }
    // enable_js - computed: true, optional: false, required: false
    get enableJs() {
        return this.getBooleanAttribute('enable_js');
    }
    // fight_mode - computed: true, optional: false, required: false
    get fightMode() {
        return this.getBooleanAttribute('fight_mode');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // is_robots_txt_managed - computed: true, optional: false, required: false
    get isRobotsTxtManaged() {
        return this.getBooleanAttribute('is_robots_txt_managed');
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
        return this.getBooleanAttribute('sbfm_static_resource_protection');
    }
    // sbfm_verified_bots - computed: true, optional: false, required: false
    get sbfmVerifiedBots() {
        return this.getStringAttribute('sbfm_verified_bots');
    }
    // stale_zone_configuration - computed: true, optional: false, required: false
    _staleZoneConfiguration = new DataCloudflareBotManagementStaleZoneConfigurationOutputReference(this, "stale_zone_configuration");
    get staleZoneConfiguration() {
        return this._staleZoneConfiguration;
    }
    // suppress_session_score - computed: true, optional: false, required: false
    get suppressSessionScore() {
        return this.getBooleanAttribute('suppress_session_score');
    }
    // using_latest_model - computed: true, optional: false, required: false
    get usingLatestModel() {
        return this.getBooleanAttribute('using_latest_model');
    }
    // zone_id - computed: false, optional: true, required: false
    _zoneId;
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    set zoneId(value) {
        this._zoneId = value;
    }
    resetZoneId() {
        this._zoneId = undefined;
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
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
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
