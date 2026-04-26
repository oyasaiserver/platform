"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_settings
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZeroTrustDeviceSettings = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_settings cloudflare_zero_trust_device_settings}
*/
var ZeroTrustDeviceSettings = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceSettings, _super);
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
    function ZeroTrustDeviceSettings(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
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
        }) || this;
        _this._accountId = config.accountId;
        _this._disableForTime = config.disableForTime;
        _this._externalEmergencySignalEnabled = config.externalEmergencySignalEnabled;
        _this._externalEmergencySignalFingerprint = config.externalEmergencySignalFingerprint;
        _this._externalEmergencySignalInterval = config.externalEmergencySignalInterval;
        _this._externalEmergencySignalUrl = config.externalEmergencySignalUrl;
        _this._gatewayProxyEnabled = config.gatewayProxyEnabled;
        _this._gatewayUdpProxyEnabled = config.gatewayUdpProxyEnabled;
        _this._rootCertificateInstallationEnabled = config.rootCertificateInstallationEnabled;
        _this._useZtVirtualIp = config.useZtVirtualIp;
        return _this;
    }
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
    ZeroTrustDeviceSettings.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_settings", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustDeviceSettings.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceSettings.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceSettings.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceSettings.prototype, "disableForTime", {
        get: function () {
            return this.getNumberAttribute('disable_for_time');
        },
        set: function (value) {
            this._disableForTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceSettings.prototype.resetDisableForTime = function () {
        this._disableForTime = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceSettings.prototype, "disableForTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableForTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceSettings.prototype, "externalEmergencySignalEnabled", {
        get: function () {
            return this.getBooleanAttribute('external_emergency_signal_enabled');
        },
        set: function (value) {
            this._externalEmergencySignalEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceSettings.prototype.resetExternalEmergencySignalEnabled = function () {
        this._externalEmergencySignalEnabled = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceSettings.prototype, "externalEmergencySignalEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._externalEmergencySignalEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceSettings.prototype, "externalEmergencySignalFingerprint", {
        get: function () {
            return this.getStringAttribute('external_emergency_signal_fingerprint');
        },
        set: function (value) {
            this._externalEmergencySignalFingerprint = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceSettings.prototype.resetExternalEmergencySignalFingerprint = function () {
        this._externalEmergencySignalFingerprint = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceSettings.prototype, "externalEmergencySignalFingerprintInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._externalEmergencySignalFingerprint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceSettings.prototype, "externalEmergencySignalInterval", {
        get: function () {
            return this.getStringAttribute('external_emergency_signal_interval');
        },
        set: function (value) {
            this._externalEmergencySignalInterval = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceSettings.prototype.resetExternalEmergencySignalInterval = function () {
        this._externalEmergencySignalInterval = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceSettings.prototype, "externalEmergencySignalIntervalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._externalEmergencySignalInterval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceSettings.prototype, "externalEmergencySignalUrl", {
        get: function () {
            return this.getStringAttribute('external_emergency_signal_url');
        },
        set: function (value) {
            this._externalEmergencySignalUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceSettings.prototype.resetExternalEmergencySignalUrl = function () {
        this._externalEmergencySignalUrl = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceSettings.prototype, "externalEmergencySignalUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._externalEmergencySignalUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceSettings.prototype, "gatewayProxyEnabled", {
        get: function () {
            return this.getBooleanAttribute('gateway_proxy_enabled');
        },
        set: function (value) {
            this._gatewayProxyEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceSettings.prototype.resetGatewayProxyEnabled = function () {
        this._gatewayProxyEnabled = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceSettings.prototype, "gatewayProxyEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gatewayProxyEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceSettings.prototype, "gatewayUdpProxyEnabled", {
        get: function () {
            return this.getBooleanAttribute('gateway_udp_proxy_enabled');
        },
        set: function (value) {
            this._gatewayUdpProxyEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceSettings.prototype.resetGatewayUdpProxyEnabled = function () {
        this._gatewayUdpProxyEnabled = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceSettings.prototype, "gatewayUdpProxyEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gatewayUdpProxyEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceSettings.prototype, "rootCertificateInstallationEnabled", {
        get: function () {
            return this.getBooleanAttribute('root_certificate_installation_enabled');
        },
        set: function (value) {
            this._rootCertificateInstallationEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceSettings.prototype.resetRootCertificateInstallationEnabled = function () {
        this._rootCertificateInstallationEnabled = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceSettings.prototype, "rootCertificateInstallationEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rootCertificateInstallationEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceSettings.prototype, "useZtVirtualIp", {
        get: function () {
            return this.getBooleanAttribute('use_zt_virtual_ip');
        },
        set: function (value) {
            this._useZtVirtualIp = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceSettings.prototype.resetUseZtVirtualIp = function () {
        this._useZtVirtualIp = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceSettings.prototype, "useZtVirtualIpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._useZtVirtualIp;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustDeviceSettings.prototype.synthesizeAttributes = function () {
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
    };
    ZeroTrustDeviceSettings.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ZeroTrustDeviceSettings.tfResourceType = "cloudflare_zero_trust_device_settings";
    return ZeroTrustDeviceSettings;
}(cdktf.TerraformResource));
exports.ZeroTrustDeviceSettings = ZeroTrustDeviceSettings;
