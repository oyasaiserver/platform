// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_rule
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule}
*/
export class MagicNetworkMonitoringRule extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_magic_network_monitoring_rule";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a MagicNetworkMonitoringRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicNetworkMonitoringRule to import
    * @param importFromId The id of the existing MagicNetworkMonitoringRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicNetworkMonitoringRule to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_network_monitoring_rule", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicNetworkMonitoringRuleConfig
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
        this._automaticAdvertisement = config.automaticAdvertisement;
        this._bandwidthThreshold = config.bandwidthThreshold;
        this._duration = config.duration;
        this._name = config.name;
        this._packetThreshold = config.packetThreshold;
        this._prefixMatch = config.prefixMatch;
        this._prefixes = config.prefixes;
        this._type = config.type;
        this._zscoreSensitivity = config.zscoreSensitivity;
        this._zscoreTarget = config.zscoreTarget;
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
    // automatic_advertisement - computed: false, optional: false, required: true
    _automaticAdvertisement;
    get automaticAdvertisement() {
        return this.getBooleanAttribute('automatic_advertisement');
    }
    set automaticAdvertisement(value) {
        this._automaticAdvertisement = value;
    }
    // Temporarily expose input value. Use with caution.
    get automaticAdvertisementInput() {
        return this._automaticAdvertisement;
    }
    // bandwidth_threshold - computed: false, optional: true, required: false
    _bandwidthThreshold;
    get bandwidthThreshold() {
        return this.getNumberAttribute('bandwidth_threshold');
    }
    set bandwidthThreshold(value) {
        this._bandwidthThreshold = value;
    }
    resetBandwidthThreshold() {
        this._bandwidthThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bandwidthThresholdInput() {
        return this._bandwidthThreshold;
    }
    // duration - computed: true, optional: true, required: false
    _duration;
    get duration() {
        return this.getStringAttribute('duration');
    }
    set duration(value) {
        this._duration = value;
    }
    resetDuration() {
        this._duration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get durationInput() {
        return this._duration;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // packet_threshold - computed: false, optional: true, required: false
    _packetThreshold;
    get packetThreshold() {
        return this.getNumberAttribute('packet_threshold');
    }
    set packetThreshold(value) {
        this._packetThreshold = value;
    }
    resetPacketThreshold() {
        this._packetThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get packetThresholdInput() {
        return this._packetThreshold;
    }
    // prefix_match - computed: false, optional: true, required: false
    _prefixMatch;
    get prefixMatch() {
        return this.getStringAttribute('prefix_match');
    }
    set prefixMatch(value) {
        this._prefixMatch = value;
    }
    resetPrefixMatch() {
        this._prefixMatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get prefixMatchInput() {
        return this._prefixMatch;
    }
    // prefixes - computed: false, optional: false, required: true
    _prefixes;
    get prefixes() {
        return this.getListAttribute('prefixes');
    }
    set prefixes(value) {
        this._prefixes = value;
    }
    // Temporarily expose input value. Use with caution.
    get prefixesInput() {
        return this._prefixes;
    }
    // type - computed: false, optional: false, required: true
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // zscore_sensitivity - computed: false, optional: true, required: false
    _zscoreSensitivity;
    get zscoreSensitivity() {
        return this.getStringAttribute('zscore_sensitivity');
    }
    set zscoreSensitivity(value) {
        this._zscoreSensitivity = value;
    }
    resetZscoreSensitivity() {
        this._zscoreSensitivity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zscoreSensitivityInput() {
        return this._zscoreSensitivity;
    }
    // zscore_target - computed: false, optional: true, required: false
    _zscoreTarget;
    get zscoreTarget() {
        return this.getStringAttribute('zscore_target');
    }
    set zscoreTarget(value) {
        this._zscoreTarget = value;
    }
    resetZscoreTarget() {
        this._zscoreTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zscoreTargetInput() {
        return this._zscoreTarget;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            automatic_advertisement: cdktf.booleanToTerraform(this._automaticAdvertisement),
            bandwidth_threshold: cdktf.numberToTerraform(this._bandwidthThreshold),
            duration: cdktf.stringToTerraform(this._duration),
            name: cdktf.stringToTerraform(this._name),
            packet_threshold: cdktf.numberToTerraform(this._packetThreshold),
            prefix_match: cdktf.stringToTerraform(this._prefixMatch),
            prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prefixes),
            type: cdktf.stringToTerraform(this._type),
            zscore_sensitivity: cdktf.stringToTerraform(this._zscoreSensitivity),
            zscore_target: cdktf.stringToTerraform(this._zscoreTarget),
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
            automatic_advertisement: {
                value: cdktf.booleanToHclTerraform(this._automaticAdvertisement),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            bandwidth_threshold: {
                value: cdktf.numberToHclTerraform(this._bandwidthThreshold),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            duration: {
                value: cdktf.stringToHclTerraform(this._duration),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            packet_threshold: {
                value: cdktf.numberToHclTerraform(this._packetThreshold),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            prefix_match: {
                value: cdktf.stringToHclTerraform(this._prefixMatch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            prefixes: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prefixes),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zscore_sensitivity: {
                value: cdktf.stringToHclTerraform(this._zscoreSensitivity),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zscore_target: {
                value: cdktf.stringToHclTerraform(this._zscoreTarget),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
