"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_setting
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
exports.DataCloudflareZoneSetting = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_setting cloudflare_zone_setting}
*/
var DataCloudflareZoneSetting = /** @class */ (function (_super) {
    __extends(DataCloudflareZoneSetting, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_setting cloudflare_zone_setting} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZoneSettingConfig
    */
    function DataCloudflareZoneSetting(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zone_setting',
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
        _this._settingId = config.settingId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZoneSetting resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZoneSetting to import
    * @param importFromId The id of the existing DataCloudflareZoneSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_setting#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZoneSetting to import is found
    */
    DataCloudflareZoneSetting.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zone_setting", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZoneSetting.prototype, "editable", {
        // ==========
        // ATTRIBUTES
        // ==========
        // editable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('editable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneSetting.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneSetting.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneSetting.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneSetting.prototype, "settingId", {
        get: function () {
            return this.getStringAttribute('setting_id');
        },
        set: function (value) {
            this._settingId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneSetting.prototype, "settingIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._settingId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneSetting.prototype, "timeRemaining", {
        // time_remaining - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('time_remaining');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneSetting.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZoneSetting.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZoneSetting.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareZoneSetting.prototype, "zoneIdInput", {
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
    DataCloudflareZoneSetting.prototype.synthesizeAttributes = function () {
        return {
            setting_id: cdktf.stringToTerraform(this._settingId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareZoneSetting.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            setting_id: {
                value: cdktf.stringToHclTerraform(this._settingId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
    DataCloudflareZoneSetting.tfResourceType = "cloudflare_zone_setting";
    return DataCloudflareZoneSetting;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZoneSetting = DataCloudflareZoneSetting;
