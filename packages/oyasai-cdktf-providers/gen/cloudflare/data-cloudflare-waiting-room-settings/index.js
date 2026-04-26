"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_settings
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
exports.DataCloudflareWaitingRoomSettings = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_settings cloudflare_waiting_room_settings}
*/
var DataCloudflareWaitingRoomSettings = /** @class */ (function (_super) {
    __extends(DataCloudflareWaitingRoomSettings, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_settings cloudflare_waiting_room_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWaitingRoomSettingsConfig = {}
    */
    function DataCloudflareWaitingRoomSettings(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_waiting_room_settings',
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
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareWaitingRoomSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWaitingRoomSettings to import
    * @param importFromId The id of the existing DataCloudflareWaitingRoomSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWaitingRoomSettings to import is found
    */
    DataCloudflareWaitingRoomSettings.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_waiting_room_settings", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareWaitingRoomSettings.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomSettings.prototype, "searchEngineCrawlerBypass", {
        // search_engine_crawler_bypass - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('search_engine_crawler_bypass');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomSettings.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWaitingRoomSettings.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareWaitingRoomSettings.prototype, "zoneIdInput", {
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
    DataCloudflareWaitingRoomSettings.prototype.synthesizeAttributes = function () {
        return {
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareWaitingRoomSettings.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
    DataCloudflareWaitingRoomSettings.tfResourceType = "cloudflare_waiting_room_settings";
    return DataCloudflareWaitingRoomSettings;
}(cdktf.TerraformDataSource));
exports.DataCloudflareWaitingRoomSettings = DataCloudflareWaitingRoomSettings;
