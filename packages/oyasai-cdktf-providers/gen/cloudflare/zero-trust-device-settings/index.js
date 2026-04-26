// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_settings
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_settings cloudflare_zero_trust_device_settings}
*/
export class ZeroTrustDeviceSettings extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_device_settings";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustDeviceSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDeviceSettings to import
    * @param importFromId The id of the existing ZeroTrustDeviceSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDeviceSettings to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_settings", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_settings cloudflare_zero_trust_device_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDeviceSettingsConfig = {}
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
        this._disableForTime = config.disableForTime;
        this._externalEmergencySignalEnabled = config.externalEmergencySignalEnabled;
        this._externalEmergencySignalFingerprint = config.externalEmergencySignalFingerprint;
        this._externalEmergencySignalInterval = config.externalEmergencySignalInterval;
        this._externalEmergencySignalUrl = config.externalEmergencySignalUrl;
        this._gatewayProxyEnabled = config.gatewayProxyEnabled;
        this._gatewayUdpProxyEnabled = config.gatewayUdpProxyEnabled;
        this._rootCertificateInstallationEnabled = config.rootCertificateInstallationEnabled;
        this._useZtVirtualIp = config.useZtVirtualIp;
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
    // disable_for_time - computed: false, optional: true, required: false
    _disableForTime;
    get disableForTime() {
        return this.getNumberAttribute('disable_for_time');
    }
    set disableForTime(value) {
        this._disableForTime = value;
    }
    resetDisableForTime() {
        this._disableForTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disableForTimeInput() {
        return this._disableForTime;
    }
    // external_emergency_signal_enabled - computed: false, optional: true, required: false
    _externalEmergencySignalEnabled;
    get externalEmergencySignalEnabled() {
        return this.getBooleanAttribute('external_emergency_signal_enabled');
    }
    set externalEmergencySignalEnabled(value) {
        this._externalEmergencySignalEnabled = value;
    }
    resetExternalEmergencySignalEnabled() {
        this._externalEmergencySignalEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get externalEmergencySignalEnabledInput() {
        return this._externalEmergencySignalEnabled;
    }
    // external_emergency_signal_fingerprint - computed: false, optional: true, required: false
    _externalEmergencySignalFingerprint;
    get externalEmergencySignalFingerprint() {
        return this.getStringAttribute('external_emergency_signal_fingerprint');
    }
    set externalEmergencySignalFingerprint(value) {
        this._externalEmergencySignalFingerprint = value;
    }
    resetExternalEmergencySignalFingerprint() {
        this._externalEmergencySignalFingerprint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get externalEmergencySignalFingerprintInput() {
        return this._externalEmergencySignalFingerprint;
    }
    // external_emergency_signal_interval - computed: false, optional: true, required: false
    _externalEmergencySignalInterval;
    get externalEmergencySignalInterval() {
        return this.getStringAttribute('external_emergency_signal_interval');
    }
    set externalEmergencySignalInterval(value) {
        this._externalEmergencySignalInterval = value;
    }
    resetExternalEmergencySignalInterval() {
        this._externalEmergencySignalInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get externalEmergencySignalIntervalInput() {
        return this._externalEmergencySignalInterval;
    }
    // external_emergency_signal_url - computed: false, optional: true, required: false
    _externalEmergencySignalUrl;
    get externalEmergencySignalUrl() {
        return this.getStringAttribute('external_emergency_signal_url');
    }
    set externalEmergencySignalUrl(value) {
        this._externalEmergencySignalUrl = value;
    }
    resetExternalEmergencySignalUrl() {
        this._externalEmergencySignalUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get externalEmergencySignalUrlInput() {
        return this._externalEmergencySignalUrl;
    }
    // gateway_proxy_enabled - computed: false, optional: true, required: false
    _gatewayProxyEnabled;
    get gatewayProxyEnabled() {
        return this.getBooleanAttribute('gateway_proxy_enabled');
    }
    set gatewayProxyEnabled(value) {
        this._gatewayProxyEnabled = value;
    }
    resetGatewayProxyEnabled() {
        this._gatewayProxyEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayProxyEnabledInput() {
        return this._gatewayProxyEnabled;
    }
    // gateway_udp_proxy_enabled - computed: false, optional: true, required: false
    _gatewayUdpProxyEnabled;
    get gatewayUdpProxyEnabled() {
        return this.getBooleanAttribute('gateway_udp_proxy_enabled');
    }
    set gatewayUdpProxyEnabled(value) {
        this._gatewayUdpProxyEnabled = value;
    }
    resetGatewayUdpProxyEnabled() {
        this._gatewayUdpProxyEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gatewayUdpProxyEnabledInput() {
        return this._gatewayUdpProxyEnabled;
    }
    // root_certificate_installation_enabled - computed: false, optional: true, required: false
    _rootCertificateInstallationEnabled;
    get rootCertificateInstallationEnabled() {
        return this.getBooleanAttribute('root_certificate_installation_enabled');
    }
    set rootCertificateInstallationEnabled(value) {
        this._rootCertificateInstallationEnabled = value;
    }
    resetRootCertificateInstallationEnabled() {
        this._rootCertificateInstallationEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rootCertificateInstallationEnabledInput() {
        return this._rootCertificateInstallationEnabled;
    }
    // use_zt_virtual_ip - computed: false, optional: true, required: false
    _useZtVirtualIp;
    get useZtVirtualIp() {
        return this.getBooleanAttribute('use_zt_virtual_ip');
    }
    set useZtVirtualIp(value) {
        this._useZtVirtualIp = value;
    }
    resetUseZtVirtualIp() {
        this._useZtVirtualIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get useZtVirtualIpInput() {
        return this._useZtVirtualIp;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            disable_for_time: cdktf.numberToTerraform(this._disableForTime),
            external_emergency_signal_enabled: cdktf.booleanToTerraform(this._externalEmergencySignalEnabled),
            external_emergency_signal_fingerprint: cdktf.stringToTerraform(this._externalEmergencySignalFingerprint),
            external_emergency_signal_interval: cdktf.stringToTerraform(this._externalEmergencySignalInterval),
            external_emergency_signal_url: cdktf.stringToTerraform(this._externalEmergencySignalUrl),
            gateway_proxy_enabled: cdktf.booleanToTerraform(this._gatewayProxyEnabled),
            gateway_udp_proxy_enabled: cdktf.booleanToTerraform(this._gatewayUdpProxyEnabled),
            root_certificate_installation_enabled: cdktf.booleanToTerraform(this._rootCertificateInstallationEnabled),
            use_zt_virtual_ip: cdktf.booleanToTerraform(this._useZtVirtualIp),
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
            disable_for_time: {
                value: cdktf.numberToHclTerraform(this._disableForTime),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            external_emergency_signal_enabled: {
                value: cdktf.booleanToHclTerraform(this._externalEmergencySignalEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            external_emergency_signal_fingerprint: {
                value: cdktf.stringToHclTerraform(this._externalEmergencySignalFingerprint),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            external_emergency_signal_interval: {
                value: cdktf.stringToHclTerraform(this._externalEmergencySignalInterval),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            external_emergency_signal_url: {
                value: cdktf.stringToHclTerraform(this._externalEmergencySignalUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            gateway_proxy_enabled: {
                value: cdktf.booleanToHclTerraform(this._gatewayProxyEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            gateway_udp_proxy_enabled: {
                value: cdktf.booleanToHclTerraform(this._gatewayUdpProxyEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            root_certificate_installation_enabled: {
                value: cdktf.booleanToHclTerraform(this._rootCertificateInstallationEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            use_zt_virtual_ip: {
                value: cdktf.booleanToHclTerraform(this._useZtVirtualIp),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
