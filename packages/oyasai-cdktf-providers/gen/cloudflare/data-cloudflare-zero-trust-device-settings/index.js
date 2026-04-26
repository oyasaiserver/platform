// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_settings
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_settings cloudflare_zero_trust_device_settings}
*/
export class DataCloudflareZeroTrustDeviceSettings extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_device_settings";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDeviceSettings to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDeviceSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDeviceSettings to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_settings", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_settings cloudflare_zero_trust_device_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDeviceSettingsConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_device_settings',
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
    // disable_for_time - computed: true, optional: false, required: false
    get disableForTime() {
        return this.getNumberAttribute('disable_for_time');
    }
    // external_emergency_signal_enabled - computed: true, optional: false, required: false
    get externalEmergencySignalEnabled() {
        return this.getBooleanAttribute('external_emergency_signal_enabled');
    }
    // external_emergency_signal_fingerprint - computed: true, optional: false, required: false
    get externalEmergencySignalFingerprint() {
        return this.getStringAttribute('external_emergency_signal_fingerprint');
    }
    // external_emergency_signal_interval - computed: true, optional: false, required: false
    get externalEmergencySignalInterval() {
        return this.getStringAttribute('external_emergency_signal_interval');
    }
    // external_emergency_signal_url - computed: true, optional: false, required: false
    get externalEmergencySignalUrl() {
        return this.getStringAttribute('external_emergency_signal_url');
    }
    // gateway_proxy_enabled - computed: true, optional: false, required: false
    get gatewayProxyEnabled() {
        return this.getBooleanAttribute('gateway_proxy_enabled');
    }
    // gateway_udp_proxy_enabled - computed: true, optional: false, required: false
    get gatewayUdpProxyEnabled() {
        return this.getBooleanAttribute('gateway_udp_proxy_enabled');
    }
    // root_certificate_installation_enabled - computed: true, optional: false, required: false
    get rootCertificateInstallationEnabled() {
        return this.getBooleanAttribute('root_certificate_installation_enabled');
    }
    // use_zt_virtual_ip - computed: true, optional: false, required: false
    get useZtVirtualIp() {
        return this.getBooleanAttribute('use_zt_virtual_ip');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
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
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
