"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_event
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
exports.DataCloudflareWaitingRoomEvent = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_event cloudflare_waiting_room_event}
*/
var DataCloudflareWaitingRoomEvent = /** @class */ (function (_super) {
    __extends(DataCloudflareWaitingRoomEvent, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_event cloudflare_waiting_room_event} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWaitingRoomEventConfig
    */
    function DataCloudflareWaitingRoomEvent(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_waiting_room_event',
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
        _this._eventId = config.eventId;
        _this._waitingRoomId = config.waitingRoomId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareWaitingRoomEvent resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWaitingRoomEvent to import
    * @param importFromId The id of the existing DataCloudflareWaitingRoomEvent that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_event#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWaitingRoomEvent to import is found
    */
    DataCloudflareWaitingRoomEvent.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_waiting_room_event", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareWaitingRoomEvent.prototype, "createdOn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvent.prototype, "customPageHtml", {
        // custom_page_html - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('custom_page_html');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvent.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvent.prototype, "disableSessionRenewal", {
        // disable_session_renewal - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disable_session_renewal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvent.prototype, "eventEndTime", {
        // event_end_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('event_end_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvent.prototype, "eventId", {
        get: function () {
            return this.getStringAttribute('event_id');
        },
        set: function (value) {
            this._eventId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvent.prototype, "eventIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._eventId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvent.prototype, "eventStartTime", {
        // event_start_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('event_start_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvent.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvent.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvent.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvent.prototype, "newUsersPerMinute", {
        // new_users_per_minute - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('new_users_per_minute');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvent.prototype, "prequeueStartTime", {
        // prequeue_start_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prequeue_start_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvent.prototype, "queueingMethod", {
        // queueing_method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queueing_method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvent.prototype, "sessionDuration", {
        // session_duration - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('session_duration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvent.prototype, "shuffleAtEventStart", {
        // shuffle_at_event_start - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('shuffle_at_event_start');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvent.prototype, "suspended", {
        // suspended - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('suspended');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvent.prototype, "totalActiveUsers", {
        // total_active_users - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('total_active_users');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvent.prototype, "turnstileAction", {
        // turnstile_action - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('turnstile_action');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvent.prototype, "turnstileMode", {
        // turnstile_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('turnstile_mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvent.prototype, "waitingRoomId", {
        get: function () {
            return this.getStringAttribute('waiting_room_id');
        },
        set: function (value) {
            this._waitingRoomId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvent.prototype, "waitingRoomIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._waitingRoomId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWaitingRoomEvent.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWaitingRoomEvent.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareWaitingRoomEvent.prototype, "zoneIdInput", {
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
    DataCloudflareWaitingRoomEvent.prototype.synthesizeAttributes = function () {
        return {
            event_id: cdktf.stringToTerraform(this._eventId),
            waiting_room_id: cdktf.stringToTerraform(this._waitingRoomId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareWaitingRoomEvent.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            event_id: {
                value: cdktf.stringToHclTerraform(this._eventId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
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
    DataCloudflareWaitingRoomEvent.tfResourceType = "cloudflare_waiting_room_event";
    return DataCloudflareWaitingRoomEvent;
}(cdktf.TerraformDataSource));
exports.DataCloudflareWaitingRoomEvent = DataCloudflareWaitingRoomEvent;
