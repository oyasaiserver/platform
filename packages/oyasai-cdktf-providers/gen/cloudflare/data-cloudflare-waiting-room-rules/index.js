"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_rules
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
exports.DataCloudflareWaitingRoomRules = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_rules cloudflare_waiting_room_rules}
*/
var DataCloudflareWaitingRoomRules = /** @class */ (function (_super) {
    __extends(DataCloudflareWaitingRoomRules, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_rules cloudflare_waiting_room_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWaitingRoomRulesConfig
    */
    function DataCloudflareWaitingRoomRules(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_waiting_room_rules',
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
        _this._waitingRoomId = config.waitingRoomId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareWaitingRoomRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWaitingRoomRules to import
    * @param importFromId The id of the existing DataCloudflareWaitingRoomRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWaitingRoomRules to import is found
    */
    DataCloudflareWaitingRoomRules.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_waiting_room_rules", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareWaitingRoomRules.prototype, "action", {
        // ==========
        // ATTRIBUTES
        // ==========
        // action - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('action');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomRules.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomRules.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomRules.prototype, "expression", {
        // expression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomRules.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomRules.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomRules.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomRules.prototype, "waitingRoomId", {
        get: function () {
            return this.getStringAttribute('waiting_room_id');
        },
        set: function (value) {
            this._waitingRoomId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomRules.prototype, "waitingRoomIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._waitingRoomId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomRules.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWaitingRoomRules.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareWaitingRoomRules.prototype, "zoneIdInput", {
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
    DataCloudflareWaitingRoomRules.prototype.synthesizeAttributes = function () {
        return {
            waiting_room_id: cdktf.stringToTerraform(this._waitingRoomId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareWaitingRoomRules.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            waiting_room_id: {
                value: cdktf.stringToHclTerraform(this._waitingRoomId),
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
    DataCloudflareWaitingRoomRules.tfResourceType = "cloudflare_waiting_room_rules";
    return DataCloudflareWaitingRoomRules;
}(cdktf.TerraformDataSource));
exports.DataCloudflareWaitingRoomRules = DataCloudflareWaitingRoomRules;
