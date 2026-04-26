// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_site
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function webAnalyticsSiteRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function webAnalyticsSiteRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class WebAnalyticsSiteRulesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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
    // created - computed: true, optional: false, required: false
    get created() {
        return this.getStringAttribute('created');
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // inclusive - computed: true, optional: false, required: false
    get inclusive() {
        return this.getBooleanAttribute('inclusive');
    }
    // is_paused - computed: true, optional: false, required: false
    get isPaused() {
        return this.getBooleanAttribute('is_paused');
    }
    // paths - computed: true, optional: false, required: false
    get paths() {
        return this.getListAttribute('paths');
    }
    // priority - computed: true, optional: false, required: false
    get priority() {
        return this.getNumberAttribute('priority');
    }
}
export class WebAnalyticsSiteRulesList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new WebAnalyticsSiteRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function webAnalyticsSiteRulesetToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function webAnalyticsSiteRulesetToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class WebAnalyticsSiteRulesetOutputReference extends cdktf.ComplexObject {
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
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // zone_name - computed: true, optional: false, required: false
    get zoneName() {
        return this.getStringAttribute('zone_name');
    }
    // zone_tag - computed: true, optional: false, required: false
    get zoneTag() {
        return this.getStringAttribute('zone_tag');
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_site cloudflare_web_analytics_site}
*/
export class WebAnalyticsSite extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_web_analytics_site";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a WebAnalyticsSite resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WebAnalyticsSite to import
    * @param importFromId The id of the existing WebAnalyticsSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_site#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WebAnalyticsSite to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_web_analytics_site", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_site cloudflare_web_analytics_site} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WebAnalyticsSiteConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_web_analytics_site',
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
        this._accountId = config.accountId;
        this._autoInstall = config.autoInstall;
        this._enabled = config.enabled;
        this._host = config.host;
        this._lite = config.lite;
        this._zoneTag = config.zoneTag;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: true, required: false
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // auto_install - computed: false, optional: true, required: false
    _autoInstall;
    get autoInstall() {
        return this.getBooleanAttribute('auto_install');
    }
    set autoInstall(value) {
        this._autoInstall = value;
    }
    resetAutoInstall() {
        this._autoInstall = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoInstallInput() {
        return this._autoInstall;
    }
    // created - computed: true, optional: false, required: false
    get created() {
        return this.getStringAttribute('created');
    }
    // enabled - computed: false, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // host - computed: false, optional: true, required: false
    _host;
    get host() {
        return this.getStringAttribute('host');
    }
    set host(value) {
        this._host = value;
    }
    resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // lite - computed: false, optional: true, required: false
    _lite;
    get lite() {
        return this.getBooleanAttribute('lite');
    }
    set lite(value) {
        this._lite = value;
    }
    resetLite() {
        this._lite = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get liteInput() {
        return this._lite;
    }
    // rules - computed: true, optional: false, required: false
    _rules = new WebAnalyticsSiteRulesList(this, "rules", false);
    get rules() {
        return this._rules;
    }
    // ruleset - computed: true, optional: false, required: false
    _ruleset = new WebAnalyticsSiteRulesetOutputReference(this, "ruleset");
    get ruleset() {
        return this._ruleset;
    }
    // site_tag - computed: true, optional: false, required: false
    get siteTag() {
        return this.getStringAttribute('site_tag');
    }
    // site_token - computed: true, optional: false, required: false
    get siteToken() {
        return this.getStringAttribute('site_token');
    }
    // snippet - computed: true, optional: false, required: false
    get snippet() {
        return this.getStringAttribute('snippet');
    }
    // zone_tag - computed: false, optional: true, required: false
    _zoneTag;
    get zoneTag() {
        return this.getStringAttribute('zone_tag');
    }
    set zoneTag(value) {
        this._zoneTag = value;
    }
    resetZoneTag() {
        this._zoneTag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zoneTagInput() {
        return this._zoneTag;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            auto_install: cdktf.booleanToTerraform(this._autoInstall),
            enabled: cdktf.booleanToTerraform(this._enabled),
            host: cdktf.stringToTerraform(this._host),
            lite: cdktf.booleanToTerraform(this._lite),
            zone_tag: cdktf.stringToTerraform(this._zoneTag),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auto_install: {
                value: cdktf.booleanToHclTerraform(this._autoInstall),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            host: {
                value: cdktf.stringToHclTerraform(this._host),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            lite: {
                value: cdktf.booleanToHclTerraform(this._lite),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            zone_tag: {
                value: cdktf.stringToHclTerraform(this._zoneTag),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
