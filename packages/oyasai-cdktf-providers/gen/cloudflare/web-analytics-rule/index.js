// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_rule
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_rule cloudflare_web_analytics_rule}
*/
export class WebAnalyticsRule extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_web_analytics_rule";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a WebAnalyticsRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WebAnalyticsRule to import
    * @param importFromId The id of the existing WebAnalyticsRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WebAnalyticsRule to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_web_analytics_rule", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/web_analytics_rule cloudflare_web_analytics_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WebAnalyticsRuleConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_web_analytics_rule',
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
        this._host = config.host;
        this._inclusive = config.inclusive;
        this._isPaused = config.isPaused;
        this._paths = config.paths;
        this._rulesetId = config.rulesetId;
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
    // created - computed: true, optional: false, required: false
    get created() {
        return this.getStringAttribute('created');
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
    // inclusive - computed: false, optional: true, required: false
    _inclusive;
    get inclusive() {
        return this.getBooleanAttribute('inclusive');
    }
    set inclusive(value) {
        this._inclusive = value;
    }
    resetInclusive() {
        this._inclusive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get inclusiveInput() {
        return this._inclusive;
    }
    // is_paused - computed: false, optional: true, required: false
    _isPaused;
    get isPaused() {
        return this.getBooleanAttribute('is_paused');
    }
    set isPaused(value) {
        this._isPaused = value;
    }
    resetIsPaused() {
        this._isPaused = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get isPausedInput() {
        return this._isPaused;
    }
    // paths - computed: false, optional: true, required: false
    _paths;
    get paths() {
        return this.getListAttribute('paths');
    }
    set paths(value) {
        this._paths = value;
    }
    resetPaths() {
        this._paths = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pathsInput() {
        return this._paths;
    }
    // priority - computed: true, optional: false, required: false
    get priority() {
        return this.getNumberAttribute('priority');
    }
    // ruleset_id - computed: false, optional: false, required: true
    _rulesetId;
    get rulesetId() {
        return this.getStringAttribute('ruleset_id');
    }
    set rulesetId(value) {
        this._rulesetId = value;
    }
    // Temporarily expose input value. Use with caution.
    get rulesetIdInput() {
        return this._rulesetId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            host: cdktf.stringToTerraform(this._host),
            inclusive: cdktf.booleanToTerraform(this._inclusive),
            is_paused: cdktf.booleanToTerraform(this._isPaused),
            paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._paths),
            ruleset_id: cdktf.stringToTerraform(this._rulesetId),
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
            host: {
                value: cdktf.stringToHclTerraform(this._host),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            inclusive: {
                value: cdktf.booleanToHclTerraform(this._inclusive),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            is_paused: {
                value: cdktf.booleanToHclTerraform(this._isPaused),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            paths: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._paths),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            ruleset_id: {
                value: cdktf.stringToHclTerraform(this._rulesetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
