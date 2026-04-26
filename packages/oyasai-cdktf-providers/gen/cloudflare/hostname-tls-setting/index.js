"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hostname_tls_setting
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
exports.HostnameTlsSetting = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hostname_tls_setting cloudflare_hostname_tls_setting}
*/
var HostnameTlsSetting = /** @class */ (function (_super) {
    __extends(HostnameTlsSetting, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hostname_tls_setting cloudflare_hostname_tls_setting} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options HostnameTlsSettingConfig
    */
    function HostnameTlsSetting(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_hostname_tls_setting',
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
        _this._hostname = config.hostname;
        _this._settingId = config.settingId;
        _this._value = config.value;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a HostnameTlsSetting resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the HostnameTlsSetting to import
    * @param importFromId The id of the existing HostnameTlsSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hostname_tls_setting#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the HostnameTlsSetting to import is found
    */
    HostnameTlsSetting.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_hostname_tls_setting", importId: importFromId, provider: provider });
    };
    Object.defineProperty(HostnameTlsSetting.prototype, "createdAt", {
        // ==========
        // ATTRIBUTES
        // ==========
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HostnameTlsSetting.prototype, "hostname", {
        get: function () {
            return this.getStringAttribute('hostname');
        },
        set: function (value) {
            this._hostname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HostnameTlsSetting.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HostnameTlsSetting.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HostnameTlsSetting.prototype, "settingId", {
        get: function () {
            return this.getStringAttribute('setting_id');
        },
        set: function (value) {
            this._settingId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HostnameTlsSetting.prototype, "settingIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._settingId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HostnameTlsSetting.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HostnameTlsSetting.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HostnameTlsSetting.prototype, "value", {
        get: function () {
            return this.getAnyMapAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HostnameTlsSetting.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HostnameTlsSetting.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    HostnameTlsSetting.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(HostnameTlsSetting.prototype, "zoneIdInput", {
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
    HostnameTlsSetting.prototype.synthesizeAttributes = function () {
        return {
            hostname: cdktf.stringToTerraform(this._hostname),
            setting_id: cdktf.stringToTerraform(this._settingId),
            value: cdktf.hashMapper(cdktf.anyToTerraform)(this._value),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    HostnameTlsSetting.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            hostname: {
                value: cdktf.stringToHclTerraform(this._hostname),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            setting_id: {
                value: cdktf.stringToHclTerraform(this._settingId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            value: {
                value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._value),
                isBlock: false,
                type: "map",
                storageClassType: "anyMap",
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
    HostnameTlsSetting.tfResourceType = "cloudflare_hostname_tls_setting";
    return HostnameTlsSetting;
}(cdktf.TerraformResource));
exports.HostnameTlsSetting = HostnameTlsSetting;
