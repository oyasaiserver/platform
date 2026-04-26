"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_mtls_hostname_settings
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
exports.ZeroTrustAccessMtlsHostnameSettings = exports.ZeroTrustAccessMtlsHostnameSettingsSettingsList = exports.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference = void 0;
exports.zeroTrustAccessMtlsHostnameSettingsSettingsToTerraform = zeroTrustAccessMtlsHostnameSettingsSettingsToTerraform;
exports.zeroTrustAccessMtlsHostnameSettingsSettingsToHclTerraform = zeroTrustAccessMtlsHostnameSettingsSettingsToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustAccessMtlsHostnameSettingsSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        china_network: cdktf.booleanToTerraform(struct.chinaNetwork),
        client_certificate_forwarding: cdktf.booleanToTerraform(struct.clientCertificateForwarding),
        hostname: cdktf.stringToTerraform(struct.hostname),
    };
}
function zeroTrustAccessMtlsHostnameSettingsSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        china_network: {
            value: cdktf.booleanToHclTerraform(struct.chinaNetwork),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        client_certificate_forwarding: {
            value: cdktf.booleanToHclTerraform(struct.clientCertificateForwarding),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        hostname: {
            value: cdktf.stringToHclTerraform(struct.hostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._chinaNetwork !== undefined) {
                hasAnyValues = true;
                internalValueResult.chinaNetwork = this._chinaNetwork;
            }
            if (this._clientCertificateForwarding !== undefined) {
                hasAnyValues = true;
                internalValueResult.clientCertificateForwarding = this._clientCertificateForwarding;
            }
            if (this._hostname !== undefined) {
                hasAnyValues = true;
                internalValueResult.hostname = this._hostname;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._chinaNetwork = undefined;
                this._clientCertificateForwarding = undefined;
                this._hostname = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._chinaNetwork = value.chinaNetwork;
                this._clientCertificateForwarding = value.clientCertificateForwarding;
                this._hostname = value.hostname;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.prototype, "chinaNetwork", {
        get: function () {
            return this.getBooleanAttribute('china_network');
        },
        set: function (value) {
            this._chinaNetwork = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.prototype, "chinaNetworkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._chinaNetwork;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.prototype, "clientCertificateForwarding", {
        get: function () {
            return this.getBooleanAttribute('client_certificate_forwarding');
        },
        set: function (value) {
            this._clientCertificateForwarding = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.prototype, "clientCertificateForwardingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientCertificateForwarding;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.prototype, "hostname", {
        get: function () {
            return this.getStringAttribute('hostname');
        },
        set: function (value) {
            this._hostname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference = ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference;
var ZeroTrustAccessMtlsHostnameSettingsSettingsList = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessMtlsHostnameSettingsSettingsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessMtlsHostnameSettingsSettingsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustAccessMtlsHostnameSettingsSettingsList.prototype.get = function (index) {
        return new ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustAccessMtlsHostnameSettingsSettingsList;
}(cdktf.ComplexList));
exports.ZeroTrustAccessMtlsHostnameSettingsSettingsList = ZeroTrustAccessMtlsHostnameSettingsSettingsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_mtls_hostname_settings cloudflare_zero_trust_access_mtls_hostname_settings}
*/
var ZeroTrustAccessMtlsHostnameSettings = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessMtlsHostnameSettings, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_mtls_hostname_settings cloudflare_zero_trust_access_mtls_hostname_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessMtlsHostnameSettingsConfig
    */
    function ZeroTrustAccessMtlsHostnameSettings(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_access_mtls_hostname_settings',
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
        // settings - computed: false, optional: false, required: true
        _this._settings = new ZeroTrustAccessMtlsHostnameSettingsSettingsList(_this, "settings", false);
        _this._accountId = config.accountId;
        _this._settings.internalValue = config.settings;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessMtlsHostnameSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessMtlsHostnameSettings to import
    * @param importFromId The id of the existing ZeroTrustAccessMtlsHostnameSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_mtls_hostname_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessMtlsHostnameSettings to import is found
    */
    ZeroTrustAccessMtlsHostnameSettings.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_mtls_hostname_settings", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustAccessMtlsHostnameSettings.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessMtlsHostnameSettings.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustAccessMtlsHostnameSettings.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessMtlsHostnameSettings.prototype, "chinaNetwork", {
        // china_network - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('china_network');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessMtlsHostnameSettings.prototype, "clientCertificateForwarding", {
        // client_certificate_forwarding - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('client_certificate_forwarding');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessMtlsHostnameSettings.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessMtlsHostnameSettings.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessMtlsHostnameSettings.prototype.putSettings = function (value) {
        this._settings.internalValue = value;
    };
    Object.defineProperty(ZeroTrustAccessMtlsHostnameSettings.prototype, "settingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._settings.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessMtlsHostnameSettings.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessMtlsHostnameSettings.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(ZeroTrustAccessMtlsHostnameSettings.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustAccessMtlsHostnameSettings.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            settings: cdktf.listMapper(zeroTrustAccessMtlsHostnameSettingsSettingsToTerraform, false)(this._settings.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    ZeroTrustAccessMtlsHostnameSettings.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            settings: {
                value: cdktf.listMapperHcl(zeroTrustAccessMtlsHostnameSettingsSettingsToHclTerraform, false)(this._settings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustAccessMtlsHostnameSettingsSettingsList",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
    ZeroTrustAccessMtlsHostnameSettings.tfResourceType = "cloudflare_zero_trust_access_mtls_hostname_settings";
    return ZeroTrustAccessMtlsHostnameSettings;
}(cdktf.TerraformResource));
exports.ZeroTrustAccessMtlsHostnameSettings = ZeroTrustAccessMtlsHostnameSettings;
