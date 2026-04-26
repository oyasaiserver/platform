// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_rule
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule}
*/
export class DataCloudflareMagicNetworkMonitoringRule extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_magic_network_monitoring_rule";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicNetworkMonitoringRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicNetworkMonitoringRule to import
    * @param importFromId The id of the existing DataCloudflareMagicNetworkMonitoringRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicNetworkMonitoringRule to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_network_monitoring_rule", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicNetworkMonitoringRuleConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_magic_network_monitoring_rule',
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
        this._ruleId = config.ruleId;
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
    // automatic_advertisement - computed: true, optional: false, required: false
    get automaticAdvertisement() {
        return this.getBooleanAttribute('automatic_advertisement');
    }
    // bandwidth_threshold - computed: true, optional: false, required: false
    get bandwidthThreshold() {
        return this.getNumberAttribute('bandwidth_threshold');
    }
    // duration - computed: true, optional: false, required: false
    get duration() {
        return this.getStringAttribute('duration');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // packet_threshold - computed: true, optional: false, required: false
    get packetThreshold() {
        return this.getNumberAttribute('packet_threshold');
    }
    // prefix_match - computed: true, optional: false, required: false
    get prefixMatch() {
        return this.getStringAttribute('prefix_match');
    }
    // prefixes - computed: true, optional: false, required: false
    get prefixes() {
        return this.getListAttribute('prefixes');
    }
    // rule_id - computed: false, optional: false, required: true
    _ruleId;
    get ruleId() {
        return this.getStringAttribute('rule_id');
    }
    set ruleId(value) {
        this._ruleId = value;
    }
    // Temporarily expose input value. Use with caution.
    get ruleIdInput() {
        return this._ruleId;
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
    // zscore_sensitivity - computed: true, optional: false, required: false
    get zscoreSensitivity() {
        return this.getStringAttribute('zscore_sensitivity');
    }
    // zscore_target - computed: true, optional: false, required: false
    get zscoreTarget() {
        return this.getStringAttribute('zscore_target');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            rule_id: cdktf.stringToTerraform(this._ruleId),
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
            rule_id: {
                value: cdktf.stringToHclTerraform(this._ruleId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
