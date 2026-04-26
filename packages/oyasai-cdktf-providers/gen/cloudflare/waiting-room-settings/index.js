"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_settings
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
exports.WaitingRoomSettings = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_settings cloudflare_waiting_room_settings}
*/
var WaitingRoomSettings = /** @class */ (function (_super) {
    __extends(WaitingRoomSettings, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_settings cloudflare_waiting_room_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WaitingRoomSettingsConfig
    */
    function WaitingRoomSettings(scope, id, config) {
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
        _this._searchEngineCrawlerBypass = config.searchEngineCrawlerBypass;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a WaitingRoomSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WaitingRoomSettings to import
    * @param importFromId The id of the existing WaitingRoomSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WaitingRoomSettings to import is found
    */
    WaitingRoomSettings.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_waiting_room_settings", importId: importFromId, provider: provider });
    };
    Object.defineProperty(WaitingRoomSettings.prototype, "id", {
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
    Object.defineProperty(WaitingRoomSettings.prototype, "searchEngineCrawlerBypass", {
        get: function () {
            return this.getBooleanAttribute('search_engine_crawler_bypass');
        },
        set: function (value) {
            this._searchEngineCrawlerBypass = value;
        },
        enumerable: false,
        configurable: true
    });
    WaitingRoomSettings.prototype.resetSearchEngineCrawlerBypass = function () {
        this._searchEngineCrawlerBypass = undefined;
    };
    Object.defineProperty(WaitingRoomSettings.prototype, "searchEngineCrawlerBypassInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._searchEngineCrawlerBypass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomSettings.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WaitingRoomSettings.prototype, "zoneIdInput", {
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
    WaitingRoomSettings.prototype.synthesizeAttributes = function () {
        return {
            search_engine_crawler_bypass: cdktf.booleanToTerraform(this._searchEngineCrawlerBypass),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    WaitingRoomSettings.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            search_engine_crawler_bypass: {
                value: cdktf.booleanToHclTerraform(this._searchEngineCrawlerBypass),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
    WaitingRoomSettings.tfResourceType = "cloudflare_waiting_room_settings";
    return WaitingRoomSettings;
}(cdktf.TerraformResource));
exports.WaitingRoomSettings = WaitingRoomSettings;
